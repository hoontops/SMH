package smh.pcm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCMLotCommonService.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMLotCommonService
* @Company: Built1
* @Create Date: 2021.03.31
* @Author: -
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 31.  -     최초  생성
 *
 *
*/
public interface PCMLotCommonService {

	
	/**
	 * DB 상에 등록되어 있는 Lot인지 확인하고 등록된 Lot일 경우 해당 Lot의 정보를 반환한다.
	 * @param String LotId
	 * @return Map<String, Object> lotData
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public Map<String,Object> ValidateLotInfo(String lotId) 
			throws Exception;
	
	
	/**
	 *  pcm_LotEquipment를 삭제 한다.
	 * @param Map<String, Object> lotData
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public void DeleteLotEquipment(Map<String,Object> lotData) 
			throws Exception;
	
	/**
	 *  pcm_lotwtime을 삭제 한다.
	 * @param Map<String, Object> lotData
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public void DeleteLotWTime(Map<String,Object> lotData) 
			throws Exception;
	
	
	//인계취소용.
	public void DeleteLotWTime(Map<String,Object> lotData , String ProcessSegmentId, String processSegmentVersion)
			throws Exception;
	
	/**
	 *  pcm_lotComment을 저장 한다. - 특이사항을 저장
	 * @param Map<String, Object> lotData , String comment, String creator ,String transitionId,  String txnHistKey ,String lastTxnHist
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public void SaveLotComment(Map<String,Object> lotData , String comment, String creator ,String transitionId) 
			throws Exception;
	
	/**
	 *  pcm_LotCancelWorkResult를 저장 한다. - 취소 이력 저장
	 * @param Map<String, Object> lotData, String transitionId, String comment, String prevLotState, String txnHistKey , String txnId
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public void SaveLotCancelWorkResult(Map<String, Object> lotData, String transitionId, String comment, String prevLotState ) 
			throws Exception;
	
	/**
	 *  pcm_lot의 상태를 변경 한다. - ReceiveTime, ReceiveUser null 처리 / LotProcessState 값 변경
	 * @param Map<String, Object> lotData , String txnId
	 * @return Map<String, Object> lotData - 변경된 LotData
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public Map<String, Object> ReceiveCancelLot(Map<String, Object> lotData , String txnId )
	    	throws Exception;
	
	/**
	 *  pcm_lotworkResult의 상태를 변경 한다. - Cancel유형에 따라 값 Setting 
	 * @param Map<String,Object> lotData, String transitionId
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	
	public  Map<String,Object> GetProcessDefinitionInfo(Map<String, Object> lotData)
    		throws Exception ;
	public String GetProcessPathId(Map<String,Object> lotData , String processDefId , String processDefVersion)
    		throws Exception ;
	
	
	public void CancelLotWorkResult(Map<String,Object> lotData, String transitionId )
	    	throws Exception;
	
	
	/**
	 * pcm_lotEquipment 를 업데이트. (receiveTimed이 not null이 면 null 로 변경 , receivetime이 null이면 삭제)
	 * @param Map<String,Object> lotData, String transitionId
	 * @return void
	 * @Create Date: 2021.04.06
	 * @Author: 김기수
	 **/
	public void SaveLotEquipment(Map<String,Object> lotData , String transitionId)
			throws Exception;
	
	public void DeleteConsumeMaterialLotTemp(Map<String, Object> lotData ,String materialType) 
			throws Exception;
	
	public Map<String, Object> TrackInCancelLot(String lotId, String txnId)
    		throws Exception ;
	
	public Map<String,Object> GetWorkResult(Map<String,Object> lotData)
    		throws Exception;
	
	public boolean OspPriceInvalidCheck(Map<String,Object> lotWorkResultData)
    		throws Exception ;
	
	public Map<String , Object> OspCancelSendLot(String lotId, String toAreaId, String toPlantId, String txnInfo )
			throws Exception;
	
	
	public Map<String, Object> GetPreviousLotWorkResult(Map<String,Object> lotData, Map<String,Object> lotHistoryData)
			throws Exception;
	
	public void DispatchCancelLot(Map<String,Object> lotData , Map<String,Object> prevLotWorkResultData , Map<String,Object> lotHistoryData , Map<String,Object> ospChangeLotData)
    		throws Exception;
	
	public void cancelConsumeConsumableLot(Map<String,Object> cancelConsumableLotInfo, String txnInfo )
			throws Exception;
	
	public void DeleteLotComment(Map<String,Object> lotData)
			throws Exception;
	
	public void DeleteLotReelInfo(Map<String,Object> lotData)
			throws Exception;
	
	public void UpdateLotEquipmentTrackOutCancel(Map<String,Object>lotData)
			throws Exception;
	
	public void cancelConsumeMaterial(Map<String, Object> materialInfo , String txnInfo)
			throws Exception ;
	

    public void UpdateDeleteWTime(Map<String, Object> lotData)
    		throws Exception;
    
    public void MaterialTransMain(String enterpriseId , String plantId , String txnGroupHistKey , String transactionReasonCode)
			throws Exception;
    
    
    public void TrackOutCancelLot(String lotId)
    		throws Exception;
    
    public String changeProcessState(String lotId, String transitionId, String stateModelId , String fromStateId )
    		throws Exception;
    
    public Map<String, Object> getLotForUpdate(String lotId)
    		throws Exception;
    
    public void	DeleteLotWorkResult(Map<String,Object> lotWorkResult , Map<String,Object> lotData)
    		throws Exception;
    
    public String GetCancelLotLotState(Map<String,Object>lotData, String transitionId)
    		throws Exception;
 }