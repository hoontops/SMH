package smh.pda.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pda.service.EDA00200Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: EDA00100Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: EDA00100Controller
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/eda00200")
public class EDA00200Controller extends AbstractWebController {

    @Autowired
    private EDA00200Service service;

    /**
    * @fn : executeFifo12
    * @brief : 공급사 제조LOT 입력
    * @Method Name : executeFifo12
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    @RequestMapping(value = "executeFifo12.do")
    public View executeFifo12(UiMapDto dto, Model model) throws Exception {
        service.executeFifo12(dto);
        return apply(dto, model);
    }


    /**
    * @fn : selectFifo11
    * @brief : 환산금액
    * @Method Name : selectFifo11
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectFifo11.do")
    public View selectFifo11(UiMapDto dto, Model model) throws Exception {
        service.selectFifo11(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectFifo11
    * @brief : 환산금액
    * @Method Name : selectFifo11
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectFifo13.do")
    public View selectFifo13(UiMapDto dto, Model model) throws Exception {
        service.selectFifo13(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectLogin
    * @brief : selectLogin
    * @Method Name : selectLogin
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
//    @RequestMapping(value = "selectLogin.do")
//    public View selectLogin(UiMapDto dto, Model model, HttpServletRequest request, HttpServletResponse response) throws Exception {
//        service.selectLogin(dto, request, response);
//        return apply(dto, model);
//    }
}
