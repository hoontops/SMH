package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS02200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02100Service
* @Company: Built1
* @Create Date: 2021.3.15
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS02200Service {

    /**
    * @fn 			: selectProductDEFInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductDEFInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    public void selectProductDEFInfo(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectOperationSpecList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectOperationSpecList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    public void selectOperationSpecList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveOperationSpec
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveOperationSpec
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 12.       sungmin.choe      최초  생성
     *
    */
    public void saveOperationSpec(UiMapDto dto) throws Exception;

 }