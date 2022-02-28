package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;


/**
* @file			: BAS01700ServiceImpl.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01700ServiceImpl    
* @Company		: Built1
* @Create Date	: 2021. 2. 10. 오전 11:26:13 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 10.       sungmin.choe      최초  생성
 *
*/
@Service
public class BAS01700ServiceImpl extends AbstractNbdfService implements BAS01700Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS01700Dao";

    @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 			: selectBasGovernanceList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectBasGovernanceList
    * @remark		: 상세설명
* @see smh.bas.service.BAS01700Service#selectBasGovernanceList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBasGovernanceList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasGovernanceList", param));
    }


    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
* @see smh.bas.service.BAS01700Service#saveBasGovernance(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveBasGovernance(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap paramMapDel = getParametersDataSetMap(dto, "INPUT_D");
        
        Map<String, Object> param;
        String oResultCode = "";
        String oResultMsg = "";
        
        int result = 0;
        //삭제
        for (int i = 0, n = paramMapDel.size(); i < n; i++) {
            param = paramMapDel.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_DELETED) {
            	param.put("WRK_TP", "D");
            }   
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            result += generalDao.addUpdate(NAMESAPCE + ".saveGovernance", param);
            
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
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	param.put("WRK_TP", "U");
            }    
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            result += generalDao.addUpdate(NAMESAPCE + ".saveGovernance", param);
            
            oResultCode = (String)param.get("O_RESULT_CODE");
            oResultMsg = (String)param.get("O_RESULT_MSG");
            
            if(!"S".equals(oResultCode)){
            	throw new BizException(oResultMsg);
            }
        }        
        putDataSetMap(dto, result);
    }

    /**
    * @fn 			: selectGovernanceApprovalList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectGovernanceApprovalList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 19.       sungmin.choe      최초  생성
     *
    */
    public void selectGovernanceApprovalList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> approvalList = generalDao.addSelect(NAMESAPCE + ".selectGovernanceApprovalList", param);
    	
    	if (approvalList == null || approvalList.size()<1) {
    		approvalList = generalDao.addSelect(NAMESAPCE + ".selectGovernanceNewApprovalList", param);
    	}        
        putDataSetMap(dto, approvalList);
    }
    
    /**
    * @fn 			: requestGovernance
    * @brief 		: 함수 간략한 설명 
    * @Method Name : requestGovernance
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 19.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void requestGovernance(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");        
        Map<String, Object> param;        
        int result = 0;
     
        //결재상신
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);            
        	result += getUpsertApprovalData(param);        	
        	String requestor = (String)param.get("CREATOR");
        	String reviewer = (String)param.get("REVIEWERID");
        	String approver = (String)param.get("APPROVER");
        	
        	if(!"".equals(requestor) && requestor != null){
        		param.put("SEQUENCE", 1D);
        		result += getUpsertApprovalTransactionData(param, requestor, "Requester");	
        	}
        	
        	if(!"".equals(reviewer)  && reviewer != null){
        		param.put("SEQUENCE", 2D);
        		result += getUpsertApprovalTransactionData(param, reviewer, "Reviewer");	
        	}
        	
        	if(!"".equals(approver)  && approver != null){
        		param.put("SEQUENCE", 3D);
        		result += getUpsertApprovalTransactionData(param, approver,  "Approver");	
        	}
        	
        	result += getUpdateGovernanceData(param);
        }  
        
        putDataSetMap(dto, result);
    }
    
    private int getUpsertApprovalData(Map<String, Object> param) throws Exception{
    	String isReDraft = (String)param.get("ISREDRAFT");
    	List<Map<String, Object>> approvalList = generalDao.addSelect(NAMESAPCE + ".selectGovernanceApprovalList", param);    	
    	
    	if("Y".equals(isReDraft)){	//재상신
    		if (approvalList == null) {
    			throw new BizException("InValidData001|"+String.format("ApprovalId = %s", param.get("GOVERNANCENO")));
        	}    		
    	} else {	//신규상신
    		if (approvalList != null && approvalList.size()>0) {
    			throw new BizException("InValidData002|"+String.format("ApprovalId = %s", param.get("GOVERNANCENO")));
        	}
    		param.put("VALIDSTATE", "Valid");
    	}
    	param.put("APPROVALSTATUS", "Draft");
    	
		return generalDao.addUpdate(NAMESAPCE + ".getUpsertApprovalData", param);		
	}
    
    private int getUpsertApprovalTransactionData(Map<String, Object> param, String user, String userType) throws Exception{
    	String isReDraft = (String)param.get("ISREDRAFT");
    	
    	List<Map<String, Object>> approvalList = generalDao.addSelect(NAMESAPCE + ".selectGovernanceApprovalList", param);    	
    	
    	if("Y".equals(isReDraft)){	//재상신
    		Map<String, Object> resultMap 	= null;
    		if (approvalList == null) {
    			throw new BizException("InValidData001|"+String.format("ApprovalId = %s", param.get("GOVERNANCENO")));
        	}    		
    		//재상신의 경우 Update가 아니라 신규 Insert를 위해 마지막 Sequence를 가져온다.
    		resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".getLastSequence", param);
    		int lastSeq = Integer.parseInt((String)resultMap.get("SEQ"));
    		switch(userType)
    		{
    		case "Requester":
    			param.put("SEQUENCE", 1D+lastSeq);
    			break;
    		case "Reviewer":
    			param.put("SEQUENCE", 2D+lastSeq);			
    			break;
    		case "Approver":
    			param.put("SEQUENCE", 3D+lastSeq);
    			break;
    		}    	
    		param.put("ENDDATE", null);			
    	} else {	//신규상신
    		if (approvalList != null  && approvalList.size()>0) {
    			throw new BizException("InValidData002|"+String.format("ApprovalId = %s", param.get("GOVERNANCENO")));
        	}
    		switch(userType)
    		{
    		case "Requester":
    			param.put("SEQUENCE", 1D);
    			break;
    		case "Reviewer":
    			param.put("SEQUENCE", 2D);			
    			break;
    		case "Approver":
    			param.put("SEQUENCE", 3D);
    			break;
    		}    	
    		
    		param.put("VALIDSTATE", "Valid");
    	}
    	
    	switch(userType)
		{
		case "Requester":
			param.put("RESULTS", "Draft");
			param.put("ENDDATE", "NOW");			
			break;
		case "Approver":
		case "Reviewer":
			param.put("RESULTS", null);
			param.put("ENDDATE", null);			
			break;
		}    	
    	
    	param.put("RESULTTYPE", userType);
    	param.put("DESCRIPTION", null);
    	param.put("ACTOR", user);
		return generalDao.addUpdate(NAMESAPCE + ".getUpsertApprovalTransactionData", param);	
	}
    
    private int getUpdateGovernanceData(Map<String, Object> param) throws Exception{
		List<Map<String, Object>> governanceList = generalDao.addSelect(NAMESAPCE + ".selectBasGovernanceListExists", param);
	    	
		if (governanceList == null) {
			throw new BizException("InValidData001|"+String.format("GovernanceNo = %s", param.get("GOVERNANCENO")));
		}
		
		return generalDao.addUpdate(NAMESAPCE + ".getUpdateGovernanceData", param);		
	}
 
    
    
}