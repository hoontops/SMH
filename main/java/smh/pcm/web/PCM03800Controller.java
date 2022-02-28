package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03800Service;
import smh.pcm.service.PCM05000Service;
import smh.pcm.service.PCM06100Service;


/**
* @file: PCM03800Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03800Controller
* @Company: Built1
* @Create Date: 2021.4.12
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm03800")
public class PCM03800Controller extends AbstractWebController {

    @Autowired
    private PCM03800Service service;

  
    
    /**
     * @fn :   
     * @brief : LOT Locking 해제 조회
     * @remark
     * @Create Date: 2021. 4. 12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  12.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectLotLockingList.do")
     public View selectLotLockingList(UiMapDto dto, Model model) throws Exception {
         service.selectLotLockingList(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn :   
      * @brief : LOT Locking 해제 
      * @remark
      * @Create Date: 2021. 4. 12
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4. 12.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "setReleaseLocking.do")
      public View setReleaseLocking(UiMapDto dto, Model model) throws Exception {
          service.setReleaseLocking(dto);
          return apply(dto, model);
      }
        
}
