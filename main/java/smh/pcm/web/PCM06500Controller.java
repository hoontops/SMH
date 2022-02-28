package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM06500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06500Controller
* @Company: Built1
* @Create Date: 2021.06.15
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.15.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06500")
public class PCM06500Controller extends AbstractWebController {

    @Autowired
    private PCM06500Service service;

    /**
    * @fn :   
    * @brief :  Window Time Lot 조회 
    * @remark
    * @Create Date: 2021.06.15
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.15.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectWindowTimeLotList.do")
    public View selectWindowTimeLotList(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectWindowTimeLotList ************* !!!");
        service.selectWindowTimeLotList(dto);
        return apply(dto, model);
    }
    
}
