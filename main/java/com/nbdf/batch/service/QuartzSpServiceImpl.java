package com.nbdf.batch.service;

import static com.nbdf.batch.consts.CmdConsts.NS_BATCH_JOB_SP;
import static com.nbdf.batch.consts.CmdConsts.NS_CMD_BATCH;
import static com.nbdf.batch.consts.CmdConsts.NS_BATCH_JOB_JAVA;
import com.nbdf.batch.manager.BatchFileManager;
import com.nbdf.batch.manager.JobManager;
import com.nbdf.batch.util.BatchUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuartzSpServiceImpl extends AbstractNbdfService implements QuartzSpService{

    private static final String NM_BATCH = NS_CMD_BATCH;
    private static final String NM_JOB = NS_BATCH_JOB_SP;
    private static final String NM_BATCH_JOB_JAVA = NS_BATCH_JOB_JAVA;

    private static GeneralDao generalDao;

    @Override
    public boolean cronExecuteBatch(String batWkId){
        boolean hasAttachedFiles = false;
        boolean exeute = true;

        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>    QUARTZ BATCH JOB INFO    <<<<<<<\n\t--------------------------------------------------------------")
                    .append("\n\tJOB ID : ")
                    .append(batWkId);

        Map<String, Object> param = new HashMap<String, Object>();
        BatchUtil.defaultMapSet(param,  batWkId);

        generalDao = JobManager.getDao();
        generalDao.addUpdate(NM_BATCH + "insertBatchExecuteLogStart", param);

        Map<String, Object>  map = generalDao.addSelectOneMap(NM_BATCH+"selectBacthJobInfo", param);

        /* 중복 수행 불가인 경우 체크 로직 */
        if("N".equalsIgnoreCase(map.get("DUP_EXEC_ENBL_YN").toString())){
            if(generalDao.addSelectCount(NM_BATCH+"selectDupBatchAlived", map) > 0 ){
                exeute = false;
                logBuilder.append("\n\t해당 배치JOB이 실행 중이므로 실행 할수 없습니다.=> batWkId : ")
                            .append(batWkId)
                            .append("\n\t--------------------------------------------------------------\n");
                logger.debug(logBuilder.toString());
                param.put("ERR_DESC", "해당 배치JOB이 실행 중이므로 실행 할수 없습니다.");
                generalDao.addUpdate(NM_BATCH + "updateBatchExecuteErrorLog", param);

                //오류건수 SMS 전송 jsh 20160803
                List<Map<String, Object>> smsList = generalDao.addSelect(NM_BATCH_JOB_JAVA + "selectCmdBatPgmSmsList", param);
                logger.debug("smsList.size ::: "+smsList.size());

                String sndMsg ="" ;
                logger.debug("sp sndMsg ::: "+sndMsg);
                for(int i=0; i <smsList.size();i++) {
                    Map<String, Object> mapSms = smsList.get(i);
                    sndMsg = "배치오류["+ mapSms.get("BAT_PGM_DESC") +"] : " +param.get("ERR_DESC")  ;
                    mapSms.put("SND_PHN_ID", mapSms.get("TEL_NO"));
                    mapSms.put("RCV_PHN_ID", mapSms.get("TEL_NO"));
                    mapSms.put("SND_MSG", sndMsg);
                    mapSms.put("SND_PUSH_MSG", "");
                    mapSms.put("JOB_SYS_CD", "CMD");

                    generalDao.addUpdate(NM_BATCH_JOB_JAVA + "insertSmsSndIfs", mapSms);
                }

            }else{
                generalDao.addUpdate(NM_BATCH + "insertDupCheck", param);
            }
        }

        if(exeute){
            List<Map<String, Object>> list = generalDao.addSelect(NM_BATCH+"selectBatchExecuteStartParamInfo", map);

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
                 //generalDao.addSelectOneMap(NM_JOB+map.get("EXEC_FN").toString(), param);
                generalDao.addSelectOneMap("selectBatchCallList", param);
                 if(param.get("P_ERR_DESC") == null ){
                     BatchUtil.defaultMapSet(param, batWkId);
                  }
            }catch(IndexOutOfBoundsException iob){
                String[] errMsg = iob.getMessage().split(":");
                param.put("ERR_DESC" , errMsg[0]);
                generalDao.addUpdate(NM_BATCH + "updateBatchExecuteErrorLog", param);
                logBuilder.append("\n\tIndexOutOfBoundsException : ").append(iob.getMessage())
                            .append("\n\t--------------------------------------------------------------\n");
                logger.error(logBuilder.toString());

                //오류건수 SMS 전송 jsh 20160803
                List<Map<String, Object>> smsList = generalDao.addSelect(NM_BATCH_JOB_JAVA + "selectCmdBatPgmSmsList", param);
                logger.debug("smsList.size ::: "+smsList.size());

                String sndMsg ="" ;
                logger.debug("sp sndMsg ::: "+sndMsg);
                for(int i=0; i <smsList.size();i++) {
                    Map<String, Object> mapSms = smsList.get(i);
                    sndMsg = "배치오류["+ mapSms.get("BAT_PGM_DESC") +"] : " +param.get("ERR_DESC")  ;
                    mapSms.put("SND_PHN_ID", mapSms.get("TEL_NO"));
                    mapSms.put("RCV_PHN_ID", mapSms.get("TEL_NO"));
                    mapSms.put("SND_MSG", sndMsg);
                    mapSms.put("SND_PUSH_MSG", "");
                    mapSms.put("JOB_SYS_CD", "CMD");

                    generalDao.addUpdate(NM_BATCH_JOB_JAVA + "insertSmsSndIfs", mapSms);
                }

            }
            if (hasAttachedFiles) {
                List<Map<String, Object>> fileList = generalDao.addSelect(NM_BATCH+"selectBatchExecuteStartParamInfo", param);
                BatchFileManager.removeAttachFiles(fileList);
            }

            if("실행 중".equals(param.get("P_ERR_DESC"))){
                param.put("P_ERR_DESC",  "정상처리 되었습니다.");
             }


            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
            generalDao.addUpdate(NM_BATCH + "deleteDupCheck", batWkId);

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

            logger.debug("sp P_ERR_CNT::::"+param.get("P_ERR_CNT"));
            logger.debug("sp param::::"+param);

            int errCnt = 0;
            if(param.get("P_ERR_CNT") != null) errCnt = (int) param.get("P_ERR_CNT");

            if(param.get("P_ERR_CNT") != null && errCnt > 0){
                param.put("ERR_DESC","오류건수가 " + param.get("P_ERR_CNT") + "건 입니다.");
                generalDao.addUpdate(NM_BATCH + "updateBatchExecuteErrorLog", param);

                //오류건수 SMS 전송
                List<Map<String, Object>> smsList = generalDao.addSelect(NM_BATCH_JOB_JAVA + "selectCmdBatPgmSmsList", param);
                logger.debug("smsList.size ::: "+smsList.size());

                String sndMsg ="" ;
                logger.debug("sp sndMsg ::: "+sndMsg);
                for(int i=0; i <smsList.size();i++) {
                    Map<String, Object> mapSms = smsList.get(i);
                    sndMsg = "배치오류["+ mapSms.get("BAT_PGM_DESC") +"] : " +param.get("ERR_DESC") ;
                    mapSms.put("SND_PHN_ID", mapSms.get("TEL_NO"));
                    mapSms.put("RCV_PHN_ID", mapSms.get("TEL_NO"));
                    mapSms.put("SND_MSG", sndMsg);
                    mapSms.put("SND_PUSH_MSG", "");
                    mapSms.put("JOB_SYS_CD", "CMD");

                    generalDao.addUpdate(NM_BATCH_JOB_JAVA + "insertSmsSndIfs", mapSms);
                }
            }

        }
        return exeute;
    }

}
