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
public class MFM00200ServiceImpl extends AbstractNbdfService implements MFM00200Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00200Dao";

    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 대/중/소 공정그룹조회
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadSegmentListByTypeList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadSegmentListByTypeList", param));
    }
  	
  	/**
     * @fn
     * @brief 대/중/소 공정그룹조회 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadSegmentList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadSegmentList", param));
    }
  	
  	/**
     * @fn
     * @brief 대/중/소 저장(등록,수정,삭제)
     * @remark 
     * @see smh.mfm.service.MFM00200Service#saveProcGrpList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveProcGrpList(UiMapDto dto) throws Exception {
  		DataSetMap procGrpMap = getParametersDataSetMap(dto, "ds_procGrp");
  		Map<String, Object> param;
        int result = 0;
        
        // 대,중,소 공정그룹 작업
        for (int i = 0, n = procGrpMap.size(); i < n; i++) {
            param = procGrpMap.get(i);
            int type = getRowType(param);
            
            // ID가 대/중/소 이외의 값이 숫자만 들어 오도록 체크
            String classId 	= (String)param.get("LOADSEGMENTCLASSID");
            Map<String, Object> paramMap = new HashMap<String, Object>();
        	paramMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectChkSeparator", param);
    		int msgCode  = Integer.valueOf(String.valueOf(paramMap.get("CHK")));
    		// msg가 0 이 아니면 Exception 발생. 
    		if(msgCode != 0) {
    			throw new BizException("InValidGrpId|"+String.format("LoadClassId = %s", classId));
    		}
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertProcGrp(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateProcGrp(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
				result += deleteProcGrp(param);
            }            
        }
  		putDataSetMap(dto, result);
    }
  	
  	/*
  	 * 대,중,소 공정 그룹 등록
  	 */
  	private int insertProcGrp(Map<String, Object> param) throws Exception{
    	//Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거)
    	
    	String classId 	= (String)param.get("LOADSEGMENTCLASSID");
    	
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkProcGrpList", param);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("LoadSegmentClassId = %s", classId));
		}
		param.put("LOADSEGMENTCLASSNAME",	 uid);
		param.put("LASTTXNHISTKEY",				 TxnHistKey.getTxnHistKey());
		
		return generalDao.addUpdate(NAMESAPCE + ".insertProcGrp", param);
	}
  	/*
  	 * 대,중,소 공정 그룹 수정
  	 */
  	private int updateProcGrp(Map<String, Object> param) throws Exception{
    	
  		String classId 	= (String)param.get("LOADSEGMENTCLASSID");
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkProcGrpList", param);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("LoadSegmentClassId = %s", classId));
		}
		param.put("LASTTXNHISTKEY",				 TxnHistKey.getTxnHistKey());
		return generalDao.addUpdate(NAMESAPCE + ".updateProcGrp", param);		
	}
  	
  	/*
  	 * 대,중,소 공정 그룹 삭제
  	 */
  	 private int deleteProcGrp(Map<String, Object> param) throws Exception{
     	
  		String classId 	= (String)param.get("LOADSEGMENTCLASSID");
 		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkProcGrpList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData003|"+String.format("LoadSegmentClassId = %s", classId)); 			
 		}
 		return generalDao.addUpdate(NAMESAPCE + ".deleteProcGrp", param);		
 	}
  	 
  	/**
      * @fn
      * @brief 공정 부하 기준 정보 - 담당자 팝업
      * @remark 
     * @see smh.mfm.service.MFM00200Service#selectUserList(com.nbdf.commons.ui.vo.UiMapDto)
      */
   	public void selectUserList(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
         putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserList", param));
     }
  	 
   	/**
     * @fn
     * @brief 공정 부하 기준 정보 - 품목 팝업
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectProdDefIdList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProdDefIdList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProdDefIdList", param));
    }
  	
  	/**
     * @fn
     * @brief 공정 부하 기준 정보 - 담당자 맵핑 List 조회
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectProduDefListForOwnerMapping(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProduDefListForOwnerMapping(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProduDefListForOwnerMapping", param));
    }
  	 
  	/**
     * @fn
     * @brief 공정 부하 기준 정보 - 담당자,표준공정맵핑,부하량 저장
     * @remark 
     * @see smh.mfm.service.MFM00200Service#saveLoadSegmentRel(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveLoadSegmentRel(UiMapDto dto) throws Exception {
    	
  		DataSetMap dtLoadProductSegment		= getParametersDataSetMap(dto, "ds_ProdSegmentMain");			//포장라벨 메인 정보
        DataSetMap dtLoadSegmentRel 			= getParametersDataSetMap(dto, "ds_segmentRelMain");			//포장라벨 LINE 정보
        DataSetMap dtOwnerMapping 				= getParametersDataSetMap(dto, "ds_personMain");			// 담당장 맵핑
  		
        
        int result = 0;
        Map<String, Object> param;
        Map<String, Object> prePram;
        // 부하량 기준정보
        if(dtLoadProductSegment != null && dtLoadSegmentRel == null && dtOwnerMapping == null)
		{
			for(int i = 0; i<dtLoadProductSegment.size(); i++)
			{
				param = dtLoadProductSegment.get(i);
				int type = getRowType(param);
				
				switch(type)
				{
				case DataSet.ROW_TYPE_UPDATED:
					result += getUpsertLoadProductSegmentData(param);
					break;
				}
				
				
			}
			//batch.execute();
			
		}//표준공정 맵핑
		else if(dtLoadSegmentRel != null && dtOwnerMapping == null && dtLoadProductSegment == null)
		{
			for(int i = 0; i<dtLoadSegmentRel.size(); i++)
			{	
				param = dtLoadSegmentRel.get(i);
				int type = getRowType(param);
				
				switch(type)
				{
				case DataSet.ROW_TYPE_UPDATED:
					result += getUpsertLoadSegmentRel(param);
					break;
				}
				
			}
			//batch.execute();
			
		}//담당자
		else if(dtOwnerMapping != null && dtLoadSegmentRel == null && dtLoadProductSegment == null)
		{	
			for(int i = 0; i<dtOwnerMapping.size(); i++)
			{
				param = dtOwnerMapping.get(i);
				int type = getRowType(param);
				if((param.get("OWNER") == null) && (param.get("OWNERNAME") != null))
				{	
					prePram = dtOwnerMapping.get(i-1);
					if(param.get("OWNERNAME").equals(prePram.get("OWNERNAME"))) {
						param.put("OWNER",prePram.get("OWNER"));
					}
				}
				switch(type)
				{
				case DataSet.ROW_TYPE_UPDATED:
					result += getUpsertProductDef(param);
					break;
				}
			}
			
		}
        putDataSetMap(dto, result);  

    }
  	
  	
  	/************************************************************************************************
	 * 담당자 Tab UPDATE 
	 ************************************************************************************************/
	private int getUpsertProductDef(Map<String, Object> param) throws Exception
	{
		int result = 0;
		Map<String, Object> serPram;
  		List<Map<String, Object>> productDefList = generalDao.addSelect(NAMESAPCE + ".selectProdDefList", param);			// 해당 키값으로 조회(제품)
  		
  		if(productDefList.size() != 0)
		{
			for(int i = 0; i<productDefList.size(); i++)
			{	
				serPram = productDefList.get(i);
				
				serPram.put("OWNER"				, param.get("OWNER"));
				serPram.put("ISLOADMNG"		, param.get("ISLOADMNG"));
				
				serPram.put("VALIDSTATELOAD"	, param.get("VALIDSTATELOAD"));	// 유효여부_공정부하 (21.04.27)
				
				serPram.put("PRODUCTDEFCLASSGROUPNAME"	, param.get("PRODUCTDEFCLASSGROUPNAME"));		// [21.05.17] 추가 품목그룹 추가됨
				
				//serPram.put("LASTTXNHISTKEY"	, TxnHistKey.getTxnHistKey());	// 불필요
				//serPram.put("TXNID"				, "SaveLoadSegmentRel");				// 불필요
				serPram.put("SERVICE_METHOD"	, param.get("SERVICE_METHOD"));		// Hist 저장전 조회 후 다른 param으로 저장시 필요(메서드 안에서 다른값 조회 후 그값이 담아서 던질경우)
				
				
				result += generalDao.addUpdate(NAMESAPCE + ".updateProdDef", serPram);
			}
		}
		return result; 		
		
	}
	
	
	/**
     * @fn
     * @brief 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정팝업
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectProcessSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProcessSegmentList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentList", param));
    }
  	
  	/**
     * @fn
     * @brief 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정팝업 - 중공정
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectProcessSegmentClassByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProcessSegmentClassByTypeList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentClassByTypeList", param));
    }
  	
  	/**
     * @fn
     * @brief 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정List 조회
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentRelList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadSegmentRelList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadSegmentRelList" , param), "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadSegmentGroupList" , param), "output2");
    }
  	
  	/************************************************************************************************
	 * 표준공정 Tab 저장 
	 ************************************************************************************************/
	private int getUpsertLoadSegmentRel(Map<String, Object> param) throws Exception
	{
		int result = 0;
  		Map<String, Object> segmentRelList = generalDao.addSelectOneMap(NAMESAPCE + ".selectSegmentRelList", param);
  		
  		if(segmentRelList == null)
		{	
  			//param.put("LASTTXNHISTKEY"							, TxnHistKey.getTxnHistKey());
  			//param.put("TXNID"											, "SaveLoadSegmentRel");
  			result += generalDao.insert(NAMESAPCE + ".insertSegmentRel", param);
		}
  		else
  		{
  			segmentRelList.put("LOADTOPSEGMENTCLASSID"		, param.get("LOADTOPSEGMENTCLASSID"));
  			segmentRelList.put("LOADMIDDLESEGMENTCLASSID"	, param.get("LOADMIDDLESEGMENTCLASSID"));
  			segmentRelList.put("LOADSMALLSEGMENTCLASSID"	, param.get("LOADSMALLSEGMENTCLASSID"));
  			segmentRelList.put("DESCRIPTION"							, param.get("DESCRIPTION"));
  			segmentRelList.put("VALIDSTATE"							, param.get("VALIDSTATE"));
  			
  			//segmentRelList.put("LASTTXNHISTKEY"						, TxnHistKey.getTxnHistKey());		// 불필요
  			//segmentRelList.put("TXNID"									, "SaveLoadSegmentRel");				// 불필요
  			segmentRelList.put("SERVICE_METHOD"					, param.get("SERVICE_METHOD"));		// Hist 저장전 조회 후 다른 param으로 저장시 필요
  			
  			result += generalDao.addUpdate(NAMESAPCE + ".updateSegmentRel", segmentRelList);
  		}
		return result; 		
		
	}
	
	
	/**
     * @fn
     * @brief 공정 부하 기준 정보 - [부하량 기준정보] - 부하량 기준정보 List 조회
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectProductSegmentMappingList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductSegmentMappingList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductSegmentMappingList", param));
    }
  	
  	
	/************************************************************************************************
	 * 부하량 기준정보 Tab 저장 
	 ************************************************************************************************/
	private int getUpsertLoadProductSegmentData(Map<String, Object> param) throws Exception
	{
		int result = 0;
  		Map<String, Object> loadProdSegment = generalDao.addSelectOneMap(NAMESAPCE + ".selectLoadProdSegmentList", param);
  		
  		if(loadProdSegment == null)
		{	
  			//param.put("LASTTXNHISTKEY"							, TxnHistKey.getTxnHistKey());		// 불필요
  			//param.put("TXNID"											, "SaveLoadSegmentRel");			// 불필요
  			
  			result += generalDao.insert(NAMESAPCE + ".insertLoadProdSegment", param);
		}
  		else
  		{
  			loadProdSegment.put("LOADTOPSEGMENTCLASSID"		, param.get("LOADTOPSEGMENTCLASSID"));
  			loadProdSegment.put("LOADMIDDLESEGMENTCLASSID"	, param.get("LOADMIDDLESEGMENTCLASSID"));
  			loadProdSegment.put("LOADSMALLSEGMENTCLASSID"		, param.get("LOADSMALLSEGMENTCLASSID"));
  			loadProdSegment.put("DESCRIPTION"							, param.get("DESCRIPTION"));
  			loadProdSegment.put("VALIDSTATE"							, param.get("VALIDSTATE"));
  			
  			loadProdSegment.put("TARGETPANELQTY"					, param.get("TARGETPANELQTY"));
  			loadProdSegment.put("TARGETSEGMENTQTY"				, param.get("TARGETSEGMENTQTY"));
  			
  			//loadProdSegment.put("LASTTXNHISTKEY"					, TxnHistKey.getTxnHistKey());		// 불필요
  			//loadProdSegment.put("TXNID"									, "SaveLoadSegmentRel");				// 불필요
  			loadProdSegment.put("SERVICE_METHOD"					, param.get("SERVICE_METHOD"));		// Hist 저장전 조회 후 다른 param으로 저장시 필요
  			result += generalDao.addUpdate(NAMESAPCE + ".updateLoadProdSegment", loadProdSegment);
  		}
		return result; 		
		
	}
	
	/**
     * @fn
     * @brief : 공정부하기준정보 - 담당자 필터 품목그룹
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectProdGrp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProdGrp(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
         putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProdGrp", param));
    }

    
  	
}