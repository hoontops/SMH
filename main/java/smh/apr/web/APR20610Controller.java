package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR20610Service;


/**
* @file: APR20610Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20610Controller
* @Company: Built1
* @Create Date: 2022.2.7
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 7.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr20610")
public class APR20610Controller extends AbstractWebController {

    @Autowired
    private APR20610Service service;

    /**
     * @fn : updateApr1stComment
     * @brief : 업적평가-목표리뷰 수정
     * @remark
     * @Create Date: 2022. 1. 25
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022. 1. 25.   박대호     최초  생성
      *
     */
     @RequestMapping(value = "update1stEvaluation.do")
     public View update1stEvaluation(UiMapDto dto, Model model) throws Exception {
         service.update1stEvaluation(dto);
         return apply(dto, model);
     }
    
}
