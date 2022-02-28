package com.nbdf.cmd.cm.cmbs.service;

import static com.nbdf.batch.consts.CmdConsts.NS_CMD_BATCH;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.quartz.CronExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.batch.manager.BatchFileManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: CMBS01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmbs.service
* @Project name: IFC MES시스템 구축
* @Type name: CMBS01100ServiceImpl
* @Company: Built1
* @Create Date: 2015. 6. 23. 오전 9:15:21
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 6. 23.        JIn Sung Ha     최초  생성 1
 *
*/
@Service
public class CMBS01100ServiceImpl extends AbstractNbdfService implements CMBS01100Service, Runnable {

    private UiMapDto dto;

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmbs.dao.CMBS01100Dao";
    private static final String NM_BATCH = NS_CMD_BATCH;

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method) 배치 프로그램 관리 조회
    * @remark
    * - 배치 프로그램 관리 조회
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#selectLogList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;

            list00 = generalDao.addSelect(NAMESAPCE + ".selectBatchList", param);
            list01 = generalDao.addSelect(NAMESAPCE + ".selectBatchCount", param);
        putDataSetMap(dto, list00, "ds_batch");
        putDataSetMap(dto, list01, "ds_batchCount");
    }

    /**
    * @fn
    * @brief (Override method) 배치 프로그램 관리 저장 기능
    * @remark
    * - 배치 프로그램 관리 저장 기능
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#saveBatch(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveBatch(UiMapDto dto) throws Exception {

        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;
        List<String> list = new ArrayList<String>();
        int saveCount = 0;

        GeneralDao dao = generalDao;

        if(paramMap.size() > 0) {
            for (int i = 0, n = paramMap.size(); i < n; i++) {
                param = paramMap.get(i);
                int type = getRowType(param);

                logger.debug("type : " + type);

                if (type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED || type == DataSet.ROW_TYPE_DELETED ) {
                    //list.add((String)param.get("SVR_GUBUN_CD"));
                    list.add((String)param.get("BAT_PGM_CD"));

                    if(  type != DataSet.ROW_TYPE_DELETED) {
                        if(  type != DataSet.ROW_TYPE_UPDATED) {
                        list.add((String)param.get("BAT_PGM_ID"));
                        list.add((String)param.get("BAT_PGM_CD"));
                        }
                    }if (type == DataSet.ROW_TYPE_INSERTED) {
                        saveCount += dao.addUpdate(NAMESAPCE + ".insertBatch", param);
                    }else if (type == DataSet.ROW_TYPE_UPDATED) {
                        saveCount += dao.addUpdate(NAMESAPCE + ".updateBatch", param);
                    }else if (type == DataSet.ROW_TYPE_DELETED) {
                    saveCount = dao.addUpdate(NAMESAPCE + ".deleteBatch", param);
                    }
                }
            }
        }
        putDataSetMap(dto, saveCount);
    }

    public static String mapSearch( List<Map<String, Object>> list, String search) {
        String result = "";

        for(int i=0; i<list.size(); i++) {
            Map<String, Object> map = list.get(i);
            result = map.get(search).toString();
        }
        return result;
    }

    /**
    * @fn
    * @brief (Override method) 배치 파라미터 조회
    * @remark
    * - 배치 파리미터 호출시 해당 파리미터 존재 우뮤 조회
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#selectBatchParamList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectBatchParamList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        GeneralDao dao = generalDao;

        List<Map<String, Object>> list = dao.addSelect(NAMESAPCE + ".selectBatchParamList", param);
        putDataSetMap(dto, list, "ds_batchParam");
    }

    /**
     * @fn
     * @brief (Override method) 배치 파라미터 조회
     * @remark
     * - 배치 파라미터 팝업 호출시 파라미터 조회
     * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#selectBatchParamList(com.nbdf.commons.ui.vo.UiMapDto)
     */
     @Override
     public void saveBatchParam(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> map = getParametersMap(dto);
         Map<String, Object> param;
         GeneralDao dao = generalDao;
         int result = 0;
         boolean flag = true;


         if(paramMap.size() > 0) {
             for (int i = 0, n = paramMap.size(); i < n; i++) {
                 param = paramMap.get(i);
                 if(flag) {
                     result += dao.addUpdate(NAMESAPCE + ".deleteParam", param);
                     result += dao.addUpdate(NAMESAPCE + ".updateParamToLastUpdate", param);
                     flag = false;
                 }
                 if (getRowType(param) != DataSet.ROW_TYPE_DELETED ) {
                     param.put("PARAMTR", ((String) param.get("PARAMTR")).trim());
                     //if(! "".equals(param.get("DEF_VAL"))) {
                     if(! "".equals(ObjectUtil.toStrTrim(param.get("DEF_VAL")))) {
                         //param.put("PARAMTR", ((String) param.get("PARAMTR")).trim());
                         param.put("DEF_VAL", ((String) param.get("DEF_VAL")).trim());
                     }
                     result += dao.addUpdate(NAMESAPCE + ".insertParam", param);
                 }
             }
         }
         putDataSetMap(dto, result);
     }

    /**
    * @fn
    * @brief (Override method) 배치 작업 목록
    * @remark
    * - 배치 작업 목록 조회(배치 작업 상세 페이지에서도 사용)
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#selectBatchWKSList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectBatchWKSList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;

            list00 = generalDao.addSelect(NAMESAPCE + ".selectBatchWKSList", param);
            list01 = generalDao.addSelect(NAMESAPCE + ".selectBatchWKSCount", param);
        putDataSetMap(dto, list00, "ds_batchWKS");
        putDataSetMap(dto, list01, "ds_batchWKSCount");
    }

    /**
    * @fn
    * @brief (Override method) 배치 작업 삭제
    * @remark
    * - 배치작업 삭제 (배치 상세 페이지에 호출)
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#deleteBatchWKS(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void deleteBatchWKS(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

            putDataSetMap(dto,  generalDao.addUpdate(NAMESAPCE + ".deleteBatchWKS", param));

    }

    /**
    * @fn
    * @brief (Override method) 배치작업 등록
    * @remark
    * - 배치 작업 등록시 작업 프로그램 코드 하나당 배치 작업 번호가 중복될 수 없으므로 해당 로직 체크 후 저장 기능 수행
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#saveBatchWks(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void insertBatchWKS(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

            putDataSetMap(dto, generalDao.addUpdate(NAMESAPCE + ".insertBatchWKS", param));
     }

    /**
    * @fn
    * @brief (Override method) 배치 프로그램 관리에서 행 삭제 시 배치 작업 목록에 등록된 데이터가 있는지 여부 체크
    * @remark
    * - 배치 프로그램 관리에서 행 삭제시 배치 작업 목록에 등록된 데이터가 있는지 여부 체크
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#selectBatchWksDupCheck(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchWksDupCheck(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        int result = generalDao.addSelectCount(NAMESAPCE + ".selectBatchWksDupCheck", param);

        if( result > 0) {
            putDataSetMap(dto, result);
        }else {
            putDataSetMap(dto, 0);
        }
    }

    public void deleteBatchDupWKS(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        int result = generalDao.addUpdate(NAMESAPCE + ".deleteBatchDupWKS", param);

        if( result > 0) {
            putDataSetMap(dto, result);
        }else {
            putDataSetMap(dto, 0);
        }
    }

    /**
    * @fn
    * @brief (Override method) 배치작업  수정
    * @remark
    * - 배치 작업 등록시 작업 프로그램 코드 하나당 배치 작업 번호가 중복될 수 없으므로 해당 로직 체크 후 저장 기능 수행
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#saveBatchWks(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void updateBatchWKS(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        putDataSetMap(dto, generalDao.addUpdate(NAMESAPCE + ".updateBatchWKS", param));

    }

    /**
    * @fn
    * @brief (Override method) 배치 실행 샘플
    * @remark
    * - 배치 작업 상세 화면에서 [실행] 버튼을 클릭시 호출(샘플)
    * (1) 해당 배치가 실행되어도 되는가 여부 체크 ( 중복 수행 가능여부, 기존 실행 시 오류 여부)
    * (2) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 저장
    * (3) 배치 실행
    * (4) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 삭제
    * (5) 배치 결과 저장
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#executeSampleBatch(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void executeSampleBatch(UiMapDto dto) {
        String nsCmdBatch =   "com.nbdf.batch.dao.BatchDao.";
        String nsBatchJob  =  "com.nbdf.batch.dao.BatchSpDao.";
        boolean hasAttachedFiles = false;
        boolean exeute = true;

        Map<String, Object> param = getParametersMap(dto);
        String batWkId = param.get("BAT_WK_ID").toString();

        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>    QUARTZ BATCH JOB INFO    <<<<<<<\n\t--------------------------------------------------------------")
                    .append("\n\tJOB ID : ")
                    .append(batWkId);


        logger.info("===================  SVR_GUBUN_CD {}" , param.get("SVR_GUBUN_CD"));

        defaultMapSet(param,  batWkId);
        generalDao.addUpdate(nsCmdBatch + "insertBatchExecuteLogStart", param);
        Map<String, Object>  map = generalDao.addSelectOneMap(nsCmdBatch+"selectBacthJobInfo", param);
        List<Map<String, Object>> list = generalDao.addSelect(nsCmdBatch+"selectBatchExecuteStartParamInfo", map);

        for(int i=0; i <list.size();i++) {
            Object key = list.get(i).get("KEY");
            if( key != null) {
                Object paramValue = list.get(i).get("VALUE");
                param.put( key.toString(), paramValue );
                if ("CMD_ATCH_FILES".equals(paramValue)) {
                    hasAttachedFiles = true;
                }
            }
        }

        try{
           //generalDao.addSelectOneMap(nsBatchJob+map.get("EXEC_FN").toString(), param);
             generalDao.addSelectOneMap("selectBatchCallList", param);
             if(param.get("P_ERR_DESC") == null ){
                 defaultMapSet(param, batWkId);
              }
        }catch(IndexOutOfBoundsException iob){
            String[] errMsg = iob.getMessage().split(":");
            param.put("ERR_DESC" , errMsg[0]);
            generalDao.addUpdate(nsCmdBatch + "updateBatchExecuteErrorLog", param);
            logBuilder.append("\n\tIndexOutOfBoundsException : ").append(iob)
                        .append("\n\t--------------------------------------------------------------\n");
            logger.error(logBuilder.toString());
            exeute = false;
        }

        if("실행 중".equals(param.get("P_ERR_DESC"))){
            param.put("P_ERR_DESC",  "정상처리 되었습니다.");
         }

        if( exeute ){
            if (hasAttachedFiles) {
                List<Map<String, Object>> fileList = generalDao.addSelect(nsCmdBatch+"selectBatchExecuteStartParamInfo", param);
                BatchFileManager.removeAttachFiles(fileList);
            }
            generalDao.addUpdate(nsCmdBatch + "updateBatchExecuteLogEnd", param);
        }
        logBuilder.append("\n\t메시지 : ")
                    .append(param.get("P_ERR_DESC"))
                    .append("\n\t처리대상건수 : ")
                    .append(param.get("P_FET_CNT"))
                    .append("\n\t스킵건수 : ")
                    .append(param.get("P_SKP_CNT"))
                    .append("\n\t오류건수 : ")
                    .append(param.get("P_ERR_CNT"))
                    .append("\n\t--------------------------------------------------------------\n");
        logger.debug(logBuilder.toString());
     }

    public Map<String, Object> defaultMapSet(Map<String, Object> param, String batWkId){
        param.put("BAT_WK_ID",  batWkId); // 배치 프로그램 ID
        param.put("BAT_SUCC_YN",  "N"); // 배치 실행 여부
        param.put("EXECUT_GUBUN_CD",  "RE_EXEC"); // 실행 구분 코드
        param.put("P_FET_CNT",  0); // 처리 대상 건수
        param.put("P_SKP_CNT",  0); // 스킵 건수
        param.put("P_ERR_CNT",  0); // 오류 건수
        param.put("P_ERR_DESC", "실행 중");

        return param;
    }

    /**
    * @fn
    * @brief (Override method) 배치 실행 샘플
    * @remark
    * - 배치 작업 상세 화면에서 [실행] 버튼을 클릭시 호출(샘플)
    * (1) 해당 배치가 실행되어도 되는가 여부 체크 ( 중복 수행 가능여부, 기존 실행 시 오류 여부)
    * (2) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 저장
    * (3) 배치 실행
    * (4) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 삭제
    * (5) 배치 결과 저장
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#executeSampleBatch(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void executeSampleBatch1(UiMapDto dto) {
        String nsCmdBatch =   "com.nbdf.batch.dao.BatchDao.";
        String nsBatchJob  =  "com.nbdf.batch.dao.BatchSpDao.";
        boolean hasAttachedFiles = false;
        boolean exeute = true;

        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_batchWKS");
        Map<String, Object> param = dsMap.get(0);

        String batWkId = param.get("BAT_WK_ID").toString();
        String dupExecEnblYn = (String) param.get("DUP_EXEC_ENBL_YN");
        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>    QUARTZ BATCH JOB INFO1    <<<<<<<\n\t--------------------------------------------------------------")
                    .append("\n\tJOB ID : ")
                    .append(batWkId);

        logger.info("===================  SVR_GUBUN_CD {}" , param.get("SVR_GUBUN_CD"));

        //if(generalDao.addSelectCount(nsCmdBatch+"selectDupBatchAlived", param) > 0 ){
        if("N".equals(dupExecEnblYn) && generalDao.addSelectCount(nsCmdBatch+"selectDupBatchAlived", param) > 0 ){	//2018.03.12
            exeute = false;
            logBuilder.append("\n\t해당 배치JOB이 실행 중이므로 실행 할수 없습니다.=> batWkId : ")
                        .append(batWkId)
                        .append("\n\t--------------------------------------------------------------\n");
            logger.debug(logBuilder.toString());
            param.put("ERR_DESC", "해당 배치JOB이 실행 중이므로 실행 할수 없습니다.");

        }else{
            generalDao.addUpdate(nsCmdBatch + "insertDupCheck", param);
            defaultMapSet(param,  batWkId);
            generalDao.addUpdate(nsCmdBatch + "insertBatchExecuteLogStart", param);

            DataSetMap dsMap2 = getParametersDataSetMap(dto, "ds_batchParam");
            for (int i = 0, n = dsMap2.size(); i < n; i++) {
                Map<String, Object> param2 = dsMap2.get(i);
                param2.put("BAT_LOG_ID", param.get("BAT_LOG_ID"));
                param2.put("BAT_WK_ID", param.get("BAT_WK_ID"));
                generalDao.addUpdate(nsCmdBatch + "insertCmdBatWksParamtrs", param2);
            }

        }


        putDataSetMap(dto, param, "output");
    }

    /**
    * @fn
    * @brief (Override method) 배치 실행 샘플
    * @remark
    * - 배치 작업 상세 화면에서 [실행] 버튼을 클릭시 호출(샘플)
    * (1) 해당 배치가 실행되어도 되는가 여부 체크 ( 중복 수행 가능여부, 기존 실행 시 오류 여부)
    * (2) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 저장
    * (3) 배치 실행
    * (4) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 삭제
    * (5) 배치 결과 저장
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#executeSampleBatch(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void executeThreadSampleBatch(UiMapDto dto) {
        logger.debug("executeThreadSampleBatch start.....");
        this.dto = dto;
        Thread thr = new Thread(this);
        long threadId = thr.getId();
        logger.error("Thread # " + threadId + " is doing this task");
        
        thr.start();
    }

    /**
    * @fn
    * @brief (Override method) 배치 실행 샘플
    * @remark
    * - 배치 작업 상세 화면에서 [실행] 버튼을 클릭시 호출(샘플)
    * (1) 해당 배치가 실행되어도 되는가 여부 체크 ( 중복 수행 가능여부, 기존 실행 시 오류 여부)
    * (2) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 저장
    * (3) 배치 실행
    * (4) CMD_BAT_DUP_EXEC_MNTRNGS 테이블에 배치 정보 삭제
    * (5) 배치 결과 저장
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#executeSampleBatch(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void executeSampleBatch2(UiMapDto dto) {
        String nsCmdBatch =   "com.nbdf.batch.dao.BatchDao.";
        String nsBatchJob  =  "com.nbdf.batch.dao.BatchSpDao.";
        boolean hasAttachedFiles = false;
        boolean exeute = true;

        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_batchWKS");
        Map<String, Object> param = dsMap.get(0);
        String batWkId = param.get("BAT_WK_ID").toString();

        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>    QUARTZ BATCH JOB INFO2    <<<<<<<\n\t--------------------------------------------------------------")
                    .append("\n\tJOB ID : ")
                    .append(batWkId);


        logger.info("===================  SVR_GUBUN_CD {}" , param.get("SVR_GUBUN_CD"));

        //defaultMapSet(param,  batWkId);
        //generalDao.addUpdate(nsCmdBatch + "insertBatchExecuteLogStart", param);
        Map<String, Object>  map = generalDao.addSelectOneMap(nsCmdBatch+"selectBacthJobInfo", param);

        List<Map<String, Object>> list = null;
        if("DIRECT".equals(param.get("BAT_CYCLE_KND"))){
            list = generalDao.addSelect(nsCmdBatch+"selectCmdBatWksParamtrsList", map);
        }else{
            list = generalDao.addSelect(nsCmdBatch+"selectBatchExecuteStartParamInfo", map);
        }

        for(int i=0; i <list.size();i++) {
            Object key = list.get(i).get("KEY");
            if( key != null) {
                Object paramValue = list.get(i).get("VALUE");
                param.put( key.toString(), paramValue );
                if ("CMD_ATCH_FILES".equals(paramValue)) {
                    hasAttachedFiles = true;
                }
            }
        }

        try{
           //generalDao.addSelectOneMap(nsBatchJob+map.get("EXEC_FN").toString(), param);
        	//logger.error("param-->"+param);
        	 if("SP".equals(param.get("BAT_PGM_TY_CD"))){
                 generalDao.addSelectOneMap("selectBatchCallList", param);
                 if(param.get("P_ERR_DESC") == null ){
                     defaultMapSet(param, batWkId);
                 }
        	 }
        }catch(IndexOutOfBoundsException iob){
            String[] errMsg = iob.getMessage().split(":");
            param.put("ERR_DESC" , errMsg[0]);
            generalDao.addUpdate(nsCmdBatch + "updateBatchExecuteErrorLog", param);
            logBuilder.append("\n\tIndexOutOfBoundsException : ").append(iob)
                        .append("\n\t--------------------------------------------------------------\n");
            logger.error(logBuilder.toString());
            exeute = false;
        }

        if("실행 중".equals(param.get("P_ERR_DESC"))){
            param.put("P_ERR_DESC",  "정상처리 되었습니다.");
         }

        if( exeute ){
            if (hasAttachedFiles) {
                List<Map<String, Object>> fileList = generalDao.addSelect(nsCmdBatch+"selectBatchExecuteStartParamInfo", param);
                BatchFileManager.removeAttachFiles(fileList);
            }
            generalDao.addUpdate(nsCmdBatch + "updateBatchExecuteLogEnd", param);
            generalDao.addUpdate(nsCmdBatch + "deleteDupCheck", batWkId);
        }
        logBuilder.append("\n\t메시지 : ")
                    .append(param.get("P_ERR_DESC"))
                    .append("\n\t처리대상건수 : ")
                    .append(param.get("P_FET_CNT"))
                    .append("\n\t스킵건수 : ")
                    .append(param.get("P_SKP_CNT"))
                    .append("\n\t오류건수 : ")
                    .append(param.get("P_ERR_CNT"))
                    .append("\n\t--------------------------------------------------------------\n");
        logger.debug(logBuilder.toString());
    }

    /**
    * @fn : executeBatchYN
    * @brief : 해당 배치가 실행 가능한지 여부를 체크
    *             (1) 중복 수행 가능여부 체크
    *             (2) 배치 테이블(CMD_BAT_DUP_EXEC_MNTRNGS)에 쓰레기가 남아 있는지 체크
    * @Method Name : executeBatchYN
    * @Create Date: 2015. 7. 14. 오후 1:59:58
    * @Author: JIn Sung Ha
    * @param: Map<String, Object> param
    * @return: boolean
    * @throws : Exception
    */
    public boolean executeBatchYN(Map<String, Object> param) {
        String dupExecEnblyn = (String) param.get("DUP_EXEC_ENBL_YN");
        int count;

        if(dupExecEnblyn.equals("Y")) { /* 중복 수행 가능 여부 Y (중복 수행이 가능) */
            return true;
        }else {                                 /* 중복 수행 가능 여부 N (중복 수행이 불가) */
            count = generalDao.addSelectCount(NAMESAPCE + ".selectBatchExcuteYN", param);
            logger.debug("기존 실행시 오류 발생 카운트 : " + count);
            if(count > 0) {
                logger.error("[executeBatchYN ERROR] 기존 실행시 오류가 발생되었습니다.\n관리자에게 문의하세요");
                return false; /* 기존에 실행하다가 오류가 발생한 경우 */
            }else {
               return true; /* 기존에 정상적으로 실행 / 최초 실행 */
            }
        }
    }


    /**
    * @fn
    * @brief (Override method) 배치 실행 결과 조회
    * @remark
    * - 배치 실행 결과 조회
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#selectBatchList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchResultList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;

            list00 = generalDao.addSelect(NAMESAPCE + ".selectBatchResultList", param);
            list01 = generalDao.addSelect(NAMESAPCE + ".selectBatchResultCount", param);

        putDataSetMap(dto, list00, "ds_batchResult");
        putDataSetMap(dto, list01, "ds_batchResultCount");
    }

	public void selectBatchResultDetailsList(UiMapDto dto) throws Exception {
	       Map<String, Object> param = getParametersMap(dto);
	       List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBatchResultDetailsList",param);

	       putDataSetMap(dto, list);
	}

	
    public void selectStoredProcedures(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list = null;

        list = generalDao.addSelect(NAMESAPCE + ".selectStoredProcedures", param);

        putDataSetMap(dto, list, "ds_sp");
    }

    /**
    * @fn
    * @brief (Override method) Quartz 스케줄러의 CronTrigger의 설정값(시간) 검증 로직
    * @remark
    * - Quartz 스케줄러의 CronTrigger의 설정값(시간) 검증 로직
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#isvalidCronExpress(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void isvalidCronExpress(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        if(CronExpression.isValidExpression(param.get("CRON_INFO").toString())){
            logger.debug("{} 해당 cron 문법 검증 성공 " , param.get("CRON_INFO").toString());
            putDataSetMap(dto, 1);
        }else{
            logger.debug("{} 해당 cron 문법 검증 실패(문법오류) " , param.get("CRON_INFO").toString());
            putDataSetMap(dto, 0);
        }

    }

    public strictfp void selectBatchResultListExcel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        /**
         * ######################################################
         * 조회 index from / to 를 설정하기 위한 페이징 정보 추출
         * ######################################################
         */
        double totalRows     = Double.parseDouble(String.valueOf(param.get("P_COUNT")));
        double rowsPerPage = Double.parseDouble(String.valueOf(param.get("P_END")));
        int loopCount    =  (int) Math.ceil(totalRows/rowsPerPage);

        logger.debug("##########################################");
        logger.debug("          전체 데이터 갯수    ["+totalRows+"]");
        logger.debug("          페이징당 데이터 수 ["+rowsPerPage+"]");
        logger.debug("          반복횟수                ["+loopCount+"]");
        logger.debug("##########################################");
        for(int idx = 0; idx < loopCount; idx++) {

            int startIndex = (int)(idx*rowsPerPage);
            int endIndex  =  (int)((idx*rowsPerPage)+(int)rowsPerPage)-1;

            param.put("P_START", startIndex);
            param.put("P_END", endIndex);

            list00 = generalDao.addSelect(NAMESAPCE + ".selectBatchResultListExcel", param);
            putDataSetMap(dto, list00, "ds_batchResult"+idx);

        }
    }

    /**
    * @fn
    * @brief (Override method) SMS설정 조회
    * @remark
    * - SMS설정 조회
    * @see com.nbdf.cmd.cm.cmlm.service.CMLM01100Service#selectCmdBatPgmSmsList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdBatPgmSmsList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list =  generalDao.addSelect(NAMESAPCE + ".selectCmdBatPgmSmsList", param);
        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method) 배치 프로그램 관리 저장 기능
    * @remark
    * - 배치 프로그램 관리 저장 기능
    * @see com.nbdf.cmd.cm.cmbs.service.CMBS01100Service#saveCmdBatPgmSms(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdBatPgmSms(UiMapDto dto) throws Exception {

        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;
        int saveCount = 0;

         if(paramMap.size() > 0) {
            for (int i = 0, n = paramMap.size(); i < n; i++) {
                param = paramMap.get(i);
                int type = getRowType(param);

                if (type == DataSet.ROW_TYPE_INSERTED) {
                    saveCount += generalDao.addUpdate(NAMESAPCE + ".insertCmdBatPgmSms", param);
                }else if (type == DataSet.ROW_TYPE_UPDATED) {
                    saveCount += generalDao.addUpdate(NAMESAPCE + ".updateCmdBatPgmSms", param);
                }else if (type == DataSet.ROW_TYPE_DELETED) {
                saveCount = generalDao.addUpdate(NAMESAPCE + ".deleteCmdBatPgmSms", param);
                }
            }
        }
        putDataSetMap(dto, saveCount);
    }

    /**
    * @fn
    * @brief (Override method)  selectShowImage
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmcd.service.CMCD02000Service#selectShowImage(com.nbdf.commons.ui.vo.UiMapDto)
    */
    /*
    public Map<String, Object> selectFndLobsFile(String fileId, String dbms) throws Exception {
        Map<String, Object> param = new HashMap<String, Object>();
        param.put("FILE_ID", fileId);
        Map<String, Object> rtnMap = null;
        if("DB_DSTM".equals(dbms)){
            rtnMap = imcsStmDao.addSelectOneMap(NAMESAPCE+".selectFndLobsFile",param);
        }else{
            rtnMap = generalDao.addSelectOneMap(NAMESAPCE+".selectFndLobsFile",param);
        }

        return rtnMap;
    }
    */

    public boolean executeBatch(Map<String,Object> param){
        String nsCmdBatch =   "com.nbdf.batch.dao.BatchDao.";
        //String batWkId = param.get("BAT_WK_ID")+"";
        boolean exeute = true;
        //BatchUtil.defaultMapSet(param,  batWkId);

        Map<String, Object>  map = generalDao.addSelectOneMap(NM_BATCH+"selectBacthJobInfo", param);
        List<Map<String, Object>> list = null;
        if("DIRECT".equals(map.get("BAT_CYCLE_KND"))){
            list = generalDao.addSelect(nsCmdBatch+"selectCmdBatWksParamtrsList", param);
        }else{
            list = generalDao.addSelect(nsCmdBatch+"selectBatchExecuteStartParamInfo", param);
        }

        for(int i=0; i <list.size();i++) {
            Object key = list.get(i).get("KEY");
            if( key != null) {
                Object paramValue = list.get(i).get("VALUE");
                param.put( key.toString(), paramValue );
            }
        }
        
        /* (3) 해당 JOB 수행 가능한 경우 로직 수행 */
        if(exeute){
            String  javaFunction = (String) map.get("JAVA_FUNCTION");
            param.put("BATCH_DELIMITER", javaFunction);
            // JOB 로직 실행
            excuteJavaJob(generalDao,javaFunction,param);
        }
        return true;
    }

    // JOB 로직
    public void excuteJavaJob(GeneralDao generalDao,String javaFunction, Map<String,Object> param){
    	
//    	if( "eMailBatch".equalsIgnoreCase(javaFunction) ) {
//            param = QuartzEmailServiceImpl.eMailBatch(param);
//
//            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
//
//            logger.debug("java P_ERR_CNT::::"+param.get("P_ERR_CNT"));
//            logger.debug("java param::::"+param);
//
//            int errCnt = 0;
//            if(param.get("P_ERR_CNT") != null) errCnt = (int) param.get("P_ERR_CNT");
//
//            if(param.get("P_ERR_CNT") != null && errCnt > 0){
//                param.put("ERR_DESC","오류건수가 " + param.get("P_ERR_CNT") + "건 입니다.");
//                generalDao.addUpdate(NM_BATCH + "updateBatchExecuteErrorLog", param);
//
//                //오류건수 SMS 전송
//                /*
//                List<Map<String, Object>> smsList = generalDao.addSelect(NM_BATCH_JOB_JAVA + "selectCmdBatPgmSmsList", param);
//                logger.debug("smsList.size ::: "+smsList.size());
//
//                String sndMsg ="" ;
//                logger.debug("java sndMsg ::: "+sndMsg);
//                for(int i=0; i <smsList.size();i++) {
//                    Map<String, Object> mapSms = smsList.get(i);
//                    sndMsg = "배치오류["+ mapSms.get("BAT_PGM_DESC") +"] : " +param.get("ERR_DESC") ;
//                    mapSms.put("SND_PHN_ID", mapSms.get("TEL_NO"));
//                    mapSms.put("RCV_PHN_ID", mapSms.get("TEL_NO"));
//                    mapSms.put("SND_MSG", sndMsg);
//                    mapSms.put("SND_PUSH_MSG", "");
//                    mapSms.put("JOB_SYS_CD", "CMD");
//
//                    generalDao.addUpdate(NM_BATCH_JOB_JAVA + "insertSmsSndIfs", mapSms);
//                }
//                */
//            }
//        } else if( "createFile_GR65".equalsIgnoreCase(javaFunction) ) {
//        	/*
//             *  지로청구관리 : 지로청구 파일 생성
//             */
//        	try {
//        		param.put("PATH", FileSupport.getUploadPath( "DRNP" ,  CmdConsts.ATCH_PATH , "IA" )); // 생성될 파일 경로
//        		DRNP01700ServiceImpl batch = new DRNP01700ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//			} catch (Exception e) {
//				e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); // 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); // 스킵 건수
//                param.put("P_ERR_CNT",  "1"); // 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); // 실행 구분
//                param.put("P_ERR_DESC",  e.getMessage()); // 에러메시지
//			}
//            
//        } else if( "procedure_ManyRcpts".equalsIgnoreCase(javaFunction) ) {
//        	/*
//             *  수납처리 : 수납처리( 지로, 실시간계좌이체, 센터직수납, 가상계좌직수납 등 )
//             */
//        	try {
//        		DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//			} catch (Exception e) {
//				e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); // 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); // 스킵 건수
//                param.put("P_ERR_CNT",  "1"); // 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); // 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); // 에러메시지
//			}
//            
//        } else if( "procedure_gw84Result".equalsIgnoreCase(javaFunction) ) {
//        	/*
//             *  은행자동이체 수납 : 지로청구 파일 생성
//             */
//        	try {
//        		DRRP00500ServiceImpl batch = new DRRP00500ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//			} catch (Exception e) {
//				e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//			}
//            
//        } else if( "createFile_GW83".equalsIgnoreCase(javaFunction) ) {
//        	/*
//             *  은행자동이체 청구 : 은행자동이체청구 파일 생성
//             */
//        	try {
//        		param.put("PATH", FileSupport.getUploadPath( "DRNP" ,  CmdConsts.ATCH_PATH , "IA" )); // 생성될 파일 경로
//        		DRNP02900ServiceImpl batch = new DRNP02900ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//			} catch (Exception e) {
//				e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//			}
//            
//        } else if( "procedure_chargeCreate".equalsIgnoreCase(javaFunction) ) {
//        	/*
//             *  청구정보생성 : 청구 집계
//             */
//        	try {
//        		DRNP00100ServiceImpl batch = new DRNP00100ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//			} catch (Exception e) {
//				e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//			}
//            
//        } else if( "createFile_CHARGE".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  청구정보생성 : 청구 파일 생성
//        	 */
//        	try {
//        		param.put("PATH", FileSupport.getUploadPath( "DRRP" ,  CmdConsts.ATCH_PATH , "IA" )); // 생성될 파일 경로
//        		DRNP00100ServiceImpl batch = new DRNP00100ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        	
//        } else if( "createFile_chardChargeCrt".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  카드자동이체청구 : 청구 파일 생성
//        	 */
//        	try {
//        		param.put("PATH", FileSupport.getUploadPath( "DRNP" ,  CmdConsts.ATCH_PATH , "IA" )); // 생성될 파일 경로
//        		DRNP03200ServiceImpl batch = new DRNP03200ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        	
//        } else if( "procedure_AutoDuelConfirm".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  수납처리 : 카드자동이체 승인대조/매입대조 둘다 실행
//        	 */
//        	try {
//        		String workFlg1 = param.get("WORK_FLG1")+""; // 자동이체 승인대조 실행여부
//        		String workFlg2 = param.get("WORK_FLG2")+""; // 자동이체 매입대조 실행여부
//        		
//        		if("Y".equals(workFlg1)){
//        			param.put("WORK_DATE", param.get("WORK_DATE1"));
//        			param.put("BATCH_DELIMITER", "procedure_AutoApproveConfirm");
//        			DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
//        			param = batch.executeBatch();
//        		}
//        		if("Y".equals(workFlg2)){
//        			param.put("WORK_DATE", param.get("WORK_DATE2"));
//        			param.put("BATCH_DELIMITER", "procedure_AutoPurchaseConfirm");
//        			DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
//        			param = batch.executeBatch();
//        		}
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        } else if( "procedure_AutoApproveConfirm".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  수납처리 : 카드자동이체 승인대조
//        	 */
//        	try {
//        		DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
//    			param = batch.executeBatch();
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//        		param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//        		param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//        		param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//        		param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//        		param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//        		param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        } else if( "procedure_AutoPurchaseConfirm".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  수납처리 : 카드자동이체 매입대조
//        	 */
//        	try {
//        		DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
//    			param = batch.executeBatch();
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//        		param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//        		param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//        		param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//        		param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//        		param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//        		param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        } else if( "procedure_ApproveConfirm".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  신용카드 : 승인대조
//        	 */
//        	try {
//        		DRRP00700ServiceImpl batch = new DRRP00700ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//        		param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//        		param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//        		param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//        		param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//        		param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//        		param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        } else if( "procedure_PurchaseConfirm".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  수납처리 : 매입대조
//        	 */
//        	try {
//        		DRRP00700ServiceImpl batch = new DRRP00700ServiceImpl(param,generalDao);
//        		param = batch.executeBatch();
//        		
//        	} catch (Exception e) {
//        		e.printStackTrace();
//        		param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//        		param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//        		param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//        		param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//        		param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//        		param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//        	}
//        	
//        }
    	
    	generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param); // 바깥으로 위치 변경
        generalDao.addUpdate(NM_BATCH + "deleteDupCheck", param);
    }    
    @Override
    public void run() {
        logger.debug("thread start....."+ dto);
        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_batchWKS");
        Map<String, Object> param = dsMap.get(0);

        logger.debug("thread start...param.."+ param);
        //String batWkId = param.get("BAT_WK_ID").toString();
        
        long threadId = Thread.currentThread().getId();
        logger.error("run Thread # " + threadId + " is doing this task");
        
        if("JAVA".equals(param.get("BAT_PGM_TY_CD"))){
            //QuartzJavaServiceImpl javaService = new QuartzJavaServiceImpl();
            //javaService.executeBatch(generalDao, param);
        	executeBatch(param);
   	 	}else{
   	        executeSampleBatch2(dto);
   	 	}

    }

}
