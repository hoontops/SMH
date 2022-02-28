package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM01600Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01600Service
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
public interface QAM01600Service {

	/**
	* @fn : selectShipmentAbnormalOccurrence
	* @brief : 출하검사이상발생 조회
	* @Method Name : selectShipmentAbnormalOccurrence
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
	public void selectShipmentAbnormalOccurrence(UiMapDto dto) throws Exception;
		
	/**
	* @fn : selectShipmentInspectionImage
	* @brief : 품질규격 이상발생 > 품질규격 측정항목의 파일 리스트  조회
	* @Method Name : selectShipmentInspectionImage
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectShipmentInspectionImage(UiMapDto dto) throws Exception;

}