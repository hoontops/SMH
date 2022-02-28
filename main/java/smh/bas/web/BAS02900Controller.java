package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02900Service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02900Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02900Controller
* @Company: Built1
* @Create Date: 2021.02.05
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.02.05.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02900")
public class BAS02900Controller extends AbstractWebController {

    @Autowired
    private BAS02900Service service;

    /**
    * @fn :  BOM Tree List
    * @brief : BOM tree 조회
    * @remark
    * @Create Date: 2021. 2. 3
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.02.05.       김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectBasBOMList.do")
    public View selectBasBOMList(UiMapDto dto, Model model) throws Exception {
        service.selectBasBOMList(dto);
        return apply(dto, model);
    }
    


    @RequestMapping(value = "selectProductInfo.do")
    public View selectGlovelValueInfo(UiMapDto dto, Model model) throws Exception {
        service.selectProductDEFInfo(dto);
        service.selectOpeRationResource(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectResource.do")
    public View selectResource(UiMapDto dto, Model model) throws Exception {
    	//System.out.println("------in to selectResource controller");
        service.selectResource(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectResourcePopup.do")
    public View selectResourcePopup(UiMapDto dto, Model model) throws Exception {
    	System.out.println("------in to selectResourcePopup controller");
        service.selectResourcePopup(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectDurableList.do")
    public View selectDurableList(UiMapDto dto, Model model) throws Exception {
    	System.out.println("------in to selectDurableList controller");
        service.selectDurableList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectDurablePopupList.do")
    public View selectDurablePopupList(UiMapDto dto, Model model) throws Exception {
    	System.out.println("------in to selectDurablePopupList controller");
        service.selectDurablePopupList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveBillOfResourceList.do")
    public View saveBillOfResourceList(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBillOfResourceList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveBillOfDurableList.do")
    public View saveBillOfDurableList(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBillOfDurableList(dto);
        return apply(dto, model);
    }
    
}
