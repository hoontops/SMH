package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.*;

@Service
public class PCM07700ServiceImpl extends AbstractNbdfService implements PCM07700Service {

	public static final String NAMESPACE = "smh.pcm.dao.PCM07700Dao";
	public static final String NAMESPACE7300 = "smh.pcm.dao.PCM07300Dao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACE6900 = "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESPACE7200 = "smh.pcm.dao.PCM07200Dao";
    public static final String NAMESPACE_RL = "smh.pcm.dao.PCMReworkLotDao";
    public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectWIPMultiStateList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectWIPMultiStateList
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07700Service#selectWIPMultiStateList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectWIPMultiStateList(UiMapDto dto) throws Exception{
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE7300 + ".selectWIPMultiStateList", param)); 
    }
    
    @Override
    public void GetTransitAreaList(UiMapDto dto) throws Exception{
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetTransitNextAreaList", param)); 
        
    }

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07700Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramArgs = dto.getInVariableMap();        
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId) && sqlId != null){
        	//Arguments를 Param에 추가
        	for (Map.Entry<String, Object> entry : paramArgs.entrySet()) {        	    
        	    param.put(entry.getKey(), entry.getValue());
        	}
        	
        	//추가 배열파라미터가 존재하면 배열형태로 param에 바인딩
        	String addParam = (String)param.get("ADD_PARAM");
        	if(!"".equals(addParam) && addParam != null){
        		param.put("ADD_LIST", addParam.split("\\|"));
        	}
        	putDataSetMap(dto, generalDao.addSelect(NAMESPACE7300 + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
    * @fn 			: saveMultiLotSend
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveMultiLotSend
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07700Service#saveMultiLotSend(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveMultiLotSend(UiMapDto dto) throws Exception {
    	DataSetMap 						dsLotList				= getParametersDataSetMap(dto, "INPUT1");
    	DataSetMap 						dsBody				= getParametersDataSetMap(dto, "INPUT");
    	String 							userId					= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_ID);
        String 							enterpriseId			= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_ENTERPRISEID);
        String 							plantId				= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_SITETYPE);
        String 							languageType		= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE);
		String strTransitArea = (String) dsBody.get(0).get("TRANSITAREA");
		String strResource = (String) dsBody.get(0).get("RESOURCEID");


		Date now = new Date();
	   	 for (int i = 0, n = dsLotList.size(); i < n; i++) {
	         Map<String, Object> lotData = dsLotList.get(i);
	         String lotId 			= 				lotData.get("LOTID").toString();
	         
	         lotData.put("ENTERPRISEID", 		enterpriseId);
	         lotData.put("PLANTID", 			plantId);
	         lotData.put("LANGUAGETYPE", 	languageType);
	         
	         Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESPACE6900 + ".selectLotData", lotData);
	         String 							areaId					= (String)lotMap.get("AREAID");
	 		 String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
	 		 String 							isHold 				= (String)lotMap.get("ISHOLD");		//보류여부
	 		 SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
	   	 	 Date 								nowDate         			= dateFormat.parse(sToday);//현재시간
	   	 	 
	 		Map<String, Object> txnInfo = new HashMap<String, Object>();
			txnInfo.put("TXNUSER",userId);
			txnInfo.put("TXNTIME",nowDate);

			wipService.executeCheckingWindowTimeNewTx(dto, lotMap, nowDate);
	         
	   	 	// 보류 여부 체크
	  		if ("Y".equals(isHold)){	
	  			throw new BizException("LotIsHold", String.format("LotId = %s", lotId)); // 보류 상태의 Lot 입니다.
	  		}
	  		
	  		// 인수 가능 상태 확인
	  		if (!wipService.validateProcessState(lotMap, TransitType.SendLot)){
	  			throw new BizException("LotStateIsNotAvailableReceive", String.format("LotId = %s", lotId)); // Lot이 인수 가능 상태가 아닙니다. {0}
	  		}
	  		
	  		// 사용자별 작업장 통제
	 		if(!wipService.isAreaInAuthority(areaId, true)) {			
	 			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
	 		}
	   	 	 
