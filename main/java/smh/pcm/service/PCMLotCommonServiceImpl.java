package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.util.DateUtil;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Date;
import java.util.Objects;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.TransitionId;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.MaterialType;

import smh.pcm.service.PCMLotCommonService;
import smh.pcm.service.PCMCancelInfo.CancelTrackInInfo;
import smh.pcm.service.PCMCancelInfo.CancelSendLotInfo;


/**
* @file: PCMLotCommonServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMLotCommonServiceImpl
* @Company: Built1
* @Create Date: 2021.3.31
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 31.   -      최초  생성
*/
@Service
public class PCMLotCommonServiceImpl extends AbstractNbdfService implements PCMLotCommonService {

    public static final String NAMESPACE = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    
    
    @Autowired
    private GeneralDao generalDao;
    
    
    public Map<String,Object> ValidateLotInfo(String lotId)
    		throws Exception {
    	
    	HashMap<String, Object> param = new HashMap<>();
		param.put("LOTID", lotId);
		
		
		List<Map<String, Object>> lotList = generalDao.addSelect(NAMESPACE + ".selectPcmLotList", param);
		
		if(lotList == null || lotList.size()==0)
		{
			throw new BizException("NotExistLot", lotId);
		}
		
		
		Map<String, Object> lotData = lotList.get(0);
		return lotData;
    }
    
    public void DeleteLotEquipment(Map<String,Object> lotData)
    		throws Exception {
    	String lotId = lotData.get("LOTID").toString();
    	
    	//System.out.println("DeleteLotEquipment: "+lotId);
    	
    	HashMap<String,Object> param = new HashMap<>();
    	param.put("LOTID",lotId);
    	param.put("PROCESSSTATE",LotProcessState.WaitForReceive);
    	param.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID").toString());
    	param.put("PROCESSSEGMENTVERSION",lotData.get("PROCESSSEGMENTVERSION").toString());
    	param.put("WORKCOUNT", lotData.get("WORKCOUNT").toString());
    	
    	List<Map<String,Object>> lotEquipmentDataList = generalDao.addSelect(NAMESPACE + ".selectLotEquipmentData", param);
    	
    	
    	//2021.03.031  - kisu.kim -- LotEquipmentHistory 추가 할 것 .. - 
    	
    	if(!(lotEquipmentDataList == null) || !(lotEquipmentDataList.size()==0) ){
    		generalDao.addUpdate(NAMESPACE + ".deleteLotEquipmentData", param);
    	}	
    }
    
    public void DeleteLotWTime(Map<String,Object> lotData)
    		throws Exception {
    	String lotId = lotData.get("LOTID").toString();
    	
    	Map<String , Object> processDefInfo = GetProcessDefinitionInfo(lotData);
    	String processDefId = processDefInfo.get("PROCESSDEFID").toString();
    	String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
    	
    	String processPathId = GetProcessPathId(lotData, processDefId , processDefVersion);
    	
    	HashMap<String,Object> paramLotWTime = new HashMap<>();
    	paramLotWTime.put("LOTID",lotId);
    	paramLotWTime.put("ENTERPRISEID",lotData.get("ENTERPRISEID").toString());
    	paramLotWTime.put("PLANTID",lotData.get("PLANTID").toString());
    	paramLotWTime.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID").toString());
    	paramLotWTime.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION").toString());
    	paramLotWTime.put("PROCESSDEFID", processDefId);
    	paramLotWTime.put("PROCESSDEFVERSION", processDefVersion);
    	paramLotWTime.put("PROCESSPATHID", processPathId);
    	paramLotWTime.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
    	paramLotWTime.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION").toString());
    	paramLotWTime.put("PROCESSSTATE", LotProcessState.WaitForReceive);
    	
    	
    	List<Map<String,Object>> lotWTimeDataList = generalDao.addSelect(NAMESPACE + ".selectLotWTimeDataList", paramLotWTime);
    	
    	
    	//2021.03.031  - kisu.kim -- LotEquipmentHistory 추가 필요 .. - 
    	
    	if(!(lotWTimeDataList == null) || !(lotWTimeDataList.size()==0) ){
    		generalDao.addUpdate(NAMESPACE + ".deleteLotWTimeData", paramLotWTime);
    	}	
    }
    
    public void UpdateDeleteWTime(Map<String, Object> lotData)
    		throws Exception{
    	
    	DeleteLotWTime(lotData);
    	
    	String lotId = lotData.get("LOTID").toString();
    	
    	Map<String , Object> processDefInfo = GetProcessDefinitionInfo(lotData);
    	String processDefId = processDefInfo.get("PROCESSDEFID").toString();
    	String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
    	
    	String processPathId = GetProcessPathId(lotData, processDefId , processDefVersion);
    	
    	HashMap<String,Object> paramLotWTime = new HashMap<>();
    	paramLotWTime.put("LOTID",lotId);
    	paramLotWTime.put("ENTERPRISEID",lotData.get("ENTERPRISEID").toString());
    	paramLotWTime.put("PLANTID",lotData.get("PLANTID").toString());
    	paramLotWTime.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID").toString());
    	paramLotWTime.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION").toString());
    	paramLotWTime.put("TOPROCESSDEFID", processDefId);
    	paramLotWTime.put("TOPROCESSDEFVERSION", processDefVersion);
    	paramLotWTime.put("TOPROCESSPATHID", processPathId);
    	paramLotWTime.put("TOPROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
    	paramLotWTime.put("TOPROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION").toString());
    	paramLotWTime.put("TOPROCESSSTATE", LotProcessState.Run);
    	
    	List<Map<String, Object>> lotWTimeDataList = generalDao.addSelect(NAMESPACE + ".selectLotWTimeDataListForUpdate", paramLotWTime);
    	
    	for(int i=0, len = lotWTimeDataList.size(); i< len ; i++)
    	{
    		Map<String, Object> lotWTimeData = lotWTimeDataList.get(i);
    		
    		lotWTimeData.put("P_WTIME" , null);
    		lotWTimeData.put("P_TXNID","pcm02000");
    		lotWTimeData.put("P_MODEFIER",SessionUtil.getUserId());
    		lotWTimeData.put("P_TXNUSER", SessionUtil.getUserId());
    		
    		generalDao.addUpdate(NAMESPACE + ".updateLotWTimeData", lotWTimeData);
    	}
    	
    }
    
    public void DeleteLotWTime(Map<String,Object> lotData , String processSegmentId , String processSegmentVersion )
    		throws Exception {
    	String lotId = lotData.get("LOTID").toString();
    	
    	Map<String , Object> processDefInfo = GetProcessDefinitionInfo(lotData);
    	String processDefId = processDefInfo.get("PROCESSDEFID").toString();
    	String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
    	
    	String processPathId = GetProcessPathId(lotData, processDefId , processDefVersion);
    	
    	HashMap<String,Object> paramLotWTime = new HashMap<>();
    	paramLotWTime.put("LOTID",lotId);
    	paramLotWTime.put("ENTERPRISEID",lotData.get("ENTERPRISEID").toString());
    	paramLotWTime.put("PLANTID",lotData.get("PLANTID").toString());
    	paramLotWTime.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID").toString());
    	paramLotWTime.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION").toString());
    	paramLotWTime.put("PROCESSDEFID", processDefId);
    	paramLotWTime.put("PROCESSDEFVERSION", processDefVersion);
    	paramLotWTime.put("PROCESSPATHID", processPathId);
    	paramLotWTime.put("PROCESSSEGMENTID", processSegmentId);
    	paramLotWTime.put("PROCESSSEGMENTVERSION", processSegmentVersion);
    	paramLotWTime.put("PROCESSSTATE", LotProcessState.WaitForReceive);
    	
    	
    	List<Map<String,Object>> lotWTimeDataList = generalDao.addSelect(NAMESPACE + ".selectLotWTimeDataList", paramLotWTime);
    	
    	
    	//2021.03.031  - kisu.kim -- LotEquipmentHistory 추가 필요 .. - 
    	
    	if(!(lotWTimeDataList == null) || !(lotWTimeDataList.size()==0) ){
    		generalDao.addUpdate(NAMESPACE + ".deleteLotWTimeData", paramLotWTime);
    	}	
    }
    
    public boolean OspPriceInvalidCheck(Map<String,Object> lotWorkResultData)
    		throws Exception {
    	
    	return true;
    }
    
    
  //PCM_Lotcancelworkresult   Save
    public void SaveLotCancelWorkResult(Map<String, Object> lotData, String transitionId, String comment, String prevLotState )
    		throws Exception{
    	String lotId = lotData.get("LOTID").toString();
    	String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
    	Map<String, Object> lotCancelWorkResultData = new HashMap<>();
    	
    
    	lotCancelWorkResultData.put("LOTID", lotId);
    	lotCancelWorkResultData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
    	lotCancelWorkResultData.put("ENTERPRISEID", lotData.get("ENTERPRISEID").toString());
    	lotCancelWorkResultData.put("PLANTID", lotData.get("PLANTID").toString());
    	lotCancelWorkResultData.put("FACTORYID", lotData.get("FACTORYID"));
    	lotCancelWorkResultData.put("AREAID", lotData.get("AREAID").toString());
    	lotCancelWorkResultData.put("PROCESSDEFID", lotData.get("PROCESSDEFID").toString());
    	lotCancelWorkResultData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION").toString());
    	lotCancelWorkResultData.put("PREVPROCESSDEFID", lotData.get("PROCESSDEFID").toString());
    	lotCancelWorkResultData.put("PREVPROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION").toString());
    	
    	
    	if(transitionId.equals(TransitionId.CancelSendLot))
    	{
    		Map<String,Object> lotWorkResultData = GetWorkResult(lotData);
    		
    		Map<String,Object> paramLotHistory = new HashMap<>();
    		
    		paramLotHistory.put("P_TXNHISTKEY", lotWorkResultData.get("PREVSENDLOTHISTKEY").toString());
    		paramLotHistory.put("P_LOTID", lotId);
    		
    		List<Map<String,Object>> lotHistoryData = generalDao.addSelect(NAMESPACE + ".selectLotHistoryData", paramLotHistory);
    		
    		lotCancelWorkResultData.put("PROCESSSEGMENTID", lotHistoryData.get(0).get("PREVPROCESSSEGMENTID").toString()); //lotHistoryData.get(0);
    		lotCancelWorkResultData.put("WORKCOUNT",lotHistoryData.get(0).get("WORKCOUNT").toString());
    	
    	}
    	else
    	{
    		lotCancelWorkResultData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID").toString());
    		lotCancelWorkResultData.put("WORKCOUNT", lotData.get("WORKCOUNT").toString());
    	}
    	
