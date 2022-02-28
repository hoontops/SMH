package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS04500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04500Controller
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 04.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas04500")
public class BAS04500Controller extends AbstractWebController {

    @Autowired
    private BAS04500Service service;

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
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUserGroupList.do")
    public View selectUserGroupList(UiMapDto dto, Model model) throws Exception {
        service.selectUserGroupList(dto);
        return apply(dto, model);
    }
    
  
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
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUserGroupUserList.do")
    public View selectUserGroupUserList(UiMapDto dto, Model model) throws Exception {
        service.selectUserGroupUserList(dto);
        return apply(dto, model);
    }

    
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
    @RequestMapping(value = "getUserGroupUserList.do")
    public View getUserGroupUserList(UiMapDto dto, Model model) throws Exception {
        service.getUserGroupUserList(dto);
        return apply(dto, model);
    }
    
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
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveUserGroup.do")
    public View saveUserGroup(UiMapDto dto, Model model) throws Exception {    	
        service.saveUserGroup(dto);
        return apply(dto, model);
    }
    

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
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveUserGroupUser.do")
    public View saveUserGroupUser(UiMapDto dto, Model model) throws Exception {    	
        service.saveUserGroupUser(dto);
        return apply(dto, model);
    }
   }