package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM07300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM07300Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM07300Controller    
* @Company		: Built1
* @Create Date	: 2021. 5. 20. 오후 7:59:49 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 5. 20.       sungmin.choe      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm07300")
public class PCM07300Controller extends AbstractWebController {

    @Autowired
    private PCM07300Service service;

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
    * @fn 			: selectWIPMultiStateList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectWIPMultiStateList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 20.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectWIPMultiStateList.do")
    public View selectWIPMultiStateList(UiMapDto dto, Model model) throws Exception {
        service.selectWIPMultiStateList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveMultiLotAccept
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveMultiLotAccept
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 21.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveMultiLotAccept.do")
    public View saveMultiLotAccept(UiMapDto dto, Model model) throws Exception {
        service.saveMultiLotAccept(dto);
        return apply(dto, model);
    }
    
}