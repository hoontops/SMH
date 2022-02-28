package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file			: BAS01700Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01700Controller    
* @Company		: Built1
* @Create Date	: 2021. 2. 10. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 2. 10.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01700")
public class BAS01700Controller extends AbstractWebController {

    @Autowired
    private BAS01700Service service;

    /**
    * @fn 			: selectBasGovernanceList
    * @brief 		: 모델등록 및 진행현황 조회 
    * @Method Name : selectBasGovernanceList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 10.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectBasGovernanceList.do")
    public View selectBasGovernanceList(UiMapDto dto, Model model) throws Exception {
        service.selectBasGovernanceList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: saveBasGovernance
    * @brief 		: 모델등록 및 진행현황 저장
    * @Method Name : saveBasGovernance
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 10.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveBasGovernance.do")
    public View saveBasGovernance(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBasGovernance(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectGovernanceApprovalList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectGovernanceApprovalList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 19.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectGovernanceApprovalList.do")
    public View selectGovernanceApprovalList(UiMapDto dto, Model model) throws Exception {
        service.selectGovernanceApprovalList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "requestGovernance.do")
    public View requestGovernance(UiMapDto dto, Model model) throws Exception {
    	
        service.requestGovernance(dto);
        return apply(dto, model);
    }
}
