package com.nbdf.commons.util;

public class TxLogId {
    long seq = 0;
    long txId;
    long startTime;
    long baseTime;
    long lapTime;
    boolean isEndTxLogId = false;

    String reqId;
    String reqIp;

    public TxLogId(String reqId, String reqIp, long txId) { 
        this.reqId = reqId;
        this.reqIp = reqIp;
        this.txId = txId;
        this.startTime = System.currentTimeMillis();
        this.baseTime  = startTime;
    }

    public void updateLapTime() {
        long tmpTime = System.currentTimeMillis(); 
        lapTime = tmpTime - baseTime;
        baseTime = tmpTime;
    }

    public void increaseSeq() {
        seq++;
    }

    public long getLapTime() {
        return lapTime;
    }

    public long getSeq() {
        return seq;
    }

    public long getTxId() {
        return txId;
    }

    public String getReqIp() {
        return reqIp;
    }

    public String getReqId() {
        return reqId;
    }

    public void setEndTxLogId() {
        isEndTxLogId = true;
    }

    public boolean isEndTxLogId() {
        return isEndTxLogId;
    }

    public long getProcessTime() {
        return System.currentTimeMillis() - startTime;
    }
}