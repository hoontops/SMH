package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS02800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02800Controller
* @Company: Built1
* @Create Date: 2021. 4. 02
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 02.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas02800")
public class BAS02800Controller extends AbstractWebController {

    @Autowired
    private BAS02800Service service;

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
     *   2021. 4. 2.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectDurableList.do")
    public View selectDurableList(UiMapDto dto, Model model) throws Exception {
        service.selectDurableList(dto);
        return apply(dto, model);
    }
    
    
   }