    	lotCancelWorkResultData.put("PREVPROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID").toString());
    	lotCancelWorkResultData.put("LOTSTATE", lotData.get("LOTSTATE").toString());
    	lotCancelWorkResultData.put("PREVLOTSTATE", prevLotState);
    	
    	switch(transitionId)
    	{
    		case TransitionId.CancelReceiveLot:
    			lotCancelWorkResultData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
    			lotCancelWorkResultData.put("PREVPROCESSSTATE", LotProcessState.Wait);
    			
    			break;
    			
    		case TransitionId.CancelTrackIn:
    			lotCancelWorkResultData.put("PROCESSSTATE", LotProcessState.Wait);
    			lotCancelWorkResultData.put("PREVPROCESSSTATE", LotProcessState.Run);
    			
    			break;
    			
    		case TransitionId.CancelTrackOut:
    			lotCancelWorkResultData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
    			lotCancelWorkResultData.put("PREVPROCESSSTATE", LotProcessState.Wait);
    			
    			break;
    			
    		case TransitionId.CancelSendLot:
    			lotCancelWorkResultData.put("PROCESSSTATE", LotProcessState.Run);
    			lotCancelWorkResultData.put("PREVPROCESSSTATE", LotProcessState.WaitForSend);	
    	}
    	
    	lotCancelWorkResultData.put("UNIT", lotData.get("UNIT"));
    	lotCancelWorkResultData.put("PCSQTY", lotData.get("PCSQTY"));
    	lotCancelWorkResultData.put("PANELQTY", lotData.get("PANELQTY"));
    	lotCancelWorkResultData.put("CANCELCOMMENT", comment);
    	lotCancelWorkResultData.put("TXNUSER", SessionUtil.getUserId());
    	lotCancelWorkResultData.put("TXNGROUPHISTKEY", txnGroupHistKey);
    	
    	
    	generalDao.insert(NAMESPACE + ".insertLotCancelWorkResultData", lotCancelWorkResultData);
    	
    }
    
    
    public void SaveLotComment(Map<String,Object> lotData , String comment, String creator ,String transitionId)
    		throws Exception {
    	Map<String, Object> processDefData = GetProcessDefinitionInfo(lotData);
    	
    	String processDefId = processDefData.get("PROCESSDEFID").toString();
    	String processDefVersion = processDefData.get("PROCESSDEFVERSION").toString();
    	
    	String processPathId = GetProcessPathId(lotData , processDefId , processDefVersion);
    	
    	Map<String,Object> LotCommentData = new HashMap<>();
    	LotCommentData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
    	LotCommentData.put("LOTID", lotData.get("LOTID").toString());
    	LotCommentData.put("ENTERPRISEID",lotData.get("ENTERPRISEID").toString() );
    	LotCommentData.put("PLANTID", lotData.get("PLANTID").toString() );
    	LotCommentData.put("AREAID", lotData.get("AREAID").toString() );
    	LotCommentData.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID").toString() );
    	LotCommentData.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION").toString() );
    	LotCommentData.put("PROCESSDEFID", processDefId);
    	LotCommentData.put("PROCESSDEFVERSION", processDefVersion );
    	LotCommentData.put("PROCESSPATHID", processPathId );
    	LotCommentData.put("USERSEQUENCE", lotData.get("USERSEQUENCE").toString() );
    	LotCommentData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID").toString() );
    	LotCommentData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION").toString() );
    	LotCommentData.put("PROCESSSTATE", lotData.get("PROCESSSTATE").toString() );
    	LotCommentData.put("TRANSITIONID", transitionId);
    	LotCommentData.put("COMMENTS", comment);
    	LotCommentData.put("WORKCOUNT", lotData.get("WORKCOUNT").toString());
    	LotCommentData.put("LASTTXNHIST", SessionUtil.getUserId());
    	if(!StringUtil.isNullOrEmpty(creator))
    	{
    		LotCommentData.put("CREATOR", creator);
    	}
    	
    	
    	generalDao.insert(NAMESPACE + ".insertLotCommentData", LotCommentData);
    	
    }
    
    /**
	 *  bas_processdefinition Data가져온다. - 특이사항을 저장
	 * @param Map<String, Object> lotData
	 * @return Map<String, Object> processDefInfo  -> PROCESSDEFID ,PROCESSDEFVERSION
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
    public  Map<String,Object> GetProcessDefinitionInfo(Map<String, Object> lotData)
    		throws Exception {
    	
    	Map<String, Object> processDefInfo = new HashMap<>();
    	
    	processDefInfo.put("PROCESSDEFID",lotData.get("PROCESSDEFID").toString());
    	processDefInfo.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION").toString());
    
    	
    	if(!(lotData.get("SUBPROCESSDEFID") == null)){
    		Map<String, Object> paramProcessDefinition  = new HashMap<>();
    		paramProcessDefinition.put("PROCESSDEFID", lotData.get("SUBPROCESSDEFID").toString());
    		paramProcessDefinition.put("PROCESSDEFVERSION", lotData.get("SUBPROCESSDEFVERSION").toString());
    		
    		List<Map<String, Object>> processDefinitionData  = generalDao.addSelect(NAMESPACE + ".selectProcessDefinitionData",paramProcessDefinition);
    		
    		if(processDefinitionData==null) {
    			throw new BizException("CheckProcessDef ");
    		}
    		
    		if(processDefinitionData.get(0).get("PROCESSDEFTYPE").toString().equals("REWORK")){
    			processDefInfo.put("PROCESSDEFID", lotData.get("SUBPROCESSDEFID").toString());
    			processDefInfo.put("PROCESSDEFVERSION", lotData.get("SUBPROCESSDEFVERSION").toString());
    		}
    	}
    	
    	return processDefInfo;
    }
    
    
    /**
   	 *  ProcessPathid를 구한다.. - 특이사항을 저장
   	 * @param Map<String,Object> lotData , String processDefId , String processDefVersion
   	 * @return String processPathId
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
    public String GetProcessPathId(Map<String,Object> lotData , String processDefId , String processDefVersion)
    		throws Exception {
    		String processPathId = lotData.get("PROCESSPATHSTACK").toString();
    		
    		Map<String,Object> paramProcessPath = new HashMap<>();
    		paramProcessPath.put("ENTERPRISEID", lotData.get("ENTERPRISEID").toString());
    		paramProcessPath.put("PLANTID", lotData.get("PLANTID").toString());
    		paramProcessPath.put("PROCESSDEFID", processDefId);
    		paramProcessPath.put("PROCESSDEFVERSION", processDefVersion);
    		paramProcessPath.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID").toString());
    		
    		List<Map<String, Object>> processPathList = generalDao.addSelect(NAMESPACE + ".selectProcessPathList",paramProcessPath );
    		
    		if(processPathList.size() > 0 )
    		{
    			processPathId = processPathList.get(0).get("PROCESSPATHID").toString();
    		}
    		
    		return processPathId;
    }
  
    /**
   	 *  pcm_lotWorkResult Data를 가져온다... 
   	 * @param Map<String,Object> lotData 
   	 * @return Map<String,Object> lotWorkResultData
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
    public Map<String,Object> GetWorkResult(Map<String,Object> lotData)
    		throws Exception {
    	Map<String, Object> param = new HashMap<>();
    	param.put("LOTID", lotData.get("LOTID").toString());
    	param.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID").toString());
    	param.put("WORKCOUNT", lotData.get("WORKCOUNT").toString());
    	
    	List<Map<String,Object>> result = generalDao.addSelect(NAMESPACE + ".GetLotWorkResultByTrackIn",param );
    	
    	if(result.size() == 0 )
    	{
    		throw new BizException("NotExistsWorkResult");
    	}
    	
    	Map<String, Object> paramLotWorkResult = new HashMap<>();
    	paramLotWorkResult.put("P_LOTID", lotData.get("LOTID").toString());
    	paramLotWorkResult.put("P_TXNHISTKEY", result.get(0).get("TXNHISTKEY").toString());
    	
    	List<Map<String,Object>> lotWorkResultData = generalDao.addSelect(NAMESPACE + ".selectLotWorkResultData",paramLotWorkResult );
    	
    	return lotWorkResultData.get(0);
    }
    
    
    
    public Map<String, Object> ReceiveCancelLot(Map<String, Object> lotData , String txnId )
    		throws Exception{
    	
    	String processState = changeProcessState(lotData.get("LOTID").toString(), "CancelReceiveLot" , "LotProcessState", LotProcessState.Wait);
    	
    	Map<String, Object> paramLotData = new HashMap<>();
    	
    	lotData.put("LOTID",lotData.get("LOTID").toString());
    	lotData.put("RECEIVEUSER", null);
    	lotData.put("RECEIVETIME", null);
    	lotData.put("LASTTXNID", null);
    	lotData.put("LASTTXNHISTKEY" , null);
    	lotData.put("LASTTXNUSER", SessionUtil.getUserId());
    	lotData.put("LASTTXNGROUPHISTKEY",null);
    	lotData.put("PROCESSSTATE", processState);
    	lotData.put("MODIFIER" , SessionUtil.getUserId());
    	
    	generalDao.addUpdate(NAMESPACE + ".updateReceiveCancelLot", lotData);
    	generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);	
    	
    	Map<String,Object> changeLotData =  ValidateLotInfo(lotData.get("LOTID").toString());
    	
    	return changeLotData;
    }
    
    /**
   	 *  bas_stateTransition테이블에  processState 코드를 가져온다 
   	 * @param String lotId, String transitionId, String stateModelId , String fromStateId 
   	 * @return String processState
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
    public String changeProcessState(String lotId, String transitionId, String stateModelId , String fromStateId )
    		throws Exception{
    	
    	Map<String,Object> stateTransitionList = getStateTransition(stateModelId, fromStateId , transitionId);
    	
    	String processState = stateTransitionList.get("TOSTATEID").toString();
    	
    	return processState;
    }
    
    /**
   	 *  변경될 processState 값을 리턴
   	 * @param String stateModelId , String fromStateId, String transitionId
   	 * @return String processState
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
    private Map<String,Object> getStateTransition(String stateModelId , String fromStateId, String transitionId)
    		throws Exception{
    	
    	Map<String,Object> stateTransitionKey = new HashMap<>();
    	stateTransitionKey.put("STATEMODELID",stateModelId);
    	stateTransitionKey.put("TRANSITIONID",transitionId);
    	stateTransitionKey.put("FROMSTATEID",fromStateId);
    	
    	List<Map<String,Object>> stateTransitionList = generalDao.addSelect(NAMESPACE + ".selectStateTransitionList",stateTransitionKey );
    	
    	if(stateTransitionList.size() == 0) {
    		throw new BizException("NotExistsStateTranstionList");
    	}
    	
    	return stateTransitionList.get(0);
    	
    }
    /*
    public String GetCancelLotLotState(Map<String,Object>lotData, String transitionId)
    		throws Exception {
    	String processState ="";
    	String stepType= GetStepTypeByLot(lotData);
    	List<String> stepList = Arrays.asList(stepType.split(","));
    	
    	switch(transitionId)
    	{
    		case TransitionId.CancelReceiveLot : 
    			processState = LotProcessState.WaitForReceive;
    			break;
    		case TransitionId.CancelTrackIn :
    			processState = LotProcessState.Wait;
    			if(!stepList.contains(LotProcessState.WaitForReceive))
    			{
    				processState = LotProcessState.WaitForReceive;
    			}
    			System.out.println("PROCESSSTATE ============ > " + processState);
    			break;
    		case TransitionId.CancelTrackOut:
    			processState = LotProcessState.Run;
    			if(!stepList.contains(LotProcessState.Wait))
    			{
    				processState = LotProcessState.Wait;
    				if(!stepList.contains(LotProcessState.WaitForReceive))
    				{
    					processState = LotProcessState.WaitForReceive;
    				}
    			}
    			break;
    		case TransitionId.CancelSendLot :
    			processState = LotProcessState.WaitForSend;
	    		if(!stepList.contains(LotProcessState.Run))
	    		{
	    			processState= LotProcessState.Run;
	    			if(!stepList.contains(LotProcessState.Wait))
	    			{
	    				processState = LotProcessState.Wait;
	    				if(!stepList.contains(LotProcessState.WaitForReceive))
	    				{
	    					processState = LotProcessState.WaitForReceive;
	    				}
	    			}
	    		}
    			break;
    	}
    	
    	
    	return processState;
    	
    } */
    public String GetCancelLotLotState(Map<String,Object>lotData, String transitionId)
    		throws Exception {
    	String processState ="";
    	String stepType= GetStepTypeByLot(lotData);
    	List<String> stepList = Arrays.asList(stepType.split(","));
    	
    	switch(transitionId)
    	{
    		case TransitionId.CancelReceiveLot : 
    			processState = LotProcessState.WaitForReceive;
    			break;
    		case TransitionId.CancelTrackIn :
    			processState = LotProcessState.Wait;
    			if(!stepList.contains(LotProcessState.WaitForReceive))
    			{
    				processState = LotProcessState.WaitForReceive;
    			}
    			System.out.println("PROCESSSTATE ============ > " + processState);
    			break;
    		case TransitionId.CancelTrackOut:
    			processState = LotProcessState.Run;
    			if(!stepList.contains(LotProcessState.Wait))
    			{
    				processState = LotProcessState.Wait;
    				if(!stepList.contains(LotProcessState.WaitForReceive))
    				{
    					processState = LotProcessState.WaitForReceive;
    				}
    			}
    			break;
    		case TransitionId.CancelSendLot :
    			processState = LotProcessState.WaitForSend;
	    		if(!stepList.contains(LotProcessState.WaitForSend))
	    		{
	    			processState= LotProcessState.Run;
	    			if(!stepList.contains(LotProcessState.Run))
	    			{
	    				processState = LotProcessState.Wait;
	    				if(!stepList.contains(LotProcessState.Wait))
	    				{
	    					processState = LotProcessState.WaitForReceive;
	    				}
	    			}
	    		}
    			break;
    	}
    	
    	
    	return processState;
    	
    }
    
    public void CancelLotWorkResult(Map<String,Object> lotData, String transitionId )
    		throws Exception{
    	
    	String stepType = GetStepTypeByLot(lotData) ;
    	
    	List<String> stepList = Arrays.asList(stepType.split(","));
    	
    	switch(transitionId)
    	{
    		case TransitionId.CancelReceiveLot : 
    			CancelWorkResultByWorkState(lotData, transitionId );
    			break;
    		case TransitionId.CancelTrackIn : 
    			CancelWorkResultByWorkState(lotData, transitionId );
    			if(!stepList.contains(LotProcessState.WaitForReceive))
    			{
    				CancelWorkResultByWorkState(lotData, TransitionId.CancelReceiveLot );
    				
    			}
    			break;
    		case TransitionId.CancelTrackOut : 
    			CancelWorkResultByWorkState(lotData, transitionId );
    			if(!stepList.contains(LotProcessState.Wait))
    			{
    				CancelWorkResultByWorkState(lotData, TransitionId.CancelTrackIn );
    				if(!stepList.contains(LotProcessState.WaitForReceive))
    				{
    					CancelWorkResultByWorkState(lotData, TransitionId.CancelReceiveLot );
    				}
    			}
    			break;
    		case TransitionId.CancelSendLot :
	    		CancelWorkResultByWorkState(lotData, transitionId );
				if(!stepList.contains(LotProcessState.Run))
				{
					CancelWorkResultByWorkState(lotData, TransitionId.CancelTrackOut );
					if(!stepList.contains(LotProcessState.Wait))
					{
						CancelWorkResultByWorkState(lotData, TransitionId.CancelTrackIn );
						if(!stepList.contains(LotProcessState.WaitForReceive))
						{
							CancelWorkResultByWorkState(lotData, TransitionId.CancelReceiveLot );
						}
					}
					
				}
				break;
    	}
    	
    }
    
    /**
   	 *  작업(인수취소, 작업시작취소, 작업종료 취소, 인계취소) 에 따라 PCM_LOTWORKRESULT의 값을 변경 한다.
   	 * @param String stateModelId , String fromStateId, String transitionId
   	 * @return void
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
   //private void CancelWorkResultByWorkState(Map<String,Object> lotData , String transitionId , String userId)
    private void CancelWorkResultByWorkState(Map<String,Object> lotData , String transitionId )
    		throws Exception{
    	Map<String, Object> lotWorkResultData = GetWorkResult(lotData);
    	Map<String, Object> paramLotWorkResult = new HashMap<>();
    	paramLotWorkResult.put("LOTID",lotWorkResultData.get("LOTID"));
		paramLotWorkResult.put("P_TXNHISTKEY", lotWorkResultData.get("TXNHISTKEY"));
		paramLotWorkResult.put("LASTTXNUSER", SessionUtil.getUserId());
		
		
		paramLotWorkResult.put("TRANSITIONID", transitionId);
		
		//System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TRANSITIONID : " + transitionId);
		
    	switch(transitionId)
    	{
    		case TransitionId.CancelReceiveLot : 
		
    			paramLotWorkResult.put("RECEIVETIME", null);
    			paramLotWorkResult.put("RECEIVEUSER", null);
    			paramLotWorkResult.put("RECEIVELEADTIME", null);
    			paramLotWorkResult.put("RECEIVEPCSQTY", null);
    			paramLotWorkResult.put("RECEIVEPANELQTY", null);
    			paramLotWorkResult.put("RECEIVEARRAYQTY", null);
    			
    			//generalDao.addUpdate(NAMESPACE + ".updateLotWorkResultCancelReceiveLot", paramLotWorkResult);
    			
    			break;
    		case TransitionId.CancelTrackIn :
    			
    			paramLotWorkResult.put("WORKSTARTTIME", null);
    			paramLotWorkResult.put("WORKSTARTUSER", null);
    			paramLotWorkResult.put("WORKSTARTLEADTIME", null);
    			paramLotWorkResult.put("WORKSTARTPCSQTY", null);
    			paramLotWorkResult.put("WORKSTARTPANELQTY", null);
    			paramLotWorkResult.put("WORKSTARTARRAYQTY", null);
    			
    			//generalDao.addUpdate(NAMESPACE + ".updateLotWorkResultCancelTrackIn", paramLotWorkResult);
    			
    			break;
    		case TransitionId.CancelTrackOut : 
    			 			
    			paramLotWorkResult.put("WORKENDTIME", null);
    			paramLotWorkResult.put("WORKENDUSER", null);
    			paramLotWorkResult.put("WORKENDLEADTIME", null);
    			paramLotWorkResult.put("WORKENDPCSQTY", null);
    			paramLotWorkResult.put("WORKENDPANELQTY", null);
    			paramLotWorkResult.put("WORKENDARRAYQTY", null);
    			
    			//generalDao.addUpdate(NAMESPACE + ".updateLotWorkResultCancelTrackOut", paramLotWorkResult);
    			
    			break;
    		case TransitionId.CancelSendLot :

				
    			paramLotWorkResult.put("SENDTIME", null);
    			paramLotWorkResult.put("SENDUSER", null);
    			paramLotWorkResult.put("SENDLEADTIME", null);
    			paramLotWorkResult.put("SENDPCSQTY", null);
    			paramLotWorkResult.put("SENDPANELQTY", null);
    			paramLotWorkResult.put("SENDARRAYQTY", null);
    			
    			//generalDao.addUpdate(NAMESPACE + ".updateLotWorkResultCancelSendLot", paramLotWorkResult);
    			break;
    	}
    	
    	generalDao.addUpdate(NAMESPACE + ".updateLotWorkResultCancel", paramLotWorkResult);
    	
    	
    }
    
    /**
   	 *  LotData 의 StepType을 리턴한다.
   	 * @param Map<String,Object> lotData
   	 * @return String stepType
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
    private String GetStepTypeByLot(Map<String,Object> lotData)
    		throws Exception{
    	String stepClass ="";
    	String stepType ="";
    	String resourceStep="";
    	Map<String ,Object> paramResourceKey = new HashMap<>();
    	paramResourceKey.put("RESOURCEID", lotData.get("RESOURCEID"));
    	paramResourceKey.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
    	paramResourceKey.put("PLANTID", lotData.get("PLANTID"));
    	
    	List<Map<String,Object>> resourceDataList = generalDao.addSelect(NAMESPACE + ".selectResourceData",paramResourceKey );
    	
    	if(resourceDataList.size()>0)
    	{
    		resourceStep = StringUtil.Object2String(resourceDataList.get(0).get("STEPCLASS")); 
    	}
    	
    	if(resourceDataList ==null || StringUtil.isNullOrEmpty(resourceStep) )
    	{
    		Map<String,Object> paramProcessSegmentKey = new HashMap<>();
    		paramProcessSegmentKey.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID").toString());
    		paramProcessSegmentKey.put("PROCESSSEGMENTVERSION",lotData.get("PROCESSSEGMENTVERSION").toString());
    		
    		List<Map<String,Object>> processSegmentDataList = generalDao.addSelect(NAMESPACE + ".selectProcessSegmentData",paramProcessSegmentKey );
    		
    		if(processSegmentDataList==null){
    			throw new BizException("InValidData001");
    		}
    		stepClass = processSegmentDataList.get(0).get("STEPCLASS").toString();
    	}
    	else
    	{
    		stepClass = resourceDataList.get(0).get("STEPCLASS").toString();
    	}
    	
    	stepType = GetStepTypeByStepClass(stepClass);
    	
    	return stepType;
    	
    }
    
    /**
   	 *   stepClass의 StepType을 리턴한다.
   	 * @param String stepClass
   	 * @return String stepType
   	 * @Create Date: 2021.04.06
   	 * @Author: 김기수
   	 **/
    private String GetStepTypeByStepClass(String stepClass)
    {
    	Map<String , Object> paramCode = new HashMap<>();
    	paramCode.put("LOOKUP_TYPE",stepClass);
    	
    	List<Map<String,Object>> resultStepTypeList = generalDao.addSelect(NAMESPACE + ".selectStepTypeList",paramCode );
    	
    	String stepType ="";
    	
    	
    	for (int i = 0, len = resultStepTypeList.size(); i < len; i++)
		{
			
			stepType += resultStepTypeList.get(i).get("LOOKUP_CODE").toString() + ",";
		}
    	
    	stepType = stepType.substring(0, stepType.length() - 1);
    	
    	return stepType;
		
    }
    
    
	/**
	 * pcm_lotEquipment 를 업데이트. (receiveTimed이 not null이 면 null 로 변경 , receivetime이 null이면 삭제)
	 * @param Map<String,Object> lotData, String transitionId
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
    public void SaveLotEquipment(Map<String,Object> lotData , String transitionId)
    		throws Exception {
    	
    	String lotId = lotData.get("LOTID").toString();
    	
    	switch(transitionId)
    	{
    		case	 TransitionId.CancelTrackIn :
    			Map<String, Object> paramLotEquipment = new HashMap<>();
    			paramLotEquipment.put("LOTID" , lotId);
    			paramLotEquipment.put("PROCESSSTATE" , LotProcessState.Wait);
    			paramLotEquipment.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
    			paramLotEquipment.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
    			paramLotEquipment.put("WORKCOUNT" , lotData.get("WORKCOUNT"));
    			
    			List<Map<String, Object>> lotEquipmentDataList = generalDao.addSelect(NAMESPACE + ".selectLotEquipmentData",paramLotEquipment );
    			
    			for (int i =0 , len = lotEquipmentDataList.size(); i < len ;i++)
    			{
    				Map<String , Object> lotEquipmentData = lotEquipmentDataList.get(i);
    				
    				if(lotEquipmentData.get("RECEIVETIME") ==null)
    				{
    					paramLotEquipment.put("P_TXNHISTKEY" , lotEquipmentData.get("TXNHISTKEY").toString());
    					generalDao.addUpdate(NAMESPACE + ".deleteLotEquipmentDataTrackInCancel", paramLotEquipment);
    				}
    				else
    				{
    					paramLotEquipment.put("P_PROCESSSTATE",LotProcessState.WaitForReceive);
    					paramLotEquipment.put("P_TRACKINTIME", null);
    					paramLotEquipment.put("P_RECIPEID" , null);
    					paramLotEquipment.put("P_TXNID","PCM02600" );
    					
    					generalDao.addUpdate(NAMESPACE + ".updateLotEquipmentDataTrackInCancel", paramLotEquipment);
    				}
    			}
    			
    			break;
    		default :
    	}
    	
    }
    
    public void  DeleteConsumeMaterialLotTemp(Map<String, Object> lotData ,String materialType) 
    		throws Exception{
    	String lotCreatedType = lotData.get("LOTCREATEDTYPE").toString();
    	
    	Map<String, Object> processDefInfo = GetProcessDefinitionInfo(lotData);
    	
    	String processDefId = processDefInfo.get("PROCESSDEFID").toString();
    	String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
    	
    	String processPathId = GetProcessPathId(lotData, processDefId, processDefVersion);
    	
    	Map<String, Object> paramProcessPath = new HashMap<>();
    	paramProcessPath.put("PROCESSPATHID",processPathId);
    	
    	List<Map<String, Object>> processPathDataList = generalDao.addSelect(NAMESPACE + ".selectProcessPathDataList",paramProcessPath );
    	
    	String pathSequence  = processPathDataList.get(0).get("PATHSEQUENCE").toString();
    	System.out.println("PathSequence >>>>>>>>>>>>> : "+pathSequence);
    	
    	String subProcessDefId ="";
    	
    	if(lotData.get("SUBPROCESSDEFID") == null)
    	{
    		subProcessDefId = "";
    	}
    	else
    	{
    		subProcessDefId = lotData.get("SUBPROCESSDEFID").toString();
    	}
    	if(materialType.equals("Consumable") && lotCreatedType.equals("SplitRoll") && pathSequence.equals("1") && subProcessDefId.equals(""))
    	{
    		Map<String, Object> paramCond = new HashMap<>();
    		paramCond.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
    		paramCond.put("PLANTID", lotData.get("PLANTID"));
    		paramCond.put("LOTID" , lotData.get("LOTID"));
    		paramCond.put("MATERIALTYPE" , materialType);
    		System.out.println("여기인가: "+pathSequence);
    		//Query필요
    		List<Map<String, Object>> bomSequenceList = generalDao.addSelect(NAMESPACE + ".GetMinBomSequence",paramCond );
    		
    		if(bomSequenceList.size() > 0) 
    		{
    			paramCond.put("SEQUENCE" , bomSequenceList.get(0).get("SEQUENCEBOM"));
    			paramCond.put("CONSUMABLECLASSID" , "RawMaterial");
    		}
    		
    		List<Map<String, Object>> deleteConsumeMaterialList = generalDao.addSelect(NAMESPACE + ".GetDeleteConsumeMaterialLotList",paramCond );
    		
    		for(Map<String, Object> data : deleteConsumeMaterialList)
    		{
    			Map<String, Object> paramConsumeMaterialLotTemp = new HashMap<>();
    			paramConsumeMaterialLotTemp.put("LOTID",data.get("LOTID").toString());
    			paramConsumeMaterialLotTemp.put("MATERIALLOTID", data.get("MATERIALLOTID").toString());
    			paramConsumeMaterialLotTemp.put("PROCESSSEGMENTID", data.get("PROCESSSEGMENTID").toString());
    			
    			generalDao.addUpdate(NAMESPACE + ".deleteConsumeMaterialLotTempData", paramConsumeMaterialLotTemp);
    			
    		}
    	}
    	else
    	{
    		Map<String, Object> paramCond = new HashMap<>();
    		paramCond.put("LOTID", lotData.get("LOTID"));
    		paramCond.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
    		paramCond.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
    		paramCond.put("PLANTID" , lotData.get("PLANTID"));
    		paramCond.put("MATERIALTYPE" , materialType);
    		paramCond.put("AREAID" , lotData.get("AREAID"));
    		
    		List<Map<String, Object>> consumeMaterialLotTempDataList = generalDao.addSelect(NAMESPACE + ".selectconsumeMaterialDataList",paramCond );
    		
    		for(int i = 0 , len = consumeMaterialLotTempDataList.size(); i< len; i++)
    		{
    			Map<String , Object> consumeMaterialLotTempData = consumeMaterialLotTempDataList.get(i);
    			
    			if(materialType.equals("Durable"))
    			{
    				String durableLotId = consumeMaterialLotTempData.get("MATERIALLOTID").toString();
    				
    				Map<String, Object> paramDurableLot = new HashMap<>();
    				paramDurableLot.put("DURABLELOTID" , durableLotId);
    				
    				List<Map<String, Object>> durableLotDataList = generalDao.addSelect(NAMESPACE + ".selectDurableLotData",paramDurableLot );
    				
    				if(durableLotDataList != null) 
    				{
    					paramDurableLot.put("DURABLESTATE","Available");
    					paramDurableLot.put("LASTTXNID" , "PCM02600");
    					
    					generalDao.addUpdate(NAMESPACE + ".updateDurableLotData", paramDurableLot);
    				}
    				
    			}
    			
    			generalDao.addUpdate(NAMESPACE + ".deleteConsumeMaterialLotTempConsumeData", paramCond);
    		}
    		
    		if(materialType.equals("Durable"))
    		{
    			Map<String , Object> paramLotDurableData = new HashMap<>();
    			paramLotDurableData.put("LOTID" , lotData.get("LOTID"));
    			paramLotDurableData.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
    			paramLotDurableData.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
    			paramLotDurableData.put("WORKCOUNT" , lotData.get("WORKCOUNT"));
    			
    			generalDao.addUpdate(NAMESPACE + ".deleteLotDurableData", paramLotDurableData);
    			
    		}
    	}
    }
    
    public Map<String, Object> TrackInCancelLot(String lotId , String txnId)
    		throws Exception {
    	
    	Map<String,Object> lotData = ValidateLotInfo(lotId);
    	CancelTrackInInfo info = new CancelTrackInInfo();
    	info.setLotId(lotId);
    	info.setToProcessState(GetCancelLotLotState(lotData, "CancelTrackIn" ));

    	CancelTrackIn(info);
    	
    	return ValidateLotInfo(lotId);
    }
    
    public void CancelTrackIn(CancelTrackInInfo info )
    		throws Exception{
    	Map<String, Object> lotData = getLotForUpdate(info.getLotId());
    	
    	Map<String, Object> paramProcessSegmentKey = new HashMap<>();
    	paramProcessSegmentKey.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
    	paramProcessSegmentKey.put("PROCESSSEGMENTVERSION",lotData.get("PROCESSSEGMENTVERSION"));
    	
    	List<Map<String, Object>> processSegmentDataList =  generalDao.addSelect(NAMESPACE + ".selectProcessSegmentData", paramProcessSegmentKey);
    	
    	if(!processSegmentDataList.get(0).get("ISTRACKINREQUIRED").equals("Y"))
    	{
    		throw new BizException("IsTrackInRequired");
    	}
    	
    	if(info.getToProcessState().equals(LotProcessState.Wait))
    	{
        	lotData.put("PROCESSSTATE",info.getToProcessState());
        	lotData.put("TRACKINUSER",null);
        	lotData.put("TRACKINTIME", null);
        	lotData.put("LASTTXNID",null);
        	lotData.put("LASTTXNHISTKEY" , null);
        	lotData.put("MODIFIER" , SessionUtil.getUserId());
        	lotData.put("LASTTXNUSER",SessionUtil.getUserId());
    	}
    	else if(info.getToProcessState().equals(LotProcessState.WaitForReceive))
    	{
	    	
	    	lotData.put("PROCESSSTATE",info.getToProcessState());
	    	lotData.put("RECEIVEUSER",null);
	    	lotData.put("RECEIVETIME",null);
	    	lotData.put("TRACKINUSER",null);
	    	lotData.put("TRACKINTIME", null);
	    	lotData.put("LASTTXNID",null);
	    	lotData.put("LASTTXNHISTKEY" , null);
	    	lotData.put("MODIFIER" , SessionUtil.getUserId());
	    	lotData.put("LASTTXNUSER",SessionUtil.getUserId());
	    	//lotData.put("TXNUSER",SessionUtil.getUserId());
    	}
    	//history저장 추가
    	
    	generalDao.addUpdate(NAMESPACE + ".updateLotDataTrackInCancel", lotData);
    	generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);	
    	
    	//return lotData;
    	
    	
    }
    
    public Map<String, Object> getLotForUpdate(String lotId)
    		throws Exception{
    	Map<String, Object> paramLotDataList = new HashMap<>();
    	paramLotDataList.put("LOTID", lotId);
    	
    	List<Map<String, Object>> lotList = generalDao.addSelect(NAMESPACE + ".selectPcmLotList", paramLotDataList);
    	
    	return lotList.get(0);
    
    }
    
    public Map<String,Object> OspCancelSendLot(String lotId, String toAreaId, String toPlantId, String txnInfo)
    		throws Exception{
    	
    	CancelSendLotInfo info = new CancelSendLotInfo();
    	
    	info.setLotId(lotId);
    	info.setAreaId(toAreaId);
    	info.setPlantId(toPlantId);
    	info.setToLotState(LotState.InProduction);
    	
    	Map<String, Object>lotData = CancelSendLotImpl(info, txnInfo);

    	
    	return lotData;
    }
    
    public Map<String,Object> CancelSendLotImpl(CancelSendLotInfo info ,String txnInfo)
    		throws Exception{
    	Map<String,Object> lotData = getLotForUpdate(info.getLotId());
    	
    	Map<String,Object> paramLotHistoryCond = new HashMap<>();
    	paramLotHistoryCond.put("P_TXNHISTKEY" , lotData.get("LASTTXNHISTKEY"));
    	paramLotHistoryCond.put("P_LOTID", lotData.get("LOTID"));
    	
    	List<Map<String,Object>> lotHistoryDataList = generalDao.addSelect(NAMESPACE + ".selectLotHistoryData", paramLotHistoryCond);
    	Map<String,Object> lotHistoryData = lotHistoryDataList.get(0);
    	
    	//Map<String, Object> lotWorkResultData = GetPreviousLotWorkResult(lotData , lotHistoryData);
    	
    	//String processState = changeProcessState(lotData.get("LOTID").toString(), "MoveDispatchLot" , "LotProcessState", LotProcessState.WaitForSend);
    	//String processPathStack = lotWorkResultData.get("PROCESSPATHSTACK").toString();
    	
    	//if(processPathStack.isEmpty())
    		//processPathStack = lotHistoryData.get("PROCESSPATHSTACK").toString();
    	
    	//lotData.put("FACTORYID",lotWorkResultData.get("FACTORYID"));
    	//lotData.put("PROCESSPATHSTACK",processPathStack);
    	//lotData.put("USERSEQUENCE",lotWorkResultData.get("USERSEQUENCE"));
    	//lotData.put("PROCESSSEMGENTID",lotWorkResultData.get("PROCESSSEGMENTID"));
    	//lotData.put("PROCESSSEGMENTVERSION",lotWorkResultData.get("PROCESSSEGMENTVERSION"));
    	//lotData.put("SENDTIME",null);
    	//lotData.put("SENDUSER",null);
    	//lotData.put("RESOURCEID", lotWorkResultData.get("RESOURCEID"));
    	//lotData.put("WORKCOUNT", lotWorkResultData.get("WORKCOUNT"));

    	Map<String, Object> changeLotData = new HashMap<>();
    	
    	
    	if(StringUtil.isNullOrEmpty(info.getToLotState()))
    	{
    		changeLotData.put("LOTSTATE" , lotHistoryData.get("LOTSTATE"));
    	}
    	else
    	{
    		changeLotData.put("LOTSTATE", info.getToLotState());
    	}
    	
    	if(StringUtil.isNullOrEmpty(info.getAreaId()))
    	{
    		changeLotData.put("AREAID" , lotHistoryData.get("PREVAREAID"));
    	}
    	else
    	{
    		changeLotData.put("AREAID", info.getAreaId());
    	}
    	
    	if(StringUtil.isNullOrEmpty(info.getPlantId()))
    	{
    		changeLotData.put("PLANTID" , lotHistoryData.get("PREVPLANTID"));
    	}
    	else
    	{
    		changeLotData.put("PLANTID", info.getPlantId());
    	}
    	
    	if(StringUtil.isNullOrEmpty(info.getToLocationId()))
    	{
    		changeLotData.put("LOCATIONID" , lotHistoryData.get("LOCATIONID"));
    	}
    	else
    	{
    		changeLotData.put("LOCATIONID", info.getToLocationId());
    	}
    	

    	// 
    	
    	return changeLotData;
    //	generalDao.addUpdate(NAMESPACE + ".updateLotDataCancelSendLot", lotData);
    	
    }
    
    
    public void DispatchCancelLot(Map<String,Object> lotData , Map<String,Object> prevLotWorkResultData , Map<String,Object> lotHistoryData , Map<String,Object> ospChangeLotData)
    		throws Exception{
    	String lotId = lotData.get("LOTID").toString();
    	String processState = GetCancelLotLotState(prevLotWorkResultData, TransitionId.CancelSendLot);
    	String processPathStack ="";
    	String locationId ="";
    	if( prevLotWorkResultData.get("PROCESSPATHSTACK") != null) {
    		 processPathStack = prevLotWorkResultData.get("PROCESSPATHSTACK").toString();
    	}
    	else
    	{
    		processPathStack = lotHistoryData.get("PROCESSPATHSTACK").toString();
    	}
    	if(ospChangeLotData != null && ospChangeLotData.get("LOCATIONID") != null)
    	{
    		locationId = ospChangeLotData.get("LOCATIONID").toString();
    	}
    	
    	
    	lotData.put("FACTORYID",prevLotWorkResultData.get("FACTORYID"));
    	lotData.put("AREAID" , prevLotWorkResultData.get("AREAID"));
    	lotData.put("PROCESSPATHSTACK",processPathStack);
    	lotData.put("PROCESSSTATE", processState);
    	lotData.put("USERSEQUENCE",prevLotWorkResultData.get("USERSEQUENCE"));
    	lotData.put("PROCESSSEGMENTID",prevLotWorkResultData.get("PROCESSSEGMENTID"));
    	lotData.put("PROCESSSEGMENTVERSION",prevLotWorkResultData.get("PROCESSSEGMENTVERSION"));
    	if(processState.equals(LotProcessState.WaitForSend))
    	{
	    	lotData.put("SENDTIME",null);
	    	lotData.put("SENDUSER",null);
    	}else if(processState.equals(LotProcessState.Run))
    	{
    		lotData.put("SENDTIME",null);
	    	lotData.put("SENDUSER",null);
	    	lotData.put("TRACKOUTTIME",null);
	    	lotData.put("TRACKOUTUSER",null);
    	}else if(processState.equals(LotProcessState.Wait))
    	{
    		lotData.put("SENDTIME",null);
	    	lotData.put("SENDUSER",null);
	    	lotData.put("TRACKOUTTIME",null);
	    	lotData.put("TRACKOUTUSER",null);
	    	lotData.put("TRACKINTIME",null);
	    	lotData.put("TRACKINUSER",null);
    	}
    	lotData.put("RESOURCEID", prevLotWorkResultData.get("RESOURCEID"));
    	lotData.put("WORKCOUNT", prevLotWorkResultData.get("WORKCOUNT"));
    	lotData.put("LOTSTATE", "InProduction");
    	lotData.put("PROCESSSTATE",processState);
    	lotData.put("LOCATIONID",locationId);
    	lotData.put("TXNHISTKEY",null);
    	lotData.put("TXNID","PCM02700");
    	lotData.put("TXNUSER",SessionUtil.getUserId());
  
    	generalDao.addUpdate(NAMESPACE + ".updateLotDataCancelSendLot", lotData);	
    	generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);
    }
    
    
    
	public Map<String, Object> GetPreviousLotWorkResult(Map<String,Object> lotData, Map<String,Object> lotHistoryData)
			throws Exception{
			
			String lotId = lotData.get("LOTID").toString();
			
			Map<String,Object> paramCond = new HashMap<>();
			paramCond.put("LOTID" , lotId);
			paramCond.put("PROCESSSEGMENTID" , lotHistoryData.get("PREVPROCESSSEGMENTID"));
			paramCond.put("PROCESSSEGMENTVERSION" , lotHistoryData.get("PREVPROCESSSEGMENTVERSION"));
			
			List<Map<String,Object>> resultCount = generalDao.addSelect(NAMESPACE+ ".GetLotWorkResultCount",paramCond );
			
			double workCount = 0;
			
			if(resultCount.size() > 0)
			{
				Map<String, Object>mapResult = resultCount.get(0);
				workCount = Double.parseDouble(mapResult.get("RESULTCNT").toString());
				
			}
			
			if(workCount > 0 )
			{
				workCount--;
			}
			
			Map<String, Object> paramLotWorkResult = new HashMap<>();
			paramLotWorkResult.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
			paramLotWorkResult.put("PLANTID" , lotData.get("PLANTID"));
			paramLotWorkResult.put("LOTID" , lotId);
			paramLotWorkResult.put("PROCESSSEGMENTID" , lotHistoryData.get("PREVPROCESSSEGMENTID"));
			paramLotWorkResult.put("PROCESSSEGMENTVERSION" , lotHistoryData.get("PREVPROCESSSEGMENTVERSION"));
			
			List<Map<String,Object>> lotWorkResultDataList = generalDao.addSelect(NAMESPACE + ".selectLotWorkResultOrderByWorkCount",paramLotWorkResult );
			
			return lotWorkResultDataList.get(0);
		}
	
	public void DeleteLotComment(Map<String, Object> lotData) 
			throws Exception{
		Map<String,Object> paramLotComment = new HashMap<>();
		paramLotComment.put("LOTID",lotData.get("LOTID"));
		paramLotComment.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
		paramLotComment.put("PROCESSSEGMENTVERSION",lotData.get("PROCESSSEGMENTVERSION"));
		paramLotComment.put("WORKCOUNT",lotData.get("WORKCOUNT"));
		paramLotComment.put("TRANSITIONID","TrackOut");
		
		List<Map<String,Object>> lotCommentDataList = generalDao.addSelect(NAMESPACE + ".selectLotCommentDataList",paramLotComment );
		
		if(!(lotCommentDataList == null) || !(lotCommentDataList.size()==0) ){
    		generalDao.addUpdate(NAMESPACE + ".deleteLotComment", paramLotComment);
    	}	
	}
	
	public void DeleteLotReelInfo(Map<String,Object> lotData)
			throws Exception{
		Map<String,Object> paramLotReelCond = new HashMap<>();
		paramLotReelCond.put("LOTID",lotData.get("LOTID"));
		paramLotReelCond.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
		paramLotReelCond.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		
		List<Map<String,Object>> lotReelDataList =  generalDao.addSelect(NAMESPACE + ".selectLotReelDataList",paramLotReelCond );
		
		if(!(lotReelDataList == null) || !(lotReelDataList.size()==0) ){
    		generalDao.addUpdate(NAMESPACE + ".deleteLotReelData", paramLotReelCond);
    	}	
		
	}
	
	public void UpdateLotEquipmentTrackOutCancel(Map<String,Object>lotData)
			throws Exception{
		Map<String,Object> paramLotEquipmentCond = new HashMap<>();
		paramLotEquipmentCond.put("LOTID",lotData.get("LOTID"));
		paramLotEquipmentCond.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
		paramLotEquipmentCond.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		
		List<Map<String, Object>> lotEquipmentDataList = generalDao.addSelect(NAMESPACE + ".selectLotEquipmentDataListTrackOutCancel",paramLotEquipmentCond );
		
		for(int i=0, len=lotEquipmentDataList.size() ; i< len; i++)
		{
			Map<String, Object> paramLotEquipmentData = lotEquipmentDataList.get(i);
			paramLotEquipmentData.put("P_PROCESSSTATE",LotProcessState.Wait);
			paramLotEquipmentData.put("P_TRACKOUTTIME",null);
			paramLotEquipmentData.put("P_LOTQTY",null);
			paramLotEquipmentData.put("P_TXNHISTKEY",TxnHistKey.getTxnHistKey());
			paramLotEquipmentData.put("P_TXNID","pcm02000");
			paramLotEquipmentData.put("P_TXNUSER",SessionUtil.getUserId());
			paramLotEquipmentData.put("P_MODIFIER",SessionUtil.getUserId() );

			generalDao.addUpdate(NAMESPACE + ".updateLotEquipemntTrackOutCancel", paramLotEquipmentData);
			
		}
	}
	
	
    public void	DeleteLotWorkResult(Map<String,Object> lotWorkResult , Map<String,Object> lotData)
    		throws Exception{
    	Map<String,Object> paramLotWorkResult = new HashMap<>();
    	paramLotWorkResult.put("LOTID",lotWorkResult.get("LOTID"));
    	paramLotWorkResult.put("WORKCOUNT" , lotData.get("WORKCOUNT"));
    	paramLotWorkResult.put("USERSEQUENCE_TO", lotData.get("USERSEQUENCE"));
    	paramLotWorkResult.put("USERSEQUENCE_FR" , lotWorkResult.get("USERSEQUENCE"));
    	
    	//String userSequence_to = lotData.get("USERSEQUENCE").toString();
    	//String userSequence_fr = lotWorkResult.get("USERSEQUENCE").toString();
    	
    	
    	String isRework = StringUtil.Object2String(lotData.get("ISREWORK"));
    	
    	//rework 반영 : rework 로 인계 취소시 UserSequence  문제 발생으로 변경  
    	if(isRework.equals("N"))
    	{
    		generalDao.addUpdate(NAMESPACE + ".deleteLotWorkResult", paramLotWorkResult);
    	}
    	//generalDao.addUpdate(NAMESPACE + ".deleteLotWorkResult", paramLotWorkResult);
    	else {
    		generalDao.addUpdate(NAMESPACE + ".deleteLotWorkResultRework", paramLotWorkResult);
    	}
    	
    }
    
	public void cancelConsumeMaterial(Map<String, Object> materialInfo , String txnInfo)
			throws Exception {
		Map<String, Object> lotData = getLotForUpdate(materialInfo.get("LOTID").toString());
		
		switch(materialInfo.get("MATERIALTYPE").toString())
		{
			case (MaterialType.MATERIALTYPE_DURABLE) :
				break;
			case (MaterialType.MATERIALTYPE_CONSUMABLE) :
				Map<String, Object> paramCancelConsumeConsumableLotInfo = new HashMap<>();
				paramCancelConsumeConsumableLotInfo.put("LOTID" , materialInfo.get("LOTID"));
				paramCancelConsumeConsumableLotInfo.put("CONSUMABLELOTID" , materialInfo.get("MATERIALID"));
				paramCancelConsumeConsumableLotInfo.put("WAREHOUSE" , materialInfo.get("WAREHOUSEID"));
				paramCancelConsumeConsumableLotInfo.put("QTY" , materialInfo.get("CONSUMEDQTY"));
				
				cancelConsumeConsumableLot(paramCancelConsumeConsumableLotInfo , txnInfo);
				
				Map<String,Object> createConsumeMaterialLotInfo = new HashMap<>();
				
				createConsumeMaterialLotInfo.put("MATERIALLOTID" , materialInfo.get("MATERIALID"));
				createConsumeMaterialLotInfo.put("WAREHOUSEID" , materialInfo.get("WAREHOUSEID"));
				createConsumeMaterialLotInfo.put("MATERIALTYPE" , materialInfo.get("MATERIALTYPE"));
				createConsumeMaterialLotInfo.put("LOTID" , lotData.get("LOTID"));
				createConsumeMaterialLotInfo.put("CONSUMEDQTY" , Double.valueOf(materialInfo.get("CONSUMEDQTY").toString())*-1);
				createConsumeMaterialLotInfo.put("EQUIPMENTID" , lotData.get("EQUIPMENTID"));
				createConsumeMaterialLotInfo.put("LOCATIONID" , lotData.get("LOCATIONID"));
				createConsumeMaterialLotInfo.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
				createConsumeMaterialLotInfo.put("PRODUCTDEFID" , lotData.get("PRODUCTDEFID"));
				createConsumeMaterialLotInfo.put("PRODUCTDEFVERSION" , lotData.get("PRODUCTDEFVERSION"));
				createConsumeMaterialLotInfo.put("PROCESSDEFID" , lotData.get("PROCESSDEFID"));
				createConsumeMaterialLotInfo.put("PROCESSDEFVERSION" , lotData.get("PROCESSDEFVERSION"));
				createConsumeMaterialLotInfo.put("PROCESSPATHID" , lotData.get("PROCESSPATHID"));
				createConsumeMaterialLotInfo.put("USERSEQUENCE" , lotData.get("USERSEQUENCE"));
				createConsumeMaterialLotInfo.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
				createConsumeMaterialLotInfo.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
				
				createConsumeMaterialLot(createConsumeMaterialLotInfo , txnInfo );
				
				break;
			case (MaterialType.MATERIALTYPE_PRODUCT) :
				
				break;
			default : 
			{
				throw new Exception("CancelConsumeMaterialType");
			}
				
		}
		
	}
	
	public void createConsumeMaterialLot(Map<String,Object> consumeMaterialLotInfo, String txnInfo)
			throws Exception {
		if(consumeMaterialLotInfo.get("MATERIALTYPE") == null || consumeMaterialLotInfo.get("MATERIALTYPE").toString()=="")
		{
			throw new BizException("ConsumeMaterialTypeCheck");
		}
		
		if(consumeMaterialLotInfo.get("MATERIALTYPE").equals(MaterialType.MATERIALTYPE_CONSUMABLE))
		{
			//Validate ConsumableLot
			Map<String,Object> valConsumableLot = getConsumableLotForUpdate(consumeMaterialLotInfo.get("MATERIALLOTID").toString() , consumeMaterialLotInfo.get("WAREHOUSEID").toString());
			
		}
		else if(consumeMaterialLotInfo.get("MATERIALTYPE").equals(MaterialType.MATERIALTYPE_DURABLE))
		{
			//validate DurableLot
			Map<String,Object> valDurableLot = getDurableLotForUpdate(consumeMaterialLotInfo.get("MATERIALLOTID").toString());
		}
		
		// Validate Lot
		
		Map<String, Object> consumeMaterialLotData = new HashMap<>();
		consumeMaterialLotData.put("MATERIALLOTID" , consumeMaterialLotInfo.get("MATERIALLOTID"));
		consumeMaterialLotData.put("MATERIALTYPE" , consumeMaterialLotInfo.get("MATERIALTYPE"));
		consumeMaterialLotData.put("LOTID" , consumeMaterialLotInfo.get("LOTID"));
		consumeMaterialLotData.put("CONSUMEDQTY" , consumeMaterialLotInfo.get("CONSUMEDQTY"));
		consumeMaterialLotData.put("EQUIPMENTID" , consumeMaterialLotInfo.get("EQUIPMENTID"));
		consumeMaterialLotData.put("LOCATIONID" , consumeMaterialLotInfo.get("LOCATIONID"));
		consumeMaterialLotData.put("ENTERPRISEID" , consumeMaterialLotInfo.get("ENTERPRISEID"));
		consumeMaterialLotData.put("PLANTID" , consumeMaterialLotInfo.get("PLANTID"));
		consumeMaterialLotData.put("AREAID" , consumeMaterialLotInfo.get("AREAID"));
		consumeMaterialLotData.put("PRODUCTDEFID" , consumeMaterialLotInfo.get("PRODUCTDEFID"));
		consumeMaterialLotData.put("PRODUCTDEFVERSION" , consumeMaterialLotInfo.get("PRODUCTDEFVERSION"));
		consumeMaterialLotData.put("PROCESSDEFID" , consumeMaterialLotInfo.get("PROCESSDEFID"));
		consumeMaterialLotData.put("PROCESSDEFVERSION" , consumeMaterialLotInfo.get("PROCESSDEFVERSION"));
		consumeMaterialLotData.put("PROCESSPATHID" , consumeMaterialLotInfo.get("PROCESSPATHID"));
		consumeMaterialLotData.put("USERSEQUENCE" , consumeMaterialLotInfo.get("USERSEQUENCE"));
		consumeMaterialLotData.put("PROCESSSEGMENTID" , consumeMaterialLotInfo.get("PROCESSSEGMENTID"));
		consumeMaterialLotData.put("PROCESSSEGMENTVERSION" , consumeMaterialLotInfo.get("PROCESSSEGMENTVERSION"));
		consumeMaterialLotData.put("WAREHOUSEID" , consumeMaterialLotInfo.get("WAREHOUSEID"));

		generalDao.insert(NAMESPACE + ".insertConsumeMaterialLotData", consumeMaterialLotData);
	}
	
	public void cancelConsumeConsumableLot(Map<String,Object> cancelConsumableLotInfo, String txnInfo )
			throws Exception {
		if(Double.valueOf(cancelConsumableLotInfo.get("QTY").toString()) <= 0)
		{
			throw new BizException("CancelConsumedQty", cancelConsumableLotInfo.get("QTY").toString());
		}
		
		Map<String, Object> consumableLotData = getConsumableLotForUpdate(cancelConsumableLotInfo.get("CONSUMABLELOTID").toString() , cancelConsumableLotInfo.get("WAREHOUSEID").toString());
		
		//double currentQty = Math.round(Double.valueOf(consumableLotData.get("CONSUMABLELOTQTY").toString()) * 100000) /100000.0;
		//double consumeQty = Math.round(Double.valueOf(consumableLotInfo.get("CONSUMEDQTY").toString()) * 100000) /100000.0;
		
		double sumQty = Double.valueOf(consumableLotData.get("CONSUMABLELOTQTY").toString()) + Double.valueOf(cancelConsumableLotInfo.get("QTY").toString());
		if(Double.valueOf(consumableLotData.get("CREATEDQTY").toString()) < sumQty)
		{
			throw new BizException("InvalidData");
		}
		
		
		consumableLotData.put("P_CONSUMABLELOTQTY" , sumQty);
		consumableLotData.put("P_TXNID" , txnInfo);
		consumableLotData.put("P_MODIFIER" ,SessionUtil.getUserId() );
		consumableLotData.put("P_TXNUSER" , SessionUtil.getUserId());

		generalDao.addUpdate(NAMESPACE + ".updateConsumableLotData", consumableLotData);
		
		
	}
	
	public Map<String, Object> getConsumableLotForUpdate(String consumableLotId, String wareHouseId)
			throws Exception{
		Map<String,Object> paramConsumableLotKey = new HashMap<>();
		paramConsumableLotKey.put("CONSUMABLELOTID" , consumableLotId);
		paramConsumableLotKey.put("WAREHOUSEID" , wareHouseId);
		
		List<Map<String,Object>> consumableLotDataList = generalDao.addSelect(NAMESPACE + ".selectConsumableLotDataList",paramConsumableLotKey );
		if(consumableLotDataList ==null)
		{
			throw new BizException("ConsumableLotIdNotExists");
		}
		
		return consumableLotDataList.get(0);
	}
	
	public Map<String, Object> getDurableLotForUpdate(String durableLotId)
			throws Exception{
		Map<String,Object> paramDurableLotKey = new HashMap<>();
		paramDurableLotKey.put("DURABLELOTID" , durableLotId);
		
		List<Map<String,Object>> durableLotDataList = generalDao.addSelect(NAMESPACE + ".selectDurableLotDataList",paramDurableLotKey );
		if(durableLotDataList ==null)
		{
			throw new BizException("DurableLotExists");
		}
		
		return durableLotDataList.get(0);
	}
	
	public void MaterialTransMain(String enterpriseId , String plantId , String txnGroupHistKey , String transactionReasonCode)
			throws Exception{
		Map<String,Object> insertMap = new HashMap<>();
		insertMap.put("P_ENTERPRISEID" , enterpriseId);
		insertMap.put("P_PLANTID" , plantId);
		insertMap.put("P_TXNGROUPHISTKEY" , txnGroupHistKey);
		insertMap.put("P_TRANSACTIONREASONECODE" , transactionReasonCode);
		
		String relKeyNo = txnGroupHistKey;
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".getConsumeMaterialLotAPI",insertMap );
		if(degreeList != null && degreeList.size()  > 0)
		{
			Map<String,Object>degree  = degreeList.get(0);
			
			String areaId = degree.get("AREAID").toString();
			CheckCloseCsm(enterpriseId, plantId, areaId);
			for(int i=0 ,len=degreeList.size(); i < len;i++)
			{
				Map<String,Object> degreeCheck = degreeList.get(i);
				if(degreeCheck.get("ISLOTMNG").toString().equals("Y"))
				{
					if(degreeCheck.get("MATERIALLOTID").toString().equals("")|| degreeCheck.get("MATERIALLOTID").toString().equals("*"))
					{
						throw new BizException("InvalidCsmData008");
					}
				}
			}
			
			String transactionCode = "WIP_ISSUE";
			String transactionType = "SegmentIssue";
			//icancle=1;
			String transactionNo = getConsumableTxnHeaderInsertData(degree, transactionType);
			for(int i=0 ,len=degreeList.size(); i < len;i++)
			{
				Map<String,Object> degreeDetail = degreeList.get(i);
				double transactionSequence = getConsumableTxnLineInsertData("Out",degreeDetail,transactionNo,transactionCode,txnGroupHistKey);
				getConsumableTransactionInsertData("Out" , degreeDetail, transactionNo,transactionSequence , transactionCode, transactionType);
				//getConsumableMonthlyStockMain();
			}
		}
		
	}
	
	public void CheckCloseCsm(String enterpriseId, String plantId, String areaId)
			throws Exception{
		String periodType = "InventoryCheck";
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd HH:mm:ss");
		String today = DateUtil.today();
		String checkDate = dateFormat.format(today);
		
		String closeValue = CheckPeriodAreaCloseCsm(periodType, enterpriseId, plantId,  areaId,checkDate);
		
		if(closeValue.equals("true"))
		{
			throw new BizException("InValidCsmData007");
		}
		
		periodType = "ErpInventory";
		closeValue = CheckPeriodPlantCloseCsm(periodType , enterpriseId, plantId, checkDate);
		if(closeValue.equals("ture"))
		{
			throw new BizException("InvalidCsmData008");
		}
	}
	
	public String CheckPeriodPlantCloseCsm(String periodType, String enterpriseId, String plantId , String checkDate)
			throws Exception{
		String checkValue = "false";
		Map<String,Object> paramMap = new HashMap<>();
		paramMap.put("P_CHECKDATE" , checkDate);
		paramMap.put("P_PERIODTYPE" , periodType);
		paramMap.put("P_ENTERPRISEID" , enterpriseId);
		paramMap.put("P_PLANTID" , plantId);
		
		List<Map<String,Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetCheckPeriodPlantCloseCsm",paramMap );
		if(degreeList!=null && degreeList.size()>0)
		{
			Map<String,Object> degree = degreeList.get(0);
			int cntperiod = Integer.parseInt(degree.get("CNTPERIODID").toString());
			
			if(cntperiod>0)
			{
				checkValue="true";
			}
		}
		return checkValue;
	}
	
	public String CheckPeriodAreaCloseCsm(String periodType, String enterpriseId, String plantId,String areaId ,String checkDate)
			throws Exception{
		String checkValue="false";
		Map<String,Object> paramMap = new HashMap<>();
		paramMap.put("P_CHECKDATE" , checkDate);
		paramMap.put("P_PERIODTYPE" , periodType);
		paramMap.put("P_ENTERPRISEID" , enterpriseId);
		//paramMap.put("P_AREAID" , areaId);
		paramMap.put("P_PLANTID" , plantId);
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetCheckPeriodAreaCloseCsm",paramMap );
		if(degreeList != null && degreeList.size() > 0)
		{
			Map<String, Object> degree = degreeList.get(0);
			
			int cntPeriod = Integer.parseInt(degree.get("CNTPERIODID").toString());
			if(cntPeriod > 0)
			{
				checkValue ="true";
			}
		}
		return checkValue;
		
	}
	
	public double getConsumableTxnLineInsertData(String inOut, Map<String, Object> degree , String transactionNo , String transactionCode, String relKeyNo)
			throws Exception{
		String tmpRelKey="";
		
		Map<String,Object> consumableTxnLineData = new HashMap<>();
		consumableTxnLineData.put("ENTERPRISEID",degree.get("ENTERPRISEID"));
		consumableTxnLineData.put("PLANTID",degree.get("PLANTID"));
		consumableTxnLineData.put("TRANSACTIONNO",transactionNo);
		double transactionSequence = CreateIdLineSeq(transactionNo , degree);
		consumableTxnLineData.put("TRANSACTIONSEQUENCE",transactionSequence);
		
		consumableTxnLineData.put("CONSUMABLEDEFID",degree.get("CONSUMABLEDEFID"));
		consumableTxnLineData.put("CONSUMABLEDEFVERSION",degree.get("CONSUMABLEDEFVERSION"));
		consumableTxnLineData.put("CONSUMABLELOTID",degree.get("MATERIALLOTID"));
		
		if(inOut.equals("Out"))
		{
			consumableTxnLineData.put("FROMAREAID",degree.get("AREAID"));
			consumableTxnLineData.put("FROMWAREHOUSEID",degree.get("WAREHOUSEID"));
			consumableTxnLineData.put("RELKEYNO",degree.get("REKEYNO"));
		}
		else
		{
			consumableTxnLineData.put("TOAREAID",degree.get("AREAID"));
			consumableTxnLineData.put("TOWAREHOUSEID",degree.get("WAREHOUSEID"));
			consumableTxnLineData.put("RELKEYNO",degree.get("REKEYNO"));
		}
		
		consumableTxnLineData.put("TRANSACTIONCODE" , transactionCode);
		consumableTxnLineData.put("TRANSACTIONREASONCODE" , degree.get("TRANSACTIONREASONCODE"));
		
		consumableTxnLineData.put("UNIT" , degree.get("UNIT") );
		consumableTxnLineData.put("QTY" , Double.parseDouble(degree.get("CONSUMEDQTY").toString()) * -1 );
		consumableTxnLineData.put("DESCRIPTION" , null);
		consumableTxnLineData.put("VALIDSTATE" , "Valid");
		consumableTxnLineData.put("TXNID" ,"pcm0200" );
		
		generalDao.insert(NAMESPACE + ".insertConsumableTxnLineData", consumableTxnLineData);
		
		return transactionSequence;
	}
	
	public double CreateIdLineSeq(String transactionNo , Map<String, Object> pMap)
			throws Exception{
		Map<String, Object> param = new HashMap<>();
		param.put("ENTERPRISEID" , pMap.get("ENTERPRISEID"));
		param.put("PLANTID" , pMap.get("PLANTID"));
		param.put("TRANSACTIONNO" , transactionNo);
		List<Map<String,Object>>  degreeList = generalDao.addSelect(NAMESPACE + ".GetMaterialTransactionsequence",param );
		Map<String,Object> mapSeq = degreeList.get(0);
		String strTemp = mapSeq.get("TRANSACTIONSEQUENCE").toString();
		double dblSeq = Double.parseDouble(strTemp);
	
		return dblSeq;
	}
	
	public void getConsumableTransactionInsertData(String inOut, Map<String,Object> pMap , String transactionNo, Double transactionSequence, String transactionCode, String TransactionType )
			throws Exception{
		Map<String, Object> consumableTransactionData = new HashMap<>();
		consumableTransactionData.put("ENTERPRISEID",pMap.get("ENTERPRISEID"));
		consumableTransactionData.put("PLANTID",pMap.get("PLANTID"));
		double sequence = GetCreateTransActionSeq(pMap.get("PLANTID").toString());
		//방부장님 들어가면 협의.. 해서 처리 
		
		consumableTransactionData.put("SEQUENCE",sequence);
		consumableTransactionData.put("CONSUMABLEDEFID",pMap.get("CONSUMABLEDEFID"));
		consumableTransactionData.put("CONSUMABLEDEFVERSION",pMap.get("CONSUMABLEDEFVERSION"));
		consumableTransactionData.put("SERIALNO",pMap.get("MATERIALLOTID"));
		consumableTransactionData.put("WAREHOUSEID",pMap.get("WAREHOUSEID"));
		consumableTransactionData.put("AREAID",pMap.get("AREAID"));
		consumableTransactionData.put("TRANSACTIONTYPE",TransactionType);
		consumableTransactionData.put("TRANSACTIONCODE",transactionCode);
		consumableTransactionData.put("TRANSACTIONREASONCODE" , pMap.get("TRANSACTIONREASONCODE"));
		consumableTransactionData.put("RELKEYNO" , transactionNo);
		consumableTransactionData.put("RELSEQUENCE" , transactionSequence);
		
		if(inOut.equals("Out"))
		{
			consumableTransactionData.put("OUTBOUNDQTY" , Double.parseDouble(pMap.get("CONSUMEDQTY").toString()) * -1);
			consumableTransactionData.put("INBOUNDQTY", 0D);
		}
		else
		{
			consumableTransactionData.put("INBOUNDQTY" , Double.parseDouble(pMap.get("CONSUMEDQTY").toString()) * -1);
			consumableTransactionData.put("OUTBOUNDQTY", 0D);
		}
		
		consumableTransactionData.put("DESCRIPTION",null);
		consumableTransactionData.put("VALIDSTATE" , "Valid");
		consumableTransactionData.put("LASTTXNID" , "pcm02000");
		
		generalDao.insert(NAMESPACE + ".insertConsumableTransactionData", consumableTransactionData);
		
	}
	
	
	public double GetCreateTransActionSeq(String plantId)
			throws Exception{
		Map<String,Object> paramConsumableTransactionCond = new HashMap<>();
		paramConsumableTransactionCond.put("PLANTId" , plantId);
		
		double maxSeq;
		List<Map<String,Object>> maxSeqList = generalDao.addSelect(NAMESPACE + ".getConsumableTransactionMaxSeq",paramConsumableTransactionCond );
		
		if(maxSeqList == null )
		{
			maxSeq = 0.0;
		}
		else
		{
			maxSeq = Double.parseDouble(maxSeqList.get(0).get("MAXSEQ").toString());
		}
		
		return maxSeq;
	}
	
	public String GetCreateSeq(String plantId)
			throws Exception{
		Map<String,Object> paramConsumableTxnHeaderCond = new HashMap<>();
		paramConsumableTxnHeaderCond.put("PLANTID" ,plantId);
		String maxSeq="";
		List<Map<String,Object>> maxSeqList = generalDao.addSelect(NAMESPACE + ".getConsumableTxnHeaderTransactionNo",paramConsumableTxnHeaderCond );
		
		if(maxSeqList == null)
		{
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyymmdd");
			String today = DateUtil.today();
			 maxSeq = dateFormat.format(today)+"0001";
		}
		else
		{
			maxSeq = maxSeqList.get(0).get("MAXSEQ").toString();
		}
		
		return maxSeq;
	}
	
	public String getConsumableTxnHeaderInsertData(Map<String,Object> pMap , String transactionType)
			throws Exception{
		String transactionNo ="";
		Map<String,Object> consumableTxnHeaderData = new HashMap<>();
		
		transactionNo = GetCreateSeq(pMap.get("PLANTID").toString());
		
		consumableTxnHeaderData.put("TRANSACTIONNO" , transactionNo);
		consumableTxnHeaderData.put("ENTERPRISEID" , pMap.get("ENTERPRISEID"));
		consumableTxnHeaderData.put("TRANSACTIONTYPE" , pMap.get("TRANSACTIONTYPE"));
		consumableTxnHeaderData.put("VALIDSTATE" , "Valid");
		
		generalDao.insert(NAMESPACE + ".insertconsumableTxnHeaderData", consumableTxnHeaderData);
		
		return transactionNo;
	}
	
	public void TrackOutCancelLot(String lotId)
		throws Exception{
		//Map<String,Objcet> lotData = ValidateLotInfo(lotId);
		//String processState =changeProcessState(lotId, "CancelTrackOut" , "LotProcessState", LotProcessState.WaitForSend);
		//String processState = GetCancelLotLotState(lotData, TransitionId.CancelTrackOut);
		
		Map<String, Object> lotData = ValidateLotInfo(lotId);
		String processState = GetCancelLotLotState(lotData, TransitionId.CancelTrackOut);
		
		Map<String,Object> lotWorkResultData = GetWorkResult(lotData);
		
		String txnHistKey = ""; 
		if(lotWorkResultData.get("PREVSENDLOTHISTKEY") != null)
		{
			txnHistKey =lotWorkResultData.get("PREVSENDLOTHISTKEY").toString();
		}
		
		Map<String,Object> lotHistoryKey = new HashMap<>();
		lotHistoryKey.put("P_LOTID" , lotId);
		lotHistoryKey.put("P_TXNHISTKEY" , txnHistKey);
		
		List<Map<String,Object>> lotHistoryDataList =  generalDao.addSelect(NAMESPACE + ".selectLotHistoryData",lotHistoryKey );
		
		if(lotHistoryDataList.size() > 0 )
		{
			Map<String,Object> lotHistoryData = lotHistoryDataList.get(0);
			lotData.put("P_TRACKOUTTIME" , lotHistoryData.get("TRACKOUTTIME"));
			lotData.put("P_TRACKOUTUSER" , lotHistoryData.get("TRACKOUTUSER"));
			lotData.put("P_PROCESSSTATE" , processState);
		}
		else
		{
			lotData.put("P_TRACKOUTTIME" , null);
			lotData.put("P_TRACKOUTUSER" , null);
			lotData.put("P_PROCESSSTATE" , processState);
		}
		
		lotData.put("P_TXNID" , "pcm02000");
		lotData.put("P_TXNUSER" , SessionUtil.getUserId());
		
		generalDao.addUpdate(NAMESPACE + ".updateLotDataTrackOutCancel", lotData);
		
	}
}