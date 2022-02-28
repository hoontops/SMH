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
public class MFM00400ServiceImpl extends AbstractNbdfService implements MFM00400Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00400Dao";
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
    	paramDate1 = getSelectInline(param);
    	paramDate2 = getSumInline(param);
    	paramDate3 = getPivotDayInline(param);
    	log("getSelectInline ::  : "+paramDate1);
    	log("getSumInline ::  : "+paramDate2);
    	log("getPivotDayInline ::  : "+paramDate3);
    	param.put("SELECT_COLUMNS", paramDate1.get("SELECT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SUM_COLUMNS", paramDate2.get("SUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOT_COLUMNS", paramDate3.get("PIVOT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectdaysegmentloadtotalList", param));
    }
  	
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
    	paramDate1 = getSelectInline2(param);
    	paramDate2 = getSumInline2(param);
    	paramDate3 = getLoadQty2(param);
    	paramDate4 = getPivotDayInline2(param);
    	log("getSelectInline ::  : "+paramDate1);
    	log("getSumInline ::  : "+paramDate2);
    	log("getLoadQtyInline ::  : "+paramDate3);
    	log("getPivotDayInline ::  : "+paramDate4);
    	param.put("SELECT_COLUMNS", paramDate1.get("SELECT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SUM_COLUMNS", paramDate2.get("SUM_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("LOADQTY_COLUMNS", paramDate3.get("LOADQTY_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOT_COLUMNS", paramDate4.get("PIVOT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectdaysegmentloadDetailList", param));
    }
  	
  	/****************************************************************************************************************
	 * [종합] SELECT 컬럼 동적 생성(6일, 30일, 90일)
	 ****************************************************************************************************************/
  	public Map<String, Object> getSelectInline(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		columns[i] = firstComma+" D"+(i+1)+"_TOTALQTY"			+"\n"+
    						", D"+(i+1)+"_PRODUCTIONQTY"	+"\n"+
    						", D"+(i+1)+"_SAMPLEQTY"		+"\n"+
    						", D"+(i+1)+"_ETCQTY"				+"\n";
    		log("SELECT컬럼(동적) : "+columns[i]);
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
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		columns[i] = firstComma+" SUM(P.D"+(i+1)+"_TOTALQTY) 				AS D"+(i+1)+"_TOTALQTY"				+"\n"+
    						", SUM(P.D"+(i+1)+"_PRODUCTIONQTY) 	AS D"+(i+1)+"_PRODUCTIONQTY"	+"\n"+
    						", SUM(P.D"+(i+1)+"_SAMPLEQTY) 			AS D"+(i+1)+"_SAMPLEQTY"			+"\n"+
    						", SUM(P.D"+(i+1)+"_ETCQTY) 				AS D"+(i+1)+"_ETCQTY"				+"\n";
    		log("SUM컬럼(동적) : "+columns[i]);
		}
    	param3.put("SUM_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] pivot에 일자 동적 생성(6일, 30일, 90일)
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
  	
  	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 * [종합] SELECT 컬럼 동적 생성(6일, 30일, 90일)
	   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  	public Map<String, Object> getSelectInline2(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		//--,	Q.D1_LOADQTY
    		columns[i] = firstComma+" Q.D"+(i+1)+"_LOADQTY"			+"\n";
    		log("SELECT컬럼(동적) : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 * [종합] SUM 컬럼 동적 생성(6일, 30일, 90일)
	   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  	public Map<String, Object> getSumInline2(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		//--,	SUM(D1_LOADQTY) AS D1_LOADQTY
    		columns[i] = firstComma+" SUM(D"+(i+1)+"_LOADQTY) 				AS D"+(i+1)+"_LOADQTY"				+"\n";
    		log("SUM컬럼(동적) : "+columns[i]);
		}
    	param3.put("SUM_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 * [종합] LOADQTY 컬럼 동적 생성(6일, 30일, 90일)
	   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  	public Map<String, Object> getLoadQty2(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectDayDulationList", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		if(i>0){
    			firstComma = "";
    		}
    		//--,	Q.D1_LOADQTY
    		columns[i] = firstComma+" D"+(i+1)+"_LOADQTY"			+"\n";
    		log("LOADQTY컬럼(동적) : "+columns[i]);
		}
    	param3.put("LOADQTY_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
  	
  	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 * [종합] pivot에 일자 동적 생성(6일, 30일, 90일)
	   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  	public Map<String, Object> getPivotDayInline2(Map<String, Object> param2) throws Exception
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
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}