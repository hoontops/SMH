package smh.pcm.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: PCMSendLotService.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMSendLotService
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
public interface PCMSendLotService {

    /**
    * @fn : SendLot
    * @brief : SendLot
    * @Method Name : SendLot
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
    public void SendLot(UiMapDto dto,String lotId, String processSegmentId, String toAreaId, String userId, 
			String comment, double defectQty, List<Map<String, Object>> defectList, String enterpriseId, String plantId, boolean isRework, Map<String, Object> txnInfo) throws Exception;

    /**
    * @fn : SaveLotHistory
    * @brief :SaveLotHistory
    * @Method Name : SaveLotHistory
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
    public void SaveLotHistory(String txnHistKey, String lotId, String plantId, String factoryId, String areaId) throws Exception;

    /**
    * @fn : SaveLot
    * @brief : SaveLot
    * @Method Name : SaveLot
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
    public Map<String, Object> SaveLot(String lotId, String childLotId) throws Exception;
    
    
    public Map<String, Object> UpdateLotSend(Map<String, Object> ld, String userId, Date time) throws Exception;
    /**
    * @fn : SaveLotPlantTransit
    * @brief : SaveLotPlantTransit
    * @Method Name : SaveLotPlantTransit
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
    public void SaveLotPlantTransit(Map<String, Object> ld, String lastTxnHistKey, String userId, Date time) throws Exception;
   /**
    * @fn : ValidationData
    * @brief : ValidationData
    * @Method Name : ValidationData
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
    public void ValidationData(Map<String, Object> lot, String lotId, String processSegmentId, String userId, String transitArea, double defectQty) throws Exception;

 }