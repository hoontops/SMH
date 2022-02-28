package smh.mtm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: MTM00300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: MTM00300Service
* @Company: IFC
* @Create Date: 2021.5.7
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 7.   유창균   최초  생성
 *
 *
*/
public interface MTM00300Service {

    /**
    * @fn : selectMtmMOFRList
    * @brief : 자재불출요청
    * @Method Name : selectMtmMOFRList
    * @remark
    * @Create Date: 2021.5.7
    * @Author: 유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.5.7.       유창균     최초  생성
     *
    */
    public void selectMtmMtrOutFlowRequestList(UiMapDto dto) throws Exception;
    
    
    /**
     * @fn : selectMtmMOFRList
     * @brief : 자재불출요청
     * @Method Name : selectMtmMOFRList
     * @remark
     * @Create Date: 2021.5.7
     * @Author: 유창균
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.5.7.       유창균     최초  생성
      *
     */
     public void selectMaterialPopupList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectMtmMtrOutFlowRequest
    * @brief : 자재불출요청자재내역
    * @Method Name : selectMtmMtrOutFlowRequest
    * @remark
    * @Create Date: 2021.5.7
    * @Author: 유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.5.7.       유창균     최초  생성
     *
    */
    public void selectMtmMtrOutFlowRequest(UiMapDto dto) throws Exception;
    

    /**
     * @fn : saveMtmMtrOutFlowRequest
     * @brief :  
     * @remark
     * @Create Date: 2021.05.18
     * @Author: 유창균
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.18.       유창균     최초  생성
     *
     */
	public void saveMtmMtrOutFlowRequest(UiMapDto dto) throws Exception;

}