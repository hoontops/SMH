package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS05500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05500Service
* @Company: IFC
* @Create Date: 2021.4.20
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 20.   유창균   최초  생성
 *
 *
*/
public interface BAS05500Service {

    /**
    * @fn : selectBasExchangeList
    * @brief : 환율 정보를 조회한다.
    * @Method Name : selectBasExchangeList
    * @remark
    * @Create Date: 2021.4.20
    * @Author: 유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.20.       유창균     최초  생성
     *
    */
    public void selectBasExchangeList(UiMapDto dto) throws Exception;

}