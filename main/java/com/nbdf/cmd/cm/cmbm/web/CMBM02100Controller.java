package com.nbdf.cmd.cm.cmbm.web;


import com.nbdf.cmd.cm.cmbm.service.CMBM02100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: CMBM02100Controller.java
* @Package: com.drens.dr.CMBM.web  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM02100Controller    
* @Company: Built1
* @Create Date: 2018. 5. 2. 오후 1:48:37 
* @Author: Built1
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일          수정자   수정내용
*   ------------  ------  ----------
*   2018. 5. 2.        Built1     최초  생성
*
*/
@Controller
@RequestMapping(value = "/cmbm02100")
public class CMBM02100Controller extends AbstractXWebController {

    @Autowired
    private CMBM02100Service service;

       
    /**
    * @fn : selectBatchProgramRunList
    * @brief : 배치프로그램 실행 리스트 조회
    * @Method Name : selectBatchProgramRunList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:48:30 
    * @Author: Built1
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 5. 2.        Built1     최초  생성
    *
    */
    @RequestMapping(value = "selectBatchProgramRunList.do")
    public View selectBatchProgramRunList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchProgramRunList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCmbmBatchJobLogs
    * @brief : 배치JOB로그 조회 
    * @Method Name : selectCmbmBatchJobLogs
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:47:57 
    * @Author: Built1
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 5. 2.        Built1     최초  생성
    *
    */
    @RequestMapping(value = "selectCmbmBatchJobLogs.do")
    public View selectCmbmBatchJobLogs(UiMapDto dto, Model model) throws Exception {
        service.selectCmbmBatchJobLogs(dto);
        return apply(dto, model);
    }

    /**
    * @fn : executeBatchRunCancel
    * @brief : 배치실행 취소 
    * @Method Name : executeBatchRunCancel
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:47:05 
    * @Author: Built1
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 5. 2.        Built1     최초  생성
    *
    */
    @RequestMapping(value = "executeBatchRunCancel.do")
    public View executeBatchRunCancel(UiMapDto dto, Model model) throws Exception {
    	service.executeBatchRunCancel(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "executeBatchDisable.do")
    public View executeBatchDisable(UiMapDto dto, Model model) throws Exception {
    	service.executeBatchDisable(dto);
    	return apply(dto, model);
    }

    @RequestMapping(value = "executeBatchEnable.do")
    public View executeBatchEnable(UiMapDto dto, Model model) throws Exception {
    	service.executeBatchEnable(dto);
    	return apply(dto, model);
    }

    @RequestMapping(value = "executeBatchDrop.do")
    public View executeBatchDrop(UiMapDto dto, Model model) throws Exception {
    	service.executeBatchDrop(dto);
    	return apply(dto, model);
    }
    @RequestMapping(value = "selectBatchScheduleList.do")
    public View selectBatchScheduleList(UiMapDto dto, Model model) throws Exception {
    	service.selectBatchScheduleList(dto);
    	return apply(dto, model);
    }
    @RequestMapping(value = "executeBatchModifyJob.do")
    public View executeBatchModifyJob(UiMapDto dto, Model model) throws Exception {
    	service.executeBatchModifyJob(dto);
    	return apply(dto, model);
    }
    /**
    * @fn : selectBatchProgramList
    * @brief : 배치 프로그램 리스트 조회
    * @Method Name : selectBatchProgramList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:46:33 
    * @Author: Built1
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 5. 2.        Built1     최초  생성
    *
    */
    @RequestMapping(value = "selectBatchProgramList.do")
    public View selectBatchProgramList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchProgramList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBatchParamsList
    * @brief : 배치 파라미터 리스트 조회 
    * @Method Name : selectBatchParamsList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:46:01 
    * @Author: Built1
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 5. 2.        Built1     최초  생성
    *
    */
    @RequestMapping(value = "selectBatchParamsList.do")
    public View selectBatchParamsList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchParamsList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectUserQryList")
    public View selectUserQryList(UiMapDto dto, Model model) throws Exception {
        service.selectUserQryList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : executeBatchJobRun
    * @brief : 배치실행
    * @Method Name : executeBatchJobRun
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:45:24 
    * @Author: Built1
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 5. 2.        Built1     최초  생성
    *
    */
    @RequestMapping(value = "executeBatchJobRun.do")
    public View executeBatchJobRun(UiMapDto dto, Model model) throws Exception {
    	service.executeBatchJobRun(dto);
    	return apply(dto, model);
    }
    
    
}
