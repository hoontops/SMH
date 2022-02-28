package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMConstant.TransitionId;


@Service
public class PCM03400ServiceImpl extends AbstractNbdfService implements PCM03400Service {
	
    public static final String NAMESPACE 						= "smh.pcm.dao.PCM03400Dao";
    public static final String NAMESPACE6900				= "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESPACE1     				= "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    public static final String NAMESPACECOMMON 		= "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACEWORKPROCESS 	= "smh.pcm.dao.PCMWorkProcessDao";
    
    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private PCMWipService  wipService;

    /**
    * @fn 			: selectOtherInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectOtherInfo
    * @remark		: 상세설명
* @see smh.pcm.service.PCM03400Service#selectOtherInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCommentByProcess", param),				"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSpecByProcess", param),				"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectEquipmentListForBatchTrackOut", param),		"output3");        
    }

    /**
    * @fn 			: selectBatchTrackOut
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectBatchTrackOut
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 25.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectBatchTrackOut(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectBatchTrackOut", param));        
    }
    
    /**
    * @fn 			: saveLotBatchTrackOut
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveLotBatchTrackOut
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 25.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void saveLotBatchTrackOut(UiMapDto dto) throws Exception {
    	SimpleDateFormat 				dateFormat 				= new SimpleDateFormat("yyyyMMddHHmmss");
    	DataSetMap 						paramMapDataInfo   	= getParametersDataSetMap(dto,"ds_dataInfo");
    	Map<String, Object> 			dataInfo   				= paramMapDataInfo.get(0);    	
		String 							lotIds 						= StringUtil.Object2String(dataInfo.get("LOTIDS"));
		String 							processSegmentId 		= StringUtil.Object2String(dataInfo.get("PROCESSSEGMENTID"));
		String			 					comment 				= StringUtil.Object2String(dataInfo.get("COMMENT"));
		String								equipmentId				= StringUtil.Object2String(dataInfo.get("EQUIPMENTID"));
		String 							sToday    				= this.getToDate();
   	    Date 								now         				= dateFormat.parse(sToday);
    	String[] 							lotIdArray 				= lotIds.split(","); 
    	
		for(String lotId : lotIdArray) {
			Map<String, Object> 			lotMap 				= new HashMap<>();
			lotMap.put("LOTID", lotId);
			
			Map<String, Object> 			lotData 				= generalDao.addSelectOneMap(NAMESPACE6900 + ".selectLotData", lotMap);
	   	 	
	 		String isHold 		= (String)lotData.get("ISHOLD");
	 		String isLocking 	= (String)lotData.get("ISLOCKING");
	 		String processState = (String)lotData.get("PROCESSSTATE");
	 		String processSegId = (String)lotData.get("PROCESSSEGMENTID");
	 		String firstWorker	= getFirstWorker(lotId);
	 		
			// Check Window Time
			wipService.executeCheckingWindowTimeNewTx(dto, lotData, now);

			// 자재 사용여부 체크
			List<Map<String, Object>> consumableList = generalDao.addSelect(NAMESPACE + ".selectStandardRequirementByProcess", lotData);
			
			if (consumableList.size() > 0)
			{
				// 현재 공정에서 사용되는 자재가 있습니다. '공정 관리 > 공정작업 > 작업시작' 메뉴에서 Lot 별 작업시작을 진행하시기 바랍니다.
				throw new BizException("ConsumableIsRequiredTrackIn", String.format("Lot Id : %s", lotId));
			}
			
			if ("Y".equals(isLocking)) {
				// 해당 Lot이 Locking 상태입니다. {0}
				throw new BizException("InLockingState", String.format("LotId = %s ", lotId));
			}
			if ("Y".equals(isHold)) {
				// 보류 상태의 Lot 입니다. {0}
				throw new BizException("LotIsHold", String.format("LotId = %s ", lotId));
			}
			if (!LotProcessState.Run.equals(processState)) {
				// Lot이 작업 시작 가능 상태가 아닙니다. {0}
				throw new BizException("LotStateIsNotAvailableTrackOut", String.format("LotId = %s", lotId));
			}
			if (!processSegmentId.equals(processSegId)) {
				// 작업 시작 처리 시 공정과 실제 Lot의 공정이 다릅니다. {0}
				throw new BizException("TrackInProcessIsNotEqualLotProcess",
						String.format("LotId = %s, TrackInProcessSegmentId = %s, CurrentProcessSegmentId = %s",
								lotId, processSegmentId, processSegId));
			}
			
			// 설비 저장
			this.SaveLotEquipment(lotData, equipmentId, now);
			
			// 특이사항 저장
			if (!comment.isEmpty())
				wipService.insertLotComment(dto, lotData, comment, firstWorker, TransitionId.TrackIn);
			
			// 이전 Step이 StepType에 없는 경우 Lot 처리
			wipService.saveLotInfoByPreviousStep(dto, lotData, TransitionId.TrackOut, firstWorker, now, equipmentId); 
			
			// Track Out
			lotData = wipService.trackOutLot(dto, lotData, equipmentId, firstWorker, now);			
			lotData = UpdateLotTrackOut(lotData, firstWorker, now); 
			
			// 실적 기록
			wipService.saveLotWorkResult(dto, lotData, TransitType.TrackOutLot, firstWorker, now, "", "");
		}   
    }
    
 	private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return StringUtil.Object2String(systemDate.get(0).get("TODATE"));
  	}
 	
	/**************************************************************************************
	* 작업자 저장
	***************************************************************************************/
	private void SaveLotWorker(Map<String, Object> ld, String userList) throws Exception
	{
		String lotId = ld.get("LOTID").toString();
		
		for (String userId : userList.split(","))
		{
			String txnHistKey = TxnHistKey.getTxnHistKey();
			Map<String, Object> propertyMap = new HashMap<>();
			Map<String, Object> lwd = new HashMap<>();
			
			propertyMap.put("TXNHISTKEY", txnHistKey);
			propertyMap.put("LOTID", lotId);
			
			lwd 	= generalDao.addSelectOneMap(NAMESPACE6900 + ".selectLotData", propertyMap);
			
			if (lwd != null)
			{
				throw new BizException("InValidData002", String.format("TxnHistKey = %s, LotId = %s", txnHistKey, lotId));
			}
			
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(ld);
			
			String processDefId = processDefInfo.get("PROCESSDEFID").toString();
			String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
			
			Map<String, Object> processPathInfo = wipService.processPathInfo(ld, processDefId, processDefVersion);
			
			String processPathId = processPathInfo.get("PROCESSPATHID").toString();
			
			lwd = new HashMap<>();
			lwd.put("TXNHISTKEY", 					txnHistKey);
			lwd.put("LOTID", 							lotId);
			lwd.put("ENTERPRISEID", 					ld.get("ENTERPRISEID").toString());
			lwd.put("PLANTID", 							ld.get("PLANTID").toString());
			lwd.put("AREAID", 							ld.get("AREAID").toString());
			lwd.put("PRODUCTDEFID", 					ld.get("PRODUCTDEFID").toString());
			lwd.put("PRODUCTDEFVERSION", 		ld.get("PRODUCTDEFVERSION").toString());
			lwd.put("PROCESSDEFID", 					ld.get("PROCESSDEFID").toString());
			lwd.put("PROCESSDEFVERSION", 			ld.get("PROCESSDEFVERSION").toString());
			lwd.put("PROCESSPATHID", 				processPathId);
			lwd.put("USERSEQUENCE", 				ld.get("USERSEQUENCE").toString());
			lwd.put("PROCESSSEGMENTID", 			ld.get("PROCESSSEGMENTID").toString());
			lwd.put("PROCESSSEGMENTVERSION", 	ld.get("PROCESSSEGMENTVERSION").toString());
			lwd.put("WORKCOUNT", 					ld.get("WORKCOUNT").toString());
			
			Map<String, Object> userMap 			= new HashMap<>();
			userMap.put("USERID", userId);
			Map<String, Object> user 				= generalDao.addSelectOneMap(NAMESPACE + ".selectUser", userMap);
			
			if (user == null){
				lwd.put("WORKERNAME", 					userId);	
			} else {
				lwd.put("USERID", 							userId);	
			}
			
			generalDao.addUpdate(NAMESPACE + ".insertPcmLotworker", lwd);
		}
	}
	
