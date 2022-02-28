package smh.pda.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pda.service.PDA01000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PDA00600Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PDA00600Controller
* @Company: Built1
* @Create Date: 2021.4.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.    김성현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pda01000")
public class PDA01000Controller extends AbstractWebController {

    @Autowired
    private PDA01000Service service;

    @RequestMapping(value = "selectLotInfoBylotIDbyAreaAuthority.do")
    public View selectLotInfoBylotIDbyAreaAuthority(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoBylotIDbyAreaAuthority(dto);
        return apply(dto, model);
    }
    
}
