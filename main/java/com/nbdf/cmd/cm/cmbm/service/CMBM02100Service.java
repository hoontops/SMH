package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMBM02100Service.java
* @Package: com.drens.dr.CMBM.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM02100Service    
* @Company: Built1
* @Create Date: 2018. 5. 2. 오후 1:48:49 
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
public interface CMBM02100Service {

    /**
    * @fn : selectBatchProgramRunList
    * @brief : 배치프로그램 실행 리스트 조회
    * @Method Name : selectBatchProgramRunList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:48:44 
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
    public void selectBatchProgramRunList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectCmbmBatchJobLogs
    * @brief : 배치JOB로그 조회
    * @Method Name : selectCMBMBatchJobLogs
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:48:04 
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
    public void selectCmbmBatchJobLogs(UiMapDto dto) throws Exception;

    /**
    * @fn : executeBatchRunCancel
    * @brief : 배치실행 취소 
    * @Method Name : executeBatchRunCancel
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:47:31 
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
    public void executeBatchRunCancel(UiMapDto dto) throws Exception;
    public void executeBatchDisable(UiMapDto dto) throws Exception;
    public void executeBatchEnable(UiMapDto dto) throws Exception;
    public void executeBatchDrop(UiMapDto dto) throws Exception;
    public void selectBatchScheduleList(UiMapDto dto) throws Exception;
    public void executeBatchModifyJob(UiMapDto dto) throws Exception;
       
    /**
    * @fn : selectBatchProgramList
    * @brief : 배치 프로그램 리스트 조회 
    * @Method Name : selectBatchProgramList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:46:40 
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
    public void selectBatchProgramList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBatchParamsList
    * @brief : 배치 파라미터 리스트 조회 
    * @Method Name : selectBatchParamsList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:46:09 
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
    public void selectBatchParamsList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectUserQryList
    * @brief : 사용자 SQL 실행
    * @Method Name : selectUserQryList
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:51:26 
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
    public void selectUserQryList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : executeBatchJobRun
    * @brief : 배치실행 
    * @Method Name : executeBatchJobRun
    * @remark
    * @Create Date: 2018. 5. 2. 오후 1:45:30 
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
    public void executeBatchJobRun(UiMapDto dto) throws Exception;
}
