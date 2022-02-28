package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS05300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05300Service
* @Company: Built1
* @Create Date: 2021.4.2
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.2.   권혜영   최초  생성
 *
 *
*/
public interface BAS05300Service {

	/**
    * @fn : selectBasAreaTreeList
    * @brief : 작업장 트리 정보 조회
    * @Method Name : selectBasAreaTreeList
    * @remark
    * @Create Date: 2021.4.2
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.2.       권혜영     최초  생성
     *
    */
    public void selectBasAreaTreeList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectBasAreaworkerList
    * @brief : 작업장 작업인원 정보 조회
    * @Method Name : selectBasAreaworkerList
    * @remark
    * @Create Date: 2021.4.2
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.2.       권혜영     최초  생성
     *
    */
    public void selectBasAreaworkerList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBasAreaworker
    * @brief : 작업장 작업인원 정보 저장
    * @Method Name : saveBasAreaworker
    * @remark
    * @Create Date: 2021.4.2
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *  2021.4.2.       권혜영     최초  생성
     *
    */
    public void saveBasAreaworker(UiMapDto dto) throws Exception;

 }