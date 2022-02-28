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
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;


import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitType;


/**
* @file: PCM02400ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02400ServiceImpl
* @Company: Built1
* @Create Date: 2021.04-30
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.30.   박대호     최초  생성
*/
@Service
public class PCM02400ServiceImpl extends AbstractNbdfService implements PCM02400Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM02400Dao";	
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACE1   = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    public static final String NAMESAPCEWORK      = "smh.pcm.dao.PCMWorkProcessDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired 
    private PCMWipService wipService;
    
    @Autowired 
    private PCMOspService ospService;
    
    @Autowired 
    private PCMSendLotService sendLotService;
    
    /**
     * @fn
     * @brief : Roll Cut 인계 분할 조회
     * @remark 
     * @see smh.pcm.service.PCM02400Service#selectRollCuttingTarget(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRollCuttingTarget(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollCuttingTarget", param));
    }
    /**
     * @fn
     * @brief : 인계 자원 콤보조회
     * @remark 
     * @see smh.pcm.service.PCM02400Service#selectTransitAreaList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTransitAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTransitAreaList", param));
    }
    /**
     * @fn
     * @brief : LotList 생성 조회
     * @remark 
     * @see smh.pcm.service.PCM02400Service#selectLotIdMaxSequence_Rollcut(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotIdMaxSequence_Rollcut(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotIdMaxSequence_Rollcut", param));
    }
    
    /**
     * @fn
     * @brief :  Roll Cut 인계 분할 저장
     * @remark 
     * @see smh.pcm.service.PCM02400Service#SaveRollCutiing(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveRollCutiing(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        
        DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	DataSetMap paramMapWipCreateLot = getParametersDataSetMap(dto, "ds_wipCreateLot");
    	
    	Map<String, Object> paramSearch = paramMapSearch.get(0);
    	String strPlant = paramSearch.get("PLANTID").toString();
    	String strUserId = paramSearch.get("USERID").toString();
    	String transitArea = paramSearch.get("TRANSITAREA").toString();   
    	String comment = paramSearch.get("COMMENT").toString();   
    	String resourceID = transitArea.substring(0, transitArea.indexOf("|"));
    	String areaID = transitArea.substring(transitArea.indexOf("|") + 1);

    	Map<String, Object> row = new HashMap<String, Object>();

		//Date now = SQLService.toDate();
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	String sToday      =  this.getToDate();
    	//현재시간
    	 Date now           = dateFormat.parse(sToday);
		//List<Map<String, Object>> result = QueryProvider.select("GetLotWorkResultByTrackIn", "10001", param);
		List<Map<String,String>> listSendLot = new ArrayList<>();
		
		for(int i = 0; i< paramMapWipCreateLot.size(); i++)
		{	
			Map<String,String> SendLot = new HashMap<>();
	
			row = paramMapWipCreateLot.get(i);
			
			String childLotId = row.get("LOTID").toString();
			String PLotId = row.get("PARENTLOT").toString();			
			double splitQty = Double.parseDouble(row.get("QTY").toString());
			double panelQty = Double.parseDouble(row.get("PANELQTY").toString());
			if(!childLotId.equals(PLotId))
			{
				Map<String, Object> chekLot = wipService.validateLotInfo(PLotId);
				
				wipService.executeCheckingWindowTimeNewTx(dto, chekLot, now);
				
				if(chekLot.get("ISLOCKING").toString().equals("Y"))
				{
					// Locking 상태의 Lot 입니다.
					throw new BizException("LotIsLocking", String.format("LotId = %s", PLotId));
				}
			}
			if(!childLotId.equals(PLotId))
			{
				Map<String, Object> lot = wipService.validateLotInfo(PLotId);
				Map<String, Object> childLot = wipService.splitLot(dto, lot, childLotId, splitQty, splitQty);
				Map<String, Object> plotData = wipService.validateLotInfo(PLotId);
				
				childLot.put("CREATEDQTY"           	, splitQty);
				childLot.put("PCSQTY"                		, splitQty);
				childLot.put("PANELQTY"                 , panelQty);
				childLot.put("CREATOR"           		, strUserId);
				//param.put("LOTSTARTDATE"    , splitQty);txnInfo.getTxnTime()
				//param.put("LASTTXNTIME"      , new Date());
				childLot.put("LASTTXNUSER"     		, strUserId);
				childLot.put("LASTTXNCOMMENT"		, comment);
				childLot.put("SENDTIME"              	, now);
				childLot.put("SENDUSER"          		, strUserId);
				childLot.put("PNLROOTLOTID"        	, childLotId);
				childLot.put("PNLCREATEDQTY"     		, splitQty);
				childLot.put("LASTTXNHISTKEY" 		, TxnHistKey.getTxnHistKey());
				childLot.put("TXNHISTKEY"     			, childLot.get("LASTTXNHISTKEY"));
				childLot.put("LOTCREATEDTYPE"			, plotData.get("LOTCREATEDTYPE"));
				childLot.put("LOTINPUTTYPE"				, plotData.get("LOTINPUTTYPE"));
				childLot.put("ISREPRESENTROLLLOT"       , plotData.get("ISREPRESENTROLLLOT"));
				childLot.put("EXPECTEDCOMPLETEDATE"     , plotData.get("EXPECTEDCOMPLETEDATE"));
				childLot.put("ROOTLOTSTARTDATE"         , plotData.get("ROOTLOTSTARTDATE"));
				childLot.put("ISLOCKING"                , plotData.get("ISLOCKING"));
				childLot.put("ISPRINTLOTCARD"           , plotData.get("ISPRINTLOTCARD"));
				childLot.put("LAYER"                    , plotData.get("LAYER"));
				childLot.put("UNIT"                     , plotData.get("UNIT"));
				childLot.put("PUREORDER"                , plotData.get("PUREORDER"));
				childLot.put("PUREINPUT"                , plotData.get("PUREINPUT"));
				childLot.put("RECEIVEUSER"              , plotData.get("RECEIVEUSER"));
				childLot.put("RECEIVETIME"              , plotData.get("RECEIVETIME"));
				childLot.put("HANDLETYPE"               , plotData.get("HANDLETYPE"));
				childLot.put("ISDEFECTED"               , plotData.get("ISDEFECTED"));
				childLot.put("RESOURCEID"				, plotData.get("RESOURCEID"));
				//childLot.put("LOTSTARTDATE"				, now);
				childLot.put("LOTSTDPANELQTY"				, plotData.get("LOTSTDPANELQTY"));
				childLot.put("PANELPERQTY"				, plotData.get("PANELPERQTY"));

				generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", childLot);
				generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", childLot);	
				
				
				// 부모 LOt정보 Update
				
				plotData.put("CREATEDQTY"       , Double.parseDouble(nvl(plotData.get("CREATEDQTY"))) - splitQty);
				plotData.put("PCSQTY"      		, Double.parseDouble(nvl(plotData.get("PCSQTY"))) - splitQty);
				plotData.put("PANELQTY"          , Double.parseDouble(nvl(plotData.get("PANELQTY"))) - panelQty);
				plotData.put("LASTTXNTIME"      , new Date());
				plotData.put("LASTTXNUSER"      , strUserId);
				plotData.put("SENDTIME"          , now);
				plotData.put("SENDUSER"          , strUserId);
				plotData.put("PNLCREATEDQTY"  , Double.parseDouble(nvl(plotData.get("PNLCREATEDQTY"))) - splitQty);				
				if(plotData.get("PNLCREATEDQTY").toString().equals("0")) {
					plotData.put("LOTSTATE"          , LotState.Terminated);
				}
				
				plotData.put("LASTTXNHISTKEY" 		, TxnHistKey.getTxnHistKey());
				plotData.put("TXNHISTKEY"     			, plotData.get("LASTTXNHISTKEY"));
				
				generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", plotData);
				generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", plotData);	
				
			}
			SendLot.put("LOTID", childLotId);
			SendLot.put("AREAID", areaID);
			SendLot.put("PARENTLOTID", PLotId);
			SendLot.put("RESOURCEID", resourceID);
			listSendLot.add(SendLot);
			
		}
		
		
		for (Map<String, String> map : listSendLot) 
		{
			
			String SendLotID = map.get("LOTID");
			String ToAreaID = map.get("AREAID");
			String ToResourceID = map.get("RESOURCEID");
			String parentlotid = map.get("PARENTLOTID");
			Map<String, Object> lot = wipService.validateLotInfo(SendLotID);			
			
			Map<String, Object> plot = wipService.validateLotInfo(parentlotid);			
			
			//work result 생성
			if(!SendLotID.equals(parentlotid))
			{
				createWorkResult(SendLotID, parentlotid, strUserId, now);
				//WipService.SaveSplitLotWorkResult(plot, lot, lot.getQty());
			}
			else
			{	
				wipService.saveLotWorkResult(dto, lot, TransitType.SendLot, strUserId, now, ToResourceID, ToAreaID);

			}
		}
		for (Map<String, String> map : listSendLot)
		{
			String SendLotID = map.get("LOTID");
			String ToAreaID = map.get("AREAID");
			String ToResourceID = map.get("RESOURCEID");
			String parentlotid = map.get("PARENTLOTID");
			
			Map<String, Object> lot = wipService.validateLotInfo(SendLotID);
			
			//현재 작업장 공장
			String currentArea = objectString(lot.get("AREAID"));
			String currentPlant = objectString(lot.get("PLANTID"));
			String currentFactory = objectString(lot.get("FACTORYID"));
			
			Map<String, Object> paramArea = new HashMap<>();			
			paramArea.put("AREAID", ToAreaID);
			// 이동할 작업장
			Map<String, Object> area       =  generalDao.addSelect(NAMESAPCECOM + ".selectBasArea", paramArea).get(0);
			
			//현재 Area
			paramArea.put("AREAID", currentArea);
			Map<String, Object> carea       =  generalDao.addSelect(NAMESAPCECOM + ".selectBasArea", paramArea).get(0);
			
			if (area == null)
			{
				// 해당 작업장이 존재하지 않습니다. {0}
				throw new BizException("NotExistArea", String.format("AreaId = %s", ToAreaID));
			}
			//자사/외주 구분
			String ownType = objectString(area.get("OWNTYPE"));
			String nextPlant = objectString(area.get("PLANTID"));
			
			Map<String, Object> wrd = wipService.getWorkResult(lot);

			//예산 통제 
			if (!carea.get("OWNTYPE").equals(AreaOwnType.OurCompany))
			{
				Map<String, Object> paramBudget = new HashMap<>();
				//  현재 ERP 자원코드가 달라서 현제 에러가 남 추후 오픈
				/*paramBudget.put("P_LOT_NAME" , wrd.get("LOTID"));             // LOT ID
				paramBudget.put("P_SOP_CODE" , wrd.get("PROCESSSEGMENTID"));  // 공정코드
				paramBudget.put("P_RSC_CODE" , wrd.get("RESOURCEID"));        // 자원코드
				paramBudget.put("P_ITEM_CODE", wrd.get("PRODUCTDEFID"));
				paramBudget.put("P_STEP_ID"  , "인계");
				
				generalDao.addSelectOneMap(NAMESAPCEWORK + ".salectBudgetControl", paramBudget);
		
				String  oCtrlYn = StringUtil.Object2String(paramBudget.get("O_CTRL_YN")) ;
		        String  oErrMsg =  StringUtil.Object2String(paramBudget.get("O_ERR_MSG")) ;
				
				if (oCtrlYn != "N")
				{
					// 예산통제 메시지
					throw new BizException(oErrMsg);
				}
				*/
			}
			lot = wipService.dispatchLot(dto, lot, ToAreaID,ToResourceID);
			
			lot = wipService.saveLotWorkCount(dto, lot);
			
			String txnHistKey = lot.get("LASTTXNHISTKEY").toString();

			if (ownType.equals(AreaOwnType.OutsideOSP) || !nextPlant.equals(currentPlant))
			{
//				TransactionUtils.setTransactionId(txnInfo, "sendLot");
				
				String nextAreaId = "";
				String nextPlantId = "";
				
				if (ownType.equals(AreaOwnType.OutsideOSP))
					nextAreaId = ToAreaID;
				else
					nextAreaId = objectString(lot.get("AREAID"));
				
				if (!nextPlant.equals(currentPlant))
					nextPlantId = nextPlant;
				else
					nextPlantId = objectString(lot.get("PLANTID"));
				
				wipService.sendLot(SendLotID, nextAreaId, nextPlantId);
				
//				TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
				
				if (!nextPlant.equals(currentPlant))
				{
					sendLotService.SaveLotPlantTransit(lot, txnHistKey, strUserId, now);
				}
			}
			
			// 분할 Lot 워크 Result  만들어 주기
			wipService.saveLotWorkResultForNextProcess(dto, lot, txnHistKey);
			
			sendLotService.SaveLotHistory(txnHistKey, SendLotID, currentPlant, currentFactory, currentArea);
			
		}
    }
	private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return systemDate.get(0).get("TODATE").toString();
  	}
	private  Map<String, Object> createWorkResult(String Lotld, String PLotID , String userId, Date now) throws Exception
	{
		Map<String, Object> ld = wipService.validateLotInfo(Lotld);		
		ld.put("SENDTIME"        	, now);
		ld.put("SENDUSER"        	, userId);
		
		ld.put("LASTTXNHISTKEY" 		, TxnHistKey.getTxnHistKey());
		ld.put("TXNHISTKEY"     			, ld.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", ld);
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", ld);			
		
		Map<String, Object> pld = wipService.validateLotInfo(PLotID);			
		
		Map<String, Object> pwd = wipService.getWorkResult(pld);
		
		Map<String, Object> wrd = new HashMap<String, Object>();
		wrd.put("LOTID"        						, Lotld);
		wrd.put("TXNHISTKEY"        				, TxnHistKey.getTxnHistKey());
		wrd.put("PROCESSSEGMENTID"        	, pwd.get("PROCESSSEGMENTID"));
		wrd.put("PROCESSSEGMENTVERSION"	, pwd.get("PROCESSSEGMENTVERSION"));
		wrd.put("ENTERPRISEID"        			, pwd.get("ENTERPRISEID"));
		wrd.put("PLANTID"        					, pwd.get("PLANTID"));
		wrd.put("FACTORYID"        				, pwd.get("FACTORYID"));
		wrd.put("AREAID"        					, pwd.get("AREAID"));
		wrd.put("PRODUCTIONORDERID"        	, pwd.get("PRODUCTIONORDERID"));
		wrd.put("LINENO"        					, pwd.get("LINENO"));
		wrd.put("PRODUCTDEFID"        			, pwd.get("PRODUCTDEFID"));
		wrd.put("PRODUCTDEFVERSION"        	, pwd.get("PRODUCTDEFVERSION"));
		wrd.put("PROCESSDEFID"        			, pwd.get("PROCESSDEFID"));
		wrd.put("PROCESSDEFVERSION"        	, pwd.get("PROCESSDEFVERSION"));
		wrd.put("PROCESSPATHID"        			, pwd.get("PROCESSPATHID"));
		wrd.put("USERSEQUENCE"        			, pwd.get("USERSEQUENCE"));
		wrd.put("WORKCOUNT"        			, pwd.get("WORKCOUNT"));
		wrd.put("ISPRINTLOTCARD"        		, pwd.get("ISPRINTLOTCARD"));
		wrd.put("WEEK"        						, pwd.get("WEEK"));
		wrd.put("ISREWORK"        				, objectString(pwd.get("ISREWORK")).equals("") ? "N" :pwd.get("ISREWORK").toString());
		wrd.put("REWORKTYPE"        			, pwd.get("REWORKTYPE"));
		wrd.put("REWORKREASONCODE"        	, pwd.get("REWORKREASONCODE"));
		wrd.put("REWORKCOUNT"        			, pwd.get("REWORKCOUNT"));
		wrd.put("ROOTLOTSTARTDATE"        	, pwd.get("ROOTLOTSTARTDATE"));
		wrd.put("SENDTIME"        				, now);
		wrd.put("SENDUSER"        				, userId);

		long diffInMillies;
		long diff;
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if(pwd.get("WORKENDTIME") != null) {
			String time = dateFormat.format(pwd.get("WORKENDTIME"));
			Date workEndTime = dateFormat.parse(time);

			diffInMillies = Math.abs(now.getTime() - workEndTime.getTime());
			diff = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);
			
			wrd.put("SENDLEADTIME"        			, (double)diff);
		}
		wrd.put("ROOTLOTINPUTPCSQTY"        , pwd.get("ROOTLOTINPUTPCSQTY"));
		wrd.put("ROOTLOTINPUTARRAYQTY"    , pwd.get("ROOTLOTINPUTARRAYQTY"));
		wrd.put("ROOTLOTINPUTPANELQTY"    	, pwd.get("ROOTLOTINPUTPANELQTY"));
		wrd.put("SENDPCSQTY"    					, ld.get("QTY"));
		wrd.put("SENDPANELQTY"    				, ld.get("PANELQTY"));
		wrd.put("SENDARRAYQTY"    				, ld.get("ARRAYQTY"));
		wrd.put("PREVSENDLOTHISTKEY"    		, pwd.get("PREVSENDLOTHISTKEY"));
		wrd.put("PROCESSPATHSTACK"    		, pwd.get("PROCESSPATHSTACK"));
		wrd.put("RESOURCEID"    					, ld.get("RESOURCEID"));
		
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLotworkresult", wrd);
		
		return wrd;
	}
	public String objectString(Object obj) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		}
		return result;
	}
	public String nvl(Object obj) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		}
		if(result.trim().equals("")) {
			result = "0";
		}
		return result;
	}
}