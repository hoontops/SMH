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
public class TOM00500ServiceImpl extends AbstractNbdfService implements TOM00500Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00500Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //헤더 그리드
    public void selectToolRepairSendListByToolList(UiMapDto dto) throws Exception {
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
    public void selectToolRepairLotListForRepairByToolList(UiMapDto dto) throws Exception {
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
    public void selectToolRequestListForRepairByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //수리출고 저장 (2/1)
    public void saveSendToolGrid(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT"); //Request : 수정/삭제 이벤트 처리
        Map<String, Object> reqParam;
        
        log("@@@ INPUT SZ :: "+inputMap.size());
        
        //상세 내역 처리 : 삭제 우선 처리
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_DELETED) { //수리출고 취소
            	getDetDeleteData(reqParam);            	
            }
        }
        
        //삭제 이벤트 처리 후, 신규/수정 처리를 한다.
        saveSendToolGrid2(dto);
        
        putDataSetMap(dto, result);
    }
    
    //수리출고 삭제 (2/2)
    public void saveSendToolGrid2(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT"); //Request : 수정/삭제 이벤트 처리
        Map<String, Object> reqParam;
        
        log("@@@ INPUT SZ :: "+inputMap.size());
        
        //입력받은 TOOL번호가 수리출고 가능한지 체크 한다.(사전,내역단계에서 DulableLot테이블 생성 된다)
        checkAvailableRepairDurableState(inputMap);
        
        //상세 내역 처리
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) { //수리출고 입력                
            	getDetUpdateData(reqParam, "I");
            	
            } else if (type == DataSet.ROW_TYPE_UPDATED) { //수리출고 수정
            	getDetUpdateData(reqParam, "U");
            	
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //#############################################################################################
    //수리출고 저장
    //#############################################################################################
    private void getDetUpdateData(Map<String, Object> row, String trType) throws Exception
    {    	
    	log("row :: "+row.toString());
    	String sendDate = (String)row.get("SENDDATE");
    	int sendSequence = 0; //출고순번
    	if(trType.equals("I")){
    		sendSequence = getToolSendDateSequence(sendDate);
    	}else{
    		sendSequence = NumberUtil.toInt(row.get("SENDSEQUENCE")+"");
    	}
    	log("sendSequence :: "+sendSequence);
    	
    	//=============
    	//치공구LOT 수정
    	//=============
    	Map<String, Object> durableLot = new HashMap<>();
    	//키지정
    	durableLot.put("DURABLELOTID", 		row.get("TOOLNUMBER"));
    	//데이터지정
    	durableLot.put("DURABLEDEFID", 		row.get("DURABLEDEFID"));
    	durableLot.put("DURABLEDEFVERSION", row.get("DURABLEDEFVERSION"));
    	durableLot.put("DURABLELOTNAME", 	row.get("TOOLNUMBER"));
    	durableLot.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
    	durableLot.put("PLANTID", 				row.get("PLANTID"));
    	durableLot.put("AREAID", 					row.get("SENDAREAID")); //출고작업장ID
    	durableLot.put("VENDORID", 				row.get("VENDORID"));
    	durableLot.put("ISHOLD", 					"N");
    	durableLot.put("DURABLELOTQTY", 		1);
    	durableLot.put("DURABLESTATE", 		"Repairing");
    	durableLot.put("DESCRIPTION", 			row.get("REPAIRDESCRIPTION")); //수리출고 요청사항
    	
    	//TR
    	durableLot.put("VALIDSTATE", 			"Valid");
    	durableLot.put("TXNID2", 					"ToolRepairSend"); //수리출고
    	//수리의뢰 Lot UPDATE
    	generalDao.addUpdate(NAMESAPCE + ".updateDurableLot", durableLot);
    	generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", durableLot);
    	
    	//LotHistory키를 SentLot에 저장하기 위해 TR순서 변경함(20210414)
    	String lastTxnHistory = (String)durableLot.get("LASTTXNHISTKEY");
    	log("lastTxnHistory :: "+lastTxnHistory);
    	
    	//===========
    	//수리출고 저장
    	//===========
    	Map<String, Object> repairSend = new HashMap<>();
    	//키지정
    	repairSend.put("SENDDATE", sendDate);
    	repairSend.put("SENDSEQUENCE", sendSequence);	       
    	//데이터지정
    	repairSend.put("SENDUSER", 				row.get("SENDUSERID"));
    	repairSend.put("PLANTID", 				row.get("PLANTID"));
    	repairSend.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
    	repairSend.put("REPAIRDESCRIPTION", 	row.get("REPAIRDESCRIPTION"));
    	//TR
    	repairSend.put("VALIDSTATE", 			"Valid");
    	
    	//수리출고 insert/update
    	Map<String, Object> repairSend2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsRepairSend", repairSend);
    	int COUNT = Integer.parseInt(repairSend2.get("CNT").toString());
    	if(COUNT==0){//존재하지 않으면 출고순번 채번 추가 한다.
	    	generalDao.addUpdate(NAMESAPCE + ".insertRepairSend", repairSend);
    	}else{ //존재하면 부가정보 수정 한다.
	    	generalDao.addUpdate(NAMESAPCE + ".updateRepairSend", repairSend);
    	}
		
    	//==============
    	//수리출고Lot 저장
    	//==============
    	Map<String, Object> repairSendLot = new HashMap<>();
    	//키지정
    	repairSendLot.put("DURABLELOTID", 		row.get("TOOLNUMBER"));
    	//데이터지정
    	repairSendLot.put("SENDDATE", 				sendDate);
    	repairSendLot.put("SENDSEQUENCE", 		sendSequence);
    	repairSendLot.put("VENDORID", 				row.get("VENDORID"));
    	repairSendLot.put("TOOLREPAIRTYPE", 		row.get("TOOLREPAIRTYPE"));
    	//repairSendLot.put("FINISHDATE", 		row.get("FINISHDATE"));
    	//repairSendLot.put("FINISHER", 		row.get("FINISHER"));
    	
    	//repairSendLot.put("WEIGHT", 			0);
    	//repairSendLot.put("HORIZONTAL", 		0);
    	//repairSendLot.put("VERTICAL", 			0);
    	//repairSendLot.put("HEIGHT", 			0);
    	//repairSendLot.put("TOTALPOLISHTHICKNESS",0);
    	
    	repairSendLot.put("AREAID", 					row.get("RECEIPTAREAID")); //입고작업장ID
    	//repairSendLot.put("RECEIPTDATE", 		row.get("RECEIPTDATE"));
    	//repairSendLot.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
    	repairSendLot.put("PLANTID", 				row.get("PLANTID"));
    	repairSendLot.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
    	repairSendLot.put("LOTHISTKEY", 			lastTxnHistory);
    	repairSendLot.put("REPAIRDESCRIPTION", 	row.get("REPAIRDESCRIPTION")); //요청사항
    	//TR
    	repairSendLot.put("VALIDSTATE", 			"Valid");
    	//수리출고LOT insert / update
    	Map<String, Object> repairSendLot2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsRepairSendLot", repairSendLot);
    	COUNT = Integer.parseInt(repairSendLot2.get("CNT").toString());
    	if(COUNT==0){ //존재하지 않으면 출고순번 채번 추가 한다.
    		generalDao.addUpdate(NAMESAPCE + ".insertRepairSendLot", repairSendLot);
    	}else{ //존재하면 부가정보 수정 한다.
    		generalDao.addUpdate(NAMESAPCE + ".updateRepairSendLot", repairSendLot);
    	}
    	
    	//================
    	//치공구의뢰LOT 수정
    	//================
    	Map<String, Object> requestDetailLot = new HashMap<>();
    	//키지정
    	requestDetailLot.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
    	requestDetailLot.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
    	requestDetailLot.put("REQUESTDATE", 			row.get("REQUESTDATE"));
    	requestDetailLot.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
    	requestDetailLot.put("DURABLELOTID", 			row.get("TOOLNUMBER"));
    	//데이터지정
    	requestDetailLot.put("SENDDATE", 				sendDate);
    	requestDetailLot.put("SENDSEQUENCE", 			sendSequence);
    	//TR
    	requestDetailLot.put("VALIDSTATE", 				"Valid");
    	//수리의뢰 Lot UPDATE
    	generalDao.addUpdate(NAMESAPCE + ".updateRequestDetailLot", requestDetailLot);
    }
  	
  	//#############################################################################################
  	//수리출고 취소
  	//#############################################################################################
    private void getDetDeleteData(Map<String, Object> row) throws Exception
    {
    	//2021-07-07 : 수리입고 취소시 LOTHISTORY 찾아서 삭제
    	Map<String, Object> delLotHist = new HashMap<>();
    	//키지정
    	delLotHist.put("DURABLELOTID", 			row.get("TOOLNUMBER"));
    	delLotHist.put("SENDDATE", 				row.get("SENDDATE"));
    	delLotHist.put("SENDSEQUENCE", 		row.get("SENDSEQUENCE"));
    	generalDao.addUpdate(NAMESAPCE + ".cancelDurableLotHistory", delLotHist);
    	
    	//..
    	//..
    	//..
    	
    	//===========
    	//수리출고 수정
    	//===========
    	Map<String, Object> repairSend = new HashMap<>();
    	//키지정
    	repairSend.put("SENDDATE", 				row.get("SENDDATE"));
    	repairSend.put("SENDSEQUENCE", 		row.get("SENDSEQUENCE"));
    	//데이터지정
    	//TR
    	repairSend.put("VALIDSTATE", 		"Valid");
    	//수리출고 delete
    	generalDao.addUpdate(NAMESAPCE + ".updateRepairSendCancel", repairSend); //삭제로 변경함:20210415
    	
    	//==============
    	//수리출고Lot 수정
    	//==============
    	Map<String, Object> repairSendLot = new HashMap<>();
    	//키지정
    	repairSendLot.put("DURABLELOTID", 		row.get("TOOLNUMBER"));
    	repairSendLot.put("SENDDATE", 				row.get("SENDDATE"));
    	repairSendLot.put("SENDSEQUENCE", 		row.get("SENDSEQUENCE"));
    	//데이터지정
    	//TR
    	repairSendLot.put("VALIDSTATE", 		"Valid");
    	//수리출고 delete
    	generalDao.addUpdate(NAMESAPCE + ".updateRepairSendLotCancel", repairSendLot); //삭제로 변경함:20210415
    	
    	//=============
    	//치공구Lot 수정
    	//=============
    	Map<String, Object> durableLot = new HashMap<>();
    	//키지정
    	durableLot.put("DURABLELOTID", 		row.get("TOOLNUMBER"));
    	//데이터지정
    	durableLot.put("DURABLESTATE", 		"Available");
    	durableLot.put("DURABLEDEFID", 		row.get("DURABLEDEFID"));
    	durableLot.put("DURABLEDEFVERSION", row.get("DURABLEDEFVERSION"));
    	//TR
    	durableLot.put("LASTTXNCOMMENT", 	null);
    	durableLot.put("TXNID2", 					"ToolRepairSendCancel"); //수리출고 취소
    	//치공구Lot update
    	generalDao.addUpdate(NAMESAPCE + ".updateDurableLotCancel", durableLot);
    	//generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistoryCancel", durableLot); //2021-07-07 주석처리함.(수리입고 취소 처리)
    	
    	//=============
    	//의뢰 Lot 수정
    	//=============
    	Map<String, Object> requestDetailLot = new HashMap<>();
    	//키지정
    	requestDetailLot.put("DURABLEDEFID", 		row.get("DURABLEDEFID"));
    	requestDetailLot.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
    	requestDetailLot.put("REQUESTDATE", 		row.get("REQUESTDATE"));
    	requestDetailLot.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
    	requestDetailLot.put("DURABLELOTID", 		row.get("TOOLNUMBER"));
    	//데이터지정
    	//requestDetailLot.put("SENDDATE", 			"NULL"); //쿼리에 NULL처리
    	//requestDetailLot.put("SENDSEQUENCE", 		"NULL"); //쿼리에 NULL처리
    	//TR
    	requestDetailLot.put("VALIDSTATE", 			"Valid");
    	//치공구Lot update
    	generalDao.addUpdate(NAMESAPCE + ".updateRequestDetailLotCancel", requestDetailLot);
    }
    
    //==========================
    //--------------------------
    //수리출고 공통로직
	//--------------------------
    //==========================
    
    //해당 일자의 마지막 순번을 구한다.
    private int getToolSendDateSequence(String snedDate) throws Exception {
    	Map<String, Object> param = new HashMap<>();
    	param.put("SENDDATE", snedDate);
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolSendDateSequence", param);
    	if(result==null){
    		log("::해당일자("+snedDate+")에는 SENDSEQUENCE가 존재하지 않습니다. 1 로 세팅");
    		result = new HashMap<>();
    		result.put("SENDSEQUENCE", 1); 
    	}
    	String lastSequence = (String)result.get("SENDSEQUENCE");
    	int returnSequence = NumberUtil.toInt(lastSequence);
    	log("[*** 순번 채번 ***] <"+snedDate +"> => "+returnSequence);
    	return returnSequence;
    }
    
    //수리출고가 입력가능한지 검증
  	private void checkAvailableRepairDurableState(DataSetMap inputMap) throws Exception
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
  		
  		Map<String, Object> isMakeMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsToolUpdateAndRepairLotByTool", map);
  		int sendCount = NumberUtil.toInt((String)isMakeMap.get("REPAIRCOUNT"));
  		log("sendCount :: "+sendCount+"/rowSize :: "+rowSize);
  		//sendCount가 toolRepairSendLotTable의 Count와 틀리다면 입력불가항목이 존재함.
  		if(sendCount != rowSize){
  			log("err");
  			throw new BizException("ValidateCheckUpdateToolForUpdateTool|"+String.format(": Tool No is = %s", durableLotIDs));
  		}	
  	}
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}