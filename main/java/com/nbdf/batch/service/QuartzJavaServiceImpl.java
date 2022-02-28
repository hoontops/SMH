package com.nbdf.batch.service;

import static com.nbdf.batch.consts.CmdConsts.NS_BATCH_JOB_JAVA;
import static com.nbdf.batch.consts.CmdConsts.NS_CMD_BATCH;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.batch.consts.CmdConsts;
import com.nbdf.batch.manager.JobManager;
import com.nbdf.batch.util.BatchUtil;
import com.nbdf.cmd.cm.cmfm.web.FileSupport;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

public class QuartzJavaServiceImpl extends AbstractNbdfService implements QuartzJavaService{

    private static final String NM_BATCH = NS_CMD_BATCH;
    private static final String NM_BATCH_JOB_JAVA = NS_BATCH_JOB_JAVA;
    private static GeneralDao generalDao;

    @Override
    public boolean cronExecuteBatch(String batWkId){
        StringBuilder logBuilder = new StringBuilder();
        boolean exeute = true;
        Map<String, Object> param = new HashMap<String, Object>();
        BatchUtil.defaultMapSet(param,  batWkId);

        generalDao = JobManager.getDao();
        /* (1) 로그 테이블에 저장(배치 실행 중) */
        generalDao.addUpdate(NM_BATCH + "insertBatchExecuteLogStart", param);
        Map<String, Object>  map = generalDao.addSelectOneMap(NM_BATCH+"selectBacthJobInfo", param);

        /* (2) 중복 수행 불가인 경우 체크 로직 */
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
                logger.debug("java sndMsg ::: "+sndMsg);
                for(int i=0; i <smsList.size();i++) {
                    Map<String, Object> mapSms = smsList.get(i);
                    sndMsg = "배치오류["+ mapSms.get("BAT_PGM_DESC") +"] : "+param.get("ERR_DESC")  ;
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

        /* (3) 해당 JOB 수행 가능한 경우 로직 수행 */
        if(exeute){
            String  javaFunction = (String) map.get("JAVA_FUNCTION");
            // JOB 로직 실행
            excuteJavaJob(generalDao,javaFunction,param);
        }


        return true;
    }

    public boolean executeBatch(GeneralDao generalDao, Map<String,Object> param){
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
//				param.put("P_FET_CNT",  "1"); 				// 처리 대상 건수
//                param.put("P_SKP_CNT",  "0"); 				// 스킵 건수
//                param.put("P_ERR_CNT",  "1"); 				// 오류 건수
//                param.put("EXECUT_GUBUN_CD",  "ERR_EXEC"); 	// 실행 구분
//                param.put("BAT_SUCC_YN",  "N"); 			// 배치 실패
//                param.put("P_ERR_DESC",  e.getMessage()); 	// 에러메시지
//			}
//            
//            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
//            
//        } else if( "rcpt_processing".equalsIgnoreCase(javaFunction) ) {
//        	/*
//             *  수납처리 : 지로청구 파일 생성
//             */
//        	try {
//        		DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
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
//            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
//        	
//        	
//        } else if( "bank_card_rcpt_processing".equalsIgnoreCase(javaFunction) ) {
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
//            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
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
//            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
//            
//        } else if( "procedure_CHARGE_CREATE".equalsIgnoreCase(javaFunction) ) {
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
//            generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
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
//        	generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
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
//        	generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
//        	
//        } else if( "createFile_RECV".equalsIgnoreCase(javaFunction) ) {
//        	/*
//        	 *  수납처리 : 카드자동이체 청구결과 처리
//        	 */
//        	try {
//        		DRRP00200ServiceImpl batch = new DRRP00200ServiceImpl(param,generalDao);
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
//        	generalDao.addUpdate(NM_BATCH + "updateBatchExecuteLogEnd", param);
//        }
    	
        generalDao.addUpdate(NM_BATCH + "deleteDupCheck", param);
    }
}