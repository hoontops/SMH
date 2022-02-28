package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM01400Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01400Service
* @Company: Built1
* @Create Date: 2021.06.17
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
public interface QAM01400Service {

	/**
	* @fn : selectQamOverallStatusList
	* @brief : 종합현황 조회 > 월별 LRR 조회 
	* @Method Name : selectQamOverallStatusList
	* @remark
	* @Create Date: 2021.06.17
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.17      권혜영     최초  생성
	*
	*/
	public void selectQamOverallStatusList(UiMapDto dto) throws Exception;
	/**
	* @fn : selectQamOverallStatusDetailList
	* @brief : 종합현황 조회 > 일별 LRR 조회
	* @Method Name : selectQamOverallStatusDetailList
	* @remark
	* @Create Date: 2021.06.22
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.22.       권혜영     최초  생성
	*
	*/
	public void selectQamOverallStatusDetailList(UiMapDto dto) throws Exception;
	/**
	* @fn : selectQamOverallStatusVendorMonList
	* @brief : 업체별 현황(월) 조회
	* @Method Name : selectQamOverallStatusVendorMonList
	* @remark
	* @Create Date: 2021.06.22
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.22.       권혜영     최초  생성
	*
	*/
	public void selectQamOverallStatusVendorMonList(UiMapDto dto) throws Exception;
	/**
	* @fn : selectQamOverallStatusVendorDateList
	* @brief : 업체별 현황(일) 조회
	* @Method Name : selectQamOverallStatusVendorDateList
	* @remark
	* @Create Date: 2021.06.22
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.22.       권혜영     최초  생성
	*
	*/
	public void selectQamOverallStatusVendorDateList(UiMapDto dto) throws Exception;
	/**
	* @fn : selectQamOverallStatusItemList
	* @brief : 품목별 현황 조회
	* @Method Name : selectQamOverallStatusItemList
	* @remark
	* @Create Date: 2021.06.22
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.22.       권혜영     최초  생성
	*
	*/
	public void selectQamOverallStatusItemList(UiMapDto dto) throws Exception;
	/**
	* @fn : selectQamOverallStatusProductDefList
	* @brief : 품목별 현황 조회
	* @Method Name : selectQamOverallStatusProductDefList
	* @remark
	* @Create Date: 2021.07.15
	* @Author: yanghee.kim
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.07.15.       yanghee.kim     최초  생성
	*
	*/
	public void selectQamOverallStatusProductDefList(UiMapDto dto) throws Exception;
}