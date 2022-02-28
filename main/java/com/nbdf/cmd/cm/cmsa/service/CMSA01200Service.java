package com.nbdf.cmd.cm.cmsa.service;

import com.nbdf.commons.ui.vo.UiMapDto;
/**
 * 동시작업조회
 *
 * @ClassName CMSA01100Service.java
 * @Description CMSA01100Service.class
 * @Modification-Information
 * @author Built1 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 * Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSA01200Service {


    /**
    * @fn : selectAtchFileDnList
    * @brief : 파일 다운로드 리스트 조회
    * @Method Name : selectAtchFileDnList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void selectAtchFileList(UiMapDto dto) throws Exception;

    /**
    * @fn : updateAtchFiles
    * @brief : 첨부파일 저장
    * @Method Name : updateAtchFiles
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void updateAtchFiles(UiMapDto dto) throws Exception;

    /**
    * @fn : updateAtchFiles
    * @brief : 첨부파일 저장
    * @Method Name : updateAtchFiles
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void deleteFile(UiMapDto dto) throws Exception;
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
    public void deleteFile2(UiMapDto dto) throws Exception;

}