	/**
	    * @fn 			: saveLotEquipment
	    * @brief 		: 함수 간략한 설명 
	    * @Method Name : saveLotEquipment
	    * @remark		: 상세설명
	    * @Author		: sungmin.choe
	    * @File Version	: v1.0 
	     *
	     * << 개정이력(Modification Information) >>
	     *   
	     *     수정일      수정자        수정내용
	     *   ------------  ------       ----------
	     *   2021. 4. 30.       sungmin.choe      최초  생성
	     *
	    */ 
	    private void SaveLotEquipment(Map<String, Object> lotMap, String equipmentList, Date time) throws Exception
		{
			Map<String, Object> param = new HashMap<>();
			//HashMap Copy
	    	for (Map.Entry<String, Object> entry : lotMap.entrySet()) {
	    		param.put(entry.getKey(), entry.getValue());
	    	}
			param.put("EQUIPMENTID", equipmentList);
			
			List<Map<String, Object>> result = generalDao.addSelect(NAMESPACEWORKPROCESS + ".getNotExistsLotEquipment", param); 
					
			for (Map<String, Object> map : result)
			{
				Map<String, Object> eqParam = new HashMap<>();
				eqParam.put("LOTID", map.get("LOTID").toString());
				eqParam.put("TXNHISTKEY", map.get("TXNHISTKEY").toString());
			
				Map<String, Object> 	eqMap = generalDao.addSelectOneMap(NAMESPACE + ".selectLotEquipmentData", eqParam);
				
				if (eqMap == null)
				{
					throw new BizException("InValidData003", String.format("LotId = %s, TxnHistKey = %s", map.get("LOTID").toString(), map.get("TXNHISTKEY").toString()));
				}
				
				generalDao.addUpdate(NAMESPACE + ".deleteLotEquipmentData", eqParam);
			}
			
			for (String equipmentId : equipmentList.split(","))
			{
				Map<String, Object> lotEqParam = new HashMap<>();
				lotEqParam.put("LOTID",							lotMap.get("LOTID").toString());
				lotEqParam.put("EQUIPMENTID", 					equipmentId);
				lotEqParam.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID").toString());
				lotEqParam.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION").toString());
				lotEqParam.put("WORKCOUNT", 					lotMap.get("WORKCOUNT").toString());
							
				List<Map<String, Object>> list = generalDao.addSelect(NAMESPACECOMMON + ".selectLotEquipmentDataMulti", lotEqParam);
				Map<String, Object> equipParam = new HashMap<>();
				
				if (list.size() > 0)
				{
					equipParam = list.get(0);
					equipParam.put("PROCESSSTATE", 			lotMap.get("PROCESSSTATE").toString());
					equipParam.put("TRACKOUTTIME", 			time);
					equipParam.put("TXNID", 						this.getClass().getSimpleName());
					equipParam.put("LOTQTY", 					lotMap.get("QTY"));
					generalDao.addUpdate(NAMESPACE + ".updateLotEquipmentData", equipParam);				
				} else {
					String txnHistKey = TxnHistKey.getTxnHistKey();
					equipParam = new HashMap<>();
					equipParam.put("LOTID", 							lotMap.get("LOTID").toString());
					equipParam.put("TXNHISTKEY", 					txnHistKey);
					equipParam.put("EQUIPMENTID", 				equipmentId);
					equipParam.put("PROCESSSTATE", 				lotMap.get("PROCESSSTATE").toString());
					equipParam.put("PROCESSSEGMENTID", 		lotMap.get("PROCESSSEGMENTID").toString());
					equipParam.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION").toString());
					equipParam.put("WORKCOUNT", 					lotMap.get("WORKCOUNT").toString());
					equipParam.put("TRACKOUTTIME", 				time);
					equipParam.put("LOTQTY", 					lotMap.get("QTY"));
					equipParam.put("TXNID", 							this.getClass().getSimpleName());
					
					generalDao.addUpdate(NAMESPACE + ".insertLotEquipmentData", equipParam);
				}
				
				Map<String, Object> eqParam = new HashMap<>();
				eqParam.put("EQUIPMENTID", equipmentId);
				Map<String, Object> eqData = generalDao.addSelectOneMap(NAMESPACE + ".selectEquipmentData", eqParam);
				
				if (eqData == null)
				{
					throw new BizException("InValidData001", String.format("EquipmentId = %s", equipmentId));
				}
				
				eqData.put("STATE", PCMConstant.EquipmentState.Idle);
				eqData.put("LASTTXNID", this.getClass().getSimpleName());
				
				generalDao.addUpdate(NAMESPACE + ".updateEquipmentData", eqData);
			}
		}
	    
