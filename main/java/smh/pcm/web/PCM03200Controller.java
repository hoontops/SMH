package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM03200Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM03200Controller    
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
@RequestMapping(value = "/pcm03200")
public class PCM03200Controller extends AbstractWebController {

    @Autowired
    private PCM03200Service service;

   
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
    * @fn 			: selectBatchAccept
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectBatchAccept
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 25.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectBatchAccept.do")
    public View selectBatchAccept(UiMapDto dto, Model model) throws Exception {
        service.selectBatchAccept(dto);
        return apply(dto, model);
    }
    
}