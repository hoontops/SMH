package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00600Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00600Controller
* @Company: Built1
* @Create Date: 2021.3.03
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 03.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00600")
public class BAS00600Controller extends AbstractWebController {

    @Autowired
    private BAS00600Service service;

    /**
    * @fn : selectStayingTimelist
    * @brief : 공정별 체공시간 조회
    * @remark
    * @Create Date: 2021. 3. 03
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 03.       sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectStayingTimelist.do")
    public View selectStayingTimelist(UiMapDto dto, Model model) throws Exception {
        service.selectStayingTimelist(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn 			: saveStayingTime
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveStayingTime
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 3.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveStayingTime.do")
    public View saveStayingTime(UiMapDto dto, Model model) throws Exception {    	
        service.saveStayingTime(dto);
        return apply(dto, model);
    }
   }