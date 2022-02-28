package smh.pay.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pay.service.PAY40210Service;


/**
* @file        : PAY40210Controller.java
* @Package     : smh.pay.web  
* @Project name: SM상선 myHR Application 고도화
* @Type name   : PAY40210Controller    
* @Company     : Built1
* @Create Date : 2022. 2. 14. 오후 16:44:36 
* @Author      : yheekim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ---------  ----------
 *   2022. 2. 14.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pay40210/")
public class PAY40210Controller extends AbstractWebController {

    @Autowired
    private PAY40210Service service;

    /**
    * @fn          : selectAttendanceApproveList
    * @brief       : 근태 승인내역 조회
    * @Method Name : selectAttendanceApproveList
    * @remark      :
    * @Create Date : 2022. 2. 14. 오후 16:46:40 
    * @Author      : 박대호
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 2. 14.    박대호     최초  생성
    *
    */
    @RequestMapping(value = "selectAttendanceApproveList.do")
    public View selectAttendanceApproveList(UiMapDto dto, Model model) throws Exception {
        service.selectAttendanceApproveList(dto);
        return apply(dto, model);
    }
    /**
     * @fn          : SaveAttendanceApprove
     * @brief       : 근태 상세 승인
     * @Method Name : SaveAttendanceApprove
     * @remark      :
     * @Create Date : 2022. 2. 16. 오후 15:46:40 
     * @Author      : 박대호
     * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일         수정자       수정내용
     *   ------------  ---------  ----------
     *   2022. 2. 16.    박대호     최초  생성
     *
     */
     @RequestMapping(value = "saveAttendanceApprove.do")
     public View saveAttendanceApprove(UiMapDto dto, Model model) throws Exception {
         service.saveAttendanceApprove(dto);
         return apply(dto, model);
     }
     /**
      * @fn          : selectEmployeeList
      * @brief       : 근태 대리신청 성명조회
      * @Method Name : selectEmployeeList
      * @remark      :
      * @Create Date : 2022. 2. 16. 오후 15:46:40 
      * @Author      : 박대호
      * @File Version: v1.0 
      *
      * << 개정이력(Modification Information) >>
      *   
      *     수정일         수정자       수정내용
      *   ------------  ---------  ----------
      *   2022. 2. 16.    박대호     최초  생성
      *
      */
      @RequestMapping(value = "selectEmployeeList.do")
      public View selectEmployeeList(UiMapDto dto, Model model) throws Exception {
          service.selectEmployeeList(dto);
          return apply(dto, model);
      }
      /**
       * @fn          : saveAttendanceApproveReturn
       * @brief       : 근태 상세 반려
       * @Method Name : saveAttendanceApproveReturn
       * @remark      :
       * @Create Date : 2022. 2. 17. 오후 15:46:40 
       * @Author      : 박대호
       * @File Version: v1.0 
       *
       * << 개정이력(Modification Information) >>
       *   
       *     수정일         수정자       수정내용
       *   ------------  ---------  ----------
       *   2022. 2. 17.    박대호     최초  생성
       *
       */
       @RequestMapping(value = "saveAttendanceApproveReturn.do")
       public View saveAttendanceApproveReturn(UiMapDto dto, Model model) throws Exception {
           service.saveAttendanceApproveReturn(dto);
           return apply(dto, model);
       }
       /**
        * @fn          : saveAttendanceApproveList
        * @brief       : 근태 목록 승인
        * @Method Name : saveAttendanceApproveList
        * @remark      :
        * @Create Date : 2022. 2. 18. 오후 09:46:40 
        * @Author      : 박대호
        * @File Version: v1.0 
        *
        * << 개정이력(Modification Information) >>
        *   
        *     수정일         수정자       수정내용
        *   ------------  ---------  ----------
        *   2022. 2. 18.    박대호     최초  생성
        *
        */
        @RequestMapping(value = "saveAttendanceApproveList.do")
        public View saveAttendanceApproveList(UiMapDto dto, Model model) throws Exception {
            service.saveAttendanceApproveList(dto);
            return apply(dto, model);
        }
        /**
         * @fn          : saveAttendanceApproveReturnList
         * @brief       : 근태 목록 반려
         * @Method Name : saveAttendanceApproveReturnList
         * @remark      :
         * @Create Date : 2022. 2. 18. 오후 10:46:40 
         * @Author      : 박대호
         * @File Version: v1.0 
         *
         * << 개정이력(Modification Information) >>
         *   
         *     수정일         수정자       수정내용
         *   ------------  ---------  ----------
         *   2022. 2. 18.    박대호     최초  생성
         *
         */
         @RequestMapping(value = "saveAttendanceApproveReturnList.do")
         public View saveAttendanceApproveReturnList(UiMapDto dto, Model model) throws Exception {
             service.saveAttendanceApproveReturnList(dto);
             return apply(dto, model);
         }
         /**
          * @fn          : saveEmployee
          * @brief       : 근태 대리신청 저장
          * @Method Name : saveEmployee
          * @remark      :
          * @Create Date : 2022. 2. 21. 오후 17:46:40 
          * @Author      : 박대호
          * @File Version: v1.0 
          *
          * << 개정이력(Modification Information) >>
          *   
          *     수정일         수정자       수정내용
          *   ------------  ---------  ----------
          *   2022. 2. 21.    박대호     최초  생성
          *
          */
          @RequestMapping(value = "saveEmployee.do")
          public View saveEmployee(UiMapDto dto, Model model) throws Exception {
              service.saveEmployee(dto);
              return apply(dto, model);
          }
         
}
