package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
 * 
* @file: PCM04900Controller.java
* @Package: smh.pcm.web  
* @Project name: IFC MES시스템 구축
* @Type name: PCM04900Controller    
* @Company: Built1
* @Create Date: 2021 2021. 3. 9.
* @Author: 장병곤
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 9.        장병곤     최초  생성
 *
 */
@Controller
@RequestMapping(value = "/pcm00600")
public class PCM00600Controller extends AbstractWebController {

	@Autowired
    private PCM00600Service service;
	
	/**
	* @fn : selectPrintLotCardList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectPrintLotCardList
	* @remark
	* @Create 2021 2021. 3. 9. 
	* @Author: 장병곤
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 9.        장병곤     최초  생성
	 *
	 */
	@RequestMapping(value = "selectPrintLotCardList.do")
    public View selectPrintLotCardList(UiMapDto dto, Model model) throws Exception {
        service.selectPrintLotCardList(dto);
        return apply(dto, model);
    }
	
	/**
	 * 
	* @fn : selectLotInfoOnPrintLotCard
	* @brief : RD 해드 출력 조회
	* @Method Name : selectLotInfoOnPrintLotCard
	* @remark
	* @Create Date: 2021 2021. 3. 25.
	* @Author: 장병곤
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 25.        장병곤     최초  생성
	 *
	 */
	@RequestMapping(value = "selectLotInfoOnPrintLotCard.do")
    public View selectLotInfoOnPrintLotCard(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoOnPrintLotCard(dto);
        return apply(dto, model);
    }
	
	/**
	 * 
	* @fn : selectProcessResultAndRoutingForLotCardNormal
	* @brief : RD 바디 출력 조회
	* @Method Name : selectProcessResultAndRoutingForLotCardNormal
	* @remark
	* @Create Date: 2021 2021. 3. 25. 
	* @Author: 장병곤
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 25.        장병곤     최초  생성
	 *
	 */
	@RequestMapping(value = "selectProcessResultAndRoutingForLotCardNormal.do")
    public View selectProcessResultAndRoutingForLotCardNormal(UiMapDto dto, Model model) throws Exception {
        service.selectProcessResultAndRoutingForLotCardNormal(dto);
        return apply(dto, model);
    }
}
