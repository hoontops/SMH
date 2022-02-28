package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM07200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM07200Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM07200Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 27. 오후 7:59:49 
* @Author		: 진성하
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 27.       진성하      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm07200")
public class PCM07200Controller extends AbstractWebController {

    @Autowired
    private PCM07200Service service;

   
    /**
    * @fn 			: selectLotInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectLotInfo
    * @remark		: 상세설명
    * @Author		: 진성하
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       진성하      최초  생성
     *
    */
 
    @RequestMapping(value = "SelectLotInfoByProcess.do")
    public View SelectLotInfoByProcess(UiMapDto dto, Model model) throws Exception {
        service.SelectLotInfoByProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveFinalInspectionSend
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveFinalInspectionSend
    * @remark		: 상세설명
    * @Author		: 진성하
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       진성하      최초  생성
     *
    */
    @RequestMapping(value = "saveFinalInspectionSend.do")
    public View saveFinalInspectionSend(UiMapDto dto, Model model) throws Exception {
        service.saveFinalInspectionSend(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveXout.do")
    public View saveXout(UiMapDto dto, Model model) throws Exception {
        service.saveXout(dto);
        return apply(dto, model);
    }
    
}