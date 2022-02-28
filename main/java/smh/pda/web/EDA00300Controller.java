package smh.pda.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pda.service.EDA00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: EDA00300Controller.java
* @Package		: smh.pda.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: EDA00300Controller    
* @Company		: Built1
* @Create Date	: 2021. 6. 1. 오후 12:26:38 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 6. 1.       sungmin.choe      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/eda00300")
public class EDA00300Controller extends AbstractWebController {

    @Autowired
    private EDA00300Service service;

    /**
    * @fn 			: selectFifo21
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectFifo21
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectFifo21.do")
    public View selectFifo21(UiMapDto dto, Model model) throws Exception {
        service.selectFifo21(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectFifo22
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectFifo022
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectFifo22.do")
    public View selectFifo22(UiMapDto dto, Model model) throws Exception {
        service.selectFifo22(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectFifo23
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectFifo23
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectFifo23.do")
    public View selectFifo23(UiMapDto dto, Model model) throws Exception {
        service.selectFifo23(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectFifo24
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectFifo24
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectFifo24.do")
    public View selectFifo24(UiMapDto dto, Model model) throws Exception {
        service.selectFifo24(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectFifo25
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectFifo25
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectFifo25.do")
    public View selectFifo25(UiMapDto dto, Model model) throws Exception {
        service.selectFifo25(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectFifo26
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectFifo26
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectFifo26.do")
    public View selectFifo26(UiMapDto dto, Model model) throws Exception {
        service.selectFifo26(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: moveTrx
    * @brief 		: 함수 간략한 설명 
    * @Method Name : moveTrx
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "moveTrx.do")
    public View moveTrx(UiMapDto dto, Model model) throws Exception {
        service.moveTrx(dto);
        return apply(dto, model);
    }
}
