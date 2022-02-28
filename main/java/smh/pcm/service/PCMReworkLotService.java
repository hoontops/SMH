package smh.pcm.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: PCMReworkLotService.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMReworkLotService
* @Company: Built1
* @Create Date: 2021. 3. 1. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface PCMReworkLotService {

    /**
    * @fn : ReworkLot
    * @brief : ReworkLot
    * @Method Name : ReworkLot
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void ReworkLot(UiMapDto dto, String lotId, String reworkProcessDefId, String reworkProcessDefVersion, String resourceId
			, String areaId, String returnProcessPathId, String returnResourceId, String returnAreaId, String enterpriseId
			, String plantId, String isProductRouting, String reworkResourceId, String reworkPathId, String reworkAreaId, Map<String, Object> txnInfo) throws Exception;

    /**
    * @fn : validateLot
    * @brief : 승인  조회
    * @Method Name : validateLot
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void validateLot(Map<String, Object> lotData, String lotId) throws Exception;

    /**
    * @fn : validateOspBudget
    * @brief : 사유코드  조회
    * @Method Name : validateOspBudget
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void validateOspBudget(Map<String, Object> lotData, String lotId) throws Exception;

 
    public void deleteCurrentLotWorkResult(Map<String, Object> lotData, String lotId) throws Exception;
    public void SaveLotHistory(String txnHistKey, String lotId, String plantId, String factoryId, String areaId) throws Exception;
    public void saveReworkReturnData(Map<String, Object> localLotData, String lotId, String returnProcessPathId, String reworkPathId
			, String reworkProcessDefId, String reworkProcessDefVersion, String reworkAreaId, String reworkResourceId
			, String returnResourceId, String returnAreaId) throws Exception;
    public Map<String, Object> getLot(String lotId) throws Exception;
    public List<Map<String, Object>> getLotworkresultOfCurrentProcess(Map<String, Object> lotData) throws Exception;
    
    public Map<String, Object> repositionSegment(String strPathId, Map<String, Object> paramChange, String lotID, Map<String, Object> lotData) throws Exception;
 }