package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM02800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02800Controller
* @Company: Built1
* @Create Date: 2021.4.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.    김성현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02800")
public class PCM02800Controller extends AbstractWebController {

    @Autowired
    private PCM02800Service service;

    /**
    * @fn :   
    * @brief :  
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   김성현     최초  생성
     *
    */ 
    @RequestMapping(value = "selectWipTransAreaList.do")
    public View selectWipTransAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectWipTransAreaList(dto);
        return apply(dto, model);
    }
   
    /**
    * @fn :   
    * @brief :  
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   김성현     최초  생성
     *
    */ 
    @RequestMapping(value = "getTransAreaList.do")
    public View getTransAreaList(UiMapDto dto, Model model) throws Exception {
        service.getTransAreaList(dto);
        return apply(dto, model);
    }
    
	   /**
	    * @fn : saveChangeArea
	    * @brief : 
	    * @Method Name : saveChangeArea
	    * @remark
	    * @Create Date: 2021. 04. 02
	    * @Author: 
	    * @File Version: v1.0 
	    *
	    * << 개정이력(Modification Information) >>
	    *   
	    *     수정일                수정자      수정내용
	    *   ------------  ------  ----------
	    *   2021. 5. 04.   김성현     최초  생성
	    *
	   */
	   @RequestMapping(value = "saveChangeArea.do")
	   public View saveChangeArea(UiMapDto dto, Model model) throws Exception {
	      service.saveChangeArea(dto);
	      return apply(dto, model);
	   }   
	   
	   
}
