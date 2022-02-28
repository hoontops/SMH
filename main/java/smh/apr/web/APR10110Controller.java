package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR10110Service;


/**
* @file: APR10110Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10110Controller
* @Company: Built1
* @Create Date: 2022.1.13
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr10110")
public class APR10110Controller extends AbstractWebController {

    @Autowired
    private APR10110Service service;

    /**
    * @fn : selectAppraisalUserInfo
    * @brief : 로그인 피평가자 개인정보
    * @remark
    * @Create Date: 2022. 1. 13
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 1. 13.   박대호     최초  생성
     *
    */
    @RequestMapping(value = "selectAppraisalUserInfo.do")
    public View selectAppraisalUserInfo(UiMapDto dto, Model model) throws Exception {
        service.selectAppraisalUserInfo(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectEvaluationList
     * @brief : 업적평가 피평가자
     * @remark
     * @Create Date: 2022. 1. 13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022. 1. 13.   박대호     최초  생성
      *
     */
     @RequestMapping(value = "selectEvaluationList.do")
     public View selectEvaluationList(UiMapDto dto, Model model) throws Exception {
         service.selectEvaluationList(dto);
         return apply(dto, model);
     }
     /**
      * @fn : selectEvaluationListDetail
      * @brief : 업적평가 목표등록 Detail 조회
      * @remark
      * @Create Date: 2022. 1. 14
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2022. 1. 14.   박대호     최초  생성
       *
      */
      @RequestMapping(value = "selectEvaluationListDetail.do")
      public View selectEvaluationListDetail(UiMapDto dto, Model model) throws Exception {
          service.selectEvaluationListDetail(dto);
          return apply(dto, model);
      }
      /**
       * @fn : selectKpiList
       * @brief : KPI 팝업조회
       * @remark
       * @Create Date: 2022. 1. 17
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022. 1. 17.   박대호     최초  생성
        *
       */
       @RequestMapping(value = "selectKpiList.do")
       public View selectKpiList(UiMapDto dto, Model model) throws Exception {
           service.selectKpiList(dto);
           return apply(dto, model);
       } 
       /**
        * @fn : saveEvaluationList
        * @brief : 업적평가 목표설정 수정 삭제
        * @remark
        * @Create Date: 2022. 1. 18
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2022. 1. 18.   박대호     최초  생성
         *
        */
        @RequestMapping(value = "saveEvaluationList.do")
        public View saveEvaluationList(UiMapDto dto, Model model) throws Exception {
            service.saveEvaluationList(dto);
            return apply(dto, model);
        } 
        /**
         * @fn : selectCheckAppraisalPeriod
         * @brief : 상태에 따른 평가기간 Check
         * @remark
         * @Create Date: 2022. 1. 20
         * @Author: 박대호
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2022. 1. 20.   박대호     최초  생성
          *
         */
         @RequestMapping(value = "selectCheckAppraisalPeriod.do")
         public View selectCheckAppraisalPeriod(UiMapDto dto, Model model) throws Exception {
             service.selectCheckAppraisalPeriod(dto);
             return apply(dto, model);
         } 
         /**
          * @fn : selectCheckAppraisalPeriod
          * @brief : 업적평가 목표설정 제출
          * @remark
          * @Create Date: 2022. 1. 20
          * @Author: 박대호
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2022. 1. 20.   박대호     최초  생성
           *
          */
          @RequestMapping(value = "saveSubmitMaster.do")
          public View saveSubmitMaster(UiMapDto dto, Model model) throws Exception {
              service.saveSubmitMaster(dto);
              return apply(dto, model);
          } 
          /**
           * @fn : selectCheckAppraisalPeriodList
           * @brief : 상태에 따른 평가기간 List Check
           * @remark
           * @Create Date: 2022. 2. 24
           * @Author: 박대호
           * @File Version: v1.0
            *
            * << 개정이력(Modification Information) >>
            *
            *     수정일      수정자   수정내용
            *   ------------  ------  ----------
            *   2022. 2. 24.   박대호     최초  생성
            *
           */
           @RequestMapping(value = "selectCheckAppraisalPeriodList.do")
           public View selectCheckAppraisalPeriodList(UiMapDto dto, Model model) throws Exception {
               service.selectCheckAppraisalPeriodList(dto);
               return apply(dto, model);
           } 
           /**
            * @fn : saveSubmitMasterList
            * @brief : 업적평가 목표설정 List제출
            * @remark
            * @Create Date: 2022. 2. 24
            * @Author: 박대호
            * @File Version: v1.0
             *
             * << 개정이력(Modification Information) >>
             *
             *     수정일      수정자   수정내용
             *   ------------  ------  ----------
             *   2022. 2. 24.   박대호     최초  생성
             *
            */
            @RequestMapping(value = "saveSubmitMasterList.do")
            public View saveSubmitMasterList(UiMapDto dto, Model model) throws Exception {
                service.saveSubmitMasterList(dto);
                return apply(dto, model);
            } 
           
}
