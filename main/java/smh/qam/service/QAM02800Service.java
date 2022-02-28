package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: QAM02800Service.java
* @Package		: smh.qam.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: QAM02800Service    
* @Company		: Built1
* @Create Date	: 2021. 4. 22. 오후 2:22:53 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 22.       sungmin.choe      최초  생성
 *
*/
public interface QAM02800Service {

	/**
	* @fn 			: selectChangePointList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectChangePointList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 22.       sungmin.choe      최초  생성
	 *
	*/
	public void selectChangePointList(UiMapDto dto) throws Exception;
 
	
	/**
	* @fn 			: selectRCKey
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectRCKey
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 26.       sungmin.choe      최초  생성
	 *
	*/
	public void selectRCKey(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: selectLotList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectLotList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 26.       sungmin.choe      최초  생성
	 *
	*/
	public void selectLotList(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: selectSaveLotList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectSaveLotList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 26.       sungmin.choe      최초  생성
	 *
	*/
	public void selectSaveLotList(UiMapDto dto) throws Exception;

	
	/**
	* @fn 			: selectDetailData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectDetailData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 27.       sungmin.choe      최초  생성
	 *
	*/
	public void selectDetailData(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectIsDraft
	* @brief : 결재번호의 요청에 대해서 결재상태가 회수인지 조사 조회
	* @Method Name : selectIsDraft
	* @remark
	* @Create Date: 2021.05.18
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.18.       권혜영     최초  생성
	*
	*/
	public void selectIsDraft(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectChangePointThisTimeApprovalUser
	* @brief : 변경점 등록 팝업을 호출할 때 이번 차례의 결재자가 누구인지 조사 조회
	* @Method Name : selectChangePointThisTimeApprovalUser
	* @remark
	* @Create Date: 2021.05.18
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.18.       권혜영     최초  생성
	*
	*/
	public void selectChangePointThisTimeApprovalUser(UiMapDto dto) throws Exception;
	
	/**
	* @fn : saveChangePoint
	* @brief : 변경점 신청서, 결재 저장 조회
	* @Method Name : saveChangePoint
	* @remark
	* @Create Date: 2021.05.20
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.20.       권혜영     최초  생성
	*
	*/
	public void saveChangePoint(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectApprovalType
	* @brief : 전체 기안자/승인자의 상태 조회
	* @Method Name : selectApprovalType
	* @remark
	* @Create Date: 2021.05.21
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.21.       권혜영     최초  생성
	*
	*/
	public void selectApprovalType(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectUserApproval
	* @brief : 신뢰성 검증 의뢰 > 결제자 조회  조회
	* @Method Name : selectUserApproval
	* @remark
	* @Create Date: 2021.05.23
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.23.       권혜영     최초  생성
	*
	*/
	public void selectUserApproval(UiMapDto dto) throws Exception;

    /**
    * @fn : selectProductCustomerInfo
    * @brief : 변경점 등록 > 품목선택 > 고객정보 조회
    * @remark
    * @Create Date: 2021.08.04
    * @Author: yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일             수정자      수정내용
    *   ------------  -----------  ----------
    *   2021.08.04.   yanghee.kim  최초  생성
    *
    */
	public void selectProductCustomerInfo(UiMapDto dto) throws Exception;
}