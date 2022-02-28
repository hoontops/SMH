package smh.tom.service;

import java.util.HashMap;
import java.util.List;
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
public class TOM00200ServiceImpl extends AbstractNbdfService implements TOM00200Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00200Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //헤더 그리드
    public void selectRequestToolMakingRegister(UiMapDto dto) throws Exception {
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
    public void selectRequestToolMakingRegisterDetail(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId); 
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //의뢰Lot 그리드
    public void selectRequestToolMakingRegisterDetailSub(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId); 
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /* ============================================================================================================================================ */
    /* ============================================================================================================================================ */
    /*												TOOL REQUEST DETAIL 정보  저장																	  	*/
    /*	기존저장로직 : DataTable resultTable = this.ExecuteRule<DataTable>("ToolRequestDetail", toolRequestSet);										*/
    /* ============================================================================================================================================ */
    /* ============================================================================================================================================ */
    public void saveToolRequestDetail(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT"); //하단왼쪽Grid(치공구내역) : 수정 이벤트 처리
        DataSetMap inputSubMap = getParametersDataSetMap(dto, "INPUT_SUB"); //의뢰Lot Detail : 삭제 처리
        Map<String, Object> reqParam;
        
        int result = 0;        
        log("INPUT SZ :: "+inputMap.size());
        log("INPUT_SUB SZ :: "+inputSubMap.size());
        
        //=============
        //=============
        //내역 등록
        //=============
        //=============
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateToolRequestDetailData(reqParam);            	
            }
        }
        
        //=============
        //=============
        //Detail lot 삭제 처리
        //=============
        //=============
        for (int i = 0, n = inputSubMap.size(); i < n; i++) {
        	reqParam = inputSubMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_DELETED) {
            	getDeleteToolRequestDetailLotData(reqParam);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //==========
    //==========
    //내역 등록 취소 :: 그리드 상단 Request 기준으로 내역등록 취소 처리를 한다. :: Search DS 에 보내므로 INSERT 이벤트 이다.
    //==========
    //==========
    public void saveRequestCancel(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	getUpdateRequestCancel(reqParam);           	
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //==========================
    //--------------------------*
    //수정 저장
    //--------------------------*
    //==========================
	private void getUpdateToolRequestDetailData(Map<String, Object> row) throws Exception 
	{		
		log("row :: "+row.toString());
		//키지정		
		String toolMakeType = (String)row.get("TOOLMAKETYPE");
		String requestDate = (String)row.get("REQUESTDATE");
		int qty = NumberUtil.toInt(row.get("QTY")+""); //의뢰수량을 읽는다.
		log("의뢰수량 :: "+qty);
		
		Map<String, Object> toolReq = new HashMap<>();
		toolReq.put("REQUESTDATE", 		requestDate);
		toolReq.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
				
		//결재요청상태는 변경할 수 없다.
		Map<String, Object> toolReq2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolReq", toolReq);
		log("TOOLPROGRESSSTATUS :: "+toolReq2.get("TOOLPROGRESSSTATUS"));
		if (toolReq2.get("TOOLPROGRESSSTATUS").equals("Request"))
		{
			throw new BizException("ApprovalRequestStatusSave|"+String.format("Tool Progress Status is Request. don't save this! = %s", row.get("REQUESTDATE") + ", sequence = " + row.get("REQUESTSEQUENCE")));
		}
		
		//###############
		//등록 상태로 변경한다.(상태변경)
		//###############
		toolReq.put("TOOLPROGRESSSTATUS", 	"DetailRegist");
		toolReq.put("VALIDSTATE", 				"Valid");		
		generalDao.addUpdate(NAMESAPCE + ".updateToolReqStatus", toolReq);
				
		//==================
		//Detail상세정보입력(detail,치공구정의)
		//==================
		getUpdateData2(row);
		
		//키지정
		Map<String, Object>	toolReqDetailLot = new HashMap<>();
		toolReqDetailLot.put("DURABLEDEFID", 			row.get("TOOLCODE"));
		toolReqDetailLot.put("DURABLEDEFVERSION", 	row.get("TOOLVERSION"));
		toolReqDetailLot.put("REQUESTDATE", 			requestDate);
		toolReqDetailLot.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
		toolReqDetailLot.put("REQUESTIDX", 				row.get("REQUESTIDX"));
		//내역지정
		toolReqDetailLot.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
		toolReqDetailLot.put("PLANTID", 					row.get("PLANTID"));		
		toolReqDetailLot.put("VENDORID", 				row.get("VENDORID")); 		//DurableLot저장용
		toolReqDetailLot.put("RECEIPTAREAID", 			row.get("RECEIPTAREAID"));	//DurableLot저장용
		toolReqDetailLot.put("USEDLIMIT", 				row.get("USEDLIMIT"));			//보증타수
		toolReqDetailLot.put("CLEANLIMIT", 				row.get("CLEANLIMIT"));		//연마기준타수		
		//TR
		toolReqDetailLot.put("VALIDSTATE", 				"Valid");
		
		String tempDurableLotID = "";
		String nextDurableLotID = "";
		log("### toolMakeType :: "+toolMakeType);
		if(toolMakeType.equals("Add")||toolMakeType.equals("New")){ //신규/증작의 경우
			List<Map<String, Object>>toolReqDetail2 = generalDao.addSelect(NAMESAPCE + ".existLot", toolReqDetailLot); //해당치공구ID가 TOM_DURABLELOT에 존재여부 파악 (의뢰상세의 4개컬럼의 Tool코드가 Lot에 존재여부 파악)
			//********************************************************************************************************************
			if(toolReqDetail2.size()==0){ //존재하지 않는 경우에만 생성(내역등록 취소시 All 삭제 하므로 다시 만든다.)
			//********************************************************************************************************************
				log("ToolLot 추가 :: "+qty+" 건");
				for (int i=0; i<qty; i++) { //Lot생성 (의뢰수량만큼 반복)
					tempDurableLotID = createIdToolRequestDetailLotSequence(row);
					log("tempDurableLotID :: "+tempDurableLotID);
					toolReqDetailLot.put("TOOLNUMBER", 			tempDurableLotID);
					toolReqDetailLot.put("PREVDURABLELOTID", 	null); //입고시점이후도 이전 Tool코드 그대로 사용 한다.
					toolReqDetailLot.put("TXNID2", 					"Create"); //치공구Lot생성
					generalDao.addUpdate(NAMESAPCE + ".insertToolReqDetailLot", toolReqDetailLot);
					generalDao.addUpdate(NAMESAPCE + ".insertDurableLot", toolReqDetailLot);
						generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", toolReqDetailLot);
				}
			}else{
				log("LOT 존재함.--->SKIP");
			}
		}else if(toolMakeType.equals("Modify")){ //수정의 경우 : 팝업에서 선택한 치공구CODE 사용, 입고이후 NEXTLOTID 사용함.
			log("LOT만 생성함");
			//TOM_TOOLREQUESTDETAILLOT (4개컬럼), 수정은 의뢰단계에서 의뢰Lot가 만들어져 있다. (삭제 안돼고 있다.)
			List<Map<String, Object>> toolReqDetail2 = generalDao.addSelect(NAMESAPCE + ".existRequestDetailLot", toolReqDetailLot); //반드시 존재 한다.		
			for(int i=0; i<toolReqDetail2.size(); i++){ //만들어진 의뢰Lot만큼 반복
				List<Map<String, Object>>toolReqDetail3 = generalDao.addSelect(NAMESAPCE + ".existLot2", toolReqDetailLot); //TOM_DURABLELOT에 존재여부 파악 (입고시점Tool코드 존재여부 파악)
				//********************************************************************************************************************
				if(toolReqDetail3.size()==0){ //존재하지 않는 경우에만 생성
				//********************************************************************************************************************
					nextDurableLotID = (String)toolReqDetail2.get(i).get("NEXTDURABLELOTID"); //입고 이후에 사용할 LOT번호(미리생성)
					log("nextDurableLotID :: "+nextDurableLotID);
					toolReqDetailLot.put("TOOLNUMBER", 		nextDurableLotID); //입고시점 이후에 사용할Lot번호 (신규 채번 한다.)
					toolReqDetailLot.put("TXNID2", 				"Create"); //치공구Lot생성(입고 이후에 사용할 LOT번호(미리생성)
					//의뢰Lot는 만들지 않는다.
					generalDao.addUpdate(NAMESAPCE + ".insertDurableLot", toolReqDetailLot);
						generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", toolReqDetailLot);
				}
			}		
		}else if(toolMakeType.equals("Repair")){
			//의뢰Lot=의뢰단계에서 생성되어 있다.
			//Tool코드=이전에 만들어진 것 사용
		}
	}
	
	//Spare Part 입고 정보 수정 저장
	protected void getUpdateData2(Map<String, Object> row) throws Exception
	{		
		String requestDate = (String)row.get("REQUESTDATE");
		
		Map<String, Object> toolReqDetail = new HashMap<>();
		//키지정
		toolReqDetail.put("REQUESTDATE", 			requestDate);
		toolReqDetail.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
		toolReqDetail.put("REQUESTIDX", 			row.get("REQUESTIDX"));
		toolReqDetail.put("DURABLEDEFID", 			row.get("TOOLCODE"));
		toolReqDetail.put("DURABLEDEFVERSION", 	row.get("TOOLVERSION"));		
		//기존데이터를 가져온다.
		Map<String, Object> toolReqDetail2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolReqDetail", toolReqDetail);
		if(toolReqDetail2 == null)
		{
			//처리 없슴
		}
		else
		{	
			//데이터지정
			toolReqDetail.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
			toolReqDetail.put("PLANTID", 					row.get("PLANTID"));
			toolReqDetail.put("QTY", 						row.get("QTY"));
			toolReqDetail.put("DESCRIPTION", 			row.get("DESCRIPTION"));
			
			toolReqDetail.put("PLANDELIVERYDATE", 	row.get("PLANDELIVERYDATE"));		//입고예정일
			toolReqDetail.put("VENDORID", 				row.get("VENDORID"));					//제작업체
			toolReqDetail.put("RECEIPTAREAID", 			row.get("RECEIPTAREAID"));			//작업장
			//TR
			toolReqDetail.put("VALIDSTATE", 				"Valid");
			generalDao.addUpdate(NAMESAPCE + ".updateToolReqDetail", toolReqDetail);
			
			toolReqDetail.put("USEDLIMIT", 				row.get("USEDLIMIT"));					//보증타수
			toolReqDetail.put("CLEANLIMIT", 				row.get("CLEANLIMIT"));				//연마기준타수
			generalDao.addUpdate(NAMESAPCE + ".updateDulableDef", toolReqDetail);
		}
	}
	
	//==========================
    //--------------------------*
    //내역 등록 취소 저장 :: 그리드 상단 Request 기준으로 내역등록 취소 처리를 한다.
    //--------------------------*
    //==========================
    private void getUpdateRequestCancel(Map<String, Object> row) throws Exception
    {
    	String toolMakeType =  (String)row.get("TOOLMAKETYPE");
    	log("[getUpdateRequestCancel] toolMakeType :: "+toolMakeType);
    	
    	Map<String, Object> toolReq = new HashMap<>();
		//키지정
    	toolReq.put("REQUESTDATE", 				row.get("REQUESTDATE"));
    	toolReq.put("REQUESTSEQUENCE", 		row.get("REQUESTSEQUENCE"));
		//내역
    	toolReq.put("TOOLPROGRESSSTATUS", 	"Create"); //등록상태 로 변경한다.
		generalDao.addUpdate(NAMESAPCE + ".updateToolReqStatus", toolReq);
		if(toolMakeType.equals("Modify")){ //수정
			generalDao.addUpdate(NAMESAPCE + ".cancelDurableLot2", toolReq); //치공구LOT 삭제, 2개 컬럼(의뢰일자+순번)의 입고시점Lot로 찾아서 삭제(내역등록취소)
				generalDao.addUpdate(NAMESAPCE + ".cancelDurableLotHistory2", toolReq); //치공구LOT History 삭제, 2개 컬럼(의뢰일자+순번)의 입고시점Lot로 찾아서 삭제(내역등록취소)
			//의뢰Lot삭제 없슴.
		} else if(toolMakeType.equals("Repair")){ //수리
			//lot삭제 안한다.
			//의뢰Lot삭제 없슴.
		} else { //신규/증작
			generalDao.addUpdate(NAMESAPCE + ".cancelDurableLot", toolReq); //치공구LOT 삭제, 2개 컬럼(의뢰일자+순번)으로 찾아서 삭제(내역등록취소)
				generalDao.addUpdate(NAMESAPCE + ".cancelDurableLotHistory", toolReq); //치공구LOT History 삭제, 2개 컬럼(의뢰일자+순번)으로 찾아서 삭제(내역등록취소)
			generalDao.addUpdate(NAMESAPCE + ".cancelToolReqDetailLot", toolReq); //치공구LOT 삭제, 2개 컬럼(의뢰일자+순번)으로 찾아서 삭제(내역등록취소)
		}
    }
	
	//==========================
	//--------------------------*
	//삭제 (의뢰 Lot 삭제) - 오른쪽 Grid - 단건 삭제시 처리 :: 삭제할 수 있는 Validation 넥사에서 확실히 체크 할 것.
	//--------------------------*
	//==========================
	private void getDeleteToolRequestDetailLotData(Map<String, Object> row) throws Exception 
	{	
		String toolMakeType =  (String)row.get("TOOLMAKETYPE");
		log("[getDeleteToolRequestDetailLotData] toolMakeType :: "+toolMakeType);
		
		Map<String, Object> toolReqDetail = new HashMap<>();
		//키지정
		toolReqDetail.put("REQUESTDATE", 			row.get("REQUESTDATE"));
		toolReqDetail.put("REQUESTSEQUENCE", 	row.get("REQUESTSEQUENCE"));
		toolReqDetail.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
		toolReqDetail.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
		toolReqDetail.put("DURABLELOTID", 			row.get("DURABLELOTID"));
		toolReqDetail.put("REQUESTIDX", 			row.get("REQUESTIDX"));
		if(toolMakeType.equals("Modify")){ //수정			
			generalDao.addUpdate(NAMESAPCE + ".deleteDurableLot2", toolReqDetail); 			//치공구LOT 삭제 (입고이후Lot), 5개 컬럼으로 찾아서 삭제
				generalDao.addUpdate(NAMESAPCE + ".deleteDurableLotHistory2", toolReqDetail); 	//치공구LOT History 삭제 (입고이후Lot), 5개 컬럼으로 찾아서 삭제			
			//의뢰수량 차감 없슴
		} else if(toolMakeType.equals("Repair")){ //수리
			//치공구LOT 삭제 없슴.
			generalDao.addUpdate(NAMESAPCE + ".deleteToolReqDetailLot", toolReqDetail); 	//의뢰LOT 삭제(LOT DIRECT DELETE)
			//의뢰수량 차감 없슴
		} else { //신규/증작
			generalDao.addUpdate(NAMESAPCE + ".deleteToolReqDetailLot", toolReqDetail); 	//의뢰LOT 삭제(LOT DIRECT DELETE)
			generalDao.addUpdate(NAMESAPCE + ".deleteDurableLot", toolReqDetail); 			//치공구LOT 삭제
				generalDao.addUpdate(NAMESAPCE + ".deleteDurableLotHistory", toolReqDetail); 	//치공구LOT History 삭제
			generalDao.addUpdate(NAMESAPCE + ".updateRequestQty", toolReqDetail); 		//의뢰수량차감
		}
	}
	
	//===================
	//Durable Lot ID를 채번 : //TOOL코드=TOOL구분+품목코드+TOOL종류+제작구분+SEQ(2)
	//===================
	public String createIdToolRequestDetailLotSequence(Map<String, Object> row)
	{		
		Map<String, Object> toolReqDetail = new HashMap<>();
		toolReqDetail.put("DURABLEDEFID", 			row.get("TOOLCODE"));
		toolReqDetail.put("DURABLEDEFVERSION", 	row.get("TOOLVERSION"));
		toolReqDetail.put("TOOLMAKETYPE", 		fnToolMakeTypeConvert((String)row.get("TOOLMAKETYPE"))); //제작구분
		Map<String, Object> toolReqDetail2 = generalDao.addSelectOneMap(NAMESAPCE + ".createIdToolRequestDetailLotSequence", toolReqDetail);
		log("[신규채번] NEWDURABLELOTID :: "+toolReqDetail2.get("NEWDURABLELOTID"));
	  	return (String)toolReqDetail2.get("NEWDURABLELOTID");
	}
	
	/*
	//***************************************************
	//수정의 경우 채번은 다르다(2021-06-11)
	//***************************************************
	public String createIdToolRequestDetailLotSequence2(Map<String, Object> row)
	{		
		Map<String, Object> toolReqDetail = new HashMap<>();
		toolReqDetail.put("DURABLEDEFID", 			row.get("TOOLCODE"));
		toolReqDetail.put("DURABLEDEFVERSION", 	row.get("TOOLVERSION"));
		toolReqDetail.put("TOOLMAKETYPE", 		fnToolMakeTypeConvert((String)row.get("TOOLMAKETYPE"))); //제작구분
		Map<String, Object> toolReqDetail2 = generalDao.addSelectOneMap(NAMESAPCE + ".createIdToolRequestDetailLotSequence2", toolReqDetail);
		log("[신규채번] NEWDURABLELOTID :: "+toolReqDetail2.get("NEWDURABLELOTID"));
	  	return (String)toolReqDetail2.get("NEWDURABLELOTID");
	}
	*/
	
	//수정은 채번공식에 의존하지 않음 : 기존코드 사용
    private String fnToolMakeTypeConvert(String toolMakeType){
    	String retv = "";
    	if(toolMakeType.equals("Add")){ //증작
    		retv = "FP";
    	}else if(toolMakeType.equals("New")){ //신규
    		retv = "FN";
    	}else if(toolMakeType.equals("Modify")){ //수정
    		retv = "FM";
    	}
    	return retv;
    }
	
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}