package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file			: BAS01800Controller.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01800Controller    
* @Company		: Built1
* @Create Date	: 2021. 2. 17. 오전 9:50:07 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        
 *     수정내용
 *   ------------  ------       ----------
 *   2021. 2. 17.   sungmin.choe  최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01800")
public class BAS01800Controller extends AbstractWebController {

    @Autowired
    private BAS01800Service service;

    /**
    * @fn 			: selectBasItemMasterList
    * @brief 		: 마스터품목(사양) 조회 
    * @Method Name : selectBasItemMasterList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 17.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectBasItemMasterList.do")
    public View selectBasItemMasterList(UiMapDto dto, Model model) throws Exception {
        service.selectBasItemMasterList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: saveBasItemMaster
    * @brief 		: 마스터품목(사양) 저장
    * @Method Name : saveBasItemMaster
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 17.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveBasItemMaster.do")
    public View saveBasItemMaster(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBasItemMaster(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: copyValidationBasItemMaster
    * @brief 		: 마스터품목(사양) 복사 검증
    * @Method Name : saveBasItemMaster
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 18.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "copyValidationBasItemMaster.do")
    public View copyValidationBasItemMaster(UiMapDto dto, Model model) throws Exception {
    	
        service.copyValidationBasItemMaster(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: copyBasItemMaster
    * @brief 		: 마스터품목(사양) 복사
    * @Method Name : saveBasItemMaster
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 18.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "copyBasItemMaster.do")
    public View copyBasItemMaster(UiMapDto dto, Model model) throws Exception {
    	
        service.copyBasItemMaster(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectCompareSemiProductByProduct
    * @brief 		: 반제품 채번 전 검증
    * @Method Name : selectBasItemMasterList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 17.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCompareSemiProductByProduct.do")
    public View selectCompareSemiProductByProduct(UiMapDto dto, Model model) throws Exception {
        service.selectCompareSemiProductByProduct(dto);
        return apply(dto, model);
    }
}
