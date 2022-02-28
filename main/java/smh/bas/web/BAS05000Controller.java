package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS05000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS05000Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05000Controller
* @Company: Built1
* @Create Date: 2021.04.28
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.28.    김진현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas05000")
public class BAS05000Controller extends AbstractWebController {

    @Autowired
    private BAS05000Service service;

    /**
     * @fn : selectConditionitem
     * @brief : 설비 그룹 - 필터조회 - 조회조건(콤보)
     * @remark
     * @Create Date: 2021. 04. 28
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 28.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectConditionitem.do")
      public View selectConditionitem(UiMapDto dto, Model model) throws Exception {
        service.selectConditionitem(dto);
        return apply(dto, model);
      }
    


/**
     * @fn : selectEqpClassTreeList
     * @brief : 설비 그룹 - 트리 그리드 조회
     * @remark
     * @Create Date: 2021. 04. 28
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 28.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectEqpClassTreeList.do")
      public View selectEqpClassTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectEqpClassTreeList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectEqpClassList
     * @brief : 설비 그룹 - 메인 그리드 조회(Tree row 변경시)
     * @remark
     * @Create Date: 2021. 04. 28
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 28.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectEqpClassList.do")
      public View selectEqpClassList(UiMapDto dto, Model model) throws Exception {
        service.selectEqpClassList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : saveEqpGrp
     * @brief : 설비 그룹 - 메인 그리드 조회(저장)
     * @remark
     * @Create Date: 2021. 04. 29
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 29.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "saveEqpGrp.do")
      public View saveEqpGrp(UiMapDto dto, Model model) throws Exception {
        service.saveEqpGrp(dto);
        return apply(dto, model);
      }

}
