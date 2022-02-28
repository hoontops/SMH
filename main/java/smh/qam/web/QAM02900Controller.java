package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM02900Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM02900Controller
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam02900")
public class QAM02900Controller extends AbstractWebController {

    @Autowired
    private QAM02900Service service;

    /**
    * @fn : selectQamQcinspectorgrade
    * @brief : 검사원 등급 정보 조회
    * @remark
    * @Create Date: 2021. 4. 5
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 5.       권혜영     최초  생성
     *
    */
    @RequestMapping(value = "selectQamQcinspectorgradeList.do")
    public View selectQamQcinspectorgradeList(UiMapDto dto, Model model) throws Exception {
        service.selectQamQcinspectorgradeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveQamQcinspectorgrade
    * @brief : 검사원 등급 정보 저장
    * @remark
    * @Create Date: 2021. 4. 5
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 5.       권혜영     최초  생성
     *
    */
    @RequestMapping(value = "saveQamQcinspectorgrade.do")
    public View saveQamQcinspectorgrade(UiMapDto dto, Model model) throws Exception {
    	
        service.saveQamQcinspectorgrade(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectQamQcinspectorgradehistoryList
     * @brief : 검사원 등급 정보 이력 조회
     * @remark
     * @Create Date: 2021. 4. 5
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 5.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectQamQcinspectorgradehistoryList.do")
     public View selectQamQcinspectorgradehistoryList(UiMapDto dto, Model model) throws Exception {
         service.selectQamQcinspectorgradehistoryList(dto);
         return apply(dto, model);
     }
}
