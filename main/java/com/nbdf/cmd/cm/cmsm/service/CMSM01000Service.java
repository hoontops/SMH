package com.nbdf.cmd.cm.cmsm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMSM01000Service.java
* @Package: com.nbdf.cmd.cm.cmsm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSM01000Service
* @Company: Built1
* @Create Date: 2015. 4. 21. 오후 1:42:40
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 21.  진성하   최초  생성
 *
*/
public interface CMSM01000Service {

    /**
    * @fn : insertIvlInfoList
    * @brief : 개인정보 조회 결과 저장
    * @Method Name : insertIvlInfoList
    * @Create Date: 2015. 4. 21. 오후 1:43:42
    * @Author: JIn Sung Ha
    * @param: 1.업무시스템 코드 2.프로그램명, 3.SQL 명, 4.SQL 문장, 5.조회 조건, 6.조회 결과 건수, 7.저장 파일명, 9.파일 사이즈, 9.비고
    * @return: integer
    * @throws : Exception
    */
    public int insertIvlInfoList(String jobSysCd, String pngNm, String sqlNm, String sqlSntenc, String qryCnd,
            String qryRsltCnt, String saveFileNm, String fileSize, String rm ) throws Exception;

    /**
    * @fn : insertIvlInfoList
    * @brief : 개인정보 조회 결과 저장
    * @Method Name : insertIvlInfoList
    * @Create Date: 2015. 4. 21. 오후 1:43:42
    * @Author: JIn Sung Ha
    * @param: 1.업무시스템 코드 2.프로그램명 3.SQL 명, 4.SQL 문장, 5.조회 조건, 6.조회 결과 건수
    * @return: integer
    * @throws : Exception
    */
    public int insertIvlInfoList(String jobSysCd, String pngNm, String sqlNm, String sqlSntenc, String qryCnd,
            String qryRsltCnt) throws Exception;


    /**
    * @fn : selectIvlList
    * @brief : 개인정보 조회로그 조회
    * @Method Name : selectIvlList
    * @Create Date: 2015. 4. 27. 오전 10:54:01
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void selectIvlList(UiMapDto dto) throws Exception;
    
    public void selectIvlList4Excel(UiMapDto dto) throws Exception;


}