//	 		lotMap = wipService.receiveLot(dto, lotMap, userId, nowDate);

			// Insert Lot Work Result
			wipService.saveLotWorkResult(dto, lotMap, TransitType.SendLot, userId, nowDate, strResource, strTransitArea);
			
			// Dispatch Lot 처리
			String lastTxnHistKey = setDispatchLot(dto, lotMap, strTransitArea, strResource, userId, now, txnInfo);

			// 현재 작업장
			String currentArea = (String) lotMap.get("AREAID");
			
			// 현재 Site
			String currentPlant = (String) lotMap.get("PLANTID");
			
			// 예산 통제 API 호출
			Map<String, Object> originArea = new HashMap<String, Object>(); 
			originArea.put("AREAID",currentArea);
			originArea = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",originArea);
			if (originArea == null)
			{
				// 해당 작업장이 존재하지 않습니다. {0}
				throw new BizException("NotExistArea", String.format("AreaId = %s", lotMap.get("AREAID")));
			}
			
			String ownType = (String) originArea.get("OWNTYPE");
			String nextPlant = (String) originArea.get("PLANTID");
			
			// if not Finished that Lot State then Outside Check Logic
			if (!lotMap.get("LOTSTATE").equals(LotState.Finished))
			{
				// 작업장이 동일한 경우 SendLot 호출 안함
				if (!currentArea.equals(strTransitArea))
				{
					// Check Outside Area
					if (ownType.equals(AreaOwnType.OutsideOSP) || !nextPlant.equals(currentPlant))
					{
//						TransactionUtils.setTransactionId(txnInfo, "sendLot");
						
						String nextAreaId = "";
						String nextPlantId = "";
						
						if (ownType.equals(AreaOwnType.OutsideOSP))
							nextAreaId = strTransitArea;
						else
							nextAreaId = (String) lotMap.get("AREAID");
						
						if (!nextPlant.equals(currentPlant))
							nextPlantId = nextPlant;
						else
							nextPlantId = (String) lotMap.get("PLANTID");
						
						wipService.sendLot(lotId, nextAreaId, nextPlantId);
						
//						TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
						
						if (!nextPlant.equals(currentPlant))
						{
							SaveLotPlantTransit(lotMap, lastTxnHistKey, userId, nowDate);
						}
					}
				}
			}
						
			
			// 예약 Locking 체크
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotMap);
			
			String processDefId 		= (String)processDefInfo.get("PROCESSDEFID");
