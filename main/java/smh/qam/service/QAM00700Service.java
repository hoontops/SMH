package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM00700Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00700Service
* @Company     : Built1
* @Create Date : 2021.05.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.13  yanghee.kim    최초  생성
*
*/
public interface QAM00700Service {

    /**
    * @fn          : selectProcessInspAbnormalList
    * @brief       : 수입검사 NCR
    * @remark
    * @Create Date : 2021.05.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.13  yanghee.kim    최초  생성
    *
    */
    public void selectProcessInspAbnormalList(UiMapDto dto) throws Exception;	
    
    /**
	* @fn : saveOSPInspectionCompanyAgree
	* @brief : 수입검사 NCR > 업체동의 저장
	* @Method Name : saveOSPInspectionCompanyAgree
	* @remark
	* @Create Date: 2021.05.14
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.14.       권혜영     최초  생성
	*
	*/
	public void saveOSPInspectionCompanyAgree(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectLotInfoByLotIDOSP
	* @brief : Lot정보 조회
	* @Method Name : selectLotInfoByLotIDOSP
	* @remark
	* @Create Date: 2021.05.14
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.14.       권혜영     최초  생성
	*
	*/
	public void selectLotInfoByLotIDOSP(UiMapDto dto) throws Exception;
	
}