package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM07500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM07500Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM07500Controller
 * @Company		: Built1
 * @Create Date	: 2021.4.09
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 4. 09.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm07500")
public class PCM07500Controller extends AbstractWebController {

	@Autowired
    private PCM07500Service service;


  	/**
     * @fn : selectPackLineList
     * @brief : 포장라벨출력(2블럭) - Line List  조회
     * @remark
     * @Create Date: 2021. 4. 09
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 09.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackLineList.do")
	  public View selectPackLineList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackLineList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : savePackLabel02
     * @brief : 포장라벨출력(2블럭) - 저장시
     * @remark
     * @Create Date: 2021. 04. 09
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021.04. 09.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "savePackLabel02.do")
	  public View savePackLabel02(UiMapDto dto, Model model) throws Exception {
	  	service.savePackLabel02(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackLabelMain2BList
     * @brief : 2블럭 메인 조회시 lot정보 Line에서 가져옴
     * @remark
     * @Create Date: 2021. 05. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 10.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectPackLabelMain2BList.do")
      public View selectPackLabelMain2BList(UiMapDto dto, Model model) throws Exception {
        service.selectPackLabelMain2BList(dto);
        return apply(dto, model);
      }
  	
  	
}
