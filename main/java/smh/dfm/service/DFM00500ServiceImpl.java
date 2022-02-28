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
 * @file: DFM00500ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: DFM00500ServiceImpl
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
public class DFM00500ServiceImpl extends AbstractNbdfService implements DFM00500Service {

	public static final String NAMESAPCE = "smh.pcm.dao.DFM00500Dao";
	public static final String NAMESAPCE300 = "smh.pcm.dao.DFM00300Dao";	
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
	 * @brief : 품목코드 미입력시
	 * @remark
* @see smh.pcm.service.DFM00500Service#getDefectRateByRepairNullList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByRepairNullList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullList", param)); 			
	}
	
	/**
	 * @fn
	 * @brief : 품목코드 입력시
	 * @remark
* @see smh.pcm.service.DFM00500Service#getDefectRateByRepairList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByRepairList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairList", param)); 				
	}
	
	
	/**
	 * @fn
	 * @brief : 품목코드 미입력시
	 * @remark
* @see smh.pcm.service.DFM00500Service#getDefectRateByRepairNullDetailList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByRepairNullDetailList(UiMapDto dto) throws Exception {
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
		
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullChartTotal",  param)	, "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullChartBeforeAfterList" , param)	, "output2");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullBeforeDetail" , param)	, "output3");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullAfterDetail" , param)	, "output4"); 		
	}
	
	/**
	 * @fn
	 * @brief : 품목코드 입력시
	 * @remark
* @see smh.pcm.service.DFM00500Service#getDefectRateByRepairDetailList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByRepairDetailList(UiMapDto dto) throws Exception {
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
		
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairChartTotal",  param)	, "output1");
// 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairChartBeforeList" , param)	, "output3");
// 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairChartAfterList" , param)	, "output4");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairBeforeDetail" , param)	, "output2");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairAfterDetail" , param)	, "output3"); 		
	}
	
	
	/**
	 * @fn
	 * @brief : 품목코드 미입력시
	 * @remark
* @see smh.pcm.service.DFM00500Service#getDefectRateByRepairNullSeriesDetailList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByRepairNullSeriesDetailList(UiMapDto dto) throws Exception {
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
		
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullBeforeDetail" , param)	, "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairNullAfterDetail" , param)	, "output2"); 		
	}
	
	/**
	 * @fn
	 * @brief : 품목코드 입력시
	 * @remark
* @see smh.pcm.service.DFM00500Service#getDefectRateByRepairSeriesDetailList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDefectRateByRepairSeriesDetailList(UiMapDto dto) throws Exception {
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
		

 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairBeforeDetail" , param)	, "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getDefectRateByRepairAfterDetail" , param)	, "output2"); 		
	}
	
//	/**
//	 * @fn
//	 * @brief : 
//	 * @remark
//   * @see smh.pcm.service.DFM00500Service#getAOIDefectCodeList(com.nbdf.commons.ui.vo.UiMapDto)
//	 */
//	public void getAOIDefectCodeList(UiMapDto dto) throws Exception {
//		Map<String, Object> param = getParametersMap(dto);
//		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getAOIDefectCodeList", param));
//	}	
//	
	/**
	 * @fn
	 * @brief : 
	 * @remark
     * @see smh.pcm.service.DFM00500Service#getProcessByProductdef(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getProcessByProductdef(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProcessByProductdef", param)); 			
	}	

//	
//	/**
//	 * @fn
//	 * @brief : 
//	 * @remark
//   * @see smh.pcm.service.DFM00500Service#getJoinLotList(com.nbdf.commons.ui.vo.UiMapDto)
//	 */
//	public void getJoinLotList(UiMapDto dto) throws Exception {
//		
//    	DataSetMap mapList = getParametersDataSetMap(dto,"INPUT");
//
//    	int result = 0;
//    	Map<String, Object> insertMap;
//    	 
//		for (int i = 0, len = mapList.size(); i < len; i++) {
//			insertMap = mapList.get(i);
//			
//			insertMap.put("TRACKOUTTIME"	, ((String)insertMap.get("TRACKOUTTIME")).substring(0, 14));
//			
//			generalDao.addInsert(NAMESAPCE + ".insertTempSheet", insertMap);	
//			//this.insertTempSheet(paramMap);
//		}		
//		
//		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getAOIDefectAnalysisList", mapList.get(0)));
//		
//    	//TEMP_SHEET 테이블 Drop
//		result += generalDao.addDelete(NAMESAPCE + ".deleteTempSheet", mapList.get(0));				
//		System.out.println("result >>" + result);
//	}
	
	
}