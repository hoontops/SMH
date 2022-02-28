package smh.mtm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mtm.service.MTM00400Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: MTM00400Controller.java
* @Package		: smh.mtm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: MTM00400Controller    
* @Company		: Built1
* @Create Date	: 2021. 3. 8. 오후 2:13:54 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 3. 8.       김진현      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/mtm00400")
public class MTM00400Controller extends AbstractWebController {

    @Autowired
    private MTM00400Service service;

   
  	
  	/**
     * @fn : selectConsumableLotStatisticsList
     * @brief : 자재 현황 조회 main List조회
     * @remark
     * @Create Date: 2021. 3. 08
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 08.  김진현      최초  생성
     *
     */
	@RequestMapping(value = "selectConsumableLotStatisticsList.do")
	public View selectConsumableLotStatisticsList(UiMapDto dto, Model model) throws Exception {
		service.selectConsumableLotStatisticsList(dto);
	    return apply(dto, model);
	}
	
	/**
     * @fn : selectItemMasterPopupList
     * @brief : 품목 팝업
     * @remark
     * @Create Date: 2021. 3. 09
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 09.  김진현      최초  생성
     *
     */
	@RequestMapping(value = "selectItemMasterPopupList.do")
	public View selectItemMasterPopupList(UiMapDto dto, Model model) throws Exception {
		service.selectItemMasterPopupList(dto);
	    return apply(dto, model);
	}
	
	
	/**
     * @fn : selectConsumablelotStatisticsDetailInfoList
     * @brief : 자재 현황 조회 detail List조회
     * @remark
     * @Create Date: 2021. 3. 09
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 09.  김진현      최초  생성
     *
     */
	@RequestMapping(value = "selectConsumablelotStatisticsDetailInfoList.do")
	public View selectConsumablelotStatisticsDetailInfoList(UiMapDto dto, Model model) throws Exception {
		service.selectConsumablelotStatisticsDetailInfoList(dto);
	    return apply(dto, model);
	}

	
}
