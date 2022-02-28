package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;

/**
* @file: PCM04300ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04300ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class PCM04300ServiceImpl extends AbstractNbdfService implements PCM04300Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM04300Dao";	
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACE1   = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired 
    private PCMWipService wipService;
    
    /**
     * @fn
     * @brief : 제공 조회
     * @remark 
     * @see smh.pcm.service.PCM04300Service#selectWIPList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWIPList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
        
		if (param.get("LOTID") != null) {
			String[] splitLotID = param.get("LOTID").toString().split(",");
			param.put("LOTID", splitLotID);
		}

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPList", param));
    }

    /**
     * @fn
     * @brief : 대상 공정 조회
     * @remark 
     * @see smh.pcm.service.PCM04300Service#selectProcessSegment(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void selectProcessSegment(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegment", param));
	}


    /**
     * @fn
     * @brief : 대상 공정 조회 4 Lot Routing
     * @remark 
     * @see smh.pcm.service.PCM04300Service#selectProcessSegment4Lot(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void selectProcessSegment4Lot(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegment4Lot", param));
	}

	
	
	/**
     * @fn
     * @brief : 자원 조회
     * @remark 
     * @see smh.pcm.service.PCM04300Service#selectResourceByProductSegment(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void selectResourceByProductSegment(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectResourceByProductSegment", param));
	}

	/**
     * @fn
     * @brief : Lot별 불량 처리
     * @remark 
     * @see smh.pcm.service.PCM04300Service#saveMoveProcessPath(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void saveMoveProcessPath(UiMapDto dto) throws Exception {
		int result = 0;
		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
		DataSetMap paramMapChange = getParametersDataSetMap(dto, "ds_Change"); 
		DataSetMap paramMapTarget = getParametersDataSetMap(dto, "ds_Target"); // Lotlist
		
		Map<String, Object> paramSearch = paramMapSearch.get(0);
		Map<String, Object> paramChange = paramMapChange.get(0);
		Map<String, Object> paramTarget; 
		
		String strFromSequence = StringUtil.Object2String(paramChange.get("FROMSEQUENCE"));
		String strToSequence = StringUtil.Object2String(paramChange.get("TOSEQUENCE"));
		String strSegmentID = StringUtil.Object2String(paramChange.get("PROCESSSEGMENTID"));
		String strAreaID = StringUtil.Object2String(paramChange.get("AREAID"));
		String strResourceid = StringUtil.Object2String(paramChange.get("RESOURCEID"));
		String strComments = StringUtil.Object2String(paramChange.get("COMMENTS"));
		String struserID = StringUtil.Object2String(paramChange.get("USERID"));
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
 		String sToday =  this.getToDate();
 		java.util.Date nowDate = dateFormat.parse(sToday);
 		 
		for(int i = 0; i < paramMapTarget.size(); i++)
		{
			paramTarget = paramMapTarget.get(i);
			
			String lotID = paramTarget.get("LOTID").toString();
			propertyMap.clear();
			propertyMap.put("LOTID", lotID);
			List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
			if (list == null || list.size() == 0) {
				throw new BizException("NotExistLot", lotID);
			}
			
			Map<String, Object> lotData = list.get(0);
			
			//유효성 검증
			if( !lotData.get("PROCESSSEGMENTID").toString().equals(paramTarget.get("PROCESSSEGMENTID").toString())
					|| !lotData.get("USERSEQUENCE").toString().equals(paramTarget.get("USERSEQUENCE").toString())
					|| !lotData.get("PROCESSSTATE").toString().equals(paramTarget.get("PROCESSSTATE").toString())
					|| StringUtil.Object2Int(lotData.get("WORKCOUNT")) != StringUtil.Object2Int(paramTarget.get("WORKCOUNT"))
				) {
				// Lot 을 재조회 후 실행해주세요.{0}
				throw new BizException("ValidLot", lotID);
			}
			
			String prevAreaid = lotData.get("AREAID").toString();
			//String prevFactoty = lotData.get("FACTORYID").toString();
			String prevPlant  = lotData.get("PLANTID").toString();
			
			// Check 재공상태
			if(!lotData.get("LOTSTATE").toString().equals(LotState.InProduction)) //
			{
				if(!lotData.get("LOTSTATE").toString().equals(LotState.InTransit))
				{
					// Lot 상태를 확인하여 주세요.
					throw new BizException("CheckLotState", lotID);
					
				}
			}
			
			// Check Hold
			if(lotData.get("ISHOLD").toString().equals("Y"))
			{
				// 해당 Lot이 Hold 상태입니다. {0}
				throw new BizException("InHoldState", lotID);
			}
			
			// Check Locking
			if(lotData.get("ISLOCKING").toString().equals("Y"))
			{
				// 해당 Lot이 Locking 상태입니다. {0}
				throw new BizException("InLockingState", lotID);
			}
			
			// 사용자별 작업장 통제
			if(!wipService.isAreaInAuthority(lotData.get("AREAID").toString(), true)) {
				// 해당 작업장에 대한 권한이 없습니다. {0}
				throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s  AreaId=%s", lotID, lotData.get("AREAID").toString()));
			}
			
			//지난달 실적으로 이동 체크
			propertyMap.clear();
			propertyMap.put("LOTID", lotID);
			propertyMap.put("PROCESSSEGMENTID", strSegmentID);
			propertyMap.put("ETCCONDITION", "ORDER BY SENDTIME DESC");
			list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotworkresultList", propertyMap);
			
			if(list.size() > 0 && list.get(0).get("WORKENDTIME") != null)
			{
				Map<String, Object> prevWorkResult = list.get(0);
				
				SimpleDateFormat transFormat = new SimpleDateFormat("MM");
				SimpleDateFormat NoticeFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

				String nowMonth = transFormat.format(nowDate);
				String PrevMonth = transFormat.format(prevWorkResult.get("WORKENDTIME"));
				String PrevDate = 	NoticeFormat.format(prevWorkResult.get("WORKENDTIME"));
				
				if(!nowMonth.equals(PrevMonth))
				{
					//지난달 실적으로 이동은 불가능 합니다.{0}
					throw new BizException("CheckMovePathMonth", String.format("LotId=%s  Result Date=%s", lotID, PrevDate));
				}
			}
			
			//이전 공정으로 돌아갈 때 작업이력이 있는지(SKIP 이 아닌 것)
			propertyMap.clear();
			propertyMap.put("LOTID", lotID);
			propertyMap.put("WORKCOUNT", lotData.get("WORKCOUNT"));
			propertyMap.put("ETCCONDITION", "AND RESULTTYPE != 'SKIP'  AND USERSEQUENCE >= " + strToSequence);
			list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotworkresultList", propertyMap);
			if(list.size() > 0 ) {
				//작업이력이 있는 공정보다 이전 공정으로는 이동할 수 없습니다.
				throw new BizException("CantMoveNormalResultPath", String.format("LotId=%s", lotID));
			}
			
			
			// ROLL Lot이고 Roll Cut 공정인 경우 투입자재 삭제
			//setRollCutConsumableRemove(lotID, lotData);//asis
			if(lotData.get("PROCESSSEGMENTID").toString().equals("1020101")) wipService.deleteConsumeMaterialLotTempByConsumable(dto, lotData);
			
			propertyMap.clear();
			propertyMap.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
			propertyMap.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
			propertyMap.put("PROCESSSEGMENTID", strSegmentID);			

			// Routing의 ProcessPath 조회
			String strPathId = "";
			List<Map<String, Object>> pathResult = generalDao.addSelect(NAMESAPCE + ".selectProcessPathID", propertyMap);

			strPathId = pathResult.get(0).get("PROCESSPATHID").toString();
			
			Map<String, Object> reLotData = repositionSegment(strPathId, paramChange, lotID, lotData);//공정 바꿔놓고 가지고 있음. 
			//lotData 는 다시 읽어오지 않았기 때문에 기존 공정으로 있음  
			
			propertyMap.clear();
			propertyMap.put("LOTID", lotID);
			propertyMap.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
			propertyMap.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
			list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotworkresultList", propertyMap);
			
			Map<String, Object> workData = list.get(0);
			String prevHistKey = workData.get("PREVSENDLOTHISTKEY") == null ? "" : workData.get("PREVSENDLOTHISTKEY").toString();
		
			//ASIS logic : 이것 때문에 뒤에서 앞으로 가면 workcount 증가함. 모두 지워야 함. 
//			generalDao.delete(NAMESAPCEWIP + ".deletePcmLotworkresult", workData);
			
			double toSeq = Double.parseDouble(strToSequence);
			double frSeq =  Double.parseDouble(strFromSequence);
			
			if(toSeq > frSeq) {
				// 인수대기의 현재공정의 생산실적만 지움
				propertyMap.clear();
				propertyMap.put("LOTID", lotID);
				propertyMap.put("WORKCOUNT", workData.get("WORKCOUNT"));
				propertyMap.put("USERSEQUENCE", strFromSequence);
				generalDao.delete(NAMESAPCE + ".deletePcmLotworkresultSEQ", propertyMap);
			} else {
				//TOBE logic : 목적지 path 이후는 다 지움. by 이창영
				propertyMap.clear();
				propertyMap.put("LOTID", lotID);
				propertyMap.put("WORKCOUNT", workData.get("WORKCOUNT"));
				propertyMap.put("USERSEQUENCE", strToSequence);
				generalDao.delete(NAMESAPCE + ".deletePcmLotworkresultGE", propertyMap);
			}
			
			// 공정이동 사이에 있는 Skip 공정 조회
			propertyMap.clear();
			propertyMap.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
			propertyMap.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
			propertyMap.put("FROMSEQUENCE", strFromSequence);
			propertyMap.put("TOSEQUENCE", strToSequence);
			
			// Skip공정
			List<Map<String, Object>> skipPathList = generalDao.addSelect(NAMESAPCE + ".selectProcessPathSequence", propertyMap);//this.select("GetProcessPathSequence", "10001", propertyMap);
			
			if(skipPathList.size() > 0)
			{
				for(int k = 0; k < skipPathList.size(); k++)
				{
					// Skip 생산실적 입력
					String strSkipSegmentId = skipPathList.get(k).get("PROCESSSEGMENTID").toString();
					String strSkipUserSequence = skipPathList.get(k).get("USERSEQUENCE").toString();
					String strProcessPathId = skipPathList.get(k).get("PROCESSPATHID").toString();

					if(!strToSequence.equals(strSkipUserSequence))
					{
						String areaID = lotData.get("AREAID").toString();
						getLotWorkResultInsertData(lotID, lotData, strSkipSegmentId, strSkipUserSequence, strProcessPathId, areaID, struserID, "SKIP", prevHistKey);
					}
				}
			}
			
			
			// 마지막으로 이동 후 생산실적 입력
			getLotWorkResultInsertData(lotID, reLotData, strSegmentID, strToSequence, reLotData.get("PROCESSPATHSTACK").toString()
					, strAreaID,  struserID, "Reposition", reLotData.get("LASTTXNHISTKEY").toString());
			
			
			//이전 공정 area, plant 를 history 에 update 
			reLotData.put("PREVPLANTID", prevPlant);
			//reLotData.put("PREVFACTORYID", prevFactoty);
			reLotData.put("PREVAREAID", prevAreaid);
			reLotData.put("MODIFIER", struserID);
			reLotData.put("TXNHISTKEY",  reLotData.get("LASTTXNHISTKEY"));
			
			generalDao.addUpdate(NAMESAPCE + ".updatePcmLothistory", reLotData);
			
			//Comment 저장
			wipService.insertLotComment(dto, reLotData, strComments, struserID, PCMConstant.TransitionId.ReceiveLot);
			
			
			//2019-10-15 정승원 추가
			//외주 작업장이면 InTransit  //revision : 3002 에서 다시 가져옴. 
			propertyMap.clear();
			propertyMap.put("AREAID", strAreaID);
			list = generalDao.addSelect(NAMESAPCECOM + ".selectBasArea", propertyMap);
			String ownType = list.get(0).get("OWNTYPE").toString();
			
			if(ownType.equals("OutsideOSP")) {
				//InTransit 처리
				
				//wipService.SendLot(lotID, strAreaID, list.get(0).get("PLANTID").toString());
				
				String plantID = list.get(0).get("PLANTID").toString();
				if (!strAreaID.isEmpty()) reLotData.put("AREAID", strAreaID);
				if (!plantID.isEmpty()) reLotData.put("PLANTID", plantID);
				
				if(!strAreaID.isEmpty() && !plantID.isEmpty()) {
					
					reLotData.put("LOTSTATE", "InTransit");
					
					reLotData.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
					generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", reLotData);
					reLotData.put("TXNHISTKEY", reLotData.get("LASTTXNHISTKEY"));
					generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", reLotData);
				}
			}
			
		}
		
    	putDataSetMap(dto, result);
	}



	private void getLotWorkResultInsertData(String lotID, Map<String, Object> lotData, String strSkipSegmentId,
			String strSkipUserSequence, String strProcessPathId, String strAreaID, String strUserID, String resultType, String prevHistKey) throws ParseException {
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotID);
		propertyMap.put("PROCESSSEGMENTID", strSkipSegmentId);
		propertyMap.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));

		//Created LOT 조회
		List<Map<String, Object>> workLotCount = generalDao.addSelect(NAMESAPCE + ".selectLotWorkCount", propertyMap);
		String count = "0";
		if(workLotCount.size() > 0) 
		{
			count = (String)workLotCount.get(0).get("COUNT").toString();
		}
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
 		String sToday =  this.getToDate();
 		java.util.Date nowDate = dateFormat.parse(sToday);
 		
 		Map<String, Object> workData = new HashMap<>();

 		workData.put("LOTID", lotID);

 		workData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		workData.put("PLANTID",lotData.get("PLANTID"));
		//workData.put("FACTORYID",lotData.get("FACTORYID"));
		workData.put("AREAID",strAreaID);
		workData.put("PRODUCTIONORDERID",lotData.get("PRODUCTIONORDERID"));
		workData.put("LINENO",lotData.get("LINENO"));
		workData.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID"));
		workData.put("PRODUCTDEFVERSION",lotData.get("PRODUCTDEFVERSION"));
		workData.put("PROCESSDEFID",lotData.get("PROCESSDEFID"));
		workData.put("PROCESSDEFVERSION",lotData.get("PROCESSDEFVERSION"));
		workData.put("PROCESSSEGMENTID",strSkipSegmentId);
		workData.put("PROCESSSEGMENTVERSION","*");
		workData.put("USERSEQUENCE",strSkipUserSequence);
		workData.put("WORKCOUNT",Double.parseDouble(count));
		workData.put("PROCESSPATHID",strProcessPathId);
		workData.put("PROCESSPATHSTACK",strProcessPathId);
		
		if(resultType.equals("SKIP"))
		{
			workData.put("RESULTTYPE",resultType);
			workData.put("WORKENDTIME",nowDate);
			workData.put("WORKENDUSER",strUserID);
			workData.put("SENDTIME",nowDate);
			workData.put("SENDUSER",strUserID);
			workData.put("SENDARRAYQTY",lotData.get("ARRAYQTY"));
			workData.put("SENDPANELQTY",lotData.get("PANELQTY"));
			workData.put("SENDPCSQTY",lotData.get("PCSQTY"));
		}
		else
		{
			workData.put("RESULTTYPE","NORMAL");
			workData.put("RESOURCEID",lotData.get("RESOURCEID"));
			
			lotData.put("WORKCOUNT", Double.parseDouble(count));
			
			lotData.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
			generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lotData);
			lotData.put("TXNHISTKEY", lotData.get("LASTTXNHISTKEY"));
			generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);
		}
		
		workData.put("CREATOR", strUserID);
		//workData.setCreatedtime(SQLService.toDate());
		workData.put("PREVSENDLOTHISTKEY",prevHistKey);
		workData.put("TXNHISTKEY",TxnHistKey.getTxnHistKey());
		
		generalDao.insert(NAMESAPCEWIP + ".insertPcmLotworkresult", workData);
		
	}

	private Map<String, Object> repositionSegment(String strPathId, Map<String, Object> paramChange, String lotID, Map<String, Object> lotData) throws Exception {
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotID);
		Map<String, Object> reLotData = new HashMap<>();
		reLotData.putAll(lotData);
		
//		Stack<String> lotProcessPathStack = new Stack<String>(); 
//		lotProcessPathStack.addAll(Arrays.asList(lotData.get("PROCESSPATHSTACK").toString().split(".")));
		
		propertyMap.clear();
		propertyMap.put("PROCESSPATHID", strPathId);
		List<Map<String, Object>> newlist = generalDao.addSelect(NAMESAPCECOM +".selectBasProcesspathList",propertyMap);
		Map<String, Object> toProcessPath = newlist.get(0);
		
		reLotData.put("PREVUSERSEQUENCE", reLotData.get("USERSEQUENCE"));
		reLotData.put("PREVPROCESSSEGMENTID", reLotData.get("PROCESSSEGMENTID"));
		reLotData.put("PREVPROCESSSEGMENTVERSION", reLotData.get("PROCESSSEGMENTVERSION"));
		reLotData.put("PREVAREAID", reLotData.get("AREAID"));
		
//		lotProcessPathStack.pop();
//		lotProcessPathStack.push(toProcessPath.get("PROCESSPATHID").toString());
//		String ppathStack = String.join(".",(String[]) lotProcessPathStack.toArray());
		
		//재작업이 아니기 때문에 PROCESSPATHSTACK 은 "." 이 없음. 하나만 들어가 있음. 
		reLotData.put("PROCESSPATHSTACK", toProcessPath.get("PROCESSPATHID").toString());
		reLotData.put("USERSEQUENCE", toProcessPath.get("USERSEQUENCE"));
		reLotData.put("PROCESSSEGMENTID", toProcessPath.get("PROCESSSEGMENTID"));
		reLotData.put("PROCESSSEGMENTVERSION", toProcessPath.get("PROCESSSEGMENTVERSION"));
		reLotData.put("RESOURCEID", paramChange.get("RESOURCEID"));
		reLotData.put("AREAID", paramChange.get("AREAID")); //혹여나 areaID 가 안들어온다면 BAS_PROCESSSEGMENT 에서 가져온다. toProcessPath 에 processSegmentID 로 
		
		
		reLotData.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", reLotData);
		reLotData.put("TXNHISTKEY", reLotData.get("LASTTXNHISTKEY"));
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", reLotData);
		
		//executeLotPlan(lotData); //lotPlan 을 사용 안함. 
		System.out.println(" *************************** end repositionSegment"); 
		return reLotData;
	}

	private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return systemDate.get(0).get("TODATE").toString();
  	}

}