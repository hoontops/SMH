package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM01300Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01300Service
* @Company: Built1
* @Create Date: 2021.05.07
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
public interface QAM01300Service {

	/**
	* @fn : selectShipmentInspHistoryList
	* @brief : 출하검사 이력 조회
	* @Method Name : selectShipmentInspHistoryList
	* @remark
	* @Create Date: 2021.05.07
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.07      권혜영     최초  생성
	*
	*/
	public void selectShipmentInspHistoryList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectDefectToNCRShipmentList
	* @brief : NCR 최종 발행 조회
	* @Method Name : selectDefectToNCRShipmentList
	* @remark
	* @Create Date: 2021.05.07
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.07.       권혜영     최초  생성
	*
	*/
	public void selectDefectToNCRShipmentList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : saveShipmentInspNCRIssue
	* @brief : 출하 검사 NCR 저장
	* @Method Name : saveShipmentInspNCRIssue
	* @remark
	* @Create Date: 2021.05.07
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.07.       권혜영     최초  생성
	*
	*/
	public void saveShipmentInspNCRIssue(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectLotInfoByProcessShipment
	* @brief : 출하검사 이력조회 > Lot 상세 정보를 조회
	* @Method Name : selectLotInfoByProcessShipment
	* @remark
	* @Create Date: 2021.05.10
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.10.       권혜영     최초  생성
	*
	*/
	public void selectLotInfoByProcessShipment(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectShipmentInspHistoryDetailExterior
	* @brief : 출하검사 결과 이력 detail 그리드 조회
	* @Method Name : selectShipmentInspHistoryDetailExterior
	* @remark
	* @Create Date: 2021.05.10
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.10.       권혜영     최초  생성
	*
	*/
	public void selectShipmentInspHistoryDetailExterior(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectLotMessageShipmentInsp
	* @brief : 출하검사 LotId 로 LotMessage 공정 조회
	* @Method Name : selectLotMessageShipmentInsp
	* @remark
	* @Create Date: 2021.05.10
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.10.       권혜영     최초  생성
	*
	*/
	public void selectLotMessageShipmentInsp(UiMapDto dto) throws Exception;

}