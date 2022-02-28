package smh.mfm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * @file		: MFM00200ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200ServiceImpl
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
public class MFM00401ServiceImpl extends AbstractNbdfService implements MFM00401Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00401Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 종합 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectdaysegmentloadtotalList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
  		
  		//[종합] 동적커럼
  		Map<String, Object> paramDate1 = new HashMap<>();
  		Map<String, Object> paramDate2 = new HashMap<>();
  		Map<String, Object> paramDate3 = new HashMap<>();
  		
  		Map<String, Object> paramDate4 = new HashMap<>();
  		Map<String, Object> paramDate5 = new HashMap<>();
  		
  		Map<String, Object> paramDate6 = new HashMap<>(); //합계가0보다큰ROW만 나오게 제한
  		
    	paramDate1 = getSelectInline(param);
    	paramDate2 = getSumInline(param);
    	paramDate3 = getPivotDayInline(param);
    	
    	paramDate4 = getFirstSumInline(param);
    	paramDate5 = getPivotSumInline(param);
    	
    	paramDate6 = getWhere(param);
    	
    	log("getSelectInline ::  : "+paramDate1);
    	log("getSumInline ::  : "+paramDate2);
    	log("getPivotDayInline ::  : "+paramDate3);
    	log("getFirstSumInline ::  : "+paramDate4);
    	log("getPivotSumInline ::  : "+paramDate5);
    	
    	log("getWhere ::  : "+paramDate6);
    	
    	param.put("SELECT_COLUMNS", paramDate1.get("SELECT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SUM_COLUMNS", paramDate2.get("SUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOT_COLUMNS", paramDate3.get("PIVOT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("FIRSTSUM_COLUMNS", paramDate4.get("FIRSTSUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("FIRSTSUM_TOTAL_COLUMNS", paramDate4.get("FIRSTSUM_TOTAL_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOTSUM_COLUMNS", paramDate5.get("PIVOTSUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SUM_WHERE", paramDate6.get("SUM_WHERE")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectdaysegmentloadtotalList", param));
    }
  	
  	
  	
  	/****************************************************************************************************************
	 * [종합] SELECT 컬럼 동적 생성(6일, 30일, 90일)
	 ****************************************************************************************************************/
  	public Map<String, Object> getSelectInline(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		List<Map<String, Object>> SearchList2 = null;
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		columns[i] = firstComma+" D"+(i+1)+"_TOTALQTY"				+"\n";
    		//, D1_TOTALQTY
    		//, D1_TYPE1QTY
    		//, D1_TYPE2QTY
    		SearchList2 = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
    		for (int j = 0; j < SearchList2.size();  j++) {
	    		columns[i] = columns[i]+	    		
    						", D"+(i+1)+"_TYPE"+(j+1)+"QTY"	+"\n";
	    		log("SELECT컬럼(동적) : "+columns[i]);
    		}
		}
    	param3.put("SELECT_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] SUM 컬럼 동적 생성(6일, 30일, 90일)
	 ****************************************************************************************************************/
  	public Map<String, Object> getSumInline(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		List<Map<String, Object>> SearchList2 = null;
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		columns[i] = firstComma+" SUM(P.D"+(i+1)+"_TOTALQTY) 				AS D"+(i+1)+"_TOTALQTY"				+"\n";
    		//, SUM(P.D1_TOTALQTY) 				AS D1_TOTALQTY
    		//, SUM(P.D1_TYPE1QTY) 	            AS D1_TYPE1QTY
    		//, SUM(P.D1_TYPE2QTY) 			    AS D1_TYPE2QTY
    		SearchList2 = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
    		for (int j = 0; j < SearchList2.size();  j++) {
	    		columns[i] = columns[i]+
	    						", SUM(P.D"+(i+1)+"_TYPE"+(j+1)+"QTY) 	            AS D"+(i+1)+"_TYPE"+(j+1)+"QTY"	+"\n";
	    		log("SUM컬럼(동적) : "+columns[i]);
    		}
		}
    	param3.put("SUM_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] pivot에 일자 동적 생성(6일, 30일, 90일)-----------------------> 그대로 유지
	 ****************************************************************************************************************/
  	public Map<String, Object> getPivotDayInline(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
    	for (int i = 0; i < SearchList.size();  i++) {
    		columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		log("피벗DATE(동적) : "+columns[i]);
		}
    	param3.put("PIVOT_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] 최초 SELECT 절에 제품그룹별로 SUM
	 ****************************************************************************************************************/
  	public Map<String, Object> getFirstSumInline(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String[] totColumns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		//,   SUM(CASE WHEN PRODUCTDEFCLASSGROUPNAME = 'DISPLAY' THEN LSD.LOADQTY ELSE 0 END) 			AS TYPE1QTY
    		//columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		if(i>0){
    			firstComma = "";
    		}
    		totColumns[i] = "'"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"'";
    		columns[i] = firstComma+"SUM(CASE WHEN PRODUCTDEFCLASSGROUPNAME = '"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"' THEN LSD.LOADQTY ELSE 0 END) AS TYPE"+(i+1)+"QTY"+"\n";
    		log("getFirstSumInline : "+columns[i]);
		}
    	param3.put("FIRSTSUM_TOTAL_COLUMNS", String.join(",", totColumns));
    	param3.put("FIRSTSUM_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] 피봇 SUM 절에 제품그룹별로 SUM
	 ****************************************************************************************************************/
  	public Map<String, Object> getPivotSumInline(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		//  SUM(TOTALQTY) AS TOTALQTY
            //,	SUM(TYPE1QTY) AS TYPE1QTY
            //,	SUM(TYPE2QTY) AS TYPE2QTY
    		//columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		if(i>0){
    			firstComma = "";
    		}
    		columns[i] = firstComma+"SUM(TYPE"+(i+1)+"QTY) AS TYPE"+(i+1)+"QTY"+"\n";
    		log("getPivotSumInline : "+columns[i]);
		}
    	param3.put("PIVOTSUM_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	public Map<String, Object> getWhere(Map<String, Object> param6) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param6);
		List<Map<String, Object>> SearchList2 = null;
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
    	for (int i = 0; i < SearchList.size();  i++) {
    		SearchList2 = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param6);
    		columns[i] = "";
    		for (int j = 0; j < SearchList2.size();  j++) {
    			if(i==0 && j==0){
    				columns[i] = columns[i]+"      D"+(i+1)+"_TYPE"+(j+1)+"QTY>0 "+"\n";
    			}else{
    				columns[i] = columns[i]+" OR D"+(i+1)+"_TYPE"+(j+1)+"QTY>0 "+"\n";
    			}
	    		log("SUM컬럼(동적) : "+columns[i]);
    		}
		}
    	
    	String tempAnd = rplc(String.join(",", columns),",","");
    	
    	param3.put("SUM_WHERE", tempAnd);
    	
		return param3;
	}
  	
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  //###################################################################################################
  	/**
     * @fn
     * @brief 상세 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectdaysegmentloadDetailList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	//[상세] 동적커럼
  		Map<String, Object> paramDate1 = new HashMap<>();
  		Map<String, Object> paramDate2 = new HashMap<>();
  		Map<String, Object> paramDate3 = new HashMap<>();
  		
  		Map<String, Object> paramDate4 = new HashMap<>();
  		Map<String, Object> paramDate5 = new HashMap<>();
  		
  		Map<String, Object> paramDate6 = new HashMap<>(); //합계가0보다큰ROW만 나오게 제한
  		
    	paramDate1 = getSelectInline(param);
    	paramDate2 = getSumInline(param);
    	paramDate3 = getPivotDayInline(param);
    	
    	paramDate4 = getFirstSumInline(param);
    	paramDate5 = getPivotSumInline(param);
    	
    	paramDate6 = getWhere(param);
    	
    	log("getSelectInline2 ::  : "+paramDate1);
    	log("getSumInline2 ::  : "+paramDate2);
    	log("getPivotDayInline2 ::  : "+paramDate3);
    	log("getFirstSumInline ::  : "+paramDate4);
    	log("getPivotSumInline ::  : "+paramDate5);
    	
    	log("getWhere ::  : "+paramDate6);
    	
    	param.put("SELECT_COLUMNS", paramDate1.get("SELECT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SUM_COLUMNS", paramDate2.get("SUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOT_COLUMNS", paramDate3.get("PIVOT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("FIRSTSUM_COLUMNS", paramDate4.get("FIRSTSUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("FIRSTSUM_TOTAL_COLUMNS", paramDate4.get("FIRSTSUM_TOTAL_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOTSUM_COLUMNS", paramDate5.get("PIVOTSUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SUM_WHERE", paramDate6.get("SUM_WHERE")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectdaysegmentloadDetailList" , param), "output");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName" , param), "output2");
    }
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
  	
  	public String rplc(String str, String pattern, String replace) {
		int s = 0;
		int e = 0;
		StringBuffer result = new StringBuffer();

		while ((e = str.indexOf(pattern, s)) >= 0) {
			result.append(str.substring(s, e));
			result.append(replace);
			s = e + pattern.length();
		}

		result.append(str.substring(s));

		return result.toString();
	}
}