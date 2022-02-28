package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM02700Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM02700Controller
* @Company: Built1
* @Create Date: 2021.05.12
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.12.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam02700")
public class QAM02700Controller extends AbstractWebController {

    @Autowired
    private QAM02700Service service;

	/**
	 * @fn : selectQamWorkDefectPriceStatus
	 * @brief : 재공불량 금액현황 정보 조회
	 * @remark
	 * @Create Date: 2021.05.12
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.12.       권혜영     최초  생성
	 *
	 */
    @RequestMapping(value = "selectQamWorkDefectPriceStatusList.do")
    public View selectQamWorkDefectPriceStatusList(UiMapDto dto, Model model) throws Exception {
        service.selectQamWorkDefectPriceStatusList(dto);
        return apply(dto, model);
    }
}
