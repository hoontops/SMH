package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM03200Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03200Service
* @Company: Built1
* @Create Date: 2021.06.04
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.04.   권혜영   최초  생성
 *
 *
*/
public interface QAM03200Service {

    /**
    * @fn : selectQamShrinkmeasureList
    * @brief : LOT별 수축율 측정 조회
    * @Method Name : selectQamShrinkmeasureList
    * @remark
    * @Create Date: 2021.06.04
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
	* @fn : saveQamShrinkmeasure
	* @brief : 수축율관리 저장
	* @Method Name : saveQamShrinkmeasure
	* @remark
	* @Create Date: 2021.06.04
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.03.       권혜영     최초  생성
	*
	*/
	public void saveQamShrinkmeasure(UiMapDto dto) throws Exception;
	
	/**
	* @fn : procQamShrinkmeasure
	* @brief : 측정값 DATA 변환 
	* @Method Name : procQamShrinkmeasure
	* @remark
	* @Create Date: 2021.06.04
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.04.       권혜영     최초  생성
	*
	*/
	public void procQamShrinkmeasure(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectQamEquipmentList
	* @brief : 설비 팝업 조회
	* @Method Name : selectQamEquipmentList
	* @remark
	* @Create Date: 2021.06.04
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.04.       권혜영     최초  생성
	*
	*/
	public void selectQamEquipmentList(UiMapDto dto) throws Exception;

}