package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM07000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM07000Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM07000Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 27. 오후 7:59:49 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 27.       sungmin.choe      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm07000")
public class PCM07000Controller extends AbstractWebController {

    @Autowired
    private PCM07000Service service;

   
    /**
    * @fn 			: selectOtherInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectOtherInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectOtherInfo.do")
    public View selectOtherInfo(UiMapDto dto, Model model) throws Exception {
        service.selectOtherInfo(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCustomQuery
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCustomQuery.do")
    public View selectCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectCustomQuery(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveFinalInspectionStart
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveFinalInspectionStart
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 30.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveFinalInspectionStart.do")
    public View saveFinalInspectionStart(UiMapDto dto, Model model) throws Exception {
        service.saveFinalInspectionStart(dto);
        return apply(dto, model);
    }
    
}