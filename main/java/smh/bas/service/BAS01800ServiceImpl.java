package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;
import smh.commons.TxnHistKey;

/**
* @file			: BAS01800ServiceImpl.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01800ServiceImpl    
* @Company		: Built1
* @Create Date	: 2021. 2. 17. 오전 11:26:13 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 17.       sungmin.choe      최초  생성
 *
*/
@Service
public class BAS01800ServiceImpl extends AbstractNbdfService implements BAS01800Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS01800Dao";

    @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 			: selectBasItemMasterList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectBasItemMasterList
    * @remark		: 상세설명
* @see smh.bas.service.BAS01800Service#selectBasItemMasterList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBasItemMasterList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasItemMasterList", param));
    }


    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
* @see smh.bas.service.BAS01800Service#saveBasItemMaster(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveBasItemMaster(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap paramMapDel = getParametersDataSetMap(dto, "INPUT_D");
        
        Map<String, Object> param;
        String oResultCode = "S";
        String oResultMsg = "";
        
        int result = 0;
        //삭제
        for (int i = 0, n = paramMapDel.size(); i < n; i++) {
            param = paramMapDel.get(i);            
            param.put("WRK_TP", "D");
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            generalDao.addUpdate(NAMESAPCE + ".saveBasItemMaster", param);
            
            oResultCode = (String)param.get("O_RESULT_CODE");
            oResultMsg = (String)param.get("O_RESULT_MSG");
            
            if(!"S".equals(oResultCode)){
            	throw new BizException(oResultMsg);
            }
        }
        
        //저장
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	param.put("WRK_TP", "I");
				String strCreateID = "";
				String strCreateVersion = "";				
				String masterdataClassId = (String)param.get("MASTERDATACLASSID");
				if ("SubAssembly".equals(masterdataClassId)){
					strCreateID = (String)param.get("ITEMID");
				} else {
					strCreateID = getCreateID_Inter(param);
					strCreateVersion = getCreateVersion_Inter(param);	
				}
							
				/* Product Class Check */
				HashMap<String, Object> newParam = new HashMap<>();
				newParam.put("PRODUCTCLASSID", param.get("PRODUCTTYPE"));				
				List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProductclassList", newParam);
				if (idList.size() < 1) 
				{	//Insert
					getInsertProductclassData(param);					
				}
				
				param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());	
				getInsertItemMasterData(param, strCreateID, strCreateVersion);
				getInsertProductDefData(param, strCreateID, strCreateVersion);
				getInsertProductitemspecData(param, strCreateID, strCreateVersion);
				param.put("ITEMID", strCreateID);
				
				if(!"".equals(strCreateVersion)){
					param.put("ITEMVERSION", strCreateVersion);	
				}
				
				result += generalDao.addUpdate(NAMESAPCE + ".saveBasItemMaster", param);
				oResultCode = (String)param.get("O_RESULT_CODE");
                oResultMsg = (String)param.get("O_RESULT_MSG");
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
            	param.put("WRK_TP", "U");
            	result += generalDao.addUpdate(NAMESAPCE + ".saveBasItemMaster", param);
            	
            	oResultCode = (String)param.get("O_RESULT_CODE");
                oResultMsg = (String)param.get("O_RESULT_MSG");
            }    
               
            
            
            if(!"S".equals(oResultCode)){
            	throw new BizException(oResultMsg);
            }
        }        
        putDataSetMap(dto, result);
    }

    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
* @see smh.bas.service.BAS01800Service#copyBasItemMaster(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void copyValidationBasItemMaster(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        
        Map<String, Object> param;
        String oResultCode = "";
        String oResultMsg = "";
        
        int result = 0;
        
        //저장
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            result += generalDao.addUpdate(NAMESAPCE + ".copyValidationBasItemMaster", param);
            
            oResultCode = (String)param.get("O_RESULT_CODE");
            oResultMsg = (String)param.get("O_RESULT_MSG");
            
            if(!"S".equals(oResultCode)){
            	throw new BizException(oResultMsg);
            }
        }        
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
* @see smh.bas.service.BAS01800Service#copyBasItemMaster(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void copyBasItemMaster(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        
        Map<String, Object> param;
        String oResultCode = "";
        String oResultMsg = "";
        
        int result = 0;
        
        //저장
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);                
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            result += generalDao.addUpdate(NAMESAPCE + ".copyBasItemMaster", param);
            
            oResultCode = (String)param.get("O_RESULT_CODE");
            oResultMsg = (String)param.get("O_RESULT_MSG");
            
            if(!"S".equals(oResultCode)){
            	throw new BizException(oResultMsg);
            }
        }        
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn 			: selectCompareSemiProductByProduct
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectBasItemMasterList
    * @remark		: 상세설명
