package com.nbdf.cmd.cm.cmam.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.NbdfMailService;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.string.EgovObjectUtil;

/**
* @file: CMAM01000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmam.service
* @Project name: IFC MES시스템 구축
* @Type name: CMAM01000ServiceImpl
* @Company: Built1
* @Create Date: 2021. 4. 12. 오전 11:38:38
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.   진성하    최초  생성
 *
*/

@Service
public class CMAM00100ServiceImpl extends AbstractNbdfService implements CMAM00100Service {
	public static final String NAMESPACE = "com.nbdf.cmd.cm.cmam.dao.CMAM00100Dao";
    private static final String NAMESAPCE2 = "com.nbdf.cmd.cm.cmfm.dao.CMFM01000Dao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private NbdfMailService nbdfMailService;

    @Override
    public String emailSendBatch(String toAddr, String fromAddr, String subject, String content, String jobSysCd) throws Exception {
        Map<String, Object> emailMap = new ConcurrentHashMap<String, Object>();

        emailMap.put("TO_ADDR", toAddr);
        emailMap.put("TO_NAME", "" );
        emailMap.put("FROM_ADDR", fromAddr );
        emailMap.put("FROM_NAME", "" );
        emailMap.put("TO_CC", "" );
        emailMap.put("TO_CC_NAME", "" );
        emailMap.put("SUBJECT", subject );
        emailMap.put("CONTENT", content );
        emailMap.put("JOB_SYS_CD", jobSysCd.toUpperCase() );
        emailMap.put("SNDNG_YN", "F");
        /* (1) 발송 요청 */
        String rstMsg = nbdfMailService.mailSnd(emailMap);
        whoColumnSet(emailMap);

        if("success".equalsIgnoreCase(rstMsg)){
            emailMap.put("SNDNG_YN", "N");
            if( insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase()) ){
                return "success";
            }
        }else{
            insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());
            throw new BizException(rstMsg);
        }
        return rstMsg;
    }

    /**
    * @fn
    * @brief (Override method)  SMS 발송 후 로그 테이블에 이력 저장
    * @remark
    * - SMS발송 정보를  IFS 테이블에 저장 후 로그 테이블에 저장하는 로직
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#smsSend(com.nbdf.commons.ui.vo.UiMapDto, java.lang.String)
    */
    public boolean smsSend(String rcvPhnNo, String sndPhnNo, String sndMsg, String jobSysCd)throws Exception {

        String rcvPhnNM = rcvPhnNo;
        String sndPhnNM = sndPhnNo;

        //logger.debug("### sndMsg size = " + sndMsg.length()); // ### sndMsg size = 15
        //String limitSndMsg = new String(sndMsg.getBytes("KSC5601"), "8859_1");

        if( smsValidCheck(rcvPhnNM, sndPhnNM , sndMsg) ) {
            //String tranId = NumberUtil.getTransId(jobSysCd); /* 연계 트랜젝션ID 생성 */
            sndPhnNM = sndPhnNM.replaceAll("-", "").trim();
            rcvPhnNM = rcvPhnNM.replaceAll("-", "").trim();

            ConcurrentHashMap<String, Object> smsMap = new ConcurrentHashMap<String, Object>();

            smsMap.put("SND_PHN_ID", sndPhnNM);
            smsMap.put("RCV_PHN_ID", rcvPhnNM);

            smsMap.put("SND_PHN", sndPhnNo);
            smsMap.put("RCV_PHN", rcvPhnNo);

            smsMap.put("SND_MSG", sndMsg);         // SMS발송 80자 이내로 바이트 자름
            smsMap.put("SND_PUSH_MSG", sndMsg); // 우체국App PUSH메시지(전체)
            smsMap.put("JOB_SYS_CD", jobSysCd);

            smsMap = (ConcurrentHashMap<String, Object>) whoColumnSet(smsMap);

            String cmpMsgId = insertSmsSndngLogs(smsMap, jobSysCd);

            if(!cmpMsgId.equals("ERROR")) {
                smsMap.put("CMP_MSG_ID", cmpMsgId);
                if( generalDao.addUpdate(NAMESPACE + ".insertSmsSndIfs", smsMap) > 0 ) {
                    return true;
                }else {
                    logger.error("SMS발송 테이블 저장 실패");
                    return false;
                }
            }else {
                logger.error("로그 테이블 저장 실패");
                return false;
            }
        }
        logger.error("정합성 체크 오류");
        return false;
    }


    /**
    * @fn
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#insertAlimLogInfo(com.nbdf.commons.ui.vo.UiMapDto, java.lang.String)
    */
    public String insertSmsSndngLogs(Map<String, Object> smsMap, String jobSysCd)throws Exception{
        if( !(generalDao.addUpdate(NAMESPACE + ".insertSmsSndngLogs", smsMap)  == 1 ) )           /* 재정경영시스템 LogTable에 저장 */
            return "ERROR";
        return smsMap.get("SNDNG_LOG_ID").toString();
    }

    /**
    * @fn
    * @brief (Override method) (1) EMAIL 발송 요청
    * @remark
    * - EMAIL 발송 요청 후 로그 테이블에 저장
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#emailSend(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public String emailSend(String toAddr, String toName, String fromAddr,
            String fromName, String toCc, String toCcName, String subject, String content,
            String jobSysCd) throws Exception{

            ConcurrentHashMap<String, Object> emailMap = new ConcurrentHashMap<String, Object>();

            emailMap.put("TO_ADDR", toAddr);
            emailMap.put("TO_NAME", toName );
            emailMap.put("FROM_ADDR", fromAddr );
            emailMap.put("FROM_NAME", fromName );
            emailMap.put("TO_CC", toCc );
            emailMap.put("TO_CC_NAME", toCcName );
            emailMap.put("SUBJECT", subject );
            emailMap.put("CONTENT", content );
            emailMap.put("JOB_SYS_CD", jobSysCd.toUpperCase() );
            emailMap.put("SNDNG_YN", "F");
            /* (1) 발송 요청 */
            String rstMsg = nbdfMailService.mailSnd(emailMap);
            whoColumnSet(emailMap);

            if("success".equalsIgnoreCase(rstMsg)){
                emailMap.put("SNDNG_YN", "Y");
                if( insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase()) ){
                    return "success";
                }
            }else{
                insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());
                throw new BizException(rstMsg);
            }
            return rstMsg;
        }

    /**
    * @fn
    * @brief (Override method) (1) EMAIL 발송 요청
    * @remark
    * - EMAIL 발송 요청 후 로그 테이블에 저장
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#emailSend(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public String emailSend(String toAddr, String toName, String fromAddr,
            String fromName, String toCc, String toCcName, String subject, String content,
            String jobSysCd, Map<String, Object> param) throws Exception{

            ConcurrentHashMap<String, Object> emailMap = new ConcurrentHashMap<String, Object>();

            emailMap.put("TO_ADDR", toAddr);
            emailMap.put("TO_NAME", toName );
            emailMap.put("FROM_ADDR", fromAddr );
            emailMap.put("FROM_NAME", fromName );
            emailMap.put("TO_CC", toCc );
            emailMap.put("TO_CC_NAME", toCcName );
            emailMap.put("SUBJECT", subject );
            emailMap.put("CONTENT", content );
            emailMap.put("JOB_SYS_CD", jobSysCd.toUpperCase() );
            emailMap.put("SNDNG_YN", "F");
            emailMap.put("ATCH_SRC_KEY", param.get("ATCH_SRC_KEY") );
            emailMap.put("ATCH_TY_CD", param.get("ATCH_TY_CD") );
            
            List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE2 + ".selectAtchFiles", param);
            emailMap.put("FILE_LIST", list );
            
            /* (1) 발송 요청 */
            String rstMsg = nbdfMailService.mailSnd(emailMap);
            whoColumnSet(emailMap);

            if("success".equalsIgnoreCase(rstMsg)){
                emailMap.put("SNDNG_YN", "Y");
                if( insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase()) ){
                    return "success";
                }
            }else{
                insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());
                throw new BizException(rstMsg);
            }
            return rstMsg;
        }

    /**
    * @fn
    * @brief (Override method) (1) EMAIL 발송 요청
    * @remark
    * - EMAIL 발송 요청 후 로그 테이블에 저장
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#emailSend(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public String emailSend(Map<String, Object> param)  throws Exception{
    	 	
            ConcurrentHashMap<String, Object> emailMap = new ConcurrentHashMap<String, Object>();
            String toAddrs = "";
            String toNames = "";
            /*
			// 받는 사람
			List<String> recipients = (List<String>) param.get("TO_ADDR");
			int cnt = 0;
			for (String recipient : recipients) {
				toAddrs = toAddrs + (cnt==0?"":";") + recipient;
				cnt++;
			}	

			// 받는 사람명
			if(param.get("RECIPIENT_NAMES") ==  null) {
				toNames = toAddrs;
			}else {
				List<String> recipientNames = (List<String>) param.get("RECIPIENT_NAMES");
				cnt = 0;
				for (String recipientName : recipientNames) {
					toNames = toNames + (cnt==0?"":";") + recipientName;
					cnt++;
				}	
			}
			*/
            String fromName = "";
            if(param.get("TO_NAME") == null) {
            	toNames = (String) param.get("TO_ADDR");
            }else {
                toNames = (String) param.get("TO_NAME");
            }
            if(param.get("FROM_NAME") == null) {
            	fromName = (String) param.get("FROM_ADDR");
            }else {
                fromName = (String) param.get("FROM_ADDR");
            }
			emailMap.put("TO_ADDR", param.get("TO_ADDR"));
            emailMap.put("TO_NAME", toNames);
            emailMap.put("FROM_ADDR", param.get("FROM_ADDR"));
            emailMap.put("FROM_NAME", fromName);
            emailMap.put("TO_CC", param.get("TO_CC")==null?"":param.get("TO_CC"));
            emailMap.put("TO_CC_NAME", param.get("TO_CC_NAME")==null?"":param.get("TO_CC_NAME"));
            emailMap.put("SUBJECT", param.get("SUBJECT"));
