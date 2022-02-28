package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01400Service;


/**
* @file: PCM01400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01400Controller
* @Company: Built1
* @Create Date: 2021.5.27
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 27.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm01400")
public class PCM01400Controller extends AbstractWebController {

    @Autowired
    private PCM01400Service service;

  
    
    /**
     * @fn :   
     * @brief : 모델수주 진척현황 조회
     * @remark
     * @Create Date: 2021. 5. 27
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  27.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectSalseOrderStausPerProduct.do")
     public View selectSalseOrderStausPerProduct(UiMapDto dto, Model model) throws Exception {
         service.selectSalseOrderStausPerProduct(dto);
         return apply(dto, model);
     }
}
