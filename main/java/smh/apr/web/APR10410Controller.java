package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR10410Service;


/**
* @file: APR10410Controller.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10410Controller
* @Company: Built1
* @Create Date: 2022.1.25
* @Author: 이정훈
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 25.    이정훈     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr10410")
public class APR10410Controller extends AbstractWebController {

    @Autowired
    private APR10410Service service;

    /**
    * @fn : selectAppraisalInfo
    * @brief : 평가이력 개인정보 조회
    * @remark
    * @Create Date: 2022. 1. 25
    * @Author: 이정훈
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 1. 25.   이정훈     최초  생성
     *
    */
    @RequestMapping(value = "selectAppraisalInfo.do")
    public View selectAppraisalInfo(UiMapDto dto, Model model) throws Exception {
        service.selectAppraisalInfo(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectAppraisalHistoryDetailList
     * @brief : 평가이력 리스트 조회
     * @remark
     * @Create Date: 2022. 1. 26
     * @Author: 이정훈
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 1. 26   이정훈     최초  생성
     *
     */
//    @RequestMapping(value = "selectAppraisalHistoryDetailList.do")
//    public View selectAppraisalHistoryDetailList(UiMapDto dto, Model model) throws Exception {
//    	service.selectAppraisalHistoryDetailList(dto);
//    	return apply(dto, model);
//    }
// 
}
