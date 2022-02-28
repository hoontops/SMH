package smh.bas.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS00900Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00900Service
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
public interface BAS00900Service {

    /**
    * @fn 			: selectReasonClassList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectReasonClassList
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
    public void selectReasonClassList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectReasonList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectReasonList
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
    public void selectReasonList(UiMapDto dto) throws Exception;

    
    /**
    * @fn 			: getParentReasonCodeClassId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getParentReasonCodeClassId
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
    public void getParentReasonCodeClassId(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveReasonClass
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveReasonClass
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
    public void saveReasonClass(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveReason
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveReason
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
    public void saveReason(UiMapDto dto) throws Exception;
 }