package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR20110Service;


/**
* @file: APR20110Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20110Controller
* @Company: Built1
* @Create Date: 2022.1.21
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 21.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr20110")
public class APR20110Controller extends AbstractWebController {

    @Autowired
    private APR20110Service service;

    /**
    * @fn : selectAppraisalTargetReviewList
    * @brief : 업적평가-목표리뷰 리스트조회
    * @remark
    * @Create Date: 2022. 1. 21
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 1. 21.   박대호     최초  생성
     *
    */
    @RequestMapping(value = "selectAppraisalTargetReviewList.do")
    public View selectAppraisalTargetReviewList(UiMapDto dto, Model model) throws Exception {
        service.selectAppraisalTargetReviewList(dto);
        return apply(dto, model);
    }
    /**
     * @fn : updateAprComment
     * @brief : 업적평가-목표리뷰 수정
     * @remark
     * @Create Date: 2022. 1. 24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022. 1. 24.   박대호     최초  생성
      *
     */
     @RequestMapping(value = "updateAprComment.do")
     public View updateAprComment(UiMapDto dto, Model model) throws Exception {
         service.updateAprComment(dto);
         return apply(dto, model);
     }
    
         
}
