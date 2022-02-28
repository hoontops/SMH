package com.nbdf.batch.manager;

import static com.nbdf.batch.consts.CmdConsts.LUNCHER_REPIT_TIME;
import static com.nbdf.batch.consts.CmdConsts.LUNCHER_START_DTIME;
import com.nbdf.batch.service.QuartzJobLuncherServiceImpl;
import com.nbdf.batch.service.QuartzJobServiceImpl;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.quartz.CronExpression;
import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class JobManager{

    private static Logger logger = LoggerFactory.getLogger(JobManager.class);

    private static final int START_DTIME = LUNCHER_START_DTIME;
    private static final int REPIT_TIME = LUNCHER_REPIT_TIME;

    private static GeneralDao generalDao;
    private static Scheduler scheduler;

    public static void  setDao(GeneralDao generalDao){
        JobManager.generalDao =  generalDao;
    }

    public static GeneralDao getDao(){
        return generalDao;
    }

    public static void updateJobStatus(List<Map<String, Object>> list) {
        SchedulerFactory sf = new StdSchedulerFactory();
        Scheduler sched = null;
        try {
            sched = sf.getScheduler();
            for(int i=0; i < list.size(); i++) {
                JobKey jobkey = new JobKey(list.get(i).get("BAT_WK_ID").toString());

                if(sched.checkExists(jobkey)) {
                    list.get(i).put("JOB_EXISTS", "Y");
                    JobDetail jobdetail = sched.getJobDetail(jobkey);
                    list.get(i).put("JOB_DURABLE",  jobdetail.isDurable()?"실행 중":"대기 중");

                } else {
                    list.get(i).put("JOB_EXISTS", "N");
                }
            }
        } catch (SchedulerException e) {
            logger.error("getScheduler() : {}" , e);
            return;
        }
    }

    public static void startLuncher(Scheduler scheduler){
        JobManager.scheduler = scheduler;
        addJob(QuartzJobLuncherServiceImpl.class, scheduler, "LUNCHER", START_DTIME, REPIT_TIME );
    }

    public static void addJob(Class<QuartzJobLuncherServiceImpl> clazz, Scheduler scheduler, String batgWkId, int strtDlyTimes, int reptitCyclTimes ){
        JobDetail job = JobBuilder.newJob(clazz).withIdentity(batgWkId).build();
        Trigger trigger = TriggerBuilder.newTrigger().withSchedule(SimpleScheduleBuilder.simpleSchedule().withIntervalInSeconds(reptitCyclTimes).repeatForever()).build();

        schedSetting(scheduler, job, trigger, strtDlyTimes);
    }

    private static void schedSetting(Scheduler scheduler, JobDetail job, Trigger trigger, int conStrtDlyTimes ) {
        try {
            scheduler.startDelayed(conStrtDlyTimes);
            scheduler.scheduleJob(job, trigger);
            scheduler.start();
        } catch (SchedulerException e) {
            logger.error("ERROR {}", e);
        }
    }

    public static void addJobNew(Map<String, Object> jobMap) {
        if("CRON".equals(jobMap.get("BAT_CYCLE_KND")) ) {
            scheduleCronTriggerJob(jobMap);
        } else {
            scheduleSimpleTriggerJob(jobMap);
        }
    }

    public static void addJobUpdate(Map<String, Object> jobMap) {
        removeJob(jobMap);
        addJobNew(jobMap);
    }

    public static void addJobRemove(Map<String, Object> jobMap) {
        removeJob(jobMap);

    }

    private static void scheduleCronTriggerJob(Map<String, Object> jobMap) {
        String batWkId = (String) jobMap.get("BAT_WK_ID").toString();
        String cronInfo = (String) jobMap.get("CRON_INFO").toString();

        if(CronExpression.isValidExpression(cronInfo))
        {
            JobDetail job = JobBuilder.newJob(QuartzJobServiceImpl.class).withIdentity(batWkId).build();
            Trigger trigger = TriggerBuilder.newTrigger().withIdentity(batWkId).withSchedule(CronScheduleBuilder.cronSchedule(cronInfo)).build();
            scheduleJob(job, trigger, 0);
        }else{
            logger.error("batgWkId : {} cronExpress is not valid : {}" , batWkId , cronInfo);
        }
    }

    private static void scheduleSimpleTriggerJob(Map<String, Object> jobMap) {
        String batWkId = (String) jobMap.get("BAT_WK_ID").toString();
        //logger.error("batWkId-->"+batWkId);
        //logger.error("REPTIT_CYCL_TIMEMS-->"+jobMap.get("REPTIT_CYCL_TIMEMS"));
        if(jobMap.get("REPTIT_CYCL_TIMEMS")==null) return;
        
        int reptitCyclTimes = Integer.parseInt(jobMap.get("REPTIT_CYCL_TIMEMS").toString());  // 반복 주기 시간(s)

        JobDetail job = JobBuilder.newJob(QuartzJobServiceImpl.class).withIdentity(batWkId).build();
        Trigger trigger = TriggerBuilder.newTrigger().withSchedule(SimpleScheduleBuilder.simpleSchedule().withIntervalInSeconds(reptitCyclTimes).repeatForever()).build();

        scheduleJob(job, trigger, Integer.parseInt(jobMap.get("STRT_DLY_TIMEMS").toString()));
    }

    private static void scheduleJob(JobDetail job, Trigger trigger, int conStrtDlyTimes ) {
        try {
            scheduler.startDelayed(conStrtDlyTimes);
            scheduler.scheduleJob(job, trigger);
            scheduler.start();
        } catch (SchedulerException e) {
            logger.error("ERROR {}", e);
        }
    }

    private static void removeJob(Map<String, Object> jobMap) {
        try {
            String batWkId = (String) jobMap.get("BAT_WK_ID").toString();
            JobKey jobkey = new JobKey(batWkId);

            if(JobManager.scheduler.checkExists(jobkey)) {
                if(JobManager.scheduler.deleteJob(jobkey)){
                    logger.info("해당되는  batgWkId : {} 가 삭제 되었습니다." , batWkId );
                }else{
                    logger.error("해당되는  batgWkId : {} 가 삭제되지 않았습니다." , batWkId );
                }
           }
        } catch (SchedulerException e) {
            logger.error("job 삭제시 오류 발생 : {} ", e);
        }
    }

    public static boolean isvalidCronExpress(String cronInfo){
        return CronExpression.isValidExpression(cronInfo);
    }

    public static boolean jobExecuteCheck(Map<String, Object> jobMap) {
        boolean jobExists = false;

        try {
            String batWkId = (String) jobMap.get("BAT_WK_ID").toString();
            JobKey jobkey = new JobKey(batWkId);

            if(JobManager.scheduler.checkExists(jobkey)) {
                jobExists = true;
            }
        } catch (SchedulerException e) {
            logger.error("job 실행 여부 체크시 오류 발생 : {} ", e);
        }
        return jobExists;
    }

    public static void interruptJob(Map<String, Object> jobMap) {
        try {
            String batWkId = (String) jobMap.get("BAT_WK_ID").toString();
            JobKey jobkey = new JobKey(batWkId);

            if(JobManager.scheduler.checkExists(jobkey)) {
                if(JobManager.scheduler.interrupt(jobkey)){
                    logger.info("해당되는  batgWkId : {} 가 중지 되었습니다." , batWkId );
                }else{
                    logger.error("해당되는  batgWkId : {} 가 중지되지 않았습니다." , batWkId );
                }
           }
        } catch (SchedulerException e) {
            logger.error("job 중지시 오류 발생 : {} ", e);
        }
    }

    @Autowired
	public static void triggerJob(Map<String, Object> jobMap) {
        try {
            String batWkId = (String) jobMap.get("BAT_WK_ID").toString();
            JobKey jobkey = new JobKey(batWkId);
            JobManager.scheduler.triggerJob(jobkey);
        } catch (SchedulerException e) {
            logger.error("job 즉시실행시 오류 발생 : {} ", e);
        }
    }
    
}
