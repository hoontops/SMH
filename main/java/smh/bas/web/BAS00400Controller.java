package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00400Controller
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
@RequestMapping(value = "/bas00400")
public class BAS00400Controller extends AbstractWebController {

    @Autowired
    private BAS00400Service service;

    /**
    * @fn : selectAreaList
    * @brief : 작업장 조회
    * @remark
    * @Create Date: 2021. 2. 24
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 24.       sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectAreaList.do")
    public View selectAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectAreaList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectResourceList
    * @brief 		: 자원조회
    * @Method Name : selectResourceList
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
    @RequestMapping(value = "selectResourceList.do")
    public View selectResourceList(UiMapDto dto, Model model) throws Exception {
        service.selectResourceList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectAreaTreeList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectAreaTreeList
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
    @RequestMapping(value = "selectAreaTreeList.do")
    public View selectAreaTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectAreaTreeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: saveArea
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveArea
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 25.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveArea.do")
    public View saveArea(UiMapDto dto, Model model) throws Exception {    	
        service.saveArea(dto);
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
     *   2021. 8. 5.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectCheckLot.do")
    public View selectCheckLot(UiMapDto dto, Model model) throws Exception {
        service.selectCheckLot(dto);
        return apply(dto, model);
    }
   }