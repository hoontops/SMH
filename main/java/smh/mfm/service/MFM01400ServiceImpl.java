package smh.mfm.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;




/**
 * @file		: MFM01400ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01400ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.26
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 26.  김진현      최초  생성 
 */
@Service
public class MFM01400ServiceImpl extends AbstractNbdfService implements MFM01400Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM01400Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 주요 공정 실적 현황판 - main(left, right) 조회
     * @remark 
     * @see smh.mfm.service.MFM01400Service#SelectWorkDoneQtyMainList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectWorkDoneQtyMainList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWorkDoneQtyDate(param, "N");			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	
    	
    	param.put("COLUMNS",			 	paramDate.get("COLUMNS"));
    	param.put("COLUMNS_SELECT", 		paramDate.get("COLUMNS_SELECT"));
    	
    	System.out.println(" ================ : "+paramDate.get("COLUMNS"));
    	System.out.println(" ================ : "+paramDate.get("COLUMNS_SELECT"));
    	
        //putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectWorkDoneQtyMainList", param));
    	
    	//putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneMainAllList", param));
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneMainAllList" , param)		, "output1");
  		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHeadTitleList" , param)	, "output2");
    }
  	
  	/****************************************************************************************************************
	 * 조회 조건의 기준일에 따른 (D-1일 전보를 구한다.)	 
	 ****************************************************************************************************************/
  	public Map<String, Object> getWorkDoneQtyDate(Map<String, Object> DateInfo, String nType) throws Exception
	{	
		Map<String, Object> param = new HashMap<>();
		List<Map<String, Object>> SearchList  = new ArrayList<Map<String, Object>>();
		if (nType == "W") {
			SearchList = generalDao.addSelect(NAMESAPCE + ".selectWorkDoneQtySearchSevenList", DateInfo);    			// 기준인, 기준일-1일
		}
		else
		{
			SearchList = generalDao.addSelect(NAMESAPCE + ".selectWorkDoneQtySearchList", DateInfo);    			// 기준인, 기준일-1일
		}
		String[] columnsSelect = new String[SearchList.size()]; 
		String[] columns = new String[SearchList.size()];
		//String[] OrderBycolumns = new String[SearchList.size()];
    	for (int i = 0; i < SearchList.size();  i++) {
    		//columnsSelect[i] = SearchList.get(i).get("COLUMNS_SELECT").toString();
    		columns[i] = "'" + SearchList.get(i).get("COLUMNS").toString() + "'";
    		//OrderBycolumns[i] = SearchList.get(i).get("COLUMNS").toString();  
    		
    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_SUM_INPUTPNLQTY").toString()+SearchList.get(i).get("COLUMNS_SUM_INPUTMMQTY").toString()
    							 +SearchList.get(i).get("COLUMNS_SUM_WIPPANELQTY").toString()+SearchList.get(i).get("COLUMNS_SUM_WIPMMQTY").toString()+SearchList.get(i).get("COLUMNS_SUM_PRICE").toString(); 
		}
    	param.put("COLUMNS", 			String.join(",", columns));
    	param.put("COLUMNS_SELECT", String.join(",", columnsSelect));
    	
		return param;
	}
  	
  	
  	/**
     * @fn
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더)
     * @remark 
     * @see smh.mfm.service.MFM01400Service#selectWorkDoneQtyDetailList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkDoneQtyDetailList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWorkDoneQtyDate(param, "N");			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	
    	param.put("COLUMNS",			 	paramDate.get("COLUMNS"));
    	param.put("COLUMNS_SELECT", 		paramDate.get("COLUMNS_SELECT"));
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneDetailLeftList" , param)		, "output1");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneDetailRightList" , param)		, "output2");
  		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHeadTitleList" , param)	, "output3");
    }
    
    /**
     * @fn
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더)
     * @remark 
     * @see smh.mfm.service.MFM01400Service#selectWorkDoneSummaryLeftList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkDoneSummaryLeftList(UiMapDto dto) throws Exception {
        
    	Map<String, Object> param = getParametersMap(dto);
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWorkDoneQtyDate(param,"N");			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	
    	param.put("COLUMNS",			 	paramDate.get("COLUMNS"));
    	param.put("COLUMNS_SELECT", 		paramDate.get("COLUMNS_SELECT"));
    	
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneSummaryLeftList" , param)		, "output1");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHeadTitleList" , param)		, "output2");
    	
    }
    
    
    /**
     * @fn
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더) - 작업장 소계
     * @remark 
     * @see smh.mfm.service.MFM01400Service#selectWorkDoneSummaryRightList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkDoneSummaryRightList(UiMapDto dto) throws Exception {
        
    	Map<String, Object> param = getParametersMap(dto);
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWorkDoneQtyDate(param,"W");			// 조회 기준일 조건에 따른 D-7일과 기준일 정보를 받아 온다.
    	param.put("COLUMNS",			 	paramDate.get("COLUMNS"));
    	param.put("COLUMNS_SELECT", 		paramDate.get("COLUMNS_SELECT"));
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneSummaryRightList" , param)		, "output1");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHeadTitleSevenList" , param)		, "output2");
    	
    }
    
    /**
     * @fn
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (투입현황)
     * @remark 
     * @see smh.mfm.service.MFM01400Service#selectWorkDoneINPUTSTATUSDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkDoneINPUTSTATUSDetail(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWorkDoneQtyDate(param,"N");			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	
    	param.put("COLUMNS",			 	paramDate.get("COLUMNS"));
    	param.put("COLUMNS_SELECT", 		paramDate.get("COLUMNS_SELECT"));
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneINPUTSTATUSDetail" , param)		, "output1");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHeadTitleList" , param)		, "output2");
    }
    
    /**
     * @fn
     * @brief : 주요 공정 실적 현황판 - 미투입현황 상세조회
     * @remark 
     * @see smh.mfm.service.MFM01400Service#selectWorkDoneNOTINPUTSTATUSDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkDoneNOTINPUTSTATUSDetail(UiMapDto dto) throws Exception {
        
        Map<String, Object> param = getParametersMap(dto);
    	Map<String, Object> paramDate = new HashMap<>();
    	paramDate = getWorkDoneQtyDate(param,"N");			// 조회 기준일 조건에 따른 D-1일과 기준일 정보를 받아 온다.
    	
    	param.put("COLUMNS",			 	paramDate.get("COLUMNS"));
    	param.put("COLUMNS_SELECT", 		paramDate.get("COLUMNS_SELECT"));
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneNOTINPUTSTATUSDetail" , param)		, "output1");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHeadTitleList" , param)		, "output2");
        
        
    }

    

    
  	
}