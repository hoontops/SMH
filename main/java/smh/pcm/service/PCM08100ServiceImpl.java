package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import java.util.ArrayList;
import java.util.Arrays;

import org.eclipse.core.internal.filesystem.local.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitionId;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMLotCommonService;;


/**
* @file: PCM08100ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM08100ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 30.   김기수     최초  생성
*/
@Service
public class PCM08100ServiceImpl extends AbstractNbdfService implements PCM08100Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08100Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACELOT = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACEWIP="smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMCommonService commonServicePCM;
    
    @Autowired
    private PCMLotCommonService lotCommonService;
    
    @Autowired
    private PCMWipService	wipService;
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM08100#selectLotBoxPackingSendList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotBoxPackingSendList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotBoxPackingSendList", param));
    }   
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM08100#selectLotBoxPackingSendList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPackingSendList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackingSendList", param));
    }   
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM08100#selectLotBoxPackingSendList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSendLotDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSendLotDetail", param));
    }   
    
    
    /**
     * @fn savePcmLotAcceptCancel
     * @brief (Override method) Lot 인수 취소 
     * @remark 
     * @see smh.bas.service.PCM08100#saveSendPackingLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveSendPackingLot(UiMapDto dto) throws Exception {
       // Map<String, Object> param = getParametersMap(dto);
		DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_pcmSendLot"); // ds_pcmSendLot
		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");		//ds_comment
		
		Map<String, Object> paramSearch = paramMapSearch.get(0);
		
		//String comment = paramComment.get("COMMENT").toString();			// 작성 Comment
		String userId = paramSearch.get("USERID").toString();				//Comment 작성 userId
		String txnId = "PCM08100Service";
		String documentNo = getDocumentNo();
		
		
		
		Map<String, Object> paramLotList; // LotList
		
		for (int i = 0; i < paramMapLotList.size(); i++) {
			
			//String txnHistKey = TxnHistKey.getTxnHistKey();
			Date now = new Date();
			paramLotList = paramMapLotList.get(i);
			
			String lotId = paramLotList.get("LOTID").toString();
			String defectQty = paramLotList.get("DEFECTQTY").toString();
			
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
			
			//LotData Validation Check!!
			ValidationData(lotData);
			
			//saveBoxPackingData(documentNo, lotId ,lotData ,defectQty  , txnId, userId);
			
			// 작업 이력 저장
			saveBoxPackingTrackInOut(dto,lotId, lotData , userId , txnId);
			
			
			wipService.executeCheckingWindowTimeNewTx(dto, lotData, now);
			
			String toAreaId ="";
			String toResourceId ="";
			wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, userId, now, toResourceId, toAreaId);
			
			Map<String, Object> routingCond = new HashMap<>();
			routingCond.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
			routingCond.put("PROCESSDEFVERSION" , lotData.get("PROCESSDEFVERSION"));
			routingCond.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
			routingCond.put("USERSEQUENCE" , lotData.get("USERSEQUENCE"));
			
			List<Map<String, Object>> routingDataList = generalDao.addSelect(NAMESAPCE + ".selectRoutingInfo",routingCond);
			
			String processPathId =  lotCommonService.GetProcessPathId(lotData, lotData.get("PROCESSDEFID").toString() , lotData.get("PROCESSDEFVERSION").toString() );
			
			Map<String, Object> processPathKey = new HashMap<>();
			processPathKey.put("PROCESSPATHID" , processPathId);
			
			List<Map<String, Object>> processPathDataList = generalDao.addSelect(NAMESPACELOT + ".selectProcessPathDataList",processPathKey);
			
			String strProcessPathId ="";
			String strPathType = processPathDataList.get(0).get("PATHTYPE").toString();
			String strPathSequence = processPathDataList.get(0).get("PATHSEQUENCE").toString();
			String strPlant = lotData.get("PLANTID").toString();
			
			
			Map<String,Object> nextMap = new HashMap<>();
			nextMap.put("PROCESSDEFID" , lotData.get("PROCESSDEFID"));
			nextMap.put("PROCESSDEFVERSION" , lotData.get("PROCESSDEFVERSION"));
			nextMap.put("PATHSEQUENCE" , Integer.parseInt(strPathSequence)+1);
			
			List<Map<String, Object>> nxtDataList = generalDao.addSelect(NAMESAPCE + ".selectNextRoutingInfo",nextMap);
			
			if(nxtDataList != null && nxtDataList.size() > 0)
			{
				strProcessPathId = nxtDataList.get(0).get("PROCESSPATHID").toString();
				strPlant = nxtDataList.get(0).get("PLANTID").toString();
			}
			
			try {
				lotData = updateLotSend(lotData, userId, now);
			}
			catch(Throwable e)
			{
				throw new BizException(e.toString());
			}
			
			Map<String,Object> lotInfo = new HashMap<>();
			//String toAreaId ="";
			//String toResourceId ="";
			
			//lotInfo.put("LOTID", lotId);
			//lotInfo.put("PROCESSPATHSTACK" , lotData.get("PROCESSPATHSTACK"));
			//lotInfo.put("LOTSTATE" , lotData.get("LOTSTATE"));
			
			
			wipService.dispatchLot(dto, lotData, toResourceId, toAreaId );
		}
		saveBoxPackingData(documentNo, paramMapLotList , txnId, userId);
		
		generalDao.addSelect(NAMESAPCE + ".sendPCM_MAT_TRAN");
    }   
    
	  private String getDocumentNo()
	  		throws Exception{
		  
		  String docuNo="";
		  String areaId = "162";
		  Map<String, Object> paramCond = new HashMap<>();
		  
		  Date now = new Date();
		  SimpleDateFormat nowFormat = new SimpleDateFormat("yyMMdd");
		  String nowTime = nowFormat.format(now).toString();
		  paramCond.put("COND" , areaId+"-"+nowTime);
		  
		  List<Map<String,Object>> listDocuNo = generalDao.addSelect(NAMESAPCE + ".selectDocumentNo",paramCond);
		  

		  
		  return listDocuNo.get(0).get("DOCUNO").toString();
	  }
	    
    
	  private void saveBoxPackingData(String docuNo  ,DataSetMap lotList ,String txnId, String userID)
	  		throws Exception{
		  
		  Date now = new Date();
		  SimpleDateFormat nowFormat = new SimpleDateFormat("yyyy-MM-dd HH:MM:ss"); 
		  String formNow = nowFormat.format(now).toString();
		  Map<String, Object> paramLotList; // LotList
		  
		  for (int i = 0; i < lotList.size(); i++) {
			  paramLotList = lotList.get(i);
				
			  String lotId = paramLotList.get("LOTID").toString();
			  String defectQty = paramLotList.get("DEFECTQTY").toString();
			  // LotId를 기준으로 LotData를 가져옴.
			  Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
				
			  Map<String, Object> boxPackingCond = new HashMap<>();
			  boxPackingCond.put("BOXNO", docuNo);
			  boxPackingCond.put("LOTID" , lotId);
			  
			  List<Map<String, Object>> boxPackingDataList = generalDao.addSelect(NAMESAPCE + ".selectBoxPackingDataList",boxPackingCond);
			  
			  if(boxPackingDataList.size() < 0)
			  {
				  throw new BizException("NoInsertData");
			  }
		  
			  
			  Map<String, Object> boxPackingData = new HashMap<>();
			  boxPackingData.put("BOXNO",docuNo);
			  boxPackingData.put("LOTID", lotData.get("LOTID"));
			  boxPackingData.put("AREAID", lotData.get("AREAID"));
			  boxPackingData.put("QTY" , lotData.get("QTY"));
			  boxPackingData.put("DEFECTQTY" , defectQty);
			  boxPackingData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
			  boxPackingData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
			  boxPackingData.put("USERSEQUENCE" , lotData.get("USERSEQUENCE"));
			  boxPackingData.put("DUCUMENTNO" , docuNo);
			  boxPackingData.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
			  boxPackingData.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
			  boxPackingData.put("CREATEDTIME" , formNow);
			  
			  generalDao.insert(NAMESAPCE + ".insertBoxPackingData", boxPackingData);
		  }
		  
	  }
	  
	  private void saveBoxPackingTrackInOut(UiMapDto dto, String lotId, Map<String,Object> lotData , String userId , String txnId)
	  		throws Exception{
		  
		  String equipmentId ="";
		  Date now = new Date();
		  
		  //작업시작
		  try
		  {
			  wipService.trackInLot(dto ,lotData, equipmentId, userId , now);
			  
		  }
		  catch(Throwable e)
		  {
			  throw new BizException(e.toString());
		  }	
		  // 작업자 이력 등록
		  
		  
		  String toResourceid="";
		  String toAreaId="";
		  
		  //작업시작 실적 등록
		  wipService.saveLotWorkResult(dto, lotData, TransitType.TrackInLot, userId, now, toResourceid , toAreaId);
		  
		  
		  try
		  {
			 wipService.trackOutLot(dto, lotData, equipmentId, userId, now);
		  }
		  catch(Throwable e)
		  {
			  throw new BizException(e.toString());

		  }
		  
		  //작업시작 실적 등록
		  wipService.saveLotWorkResult(dto, lotData, TransitType.TrackOutLot, userId, now, toResourceid , toAreaId);
		  
		  //wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, userId, now);
		  /// 여기까지가 작업 시작- 종료 
		  
		  
	  }
	  
	  
	  private Map<String,Object> updateLotSend(Map<String, Object> lotData, String userId, Date time)
	  		throws Exception {
		  
		  String lotId = lotData.get("LOTID").toString();
		  
		  String processState = lotCommonService.changeProcessState(lotId,"MoveDispatchLot","LotProcessState" , LotProcessState.WaitForSend);
		  
		  lotData.put("PROCESSSTATE", processState);
		  lotData.put("SENDTIME" , time);
		  lotData.put("SENDUSER", userId);
		  //lotData.put("LASTTXNID" , null);
		  lotData.put("TXNHISTKEY",null);
		  generalDao.addUpdate(NAMESAPCE + ".updatePcmLotSendBoxPacking", lotData);
		  generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);	
		  
		  
		  return lotData;	  
	  }
    /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM08100#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
     */
	private void ValidationData(Map<String,Object> lotData)
			throws Exception {
		
		String lotId = lotData.get("LOTID").toString();
		String isHold = lotData.get("ISHOLD").toString();
		String enterpriseId = lotData.get("ENTERPRISEID").toString();
		String plantId = lotData.get("PLANTID").toString();
		
		if(!isHold.isEmpty() && isHold.equals("Y"))
		{
			//해당 Lot이 Hold 상태입니다.
			throw new BizException("InHoldState", lotId);
		}

		

		
	}
}