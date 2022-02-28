package smh.qam.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;

/**
* @file: QAM01100ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01100ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.7
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.7.       권혜영     최초  생성
*/
@Service
public class QAM01100ServiceImpl extends AbstractNbdfService implements QAM01100Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01100Dao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private QAMCommonService qamService;

    /**
     * @fn
     * @brief (Override method) 품질규격 측정값 정보 조회
     * @remark 
     * @see smh.qam.service.QAM01100Service#selectQamMeasureValueList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamMeasureValueList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamMeasureValueList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) LOT 정보 조회
     * @remark 
     * @see smh.qam.service.QAM01100Service#selectPcmLotByLotId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamLotByLotId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamLotByLotId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) LOTID로 측정값 등록화면의 모든 정보 조회
     * @remark 
     * @see smh.qam.service.QAM01100Service#selectPcmLotByLotId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamMeasureValue(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>>lotList = new ArrayList<Map<String, Object>>();//lot 리스트
        Map<String, Object> lotMap = new HashMap<String, Object>(); //lot정보
        
        List<Map<String, Object>>fileList = new ArrayList<Map<String, Object>>();//file 리스트
        List<Map<String, Object>> itemList = new ArrayList<Map<String, Object>>(); //측정항목 리스트
        List<Map<String, Object>> valueList = new ArrayList<Map<String, Object>>(); //측정값 리스트
        
        boolean isNew = true;
        //데이터 측정 이력 조회
        List<Map<String, Object>> daresultList = generalDao.addSelect(NAMESAPCE + ".selectBasDaresult", param);
        Map<String, Object> daresultMap = new HashMap<String, Object> ();
        daresultMap = (daresultList != null && daresultList.size() > 0) ? daresultList.get(0): null;
        
        if(daresultMap == null) {
        	isNew = true;
        	
        	//lot 정보 조회 (여러 건일 경우가 있음 :  같은 LOT_ID에 EQUIPMENTID 가 여러 건 존재할 수 있다고 함.)
            lotList = generalDao.addSelect(NAMESAPCE + ".selectQamLotByLotId", param);
    		if(lotList != null && lotList.size() > 0 && lotList.get(0) != null) {
    			lotMap = lotList.get(0);
    		}
    		
        } else {
        	isNew = false;
        	lotMap = daresultMap;
        }
        
        param.putAll(lotMap);
        
    	if(isNew) {
    		itemList = generalDao.addSelect(NAMESAPCE + ".selectQamInsepctionSpecListByItemAdd", param);
    		
    		if(itemList.size() > 0) {
    			String txnHistKey = TxnHistKey.getTxnHistKey();
    			for(Map<String, Object>  item : itemList) {
    				item.put("RESULTTXNHISTKEY", txnHistKey);
    			}
    		}
    	} else {
    		
    		itemList = generalDao.addSelect(NAMESAPCE + ".selectQamInsepctionSpecListByItem", param);
        	fileList = generalDao.addSelect(NAMESAPCE + ".selectQamInspectionOriginalFile", param);
    	}
    	valueList = generalDao.addSelect(NAMESAPCE + ".selectQamQualitySpecificationValueList", param);
        
        putDataSetMap(dto, lotMap, "output1");
        putDataSetMap(dto, itemList, "output2");
        putDataSetMap(dto, valueList, "output3");
        putDataSetMap(dto, fileList, "output4");
    }
    
    /**
     * @fn
     * @brief (Override method) 계측값 등록
     * @remark - 데이터 측정 이력 등록  트랜젝션 처리
     * 				   - 모든 데이터가 normal 로 들어옴 -> 항상 이 상태에서 insert 됨
     * @see smh.qam.service.QAM01100Service#saveBasDaresult(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamMeasureValue(UiMapDto dto) throws Exception {
    	int result = 0;
        DataSetMap measureItemMap = getParametersDataSetMap(dto, "ds_qamMeasureItem");
        DataSetMap measureValueMap = getParametersDataSetMap(dto, "ds_qamMeasureValue");
        
        List<Map<String, Object>> retList = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> analysisList = getAnalysisList(measureItemMap, measureValueMap);//--> 데이터 가공 끝

        String inspItemId = "";
		
        for(int i = 0; i < analysisList.size(); i++) {
        	
        	Map<String, Object> map = new HashMap<String, Object>(); 
        	map = analysisList.get(i);

            /**** 모든 검사항목이 측정값을 입력하였다면 SF_INSPECTIONRESULT 와 CT_LOTWORKRESULT에 결과 등록 ****/
        	if(i == 0 && map.get("ISALLMEASURECHECK") != null && (boolean) map.get("ISALLMEASURECHECK")) {
        		
        		//========================================================
        		// STEP1. SF_INSPECTIONRESULT (to-be : QAM_INSPECTIONRESULT)  insert or update (as-is 함수 : SetInspectionResult)
        		//========================================================
        		
        		Map<String, Object> selectQamInspectionresultMap =  new HashMap<String, Object>();
        		
        		selectQamInspectionresultMap.put("RESOURCETYPE", map.get("RESOURCETYPE"));
        		selectQamInspectionresultMap.put("RESOURCEID", map.get("RESOURCEID"));
        		selectQamInspectionresultMap.put("PROCESSRELNO", "*");
        		selectQamInspectionresultMap.put("PROCESSSEGMENTID", map.get("PROCESSSEGMENTID"));
        		
        		//검사결과 조회 
        		int  selectQamInspectionresultCount =  generalDao.addSelect(NAMESAPCE + ".selectQamInspectionresultList", selectQamInspectionresultMap).size();
        		
        		if(selectQamInspectionresultCount == 0) {
        			
        			//->검사결과에서 사용할 map
        			Map<String, Object> inspMap = new HashMap<String, Object>(); 
        			inspMap.putAll(map);
        			
        			inspMap.put("PROCESSRELNO", "*");
        			inspMap.put("INSPECTIONCLASSID", "OperationInspection");
        			inspMap.put("DEGREE", "1");
        			inspMap.put("INSPECTIONDATE", map.get("MEASUREDATETIME"));
        			inspMap.put("INSPECTIONUSER", map.get("MEASURER"));  
        			inspMap.put("INSPECTIONRESULT", map.get("QAMINSPECTIONRESULT"));
            		result += generalDao.addUpdate(NAMESAPCE + ".insertQamInspectionresult", inspMap);
            		
        		} 
        		
        		//========================================================
        		// STEP2. CT_LOTWORKRESULT (to-be : PCM_LOTWORKRESULT) update (as-is 함수 :SetUpdateLotWorkResult)
        		//========================================================
        		
        		//STEP2-1. LOT 정보 조회
        		Map<String, Object> selectPcmLotMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotList", map);
        		Map<String, Object> selectLotWorkResultMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotWorkResultInfo", selectPcmLotMap);        		
        		selectLotWorkResultMap.put("MEASUREINSPRESULT", "OK".equals(StringUtil.Object2String(map.get("QAMINSPECTIONRESULT"))) ? "Y" : "N");
        		
        		//PCM_LOTWORKRESULT 에 검사결과 update
        		result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", selectLotWorkResultMap);
        	}
        	
        	//========================================================
    		// STEP3. SF_DARESULT   (to-be : BAS_DARESULT) insert
    		//========================================================
        	result += generalDao.addUpdate(NAMESAPCE + ".insertBasDaresult", map);
        	
        	//========================================================
    		// STEP4. 판정에 따른 NCR발행
    		//========================================================
        	/**** INSPECTIONRESULT : Lot 검사결과 / RESULT : 검사항목 측정결과 ****/
        	String _inspectionResult = StringUtil.Object2String(map.get("INSPECTIONRESULT"));
        	String _result = StringUtil.Object2String(map.get("RESULT"));
        	
        	if("NG".equals(_inspectionResult) && "NG".equals(_result) && !inspItemId.equals(map.get("INSPITEMID"))) {
        		inspItemId = StringUtil.Object2String(map.get("INSPITEMID"));
        		
        		String reasonCode = qamService.getReasonCode(map.get("PROCESSSEGMENTID"), map.get("PROCESSSEGMENTVERSION"));
				map.put("REASONCODEID", reasonCode);
				
				retList = getResponseRow(map);
        	}
        	/**** END  NCR발행 ****/
        	
        	/**** 모든 검사항목이 측정값을 입력하였다면 SF_INSPECTIONRESULT 와 CT_LOTWORKRESULT에 결과 등록 
		      사외외주가 아닌 경우에 신뢰성 의뢰 ****/		 
        	//========================================================
    		// STEP5. 사외외주가 아닌 경우에 신뢰성 의뢰 -> 2021.06.21 사용안함으로 변경 요청
    		//========================================================
        	
