package com.nbdf.cmd.cm.cmsl.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: CMSL02200Service.java
* @Package: com.nbdf.cmd.cm.cmsl.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSL02200Service    
* @Company: Built1
* @Create Date: 2018 2018. 10. 25. 오전 10:04:46 
* @Author: JinSungHa
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 10. 25.        Kang Jeong Gi     최초  생성
 *
*/
public interface CMSL02200Service {
        
    /**
    * @fn : selectcmdDynamicSqlList
    * @brief : 다양한 쿼리 권한등록 - 프로그램 - 조회
    * @Method Name : selectcmdDynamicSqlList
    * @remark
    * @Create Date: 2018 2018. 10. 25. 오전 10:04:58 
    * @Author: JinSungHa
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 25.        Kang Jeong Gi     최초  생성
     *
    */
    public void selectCmdDynamicSqlAuth(UiMapDto dto) throws Exception;
    
    /**
    * @fn : saveCmdDynamicSqlAuth
    * @brief : 다양한 쿼리 권한등록 - 프로그램 - 저장 
    * @Method Name : saveCmdDynamicSqlAuth
    * @remark
    * @Create Date: 2018 2018. 10. 25. 오후 5:35:12 
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
    public void saveCmdDynamicSqlAuth(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectCmdDyamicSqlHeader
    * @brief : 다양한 쿼리 데이터 조회 
    * @Method Name : selectCmdDyamicSqlHeader
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오전 11:22:10 
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
    public void selectCmdDyamicSqlHeader(UiMapDto dto) throws Exception;
}
