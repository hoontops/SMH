package com.nbdf.cmd.cm.cmlm.web;

import com.nbdf.cmd.cm.cmlm.service.CMLM01100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file: CMLM01100Controller.java
* @Package: com.nbdf.cmd.cm.cmlm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMLM01100Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 16. 오후 1:53:02
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 16.        진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmlm01100")
public class CMLM01100Controller extends AbstractXWebController {

    @Autowired
    private CMLM01100Service service;

    /**
     * @fn : insertJobMenuLogs
     * @brief :  업무 메뉴별 로그 등록
     * @Method Name : insertOrgs
     * @remark
     * @Create Date: 2015. 10. 02.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                수정자     수정내용
      *   ------------    ------    ----------
      *   2015. 10. 02.     진성하     최초  생성
      *
     */
     @RequestMapping(value = "insertJobMenuLogs.do")
     public View insertJobMenuLogs(UiMapDto dto, Model model) throws Exception {
         service.insertJobMenuLogs(dto);
         return apply(dto, model);
     }

     /**
      * @fn : selectJobMenuLogsCount
      * @brief : 메뉴 사용 로그 카운트
      * @Method Name : selectJobMenuLogsCount
      * @remark
      * @Create Date: 2015. 10. 06
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일            수정자    수정내용
       *   ------------  ------  ----------
       *   2015. 10. 06.   진성하     최초  생성
       *
      */
     @RequestMapping(value = "selectJobMenuLogsCount.do")
     public View selectJobMenuLogsCount(UiMapDto dto, Model model) throws Exception {
         service.selectJobMenuLogsCount(dto);
         return apply(dto, model);
     }

     /**
      * @fn : selectJobMenuLogsList
      * @brief : 메뉴 사용 로그 조회
      * @Method Name : selectJobMenuLogsList
      * @remark
      * @Create Date:  2015. 10.06
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일            수정자     수정내용
       *   ------------   ------   ----------
       *   2015. 10. 06.  진성하     최초  생성
       *
      */
      @RequestMapping(value = "selectJobMenuLogsList.do")
      public View selectJobMenuLogsList(UiMapDto dto, Model model) throws Exception {
          service.selectJobMenuLogsList(dto);
          return apply(dto, model);
      }

    /**
    * @fn : selectLogList
    * @brief : 로그 조회
    * @Method Name : selectLogList
    * @remark
    * @Create Date: 2015 2015. 3. 16. 오후 1:54:41
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 16.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectLogList.do")
    public View selectLogList(UiMapDto dto, Model model) throws Exception {
        service.selectLogList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectSmsLogList
    * @brief : SMS발송 결과 및 조회
    * @Method Name : selectSmsSumList
    * @Create Date: 2015. 6. 11. 오후 7:43:05
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectSmsLogList.do")
    public View selectSmsLogList(UiMapDto dto, Model model) throws Exception {
        service.selectSmsLogList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectSmsSumList
    * @brief : SMS발송 결과 통계
    * @Method Name : selectSmsSumList
    * @Create Date: 2015. 6. 11. 오후 7:43:05
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectSmsSumList.do")
    public View selectSmsSumList(UiMapDto dto, Model model) throws Exception {
        service.selectSmsSumList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectEmailLogList
    * @brief : E-MAIL 발송 로그 조회
    * @Method Name : selectEmailLogList
    * @Create Date: 2015. 7. 15. 오후 3:34:21
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectEmailLogList.do")
    public View selectEmailLogList(UiMapDto dto, Model model) throws Exception {
        service.selectEmailLogList(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "selectEmailSumList.do")
    public View selectEmailSumList(UiMapDto dto, Model model) throws Exception {
        service.selectEmailSumList(dto);
        return apply(dto, model);
    }
}