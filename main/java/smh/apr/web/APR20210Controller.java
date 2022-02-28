package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR20210Service;


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
@RequestMapping(value = "/apr20210")
public class APR20210Controller extends AbstractWebController {

    @Autowired
    private APR20210Service service;


      /**
       * @fn : updatePartEvaluation
       * @brief : 업적평가 파트장평가 수정
       * @remark
       * @Create Date: 2022. 2. 3
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022. 2. 3.   박대호     최초  생성
        *
       */
       @RequestMapping(value = "updatePartEvaluation.do")
       public View updatePartEvaluation(UiMapDto dto, Model model) throws Exception {
           service.updatePartEvaluation(dto);
           return apply(dto, model);
       }
       /**
        * @fn : selectPerformanceRating
        * @brief : 업적평가-피평가자 등급조회
        * @remark
        * @Create Date: 2022. 2. 4
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2022. 2. 4.   박대호     최초  생성
         *
        */
        @RequestMapping(value = "selectPerformanceRating.do")
        public View selectPerformanceRating(UiMapDto dto, Model model) throws Exception {
            service.selectPerformanceRating(dto);
            return apply(dto, model);
        }
       
}
