package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file		: PCM08600ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08600ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Service
public class PCM08600ServiceImpl extends AbstractNbdfService implements PCM08600Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08600Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 공정관리물류창고 입고 조회
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOutSourceWarehouseShipment(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
    	log("[*** selectOutSourceWarehouseShipment ***]");
    	log("--------[1] P_ENTERPRISEID :: "+		param.get("P_ENTERPRISEID"));
    	log("--------[2] P_PLANTID :: "+			param.get("P_PLANTID"));
    	log("--------[3] P_AREAID :: "+				param.get("P_AREAID"));
    	log("--------[4] P_PROCESSSEGMENTID :: "+	param.get("P_PROCESSSEGMENTID"));
    	log("--------[5] P_PRODUCTDEFID :: "+		param.get("P_PRODUCTDEFID"));
    	log("--------[6] P_PRODUCTDEFVERSION :: "+	param.get("P_PRODUCTDEFVERSION"));
    	log("--------[7] P_RECEIPTDATEFR :: "+		param.get("P_RECEIPTDATEFR"));
    	log("--------[8] P_RECEIPTDATETO :: "+		param.get("P_RECEIPTDATETO"));
    	log("--------[9] P_SHIPOKCHECK :: "+		param.get("P_SHIPOKCHECK"));
    	log("--------[10] P_LOTID :: "+				param.get("P_LOTID"));
    	log("--------[11] LANGUAGETYPE :: "+		param.get("LANGUAGETYPE"));
    	log("--------[12] *** SQL_ID *** :: "+		param.get("SQL_ID"));
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief 공정관리물류창고 입고 저장
     * @remark 
     * @see smh.pcm.service.PCM08400Service#saveOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveOutSourceWarehouseShipment(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto); //데이터셋이 1개 일때, 여러개 일때는 뒤에 보낸데이터셋을 명시 한다.
        Map<String, Object> param;
        
        log("[*** saveOutSourceWarehouseShipment ***]");

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            
            log("[*** updateData start ***]");
            
            updateData(param);
            
            log("[*** lotStatusChange start ***]");
            
            lotStatusChange(param);		
        }        
        
        putDataSetMap(dto, result);
    }
    
    // 외주창고출고 update
    private void updateData(Map<String, Object> row) throws Exception
    {         
        // 다시 자료의 조회 건수 비교 
    	Map<String,Object> param = new HashMap<>();
        param.put("P_LOTID", 			row.get("LOTID"));   
        param.put("P_PLANTID", 			row.get("PLANTID"));   
        param.put("P_LOTHISTKEY", 		row.get("LOTHISTKEY")); 
        param.put("P_RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
        log("param :: "+param.toString());
        List<Map<String, Object>> attributeList = selectOutsourcedWarehouseShipmentCheck(param);
        log("attributeList :: "+attributeList);
         
        if(attributeList != null && attributeList.size() > 0)
        {
        	Map<String, Object> map = attributeList.get(0);
            String strShipokcheck = map.get("SHIPOKCHECK").toString();
            log("strShipokcheck :: "+strShipokcheck);
            if (strShipokcheck.equals("OK"))
            {
            	log(" LOTHISTKEY :: "+			row.get("LOTHISTKEY"));
            	log(" LOTID :: "+					row.get("LOTID"));
            	log(" RECEIPTSEQUENCE :: "+	row.get("RECEIPTSEQUENCE"));
            	log(" SENDDATE :: "+			new Date());
            	log(" SENDUSER :: "+			row.get("SENDUSER"));
            	log(" AREAID :: "+				row.get("AREAID"));
            	log(" VALIDSTATE :: 			Valid");
            	log(" LASTTXNID :: "+			"Modify");
            					
				param.put("LOTHISTKEY", 			row.get("LOTHISTKEY")); //KEY
				param.put("LOTID", 					row.get("LOTID")); //KEY
				param.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE")); //KEY				
				param.put("SENDDATE", 			new Date());
				param.put("SENDUSER", 			row.get("SENDUSER"));				
				param.put("AREAID", 				row.get("AREAID"));	
				param.put("VALIDSTATE", 			"Valid");
				//param.put("LASTTXNID", 		"Modify");
				param.put("CREATOR", 			row.get("CREATOR"));
				param.put("MODIFIER", 			row.get("MODIFIER"));
				generalDao.addUpdate(NAMESAPCE + ".updateOutsourcedWarehouseShipment", param);
				
				log("updateOutsourcedWarehouseShipment ok");
            }
            else
            {
            	log("InValidOspData019 :: ");
            	throw new BizException("InValidOspData019|"+String.format("LOTID = %s", row.get("LOTID")));
            }             
        }
        else
        {  
            // 메세지 이미 출고처리된 lot 입니다.
        	log("InValidOspData003 :: ");
        	throw new BizException("InValidOspData003|"+String.format("LOTID = %s", row.get("LOTID")));
         
        }     
    }
    
    /**
     * @fn 
     * @brief 공정관리물류창고 입고 조회
     * @remark
     */
    public List<Map<String, Object>> selectOutsourcedWarehouseShipmentCheck(Map<String, Object> dto) throws Exception {    	
    	return generalDao.addSelect(NAMESAPCE + ".selectOutsourcedWarehouseShipmentCheck" ,dto);
    }
    
    private void lotStatusChange(Map<String, Object> row) throws Exception
    {
    	Map<String,Object> param = new HashMap<>();
    	param.put("LOTID", 			row.get("LOTID")); //KEY
    	param.put("LOTSTATUS", 		"InProduction");    
    	param.put("CREATOR", 		row.get("CREATOR"));
		param.put("MODIFIER", 		row.get("MODIFIER"));
    	generalDao.addUpdate(NAMESAPCE + ".updateLotStatusChange", param);
    	log("updateLotStatusChange ok");
    }
    
    private void log(String message){
    	logger.debug("////////////////////////////////////////////////////////////////"+message);
    }
}