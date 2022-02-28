package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM02700Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02700Controller
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02700")
public class PCM02700Controller extends AbstractWebController {

    @Autowired
    private PCM02700Service service;

    /**
    * @fn :   
    * @brief : 인수취소
    * @remark
    * @Create Date: 2021. 3. 24
    * @Author: 김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 24.  김기수     최초  생성
     *
    */ 


    @RequestMapping(value = "selectLotListForSendCancel.do")
    public View selectLotListForSendCancel(UiMapDto dto, Model model) throws Exception {
        service.selectLotListForSendCancel(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "savePcmSendCancelLot.do")
    public View savePcmSendCancelLot(UiMapDto dto, Model model) throws Exception {
        service.savePcmSendCancelLot(dto);
        return apply(dto, model);
    }
    
    
}
