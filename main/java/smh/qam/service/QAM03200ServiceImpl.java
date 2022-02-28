package smh.qam.service;

import java.io.BufferedReader;
import java.io.StringReader;
import java.math.BigDecimal;
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
* @file: QAM03200ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03200ServiceImpl
* @Company: Built1
* @Create Date: 2021.06.04
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.04.       권혜영     최초  생성
*/
@Service
public class QAM03200ServiceImpl extends AbstractNbdfService implements QAM03200Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM03200Dao";
    public static final String NAMESAPCE_03100 = "smh.qam.dao.QAM03100Dao"; //기준값 조회
    public static final String NAMESAPCE_03300 = "smh.qam.dao.QAM03300Dao"; //측정현황 조회

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) LOT별 수축율 측정 조회
     * @remark 
     * @see smh.qam.service.QAM03200Service#selectQamShrinkmeasureList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamShrinkmeasureList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> lotList = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> measureList = new ArrayList<Map<String, Object>>();
        Map<String, Object> retMap = new HashMap<String, Object>();
        
        lotList = generalDao.addSelect(NAMESAPCE + ".selectQamLotInfo", param);
        
        //등록할 수 있는 조건 체크
        if(lotList != null && lotList.size() > 0 && lotList.get(0) != null) {
        	Map<String, Object> lotMap = new HashMap<String, Object>();
        	lotMap = lotList.get(0);
        	
        	param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
	        param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
        	param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
        	param.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
        	param.put("PROCESSSEGMENTSEQ", lotMap.get("USERSEQUENCE"));
        	param.put("VALIDSTATE", "Valid");
        	
        	List<Map<String, Object>> shrinkproductoperationList = generalDao.addSelect(NAMESAPCE_03100 + ".selectQamShrinkproductoperationList", param); //수축율관리품목 공정별기준값 조회
        	
        	if(shrinkproductoperationList == null || shrinkproductoperationList.size() == 0) {
    			//========================================================
    			// STEP1. 등록된 공정별기준값이 없을 경우
    			//========================================================
        		measureList = new ArrayList<Map<String, Object>>();
        		retMap.put("RESULT", "FAIL_NOTREGIST");
        		
        	} else {
        		Map<String, Object> shrinkproductoperationMap = new HashMap<String, Object>();
        		shrinkproductoperationMap = shrinkproductoperationList.get(0);
        		//========================================================
    			// STEP2. 공정별기준값의 작업상태가 일치하지 않을 경우
    			//========================================================
    			String lotWipProcessstate = StringUtil.Object2String(lotMap.get("WIPPROCESSSTATE"));
    			String stdProcessstate = StringUtil.Object2String(shrinkproductoperationMap.get("WIPPROCESSSTATE"));
        		
    			if(!lotWipProcessstate.equals(stdProcessstate)) {
            		retMap.put("RESULT", "FAIL_STD_NOTMATCH");
    			}
    			
    			//========================================================
    			// STEP3. 등록된 측정값이 없을경우 수축율관리품목 공정별기준값의 CAD 자동입력 (2021.06.09 요청)
    			//========================================================
        		else {
        			param.put("PROCESSSTATE", lotMap.get("PROCESSSTATE"));
                	param.put("PROCESSSEGMENTSEQ", lotMap.get("USERSEQUENCE"));
                	
        			measureList = generalDao.addSelect(NAMESAPCE + ".selectQamShrinkmeasureList", param);
        			//========================================================
        			// STEP2-1. 해당 LOT NO의 공정+작업상태가 측정데이터의 공정+작업상태와 일치하는 않을 경우
        			// ->메세지 없이 빈값으로. (새로 입력)
        			//========================================================
        			/* if(measureList != null && measureList.size() > 0) {
            			String lotProcessstate = StringUtil.Object2String(lotMap.get("PROCESSSTATE"));
            			
            			String processsegmentid = StringUtil.Object2String(measureList.get(0).get("PROCESSSEGMENTID"));
            			String processstate = StringUtil.Object2String(measureList.get(0).get("PROCESSSTATE"));
            			
            			if(!lotProcesssegmentid.equals(processsegmentid) || !lotProcessstate.equals(processstate)) {
            				measureList = new ArrayList<Map<String, Object>>();
            				retMap.put("RESULT", "FAIL_NOTMATCH");
            			}
            		} */
        			
        			//========================================================
        			// STEP3-1. 수축율관리품목 공정별기준값 조회
        			//========================================================
        			//2021.07.08 TOBE Add LOT별 수축율 측정정보가 존재하면 이미 CAD 정보가 존재하므로 중복으로 표기되어 미존재시에만 생성하도록 변경
        			if(measureList == null || measureList.size() < 1) {
	        			Map<String, Object> cadParam = new HashMap<String, Object> ();
	        			String value[] = new String[6];
	        			
	        			if(shrinkproductoperationList != null && shrinkproductoperationList.size() > 0) {
	        	        	shrinkproductoperationMap = shrinkproductoperationList.get(0);
	        	            
	        	            for(int i = 0; i < 6; i++) {
	        	            	String mapKey = String.format("%1$s%2$s", "CAD_", getMeasureDivision(i));
	        	            	
	        	    	    	value[i] = shrinkproductoperationMap.get(mapKey) == null ? "0" : StringUtil.Object2String(shrinkproductoperationMap.get(mapKey));
	        	    	    	cadParam.put("SHRINKMEASURECODE", "CAD");
	        	            	setMeasureMap(cadParam, value[i], i);
	        	            }
	        	            measureList.add(cadParam);
	        	        }
        			}
        		}
        	}
        }
        putDataSetMap(dto, lotList , "ds_qamLotinfo");
        putDataSetMap(dto, measureList, "ds_qamShrinkmeasure");
        putDataSetMap(dto, retMap, "ds_output");
    }
    
    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 수축율관리 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.QAM03200Service#saveQamShrinkmeasure(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamShrinkmeasure(UiMapDto dto) throws Exception {
    	Map<String, Object> param = new HashMap<String, Object>(); // 파라미터 담을 map
    	
        DataSetMap lot = getParametersDataSetMap(dto, "ds_qamLotinfo"); //LOT 정보
        DataSetMap measure= getParametersDataSetMap(dto, "ds_measureValue"); //text로 입력된 측정값 등록 정보
        DataSetMap data = getParametersDataSetMap(dto, "ds_qamShrinkmeasure"); //측정값 DATA 
        
        Map<String, Object> lotMap = new HashMap<String, Object> ();
        Map<String, Object> measureMap = new HashMap<String, Object> ();
        
		List<Map<String, Object>> dataList = new ArrayList<Map<String, Object>>(); //최종 저장할 측정DATA 

        
        //LOT정보와 측정값 등록 부분은 1건.
        if(lot != null && lot.size() > 0) lotMap = lot.get(0);
        if(measure != null && measure.size() > 0) measureMap = measure.get(0);

        //변수 선언
        int result = 0;
        String shrinkmeasureid  = "";
        int measureCnt = data.size();
        
        //value check할 cnt
        int valueDataCnt = 0;
        int valueTotalCnt = measureCnt - 1; 
        
        //========================================================
	    // STEP0. 기존데이터가 있을 경우 delete
		//========================================================
        shrinkmeasureid  = StringUtil.Object2String(measureMap.get("SHRINKMEASUREID"));
        if(!StringUtil.isEmpty(shrinkmeasureid)) {
        	param.put("SHRINKMEASUREID", shrinkmeasureid);
        	result += generalDao.addUpdate(NAMESAPCE + ".deleteQamShrinkmeasuremaster", param);
        	result += generalDao.addUpdate(NAMESAPCE + ".deleteQamShrinkmeasuredetail", param);
        }
        
	    //========================================================
	    // STEP1. 측정DATA 로 평균, 편차, max, min 계산
		//========================================================
        
        //초기화
        BigDecimal max[] 		= new BigDecimal[6]; //VALUE_X1 ~ VALUE_XY2
		BigDecimal min[] 		= new BigDecimal[6];
		BigDecimal sum[] 		= new BigDecimal[6];
		BigDecimal avg[] 		= new BigDecimal[6];
		BigDecimal stddev[]		= new BigDecimal[6];
		
        BigDecimal cad[] 			= new BigDecimal[6]; //기준값의 CAD값
        
        BigDecimal shrinkage[] 		= new BigDecimal[6]; //수축량
        BigDecimal shrinkrate[]		= new BigDecimal[6]; //수축율
        BigDecimal compval[]			= new BigDecimal[6]; //비교값
        BigDecimal operval[]			= new BigDecimal[6]; //공정기준값
        BigDecimal opercompval[]	= new BigDecimal[6]; //공정수축율비교값
        BigDecimal prodval[]			= new BigDecimal[6]; //투입수축율
        BigDecimal prodcompval[]	= new BigDecimal[6]; //투입수축율비교값
        
        
        BigDecimal bValue[]	= new BigDecimal[6];
        String value[] = new String[6];
        
        String scaleabnormalYn = "N"; //Scale  이상여부
        //Map<String, Object> cadParam = new HashMap<String, Object> (); 
        Map<String, Object> avgParam = new HashMap<String, Object> ();
        Map<String, Object> maxParam = new HashMap<String, Object> ();
        Map<String, Object> minParam = new HashMap<String, Object> ();
        Map<String, Object> stddevParam = new HashMap<String, Object> ();
        Map<String, Object> shrinkageParam = new HashMap<String, Object> ();
        Map<String, Object> shrinkrateParam = new HashMap<String, Object> ();
        Map<String, Object> compvalParam = new HashMap<String, Object> ();
        
		//data for start >>>>
        for (int i = 0; i < measureCnt; i++) {
        	Map<String, Object> dataMap = new HashMap<String, Object> ();
        	dataMap = data.get(i);
        	
        	//========================================================
    	    // CAD Data 
    		//========================================================
        	String shrinkMeasureCode = StringUtil.Object2String(dataMap.get("SHRINKMEASURECODE"));  
        	if("CAD".equals(shrinkMeasureCode)) {
        		
        		for(int j = 0; j < 6; j++) {
        			String mapKey = String.format("%1$s%2$s", "VALUE_", getMeasureDivision(j));
			    	value[j] = dataMap.get(mapKey) == null ? "0" : StringUtil.Object2String(dataMap.get(mapKey));
			    	cad[j] = new BigDecimal(value[j]);
        		}
        		
        		dataList.add(dataMap);
        	} 
        	//========================================================
    	    // 측정값 계산 시작
    		//========================================================
        	else {
	        	for (int j = 0; j < 6; j++) {
					String mapKey = String.format("%1$s%2$s", "VALUE_", getMeasureDivision(j));
			    	value[j] = dataMap.get(mapKey) == null ? "0" : StringUtil.Object2String(dataMap.get(mapKey));
			    	bValue[j] = new BigDecimal(value[j]);
						
					if(valueDataCnt == 0) { //첫번째 로우
		    			max[j] =  bValue[j];
		    			min[j] = bValue[j];
		    			sum[j] = bValue[j];
		    			
		    		} else  { 
		    			max[j] = max[j].max(bValue[j]);
		    			min[j] = min[j].min(bValue[j]);
		    			sum[j] = sum[j].add(bValue[j]);
		    		}					
	    			
	    			// 마지막 로우
	    			if(valueDataCnt == valueTotalCnt - 1) { 
	    				avg[j] = sum[j].divide(new BigDecimal(valueTotalCnt), 3, BigDecimal.ROUND_HALF_UP);
	    				stddev[j] = max[j].subtract(min[j]);
	    			}	    			
				}
				valueDataCnt++;
				//화면에서 입력받은 측정값 ADD
				dataList.add(dataMap);
        	}
        }
        //data for end >>>>
        
        //========================================================
		// STEP2. 수축율관리품목 공정별기준값 조회
		//========================================================
        param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
        param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
        param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
        
        Map<String, Object> shrinkproductoperationMap = new HashMap<String, Object>();
		List<Map<String, Object>> shrinkproductoperationList = generalDao.addSelect(NAMESAPCE_03100 + ".selectQamShrinkproductoperationList", param);
        if(shrinkproductoperationList != null && shrinkproductoperationList.size() > 0) {
        	shrinkproductoperationMap = shrinkproductoperationList.get(0);
        }
        
        //========================================================
		// STEP3. 계산된 측정 DATA 입력
		//========================================================
        
        // 3-2.  계산값 (SHRINKMEASURECODE = 'AVG' or 'MAX' or 'MIN' or 'STDEV')
        for(int i = 0; i < 6; i++) {
        	//cad -> 입력 시 저장되게 변경 (2021.06.09 요청)
//        	String mapKey = String.format("%1$s%2$s", "CAD_", getMeasureDivision(i));
//        	
//        	if(shrinkproductoperationMap.get(mapKey) == null) {
//	    		throw new BizException("NoInputCADValue", StringUtil.Object2String(shrinkproductoperationMap.get("PROCESSSEGMENTID")));	
//	    	}
//        	
//	    	value[i] = shrinkproductoperationMap.get(mapKey) == null ? "0" : StringUtil.Object2String(shrinkproductoperationMap.get(mapKey));
//	    	cad[i] = new BigDecimal(value[i]);
	    	
//	    	cadParam.put("SHRINKMEASURECODE", "CAD");
//        	setMeasureMap(cadParam, cad[i], i);
        	
        	avgParam.put("SHRINKMEASURECODE", "AVG");
        	setMeasureMap(avgParam, avg[i], i);

        	maxParam.put("SHRINKMEASURECODE", "MAX");
        	setMeasureMap(maxParam, max[i], i);

        	minParam.put("SHRINKMEASURECODE", "MIN");
        	setMeasureMap(minParam, min[i], i);

        	stddevParam.put("SHRINKMEASURECODE", "STDDEV");
        	setMeasureMap(stddevParam, stddev[i], i);
        	
        	//수축량 (평균 – CAD)
        	shrinkage[i] = avg[i].subtract(cad[i]);
        	shrinkageParam.put("SHRINKMEASURECODE", "SHRINKAGE");
        	setMeasureMap(shrinkageParam, shrinkage[i], i);
        	
        	//수축율 ROUND(((수축량 / CAD) * 100, 3)
        	shrinkrate[i] = shrinkage[i].multiply(new BigDecimal(100)).divide(cad[i], 3, BigDecimal.ROUND_HALF_UP);
        	shrinkrateParam.put("SHRINKMEASURECODE", "SHRINKRATE");
        	setMeasureMap(shrinkrateParam, shrinkrate[i], i);
        	
        	//비교값 (수축율 + 100)
        	compval[i] = shrinkrate[i].add(new BigDecimal(100));
        	compvalParam.put("SHRINKMEASURECODE", "COMPVAL");
        	setMeasureMap(compvalParam, compval[i], i);
        	
        }
    	
        //dataList.add(cadParam);
        dataList.add(avgParam);
        dataList.add(maxParam);
        dataList.add(minParam);
        dataList.add(stddevParam);
        dataList.add(shrinkageParam);
        dataList.add(shrinkrateParam);
        dataList.add(compvalParam);
        
        //========================================================
		// STEP4. Master INSERT
		//========================================================
        Map<String, Object> masterMap = new HashMap<String, Object>();
        shrinkmeasureid = TxnHistKey.getTxnHistKey();
    	masterMap.putAll(lotMap);
    	
    	masterMap.put("SHRINKMEASUREID", shrinkmeasureid);
    	masterMap.put("SHRINKPRODUCTID", shrinkproductoperationMap.get("SHRINKPRODUCTID")); //수축율관리품목ID
    	masterMap.put("OPERATIONID", shrinkproductoperationMap.get("OPERATIONID")); //Operation ID
    	

    	masterMap.put("MEASUREPNL", measureMap.get("MEASUREPNL")); //측정PNL
    	masterMap.put("GAUGER", measureMap.get("GAUGER")); //측정자명
    	masterMap.put("EQUIPMENTID", measureMap.get("EQUIPMENTID")); //측정설비 ID
    	masterMap.put("EQUIPMENTDATAFM", measureMap.get("EQUIPMENTDATAFM")); //측정데이터포맷
    	
    	
    	//수축율값, 공정기준값, 공정수축율비교값, 투입수축율, 투입수축율비교값
    	for(int i = 0; i < 6; i++) {
    		
    		//측정수축율 = a
    		setMeasureMap(masterMap, compval[i], i, "COMPVAL");
    		
    		//공정기준값 QAM_SHRINKPRODUCTOPERATION  table의 SCALE 값 -> OPERVAL  = b 
    		String mapKey = String.format("%1$s%2$s", "SCALE_", getMeasureDivision(i));
	    	value[i] = shrinkproductoperationMap.get(mapKey) == null ? "0" : StringUtil.Object2String(shrinkproductoperationMap.get(mapKey));
	    	operval[i] = new BigDecimal(value[i]);
    		setMeasureMap(masterMap, operval[i], i, "OPERVAL");
    		
    		//공정수축율 비교값  (b-a) / b =====> (a-b) / a (2021.06.24 변경) -> 공정수축율 비교값은 반올림한 4자리까지.
    		//opercompval[i] = operval[i].subtract(compval[i]).divide(operval[i], 3, BigDecimal.ROUND_HALF_UP);
    		opercompval[i] = compval[i].subtract(operval[i]).divide(compval[i], 4, BigDecimal.ROUND_HALF_UP);
    		setMeasureMap(masterMap, opercompval[i], i, "OPERCOMPVAL");
    		
    		//투입수축율 QAM_SHRINKPRODUCT 테이블의 SCAL 값 -> PRODVAL = d
    		mapKey = String.format("%1$s%2$s", "PRODVAL_", getMeasureDivision(i));
	    	value[i] = shrinkproductoperationMap.get(mapKey) == null ? "0" : StringUtil.Object2String(shrinkproductoperationMap.get(mapKey));
	    	prodval[i] = new BigDecimal(value[i]);
    		setMeasureMap(masterMap, prodval[i], i, "PRODVAL");
    		
    		//투입수축율 비교값  (d-a) / d =====> (a-d) / a (2021.06.24 변경)
    		//prodcompval[i] = prodval[i].subtract(compval[i]).divide(prodval[i], 3, BigDecimal.ROUND_HALF_UP);
    		prodcompval[i] = compval[i].subtract(prodval[i]).divide(compval[i], 3, BigDecimal.ROUND_HALF_UP);
    		setMeasureMap(masterMap, prodcompval[i], i, "PRODCOMPVAL");
    		
    		//Scale 이상여부 (공정수축율 0.03초과)
        	if(opercompval[i].abs().compareTo(new BigDecimal(0.03)) > 0) {
        		scaleabnormalYn = "Y";
        	}
    	}
    	
    	masterMap.put("SCALEABNORMALYN", scaleabnormalYn);
    	result += generalDao.addUpdate(NAMESAPCE + ".insertQamShrinkmeasuremaster", masterMap);
    	
        //========================================================
		// STEP5. Detail INSERT
		//========================================================
    	for(int i = 0; i < dataList.size(); i++) {
    		param = new HashMap<String, Object> ();
    		param = dataList.get(i);
    		param.put("SHRINKMEASUREID", shrinkmeasureid);
    		
    		result += generalDao.addUpdate(NAMESAPCE + ".insertQamShrinkmeasuredetail", param);
    	}
    	
        //========================================================
		// STEP6. 결과가 NG일 경우 mail 발송하기 위한 수축율 현황 조회
		//========================================================
    	List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
    	
    	if("Y".equals(scaleabnormalYn)) {
    		param = new HashMap<String, Object>();
    		param.put("SHRINKMEASUREID", shrinkmeasureid);
    		list = generalDao.addSelect(NAMESAPCE_03300 + ".selectQamShrinkmeasureList", param);
    	}
    	putDataSetMap(dto, list, "output");
    }
    
    /**
     * @fn
     * @brief 
     * @remark - 측정값 DATA 변환
     * @see smh.bas.service.QAM03200Service#procQamShrinkmeasure(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void procQamShrinkmeasure(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "ds_measureData"); //측정값 data도 한 건.
        DataSetMap cadMap = getParametersDataSetMap(dto, "ds_cadData"); //CAD data도 한 건.
        
        Map<String, Object> param = new HashMap<String, Object>(); //측정값 data map
        
        //return할 map, list
        Map<String, Object> measureMap = new HashMap<String, Object>();
		List<Map<String, Object>> measureList = new ArrayList<Map<String, Object>>();

        //CAD data도 한 건. (이전 화면에서 가져온 CAD value값 저장.
        if(cadMap != null && cadMap.size() > 0 && cadMap.get(0) != null) {
        	measureList.add(cadMap.get(0));
        }
        //측정값 DATA 는 한 건.
        if(paramMap != null) {
        	param = paramMap.get(0);
        	
        	if(param != null) {
        		//측정데이터 포맷
        		String equipmentdatafm = StringUtil.Object2String(param.get("EQUIPMENTDATAFM"));
        		String measurepnl = StringUtil.Object2String(param.get("MEASUREPNL"));
        		int iMeasurepnl = Integer.parseInt(StringUtil.isEmpty(measurepnl) ? "0": measurepnl);
        		String inputdata = StringUtil.Object2String(param.get("INPUTDATA"));
        		
        		//read 변수 설정
        		BufferedReader reader = new BufferedReader(new StringReader(inputdata));
        		String str = "";
        		String startTxt = "", endTxt = "";
        		int cnt = 0, shrinkmeasureVal = 0;
        		
        		if("CNC".equals(equipmentdatafm) || "LAM".equals(equipmentdatafm)) {
        			startTxt = ":BEGIN";
    				endTxt = ":END";
    				
    				while ((str = reader.readLine()) != null && shrinkmeasureVal < iMeasurepnl) {
    					
    					if(startTxt.equals(str)) {
    						cnt =0;
    						measureMap = new HashMap<String, Object>();
    					}
    					else if(endTxt.equals(str)) {
    						shrinkmeasureVal++;
    						measureList.add(measureMap);
    						
    					} else {
    						// 변환 시작
    						int idx = str.lastIndexOf("\"") + 1;
    						String value = str.substring(idx, str.length());
    						String shrinkmeasurecode  = String.format("%1$s%2$02d", "VALUE" , (shrinkmeasureVal + 1));
    						
    						//CNC일 경우 포맷 형식 변경 (2021.06.24 요청)
    						if("CNC".equals(equipmentdatafm)) {
    							setCncMeasureMap(measureMap, value.trim(), cnt);
    						} else {
    							setMeasureMap(measureMap, value.trim(), cnt);
    						}
    						measureMap.put("SHRINKMEASURECODE", shrinkmeasurecode);
    						
    						cnt++;
    					}
    				}
        		} else if("PSR".equals(equipmentdatafm)) {
        			startTxt = ":BEGIN";
    				endTxt = ":END";
    				
    				while ((str = reader.readLine()) != null && shrinkmeasureVal < iMeasurepnl) {
    					
    					if(startTxt.equals(str)) {

    					}
    					else if(endTxt.equals(str)) {
    						shrinkmeasureVal++;
    						measureList.add(measureMap);
    						
    					} else {
							measureMap = new HashMap<String, Object>();
    						String[] value = str.split("\\s");
    						for(int i = 0; i < value.length; i++) {
    							// 변환 시작
        						String shrinkmeasurecode  = String.format("%1$s%2$02d", "VALUE" , (shrinkmeasureVal + 1));
        						setMeasureMap(measureMap, value[i].trim(), i);
        						measureMap.put("SHRINKMEASURECODE", shrinkmeasurecode);
        						
    						}
    					}
    				}
        			
        		} else if("CIR".equals(equipmentdatafm)) { //회로

        			while ((str = reader.readLine()) != null && shrinkmeasureVal < iMeasurepnl) {
    					
    					if(str.contains("+")) {
    						
    						// 변환 시작
    						int idx = str.lastIndexOf("+") + 1;
    						String value = str.substring(idx, str.length());
    						String shrinkmeasurecode  = String.format("%1$s%2$02d", "VALUE" , (shrinkmeasureVal + 1));
    								
    						setMeasureMap(measureMap, value.trim(), cnt);
    						measureMap.put("SHRINKMEASURECODE", shrinkmeasurecode);
    						
    						if(cnt % 6 == 5) {
    							cnt = 0;
    							measureList.add(measureMap);
    							measureMap = new HashMap<String, Object>();
    							shrinkmeasureVal++;
    						} else {
    							cnt++;
    						}
    						
    					}
    				}
        		}
        	}
        }
        putDataSetMap(dto, measureList, "output");
    }
    
    /**
     * @fn
     * @brief (Override method) CAD 입력 (현재 사용안함)
     * @remark 
     * @see smh.qam.service.QAM03200Service#addCadValueToQamShrinkproductoperationList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public List<Map<String, Object>> addCadValueToQamShrinkproductoperationList(List<Map<String, Object>> list, Map<String, Object> lotMap) throws Exception {
    	Map<String, Object> param = new HashMap<String, Object>();
		
    	if(lotMap != null) {
    		param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
            param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
            param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
            
            Map<String, Object> shrinkproductoperationMap = new HashMap<String, Object>();
    		List<Map<String, Object>> shrinkproductoperationList = generalDao.addSelect(NAMESAPCE_03100 + ".selectQamShrinkproductoperationList", param);
            
    		Map<String, Object> cadParam = new HashMap<String, Object> ();
    		String value[] = new String[6];
    		
    		if(shrinkproductoperationList != null && shrinkproductoperationList.size() > 0) {
            	shrinkproductoperationMap = shrinkproductoperationList.get(0);
                
                for(int i = 0; i < 6; i++) {
                	String mapKey = String.format("%1$s%2$s", "CAD_", getMeasureDivision(i));
                	
        	    	value[i] = shrinkproductoperationMap.get(mapKey) == null ? "0" : StringUtil.Object2String(shrinkproductoperationMap.get(mapKey));
        	    	cadParam.put("SHRINKMEASURECODE", "CAD");
                	setMeasureMap(cadParam, value[i], i);
                }
                list.add(cadParam);
    		}
        }
    	return list;
    }
    
    /**
     * @fn
     * @brief (Override method) 측정값 구분 return.
     * @remark 
     * @see smh.qam.service.QAM03200Service#getMeasureDivision(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private String getMeasureDivision(int cnt) {
    	String div  = "";
		if(cnt == 0) {
			div = "X1";
		} else if(cnt == 1) {
			div = "X2";
		}  else if(cnt == 2) {
			div = "Y1";
		}  else if(cnt == 3) {
			div = "Y2";
		}  else if(cnt == 4) {
			div = "XY1";
		}  else if(cnt == 5) {
			div = "XY2";
		}
		return div;
	}
    
    /**
     * @fn
     * @brief (Override method) CNC 측정값 구분 return.
     * @remark 
     * @see smh.qam.service.QAM03200Service#getMeasureDivision(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private String getCncMeasureDivision(int cnt) {
    	String div  = "";
		if(cnt == 0) {
			div = "X1";
		} else if(cnt == 1) {
			div = "Y1";
		}  else if(cnt == 2) {
			div = "X2";
		}  else if(cnt == 3) {
			div = "Y2";
		}  else if(cnt == 4) {
			div = "XY1";
		}  else if(cnt == 5) {
			div = "XY2";
		}
		return div;
	}  
    
    /**
     * @fn
     * @brief (Override method) 측정값 변환 시 측정값 변환 map 에 put
     * @remark 
     * @see smh.qam.service.QAM03200Service#setMeasureMap(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private void setMeasureMap(Map<String, Object> retMap, Object val, int cnt) {
    	setMeasureMap(retMap, val, cnt, "VALUE");
	} 
    
    /**
     * @fn
     * @brief (Override method)CnC일 경우 측정값 변환 시 측정값 변환 map 에 put
     * @remark 
     * @see smh.qam.service.QAM03200Service#setCncMeasureMap(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private void setCncMeasureMap(Map<String, Object> retMap, Object val, int cnt) {
    	//setMeasureMap(retMap, val, cnt, "VALUE");
    	String mapKey = String.format("%1$s%2$s%3$s", "VALUE", "_", getCncMeasureDivision(cnt));
    	retMap.put(mapKey, val);
	} 
    
    /**
     * @fn
     * @brief (Override method) 측정값 변환 시 측정값 변환 map 에 put
     * @remark 
     * @see smh.qam.service.QAM03200Service#setMeasureMap(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private void setMeasureMap(Map<String, Object> retMap, Object val, int cnt, String type) {
    	String mapKey = String.format("%1$s%2$s%3$s", type, "_", getMeasureDivision(cnt));
    	retMap.put(mapKey, val);
	} 
    
      /**
     * @fn
     * @brief (Override method) 설비 팝업 조회
     * @remark 
     * @see smh.qam.service.QAM03200Service#selectQamEquipmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamEquipmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamEquipmentList", param));
    }

}