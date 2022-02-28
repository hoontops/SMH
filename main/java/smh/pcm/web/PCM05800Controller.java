package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05800Service;


/**
* @file: PCM05800Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05800Controller
* @Company: Built1
* @Create Date: 2021.5.31
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 31.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05800")
public class PCM05800Controller extends AbstractWebController {

    @Autowired
    private PCM05800Service service;

  
    
    /**
     * @fn :   
     * @brief : 재공현황 조회
     * @remark
     * @Create Date: 2021. 5. 31
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  31.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectWipListOfPhysicalCount.do")
     public View selectWipListOfPhysicalCount(UiMapDto dto, Model model) throws Exception {
         service.selectWipListOfPhysicalCount(dto);
         return apply(dto, model);
	 }
     /**
      * @fn :   
      * @brief : 해당 site를 locking 또는 unlocking
      * @remark
      * @Create Date: 2021. 5. 31
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 5.  31.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "saveWipSurveyLocking.do")
      public View saveWipSurveyLocking(UiMapDto dto, Model model) throws Exception {
          service.saveWipSurveyLocking(dto);
          return apply(dto, model);
 	 }
     
}
