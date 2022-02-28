package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00800Service;
import smh.pcm.service.PCM01300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01300Controller
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm01300")
public class PCM01300Controller extends AbstractWebController {

    @Autowired
    private PCM01300Service service;

  
    
    /**
     * @fn :   
     * @brief : 투입일 탭 투입율현황 조회 
     * @remark
     * @Create Date: 2021. 3. 24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3.  24.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectInputLotRateByInputDate.do")
     public View selectInputLotRateByInputDate(UiMapDto dto, Model model) throws Exception {
         service.selectInputLotRateByInputDate(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 투입일 탭 SUMMARY 조회 
      * @remark
      * @Create Date: 2021. 3. 25
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3.  25.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectInputLotRateByInputDateSummaryByLotInputType.do")
      public View selectInputLotRateByInputDateSummaryByLotInputType(UiMapDto dto, Model model) throws Exception {
          service.selectInputLotRateByInputDateSummaryByLotInputType(dto);
          return apply(dto, model);
      }
      /**
       * @fn :   
       * @brief : 투입일탭 일자별상세내역 조회 
       * @remark
       * @Create Date: 2021. 3. 25
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3.  25.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectInputLotRateByInputDateSummaryByProduct.do")
       public View selectInputLotRateByInputDateSummaryByProduct(UiMapDto dto, Model model) throws Exception {
           service.selectInputLotRateByInputDateSummaryByProduct(dto);
           return apply(dto, model);
       }
       /**
        * @fn :   
        * @brief : 모델별텝 조회 
        * @remark
        * @Create Date: 2021. 3. 26
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 3.  26.   박대호     최초  생성
         *
        */ 
        @RequestMapping(value = "selectInputLotRateByProduct.do")
        public View selectInputLotRateByProduct(UiMapDto dto, Model model) throws Exception {
            service.selectInputLotRateByProduct(dto);
            return apply(dto, model);
        }
        /**
         * @fn :   
         * @brief : 고객별텝 조회 
         * @remark
         * @Create Date: 2021. 3. 26
         * @Author: 박대호
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 3.  26.   박대호     최초  생성
          *
         */ 
         @RequestMapping(value = "selectInputLotRateByCustomer.do")
         public View selectInputLotRateByCustomer(UiMapDto dto, Model model) throws Exception {
             service.selectInputLotRateByCustomer(dto);
             return apply(dto, model);
         }
        
}
