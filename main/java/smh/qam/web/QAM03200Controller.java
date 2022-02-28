package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM03200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM03200Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03200Controller
* @Company: Built1
* @Create Date: 2021.06.04
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.04.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam03200")
public class QAM03200Controller extends AbstractWebController {

    @Autowired
    private QAM03200Service service;

	/**
	 * @fn : selectQamShrinkmeasure
	 * @brief : LOT별 수축율 측정 조회
	 * @remark
	 * @Create Date: 2021.06.04
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.04.       권혜영     최초  생성
	 *
	 */
    @RequestMapping(value = "selectQamShrinkmeasureList.do")
    public View selectQamShrinkmeasureList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShrinkmeasureList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveQamShrinkmeasure
    * @brief : 수축율관리 저장
    * @remark
    * @Create Date: 2021.06.04
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.04.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "saveQamShrinkmeasure.do")
    public View saveQamShrinkmeasure(UiMapDto dto, Model model) throws Exception {
        service.saveQamShrinkmeasure(dto);
        return apply(dto, model);
    }
    

    /**
    * @fn : procQamShrinkmeasure
    * @brief : 측정값 DATA 변환
    * @remark
    * @Create Date: 2021.06.04
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.04.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "procQamShrinkmeasure.do")
    public View procQamShrinkmeasure(UiMapDto dto, Model model) throws Exception {
        service.procQamShrinkmeasure(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectQamEquipmentList
    * @brief : 설비 팝업- 조회
    * @remark
    * @Create Date: 2021.06.04
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.04.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamEquipmentList.do")
    public View selectQamEquipmentList(UiMapDto dto, Model model) throws Exception {
        service.selectQamEquipmentList(dto);
        return apply(dto, model);
    }

}