package com.nbdf.cmd.cm.cmbs.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface CMBS01100Service {

    /**
    * @fn : selectBatchList
    * @brief : 배치프로그램관리(조회)
    * @Method Name : selectBatchList
    * @Create Date: 2015. 6. 23. 오전 9:14:38
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: viod
    * @throws : Exception
    */
    public void selectBatchList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBatch
    * @brief : 배치프로그램 저장(수정/신규/삭제)
    * @Method Name : saveBatch
    * @Create Date: 2015. 6. 24. 오후 7:21:03
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: viod
    * @throws : Exception
    */
    public void saveBatch(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBatchParamList
    * @brief : 배치 파라미터 조회
    * @Method Name : selectBatchParamList
    * @Create Date: 2015. 6. 29. 오전 11:13:54
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void selectBatchParamList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBatchParam
    * @brief : 배치 파라미터 저장
    * @Method Name : saveBatchParam
    * @Create Date: 2015. 6. 29. 오후 1:17:37
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void saveBatchParam(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBatchWKSList
    * @brief : 배치작업 목록
    * @Method Name : selectBatchWKSList
    * @Create Date: 2015. 6. 30. 오후 3:06:04
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void selectBatchWKSList(UiMapDto dto) throws Exception;

    /**
    * @fn : deleteBatchWKS
    * @brief : 배치작업 삭제
    * @Method Name : deleteBatchWKS
    * @Create Date: 2015. 7. 1. 오후 3:18:14
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void deleteBatchWKS(UiMapDto dto) throws Exception;

    /**
    * @fn : insertBatchWKS
    * @brief : 배치작업 등록
    * @Method Name : saveBatchWks
    * @Create Date: 2015. 7. 3. 오후 1:23:23
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void insertBatchWKS(UiMapDto dto) throws Exception;

    /**
    * @fn : updateBatchWKS
    * @brief : 배치작업 수정
    * @Method Name : saveBatchWks
    * @Create Date: 2015. 7. 3. 오후 1:23:23
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void updateBatchWKS(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBatchWksDupCheck
    * @brief : 배치 작업 목록 중복 확인
    * @Method Name : selectBatchWksDupCheck
    * @Create Date: 2015. 7. 13. 오전 9:23:56
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void selectBatchWksDupCheck(UiMapDto dto) throws Exception;


    public void deleteBatchDupWKS(UiMapDto dto) throws Exception;

    /**
    * @fn : executeSampleBatch
    * @brief : 배치 샘플 실행 함수
    * @Method Name : executeSampleBatch
    * @Create Date: 2015. 7. 13. 오전 9:32:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void executeSampleBatch(UiMapDto dto);
    /**
    * @fn : executeSampleBatch
    * @brief : 배치 샘플 실행 함수
    * @Method Name : executeSampleBatch
    * @Create Date: 2015. 7. 13. 오전 9:32:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void executeSampleBatch1(UiMapDto dto);
    /**
    * @fn : executeThreadSampleBatch
    * @brief : 배치 샘플 실행 함수
    * @Method Name : executeSampleBatch
    * @Create Date: 2015. 7. 13. 오전 9:32:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    public void executeThreadSampleBatch(UiMapDto dto);

    public void executeSampleBatch2(UiMapDto dto);

    /**
    * @fn : selectBatchResultList
    * @brief : 배치 실행 결과 조회
    * @Method Name : selectBatchResultList
    * @Create Date: 2015. 7. 17. 오후 1:19:04
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @throws : Exception
    */
    public void selectBatchResultList(UiMapDto dto) throws Exception;

    public void selectBatchResultDetailsList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectStoredProcedures
    * @brief : 저장된 프로시져를 검색
    * @Method Name : selectStoredProcedures
    * @remark
    * @Create Date: 2015 2015. 7. 31. 오후 1:32:26
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 7. 31.        진성하     최초  생성
     *
    */
    public void selectStoredProcedures(UiMapDto dto) throws Exception;

    /**
    * @fn : selectStoredProcedures
    * @brief : Cron 문법 검증
    * @Method Name : selectStoredProcedures
    * @remark
    * @Create Date: 2015 2015. 7. 31. 오후 1:32:26
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 7. 31.        진성하     최초  생성
     *
    */
    public void isvalidCronExpress(UiMapDto dto) throws Exception;

    public void selectBatchResultListExcel(UiMapDto dto) throws Exception;


    /**
    * @fn : selectCmdBatPgmSmsList
    * @brief : SMS설정 조회
    * @Method Name : selectCmdBatPgmSmsList
    * @Create Date: 2015. 6. 23. 오전 9:14:38
    * @Author: JinSungHa
    * @param: UiMapDto dto
    * @return: viod
    * @throws : Exception
    */
    public void selectCmdBatPgmSmsList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveCmdBatPgmSms
    * @brief : 배치프로그램 저장(수정/신규/삭제)
    * @Method Name : saveCmdBatPgmSms
    * @Create Date: 2015. 6. 24. 오후 7:21:03
    * @Author: JinSungHa
    * @param: UiMapDto dto
    * @return: viod
    * @throws : Exception
    */
    public void saveCmdBatPgmSms(UiMapDto dto) throws Exception;

    //public Map<String, Object> selectFndLobsFile(String fileId, String dbms) throws Exception;

}
