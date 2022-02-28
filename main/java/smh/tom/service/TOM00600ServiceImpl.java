package smh.tom.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class TOM00600ServiceImpl extends AbstractNbdfService implements TOM00600Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00600Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //헤더 그리드
    public void selectRegistToolRepairListForResultByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //수리결과 등록 저장
    public void saveToolRegistRepairResult(UiMapDto dto) throws Exception {
    	DataSetMap inputDetMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        int result = 0;
        for (int i = 0, n = inputDetMap.size(); i < n; i++) {
        	reqParam = inputDetMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	checkAvailableDurableState(inputDetMap);
				getUpdateData(reqParam);            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //치공구 수리결과 등록  : Update
  	protected void getUpdateData(Map<String, Object> row) throws Exception
  	{	
		Map<String, Object>	toolRepairLot = new HashMap<>();
		toolRepairLot.put("DURABLELOTID", 	row.get("TOOLNUMBER"));
		toolRepairLot.put("SENDDATE", 		row.get("SENDDATE"));
		toolRepairLot.put("SENDSEQUENCE", 	row.get("SENDSEQUENCE"));
		
		log("DURABLELOTID :: "+			row.get("TOOLNUMBER"));
		log("SENDDATE :: "+				row.get("SENDDATE"));
		log("SENDSEQUENCE :: "+			row.get("SENDSEQUENCE"));
		log("========================================================");
		log("TOOLREPAIRTYPEID :: "+		row.get("TOOLREPAIRTYPEID"));
		log("REPAIRRESULT :: "+	row.get("REPAIRRESULT"));
		
		//수정할 데이터가 없다면 수행하지 않는다.
		Map<String, Object> toolRepairLot2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolRepairLot", toolRepairLot);
  		if(toolRepairLot2 != null) 
  		{
  			//KEY
  			toolRepairLot2.put("TOOLNUMBER", 		row.get("TOOLNUMBER"));
  			toolRepairLot2.put("SENDDATE", 			row.get("SENDDATE"));
  			toolRepairLot2.put("SENDSEQUENCE", 		row.get("SENDSEQUENCE"));
  			//내용
  			toolRepairLot2.put("TOOLREPAIRTYPE", 	row.get("TOOLREPAIRTYPEID"));
			toolRepairLot2.put("REPAIRRESULT", 		row.get("REPAIRRESULT"));
			toolRepairLot2.put("ISPOLISH", 			row.get("ISPOLISH"));
			toolRepairLot2.put("FINISHER", 			row.get("CREATOR"));
			//TR
			toolRepairLot2.put("VALIDSTATE", 		"Valid");			
			generalDao.addUpdate(NAMESAPCE + ".updateRepareResult", toolRepairLot2);
			
			String toolMakeTypeId = (String)row.get("TOOLMAKETYPEID");
			if(toolMakeTypeId.equals("Modify")){
				log("수정의 경우 수리결과 등록시 보류 처리");
				//수정의 경우 수리결과 등록시 보류 처리
				generalDao.addUpdate(NAMESAPCE + ".updateHoldProcess", toolRepairLot2);
			}
		}
  	}
  	
  	//데이터가 입력가능한지 검증
  	private void checkAvailableDurableState(DataSetMap inputDetMap) throws Exception
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
  		
  		Map<String, Object> isMakeResult = generalDao.addSelectOneMap(NAMESAPCE + ".selectExistsReceiptToolRepairLotResultByToolList", map);
  		
  		Integer sendCount = Integer.parseInt(isMakeResult.get("REPAIRCOUNT").toString());
  		
  		log("sendCount :: "+sendCount);
  		
  		//sendCount가 toolRepairSendLotTable의 Count와 틀리다면 입력불가항목이 존재함.
  		if(sendCount != inputDetMap.size())
  		{
  			throw new BizException("InValidData001|"+String.format("Already repair Tool No is = %s", toolNumber));
  		}		
  	}
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}