package com.nbdf.cmd.cm.cmam.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMAM01000Service.java
* @Package: com.nbdf.cmd.cm.cmam.service
* @Project name: IFC MES시스템 구축
* @Type name: CMAM01000Service
* @Company: Built1
* @Create Date:2021. 4. 16. 오후 9:12:27
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 16.        JIn Sung Ha     최초  생성
 *
*/
public interface CMAM00100Service {

    /**
    * @fn : emailSend
    * @brief : (2) EMAIL 발송(SMTP)
    * @Method Name : emailSend
    * @Create Date:2021. 4. 16. 오후 6:42:01
    * @Author: JIn Sung Ha
    * @param: 1.받는 사람 메일 주소 2.보내는사람 메일 주소 3.메일 제목 4.메일 내용 5.업무 코드명
    *                (받는 사람 성명과 보내는 사람 성명은 필수 값이 아님므로 제외한 함수)
    * @return: boolean
    * @throws : Exception
    */
    public String emailSendBatch(String toAddr, String fromAddr, String subject, String content, String jobSysCd) throws Exception;

    /**
    * @fn : smsSend
    * @brief : 함수 간략한 설명
    * @Method Name : smsSend
    * @Create Date:2021. 4. 20. 오전 10:30:01
    * @Author: JIn Sung Ha
    * @param: 1.받는 사람 휴대전화 번호, 2.보내는 사람 휴대전화 번호, 3.메시지 내용, 4. 업무 코드명
    * @return: boolean
    * @throws : Exception
    */
    public boolean smsSend(String rcvPhnNo, String sndPhnNo, String sndMsg, String jobSysCd) throws Exception;

    /**
    * @fn : emailSend
    * @brief : (1) EMAIL 발송(SMTP)
    * @Method Name : emailSend
    * @Create Date:2021. 4. 16. 오후 6:42:01
    * @Author: JIn Sung Ha
    * @param: 1.받는 사람 메일 주소 2.받는 사람 성명 3.보내는사람 메일 주소 4.보내는사람 성명
    *               5.참조자 메일 주소 6. 참조자 성명 7.메일 제목 8.메일 내용 9.업무 코드명
    * @return: boolean
    * @throws : Exception
    */
    public String emailSend(String toAddr, String toName, String fromAddr, String fromName,
            String toCc, String toCcName , String subject, String content, String jobSysCd)  throws Exception;
    
    public String emailSend(String toAddr, String toName, String fromAddr, String fromName,
            String toCc, String toCcName , String subject, String content, String jobSysCd,
            Map<String, Object> param)  throws Exception;
    public String emailSend(Map<String, Object> param) throws Exception;

    /**
    * @fn : insertEmailSndngLogs
    * @brief : (1) EMAIL 발송(SMTP)
    * @Method Name : insertEmailSndngLogs
    * @Create Date:2021. 4. 16. 오후 6:42:01
    * @Author: JIn Sung Ha
    * @param: 1.받는 사람 메일 주소 2.받는 사람 성명 3.보내는사람 메일 주소 4.보내는사람 성명
    *               5.참조자 메일 주소 6. 참조자 성명 7.메일 제목 8.메일 내용 9.업무 코드명
    * @return: boolean
    * @throws : Exception
    */
    public String insertBatchEmailSndngLogs(String toAddr, String toName, String fromAddr, String fromName,
            String toCc, String toCcName , String subject, String content, String jobSysCd)  throws Exception;

    /**
    * @fn : emailSend
    * @brief : (2) EMAIL 발송(SMTP)
    * @Method Name : emailSend
    * @Create Date:2021. 4. 16. 오후 6:42:01
    * @Author: JIn Sung Ha
    * @param: 1.받는 사람 메일 주소 2.보내는사람 메일 주소 3.메일 제목 4.메일 내용 5.업무 코드명
    *                (받는 사람 성명과 보내는 사람 성명은 필수 값이 아님므로 제외한 함수)
    * @return: boolean
    * @throws : Exception
    */
    public String emailSend(String toAddr, String fromAddr, String subject, String content, String jobSysCd) throws Exception;

     /**
    * @fn : insertSmsSndngLogs
    * @brief : SMS발송 후 로그 저장
    * @Method Name : insertSmsSndngLogs
    * @Create Date:2021. 4. 16. 오후 9:12:00
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, String jobSysCd
    * @return: boolean
    * @throws : Exception
    */
    //public boolean insertSmsSndngLogs(UiMapDto dto, String jobSysCd) throws Exception;

     /**
    * @fn : insertEmailSndngLogs
    * @brief : EMAIL발송 후 로그 저장
    * @Method Name : insertEmailSndngLogs
    * @Create Date:2021. 4. 16. 오후 9:12:30
    * @Author: JIn Sung Ha
    * @param: Map<String, Object> emailMap, String jobSysCd
    * @return: boolean
    * @throws : Exception
    */
    public boolean insertEmailSndngLogs(Map<String, Object> emailMap, String jobSysCd) throws Exception;

    /**
    * @fn    : selectAtchSrcKey
    * @brief : new AtchSrcKey 조회
    * @Method Name : selectAtchSrcKey
    * @Create Date: 2021. 12. 05. 오전 9:13:061
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: View
    * @throws : Exception
    */
    public void selectAtchSrcKey(UiMapDto dto) throws Exception;
    
    public void saveEmailSend(UiMapDto dto) throws Exception;

    public void selectCmdSndngLogsList(UiMapDto dto) throws Exception;
    
	public void selectUserGroupUserList(UiMapDto dto) throws Exception;

    
}
