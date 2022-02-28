package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM02100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02100Controller
* @Company: Built1
* @Create Date: 2021.3.30
* @Author: 이용국
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.    이용국     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02100")
public class PCM02100Controller extends AbstractWebController {

    @Autowired
    private PCM02100Service service;

    /**
    * @fn :   
    * @brief : 인수등록 
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 이용국
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   이용국     최초  생성
     *
    */ 
    @RequestMapping(value = "getUomDefinitionList.do")
    public View getUomDefinitionList(UiMapDto dto, Model model) throws Exception {
        service.getUomDefinitionList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "getLotProductTypePathType.do")
    public View getLotProductTypePathType(UiMapDto dto, Model model) throws Exception {
        service.getLotProductTypePathType(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "getAreaList.do")
    public View getAreaList(UiMapDto dto, Model model) throws Exception {
        service.getAreaList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "getTransitAreaList.do")
    public View getTransitAreaList(UiMapDto dto, Model model) throws Exception {
        service.getTransitAreaList(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectAreaResourceByLot.do")
    public View selectAreaResourceByLot(UiMapDto dto, Model model) throws Exception {
        service.selectAreaResourceByLot(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectEquipmentByArea.do")
    public View selectEquipmentByArea(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentByArea(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectLotHistoryMessage.do")
    public View selectLotHistoryMessage(UiMapDto dto, Model model) throws Exception {
        service.selectLotHistoryMessage(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "getDefectCodeByProcess.do")
    public View getDefectCodeByProcess(UiMapDto dto, Model model) throws Exception {
        service.getDefectCodeByProcess(dto);
        return apply(dto, model);
    }
        
    
    /**
    * @fn :   
    * @brief : NCR 리스트 
    * @remark
    * @Create Date: 2021. 3. 16
    * @Author: 이용국
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.   이용국     최초  생성
     *
    */ 
    @RequestMapping(value = "SelectNcrStandardOfSelfInspection.do")
    public View SelectNcrStandardOfSelfInspection(UiMapDto dto, Model model) throws Exception {
        service.SelectNcrStandardOfSelfInspection(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief : 불량 팝업 리스트 
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.   이용국     최초  생성
      *
     */ 
     @RequestMapping(value = "SelectDefectCodeByProcess.do")
     public View SelectDefectCodeByProcess(UiMapDto dto, Model model) throws Exception {
         service.SelectDefectCodeByProcess(dto);
         return apply(dto, model);
     }
     
     
     /**
      * @fn :   
      * @brief : 
      * @remark
      * @Create Date: 2021. 3. 18
      * @Author: 이용국
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 18.   이용국     최초  생성
       *
      */                                  
      @RequestMapping(value = "selectProcessDefTypeByProcess.do")
      public View selectProcessDefTypeByProcess(UiMapDto dto, Model model) throws Exception {
          service.selectProcessDefTypeByProcess(dto);
          return apply(dto, model);
      }
     
      
      /**
       * @fn :   
       * @brief : 
       * @remark
       * @Create Date: 2021. 3. 18
       * @Author: 이용국
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 18.   이용국     최초  생성
        *
       */ 
       @RequestMapping(value = "getEquipmentState.do")
       public View getEquipmentState(UiMapDto dto, Model model) throws Exception {
           service.getEquipmentState(dto);
           return apply(dto, model);
       }
       
       
       
       /**
        * @fn :   
        * @brief : 
        * @remark
        * @Create Date: 2021. 3. 18
        * @Author: 이용국
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 3. 18.   이용국     최초  생성
         *
        */ 
        @RequestMapping(value = "selectLotMessage.do")
        public View selectLotMessage(UiMapDto dto, Model model) throws Exception {
            service.selectLotMessage(dto);
            return apply(dto, model);
        }
       
        
        
        /**
         * @fn :   
         * @brief : 
         * @remark
         * @Create Date: 2021. 3. 18
         * @Author: 이용국
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 3. 18.   이용국     최초  생성
          *
         */ 
         @RequestMapping(value = "getLotMessageList.do")
         public View getLotMessageList(UiMapDto dto, Model model) throws Exception {
             service.getLotMessageList(dto);
             return apply(dto, model);
         }
        
         
         /**
          * @fn :   
          * @brief : 
          * @remark
          * @Create Date: 2021. 3. 18
          * @Author: 이용국
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021. 3. 18.   이용국     최초  생성
           *
          */ 
          @RequestMapping(value = "getReasonConsumableList.do")
          public View getReasonConsumableList(UiMapDto dto, Model model) throws Exception {
              service.getReasonConsumableList(dto);
              return apply(dto, model);
          }
          
      /**
       * @fn :   
       * @brief : 
       * @remark
       * @Create Date: 2021. 3. 18
       * @Author: 이용국
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 18.   이용국     최초  생성
        *
       */ 
       @RequestMapping(value = "selectLotInfoByProcess.do")
       public View selectLotInfoByProcess(UiMapDto dto, Model model) throws Exception {
           service.selectLotInfoByProcess(dto);
           return apply(dto, model);
       }
       
     
       /**
        * @fn :   
        * @brief : 
        * @remark
        * @Create Date: 2021. 3. 18
        * @Author: 이용국
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 3. 18.   이용국     최초  생성
         *
        */ 
        @RequestMapping(value = "selectCodeList.do")
        public View selectCodeList(UiMapDto dto, Model model) throws Exception {
            service.selectCodeList(dto);
            return apply(dto, model);
        }
        
    
        /**
         * @fn :   
         * @brief : 
         * @remark
         * @Create Date: 2021. 3. 18
         * @Author: 이용국
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 3. 18.   이용국     최초  생성
          *
         */ 
         @RequestMapping(value = "selectCheckStaying.do")
         public View selectCheckStaying(UiMapDto dto, Model model) throws Exception {
             service.selectCheckStaying(dto);
             return apply(dto, model);
         }
         
         /**
          * @fn :   
          * @brief : 
          * @remark
          * @Create Date: 2021. 3. 18
          * @Author: 이용국
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021. 3. 18.   이용국     최초  생성
           *
          */ 
          @RequestMapping(value = "getReasonCodeByProcess.do")
          public View getReasonCodeByProcess(UiMapDto dto, Model model) throws Exception {
              service.getReasonCodeByProcess(dto);
              return apply(dto, model);
          }
          
          
          /**
           * @fn :   
           * @brief : 
           * @remark
           * @Create Date: 2021. 3. 18
           * @Author: 이용국
           * @File Version: v1.0
            *
            * << 개정이력(Modification Information) >>
            *
            *     수정일      수정자   수정내용
            *   ------------  ------  ----------
            *   2021. 3. 18.   이용국     최초  생성
            *
           */ 
           @RequestMapping(value = "selectPlantIsWipSurvey.do")
           public View getPlantIsWipSurvey(UiMapDto dto, Model model) throws Exception {
               service.selectPlantIsWipSurvey(dto);
               return apply(dto, model);
           }
           
           /**
            * @fn :   
            * @brief : 
            * @remark
            * @Create Date: 2021. 3. 18
            * @Author: 이용국
            * @File Version: v1.0
             *
             * << 개정이력(Modification Information) >>
             *
             *     수정일      수정자   수정내용
             *   ------------  ------  ----------
             *   2021. 3. 18.   이용국     최초  생성
             *
            */ 
            @RequestMapping(value = "selectCommentByProcess.do")
            public View selectCommentByProcess(UiMapDto dto, Model model) throws Exception {
                service.selectCommentByProcess(dto);
                return apply(dto, model);
            }
            
            /**
             * @fn :   
             * @brief : 
             * @remark
             * @Create Date: 2021. 3. 18
             * @Author: 이용국
             * @File Version: v1.0
              *
              * << 개정이력(Modification Information) >>
              *
              *     수정일      수정자   수정내용
              *   ------------  ------  ----------
              *   2021. 3. 18.   이용국     최초  생성
              *
             */ 
             @RequestMapping(value = "selectProcessSpecByProcess.do")
             public View selectProcessSpecByProcess(UiMapDto dto, Model model) throws Exception {
                 service.selectProcessSpecByProcess(dto);
                 return apply(dto, model);
             }

             /**
              * @fn :   
              * @brief : 
              * @remark
              * @Create Date: 2021. 3. 18
              * @Author: 이용국
              * @File Version: v1.0
               *
               * << 개정이력(Modification Information) >>
               *
               *     수정일      수정자   수정내용
               *   ------------  ------  ----------
               *   2021. 3. 18.   이용국     최초  생성
               *
              */ 
              @RequestMapping(value = "selectLotCancelWorkResultByRollCutting.do")
              public View selectLotCancelWorkResultByRollCutting(UiMapDto dto, Model model) throws Exception {
                  service.selectLotCancelWorkResultByRollCutting(dto);
                  return apply(dto, model);
              }

              /**
               * @fn :   
               * @brief : 
               * @remark
               * @Create Date: 2021. 3. 18
               * @Author: 이용국
               * @File Version: v1.0
                *
                * << 개정이력(Modification Information) >>
                *
                *     수정일      수정자   수정내용
                *   ------------  ------  ----------
                *   2021. 3. 18.   이용국     최초  생성
                *
               */ 
               @RequestMapping(value = "selectDefectMapDataForSend.do")
               public View selectDefectMapDataForSend(UiMapDto dto, Model model) throws Exception {
                   service.selectDefectMapDataForSend(dto);
                   return apply(dto, model);
               }

               /**
                * @fn :   
                * @brief : 
                * @remark
                * @Create Date: 2021. 3. 18
                * @Author: 이용국
                * @File Version: v1.0
                 *
                 * << 개정이력(Modification Information) >>
                 *
                 *     수정일      수정자   수정내용
                 *   ------------  ------  ----------
                 *   2021. 3. 18.   이용국     최초  생성
                 *
                */ 
                @RequestMapping(value = "selectPostProcessEquipmentWipByArea.do")
                public View selectPostProcessEquipmentWipByArea(UiMapDto dto, Model model) throws Exception {
                    service.selectPostProcessEquipmentWipByArea(dto);
                    return apply(dto, model);
                }
               
                /**
                 * @fn :   
                 * @brief : 
                 * @remark
                 * @Create Date: 2021. 3. 18
                 * @Author: 이용국
                 * @File Version: v1.0
                  *
                  * << 개정이력(Modification Information) >>
                  *
                  *     수정일      수정자   수정내용
                  *   ------------  ------  ----------
                  *   2021. 3. 18.   이용국     최초  생성
                  *
                 */ 
                 @RequestMapping(value = "getCodeList.do")
                 public View getCodeList(UiMapDto dto, Model model) throws Exception {
                     service.getCodeList(dto);
                     return apply(dto, model);
                 }

                 /**
                  * @fn :   
                  * @brief : 
                  * @remark
                  * @Create Date: 2021. 3. 18
                  * @Author: 이용국
                  * @File Version: v1.0
                   *
                   * << 개정이력(Modification Information) >>
                   *
                   *     수정일      수정자   수정내용
                   *   ------------  ------  ----------
                   *   2021. 3. 18.   이용국     최초  생성
                   *
                  */ 
                  @RequestMapping(value = "selectConsumableListByProcessWorkComplete.do")
                  public View selectConsumableListByProcessWorkComplete(UiMapDto dto, Model model) throws Exception {
                      service.selectConsumableListByProcessWorkComplete(dto);
                      return apply(dto, model);
                  }
                 
                 
             /**
              * @fn :   
              * @brief : 
              * @remark
              * @Create Date: 2021. 3. 18
              * @Author: 이용국
              * @File Version: v1.0
               *
               * << 개정이력(Modification Information) >>
               *
               *     수정일      수정자   수정내용
               *   ------------  ------  ----------
               *   2021. 3. 18.   이용국     최초  생성
               *
              */ 
             @RequestMapping(value = "abnormalOccurenceByDelayLot.do")
             public View abnormalOccurenceByDelayLot(UiMapDto dto, Model model) throws Exception {
            	 System.out.println("lucky abnormalOccurenceByDelayLot ************* !!!");
                 service.abnormalOccurenceByDelayLot(dto);
                 return apply(dto, model);
             }  
             
             
     /**
      * @fn :  saveLotIncommingInspection
      * @brief : 단가 테이블 저장
      * @remark
      * @Create Date: 2021. 3. 23
      * @Author: 이용국
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 23.   이용국     최초  생성
       *
      */ 
     @RequestMapping(value = "saveLotIncommingInspection.do")
     public View saveLotIncommingInspection(UiMapDto dto, Model model) throws Exception {
    	 System.out.println("lucky saveLotIncommingInspection ************* !!!");
         service.saveLotIncommingInspection(dto);
         return apply(dto, model);
     }  
     
}
