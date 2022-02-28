package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file			: BAS02700Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS02700Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 08. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 4. 08.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02700")
public class BAS02700Controller extends AbstractWebController {

    @Autowired
    private BAS02700Service service;
 

    /**
    * @fn 			: selectItemList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectItemList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 8.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectItemList.do")
    public View selectItemList(UiMapDto dto, Model model) throws Exception {
        service.selectItemList(dto);
        return apply(dto, model);
    }

}
