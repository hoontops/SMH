package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06200Service;


/**
* @file: PCM06200Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06200Controller
* @Company: Built1
* @Create Date: 2021.4.20
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 20.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06200")
public class PCM06200Controller extends AbstractWebController {

    @Autowired
    private PCM06200Service service;

  
    
    /**
     * @fn :   
     * @brief : 일별 탭 조회  
     * @remark
     * @Create Date: 2021. 4. 20
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  20.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectWorkIncommingResultByDate.do")
     public View selectWorkIncommingResultByDate(UiMapDto dto, Model model) throws Exception {
         service.selectWorkIncommingResultByDate(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 품목 탭 조회  
      * @remark
      * @Create Date: 2021. 4. 20
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4.  20.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectWorkIncommingResultByProduct.do")
      public View selectWorkIncommingResultByProduct(UiMapDto dto, Model model) throws Exception {
          service.selectWorkIncommingResultByProduct(dto);
          return apply(dto, model);
      }
      /**
       * @fn :   
       * @brief : LOT 탭 조회  
       * @remark
       * @Create Date: 2021. 4. 20
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 4.  20.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectWorkIncommingResultByLot.do")
       public View selectWorkIncommingResultByLot(UiMapDto dto, Model model) throws Exception {
           service.selectWorkIncommingResultByLot(dto);
           return apply(dto, model);
       }

}
