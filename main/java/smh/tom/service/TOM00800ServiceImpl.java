package smh.tom.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class TOM00800ServiceImpl extends AbstractNbdfService implements TOM00800Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00800Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //헤더 그리드
    public void selectMoveToolStatusListByToolList(UiMapDto dto) throws Exception {
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
    public void selectMoveToolInputListByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //이동 출고 저장
    public void saveMoveSendTool(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        //출고가 가능한지 체크 로직
        checkAvailableDurableState(inputMap);
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) { 
        	reqParam = inputMap.get(i);
           
        	int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) { //이동출고 처리
            	getInsertData(reqParam);            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //이동 출고 취소
    /*
    public void saveMoveSendToolCancel(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) { 
        	reqParam = inputMap.get(i);
        	
        	int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) { //이동출고 취소 처리           	
            	getUpdateData(reqParam);
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }
    */
    
    //#####################################################################################################
    
    //이동출고 처리
  	private void getInsertData(Map<String, Object> row) throws Exception
  	{
  		String sendDate = DateUtil.getNowDate("yyyy-MM-dd");
  		log("sendDate :: "+sendDate);
  		
  		Map<String, Object> lot = new HashMap<>();
		lot.put("TOOLNUMBER", row.get("TOOLNUMBER"));
  		
		Map<String, Object> lot2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectDulableLot", lot);
    	if(lot2==null){
  			throw new BizException("InValidData001|"+String.format("Durable Lot is not Exists! : Tool No is = %s", row.get("TOOLNUMBER")));
  		}
  		else 
  		{
  			//KEY
  			lot2.put("TOOLNUMBER", 			row.get("TOOLNUMBER"));  			
  			//내역처리
  			lot2.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
  			lot2.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
  			lot2.put("ISHOLD", 					"N");  			
  			lot2.put("DURABLESTATE", 		"Available");
  			//로그관련 이력 추가 :: 2021-07-06  			
  			lot2.put("PREVPLANTID", 			row.get("SENDPLANTID")); //출고사이트
  			lot2.put("PREVAREAID", 			row.get("SENDAREAID")); //출고작업장
  			lot2.put("PLANTID", 					row.get("RECEIPTPLANTID")); //입고사이트
  			lot2.put("AREAID", 					row.get("RECEIPTAREAID")); //입고작업장
  			//TR
  			lot2.put("VALIDSTATE", 			"Valid");
  			lot2.put("TXNID2", 					"ToolMoveSend"); //이동출고
  			generalDao.addUpdate(NAMESAPCE + ".updateDulableLot", lot2);
  				generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", lot2);
  		}
    	
    	//LotHistory키를 SentLot에 저장하기 위해 TR순서 변경함(20210414)
    	String lastTxnHistory = (String)lot2.get("LASTTXNHISTKEY");
    	log("lastTxnHistory :: "+lastTxnHistory);
    	
    	Map<String, Object> tooMove = new HashMap<>();
  		
    	tooMove.put("TOOLNUMBER", 		row.get("TOOLNUMBER"));
    	tooMove.put("SENDDATE", 			sendDate);  		
    	//List<Map<String, Object>> tooMove2 = generalDao.addSelect(NAMESAPCE + ".selectToolMove", tooMove);
    	//if(tooMove2.size()==0) //이동출고 추가
  		//{	
    		tooMove.put("SENDAREAID", 				row.get("SENDAREAID"));
    		tooMove.put("SENDPLANTID", 			row.get("SENDPLANTID"));
    		tooMove.put("RECEIPTAREAID", 			row.get("RECEIPTAREAID"));
    		tooMove.put("RECEIPTPLANTID", 			row.get("RECEIPTPLANTID"));
    		
    		log("TOOLMOVETYPE :: "+row.get("TOOLMOVETYPE"));
    		log("TOOLMOVETYPEID :: "+row.get("TOOLMOVETYPEID"));
    		
    		tooMove.put("TOOLMOVETYPEID", 		row.get("TOOLMOVETYPEID"));//2021-06-21
    		
    		tooMove.put("SESSION_ENTERPRISEID",	row.get("SESSION_ENTERPRISEID"));
    		tooMove.put("SENDUSER", 				row.get("CREATOR"));    		
    		tooMove.put("LOTHISTKEY2", 				lastTxnHistory);
  			//TR
    		tooMove.put("VALIDSTATE", 				"Valid");
  			generalDao.addUpdate(NAMESAPCE + ".insertToolMove", tooMove);
  		//}
  		//else //이동출고 수정
  		//{
  		/*
  			tooMove.put("SENDAREAID", 				row.get("SENDAREAID"));
    		tooMove.put("SENDPLANTID", 			row.get("SENDPLANTID"));
    		tooMove.put("RECEIPTAREAID", 			row.get("RECEIPTAREAID"));
    		tooMove.put("RECEIPTPLANTID", 			row.get("RECEIPTPLANTID"));
    		
  			tooMove.put("TOOLMOVETYPEID", 		row.get("TOOLMOVETYPEID"));
  			
    		tooMove.put("SESSION_ENTERPRISEID",	row.get("SESSION_ENTERPRISEID"));
    		tooMove.put("SENDUSER", 				row.get("CREATOR"));
  			tooMove.put("LOTHISTKEY", 				lastTxnHistory);
  			//TR
  			tooMove.put("VALIDSTATE", 				"Valid");
  			generalDao.addUpdate(NAMESAPCE + ".updateToolMove", tooMove);
  		}
  		*/
  	}
  	
  	//이동출고 취소 처리
  	/*
  	private void getUpdateData(Map<String, Object> row) throws Exception
  	{
  		log("TOOLNUMBER :: "+row.get("TOOLNUMBER"));
  		log("SENDDATE :: "+row.get("SENDDATE"));
  		
  		Map<String, Object> tooMove = new HashMap<>();
  		tooMove.put("TOOLNUMBER", 	row.get("TOOLNUMBER"));
    	tooMove.put("SENDDATE", 		row.get("SENDDATE"));  		
    	List<Map<String, Object>> tooMove2 = generalDao.addSelect(NAMESAPCE + ".selectToolMove", tooMove);
    	if(tooMove2==null){
  			throw new BizException("InValidData001|"+String.format("Durable Lot is not Exists! : Tool No is = %s", row.get("TOOLNUMBER")));
  		}else{
  			//TR
    		tooMove.put("VALIDSTATE", 			"Invalid"); //just Invalid setting
  			generalDao.addUpdate(NAMESAPCE + ".updateToolMoveCancel", tooMove);	//삭제로 변경함:20210416
  		}
  		
    	//KEY
    	tooMove.put("TOOLNUMBER", 			row.get("TOOLNUMBER"));
    	//내역
    	tooMove.put("DURABLEDEFID", 			row.get("DURABLEDEFID"));
    	tooMove.put("DURABLEDEFVERSION", 	row.get("DURABLEDEFVERSION"));
    	tooMove.put("DURABLESTATE", 			"Available");
    	tooMove.put("ISHOLD", 					"N");
    	//TR
    	tooMove.put("TXNID2", 					"ToolMoveSendCancel"); //이동출고 취소
    	generalDao.addUpdate(NAMESAPCE + ".updateDulableLot", tooMove);
    	generalDao.addUpdate(NAMESAPCE + ".insertDurableLotHistory", tooMove);
  	}
  	*/
  	
  	//출고가 가능한지 체크 로직
  	private void checkAvailableDurableState(DataSetMap inputDetMap) throws Exception
	{
		//입력이 가능한지 검증
  		Map<String, Object> reqParam;
  		String durableLotIDs = "";
        String toolNumber = "";

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
		
  		Map<String, Object> result1 = generalDao.addSelectOneMap(NAMESAPCE + ".selectCheckAvailableLotStatusMoveByTool", map);
  		Integer durableCount = NumberUtil.toInt((String)result1.get("DURABLECOUNT"));
		
  		log("durableCount/Map SZ :: "+durableCount+"/"+inputDetMap.size());
  		
		//두 카운트가 같아야 함.
  		if(durableCount != inputDetMap.size())
		{
  			//ToolFilmMoveValidation1 = 치공구/필름의 상태가 Available상태가 아닙니다.
  			throw new BizException("ToolFilmMoveValidation1|"+String.format("Durable Lot Status is not Available! : Tool No is = %s", toolNumber)); 
		}
		
		//치공구 의뢰 진행 미완료
  		Map<String, Object> result2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectCheckAvailableRequestToolMoveByTool", map);
		Integer requestCount = Integer.parseInt(result2.get("REQUESTCOUNT").toString());
		
		log("requestCount :: "+requestCount);
		
		//0 이상이면 안된다.
		if(requestCount > 0)
		{
			//ToolFilmMoveValidation2 = 치공구/필름이 수정/수리출고중 아직 입고되지 않았습니다.
  			throw new BizException("ToolFilmMoveValidation2|"+String.format("Durable Lot is not receipted! : Tool No is = %s", toolNumber));
		}
		
		//이동출고 진행 미완료
		Map<String, Object> result3 = generalDao.addSelectOneMap(NAMESAPCE + ".selectCheckAvailableToolMoveByTool", map);
		Integer moveCount = Integer.parseInt(result3.get("MOVECOUNT").toString());
		
		log("moveCount :: "+moveCount);
		
		//0 이상이면 안된다.
		if(moveCount > 0)
		{
			//ToolFilmMoveValidation2 = 치공구/필름이 수정/수리출고중 아직 입고되지 않았습니다.
  			throw new BizException("ToolFilmMoveValidation3|"+String.format("Durable Lot is not receipted in moving! : Tool No is = %s", toolNumber));
		}
		
		log("출고 Validation 문제 없슴");
	}
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}