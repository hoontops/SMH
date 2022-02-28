package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BASCommonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: BASCommonController.java
* @Package		: smh.bas.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BASCommonController    
* @Company		: Built1
* @Create Date	: 2021. 2. 2. 오후 4:32:54 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 2.       sungmin.choe      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/basCommon")
public class BASCommonController extends AbstractWebController {

    @Autowired
    private BASCommonService service;


    /**
    * @fn : selectCustomQuery
    * @brief : 기준관리 공통SQL 조회용 메소드 
    * @Method Name : selectCustomQuery
    * @remark
    * @Create Date: 2021 2021. 2. 2. 오후 4:33:38 
    * @Author: sungmin.choe
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 2.        sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectCustomQuery.do")
    public View selectCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectCustomQuery(dto);
        return apply(dto, model);
    }

}
