package com.nbdf.batch.service;

import com.nbdf.batch.manager.JobManager;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
* @file: QuartzBatchImpl.java
* @Package: com.nbdf.batch.service
* @Project name: IFC MES시스템 구축
* @Type name: QuartzBatchImpl
* @Company: Built1
* @Create Date: 2015 2015. 11. 17. 오후 8:25:21
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015.09. 30.   진성하     패키지 명칭 변경
 *   2015.11. 17.   진성하     isBatchServer 추가
 *   FCM 인스턴스 추가됨에 따라 같은 IP에 배치 서버가 2대가 실행되는 것을 방지
 *   기동 옵션에 -DBATCH_SERVER=true/false 값으로 실행되도록 변경 1
 *
*/
public class QuartzBatchImpl extends AbstractNbdfService implements QuartzService{

    public void init() {};

    private SchedulerFactory sf = null;
    private Scheduler sched = null;

    private GeneralDao generalDao;

    @Autowired
    public QuartzBatchImpl(String serverIp, String serverMode, GeneralDao generalDao) {
        super();
        this.generalDao = generalDao;
        onloadQuartz(serverIp, serverMode);
    }

    /**
    * @fn
    * @brief (Override method) IP, SERVER_MODE에 따른 분기
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.batch.service.QuartzService#onloadQuartz()
    */
    public void onloadQuartz(String serverIp, String serverMode) {
        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>   QUARTZ BATCH CONFIGURATION   <<<<<<<\n\t--------------------------------------------------------------");

        String ip= null;
        String mode = null;
        boolean isBatchServer = false;
        try {
            ip = InetAddress.getLocalHost().getHostAddress();
            if (ip == null || serverIp.indexOf(ip) == -1) {
                logBuilder.append("\n\tI`M NOT BATCH SERVER IP")
                            .append("\n\tPROPERTY IP :")
                            .append(serverIp)
                            .append("\n\tSERVER IP :")
                            .append(ip)
                            .append("\n\t--------------------------------------------------------------\n");
                logger.info(logBuilder.toString());
                return;
            }
        logBuilder.append("\n\tSERVER IP  : ")
                     .append(ip);
        } catch (UnknownHostException e) {
            logger.error("배치 서버 오류 발생 {}" , e);
            return;
        }

        mode = BizUtil.getServerMode();
        isBatchServer = BizUtil.isBatchServer();
        logger.debug("isBatchServer : {} "  , isBatchServer);
        if (mode == null || serverMode.indexOf(mode) == -1) {
            logBuilder.append("\n\tI`M NOT BATCH SERVER MODE")
                        .append("\n\tPROPERTY SERVER MODE :")
                        .append(serverMode)
                        .append("\n\tSERVER MODE :")
                        .append(mode)
                        .append("\n\t--------------------------------------------------------------\n");
            logger.info(logBuilder.toString());
            return;
        }else if(!isBatchServer){
            logBuilder.append("\n\tI`M NOT BATCH SERVER MODE")
            .append("\n\tisBatchServer :")
            .append(isBatchServer)
            .append("\n\t--------------------------------------------------------------\n");
            logger.info(logBuilder.toString());
            return;
        }else{
            logBuilder.append("\n\tSERVER_MODE  : ")
            .append(mode)
            .append("\n\t--------------------------------------------------------------\n");
            startLuncher();
            logger.debug(logBuilder.toString());
        }
    }

    /**
    * @fn : startLuncher
    * @brief : Luncher 실행
    * @Method Name : startLuncher
    * @remark
    * @Create Date: 2015 2015. 8. 11. 오후 6:00:59
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 8. 11.   진성하     최초  생성
     *
    */
    public void startLuncher(){
        sf = new StdSchedulerFactory();

        try {
            sched = sf.getScheduler();
        } catch (SchedulerException e) {
            logger.error("스케줄러 오류 발생 {}" , e);
        }
        JobManager.setDao(generalDao);
        JobManager.startLuncher(sched);
    }

    /**
    * @fn
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.batch.service.QuartzService#getScheduler()
    */
    @Override
    public Scheduler getScheduler() {
        return sched;
    }
}