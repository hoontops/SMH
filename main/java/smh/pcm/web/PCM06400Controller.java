package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06400Service;


/**
* @file: PCM06400Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06400Controller
* @Company: Built1
* @Create Date: 2021.6.07
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 6. 07.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06400")
public class PCM06400Controller extends AbstractWebController {

    @Autowired
    private PCM06400Service service;

  
    
    /**
     * @fn :   
     * @brief : 승인자 팝업
     * @remark
     * @Create Date: 2021. 6. 07
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 6.  07.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectUserList.do")
     public View selectUserList(UiMapDto dto, Model model) throws Exception {
         service.selectUserList(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 재작업이력 조회
      * @remark
      * @Create Date: 2021. 6. 08
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 6.  08.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectReworkHistory.do")
      public View selectReworkHistory(UiMapDto dto, Model model) throws Exception {
          service.selectReworkHistory(dto);
          return apply(dto, model);
      }
      /**
       * @fn :   
       * @brief : 재작업 이력 팝업
       * @remark
       * @Create Date: 2021. 6. 08
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 6.  08.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectCommentByProcess.do")
       public View selectCommentByProcess(UiMapDto dto, Model model) throws Exception {
           service.selectCommentByProcess(dto);
           return apply(dto, model);
       }
       /**
        * @fn :   
        * @brief : 재작업 승인
        * @remark
        * @Create Date: 2021. 6. 08
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 6.  08.   박대호     최초  생성
         *
        */ 
        @RequestMapping(value = "saveReworkHistory.do")
        public View saveReworkHistory(UiMapDto dto, Model model) throws Exception {
            service.saveReworkHistory(dto);
            return apply(dto, model);
        }
}