//        	if(i == 0 && map.get("ISALLMEASURECHECK") != null && (boolean) map.get("ISALLMEASURECHECK")) {
//        		boolean isType = true;
//        		SetReliablityRequest(dto, map, isType);
//        	}
        	
        	//========================================================
    		// STEP6. SPC interface table에 insert
    		//========================================================
        	if(result > 0) {
        		generalDao.addUpdate(NAMESAPCE + ".insertInfDaresultSpc", map);
        	}
        }
        
        /**
         * as-is QualitySpecification.java : GetEquipmentInterface -> interface 에서 호출 (SendMail)
         * 	DispatcherUtils.exec("QualitySpecification", "GetEquipmentInterface", ids, transaction);
         * --> false 이면 설비 신뢰성 의뢰시 파라미터로 넘기는 로직 추가	
         */
        putDataSetMap(dto,  retList, "output");
    }
    
    /**
     * @fn
     * @brief (Override method) 계측값등록
     * @remark - 데이터 측정 이력 등록  트랜젝션 처리 -> 수입검사 결과등록에서 호출할 함수
     * @see smh.qam.service.QAM01100Service#saveBasDaresult(DataSetMap 측정항목, DataSetMap 측정값, 이전service 에서 넘길 파라미터 map)
     */
    @Override
    public void saveQamMeasureValue(DataSetMap measureItemMap, DataSetMap measureValueMap, DataSetMap infoMap) throws Exception {
    	int result = 0;
        List<Map<String, Object>> analysisList = getAnalysisList(measureItemMap, measureValueMap);//--> 데이터 가공 끝
		Map<String, Object> resultMap = new HashMap<String, Object>(); //파라미터로 넘어온 infoMap을 담을 맵
		Map<String, Object> selectPcmLotMap  = new HashMap<String, Object>(); //LOT정보 조회하는 맵
		
        if(infoMap != null && infoMap.size() > 0 && infoMap.get(0) != null) {
        	resultMap = infoMap.get(0);
        }
        for(int i = 0; i < analysisList.size(); i++) {
        	Map<String, Object> map = new HashMap<String, Object>(); 
        	map = analysisList.get(i);
        	
        	if(resultMap != null) {
        		map.putAll(resultMap);
        		map.put("LOTID", map.get("RESOURCEID"));
        		map.put("MEASURER", map.get("MEASUREUSER")); //측정자
        	}

            /**** 모든 검사항목이 측정값을 입력하였다면 SF_INSPECTIONRESULT 와 CT_LOTWORKRESULT에 결과 등록 ****/
        	if(i == 0 && map.get("ISALLMEASURECHECK") != null && (boolean) map.get("ISALLMEASURECHECK")) {
        		
        		//========================================================
        		// STEP1. SF_INSPECTIONRESULT (to-be : QAM_INSPECTIONRESULT)  insert or update (as-is 함수 : SetInspectionResult)
        		//========================================================
//        		Map<String, Object> selectQamInspectionresultMap =  new HashMap<String, Object>();
//        		
//        		selectQamInspectionresultMap.put("RESOURCETYPE", map.get("RESOURCETYPE"));
//        		selectQamInspectionresultMap.put("RESOURCEID", map.get("RESOURCEID"));
//        		selectQamInspectionresultMap.put("PROCESSRELNO", "*");
//        		selectQamInspectionresultMap.put("PROCESSSEGMENTID", map.get("PROCESSSEGMENTID"));
//        		
//        		//검사결과 조회 
//        		int  selectQamInspectionresultCount =  generalDao.addSelect(NAMESAPCE + ".selectQamInspectionresultList", selectQamInspectionresultMap).size();
//        		
//        		if(selectQamInspectionresultCount == 0) {
//        			
//        			//->검사결과에서 사용할 map
//        			map.put("RESULTTXNHISTKEY", TxnHistKey.getTxnHistKey());
//        			map.put("PROCESSRELNO", "*");
//            		map.put("INSPECTIONCLASSID", "OperationInspection");
//            		map.put("DEGREE", "1");
//            		map.put("INSPECTIONDATE", map.get("MEASUREDATETIME"));
//            		map.put("INSPECTIONUSER", measurer); //측정자 가져오기 (원래는 map.get("MEASURER") ...=> 다른 컬럼에서 가져올 수 있으면 안받아와도 됨)
//            		
//            		result += generalDao.addUpdate(NAMESAPCE + ".insertQamInspectionresult", map);
//            		
//        		} 
        		//========================================================
        		// STEP2. CT_LOTWORKRESULT (to-be : PCM_LOTWORKRESULT) update (as-is 함수 :SetUpdateLotWorkResult)
        		//========================================================
        		
        		//STEP2-1. LOT 정보 조회
        		selectPcmLotMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotList", map);
        		Map<String, Object> selectLotWorkResultMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotWorkResultInfo", selectPcmLotMap);
        		selectLotWorkResultMap.put("MEASUREINSPRESULT", "OK".equals(StringUtil.Object2String(map.get("QAMINSPECTIONRESULT"))) ? "Y" : "N");
        		
        		//PCM_LOTWORKRESULT 에 검사결과 update
        		result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", selectLotWorkResultMap);
        	}
        	//========================================================
    		// STEP3-0. LOT 정보 map에 put
    		//========================================================
        	map.put("REWORKCOUNT", selectPcmLotMap.get("REWORKCOUNT"));
        	map.put("AREAID", selectPcmLotMap.get("AREAID"));
        	map.put("LOTTYPE", selectPcmLotMap.get("LOTTYPE"));
        	map.put("CUSTOMERID", selectPcmLotMap.get("CUSTOMERID"));
        	//2021.07.13 TOBE Add 수입검사결과등록화면에서 입력받은 값 사용
        	//map.put("EQUIPMENTID", selectPcmLotMap.get("EQUIPMENTID"));
        	
        	//========================================================
    		// STEP3. SF_DARESULT   (to-be : BAS_DARESULT) insert
    		//========================================================
        	result += generalDao.addUpdate(NAMESAPCE + ".insertBasDaresult", map);
        	
        	//========================================================
    		// STEP4. 판정에 따른 NCR발행 -> 수입검사에서 호출 시에 NCR 발행하지 않음
    		//========================================================
        	
        	//========================================================
    		// STEP5. 사외외주가 아닌 경우에 신뢰성 의뢰 -> 2021.06.21 사용안함으로 변경 요청
    		//========================================================
        	
        	//========================================================
    		// STEP6. SPC interface table에 insert
    		//========================================================
        	if(result > 0) {
        		generalDao.addUpdate(NAMESAPCE + ".insertInfDaresultSpc", map);
        	}
        }
    }
    
    //데이터 가공
    public List<Map<String, Object>> getAnalysisList(DataSetMap measureItemMap, DataSetMap measureValueMap) {
    	Map<String, Object> measureItem = new HashMap<String, Object>();
        Map<String, Object> darresult = new HashMap<String, Object>();
        List<Map<String, Object>> analysisList = new ArrayList<Map<String, Object>>();

        int measureCnt = measureItemMap.size();
        //측정일시를 같은 값으로 넣어달라고 요청 (2021.06.17)
        String measuredatetime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        
        boolean isAllMeasureCheck[] = new boolean[measureCnt];
        String inspectionResult = "OK"; //한 건만 들어가기 때문에 변경 (MASTER 테이블에 들어갈 result)
		String inspectionDetailResult[] = new String[measureCnt]; //BAS_DARESULT테이블에 들어갈 INSPECTIONRESULT
		BigDecimal max[] = new BigDecimal[measureCnt];
		BigDecimal min[] = new BigDecimal[measureCnt];
		BigDecimal sum[] = new BigDecimal[measureCnt];
		int groupCount[] = new int[measureCnt];
		String measureValueList[] = new String[measureCnt];
		int listCount = 0;
		
		//max, min, sum 값 구하기
        for (int i = 0, n = measureCnt; i < n; i++) {
        	measureItem = measureItemMap.get(i);
        	
        	//초기화
        	isAllMeasureCheck[i] = true;
        	inspectionDetailResult[i] = "OK";
			max[i] = new BigDecimal("0");
			min[i] = new BigDecimal("0");
			sum[i] = new BigDecimal("0");
			measureValueList[i] = "";
			groupCount[i] = 0;
			
        	for (int j = 0, dn = measureValueMap.size(); j < dn; j++) {
        		darresult = measureValueMap.get(j);
        		darresult.put("RESULT", darresult.get("INSPECTIONRESULT"));
        		
        		if(measureItem.get("INSPITEMID").equals(darresult.get("INSPITEMID"))) {
        			String measureValue = darresult.get("MEASUREVALUE") == null ? "" : StringUtil.Object2String(darresult.get("MEASUREVALUE"));
        			String measureValue2 = darresult.get("MEASUREVALUE2") == null ? "" : StringUtil.Object2String(darresult.get("MEASUREVALUE2"));
        			
        			//2021.04.29 요청사항 추가
        			if("Y".equals(StringUtil.Object2String(measureItem.get("TOPBOTTOMYN"))) && "Bottom".equals(StringUtil.Object2String(measureItem.get("CIRCUITSTD")))) {
        				measureValue = measureValue2;
        			}
        			
        			if(!StringUtil.isNullOrEmpty(measureValue)) {
	        				
	        			if("NG".equals(darresult.get("RESULT"))) {
	        				inspectionResult = "NG";
	        				inspectionDetailResult[i] = "NG";
	    	        	}
	    				
	    				//측정값 계산 시작
	    				BigDecimal bMeasureValue = new BigDecimal(measureValue);
	    				
	            		if(groupCount[i] == 0) {
	            			max[i] =  bMeasureValue;
	            			min[i] = bMeasureValue;
	            			sum[i] = bMeasureValue;
	            			measureValueList[i] = measureValue;
	            		} else {
	            			max[i] = max[i].max(bMeasureValue);
	            			min[i] = min[i].min(bMeasureValue);
	            			sum[i] = sum[i].add(bMeasureValue);
	            			measureValueList[i] = measureValueList[i] + ", " +measureValue;
	            		}
	            		
	    				groupCount[i]++;
        			} 
        			//if 측정값 입력이 되지 않았다면 
        			else {
        				isAllMeasureCheck[i] = false;
        			}
    			} 
        	} //for
        }
        
        for (int i = 0, n = measureCnt; i < n; i++) {
        	if(groupCount[i] > 0) {
        		measureItem = measureItemMap.get(i);
        		BigDecimal avg = sum[i].divide(new BigDecimal(groupCount[i]), 4, BigDecimal.ROUND_CEILING);
            	BigDecimal sub = max[i].subtract(min[i]);
            	listCount = 0;
            	
            	measureItem.put("ISALLMEASURECHECK", isAllMeasureCheck[i]);
            	measureItem.put("INSPECTIONRESULT", inspectionResult);
    			measureItem.put("MAXVALUE", max[i]);
    			measureItem.put("MINVALUE", min[i]);
    			measureItem.put("AVERAGEVALUE", avg);
    			measureItem.put("DEVIATION", sub);
    			
    			//SetAnalysisDataRow 데이터 가공
    			measureItem.put("RESOURCEID", measureItem.get("LOTID"));
    			measureItem.put("DADEFID", "OperationInspection");
    			measureItem.put("DADEFVERSION", "*");
    			measureItem.put("PROCESSPATHID", "*");
    			measureItem.put("DAITEMVERSION", measureItem.get("INSPITEMVERSION"));
    			
            	for (int j = 0, dn = measureValueMap.size(); j < dn; j++) {
            		darresult = measureValueMap.get(j);
            		Map<String, Object> analysisMap = new HashMap<String, Object>();
            		darresult.put("MEASUREDATETIME", measuredatetime);
            		
            		if(measureItem.get("INSPITEMID").equals(darresult.get("INSPITEMID"))) {
            			analysisMap.putAll(measureItem);
            			
            			analysisMap.put("INSPITEMID", darresult.get("INSPITEMID"));
            			analysisMap.put("MEASUREVALUELIST", measureValueList[i]);
            			analysisMap.put("DAPOINTID", ++listCount);
            			
            			analysisMap.put("TXNHISTKEY", darresult.get("TXNHISTKEY"));
            			analysisMap.put("RESOURCETYPE", darresult.get("RESOURCETYPE"));
            			
            			analysisMap.put("VALUE", darresult.get("MEASUREVALUE"));
            			analysisMap.put("VALUE2", darresult.get("MEASUREVALUE2"));
            			analysisMap.put("MEASUREDATETIME", StringUtil.Object2String(darresult.get("MEASUREDATETIME")).trim().replaceAll("-","").replaceAll(":",""));
            			analysisMap.put("RESULT", darresult.get("RESULT"));
            			analysisMap.put("INSPECTIONRESULT", inspectionDetailResult[i]); //2021.06.22추가
            			analysisMap.put("DAITEMID", darresult.get("INSPITEMID"));
            			analysisMap.put("REWORKCOUNT", darresult.get("REWORKCOUNT"));
            			
            			//예외사항 처리 (수입검사결과가 들어오기 때문에)
            			String resourceType = StringUtil.Object2String(analysisMap.get("RESOURCETYPE"));
            			
            			if("OperationInspection".equals(resourceType)) { //계측값등록
            				analysisMap.put("TARGET", analysisMap.get("SL"));
                			analysisMap.put("LOWERSPECLIMIT", analysisMap.get("LSL"));
                			analysisMap.put("UPPERSPECLIMIT", analysisMap.get("USL"));
                			analysisMap.put("MEASURER", darresult.get("MEASURER"));
                			
            			} else if("ProcessInspection".equals(resourceType)) { //수입검사결과 등록
            				analysisMap.put("TARGET", analysisMap.get("TARGETVALUE"));
            				//analysisMap.put("RESULT", analysisMap.get("INSPECTIONRESULT")); //위에서 처리해야 함.
            				analysisMap.put("SPECRANGE", analysisMap.get("INSPECTIONSTANDARD"));
            				analysisMap.put("TOPBOTTOMYN ", "N"); //항상 N이라고 하심.
            			}
            			
            			//2021.07.06 QAM_INSPECTIONRESULT에는 LOT별 판정결과 등록
            			analysisMap.put("QAMINSPECTIONRESULT", measureItem.get("INSPECTIONRESULT"));
            			
            			//listCount++;
            		} else {
            			listCount= 0;
            		}
            		if(listCount > 0) {
            			analysisList.add(analysisMap);
            		}
            	} 
        	}
        }
        return analysisList;
    }
    
    // 사외외주가 아닌 경우에 신뢰성 의뢰
 	private void SetReliablityRequest(UiMapDto dto, Map<String, Object> map, boolean isType) throws Exception
 	{
 		Map<String, Object> param = new HashMap<>();
 		param.put("AREAID", map.get("AREAID"));
 		
 		// 2020.02.27-유석진-품질규격 등록 후 (정기)신뢰성 의뢰 등록 시 사외외주 여부 체크
 		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".selectCheckNotOutsideOsp", param);
 		
 		// 2020.02.27-유석진-사외외주가 아닌 경우에만 신뢰성 의뢰를 함
 		if(result.size() > 0)
 		{
 			// 2020-03-02 유석진 isType이 true이면 화면, false 이면 설비 신뢰성 의뢰시 파라미터로 넘기는 로직 추가	
 			qamService.createQcReliablityRequest(dto
 											   , StringUtil.Object2String(map.get("ENTERPRISEID"))
 											   , StringUtil.Object2String(map.get("PLANTID"))
 											   , StringUtil.Object2String(map.get("RESOURCEID"))
 											   , StringUtil.Object2String(map.get("MEASURER"))
 											   , isType);
 		}
 	}
 	
 	// 메일 정보 수집
 	private List<Map<String, Object>> getResponseRow (Map<String, Object> map) throws Exception {
 		List<Map<String, Object>> list = new ArrayList<Map<String, Object>> ();
 		// NCR 기준정보 수집 
 		String actionType = qamService.getActionTypeByDecisionDegree(map, "OperationInspection", StringUtil.Object2String(map.get("ENTERPRISEID")), StringUtil.Object2String(map.get("PLANTID")), StringUtil.Object2String(map.get("NCRDECISIONDEGREE")));
 		
 		if(actionType != null) {	
 			//2019-12-12 강유라 파라미터 null 추가
 			Boolean isSendEmail = qamService.doActionAndGetIsSendEmail(actionType, map, StringUtil.Object2String(map.get("RESOURCEID")), "QualityStandardInspection",  
 					StringUtil.Object2String(map.get("ENTERPRISEID")),  StringUtil.Object2String(map.get("PLANTID")), StringUtil.Object2String(map.get("NCRDECISIONDEGREE")));
 			
 			if(isSendEmail) {
 				//2020-01-15 전우성 NG발생하여 메일 발송시에 항목 다국어 처리
 				//NG 발생시 메일발송하기 위한 Mail Data AS-IS : GetMainData
 				List<Map<String, Object>> mailList = generalDao.addSelect(NAMESAPCE + ".selectMeasureValueNgMailData", map);
 				Map<String, Object> mailMap = new HashMap<String, Object>();
 				
 				if(mailList != null && mailList.size() > 0 &&  mailList.get(0) != null) {
 					mailMap = mailList.get(0);
 					
 				} else {
 					mailMap = new HashMap<String, Object>();
 					mailMap.put("PRODUCTDEFID", map.get("PRODUCTDEFID"));
 					mailMap.put("PRODUCTDEFNAME", map.get("PRODUCTDEFNAME"));							
 					mailMap.put("PRODUCTDEFVERSION", map.get("PRODUCTDEFVERSION"));							
 					mailMap.put("RESOURCEID", map.get("RESOURCEID")); //lot																								
 					//mailMap.put("MEASUREDATETIME", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(row.getDate("MEASUREDATETIME")));
 					mailMap.put("MEASUREDATETIME", map.get("MEASUREDATETIME"));
 					mailMap.put("INSPITEMID", map.get("INSPITEMID"));
 					mailMap.put("MEASURER", map.get("MEASURER"));
 					mailMap.put("PLANTID", map.get("PLANTID"));
 					mailMap.put("PROCESSSEGMENTID", map.get("PROCESSSEGMENTID"));
 					mailMap.put("AREAID", map.get("AREAID"));
 					mailMap.put("EQUIPMENTID", map.get("EQUIPMENTID"));
 					mailMap.put("MEASUREVALUELIST", map.get("MEASUREVALUELIST"));
 					mailMap.put("SPECRANGE", map.get("SPECRANGE"));	
 				}
 				
 				list.add(mailMap);
 			}
 		}
 		return list;
 	}

}