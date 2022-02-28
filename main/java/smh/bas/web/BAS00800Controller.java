package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00800Controller
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
@RequestMapping(value = "/bas00800")
public class BAS00800Controller extends AbstractWebController {

    @Autowired
    private BAS00800Service service;

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
    @RequestMapping(value = "selectTreeList.do")
    public View selectTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectTreeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCategoryList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessAList
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
    @RequestMapping(value = "selectCategoryList.do")
    public View selectProcessAList(UiMapDto dto, Model model) throws Exception {
        service.selectCategoryList(dto);
        return apply(dto, model);
    }
    
    
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
    @RequestMapping(value = "saveCategory.do")
    public View saveCategory(UiMapDto dto, Model model) throws Exception {    	
        service.saveCategory(dto);
        return apply(dto, model);
    }
   }