package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM06800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06800Controller
* @Company: Built1
* @Create Date: 2021.2.15
* @Author: 이용국
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 6. 10.    이용국     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06800")
public class PCM06800Controller extends AbstractWebController {

    @Autowired
    private PCM06800Service service;

    /**
    * @fn :  SelectPerformancestatusbyEquipment
    * @brief : 설비 실적현항
    * @remark
    * @Create Date: 2021. 2. 15
    * @Author: 이용국
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 15.   이용국     최초  생성
     *
    */ 
    @RequestMapping(value = "selectCustomQuery.do")
    public View selectCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectCustomQuery(dto);
        return apply(dto, model);
    }

}
