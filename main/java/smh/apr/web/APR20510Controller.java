package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR20510Service;


/**
* @file: APR20510Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20510Controller
* @Company: Built1
* @Create Date: 2022.1.25
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 25.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr20510")
public class APR20510Controller extends AbstractWebController {

    @Autowired
    private APR20510Service service;

    /**
    * @fn : select1stAppraiserCombo
    * @brief : 업적평가-목표리뷰(1st Appraiser)콤보조회
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
    @RequestMapping(value = "select1stAppraiserCombo.do")
    public View select1stAppraiserCombo(UiMapDto dto, Model model) throws Exception {
        service.select1stAppraiserCombo(dto);
        return apply(dto, model);
    }
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
     @RequestMapping(value = "updateApr1stComment.do")
     public View updateApr1stComment(UiMapDto dto, Model model) throws Exception {
         service.updateApr1stComment(dto);
         return apply(dto, model);
     }
    
}
