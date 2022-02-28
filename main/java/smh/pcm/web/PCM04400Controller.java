package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM04400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04400Controller
* @Company: Built1
* @Create Date: 2021.3.29
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 29.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04400")
public class PCM04400Controller extends AbstractWebController {

    @Autowired
    private PCM04400Service service;

    /**
    * @fn :   
    * @brief : 불량 코드 조회 팝업
    * @remark
    * @Create Date: 2021. 3. 9
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3.  9.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectDefectCodeList4Popup.do")
    public View selectDefectCodeList4Popup(UiMapDto dto, Model model) throws Exception {
        service.selectDefectCodeList4Popup(dto);
        return apply(dto, model);
    }
    
    

    /**
     * @fn :  saveDefectAll
     * @brief : 완불 처리 저장 
     * @remark
     * @Create Date: 2021. 4. 12
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 12.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "saveDefectAll.do")
    public View saveDefectAll(UiMapDto dto, Model model) throws Exception {
   	 System.out.println("lucky saveDefectAll ************* !!!");
        service.saveDefectAll(dto);
        return apply(dto, model);
    }  
    
    /**
     * @fn :  saveDefectLot
     * @brief : Lot 별 불량 저장
     * @remark
     * @Create Date: 2021. 4. 12
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 12.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "saveDefectLot.do")
    public View saveDefectLot(UiMapDto dto, Model model) throws Exception {
   	 System.out.println("lucky saveDefectLot ************* !!!");
        service.saveDefectLot(dto);
        return apply(dto, model);
    }  
    
    
    
}
