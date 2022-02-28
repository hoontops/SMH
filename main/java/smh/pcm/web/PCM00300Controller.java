package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM00300Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00300Controller
* @Company: Built1
* @Create Date: 2021.2.22
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 22.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm00300")
public class PCM00300Controller extends AbstractWebController {

    @Autowired
    private PCM00300Service service;

    /**
    * @fn :  Production Order List
    * @brief : 제픔생산 계획 정보 조회
    * @remark
    * @Create Date: 2021. 2. 22
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 22.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectProductionOrderList.do")
    public View selectProductionOrderList(UiMapDto dto, Model model) throws Exception {
        service.selectProductionOrderList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  selectLotListByProductionOrder
    * @brief : LOT정보 조회
    * @remark
    * @Create Date: 2021. 2. 22
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 22.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotListByProductionOrder.do")
    public View selectLotListByProductionOrder(UiMapDto dto, Model model) throws Exception {
        service.selectLotListByProductionOrder(dto);
        return apply(dto, model);
    } 
    
    /**
     * @fn :  selectProductDefinitionListByProductionOrder
     * @brief : BOM 정보
     * @remark
     * @Create Date: 2021. 2. 22
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 2. 22.   방성혁     최초  생성
      *
     */ 
     @RequestMapping(value = "selectProductDefinitionListByProductionOrder.do")
     public View selectProductDefinitionListByProductionOrder(UiMapDto dto, Model model) throws Exception {
         service.selectProductDefinitionListByProductionOrder(dto);
         return apply(dto, model);
     }   
     
     /**
      * @fn :  selectLineNo
      * @brief : LINE 정보
      * @remark
      * @Create Date: 2021. 2. 22
      * @Author: 방성혁
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 2. 22.   방성혁     최초  생성
       *
      */ 
      @RequestMapping(value = "selectLineNo.do")
      public View selectLineNo(UiMapDto dto, Model model) throws Exception {
          service.selectLineNo(dto);
          return apply(dto, model);
      }   
      
      /**
       * @fn :  updateProductionOrder_IsSplit
       * @brief : 완료처리 완료해제
       * @remark
       * @Create Date: 2021. 2. 22
       * @Author: 방성혁
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 2. 22.   방성혁     최초  생성
        *
       */ 
       @RequestMapping(value = "updateProductionOrder_IsSplit.do")
       public View updateProductionOrder(UiMapDto dto, Model model) throws Exception {
           service.updateProductionOrder_IsSplit(dto);
           return apply(dto, model);
       }        
       /**
        * @fn :  GetLotIdMaxSequence
        * @brief : 
        * @remark
        * @Create Date: 2021. 2. 22
        * @Author: 방성혁
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 2. 22.   방성혁     최초  생성
         *
        */ 
        @RequestMapping(value = "getLotIdMaxSequence.do")
        public View getLotIdMaxSequence(UiMapDto dto, Model model) throws Exception {
            service.getLotIdMaxSequence(dto);
            return apply(dto, model);
        }  
        
        /**
         * @fn :  SaveCreateLot
         * @brief :  LOT 생성
         * @remark
         * @Create Date: 2021. 03. 02
         * @Author: 방성혁
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 03. 02.   방성혁     최초  생성
          *
         */ 
         @RequestMapping(value = "saveCreateLot.do")
         public View saveCreateLot(UiMapDto dto, Model model) throws Exception {
             service.saveCreateLot(dto);
             return apply(dto, model);
         }  
         /**
          * @fn :  cancelCreateLot
          * @brief :  LOT 취소
          * @remark
          * @Create Date: 2021. 03. 02
          * @Author: 방성혁
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021. 03. 02.   방성혁     최초  생성
           *
          */ 
          @RequestMapping(value = "cancelCreateLot.do")
          public View cancelCreateLot(UiMapDto dto, Model model) throws Exception {
              service.cancelCreateLot(dto);
              return apply(dto, model);
          } 
          
          /**
           * @fn :  getProductionOrderIdList
           * @brief : S/O 조회
           * @remark
           * @Create Date: 2021. 2. 22
           * @Author: 방성혁
           * @File Version: v1.0
            *
            * << 개정이력(Modification Information) >>
            *
            *     수정일      수정자   수정내용
            *   ------------  ------  ----------
            *   2021. 2. 22.   방성혁     최초  생성
            *
           */ 
           @RequestMapping(value = "getProductionOrderIdList.do")
           public View getProductionOrderIdList(UiMapDto dto, Model model) throws Exception {
               service.getProductionOrderIdList(dto);
               return apply(dto, model);
           }            
}
