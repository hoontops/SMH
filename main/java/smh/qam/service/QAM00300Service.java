package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM00300Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM00300Service
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
public interface QAM00300Service {

    /**
    * @fn : selectQamQcinspectorList
    * @brief : 검사원관리 정보 조회
    * @Method Name : selectQamQcinspectorList
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
    public void selectQamQcinspectorList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveQamQcinspector
    * @brief : 검사원관리 정보 저장
    * @Method Name : saveQamQcinspector
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
    public void saveQamQcinspector(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectQamQcinspectorhistoryList
     * @brief : 검사원관리 정보 이력 조회
     * @Method Name : selectQamQcinspectorhistoryList
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
     public void selectQamQcinspectorhistoryList(UiMapDto dto) throws Exception;

	/**
	* @fn : selectInspectionScore
	* @brief : 검사원 관리의 점수에 따른 등급조회 조회
	* @Method Name : selectInspectionScore
	* @remark
	* @Create Date: 2021.04.27
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.27.       권혜영     최초  생성
	*
	*/
	public void selectInspectionScore(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectExistInspector
	* @brief : 검사원 등록 시 이미 등록된 검사원명, 사원번호인지 조회 조회
	* @Method Name : selectExistInspector
	* @remark
	* @Create Date: 2021.04.27
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.27.       권혜영     최초  생성
	*
	*/
	public void selectExistInspector(UiMapDto dto) throws Exception;

}