package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM01200Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01200Service
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
public interface QAM01200Service {

	/**
	* @fn : selectQualitySpecificationIssueList
	* @brief : 품질규격 이상발생 정보 조회
	* @Method Name : selectQualitySpecificationIssueList
	* @remark
	* @Create Date: 2021.4.16
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
	public void selectQualitySpecificationIssueList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectQualitySpecIssueAffectLot
	* @brief : 품질규격 이상발생 affectLot 조회
	* @Method Name : selectQualitySpecIssueAffectLot
	* @remark
	* @Create Date: 2021.4.19
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
	public void selectQualitySpecIssueAffectLot(UiMapDto dto) throws Exception;
	 
	/**
	* @fn : selectSequenceDegree
	* @brief : CAR 접수 순번에 따른 마지막차수를 조회
	* @Method Name : selectSequenceDegree
	* @remark
	* @Create Date: 2021.4.19
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.4.19.       권혜영     최초  생성
	*
	*/
	public void selectSequenceDegree(UiMapDto dto) throws Exception;
	  
	/**
   * @fn : selectSequenceState
   * @brief : CAR 접수 순번에 따른 상태를 조회
   * @Method Name : selectSequenceState
   * @remark
   * @Create Date: 2021.4.21
   * @Author: 권혜영
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.4.21.       권혜영     최초  생성
    *
   */
	public void selectSequenceState(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectCarRequest
	* @brief : CAR 요청정보를 조회
	* @Method Name : selectCarRequest
	* @remark
	* @Create Date: 2021.4.21
	* @Author: 권혜영
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일      수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021.4.21.       권혜영     최초  생성
	 *
	*/
	public void selectCarRequest(UiMapDto dto) throws Exception;
	
	/**
	 * @fn : selectCarReceipt
	 * @brief : CAR 접수정보를 조회
	 * @Method Name : selectCarReceipt
	 * @remark
	 * @Create Date: 2021.4.21
	 * @Author: 권혜영
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021.4.21.       권혜영     최초  생성
	  *
	 */
	public void selectCarReceipt(UiMapDto dto) throws Exception;
	 
 /**
  * @fn : selectCarApproval
  * @brief : CAR 승인정보를 조회
  * @Method Name : selectCarApproval
  * @remark
  * @Create Date: 2021.4.21
  * @Author: 권혜영
  * @File Version: v1.0
   *
   * << 개정이력(Modification Information) >>
   *
   *     수정일      수정자   수정내용
   *   ------------  ------  ----------
   *   2021.4.21.       권혜영     최초  생성
   *
  */
	public void selectCarApproval(UiMapDto dto) throws Exception;
	  
  /**
   * @fn : selectCarValidation
   * @brief : CAR 유효성평가정보를 조회
   * @Method Name : selectCarValidation
   * @remark
   * @Create Date: 2021.4.21
   * @Author: 권혜영
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.4.21.       권혜영     최초  생성
    *
   */
	public void selectCarValidation(UiMapDto dto) throws Exception;
	   
   /**
   * @fn : selectConcurrenceCount
   * @brief : 해당 기간안에 스펙아웃이 발생한 Count를 조회
   * @Method Name : selectConcurrenceCount
   * @remark
   * @Create Date: 2021.4.21
   * @Author: 권혜영
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.4.21.       권혜영     최초  생성
    *
   */
	public void selectConcurrenceCount(UiMapDto dto) throws Exception;
	   
   /**
   * @fn : saveQamCarAllState
   * @brief : 품질이상발생 CAR 저장
   * @Method Name : saveQamCarAllState
   * @remark
   * @Create Date: 2021.4.23
   * @Author: 권혜영
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.4.23.       권혜영     최초  생성
    *
   */
	public void saveQamCarAllState(UiMapDto dto) throws Exception;
 
	/**
	* @fn : selectLotToAddAffectLot
	* @brief : AffectLot을 수동추가하기위한 Lot조회
	* @Method Name : selectLotToAddAffectLot
	* @remark
	* @Create Date: 2021.04.25
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.25.       권혜영     최초  생성
	*
	*/
	public void selectLotToAddAffectLot(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectOperationInspMeasureImage
	* @brief : 품질규격 측정항목의 파일 리스트 조회
	* @Method Name : selectOperationInspMeasureImage
	* @remark
	* @Create Date: 2021.05.03
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.03.       권혜영     최초  생성
	*
	*/
	public void selectOperationInspMeasureImage(UiMapDto dto) throws Exception;
	
}