package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR10210Service;


/**
* @file: APR10210Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10210Controller
* @Company: Built1
* @Create Date: 2022.1.26
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 26.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr10210")
public class APR10210Controller extends AbstractWebController {

    @Autowired
    private APR10210Service service;

     /**
      * @fn : selectSelfEvaluationListDetail
      * @brief : 업적평가 본인평가 Detail 조회
      * @remark
      * @Create Date: 2022. 1. 26
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2022. 1. 26.   박대호     최초  생성
       *
      */
      @RequestMapping(value = "selectSelfEvaluationListDetail.do")
      public View selectSelfEvaluationListDetail(UiMapDto dto, Model model) throws Exception {
          service.selectSelfEvaluationListDetail(dto);
          return apply(dto, model);
      }
      /**
       * @fn : saveSelfEvaluationList
       * @brief : 업적평가 본인평가 수정
       * @remark
       * @Create Date: 2022. 1. 26
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022. 1. 26.   박대호     최초  생성
        *
       */
       @RequestMapping(value = "saveSelfEvaluationList.do")
       public View saveSelfEvaluationList(UiMapDto dto, Model model) throws Exception {
           service.saveSelfEvaluationList(dto);
           return apply(dto, model);
       }
}
