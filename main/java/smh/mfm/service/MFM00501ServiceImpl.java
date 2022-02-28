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
public class MFM00501ServiceImpl extends AbstractNbdfService implements MFM00501Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00501Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 종합 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadPredictionPerRecordTotalList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
  		
  		//동적커럼
  		Map<String, Object> getSelectInline1 = new HashMap<>();
  		Map<String, Object> getSelectInline2 = new HashMap<>();
  		Map<String, Object> getSelectInline3 = new HashMap<>();  		
  		Map<String, Object> getSelectInline4 = new HashMap<>();
  		
  		getSelectInline1 = getSelectInline1(param);
  		getSelectInline2 = getSelectInline2(param);
  		getSelectInline3 = getSelectInline3(param);    	
  		getSelectInline4 = getSelectInline4(param);
  		
    	log("getSelectInline1 ::  : "+getSelectInline1);
    	log("getSelectInline2 ::  : "+getSelectInline2);
    	log("getSelectInline3 ::  : "+getSelectInline3);
    	log("getSelectInline4 ::  : "+getSelectInline4);
    	
    	param.put("SELECT_COLUMNS1_TOTAL", getSelectInline1.get("SELECT_COLUMNS1_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS1", getSelectInline1.get("SELECT_COLUMNS1")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE1", getSelectInline1.get("SELECT_PREPARE1")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM1", getSelectInline1.get("SELECT_SUM1")); //꼭,반드시::쿼리에서 $를 사용해야 한다.    	
    	
    	param.put("SELECT_COLUMNS2_TOTAL", getSelectInline2.get("SELECT_COLUMNS2_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS2", getSelectInline2.get("SELECT_COLUMNS2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS22", getSelectInline2.get("SELECT_COLUMNS22")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE_TOTAL2", getSelectInline2.get("SELECT_PREPARE_TOTAL2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE2", getSelectInline2.get("SELECT_PREPARE2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM2", getSelectInline2.get("SELECT_SUM2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SELECT_COLUMNS3_TOTAL", getSelectInline3.get("SELECT_COLUMNS3_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS3", getSelectInline3.get("SELECT_COLUMNS3")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE3", getSelectInline3.get("SELECT_PREPARE3")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM3", getSelectInline3.get("SELECT_SUM3")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SELECT_COLUMNS4_TOTAL", getSelectInline4.get("SELECT_COLUMNS4_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS4", getSelectInline4.get("SELECT_COLUMNS4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE4", getSelectInline4.get("SELECT_PREPARE4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM4", getSelectInline4.get("SELECT_SUM4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_DIFF4", getSelectInline4.get("SELECT_DIFF4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadPredictionPerRecordTotalList", param));
    }
  	
  	/****************************************************************************************************************
	 * [종합] 최초 SELECT 절에 (III)기초재공
	 ****************************************************************************************************************/
  	public Map<String, Object> getSelectInline1(Map<String, Object> param2) throws Exception
	{	
  		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String[] totColumns = new String[SearchList.size()];
		
		String[] prepare = new String[SearchList.size()];
		String[] sums = new String[SearchList.size()];
		
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		//,   SUM(CASE WHEN PRODUCTDEFCLASSGROUPNAME = 'DISPLAY' THEN LSD.LOADQTY ELSE 0 END) 			AS TYPE1QTY
    		//columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		if(i>0){
    			firstComma = "";
    		}
    		totColumns[i] = "'"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"'";    		
    		columns[i] = firstComma+"ROUND(SUM(CASE WHEN PD.PRODUCTDEFCLASSGROUPNAME = '"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"' THEN WSD.PANELQTY ELSE 0 END), 0) AS G1_TYPE"+(i+1)+"QTY"+"\n";
    		
    		//prepare[i] = firstComma+"		LS.G2_TYPE"+(i+1)+"QTY"+"\n";
    		prepare[i] = firstComma+"		NVL(BW.G1_TYPE"+(i+1)+"QTY,0) AS G1_TYPE"+(i+1)+"QTY"+"\n";
    		sums[i] = firstComma+"	SUM(S.G1_TYPE"+(i+1)+"QTY) AS G1_TYPE"+(i+1)+"QTY"+"\n";
    		
    		log("getSelectInline3 : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS1_TOTAL", String.join(",", totColumns));
    	param3.put("SELECT_COLUMNS1", String.join(",", columns));
    	param3.put("SELECT_PREPARE1", String.join(",", prepare));
    	param3.put("SELECT_SUM1", String.join(",", sums));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] 최초 SELECT 절에 (IIII)기말재공
	 ****************************************************************************************************************/
  	public Map<String, Object> getSelectInline2(Map<String, Object> param2) throws Exception
	{	
  		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String[] columns2 = new String[SearchList.size()];
		String[] totColumns = new String[SearchList.size()];
		
		String prepareTotal = "";
		String[] prepare = new String[SearchList.size()];		
		String[] sums = new String[SearchList.size()];
		
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		//,   SUM(CASE WHEN PRODUCTDEFCLASSGROUPNAME = 'DISPLAY' THEN LSD.LOADQTY ELSE 0 END) 			AS TYPE1QTY
    		//columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		if(i>0){
    			firstComma = "";
    		}
    		totColumns[i] = "'"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"'";    		
    		columns[i] = firstComma+"ROUND(SUM(CASE WHEN PD.PRODUCTDEFCLASSGROUPNAME = '"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"' THEN WSD.PANELQTY ELSE 0 END),0) AS G2_TYPE"+(i+1)+"QTY"+"\n";
    		columns2[i] = firstComma+"ROUND(SUM(CASE WHEN PD.PRODUCTDEFCLASSGROUPNAME = '"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"' THEN L.PANELQTY ELSE 0 END),0) AS G2_TYPE"+(i+1)+"QTY"+"\n";	//WITH 절 만든다.
    		
    		//prepare[i] = firstComma+"		WR.G1_TYPE"+(i+1)+"QTY"+"\n";
    		prepare[i] = firstComma+"		NVL(LW.G2_TYPE"+(i+1)+"QTY,0) AS G2_TYPE"+(i+1)+"QTY"+"\n";
    		sums[i] = firstComma+"	SUM(S.G2_TYPE"+(i+1)+"QTY) AS G2_TYPE"+(i+1)+"QTY"+"\n";
    		
    		if(i==0){
	    		prepareTotal =  " , CASE	WHEN  TO_CHAR(SYSDATE, 'HH24MISS') >= '083000'  AND  TO_CHAR(SYSDATE, 'YYYYMMDD')	 = TO_CHAR(TO_DATE( SUBSTR("+param2.get("P_SEARCHDATE")+",1, 8), 'YYYYMMDD'), 'YYYYMMDD') THEN "+"\n"+
									"						NVL(CU.G2_TOTALQTY,0)			"+"\n"+	//현재공************
									"			WHEN  TO_CHAR(SYSDATE, 'HH24MISS') < '083000'  AND  TO_CHAR(SYSDATE, 'YYYYMMDD')	 = TO_CHAR(TO_DATE( SUBSTR("+param2.get("P_SEARCHDATE")+",1, 8), 'YYYYMMDD'), 'YYYYMMDD') THEN "+"\n"+
									"						NVL(LW.G2_TOTALQTY,0)			"+"\n"+	//Snaphot (X)
									"			WHEN  TO_CHAR(SYSDATE, 'HH24MISS') < '083000'  AND  TO_CHAR(SYSDATE-1, 'YYYYMMDD')	= TO_CHAR(TO_DATE( SUBSTR("+param2.get("P_SEARCHDATE")+",1, 8), 'YYYYMMDD'), 'YYYYMMDD') THEN "+"\n"+
									"						NVL(CU.G2_TOTALQTY,0)			"+"\n"+	//현재공		
									"			ELSE  												"+"\n"+
									"						NVL(LW.G2_TOTALQTY,0)			"+"\n"+	//Snaphot
									" END AS G2_TOTALQTY"+"\n";
    		}
    		
    		prepare[i] = firstComma+"			CASE	WHEN  TO_CHAR(SYSDATE, 'HH24MISS') >= '083000'  AND  TO_CHAR(SYSDATE, 'YYYYMMDD')	 = TO_CHAR(TO_DATE( SUBSTR("+param2.get("P_SEARCHDATE")+",1, 8), 'YYYYMMDD'), 'YYYYMMDD') THEN "+"\n"+
    										"						NVL(CU.G2_TYPE"+(i+1)+"QTY,0)			"+"\n"+	//현재공***************
    										"				WHEN  TO_CHAR(SYSDATE, 'HH24MISS') < '083000'  AND  TO_CHAR(SYSDATE, 'YYYYMMDD')	 = TO_CHAR(TO_DATE( SUBSTR("+param2.get("P_SEARCHDATE")+",1, 8), 'YYYYMMDD'), 'YYYYMMDD') THEN "+"\n"+
    										"						NVL(LW.G2_TOTALQTY,0)					"+"\n"+	//Snaphot (X)
									  		"				WHEN  TO_CHAR(SYSDATE, 'HH24MISS') < '083000'  AND  TO_CHAR(SYSDATE-1, 'YYYYMMDD')	= TO_CHAR(TO_DATE( SUBSTR("+param2.get("P_SEARCHDATE")+",1, 8), 'YYYYMMDD'), 'YYYYMMDD') THEN "+"\n"+
    										"						NVL(CU.G2_TYPE"+(i+1)+"QTY,0)			"+"\n"+	//현재공
									  		"				ELSE  													"+"\n"+
									  		"						NVL(LW.G2_TYPE"+(i+1)+"QTY,0)			"+"\n"+	//Snaphot
									  		"		 END AS G2_TYPE"+(i+1)+"QTY"+"\n";
    		
    		log("getSelectInline1 : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS2_TOTAL", String.join(",", totColumns));
    	param3.put("SELECT_COLUMNS2", String.join(",", columns));
    	param3.put("SELECT_COLUMNS22", String.join(",", columns2));
    	param3.put("SELECT_PREPARE_TOTAL2", prepareTotal);
    	param3.put("SELECT_PREPARE2", String.join(",", prepare));
    	param3.put("SELECT_SUM2", String.join(",", sums));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] 최초 SELECT 절에 (II)예상부하
	 ****************************************************************************************************************/
  	public Map<String, Object> getSelectInline3(Map<String, Object> param2) throws Exception
	{	
  		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String[] totColumns = new String[SearchList.size()];
		
		String[] prepare = new String[SearchList.size()];
		String[] sums = new String[SearchList.size()];
		
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		//,   SUM(CASE WHEN PRODUCTDEFCLASSGROUPNAME = 'DISPLAY' THEN LSD.LOADQTY ELSE 0 END) 			AS TYPE1QTY
    		//columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		if(i>0){
    			firstComma = "";
    		}
    		totColumns[i] = "'"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"'";    		
    		columns[i] = firstComma+"ROUND(SUM(CASE WHEN PD.PRODUCTDEFCLASSGROUPNAME = '"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"' THEN LPD.LOADQTY ELSE 0 END), 0) AS G3_TYPE"+(i+1)+"QTY"+"\n";
    		
    		//prepare[i] = firstComma+"		LW.G4_TYPE"+(i+1)+"QTY"+"\n";
    		prepare[i] = firstComma+"		NVL(LS.G3_TYPE"+(i+1)+"QTY,0) AS G3_TYPE"+(i+1)+"QTY"+"\n";
    		sums[i] = firstComma+"	SUM(S.G3_TYPE"+(i+1)+"QTY) AS G3_TYPE"+(i+1)+"QTY"+"\n";
    		
    		log("getSelectInline2 : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS3_TOTAL", String.join(",", totColumns));
    	param3.put("SELECT_COLUMNS3", String.join(",", columns));
    	param3.put("SELECT_PREPARE3", String.join(",", prepare));
    	param3.put("SELECT_SUM3", String.join(",", sums));
    	
		return param3;
	}
  	
  	/****************************************************************************************************************
	 * [종합] 최초 SELECT 절에 실적현황
	 ****************************************************************************************************************/
  	public Map<String, Object> getSelectInline4(Map<String, Object> param2) throws Exception
	{	
		Map<String, Object> param3 = new HashMap<>();
		List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName", param2);
		log("SearchList :: "+SearchList);
		String[] columns = new String[SearchList.size()];
		String[] totColumns = new String[SearchList.size()];
		
		String[] prepare = new String[SearchList.size()];
		String[] sums = new String[SearchList.size()];
		String[] diffs = new String[SearchList.size()];
		
		String firstComma = ",";
    	for (int i = 0; i < SearchList.size();  i++) {
    		//,   SUM(CASE WHEN PRODUCTDEFCLASSGROUPNAME = 'DISPLAY' THEN LSD.LOADQTY ELSE 0 END) 			AS TYPE1QTY
    		//columns[i] = "'" + SearchList.get(i).get("DATE2").toString() + "' AS D"+(i+1)+"\n";
    		if(i>0){
    			firstComma = "";
    		}
    		totColumns[i] = "'"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"'";    		
    		columns[i] = firstComma+"ROUND(SUM(CASE WHEN PD.PRODUCTDEFCLASSGROUPNAME = '"+SearchList.get(i).get("PRODUCTDEFCLASSGROUPNAME").toString()+"' THEN LWR.SENDPANELQTY ELSE 0 END),0) AS G4_TYPE"+(i+1)+"QTY"+"\n";
    		
    		prepare[i] = firstComma+"		NVL(WR.G4_TYPE"+(i+1)+"QTY,0) AS G4_TYPE"+(i+1)+"QTY"+"\n";
    		sums[i] = firstComma+"	SUM(S.G4_TYPE"+(i+1)+"QTY) AS G4_TYPE"+(i+1)+"QTY"+"\n";
    		
    		diffs[i] = firstComma+"		SUM(S.G4_TYPE"+(i+1)+"QTY) - SUM(S.G3_TYPE"+(i+1)+"QTY) AS G5_TYPE"+(i+1)+"QTY"+"\n";
    		
    		log("getSelectInline1 : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS4_TOTAL", String.join(",", totColumns));
    	param3.put("SELECT_COLUMNS4", String.join(",", columns));
    	param3.put("SELECT_PREPARE4", String.join(",", prepare));
    	param3.put("SELECT_SUM4", String.join(",", sums));
    	
    	param3.put("SELECT_DIFF4", String.join(",", diffs));
    	
		return param3;
	}
  	
  	/**
     * @fn
     * @brief 상세 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadPredictionPerRecordList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);    	
    	
    	//동적커럼
  		Map<String, Object> getSelectInline1 = new HashMap<>();
  		Map<String, Object> getSelectInline2 = new HashMap<>(); 
  		Map<String, Object> getSelectInline3 = new HashMap<>();  		
  		Map<String, Object> getSelectInline4 = new HashMap<>();
  		
  		getSelectInline1 = getSelectInline1(param);
  		getSelectInline2 = getSelectInline2(param);
  		getSelectInline3 = getSelectInline3(param);    	
  		getSelectInline4 = getSelectInline4(param);
  		
    	log("getSelectInline1 ::  : "+getSelectInline1);
    	log("getSelectInline2 ::  : "+getSelectInline2);
    	log("getSelectInline3 ::  : "+getSelectInline3);
    	log("getSelectInline4 ::  : "+getSelectInline4);
    	
    	param.put("SELECT_COLUMNS1_TOTAL", getSelectInline1.get("SELECT_COLUMNS1_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS1", getSelectInline1.get("SELECT_COLUMNS1")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE1", getSelectInline1.get("SELECT_PREPARE1")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM1", getSelectInline1.get("SELECT_SUM1")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SELECT_COLUMNS2_TOTAL", getSelectInline2.get("SELECT_COLUMNS2_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS2", getSelectInline2.get("SELECT_COLUMNS2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS22", getSelectInline2.get("SELECT_COLUMNS22")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE_TOTAL2", getSelectInline2.get("SELECT_PREPARE_TOTAL2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE2", getSelectInline2.get("SELECT_PREPARE2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM2", getSelectInline2.get("SELECT_SUM2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SELECT_COLUMNS3_TOTAL", getSelectInline3.get("SELECT_COLUMNS3_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS3", getSelectInline3.get("SELECT_COLUMNS3")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE3", getSelectInline3.get("SELECT_PREPARE3")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM3", getSelectInline3.get("SELECT_SUM3")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
    	param.put("SELECT_COLUMNS4_TOTAL", getSelectInline4.get("SELECT_COLUMNS4_TOTAL")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS4", getSelectInline4.get("SELECT_COLUMNS4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_PREPARE4", getSelectInline4.get("SELECT_PREPARE4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_SUM4", getSelectInline4.get("SELECT_SUM4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_DIFF4", getSelectInline4.get("SELECT_DIFF4")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadPredictionPerRecordList" , param), "output");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_MFM_COMMON + ".selectItemGroupName" , param), "output2");
    }
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}