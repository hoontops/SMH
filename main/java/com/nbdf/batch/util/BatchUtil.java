package com.nbdf.batch.util;

import java.util.Map;

public class BatchUtil {

    public static String getBatWkId(String jobName) {
        String[] jobNameArr = jobName.split("DEFAULT.");
        return jobNameArr[1];
    }

    public static Map<String, Object> defaultMapSet(Map<String, Object> param, String batWkId){
        param.put("CREATED_BY", "16");
        param.put("BAT_WK_ID",  batWkId); // 배치 프로그램 ID
        param.put("BAT_SUCC_YN",  "N"); // 배치 실행 여부
        param.put("EXECUT_GUBUN_CD",  "OK_EXEC"); // 실행 구분 코드
        param.put("P_FET_CNT",  0); // 처리 대상 건수
        param.put("P_SKP_CNT",  0); // 스킵 건수
        param.put("P_ERR_CNT",  0); // 오류 건수
        param.put("P_ERR_DESC", "실행 중");
        return param;
    }
 }
