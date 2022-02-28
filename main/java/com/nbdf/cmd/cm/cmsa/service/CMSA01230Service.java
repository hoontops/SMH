package com.nbdf.cmd.cm.cmsa.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMSA01230Service.java
* @Package: com.nbdf.cmd.cm.cmsa.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSA01230Service    
* @Company: Built1
* @Create Date: 2018 2018. 6. 22. 오후 1:32:48 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 6. 22.        Kang Jeong Gi     최초  생성
 *
*/
public interface CMSA01230Service {
    
    /**
    * @fn : selectAtchFileList
    * @brief : 파일 업로드/다운로드 - 자료 조회
    * @Method Name : selectAtchFileList
    * @remark
    * @Create Date: 2018 2018. 6. 22. 오후 1:32:50 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 22.        Kang Jeong Gi     최초  생성
     *
    */
    public void selectAtchFileList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : deleteFile
    * @brief : 파일 업로드/다운로드 - 상세/헤더 삭제
    * @Method Name : deleteFile
    * @remark
    * @Create Date: 2018 2018. 6. 22. 오후 4:37:21 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 22.        Kang Jeong Gi     최초  생성
     *
    */
    public void deleteAtchFile(UiMapDto dto) throws Exception;
    
    /**
    * @fn : saveAtchFiles
    * @brief : 첨부파일 정보 저장 - 헤더/상세
    * @Method Name : saveAtchFiles
    * @remark
    * @Create Date: 2018 2018. 6. 25. 오전 9:54:43 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 25.        Kang Jeong Gi     최초  생성
     *
    */
    public void saveAtchFiles(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectAtchFileGuidID
    * @brief : 파일 업로드/다운로드 - 상세정보 ATCH_FILE_GUID sequence 채번
    * @Method Name : selectAtchFileGuidID
    * @remark
    * @Create Date: 2018 2018. 6. 25. 오후 2:11:55 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 25.        Kang Jeong Gi     최초  생성
     *
    */
    public String selectAtchFileGuidID() throws Exception;
}