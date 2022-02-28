package smh.tom.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class TOM00300ServiceImpl extends AbstractNbdfService implements TOM00300Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00300Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //헤더 그리드
    public void selectGridReceiptInput(UiMapDto dto) throws Exception {
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
    public void selectToolRequestReceipt(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //TOOL코드 조회 POPUP
    public void selectToolRequestListForReceiptByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //제작 입고 처리
    public void saveToolMakeReceipt(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto);
        Map<String, Object> reqParam;
        
        //입력받은 TOOL번호가 제작입고 가능한지 체크 한다.
        checkAvailableDurableState(inputMap);
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {          
            	//없슴
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateData(reqParam);            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	//없슴
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //===============
    //===============
    //제작 입고 취소 처리
    //===============
    //===============
    public void saveToolMakeReceiptCancel(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto);
        Map<String, Object> reqParam;
        
        //입력받은 TOOL번호가 제작입고 취소 가능한지 체크 한다.
        checkCancelDurableState(inputMap);
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	//처리 없슴
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateCancelData(reqParam);            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	//처리 없슴
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //제작의뢰 입고 Insert
  	//private void getInsertData(Map<String, Object> row) throws Exception
  	//{
  	//}
  	
    //#############################################################################################
  	//제작의뢰 [입고] 정보 수정
    //#############################################################################################
  	protected void getUpdateData(Map<String, Object> row) throws Exception
  	{	
  		Map<String, Object>	durableLot = new HashMap<>();
  		//키지정
  		durableLot.put("DURABLELOTID", 			row.get("TOOLNUMBER"));
  		//내역지정
  		durableLot.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
  		durableLot.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
  		durableLot.put("ENTERPRISEID", 				row.get("ENTERPRISEID"));
  		durableLot.put("PLANTID", 					row.get("PLANTID"));  		
  		durableLot.put("AREAID", 						row.get("AREAID"));
  		durableLot.put("VENDORID", 					row.get("VENDORID"));
  		durableLot.put("DURABLELOTNAME", 		row.get("TOOLNUMBER"));				//AS-IS : TOOLNAME으로 저장
  		durableLot.put("DURABLELOTQTY", 			1); 								//수량은 일단 1로 설정 향후 제거하거나 변경할 수 );		
  		//TR
  		durableLot.put("VALIDSTATE", 				"Valid");
  		durableLot.put("TXNID2", 						"ToolMakeReceipt"); //제작입고
		generalDao.addUpdate(NAMESAPCE + ".updateDurableLot", durableLot);
			generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", durableLot);
		//<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
  		
		//LotHistory키를 SentLot에 저장하기 위해 TR순서 변경함(20210414)
  	    String lastTxnHistory = (String)durableLot.get("LASTTXNHISTKEY");
  	    log("lastTxnHistory :: "+lastTxnHistory);
			
  		Map<String, Object> toolMakeReceipt = new HashMap<>();
  		//키지정
		toolMakeReceipt.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
		toolMakeReceipt.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
		toolMakeReceipt.put("REQUESTDATE", 			row.get("REQUESTDATE"));
		toolMakeReceipt.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
		toolMakeReceipt.put("REQUESTIDX", 			row.get("REQUESTIDX"));
		toolMakeReceipt.put("DURABLELOTID", 			row.get("TOOLNUMBER"));
		//내역지정	
		toolMakeReceipt.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
		toolMakeReceipt.put("PLANTID", 					row.get("PLANTID"));
		toolMakeReceipt.put("RECEIPTDATE", 			DateUtil.today());				//입고일자(현재일자세팅)
		toolMakeReceipt.put("RECEIPTUSER", 			row.get("CREATOR")); 		//입고자  			
		toolMakeReceipt.put("AREAID", 					row.get("AREAID"));			//입고작업장  
		toolMakeReceipt.put("WEIGHT", 					0); 						//무게
		toolMakeReceipt.put("HORIZONTAL", 			0); 						//가로
		toolMakeReceipt.put("VERTICAL", 				0); 						//세로
		toolMakeReceipt.put("HEIGHT", 					0); 						//높이
		toolMakeReceipt.put("THICKNESS", 				0); 						//두께
		toolMakeReceipt.put("LOTHISTKEY", 				lastTxnHistory); //LASTTXNHISTKEY
		//TR
		toolMakeReceipt.put("VALIDSTATE", 				"Valid");
		generalDao.addUpdate(NAMESAPCE + ".insertToolMakeReceipt", toolMakeReceipt);
		
		Map<String, Object>	toolReqDetailLot = new HashMap<>();
		//키지정
		toolReqDetailLot.put("REQUESTDATE", 			row.get("REQUESTDATE"));
		toolReqDetailLot.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
		toolReqDetailLot.put("REQUESTIDX", 				row.get("REQUESTIDX"));
		toolReqDetailLot.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
		toolReqDetailLot.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
		toolReqDetailLot.put("DURABLELOTID", 			row.get("TOOLNUMBER"));
		//내역지정
		toolReqDetailLot.put("RECEIPTDATE", 			DateUtil.today()); //입고일자
		//TR
		toolReqDetailLot.put("VALIDSTATE", 				"Valid");		
		generalDao.addUpdate(NAMESAPCE + ".updateToolReqDetailLot", toolReqDetailLot);
		
		//================================
    	//건별로 Request 상태코드 변경 한다.(2021-06-22)
    	//================================
		generalDao.addUpdate(NAMESAPCE + ".updatePerRequestStatus", toolReqDetailLot);
  	}
  	
  	//protected void getDeleteData(Map<String, Object> row) throws Exception
  	//{
  	//}
  	
  	//입력가능한지 검증 (선택건)
  	private void checkAvailableDurableState(DataSetMap inputMap) throws Exception
  	{
  		//입력이 가능한지 검증
  		Map<String, Object> reqParam;
  		String durableLotIDs = "";
  		String toolNumber = "";
  		int rowSize = inputMap.size();
  		//ToolRepairSendLot, ToolRequestDetailLot 부분 추가
  		for (int i = 0, n = rowSize; i < n; i++) {
  			reqParam = inputMap.get(i);
  			toolNumber = (String)reqParam.get("TOOLNUMBER");
  			
  			if(i<n-1)
  			{
  				durableLotIDs += toolNumber+ ",";
  			}
  			else 
  			{
  				durableLotIDs += toolNumber;
  			}
  		}	
  			
  		
  		Map<String, Object> map = new HashMap<>();
  		map.put("DURABLELOTIDS", durableLotIDs);  
  		
  		Map<String, Object> isMakeMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsToolMakeReceiptByTool", map);		
  		int sendCount = Integer.parseInt(isMakeMap.get("RECEIPTCOUNT").toString()); //제작입고 건수
  		
  		//sendCount가 toolRepairSendLotTable의 Count와 틀리다면 입력불가항목이 존재함.
  		if(sendCount != rowSize){
  			throw new BizException("InValidData001|"+String.format("Already receipted Tool No is = %s", toolNumber));
  		}		
  	}
  
  	//#############################################################################################
  	//제작의뢰 [입고 취소] 정보 수정
  	//#############################################################################################
  	protected void getUpdateCancelData(Map<String, Object> row) throws Exception
  	{	
  		Map<String, Object>	toolReqDetailLot = new HashMap<>();		
		toolReqDetailLot.put("REQUESTDATE", 			row.get("REQUESTDATE"));
		toolReqDetailLot.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
		toolReqDetailLot.put("REQUESTIDX", 				row.get("REQUESTIDX"));
		toolReqDetailLot.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
		toolReqDetailLot.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
		toolReqDetailLot.put("DURABLELOTID", 			row.get("TOOLNUMBER"));
		toolReqDetailLot.put("LOTHISTKEY", 				row.get("LOTHISTKEY")); //제작입고LOTHISTKEY
		
		//toolReqDetailLot.put("MODIFIER", 				row.get("CREATOR"));
		//toolReqDetailLot.put("LASTTXNHISTKEY", 		row.get("LASTTXNHISTKEY"));
		//toolReqDetailLot.put("LASTTXNID", 				"Update");
		//toolReqDetailLot.put("LASTTXNUSER", 			row.get("CREATOR"));
		//toolReqDetailLot.put("LASTTXNCOMMENT", 		null);
		toolReqDetailLot.put("VALIDSTATE", 				"Valid");		
		toolReqDetailLot.put("TXNID2", 					"ToolMakeReceiptCancel"); //제작입고취소
		
		//2021-07-07 : 제작입고 취소시 LOTHISTORY 찾아서 삭제
		generalDao.addUpdate(NAMESAPCE + ".cancelDurableLotHistory", toolReqDetailLot);
		
		generalDao.addUpdate(NAMESAPCE + ".deleteToolMakeReceipt", toolReqDetailLot);
		generalDao.addUpdate(NAMESAPCE + ".updateDurableLotCancel", toolReqDetailLot);
			//generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", toolReqDetailLot); //2021-07-07 주석처리함.(제작입고 취소 처리)
		generalDao.addUpdate(NAMESAPCE + ".updateToolReqDetailLotCancel", toolReqDetailLot);
		
		//========================
		//건별로 Request 상태코드 변경 한다.
		//========================
		generalDao.addUpdate(NAMESAPCE + ".updatePerRequestStatus", toolReqDetailLot);
  	}
  	
  	//취소가능한지 검증 (선택건)
  	private void checkCancelDurableState(DataSetMap inputMap) throws Exception
  	{
  		//입력이 가능한지 검증
  		Map<String, Object> reqParam;
  		String durableLotIDs = "";
  		String toolNumber = "";
  		int rowSize = inputMap.size();
  		//ToolRepairSendLot, ToolRequestDetailLot 부분 추가
  		for (int i = 0, n = rowSize; i < n; i++) {
  			reqParam = inputMap.get(i);
  			toolNumber = (String)reqParam.get("TOOLNUMBER");  			
  			if(i<n-1)
  			{
  				durableLotIDs += toolNumber+ ",";
  			}
  			else 
  			{
  				durableLotIDs += toolNumber;
  			}
  		}  			
  		
  		Map<String, Object> map = new HashMap<>();
  		map.put("DURABLELOTIDS", durableLotIDs);  
  		
  		Map<String, Object> isMakeMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsToolMakeReceiptCancelByTool", map); //입고일이 존재하는지		
  		int sendCount = Integer.parseInt(isMakeMap.get("RECEIPTCOUNT").toString()); //제작입고 건수
  		log("sendCount :: "+sendCount);
  		log("rowSize :: "+rowSize);
  		//sendCount가 toolRepairSendLotTable의 Count와 틀리다면 입력불가항목이 존재함.
  		if(sendCount != rowSize){
  			throw new BizException("InValidData001|"+String.format("Already receipted Tool No is = %s", toolNumber));
  		}		
  	}
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}