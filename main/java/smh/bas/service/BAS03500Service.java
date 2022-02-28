package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS03500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03500Service
* @Company: Built1
* @Create Date: 2021.3.5
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 15.   김기수   최초  생성
 *
 *
*/
public interface BAS03500Service {

    /**
    * @fn : selectBasResourceUseProduct
    * @brief : 자원 사용 품목을 조회한다.
    * @Method Name : selectBasResourceUseProduct
    * @remark
    * @Create Date: 2021.3.15
    * @Author: 김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.3.15.       김기수     최초  생성
     *
    */
    public void selectBasResourceUseProduct(UiMapDto dto) throws Exception;
    
    public void selectResourcePopup(UiMapDto dto) throws Exception;

 }