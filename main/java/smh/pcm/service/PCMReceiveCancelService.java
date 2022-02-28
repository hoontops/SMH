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
public interface PCMReceiveCancelService {

    /**
    * @fn : ReceiveCancel
    * @brief : ReceiveCancel
    * @Method Name : ReceiveCancel
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
    public void ReceiveCancel(Map<String, Object> ld, String userId, String comment, String txnId) throws Exception;

    /**
    * @fn : DeleteLotEquipment
    * @brief :DeleteLotEquipment
    * @Method Name : DeleteLotEquipment
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
    public void DeleteLotEquipment(Map<String, Object> ld) throws Exception;

    /**
    * @fn : DeleteLotWTime
    * @brief : DeleteLotWTime
    * @Method Name : DeleteLotWTime
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
    public void DeleteLotWTime(Map<String, Object> ld) throws Exception;

 }