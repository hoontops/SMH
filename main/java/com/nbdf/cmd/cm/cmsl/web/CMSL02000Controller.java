package com.nbdf.cmd.cm.cmsl.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmsl.service.CMSL02000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nexacro17.xeni.export.impl.GridExportExcel;


/**
* @file: CMSL02000Controller.java
* @Package: com.nbdf.cmd.cm.cmsl.web  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSL02000Controller    
* @Company: Built1
* @Create Date: 2018 2018. 5. 25. 오후 5:03:25 
* @Author: Kang Jeong gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 5. 25.        Kang Jeong gi     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsl02000")
public class CMSL02000Controller extends AbstractWebController {

    @Autowired
    private CMSL02000Service service;

    
    /**
    * @fn : selectcmdDynamicSqlList
    * @brief : 다양한 쿼리 실행 - 조회
    * @Method Name : selectcmdDynamicSqlList
    * @remark
    * @Create Date: 2018 2018. 5. 25. 오후 5:01:31 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 25.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "selectcmdDynamicSqlList.do")
    public View selectcmdDynamicSqlList(UiMapDto dto, Model model) throws Exception {        
        service.selectcmdDynamicSqlList(dto);
        return apply(dto, model);
    }
       
    
    /**
    * @fn : saveDynamicData
    * @brief : 다양한 쿼리 실행 - 저장 
    * @Method Name : saveDynamicData
    * @remark
    * @Create Date: 2018 2018. 5. 28. 오전 10:53:37 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 28.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "saveDynamicData.do")
    public View saveDynamicData(UiMapDto dto, Model model) throws Exception {        
        service.saveDynamicData(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveDynamicData
    * @brief : 다양한 쿼리 실행 - 출력명칭 일괄생성
    * @Method Name : saveDynamicData
    * @remark
    * @Create Date: 2018 2018. 5. 28. 오전 11:51:22 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 28.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "executeDynamicSqlPrintAlias.do")
    public View executeDynamicSqlPrintAlias(UiMapDto dto, Model model) throws Exception {        
        service.executeDynamicSqlPrintAlias(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : executeDynamicSqlValidation
    * @brief : 다양한 쿼리 실행 - SQL 유효성 검사 
    * @Method Name : executeDynamicSqlValidation
    * @remark
    * @Create Date: 2018 2018. 5. 29. 오후 4:39:34 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 29.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "executeDynamicSqlValidation.do")
    public View executeDynamicSqlValidation(UiMapDto dto, Model model) throws Exception {        
        service.executeDynamicSqlValidation(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : executeDynamicSqlRun
    * @brief : 다양한 쿼리 실행 - 쿼리 실행 버튼
    * @Method Name : executeDynamicSqlRun
    * @remark
    * @Create Date: 2018 2018. 5. 29. 오후 6:57:01 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 29.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "executeDynamicSqlRun.do")
    public View executeDynamicSqlRun(UiMapDto dto, Model model) throws Exception {        
        service.executeDynamicSqlRun(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : executeDynamicSqlLov
    * @brief : 다양한 쿼리 실행 - LOV 쿼리 데이터 추출 
    * @Method Name : executeDynamicSqlLov
    * @remark
    * @Create Date: 2018 2018. 5. 31. 오전 9:35:32 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 31.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "executeDynamicSqlLov.do")
    public View executeDynamicSqlLov(UiMapDto dto, Model model) throws Exception {        
        service.executeDynamicSqlLov(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : executeDynamicSqlView
    * @brief : 다양한 쿼리 실행 - 쿼리 문장 보기 
    * @Method Name : executeDynamicSqlView
    * @remark
    * @Create Date: 2018 2018. 5. 31. 오후 4:00:08 
    * @Author: Kang Jeong gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 31.        Kang Jeong gi     최초  생성
     *
    */
    @RequestMapping(value = "executeDynamicSqlView.do")
    public View executeDynamicSqlView(UiMapDto dto, Model model) throws Exception {        
        service.executeDynamicSqlView(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : deleteDynamicDataAll
    * @brief : 다양한 쿼리 실행 - 전체 삭제 
    * @Method Name : deleteDynamicDataAll
    * @remark
    * @Create Date: 2018 2018. 8. 13. 오후 3:23:50 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 8. 13.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "deleteDynamicDataAll.do")
    public View deleteDynamicDataAll(UiMapDto dto, Model model) throws Exception {        
        service.deleteDynamicDataAll(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : getDateTime
     * @brief : PC 현재 날짜 조회 
     * @Method Name : getDateTime
     * @remark
     * @Create Date: 2018 2018. 10. 25. 오후 1:26:16 
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
     @RequestMapping(value = "getDateTime.do")
     public View getDateTime(UiMapDto dto, Model model) throws Exception {        
     	service.getDateTime(dto);
     	return apply(dto, model);
     }
     
     @RequestMapping(value = "selectBigDataExcel.do")
     public View selectBigDataExcel(UiMapDto dto, Model model) throws Exception {
     	GridExportExcel exporter =  BigDataUtil.bigDataExporter(dto, "CMD");
     	if( exporter != null ) {
     		service.selectBigDataExcel(dto);
          }
          model.addAttribute("BIG_DATA_EXPORTER", exporter);
          return bigDataApply(dto, model);
     } 
     
}
