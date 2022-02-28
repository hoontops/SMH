package com.nbdf.commons.web.support;

import com.nbdf.commons.exception.BizException;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import egovframework.rte.fdl.string.EgovObjectUtil;
import egovframework.rte.fdl.string.EgovStringUtil;

/**
* @file: ImcsMailService.java
* @Package: com.nbdf.commons.web.support
* @Project name: IFC MES시스템 구축
* @Type name: ImcsMailService
* @Company: Built1
* @Create Date: 2015 2015. 4. 16. 오후 9:15:01
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 16.        JIn Sung Ha     최초  생성
 *   2015. 7. 15.        JIn Sung Ha     리턴 값 변경(boolean -> String)
 *   2015. 8. 31.        JIn Sung Ha     로그 레벨 변경
 *   2015. 12. 23.      JIn Sung Ha     제목 한글 처리 
 *
*/
@Repository
public class NbdfMailService{
    
    protected static Logger logger = LoggerFactory.getLogger(NbdfMailService.class);

    @Value("#{commonsProp['env.smtp.ip']?:false}")
    private String smtpIp;

    @Value("#{commonsProp['env.smtp.port']?:false}")
    private String smtpPort;

    @Value("#{commonsProp['env.smtp.toAddrCount']?:false}")
    private int toAddrCount;

    @Value("#{commonsProp['env.smtp.ccAddrCount']?:false}")
    private int ccAddrCount;

