package smh.mtm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: MTM00100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: MTM00100Service
* @Company: IFC
* @Create Date: 2021.4.28
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 28.   유창균   최초  생성
 *
 *
*/
public interface MTM00100Service {

    /**
    * @fn : selectMtmMaterialManagementList
    * @brief : 마스터품목(자재) 조회
    * @Method Name : selectMtmMaterialManagementList
    * @remark
    * @Create Date: 2021.4.28
    * @Author: 유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.28.       유창균     최초  생성
     *
    */
    public void selectMtmMaterialManagementList(UiMapDto dto) throws Exception;
    
    public void selectMtmMaterialDetail(UiMapDto dto) throws Exception;

}