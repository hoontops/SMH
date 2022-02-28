package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file			: BAS01900Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01900Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 06. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 4. 06.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01900")
public class BAS01900Controller extends AbstractWebController {

    @Autowired
    private BAS01900Service service;
 
    /**
    * @fn 			: selectCamRequestList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCamRequestList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 6.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCamRequestList.do")
    public View selectCamRequestList(UiMapDto dto, Model model) throws Exception {
        service.selectCamRequestList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: saveCamRequest
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveCamRequest
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 6.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveCamRequest.do")
    public View saveCamRequest(UiMapDto dto, Model model) throws Exception {
    	
        service.saveCamRequest(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCamRequestId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCamRequestId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCamRequestId.do")
    public View selectCamRequestId(UiMapDto dto, Model model) throws Exception {
        service.selectCamRequestId(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectItemDetail
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectItemDetail
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectItemDetail.do")
    public View selectItemDetail(UiMapDto dto, Model model) throws Exception {
        service.selectItemDetail(dto);
        return apply(dto, model);
    }
}
