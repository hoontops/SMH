package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM08100Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM08100Controller
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 30.    김기수     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm08100")
public class PCM08100Controller extends AbstractWebController {

    @Autowired
    private PCM08100Service service;

    /**
    * @fn :   
    * @brief : 포장인계
    * @remark
    * @Create Date: 2021. 3. 24
    * @Author: 김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 30.  김기수     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotBoxPackingSendList.do")
    public View selectLotBoxPackingSendList(UiMapDto dto, Model model) throws Exception {
        service.selectLotBoxPackingSendList(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectSendLotDetail.do")
    public View selectSendLotDetail(UiMapDto dto, Model model) throws Exception {
        service.selectSendLotDetail(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectPackingSendList.do")
    public View selectPackingSendList(UiMapDto dto, Model model) throws Exception {
        service.selectPackingSendList(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "saveSendPackingLot.do")
    public View saveSendPackingLot(UiMapDto dto, Model model) throws Exception {
        service.saveSendPackingLot(dto);
        return apply(dto, model);
    }
    
    
    
}
