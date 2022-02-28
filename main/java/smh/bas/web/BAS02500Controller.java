package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02500Controller
* @Company: Built1
* @Create Date: 2021. 4. 13
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 13.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02500")
public class BAS02500Controller extends AbstractWebController {

    @Autowired
    private BAS02500Service service;

    /**
    * @fn 			: selectRcList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectRcList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 13.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectRcList.do")
    public View selectRcList(UiMapDto dto, Model model) throws Exception {
        service.selectRcList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectChangeNoId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectChangeNoId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 13.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectChangeNoId.do")
    public View selectChangeNoId(UiMapDto dto, Model model) throws Exception {
        service.selectChangeNoId(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectRoutingList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectRoutingList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 13.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectRoutingList.do")
    public View selectRoutingList(UiMapDto dto, Model model) throws Exception {
        service.selectRoutingList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectRoutingDetailList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectRoutingDetailList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 13.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectRoutingDetailList.do")
    public View selectRoutingDetailList(UiMapDto dto, Model model) throws Exception {
        service.selectRoutingDetailList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveRunningChange
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveRunningChange
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 14.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveRunningChange.do")
    public View saveRunningChange(UiMapDto dto, Model model) throws Exception {
    	
        service.saveRunningChange(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectGovernanceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectGovernanceData
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 14.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectGovernanceData.do")
    public View selectGovernanceData(UiMapDto dto, Model model) throws Exception {
        service.selectGovernanceData(dto);
        return apply(dto, model);
    }
   }