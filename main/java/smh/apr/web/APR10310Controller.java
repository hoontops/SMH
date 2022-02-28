package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR10310Service;


/**
* @file: APR10310Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10310Controller
* @Company: Built1
* @Create Date: 2022.1.26
* @Author: 권택진
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  	------  ----------
 *   2022. 02. 23.    권택진     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr10310")
public class APR10310Controller extends AbstractWebController {

    @Autowired
    private APR10310Service service;

     /**
      * @fn : selectSelfEvaluationListDetail
      * @brief : 행동평가 내역 조회
      * @remark
      * @Create Date: 2022. 02. 23
      * @Author: 권택진
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일         수정자   수정내용
       *   ------------  ------  ----------
       *   2022. 02. 23   권택진     최초  생성
       *
      */
    
    
     @RequestMapping(value = "selectBehaviorUserList.do")
     public View selectBehaviorUserList(UiMapDto dto, Model model) throws Exception {
    	 service.selectBehaviorUserList(dto);
    	 return apply(dto, model);
     }
     
     
     @RequestMapping(value = "selectRatingList.do")
     public View selectRatingList(UiMapDto dto, Model model) throws Exception {
    	 service.selectRatingList(dto);
    	 return apply(dto, model);
     }
     
     @RequestMapping(value = "selectBehaviorTableList.do")
     public View selectBehaviorTableList(UiMapDto dto, Model model) throws Exception {
    	 service.selectBehaviorTableList(dto);
    	 return apply(dto, model);
     }
     
     @RequestMapping(value = "updateBehaviorTable.do")
     public View updateBehaviorTable(UiMapDto dto, Model model) throws Exception {
    	 service.updateBehaviorTable(dto);
    	 return apply(dto, model);
     }
    
     
     @RequestMapping(value = "selectRatingExists.do")
     public View selectRatingExists(UiMapDto dto, Model model) throws Exception {
    	 service.selectRatingExists(dto);
    	 return apply(dto, model);
     }
     
     @RequestMapping(value = "updateAppraisalMaster.do")
     public View updateAppraisalMaster(UiMapDto dto, Model model) throws Exception {
    	 service.updateAppraisalMaster(dto);
    	 return apply(dto, model);
     }
     
     
}
