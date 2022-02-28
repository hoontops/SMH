package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS00400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00400Service
* @Company: Built1
* @Create Date: 2021.2.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 16   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS00400Service {


    /**
    * @fn : selectAreaList
    * @brief : 작업장조회
    * @Method Name : selectResourceList
    * @remark
    * @Create Date: 2021.2.23
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.23.       sungmin.choe     최초  생성
     *
    */
    public void selectAreaList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectResourceList
    * @brief : 자원조회
    * @Method Name : selectResourceList
    * @remark
    * @Create Date: 2021.2.23
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.23.       sungmin.choe     최초  생성
     *
    */
    public void selectResourceList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectAreaTreeList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectAreaTreeList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    public void selectAreaTreeList(UiMapDto dto) throws Exception;

    /**
    * @fn 			: saveArea
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveArea
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 25.       sungmin.choe      최초  생성
     *
    */
    public void saveArea(UiMapDto dto) throws Exception;

	/**
	* @fn 			: selectCheckLot
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectCheckLot
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 8. 5.       sungmin.choe      최초  생성
	 *
	*/
	public void selectCheckLot(UiMapDto dto) throws Exception;
 }