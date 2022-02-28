package com.nbdf.cmd.cm.cmsa.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmsa.service.CMSA01320Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nexacro17.xeni.export.impl.GridExportExcel;


/**
* @file: CMSA01320Controller.java
* @Package: com.nbdf.cmd.cm.cmsa.web  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSA01320Controller    
* @Company: Built1
* @Create Date: 2018 2018. 6. 21. 오후 5:52:47 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 6. 21.        Kang Jeong Gi     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsa01320/")
public class CMSA01320Controller extends AbstractWebController {

    @Autowired
    private CMSA01320Service service;
    
    /**
    * @fn : selectAtchFileList
    * @brief : (첨부)파일 다운로드 - 조회
    * @Method Name : selectAtchFileList
    * @remark
    * @Create Date: 2018 2018. 6. 21. 오후 5:52:54 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 21.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "selectAtchFileList.do")
    public View selectAtchFileList(UiMapDto dto, Model model) throws Exception {
        service.selectAtchFileList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectDrscInspectsDtlListExcel
     * @brief : 대용량 엑셀 다운로드
     * @Method Name : selectDrscInspectsDtlListExcel
     * @remark 
     * @Create Date: 2018.01.04 10:33:19
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.01.04.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectBigDataExcel.do")
    public View selectBigDataExcel(UiMapDto dto, Model model) throws Exception {
    	GridExportExcel exporter =  BigDataUtil.bigDataExporter(dto, "CMD");
    	if( exporter != null ) {
    		service.selectBigDataExcel(dto);
         }
         model.addAttribute("BIG_DATA_EXPORTER", exporter);
         return bigDataApply(dto, model);
    } 
    
    @RequestMapping(value = "checkSession.do")
    public View checkSession(UiMapDto dto, Model model) throws Exception {
    	return apply(dto, model);
    }
    
}