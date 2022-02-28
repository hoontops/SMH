package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM03300Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM03300Controller    
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
@RequestMapping(value = "/pcm03300")
public class PCM03300Controller extends AbstractWebController {

    @Autowired
    private PCM03300Service service;

   
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
    * @fn 			: selectBatchTrackIn
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectBatchTrackIn
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
    @RequestMapping(value = "selectBatchTrackIn.do")
    public View selectBatchTrackIn(UiMapDto dto, Model model) throws Exception {
        service.selectBatchTrackIn(dto);
        return apply(dto, model);
    }

    
    /**
    * @fn 			: saveLotBatchTrackIn
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveLotBatchTrackIn
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
    @RequestMapping(value = "saveLotBatchTrackIn.do")
    public View saveLotBatchTrackIn(UiMapDto dto, Model model) throws Exception {
        service.saveLotBatchTrackIn(dto);
        return apply(dto, model);
    }    
    
}