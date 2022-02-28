package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03800Controller
* @Company: IFC
* @Create Date: 2021.3.11
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 11.    김기수     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03800")
public class BAS03800Controller extends AbstractWebController {

    @Autowired
    private BAS03800Service service;

    /**
    * @fn : selectBasToolList
    * @brief : 치공구 사용 품목 조회
    * @remark
    * @Create Date: 2021. 3. 11
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 11.     김기수     최초  생성
     *
    */
    @RequestMapping(value = "selectBasToolList.do")
    public View selectBasToolList(UiMapDto dto, Model model) throws Exception {
        service.selectBasToolList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectDurableCodePopup
    * @brief : 치공구 POPUP List
    * @remark
    * @Create Date: 2021. 3. 11
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 11.     김기수     최초  생성
     *
    */
    @RequestMapping(value = "selectDurableCodePopup.do")
    public View selectDurableCodePopup(UiMapDto dto, Model model) throws Exception {
        service.selectDurableCodePopup(dto);
        return apply(dto, model);
    }
    

    
}
