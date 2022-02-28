package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02200ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02200ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.15
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS02200ServiceImpl extends AbstractNbdfService implements BAS02200Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02200Dao";
    public static final String NAMESAPCE_COM = "smh.bas.dao.BASCommonDao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectProductDEFInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectProductDEFInfo
    * @remark		: 상세설명
* @see smh.bas.service.BAS02200Service#selectProductDEFInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductDEFInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDEFInfo", param),	"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOperationResource", param),	"output2");
    }
    
    /**
    * @fn 			: selectOperationSpecList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectOperationSpecList
    * @remark		: 상세설명
* @see smh.bas.service.BAS02200Service#selectOperationSpecList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOperationSpecList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOperationSpecList", param));        
    }
    
    /**
    * @fn 			: saveOperationSpec
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveOperationSpec
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 12.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void saveOperationSpec(UiMapDto dto) throws Exception {
    	DataSetMap ds_def					 = getParametersDataSetMap(dto, "ds_def");					//품목상세        
        DataSetMap ds_operationSpec 	 = getParametersDataSetMap(dto, "ds_operationSpec");		//공정Spec
        
        int result = 0;        
        String productDefId = null;
        String productDefVersion = null;
        String defaultCharType = null;
        
        Map<String, Object> defParam = new HashMap<>();
        
        //Product DEF 정보
         for (int i = 0, n = ds_def.size(); i < n; i++) {
        	defParam = ds_def.get(i);            
            productDefId = (String)defParam.get("PRODUCTDEFID");
            productDefVersion = (String)defParam.get("PRODUCTDEFVERSION");
            defaultCharType = (String)defParam.get("DEFAULTCHARTTYPE");
            
        }
        
        //공정SPEC 저장
        for (int i = 0, n = ds_operationSpec.size(); i < n; i++) {
        	Map<String, Object> specParam = new HashMap<>();
        	specParam = ds_operationSpec.get(i);
        	specParam.put("RESOURCEID", productDefId);
        	specParam.put("RESOURCEVERSION", productDefVersion);
        	specParam.put("DEFAULTCHARTTYPE", defaultCharType);
        	specParam.put("PROCESSEGVERSION", "*");
        	
        	String guid = null;
        	int type = getRowType(specParam);            
            if (type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED) {
            	/* 2021-06-15 행삭제가 아니라 데이터만 삭제하는경우가 있어 아래 로직 추가 */
            	if("".equals(StringUtil.Object2String(specParam.get("LOCATION")))
            			&& "".equals(StringUtil.Object2String(specParam.get("LSL")))
            			&& "".equals(StringUtil.Object2String(specParam.get("SL")))
            			&& "".equals(StringUtil.Object2String(specParam.get("USL")))
            			){
            		getDeleteInspectionitemrelData(specParam);
    				getDeleteSpecdefinitionData(specParam);
    				getDeleteSpecdetailData(specParam);
            	} else {
            		guid = getUpsertInspectionitemrelData(specParam);
                	specParam.put("SPECSEQUENCE", guid);
    				getUpsertSpecdefinitionData(specParam);
    				getUpsertSpecdetailData(specParam);	
            	}
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	getDeleteInspectionitemrelData(specParam);
				getDeleteSpecdefinitionData(specParam);
				getDeleteSpecdetailData(specParam);
            }
        }
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn 			: getUpsertInspectionitemrelData
     * @brief 		: 함수 간략한 설명 
     * @Method Name : getUpsertInspectionitemrelData
     * @remark		: 상세설명
     * @Author		: sungmin.choe
     * @File Version	: v1.0 
      *
      * << 개정이력(Modification Information) >>
      *   
      *     수정일      수정자        수정내용
      *   ------------  ------       ----------
      *   2021. 3. 11.       sungmin.choe      최초  생성
      *
     */
     private String getUpsertInspectionitemrelData(Map<String, Object> param) throws Exception{
     	String guid = null;
     	
     	List<Map<String, Object>> existByBillofMaterial =  generalDao.addSelect(NAMESAPCE + ".GetExistInspectionItemRel", param);
 		param.put("ISNCR", "Y");
 		param.put("NCRDECISIONDEGREE", "A");
 		
 		//SPECSEQUENCE
     	if (existByBillofMaterial != null && !existByBillofMaterial.isEmpty()){
     		Map<String, Object> resultMap = new HashMap<>();
     		resultMap = existByBillofMaterial.get(0);
         	guid = (String)resultMap.get("SPECSEQUENCE");
     		generalDao.addUpdate(NAMESAPCE + ".updateInspectionitemrel", param);
     	} else {    		
         	//GU ID 채번
     		Map<String, Object> paramMap = new HashMap<String, Object>();
         	paramMap.put("CLASSID", "Mmspecsequence");
         	paramMap.put("PREFIX", (String)param.get("SPECCLASSID"));
         	paramMap.put("PADNUM", "6");
     		generalDao.addSelectOneMap(NAMESAPCE_COM + ".selectNewID", paramMap);
     		guid = (String)paramMap.get("O_NEWID");
     		
     		param.put("SPECSEQUENCE", guid);    		
     		generalDao.addUpdate(NAMESAPCE + ".insertInspectionitemrel", param);
     	}
     	
 		return guid; 		
 	}
     
     /**
      * @fn 			: getUpsertSpecdefinitionData
      * @brief 		: 함수 간략한 설명 
      * @Method Name : getUpsertSpecdefinitionData
      * @remark		: 상세설명
      * @Author		: sungmin.choe
      * @File Version	: v1.0 
       *
       * << 개정이력(Modification Information) >>
       *   
       *     수정일      수정자        수정내용
       *   ------------  ------       ----------
       *   2021. 3. 11.       sungmin.choe      최초  생성
       *
      */
      private int getUpsertSpecdefinitionData(Map<String, Object> param) throws Exception{
      	return generalDao.addUpdate(NAMESAPCE + ".upsertSpecdefinition", param);    	 		
  	}
   
      /**
      * @fn 			: getUpsertSpecdetailData
      * @brief 		: 함수 간략한 설명 
      * @Method Name : getUpsertSpecdetailData
      * @remark		: 상세설명
      * @Author		: sungmin.choe
      * @File Version	: v1.0 
       *
       * << 개정이력(Modification Information) >>
       *   
       *     수정일      수정자        수정내용
       *   ------------  ------       ----------
       *   2021. 3. 11.       sungmin.choe      최초  생성
       *
      */
      private int getUpsertSpecdetailData(Map<String, Object> param) throws Exception{
      	return generalDao.addUpdate(NAMESAPCE + ".upsertSpecdetailData", param);    	 		
  	}
      
      /**
       * @fn 			: getDeleteInspectionitemrelData
       * @brief 		: 함수 간략한 설명 
       * @Method Name : getDeleteInspectionitemrelData
       * @remark		: 상세설명
       * @Author		: sungmin.choe
       * @File Version	: v1.0 
        *
        * << 개정이력(Modification Information) >>
        *   
        *     수정일      수정자        수정내용
        *   ------------  ------       ----------
        *   2021. 3. 11.       sungmin.choe      최초  생성
        *
       */
       private int getDeleteInspectionitemrelData(Map<String, Object> param) throws Exception{
       	return generalDao.addUpdate(NAMESAPCE + ".deleteInspectionitemrelData", param);    	 		
   	}
       
       /**
       * @fn 			: getDeleteSpecdefinitionData
       * @brief 		: 함수 간략한 설명 
       * @Method Name : getDeleteSpecdefinitionData
       * @remark		: 상세설명
       * @Author		: sungmin.choe
       * @File Version	: v1.0 
        *
        * << 개정이력(Modification Information) >>
        *   
        *     수정일      수정자        수정내용
        *   ------------  ------       ----------
        *   2021. 3. 11.       sungmin.choe      최초  생성
        *
       */
       private int getDeleteSpecdefinitionData(Map<String, Object> param) throws Exception{
       	return generalDao.addUpdate(NAMESAPCE + ".deleteSpecdefinitionData", param);    	 		
   	}
       
       /**
       * @fn 			: getDeleteSpecdetailData
       * @brief 		: 함수 간략한 설명 
       * @Method Name : getDeleteSpecdetailData
       * @remark		: 상세설명
       * @Author		: sungmin.choe
       * @File Version	: v1.0 
        *
        * << 개정이력(Modification Information) >>
        *   
        *     수정일      수정자        수정내용
        *   ------------  ------       ----------
        *   2021. 3. 11.       sungmin.choe      최초  생성
        *
       */
       private int getDeleteSpecdetailData(Map<String, Object> param) throws Exception{
       	return generalDao.addUpdate(NAMESAPCE + ".deleteSpecdetailData", param);    	 		
   	}
}