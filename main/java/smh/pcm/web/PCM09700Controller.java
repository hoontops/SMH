package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM09700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM09700Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM09700Controller    
* @Company		: Built1
* @Create Date	: 2021. 5. 20. 오후 7:59:49 
* @Author		: SungHa.Jin
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 5. 20.       SungHa.Jin      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm09700")
public class PCM09700Controller extends AbstractWebController {

    @Autowired
    private PCM09700Service service;

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
    * @Author		: SungHa.Jin
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       SungHa.Jin      최초  생성
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
    * @Author		: SungHa.Jin
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 20.       SungHa.Jin      최초  생성
     *
    */
    @RequestMapping(value = "selectWIPMultiStateList.do")
    public View selectWIPMultiStateList(UiMapDto dto, Model model) throws Exception {
        service.selectWIPMultiStateList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "GetEquipmentByArea.do")
    public View GetEquipmentByArea(UiMapDto dto, Model model) throws Exception {
        service.GetEquipmentByArea(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: SaveMultiLotWorkEnd
    * @brief 		: 함수 간략한 설명 
    * @Method Name : SaveMultiLotWorkEnd
    * @remark		: 상세설명
    * @Author		: SungHa.Jin
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 21.       SungHa.Jin      최초  생성
     *
    */
    @RequestMapping(value = "saveMultiLotWorkEnd.do")
    public View saveMultiLotWorkEnd(UiMapDto dto, Model model) throws Exception {
        service.saveMultiLotWorkEnd(dto);
        return apply(dto, model);
    }
    
}