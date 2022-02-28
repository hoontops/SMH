package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS00500ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00500ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 26.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS00500ServiceImpl extends AbstractNbdfService implements BAS00500Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00500Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectProcessSegmentExtlist
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomClassList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00500Service#selectProcessSegmentExtlist(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessSegmentExtlist(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentExtlist", param));
    }
    
    /**
    * @fn 			: selectTreeList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectTreeList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00500Service#selectTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTreeList", param));
    }
    
    /**
    * @fn 			: selectProcessAList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessAList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectProcessAList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessAList", param));
    }
 
    /**
    * @fn 			: selectProcessBList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessBList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectProcessBList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessBList", param));
    }
    
    /**
    * @fn 			: selectProcessCList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessCList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectProcessCList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessCList", param));
    }
    
    /**
    * @fn 			: selectProcessDList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessDList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectProcessDList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessDList", param));
    }
    
    /**
    * @fn 			: saveProcess
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveArea
    * @remark		: 상세설명
* @see smh.bas.service.BAS00500Service#saveProcess(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveProcess(UiMapDto dto) throws Exception {
        DataSetMap processMapA = getParametersDataSetMap(dto, "INPUT_A");	//공정그룹
        DataSetMap processMapB = getParametersDataSetMap(dto, "INPUT_B");	//표준공정
        DataSetMap processMapC = getParametersDataSetMap(dto, "INPUT_C");	//설비그룹
        DataSetMap processMapD = getParametersDataSetMap(dto, "INPUT_D");	//SPEC
        
        Map<String, Object> param;
        
        int result = 0;
       
        //공정그룹 
        for (int i = 0, n = processMapA.size(); i < n; i++) {
            param = processMapA.get(i);
            int type = getRowType(param);      
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertProcessA(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateProcessA(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {            	
				result += deleteProcessA(param);
            }            
        }    

        //표준공정
        for (int i = 0, n = processMapB.size(); i < n; i++) {
            param = processMapB.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	String standardOperationId = getCreateID(param);
            	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            	param.put("PROCESSSEGMENTID", standardOperationId);
            	param.put("PROCESSSEGMENTNAME", uid);
            	result += insertSegment(param);
            	result += insertProcessB(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateSegment(param);
            	result += updateProcessB(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {            	
				result += deleteSegment(param);
				result += deleteProcessB(param);
            }            
        }  
        
        //설비그룹
        for (int i = 0, n = processMapC.size(); i < n; i++) {
            param = processMapC.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertProcessC(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateProcessC(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {            	
				result += deleteProcessC(param);
            }            
        }        
        
        //SPEC
        for (int i = 0, n = processMapD.size(); i < n; i++) {
            param = processMapD.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertProcessD(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateProcessD(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {            	
				result += deleteProcessD(param);
            }            
        }      
        putDataSetMap(dto, result);
    }
    
    private int insertProcessA(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	String classId = (String)param.get("PROCESSSEGMENTCLASSID");
    	String classType = (String)param.get("PROCESSSEGMENTCLASSTYPE");
    	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
    	String parentClassId = (String)param.get("PARENTPROCESSSEGMENTCLASSID");
    	int classIdLength = EgovObjectUtil.isNull(classId) ? 0 : classId.length();
    	
    	paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));		
		paramMap.put("PROCESSSEGMENTCLASSNAME", uid);
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessAList", paramMap);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("Processsegmentclass : PROCESSSEGMENTCLASSID = %s", classId));
		}
		
		if (!"TopProcessSegmentClass".equals(classType)
				&&  (!classId.contains(parentClassId)
				|| classIdLength != 4))
			throw new BizException("ValidationCreateIDArgument|"+String.format("ID Argument(Not size 4 char(Including large processes)) = %s", classId));			
		
		return generalDao.addUpdate(NAMESAPCE + ".insertProcessA", paramMap);		
	}
    
    private int updateProcessA(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String classId = (String)param.get("PROCESSSEGMENTCLASSID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessAList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("Processsegmentclass : PROCESSSEGMENTCLASSID = %s", classId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".updateProcessA", paramMap);		
	}
    
    private int deleteProcessA(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String classId = (String)param.get("PROCESSSEGMENTCLASSID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessAList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"+String.format("Processsegmentclass : PROCESSSEGMENTCLASSID = %s", classId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteProcessA", paramMap);		
	}
    
    private int insertSegment(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String standardOperationId = (String)paramMap.get("PROCESSSEGMENTID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	paramMap.put("PROCESSSEGMENTVERSION", "*");		
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectSegmentList", paramMap);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("Processsegment : PROCESSSEGMENTID = %s", standardOperationId));
		}

		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));		
		paramMap.put("ISTRACKINREQUIRED", "Y");
		paramMap.put("PROCESSSEGMENTTYPE", (String)param.get("SEGMENTTYPE"));
		
		return generalDao.addUpdate(NAMESAPCE + ".insertSegment", paramMap);		
	}
    
    private int updateSegment(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String standardOperationId = (String)param.get("PROCESSSEGMENTID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("PROCESSSEGMENTVERSION", "*");
    	
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectSegmentList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("Processsegment : PROCESSSEGMENTID = %s", standardOperationId));
		}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		return generalDao.addUpdate(NAMESAPCE + ".updateSegment", paramMap);		
	}
    
    private int deleteSegment(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String standardOperationId = (String)param.get("PROCESSSEGMENTID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("PROCESSSEGMENTVERSION", "*");
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectSegmentList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"+String.format("Processsegment : PROCESSSEGMENTID = %s", standardOperationId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteSegment", paramMap);		
	}
    
    private int insertProcessB(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	String classId = (String)param.get("PROCESSSEGMENTCLASSID");    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));		
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessBList", paramMap);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("ProcesssegmentEXT : PROCESSSEGMENTID = %s", classId));
		}
		
		return generalDao.addUpdate(NAMESAPCE + ".insertProcessB", paramMap);				
	}
    
    private int updateProcessB(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String classId = (String)param.get("PROCESSSEGMENTCLASSID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessBList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("ProcesssegmentEXT : PROCESSSEGMENTID = %s", classId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".updateProcessB", paramMap);		
	}
    
    private int deleteProcessB(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String classId = (String)param.get("PROCESSSEGMENTCLASSID");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessBList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"+String.format("ProcesssegmentEXT : PROCESSSEGMENTID = %s", classId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteProcessB", paramMap);		
	}
    
    
    private int insertProcessC(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));		
		
		List<Map<String, Object>> idDupList = generalDao.addSelect(NAMESAPCE + ".selectProcessDupCList", paramMap);
		if (idDupList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"
					+String.format("Processsegmenteqptclass : PROCESSSEGMENTID = %s, EQUIPMENTCLASSID = %s"
							, param.get("PROCESSSEGMENTID"), param.get("EQUIPMENTCLASSID")));
		}
		
		return generalDao.addUpdate(NAMESAPCE + ".insertProcessC", paramMap);				
	}
    
    private int updateProcessC(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessCList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"
						+String.format("PROCESSSEGMENTID = %s, ENTERPRISEID = %s, EQPTSEQUENCE = %s", param.get("PROCESSSEGMENTID"),param.get("ENTERPRISEID"),param.get("EQPTSEQUENCE")));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".updateProcessC", paramMap);		
	}
    
    private int deleteProcessC(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessCList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"
										+String.format("PROCESSSEGMENTID = %s, ENTERPRISEID = %s, EQPTSEQUENCE = %s", param.get("PROCESSSEGMENTID"),param.get("ENTERPRISEID"),param.get("EQPTSEQUENCE")));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteProcessC", paramMap);		
	}
    
    private int insertProcessD(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));		
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessDList", paramMap);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"
							+String.format("Specattribute : ENTERPRISEID = %s, PROCESSSEGMENTID = %s, SPECSEQUENCE = %s"
									, param.get("ENTERPRISEID"), param.get("PROCESSSEGMENTID"), param.get("SPECSEQUENCE")));
		}

		
		return generalDao.addUpdate(NAMESAPCE + ".insertProcessD", paramMap);				
	}
    
    private int updateProcessD(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	Map<String, Object> checkMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    		checkMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		checkMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		checkMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		checkMap.remove("VALIDSTATE");
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessDList", checkMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"
							+String.format("Specattribute : ENTERPRISEID = %s, PROCESSSEGMENTID = %s, SPECSEQUENCE = %s"
									, param.get("ENTERPRISEID"), param.get("PROCESSSEGMENTID"), param.get("SPECSEQUENCE")));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".updateProcessD", paramMap);		
	}
    
    private int deleteProcessD(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
		paramMap.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProcessDList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"
							+String.format("Specattribute : ENTERPRISEID = %s, PROCESSSEGMENTID = %s, SPECSEQUENCE = %s"
									, param.get("ENTERPRISEID"), param.get("PROCESSSEGMENTID"), param.get("SPECSEQUENCE")));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteProcessD", paramMap);		
	}
  
	private String getCreateID(Map<String, Object> param) throws Exception{
  		String strID = "";
  		String classId = "ProcessSegmentID";
  		String strProcessSegmentClass = (String)param.get("PROCESSSEGMENTCLASSID");
  		String subSegmentId = (String)param.get("SUBSEGMENTID");
  		String strSubSeg = "";
  		
		switch (subSegmentId) {
		case "None":	
			strSubSeg = "0";
			break;
		case "RTR":		
			strSubSeg = "1";
			break;
		case "InnerLayer":
			strSubSeg = "2";
			break;
		case "InnerLayerMT":
			strSubSeg = "3";
			break;
		case "OuterLayer":	
			strSubSeg = "4";
			break;		
		default:
			break;
		}  			
  		
  		Map<String, Object> paramMap = new HashMap<String, Object>();
  		paramMap.put("CLASSID", classId);		
		paramMap.put("PREFIX",strProcessSegmentClass+strSubSeg);
		paramMap.put("CREATOR", param.get("CREATOR"));
		generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", paramMap);
		strID = (String)paramMap.get("O_NEWID");
  		return strID;		
  	}
}