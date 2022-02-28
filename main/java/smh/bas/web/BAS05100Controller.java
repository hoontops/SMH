package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS05100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS05100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05100Controller
* @Company: Built1
* @Create Date: 2021.05.01
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.01.    김진현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas05100")
public class BAS05100Controller extends AbstractWebController {

    @Autowired
    private BAS05100Service service;

    /**
     * @fn : SelectEquipmentManagementList
     * @brief : 설비/설비단 관리 - 메인 설비현황 조회
     * @remark
     * @Create Date: 2021. 05. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectEquipmentManagementList.do")
      public View SelectEquipmentManagementList(UiMapDto dto, Model model) throws Exception {
        service.SelectEquipmentManagementList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectEqpClassTreeList
     * @brief : 설비/설비단 관리 - 트리 조회
     * @remark
     * @Create Date: 2021. 05. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectEqpClassTreeList.do")
      public View selectEqpClassTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectEqpClassTreeList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : SelectEquipmentClass03
     * @brief : 설비/설비단 관리 - 설비 (MC) List
     * @remark
     * @Create Date: 2021. 05. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectEquipmentClass03.do")
      public View SelectEquipmentClass03(UiMapDto dto, Model model) throws Exception {
        service.SelectEquipmentClass03(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : SelectEquipmentClass02
     * @brief : 설비/설비단 관리 - 설비 (SC) List
     * @remark
     * @Create Date: 2021. 05. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectEquipmentClass02.do")
      public View SelectEquipmentClass02(UiMapDto dto, Model model) throws Exception {
        service.SelectEquipmentClass02(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : SelectEquimentClass
     * @brief : 설비/설비단 관리 - 설비단 조회
     * @remark
     * @Create Date: 2021. 05. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectEquimentClass.do")
      public View SelectEquimentClass(UiMapDto dto, Model model) throws Exception {
        service.SelectEquimentClass(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : SelectEqpClassGridCombo
     * @brief : 설비/설비단 관리 -   그리드 콤보 조회
     * @remark
     * @Create Date: 2021. 05. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectEqpClassGridCombo.do")
      public View SelectEqpClassGridCombo(UiMapDto dto, Model model) throws Exception {
        service.SelectEqpClassGridCombo(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : SelectEquipmentClass
     * @brief : 설비/설비단 관리 - 설비단 설비단id 팝업
     * @remark
     * @Create Date: 2021. 05. 03
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 03.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectEquipmentClass.do")
      public View SelectEquipmentClass(UiMapDto dto, Model model) throws Exception {
        service.SelectEquipmentClass(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : saveEquipment
     * @brief : 설비/설비단 관리 - 설비/설비단 저장
     * @remark
     * @Create Date: 2021. 05. 03
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 03.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "saveEquipment.do")
      public View saveEquipment(UiMapDto dto, Model model) throws Exception {
        service.saveEquipment(dto);
        return apply(dto, model);
      }
      
    /**
     * @fn : selectAreaListByEquipmentClassId
     * @brief : 설비/설비단 관리 - [작업장popup]설비그룹이 매핑된 Area만 조회
     * @remark
     * @Create Date: 2021. 05. 03
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 03.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectAreaListByEquipmentClassId.do")
      public View selectAreaListByEquipmentClassId(UiMapDto dto, Model model) throws Exception {
        service.selectAreaListByEquipmentClassId(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectProcessSegmentClass
     * @brief : 설비/설비단 관리 - [공정그룹 popup]
     * @remark
     * @Create Date: 2021. 05. 04
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 04.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectProcessSegmentClass.do")
      public View selectProcessSegmentClass(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentClass(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : SelectMainEquipmentPop
     * @brief : 설비/설비단 관리 - 설비 그룹 (POP - 메인 그리드)
     * @remark
     * @Create Date: 2021. 05. 07
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 06.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "SelectMainEquipmentPop.do")
      public View SelectMainEquipmentPop(UiMapDto dto, Model model) throws Exception {
        service.SelectMainEquipmentPop(dto);
        return apply(dto, model);
      }
    
    
}
