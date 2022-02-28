package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM10100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM10100Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM10100Controller
* @Company: Built1
* @Create Date: 2021.6.15
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 6. 15.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm10100")
public class PCM10100Controller extends AbstractWebController {

    @Autowired
    private PCM10100Service service;

    /**
    * @fn :  selectInfPcmWipSubulList
    * @brief :재공 수불부 조회
    * @remark
    * @Create Date: 2021. 6. 15
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *       수정일      수정자      수정내용
     *   ------------  ------  ----------
     *   2021. 6. 15.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectInfPcmWipSubulList.do")
    public View selectInfPcmWipSubulList(UiMapDto dto, Model model) throws Exception {
        service.selectInfPcmWipSubulList(dto);
        return apply(dto, model);
    }
   
    
}