//            emailMap.put("CONTENT", param.get("CONTENT"));
            emailMap.put("JOB_SYS_CD", param.get("JOB_SYS_CD"));
            emailMap.put("SNDNG_YN", "F");
            emailMap.put("ATCH_SRC_KEY", param.get("ATCH_SRC_KEY") );
            emailMap.put("ATCH_TY_CD", param.get("ATCH_TY_CD") );
            
            List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE2 + ".selectAtchFiles", param);
            emailMap.put("FILE_LIST", list );
            
            String fileContent = "";
            // 보내는 내용
			try {
	            InputStream is = getClass().getResourceAsStream("/properties" + "/Mail/" + param.get("CONTENT_ID") + ".xml");
	            while(true){
					int data;
						data = is.read();
						fileContent += (char)data;
						
					if(data == -1){
						//System.out.println("파일 끝났음");
						break;
					}
	            }
	            is.close();
			} catch (IOException e) {
				e.printStackTrace();
				throw new BizException("No content file. {0}", "/properties" + "/Mail/" + param.get("CONTENT_ID") + ".xml");
			}
			Map<String, Object> parameters = (Map<String, Object>) param.get("PARAMETERS");
			if (parameters != null) {
				for (Entry<String, Object> entry : parameters.entrySet()) {
					if(fileContent.indexOf("${CONTENT}") > -1){
						fileContent = fileContent.replaceAll("[$]\\{"+entry.getKey()+"\\}", (String) entry.getValue());
					} else  {
						fileContent = fileContent.replaceAll("#\\{"+entry.getKey()+"\\}", (String) entry.getValue());
					}
				}
			}
			emailMap.put("CONTENT", fileContent);
            /* (1) 발송 요청 */
            String rstMsg = nbdfMailService.mailSnd(emailMap);
            whoColumnSet(emailMap);

            if("success".equalsIgnoreCase(rstMsg)){
                emailMap.put("SNDNG_YN", "Y");
                if( insertEmailSndngLogs(emailMap, (String) param.get("JOB_SYS_CD")) ){
                    return "success";
                }
            }else{
                insertEmailSndngLogs(emailMap, (String) param.get("JOB_SYS_CD"));
                throw new BizException(rstMsg);
            }
            return rstMsg;
        }    
    /**
    * @fn
    * @brief (Override method) (1) EMAIL 발송을 위한  로그 테이블에 저장
    * @remark
    * - EMAIL 발송 정보 로그 테이블에 저장
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#emailSend(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public String insertBatchEmailSndngLogs(String toAddr, String toName, String fromAddr,
            String fromName, String toCc, String toCcName, String subject, String content,
            String jobSysCd) {

            ConcurrentHashMap<String, Object> emailMap = new ConcurrentHashMap<String, Object>();

            emailMap.put("TO_ADDR", toAddr);
            emailMap.put("TO_NAME", toName );
            emailMap.put("FROM_ADDR", fromAddr );
            emailMap.put("FROM_NAME", fromName );
            emailMap.put("TO_CC", toCc );
            emailMap.put("TO_CC_NAME", toCcName );
            emailMap.put("SUBJECT", subject );
            emailMap.put("CONTENT", content );
            emailMap.put("JOB_SYS_CD", jobSysCd.toUpperCase() );
            emailMap.put("SNDNG_YN", "N");
            /* (1) 발송 요청 */
            String rstMsg = "success";
            whoColumnSet(emailMap);

            logger.debug("insertBatchEmailSndngLogs.....emailMap...."+emailMap);

            insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());

            return rstMsg;
        }


    /**
    * @fn
    * @brief (Override method) (2) EMAIL 발송 요청
    * @remark
    * - EMAIL 발송 요청 후 로그 테이블에 저장
    * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#emailSend(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public String emailSend(String toAddr, String fromAddr, String subject,
            String content, String jobSysCd)  {

        Map<String, Object> emailMap = new ConcurrentHashMap<String, Object>();

        emailMap.put("TO_ADDR", toAddr);
        emailMap.put("TO_NAME", "" );
        emailMap.put("FROM_ADDR", fromAddr );
        emailMap.put("FROM_NAME", "" );
        emailMap.put("TO_CC", "" );
        emailMap.put("TO_CC_NAME", "" );
        emailMap.put("SUBJECT", subject );
        emailMap.put("CONTENT", content );
        emailMap.put("JOB_SYS_CD", jobSysCd.toUpperCase() );
        emailMap.put("SNDNG_YN", "F");
        /* (1) 발송 요청 */
        String rstMsg = nbdfMailService.mailSnd(emailMap);
        whoColumnSet(emailMap);

        if("success".equalsIgnoreCase(rstMsg)){
            emailMap.put("SNDNG_YN", "Y");
            if( insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase()) ){
                return "success";
            }
        }else{
            insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());
            throw new BizException(rstMsg);
        }
        return rstMsg;
    }

    /**
    * @fn : insertEmailSndngLogs
    * @brief : EMAIL 발송 후 로그 테이블에 저장
    * @Method Name : insertEmailSndngLogs
    * @Create Date: 2015 2015. 4. 16. 오후 9:08:35
    * @Author: JIn Sung Ha
    * @param: Map(EMAIL 발송 정보), JobSysCd(업무시스템 코드)
    * @return: boolean
    * @throws : Exception
    */
    public boolean insertEmailSndngLogs(Map<String, Object> emailMap, String jobSysCd){
        if( !(generalDao.addUpdate(NAMESPACE + ".insertEmailSndngLogs", emailMap) == 1) ){
            return false;
        }
        return true;
    }

    /**
    * @fn : whoColumnSet
    * @brief : whoColumn 자동 설정 함수
    * @Method Name : whoColumnSet
    * @Create Date: 2015 2015. 4. 16. 오후 9:30:40
    * @Author: JIn Sung Ha
    * @param: Map<String, Object>
    * @return: Map<String, Object>
    * @throws : Exception
    */
    public Map<String, Object> whoColumnSet(Map<String, Object> emailMap){
    	emailMap.put("CREATED_BY", SessionUtil.getSessionValue("USER_ID"));
        emailMap.put("LAST_UPDATED_BY",SessionUtil.getSessionValue("USER_ID"));
        emailMap.put("LAST_UPDATE_LOGIN",SessionUtil.getSessionValue("LGN_LOG_ID"));
       return emailMap;
   }

    public boolean smsValidCheck(String rcvPhnNo, String sndPhnNo, String sndMsg) {

        if(EgovObjectUtil.isNull(rcvPhnNo) ||  StringUtil.isEmpty(rcvPhnNo)) {
            logger.error("[SMS ERROR] 받는 사람 전화번호 NULL " + rcvPhnNo );
            return false;
        }

        if(EgovObjectUtil.isNull(sndPhnNo) ||  StringUtil.isEmpty(sndPhnNo)) {
            logger.error("[SMS ERROR] 보내는 사람 전화번호 NULL " + sndPhnNo );
            return false;
        }

        if(EgovObjectUtil.isNull(sndMsg) ||  StringUtil.isEmpty(sndMsg)) {
            logger.error("[SMS ERROR] 메시지 내용 NULL " + sndMsg );
            return false;
        }

        final String _phoneNmFormat = "1234567890";

        int length =  StringUtil.stringConByte(sndMsg);
        if(length > Integer.parseInt(getComProperty("env.sms.msgBytes"))) {
            logger.error("메시지 내용 초과 : " + length + " 허용 가능 메시지 크기는 "+ Integer.parseInt(getComProperty("env.sms.msgBytes")) + "입니다.");
            return false;
        }

        String rcvPhnNM = rcvPhnNo;
        String sndPhnNM = sndPhnNo;

        sndPhnNM = ObjectUtil.replaceNum(sndPhnNo);
        rcvPhnNM = ObjectUtil.replaceNum(rcvPhnNM);

       if(!StringUtil.match(sndPhnNM,_phoneNmFormat)){
           logger.error("[SMS ERROR] 전화 번호 형식 오류 보내는 사람 휴대전화 : " + sndPhnNo );
           return false;
       }

       if(!StringUtil.match(rcvPhnNM,_phoneNmFormat)){
           logger.error("[SMS ERROR] 전화 번호 형식 오류 받는 사람 휴대전화 : " + rcvPhnNM );
           return false;
       }
        return true;
    }
    
    /**
     * @fn
     * @brief (Override method) new AtchSrcKey 조회
     * @remark
     * SndngLogId 조회
     * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#selectAtchSrcKey(com.nbdf.commons.ui.vo.UiMapDto)
     */   
     public void selectAtchSrcKey(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);
         List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectAtchSrcKey", param);
         putDataSetMap(dto, list);
     }  
     
     /**
      * @fn
      * @brief (Override method) saveEmailSend
      * @remark
      * saveEmailSend
      * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#saveEmailSend(com.nbdf.commons.ui.vo.UiMapDto)
      */   
      public void saveEmailSend(UiMapDto dto) throws Exception {
    	int result = 0;
    	String toAddr = "";    	
        String toName = "";    	
        String fromAddr = "";    	
        String fromName = "";    	
        String toCc = "";    	
        String toCcName = "";    	
        String subject = "";    	
        String content = "";    	
        String jobSysCd = "";    	
        int cnt = 0;
        
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
        Map<String, Object> param2 = dsMap2.get(0);
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("1".equals(param.get("CHK"))){
            	toAddr = toAddr + (cnt==0?"":";") + (String) param.get("EMAIL_ADDR");
            	toName = toName + (cnt==0?"":";") + (String) param.get("USER_NM");
            	cnt++;
            }
        }
    	fromAddr = (String) param2.get("FROM_ADDR");
    	fromName = (String) param2.get("FROM_NAME");
    	subject = (String) param2.get("SUBJECT");
    	content = (String) param2.get("CONTENT");
    	jobSysCd = (String) param2.get("JOB_SYS_CD");
    	emailSend(toAddr, toName, fromAddr, fromName, toCc, toCcName, subject, content, jobSysCd, param2);
        putDataSetMap(dto, result);
      }  
      
      /**
       * @fn selectCmdSndngLogsList
       * @brief (Override method) 이메일로그 조회
       * @remark
       * SndngLogId 조회
       * @see com.nbdf.cmd.cm.cmam.service.CMAM00100Service#selectCmdSndngLogsList(com.nbdf.commons.ui.vo.UiMapDto)
       */   
       public void selectCmdSndngLogsList(UiMapDto dto) throws Exception {
           Map<String, Object> param = getParametersMap(dto);
           List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdSndngLogsList", param);
           putDataSetMap(dto, list);
       }  
       
       public void selectUserGroupUserList(UiMapDto dto) throws Exception {
           Map<String, Object> param = getParametersMap(dto);
           List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectUserGroupUserList", param);
           putDataSetMap(dto, list);
       }  
      
}
