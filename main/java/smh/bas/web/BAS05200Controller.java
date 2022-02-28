package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS05200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS05200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05200Controller
* @Company: Built1
* @Create Date: 2021.04.27
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.27.    김진현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas05200")
public class BAS05200Controller extends AbstractWebController {

    @Autowired
    private BAS05200Service service;

    /**
     * @fn : selectBasAreaPersonTreeList
     * @brief : 자사 작업자 관리 - Tree 조회
     * @remark
     * @Create Date: 2021. 04. 27
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 27.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectBasAreaPersonTreeList.do")
	  public View selectBasAreaPersonTreeList(UiMapDto dto, Model model) throws Exception {
	  	service.selectBasAreaPersonTreeList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selecBasAreaPersonMainList
     * @brief : 자사 작업자 관리 - Tree 선택 후 Main 조회
     * @remark
     * @Create Date: 2021. 04. 27
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 27.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selecBasAreaPersonMainList.do")
	  public View selecBasAreaPersonMainList(UiMapDto dto, Model model) throws Exception {
	  	service.selecBasAreaPersonMainList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectInitComboList
     * @brief : 자사 작업자 관리 - site, area 콤보 정보 조회
     * @remark
     * @Create Date: 2021. 04. 27
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 27.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectInitComboList.do")
	  public View selectInitComboList(UiMapDto dto, Model model) throws Exception {
	  	service.selectInitComboList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selecUserAreaPersonList
     * @brief : 자사 작업자 관리 - 사용자 ID 조회
     * @remark
     * @Create Date: 2021. 04. 28
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 27.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selecUserAreaPersonList.do")
	  public View selecUserAreaPersonList(UiMapDto dto, Model model) throws Exception {
	  	service.selecUserAreaPersonList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveBasAreaPerson
     * @brief : 자사 작업자 관리 - 저장
     * @remark
     * @Create Date: 2021. 04. 28
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 27.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveBasAreaPerson.do")
	  public View saveBasAreaPerson(UiMapDto dto, Model model) throws Exception {
	  	service.saveBasAreaPerson(dto);
	  	return apply(dto, model);
	  }

}
