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
* @file: BAS00400ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00400ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 23.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS00400ServiceImpl extends AbstractNbdfService implements BAS00400Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00400Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectAreaList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomClassList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00400Service#selectAreaList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaList", param));
    }
    
    /**
    * @fn 			: selectResourceList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomClassList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00400Service#selectResourceList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectResourceList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectResourceList", param));
    }

    /**
    * @fn 			: selectAreaTreeList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomClassList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00400Service#selectAreaTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAreaTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaTreeList", param));
    }
    
    /**
    * @fn 			: saveArea
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveArea
    * @remark		: 상세설명
* @see smh.bas.service.BAS00400Service#saveArea(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveArea(UiMapDto dto) throws Exception {
        DataSetMap areaMap = getParametersDataSetMap(dto, "INPUT_AREA");
        DataSetMap resourceMap = getParametersDataSetMap(dto, "INPUT_RESOURCE");
        
        Map<String, Object> param;
        
        int result = 0;
       
        //작업장 데이터 작업
        for (int i = 0, n = areaMap.size(); i < n; i++) {
            param = areaMap.get(i);
            int type = getRowType(param);      
            String areaId = (String)param.get("AREAID");
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertArea(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateArea(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	/*
            	 * 삭제전 Validation
            	 */            	
            	// 1. lot  등록여부 체크
				if(generalDao.addSelect(NAMESAPCE + ".selectAreaUpdateChk", param).size()>0){
					throw new BizException("LotWorkResult"+"|"+String.format("Area ID = %s", areaId));
				} 				
            	// 2. 자원 등록여부 체크
				if(generalDao.addSelect(NAMESAPCE + ".selectRoutingAreaUpdateChk", param).size()>0){
					throw new BizException("ResourceCheck"+"|"+String.format("Area ID = %s", areaId));
				} 
            	// 3. 설비 등록여부 체크
				if(generalDao.addSelect(NAMESAPCE + ".selectEquipmentChk", param).size()>0){
					throw new BizException("EquipmentCheck"+"|"+String.format("Area ID = %s", areaId));
				} 
				result += deleteArea(param);
            }            
        }    

        //자원 데이터 작업
        for (int i = 0, n = resourceMap.size(); i < n; i++) {
            param = resourceMap.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertResource(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateResource(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	//삭제시 체크
            	result += deleteResource(param);
            }            
        }        
        putDataSetMap(dto, result);
    }
    
    private int insertArea(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String areaId = getCreateID(param);
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
    	paramMap.put("AREAID", areaId);
    	paramMap.put("AREANAME", uid);
		paramMap.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", (String)param.get("SESSION_SITETYPE"));		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectAreaList", paramMap);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("AreaId = %s", areaId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".insertArea", paramMap);		
	}
    
    private int updateArea(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String areaId = (String)param.get("AREAID");
    	String areaName = (String)param.get("AREANAME");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("AREAID", areaId);
    	paramMap.put("AREANAME", areaName);
		paramMap.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", (String)param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectAreaList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("AreaId = %s", areaId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".updateArea", paramMap);		
	}
    
    private int deleteArea(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String areaId = (String)param.get("AREAID");
    	String areaName = (String)param.get("AREANAME");
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("AREAID", areaId);
    	paramMap.put("AREANAME", areaName);
		paramMap.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", (String)param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectAreaList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"+String.format("AreaId = %s", areaId));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteArea", paramMap);		
	}
    
    private int insertResource(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
		paramMap.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", (String)param.get("SESSION_SITETYPE"));		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectResourceList", paramMap);
		if (idList.size() > 0 ) 
		{
			throw new BizException("InValidData002|"+String.format("ResourceID = %s", paramMap.get("RESOURCEID")));
		}    	
		return generalDao.addUpdate(NAMESAPCE + ".insertResource", paramMap);		
	}
    
    private int updateResource(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	paramMap.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", (String)param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectResourceList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("ResourceID = %s", paramMap.get("RESOURCEID")));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".updateResource", paramMap);		
	}
    
    private int deleteResource(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}

		paramMap.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
		paramMap.put("PLANTID", (String)param.get("SESSION_SITETYPE"));
		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectResourceList", paramMap);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData003|"+String.format("ResourceID = %s", paramMap.get("RESOURCEID")));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".deleteResource", paramMap);		
	}
    
    
    //ID 채번
  	private String getCreateID(Map<String, Object> param) throws Exception{
  		String strID = "";
  		String areaId = (String)param.get("AREAID");
  		String classId = "InterflexAreaID";
  		String parentAreaId = (String)param.get("PARENTAREAID");
  		
  		if("*".equals(parentAreaId)){
  			switch ((String)param.get("SESSION_SITETYPE")) 
  			{
  			case "IFC":
  				parentAreaId = "F";
  				break;
  			case "CCT":
  				parentAreaId = "C";
  				break;
  			case "IFV":
  				parentAreaId = "V";
  				break;
  			default:
  				break;
  			}
  		}
  		Map<String, Object> paramMap = new HashMap<String, Object>();
  		int areaIdLength = EgovObjectUtil.isNull(areaId) ? 0 : areaId.length();
		// 인터일 경우  			
		if (areaIdLength == 0) { //신규생성
			paramMap.put("CLASSID", classId);		
			paramMap.put("PREFIX",parentAreaId);
			paramMap.put("CREATOR", param.get("CREATOR"));
			generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", paramMap);
			strID = (String)paramMap.get("O_NEWID");
		} else {
			strID = areaId;
		}
  		return strID;		
  	}
  	
  	/**
	* @fn 			: selectCheckLot
	* @brief 		: (Override method) 함수 간략한 설명
	* @Method Name : selectCheckLot
	* @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#selectCheckLot(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	@Override
	public void selectCheckLot(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCheckLot", param));
	}
}