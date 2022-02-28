package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00500Controller
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 26.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00500")
public class BAS00500Controller extends AbstractWebController {

    @Autowired
    private BAS00500Service service;

    /**
    * @fn : selectProcessSegmentExtlist
    * @brief : 공정현황 조회
    * @remark
    * @Create Date: 2021. 2. 26
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 26.       sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectProcessSegmentExtlist.do")
    public View selectProcessSegmentExtlist(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentExtlist(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectTreeList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectTreeList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectTreeList.do")
    public View selectTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectTreeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectProcessAList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessAList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectProcessAList.do")
    public View selectProcessAList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessAList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectProcessBList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessBList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectProcessBList.do")
    public View selectProcessBList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessBList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectProcessCList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessCList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectProcessCList.do")
    public View selectProcessCList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessCList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectProcessDList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessDList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectProcessDList.do")
    public View selectProcessDList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessDList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveProcess
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveProcess
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 2.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveProcess.do")
    public View saveProcess(UiMapDto dto, Model model) throws Exception {    	
        service.saveProcess(dto);
        return apply(dto, model);
    }
   }