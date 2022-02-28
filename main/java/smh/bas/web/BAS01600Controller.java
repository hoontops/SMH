package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file			: BAS01600Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01600Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 09. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 4. 09.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01600")
public class BAS01600Controller extends AbstractWebController {

    @Autowired
    private BAS01600Service service;


    /**
    * @fn 			: selectActionList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectActionList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 9.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectActionList.do")
    public View selectActionList(UiMapDto dto, Model model) throws Exception {
        service.selectActionList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveActionList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveActionList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 9.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveActionList.do")
    public View saveActionList(UiMapDto dto, Model model) throws Exception {
    	
        service.saveActionList(dto);
        return apply(dto, model);
    }
}
