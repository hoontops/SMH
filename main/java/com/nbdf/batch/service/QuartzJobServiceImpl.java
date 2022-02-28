package com.nbdf.batch.service;

import static com.nbdf.batch.consts.CmdConsts.NS_CMD_BATCH;
import com.nbdf.batch.manager.JobManager;
import com.nbdf.batch.util.BatchUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;

import java.util.HashMap;
import java.util.Map;

import org.quartz.Job;
import org.quartz.JobExecutionContext;

public class QuartzJobServiceImpl extends AbstractNbdfService implements Job,QuartzJobService{
    public void init() {};
    private static final String NM_BATCH = NS_CMD_BATCH;

    /**
    * @fn
    * @brief (Override method) 배치 종류 조회 후 종류별로 호출
    * @remark
    * (1) 요청된 배치 종류를 조회
    * (2) 배치 종류별로 서비스를 호출한다.
    *  등록된 배치 종류 : CRON, JAVA
    * @see org.quartz.Job#execute(org.quartz.JobExecutionContext)
    */
    public void execute(JobExecutionContext context) {
        Map<String, Object> param = new HashMap<String, Object>();
        String batWkId = BatchUtil.getBatWkId(context.getJobDetail().getKey().toString());
        param.put("BAT_WK_ID", batWkId);
        Map<String, Object> map = JobManager.getDao().addSelectOneMap(NM_BATCH+"selectBacthJobInfo", param);

        if( "SP".equalsIgnoreCase((String) map.get("BAT_PGM_TY_CD")) ){
            QuartzSpServiceImpl spService = new QuartzSpServiceImpl();
            spService.cronExecuteBatch(batWkId);
            logger.info("SP 호출");
        }else if( "JAVA".equalsIgnoreCase((String) map.get("BAT_PGM_TY_CD")) ){
            QuartzJavaServiceImpl javaService = new QuartzJavaServiceImpl();
            javaService.cronExecuteBatch(batWkId);
            logger.info("JAVA 호출");
        }else{
            logger.error("[BATCH EXECUTE ERROR] 등록된 배치 종류가 아닙니다.");
        }
    }
}