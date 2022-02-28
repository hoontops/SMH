package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM02600Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02600Controller
* @Company     : Built1
* @Create Date : 2021.06.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.24  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam02600")
public class QAM02600Controller extends AbstractWebController {

    @Autowired
    private QAM02600Service service;

    /**
    * @fn          : selectDefectStatusByDefectList
    * @brief       : 불량별 현황 조회
    * @remark
    * @Create Date : 2021.06.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.24  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectStatusByDefectList.do")
    public View selectDefectStatusByDefectList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectStatusByDefectList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectStatusByProductList
    * @brief       : 불량별 현황>>품목별 현황(팝업) 조회
    * @remark
    * @Create Date : 2021.06.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.24  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectStatusByProductList.do")
    public View selectDefectStatusByProductList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectStatusByProductList(dto);
        return apply(dto, model);
    }
}