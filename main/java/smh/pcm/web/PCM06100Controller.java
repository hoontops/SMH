package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06100Service;


/**
* @file: PCM06100Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06100Controller
* @Company: Built1
* @Create Date: 2021.3.30
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06100")
public class PCM06100Controller extends AbstractWebController {

    @Autowired
    private PCM06100Service service;

  
    
    /**
     * @fn :   
     * @brief : 대공정, 중공정팝업 조회  
     * @remark
     * @Create Date: 2021. 3. 30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3.  30.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "getProcessSegmentClass.do")
     public View getProcessSegmentClass(UiMapDto dto, Model model) throws Exception {
         service.getProcessSegmentClass(dto);
         return apply(dto, model);
     }
     
      /**
       * @fn :   
       * @brief : 작업장별 실적현황 조회(작업장)
       * @remark
       * @Create Date: 2021. 6. 10
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 6.  10.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectWorkResultByareaList.do")
       public View selectWorkResultByareaList(UiMapDto dto, Model model) throws Exception {
           service.selectWorkResultByareaList(dto);
           return apply(dto, model);
       }
       /**
        * @fn :   
        * @brief : 작업장별 실적현황 조회(품목)
        * @remark
        * @Create Date: 2021. 6. 10
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 6.  10.   박대호     최초  생성
         *
        */ 
        @RequestMapping(value = "selectWorkResultByproductList.do")
        public View selectWorkResultByproductList(UiMapDto dto, Model model) throws Exception {
            service.selectWorkResultByproductList(dto);
            return apply(dto, model);
        }
        /**
         * @fn :   
         * @brief : 작업장별 실적현황 조회 (LOT)
         * @remark
         * @Create Date: 2021. 6. 10
         * @Author: 박대호
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 6.  10.   박대호     최초  생성
          *
         */ 
         @RequestMapping(value = "selectWorkResultBylotList.do")
         public View selectWorkResultBylotList(UiMapDto dto, Model model) throws Exception {
             service.selectWorkResultBylotList(dto);
             return apply(dto, model);
         }
}
