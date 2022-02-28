package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02100Controller
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 08.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02100")
public class BAS02100Controller extends AbstractWebController {

    @Autowired
    private BAS02100Service service;

    /**
    * @fn 			: selectTreeList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectTreeList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 08.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectTreeList.do")
    public View selectTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectTreeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectDurableList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectDurableList
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
    @RequestMapping(value = "selectDurableListPop.do")
    public View selectDurableListPop(UiMapDto dto, Model model) throws Exception {
        service.selectDurableListPop(dto);
        return apply(dto, model);
    }
    
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
    * @fn 			: selectProductDetail
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductDetail
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
    @RequestMapping(value = "selectProductDetail.do")
    public View selectProductDetail(UiMapDto dto, Model model) throws Exception {
        service.selectProductDetail(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectDurablePopList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectDurablePopList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 9.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectDurablePopList.do")
    public View selectDurablePopList(UiMapDto dto, Model model) throws Exception {
        service.selectDurablePopList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveRouting
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveRouting
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 11.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveRouting.do")
    public View saveRouting(UiMapDto dto, Model model) throws Exception {    	
        service.saveRouting(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCheckRoutingList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCheckRoutingList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 11.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCheckRoutingList.do")
    public View selectCheckRoutingList(UiMapDto dto, Model model) throws Exception {
        service.selectCheckRoutingList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectProcessSegmentExtPupop
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessSegmentExtPupop
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
    @RequestMapping(value = "selectProcessSegmentExtPupop.do")
    public View selectProcessSegmentExtPupop(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentExtPupop(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveItemWarehouse
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveItemWarehouse
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 11.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveItemWarehouse.do")
    public View saveItemWarehouse(UiMapDto dto, Model model) throws Exception {
        service.saveItemWarehouse(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: copyRouting
    * @brief 		: 함수 간략한 설명 
    * @Method Name : copyRouting
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 18.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "copyRouting.do")
    public View copyRouting(UiMapDto dto, Model model) throws Exception {    	
        service.copyRouting(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: uploadRoutingExcel
    * @brief 		: 함수 간략한 설명 
    * @Method Name : uploadRoutingExcel
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 18.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "uploadRoutingExcel.do")
    public View uploadRoutingExcel(UiMapDto dto, Model model) throws Exception {
        service.uploadRoutingExcel(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: checkAOI
    * @brief 		: 함수 간략한 설명 
    * @Method Name : checkAOI
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 7. 6.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "checkAOI.do")
    public View checkAOI(UiMapDto dto, Model model) throws Exception {
        service.checkAOI(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCheckLot
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCheckLot
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 7. 6.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCheckLot.do")
    public View selectCheckLot(UiMapDto dto, Model model) throws Exception {
        service.selectCheckLot(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: checkWeek
    * @brief 		: 함수 간략한 설명 
    * @Method Name : checkWeek
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 7. 13.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "checkWeek.do")
    public View checkWeek(UiMapDto dto, Model model) throws Exception {
        service.checkWeek(dto);
        return apply(dto, model);
    }
   }