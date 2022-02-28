package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file			: BAS00700Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS00700Controller    
* @Company		: Built1
* @Create Date	: 2021. 2. 8. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 2. 8.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00700")
public class BAS00700Controller extends AbstractWebController {

    @Autowired
    private BAS00700Service service;

    /**
    * @fn 			: selectBasMasterdataclassList
    * @brief 		: 품목유형 정보 조회 
    * @Method Name : selectBasMasterdataclassList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 8.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectBasMasterdataclassList.do")
    public View selectBasMasterdataclassList(UiMapDto dto, Model model) throws Exception {
        service.selectBasMasterdataclassList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: saveBasMasterdataclass
    * @brief 		: 품목유형 정보 저장
    * @Method Name : saveBasMasterdataclass
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 8.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveBasMasterdataclass.do")
    public View saveBasMasterdataclass(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBasMasterdataclass(dto);
        return apply(dto, model);
    }

}
