package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: PCM04200Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: PCM04200Controller
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04200")
public class PCM04200Controller extends AbstractWebController {

    @Autowired
    private PCM04200Service service;

    /**
    * @fn : saveReleaseLotHold
    * @brief :  Lot보류
    * @Method Name : saveReleaseLotHold
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    @RequestMapping(value = "saveReleaseLotHold.do")
    public View saveReleaseLotHold(UiMapDto dto, Model model) throws Exception {
        service.saveReleaseLotHold(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectLotHoldList
    * @brief : Lot보류
    * @Method Name : selectLotHoldList
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectLotHoldList.do")
    public View selectLotHoldList(UiMapDto dto, Model model) throws Exception {
        service.selectLotHoldList(dto);
        return apply(dto, model);
    }
    
}
