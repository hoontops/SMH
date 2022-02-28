package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02100ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02100ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.04
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 04.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS02100ServiceImpl extends AbstractNbdfService implements BAS02100Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02100Dao";
    public static final String NAMESAPCE_COM = "smh.bas.dao.BASCommonDao";

    @Autowired
    private GeneralDao generalDao;

    
    /**
    * @fn 			: selectTreeList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectTreeList
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#selectTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTreeList", param));
    }

    /**
    * @fn 			: selectProductDEFInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectProductDEFInfo
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#selectProductDEFInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductDEFInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDEFInfo", param),	"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOperationResource", param),	"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCheckRoutingList", param),	"output3");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBomValue", param),	"output4");        
    }
    
    /**
    * @fn 			: selectProductDetail
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectProductDetail
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#selectProductDetail(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableList", param),	"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOperationSpecList", param),	"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableList", param),	"output3");        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAOILayerList", param),	"output4");
    }
    
    /**
    * @fn 			: selectDurablePopList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectDurablePopList
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#selectDurablePopList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDurablePopList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurablePopList", param));
    }
    
    @Override
    public void selectDurableListPop(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableListPop", param));
    }
    
    
    
    /**
    * @fn 			: selectProcessSegmentExtPupop
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessSegmentExtPupop
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 31.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectProcessSegmentExtPupop(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentExtPupop", param));
    }    
    

    /**
    * @fn 			: saveRouting
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveRouting
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#saveRouting(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveRouting(UiMapDto dto) throws Exception {
        DataSetMap ds_def					 = getParametersDataSetMap(dto, "ds_def");					//품목상세
        DataSetMap ds_operation 		 = getParametersDataSetMap(dto, "ds_operation");			//공정
        DataSetMap ds_consumable 		 = getParametersDataSetMap(dto, "ds_consumable");			//자재
        DataSetMap ds_operationSpec 	 = getParametersDataSetMap(dto, "ds_operationSpec");		//공정Spec
        DataSetMap ds_durable 			 = getParametersDataSetMap(dto, "ds_durable");				//치공구
        DataSetMap ds_aoiLayer 			 = getParametersDataSetMap(dto, "ds_aoiLayer");				//AOI
        
        Map<String, Object> defParam = new HashMap<>();
        Map<String, Object> param;
        List<Map<String, Object>> checkLotList = null; 
        int result = 0;
        String assemblyBomId = null;
        String productDefId = null;
        String productDefVersion = null;
        String enterpriseId = null;
        String siteType = null;
        
        //Product DEF 정보
        for (int i = 0, n = ds_def.size(); i < n; i++) {
        	defParam = ds_def.get(i);
            
            productDefId = (String)defParam.get("PRODUCTDEFID");
            productDefVersion = (String)defParam.get("PRODUCTDEFVERSION");
            enterpriseId = (String)defParam.get("SESSION_ENTERPRISEID");
            siteType = (String)defParam.get("SESSION_SITETYPE");
            
        	getUpsertRouting(defParam);					// RoutingData Insert
        	defParam.put("ITEMID", defParam.get("PRODUCTDEFID"));
        	defParam.put("ITEMVERSION", defParam.get("PRODUCTDEFVERSION"));
        	checkLotList = generalDao.addSelect(NAMESAPCE + ".selectCheckRoutingList", defParam);        	
    
        	//2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
        	if(checkLotList != null && checkLotList.size()>0){
        		generalDao.addUpdate(NAMESAPCE + ".upsertRoutingERP", defParam);	
        	}
        	
        	getUpdateProductItemSpec(defParam);		// ProductDefinition Update
			getUpdateProductdefinition(defParam);
			getUpsertProcessdefinition(defParam);
			getUpsertProductItemSpecComment(defParam);
			assemblyBomId = getUpsertAssemblybillofmaterialData(defParam);            
        }
        
        //공정 정보 삭제 (엑셀 업로드때문에 삭제만 먼저 수행)
        for (int i = 0, n = ds_operation.size(); i < n; i++) {
            param = ds_operation.get(i);
            param.put("PRODUCTDEFID", productDefId);
            param.put("PRODUCTDEFVERSION", productDefVersion);
            
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_DELETED) {
            	param.put("ITEMID", productDefId);
            	param.put("ITEMVERSION", productDefVersion);
            	List<Map<String, Object>> getConsumableList = generalDao.addSelect(NAMESAPCE + ".selectConsumableList", param);
            	
            	if (getConsumableList != null) {
					for (int j = 0, subLen = getConsumableList.size(); j < subLen; j++) {
						Map<String, Object> consumable 	= getConsumableList.get(j);
						Map<String, Object> params 		= new HashMap<>();

						params.put("ENTERPRISEID", param.get("ENTERPRISEID"));
						params.put("OPERATIONID", param.get("OPERATIONID"));
						params.put("PRODUCTDEFID", param.get("PRODUCTDEFID"));
						params.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));
						params.put("PROCESSSEGMENTID", param.get("PROCESSSEGMENTID"));
						params.put("PROCESSSEGMENTVERSION", param.get("PROCESSSEGMENTVERSION"));
						params.put("MATERIALTYPE", consumable.get("MATERIALTYPE"));
						params.put("MATERIALDEFID", consumable.get("COMPONENTITEMID"));
						params.put("MATERIALDEFVERSION", consumable.get("COMPONENTITEMVERSION"));
						params.put("SEQUENCE", consumable.get("SEQ"));
						params.put("COMPONENTBOMID", consumable.get("COMPONENTBOMID"));
						params.put("COMPONENTSEQUENCE", consumable.get("COMPONENTSEQUENCE"));

						getDeleteBillofmaterialData(params);
						getDeleteBomcomponentData(params);
					}
				}
            	
            	List<Map<String, Object>> getProcessSpecList = generalDao.addSelect(NAMESAPCE + ".GetRoutingInspectionItemList", param);
            	
            	if (getProcessSpecList != null) {
					for (int j = 0, subLen = getProcessSpecList.size(); j < subLen; j++) {
						Map<String, Object> processSpec 	= getProcessSpecList.get(j);
						Map<String, Object> params			= new HashMap<>();

						params.put("PRODUCTDEFID", param.get("PRODUCTDEFID"));
						params.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));
						params.put("PROCESSSEGMENTID", param.get("PROCESSSEGMENTID"));
						params.put("PROCESSSEGMENTVERSION", param.get("PROCESSSEGMENTVERSION"));
						params.put("INSPITEMID", processSpec.get("INSPITEMID"));
						params.put("INSPITEMVERSION", processSpec.get("INSPITEMVERSION"));
						params.put("INSPECTIONDEFID", processSpec.get("INSPECTIONDEFID"));
						params.put("INSPECTIONDEFVERSION", processSpec.get("INSPECTIONDEFVERSION"));
						params.put("SPECSEQUENCE", processSpec.get("SPECSEQUENCE"));
						params.put("SPECCLASSID", processSpec.get("SPECCLASSID"));
						params.put("DEFAULTCHARTTYPE", processSpec.get("DEFAULTCHARTTYPE"));

						getDeleteInspectionitemrelData(params);
						getDeleteSpecdefinitionData(params);
						getDeleteSpecdetailData(params);
					}
				}
            	
            	//2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
            	if(checkLotList != null && checkLotList.size()>0){
                	// ERP I/F Insert
                	generalDao.addUpdate(NAMESAPCE + ".deleteProcesspathERP", param);
            	}
            	
            	getDeleteAllBillofresourceData(param);
				getDeleteAllOperationresourceData(param);
				getDeleteOperationspecvalueData(param);
				getDeleteProcesspath(param);
            	getDeleteOperation(param);
            }      
        }    
        
        //공정 정보(입력,수정)
        for (int i = 0, n = ds_operation.size(); i < n; i++) {
            param = ds_operation.get(i);
            param.put("PRODUCTDEFID", productDefId);
            param.put("PRODUCTDEFVERSION", productDefVersion);
            
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	getInsertProcesspath(param);
            	getUpsertOperationData(param);

            	//2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
            	if(checkLotList != null && checkLotList.size()>0){
                	// ERP I/F Insert
                	generalDao.addUpdate(NAMESAPCE + ".insertProcesspathERP", param);
            	}

            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateProcesspath(param);
            	getUpsertOperationData(param);
            	
            	//2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
            	if(checkLotList != null && checkLotList.size()>0){
                	// ERP I/F Insert
                	generalDao.addUpdate(NAMESAPCE + ".updateProcesspathERP", param);
            	}
            	
            	if("Invalid".equals(param.get("VALIDSTATE"))){
            		/***********************************************************************************************/
                	//2021-08-10 공정 미사용처리시 BOM 삭제처리(동일공정이 추가되면 BOM이 뻥튀기 되는 문제)
                	param.put("ITEMID", productDefId);
                	param.put("ITEMVERSION", productDefVersion);
                	List<Map<String, Object>> getConsumableList = generalDao.addSelect(NAMESAPCE + ".selectConsumableList", param);
                	
                	if (getConsumableList != null) {
    					for (int j = 0, subLen = getConsumableList.size(); j < subLen; j++) {
    						Map<String, Object> consumable 	= getConsumableList.get(j);
    						Map<String, Object> params 		= new HashMap<>();

    						params.put("ENTERPRISEID", param.get("ENTERPRISEID"));
    						params.put("OPERATIONID", param.get("OPERATIONID"));
    						params.put("PRODUCTDEFID", param.get("PRODUCTDEFID"));
    						params.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));
    						params.put("PROCESSSEGMENTID", param.get("PROCESSSEGMENTID"));
    						params.put("PROCESSSEGMENTVERSION", param.get("PROCESSSEGMENTVERSION"));
    						params.put("MATERIALTYPE", consumable.get("MATERIALTYPE"));
    						params.put("MATERIALDEFID", consumable.get("COMPONENTITEMID"));
    						params.put("MATERIALDEFVERSION", consumable.get("COMPONENTITEMVERSION"));
    						params.put("SEQUENCE", consumable.get("SEQ"));
    						params.put("COMPONENTBOMID", consumable.get("COMPONENTBOMID"));
    						params.put("COMPONENTSEQUENCE", consumable.get("COMPONENTSEQUENCE"));

    						getDeleteBillofmaterialData(params);
    						getDeleteBomcomponentData(params);
    					}
    				}
                	/***********************************************************************************************/	
            	}
            }      
        }    
        
        
        if (ds_operation != null && ds_operation.size() > 0) {
        	defParam.put("ISUPDATE", "Y");
        	defParam.put("ITEMID", productDefId);
        	defParam.put("ITEMVERSION", productDefVersion);
        	defParam.put("VALIDSTATE", "Valid");  	//2021-06-16 유효상태인 공정만 조회해서 순번 채번하도록 변경
        	List<Map<String, Object>> extInspectionDefectList = generalDao.addSelect(NAMESAPCE + ".selectOperationResource", defParam);
        	
			for (int i = 0, len = extInspectionDefectList.size(); i < len; i++) {
				Map<String, Object> data = extInspectionDefectList.get(i);
				Map<String, Object> newData = new HashMap<String, Object>();
				String subSegmentId = (String)data.get("SUBSEGMENTID");
				String rtrSht = "";
				
				newData.put("OPERATIONID", data.get("OPERATIONID"));
				newData.put("PRODUCTDEFID", data.get("MAINPRODUCTID"));
				newData.put("PRODUCTDEFVERSION", data.get("MAINPRODUCTVERSION"));
				newData.put("PROCESSSEGMENTID", data.get("PROCESSSEGMENTID"));
				newData.put("PROCESSSEGMENTVERSION", data.get("PROCESSSEGMENTVERSION") == null ? "*" : data.get("PROCESSSEGMENTVERSION"));
				newData.put("USERSEQUENCE", data.get("USERSEQUENCE"));
				newData.put("ISWEEKMNG", data.get("ISWEEKMNG") == null ? null : data.get("ISWEEKMNG"));
				newData.put("DESCRIPTION", data.get("DESCRIPTION") == null ? "" :data.get("DESCRIPTION"));
				newData.put("VALIDSTATE", data.get("VALIDSTATE"));
				newData.put("PROCESSUOM", data.get("PROCESSUOM") == null ? "" : data.get("PROCESSUOM"));
				newData.put("OPERATIONSEQUENCE", i + 1);
				newData.put("SESSION_ENTERPRISEID", enterpriseId);
				newData.put("SESSION_SITETYPE", siteType);
				newData.put("IS_WAREHOUSE", "N");
				if (len == 1)
					newData.put("PATHTYPE", "StartEnd");
				else {
					if (i == 0)
						newData.put("PATHTYPE", "Start");
					else if (i == len - 1)
						newData.put("PATHTYPE", "End");
					else if (i < len)
						newData.put("PATHTYPE", "Normal");

				}
				getUpdateProcesspath(newData);				
				getUpsertOperationData(newData);
				
				// RTR,Sheet 관련 Update
				//첫공정이 RTR이면 Roll 아니면 Sheet
				if(i==0){
					if("RTR".equals(subSegmentId)){
						rtrSht = "RTR";
					} else {
						rtrSht = "SHT";
					}
					defParam.put("RTRSHT", rtrSht);
					getUpdateProductItemSpec(defParam);		// ProductItemSpec Update	
					getUpdateProductdefinition(defParam);		// ProductDefinition Update	
				}				
			}
			//2021-06-16 비활성화된 공정 Pathsequence Null처리 추가
			generalDao.addUpdate(NAMESAPCE + ".updateInvalidOperation", defParam);		
        }
        
        //자재정보 저장
        for (int i = 0, n = ds_consumable.size(); i < n; i++) {
        	Map<String, Object> consumableParam = new HashMap<>();
        	consumableParam = ds_consumable.get(i);
        	consumableParam.put("PRODUCTDEFID", productDefId);
        	consumableParam.put("PRODUCTDEFVERSION", productDefVersion);
        	
        	int type = getRowType(consumableParam);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	String degree = getInsertBillofmaterialData(consumableParam);
            	consumableParam.put("CRUD", "C");            	
            	consumableParam.put("SEQUENCE", degree);
            	consumableParam.put("ASSEMBLYBOMID", assemblyBomId);            	
				getUpsertBomcomponentData(consumableParam);
				
	            //2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
	        	if(checkLotList != null && checkLotList.size()>0){
	            	// ERP I/F Insert
	            	generalDao.addUpdate(NAMESAPCE + ".insertConsumableERP", consumableParam);
	        	}
	        	
            } else if (type == DataSet.ROW_TYPE_UPDATED) {            	
            	consumableParam.put("MATERIALDEFID", consumableParam.get("COMPONENTITEMID"));
            	consumableParam.put("MATERIALDEFVERSION", consumableParam.get("COMPONENTITEMVERSION"));            	
            	consumableParam.put("SEQUENCE", consumableParam.get("SEQ"));
            	consumableParam.put("ASSEMBLYBOMID", assemblyBomId);
            	consumableParam.put("CRUD", "U");
            	getUpdateBillofmaterialData(consumableParam);
            	getUpsertBomcomponentData(consumableParam);
            	
                //2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
            	if(checkLotList != null && checkLotList.size()>0){
                	// ERP I/F Insert
                	generalDao.addUpdate(NAMESAPCE + ".insertConsumableERP", consumableParam);
            	}
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	consumableParam.put("CRUD", "D");
            	consumableParam.put("MATERIALDEFID", consumableParam.get("COMPONENTITEMID"));
            	consumableParam.put("MATERIALDEFVERSION", consumableParam.get("COMPONENTITEMVERSION"));
            	consumableParam.put("SEQUENCE", consumableParam.get("SEQ"));
            	
                //2021-07-27 Lot이 생성된 데이터는 ERP I/F 호출
            	if(checkLotList != null && checkLotList.size()>0){
                	// ERP I/F Insert
                	generalDao.addUpdate(NAMESAPCE + ".insertConsumableERP", consumableParam);
            	}
            	
            	getDeleteBillofmaterialData(consumableParam);
            	getDeleteBomcomponentData(consumableParam);
            }
            

        }
        
        //공정SPEC 저장
        for (int i = 0, n = ds_operationSpec.size(); i < n; i++) {
        	Map<String, Object> specParam = new HashMap<>();
        	specParam = ds_operationSpec.get(i);
        	specParam.put("PRODUCTDEFID", productDefId);
        	specParam.put("PRODUCTDEFVERSION", productDefVersion);
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
        
        
        //치공구 저장
        for (int i = 0, n = ds_durable.size(); i < n; i++) {
        	Map<String, Object> durableParam = new HashMap<>();
        	durableParam = ds_durable.get(i);
        	durableParam.put("PRODUCTDEFID", productDefId);
        	durableParam.put("PRODUCTDEFVERSION", productDefVersion);
        	
        	int type = getRowType(durableParam);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	String degree = getInsertBillofresourceData(durableParam);
            	durableParam.put("SEQUENCE", degree);            	
            	getUpsertOperationresourceData(durableParam);				
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	durableParam.put("SEQUENCE", durableParam.get("SEQ"));
            	getUpdateBillofresourceData(durableParam);
            	getUpsertOperationresourceData(durableParam);		
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	durableParam.put("SEQUENCE", durableParam.get("SEQ"));
            	getDeleteBillofresourceData(durableParam);
            	getDeleteOperationresourceData(durableParam);
            }
        }
        
        //AOI 저장
        for (int i = 0, n = ds_aoiLayer.size(); i < n; i++) {
        	Map<String, Object> aoiParam = new HashMap<>();
        	aoiParam = ds_aoiLayer.get(i);
        	aoiParam.put("PRODUCTDEFID", productDefId);
        	aoiParam.put("PRODUCTDEFVERSION", productDefVersion);
        	
        	int type = getRowType(aoiParam);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	getInsertOperationspecvalueData(aoiParam); 	 					
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateOperationspecvalueData(aoiParam);		
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	getDeleteOperationspecvalueData(aoiParam);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    private int getUpsertRouting(Map<String, Object> param) throws Exception{
    	generalDao.addUpdate(NAMESAPCE + ".upsertRouting", param);
    	
		return 1;		
	}
    
    private int getUpdateProductItemSpec(Map<String, Object> param) throws Exception{    	
		return generalDao.addUpdate(NAMESAPCE + ".updateProductItemSpec", param);		
	}
    
    private int getUpdateProductdefinition(Map<String, Object> param) throws Exception{    	
		return generalDao.addUpdate(NAMESAPCE + ".updateProductdefinition", param);		
	}
 
    private int getUpsertProcessdefinition(Map<String, Object> param) throws Exception{    	
		return generalDao.addUpdate(NAMESAPCE + ".upsertProcessdefinition", param);		
	}
    
    private int getUpsertProductItemSpecComment(Map<String, Object> param) throws Exception{    	
		return generalDao.addUpdate(NAMESAPCE + ".upsertProductItemSpecComment", param);		
	}
    
    private String getUpsertAssemblybillofmaterialData(Map<String, Object> param) throws Exception{
    	Map<String, Object> resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectAssemblyBomId", param);
    	String assemblyBomId;
    	if(resultMap==null || resultMap.size()< 1){
    		assemblyBomId = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
    		param.put("ASSEMBLYBOMID", assemblyBomId);
    		generalDao.addUpdate(NAMESAPCE + ".upsertAssemblybillofmaterialData", param);
    	} else {
    		assemblyBomId = (String)resultMap.get("ASSEMBLYBOMID");
    	}
    	return assemblyBomId; 		
	}
    
    private int getInsertProcesspath(Map<String, Object> param) throws Exception{
    	Map<String, Object> resultMap 	= null;
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String userSequence  				= param.get("USERSEQUENCE")+"";
    	String processSegmentId  		= (String)param.get("PROCESSSEGMENTID");
    	String	productDefId					= (String)param.get("PRODUCTDEFID");
    	String	productDefVersion			= (String)param.get("PRODUCTDEFVERSION");
    	String operationId  				= "";
    	
    	//공정 수순 중복체크
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkUserSequence", param);
    	if(resultMap!=null && resultMap.size() > 0){throw new BizException("InValidData002|"+String.format("USERSEQUENCE = %s", userSequence));} 
    	
    	//공정 ID 중복체크    	
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkSegmentId", param);
    	if(resultMap!=null && resultMap.size() > 0){throw new BizException("InValidData002|"+String.format("PROCESSSEGMENTID = %s", processSegmentId));}
    	
    	//Operation ID 채번
    	paramMap.put("CLASSID", "Operation");
    	paramMap.put("PREFIX", productDefId+productDefVersion);
    	paramMap.put("PADNUM", "5");
		generalDao.addSelectOneMap(NAMESAPCE_COM + ".selectNewID", paramMap);
		operationId = (String)paramMap.get("O_NEWID");
		
    	//Operation ID 중복체크
    	param.put("OPERATIONID",operationId);
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkOperationId", param);
    	if(resultMap!=null && resultMap.size() > 0){throw new BizException("InValidData002|"+String.format("OPERATIONID = %s", operationId));}
    	    	 	
    	//공정 Table insert
    	return generalDao.addUpdate(NAMESAPCE + ".insertProcesspath", param);    	 		
	}  
    
    private int getUpdateProcesspath(Map<String, Object> param) throws Exception{
    	Map<String, Object> resultMap 	= null;
    	String operationId  				= (String)param.get("OPERATIONID");
    	
    	//Operation ID 중복체크
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkOperationId2", param);
     	if(resultMap==null ){throw new BizException("InValidData001|"+String.format("OPERATIONID = %s", operationId));}
    	
    	//공정 Table Update
    	return generalDao.addUpdate(NAMESAPCE + ".updateProcesspath", param);    	 		
	}
    
    /**
    * @fn 			: getDeleteProcesspath
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteProcesspath
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
    private int getDeleteProcesspath(Map<String, Object> param) throws Exception{
    	//공정상세 Table Delete
    	return generalDao.addUpdate(NAMESAPCE + ".deleteProcesspath", param);    	 		
	}
    
    /**
    * @fn 			: getDeleteOperation
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteOperation
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
    private int getDeleteOperation(Map<String, Object> param) throws Exception{
    	//공정 Table Delete
    	return generalDao.addUpdate(NAMESAPCE + ".deleteOperation", param);    	 		
	}
    
    /**
    * @fn 			: getDeleteBillofmaterialData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteBillofmaterialData
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
    private int getDeleteBillofmaterialData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".deleteBillofmaterialData", param);    	 		
	}
    
    /**
    * @fn 			: getDeleteBomcomponentData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteBomcomponentData
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
    private int getDeleteBomcomponentData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".deleteBomcomponentData", param);    	 		
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
    
    /**
    * @fn 			: getDeleteAllBillofresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteAllBillofresourceData
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
    private int getDeleteAllBillofresourceData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".deleteAllBillofresourceData", param);    	 		
	}
        
    /**
    * @fn 			: getDeleteAllOperationresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteAllOperationresourceData
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
    private int getDeleteAllOperationresourceData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".deleteAllOperationresourceData", param);    	 		
	}
    
    /**
    * @fn 			: getDeleteOperationspecvalueData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteOperationspecvalueData
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
    private int getDeleteOperationspecvalueData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".deleteOperationspecvalueData", param);    	 		
	}
 
    /**
    * @fn 			: getInsertBillofmaterialData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getInsertBillofmaterialData
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
    private String getInsertBillofmaterialData(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> existByBillofMaterial =  generalDao.addSelect(NAMESAPCE + ".GetExistByBillofMaterial", param);    	
    	if (existByBillofMaterial != null && !existByBillofMaterial.isEmpty()){throw new BizException("InValidData002|"+String.format("MATERIALDEFID = %s", param.get("COMPONENTITEMID")));}    	

    	String maxDegree = "1";
    	
		// Get Max Degree
		List<Map<String, Object>> maxDegreeByBillofMaterial = generalDao.addSelect(NAMESAPCE + ".GetMaxDegreeByBillofMaterial", param);
		
		if (maxDegreeByBillofMaterial != null && !maxDegreeByBillofMaterial.isEmpty()) {
			maxDegree = (String) maxDegreeByBillofMaterial.get(0).get("DEGREE");
			int iDegree = "".equals(maxDegree) ? 0 : Integer.parseInt(maxDegree);
			iDegree += 1;
			maxDegree = Integer.toString(iDegree);
		}
    		param.put("SEQUENCE", maxDegree);
    		generalDao.addUpdate(NAMESAPCE + ".insertBillofmaterialData", param);

    	return maxDegree; 		
	}
    
    /**
    * @fn 			: getUpsertBomcomponentData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getUpsertBomcomponentData
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
    private int getUpsertBomcomponentData(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> getBomIdList = generalDao.addSelect(NAMESAPCE + ".GetExistBomComponent", param);
		
		if (getBomIdList != null && !getBomIdList.isEmpty()) {
			Map<String, Object> propertyMap = new HashMap<>();
			propertyMap = getBomIdList.get(0);
			param.put("COMPONENTBOMID", propertyMap.get("COMPONENTBOMID"));
			param.put("COMPONENTSEQUENCE", propertyMap.get("COMPONENTSEQUENCE"));
		} else {
			param.put("COMPONENTBOMID", UUID.randomUUID().toString().toUpperCase());
			param.put("COMPONENTSEQUENCE", param.get("SEQUENCE"));
		}
    	
		return generalDao.addUpdate(NAMESAPCE + ".upsertBomcomponentData", param);		
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
    * @fn 			: getInsertBillofresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getInsertBillofresourceData
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
    private String getInsertBillofresourceData(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> existByBillofMaterial =  generalDao.addSelect(NAMESAPCE + ".GetExistByBillofResource", param);    	
    	if (existByBillofMaterial != null && !existByBillofMaterial.isEmpty()){throw new BizException("InValidData002|"+String.format("RESOURCEID = %s", param.get("RESOURCEID")));}    	

    	String maxDegree = "1";
    	
		// Get Max Degree
		List<Map<String, Object>> maxDegreeByBillofMaterial = generalDao.addSelect(NAMESAPCE + ".GetMaxDegreeByBillofResource", param);
		
		if (maxDegreeByBillofMaterial != null && !maxDegreeByBillofMaterial.isEmpty()) {
			maxDegree = (String) maxDegreeByBillofMaterial.get(0).get("DEGREE");
			int iDegree = "".equals(maxDegree) ? 0 : Integer.parseInt(maxDegree);
			iDegree += 1;
			maxDegree = Integer.toString(iDegree);
		}
    		param.put("SEQUENCE", maxDegree);
    		generalDao.addUpdate(NAMESAPCE + ".insertBillofResourceData", param);

    	return maxDegree; 		
	}
    
    /**
    * @fn 			: getUpsertOperationresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getUpsertOperationresourceData
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
    private int getUpsertOperationresourceData(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> getDurableList = generalDao.addSelect(NAMESAPCE + ".GetExistDurableComponent", param);
    	
		if (getDurableList != null && !getDurableList.isEmpty()) {
			param.put("OPERATIONRESOURCEID", getDurableList.get(0).get("OPERATIONRESOURCEID"));
			param.put("RESOURCESEQUENCE", getDurableList.get(0).get("RESOURCESEQUENCE"));
			param.put("OPERATIONID", param.get("OPERATIONID"));
		} else {
			param.put("OPERATIONRESOURCEID", UUID.randomUUID().toString().toUpperCase());
		}
			
    	return generalDao.addUpdate(NAMESAPCE + ".upsertOperationresourceData", param);    	 		
	}
    
    /**
    * @fn 			: getUpdateBillofresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getUpdateBillofresourceData
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
    private int getUpdateBillofresourceData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".updateBillofResourceData", param);    	 		
	}
    
    /**
    * @fn 			: getDeleteBillofresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteBillofresourceData
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
    private int getDeleteBillofresourceData(Map<String, Object> param) throws Exception{
    	//공정상세 Table Delete
    	return generalDao.addUpdate(NAMESAPCE + ".deleteBillofresourceData", param);    	 		
	}
	
    /**
    * @fn 			: getDeleteOperationresourceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getDeleteOperationresourceData
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
    private int getDeleteOperationresourceData(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> getDurableList = generalDao.addSelect(NAMESAPCE + ".GetExistDurableComponent", param);
    	
		if (getDurableList != null && !getDurableList.isEmpty()) {
			Map<String, Object> paramMap = new HashMap<>();
			paramMap.put("OPERATIONRESOURCEID", getDurableList.get(0).get("OPERATIONRESOURCEID"));
			paramMap.put("RESOURCESEQUENCE", getDurableList.get(0).get("RESOURCESEQUENCE"));
			paramMap.put("OPERATIONID", param.get("OPERATIONID"));
			return generalDao.addUpdate(NAMESAPCE + ".deleteOperationresourceData", param);   	
		} else {
			return 0;
		}	 		
	}
    
    /**
    * @fn 			: getInsertOperationspecvalueData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getInsertOperationspecvalueData
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
    private int getInsertOperationspecvalueData(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> existByBillofMaterial =  generalDao.addSelect(NAMESAPCE + ".GetExistByOperationSpecValue", param);    	
    	if (existByBillofMaterial != null && !existByBillofMaterial.isEmpty()){throw new BizException("InValidData002|"
    	+String.format("OPERATIONID = %s   AOIQCLAYER = %s  AOIQCLAYER2 = %s", param.get("OPERATIONID"),
    			param.get("AOIQCLAYER"), param.get("AOIQCLAYER2")));}    	

    	String maxDegree = "1";
    	
		// Get Max Degree
		List<Map<String, Object>> maxDegreeByBillofMaterial = generalDao.addSelect(NAMESAPCE + ".GetMaxDegreeByOperationSpecValue", param);
		
		if (maxDegreeByBillofMaterial != null && !maxDegreeByBillofMaterial.isEmpty()) {
			maxDegree = (String) maxDegreeByBillofMaterial.get(0).get("DEGREE");
			int iDegree = "".equals(maxDegree) ? 0 : Integer.parseInt(maxDegree);
			iDegree += 1;
			maxDegree = Integer.toString(iDegree);
		}
    		param.put("SEQUENCE", maxDegree);
    	return generalDao.addUpdate(NAMESAPCE + ".insertOperationspecvalueData", param); 		
	}
    
    /**
    * @fn 			: getUpdateOperationspecvalueData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getUpdateOperationspecvalueData
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
    private int getUpdateOperationspecvalueData(Map<String, Object> param) throws Exception{    	
    	return generalDao.addUpdate(NAMESAPCE + ".updateOperationspecvalueData", param);    	 		
	}
    
    /**
    * @fn 			: selectCheckRoutingList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCheckRoutingList
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#selectCheckRoutingList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectCheckRoutingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCheckRoutingList", param));        
    }
    
    /**
    * @fn 			: saveItemWarehouse
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveItemWarehouse
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
    @Override
    public void saveItemWarehouse(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".saveItemWarehouse", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".saveItemWarehouse", param);
            } 
        }
        
        putDataSetMap(dto, result);
    }
 
    /**
    * @fn 			: copyRouting
    * @brief 		: 함수 간략한 설명 
    * @Method Name : copyRouting
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
    @Override
    public void copyRouting(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        
        Map<String, Object> param;
        String oResultCode = "";
        String oResultMsg = "";
        
        int result = 0;
        
        //저장
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);                
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            result += generalDao.addUpdate(NAMESAPCE + ".copyRouting", param);
            
            oResultCode = (String)param.get("O_RESULT_CODE");
            oResultMsg = (String)param.get("O_RESULT_MSG");
            
            if(!"S".equals(oResultCode)){
            	throw new BizException(oResultMsg);
            }
        }        
        putDataSetMap(dto, result);
    }
    
    private int getUpsertOperationData(Map<String, Object> param) throws Exception{    	
		return generalDao.addUpdate(NAMESAPCE + ".upsertOperationData", param);		
	}
    
    private int getUpdateBillofmaterialData(Map<String, Object> param) throws Exception{    	
		return generalDao.addUpdate(NAMESAPCE + ".updateBillofmaterialData", param);		
	}
    
    /**
    * @fn 			: uploadRoutingExcel
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : uploadRoutingExcel
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#uploadRoutingExcel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void uploadRoutingExcel(UiMapDto dto) throws Exception {
        DataSetMap paramMap 					= getParametersDataSetMap(dto, "INPUT");        
        Map<String, Object> param 				= new HashMap<String, Object>();
        Map<String, Object> keyMap 			= new HashMap<String, Object>();
        List<Map<String, Object>> uploadList 	= new ArrayList<>();
        Map<String, Object> uploadMap			= new HashMap<String, Object>();
        List resultList 	= new ArrayList<>();        
        String[] keyList	 							= new String[paramMap.size()]; 

        //엑셀 업로드 건수만큼 Loop
        for (int i = 0, n = paramMap.size(); i < n; i++) {
        	param = paramMap.get(i);  
        	uploadList.add(param);
        	keyList[i] = (String)param.get("PROCESSSEGMENTID"); //Operation PK를 배열에 담는다.
        }        
        
        //배열 키값이 존재하면 SUBSEGMENT1을 조회한다.
        if(keyList.length>0){
        	keyMap.put("KEY_LIST", keyList);
        	List<Map<String, Object>> segmentList = generalDao.addSelect(NAMESAPCE + ".selectUploadSegment", keyMap);        	

        	for (int i = 0, n = segmentList.size(); i < n; i++) {
        		Map<String, Object> segment 				= segmentList.get(i);
        		
        		for (int j = 0; j < uploadList.size(); j++) {
        			uploadMap = uploadList.get(j);
        			if(uploadMap.get("PROCESSSEGMENTID").equals(segment.get("PROCESSSEGMENTID"))){
        				uploadMap.put("SUBSEGMENTID", segment.get("SUBSEGMENTID1"));
        				uploadMap.put("VALIDSTATE", "Valid");
        				resultList.add(uploadMap);
        			}        			
        		}
        	}
        }
        Collections.sort(resultList, new MapComparator("USERSEQUENCE") );
        putDataSetMap(dto, resultList);
    }
    

     /**
    * @fn 			: checkAOI
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : checkAOI
    * @remark		: 상세설명
* @see smh.bas.service.BAS02100Service#checkAOI(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
     public void checkAOI(UiMapDto dto) throws Exception {
    	 DataSetMap ds_def					 = getParametersDataSetMap(dto, "ds_def");					//품목상세
         Map<String, Object> defParam = new HashMap<>();
         
         //Product DEF 정보
         for (int i = 0, n = ds_def.size(); i < n; i++) {
         	defParam = ds_def.get(i);
         	List<Map<String, Object>> getAoiList = generalDao.addSelect(NAMESAPCE + ".checkAOI", defParam);
         	putDataSetMap(dto, getAoiList, "output");	
         }
         
         
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

    @Override
    public void checkWeek(UiMapDto dto) throws Exception {
   	 DataSetMap ds_def					 = getParametersDataSetMap(dto, "ds_def");					//품목상세
        Map<String, Object> defParam = new HashMap<>();
        
        //Product DEF 정보
        for (int i = 0, n = ds_def.size(); i < n; i++) {
        	defParam = ds_def.get(i);
        	List<Map<String, Object>> getAoiList = generalDao.addSelect(NAMESAPCE + ".checkWeek", defParam);
        	putDataSetMap(dto, getAoiList, "output");	
        }
    }
}


class MapComparator implements Comparator<HashMap<String, Object>> {
	 
    private final String key;
    
    public MapComparator(String key) {
        this.key = key;
    }
    
    @Override
    public int compare(HashMap<String, Object> first, HashMap<String, Object> second) {
        int result = first.get(key).toString().compareTo(second.get(key).toString());
        return result;
    }
}