//			String processDefVersion 	= (String)processDefInfo.get("PROCESSDEFVERSION");
			
			// Check Lot Reserve Locking
			Map<String, Object> checkParam = new HashMap<>();
			checkParam.put("LOTID", 						lotId);
			checkParam.put("ENTERPRISEID", 			enterpriseId);
			checkParam.put("PLANTID", 					plantId);
			checkParam.put("PROCESSDEFID", 			processDefId);
			checkParam.put("PROCESSSEGMENTID", 	lotMap.get("PROCESSSEGMENTID"));
			checkParam.put("LOCKINGSTATUS", 			"Created");
			
			List<Map<String, Object>> listLotReserveLocking = generalDao.addSelect(NAMESPACE7300 + ".selectLotReverseLocking", checkParam);
			
			if (listLotReserveLocking.size() > 0)
			{
				for (int k = 0, len = listLotReserveLocking.size(); k < len; k++)
				{	
					Map<String, Object> reverseData = listLotReserveLocking.get(k);
					
					String lockingType 	= (String)reverseData.get("LOCKINGTYPE");
					String lockingCode 	= (String)reverseData.get("LOCKINGCODE");
					String comments 	= (String)reverseData.get("COMMENTS");
					
					
					wipService.saveLotLocking(dto, lotId, lockingType, lockingCode, comments, userId, languageType);
				}
			}
	   	 }	 
    } 
    
	/**************************************************************************************
	* DispatchLot
	***************************************************************************************/
	private String setDispatchLot(UiMapDto dto, Map<String, Object> lotData, String strTransitArea, String resourceid, String strUserId, Date time, Map<String, Object> txnInfo) throws Exception
	{
		String lastTxnHistKey = "";
		
		
		// ProcessState Step Type 체크하여 작업완료에서 완성되는 경우 Dispatch 실행 
		Map<String, Object> segmentData = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",lotData);
		
		String stepType = wipService.getStepTypeByLot(lotData);
		List<String> stepList = Arrays.asList(stepType.split(","));
		
		if(segmentData != null && stepList.contains("WaitForSend"))
		{
			if(strTransitArea == "")
			{
				// Lot 상태를 확인하여 주세요.
				throw new BizException("InValidData001");
			}
			try
			{
				lotData = UpdateLotSend(lotData, strUserId, time);
				
				//wipService.SaveLotWorkResult(lotData, TransitType.SendLot, strUserId, SQLService.toDate());
				//lotData = wipService.DispatchLot(lotData, strTransitArea, txnInfo);
				lotData = wipService.dispatchLot(dto, lotData, strTransitArea,resourceid);
			}catch (Throwable e) {
				// TODO Auto-generated catch block
				throw new BizException(e.toString());
			}
			String wrHistKey = (String) lotData.get("LASTTXNHISTKEY");
			
			// Dispatch Lot 이후 WorkCount 업데이트 (Work Count가 계속 1로 설정되어 다음공정에서 에러발생)
			lotData = wipService.saveLotWorkCount(dto, lotData);
			
			lastTxnHistKey = wipService.saveLotWorkResultForNextProcess(dto, lotData, wrHistKey);
	
//			TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
		}
		
//		batch.add(lotData, SQLUpsertType.UPDATE);
		
		
		return lastTxnHistKey;
	}   

	/**************************************************************************************
	* Lot 정보 업데이트
	***************************************************************************************/
	private Map<String, Object> UpdateLotSend(Map<String, Object> ld, String userId, Date time) throws Exception
	{
		ld.put("SENDTIME",time);
		ld.put("SENDUSER",userId);
		ld.put("LASTTXNID",this.getClass().getSimpleName());
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",ld);
		
		return ld;
	}

	// Lot Plant Transit Insert Data
	private void SaveLotPlantTransit(Map<String, Object> ld, String lastTxnHistKey, String userId, Date time) throws Exception
	{
		String lotId = (String) ld.get("LOTID");
		
		String txnHistKey = TxnHistKey.getTxnHistKey();
		
		Map<String, Object> ltd = new HashMap<String, Object>(); 
		ltd.put("TXNHISTKEY",txnHistKey);
		ltd.put("LOTID",lotId);
		
		ltd = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectMtmLotplanttransit",ltd);
		
		if (ltd != null)
		{
			throw new BizException("InValidData002", String.format("TxnHistKey = %s LotId = %s", txnHistKey, lotId));
		}
		
		Map<String, Object> lhd = new HashMap<String, Object>(); 
		lhd.put("LOTID",lotId);
		lhd.put("TXNHISTKEY",lastTxnHistKey);
		
		lhd = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmLothistory",lhd);;
		
		
		ltd = new HashMap<String, Object>(); 
		ltd.put("TXNHISTKEY",txnHistKey);
		ltd.put("LOTID",lotId);
		ltd.put("ENTERPRISEID",ld.get("ENTERPRISEID"));
		ltd.put("PLANTID",ld.get("PLANTID"));
		ltd.put("PRODUCTIONORDERID",ld.get("PRODUCTIONORDERID"));
		ltd.put("LINENO",ld.get("LINENO"));
		ltd.put("PREVPLANTID",StringUtil.isNullOrEmpty(lhd.get("PREVPLANTID")) ? ld.get("PLANTID") : lhd.get("PREVPLANTID"));
		ltd.put("FACTORYID",ld.get("FACTORYID"));
		ltd.put("AREAID",ld.get("AREAID"));
		ltd.put("PREVAREAID",StringUtil.isNullOrEmpty(lhd.get("PREVAREAID")) ? ld.get("AREAID") : lhd.get("PREVAREAID"));
		ltd.put("PROCESSDEFID",ld.get("PROCESSDEFID"));
		ltd.put("PROCESSDEFVERSION",ld.get("PROCESSDEFVERSION"));
		ltd.put("PROCESSSEGMENTID",ld.get("PROCESSSEGMENTID"));
		ltd.put("PREVPROCESSSEGMENTID",lhd.get("PREVPROCESSSEGMENTID"));
		ltd.put("SENDUSER",lhd.get("SENDUSER"));
		ltd.put("SENDDATE",lhd.get("SENDTIME"));
		ltd.put("TRANSITSTATUS","WAITSHIP");
		generalDao.addInsert(NAMESPACE_RL + ".insertMtmLotplanttransit",ltd);
		
	}	
}