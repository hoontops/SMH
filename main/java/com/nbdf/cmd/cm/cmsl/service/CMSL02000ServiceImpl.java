package com.nbdf.cmd.cm.cmsl.service;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSL02000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsl.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSL02000ServiceImpl    
* @Company: Built1
* @Create Date: 2018 2018. 5. 25. 오후 5:02:43 
* @Author: Kang Jeong gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 5. 25.        Kang Jeong gi     최초  생성
 *
*/
@Service
public class CMSL02000ServiceImpl extends AbstractNbdfService implements CMSL02000Service {
    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsl.dao.CMSL02000Dao";

    @Autowired
    private GeneralDao generalDao;

	private Map<String,Object> paramMap;
   
    @Autowired
    private com.nbdf.cmd.cm.cmsa.service.CMSA00400Service CMSA00400Service;

    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - 조회
    * @remark
    * - 1. 다양한 쿼리 실행 - 조회
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#selectcmdDynamicSqlList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectcmdDynamicSqlList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	// 헤더 - 조회
	 	List<Map<String, Object>> list1 = generalDao.addSelect(NAMESPACE + ".selectCmdDynamicSqlHeaderList", param);	 	
	 	putDataSetMap(dto, list1, "output1");
	 	
	    // 출력명칭 및 포멧 설정 - 조회
 	 	List<Map<String, Object>> list2 = generalDao.addSelect(NAMESPACE + ".selectCmdDynamicSqlPrintAliasList", param);	 	
 	 	putDataSetMap(dto, list2, "output2");
 	 	
