package com.nbdf.cmd.cm.cmsa.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMSA01320Service.java
* @Package: com.nbdf.cmd.cm.cmsa.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSA01320Service    
* @Company: Built1
* @Create Date: 2018 2018. 6. 21. 오후 5:53:50 
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
public interface CMSA01320Service {
    
    /**
    * @fn : selectAtchFileList
    * @brief : (첨부)파일 다운로드 - 조회
    * @Method Name : selectAtchFileList
    * @remark
    * @Create Date: 2018 2018. 6. 21. 오후 5:53:57 
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
    public void selectAtchFileList(UiMapDto dto) throws Exception;
    /**
     * @fn : selectBigDataExcel
     * @brief : 대용량엑셀다운로드
     * @Method Name : selectBigDataExcel
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
    public void selectBigDataExcel(UiMapDto dto) throws Exception;     
}