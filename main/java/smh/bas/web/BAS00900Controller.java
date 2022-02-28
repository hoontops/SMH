package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00900Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00900Controller
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 04.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00900")
public class BAS00900Controller extends AbstractWebController {

    @Autowired
    private BAS00900Service service;

    /**
    * @fn 			: selectReasonClassList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectReasonClassList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectReasonClassList.do")
    public View selectReasonClassList(UiMapDto dto, Model model) throws Exception {
        service.selectReasonClassList(dto);
        return apply(dto, model);
    }
    
  
    /**
    * @fn 			: selectReasonList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectReasonList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectReasonList.do")
    public View selectReasonList(UiMapDto dto, Model model) throws Exception {
        service.selectReasonList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: getParentReasonCodeClassId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getParentReasonCodeClassId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "getParentReasonCodeClassId.do")
    public View getParentReasonCodeClassId(UiMapDto dto, Model model) throws Exception {
        service.getParentReasonCodeClassId(dto);
        return apply(dto, model);
    }
    
    
    
    /**
    * @fn 			: saveReasonClass
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveReasonClass
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveReasonClass.do")
    public View saveReasonClass(UiMapDto dto, Model model) throws Exception {    	
        service.saveReasonClass(dto);
        return apply(dto, model);
    }
    

    /**
    * @fn 			: saveReason
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveReason
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveReason.do")
    public View saveReason(UiMapDto dto, Model model) throws Exception {    	
        service.saveReason(dto);
        return apply(dto, model);
    }
   }