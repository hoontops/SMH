package com.nbdf.cmd.cm.cmsl.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: CMSL02000Service.java
* @Package: com.nbdf.cmd.cm.cmsl.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSL02000Service    
* @Company: Built1
* @Create Date: 2018 2018. 5. 25. 오후 5:03:08 
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
public interface CMSL02000Service {
    
     /**
    * @fn : selectcmdDynamicSqlList
    * @brief : 다양한 쿼리 실행 - 조회 
    * @Method Name : selectcmdDynamicSqlList
    * @remark
    * @Create Date: 2018 2018. 5. 25. 오후 5:00:40 
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
    public void selectcmdDynamicSqlList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : saveDynamicData
    * @brief : 다양한 쿼리 실행 - 저장
    * @Method Name : saveDynamicData
    * @remark
    * @Create Date: 2018 2018. 5. 28. 오전 10:53:24 
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
    public void saveDynamicData(UiMapDto dto) throws Exception;
    
    /**
    * @fn : executeDynamicSqlPrintAlias
    * @brief : 다양한 쿼리 실행 - 출력명칭 일괄생성
    * @Method Name : executeDynamicSqlPrintAlias
    * @remark
    * @Create Date: 2018 2018. 5. 28. 오전 11:51:50 
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
    public void executeDynamicSqlPrintAlias(UiMapDto dto) throws Exception;
    
    /**
    * @fn : executeDynamicSqlValidation
    * @brief : 다양한 쿼리 실행 - SQL 유효성 검사
    * @Method Name : executeDynamicSqlValidation
    * @remark
    * @Create Date: 2018 2018. 5. 29. 오후 4:39:20 
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
    public void executeDynamicSqlValidation(UiMapDto dto) throws Exception;
    
    /**
    * @fn : executeDynamicSqlRun
    * @brief : 다양한 쿼리 실행 - 쿼리 실행 버튼
    * @Method Name : executeDynamicSqlRun
    * @remark
    * @Create Date: 2018 2018. 5. 29. 오후 6:57:13 
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
    public void executeDynamicSqlRun(UiMapDto dto) throws Exception;
    
    /**
    * @fn : executeDynamicSqlLov
    * @brief : 다양한 쿼리 실행 - LOV 쿼리 데이터 추출 
    * @Method Name : executeDynamicSqlLov
    * @remark
    * @Create Date: 2018 2018. 5. 31. 오전 9:36:01 
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
    public void executeDynamicSqlLov(UiMapDto dto) throws Exception;
    
    /**
    * @fn : executeDynamicSqlView
    * @brief : 다양한 쿼리 실행 - 쿼리 문장 보기 
    * @Method Name : executeDynamicSqlView
    * @remark
    * @Create Date: 2018 2018. 5. 31. 오후 4:00:23 
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
    public void executeDynamicSqlView(UiMapDto dto) throws Exception;
    
    /**
    * @fn : deleteDynamicDataAll
    * @brief : 다양한 쿼리 실행 - 전체 삭제
    * @Method Name : deleteDynamicDataAll
    * @remark
    * @Create Date: 2018 2018. 8. 13. 오후 3:24:18 
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
    public void deleteDynamicDataAll(UiMapDto dto) throws Exception;
    
    /**
    * @fn : getDateTime
    * @brief : PC 현재 날짜 조회 
    * @Method Name : getDateTime
    * @remark
    * @Create Date: 2018 2018. 10. 25. 오후 1:59:48 
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
    public void getDateTime(UiMapDto dto) throws Exception;
    
    public void selectBigDataExcel(UiMapDto dto) throws Exception;     
    
}
