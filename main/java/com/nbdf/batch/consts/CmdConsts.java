package com.nbdf.batch.consts;

public class CmdConsts {
    public static final String NS_CMD_BATCH =   "com.nbdf.batch.dao.BatchDao.";
    public static final String NS_BATCH_JOB_SP  =  "com.nbdf.batch.dao.BatchSpDao.";
    public static final String NS_BATCH_JOB_JAVA  =  "com.nbdf.batch.dao.BatchJavaDao.";

    public static final String SMTP_IP  =  "gmail.interflex.co.kr";// ( 192.168.5.180 )
    public static final String SMTP_PORT  =  "25";
    public static final int TO_ADDR_CNT  =  50;
    public static final int TO_CC_CNT  =  50;

    public static final String JOB_NEW       =   "C";
    public static final String JOB_UPDATE   =    "U";
    public static final String JOB_REMOVE  =     "D";

    public static final int LUNCHER_START_DTIME   =  0;
    public static final int LUNCHER_REPIT_TIME     =  10;
    
    public static final String TEMP_PATH  =       "/data/upload/temp";
    public static final String ATCH_PATH  =       "/MES_NAS/";        			   // 파일 저장경로
    public static final String WAS_PATH   =       "/data/upload";              // 파일 저장경로
//    public static final String ATCH_KSNET_PATH  = "KSNET/";  				   // KSNET 파일 저장경로
}