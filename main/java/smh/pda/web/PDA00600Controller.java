package smh.pda.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pda.service.PDA00600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PDA00600Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PDA00600Controller
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
@RequestMapping(value = "/pda00600")
public class PDA00600Controller extends AbstractWebController {

    @Autowired
    private PDA00600Service service;

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
    @RequestMapping(value = "selectLotInfoByProcess.do")
    public View selectLotInfoByProcess(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoByProcess(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectLotListForSendCancel.do")
    public View selectLotListForSendCancel(UiMapDto dto, Model model) throws Exception {
        service.selectLotListForSendCancel(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectLotWorkCancelList.do")
    public View selectLotWorkCancelList(UiMapDto dto, Model model) throws Exception {
        service.selectLotWorkCancelList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectWipTransAreaList.do")
    public View selectWipTransAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectWipTransAreaList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectLotListForWorkEndCancel.do")
    public View selectLotListForWorkEndCancel(UiMapDto dto, Model model) throws Exception {
        service.selectLotListForWorkEndCancel(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectAreaListByAuthorityList.do")
    public View selectAreaListByAuthorityList(UiMapDto dto, Model model) throws Exception {
        service.selectAreaListByAuthorityList(dto);
        return apply(dto, model);
    }
    
}
