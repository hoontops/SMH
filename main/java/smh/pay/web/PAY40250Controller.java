package smh.pay.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import smh.pay.service.PAY40250Service;


/**
 * @file        : PAY40250Controller.java
 * @Project name: SM상선 myHR 고도화
 * @Type name   : PAY40250Controller
 * @Create Date : 2022.02.23
 * @Author      : 권택진
  *
  * << 개정이력(Modification Information) >>
  *
  *   수정일        수정자   수정내용
  *   ------------  ------   ----------
  *   2022.02.23    권택진   최초작성
  *
 */
@Controller
@RequestMapping(value = "/pay40250/")
public class PAY40250Controller extends AbstractWebController {

    @Autowired
    private PAY40250Service service;

    /**
	* @fn          : selectHjspayCalendarList
	* @brief       : 팀원출근현황 조회
	* @Method Name : selectHjspayCalendarList
	* @remark
	* @Create Date : 2022. 02. 23
	* @Author      : 권택진
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일       수정자    수정내용
	 *   ------------   ------    ----------
	 *    2022.02.23.   권택진    최초작성
	 *
	*/
    @RequestMapping(value = "selectHjspayCalendarList")
    public View selectHjspayCalendarList(UiMapDto dto, Model model) throws Exception {
        service.selectHjspayCalendarList(dto);
        return apply(dto, model);
    }
    
    /**
	* @fn          : saveHjspayCalendar
	* @brief       : 팀원출근현황 저장
	* @Method Name : saveHjspayCalendar
	* @remark
	* @Create Date : 2022. 02. 23
	* @Author      : 권택진
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일       수정자    수정내용
	 *   ------------   ------    ----------
	 *    2022.02.23.   권택진    최초작성
	 *
	*/
    @RequestMapping(value = "saveHjspayCalendar.do")
    public View saveHjspayCalendar(UiMapDto dto, Model model) throws Exception {    	
        service.saveHjspayCalendar(dto);
        return apply(dto, model);
    }
}

