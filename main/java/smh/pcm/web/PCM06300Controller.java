package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06300Service;


/**
* @file: PCM06300Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06300Controller
* @Company: Built1
* @Create Date: 2021.4.14
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 14.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06300")
public class PCM06300Controller extends AbstractWebController {

    @Autowired
    private PCM06300Service service;

  
    
    /**
     * @fn :   
     * @brief : 보류현황 조회  
     * @remark
     * @Create Date: 2021. 4. 14
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  14.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectLotHoldResult.do")
     public View selectLotHoldResult(UiMapDto dto, Model model) throws Exception {
         service.selectLotHoldResult(dto);
         return apply(dto, model);
	 }
    
      
}
