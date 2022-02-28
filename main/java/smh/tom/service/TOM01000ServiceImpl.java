package smh.tom.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

@Service
public class TOM01000ServiceImpl extends AbstractNbdfService implements TOM01000Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM01000Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //치공구 정보조회 : 상단 그리드
    public void selectToolInformationListByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //치공구 정보조회 : 하단 변경사유 그리드
    public void selectToolInformationReasonList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //정보 저장
    public void saveInformationTool(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) { 
        	reqParam = inputMap.get(i);
        	reqParam.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
           
        	int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {        
            	getUpdateData(reqParam);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    //Tool 정보관리에서 데이터 저장을 수행
    protected void getUpdateData(Map<String, Object> row) throws Exception
    {       
        String toolNumber = StringUtil.NVL((String)row.get("TOOLNUMBER"),"");
        String isHoldYn = StringUtil.NVL((String)row.get("ISHOLDYN"),"");
        String isHold = StringUtil.NVL((String)row.get("ISHOLD"),"");
        String isStateYn = StringUtil.NVL((String)row.get("ISSTATEYN"),"");
        
        log("toolNumber :: "+toolNumber);
        log("isHoldYn :: "+isHoldYn);
        log("isHold :: "+isHold);
        log("isStateYn :: "+isStateYn);
        
        Map<String, Object> durableLot = new HashMap<>();         
        durableLot.put("DURABLELOTID", toolNumber);
        
        /*
        //Client에서 홀딩유무
        if(isHoldYn.equals("Y")) //클라이언트에서 홀드유무가 변경되었을때만 동작
        {
            if(isHold.equals("Y")) //홀드시작
            {
            	Map<String, Object> holInfo = new HashMap<>();            	
                holInfo.put("DURABLELOTID", toolNumber);
                holInfo.put("ISHOLD", "Y");
                //lotData = DurableLotService.holdDurableLot(holdInfo, holInfo);
                generalDao.addUpdate(NAMESAPCE + ".holdDurableLot", holInfo);
            }
            else //홀드종료
            {
            	Map<String, Object> holInfo = new HashMap<>();
            	holInfo.put("DURABLELOTID", toolNumber);            
            	holInfo.put("ISHOLD", "N");
                //lotData = DurableLotService.releaseDurableLot(holdInfo, txnInfo);
            	generalDao.addUpdate(NAMESAPCE + ".holdDurableLot", holInfo);
            	
                //홀딩이 풀렸다면 상태변경이 가능하다.
                if(isStateYn.equals("Y")) //클라이언트에서 상태가 변경되었을 때만 동작
                {
                    //DurableLotService.changeDurableLotState(row.getString("TOOLNUMBER"), row.getString("DURABLESTATEID"), txnInfo);
                }
            }
        }
        else
        {
            if(isStateYn.equals("Y")) //클라이언트에서 상태가 변경되었을 때만 동작
            {
                //DurableLotService.changeDurableLotState(row.getString("TOOLNUMBER"), row.getString("DURABLESTATEID"), txnInfo);
            }
        }
        */
             
        List<Map<String, Object>> durableLot2 = generalDao.addSelect(NAMESAPCE + ".selectDurableLot", durableLot);
        if (durableLot2.size()==0)
        {
        	throw new BizException("InValidData001|"+String.format("Durable Lot is not Exists! : Tool No is = %s", toolNumber));             
        }
        else
        {
        	durableLot.put("ISHOLD", 						isHold.equals("1")?"Y":"n");
        	durableLot.put("DURABLESTATE",				row.get("DURABLESTATEID"));
        	
        	durableLot.put("USEDLIMIT", 					row.get("USEDLIMIT"));
        	durableLot.put("CLEANLIMIT", 				row.get("CLEANLIMIT"));
        	durableLot.put("WEIGHT", 						row.get("WEIGHT"));
        	durableLot.put("HORIZONTAL", 				row.get("HORIZONTAL"));
        	durableLot.put("VERTICAL", 					row.get("VERTICAL"));
        	durableLot.put("THEIGHT", 					row.get("THEIGHT"));
        	durableLot.put("TOTALPOLISHTHICKNESS", 	row.get("TOTALPOLISHTHICKNESS"));
        	durableLot.put("DURABLEDEFID", 			StringUtil.NVL((String)row.get("TOOLCODE")+"", 	""));
        	durableLot.put("DURABLEDEFVERSION", 	StringUtil.NVL((String)row.get("TOOLVERSION")+"",""));
             
            List<Map<String, Object>> durableLot3 = generalDao.addSelect(NAMESAPCE + ".selectDurableDefinition", durableLot);
            if (durableLot3.size()==0)
            {
            	throw new BizException("InValidData001|"+String.format("Durable Definition is not Exists! : Durable definition ID is = %s", row.get("TOOLCODE")));             
            }
            else
            {	
            	//data
            	durableLot.put("HITCOUNT", 				row.get("HITCOUNT"));
            	//TR
            	durableLot.put("LASTTXNCOMMENT", 	row.get("UPDATEREASON")); //변경사유
            	durableLot.put("VALIDSTATE", 			"Valid");                 
            	
            	//********************************************************************************
            	generalDao.addUpdate(NAMESAPCE + ".updateDulableDefinitionHistory", durableLot); //치공구 정의 수정이전 데이터 백업 :: 공정 타수 시점 데이터 이용(2021-07-13), 변경시점 마다 INSERT 한다.
            	//********************************************************************************
            	
            	generalDao.addUpdate(NAMESAPCE + ".updateDulableDefinition", durableLot);
            }
             
            //TR
        	durableLot.put("LASTTXNCOMMENT", 	row.get("UPDATEREASON")); //변경사유
        	durableLot.put("VALIDSTATE", 			"Valid");
            generalDao.addUpdate(NAMESAPCE + ".updateDulableLot", durableLot);      
        }
    }    
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}