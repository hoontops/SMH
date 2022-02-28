package com.nbdf.cmd.cm.cmtt.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMTT0100Service.java
* @Package: com.nbdf.cmd.cm.cmtt.service
* @Project name: IFC MES시스템 구축
* @Type name: CMTT0100Service
* @Company: Built1
* @Create Date: 2015. 5. 6. 오전 10:01:59
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 5. 6.        JIn Sung Ha     최초
 *
*/
public interface CMTT0100Service {

    /**
    * @fn : submitEmail
    * @brief : Email발송 테스트
    * @Method Name : submitEmail
    * @Create Date: 2015. 5. 6. 오전 10:02:02
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: Void
    * @throws : Exception
    */
    public void submitEmail(UiMapDto dto)  throws Exception ;

    /**
    * @fn : submitEmail
    * @brief : SMS발송 테스트
    * @Method Name : submitEmail
    * @Create Date: 2015. 5. 6. 오전 10:02:04
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: Void
    * @throws : Exception
    */
    public void submitSms(UiMapDto dto) throws Exception  ;

    /**
    * @fn : maskingSample
    * @brief : 마스킹 처리 샘플
    * @Method Name : maskingSample
    * @Create Date: 2015. 6. 4. 오후 2:14:16
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void maskingSample(UiMapDto dto) throws Exception;
    
    public void insertSms(UiMapDto dto) throws Exception;
}
