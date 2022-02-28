package smh.pay.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import smh.pay.service.PAY40240Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


@Controller
@RequestMapping(value = "/pay40240/")
public class PAY40240Controller extends AbstractWebController {

    @Autowired
    private PAY40240Service service;

    /**
    * @file        : PAY40240Controller.java
    * @Project name: myHR 시스템
    * @Type name   : PAY40240Controller
    * @Create Date : 2022.01.20
    * @Author      : 유성연
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일        수정자   수정내용
     *   ------------  ------   ----------
     *   2022.01.20    유성연   최초작성
     *
    */
    @RequestMapping(value = "selectPayAttendanceStatusList")
    public View selectPayAttendanceStatusList(UiMapDto dto, Model model) throws Exception {
        service.selectPayAttendanceStatusList(dto);
        return apply(dto, model);
    }
}