    /**
    * @fn : mailSnd
    * @brief : SMTP 통신(EMAIL 발송)
    * @Method Name : mailSnd
    * @Create Date: 2015 2015. 4. 16. 오후 9:15:08
    * @Author: JIn Sung Ha
    * @param: Map<String, Object> map
    * @return: boolean
     * @throws BizException
    * @throws : Exception
    */
    public String mailSnd(Map<String, Object> map){
        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>   DRM CONFIGURATION   <<<<<<<\n\t--------------------------------------------------------------\n")
                    .append("\tsmtpIp : " + smtpIp)
                    .append("\tsmtpPort : " + smtpPort)
                    .append("\n\t--------------------------------------------------------------\n");
        logger.debug(logBuilder.toString());

        String exceptionMailAdd = "";

        Properties mailProps = new Properties();
        mailProps.put("mail.transport.protocol" , "smtp");
        mailProps.put("mail.smtp.host" , smtpIp);
        mailProps.put("mail.smtp.port" , String.valueOf(smtpPort));
        mailProps.put("mail.smtp.auth" , "false");

        Session mailSession = Session.getInstance(mailProps);

        try {
            Message message = new MimeMessage(mailSession);

            /* 받는 사람(TO) 처리 */
            String toAddrs = (String) map.get("TO_ADDR");
            String[] arrayToAddrs = toAddrs.split(";");

            if(arrayToAddrs.length > toAddrCount) {
                logger.error("[EMAIL-ERROR]  * 받는 사람 EMAIL ADDR COUNT : " + arrayToAddrs.length + "가 초과 하였습니다. 발송 가능한 COUNT : " + toAddrCount + "건 입니다.");
                return "받는 사람 EMAIL ADDR COUNT : " + arrayToAddrs.length + "가 초과 하였습니다. 발송 가능한 COUNT : " + toAddrCount + "건 입니다.";
            }

            String toName = (String) map.get("TO_NAME");
            String[] arrayToName = toName.split(";");

            logger.debug(" toAddrs:"+ toAddrs);
            logger.debug(" arrayToAddrs.length:"+  arrayToAddrs.length);

            logger.debug(" toName:"+ toName);
            logger.debug(" arrayToName.length:"+  arrayToName.length);

            /* 받는 사람 성명이 없는 경우  */
            if(EgovObjectUtil.isNull(toName) || EgovStringUtil.isEmpty(toName)) {
                for(int i=0; i < arrayToAddrs.length; i++) {
                    if(isValidEmailAddress(arrayToAddrs[i])) {
                        exceptionMailAdd = arrayToAddrs[i];
                        logger.debug("[EMAIL]  * 받는 사람 EMAIL ADDR : " + arrayToAddrs[i]);
                        message.addRecipient(Message.RecipientType.TO, new InternetAddress( arrayToAddrs[i]) );
                    }else {
                        logger.error("[EMAIL-FORMATTING ERROR]  *(받는 사람 성명이 없는 경우) 받는 사람 EMAIL ADDR : " + arrayToAddrs[i] + "가 형식에 맞지 않습니다.");
                        return "받는 사람 EMAIL ADDR : " + arrayToAddrs[i] + "가 형식에 맞지 않습니다.";
                    }
                }
            /* 받는 사람 성명이 있는 경우  */
            }else {
                if( arrayToAddrs.length !=  arrayToName.length) {
                    logger.error("[EMAIL- ERROR]  * 받는 사람 이메일 수와 이름의 수가 맞지 않습니다.");
                    return "false";
                }else {
                    for(int i=0; i < arrayToAddrs.length; i++) {
                        if(isValidEmailAddress(arrayToAddrs[i])) {
                            if(EgovObjectUtil.isNull(arrayToName[i]) ||  EgovStringUtil.isEmpty(arrayToName[i])) {
                                logger.error("[EMAIL-FORMATTING ERROR]  *(받는 사람 성명이 있는 경우) " + arrayToName[i] + "받는 사람 성명이 없습니다.");
                                return arrayToName[i] + "받는 사람 성명이 없습니다.";
                            }else {
                                exceptionMailAdd = arrayToAddrs[i];
                                logger.debug("[EMAIL] *받는 사람 이름 :" + arrayToName[i] + "  * 받는 사람 EMAIL ADDR : " + arrayToAddrs[i]);
                                message.addRecipient(Message.RecipientType.TO, new InternetAddress(arrayToAddrs[i] , arrayToName[i]) );
                            }
                        }else {
                            logger.error("[EMAIL-FORMATTING ERROR]  *(받는 사람 성명이 있는 경우) 받는 사람 EMAIL ADDR : " + arrayToAddrs[i] + "가 형식에 맞지 않습니다.");
                            return "받는 사람 EMAIL ADDR : " + arrayToAddrs[i] + "가 형식에 맞지 않습니다.";
                        }
                    }
                }
            }

            /* 참조(CC) 처리 */
            String toCc = (String) map.get("TO_CC");

            if(toCc  != null && !toCc.trim().equals("") ){	
                String[] arrayToCc = toCc.split(";");
                String toCcName = (String) map.get("TO_CC_NAME");
                String[] arrayToCcName = toCcName.split(";");

                if(arrayToCcName.length > ccAddrCount) {
                    logger.error("[EMAIL-ERR]  * (CC)참조자 EMAIL ADDR COUNT : " + arrayToCcName.length + "가 초과 하였습니다. 발송 가능한 COUNT : " + ccAddrCount );
                    return "(CC)참조자 EMAIL ADDR COUNT : " + arrayToCcName.length + "가 초과 하였습니다. 발송 가능한 COUNT : " + ccAddrCount;
                }

                for(int i=0; i < arrayToCc.length; i++) {
                    if(isValidEmailAddress(arrayToCc[i])) {
                    	if(arrayToCcName[i]  != null && !arrayToCcName[i].trim().equals("") ){
                            logger.debug("[EMAIL] *참조자 이름 :" + arrayToCcName[i] + "  * 참조자 EMAIL ADDR : " + arrayToCc[i]);
                            message.addRecipient(Message.RecipientType.CC, new InternetAddress(arrayToCc[i] ,arrayToCcName[i]) );
                        }else{
                            exceptionMailAdd = arrayToCc[i];
                            logger.debug("[EMAIL] * 참조자 EMAIL ADDR : " + arrayToCc[i]);
                            message.addRecipient(Message.RecipientType.CC, new InternetAddress(arrayToCc[i]));
                        }
                    }else {
                        logger.error("[EMAIL-FORMATTING ERROR]  * 참조자 EMAIL ADDR : " + arrayToCc[i]  + "가 형식에 맞지 않습니다.");
                        return "참조자 EMAIL ADDR : " + arrayToCc[i]  + "가 형식에 맞지 않습니다.";
                    }
                }
            }
            
            String subject = new String(((String) map.get("SUBJECT")).getBytes("UTF-8"));
            
            /* 메일 제목(SUBJECT) 처리 */
            message.setSubject(subject);
        	message.setContent((String) map.get("CONTENT"), "text/html; charset=UTF-8");
        	logger.error("file list-->"+map.get("FILE_LIST"));
            /* 메일 내용(CONTENT) 처리 */
            if(map.get("FILE_LIST") == null || ((List<Map<String, Object>>) map.get("FILE_LIST")).size()==0){
            	message.setContent((String) map.get("CONTENT"), "text/html; charset=UTF-8");
            	
            }else{
            	List<Map<String, Object>> list = (List<Map<String, Object>>) map.get("FILE_LIST");
            	Multipart multipart = new MimeMultipart();
            	for(int i=0; i<list.size(); i++){
            		Map<String, Object> param = list.get(i);
            		
            		MimeBodyPart bodypart = new MimeBodyPart();
                    bodypart.setContent((String) map.get("CONTENT"), "text/html; charset=UTF-8");

            		/* 파일 첨부하기 */
                    MimeBodyPart attachPart = new MimeBodyPart();
                    /*  파일시스템의 파일을 첨부*/
                    File file = new File((String) param.get("FULL_SAVE_COURS"));
                    FileDataSource fds = new FileDataSource(file);
                    attachPart.setDataHandler(new DataHandler(fds));
//                    attachPart.setDisposition(Part.ATTACHMENT);
//                    String ocFileNm = (String) param.get("OC_FILE_NM");
//                    String fileNm = ocFileNm.substring(0,ocFileNm.lastIndexOf("."));
//                    String fileExt = ocFileNm.substring(ocFileNm.lastIndexOf("."));
                    
                    attachPart.setFileName(MimeUtility.encodeText((String) param.get("OC_FILE_NM"),"EUC-KR", "B"));
                    attachPart.setDescription(MimeUtility.encodeText((String) param.get("OC_FILE_NM"),"EUC-KR", "B"));
                    
                    //Multipart multipart = new MimeMultipart();
                    multipart.addBodyPart(bodypart);
                    multipart.addBodyPart(attachPart);
            	}
            	message.setContent(multipart);
            }

            /* 보내는 사람(FROM) 처리 */
            String fromAddr = (String) map.get("FROM_ADDR");
            String fromName = (String) map.get("FROM_NAME");

            logger.debug("fromAddr :" + fromAddr);

            if(isValidEmailAddress(fromAddr)) {
                if(fromName != null && !fromName.equals("")) {
                    logger.debug("[EMAIL] *보내는 사람 이름 :" + fromName + "  * 보내는 사람 EMAIL ADDR : " + fromAddr);
                    message.setFrom( new InternetAddress(fromAddr, fromName) );
                }else {
                    logger.debug("[EMAIL]  *보내는 사람 EMAIL ADDR : " + fromAddr);
                    message.setFrom( new InternetAddress(fromAddr));
                }
            }else {
                logger.error("[EMAIL-FORMATTING ERROR]  * 보내는 사람 EMAIL ADDR : " + fromAddr  + "가 형식에 맞지 않습니다.");
                return "보내는 사람 EMAIL ADDR : " + fromAddr  + "가 형식에 맞지 않습니다.";
            }
            /* 메일 발송 처리 */
            Transport.send(message);

        } catch (MessagingException e) {
            logger.error("[E-MAIL 발송 실패] {}", e.toString());
            
            if ("".equals(exceptionMailAdd)) {
           		return "SMCMM0010:(E-MAIL발송실패)";
            } else {
        		return "SMCMM0010:(E-MAIL발송실패)" + exceptionMailAdd;
            }
        } catch (UnsupportedEncodingException e) {
            logger.error("[E-MAIL 발송 실패] {}", e.toString());
            return "SMCMM0010:(E-MAIL발송실패)";
        }

        logger.debug("[EMAIL] *EMAIL 발송 완료" );
        return "success";
    }

    /**
    * @fn : isValidEmailAddress
    * @brief : 이메일 형식에 맞는지 확인
    * @Method Name : isValidEmailAddress
    * @Create Date: 2015 2015. 4. 17. 오전 11:03:34
    * @Author: JIn Sung Ha
    * @param: String email
    * @return: boolean
    * @throws : Exception
    */
    public static boolean isValidEmailAddress(String email) {
        boolean result = true;
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            emailAddr.validate();
        } catch (AddressException ex) {
        	logger.error("AddressException is not valid {} " , ex);
            result = false;
        } 
        return result;
    }
}