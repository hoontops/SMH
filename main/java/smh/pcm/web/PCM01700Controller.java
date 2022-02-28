package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01700Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01700Controller
* @Company: Built1
* @Create Date: 2021.3.30
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
@RequestMapping(value = "/pcm01700")
public class PCM01700Controller extends AbstractWebController {

    @Autowired
    private PCM01700Service service;

    /**
     * @fn :   
     * @brief : 인수등록 조회
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5. 5.   진성하     최초  생성
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
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.   김성현     최초  생성
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
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.   김성현     최초  생성
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
      * @Author: 김성현
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 18.   김성현     최초  생성
       *
      */ 
      @RequestMapping(value = "getProcessDefTypeByProcess.do")
      public View getProcessDefTypeByProcess(UiMapDto dto, Model model) throws Exception {
          service.getProcessDefTypeByProcess(dto);
          return apply(dto, model);
      }
     
      
      /**
       * @fn :   
       * @brief : 
       * @remark
       * @Create Date: 2021. 3. 18
       * @Author: 김성현
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 18.   김성현     최초  생성
        *
       */ 
       @RequestMapping(value = "getState.do")
       public View getState(UiMapDto dto, Model model) throws Exception {
           service.getState(dto);
           return apply(dto, model);
       }
       
       
       
       /**
        * @fn :   
        * @brief : 
        * @remark
        * @Create Date: 2021. 3. 18
        * @Author: 김성현
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 3. 18.   김성현     최초  생성
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
         * @Author: 김성현
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 3. 18.   김성현     최초  생성
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
          * @Author: 김성현
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021. 3. 18.   김성현     최초  생성
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
       * @Author: 김성현
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 18.   김성현     최초  생성
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
        * @Author: 김성현
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 3. 18.   김성현     최초  생성
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
         * @Author: 김성현
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 3. 18.   김성현     최초  생성
          *
         */ 
         @RequestMapping(value = "getCheckStaying.do")
         public View getCheckStaying(UiMapDto dto, Model model) throws Exception {
             service.getCheckStaying(dto);
             return apply(dto, model);
         }
         
         /**
          * @fn :   
          * @brief : 
          * @remark
          * @Create Date: 2021. 3. 18
          * @Author: 김성현
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021. 3. 18.   김성현     최초  생성
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
           * @Author: 김성현
           * @File Version: v1.0
            *
            * << 개정이력(Modification Information) >>
            *
            *     수정일      수정자   수정내용
            *   ------------  ------  ----------
            *   2021. 3. 18.   김성현     최초  생성
            *
           */ 
           @RequestMapping(value = "getPlantIsWipSurvey.do")
           public View getPlantIsWipSurvey(UiMapDto dto, Model model) throws Exception {
               service.getPlantIsWipSurvey(dto);
               return apply(dto, model);
           }
           
           /**
            * @fn :   
            * @brief : 
            * @remark
            * @Create Date: 2021. 3. 18
            * @Author: 김성현
            * @File Version: v1.0
             *
             * << 개정이력(Modification Information) >>
             *
             *     수정일      수정자   수정내용
             *   ------------  ------  ----------
             *   2021. 3. 18.   김성현     최초  생성
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
             * @Author: 김성현
             * @File Version: v1.0
              *
              * << 개정이력(Modification Information) >>
              *
              *     수정일      수정자   수정내용
              *   ------------  ------  ----------
              *   2021. 3. 18.   김성현     최초  생성
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
              * @Author: 김성현
              * @File Version: v1.0
               *
               * << 개정이력(Modification Information) >>
               *
               *     수정일      수정자   수정내용
               *   ------------  ------  ----------
               *   2021. 3. 18.   김성현     최초  생성
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
      * @Author: 김성현
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 23.   김성현     최초  생성
       *
      */ 
     @RequestMapping(value = "saveLotIncommingInspection.do")
     public View saveLotIncommingInspection(UiMapDto dto, Model model) throws Exception {
    	 System.out.println("lucky saveLotIncommingInspection ************* !!!");
         service.saveLotIncommingInspection(dto);
         return apply(dto, model);
     }  
     
	   /**
	    * @fn : savePrintLotCard
	    * @brief : Lot Card 출력 저장
	    * @Method Name : savePrintLotCard
	    * @remark
	    * @Create Date: 2021. 04. 02
	    * @Author: 
	    * @File Version: v1.0 
	    *
	    * << 개정이력(Modification Information) >>
	    *   
	    *     수정일                수정자      수정내용
	    *   ------------  ------  ----------
	    *   2021. 5. 04.   김성현     최초  생성
	    *
	   */
	   @RequestMapping(value = "savePrintLotCard.do")
	   public View savePrintLotCard(UiMapDto dto, Model model) throws Exception {
	      service.savePrintLotCard(dto);
	      return apply(dto, model);
	   }      
	   
	   /**
	* @fn 			: saveLotMessageRead
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveLotMessageRead
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 18.       sungmin.choe      최초  생성
	 *
	*/
	@RequestMapping(value = "saveLotMessageRead.do")
	   public View saveLotMessageRead(UiMapDto dto, Model model) throws Exception {
	      service.saveLotMessageRead(dto);
	      return apply(dto, model);
	   }      
	   
}
