package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM03300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM03300Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03300Controller
* @Company: Built1
* @Create Date: 2021.06.08
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.08.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam03300")
public class QAM03300Controller extends AbstractWebController {

    @Autowired
    private QAM03300Service service;

	/**
	 * @fn : selectQamShrinkmeasure
	 * @brief : 수축율현황 조회
	 * @remark
	 * @Create Date: 2021.06.08
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.08.       권혜영     최초  생성
	 *
	 */
    @RequestMapping(value = "selectQamShrinkmeasureList.do")
    public View selectQamShrinkmeasureList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShrinkmeasureList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectQamShrinkmeasurePopupList
    * @brief : 수축율 측정 팝업  조회
    * @remark
    * @Create Date: 2021.06.08
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.08.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamShrinkmeasurePopupList.do")
    public View selectQamShrinkmeasurePopupList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShrinkmeasurePopupList(dto);
        return apply(dto, model);
    }
    
    /**
	 * @fn : "selectQamShrinkmeasureGroupList"
	 * @brief : 차트 - 수축율현황 그룹 조회
	 * @remark
	 * @Create Date: 2021.06.10
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.08.       권혜영     최초  생성
	 *
	 */
    @RequestMapping(value = "selectQamShrinkmeasureGroupList.do")
    public View selectQamShrinkmeasureGroupList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShrinkmeasureGroupList(dto);
        return apply(dto, model);
    }
    
    /**
   	 * @fn : "selectQamShrinkmeasureLotList"
   	 * @brief : 차트 - 수축율현황 그룹 조회 > 선택 LOT 보기 팝업
   	 * @remark
   	 * @Create Date: 2021.06.29
   	 * @Author: 권혜영
   	 * @File Version: v1.0
   	 *
   	 * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021.06.29.       권혜영     최초  생성
   	 *
   	 */
   @RequestMapping(value = "selectQamShrinkmeasureLotList.do")
   public View selectQamShrinkmeasureLotList(UiMapDto dto, Model model) throws Exception {
       service.selectQamShrinkmeasureLotList(dto);
       return apply(dto, model);
   }
}