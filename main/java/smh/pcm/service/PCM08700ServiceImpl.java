package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file		: PCM08700ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08700ServiceImpl
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
public class PCM08700ServiceImpl extends AbstractNbdfService implements PCM08700Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08700Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 공정관리물류창고 입고 조회
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOutsourceDistributionList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
    	
    	log("[*** selectOutsourceDistributionList ***]"+sqlId);
    	log("--------[1] P_PLANTID :: "+			param.get("P_PLANTID"));
    	log("--------[2] P_LOTID :: "+				param.get("P_LOTID"));
    	log("--------[3] P_LOTTYPE :: "+			param.get("P_LOTTYPE"));
    	log("--------[3] P_AREAID :: "+				param.get("P_AREAID"));
    	log("--------[4] P_RECEIPTUSER :: "+		param.get("P_RECEIPTUSER"));
    	log("--------[5] P_PRODUCTDEFID :: "+		param.get("P_PRODUCTDEFID"));
    	log("--------[6] P_PRODUCTDEFVERSION :: "+	param.get("P_PRODUCTDEFVERSION"));
    	log("--------[7] P_RECEIPTDATE_PERIODFR :: "+param.get("P_RECEIPTDATE_PERIODFR"));
    	log("--------[8] P_RECEIPTDATE_PERIODTO :: "+param.get("P_RECEIPTDATE_PERIODTO"));
    	log("--------[9] P_YESNO :: "+				param.get("P_YESNO"));
    	log("--------[10] LANGUAGETYPE :: "+		param.get("LANGUAGETYPE"));
    	log("--------[12] *** SQL_ID *** :: "+		param.get("SQL_ID"));
    	
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }    
    
    /**
     * @fn
     * @brief 공정별 배분 현황
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOutsourcedDistributionPopup(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief Lot No별 공정 목록
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOutsourcedDistributionLotSegmentid(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    
    /**
     * @fn
     * @brief 회사별 plant 정보 가져오기
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPlantidInformatByCsm(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
        if(!"".equals(sqlId)){
        	log("P_PLANTID :: "+param.get("P_PLANTID"));
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief RESOURCE 정보 가져오기
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectOutSourceWarehouseShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectResourceidListByOspList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    
    //===============
    //Lot No. 확인 저장
    //===============
    public void updateOutsourcedDistributionCheckSave(UiMapDto dto) throws Exception{
    	log("@@@updateOutsourcedDistributionCheckSave in");
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> row;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
        	row = paramMap.get(i);
            
            Map<String, Object>	ospreceiptsendlot = new HashMap<>();
			ospreceiptsendlot.put("LOTHISTKEY", 		row.get("LOTHISTKEY"));
			ospreceiptsendlot.put("LOTID", 				row.get("LOTID"));
			ospreceiptsendlot.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
			
			log("LOTHISTKEY :: "+row.get("LOTHISTKEY"));
			log("LOTID :: "+row.get("LOTID"));
			log("RECEIPTSEQUENCE :: "+row.get("RECEIPTSEQUENCE"));
			
			ospreceiptsendlot = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlot", ospreceiptsendlot);
			log("selectOspreceiptsendlotData :: SENDUSER is :: "+(String)ospreceiptsendlot.get("SENDUSER"));
			
			if (!(StringUtil.isNullOrEmpty((String)ospreceiptsendlot.get("SENDUSER"))))
			{
				throw new BizException("InValidOspData019|"+String.format("LOTID = %s", row.get("LOTID")));
			}
        }
        
        log("OK..DATA READY...");
        
        for (int i = 0, len = paramMap.size(); i < len; i++)
		{   
        	row = paramMap.get(i);
			
			getOspReceiptSendLotUpdateData(row);
		}
        
        putDataSetMap(dto, result);
    }
    
    // 외주 checkdate, checkuser
 	private void getOspReceiptSendLotUpdateData(Map<String, Object> row) throws Exception
 	{	
 		log("@@@getOspReceiptSendLotUpdateData in");
 		Map<String, Object> ospreceiptsendlot = new HashMap<>();
		ospreceiptsendlot.put("LOTHISTKEY",		 	row.get("LOTHISTKEY"));
		ospreceiptsendlot.put("LOTID", 				row.get("LOTID"));
		ospreceiptsendlot.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
		
		log("LOTHISTKEY :: "+row.get("LOTHISTKEY"));
		log("LOTID :: "+row.get("LOTID"));
		log("RECEIPTSEQUENCE :: "+row.get("RECEIPTSEQUENCE"));
 		
		ospreceiptsendlot = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlot", ospreceiptsendlot);
		
		log("ospreceiptsendlotData OK :: SENDAREAID is :: "+(String)ospreceiptsendlot.get("SENDAREAID"));
		
 		String oldSendAreaid = (String)ospreceiptsendlot.get("SENDAREAID"); //안씀
		ospreceiptsendlot.put("CHECKDATE", 	new Date());
		ospreceiptsendlot.put("CHECKUSER", 	row.get("CHECKUSER"));
		
		ospreceiptsendlot.put("VALIDSTATE", "Valid");
		//ospreceiptsendlot.put("LASTTXNID","Modify");
		ospreceiptsendlot.put("CREATOR", 	row.get("CREATOR"));
		ospreceiptsendlot.put("MODIFIER", 	row.get("MODIFIER"));
		generalDao.addUpdate(NAMESAPCE + ".updateOspreceiptsendlot", ospreceiptsendlot);
		
		log("updateOspreceiptsendlotData OK");
 	}
 	
 	//===============
    //RESOURCE 정보 저장
    //===============
    public void saveResourceidListByOsp(UiMapDto dto) throws Exception{
    	DataSetMap paramMap = getParametersDataSetMap(dto); //데이터셋이 1개 일때, 여러개 일때는 뒤에 보낸데이터셋을 명시 한다.
        Map<String, Object> row;
        
        log("[*** saveResourceidListByOsp ***]");

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
        	row = paramMap.get(i);
        	row.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
            
            int type = getRowType(row);
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	log("ROW_TYPE_UPDATED............................");

            	//1.  ct_lotarea          관련여부   
                //1.2.sf_lot areaid       수정 여부 확인 
                //2.  CT_OSPRECEIPTSENDLOT 수정 처리       checkdate,   checkuser
//                OspreceiptsendlotData ospreceiptsendlotData = new OspreceiptsendlotData();
//                OspreceiptsendlotKey  ospreceiptsendlotKey = ospreceiptsendlotData.key();
				Map<String, Object> ospreceiptsendlot = new HashMap<>();
				ospreceiptsendlot.put("LOTHISTKEY", 		row.get("LOTHISTKEY"));
				ospreceiptsendlot.put("LOTID", 				row.get("LOTID"));
				ospreceiptsendlot.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
                 
//                ospreceiptsendlotData = ospreceiptsendlotData.selectOne();
				ospreceiptsendlot = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlot", ospreceiptsendlot);
				
				log("saveResourceidListByOsp :: SENDUSER is :: "+(String)ospreceiptsendlot.get("SENDUSER"));
				
                if(!(StringUtil.isNullOrEmpty((String)ospreceiptsendlot.get("SENDUSER"))))
                {
                    //추후 인자값 추가 예정.                     
                    throw new BizException("InValidOspData019|"+String.format("LOTID = %s", row.get("LOTID")));
                }            	
            }
        }
        
        for (int i = 0, len = paramMap.size(); i < len; i++)
        {   
        	row = paramMap.get(i);
            
        	getOspreceiptsendlotsegmentData(row, i);
            //CT_OSPRECEIPTSENDLOT 수정 처리       checkdate,   checkuser
        }
        putDataSetMap(dto, result);
    }
    
    
    private void getOspreceiptsendlotsegmentData(Map<String, Object> row, int irow) throws Exception
    {
    	log("[*** getOspreceiptsendlotsegmentData ***]");
//        ISQLUpsertBatch batch = new SQLUpsertBatch();
//        OspreceiptsendlotsegmentData ospreceiptsendlotsegmentData = new OspreceiptsendlotsegmentData();
//        OspreceiptsendlotsegmentKey  ospreceiptsendlotsegmentKey = ospreceiptsendlotsegmentData.key();
//        ospreceiptsendlotsegmentData = new OspreceiptsendlotsegmentData();
         
//        ospreceiptsendlotsegmentKey = ospreceiptsendlotsegmentData.key();
		Map<String, Object> ospreceiptsendlotsegment = new HashMap<>();
		ospreceiptsendlotsegment.put("LOTHISTKEY", 				row.get("LOTHISTKEY"));
		ospreceiptsendlotsegment.put("LOTID", 					row.get("LOTID"));
		ospreceiptsendlotsegment.put("RECEIPTSEQUENCE", 		row.get("RECEIPTSEQUENCE"));
		ospreceiptsendlotsegment.put("PROCESSDEFID", 			row.get("PROCESSDEFID"));
		ospreceiptsendlotsegment.put("PROCESSDEFVERSION", 		row.get("PROCESSDEFVERSION"));
		ospreceiptsendlotsegment.put("PROCESSSEGMENTID", 		row.get("PROCESSSEGMENTID"));
		ospreceiptsendlotsegment.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
         
//        ospreceiptsendlotsegmentData= ospreceiptsendlotsegmentData.selectOne();
		ospreceiptsendlotsegment = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlotSegment", ospreceiptsendlotsegment);
		
        String oldResourceid  = (String)ospreceiptsendlotsegment.get("RESOURCEID");
        String oldAreaid = (String)ospreceiptsendlotsegment.get("AREAID");
        
        log("getOspreceiptsendlotsegmentData :: RESOURCEID/AREAID is :: "+oldResourceid+"/"+oldAreaid+"/ROW:"+row.get("RESOURCEID"));
        
        if (!(oldResourceid.equals(row.get("RESOURCEID"))))
        {
        	ospreceiptsendlotsegment.put("PREVRESOURCEID", 	oldResourceid);
        	ospreceiptsendlotsegment.put("PREVAREAID", 		oldAreaid);
        	ospreceiptsendlotsegment.put("RESOURCEID", 		row.get("RESOURCEID"));
        	ospreceiptsendlotsegment.put("AREAID", 			row.get("AREAID"));
             
        	ospreceiptsendlotsegment.put("VALIDSTATE", 		"Valid");
        	//ospreceiptsendlotsegment.put("LASTTXNID", 	"Modify");
        	ospreceiptsendlotsegment.put("CREATOR", 		row.get("CREATOR"));
        	ospreceiptsendlotsegment.put("MODIFIER", 		row.get("MODIFIER"));
			generalDao.addUpdate(NAMESAPCE + ".updateOspreceiptsendlotSegment", ospreceiptsendlotsegment);
//            batch.execute();
         
            if (irow == 0)
            {
            	log("[*** ================== ***]리소스 ID가 틀리다."+irow+"=0일때만 1번 수행");
            	log("[*** getOspreceiptsendlotsegmentData ***]");
            	log("[*** ================== ***]");
            	getOspReceiptSendLotUpdateData2(row);
            	log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #1");
                getSfLotUpdateData(row);
                log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #2");
                getLotworkresultUpdateData(row);
                log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #3");
            }
            getLotAreaInsertData(row);
        }
        else
        {
            if (irow == 0)
            {
            	log("[*** ================== ***]리소스 ID가 동일 하다."+irow+"=0일때만 1번 수행");
            	log("[*** getOspreceiptsendlotsegmentData ***]");
            	log("[*** ================== ***]");
            	getOspReceiptSendLotUpdateData2(row);
            	log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #1_1");
            }
        }
    }
    
    // Sf_Lot
    private void getSfLotUpdateData(Map<String, Object> row) throws Exception
    {   
    	log("[**************************]");
    	log("[*** getSfLotUpdateData ***]");
    	log("[**************************]");
//        ISQLUpsertBatch batch = new SQLUpsertBatch();
//        LotData lotData = new LotData();
//        LotKey  lotKey = lotData.key();
    	Map<String, Object> lot = new HashMap<>();
    	lot.put("LOTID", row.get("LOTID"));
 
//        lotData = lotData.selectOne();
    	lot = generalDao.addSelectOneMap(NAMESAPCE + ".selectLot", lot);
    	if(lot==null){
    		lot = new HashMap<>();
    		lot.put("LOTID", row.get("LOTID")); //AS-IS에서는 lot은 항상 존재, 없을 경우 키값 넣어 준다.
    	}
    	lot.put("AREAID", 		row.get("AREAID"));
    	lot.put("RESOURCEID", 	row.get("RESOURCEID"));
    	lot.put("CREATOR", 		row.get("CREATOR"));
    	lot.put("MODIFIER", 	row.get("MODIFIER"));
		generalDao.addUpdate(NAMESAPCE + ".updateLot", lot);
//        batch.execute();
     
    }
     
    // Lotworkresult
    private void getLotworkresultUpdateData(Map<String, Object> row)  throws Exception
    {   
    	log("[**********************************]");
    	log("[*** getLotworkresultUpdateData ***]");
    	log("[**********************************]");
//        ISQLUpsertBatch batch = new SQLUpsertBatch();
//        LotworkresultData lotworkresultData = new LotworkresultData();
//        LotworkresultKey  lotworkresultKey = lotworkresultData.key();
    	Map<String, Object> lotWorkResult = new HashMap<>();
    	lotWorkResult.put("LOTID", 		row.get("LOTID"));
    	lotWorkResult.put("TXNHISTKEY", row.get("LOTHISTKEY"));
         
//        lotworkresultData = lotworkresultData.selectOne();
    	lotWorkResult = generalDao.addSelectOneMap(NAMESAPCE + ".selectLotWorkResult", lotWorkResult);
    	if(lotWorkResult==null){
    		lotWorkResult = new HashMap<>();
    		lotWorkResult.put("LOTID", 		row.get("LOTID")); //AS-IS에서는 lot은 항상 존재, 없을 경우 키값 넣어 준다.
        	lotWorkResult.put("TXNHISTKEY", row.get("LOTHISTKEY")); //AS-IS에서는 lot은 항상 존재, 없을 경우 키값 넣어 준다.
    	}
    	lotWorkResult.put("AREAID", 	row.get("AREAID"));
    	lotWorkResult.put("RESOURCEID", row.get("RESOURCEID"));
    	lotWorkResult.put("CREATOR", 	row.get("CREATOR"));
    	lotWorkResult.put("MODIFIER", 	row.get("MODIFIER"));    	
		generalDao.addUpdate(NAMESAPCE + ".updateLotWorkResult", lotWorkResult);
//        batch.execute();     
    }
    
    // 외주 checkdate,   checkuser
    private void getOspReceiptSendLotUpdateData2(Map<String, Object> row) throws Exception
    {
    	log("[***************************************]");
    	log("[*** getOspReceiptSendLotUpdateData2 ***]");
    	log("[***************************************]");
//        ISQLUpsertBatch batch = new SQLUpsertBatch();
//        OspreceiptsendlotData ospreceiptsendlotData = new OspreceiptsendlotData();
//        OspreceiptsendlotKey  ospreceiptsendlotKey = ospreceiptsendlotData.key();
    	Map<String, Object> ospreceiptsendlot = new HashMap<>();
		ospreceiptsendlot.put("LOTHISTKEY", 		row.get("LOTHISTKEY"));
		ospreceiptsendlot.put("LOTID", 				row.get("LOTID"));
		ospreceiptsendlot.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
         
//        ospreceiptsendlotData = ospreceiptsendlotData.selectOne();
		ospreceiptsendlot = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlot", ospreceiptsendlot);
		if(ospreceiptsendlot==null){
			ospreceiptsendlot = new HashMap<>();
			ospreceiptsendlot.put("LOTHISTKEY", row.get("LOTHISTKEY")); //AS-IS에서는 lot은 항상 존재, 없을 경우 키값 넣어 준다.
			ospreceiptsendlot.put("LOTID", 		row.get("LOTID")); //AS-IS에서는 lot은 항상 존재, 없을 경우 키값 넣어 준다.
			ospreceiptsendlot.put("RECEIPTSEQUENCE", row.get("RECEIPTSEQUENCE")); //AS-IS에서는 lot은 항상 존재, 없을 경우 키값 넣어 준다.
		}
        String oldSendAreaid = (String)ospreceiptsendlot.get("SENDAREAID"); //안씀
		ospreceiptsendlot.put("CHECKDATE", 	new Date());
		ospreceiptsendlot.put("SENDAREAID", row.get("AREAID"));
		ospreceiptsendlot.put("CHECKUSER", 	row.get("CHECKUSER"));
		ospreceiptsendlot.put("VALIDSTATE", "Valid");
		//ospreceiptsendlot.put("LASTTXNID","Modify");
		ospreceiptsendlot.put("CREATOR", 	row.get("CREATOR"));
		ospreceiptsendlot.put("MODIFIER", 	row.get("MODIFIER"));
		generalDao.addUpdate(NAMESAPCE + ".updateOspreceiptsendlot2", ospreceiptsendlot);
//        batch.execute();
    }
     
    // LOT 작업장 정보
    private void getLotAreaInsertData(Map<String, Object> row) throws Exception
    {
    	log("[****************************]");
    	log("[*** getLotAreaInsertData ***]");
    	log("[****************************]");
//        ISQLUpsertBatch batch = new SQLUpsertBatch();
//        LotareaData lotareaData = new LotareaData();
//        LotareaKey  lotareaKey = lotareaData.key();
    	Map<String, Object> lotarea = new HashMap<>();
		lotarea.put("LOTID", 					row.get("LOTID"));
		lotarea.put("PROCESSDEFID", 			row.get("PROCESSDEFID"));
		lotarea.put("PROCESSDEFVERSION", 		row.get("PROCESSDEFVERSION"));
		lotarea.put("PROCESSSEGMENTID", 		row.get("PROCESSSEGMENTID"));
		lotarea.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
		lotarea.put("WORKCOUNT", 				row.get("WORKCOUNT"));
		
//        lotareaData =lotareaData.selectOne();
		lotarea = generalDao.addSelectOneMap(NAMESAPCE + ".selectLotarea", lotarea);		
        if (!(lotarea == null))
        {
			lotarea.put("USERSEQUENCE", row.get("USERSEQUENCE"));
			lotarea.put("AREAID", 		row.get("AREAID"));
			lotarea.put("RESOURCEID", 	row.get("RESOURCEID"));
			lotarea.put("CREATOR", 		row.get("CREATOR"));
			lotarea.put("MODIFIER", 	row.get("MODIFIER"));             
			generalDao.addUpdate(NAMESAPCE + ".updateLotarea", lotarea);
//            batch.execute();
             
        }
        else
        {
//            lotareaData = new LotareaData();
//            lotareaKey = lotareaData.key();
        	lotarea = new HashMap<>();
        	lotarea.put("LOTID", 					row.get("LOTID"));
			lotarea.put("PROCESSDEFID", 			row.get("PROCESSDEFID"));
			lotarea.put("PROCESSDEFVERSION", 		row.get("PROCESSDEFVERSION"));
			lotarea.put("PROCESSSEGMENTID", 		row.get("PROCESSSEGMENTID"));
			lotarea.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
			lotarea.put("WORKCOUNT", 				row.get("WORKCOUNT"));
			lotarea.put("USERSEQUENCE", 			row.get("USERSEQUENCE"));
			lotarea.put("AREAID", 					row.get("AREAID"));
			lotarea.put("RESOURCEID", 				row.get("RESOURCEID"));
			lotarea.put("CREATOR", 					row.get("CREATOR"));
			lotarea.put("MODIFIER", 				row.get("MODIFIER"));
			generalDao.addUpdate(NAMESAPCE + ".insertLotarea", lotarea);
//            batch.execute();
        }
         
    }

    
    
    
    
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}