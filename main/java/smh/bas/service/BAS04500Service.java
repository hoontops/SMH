package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS04500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04500Service
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 16   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS04500Service {

    /**
    * @fn 			: selectUserGroupList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUserGroupList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    public void selectUserGroupList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectUserGroupUserList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUserGroupUserList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    public void selectUserGroupUserList(UiMapDto dto) throws Exception;

    
    /**
    * @fn 			: getUserGroupUserList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getUserGroupUserList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    public void getUserGroupUserList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveUserGroup
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserGroup
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    public void saveUserGroup(UiMapDto dto) throws Exception;
    

    /**
    * @fn 			: saveUserGroupUser
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserGroupUser
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    public void saveUserGroupUser(UiMapDto dto) throws Exception;
 }