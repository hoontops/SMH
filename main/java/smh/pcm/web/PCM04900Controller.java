package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04900Service;

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
@RequestMapping(value = "/pcm04900")
public class PCM04900Controller extends AbstractWebController {

	@Autowired
    private PCM04900Service service;
	
	/**
	* 
	* @fn : selectProductdefVesion
	* @brief : Rev 콤보
	* @Method Name : selectProductdefVesion
	* @remark
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
	@RequestMapping(value = "selectComboList.do")
    public View selectComboList(UiMapDto dto, Model model) throws Exception {
        service.selectComboList(dto);
        return apply(dto, model);
    }
	
	/**
	* 
	* @fn : selectComboList
	* @brief : Rev 콤보
	* @Method Name : selectComboList
	* @remark
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
	@RequestMapping(value = "selectPopupList.do")
    public View selectPopupList(UiMapDto dto, Model model) throws Exception {
        service.selectPopupList(dto);
        return apply(dto, model);
    }
	
	
	/**
	* 
	* @fn : selectWIPList
	* @brief : 재공 조회
	* @Method Name : selectWIPList
	* @remark
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
	@RequestMapping(value = "selectWIPList.do")
    public View selectWIPList(UiMapDto dto, Model model) throws Exception {
        service.selectWIPList(dto);
        return apply(dto, model);
    }
}
