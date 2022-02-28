package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file			: BAS02600Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS02600Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 07. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 4. 07.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02600")
public class BAS02600Controller extends AbstractWebController {

    @Autowired
    private BAS02600Service service;
 
 
    /**
    * @fn 			: selectItemHistoryList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectItemHistoryList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectItemHistoryList.do")
    public View selectItemHistoryList(UiMapDto dto, Model model) throws Exception {
        service.selectItemHistoryList(dto);
        return apply(dto, model);
    }

}