* @see smh.bas.service.BAS01800Service#selectCompareSemiProductByProduct(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCompareSemiProductByProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCompareSemiProductByProduct", param));
    }
    
    
    /**
    * @fn 			: idCreate
    * @brief 		: ITEM ID 신규채번 
    * @Method Name : idCreate
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 22.       sungmin.choe      최초  생성
     *
    */
    private String getCreateID_Inter(Map<String, Object> param) throws Exception {
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	String strRetID = "";		
		String strID = "";
		String strCustRev = "";
		String masterDataClassId = (String)param.get("MASTERDATACLASSID");
		String strLayer 	= (String)param.get("LAYER");
		String strSite = "";
		String itemId = (String)param.get("ITEMID");
		String classId = "InterflexProductDefID";
		
		switch ((String)param.get("SESSION_SITETYPE")) 
		{
		case "IFC":
			strSite = "F";
			break;
		case "CCT":
			strSite = "C";
			break;
		case "IFV":
			strSite = "V";
			break;
		default:
			break;
		}
		
		String strProductType = "";
		
		if("Product".equals(masterDataClassId)){
			strProductType = "1";
		} else if("Commodity".equals(masterDataClassId)){
			strProductType = "9";
		} else if("OperationItem".equals(masterDataClassId)){
			strProductType = "4";
		}
		if(strLayer != null){
			if(strLayer.length()==2){
				strLayer="0"+strLayer;
			}	
		}
		
		paramMap.put("CREATOR", param.get("CREATOR"));		
	
		if (itemId == null || "".equals(itemId)) {		
			paramMap.put("PRODUCTTYPE",strProductType );
			paramMap.put("LAYER", strLayer);
			paramMap.put("CLASSID", classId);			
			generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", paramMap);
			strID = (String)paramMap.get("O_NEWID");			
			strCustRev = "A1";
			strRetID = strID + strCustRev;
		} else if (itemId.length() == 8) {
			strID = itemId;			
			paramMap.put("PRODUCTDEFID", itemId);
			paramMap.put("PRODUCTDEFVERSION", strSite);
			
			List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProductDefIDList", paramMap);
			if (idList.size() < 1) 
			{
				paramMap.put("PREFIX", strID.substring(0, 3));
				paramMap.put("CLASSID", classId);
				resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectProductDefID", paramMap);				
				if (resultMap != null && resultMap.get("LASTSERIALNO").toString().compareTo(strID.substring(3)) < 0) 
				{
					paramMap.put("LASTSERIALNO", strID.substring(3));
					generalDao.addUpdate(NAMESAPCE + ".saveProductDefID", paramMap);					
				}					
				strCustRev = "A1";
			} else {				
				char charCustRev_alpha = idList.get(idList.size() -1).get("PRODUCTDEFID").toString().charAt(8);
				char charCustRev_num = idList.get(idList.size() -1).get("PRODUCTDEFID").toString().charAt(9);
				
				if (charCustRev_num == '9') 
				{
					if (charCustRev_alpha == 'Z')
						throw new BizException("ValidationCreateIDNoRevision|"+String.format("ID = %s", (String)param.get("ITEMID")));
					
					charCustRev_alpha++;
					charCustRev_num = '1';
				}
				else
					charCustRev_num++;					
				strCustRev = Character.toString(charCustRev_alpha) + Character.toString(charCustRev_num);
			}
			strRetID = strID + strCustRev;			
		} else if (itemId.length() == 10) {
			strID = itemId;
			paramMap.put("PRODUCTDEFID", itemId);
			paramMap.put("PRODUCTDEFVERSION", strSite);
			List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProductDefIDList", paramMap);
			
			if (idList.size() < 1){
				paramMap.put("PREFIX", strID.substring(0, 3));
				paramMap.put("CLASSID", classId);
				resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectProductDefID", paramMap);				
				if (resultMap != null && resultMap.get("LASTSERIALNO").toString().compareTo(strID.substring(3,8)) < 0) 
				{
					paramMap.put("LASTSERIALNO", strID.substring(3,8));
					generalDao.addUpdate(NAMESAPCE + ".saveProductDefID", paramMap);					
				}
			}
			strRetID = strID;			
		} else if(itemId.length() ==9 || itemId.length() ==13){
			strRetID = itemId;
		} else {
			throw new BizException("ValidationCreateIDArgument"+"|"+String.format("ID Argument(Not size(0 or 8 or 10) = %s", itemId));
		}			
		return strRetID;		
    }

    
    private String getCreateVersion_Inter(Map<String, Object> param) throws Exception {
		String strDefRev = "";
		String strSite = "";
		String itemVersion = (String)param.get("ITEMVERSION");
		String itemId = (String)param.get("ITEMID");
		Map<String, Object> paramMap = new HashMap<String, Object>();
    	
		switch ((String)param.get("SESSION_SITETYPE")) 
		{
		case "IFC":
			strSite = "F";
			break;
		case "CCT":
			strSite = "C";
			break;
		case "IFV":
			strSite = "V";
			break;
		default:
			break;
		}
		
		if(!EgovObjectUtil.isNull(itemVersion) && !"".equals(itemVersion) ) {
			int itemVersionLenght = itemVersion.length();
			switch(itemVersionLenght)
			{
			case 3:
				strDefRev =  itemVersion.substring(1, 3);
				break;
			default:
				strDefRev =  itemVersion;
				break;
			}
		} else {
			int itemIdLength = EgovObjectUtil.isNull(itemId) ? 0 : itemId.length();
			switch(itemIdLength)
			{
			case 10:
				paramMap.put("PRODUCTDEFID", itemId);
				paramMap.put("PRODUCTDEFVERSION", strSite);
				
				List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProductDefIDList", paramMap);
				if (idList.size() < 1) {
					strDefRev = "A1";
				} else {
					char charDefRev_alpha = idList.get(idList.size() -1).get("PRODUCTDEFVERSION").toString().charAt(1);
					char charDefRev_num = idList.get(idList.size() -1).get("PRODUCTDEFVERSION").toString().charAt(2);
					
					if (charDefRev_num == '9') {
						if (charDefRev_alpha == 'Z'){
							throw new BizException("ValidationCreateIDNoRevision|"+String.format("ID = %s", (String)param.get("ITEMID")));
						}
						charDefRev_alpha++;
						charDefRev_num = '1';
					} else {
						charDefRev_num++;
					}						
					strDefRev = Character.toString(charDefRev_alpha) + Character.toString(charDefRev_num);
				}
				break;
			default:
				strDefRev = "A1";
				break;
			}
		}
		return strSite + strDefRev;
	}
    
    private int getInsertItemMasterData(Map<String, Object> param, String strCreateID, String strCreateVersion) throws Exception{
    	String enterpriseId = (String)param.get("ENTERPRISEID");
    	String masterdataClassId = (String)param.get("MASTERDATACLASSID");
    	String itemId = (String)param.get("ITEMID");
    	String itemVersion = (String)param.get("ITEMVERSION");
    	String itemStatus =  (String)param.get("ITEMSTATUS");
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	Map<String, Object> masterMap = new HashMap<String, Object>();    	
    	paramMap.put("ENTERPRISEID", enterpriseId);
    	int itemIdLength = EgovObjectUtil.isNull(itemId) ? 0 : itemId.length();
    	
		String strID = "";
		String strVersion = "";
		
		if ("SubAssembly".equals(masterdataClassId)){
			strID = itemId;
			strVersion = itemVersion;
		}  else {			
			if ("INTERFLEX".equals(enterpriseId)) 
			{
				if(itemIdLength ==9 || itemIdLength == 13)
				{
					strID = itemId;
					strVersion = itemVersion;
				}
				else
				{
					strID = strCreateID;
					strVersion = strCreateVersion;
				}
			}
			else 
			{
				strID = strCreateID;
				strVersion = strCreateVersion;
			}
		}
		
		paramMap.put("ITEMID", strID);
		paramMap.put("ITEMVERSION", strVersion);
		
		masterMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectProductItemID", paramMap);
		
		if(masterMap  != null)
		{
			throw new BizException("InValidData002|"+String.format("Itemmaster : ITEMID = %s, ITEMVERSION = %s", strID, strVersion));
		} 
		
		resultMap.put("ENTERPRISEID", param.get("ENTERPRISEID"));
		resultMap.put("ITEMID", strID);
		resultMap.put("ITEMVERSION", strVersion);		
		resultMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		resultMap.put("MASTERDATACLASSID", param.get("MASTERDATACLASSID"));
		resultMap.put("ITEMNAME", param.get("ITEMNAME"));		
		
		if ("INTERFLEX".equals(enterpriseId)) {
			if(strID.length()==9 || strID.length()==13) {
				resultMap.put("MODELCODE", strID.substring(1, 7));				
			} else {
				resultMap.put("MODELCODE", strID.substring(1, 8));				
			}
		} else {
			resultMap.put("MODELCODE", strID.substring(0, 7));
		}
		
		resultMap.put("ITEMUOM", param.get("ITEMUOM"));
		resultMap.put("NEWREQUEST", param.get("NEWREQUEST"));
		resultMap.put("ENGINEERINGCHANGE", param.get("ENGINEERINGCHANGE"));
		resultMap.put("IMPLEMENTATIONDATE", param.get("IMPLEMENTATIONDATE"));
		resultMap.put("ITEMSTATUS", param.get("ITEMSTATUS"));
		resultMap.put("PRODUCTIONTYPE", param.get("PRODUCTIONTYPE"));
		resultMap.put("ITEMTYPE", param.get("ITEMTYPE"));
		resultMap.put("COSTCATEGORY", param.get("COSTCATEGORY"));
		resultMap.put("SALEORDERCATEGORY", param.get("SALEORDERCATEGORY"));
		resultMap.put("INVENTORYCATEGORY", param.get("INVENTORYCATEGORY"));
		resultMap.put("MAKEBUYTYPE", param.get("MAKEBUYTYPE"));
		resultMap.put("PLANNER", param.get("PLANNER"));
		resultMap.put("UNITOFPURCHASING", param.get("UNITOFPURCHASING"));
		resultMap.put("UNITOFSTOCK", param.get("UNITOFSTOCK"));
		resultMap.put("AGING", param.get("AGING"));
		resultMap.put("AGINGDAY", param.get("AGINGDAY"));
		resultMap.put("CYCLECOUNT", param.get("CYCLECOUNT"));
		resultMap.put("ENDTYPE", param.get("ENDTYPE"));
		resultMap.put("LOTCONTROL", param.get("LOTCONTROL"));
		resultMap.put("LEADTIME", param.get("LEADTIME"));
		resultMap.put("TACTTIME", param.get("TACTTIME"));
		resultMap.put("CONSUMABLETYPE", param.get("CONSUMABLETYPE"));		
		
		String validState = null;
		if(!EgovObjectUtil.isNull(itemStatus)) {
			if("Active".equals(itemStatus)){
				validState = "Valid";
			} else {
				validState = "Invalid";
			}	
		}
		
		resultMap.put("LASTTXNHISTKEY", param.get("LASTTXNHISTKEY"));
		resultMap.put("VALIDSTATE", validState);
		resultMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		resultMap.put("SPEC", param.get("SPEC"));
//		resultMap.put("LASTTXNID", "Create"); //AOP 사용으로 주석처리
		resultMap.put("CREATOR", param.get("CREATOR"));
		resultMap.put("MODIFIER", param.get("MODIFIER"));
		
		return generalDao.addUpdate(NAMESAPCE + ".insertBasItemMaster", resultMap);		
	}
    
	private int getInsertProductDefData(Map<String, Object> param, String strCreateID, String strCreateVersion) throws Exception{
		String enterpriseId = (String)param.get("ENTERPRISEID");
    	String masterdataClassId = (String)param.get("MASTERDATACLASSID");
    	String itemId = (String)param.get("ITEMID");
    	String itemVersion = (String)param.get("ITEMVERSION");
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	Map<String, Object> resultMap = new HashMap<String, Object>();    	
    	paramMap.put("ENTERPRISEID", enterpriseId);    	
    	int itemIdLength = EgovObjectUtil.isNull(itemId) ? 0 : itemId.length();
		String strID = "";
		String strVersion = "";
		
		if ("SubAssembly".equals(masterdataClassId)){
			strID = itemId;
			strVersion = itemVersion;
		} else {			
			if ("INTERFLEX".equals(enterpriseId)){
				if(itemIdLength ==9 || itemIdLength == 13){
					strID = itemId;
					strVersion = itemVersion;
				} else {
					strID = strCreateID;//strCreateID.substring(0, strCreateID.length() - 3);
					strVersion = strCreateVersion;//strCreateID.substring(strCreateID.length() - 3);
				}
			} else {
				strID = strCreateID;//strCreateID.substring(0, strCreateID.length() - 2);
				strVersion = strCreateVersion;//strCreateID.substring(strCreateID.length() - 2);
			}	
		}
				
		if (strID == null || "".equals(strID) || strVersion == null || "".equals(strVersion)) 		
		{
			throw new BizException("InValidData002|"+String.format("Productdefinition : ProduectDEFID = %s, ProduectDEFVERSION = %s", strID, strVersion));
		}
		
		paramMap.put("PRODUCTDEFID", strID);
		paramMap.put("PRODUCTDEFVERSION", strVersion);		
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProductDefIDList", paramMap);
		if (idList.size()>0) 
		{
			throw new BizException("InValidData002|"+String.format("Productdefinition : ProduectDEFID = %s, ProduectDEFVERSION = %s", strID, strVersion));
		}

		resultMap.put("ENTERPRISEID", param.get("ENTERPRISEID"));
		resultMap.put("PRODUCTDEFID", strID);
		resultMap.put("PRODUCTDEFVERSION", strVersion);
		resultMap.put("PRODUCTDEFNAME", param.get("ITEMNAME"));		
		resultMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		resultMap.put("OWNERFACTORYID", param.get("FATORYID"));
		resultMap.put("MASTERDATACLASSID", param.get("MASTERDATACLASSID"));		
		resultMap.put("LAYER", param.get("LAYER"));
		resultMap.put("CUSTOMERID", param.get("CUSTOMERID"));
		resultMap.put("PRODUCTIONTYPE", param.get("PRODUCTIONTYPE"));
		resultMap.put("ITEMUOM", param.get("ITEMUOM"));
		resultMap.put("LEADTIME", param.get("LEADTIME"));
		resultMap.put("PRODUCTCLASSID", param.get("MASTERDATACLASSID"));
		resultMap.put("PRODUCTDEFTYPE", param.get("MASTERDATACLASSID"));
		
		switch (masterdataClassId) {
		case "Commodity":		 
			if ("YOUNGPOONG".equals(enterpriseId))
			{				
				resultMap.put("PRODUCTDEFTYPE", "Product");
			}	
			break;
		case "Product":
			resultMap.put("PRODUCTSHAPE", param.get("PRODUCTTYPE"));
			resultMap.put("MATERIALCLASS", "FG");
			resultMap.put("MATERIALSEQUENCE", "00");
			break;
		case "SubAssembly":
			resultMap.put("MATERIALCLASS", param.get("CONSUMABLETYPE"));
			
			String strMaterialsequence = "";
			if ("INTERFLEX".equals(enterpriseId))		 
			{
				if (strID.length() == 18 ) {
					strMaterialsequence = strID.substring(strID.length() - 2, strID.length() - 1);
				} else {
					strMaterialsequence = strID.substring(strID.length() - 1);
				}
			} else {
				if(strID.contains("^"))
				{
					  boolean b  = Pattern.matches("^[a-zA-Z]*$", strID.substring(strID.length() - 1));					
					if(b)
					{	
						char alpa = strID.substring(strID.length() - 1).charAt(0);
						int ialpa = (int)alpa;						
						ialpa -= 55;
						strMaterialsequence =  String.valueOf(ialpa);
					} else {
						strMaterialsequence = "0" + strID.substring(strID.length() - 1);
					}
				} else {
					strMaterialsequence = strID.substring(strID.length() - 4, strID.length() - 2);
				}
			}
			resultMap.put("MATERIALSEQUENCE", strMaterialsequence);			
			break;
		default:
			break;
		}
		resultMap.put("LASTTXNHISTKEY", param.get("LASTTXNHISTKEY"));
		resultMap.put("VALIDSTATE", param.get("VALIDSTATE"));
		resultMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		resultMap.put("SPEC", param.get("SPEC"));
//		resultMap.put("LASTTXNID", "Create");  //AOP 사용으로 주석처리
		resultMap.put("CREATOR", param.get("CREATOR"));
		resultMap.put("MODIFIER", param.get("MODIFIER"));
		
		return generalDao.addUpdate(NAMESAPCE + ".insertProductDef", resultMap);
	}

	
	private int getInsertProductitemspecData(Map<String, Object> param, String strCreateID, String strCreateVersion) throws Exception 
	{
		String enterpriseId = (String)param.get("ENTERPRISEID");
    	String masterdataClassId = (String)param.get("MASTERDATACLASSID");
    	String itemId = (String)param.get("ITEMID");
    	String itemVersion = (String)param.get("ITEMVERSION");
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	Map<String, Object> resultMap = new HashMap<String, Object>();    	
    	paramMap.put("ENTERPRISEID", enterpriseId);
    	int itemIdLength = EgovObjectUtil.isNull(itemId) ? 0 : itemId.length();
    	
		String strID = "";
		String strVersion = "";
		
		if ("SubAssembly".equals(masterdataClassId)) 
		{
			strID = itemId;
			strVersion = itemVersion;
		} else {			
			if ("INTERFLEX".equals(enterpriseId))		 
			{
				if(itemIdLength ==9 || itemIdLength == 13)
				{
					strID = itemId;
					strVersion = itemVersion;
				}
				else
				{
					strID = strCreateID;//strCreateID.substring(0, strCreateID.length() - 3);
					strVersion = strCreateVersion;//strCreateID.substring(strCreateID.length() - 3);
				}
			}
			else 
			{
				strID = strCreateID;//strCreateID.substring(0, strCreateID.length() - 2);
				strVersion = strCreateVersion;//strCreateID.substring(strCreateID.length() - 2);
			}	
		}
		
		paramMap.put("ITEMID", strID);
		paramMap.put("ITEMVERSION", strVersion);
		paramMap.put("ENTERPRISEID", enterpriseId);
		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectProductSpecList", paramMap);
		if (idList.size()>0) 
		{
			throw new BizException("InValidData002|"+String.format("Productitemspec : ITEMID = %s, ITEMVERSION = %s", strID, strVersion));
		}
		
		resultMap.clear();
		resultMap.put("ENTERPRISEID", param.get("ENTERPRISEID"));
		resultMap.put("ITEMID", strID);
		resultMap.put("ITEMVERSION", strVersion);
		resultMap.put("PLANTID", param.get("SESSION_SITETYPE"));
		resultMap.put("PRODUCTTYPE", param.get("PRODUCTTYPE"));
		resultMap.put("VALIDSTATE", param.get("VALIDSTATE"));
		resultMap.put("CUSTOMERID", param.get("CUSTOMERID"));
		resultMap.put("CUSTOMERNAME", param.get("CUSTOMERNAME"));
		resultMap.put("PRODUCTRATING", param.get("PRODUCTRATING"));
		resultMap.put("JOBTYPE", param.get("JOBTYPE"));
		resultMap.put("PRODUCTIONTYPE", param.get("PRODUCTIONTYPE"));
		resultMap.put("FACTORYID", param.get("FACTORYID"));
		resultMap.put("LAYER", param.get("LAYER"));
		resultMap.put("ITEMACCOUNT", "A");
		resultMap.put("ITEMKIND", "Product");		
//		resultMap.put("LASTTXNID", "Create"); //AOP 사용으로 주석처리
		resultMap.put("LASTTXNHISTKEY", param.get("LASTTXNHISTKEY"));
		resultMap.put("CREATOR", param.get("CREATOR"));
		resultMap.put("MODIFIER", param.get("MODIFIER"));
		
		return generalDao.addUpdate(NAMESAPCE + ".insertProductSpec", resultMap);
	}

    private int getInsertProductclassData(Map<String, Object> param) throws Exception{
    	Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.clear();
		resultMap.put("PRODUCTCLASSID", param.get("PRODUCTTYPE"));
		resultMap.put("PRODUCTCLASSNAME", param.get("PRODUCTTYPE"));
		resultMap.put("PRODUCTCLASSTYPE", param.get("MASTERDATACLASSID"));
		resultMap.put("ENTERPRISEID", param.get("ENTERPRISEID"));
		resultMap.put("VALIDSTATE", "Valid");
//		resultMap.put("LASTTXNID", "Create"); //AOP 사용으로 주석처리
		resultMap.put("LASTTXNHISTKEY", param.get("LASTTXNHISTKEY"));		
		resultMap.put("CREATOR", param.get("CREATOR"));
		resultMap.put("MODIFIER", param.get("MODIFIER"));
		resultMap.put("DESCRIPTION", param.get("DESCRIPTION"));
			
		return generalDao.addUpdate(NAMESAPCE + ".insertProductClass", resultMap);		
		
	}
}