package smh.dfm.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMLotCommonService;
import smh.pcm.service.PCMWipService;

/**
 * @file: DFM00300ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: DFM00300ServiceImpl
 * @Company: Built1
 * @Create Date:  2021.04.19
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 3. 30. 김성현 최초 생성
 */
@Service
public class DFM00300ServiceImpl extends AbstractNbdfService implements DFM00300Service {

	public static final String NAMESAPCE = "smh.pcm.dao.DFM00300Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESAPCEWIP   = "smh.pcm.dao.PCMWipDao";
	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    public static final String NAMESAPCE_DFM0010 = "smh.dfm.dao.DFM00100Dao";

	@Autowired
	private GeneralDao generalDao;
	
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private PCMLotCommonService comService;
    
	@Autowired
	private com.nbdf.cmd.cm.cmsy.service.CMSY03100Service serviceDictionary;


	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getDefectRateByEquipmentTypeNullList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByEquipmentTypeNullList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
//		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeNullList", param);
//		putDataSetMap(dto, list, "output1");
//		
//		String[] lotIdList	 							= new String[list.size()]; 
//        for (int i = 0;  i < list.size();  i++) {
//        	paramLotId = list.get(i);  
//        	lotIdList[i] = (String)paramLotId.get("LOTID"); 
//        }  		
//		param.put("LOTID_LIST", lotIdList);
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeNullList", param));
// 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectCodeComboList" , param)	, "output3");
 //		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeDetailList" , param)	, "output2");
	}
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getDefectRateByEquipmentTypeList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByEquipmentTypeList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
//		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeList", param);
//		putDataSetMap(dto, list, "output1");
//		
//		String[] lotIdList	 							= new String[list.size()]; 
//		for (int i = 0;  i < list.size();  i++) {
//        	paramLotId = list.get(i);  
//        	lotIdList[i] = (String)paramLotId.get("LOTID"); 
//        }  		
//		param.put("LOTID_LIST", lotIdList);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeList", param);
    
		Map<String, Object> map = null;

		String columns = "";
		for (int i = 0;  i < list.size();  i++) {
			map = list.get(i);
        	columns += ", NVL(MAX(CASE WHEN PROCESSSEGMENTID = '" + (String)map.get("PROCESSSEGMENTID") +  "' THEN DEFECTRATE ELSE NULL END), 0) AS \"M" + (String)map.get("PROCESSSEGMENTID") + "\"  \n";
        }  		

		
		param.put("COLUMNS", columns); //꼭,반드시::쿼리에서 $를 사용해야 한다.
		
		putDataSetMap(dto, list, "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeListPivot", param), "output2");
// 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectCodeComboList" , param)	, "output3");
// 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeDetailList" , param)	, "output2");
	}
	
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getDefectRateByEquipmentTypeNullDetailList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByEquipmentTypeNullDetailList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		DataSetMap list   						    = getParametersDataSetMap(dto,"INPUT2");
		String[] lotIdList	 							= new String[list.size()]; 
		String[] processsegmentIdList	 		= new String[list.size()]; 
		String[] productDefIdVersionList	 		= new String[list.size()]; 
		
		Map<String, Object> paramList 		= null;
		for (int i = 0;  i < list.size(); i++)
		{
			paramList 				 		= list.get(i);
			
			lotIdList[i] 				  		= (String)paramList.get("LOTID"); 
			processsegmentIdList[i] 		= (String)paramList.get("PROCESSSEGMENTID"); 
			productDefIdVersionList[i] 	= (String)paramList.get("PRODUCTDEFID") + (String)paramList.get("PRODUCTDEFVERSION"); 

		}
	
		param.put("LOTID_LIST", lotIdList);
		param.put("PROCESSSEGMENTID_LIST", processsegmentIdList);
		param.put("PRODUCTDEFIDVER_LIST", productDefIdVersionList);
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeListNullChart", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeDetailList", param), "output2");
	}
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getDefectRateByEquipmentTypeDetailList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByEquipmentTypeDetailList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		DataSetMap list   						    = getParametersDataSetMap(dto,"INPUT2");
		DataSetMap processSegmentList   		= getParametersDataSetMap(dto,"INPUT3");
		String[] lotIdList	 							= new String[list.size()]; 
		String[] processsegmentIdList	 		= new String[processSegmentList.size()]; 
		String[] productDefIdVersionList	 		= new String[list.size()]; 
		
		Map<String, Object> paramList 		= null;
		for (int i = 0;  i < list.size(); i++)
		{
			paramList 				 		= list.get(i);
			
			lotIdList[i] 				  		= (String)paramList.get("LOTID"); 

			productDefIdVersionList[i] 	= (String)paramList.get("PRODUCTDEFID") + (String)paramList.get("PRODUCTDEFVERSION"); 

		}
	
		for(int i = 0; i< processSegmentList.size(); i++)
		{
			paramList 				 		= processSegmentList.get(i);
			processsegmentIdList[i] 		= (String)paramList.get("PROCESSSEGMENTID"); 			
		}
		
		param.put("LOTID_LIST", lotIdList);
		param.put("PROCESSSEGMENTID_LIST", processsegmentIdList);
		param.put("PRODUCTDEFIDVER_LIST", productDefIdVersionList);
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeListChart", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByEquipmentTypeDetailList", param), "output2");
	}	
	
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getAOIDefectCodeList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getAOIDefectCodeList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getAOIDefectCodeList", param));
	}	
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getProcessByProductdef(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getProcessByProductdef(UiMapDto dto) throws Exception {
		DataSetMap dsMap1 = getParametersDataSetMap(dto, "INPUT1");
		DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
		DataSetMap dsMap3 = getParametersDataSetMap(dto, "INPUT3");
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProcessByProductdef", dsMap1.get(0)), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProcessByProductdef", dsMap2.get(0)), "output2");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProcessByProductdef", dsMap3.get(0)), "output3");
	}	

	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.DFM00300Service#getJoinLotList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getJoinLotList(UiMapDto dto) throws Exception {
		
    	DataSetMap mapList = getParametersDataSetMap(dto,"INPUT");

    	int result = 0;
    	Map<String, Object> insertMap;
    	 
		for (int i = 0, len = mapList.size(); i < len; i++) {
			insertMap = mapList.get(i);
			
			insertMap.put("TRACKOUTTIME"	, ((String)insertMap.get("TRACKOUTTIME")).substring(0, 14));
			
			generalDao.addInsert(NAMESAPCE + ".insertTempSheet", insertMap);	
			//this.insertTempSheet(paramMap);
		}		
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getAOIDefectAnalysisList", mapList.get(0)));
		
    	//TEMP_SHEET 테이블 Drop
		result += generalDao.addDelete(NAMESAPCE + ".deleteTempSheet", mapList.get(0));				
		System.out.println("result >>" + result);
	}
	
	
}