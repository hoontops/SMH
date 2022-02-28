package com.nbdf.batch.manager;

import java.util.Map;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

/**
* @file: MailManager.java
* @Package: com.nbdf.batch.manager
* @Project name: IFC MES시스템 구축
* @Type name: MailManager
* @Company: Built1
* @Create Date: 2015 2015. 10. 4. 오후 1:55:58
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 10. 4.   진성하     최초  생성
 *
*/
public class MailManager{

    /**
    * @fn : defaultMapCheck
    * @brief : E-Mail 서비스를 위한 기본적인 null 체크
    * @Method Name : defaultMapCheck
    * @remark
    * @Create Date: 2015 2015. 10. 4. 오후 1:55:34
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 10. 4.    진성하     최초  생성
     *
    */
    public static Map<String, Object> defaultMapCheck(Map<String, Object> param){
        boolean check = true;

        if( param.get("SUBJECT_TEXT") == null ){
            param.put("RM", "제목이 없습니다.");
            check = false;
        }

        if(param.get("SENDER_INFO") == null){
            param.put("RM", "보내는 사람 주소가 없습니다.");
            check = false;
        }

        if(param.get("RCVER_INFO") == null){
            param.put("RM", "받는 사람 주소가 없습니다.");
            check = false;
        }

        if(param.get("COMMENTS") == null ){
            param.put("RM", "메일 내용이 없습니다.");
            check = false;
        }
        param.put("defaultMapCheck", check);
        return param;
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
             result = false;
         }
         return result;
     }


}
