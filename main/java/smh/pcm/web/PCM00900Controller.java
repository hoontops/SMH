package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM00900Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00500Controller
* @Company: Built1
* @Create Date: 2021.03.16
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 03. 16.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm00900")
public class PCM00900Controller extends AbstractWebController {

    @Autowired
    private PCM00900Service service;

    /**
    * @fn :  selectWIPListToCancelInput
    * @brief : LOT 취소 대상리스트 조회
    * @remark
    * @Create Date: 2021. 03. 16
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 16.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectWIPListToCancelInput.do")
    public View selectWIPListToCancelInput(UiMapDto dto, Model model) throws Exception {
        service.selectWIPListToCancelInput(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  cancelInputLot
    * @brief : LOT 투입 취소
    * @remark
    * @Create Date: 2021. 03. 17
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 17.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "cancelInputLot.do")
    public View cancelInputLot(UiMapDto dto, Model model) throws Exception {
        service.cancelInputLot(dto);
        return apply(dto, model);
    }   
}
