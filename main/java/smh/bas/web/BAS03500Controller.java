package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03500Controller
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
@RequestMapping(value = "/bas03500")
public class BAS03500Controller extends AbstractWebController {

    @Autowired
    private BAS03500Service service;

    /**
    * @fn : selectBasResourceUseProduct
    * @brief : 자원 사용 품목을 조회 한다,.
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
    @RequestMapping(value = "selectBasResourceUseProduct.do")
    public View selectBasResourceUseProduct(UiMapDto dto, Model model) throws Exception {
        service.selectBasResourceUseProduct(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectResourcePopup
     * @brief : 자원 팝업
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
     @RequestMapping(value = "selectResourcePopup.do")
     public View selectResourcePopup(UiMapDto dto, Model model) throws Exception {
         service.selectResourcePopup(dto);
         return apply(dto, model);
     }

}
