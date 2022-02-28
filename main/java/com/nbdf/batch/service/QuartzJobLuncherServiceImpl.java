package com.nbdf.batch.service;

import static com.nbdf.batch.consts.CmdConsts.JOB_NEW;
import static com.nbdf.batch.consts.CmdConsts.JOB_REMOVE;
import static com.nbdf.batch.consts.CmdConsts.JOB_UPDATE;
import static com.nbdf.batch.consts.CmdConsts.NS_CMD_BATCH;
import com.nbdf.batch.manager.JobManager;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.LoggerFactory;

import ch.qos.logback.classic.Logger;

public class QuartzJobLuncherServiceImpl implements Job{

    private static Logger logger = (Logger) LoggerFactory.getLogger(QuartzJobLuncherServiceImpl.class);



    private static final String NS_SQL_FIRST = NS_CMD_BATCH + "selectBacthJobInfo";
    private static final String NS_SQL_ALTER = NS_CMD_BATCH +  "selectBacthReStartInfo";
    private static final String NS_SQL_WK_STATUS =NS_CMD_BATCH + "updateBatchWorkStatusWKS";
    private static final String NS_SQL_WK_DELETE =NS_CMD_BATCH + "deleteBatchWKS";

    private static GeneralDao generalDao;

    private static boolean isFirstLoad = true;

    public void execute(JobExecutionContext context) throws JobExecutionException{
        Object  workStatus;
        String nsSql = NS_SQL_ALTER;
        String nsDSql = NS_SQL_WK_DELETE;

        generalDao = JobManager.getDao();

        if(isFirstLoad){
            nsSql = NS_SQL_FIRST;
            isFirstLoad = false;
        }

        logger.isInfoEnabled();
        logger.isDebugEnabled();
        logger.isTraceEnabled();


        List<Map<String, Object>> jobList = generalDao.addSelect(nsSql);

        for(Map<String, Object> jobMap: jobList){
            workStatus = jobMap.get("WK_STTUS");
            if("N".equals(jobMap.get("USE_YN"))){
                JobManager.addJobRemove(jobMap);
            }else if (JOB_NEW.equals(workStatus)) {
                JobManager.addJobNew(jobMap);
                generalDao.addUpdate(NS_SQL_WK_STATUS, jobMap);
            } else if (JOB_UPDATE.equals(workStatus)) {
                JobManager.addJobUpdate(jobMap);
                generalDao.addUpdate(NS_SQL_WK_STATUS, jobMap);
            } else if (JOB_REMOVE.equals(workStatus)) {
                JobManager.addJobRemove(jobMap);
                generalDao.addUpdate(nsDSql, jobMap);
            } else {
                JobManager.addJobNew(jobMap);
                generalDao.addUpdate(NS_SQL_WK_STATUS, jobMap);
            }
        }
    }

}
