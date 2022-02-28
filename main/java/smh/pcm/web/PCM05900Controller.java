package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05900Service;


/**
* @file: PCM05900Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05900Controller
* @Company: Built1
* @Create Date: 2021.5.17
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 17.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05900")
public class PCM05900Controller extends AbstractWebController {

    @Autowired
    private PCM05900Service service;

  
    
    /**
     * @fn :   
     * @brief : 재공현황 조회  
     * @remark
     * @Create Date: 2021. 5. 17
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  17.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectprogressperproduct.do")
     public View selectprogressperproduct(UiMapDto dto, Model model) throws Exception {
         service.selectprogressperproduct(dto);
         return apply(dto, model);
	 }
     /**
      * @fn :   
      * @brief : 재공현황 하단그리드 조회  
      * @remark
      * @Create Date: 2021. 5. 18
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 5.  18.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectProgressPerProductWipList.do")
      public View selectProgressPerProductWipList(UiMapDto dto, Model model) throws Exception {
          service.selectProgressPerProductWipList(dto);
          return apply(dto, model);
 	 }
      /**
       * @fn :   
       * @brief : 실적현황 조회  
       * @remark
       * @Create Date: 2021. 5. 18
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 5.  18.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectProgressPerProductResultList.do")
       public View selectProgressPerProductResultList(UiMapDto dto, Model model) throws Exception {
           service.selectProgressPerProductResultList(dto);
           return apply(dto, model);
  	 }
}
