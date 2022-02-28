package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM09300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM09300Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09300Controller
 * @Company		: Built1
 * @Create Date	: 2021.3.18
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 18.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm09300")
public class PCM09300Controller extends AbstractWebController {

	@Autowired
    private PCM09300Service service;

    /**
     * @fn : selectConsumableDefList
     * @brief : 자재품목ID선택 조회
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 18.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectConsumableDefList.do")
	  public View selectConsumableDefList(UiMapDto dto, Model model) throws Exception {
	  	service.selectConsumableDefList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectConsumableLotHistoryList
     * @brief : 자재 사용 이력 list 조회
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 18.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectConsumableLotHistoryList.do")
	  public View selectConsumableLotHistoryList(UiMapDto dto, Model model) throws Exception {
	  	service.selectConsumableLotHistoryList(dto);
	  	return apply(dto, model);
	  }
}
