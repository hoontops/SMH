package smh.mfm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * @file		: MFM00100ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00100ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
@Service
public class MFM00100ServiceImpl extends AbstractNbdfService implements MFM00100Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00100Dao";
    public static final String NAMESAPCE_TOM_COMMON = "smh.tom.dao.TOM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 수주계획 조회
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductPlanList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	Map<String, Object> paramDate = new HashMap<>();
    	Map<String, Object> paramDate2 = new HashMap<>();
    	
    	//paramDate = getWeekDayInline(param);			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	paramDate = getWeekDayInline2(param);			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	log("paramDate: "+paramDate);
    	
    	if(!paramDate.get("P_PERIOD_PERIODFR").equals("X")){
	    	log("P_PERIOD_PERIODFR: "+paramDate.get("P_PERIOD_PERIODFR"));
	    	log("P_PERIOD_PERIODTO: "+paramDate.get("P_PERIOD_PERIODTO"));
	    	
	    	param.put("COLUMNS", paramDate.get("COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
	    	param.put("P_PERIOD_PERIODFR", paramDate.get("P_PERIOD_PERIODFR"));
	    	param.put("P_PERIOD_PERIODTO", paramDate.get("P_PERIOD_PERIODTO"));
	    	
	    	paramDate2 = getWeekCalKLine2(param);
	    	log("paramDate2: "+paramDate2);
	    	
	    	param.put("CALLINE", paramDate2.get("CALLINE")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
	    	param.put("CALLINE2", paramDate2.get("CALLINE2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.    	
	    	param.put("TOTAL1", paramDate2.get("TOTAL1")); //꼭,반드시::쿼리에서 $를 사용해야 한다. 
	    	param.put("TOTAL2", paramDate2.get("TOTAL2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
	    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductPlanList", param));
    	}else{
    		param.put("COLUMNS", "' '"); //꼭,반드시::쿼리에서 $를 사용해야 한다.
	    	param.put("P_PERIOD_PERIODFR", "X");
	    	param.put("P_PERIOD_PERIODTO", "X");
	    	param.put("CALLINE", "' '"); //꼭,반드시::쿼리에서 $를 사용해야 한다.
	    	param.put("CALLINE2", "' '"); //꼭,반드시::쿼리에서 $를 사용해야 한다.    	
	    	param.put("TOTAL1", "' '"); //꼭,반드시::쿼리에서 $를 사용해야 한다. 
	    	param.put("TOTAL2", "' '"); //꼭,반드시::쿼리에서 $를 사용해야 한다.
	    	
    		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductPlanList", param));
    	}
    }
  	
  	/**
     * @fn
     * @brief 피벗 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductPlanForPivotList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWeekDayInline2(param);
    	param.put("P_PERIOD_PERIODFR", paramDate.get("P_PERIOD_PERIODFR"));
    	param.put("P_PERIOD_PERIODTO", paramDate.get("P_PERIOD_PERIODTO"));
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductPlanForPivotList", param));
    }   
  	
  	//2021-06-11 : 조회조건의 주차 + 차수에 대한 일자List
  	public Map<String, Object> getWeekDayInline2(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_TOM_COMMON + ".selectSalespoforcastRegWeekDayList2", param2);
		String[] columns = new String[SearchList.size()];
    	for (int i = 0; i < SearchList.size();  i++) {
    		columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS W"+(i+1)+"\n";
    		log("DATE2 : "+columns[i]);
		}
    	param3.put("COLUMNS", String.join(",", columns));
    	
    	if(SearchList.size()>0){
	    	param3.put("P_PERIOD_PERIODFR", SearchList.get(0).get("DATE2").toString());
	    	param3.put("P_PERIOD_PERIODTO", SearchList.get(SearchList.size()-1).get("DATE2").toString());
    	}else{
    		param3.put("P_PERIOD_PERIODFR", "X");
	    	param3.put("P_PERIOD_PERIODTO", "X");
    	}
    	
		return param3;
	}
  	
  	public Map<String, Object> getWeekCalKLine2(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_TOM_COMMON + ".selectSalespoforcastRegWeekDayList2", param2);
		String[] columns = new String[SearchList.size()];
		String[] columns2 = new String[SearchList.size()];
		String total1 = "0";
		String total2 = "0";
    	for (int i = 0; i < SearchList.size();  i++) {
    		columns[i] = "NVL(X.W"+(i+1)+"_QTY,0) AS PCS"+(i+1)+" \n";
    		columns2[i] = "NVL(DECODE(NVL(PD.PCSPNL,0),0,0,CEIL(X.W"+(i+1)+"_QTY/NVL(PD.PCSPNL,0))),0) AS PNL"+(i+1)+" \n";
    		total1 = total1 + " + NVL(X.W"+(i+1)+"_QTY,0) \n";
    		total2 = total2 + " + NVL(DECODE(NVL(PD.PCSPNL,0),0,0,CEIL(X.W"+(i+1)+"_QTY/NVL(PD.PCSPNL,0))),0) \n";
		}
    	param3.put("CALLINE", String.join(",", columns));
    	param3.put("CALLINE2", String.join(",", columns2));
    	param3.put("TOTAL1", String.join(",", total1));
    	param3.put("TOTAL2", String.join(",", total2));
    	
		return param3;
	}
  	
  	
  	
  	/****************************************************************************************************************
	 * 수주 계획 최초 업로드
	 ****************************************************************************************************************/
  	public void saveProductPlanUpload(UiMapDto dto) throws Exception {
  		DataSetMap input = getParametersDataSetMap(dto, "INPUT");
  		Map<String, Object> param;
        //int result = 0;
        
        log("INPUT sz :: "+input.size());
        
        String uuid = UUID.randomUUID().toString();    	
        
        //1단계) 수주계획 업로드
        for (int i = 0, n = input.size(); i < n; i++) {
            param = input.get(i);
            param.put("P_UUID", uuid);
            param.put("P_IDX", (i+1));            
            getUploadData(param);
        }
        
        //2단계) 업로드 데이터 Validation
        Map<String, Object> param2 = new HashMap<>();
        Map<String, Object> param3 = new HashMap<>();
        Map<String, Object> param4 = new HashMap<>(); //upsert용
        Map<String, Object> param9 = new HashMap<>(); //주차정보 구하기
        param2.put("P_UUID", uuid);
        List<Map<String, Object>> errorList = generalDao.addSelect(NAMESAPCE + ".validation01List", param2);
        if(errorList.size()>0){
			log("에러가 존재한다. errorList :: "+errorList);
			for(int j=0; j<errorList.size(); j++){
				param3 = errorList.get(j);
				generalDao.addUpdate(NAMESAPCE + ".updateErrorData", param3);
			}
        }
        
        //2021-06-10일에 수정 :: 품목/버젼은 에러나는 데이터 제외 한다.
        List<Map<String, Object>> pushList = generalDao.addSelect(NAMESAPCE + ".selectErrorList", param2);        
                
        if(pushList.size()==0){
        	log("에러가 존재 하지 않는다.");
        	//엑셀 일자를 읽어서 배열에 넣고 업서트 시에 해당내용 저장되게 처리 한다. (일자는 엑셀 1 row, M컬럼에 에 존재 한다.)
        	List<Map<String, Object>> succList = generalDao.addSelect(NAMESAPCE + ".succUploadList", param2);
        	param3 = succList.get(0); //타이틀을 읽는다.
        	String[] dateArr = new String[99];
        	int blankPos = 0; //공백이 아닌 POS
        	String prevDate = ""; //일자가 공백이 되기 이전 일자
        	for(int k=1; k<=99; k++){ //최대갯수만큼 모두 읽는다.
        		if(k<10){
        			if(!StringUtil.NVL((String)param3.get("QTY0"+k),"").equals("")) {
        				dateArr[k-1] = (String)param3.get("QTY0"+k);
        				prevDate = (String)param3.get("QTY0"+k);
        				blankPos = k;
        			}
        		}else{
        			if(!StringUtil.NVL((String)param3.get("QTY"+k),"").equals("")) {
        				dateArr[k-1] = (String)param3.get("QTY"+k);
        				prevDate = (String)param3.get("QTY"+k);
        				blankPos = k;
        			}
        		}
        	}
        	
        	log("blankPos / prevDate :: "+blankPos+"/"+prevDate);
        	
        	String[] dateArr2 = new String[blankPos];
        	for(int m=1; m<=dateArr2.length; m++){
        		if(m<10){
        			dateArr2[m-1] = (String)param3.get("QTY0"+m);
        		}else{
        			dateArr2[m-1] = (String)param3.get("QTY"+m);
        		}
        	}
        	
        	for(int m=0; m<dateArr2.length; m++){
        		//log("DATE :: "+dateArr2[m]);
        	}
        	
        	log("SIZE :: "+succList.size());
        	
        	//==============================================
    		//일자에 해당하는 주차 정보를 구한다.
        	if(succList.size()>1){
	        	param3 = succList.get(1); //첫번째ROW의 값을 읽는다.	        	
	        	
	        	log("UUID :: "+(String)param3.get("UUID"));
	        	log("IDX :: "+param3.get("IDX"));
	        	log("DATA01 :: "+(String)param3.get("DATA01"));
	        	
	        	param4.put("ENTERPRISEID", 				SessionUtil.getSessionValue("ENTERPRISEID"));
        		param4.put("PLANTID", 					SessionUtil.getSessionValue("SITETYPE"));
	    		param4.put("DATA01", 						param3.get("DATA01")); //차수를 구하기 위해 업로드데이터의 주차를 파람 전달
	    		param9 = generalDao.addSelectOneMap(NAMESAPCE + ".selectWeekInfo", param4);
	    		log("WEEKOFTODAY :: "+param9.get("WEEKOFTODAY"));			//등록주차
	    		log("WEEKOFTHEYEAR :: "+param9.get("WEEKOFTHEYEAR"));		//데이터:주차
	    		log("MONTH :: "+param9.get("MONTH"));							//데이터:월
	    		log("SEQUENCE :: "+param9.get("SEQUENCE"));					//업로드일자의년에 해당하는MAX+1
	    		
	    		//확정 차수 Reset
	    		generalDao.addUpdate(NAMESAPCE + ".updateLastConfirmClear", param4);
	    		log("확정 차수 Clear OK --------------------> 업로드 한 차수가 마지막 차수가 된다.");
        	}        	
        	
        	log("건수 :: "+succList.size());
        	
        	if(succList.size()>1){
	        	for(int p=1; p<succList.size(); p++){ //데이터는 1부터 시작한다.
	        		param3 = succList.get(p);
	        		param3.put("REGWEEK", 	param9.get("WEEKOFTODAY"));		//등록주차
	        		param3.put("WEEK", 		param9.get("WEEKOFTHEYEAR"));		//데이터:주차
	        		param3.put("MONTH", 		param9.get("MONTH"));				//데이터:월
	        		param3.put("SEQUENCE", 	param9.get("SEQUENCE"));				//업로드일자의년에 해당하는MAX+1
	        		
	        		param3.put("PRODUCTDEFID", 			param3.get("DATA08"));
	        		param3.put("PRODUCTDEFVERSION", 	param3.get("DATA09"));
	        		param3.put("ENTERPRISEID", 				SessionUtil.getSessionValue("ENTERPRISEID"));
	        		param3.put("PLANTID", 					SessionUtil.getSessionValue("SITETYPE"));
	        		param3.put("DESCRIPTION", "");
	        		param3.put("INPUTWEEK", 				param3.get("DATA01")); //엑셀상의 첫번째 컬럼 입력주차
	        		//generalDao.addUpdate(NAMESAPCE + ".updateLastConfirmClear", param3);
	        		
		        	for(int m=1; m<=dateArr2.length; m++){ //업로드 데이터의 일자가 존재하는 컬럼까지만 저장 한다.
		        		param3.put("FCSTDATE", 	dateArr2[m-1]);							//데이터:일자		        		
		        		if(m== 1) param3.put("QTY", param3.get("QTY01"));
		        		if(m== 2) param3.put("QTY", param3.get("QTY02"));
		        		if(m== 3) param3.put("QTY", param3.get("QTY03"));
		        		if(m== 4) param3.put("QTY", param3.get("QTY04"));
		        		if(m== 5) param3.put("QTY", param3.get("QTY05"));
		        		if(m== 6) param3.put("QTY", param3.get("QTY06"));
		        		if(m== 7) param3.put("QTY", param3.get("QTY07"));
		        		if(m== 8) param3.put("QTY", param3.get("QTY08"));
		        		if(m== 9) param3.put("QTY", param3.get("QTY09"));
		        		if(m==10) param3.put("QTY", param3.get("QTY10"));
		        		
		        		if(m== 11) param3.put("QTY", param3.get("QTY11"));
		        		if(m== 12) param3.put("QTY", param3.get("QTY12"));
		        		if(m== 13) param3.put("QTY", param3.get("QTY13"));
		        		if(m== 14) param3.put("QTY", param3.get("QTY14"));
		        		if(m== 15) param3.put("QTY", param3.get("QTY15"));
		        		if(m== 16) param3.put("QTY", param3.get("QTY16"));
		        		if(m== 17) param3.put("QTY", param3.get("QTY17"));
		        		if(m== 18) param3.put("QTY", param3.get("QTY18"));
		        		if(m== 19) param3.put("QTY", param3.get("QTY19"));
		        		if(m== 20) param3.put("QTY", param3.get("QTY20"));
		        		
		        		if(m== 21) param3.put("QTY", param3.get("QTY21"));
		        		if(m== 22) param3.put("QTY", param3.get("QTY22"));
		        		if(m== 23) param3.put("QTY", param3.get("QTY23"));
		        		if(m== 24) param3.put("QTY", param3.get("QTY24"));
		        		if(m== 25) param3.put("QTY", param3.get("QTY25"));
		        		if(m== 26) param3.put("QTY", param3.get("QTY26"));
		        		if(m== 27) param3.put("QTY", param3.get("QTY27"));
		        		if(m== 28) param3.put("QTY", param3.get("QTY28"));
		        		if(m== 29) param3.put("QTY", param3.get("QTY29"));
		        		if(m== 30) param3.put("QTY", param3.get("QTY30"));
		        		
		        		if(m== 31) param3.put("QTY", param3.get("QTY31"));
		        		if(m== 32) param3.put("QTY", param3.get("QTY32"));
		        		if(m== 33) param3.put("QTY", param3.get("QTY33"));
		        		if(m== 34) param3.put("QTY", param3.get("QTY34"));
		        		if(m== 35) param3.put("QTY", param3.get("QTY35"));
		        		if(m== 36) param3.put("QTY", param3.get("QTY36"));
		        		if(m== 37) param3.put("QTY", param3.get("QTY37"));
		        		if(m== 38) param3.put("QTY", param3.get("QTY38"));
		        		if(m== 39) param3.put("QTY", param3.get("QTY39"));
		        		if(m== 40) param3.put("QTY", param3.get("QTY40"));
		        		
		        		if(m== 41) param3.put("QTY", param3.get("QTY41"));
		        		if(m== 42) param3.put("QTY", param3.get("QTY42"));
		        		if(m== 43) param3.put("QTY", param3.get("QTY43"));
		        		if(m== 44) param3.put("QTY", param3.get("QTY44"));
		        		if(m== 45) param3.put("QTY", param3.get("QTY45"));
		        		if(m== 46) param3.put("QTY", param3.get("QTY46"));
		        		if(m== 47) param3.put("QTY", param3.get("QTY47"));
		        		if(m== 48) param3.put("QTY", param3.get("QTY48"));
		        		if(m== 49) param3.put("QTY", param3.get("QTY49"));
		        		if(m== 50) param3.put("QTY", param3.get("QTY50"));
		        		
		        		if(m== 51) param3.put("QTY", param3.get("QTY51"));
		        		if(m== 52) param3.put("QTY", param3.get("QTY52"));
		        		if(m== 53) param3.put("QTY", param3.get("QTY53"));
		        		if(m== 54) param3.put("QTY", param3.get("QTY54"));
		        		if(m== 55) param3.put("QTY", param3.get("QTY55"));
		        		if(m== 56) param3.put("QTY", param3.get("QTY56"));
		        		if(m== 57) param3.put("QTY", param3.get("QTY57"));
		        		if(m== 58) param3.put("QTY", param3.get("QTY58"));
		        		if(m== 59) param3.put("QTY", param3.get("QTY59"));
		        		if(m== 60) param3.put("QTY", param3.get("QTY60"));
		        		
		        		if(m== 61) param3.put("QTY", param3.get("QTY61"));
		        		if(m== 62) param3.put("QTY", param3.get("QTY62"));
		        		if(m== 63) param3.put("QTY", param3.get("QTY63"));
		        		if(m== 64) param3.put("QTY", param3.get("QTY64"));
		        		if(m== 65) param3.put("QTY", param3.get("QTY65"));
		        		if(m== 66) param3.put("QTY", param3.get("QTY66"));
		        		if(m== 67) param3.put("QTY", param3.get("QTY67"));
		        		if(m== 68) param3.put("QTY", param3.get("QTY68"));
		        		if(m== 69) param3.put("QTY", param3.get("QTY69"));
		        		if(m== 70) param3.put("QTY", param3.get("QTY70"));
		        		
		        		if(m== 71) param3.put("QTY", param3.get("QTY71"));
		        		if(m== 72) param3.put("QTY", param3.get("QTY72"));
		        		if(m== 73) param3.put("QTY", param3.get("QTY73"));
		        		if(m== 74) param3.put("QTY", param3.get("QTY74"));
		        		if(m== 75) param3.put("QTY", param3.get("QTY75"));
		        		if(m== 76) param3.put("QTY", param3.get("QTY76"));
		        		if(m== 77) param3.put("QTY", param3.get("QTY77"));
		        		if(m== 78) param3.put("QTY", param3.get("QTY78"));
		        		if(m== 79) param3.put("QTY", param3.get("QTY79"));
		        		if(m== 80) param3.put("QTY", param3.get("QTY80"));
		        		
		        		if(m== 81) param3.put("QTY", param3.get("QTY81"));
		        		if(m== 82) param3.put("QTY", param3.get("QTY82"));
		        		if(m== 83) param3.put("QTY", param3.get("QTY83"));
		        		if(m== 84) param3.put("QTY", param3.get("QTY84"));
		        		if(m== 85) param3.put("QTY", param3.get("QTY85"));
		        		if(m== 86) param3.put("QTY", param3.get("QTY86"));
		        		if(m== 87) param3.put("QTY", param3.get("QTY87"));
		        		if(m== 88) param3.put("QTY", param3.get("QTY88"));
		        		if(m== 89) param3.put("QTY", param3.get("QTY89"));
		        		if(m== 90) param3.put("QTY", param3.get("QTY90"));
		        		
		        		if(m== 91) param3.put("QTY", param3.get("QTY91"));
		        		if(m== 92) param3.put("QTY", param3.get("QTY92"));
		        		if(m== 93) param3.put("QTY", param3.get("QTY93"));
		        		if(m== 94) param3.put("QTY", param3.get("QTY94"));
		        		if(m== 95) param3.put("QTY", param3.get("QTY95"));
		        		if(m== 96) param3.put("QTY", param3.get("QTY96"));
		        		if(m== 97) param3.put("QTY", param3.get("QTY97"));
		        		if(m== 98) param3.put("QTY", param3.get("QTY98"));
		        		if(m== 99) param3.put("QTY", param3.get("QTY99"));
		        	
			        	generalDao.addUpdate(NAMESAPCE + ".upsertSalesOfForcast", param3);
		        	}
	        	}
        	}
        }
        
        //에러 데이터를 client에 내린다.
        pushList = generalDao.addSelect(NAMESAPCE + ".selectErrorList", param2);        
        putDataSetMap(dto, pushList, "output");
    }
  	
  	protected void getUploadData(Map<String, Object> row) throws Exception 
  	{	
  		generalDao.addUpdate(NAMESAPCE + ".saveExcelUpload", row);
  	}
  	
  	/****************************************************************************************************************
	 * 수주 계획 확정
	 ****************************************************************************************************************/
  	public void saveProductPlanConfirm(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
  		
  		generalDao.addUpdate(NAMESAPCE + ".updateConfirmOfForcast", param);
        
  		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConfirmOfForcast", param));
    }
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
