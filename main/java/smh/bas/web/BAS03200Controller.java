package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: bas03200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: bas03200Controller
* @Company: Built1
* @Create Date: 2021.2.18
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 18.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03200")
public class BAS03200Controller extends AbstractWebController {

    @Autowired
    private BAS03200Service service;

    /**
    * @fn :  selectWindowTimeList
    * @brief : 
    * @remark
    * @Create Date: 2021. 2. 18
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 18.       김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectWindowTimeList.do")
    public View selectWindowTimeList(UiMapDto dto, Model model) throws Exception {
    	service.selectProductDEFInfo(dto);
    	service.selectProcessPathList(dto);
        service.selectWindowTimeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  selectWindowActionList
    * @brief : 
    * @remark
    * @Create Date: 2021. 2. 18
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 18.       김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectWindowActionList.do")
    public View selectWindowActionList(UiMapDto dto, Model model) throws Exception {
    	service.selectWindowActionList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  selectActionList
    * @brief : 
    * @remark
    * @Create Date: 2021. 2. 18
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 18.       김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectActionList.do")
    public View selectActionList(UiMapDto dto, Model model) throws Exception {
    	service.selectActionList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "select4step.do")
    public View select4step(UiMapDto dto, Model model) throws Exception {
    	service.select4step(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectStepAll.do")
    public View selectStepAll(UiMapDto dto, Model model) throws Exception {
    	service.selectStepAll(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :  selectActionList
     * @brief : 
     * @remark
     * @Create Date: 2021. 2. 18
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 2. 18.       김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectRoutingQTimeProcPopup.do")
     public View selectRoutingQTimeProcPopup(UiMapDto dto, Model model) throws Exception {
     	service.selectRoutingQTimeProcPopup(dto);
         return apply(dto, model);
     }

     /**
      * @fn :  saveRoutingWtime
      * @brief : 
      * @remark
      * @Create Date: 2021. 2. 18
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 2. 18.       김애리     최초  생성
       *
      */ 
     @RequestMapping(value = "saveRoutingWtime.do")
     public View saveRoutingWtime(UiMapDto dto, Model model) throws Exception {
     	
         service.saveRoutingWtime(dto);
         return apply(dto, model);
     }
     
}
