package smh.pcm.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class PCM09100ServiceImpl extends AbstractNbdfService implements PCM09100Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM09100Dao";

    @Autowired
    private GeneralDao generalDao;

    public void selectConsumableRequestStateList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableRequestStateList", param));
    }
  	
  	public void selectConsumableLotByInboundNoList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableLotByInboundNoList", param));
    }
  	
    public void saveInputLot(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        String enterpriseId = (String)SessionUtil.getSessionValue("ENTERPRISEID");
        String plantId = (String)SessionUtil.getSessionValue("SITETYPE");
        
        Map<String, Double> countMap = new HashMap<String, Double>();
        double rCount = 1;
        ArrayList<String> inBoundNoList = new ArrayList<>();
        String isHalf =  "";
        String inBoundNo = "";
        
        log("반복문 #1 start...");
        
        //int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) 
        {
        	reqParam = inputMap.get(i);
        	
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	//ISHALFPRODUCT
                isHalf = (String)reqParam.get("ISHALFPRODUCT"); //반제품 입고 여부
                inBoundNo = StringUtil.NVL((String)reqParam.get("INBOUNDNO"),""); //청구번호
                log("isHalf :: "+isHalf);
                log("inBoundNo :: "+inBoundNo);
                 
                if(!countMap.containsKey(inBoundNo))
                {
                    countMap.put(inBoundNo, rCount);
                }
                else
                {
                    Double d = countMap.get(inBoundNo);
                    log("d :: "+d);
                    countMap.put(inBoundNo, d + 1);
                }
                 
                //if (isHalf.equals("N"))	//AS-IS 기준으로는 처리 하지 않음
                //{
                //    if(!inBoundNoList.contains(inBoundNo))
                //    {
                //        inBoundNoList.add(inBoundNo);
                //    }
                //    log("getConsumableTxnLineUpsert>>>>>>>>>>>>>>>>>>>>>>>>");
                //    getConsumableTxnLineUpsert(reqParam, enterpriseId, plantId);
                //}
                
                log("getConsumableLotUpsert>>>>>>>>>>>>>>>>>>>>>>>>");
                getConsumableLotUpsert2(reqParam);
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        log("반복문 #1 end...");
        
        log("반복문 #2 start...");
        
        /*
        for (int k = 0, n = inputMap.size(); k < n; k++)
        {
        	reqParam = inputMap.get(k);
        	
        	double checkedCount = NumberUtil.toDouble(countMap.get(reqParam.get("INBOUNDNO"))+"");
            log("checkedCount :: "+checkedCount);
             
            for(int i = 0; i<inBoundNoList.size(); i++) //데이터가 없기 때문에 for문장 실행안됌.
            {               
                HashMap<String, Object> propertyMap = new HashMap<>();
                propertyMap.put("INBOUNDNO", inBoundNoList.get(i));
                log("INBOUNDNO :: "+inBoundNoList.get(i));
                 
                List<Map<String, Object>> consumInboundList = generalDao.addSelect("selectConsumableLotListByInBoundNoList", propertyMap);
                log("consumInboundList :: "+consumInboundList);
                if(consumInboundList != null && !consumInboundList.isEmpty())
                {
                	log("sz :: "+consumInboundList.size());
                    if(consumInboundList.size() > 0)
                    {
                    	double rowCount = NumberUtil.toDouble(consumInboundList.get(0).get("ROW_COUNT")+"");
                        log("rowCount :: "+rowCount);
                        if (Double.compare(rowCount,checkedCount) == 0) { //리턴은int이다.
                        	log("SAME///");
                            getConsumableTxnHeaderUpsert(reqParam, enterpriseId, plantId);
                        }
                    }
                }
            }
        }
        */
        
        log("반복문 #2 end...");
        
        //putDataSetMap(dto, result);
    }
    
    /************************************************************************************************
     * CT_CONSUMABLETXNHEADER 처리
     ************************************************************************************************ */
    /*
    private Map<String, Object> getConsumableTxnHeaderUpsert(Map<String, Object> row, String enterpriseId, String plantId) throws Exception
    {
        String inBoundNo = (String)row.get("INBOUNDNO");
         
        Map<String, Object> consumableTxnHeader = new HashMap<>();
         
        //ConsuambleHeader        
        consumableTxnHeader.put("ENTERPRISEID", enterpriseId);
        consumableTxnHeader.put("PLANTID", plantId);
        consumableTxnHeader.put("TRANSACTIONNO", inBoundNo);
 
        Map<String, Object> consumableTxnHeader2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectConsumableTxnHeaderList", consumableTxnHeader);
        log("consumableTxnHeader2 :: "+consumableTxnHeader2);
        if(consumableTxnHeader2 == null)
        {
            //해당 불출요청이 존재하지 않습니다.
        	throw new BizException("NotExistInBoundNo|"+String.format("REQUEST ID : %s", inBoundNo));
        }
        
        consumableTxnHeader.put("LASTTXNHISTKEY", this.getClass().getSimpleName());
        
        generalDao.addUpdate(NAMESAPCE + ".updateConsumableTxnHeader", consumableTxnHeader);
         
        return consumableTxnHeader;
         
    }
    */
     
    /************************************************************************************************
     * CT_CONSUMABLETXNLINE 처리
     ************************************************************************************************/
    /*
    private Map<String, Object> getConsumableTxnLineUpsert(Map<String, Object> row, String enterpriseId, String plantId) throws Exception
    {
        String inBoundNo = (String)row.get("INBOUNDNO");
         
        Map<String, Object> consumableTxnLine = new HashMap<>();
         
        //ConsumableTxnLine        
        consumableTxnLine.put("ENTERPRISEID", enterpriseId);
        consumableTxnLine.put("PLANTID", plantId);
        consumableTxnLine.put("TRANSACTIONNO", inBoundNo);
        consumableTxnLine.put("TRANSACTIONSEQUENCE", row.get("TRANSACTIONSEQUENCE"));
         
        Map<String, Object> consumableTxnLine2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectConsumableTxnLineList", consumableTxnLine);
        log("consumableTxnLine2 :: "+consumableTxnLine2);
        if(consumableTxnLine2 == null)
        {
            //해당 요청 자재 LOT이 존재하지 않습니다.
        	throw new BizException("NotExistConsumableLot|"+String.format("LOT ID : %s", row.get("CONSUMABLELOTID")));
        }
         
        consumableTxnLine.put("LASTTXNHISTKEY", this.getClass().getSimpleName());
        
        generalDao.addUpdate(NAMESAPCE + ".updateConsumableTxnLine", consumableTxnLine);
         
        return consumableTxnLine;
    }
    */
     
    /************************************************************************************************
     * 자재 LOT 처리
     ************************************************************************************************/
    private Map<String, Object> getConsumableLotUpsert(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> consumableLot = new HashMap<>();
         
        String consumableLotId = (String)row.get("CONSUMABLELOTID");
        String wareHouseID = (String)row.get("WAREHOUSEID");
        consumableLot.put("CONSUMABLELOTID", consumableLotId);
        consumableLot.put("WAREHOUSEID", wareHouseID);
        
        log("CONSUMABLELOTID :: "+consumableLotId);
        log("WAREHOUSEID :: "+wareHouseID);
         
        Map<String, Object> consumableLot2 = generalDao.addSelectOneMap(NAMESAPCE + ".selectConsumableLoList", consumableLot); //CONSUMABLELOTID, WAREHOUSEID
        if(consumableLot2 == null)
        {
            //해당 자재 LOT이 존재하지 않습니다.
        	throw new BizException("NotExistConsumableLot|"+String.format("LOT ID : %s", consumableLotId));
        }
        
        double receiveQty = NumberUtil.toDouble(consumableLot2.get("WAITFORRECEIPTQTY")+"");	//인수대기수량
        double createQty = NumberUtil.toDouble(consumableLot2.get("CREATEDQTY")+"");
        double consumqty = NumberUtil.toDouble(consumableLot2.get("CONSUMABLELOTQTY")+"");
        
        log("receiveQty :: "+receiveQty);
        log("createQty :: "+createQty);
        log("consumqty :: "+consumqty);
         
        consumableLot.put("WAITFORRECEIPTQTY",0); 								//인수대기수량
        consumableLot.put("CREATEDQTY",createQty + receiveQty); 				//최초생성수량=최초생성수량 + 수신수량(인수대기수량)
        consumableLot.put("CONSUMABLELOTQTY",consumqty + receiveQty); //현재수량=현재수량+수신수량(인수대기수량)
        
        log("WAITFORRECEIPTQTY :: "+0);
        log("CREATEDQTY :: "+createQty + receiveQty);
        log("CONSUMABLELOTQTY :: "+consumqty + receiveQty);
         
        generalDao.addUpdate(NAMESAPCE + ".updateConsumableLot", consumableLot);
 
        return row;
    }
    
    /************************************************************************************************
     * 자재 LOT 처리
     ************************************************************************************************/
    private Map<String, Object> getConsumableLotUpsert2(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> consumableLot = new HashMap<>();
         
        String consumableLotId = (String)row.get("CONSUMABLELOTID");
        String wareHouseID = (String)row.get("WAREHOUSEID");
        consumableLot.put("CONSUMABLELOTID", consumableLotId);
        consumableLot.put("WAREHOUSEID", wareHouseID);
        
        log("CONSUMABLELOTID :: "+consumableLotId);
        log("WAREHOUSEID :: "+wareHouseID);
         
        //generalDao.addUpdate(NAMESAPCE + ".updateConsumableLot", row);
        generalDao.addUpdate(NAMESAPCE + ".insertConsumableLot", row);
 
        return row;
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}