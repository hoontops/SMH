package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS01500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01500Controller
* @Company: Built1
* @Create Date: 2021. 4. 12
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01500")
public class BAS01500Controller extends AbstractWebController {

    @Autowired
    private BAS01500Service service;

    /**
    * @fn 			: selectUserList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUserList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectUserList.do")
    public View selectUserList(UiMapDto dto, Model model) throws Exception {
        service.selectUserList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: selectAreaList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectAreaList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectAreaList.do")
    public View selectAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectAreaList(dto);
        return apply(dto, model);
    }

    /**
    * @fn 			: saveUserArea
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserArea
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveUserArea.do")
    public View saveUserArea(UiMapDto dto, Model model) throws Exception {    	
        service.saveUserArea(dto);
        return apply(dto, model);
    }
   }