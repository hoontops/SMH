package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05300Service;


/**
* @file: PCM05300Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05300Controller
* @Company: Built1
* @Create Date: 2021.5.10
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 10.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05300")
public class PCM05300Controller extends AbstractWebController {

    @Autowired
    private PCM05300Service service;

  
    
    /**
     * @fn :   
     * @brief : LOT별 이상발생 현황 조회
     * @remark
     * @Create Date: 2021. 5. 10
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일         수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.10.   방성혁     최초  생성
      *
     */ 
     @RequestMapping(value = "selectAbnormalOccurenceList.do")
     public View selectAbnormalOccurenceList(UiMapDto dto, Model model) throws Exception {
         service.selectAbnormalOccurenceList(dto);
         return apply(dto, model);
	 }
   
}
