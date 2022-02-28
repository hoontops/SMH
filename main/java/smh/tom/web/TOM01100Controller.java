package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM01100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: TOM01100Controller.java
 * @Package		: smh.tom.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOM01100Controller
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Controller
@RequestMapping(value = "/tom01100")
public class TOM01100Controller extends AbstractWebController {

    @Autowired
    private TOM01100Service service;

    /**
     * @fn : selectTomToolStatusListForReportByEap
     * @brief : 치공구 현황 조회
     * @remark
     * @Create Date: 2021. 2. 10
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 2. 10.  박현우      최초  생성
     *
     */
    @RequestMapping(value = "selectTomToolStatusListForReportByEap.do")
    public View selectTomToolStatusListForReportByEap(UiMapDto dto, Model model) throws Exception {
    	service.selectTomToolStatusListForReportByEap(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectTomToolHistoryListForReportByEqp
     * @brief : 이력 조회
     * @remark
     * @Create Date: 2021. 2. 10
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 2. 10.  박현우      최초  생성
     *
     */
     @RequestMapping(value = "selectTomToolHistoryListForReportByEqp.do")
     public View selectTomToolHistoryListForReportByEqp(UiMapDto dto, Model model) throws Exception {
         service.selectTomToolHistoryListForReportByEqp(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn : selectTomToolUseStatusListForReportByEqp
      * @brief : 사용 내역 조회
      * @remark
      * @Create Date: 2021. 2. 10
      * @Author: 박현우
      * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일               수정자         수정내용
      *   ------------  ------  ----------
      *   2021. 2. 10.  박현우      최초  생성
      *
      */
      @RequestMapping(value = "selectTomToolUseStatusListForReportByEqp.do")
      public View selectTomToolUseStatusListForReportByEqp(UiMapDto dto, Model model) throws Exception {
    	  service.selectTomToolUseStatusListForReportByEqp(dto);
          return apply(dto, model);
      }
}
