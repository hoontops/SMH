package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05700Service;


/**
* @file: PCM05700Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05700Controller
* @Company: Built1
* @Create Date: 2021.5.12
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 12.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05700")
public class PCM05700Controller extends AbstractWebController {

    @Autowired
    private PCM05700Service service;

  
    
    /**
     * @fn :   
     * @brief : 체공Lot 탭 조회  
     * @remark
     * @Create Date: 2021. 5. 12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  12.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectDelayLotList.do")
     public View selectDelayLotList(UiMapDto dto, Model model) throws Exception {
         service.selectDelayLotList(dto);
         return apply(dto, model);
	 }
     /**
      * @fn :   
      * @brief : 체공이력 탭 조회  
      * @remark
      * @Create Date: 2021. 5. 12
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 5.  12.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectDelayList.do")
      public View selectDelayList(UiMapDto dto, Model model) throws Exception {
          service.selectDelayList(dto);
          return apply(dto, model);
 	 }
      /**
       * @fn :   
       * @brief : 체공사유 조회  
       * @remark
       * @Create Date: 2021. 5. 13
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 5.  13.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectReasonCodeByProcess.do")
       public View selectReasonCodeByProcess(UiMapDto dto, Model model) throws Exception {
           service.selectReasonCodeByProcess(dto);
           return apply(dto, model);
  	 }
       /**
        * @fn :   
        * @brief : 체공사유 저장  
        * @remark
        * @Create Date: 2021. 5. 13
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 5.  13.   박대호     최초  생성
         *
        */ 
        @RequestMapping(value = "saveAbnormalOccurenceByDelayLot.do")
        public View saveAbnormalOccurenceByDelayLot(UiMapDto dto, Model model) throws Exception {
            service.saveAbnormalOccurenceByDelayLot(dto);
            return apply(dto, model);
   	 }
}
