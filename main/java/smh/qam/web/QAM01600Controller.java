package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
 * @file: QAM01600Controller.java
* @Package: smh.qam.service
 * @Project name: IFC MES시스템 구축
 * @Type name: QAM01600Controller
 * @Company: Built1
 * @Create Date: 2021.05.04
 * @Author: 권혜영
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.04       권혜영     최초  생성
 *
 */
@Controller
@RequestMapping(value = "/qam01600")
public class QAM01600Controller extends AbstractWebController {

	@Autowired
	private QAM01600Service service;

	/**
	 * @fn : selectQualitySpecificationIssueList
	 * @brief : 출하검사이상발생 조회
	 * @remark
	 * @Create Date: 2021. 4. 16
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
	@RequestMapping(value = "selectShipmentAbnormalOccurrence.do")
	public View selectShipmentAbnormalOccurrence(UiMapDto dto, Model model) throws Exception {
		service.selectShipmentAbnormalOccurrence(dto);
		return apply(dto, model);
	}
    
    /**
    * @fn : selectShipmentInspectionImage
    * @brief : 품질규격 이상발생 > 품질규격 측정항목의 파일 리스트  조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectShipmentInspectionImage.do")
    public View selectShipmentInspectionImage(UiMapDto dto, Model model) throws Exception {
        service.selectShipmentInspectionImage(dto);
        return apply(dto, model);
    }

}