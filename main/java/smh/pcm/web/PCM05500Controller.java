package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05500Service;


/**
* @file: PCM05500Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05500Controller
* @Company: Built1
* @Create Date: 2021.5.10
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 10.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05500")
public class PCM05500Controller extends AbstractWebController {

    @Autowired
    private PCM05500Service service;

  
    
    /**
     * @fn :   
     * @brief : 품목탭 조회  
     * @remark
     * @Create Date: 2021. 5. 10
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  10.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectWipAgingList.do")
     public View selectWipAgingList(UiMapDto dto, Model model) throws Exception {
         service.selectWipAgingList(dto);
         return apply(dto, model);
	 }
	
            
}
