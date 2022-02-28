package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02400Controller
* @Company: Built1
* @Create Date: 2021. 3. 31
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 31.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02400")
public class BAS02400Controller extends AbstractWebController {

    @Autowired
    private BAS02400Service service;

    /**
    * @fn 			: selectSaleOrderApprovalSearch
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectSaleOrderApprovalSearch
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 31.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectSaleOrderApprovalSearch.do")
    public View selectSaleOrderApprovalSearch(UiMapDto dto, Model model) throws Exception {
        service.selectSaleOrderApprovalSearch(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCustomQuery
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 1.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCustomQuery.do")
    public View selectCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectCustomQuery(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveSalesOrderApproval
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveSalesOrderApproval
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 2.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveSalesOrderApproval.do")
    public View saveSalesOrderApproval(UiMapDto dto, Model model) throws Exception {
        service.saveSalesOrderApproval(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: approvalSalesOrderApproval
    * @brief 		: 함수 간략한 설명 
    * @Method Name : approvalSalesOrderApproval
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 2.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "approvalSalesOrderApproval.do")
    public View approvalSalesOrderApproval(UiMapDto dto, Model model) throws Exception {
        service.saveApprovalSalesOrderApproval(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: cancelSalesOrderApproval
    * @brief 		: 함수 간략한 설명 
    * @Method Name : cancelSalesOrderApproval
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 2.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "cancelSalesOrderApproval.do")
    public View cancelSalesOrderApproval(UiMapDto dto, Model model) throws Exception {
        service.saveCancelSalesOrderApproval(dto);
        return apply(dto, model);
    }
   }