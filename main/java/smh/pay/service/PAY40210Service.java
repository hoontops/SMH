package smh.pay.service;

import java.util.Map;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file        : PAY40210Service.java
* @Package     : smh.pay.service  
* @Project name: SM상선 myHR Application 고도화
* @Type name   : PAY40210Service    
* @Company     : Built1
* @Create Date : 2022. 2. 14. 오후 16:39:17 
* @Author      : yheekim
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자       수정내용
*   ------------  ---------  ----------
*   2022. 2. 14.        박대호    최초  생성
*
*/
public interface PAY40210Service {
    
    /**
    * @fn          : selectAttendanceApproveList
    * @brief       : 근태 승인내역 조회
    * @Method Name : selectAttendanceApproveList
    * @remark      :
    * @Create Date : 2022. 2. 14. 오후 16:39:17 
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
    public void selectAttendanceApproveList(UiMapDto dto) throws Exception;
    
    /**
     * @fn          : saveAttendanceApprove
     * @brief       : 근태상세 승인
     * @Method Name : saveAttendanceApprove
     * @remark      :
     * @Create Date : 2022. 2. 16. 오후 15:39:17 
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
     public void saveAttendanceApprove(UiMapDto dto) throws Exception;
     /**
      * @fn          : selectEmployeeList
      * @brief       : 근태 대리신청 성명조회
      * @Method Name : selectEmployeeList
      * @remark      :
      * @Create Date : 2022. 2. 16. 오후 15:39:17 
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
      public void selectEmployeeList(UiMapDto dto) throws Exception;
      /**
       * @fn          : saveAttendanceApproveReturn
       * @brief       : 근태상세 반려
       * @Method Name : saveAttendanceApproveReturn
       * @remark      :
       * @Create Date : 2022. 2. 17. 오후 15:39:17 
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
       public void saveAttendanceApproveReturn(UiMapDto dto) throws Exception;
       /**
        * @fn          : saveAttendanceApproveList
        * @brief       : 근태목록 승인
        * @Method Name : saveAttendanceApproveList
        * @remark      :
        * @Create Date : 2022. 2. 18. 오전 09:39:17 
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
        public void saveAttendanceApproveList(UiMapDto dto) throws Exception;
        /**
         * @fn          : saveAttendanceApproveReturnList
         * @brief       : 근태목록 반려
         * @Method Name : saveAttendanceApproveReturnList
         * @remark      :
         * @Create Date : 2022. 2. 18. 오후 10:39:17 
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
         public void saveAttendanceApproveReturnList(UiMapDto dto) throws Exception;
         /**
          * @fn          : saveEmployee
          * @brief       : 근태 대리신청 저장
          * @Method Name : saveEmployee
          * @remark      :
          * @Create Date : 2022. 2. 21. 오후 17:39:17 
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
          public void saveEmployee(UiMapDto dto) throws Exception;
         
}
