package smh.mfm.service;

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
 * @file		: MFM01300ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01300ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.21
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 21.  김진현      최초  생성 
 */
@Service
public class MFM01300ServiceImpl extends AbstractNbdfService implements MFM01300Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM01300Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief 주요공정 실적 현황판  - [대/중공정그룹 필터] - 대/중/ 주요공정그룹조회
     * @remark 
     * @see smh.mfm.service.MFM01300Service#selectWorkDoneSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectWorkDoneSegmentListByTypeList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneSegmentListByTypeList", param));
    }
  	
  	/**
     * @fn
     * @brief 주요공정 실적 현황판  - 대/중 주요공정그룹조회 List
     * @remark 
     * @see smh.mfm.service.MFM01300Service#selectWorkDoneSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectWorkDoneSegmentList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneSegmentList", param));
    }
  	
  	/**
     * @fn
     * @brief 대/중 저장(등록,수정,삭제)
     * @remark 
     * @see smh.mfm.service.MFM01300Service#saveProcGrpList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveProcGrpList(UiMapDto dto) throws Exception {
  		DataSetMap procGrpMap = getParametersDataSetMap(dto, "ds_procGrp");
  		Map<String, Object> param;
        int result = 0;
        
        // 대,중,소 공정그룹 작업
        for (int i = 0, n = procGrpMap.size(); i < n; i++) {
            param = procGrpMap.get(i);
            int type = getRowType(param);
            
            // ID가 대/중 이외의 값이 숫자만 들어 오도록 체크
            String classId 	= (String)param.get("WORKDONESEGMENTCLASSID");
            Map<String, Object> paramMap = new HashMap<String, Object>();
        	paramMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectChkProdGrpr", param);
    		int msgCode  = Integer.valueOf(String.valueOf(paramMap.get("CHK")));
    		// msg가 0 이 아니면 Exception 발생. 
    		if(msgCode != 0) {
    			throw new BizException("InValidGrpId|"+String.format("WorkDoneClassId = %s", classId));
    		}
            
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertWorkProcGrp(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateWorkProcGrp(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
				result += deleteWorkProcGrp(param);
            }            
        }
  		putDataSetMap(dto, result);
    }
  	
  	/*
  	 * 대,중 주요 공정 그룹 등록
  	 */
  	private int insertWorkProcGrp(Map<String, Object> param) throws Exception{
    	//Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거)
    	
    	String classId 	= (String)param.get("WORKDONESEGMENTCLASSID");
    	
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkWorkProcGrpList", param);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("WorkDoneSegmentClassId = %s", classId));
		}
		
		param.put("WORKDONESEGMENTCLASSNAME",	uid);
		param.put("LASTTXNHISTKEY",				 		TxnHistKey.getTxnHistKey());
		
		return generalDao.addUpdate(NAMESAPCE + ".insertWorkProcGrp", param);
	}
  	
  	/*
  	 * 대,중 주요 공정 그룹 수정
  	 */
  	private int updateWorkProcGrp(Map<String, Object> param) throws Exception{
    	
  		String classId 	= (String)param.get("WORKDONESEGMENTCLASSID");
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkWorkProcGrpList", param);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("WorkDoneSegmentClassId = %s", classId));
		}
		param.put("LASTTXNHISTKEY",				 TxnHistKey.getTxnHistKey());
		return generalDao.addUpdate(NAMESAPCE + ".updateWorkProcGrp", param);		
	}
  	
  	/*
  	 * 대,중 주요 공정 그룹 삭제
  	 */
  	 private int deleteWorkProcGrp(Map<String, Object> param) throws Exception{
     	
  		String classId 	= (String)param.get("WORKDONESEGMENTCLASSID");
 		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkWorkProcGrpList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData003|"+String.format("WorkDoneSegmentClassId = %s", classId)); 			
 		}
 		return generalDao.addUpdate(NAMESAPCE + ".deleteWorkProcGrp", param);		
 	}
  	 
  	 
  	/**
      * @fn
      * @brief 주요 공정 실적 현황판 - [표준공정 맵핑] - 표준공정List 조회 
      * @remark 
     * @see smh.mfm.service.MFM01300Service#selectWorkDoneSegmentRelList(com.nbdf.commons.ui.vo.UiMapDto)
      */
   	public void selectWorkDoneSegmentRelList(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
        //putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectWorkDoneSegmentRelList", param));
         
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneSegmentRelMainList" , param), "output1");		// 21.04.27 쿼리 호출 id 변경
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSegmentGroupList" , param), "output2");
     }
   	
   	/**
     * @fn
     * @brief 주요 공정 실적 현황판 - [표준공정 맵핑] - 표준공정List 저장
     * @remark 
     * @see smh.mfm.service.MFM00200Service#saveWorkDoneSegmentRel(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveWorkDoneSegmentRel(UiMapDto dto) throws Exception {
    	
        DataSetMap dtWorkDoneSegmentRel 			= getParametersDataSetMap(dto, "ds_segmentRelMain");			//포장라벨 LINE 정보
        
        
        int result = 0;
        Map<String, Object> param;
        Map<String, Object> prePram;
        if(dtWorkDoneSegmentRel != null )
		{
			for(int i = 0; i<dtWorkDoneSegmentRel.size(); i++)
			{	
				param = dtWorkDoneSegmentRel.get(i);
				int type = getRowType(param);
				
				switch(type)
				{
				case DataSet.ROW_TYPE_UPDATED:
					result += getUpsertWorkDoneSegmentRel(param);
					break;
				}
			}
		}
        putDataSetMap(dto, result);  

    }
   	
  	/************************************************************************************************
	 * 표준공정 Tab 저장 (주요 공정)
	 ************************************************************************************************/
	private int getUpsertWorkDoneSegmentRel(Map<String, Object> param) throws Exception
	{
		int result = 0;
  		Map<String, Object> segmentRelList = generalDao.addSelectOneMap(NAMESAPCE + ".selectWorkDoneSegmentRelList", param);
  		
  		if(segmentRelList == null)
		{	
  			//param.put("LASTTXNHISTKEY"							, TxnHistKey.getTxnHistKey());
  			//param.put("TXNID"											, "SaveWorkDoneSegmentRel");
  			
  			result += generalDao.insert(NAMESAPCE + ".insertWorkDoneSegmentRel", param);
		}
  		else
  		{
  			
  			segmentRelList.put("WORKDONETOPSEGMENTCLASSID"		, param.get("WORKDONETOPSEGMENTCLASSID"));
  			segmentRelList.put("WORKDONEMIDDLESEGMENTCLASSID"	, param.get("WORKDONEMIDDLESEGMENTCLASSID"));  			
  			segmentRelList.put("DESCRIPTION"									, param.get("DESCRIPTION"));
  			segmentRelList.put("VALIDSTATE"									, param.get("VALIDSTATE"));  			
  			segmentRelList.put("SDATE"											, param.get("SDATE"));
  			segmentRelList.put("EDATE"											, param.get("EDATE"));
  			
  			//segmentRelList.put("LASTTXNHISTKEY"								, TxnHistKey.getTxnHistKey());
  			//segmentRelList.put("TXNID"											, "SaveWorkDoneSegmentRel");
  			result += generalDao.addUpdate(NAMESAPCE + ".updateWorkDoneSegmentRel", segmentRelList);
  			
  		}
		return result; 		
		
	}


    
  	
}