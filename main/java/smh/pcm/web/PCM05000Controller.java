package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05000Service;
import smh.pcm.service.PCM06100Service;


/**
* @file: PCM05000Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05000Controller
* @Company: Built1
* @Create Date: 2021.4.1
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 1.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05000")
public class PCM05000Controller extends AbstractWebController {

    @Autowired
    private PCM05000Service service;

  
    
    /**
     * @fn :   
     * @brief : 품목팝업 다건조회  
     * @remark
     * @Create Date: 2021. 4. 1
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  1.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectPopupList.do")
     public View selectPopupList(UiMapDto dto, Model model) throws Exception {
         service.selectPopupList(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn :   
      * @brief : 재공현황 
      * @remark
      * @Create Date: 2021. 4. 2
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4.  2.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectWipListByProduct.do")
      public View selectWipListByProduct(UiMapDto dto, Model model) throws Exception {
          service.selectWipListByProduct(dto);
          return apply(dto, model);
      }
        
}
