package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02400ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02400ServiceImpl
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
public class BAS02400ServiceImpl extends AbstractNbdfService implements BAS02400Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02400Dao";
    public static final String NAMESAPCE_COM = "smh.bas.dao.BASCommonDao";

    @Autowired
    private GeneralDao generalDao;

 
    /**
    * @fn 			: selectSaleOrderApprovalSearch
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectSaleOrderApprovalSearch
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
    public void selectSaleOrderApprovalSearch(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSaleOrderApprovalSearch", param) , "output1");        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemVersionList", param), "output2");
    }
    
    /**
    * @fn 			: selectCustomQuery
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 1.       sungmin.choe      최초  생성
     *
    */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramArgs = dto.getInVariableMap();        
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId) && sqlId != null){
        	//Arguments를 Param에 추가
        	for (Map.Entry<String, Object> entry : paramArgs.entrySet()) {        	    
        	    param.put(entry.getKey(), entry.getValue());
        	}
        	
        	//추가 배열파라미터가 존재하면 배열형태로 param에 바인딩
        	String addParam = (String)param.get("ADD_PARAM");
        	if(!"".equals(addParam) && addParam != null){
        		param.put("ADD_LIST", addParam.split("\\|"));
        	}
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
    * @fn 			: saveSalesOrderApproval
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveSalesOrderApproval
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 2.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void saveSalesOrderApproval(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;        
        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if(type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".saveSalesOrderApproval", param);
            } 
        }        
        putDataSetMap(dto, result);
    }
    
    private int saveSalesApproval(DataSetMap paramMap, String action ) throws Exception{
    	Map<String, Object> param;
    	int result = 0;
    	for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
        	String itemID			= (String)param.get("ITEMID");
        	String itemVersion	= (String)param.get("ITEMVERSION");            	
        	String jobType		= (String)param.get("JOBTYPE");
        	String invalidCheck = "";
        	
        	param.put("FORAPPROVAL", "Approval".equals(action) ? "Y" :  "N");
        	result += generalDao.addUpdate(NAMESAPCE + ".saveSalesOrderApproval", param);
        	
        	if("Approval".equals(action)){
            	//1. 유효일자 체크
            	Map<String, Object> resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".GetCheckInvalidation", param);
            	if(resultMap!=null){
            		invalidCheck = (String)resultMap.get("INVALIDCHECK");
            		if("N".equals(invalidCheck)){
            			throw new BizException("OverInvalidateDate|"+String.format("itemID = %s", itemID));
            		}
            	}
            	
            	//2. 모델등록 체크
        		//작업구분이 '신규' 또는 '변경'인 수주사양 중 모델등록 & 승인에서 승인된 건만 결재 가능합니다. 결재 불가능 품목 = {0}
        		if(!"Same".equals(jobType)){
	            	List<Map<String, Object>> getGovernanceList = generalDao.addSelect(NAMESAPCE + ".GetRoutingInspectionItemList", param);            	
	            	if (getGovernanceList == null || getGovernanceList.size()<1) {
	            		throw new BizException("NOTAPPROVALPRODUCT|"+String.format("itemID = %s, itemVersion= %s", itemID, itemVersion));
	            	}
        		}
//                	//3. 수주량 체크            	
//                	Map<String, Object> checkMap = generalDao.addSelectOneMap(NAMESAPCE + ".GetCheckErpQty", param);
//                	
//                	if(checkMap!=null){
//                		int val1 = (int)checkMap.get("VAL1");
//                		int val2 = (int)checkMap.get("VAL2");
//                		//수주량과 ERP수주량이 달라 승인처리 불가
//                		if(val1 != val2){
//                			throw new BizException("NOTAPPROVALPRODUCT|"+String.format("SALESORDER QTY = %i, ERP QTY= %s", val1, val2));	
//                		}
//                	}            		
        		result += generalDao.addUpdate(NAMESAPCE + ".approvalSalesOrder", param);
        	} else {
        		//1. LOT 투입 체크
            	Map<String, Object> resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".GetProductionOrderChk", param);
            	if(resultMap!=null){
            		throw new BizException("ISLOTCREATE|"+String.format("itemID = %s", itemID));
            	}
            	result += generalDao.addUpdate(NAMESAPCE + ".cancelSalesOrder", param);
        	}            	
        } 
		
    	return result;
	}
    
    /**
    * @fn 			: approvalSalesOrderApproval
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : approvalSalesOrderApproval
    * @remark		: 상세설명
* @see smh.bas.service.BAS02400Service#approvalSalesOrderApproval(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveApprovalSalesOrderApproval(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        int result = saveSalesApproval(paramMap, "Approval");
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn 			: cancelSalesOrderApproval
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : cancelSalesOrderApproval
    * @remark		: 상세설명
* @see smh.bas.service.BAS02400Service#cancelSalesOrderApproval(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveCancelSalesOrderApproval(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        int result = saveSalesApproval(paramMap, "Cancel");
        putDataSetMap(dto, result);
    }
}