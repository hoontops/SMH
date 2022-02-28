package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03400Controller
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.    김기수     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03400")
public class BAS03400Controller extends AbstractWebController {

    @Autowired
    private BAS03400Service service;

    /**
    * @fn : selectBasProcesssegmentUseProduct
    * @brief :표준 공정 사용 품목을 조회 한다,.
    * @remark
    * @Create Date: 2021. 3. 15
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.     김기수     최초  생성
     *
    */
    @RequestMapping(value = "selectBasProcesssegmentUseProduct.do")
    public View selectBasProcesssegmentUseProduct(UiMapDto dto, Model model) throws Exception {
        service.selectBasProcesssegmentUseProduct(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectBasProcesssegmentUseProduct
    * @brief :표준 공정 사용 품목을 조회 한다,.
    * @remark
    * @Create Date: 2021. 3. 15
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.     김기수     최초  생성
     *
    */
    
    /**
     * @fn : selectProcesssegmentPopup
     * @brief :표준 공정 팝업
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author:  김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 15.     김기수     최초  생성
      *
     */
    @RequestMapping(value = "selectProcesssegmentPopup.do")
    public View selectProcesssegmentPopup(UiMapDto dto, Model model) throws Exception {
        service.selectProcesssegmentPopup(dto);
        return apply(dto, model);
    }


}
