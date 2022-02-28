package com.nbdf.batch.service;

import static com.nbdf.batch.consts.CmdConsts.NS_BATCH_JOB_JAVA;
import static com.nbdf.batch.consts.CmdConsts.SMTP_IP;
import static com.nbdf.batch.consts.CmdConsts.SMTP_PORT;
import static com.nbdf.batch.consts.CmdConsts.TO_ADDR_CNT;
import static com.nbdf.batch.consts.CmdConsts.TO_CC_CNT;
import com.nbdf.batch.manager.JobManager;
import com.nbdf.batch.manager.MailManager;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class QuartzEmailServiceImpl extends AbstractNbdfService {

    private static final String NM_JOB = NS_BATCH_JOB_JAVA;
    private static final String IP = SMTP_IP;
    private static final String PORT = SMTP_PORT;
    private static GeneralDao generalDao;

    protected static Logger logger = LoggerFactory.getLogger(QuartzEmailServiceImpl.class);

    public static Map<String, Object> eMailBatch(Map<String, Object> rstMap){

    	generalDao = JobManager.getDao();

        List<Map<String, Object>> eMailList = generalDao.addSelect(NM_JOB + "selectEmailBatchList");
        Map<String, Object> param = new HashMap<String, Object>();

        int errCnt = 0;
        String fromAddr;
        String fromName;
        String comments;
        Session mailSession = null;

        logger.info("총 발송 대상 건수 : {}" ,  eMailList.size());

        if( eMailList.size() > 0){
            Properties mailProps = new Properties();
            mailProps.put("mail.transport.protocol" , "smtp");
            mailProps.put("mail.smtp.host" , IP);
            mailProps.put("mail.smtp.port" , String.valueOf(PORT));
            mailProps.put("mail.smtp.auth" , "false");
            mailSession = Session.getInstance(mailProps);
        }

        for(int i=0; i< eMailList.size(); i++){
            Message message = new MimeMessage(mailSession);
            param = MailManager.defaultMapCheck(eMailList.get(i));
            /* NULL 값이 있는 경우 처리(발송하지 않음) */
            if(!(boolean) param.get("defaultMapCheck")){
                generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                errCnt = errCnt+1;
                continue;
            }
            /* 받는 사람(TO) 처리 */
            String toAddrs = (String) eMailList.get(i).get("RCVER_INFO");
            String[] arrayToAddrs = toAddrs.split(";");
            /* 받는 사람 COUNT 체크 */
            if(arrayToAddrs.length > TO_ADDR_CNT) {
                param.put("RM",  "받는 사람 EMAIL ADDR COUNT : " + arrayToAddrs.length + "가 초과 하였습니다. 발송 가능한 COUNT : " + TO_ADDR_CNT + "건 입니다.");
                generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                errCnt = errCnt+1;
                continue;
            }
            /* 받는 사람 셋팅 */
            for(int j=0; j < arrayToAddrs.length; j++) {
                if(MailManager.isValidEmailAddress(arrayToAddrs[j])) {
                    logger.debug("[EMAIL]  * 받는 사람 EMAIL ADDR : " + arrayToAddrs[j]);
                    try {
                        message.addRecipient(Message.RecipientType.TO, new InternetAddress( arrayToAddrs[j]) );
                    } catch (AddressException e) {
                        param.put("RM",  "받는 사람 EMAIL ADDR 형식 오류  : "+ arrayToAddrs[j] + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    } catch (MessagingException e) {
                        param.put("RM",  "받는 사람 EMAIL ADDR 형식 오류  : "+ arrayToAddrs[j] + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    }
                }else {
                    param.put("RM",  "받는 사람 EMAIL ADDR 형식 오류  : "+ arrayToAddrs[j]);
                    generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                    errCnt = errCnt+1;
                    continue;
                }
                /* 참조(CC) 처리 */
                String toCc = (String) eMailList.get(i).get("CC");
                if(toCc != null && !"".equalsIgnoreCase(toCc.trim())) {
                    String[] arrayToCc = toCc.split(";");
                    if(arrayToCc.length > TO_CC_CNT) {
                        logger.info(" arrayToAddrs[j]) : {}  " , arrayToCc[i]);
                        param.put("RM",  "받는 사람 EMAIL ADDR COUNT : " + arrayToAddrs.length + "가 초과 하였습니다. 발송 가능한 COUNT : " + TO_ADDR_CNT + "건 입니다.");
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    }
                    /* 참조자 셋팅 */
                    for(int k=0; k < arrayToCc.length; i++) {
                        if(MailManager.isValidEmailAddress(arrayToCc[k])) {
                            logger.debug("[EMAIL] * 참조자 EMAIL ADDR : " + arrayToCc[k]);
                            try {
                                message.addRecipient(Message.RecipientType.CC, new InternetAddress(arrayToCc[k]));
                            } catch (AddressException e) {
                                param.put("RM",  "참조자 EMAIL ADDR 형식 오류  : "+ arrayToCc[k]);
                                generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                                errCnt = errCnt+1;
                                continue;
                            } catch (MessagingException e) {
                                param.put("RM",  "참조자 EMAIL ADDR 형식 오류  : "+ arrayToCc[k]);
                                generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                                errCnt = errCnt+1;
                                continue;
                            }
                        }else{
                            param.put("RM",  "참조자 EMAIL ADDR 형식 오류  : "+ arrayToCc[k]);
                            generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                            errCnt = errCnt+1;
                            continue;
                        }
                    }
                }
                /* 메일 제목(SUBJECT) 처리 */
                try {
                    //jsh 20160729 utf-8 인코딩 처리  / /20161028 개발서버 이메일 전송 한글깨짐으로 인해서 주석처리
                    //String subjectText = (String) param.get("SUBJECT_TEXT");
                    //byte[] euckrStringBuffer = subjectText.getBytes(Charset.forName("euc-kr"));
                    //String decodedFromEucKr = new String(euckrStringBuffer, "euc-kr");
                    //byte[] utf8StringBuffer = decodedFromEucKr.getBytes("utf-8");
                    //String decodedFromUtf8 = new String(utf8StringBuffer, "utf-8");

                    //message.setSubject(decodedFromUtf8);

                    message.setSubject((String) param.get("SUBJECT_TEXT"));
                } catch (MessagingException e) {
                    param.put("RM",  "메일 제목 오류발생");
                    generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                    errCnt = errCnt+1;
                    continue;
                //} catch (UnsupportedEncodingException e) { //jsh 20160729
                //    param.put("RM",  "메일 제목 오류발생 Encoding");
                //    generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                //    errCnt = errCnt+1;
                //    continue;
                }
                /* 메일 내용(CONTENT) 처리 */
                try {
                    Clob commentsClob = (Clob)eMailList.get(i).get("COMMENTS");
                    try {
                        comments  = ObjectUtil.ClobConvertForString(commentsClob);
                    } catch (SQLException e) {
                        param.put("RM",  "메일 내용 오류발생 :" + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    } catch (IOException e) {
                        param.put("RM",  "메일 내용 오류발생 :" + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    }
                    message.setContent(comments, "text/html; charset=UTF-8");
                } catch (MessagingException e) {
                    param.put("RM",  "메일 내용 오류발생 : " + e);
                    generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                    errCnt = errCnt+1;
                    continue;
                }
                /* 보내는 사람(FROM) 처리 */
                fromAddr = (String) param.get("SENDER_INFO");
                fromName = (String) param.get("SENDER_NAME");
                logger.info("보내는 사람 주소 : {} " , fromAddr);
                logger.info("보내는 사람 명 : {} " , fromName);
                if(MailManager.isValidEmailAddress(fromAddr)) {
                    try {
                        message.setFrom( new InternetAddress(fromAddr, fromName,"UTF-8")); //jsh 20160729
                        //message.setFrom( new InternetAddress(fromAddr, fromName));
                    } catch (AddressException e) {
                        param.put("RM",  "보내는 사람 EMAIL ADDR 형식 오류  : "+ fromAddr + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    } catch (MessagingException e) {
                        param.put("RM",  "보내는 사람 EMAIL ADDR 형식 오류  : "+ fromAddr + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    } catch (UnsupportedEncodingException e) { //jsh 20160729
                        param.put("RM",  "보내는 사람 EMAIL ADDR 형식 오류  : "+ fromAddr + e);
                        generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                        errCnt = errCnt+1;
                        continue;
                    }
                }else {
                    param.put("RM",  "보내는 사람 EMAIL ADDR 형식 오류  : "+ fromAddr);
                    generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                    errCnt = errCnt+1;
                    continue;
                }
            }
            try {
                Transport.send(message);
            } catch (MessagingException e) {
                param.put("RM",  "SMTP 발송 오류  : "+ e);
                generalDao.addUpdate(NM_JOB + "updateEmailBatchFail", param);
                errCnt = errCnt+1;
                continue;
            }
            generalDao.addUpdate(NM_JOB + "updateEmailBatchSuccess", param);
       }
        rstMap.put("P_FET_CNT",  eMailList.size()); // 처리 대상 건수
        rstMap.put("P_SKP_CNT",  "0"); // 스킵 건수
        rstMap.put("P_ERR_CNT",  errCnt); // 오류 건수
        rstMap.put("EXECUT_GUBUN_CD",  "OK_EXEC"); // 실행 구분
        rstMap.put("P_ERR_DESC",  "정상처리 되었습니다."); // 실행 구분
        return rstMap;
    }

}
