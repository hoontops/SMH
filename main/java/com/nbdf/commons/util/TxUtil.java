package com.nbdf.commons.util;

import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;


/**
* @file: TxUtil.java
* @Package: com.nbdf.commons.util
* @Project name: IFC MES시스템 구축
* @Type name: TxUtil
* @Company: Built1
* @Create Date: 2015 2015. 8. 18. 오후 3:43:16
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 8. 18.        IMCS     최초  생성
 *
*/
public class TxUtil {
    private static long txId = 0;

    static ThreadLocal<TxLogId> threadLocal = new ThreadLocal<TxLogId>();

    public static TxLogId getTxId(){
        return threadLocal.get();
    }

    public static TxLogId getTxIdAndUpdate(){
        TxLogId txLogId = threadLocal.get();

        if (txLogId != null) {
            txLogId.updateLapTime();
            txLogId.increaseSeq();
        }

        return txLogId;
    }

    public static void setTxId(HttpServletRequest request) {
        String clientIp = "";

        try {
            clientIp = BizUtil.getClientIp(request);
        } catch (UnknownHostException E) {
            clientIp = "";
        }

        setTxId(request.getServletPath(), clientIp);
    }

    public static void setTxId(String regId, String regIp) {
        if (txId == Long.MAX_VALUE) {
            txId = 0;
        }

        ++txId;
        TxLogId logId = new TxLogId(regId, regIp, txId); 
        threadLocal.set(logId);
    }

    public static void setEndTxId() {
        TxLogId txLogId = threadLocal.get();

        if (txLogId != null) {
            txLogId.setEndTxLogId();
        }
    }
    

    public static void setEndTxLogId(Logger logger) {
        TxLogId txLogId = TxUtil.getTxId();

        if (txLogId != null) {
            txLogId.setEndTxLogId();
            logger.debug("{} End execTime({}ms)", txLogId.getReqId(), txLogId.getProcessTime());
        }
    }

}