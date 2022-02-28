package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS01200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01100Service
* @Company: IFC
* @Create Date: 2021.4.15
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 15.   유창균   최초  생성
 *
 *
*/
public interface BAS01200Service {

    /**
    * @fn : selectBasWareHouseList
    * @brief : 업체 정보를 조회한다.
    * @Method Name : selectBasWareHouseList
    * @remark
    * @Create Date: 2021.4.15
    * @Author: 유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.15.       유창균     최초  생성
     *
    */
    public void selectBasWareHouseList(UiMapDto dto) throws Exception;

}