package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS03800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03800Service
* @Company: IFC
* @Create Date: 2021.3.11
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 11.   김기수   최초  생성
 *
 *
*/
public interface BAS03800Service {

    /**
    * @fn : selectBasToolList
    * @brief : 치공구 사용품목을 조회 한다.
    * @Method Name : selectBasToolList
    * @remark
    * @Create Date: 2021.3.11
    * @Author: 김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.3.11.       김기수     최초  생성
     *
    */
    public void selectBasToolList(UiMapDto dto) throws Exception;
   
    
    /**
     * @fn : selectDurableCodePopup
     * @brief : 치공구 POPUP 리스트를 조회한다.
     * @Method Name : selectDurableCodePopup
     * @remark
     * @Create Date: 2021.3.11
     * @Author: 김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.3.11.       김기수     최초  생성
      *
     */
     public void selectDurableCodePopup(UiMapDto dto) throws Exception;


 }