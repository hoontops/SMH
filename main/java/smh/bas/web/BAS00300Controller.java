package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00300Controller
* @Company: Built1
* @Create Date: 2021.2.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 23.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00300")
public class BAS00300Controller extends AbstractWebController {

    @Autowired
    private BAS00300Service service;

    /**
    * @fn : selectUomClass
    * @brief : Uom Class 조회
    * @remark
    * @Create Date: 2021. 2. 16
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 16.       sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectUomClassList.do")
    public View selectUomClassList(UiMapDto dto, Model model) throws Exception {
        service.selectUomClassList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectUomList
    * @brief 		: UOM List
    * @Method Name : selectUomList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUomList.do")
    public View selectUomList(UiMapDto dto, Model model) throws Exception {
        service.selectUomList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectUomMapList
    * @brief 		: UOM Map List
    * @Method Name : selectUomMapList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUomMapList.do")
    public View selectUomMapList(UiMapDto dto, Model model) throws Exception {
        service.selectUomMapList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectUomMapDataList
    * @brief 		: UOM Group List
    * @Method Name : selectUomMapDataList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUomMapDataList.do")
    public View selectUomMapDataList(UiMapDto dto, Model model) throws Exception {
        service.selectUomMapDataList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectUomDetailList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUomDetailList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUomDetailList.do")
    public View selectUomDetailList(UiMapDto dto, Model model) throws Exception {
        service.selectUomDetailList(dto);
        return apply(dto, model);
    }
    

    /**
    * @fn 			: saveUomList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUomList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveUomList.do")
    public View saveUomList(UiMapDto dto, Model model) throws Exception {
    	
        service.saveUomList(dto);
        return apply(dto, model);
    }

}
