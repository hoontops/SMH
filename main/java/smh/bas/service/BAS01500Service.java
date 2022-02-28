package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface BAS01500Service {

	/**
	* @fn 			: selectUserList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectUserList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 12.       sungmin.choe      최초  생성
	 *
	*/
	public void selectUserList(UiMapDto dto) throws Exception;
    /**
    * @fn 			: selectAreaList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectAreaList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    public void selectAreaList(UiMapDto dto) throws Exception;
    /**
    * @fn 			: saveUserArea
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserArea
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    public void saveUserArea(UiMapDto dto) throws Exception;
}
