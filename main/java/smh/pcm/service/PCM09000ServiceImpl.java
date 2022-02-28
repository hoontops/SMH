package smh.pcm.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.com.StringUtils;

@Service
public class PCM09000ServiceImpl extends AbstractNbdfService implements PCM09000Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM09000Dao";
    public static final String NAMESAPCE2 = "smh.pcm.dao.PCM04100Dao";

    @Autowired
    private GeneralDao generalDao;

    public void selectLotListWipByProcessSegList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListWipByProcessSegList", param));
    }
    
    public void selectConsumListOfBomList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumListOfBomList", param));
    }
    
    public void selectConsumListOfBomTableMake(UiMapDto dto) throws Exception {
    	String uuid = UUID.randomUUID().toString();
    	
    	Map<String, Object> param = getParametersMap(dto);
    	param.put("P_UUID", uuid);
    	generalDao.addUpdate(NAMESAPCE + ".insertConsumListOfBomTableMake", param); //내역출력
    	generalDao.addUpdate(NAMESAPCE + ".insertConsumListOfBomTableMake2", param); //9칸 대비 빈칸 생성
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumListOfBomTableMake", param)); //UUID로 내역테이블 추가(INSERT) 한 후 UUID리턴
    }
    
    public void selectLotListByRequestList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListByRequestList", param));
    }
    public void selectLotListByRequestList2(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListByRequestList2", param));
    }
  	
    public void saveInputLot(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
    	DataSetMap inputMap2 = getParametersDataSetMap(dto, "INPUT2");
    	DataSetMap inputMap3 = getParametersDataSetMap(dto, "INPUT3");
    	DataSetMap inputMap4 = getParametersDataSetMap(dto, "INPUT4");
        Map<String, Object> reqParam;
        
        String enterpriseId = (String)SessionUtil.getSessionValue("ENTERPRISEID");
        String plantId = (String)SessionUtil.getSessionValue("SITETYPE");        
        String areaId = "";
        log("enterpriseId :: "+enterpriseId);
        log("plantId :: "+plantId);
        
        //자재불출요청 번호 생성
        String requestNo = createIdSeq("");
        log("requestNo :: "+requestNo);
        
        log("---sz---"+inputMap.size());
        
        //DETAIL INSERT
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
            
            reqParam.put("REQUESTNO", requestNo);
            reqParam.put("ENTERPRISEID", enterpriseId);
            reqParam.put("PLANTID", plantId);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	log("---1---");
            	getConsumableRequestDetailUpdateData(requestNo, reqParam, i);
            	log("---2---");
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        log("---3---");
        
        //REQUEST INSERT
        for (int i = 0, n = inputMap4.size(); i < n; i++) {
        	reqParam = inputMap4.get(i);
        	
        	reqParam.put("REQUESTNO", requestNo);
            reqParam.put("ENTERPRISEID", enterpriseId);
            reqParam.put("PLANTID", plantId);
            
        	//if(i==0){ //첫번째ROW처리
        		log("---4---");
        		areaId = (String)reqParam.get("AREAID");
        		getConsumableRequestData(reqParam, "");
        	//}
        }        
        
        log("---5---");
        
        //ERP INSERT
        int seqNextVal = 0;
        for (int i = 0, n = inputMap2.size(); i < n; i++) {
        	reqParam = inputMap2.get(i);
        	
        	//ERP I/F 시퀀스 채번
        	seqNextVal = getERPSeqNextVal();
            
        	reqParam.put("DEMANDNUMSEQ", (i+1));
            reqParam.put("REQUESTNO", requestNo);
            reqParam.put("ENTERPRISEID", enterpriseId);
            reqParam.put("PLANTID", plantId);
            reqParam.put("AREAID", areaId);
            reqParam.put("SEQNEXTVAL", seqNextVal);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	log("---6---");
            	erpIFData(reqParam, requestNo, i);            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        log("---7---");        
                
        putDataSetMap(dto, result);
    }
     
    /************************************************************************************************
     * CONSUMABLERQUESTDETAIL 처리
     ************************************************************************************************ */
    private void getConsumableRequestDetailUpdateData(String requestNo, Map<String, Object> row, int sequnce) throws Exception
    {
        String lotId = (String)row.get("LOTID");
         
        Map<String, Object> lotData = new HashMap<>();
        lotData.put("LOTID", lotId);
        
        Map<String, Object> lotData2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectLotInfo", lotData);
         
        /**********************************************
         * LOT VALIDATION
         **********************************************/
        if(lotData2 == null)
        {
            //해당 Lot이 존재하지 않습니다.
        	throw new BizException("NotExistLot|"+String.format("LOT ID : %s", lotId));
        }
        /*
        if(!lotData2.get("LOTSTATE").equals("InProduction")){
             
            //해당 Lot이 InProduction 상태가 아닙니다.
        	throw new BizException("ValidLotState|"+String.format("LOT ID %s", lotId+" InProduction"));   
        }
        if(lotData2.get("ISHOLD").equals("Y")){
             
            //해당 Lot이 Hold 상태입니다.
        	throw new BizException("InHoldState|"+String.format("LOT ID %s", lotId));
        }
        if(lotData2.get("ISLOCKING").equals("Y")){
             
            //해당 Lot이 Locking 상태입니다.
        	throw new BizException("InLockingState|"+String.format("LOT ID %s", lotId));
        }
        
        log("---detail save...#1");
        
        // 사용자별 작업장 통제
        if(!isAreaInAuthority((String)lotData2.get("AREAID"), true, lotData2)) {
            // 해당 작업장에 대한 권한이 없습니다. {0}
        	throw new BizException("HasNoAuthorityOfArea|"+String.format("LotId=%s, AreaId=%s", lotId, lotData2.get("AREAID")));
        }
        */
        log("---detail save...#2");
        
        Map<String, Object> consumablerequestdetail = new HashMap<>();		
        consumablerequestdetail.put("ENTERPRISEID", 				row.get("ENTERPRISEID"));
        consumablerequestdetail.put("PLANTID", 					row.get("PLANTID"));
        consumablerequestdetail.put("REQUESTNO", 				row.get("REQUESTNO"));
        consumablerequestdetail.put("REQUESTSEQUENCE",		sequnce+1);
        
        consumablerequestdetail.put("LOTID", 						row.get("LOTID"));
        consumablerequestdetail.put("MATERIALDEFID", 			row.get("MATERIALDEFID"));
        consumablerequestdetail.put("MATERIALDEFVERSION", 	row.get("MATERIALDEFVERSION"));
        consumablerequestdetail.put("CHARGEQTY", 				row.get("CHARGEQTY"));
        consumablerequestdetail.put("UNIT", 						row.get("UNIT"));
        consumablerequestdetail.put("DESCRIPTION", 				row.get("MATERIALDEFNAME"));
        
        generalDao.addUpdate(NAMESAPCE + ".insertConsumablerequestdetail", consumablerequestdetail);
    }
    
    /************************************************************************************************
     * CONSUMABLERQUEST 처리
     ************************************************************************************************ */
    private void getConsumableRequestData(Map<String, Object> row, String requestNo) throws Exception
    {   
        // 사용자별 작업장 통제
        if(!isAreaInAuthority((String)row.get("AREAID"), true, row)) {
            // 해당 작업장에 대한 권한이 없습니다. {0}
        	throw new BizException("HasNoAuthorityOfArea|"+String.format("AreaId=%s", row.get("AREAID")));
        }
        
        Map<String, Object> consumablerequest = new HashMap<>();		
        consumablerequest.put("ENTERPRISEID", 					row.get("ENTERPRISEID"));
        consumablerequest.put("PLANTID", 							row.get("PLANTID"));
        consumablerequest.put("REQUESTNO", 						row.get("REQUESTNO"));
        
        consumablerequest.put("AREAID", 							row.get("AREAID"));
        consumablerequest.put("PROCESSSEGMENTID", 			row.get("PROCESSSEGMENTID"));
        consumablerequest.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
        consumablerequest.put("REQUESTDATE", 					new Date());
        consumablerequest.put("REQUESTUSER", 					row.get("CREATOR"));
        consumablerequest.put("REQUESTTYPE", 					"RQ0000");
        consumablerequest.put("DESCRIPTION", 					"");
        consumablerequest.put("WAREHOUSEID", 					row.get("AREAID"));
        
        consumablerequest.put("REQUESTDEPARTMENT",			(String)SessionUtil.getSessionValue(ContextConstant.SESSION_DEPT_CD)); //사용자의부서
        consumablerequest.put("VALIDSTATE", 						"Valid");
        generalDao.addUpdate(NAMESAPCE + ".insertConsumableRequestData", consumablerequest);
    }
    
    /************************************************************************************************
     * ERP I/F
     ************************************************************************************************ */
    private void erpIFData(Map<String, Object> row, String requestNo, int sequnce) throws Exception
    {  
        Map<String, Object> erpIF = new HashMap<>();		
        erpIF.put("ENTERPRISEID", 					row.get("ENTERPRISEID"));
        erpIF.put("PLANTID", 							row.get("PLANTID"));
        
        erpIF.put("REQUESTNO", 						row.get("REQUESTNO"));
        erpIF.put("REQUESTDATE", 					new Date());
        
        erpIF.put("REQUESTDEPARTMENT",			(String)SessionUtil.getSessionValue(ContextConstant.SESSION_DEPT_NM)); //사용자의부서
        erpIF.put("AREAID", 							row.get("AREAID"));
        erpIF.put("REQUESTUSER", 					(String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_NM)); //사용자명
        
        erpIF.put("DEMANDNUMSEQ",				row.get("DEMANDNUMSEQ"));
        erpIF.put("CONSUMABLEDEFID", 				row.get("CONSUMABLEDEFID"));
        erpIF.put("REQUESTQTY", 						row.get("QTY"));
        erpIF.put("DESCRIPTION", 						"");	//청구근거(ITEM=1 LOT=23), ITEM:모품목수량, LOT:작업지시수
        erpIF.put("SEQNEXTVAL", 						row.get("SEQNEXTVAL"));
        
        String materialType = StringUtil.Object2String(row.get("MATERIALTYPE")).toString();
        
        if(materialType.equals("Consumable")){ //반제품은 ERP전송 불가
        	generalDao.addUpdate(NAMESAPCE + ".insertERPIFData", erpIF);
        }else{
        	log("skip :: 사유 :: 반제품은 erp 전송 불가");
        }
    }
    
    /****************************************************************************************************************
	 * 작업장이 TxnInfo.getTxnUser()에게 허용되었는지 여부를 반환한다
	 * @param areaId 작업장 ID
	 * @param isModify Y=등록권한, N=전체
	 * @throws Throwable
	 ****************************************************************************************************************/
	public boolean isAreaInAuthority(String areaId, boolean isModify, Map<String, Object> param) throws Exception {
		log("isAreaInAuthority :: areaId :: "+areaId);
		param.put("ISMODIFY", isModify ? "Y" : "N");
		param.put("SESSION_USER_ID", SessionUtil.getSessionValue("USER_ID"));
		param.put("SESSION_LANGUAGETYPE", SessionUtil.getSessionValue("LANGUAGETYPE"));
		param.put("AREA",areaId);
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE2 + ".GetAreaListByAuthority", param);
		for(int i=0; i<result.size(); i++){
			log("작업장 :: "+result.get(i).get("AREAID"));
			if(result.get(i).get("AREAID").equals(areaId)) {
				log("return true");
				return true;
			}
		}
		log("return false");
		return false;
	}
     
    /************************************************************************************************
     * 자재불출요청번호 생성(년월일+4자리순번)
     *************************************************************************************************/
    public String createIdSeq(String plantId) throws Exception 
    {
    	String returnSequence = "";
    	Map<String, Object> param = new HashMap<>();
    	param.put("PLANTID", plantId);
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".createIdSeq", param);
    	if(result==null){
    		returnSequence = "1";
    	}else{
    		returnSequence = (String)result.get("REQUESTSEQUENCE");
    	}
    	return returnSequence;
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
    	log("seqNextVal :: "+seqNextVal);
    	return seqNextVal;
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }

}