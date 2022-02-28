package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04000Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04000Controller
* @Company     : Built1
* @Create Date : 2021.03.09
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.09  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas04000")
public class BAS04000Controller extends AbstractWebController {

    @Autowired
    private BAS04000Service service;

    /**
    * @fn          : selectEquipmentdefectcodeList
    * @brief       : 설비 불량코드 연계정보 조회
    * @remark
    * @Create Date : 2021.03.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.09  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectEquipmentdefectcodeList.do")
    public View selectEquipmentdefectcodeList(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentdefectcodeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectItemList
    * @brief       : 불량항목 리스트 조회
    * @remark
    * @Create Date : 2021.03.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectItemList.do")
    public View selectDefectItemList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectItemList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveEquipmentdefectcode
    * @brief       : 설비 불량코드 연계정보 등록/수정/삭제 Call
    * @Method Name : saveEquipmentdefectcode
    * @remark
    * @Create Date : 2021.03.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.09  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveEquipmentdefectcode.do")
    public View saveEquipmentdefectcode(UiMapDto dto, Model model) throws Exception {
        service.saveEquipmentdefectcode(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveDefectItem
    * @brief       : 불량항목 리스트  등록/수정 Call
    * @Method Name : saveDefectItem
    * @remark
    * @Create Date : 2021.03.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveDefectItem.do")
    public View saveDefectItem(UiMapDto dto, Model model) throws Exception {
        service.saveDefectItem(dto);
        return apply(dto, model);
    }    
}