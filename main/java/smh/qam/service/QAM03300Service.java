package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM03300Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03300Service
* @Company: Built1
* @Create Date: 2021.06.08
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.08.   권혜영   최초  생성
 *
 *
*/
public interface QAM03300Service {

    /**
    * @fn : selectQamShrinkmeasureList
    * @brief : 수축율현황 조회
    * @Method Name : selectQamShrinkmeasureList
    * @remark
    * @Create Date: 2021.06.08
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
    public void selectQamShrinkmeasureList(UiMapDto dto) throws Exception;
	
    /**
	* @fn : selectQamShrinkmeasurePopupList
	* @brief : 수축율 측정 팝업  조회
	* @Method Name : selectQamShrinkmeasurePopupList
	* @remark
	* @Create Date: 2021.06.08
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.08.       권혜영     최초  생성
	*
	*/
	public void selectQamShrinkmeasurePopupList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectQamShrinkmeasureGroupList
	* @brief : 차트 - 수축율현황 그룹 조회
	* @Method Name : selectQamShrinkmeasureGroupList
	* @remark
	* @Create Date: 2021.06.10
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.10.       권혜영     최초  생성
	*
	*/
	public void selectQamShrinkmeasureGroupList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectQamShrinkmeasureLotList
	* @brief : 차트 - 수축율현황 그룹 조회 > 선택 LOT 보기 팝업
	* @Method Name : selectQamShrinkmeasureLotList
	* @remark
	* @Create Date: 2021.06.29
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.29.       권혜영     최초  생성
	*
	*/
	public void selectQamShrinkmeasureLotList(UiMapDto dto) throws Exception;

}