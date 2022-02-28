package com.nbdf.cmd.cm.cmsl.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmsl.service.CMSL02200Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;


/**
* @file: CMSL02200Controller.java
* @Package: com.nbdf.cmd.cm.cmsl.web  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSL02200Controller    
* @Company: Built1
* @Create Date: 2018 2018. 10. 25. 오전 10:26:24 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 10. 25.        Kang Jeong Gi     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsl02200")
public class CMSL02200Controller extends AbstractWebController {

    @Autowired
    private CMSL02200Service service;

    
    /**
    * @fn : selectCmdDynamicSqlAuth
    * @brief : 다양한 쿼리 권한등록 - 프로그램 - 조회
    * @Method Name : selectCmdDynamicSqlAuth
    * @remark
    * @Create Date: 2018 2018. 10. 25. 오전 10:27:11 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 25.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdDynamicSqlAuth.do")
    public View selectCmdDynamicSqlAuth(UiMapDto dto, Model model) throws Exception {        
        service.selectCmdDynamicSqlAuth(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveCmdDynamicSqlAuth
    * @brief : 다양한 쿼리 권한등록 - 프로그램 - 저장
    * @Method Name : saveCmdDynamicSqlAuth
    * @remark
    * @Create Date: 2018 2018. 10. 25. 오후 5:34:49 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 25.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "saveCmdDynamicSqlAuth.do")
    public View saveCmdDynamicSqlAuth(UiMapDto dto, Model model) throws Exception {        
        service.saveCmdDynamicSqlAuth(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectCmdDyamicSqlHeader
    * @brief : 다양한 쿼리 데이터 조회
    * @Method Name : selectCmdDyamicSqlHeader
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오전 11:22:45 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 26.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdDyamicSqlHeader.do")
    public View selectCmdDyamicSqlHeader(UiMapDto dto, Model model) throws Exception {        
        service.selectCmdDyamicSqlHeader(dto);
        return apply(dto, model);
    }
}
