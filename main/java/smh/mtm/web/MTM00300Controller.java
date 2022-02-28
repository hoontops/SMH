package smh.mtm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mtm.service.MTM00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: MTM00300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: MTM00300Controller
* @Company: IFC
* @Create Date: 2021.5.7
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 7.    유창균     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/mtm00300")
public class MTM00300Controller extends AbstractWebController {

    @Autowired
    private MTM00300Service service;

    /**
    * @fn : selectMtmMOFRList
    * @brief : 자재불출요청목록
    * @remark
    * @Create Date: 2021. 5. 7
    * @Author:  유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 5. 7.     유창균     최초  생성
     *
    */
    @RequestMapping(value = "selectMtmMtrOutFlowRequestList.do")
    public View selectMtmMtrOutFlowRequestList(UiMapDto dto, Model model) throws Exception {
        service.selectMtmMtrOutFlowRequestList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectMaterialPopupList.do")
    public View selectMaterialPopupList(UiMapDto dto, Model model) throws Exception {
        service.selectMaterialPopupList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectMtmMtrOutFlowRequest
    * @brief : 자재불출요청자재내역
    * @remark
    * @Create Date: 2021. 5. 7
    * @Author:  유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 5. 7.     유창균     최초  생성
     *
    */    
    
    @RequestMapping(value = "selectMtmMtrOutFlowRequest.do")
    public View selectMtmMtrOutFlowRequest(UiMapDto dto, Model model) throws Exception {
        service.selectMtmMtrOutFlowRequest(dto);
        return apply(dto, model);
    }     
    
    /**
     * @fn :  saveMtmMtrOutFlowRequest 
     * @brief : 단가 테이블 저장
     * @remark
     * @Create Date: 2021. 5. 18
     * @Author: 유창균
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  18.   유창균     최초  생성
      *
     */ 
    @RequestMapping(value = "saveMtmMtrOutFlowRequest.do")
    public View saveMtmMtrOutFlowRequest(UiMapDto dto, Model model) throws Exception {
        service.saveMtmMtrOutFlowRequest(dto);
        return apply(dto, model);
    }
        
}
