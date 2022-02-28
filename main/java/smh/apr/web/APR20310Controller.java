package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR20310Service;


/**
* @file: APR20310Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20310Controller
* @Company: Built1
* @Create Date: 2022.2.10
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 10.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr20310")
public class APR20310Controller extends AbstractWebController {

    @Autowired
    private APR20310Service service;

    /**
    * @fn : selectabilityUserList
    * @brief : 역량평가 대상자 조회
    * @remark
    * @Create Date: 2022. 2. 10
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 2. 10.   박대호     최초  생성
     *
    */
    @RequestMapping(value = "selectAbilityUserList.do")
    public View selectAbilityUserList(UiMapDto dto, Model model) throws Exception {
        service.selectAbilityUserList(dto);
        return apply(dto, model);
    }
    /**
     * @fn : selectAbilityTableList
     * @brief : 평가표 조회
     * @remark
     * @Create Date: 2022. 2. 10
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022. 2. 10.   박대호     최초  생성
      *
     */
     @RequestMapping(value = "selectAbilityTableList.do")
     public View selectAbilityTableList(UiMapDto dto, Model model) throws Exception {
         service.selectAbilityTableList(dto);
         return apply(dto, model);
     }
     /**
      * @fn : selectAbilityTableList
      * @brief : 평가표 조회
      * @remark
      * @Create Date: 2022. 2. 10
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2022. 2. 10.   박대호     최초  생성
       *
      */
      @RequestMapping(value = "selectRequirementList.do")
      public View selectRequirementList(UiMapDto dto, Model model) throws Exception {
          service.selectRequirementList(dto);
          return apply(dto, model);
      }
      /**
       * @fn : selectRatingList
       * @brief : Rating 조회
       * @remark
       * @Create Date: 2022. 2. 11
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022. 2. 11.   박대호     최초  생성
        *
       */
       @RequestMapping(value = "selectRatingList.do")
       public View selectRatingList(UiMapDto dto, Model model) throws Exception {
           service.selectRatingList(dto);
           return apply(dto, model);
       }
       /**
        * @fn : updateAbilityTable
        * @brief : 파트장 역량평가 저장
        * @remark
        * @Create Date: 2022. 2. 11
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2022. 2. 11.   박대호     최초  생성
         *
        */
        @RequestMapping(value = "updateAbilityTable.do")
        public View updateAbilityTable(UiMapDto dto, Model model) throws Exception {
            service.updateAbilityTable(dto);
            return apply(dto, model);
        }
        /**
         * @fn : selectRatingExists
         * @brief : 제출 시 Rating 입력여부 확인
         * @remark
         * @Create Date: 2022. 2. 14
         * @Author: 박대호
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2022. 2. 14.   박대호     최초  생성
          *
         */
         @RequestMapping(value = "selectRatingExists.do")
         public View selectRatingExists(UiMapDto dto, Model model) throws Exception {
             service.selectRatingExists(dto);
             return apply(dto, model);
         }
         /**
          * @fn : updateAppraisalMaster
          * @brief : 제출
          * @remark
          * @Create Date: 2022. 2. 14
          * @Author: 박대호
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2022. 2. 14.   박대호     최초  생성
           *
          */
          @RequestMapping(value = "updateAppraisalMaster.do")
          public View updateAppraisalMaster(UiMapDto dto, Model model) throws Exception {
              service.updateAppraisalMaster(dto);
              return apply(dto, model);
          }
         
}
