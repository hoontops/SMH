package com.nbdf.cmd.cm.cmsm.web;

import com.nbdf.cmd.cm.cmsm.service.CMSM01000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nexacro17.xeni.export.impl.GridExportExcel;



/**
* @file: CMSM01000Controller.java
* @Package: com.nbdf.cmd.cm.cmsm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSM01000Controller
* @Company: Built1
* @Create Date: 2015. 4. 27. 오전 10:52:30
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 27.        JIn Sung Ha     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsm01000")
public class CMSM01000Controller extends AbstractWebController {

    @Autowired
    private CMSM01000Service service;

    /**
    * @fn : selectSessionList
    * @brief : 개인정보 조회로그 조회
    * @Method Name : selectSessionList
    * @Create Date: 2015. 4. 21. 오전 9:51:20
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: VIEW
    * @throws : Exception
    */
    @RequestMapping(value = "selectIvlList.do")
    public View selectSessionList(UiMapDto dto, Model model) throws Exception {
        service.selectIvlList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectIvlList4Excel.do")
    public View selectIvlList4Excel(UiMapDto dto, Model model) throws Exception {
    	GridExportExcel exporter =  BigDataUtil.bigDataExporter(dto, "CMD");
    	if( exporter != null ) {
         	service.selectIvlList4Excel(dto);
         }
         model.addAttribute("BIG_DATA_EXPORTER", exporter); 
         return bigDataApply(dto, model);
    }
    
  

}
