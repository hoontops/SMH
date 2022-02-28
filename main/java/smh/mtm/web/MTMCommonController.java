package smh.mtm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mtm.service.MTMCommonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: MTMCommonController.java
* @Package		: smh.mtm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: MTMCommonController    
* @Company		: Built1
* @Create Date	: 2021. 3. 5. 오후 2:13:54 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 3. 5.       김진현      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/mtmCommon")
public class MTMCommonController extends AbstractWebController {

    @Autowired
    private MTMCommonService service;


    /**
    * @fn : selectCustomQuery
    * @brief : 기준관리 공통SQL 조회용 메소드 
    * @Method Name : selectCustomQuery
    * @remark
    * @Create Date: 2021 2021. 3. 5. 오후 2:13:38 
    * @Author: sungmin.choe
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 5.        김진현     최초  생성
     *
    */
    @RequestMapping(value = "selectMtmCustomQuery.do")
    public View selectCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectCustomQuery(dto);
        return apply(dto, model);
    }
    
    //창고명 조회
  	@RequestMapping(value = "selectWhNmList.do")
  	public View selectWhNmPopupList(UiMapDto dto, Model model) throws Exception {
  	  	service.selectWhNmPopupList(dto);
  	  	return apply(dto, model);
  	}
  	
  	
  	/**
     * @fn : selectConsumableList
     * @brief : 자재 현황 조회 자재명 팝업 리스트 조회
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
	@RequestMapping(value = "selectConsumableList.do")
	public View selectConsumableList(UiMapDto dto, Model model) throws Exception {
		service.selectConsumableList(dto);
	    return apply(dto, model);
	}
	
	
	/**
     * @fn : selectRequestType
     * @brief : 자재 불출 요청 요청 유형 콤보박스
     * @remark
     * @Create Date: 2021. 5. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 5. 24.  유창균      최초  생성
     *
     */
	@RequestMapping(value = "selectRequestType.do")
	public View selectRequestType(UiMapDto dto, Model model) throws Exception {
		service.selectRequestType(dto);
	    return apply(dto, model);
	}

}
