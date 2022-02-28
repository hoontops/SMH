package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM02900Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM02900Service
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.   권혜영   최초  생성
 *
 *
*/
public interface QAM02900Service {

    /**
    * @fn : selectQamQcinspectorgradeList
    * @brief : 검사원 등급 정보 조회
    * @Method Name : selectQamQcinspectorgradeList
    * @remark
    * @Create Date: 2021.4.5
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.5.       권혜영     최초  생성
     *
    */
    public void selectQamQcinspectorgradeList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveQamQcinspectorgrade
    * @brief : 검사원 등급 정보 저장
    * @Method Name : saveQamQcinspectorgrade
    * @remark
    * @Create Date: 2021.4.5
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *  2021.4.5.       권혜영     최초  생성
     *
    */
    public void saveQamQcinspectorgrade(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectQamQcinspectorgradehistoryList
     * @brief : 검사원 등급 정보 이력 조회
     * @Method Name : selectQamQcinspectorgradehistoryList
     * @remark
     * @Create Date: 2021.4.5
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.5.       권혜영     최초  생성
      *
     */
     public void selectQamQcinspectorgradehistoryList(UiMapDto dto) throws Exception;

 
 }