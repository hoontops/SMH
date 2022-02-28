package smh.dfm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.dfm.service.DFM00500Service;


/**
* @file: DFM00500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: DFM00500Controller
* @Company: Built1
* @Create Date: 2021.4.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.    김성현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/dfm00500")
public class DFM00500Controller extends AbstractWebController {

    @Autowired
    private DFM00500Service service;

    
    /**
    * @fn :   
    * @brief :  
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   김성현     최초  생성
     *
    */ 
    @RequestMapping(value = "getDefectRateByRepairNullList.do")
    public View getDefectRateByRepairNullList(UiMapDto dto, Model model) throws Exception {
        service.getDefectRateByRepairNullList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief :  
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   김성현     최초  생성
     *
    */ 
    @RequestMapping(value = "getDefectRateByRepairList.do")
    public View getDefectRateByRepairList(UiMapDto dto, Model model) throws Exception {
        service.getDefectRateByRepairList(dto);
        return apply(dto, model);
    }
   
//    /**
//     * @fn :   
//     * @brief :  
//     * @remark
//     * @Create Date: 2021. 3. 30
//     * @Author: 김성현
//     * @File Version: v1.0
//      *
//      * << 개정이력(Modification Information) >>
//      *
//      *     수정일      수정자   수정내용
//      *   ------------  ------  ----------
//      *   2021. 3. 30.   김성현     최초  생성
//      *
//     */ 
//     @RequestMapping(value = "getAOIDefectCodeList.do")
//     public View getAOIDefectCodeList(UiMapDto dto, Model model) throws Exception {
//         service.getAOIDefectCodeList(dto);
//         return apply(dto, model);
//     }
     
     /**
      * @fn :   
      * @brief :  
      * @remark
      * @Create Date: 2021. 3. 30
      * @Author: 김성현
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 30.   김성현     최초  생성
       *
      */ 
      @RequestMapping(value = "getProcessByProductdef.do")
      public View getProcessByProductdef(UiMapDto dto, Model model) throws Exception {
          service.getProcessByProductdef(dto);
          return apply(dto, model);
      }
      
      
      /**
       * @fn :   
       * @brief :  
       * @remark
       * @Create Date: 2021. 3. 30
       * @Author: 김성현
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 30.   김성현     최초  생성
        *
       */ 
       @RequestMapping(value = "getDefectRateByRepairNullDetailList.do")
       public View getDefectRateByRepairNullDetailList(UiMapDto dto, Model model) throws Exception {
           service.getDefectRateByRepairNullDetailList(dto);
           return apply(dto, model);
       }
       
       
       /**
        * @fn :   
        * @brief :  
        * @remark
        * @Create Date: 2021. 3. 30
        * @Author: 김성현
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 3. 30.   김성현     최초  생성
         *
        */ 
        @RequestMapping(value = "getDefectRateByRepairDetailList.do")
        public View getDefectRateByRepairDetailList(UiMapDto dto, Model model) throws Exception {
            service.getDefectRateByRepairDetailList(dto);
            return apply(dto, model);
        }
        
        /**
         * @fn :   
         * @brief :  
         * @remark
         * @Create Date: 2021. 3. 30
         * @Author: 김성현
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 3. 30.   김성현     최초  생성
          *
         */ 
         @RequestMapping(value = "getDefectRateByRepairNullSeriesDetailList.do")
         public View getDefectRateByRepairNullSeriesDetailList(UiMapDto dto, Model model) throws Exception {
             service.getDefectRateByRepairNullSeriesDetailList(dto);
             return apply(dto, model);
         }
         
         
         /**
          * @fn :   
          * @brief :  
          * @remark
          * @Create Date: 2021. 3. 30
          * @Author: 김성현
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021. 3. 30.   김성현     최초  생성
           *
          */ 
          @RequestMapping(value = "getDefectRateByRepairSeriesDetailList.do")
          public View getDefectRateByRepairSeriesDetailList(UiMapDto dto, Model model) throws Exception {
              service.getDefectRateByRepairSeriesDetailList(dto);
              return apply(dto, model);
          }
          
        
//      /**
//       * @fn :   
//       * @brief :  
//       * @remark
//       * @Create Date: 2021. 3. 30
//       * @Author: 김성현
//       * @File Version: v1.0
//        *
//        * << 개정이력(Modification Information) >>
//        *
//        *     수정일      수정자   수정내용
//        *   ------------  ------  ----------
//        *   2021. 3. 30.   김성현     최초  생성
//        *
//       */ 
//       @RequestMapping(value = "getJoinLotList.do")
//       public View getJoinLotList(UiMapDto dto, Model model) throws Exception {
//           service.getJoinLotList(dto);
//           return apply(dto, model);
//       }
//       
         
         
}
