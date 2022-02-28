package com.nbdf.cmd.cm.cmfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

import java.util.List;
import java.util.Map;

/**
* @file: CMFM01000Service.java
* @Package: com.nbdf.cmd.cm.cmfm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMFM01000Service
* @Company: Built1
* @Create Date: 2015. 4. 24. 오후 6:02:51
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 24.        JIn Sung Ha     최초  생성
 *
*/
public interface CMFM02000Service {

    /**
    * @fn : insertAtchFiles
    * @brief : 첨부파일 정보저장(재정경영)
    * @Method Name : insertAtchFiles
    * @Create Date: 2015. 4. 24. 오후 6:07:20
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto,Object obj, String tableName, String desc, String jobSysCd
    * @return: Boolean
    * @throws : Exception
    */
    public boolean insertAtchFiles(UiMapDto dto,Object obj, String tableName, String desc, String jobSysCd) throws Exception;

    /**
    * @fn : updateAtchFiles
    * @brief : 첨부파일 정보 수정
    * @Method Name : updateAtchFiles
    * @Create Date: 2015. 4. 24. 오후 6:06:57
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto,Object obj, String tableName, String desc, String jobSysCd
    * @return: boolean
    * @throws : Exception
    */
    public boolean updateAtchFiles(UiMapDto dto,Object obj, String tableName, String desc, String jobSysCd) throws Exception;

    /**
    * @fn : selectAtchFiles
    * @brief : 첨부파일 정보 조회
    * @Method Name : selectAtchFiles
    * @Create Date: 2015. 4. 24. 오후 6:06:37
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto,Object obj, String tableName, String jobSysCd
    * @return: List
    * @throws : Exception
    */
    public List<Map<String, Object>> selectAtchFiles(UiMapDto dto,Object obj, String tableName, String jobSysCd) throws Exception;

    /**
    * @fn : selectAtchFileDn
    * @brief : 첨부파일 다운로드용(정보 조회-PK)
    * @Method Name : selectAtchFileDn
    * @Create Date: 2015. 4. 24. 오후 6:06:16
    * @Author: JIn Sung Ha
    * @param: int atchFileId, String jobSyscd
    * @return: List
    * @throws : Exception
    */
    public List<Map<String, Object>> selectAtchFileDn(int atchFileId, String jobSyscd) throws Exception;

    /**
    * @fn : selectAtchFileDn
    * @brief : 첨부파일 다운로드용(정보 조회-GUID)
    * @Method Name : selectAtchFileDn
    * @Create Date: 2015. 4. 24. 오후 6:05:50
    * @Author: JIn Sung Ha
    * @param: String atchFileGuid, String jobSyscd
    * @return: List
    * @throws : Exception
    */
    public List<Map<String, Object>> selectAtchFileDn(String atchFileGuid, String jobSyscd) throws Exception;

    /**
    * @fn : updateAtchFileDnCnt
    * @brief : 파일 다운로드시 다운로드 COUNT 증가(PK)
    * @Method Name : updateAtchFileDnCnt
    * @Create Date: 2015. 4. 24. 오후 6:03:12
    * @Author: JIn Sung Ha
    * @param: PK , 업무코드
    * @return: INTEGER
    * @throws : Exception
    */
    public int updateAtchFileDnCnt(int atchFileId, String jobSysCd) throws Exception;

    /**
    * @fn : updateAtchFileDnCnt
    * @brief : 파일 다운로드시 다운로드 COUNT 증가(GUID)
    * @Method Name : updateAtchFileDnCnt
    * @Create Date: 2015. 4. 24. 오후 6:03:12
    * @Author: JIn Sung Ha
    * @param: PK , 업무코드
    * @return: INTEGER
    * @throws : Exception
    */
    public int updateAtchFileDnCnt(String atchFileGuid, String jobSysCd) throws Exception;

    /**
    * @fn : deleteFile
    * @brief : 첨부파일 정보 삭제
    * @Method Name : deleteFile
    * @Create Date: 2015. 4. 24. 오후 6:05:10
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, String jobSysCd
    * @return: boolean
    * @throws : Exception
    */
    public boolean deleteFile(UiMapDto dto, String jobSysCd) throws Exception;

    /**
    * @fn : deleteFile
    * @brief : 첨부파일 정보 삭제(DataSet)
    * @Method Name : deleteFile
    * @Create Date: 2015. 4. 24. 오후 6:04:29
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, String jobSysCd, String dataset
    * @return: boolean
    * @throws : Exception
    */
    public boolean deleteFile(UiMapDto dto, String jobSysCd, String dataset) throws Exception;
    
    /**
     * @fn : deleteFile2
     * @brief : 키,테이블명에 대한 모든파일 삭제
     * @Method Name : deleteFile
     * @Create Date: 2015. 4. 24. 오후 6:04:29
     * @Author: JIn Sung Ha
     * @param: UiMapDto dto, String jobSysCd, String dataset
     * @return: boolean
     * @throws : Exception
     */
    public boolean deleteFile2(UiMapDto dto) throws Exception;

    public String selectAtchFileGuid() throws Exception;

}
