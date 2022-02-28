package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05600Service;


/**
* @file: PCM05600Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05600Controller
* @Company: Built1
* @Create Date: 2021.4.13
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 13.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05600")
public class PCM05600Controller extends AbstractWebController {

    @Autowired
    private PCM05600Service service;

  
    
    /**
     * @fn :   
     * @brief : 중분류 조회  
     * @remark
     * @Create Date: 2021. 4. 13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  13.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectReasonCodeClassList.do")
     public View selectReasonCodeClassList(UiMapDto dto, Model model) throws Exception {
         service.selectReasonCodeClassList(dto);
         return apply(dto, model);
	 }
     /**
      * @fn :   
      * @brief : 사유 조회  
      * @remark
      * @Create Date: 2021. 4. 13
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4.  13.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectTypeList.do")
      public View selectTypeList(UiMapDto dto, Model model) throws Exception {
          service.selectTypeList(dto);
          return apply(dto, model);
 	 }
      /**
       * @fn :   
       * @brief : Locking 현황 조회
       * @remark
       * @Create Date: 2021. 4. 13
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 4.  13.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectLockingStatus.do")
       public View selectLockingStatus(UiMapDto dto, Model model) throws Exception {
           service.selectLockingStatus(dto);
           return apply(dto, model);
  	 }
      
}
