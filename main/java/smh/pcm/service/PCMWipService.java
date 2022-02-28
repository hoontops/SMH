package smh.pcm.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCMWipService.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMWipService
* @Company: Built1
* @Create Date: 2021.04.02
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일              수정자      수정내용
 *   ------------  ------  ----------
 *   2021. 04. 02.  방성혁   최초  생성
 *
 *
*/
public interface PCMWipService {

    /**
    * @fn : 
    * @brief : 공정 처리
    * @Method Name : 
    * @remark
    * @Create Date: 2021.03.16
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.05.       방성혁     최초  생성
     *
    */
   
    public Map<String, Object> validateLotInfo(String lotid) throws Exception;
    
    public String executeCheckingWindowTimeNewTx(UiMapDto dto, Map<String, Object> lotData, Date time) throws Exception;
    
    public Map<String, Object> processPathInfo(Map<String, Object> lotData, String processDefid, String processDefVersion) throws Exception;
    
    public Map<String, Object> processPathInfoByProcessDef(String processDefid, String processDefVersion, int pathSequence) throws Exception ;
    
    public Map<String, Object> processPathInfoByProcessDef(String processDefid, String processDefVersion, String pathType) throws Exception;
    
    public Map<String, Object> processPathInfoByProcessPathId(String processPathid) throws Exception;
    
    public List<Map<String, Object>> getLotWtimeList(Map<String, Object> lotInfo) throws Exception;
    
    public List<Map<String, Object>> getWtimeSetList(Map<String, Object> lotInfo) throws Exception;
    
    public Boolean validateProcessState(Map<String, Object> lotInfo, String transitType) throws Exception;
    
    public void insertLotEquipment(UiMapDto dto, Map<String, Object> lotInfo, String equipmentId, Date time)  throws Exception;
    
    public void deleteSkipWorkResult(UiMapDto dto, Map<String, Object> lotInfo) throws Exception;
    
    public void insertLotComment(UiMapDto dto, Map<String, Object> lotInfo, String comment, String creator, String transitionId) throws Exception;
    
    public void updateLotDefectUnit(UiMapDto dto, Map<String, Object> lotInfo, String unit)  throws Exception ;
    
	public Map<String, Object> getProcessDefinitionInfo(Map<String, Object> lotInfo) throws Exception;    
    
    public Map<String, Object> updateReceiveLot(UiMapDto dto, Map<String, Object> lotInfo, String userId, Date time)   throws Exception ;
    
    public Map<String, Object> splitDefectLot(UiMapDto dto, String lotId, double childQty, double splitQty) throws Exception;    
    
    public Map<String, Object> splitDefectLot(UiMapDto dto,String lotId, double childQty, double splitQty,String isDefected) throws Exception;
    
    public Map<String, Object> splitDefectLot(UiMapDto dto,String lotId, double childQty, double splitQty,String isDefected, String transitType) throws Exception;
    
    public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty) throws Exception;
    
    public Map<String, Object> splitLot(UiMapDto dto, String lotId, double childQty, double splitQty)  throws Exception;
    public Map<String, Object> splitLot(UiMapDto dto, String lotId, double childQty, double splitQty,String transitType)  throws Exception;
    
    public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty, String isDefected) throws Exception;
    public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty, String isDefected, String transitType) throws Exception;
    
    public void saveDefectLotWorkResult(UiMapDto dto,Map<String, Object> lotInfo, Map<String, Object> childLotInfo, double defectQty)  throws Exception;
	
	public Map<String, Object> getWorkResult(Map<String, Object> LotInfo) throws Exception;
	
	public void saveLotDefect(UiMapDto dto, Map<String, Object> LotInfo, DataSetMap defectList, String transitType) throws Exception ;
	
	public  Map<String, Object> saveLotWorkResult(UiMapDto dto, Map<String, Object> lotInfo, String transitType, String userId, Date time, String resourceId, String toAreaId) throws Exception ;
	
	public String saveLotLocking(UiMapDto dto, String lotId, String lockClass, String lockReason, String comments, String strUserId, String strLanguageType) throws Exception;
	
	public Map<String, Object> saveLotInfoByPreviousStep(UiMapDto dto, Map<String, Object> lotData, String transitionId, String userId, Date time, String equipmentId) throws Exception;
	
	public Map<String, Object> saveLotInfoByNextStep(UiMapDto dto, Map<String, Object> lotInfo, String transitionId, String userId, Date time, String equipmentId, String toResourceId, String toAreaId)  throws Exception;
	
	public Map<String, Object> receiveLot(UiMapDto dto, Map<String, Object> lotData, String userId, Date time) throws Exception;
	
	public Map<String, Object> trackInLot(UiMapDto dto, Map<String, Object> lotData, String equipmentId, String userId, Date time)  throws Exception;
	
	public Map<String, Object> trackOutLot(UiMapDto dto, Map<String, Object> lotData, String equipmentId, String userId, Date time)  throws Exception;
	
	public Map<String, Object> sendLot(UiMapDto dto, Map<String, Object> lotInfo, String userId, Date time)  throws Exception;
	
	public Map<String, Object> sendLot(String lotId, String toAreaId, String toPlantId) throws Exception;

	public Map<String, Object> dispatchLot(UiMapDto dto, Map<String, Object> lotData, String toAreaId, String toResourceId) throws Exception;
	
	public void deleteConsumeMaterialLotTempByConsumable(UiMapDto dto, Map<String, Object> lotInfo)  throws Exception;
	
	public void deleteConsumeMaterialLotTempByDurable(UiMapDto dto, Map<String, Object> lotInfo, DataSetMap durableList)  throws Exception;
	
	public void saveConsumeMaterialLotTempData(UiMapDto dto, Map<String, Object> dataInfo, Map<String, Object> lotInfo, Map<String, Object> consumableList, int sequence)  throws Exception;
	
	public boolean isAreaInAuthority(String areaId, boolean isModify) throws Exception;
	
	public Map<String, Object> reworkLot(UiMapDto dto, Map<String, Object> reworkLotInfo) throws Exception;
	
	public Map<String, Object> saveLotWorkCount(UiMapDto dto, Map<String, Object> lotInfo) throws Exception;
	
	public String saveLotWorkResultForNextProcess(UiMapDto dto, Map<String, Object> lotInfo, String lastTxnHistKey) throws Exception;
	
	public void saveLotWorkResultForCurrentProcess(UiMapDto dto, Map<String, Object> lotInfo, double rootLotQty, Date time) throws Exception;
	
	public void saveLotHistory(UiMapDto dto, String txnHistKey, String lotId, String plantId, String factoryId, String areaId) throws Exception;
	
	public  Map<String, Object> getConsumableLot(String consumableLotId, String warehouseId) throws Exception ;
	
	public void createConsumableLot(Map<String, Object> lotInfo, String transitArea) throws Exception;
	
	public Map<String, Object> updateIsFinalInspect(Map<String, Object> lotInfo) throws Exception ;
	
	public boolean saveReworkReturnData(UiMapDto dto, Map<String, Object> lotInfo) throws Exception ;
	
	public void saveSplitLotWorkResult( Map<String, Object> lotInfo, Map<String, Object> childLotInfo, double splitQty) throws Exception;
	
	public void saveLotLockingRelease(String lotId, String txnHistKey, String lockReason, String comments) throws Exception;
	
	public String getStepTypeByLot(Map<String, Object> lotInfo) throws Exception;
	
 }