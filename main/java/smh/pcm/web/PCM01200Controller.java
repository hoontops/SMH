package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00800Service;
import smh.pcm.service.PCM01200Service;
import smh.pcm.service.PCM01300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01200Controller
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
@RequestMapping(value = "/pcm01200")
public class PCM01200Controller extends AbstractWebController {

    @Autowired
    private PCM01200Service service;

  
    
    /**
     * @fn :   
     * @brief : 미투입 List 탭 조회 
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
     @RequestMapping(value = "selectNotInputList.do")
     public View selectNotInputList(UiMapDto dto, Model model) throws Exception {
         service.selectNotInputList(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 미투입 자재 소요 탭 조회 
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
      @RequestMapping(value = "selectNotInputMaterialRequirementByMainBase.do")
      public View selectNotInputMaterialRequirementByMainBase(UiMapDto dto, Model model) throws Exception {
          service.selectNotInputMaterialRequirementByMainBase(dto);
          return apply(dto, model);
      }
      /**
       * @fn :   
       * @brief : 미투입 자재 소요 탭 디테일 조회 
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
       @RequestMapping(value = "selectNotInputMaterialRequirementByConsumable.do")
       public View selectNotInputMaterialRequirementByConsumable(UiMapDto dto, Model model) throws Exception {
           service.selectNotInputMaterialRequirementByConsumable(dto);
           return apply(dto, model);
       }
       /**
        * @fn :   
        * @brief : 미투입 자재 소요 탭 머지 전체조회 
        * @remark
        * @Create Date: 2021. 4. 16
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 4.  16.   박대호     최초  생성
         *
        */ 
        @RequestMapping(value = "selectNotInputMaterialRequirementByConsumableTotalList.do")
        public View selectNotInputMaterialRequirementByConsumableTotalList(UiMapDto dto, Model model) throws Exception {
            service.selectNotInputMaterialRequirementByConsumableTotalList(dto);
            return apply(dto, model);
        }
       
       
     /**
      * @fn :   
      * @brief : 미투입(수주별) List 탭 조회 
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
      @RequestMapping(value = "selectNotInputListBySalseOrder.do")
      public View selectNotInputListBySalseOrder(UiMapDto dto, Model model) throws Exception {
          service.selectNotInputListBySalseOrder(dto);
          return apply(dto, model);
      }
     
}
