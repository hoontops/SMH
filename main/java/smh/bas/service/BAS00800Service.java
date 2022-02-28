package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS00800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00800Service
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 04   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS00800Service {

    /**
    * @fn 			: selectTreeList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectTreeList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 04.       sungmin.choe      최초  생성
     *
    */
    public void selectTreeList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectCategoryList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCategoryList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 04.       sungmin.choe      최초  생성
     *
    */
    public void selectCategoryList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveCategory
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveCategory
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 4.       sungmin.choe      최초  생성
     *
    */
    public void saveCategory(UiMapDto dto) throws Exception;
    
 }