		/**************************************************************************************
		* Track Out Time 업데이트
		***************************************************************************************/
		private Map<String, Object> UpdateLotTrackOut(Map<String, Object> ld, String userId, Date time) throws Exception
		{
			ld.put("TRACKOUTTIME",time);
			ld.put("TRACKOUTUSER",userId);
			ld.put("LASTTXNID",this.getClass().getSimpleName());
			
			generalDao.addUpdate(NAMESPACE + ".updateTrackOutTime", ld);
			
			return ld;
		}
		
		private String getFirstWorker(String lotId) throws Exception {
			Map<String, Object> map = new HashMap<>();
			
			map.put("LOTID", lotId);
			List<Map<String, Object>> result = generalDao.addSelect(NAMESPACE + ".getLotWorkerByTrackOut", map); 

			if (result.size() > 0) {
				return result.get(0).get("WORKERID").toString();
			} else {
				return null;
			}
		}
		
	    /**
	    * @fn 			: selectLotEquipmentList
	    * @brief 		: (Override method) 함수 간략한 설명
	    * @Method Name : selectLotEquipmentList
	    * @remark		: 상세설명
* @see smh.pcm.service.PCM03400Service#selectLotEquipmentList(com.nbdf.commons.ui.vo.UiMapDto)
	    */
	    @Override
	    public void selectLotEquipmentList(UiMapDto dto) throws Exception {
	        Map<String, Object> param = getParametersMap(dto);        
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotEquipmentList", param));        
	    }

}