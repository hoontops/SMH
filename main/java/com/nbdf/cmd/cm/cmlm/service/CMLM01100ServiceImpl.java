package com.nbdf.cmd.cm.cmlm.service;

//import com.nbdf.cmd.cm.cmsm.service.CMSM01000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.nbdf.commons.interceptor.ContextSqlSentence;



/**
* @file: CMLM01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmlm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMLM01100ServiceImpl
* @Company: Built1
* @Create Date: 2015. 3. 16. 오후 1:42:41
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일           수정자    수정내용
 *   ------------  ------  ----------
 *   2015. 3. 16.    진성하     최초  생성
 *   2015.10. 02.    진성하     업무 메뉴별 로그 등록 추가
 *
*/
@Service
public class CMLM01100ServiceImpl extends AbstractNbdfService implements CMLM01100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmlm.dao.CMLM01100Dao";

    public static final String NAMESAPCE_CMCM = "com.nbdf.cmd.cm.cmcm.dao.CMCM01100Dao";

    @Autowired
    private GeneralDao generalDao;

    /* @Autowired
    private CMSM01000Service cmsm0100service;*/

    /**
     * @fn
     * @brief (Override method) 업무 메뉴별 로그 등록
     * @remark
     * - 경영포털에서 nexa메뉴 오픈시 호출 (팝업 제외)
     * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#insertJobMenuLogs(java.util.Map)
     */
     public void insertJobMenuLogs(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);

         String job_menu_id = (String)param.get("JOB_MENU_ID");
         if(job_menu_id == null || job_menu_id.equals("")) {
             logger.debug("JOB_MENU_ID is null : " + job_menu_id);
             return;
         }
         // 환결설정 값을 코트 테이블에서 가져오기
         Map<String, Object> cdParam = new ConcurrentHashMap<String, Object>();
         cdParam.put("GRP_CD", "CMD_ENV_SET");
         cdParam.put("CM_CD", "JOB_MENU_INSERT_YN");
         List<Map<String, Object>> list  = generalDao.addSelect(NAMESAPCE_CMCM + ".selectCmCdOneUse", cdParam);
         String jobMenuInsertYn = "Y";
         if(list == null || list.size() == 0) {
             jobMenuInsertYn = "N";
         } else {
             jobMenuInsertYn = (String)list.get(0).get("USE_YN");
             //logger.debug("JOB_MENU_INSERT_YN(USE_YN) => " +   jobMenuInsertYn);
         }
         logger.debug("result [jobMenuInsertYn] => " +   jobMenuInsertYn);

         if("Y".equals(jobMenuInsertYn)) {
             int result = generalDao.addInsert(NAMESAPCE + ".insertJobMenuLogs", param);
             logger.debug("insertJobMenuLogs : JOB_MENU_ID = " + job_menu_id + ", result = " + result);
         }
     }

     /**
      * @fn
      * @brief (Override method) 메뉴 사용 로그 카운트 조회
      * @remark
      * @see
      */
      public void selectJobMenuLogsCount(UiMapDto dto)  throws Exception {
          Map<String, Object> param = getParametersMap(dto);
          putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectJobMenuLogsCount", param));
      }

     /**
      * @fn
      * @brief (Override method) 메뉴 사용 로그 조회
      * @remark
      * @see
      */
      public void selectJobMenuLogsList(UiMapDto dto)  throws Exception {
          Map<String, Object> param = getParametersMap(dto);
          putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectJobMenuLogsList", param));
      }

    /**
    * @fn
    * @brief (Override method) 로그 조회
    * @remark
    * - 저장된 로그 조회
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#selectLogList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectLogList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectLogList", param);
        putDataSetMap(dto, list, "ds_Log");

        list = generalDao.addSelect(NAMESAPCE + ".selectLogCount", param);
        putDataSetMap(dto, list, "ds_logCount");
    }


    /**
    * @fn
    * @brief (Override method) 로그 저장
    * @remark
    * - URI 호출시 로그 저장
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#insertLog(java.util.Map)
    */
    public void insertLog(Map map) throws Exception {
        generalDao.addInsert(NAMESAPCE + ".insertLog", map);
    }


    /**
    * @fn
    * @brief (Override method) SMS로그 조회
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#selectSmsLogList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectSmsLogList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;

        list00 = generalDao.addSelect(NAMESAPCE + ".selectSmsLogList", param);
        list01 = generalDao.addSelect(NAMESAPCE + ".selectSmsLogCount", param);
        //cmsm0100service.insertIvlInfoList("SMS로그조회" , NAMESAPCE+".selectSmsLogList", ContextSqlSentence.sqlSentence.trim(), ContextSqlSentence.qryCnd, Integer.toString(list00.size()) );
        putDataSetMap(dto, list00, "ds_smsLog");
        putDataSetMap(dto, list01, "ds_smsCount");

    }

    /**
    * @fn
    * @brief (Override method) SMS로그 COUNT 조회 (PAGING)
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#selectSmsSumList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectSmsSumList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;

        list00 = generalDao.addSelect(NAMESAPCE + ".selectSmsSumList", param);
        list01 = generalDao.addSelect(NAMESAPCE + ".selectSmsSumCount", param);

        putDataSetMap(dto, list00, "ds_smsSum");
        putDataSetMap(dto, list01, "ds_smsSumCount");
    }

    /**
    * @fn
    * @brief (Override method) EMAIL 발송 로그 및 갯수 조회
    * @remark
    * - EMAIL 발송 로그 및 갯수 조회
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#selectEmailLogList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectEmailLogList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;
        List<Map<String, Object>> list02 = null;


        list00 = generalDao.addSelect(NAMESAPCE + ".selectEmailLogList", param);
        list01 = generalDao.addSelect(NAMESAPCE + ".selectEmailLogCount", param);
        list02 = generalDao.addSelect(NAMESAPCE + ".selectEmailLogListExcel", param);

        putDataSetMap(dto, list00, "ds_emailLog");
        putDataSetMap(dto, list01, "ds_emailCount");
        putDataSetMap(dto, list02, "ds_emailLogExcel");
    }

    @Override
    public void selectEmailSumList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;
        List<Map<String, Object>> list02 = null;

        list00 = generalDao.addSelect(NAMESAPCE + ".selectEmailSumList", param);
        list01 = generalDao.addSelect(NAMESAPCE + ".selectEmailSumCount", param);
        list02 = generalDao.addSelect(NAMESAPCE + ".selectEmailSumListExcel", param);

        putDataSetMap(dto, list00, "ds_emailSum");
        putDataSetMap(dto, list01, "ds_emailSumCount");
        putDataSetMap(dto, list02, "ds_emailSumExcel");
    }
}
