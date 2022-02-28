package smh.mtm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.com.StringUtils;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: MTM00300ServiceImpl.java
* @Package: smh.mtm.service
* @Project name: IFC MES시스템 구축
* @Type name: MTM00300ServiceImpl
* @Company: IFC
* @Create Date: 2021.5.7
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 7.   유창균     최초  생성
*/
@Service
public class MTM00300ServiceImpl extends AbstractNbdfService implements MTM00300Service {

    public static final String NAMESAPCE = "smh.mtm.dao.MTM00300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 자재불출요청목록
     * @remark 
     * @see smh.bas.service.MTM00300Service#selectMtmMOFRList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectMtmMtrOutFlowRequestList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMtmMtrOutFlowRequestList", param));
    }
    
    
    /**
     * @fn
     * @brief (Override method) 자재불출요청목록
     * @remark 
     * @see smh.bas.service.MTM00300Service#selectMtmMOFRList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectMaterialPopupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMaterialPopupList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 자재불출요청자재내역
     * @remark 
     * @see smh.bas.service.MTM00300Service#selectMtmMtrOutFlowRequest(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectMtmMtrOutFlowRequest(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMtmMtrOutFlowRequest", param));
    }       
    
    /**
     * @fn
     * @brief : 단가 테이블 저장
     * @remark 
     * @see smh.pcm.service.MTM00300Service#saveMtmMtrOutFlowRequest(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveMtmMtrOutFlowRequest(UiMapDto dto) throws Exception {
    	DataSetMap paramMapMtrHeader = getParametersDataSetMap(dto, "ds_mtmMtrOutFlowRequestHeader"); // ds_pcmSendLot
    	DataSetMap paramMapMtrDetail = getParametersDataSetMap(dto,"ds_mtmMtrOutFlowRequest");
		
    	Map<String, Object> mtrHeaderData = paramMapMtrHeader.get(0);
    	
    	String enterpriseId = (String)SessionUtil.getSessionValue("ENTERPRISEID");
    	String plantId = (String)SessionUtil.getSessionValue("SITETYPE");  
		String requestNo = StringUtil.Object2String(mtrHeaderData.get("REQUESTNO")).toString();
		//mtrHeaderData.put("ENTERPRISEID" , enterpriseId);
		System.out.println("ENTERPRISEID    :         "+enterpriseId    );
		System.out.println("ENTERPRISEID2   :         " + mtrHeaderData.get("ENTERPRISEID").toString());
		mtrHeaderData.put("PLANTID",plantId);
		//String flag = "";
		if(requestNo == "" || requestNo == null)
		{
			requestNo = insertMtrRequestHeader(mtrHeaderData , requestNo);
			
			for(int i=0;i < paramMapMtrDetail.size(); i++)
			{
				
				//int type = getRowType(paramMapMtrDetail);
				
				Map<String, Object> mtrRequestDetailData = paramMapMtrDetail.get(i);
				//String requestSeq = mtrRequestDetailData.get("SEQEUNCE").toString();
				//mtrRequestDetailData.put("REQUESTNO" , requestNo);
				mtrRequestDetailData.put("PLANTID" , plantId);
				mtrRequestDetailData.put("ENTERPRISEID" , enterpriseId);
				mtrRequestDetailData.put("REQUESTNO" , requestNo);
				insertMtrRequestDetail(mtrRequestDetailData);
				
				List<Map<String,Object>> insertMaterialRequestList = generalDao.addSelect(NAMESAPCE + ".selectMaterialRequestDetailtData",mtrRequestDetailData);
				Map<String,Object> erpIfMtrRequest = insertMaterialRequestList.get(0);
				insertInterfaceData(erpIfMtrRequest , DataSet.ROW_TYPE_INSERTED);
			}
			
		}
		else
		{
			Map<String, Object> condMtrDetail = new HashMap<>();
			condMtrDetail.put("REQUESTNO", requestNo);
			List<Map<String,Object>> consumableRequestDetailDataList = generalDao.addSelect(NAMESAPCE + ".selectConsumableRequestDetail",condMtrDetail);
			
			if(consumableRequestDetailDataList.size() < 1)
			{
				throw new BizException("NotExistsRequestNo" , requestNo);
			}
			
			Map<String,Object> paramRequestDetailData = new HashMap<>();
			for(int i=0; i < paramMapMtrDetail.size();i++)
			{
				Map<String, Object> mtrRequestDetailData = paramMapMtrDetail.get(i);
				
				int type= getRowType(mtrRequestDetailData);
				
				if(type == DataSet.ROW_TYPE_DELETED)
				{
					
					paramRequestDetailData.put("REQUESTNO", requestNo);
					paramRequestDetailData.put("REQUESTSEQUENCE" , mtrRequestDetailData.get("REQUESTSEQUENCE"));
					
					List<Map<String,Object>> deleteMaterialRequestList = generalDao.addSelect(NAMESAPCE + ".selectMaterialRequestDetailtData",paramRequestDetailData);
					
					Map<String,Object> erpIfMtrRequest = deleteMaterialRequestList.get(0);
					
					insertInterfaceData(erpIfMtrRequest, type );
					
					generalDao.addUpdate(NAMESAPCE + ".deleteMtrRequestDetailData", paramRequestDetailData);
				}
			}
			
			for(int i=0; i < paramMapMtrDetail.size();i++)
			{
				Map<String, Object> mtrRequestDetailData = paramMapMtrDetail.get(i);
				
				int type= getRowType(mtrRequestDetailData);
				
				if(type == DataSet.ROW_TYPE_UPDATED)
				{
					paramRequestDetailData.put("REQUESTNO", requestNo);
					paramRequestDetailData.put("REQUESTSEQUENCE" , mtrRequestDetailData.get("REQUESTSEQUENCE"));
					
					generalDao.addUpdate(NAMESAPCE + ".updateMtrRequestDetailData", mtrRequestDetailData);
					
					List<Map<String,Object>> updateMaterialRequestList = generalDao.addSelect(NAMESAPCE + ".selectMaterialRequestDetailtData",paramRequestDetailData);
					Map<String,Object> erpIfMtrRequest = updateMaterialRequestList.get(0);
					
					insertInterfaceData(erpIfMtrRequest , type);
					
				}
				else if(type == DataSet.ROW_TYPE_INSERTED)
				{
					mtrRequestDetailData.put("PLANTID" , plantId);
					mtrRequestDetailData.put("ENTERPRISEID" , enterpriseId);
					mtrRequestDetailData.put("REQUESTNO",requestNo);
					insertMtrRequestDetail(mtrRequestDetailData );
					
					List<Map<String,Object>> insertMaterialRequestList = generalDao.addSelect(NAMESAPCE + ".selectMaterialRequestDetailtData",mtrRequestDetailData);
					Map<String,Object> erpIfMtrRequest = insertMaterialRequestList.get(0);
					insertInterfaceData(erpIfMtrRequest , DataSet.ROW_TYPE_INSERTED);
					
					//insertInterfaceData(erpIfMtrRequest , type);
				}
			}
			
			
			
		}
		Map<String, Object> result = new HashMap<>();
		result.put("REQUESTNO" , requestNo);
		
		putDataSetMap(dto, result);
    }
    
    private String insertMtrRequestHeader(Map<String, Object> mtrHeaderData , String requestNo )
    		throws Exception{
    	
    	if(requestNo.isEmpty())
    	{
    		List<Map<String,Object>> RequestNoList = generalDao.addSelect(NAMESAPCE + ".selectRequestNo");
        	requestNo = RequestNoList.get(0).get("REQUESTNO").toString();
        	
    	}
    	System.out.println("ENTERPIRSEID3			:" + mtrHeaderData.get("ENTERPRISEID").toString());
    	Map<String, Object> paramMtrHeaderData = new HashMap<>();
    	paramMtrHeaderData.put("ENTERPRISEID" , mtrHeaderData.get("ENTERPRISEID"));
    	paramMtrHeaderData.put("PLANTID" , mtrHeaderData.get("PLANTID"));
    	paramMtrHeaderData.put("REQUESTNO" , requestNo);
    	paramMtrHeaderData.put("AREAID" , mtrHeaderData.get("AREAID"));
    	paramMtrHeaderData.put("PROCESSSEGMENTID" , "*");
    	paramMtrHeaderData.put("PROCESSSEGMENTVERSION" , "*");
    	//paramMtrHeaderData.put("REQUESTDATE" , mtrHeaderData.get("ENTERPRISEID"));
    	paramMtrHeaderData.put("REQUESTUSER" , mtrHeaderData.get("REQUESTUSERID"));
    	paramMtrHeaderData.put("REQUESTDEPARTMENT" , mtrHeaderData.get("REQUESTDEPARTMENT"));
    	paramMtrHeaderData.put("REQUESTTYPE" , mtrHeaderData.get("REQUESTTYPE"));
    	paramMtrHeaderData.put("DESCRIPTION" , mtrHeaderData.get("REMARK"));
    	paramMtrHeaderData.put("WAREHOUSEID", mtrHeaderData.get("WAREHOUSEID"));
    	paramMtrHeaderData.put("CUSTOMERID" , mtrHeaderData.get("CUSTOMERID"));
    	
    	generalDao.addUpdate(NAMESAPCE + ".insertMateralRequestHeaderData", paramMtrHeaderData);
    	
    	return requestNo;
    }
    
    private void insertMtrRequestDetail(Map<String, Object> mtrDetailData )
    		throws Exception{
    	
    	Map<String, Object> paramMtrDetailData = new HashMap<>();
    	paramMtrDetailData.put("REQUESTNO" , mtrDetailData.get("REQUESTNO"));
    	paramMtrDetailData.put("ENTERPRISEID", mtrDetailData.get("ENTERPRISEID"));
    	paramMtrDetailData.put("PLANTID" , mtrDetailData.get("PLANTID"));
    	paramMtrDetailData.put("REQUESTSEQUENCE" , mtrDetailData.get("REQUESTSEQUENCE"));
    	paramMtrDetailData.put("CONSUMABLEDEFID" , mtrDetailData.get("CONSUMABLEDEFID"));
    	paramMtrDetailData.put("CONSUMABLEDEFVERSION" , mtrDetailData.get("CONSUMABLEDEFVERSION"));
    	paramMtrDetailData.put("LOTID" , null);
    	paramMtrDetailData.put("REQUESTQTY" , mtrDetailData.get("REQUESTQTY"));
    	paramMtrDetailData.put("UNIT" , mtrDetailData.get("UNIT"));
    	paramMtrDetailData.put("DESCRIPTION" , mtrDetailData.get("MATREMARK"));
    	paramMtrDetailData.put("VALIDSTATE" , "Valid");
    	
    	generalDao.addUpdate(NAMESAPCE + ".insertConsumablerequestDetailData", paramMtrDetailData);
    }
    
    private void insertInterfaceData(Map<String,Object> interfaceData , int type)
    		throws Exception{
    	
    			//Map<String,Object> interfaceData = interfaceDataList.get(i);
    			Map<String,Object> erpIfData = new HashMap<>();
    			
    			erpIfData.put("ENTERPRISEID" , interfaceData.get("ENTERPRISEID"));
    			erpIfData.put("ORGANIZATION_CODE" , interfaceData.get("ORGANIZATION_CODE"));
    			erpIfData.put("DEMAND_NUM" , interfaceData.get("DEMAND_NUM"));
    			erpIfData.put("DEMAND_DATE" , interfaceData.get("DEMAND_DATE"));
    			erpIfData.put("DEMAND_TYPE" , interfaceData.get("DEMAND_TYPE"));
    			erpIfData.put("DEMAND_DEPT" , (String)SessionUtil.getSessionValue(ContextConstant.SESSION_DEPT_NM));
    			erpIfData.put("REQUEST_SUBINVENTORY_CODE" , interfaceData.get("REQUEST_SUBINVENTORY_CODE"));
    			erpIfData.put("DEMAND_USER_NAME" , (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_NM));
    			erpIfData.put("CUST_NUMBER" , interfaceData.get("CUST_NUMBER"));
    			erpIfData.put("SELL_YN" , interfaceData.get("SELL_YN"));
    			erpIfData.put("DEMAND_NUM_SEQ" , interfaceData.get("DEMAND_NUM_SEQ"));
    			erpIfData.put("ITEM_CODE" , interfaceData.get("ITEM_CODE"));
    			erpIfData.put("DEMAND_QTY" , interfaceData.get("DEMAND_QTY"));
    			erpIfData.put("DEMAND_DESCRIPTION" , interfaceData.get("DEMAND_DESCRIPTION"));
    			erpIfData.put("ORDER_FLAG", "N");
    			erpIfData.put("CREATOR" , interfaceData.get("CREATOR"));
    			erpIfData.put("CREATEDTIME" , interfaceData.get("CREATEDTIME"));
    			erpIfData.put("MODIFIER" , interfaceData.get("MODIFIER"));
    			erpIfData.put("MODIFIEDTIME" , interfaceData.get("MODIFIEDTIME"));
    			
    			if(type == DataSet.ROW_TYPE_INSERTED) {
    				erpIfData.put("IF_CRUD","C");
    			}
    			else if(type == DataSet.ROW_TYPE_DELETED) {
    				erpIfData.put("IF_CRUD","D");
    			}
    			else if(type == DataSet.ROW_TYPE_UPDATED) {
    				erpIfData.put("IF_CRUD","U");
    			}
    			
    			erpIfData.put("IF_DATE" , null);
    			erpIfData.put("IF_PROCESS_TYPE" , "N");
    			erpIfData.put("IF_PROCESS_TIME" , null);
    			erpIfData.put("IF_PROCESS_COMMENT" , null);
    			int erpSequnce = getERPSeqNextVal();
    			erpIfData.put("IF_SEQUENCE" ,erpSequnce );

    			generalDao.addUpdate(NAMESAPCE + ".insertMaterialRequestInterface", erpIfData);
   
    }
    public int getERPSeqNextVal() throws Exception 
    {
    	int seqNextVal = 0;
    	Map<String, Object> param = new HashMap<>();
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".getERPSeqNextVal", param);
    	if(result==null){
    		seqNextVal = 1;
    	}else{
    		seqNextVal = NumberUtil.toInt((String)result.get("SEQNEXTVAL"));
    	}
    	//System.out.println("seqNextVal ::                "+seqNextVal);
    	return seqNextVal;
    }
}