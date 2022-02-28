package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;


/**
* @file: BAS02900ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02900ServiceImpl
* @Company: Built1
* @Create Date: 2021.02.05
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.02.05   김애리     최초  생성
*/
@Service
public class BAS02900ServiceImpl extends AbstractNbdfService implements BAS02900Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02900Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) BOM 트리 정보 조회
     * @remark 
     * @see smh.bas.service.BAS02900Service#selectBasBOMList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasBOMList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasBOMList", param));
    }

    public void selectProductDEFInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDEFInfo", param),"ds_detail");
    }

    public void selectOpeRationResource(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOpeRationResource", param),"ds_operation");
    }

    public void selectResource(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        //System.out.println("------in to selectResource serviceImpl lucky");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectResource", param),"ds_resource");
    }

    public void selectResourcePopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("------in to selectResourcePopup serviceImpl lucky");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectResourcePopup", param));
    }

    public void selectDurableList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("------in to selectDurableList serviceImpl lucky");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableList", param),"ds_durable");
    }
    
    public void selectDurablePopupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("------in to selectDurablePopupList serviceImpl lucky");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurablePopupList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 
     * @remark - 
     * @see smh.bas.service.RoutingMgnt#saveBillOfDurableList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBillOfResourceList(UiMapDto dto) throws Exception {
    	System.out.println("------in to saveBillOfResourceList serviceImpl lucky");
    	
    	DataSetMap paramMap = getParametersDataSetMap(dto,"ds_resource");
        DataSetMap paramMap2 = getParametersDataSetMap(dto,"ds_sendDefault");
        Map<String, Object> param;

        Map<String, Object> oper = paramMap2.get(0); 
        int result = 0;

        for (int i = 0, len = paramMap.size(); i < len; i++) 
		{
        	param = paramMap.get(i);
        	
        	int state = getRowType(param);
			switch (state) 
			{
			case DataSet.ROW_TYPE_INSERTED:
				String degree = getInsertBillofresourceDataR(dto, param, oper);
				if(degree == "InValidData002")
				{
					throw new BizException("InValidData002"+"|" + param.get("RESOURCEID"));
				}
				result += getUpsertOperationresourceDataR(dto, param, oper,degree);
				break;
			case DataSet.ROW_TYPE_UPDATED:
				
				String seq = getBillofResourceChk(dto,param,oper);
				param.put("SEQUENCE",seq);
				
				String retData = getUpdateBillofresourceDataR(dto, param, oper);
				if(retData == "InValidData001")
				{
					throw new BizException("InValidData001"+"|" 
					+ String.format("PRODUCTDEFID = %s,PROCESSSEGMENTID =%s, RESOURCEID=%s ",
							param.get("PRODUCTDEFID"), param.get("PROCESSSEGMENTID"),
							param.get("RESOURCEID")));
					
				}
				result += getUpsertOperationresourceDataR(dto, param, oper,retData);
				break;
			case DataSet.ROW_TYPE_DELETED:
				getDeleteBillofresourceDataR(dto, param, oper);
				result += getDeleteOperationresourceDataR(dto, param, oper);
				break;
			}
        	
		}
        
        putDataSetMap(dto, result);
    }
    

	private String getBillofResourceChk(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		String strSeq = "";
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("RESOURCEID", param.get("RESOURCEID"));
		propertyMap.put("RESOURCETYPE", "Resource");
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBillofResourceChk", propertyMap);
		strSeq = list.get(0).get("SEQ").toString();
		
		return strSeq;
	}

	private String getInsertBillofresourceDataR(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		String strUser = param.get("CREATOR").toString();
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("OPERATIONID", oper.get("OPERATIONID"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("RESOURCEID", param.get("RESOURCEID"));
		propertyMap.put("RESOURCEVERSION", "*");
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectExistByBillofResource", propertyMap);
		if(list != null && list.size() > 0)
		{
			return "InValidData002";
		}
		
		String maxDegree = "1";
		
		List<Map<String, Object>> listMaxDegree = generalDao.addSelect(NAMESAPCE + ".selectMaxDegreeByBillofResource", propertyMap);
		if (listMaxDegree != null && listMaxDegree.isEmpty() == false ) {
			maxDegree = listMaxDegree.get(0).get("DEGREE").toString();
			int iDegree = (maxDegree +"")=="" ? 0 : Integer.parseInt(maxDegree);
			iDegree += 1;
			maxDegree = Integer.toString(iDegree);
		}
		
		propertyMap.put("PROCESSDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PROCESSDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", oper.get("PROCESSSEGMENTVERSION"));
		
		propertyMap.put("sequence", maxDegree);
		propertyMap.put("EQUIPMENTID", "*");
		propertyMap.put("RESOURCECLASSID", "*");
		propertyMap.put("ISPRIMARYRESOURCE", param.get("ISPRIMARY"));
		propertyMap.put("PLANTID", oper.get("PLANTID"));
		propertyMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		propertyMap.put("VALIDSTATE", oper.get("VALIDSTATE"));
		propertyMap.put("CREATOR", strUser);
		propertyMap.put("MODIFIER",  strUser);
		 
		generalDao.addInsert(NAMESAPCE + ".insertBasBillofresource", propertyMap);
		
		return maxDegree;
		
	}

    private String getUpdateBillofresourceDataR(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
    	String strUser = param.get("CREATOR").toString();
		
		Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("EQUIPMENTID", "*");
		propertyMap.put("PROCESSDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PROCESSDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", oper.get("PROCESSSEGMENTVERSION"));
		
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("RESOURCECLASSID", "*");
		propertyMap.put("RESOURCEID", param.get("RESOURCEID"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("RESOURCEVERSION", "*");
		propertyMap.put("SEQ", param.get("SEQUENCE"));
		
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBasBillofresource", propertyMap);
		if(list == null || list.size() == 0)
		{
			return "InValidData001";
		}
		
		
		propertyMap.put("ISPRIMARYRESOURCE", param.get("ISPRIMARY"));
		propertyMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		propertyMap.put("VALIDSTATE", oper.get("VALIDSTATE"));
		propertyMap.put("MODIFIER", strUser);
		
		//data.setLasttxnid(TransactionId.MODIFY);
		generalDao.update(NAMESAPCE + ".updateBasBillofresource", propertyMap);

		return "";
	}

    private int getUpsertOperationresourceDataR(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper, String degree) {
    	String strUser = param.get("CREATOR").toString();
		
		Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("OPERATIONID", oper.get("OPERATIONID"));
		propertyMap.put("RESOURCEID", param.get("RESOURCEID"));
		propertyMap.put("RESOURCEIDVERSION", "*");
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		
		List<Map<String, Object>> getDurableList = generalDao.addSelect(NAMESAPCE + ".selectExistDurableComponent", propertyMap);
		if(getDurableList != null && getDurableList.size() > 0)
		{
			String resourceID = getDurableList.get(0).get("OPERATIONRESOURCEID").toString();
			String seq = getDurableList.get(0).get("RESOURCESEQUENCE").toString();
			
			propertyMap.put("OPERATIONRESOURCEID", resourceID);
			propertyMap.put("RESOURCESEQUENCE", seq);
			
		}
		else
		{
			propertyMap.put("OPERATIONRESOURCEID", UUID.randomUUID().toString().toUpperCase());
			propertyMap.put("RESOURCESEQUENCE", degree);
		}
		
		propertyMap.put("PLANTID", oper.get("PLANTID"));
		propertyMap.put("WRAPTYPE", param.get("WRAPTYPE"));
		propertyMap.put("ISPRIMARY", param.get("ISPRIMARY"));
		propertyMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		propertyMap.put("VALIDSTATE", oper.get("VALIDSTATE"));
		propertyMap.put("MODIFIER",  strUser);
		propertyMap.put("CREATOR",  strUser);

		int result = generalDao.addUpdate(NAMESAPCE + ".saveBasOperationresource", propertyMap);
		return result;
	}
    
	private int getDeleteOperationresourceDataR(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		
		Map<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("OPERATIONID", param.get("OPERATIONID"));
		propertyMap.put("RESOURCEID", param.get("RESOURCEID"));
		propertyMap.put("RESOURCEIDVERSION", "*");
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		
		int result = generalDao.delete(NAMESAPCE + ".deleteBasOperationresource", propertyMap);
		return result;
	}
	
    private void getDeleteBillofresourceDataR(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
    	Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("EQUIPMENTID", "*");
		propertyMap.put("PROCESSDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PROCESSDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", oper.get("PROCESSSEGMENTVERSION"));
		
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("RESOURCECLASSID", "*");
		propertyMap.put("RESOURCEID", param.get("RESOURCEID"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("RESOURCEVERSION", "*");
		propertyMap.put("SEQ", param.get("SEQUENCE"));
		

		generalDao.delete(NAMESAPCE + ".deleteBasBillofresource", propertyMap);
	}

	/**
     * @fn
     * @brief (Override method) 
     * @remark - 
     * @see smh.bas.service.RoutingMgnt#saveBillOfDurableList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBillOfDurableList(UiMapDto dto) throws Exception {
    	System.out.println("------in to saveBillOfDurableList serviceImpl lucky");
    	
        DataSetMap paramMap = getParametersDataSetMap(dto,"ds_durable");
        DataSetMap paramMap2 = getParametersDataSetMap(dto,"ds_sendDefault");
        Map<String, Object> param;

        Map<String, Object> oper = paramMap2.get(0); 
        int result = 0;
        
       
        
        for (int i = 0, len = paramMap.size(); i < len; i++) 
		{
			//IDataRow dataRow = paramMap.getRow(i);
        	param = paramMap.get(i);

			//state = dataRow.getString("_STATE_");
        	
        	int state = getRowType(param);
			switch (state) 
			{
			case DataSet.ROW_TYPE_INSERTED:
				String degree = getInsertBillofresourceData(dto, param, oper);
				if(degree == "InValidData002")
				{
					throw new BizException("InValidData002"+"|" + param.get("TOOLCODE"));
				}
				result += getUpsertOperationresourceData(dto, param, oper,degree);
				
				break;
			case DataSet.ROW_TYPE_UPDATED:
				String retData = getUpdateBillofresourceData(dto, param, oper);
				if(retData == "InValidData001")
				{
					throw new BizException("InValidData001"+"|" 
					+ String.format("PRODUCTDEFID = %s,PROCESSSEGMENTID =%s, RESOURCEID=%s , RESOURCEVERSION=%s ",
							param.get("PRODUCTDEFID"), param.get("PROCESSSEGMENTID"),
							param.get("TOOLCODE"), param.get("TOOLVERSION")));
					
				}
				
				result += getUpsertOperationresourceData(dto, param, oper, "1");
				break;
			case DataSet.ROW_TYPE_DELETED:
				getDeleteBillofresourceData(dto, param, oper);
				result += getDeleteOperationresourceData(dto, param, oper);

				break;
			}

			//batch.execute();
		}
        
        //throw new BizException("Error");
        putDataSetMap(dto, result);
    }
    
	private int getUpsertOperationresourceData(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper, String degree) {
		String strUser = param.get("CREATOR").toString();
		
		Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("OPERATIONID", oper.get("OPERATIONID"));
		propertyMap.put("RESOURCEID", param.get("TOOLCODE"));
		propertyMap.put("RESOURCEIDVERSION", param.get("TOOLVERSION"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		
		// Get Max Degree
		List<Map<String, Object>> getDurableList = generalDao.addSelect(NAMESAPCE + ".selectExistDurableComponent", propertyMap);
		if(getDurableList != null && getDurableList.size() > 0)
		{
			String resourceID = getDurableList.get(0).get("OPERATIONRESOURCEID").toString();
			String seq = getDurableList.get(0).get("RESOURCESEQUENCE").toString();
			
			propertyMap.put("OPERATIONRESOURCEID", resourceID);
			propertyMap.put("RESOURCESEQUENCE", seq);
			
		}
		else
		{
			propertyMap.put("OPERATIONRESOURCEID", UUID.randomUUID().toString().toUpperCase());
			propertyMap.put("RESOURCESEQUENCE", degree);
		}
		
		propertyMap.put("PLANTID", oper.get("PLANTID"));
		propertyMap.put("WRAPTYPE", param.get("WRAPTYPE"));
		propertyMap.put("ISPRIMARY", oper.get("ISPRIMARYRESOURCE"));
		propertyMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		propertyMap.put("VALIDSTATE", oper.get("VALIDSTATE"));
		propertyMap.put("MODIFIER",  strUser);
		propertyMap.put("CREATOR",  strUser);

		int result = generalDao.addUpdate(NAMESAPCE + ".saveBasOperationresource", propertyMap);
		return result;
	}

	

	private int getDeleteOperationresourceData(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		
		Map<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("OPERATIONID", param.get("OPERATIONID"));
		propertyMap.put("RESOURCEID", param.get("TOOLCODE"));
		propertyMap.put("RESOURCEIDVERSION", param.get("TOOLVERSION"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		
		int result = generalDao.delete(NAMESAPCE + ".deleteBasOperationresource", propertyMap);
		return result;
	}
	
	private String getInsertBillofresourceData(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		
		String strUser = param.get("CREATOR").toString();
		
		Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
		propertyMap.put("OPERATIONID", oper.get("OPERATIONID"));
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("RESOURCEID", param.get("TOOLCODE"));
		propertyMap.put("RESOURCEVERSION", param.get("TOOLVERSION"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectExistByBillofResource", propertyMap);
		if(list != null && list.size() > 0)
		{
			return "InValidData002";
		}
		
		String maxDegree = "1";
//		
//		propertyMap = new HashMap<>();
//		propertyMap.put("ENTERPRISEID", oper.get("ENTERPRISEID"));
//		propertyMap.put("OPERATIONID", oper.get("OPERATIONID"));
//		propertyMap.put("PRODUCTDEFID", param.get("PRODUCTDEFID"));
//		propertyMap.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));

		List<Map<String, Object>> listMaxDegree = generalDao.addSelect(NAMESAPCE + ".selectMaxDegreeByBillofResource", propertyMap);
		if (listMaxDegree != null && listMaxDegree.isEmpty() == false ) {
			maxDegree = listMaxDegree.get(0).get("DEGREE").toString();
			int iDegree = (maxDegree +"")=="" ? 0 : Integer.parseInt(maxDegree);
			iDegree += 1;
			maxDegree = Integer.toString(iDegree);
		}
		
		
		propertyMap.put("PROCESSDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PROCESSDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", oper.get("PROCESSSEGMENTVERSION"));
		
		propertyMap.put("sequence", maxDegree);
		propertyMap.put("EQUIPMENTID", "*");
		propertyMap.put("RESOURCECLASSID", "*");
		propertyMap.put("ISPRIMARYRESOURCE", oper.get("ISPRIMARYRESOURCE"));
		propertyMap.put("PLANTID", oper.get("PLANTID"));
		propertyMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		propertyMap.put("VALIDSTATE", oper.get("VALIDSTATE"));
		propertyMap.put("CREATOR", strUser);
		propertyMap.put("MODIFIER",  strUser);
		 
		generalDao.addInsert(NAMESAPCE + ".insertBasBillofresource", propertyMap);
		
		return maxDegree;
	}
	

	private String getUpdateBillofresourceData(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		
		String strUser = param.get("CREATOR").toString();
		
		Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("EQUIPMENTID", "*");
		propertyMap.put("PROCESSDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PROCESSDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", oper.get("PROCESSSEGMENTVERSION"));
		
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("RESOURCECLASSID", param.get("RESOURCECLASSID"));
		propertyMap.put("RESOURCEID", param.get("TOOLCODE"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("RESOURCEVERSION", param.get("TOOLVERSION"));
		propertyMap.put("SEQ", param.get("SEQUENCE"));
		
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBasBillofresource", propertyMap);
		if(list == null || list.size() == 0)
		{
			return "InValidData001";
		}
		
		propertyMap.put("ISPRIMARYRESOURCE","Y");
		propertyMap.put("DESCRIPTION", param.get("DESCRIPTION"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		propertyMap.put("VALIDSTATE", oper.get("VALIDSTATE"));
		propertyMap.put("MODIFIER", strUser);
		
		//data.setLasttxnid(TransactionId.MODIFY);
		generalDao.update(NAMESAPCE + ".updateBasBillofresource", param);
		
		return "";
	}

	private void getDeleteBillofresourceData(UiMapDto dto, Map<String, Object> param, Map<String, Object> oper) {
		Map<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("EQUIPMENTID", "*");
		propertyMap.put("PROCESSDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PROCESSDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", oper.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", oper.get("PROCESSSEGMENTVERSION"));
		
		propertyMap.put("PRODUCTDEFID", oper.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", oper.get("PRODUCTDEFVERSION"));
		propertyMap.put("RESOURCECLASSID", param.get("RESOURCECLASSID"));
		propertyMap.put("RESOURCEID", param.get("TOOLCODE"));
		propertyMap.put("RESOURCETYPE", oper.get("RESOURCETYPE"));
		propertyMap.put("RESOURCEVERSION", param.get("TOOLVERSION"));
		propertyMap.put("SEQ", param.get("SEQUENCE"));
		

		generalDao.delete(NAMESAPCE + ".deleteBasBillofresource", propertyMap);

	}
	
}