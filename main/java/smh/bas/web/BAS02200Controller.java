package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02200Controller
* @Company: Built1
* @Create Date: 2021. 3. 15
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02200")
public class BAS02200Controller extends AbstractWebController {

    @Autowired
    private BAS02200Service service;

    /**
    * @fn 			: selectProductDEFInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductDEFInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 8.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectProductDEFInfo.do")
    public View selectProductDEFInfo(UiMapDto dto, Model model) throws Exception {
        service.selectProductDEFInfo(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectOperationSpecList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectOperationSpecList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectOperationSpecList.do")
    public View selectOperationSpecList(UiMapDto dto, Model model) throws Exception {
        service.selectOperationSpecList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveOperationSpec
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveOperationSpec
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 12.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveOperationSpec.do")
    public View saveOperationSpec(UiMapDto dto, Model model) throws Exception {    	
        service.saveOperationSpec(dto);
        return apply(dto, model);
    }
   }