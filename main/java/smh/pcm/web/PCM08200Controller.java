package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM08200Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM08200Controller
* @Company: Built1
* @Create Date: 2021.5.13
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 13.    김기수     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm08200")
public class PCM08200Controller extends AbstractWebController {

    @Autowired
    private PCM08200Service service;

    /**
    * @fn :   
    * @brief : 포장인계취소
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
    @RequestMapping(value = "selectPackingLot.do")
    public View selectPackingLot(UiMapDto dto, Model model) throws Exception {
        service.selectPackingLot(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectLotListForBoxSendCancel.do")
    public View selectLotListForBoxSendCancel(UiMapDto dto, Model model) throws Exception {
        service.selectLotListForBoxSendCancel(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectLotListForBoxSendCancelBoxNo.do")
    public View selectLotListForBoxSendCancelBoxNo(UiMapDto dto, Model model) throws Exception {
        service.selectLotListForBoxSendCancelBoxNo(dto);
        return apply(dto, model);
    }
   
    
    @RequestMapping(value = "savePcmSendCancelLotForBoxPacking.do")
    public View savePcmSendCancelLotForBoxPacking(UiMapDto dto, Model model) throws Exception {
        service.savePcmSendCancelLotForBoxPacking(dto);
        return apply(dto, model);
    }
}