 	 	// 매개변수 설정 - 조회
 	 	List<Map<String, Object>> list3 = generalDao.addSelect(NAMESPACE + ".selectCmdDynamicSqlParamList", param);	 	
 	 	putDataSetMap(dto, list3, "output3");
    }
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - 저장
    * @remark
    * - 1. 다양한 쿼리 실행 - 저장
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#saveDynamicData(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveDynamicData(UiMapDto dto) throws Exception {
    	// 다양한 쿼리 실행 - 헤더
    	DataSetMap dsMapHeader = getParametersDataSetMap(dto, "input1");
    	int resultHeader = 0;
    	String programCd = "";
    	Map<String, Object> paramHeader = null;

		for (int i = 0, n = dsMapHeader.size(); i < n; i++) {
			paramHeader = dsMapHeader.get(i);
			int type = getRowType(paramHeader);
	
			if (type == DataSet.ROW_TYPE_INSERTED) {				
				resultHeader += generalDao.addInsert(NAMESPACE+".insertCmdDynamicSqlHeader", paramHeader);
				programCd     = (String) paramHeader.get("PROGRAM_CD");				
			} else if (type == DataSet.ROW_TYPE_UPDATED) {
				programCd     = (String) paramHeader.get("PROGRAM_CD");
				resultHeader += generalDao.addUpdate(NAMESPACE+".updateCmdDynamicSqlHeader", paramHeader);
			} else if (type == DataSet.ROW_TYPE_DELETED) {
				programCd     = (String) paramHeader.get("PROGRAM_CD");
				resultHeader += generalDao.addUpdate(NAMESPACE+".deleteCmdDynamicSqlHeader", paramHeader);
			}			
		}
		putDataSetMap(dto, paramHeader, "result_header");
		
		
		// 다양한 쿼리 실행 - 출력명칭 및 포멧 설정		
    	DataSetMap dsMapPrintAlias = getParametersDataSetMap(dto, "input2");
    	int resultPrintAlias = 0;
    	int printAliasDupCnt = 0;

		for (int i = 0, n = dsMapPrintAlias.size(); i < n; i++) {
			Map<String, Object> paramPrintAlias = dsMapPrintAlias.get(i);
			int type = getRowType(paramPrintAlias);
	
			if (type == DataSet.ROW_TYPE_INSERTED) {	
				
				// 헤더의 키 값이 존재할 경우 키 값 할당
				if(!"".equals(programCd) && programCd != null){ 
					paramPrintAlias.put("PROGRAM_CD", programCd);
				}
				
				// 프로그램코드(PROGRAM_CD) 및 필드명칭(FIELD_NM) 중복 체크
				printAliasDupCnt = generalDao.selectOne(NAMESPACE+".selectCmdDynamicSqlPrintAliasDupCheck", paramPrintAlias);				
				if(printAliasDupCnt > 0){				
					throw new BizException("항목 컬럼에 중복된 데이터가 존재합니다.\\n확인 후 다시 작업하시기 바랍니다."); 			
				}
				
				resultPrintAlias += generalDao.addInsert(NAMESPACE+".insertCmdDynamicSqlPrintAlias", paramPrintAlias);
			} else if (type == DataSet.ROW_TYPE_UPDATED) {
				resultPrintAlias += generalDao.addUpdate(NAMESPACE+".updateCmdDynamicSqlPrintAlias", paramPrintAlias);
			} else if (type == DataSet.ROW_TYPE_DELETED) {
				resultPrintAlias += generalDao.addUpdate(NAMESPACE+".deleteCmdDynamicSqlPrintAlias", paramPrintAlias);
			}
		}
		//putDataSetMap(dto, resultPrintAlias);
		
		
		// 다양한 쿼리 실행 - 매개변수 설정			
    	DataSetMap dsMapParam = getParametersDataSetMap(dto, "input3");
    	int resultParam = 0;
    	int paramDupCnt = 0;

		for (int i = 0, n = dsMapParam.size(); i < n; i++) {
			Map<String, Object> paramParam = dsMapParam.get(i);
			int type = getRowType(paramParam);
	
			if (type == DataSet.ROW_TYPE_INSERTED) {	
				
				// 헤더의 키 값이 존재할 경우 키 값 할당
				if(!"".equals(programCd) && programCd != null){ 
					paramParam.put("PROGRAM_CD", programCd);
				}
				
				// 프로그램코드(PROGRAM_CD) 및 필드명칭(PARAM_CD) 중복 체크
				paramDupCnt = generalDao.selectOne(NAMESPACE+".selectCmdDynamicSqlParamDupCheck", paramParam);				
				if(paramDupCnt > 0){				
					throw new BizException("매개변수 컬럼에 중복된 데이터가 존재합니다.\\n확인 후 다시 작업하시기 바랍니다."); 			
				}
				
				resultParam += generalDao.addInsert(NAMESPACE+".insertCmdDynamicSqlParam", paramParam);
			} else if (type == DataSet.ROW_TYPE_UPDATED) {
				resultParam += generalDao.addUpdate(NAMESPACE+".updateCmdDynamicSqlParam", paramParam);
			} else if (type == DataSet.ROW_TYPE_DELETED) {
				resultParam += generalDao.addUpdate(NAMESPACE+".deleteCmdDynamicSqlParam", paramParam);
			}
		}
		putDataSetMap(dto, resultHeader + resultPrintAlias + resultParam);
	}
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - 출력명칭 일괄생성
    * @remark
    * - 1. 다양한 쿼리 실행 - 출력명칭 일괄생성
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#executeDynamicSqlPrintAlias(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void executeDynamicSqlPrintAlias(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
	 	generalDao.addUpdate(NAMESPACE + ".executeDynamicSqlPrintAlias", param);	 	
	 	putDataSetMap(dto, param);
    }
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - SQL 유효성 검사
    * @remark
    * - 1. 다양한 쿼리 실행 - SQL 유효성 검사
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#executeDynamicSqlValidation(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void executeDynamicSqlValidation(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
	 	generalDao.addUpdate(NAMESPACE + ".executeDynamicSqlValidation", param);	 	
	 	putDataSetMap(dto, param);
    }
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - 쿼리 실행 버튼
    * @remark
    * - 1. 다양한 쿼리 실행 - 쿼리 실행 버튼
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#executeDynamicSqlRun(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void executeDynamicSqlRun(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	// 동적쿼리 실행
	 	generalDao.addUpdate(NAMESPACE + ".executeDynamicSqlRun", param);
	 	
	 	// 실행된 커서 데이터 받기
	 	List<Map<String, Object>> list = (List<Map<String, Object>>) param.get("O_RTN_CURSOR");
	 	
	 	// 커서를 리턴값 넘기기
	 	putDataSetMap(dto, list);
    }
        
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - LOV 쿼리 데이터 추출
    * @remark
    * - 1. 다양한 쿼리 실행 - LOV 쿼리 데이터 추출
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#executeDynamicSqlLov(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void executeDynamicSqlLov(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
     	
     	// 동적쿼리 실행
 	 	generalDao.addUpdate(NAMESPACE + ".executeDynamicSqlLov", param);
 	 	
 	 	// 실행된 커서 데이터 받기
 	 	List<Map<String, Object>> list = (List<Map<String, Object>>) param.get("O_RTN_CURSOR");
 	 	
 	 	// 커서를 리턴값 넘기기
 	 	putDataSetMap(dto, list);
     }
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - 쿼리 문장 보기
    * @remark
    * - 1. 다양한 쿼리 실행 - 쿼리 문장 보기
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#executeDynamicSqlView(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void executeDynamicSqlView(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
	 	generalDao.addUpdate(NAMESPACE + ".executeDynamicSqlView", param);	 	
	 	putDataSetMap(dto, param);
    }
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 실행 - 전체 삭제
    * @remark
    * - 1. 다양한 쿼리 실행 - 전체 삭제
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#deleteDynamicDataAll(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteDynamicDataAll(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	int deleteCnt = 0;
    	
    	deleteCnt += generalDao.addUpdate(NAMESPACE+".deleteDynamicDataAll", param);
		putDataSetMap(dto, deleteCnt);
	}
    
    /**
    * @fn 
    * @brief (Override method) PC 현재 날짜 조회
    * @remark
    * - 1. PC 현재 날짜 조회
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02000Service#getDateTime(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void getDateTime(UiMapDto dto) throws Exception {  
    	Map<String, Object> param = getParametersMap(dto);
    	LocalDateTime localDateTime  = LocalDateTime.now();
     	String stringlocalDateTime = localDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    	
    	System.out.println("stringlocalDateTime => " + stringlocalDateTime);
    	  	
    	param.put("DATE_TIME", stringlocalDateTime);
		putDataSetMap(dto, param);
	}

    public strictfp void selectBigDataExcel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        generalDao.addSelect(NAMESPACE + ".executeDynamicSqlView", param);	
        List<Map<String, Object>> list00 = null;
        /**
         * ######################################################
         * 조회 index from / to 를 설정하기 위한 페이징 정보 추출
         * ######################################################
         */
        double totalRows     = Double.parseDouble(String.valueOf(param.get("P_COUNT")));
        double rowsPerPage = Double.parseDouble(String.valueOf(param.get("P_ROWSPERPAGE")));
        int loopCount    =  (int) Math.ceil(totalRows/rowsPerPage);
        
        SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat ( "yyyyMMddHHmmss", Locale.KOREA );
        Date currentTime = new Date ();
        String mTime = mSimpleDateFormat.format ( currentTime );
        
        logger.debug("##########################################");
        logger.debug("          전체 데이터 갯수    ["+totalRows+"]");
        logger.debug("          페이징당 데이터 수 ["+rowsPerPage+"]");
        logger.debug("          반복횟수                ["+loopCount+"]");
        logger.debug("##########################################");
        for(int idx = 0; idx < loopCount; idx++) {

            int startIndex = (int)(idx*rowsPerPage);
            int endIndex  =  (int)((idx*rowsPerPage)+(int)rowsPerPage)-1;
            
            param.put("QUERY", param.get("O_SQL_TEXT"));
            param.put("PAGE_NUMBER", loopCount);
            param.put("PAGE_SIZE", rowsPerPage);
            
            list00 = CMSA00400Service.selectUserQryList(param);
            
            putDataSetMap(dto, list00, "ds_"+mTime+idx);

        }
    }        
}
