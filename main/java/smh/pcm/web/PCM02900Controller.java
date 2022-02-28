package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM02900Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02900Controller
* @Company: Built1
* @Create Date: 2021.05.21
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.21.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02900")
public class PCM02900Controller extends AbstractWebController {

    @Autowired
    private PCM02900Service service;

    /**
    * @fn :   
    * @brief : 상단 Lot 정보
    * @remark
    * @Create Date: 2021.05.21
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.21.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotInfoBylotID.do")
    public View selectLotInfoBylotID(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotInfoBylotID ************* !!!");
        service.selectLotInfoBylotID(dto);
        return apply(dto, model);
    }

    
    /**
     * @fn :   
     * @brief : 
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "saveLotRework.do")
    public View saveLotRework(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky saveLotRework ************* !!!");
		service.saveLotRework(dto);
		return apply(dto, model);
	}
     
}
