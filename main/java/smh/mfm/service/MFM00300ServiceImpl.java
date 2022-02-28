package smh.mfm.service;

import java.util.HashMap;
import java.util.List;
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
 * @file		: MFM00300ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  박현우      최초  생성 
 */
@Service
public class MFM00300ServiceImpl extends AbstractNbdfService implements MFM00300Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00300Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO
    
    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 공정 부하 예측
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectDaySegmentLoad(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	//[종합] 동적커럼
  		Map<String, Object> paramDate1 = new HashMap<>();
  		Map<String, Object> paramDate2 = new HashMap<>();
  		Map<String, Object> paramDate3 = new HashMap<>();
    	paramDate1 = getSelectInline(param);
    	paramDate2 = getSelectInline2(param);
    	paramDate3 = getPivotDayInline(param);
    	log("getSelectInline ::  : "+paramDate1);
    	log("getSelectInline2 ::  : "+paramDate2);
    	log("getPivotDayInline ::  : "+paramDate3);
    	param.put("SELECT_COLUMNS", paramDate1.get("SELECT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("SELECT_COLUMNS2", paramDate2.get("SELECT_COLUMNS2")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	param.put("PIVOT_COLUMNS", paramDate3.get("PIVOT_COLUMNS")); //꼭,반드시::쿼리에서 $를 사용해야 한다.
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDaySegmentLoad", param));
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
    		columns[i] = firstComma +	"  NVL(P.D"+(i+1)+"_LOADQTY, 0) 		AS D"+(i+1)+"_LOADQTY" 		+ "\n"+
    											", 'N' 											AS D"+(i+1)+"_EDITYN" 		+ "\n"+
    											//", 'N' 											AS D"+(i+1)+"_CALYN" 		+ "\n"+
    											", NVL(P.D"+(i+1)+"_PLANWIPQTY, 0) 	AS D"+(i+1)+"_PLANWIPQTY" + "\n";
    		log("SELECT컬럼(동적) : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS", String.join(",", columns));
    	
		return param3;
	}
    
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
    		columns[i] = firstComma +	"   D"+(i+1)+"_LOADQTY" 		+ "\n"+
    											",   D"+(i+1)+"_PLANWIPQTY" 	+ "\n";
    		log("SELECT컬럼(동적) : "+columns[i]);
		}
    	param3.put("SELECT_COLUMNS2", String.join(",", columns));
    	
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
  	
  	//#############################################################################################
  	//#############################################################################################
  	//#############################################################################################
  	
  	/**
     * @fn
     * @brief 공정 부하 예측 :: 확정 처리
     * @remark 
     * @see smh.mfm.service.MFM00200Service#saveProcGrpList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveDaySegmentLoadConfirm(UiMapDto dto) throws Exception {
  		DataSetMap input0 = getParametersDataSetMap(dto, "INPUT0");
  		Map<String, Object> param;
        int result = 0;
        
        log("INPUT0 sz :: "+input0.size());
        
        for (int i = 0, n = input0.size(); i < n; i++) {
            param = input0.get(i);
            param.put("DESCRIPTION", this.getClass().getSimpleName());
            getUpertConfirmInfo(param);
        }
        
  		putDataSetMap(dto, result);
    }
  	
  	/**
     * @fn
     * @brief 공정 부하 예측 :: 저장 (변경된 데이터 저장)
     * @remark 
     * @see smh.mfm.service.MFM00200Service#saveProcGrpList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveDaySegmentLoad(UiMapDto dto) throws Exception {
  		DataSetMap input = getParametersDataSetMap(dto, "INPUT");
  		DataSetMap input2 = getParametersDataSetMap(dto, "INPUT2"); //기간
  		Map<String, Object> param;
        int result = 0;
        
        log("INPUT sz :: "+input.size());
        log("INPUT2 sz :: "+input2.size());
        
        for (int i = 0, n = input.size(); i < n; i++) {
            param = input.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateData(param, input2);
            }            
        }
  		putDataSetMap(dto, result);
    }
  	
  	
  	
  	protected void getUpdateData(Map<String, Object> row, DataSetMap input2) throws Exception 
  	{		
		Map<String, Object> loadSegment = new HashMap<>();
		loadSegment.put("PRODUCTDEFID", 					row.get("PRODUCTDEFID"));
		loadSegment.put("PRODUCTDEFVERSION", 			row.get("PRODUCTDEFVERSION"));
		loadSegment.put("PROCESSSEGMENTID", 			row.get("PROCESSSEGMENTID"));
		loadSegment.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
		loadSegment.put("ACTIONDATE", 					row.get("LOADDATE")); //부하일자(조회조건)
		loadSegment.put("LOADTYPE", 						row.get("LOADTYPE"));
		
		for(int i=1; i<=90; i++){
			loadSegment.put("D"+i+"_LOADQTY", 			row.get("D"+i+"_LOADQTY"));
			loadSegment.put("D"+i+"_PLANWIPQTY", 		row.get("D"+i+"_PLANWIPQTY"));
		}
		
		List<Map<String, Object>> loadSegmentList = generalDao.addSelect(NAMESAPCE + ".selectLoadSegmentPerDate", loadSegment);
		log("SZ :: "+loadSegmentList.size());
    	if(loadSegmentList.size()==0){
    		throw new BizException("InValidData001|"+String.format("ProductDefId = %s ProcesssegmentId = %s" ,row.get("PRODUCTDEFID"), row.get("PROCESSSEGMENTID")));
        }
    	
    	getUpsertLoadQty(loadSegment, input2);		
	}
	
	/************************************************************************************************
	 * CT_LOADSEGMENTPERDATE 확정일, 확정자  UPDATE
	*************************************************************************************************/
	private void getUpertConfirmInfo(Map<String, Object> param) throws Exception
	{
		generalDao.addUpdate(NAMESAPCE + ".getUpsertConfirm", param);
		log("확정 처리 종료/////");
	}
	
	/************************************************************************************************
	 * CT_LOADSEGMENTPERDATE 부하수량, 예상수량  UPDATE
	*************************************************************************************************/
	private void getUpsertLoadQty(Map<String, Object> loadSegment, DataSetMap input2) throws Exception
	{
		Map<String, Object> param;
		for(int i=0; i<input2.size(); i++){
			param = input2.get(i);
			loadSegment.put("PREDICDATE", param.get("DATE2"));
			loadSegment.put("LOADQTY", loadSegment.get("D"+(i+1)+"_LOADQTY"));
			loadSegment.put("PLANWIPQTY", loadSegment.get("D"+(i+1)+"_PLANWIPQTY"));
			loadSegment.put("DESCRIPTION", this.getClass().getSimpleName());
			generalDao.addUpdate(NAMESAPCE + ".getUpsertLoadQty", loadSegment);
		}
	}  	
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}