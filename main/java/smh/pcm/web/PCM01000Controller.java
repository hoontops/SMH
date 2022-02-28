package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01000Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00500Controller
* @Company: Built1
* @Create Date: 2021.03.24
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 03. 08.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm01000")
public class PCM01000Controller extends AbstractWebController {

    @Autowired
    private PCM01000Service service;

    /**
    * @fn :  selectProductionOrderListForReInput
    * @brief : 재투입대상 수주번호 조회
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일                 수정자      수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectProductionOrderListForReInput.do")
    public View selectProductionOrderListForReInput(UiMapDto dto, Model model) throws Exception {
        service.selectProductionOrderListForReInput(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  selectProductDefinitionListByProductionOrder_YP
    * @brief : 품목조회
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectProductDefinitionListByProductionOrder_YP.do")
    public View selectProductDefinitionListByProductionOrder_YP(UiMapDto dto, Model model) throws Exception {
        service.selectProductDefinitionListByProductionOrder_YP(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn :  selectReinputReason
    * @brief : 재투입사유 조회
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectReinputReason.do")
    public View selectReinputReason(UiMapDto dto, Model model) throws Exception {
        service.selectReinputReason(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn :  getLotId
    * @brief :LOT 투입시 생성된 LOTID를 가져온다
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value="getLotStartNo.do")
    public View getLotStartNo(UiMapDto dto, Model model) throws Exception {
        service.getLotStartNo(dto);
        return apply(dto, model);
    }     
 
    /**
    * @fn :  selectReInputReason
    * @brief : 재투입사유 조회
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value="selectReInputReason.do")
    public View selectReInputReason(UiMapDto dto, Model model) throws Exception {
        service.selectReInputReason(dto);
        return apply(dto, model);
    }  
    
    /**
    * @fn :  saveReInputLot
    * @brief : LOT재투입 저장
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value="saveReInputLot.do")
    public View saveReInputLot(UiMapDto dto, Model model) throws Exception {
        service.saveReInputLot(dto);
        return apply(dto, model);
    }    
}
