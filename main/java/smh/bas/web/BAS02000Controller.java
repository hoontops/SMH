package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02000Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02000Controller
* @Company: Built1
* @Create Date: 2021.3.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 23.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02000")
public class BAS02000Controller extends AbstractWebController {

    @Autowired
    private BAS02000Service service;

    /**
    * @fn 			: selectProductInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 23.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectProductInfo.do")
    public View selectProductInfo(UiMapDto dto, Model model) throws Exception {
        service.selectProductInfo(dto);
        return apply(dto, model);
    }
    

    /**
    * @fn 			: selectApplicationList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectApplicationList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectApplicationList.do")
    public View selectApplicationList(UiMapDto dto, Model model) throws Exception {
        service.selectApplicationList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: GetPlatingTypeSegmentList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetPlatingTypeSegmentList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetPlatingTypeSegmentList.do")
    public View GetPlatingTypeSegmentList(UiMapDto dto, Model model) throws Exception {
        service.GetPlatingTypeSegmentList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: GetPlatingTypeSegment
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetPlatingTypeSegment
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 26.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetPlatingTypeSegment.do")
    public View GetPlatingTypeSegment(UiMapDto dto, Model model) throws Exception {
        service.GetPlatingTypeSegment(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: GetPlatingTypeSegmentLInspist
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetPlatingTypeSegmentLInspist
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 29.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetPlatingTypeSegmentLInspist.do")
    public View GetPlatingTypeSegmentLInspist(UiMapDto dto, Model model) throws Exception {
        service.GetPlatingTypeSegmentLInspist(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: GetToolTypeByClassId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolTypeByClassId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetToolTypeByClassId.do")
    public View GetToolTypeByClassId(UiMapDto dto, Model model) throws Exception {
        service.GetToolTypeByClassId(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: GetToolByItemList1
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolByItemList1
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetToolByItemList1.do")
    public View GetToolByItemList1(UiMapDto dto, Model model) throws Exception {
        service.GetToolByItemList1(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: GetToolByItemList2
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolByItemList2
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetToolByItemList2.do")
    public View GetToolByItemList2(UiMapDto dto, Model model) throws Exception {
        service.GetToolByItemList2(dto);
        return apply(dto, model);
    }
        
    /**
    * @fn 			: GetToolByItemList3
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolByItemList3
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "GetToolByItemList3.do")
    public View GetToolByItemList3(UiMapDto dto, Model model) throws Exception {
        service.GetToolByItemList3(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveItemSpec
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveItemSpec
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveItemSpec.do")
    public View saveItemSpec(UiMapDto dto, Model model) throws Exception {    	
        service.saveItemSpec(dto);
        return apply(dto, model);
    }
    
    
   }