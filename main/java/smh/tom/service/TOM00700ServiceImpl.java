package smh.tom.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class TOM00700ServiceImpl extends AbstractNbdfService implements TOM00700Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00700Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //헤더 그리드
    public void selectReceiptToolRepairListForReceiptByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //디테일 그리드
    public void selectRepairToolResultLotListForReceiptByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //TOOL선택
    public void selectRepairToolResultListForReceiptByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //수정 입고 저장
    public void saveToolRepairReceipt(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        int receiptSequence = 0;
        String lastTxnHistory = "";
        
        //입력이 불가능한 데이터라면 해당 메소드에서 예외를 반환하여 프로세스를 종료한다.
        checkAvailableReceiptDurableState(inputMap);
        
        //TOM_TOOLREPAIRRECEIPT 테이블 저장
        //if(inputMap.size()>0){
        //	reqParam = inputMap.get(0);
        //	receiptSequence = getInsertRepairReceipt(reqParam); //입고순번 채번해서 리턴 한다.
        //}        
        //log("receiptSequence :: "+receiptSequence);
        
        //관련 테이블 row단위 저장
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
        	
        	receiptSequence = getInsertRepairReceipt(reqParam); //입고순번 채번해서 리턴 한다.
        	log("receiptSequence :: "+receiptSequence);
        	
        	int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	lastTxnHistory = getUpdateRepairSendLot(reqParam, receiptSequence); 		//CT_ToolRepairSendLot에 입고일, 입고자 지정
            	getInsertToolRepairReceiptLot(reqParam, receiptSequence, lastTxnHistory); 			//CT_ToolReceiptRepairLot에 데이터 입력
            	getUpdateRequestDetailLot(reqParam, receiptSequence); 	//CT_ToolRequestDetailLot에 입고일, 입고자 지정
            } else if (type == DataSet.ROW_TYPE_UPDATED) {            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }    
    
    //수리입고 Insert
    private int getInsertRepairReceipt(Map<String, Object> row) throws Exception
    {
        String receiptDate = (String)row.get("RECEIPTDATE");                 
        int receiptSequence = createIDToolRepairReceipt(receiptDate);
         
        Map<String, Object> toolRepairReceipt = new HashMap<>();
        //키지정
        toolRepairReceipt.put("RECEIPTDATE", 			receiptDate);
        toolRepairReceipt.put("RECEIPTSEQUENCE", 	receiptSequence);             
        //내역
        toolRepairReceipt.put("RECEIPTUSER", 			row.get("RECEIPTUSERID"));
        toolRepairReceipt.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
        toolRepairReceipt.put("PLANTID", 				row.get("PLANTID"));
        //TR                 
        toolRepairReceipt.put("VALIDSTATE", 			"Valid");	
                 
        generalDao.addUpdate(NAMESAPCE + ".insertToolRepairReceipt", toolRepairReceipt);
        
        return receiptSequence;
    }
    
    //수리출고Lot 수정
    private String getUpdateRepairSendLot(Map<String, Object> row, int receiptSequence) throws Exception
    {
    	String tempToolMakeType = (String)row.get("TOOLMAKETYPE");
    	String tempToolNumber = (String)row.get("TOOLNUMBER");
    	String tempNextDurableLotId = (String)row.get("NEXTDURABLELOTID");
    	log("=============================");
    	log("=============================");
    	log("=============================");
    	log("tempToolMakeType :: "+tempToolMakeType);
    	log(">>>>> tempToolNumber :: "+tempToolNumber);
    	log(">>>>> tempNextDurableLotId :: "+tempNextDurableLotId);
    	log("=============================");
    	log("=============================");
    	log("=============================");
    			
    	//=============
    	//치공구LOT 수정
    	//[참고] : 폐기하다(Available / Repairing / Scrapped)
    	//=============
    	Map<String, Object> durableLot = new HashMap<>();
    	//키지정
    	durableLot.put("DURABLELOTID", 		row.get("TOOLNUMBER"));
    	durableLot.put("NEXTDURABLELOTID", 	row.get("NEXTDURABLELOTID"));
    	//데이터지정
    	durableLot.put("DURABLEDEFID", 		row.get("DURABLEDEFID"));
    	durableLot.put("DURABLEDEFVERSION", row.get("DURABLEDEFVERSION"));
    	durableLot.put("DURABLELOTNAME", 	row.get("TOOLNUMBER"));
    	durableLot.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
    	durableLot.put("PLANTID", 				row.get("PLANTID"));
    	durableLot.put("AREAID", 					row.get("RECEIPTAREAID"));
    	durableLot.put("VENDORID", 				row.get("MAKEVENDORID"));
    	//#####################################################################################################################
    	if(tempToolMakeType.equals("Modify")){ //수정의 경우 이전Tool번호는 폐기
    		log(">>>>>>>>>>>>수정의 경우 lot 상태를 폐기로 변경 한다.");
	    	durableLot.put("ISHOLD", 					"Y");
	    	durableLot.put("DURABLELOTQTY", 		1);
	    	durableLot.put("DURABLESTATE", 		"Scrapped"); //폐기
    	}else{
    		durableLot.put("ISHOLD", 					"N");
	    	durableLot.put("DURABLELOTQTY", 		1);
	    	durableLot.put("DURABLESTATE", 		"Available");
    	}
    	//#####################################################################################################################
    	//TR
    	durableLot.put("VALIDSTATE", 			"Valid");
    	durableLot.put("TXNID2", 					"ToolRepairReceipt"); //수리입고
    	//수리의뢰 Lot UPDATE
    	durableLot.put("TOOLREPAIRTYPE", 					row.get("TOOLREPAIRTYPE"));	//수리/연마횟수 증가
		durableLot.put("REPAIRTRTYPE", 						row.get("REPAIRTRTYPE"));	    //1:수정출고,2:수리출고
		durableLot.put("POLISH", 								row.get("POLISH"));	    //연마여부 체크박스:0:미체크,1:체크
		durableLot.put("TOOLMAKETYPE", 					row.get("TOOLMAKETYPE"));
    	generalDao.addUpdate(NAMESAPCE + ".updateDurableLot", durableLot);
    		generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", durableLot);
    	
    	//LotHistory키를 SentLot에 저장하기 위해 TR순서 변경함(20210414)
    	String lastTxnHistory = (String)durableLot.get("LASTTXNHISTKEY");
    	log("lastTxnHistory :: "+lastTxnHistory);
    	
    	/* =============================  */
    	/* =============================  */
    	/* 수정의 경우 입고 History정보 로그로 남긴다. */
    	if(tempToolMakeType.equals("Modify")){ //수정의 경우 이전Tool번호는 폐기, 2021-06-29(사용타수/누적타수,수리/연마횟수 이관 기능 추가)
    		generalDao.addUpdate(NAMESAPCE + ".updateModifyDurableLot", durableLot);
				generalDao.addUpdate(NAMESAPCE + ".insertModifyDurableLotHistory", durableLot);
    	}
    	/* =============================  */
    	/* =============================  */
    	
    	log("SENDDATE :: "+row.get("SENDDATE"));
    	log("SENDSEQUENCE :: "+row.get("SENDSEQUENCE"));
    	log("row :: "+row.toString());
    	
        Map<String, Object> toolRepairSendLot = new HashMap<>();
        //키지정
        toolRepairSendLot.put("TOOLNUMBER", 		row.get("TOOLNUMBER"));
        toolRepairSendLot.put("SENDDATE", 				row.get("SENDDATE"));
        toolRepairSendLot.put("SENDSEQUENCE", 		row.get("SENDSEQUENCE"));        
        //내역지정
        toolRepairSendLot.put("RECEIPTDATE", 			row.get("RECEIPTDATE"));	//입고일 저장
        toolRepairSendLot.put("RECEIPTSEQUENCE", 	receiptSequence);
        //toolRepairSendLot.put("LOTHISTKEY", 			lastTxnHistory); //입고시점이기 때문에 입고lot에 저장 해야 한다. 주석처리함(2021-07-07)
        //TR     
        toolRepairSendLot.put("VALIDSTATE", 			"Valid");
                 
        generalDao.addUpdate(NAMESAPCE + ".updateRepairSendLot", toolRepairSendLot);
        
        return lastTxnHistory;
    }
    
    //수리입고Lot Insert
    private void getInsertToolRepairReceiptLot(Map<String, Object> row, int receiptSequence, String lastTxnHistory) throws Exception
    {
        Map<String, Object> toolRepairReceiptLot = new HashMap<>();
        toolRepairReceiptLot.put("RECEIPTDATE", 			row.get("RECEIPTDATE"));
        toolRepairReceiptLot.put("RECEIPTSEQUENCE", 	receiptSequence);
        toolRepairReceiptLot.put("TOOLNUMBER", 			row.get("TOOLNUMBER"));
        
        toolRepairReceiptLot.put("MAKEVENDORID", 		row.get("MAKEVENDORID"));
        toolRepairReceiptLot.put("RECEIPTAREAID", 		row.get("RECEIPTAREAID"));
        toolRepairReceiptLot.put("PLANTID", 					row.get("PLANTID"));
        toolRepairReceiptLot.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
        toolRepairReceiptLot.put("LOTHISTKEY", 				lastTxnHistory);
        toolRepairReceiptLot.put("POLISH", 					row.get("POLISH"));
                         
        toolRepairReceiptLot.put("CREATOR", 				row.get("CREATOR"));
        toolRepairReceiptLot.put("MODIFIER", 				row.get("CREATOR"));
        toolRepairReceiptLot.put("LASTTXNHISTKEY", 		row.get("LASTTXNHISTKEY"));
        toolRepairReceiptLot.put("LASTTXNID", 				"Create");
        toolRepairReceiptLot.put("LASTTXNUSER", 			row.get("CREATOR"));
        toolRepairReceiptLot.put("LASTTXNCOMMENT", 	null);
        toolRepairReceiptLot.put("VALIDSTATE", 			"Valid");	
                 
        generalDao.addUpdate(NAMESAPCE + ".insertToolRepairReceiptLot", toolRepairReceiptLot);
    }
    
    //수리의뢰Lot 수정
    private void getUpdateRequestDetailLot(Map<String, Object> row, int receiptSequence) throws Exception
    {
        Map<String, Object> toolRequestDetailLot = new HashMap<>();
        toolRequestDetailLot.put("REQUESTDATE", 			row.get("REQUESTDATE"));
        toolRequestDetailLot.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
        toolRequestDetailLot.put("TOOLNUMBER", 			row.get("TOOLNUMBER"));
        //내역지정
        toolRequestDetailLot.put("RECEIPTDATE", 		row.get("RECEIPTDATE"));
        toolRequestDetailLot.put("RECEIPTSEQUENCE", 	receiptSequence);
        //TR                 
        toolRequestDetailLot.put("VALIDSTATE", 			"Valid");
                 
        generalDao.addUpdate(NAMESAPCE + ".updateRequestDetailLot", toolRequestDetailLot);
        
        //================================
    	//건별로 Request 상태코드 변경 한다.(2021-06-22)
    	//================================
        generalDao.addUpdate(NAMESAPCE + ".updatePerRequestStatus", toolRequestDetailLot);
    }
    
    //해당 일자의 마지막 순번을 구한다.
    private int createIDToolRepairReceipt(String requestDate) throws Exception {
    	Map<String, Object> param = new HashMap<>();
    	param.put("RECEIPTDATE", requestDate);
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolResultByToolSequence", param);
    	if(result==null){
    		log("::해당일자("+requestDate+")에는 RECEIPTSEQUENCE가 존재하지 않습니다. 1 로 세팅");
    		result = new HashMap<>();
    		result.put("RECEIPTSEQUENCE", 1); 
    	}
    	String lastSequence = (String)result.get("RECEIPTSEQUENCE");
    	int returnSequence = NumberUtil.toInt(lastSequence);
    	log("[*** 입고 순번 채번 ***] <"+requestDate +"> => "+returnSequence);
    	return returnSequence;
    }
     
    //수리입고가 입력가능한지 검증
    private void checkAvailableReceiptDurableState(DataSetMap inputDetMap) throws Exception
    {
        //입력이 가능한지 검증
    	Map<String, Object> reqParam;
        String durableLotIDs = "";
        String toolNumber = "";
        
        //ToolRepairSendLot, ToolRequestDetailLot 부분 추가
        for (int i = 0, len = inputDetMap.size(); i < len; i++)
        {
        	reqParam = inputDetMap.get(i);
  			toolNumber = (String)reqParam.get("TOOLNUMBER");
  			
  			if(i<len-1)
  			{
  				durableLotIDs += reqParam.get("TOOLNUMBER")+ ",";
  			}
  			else 
  			{
  				durableLotIDs += reqParam.get("TOOLNUMBER");
  			}
        }   
             
        log("durableLotIDs :: "+durableLotIDs);  			
  		
  		Map<String, Object> map = new HashMap<>();
  		map.put("DURABLELOTIDS", durableLotIDs);
  		
  		Map<String, Object> isMakeResult = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsReceiptToolResultByToolList", map);
         
  		Integer sendCount = Integer.parseInt(isMakeResult.get("RECEIPTCOUNT").toString());
  		
  		log("sendCount :: "+sendCount);
         
        //sendCount가 toolRepairSendLotTable의 Count와 틀리다면 입력불가항목이 존재함.
  		if(sendCount != inputDetMap.size())
        {
  			throw new BizException("InValidData001|"+String.format("Durable State is Not Available : Tool No is = %s", toolNumber));
        }       
    }

    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}