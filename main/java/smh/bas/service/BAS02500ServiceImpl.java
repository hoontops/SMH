package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02500ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02500ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.13
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 13.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS02500ServiceImpl extends AbstractNbdfService implements BAS02500Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02500Dao";    

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectRcList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectRcList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 13.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectRcList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRcList", param));        
    }

    /**
    * @fn 			: selectChangeNoId
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectChangeNoId
    * @remark		: 상세설명
* @see smh.bas.service.BAS02500Service#selectChangeNoId(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectChangeNoId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> keyMap = new HashMap<String, Object>();
    	String strID = "";
    	keyMap.put("CLASSID", 	"RunningChange");		
    	keyMap.put("CREATOR", param.get("CREATOR"));
		generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", keyMap);
		strID = (String)keyMap.get("O_NEWID");
		param.put("GOVERNANCENO", strID);
		
        putDataSetMap(dto, param);
    } 
 
    /**
    * @fn 			: selectRoutingList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectRoutingList
    * @remark		: 상세설명
* @see smh.bas.service.BAS02500Service#selectRoutingList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectRoutingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        param.put("TARGET_PRODUCTDEFID", param.get("ITEMID_A"));
        param.put("TARGET_PRODUCTDEFVERSION", param.get("ITEMVERSION_A"));
        param.put("SOURCE_PRODUCTDEFID", param.get("ITEMID_B"));
        param.put("SOURCE_PRODUCTDEFVERSION", param.get("ITEMVERSION_B"));
        param.put("ISLEFT", "Y");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectRoutingListByProductCompare", param),	"output1");
        param.put("TARGET_PRODUCTDEFID", param.get("ITEMID_B"));
        param.put("TARGET_PRODUCTDEFVERSION", param.get("ITEMVERSION_B"));
        param.put("SOURCE_PRODUCTDEFID", param.get("ITEMID_A"));
        param.put("SOURCE_PRODUCTDEFVERSION", param.get("ITEMVERSION_A"));
        param.put("ISLEFT", "N");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectRoutingListByProductCompare", param),	"output2");               
    }
    
    /**
    * @fn 			: selectRoutingDetailList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectRoutingDetailList
    * @remark		: 상세설명
* @see smh.bas.service.BAS02500Service#selectRoutingDetailList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectRoutingDetailList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetBomConsumableList", param),	"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetProcessSpecList", param),			"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetBorDurableList", param),			"output3");               
    }
    
    /**
    * @fn 			: saveRunningChange
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveRunningChange
    * @remark		: 상세설명
* @see smh.bas.service.BAS02500Service#saveRunningChange(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveRunningChange(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap paramMapDel = getParametersDataSetMap(dto, "INPUT_D");
        Map<String, Object> param;
        
        int result = 0;
        //삭제
        for (int i = 0, n = paramMapDel.size(); i < n; i++) {
            param = paramMapDel.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_DELETED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".deleteGovernance", param);
            	result += generalDao.addUpdate(NAMESAPCE + ".deleteRunningChange", param);
            }
        }
        
        //저장
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            String status = (String)param.get("STATUS");
            
            if("Request".equals(status)){
            	result = getInsertGovernanceData(param);            	
            } else if("Confirm".equals(status)){
            	result = getUpdateGovernanceData(param);
            	result = getUpdateProduct(param);
            } else if("Cancel".equals(status)){
            	result = getUpdateGovernanceData(param);
            	result = getUpdateProduct(param);
            }
        }        
        putDataSetMap(dto, result);
    }
 
    private int getInsertGovernanceData(Map<String, Object> param) throws Exception{
    	String governanceNo = (String)param.get("GOVERNANCENO");
    	
    	if("".equals(governanceNo) || governanceNo == null){
    		Map<String, Object> keyMap = new HashMap<String, Object>();
    		String strID = "";
        	keyMap.put("CLASSID", 	"RunningChange");		
        	keyMap.put("CREATOR", param.get("CREATOR"));
    		generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", keyMap);
    		strID = (String)keyMap.get("O_NEWID");
    		param.put("GOVERNANCENO", strID);
    	}
    	return generalDao.addUpdate(NAMESAPCE + ".InsertGovernanceData", param); 		
	}
    
    private int getUpdateGovernanceData(Map<String, Object> param) throws Exception{
    	return generalDao.addUpdate(NAMESAPCE + ".UpdateGovernanceData", param); 		
	}
    
    private int getUpdateProduct(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String status = (String)param.get("STATUS");    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	List<Map<String, Object>> subAssembleList =  generalDao.addSelect(NAMESAPCE + ".GetSubAssemblyBOMList", param);
    	int result = 0;
    	if (subAssembleList != null && !subAssembleList.isEmpty()) {
			for (int i = 0, len = subAssembleList.size(); i < len; i++) {
				if("Confirm".equals(status)){
					 Map<String, Object> keyMap = new HashMap<String, Object>();
					 String strID = "";
					 keyMap.put("CLASSID", 	"RunningChange");		
					 keyMap.put("CREATOR", param.get("CREATOR"));
					 generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", keyMap);
					 strID = (String)keyMap.get("O_NEWID");
					 paramMap.put("GOVERNANCENO", strID);
					 paramMap.put("PRODUCTDEFID", subAssembleList.get(i).get("ASSEMBLYITEMID").toString());
					 paramMap.put("RCPRODUCTDEFID", subAssembleList.get(i).get("ASSEMBLYITEMID").toString());					 
					 paramMap.put("RCPRODUCTDEFVERSION", subAssembleList.get(i).get("ASSEMBLYITEMVERSION").toString());
					 result +=  generalDao.addUpdate(NAMESAPCE + ".InsertGovernanceData", paramMap);
		    	} else if("Cancel".equals(status)){
		    		 paramMap.put("PRODUCTDEFID", subAssembleList.get(i).get("ASSEMBLYITEMID").toString());
					 paramMap.put("RCPRODUCTDEFID", subAssembleList.get(i).get("ASSEMBLYITEMID").toString());					 
					 paramMap.put("RCPRODUCTDEFVERSION", subAssembleList.get(i).get("ASSEMBLYITEMVERSION").toString());
 		    		 result +=  generalDao.addUpdate(NAMESAPCE + ".DeleteGovernanceData", paramMap);
		    	}		
			}
    	}    	
    	return result;    	 		
	}
    
    /**
    * @fn 			: selectGovernanceData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectGovernanceData
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 14.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectGovernanceData(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectGovernanceData", param));        
    }
}