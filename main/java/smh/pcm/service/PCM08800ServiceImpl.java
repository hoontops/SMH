package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file		: PCM08800ServiceImpl.java
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
public class PCM08800ServiceImpl extends AbstractNbdfService implements PCM08800Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08800Dao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private PCMCommonService commonService;

    //물류창고 출고 조회 발행
    public void selectIssueOutboundWarehouseList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
    	
    	log("[*** selectIssueOutboundWarehouseList ***]"+sqlId);
    	log("--------[1] P_PLANTID :: "+			param.get("P_PLANTID"));
    	log("--------[2] P_LOTID :: "+				param.get("P_LOTID"));
    	log("--------[3] P_LOTTYPE :: "+			param.get("P_LOTTYPE"));
    	log("--------[3] P_AREAID :: "+				param.get("P_AREAID"));
    	log("--------[4] P_RECEIPTUSER :: "+		param.get("P_RECEIPTUSER"));
    	log("--------[5] P_PRODUCTDEFID :: "+		param.get("P_PRODUCTDEFID"));
    	log("--------[6] P_PRODUCTDEFVERSION :: "+	param.get("P_PRODUCTDEFVERSION"));
    	log("--------[7] P_RECEIPTDATE_PERIODFR :: "+param.get("P_RECEIPTDATE_PERIODFR"));
    	log("--------[8] P_RECEIPTDATE_PERIODTO :: "+param.get("P_RECEIPTDATE_PERIODTO"));
    	log("--------[7] P_SENDDATE_PERIODFR :: "+	param.get("P_SENDDATE_PERIODFR"));
    	log("--------[8] P_SENDDATE_PERIODTO :: "+	param.get("P_SENDDATE_PERIODTO"));
    	log("--------[9] USERID :: "+				param.get("USERID"));
    	log("--------[9] P_SENDUSER :: "+			param.get("P_SENDUSER"));
    	log("--------[10] LANGUAGETYPE :: "+		param.get("LANGUAGETYPE"));
    	log("--------[12] *** SQL_ID *** :: "+		param.get("SQL_ID"));
    	
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    
    //선택 건 출고전표 발행
    public void updateIssueOutboundWarehouse(UiMapDto dto) throws Exception{
    	log("@@@updateIssueOutboundWarehouse in");
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> row;
        
        String uuid = UUID.randomUUID().toString();
        
        //선택 건 update
        for (int i = 0, n = paramMap.size(); i < n; i++) {
        	row = paramMap.get(i);
        	
        	log("[*** updateIssueOutboundWarehouse ***]"+row.toString());
        	
        	getUpdateData(row);
        	
        	insertPrintData(row, uuid);
        }
        
        //print dataset ready
        List<Map<String, Object>> dtPrint = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> tempList;
        List<Map<String, Object>> slipKeyList;
        Map<String, Object> tempMap;
        for (int i = 0, n = paramMap.size(); i < n; i++) { //선택 건 처리
        	row = paramMap.get(i);
        	row.put("P_LOTHISTKEY", 		row.get("LOTHISTKEY"));
        	row.put("P_LOTID", 				row.get("LOTID"));
        	row.put("P_RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
        	row.put("P_PATHSEQUENCESTART", 	row.get("PATHSEQUENCESTART"));
        	row.put("P_PATHSEQUENCEEND", 	row.get("PATHSEQUENCEEND"));
        	row.put("LANGUAGETYPE", 		row.get("SESSION_LANGUAGETYPE"));
        	log("--------[전표:1] P_LOTHISTKEY :: "+					row.get("P_LOTHISTKEY"));
        	log("--------[전표:2] P_LOTID :: "+							row.get("P_LOTID"));
        	log("--------[전표:3] P_RECEIPTSEQUENCE :: "+			row.get("P_RECEIPTSEQUENCE"));
        	log("--------[전표:4] P_PATHSEQUENCESTART :: "+		row.get("P_PATHSEQUENCESTART"));
        	log("--------[전표:5] P_PATHSEQUENCEEND :: "+		row.get("P_PATHSEQUENCEEND"));
        	log("--------[전표:6] LANGUAGETYPE :: "+				row.get("LANGUAGETYPE"));
        	tempList = generalDao.addSelect(NAMESAPCE + ".selectIssueOutboundWarehouseInquiryOutputslipList", row);
        	log("-------- 전표 찾기 결과 :: "+			tempList.size());
        	for(int j=0; j<tempList.size(); j++){
        		tempMap = tempList.get(j);
        		dtPrint.add(tempMap);
        	}
        	log("-------- [ Final Count ] :: "+dtPrint.size());
        }
        
        Map<String, Object> row2 = new HashMap<>();
        row2.put("P_UUID", 				uuid);
        slipKeyList = generalDao.addSelect(NAMESAPCE + ".selectOutSlipdata", row2);
        
        putDataSetMap(dto, dtPrint, "output");
        putDataSetMap(dto, slipKeyList, "output2");
    }    
    
    
    // 인쇄일자및 인쇄 횟수 수정 처리  update 
    private void getUpdateData(Map<String, Object> row) throws Exception
    {
    	String strPrintno="";
//      ISQLUpsertBatch batch = new SQLUpsertBatch();
//      OspreceiptsendlotData ospreceiptsendlotData = new OspreceiptsendlotData();
//      OspreceiptsendlotKey  ospreceiptsendlotKey = ospreceiptsendlotData.key();
		Map<String, Object> ospreceiptsendlot = new HashMap<>();
		ospreceiptsendlot.put("LOTHISTKEY", 		row.get("LOTHISTKEY"));
		ospreceiptsendlot.put("LOTID", 				row.get("LOTID"));
		ospreceiptsendlot.put("RECEIPTSEQUENCE", 	row.get("RECEIPTSEQUENCE"));
//      ospreceiptsendlotData = ospreceiptsendlotData.selectOne();
		ospreceiptsendlot = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlot", ospreceiptsendlot);
		if(ospreceiptsendlot==null){
			ospreceiptsendlot = new HashMap<>();
			ospreceiptsendlot.put("LOTHISTKEY", 	row.get("LOTHISTKEY"));
			ospreceiptsendlot.put("LOTID", 			row.get("LOTID"));
			ospreceiptsendlot.put("RECEIPTSEQUENCE", row.get("RECEIPTSEQUENCE"));
			ospreceiptsendlot.put("PRINTCOUNT", 	null);
		}
		if (ospreceiptsendlot.get("PRINTCOUNT")==null) 
		{
			ospreceiptsendlot.put("PRINTCOUNT", 1);
		}
		else
		{
			log("[*** 확인(PRINTCOUNT) ***]"+ospreceiptsendlot.get("PRINTCOUNT"));
			double dblprintcount = NumberUtil.toDouble(ospreceiptsendlot.get("PRINTCOUNT")+"");
			dblprintcount = dblprintcount +1;
			ospreceiptsendlot.put("PRINTCOUNT", dblprintcount);
		}
		strPrintno = getOspOutPutSlipNo((String)row.get("ENTERPRISEID"), (String)row.get("PLANTID"), (String)row.get("AREAID"), (String)row.get("PROCESSSEGMENTID"), (String)row.get("PROCESSDEFVERSION"));
		ospreceiptsendlot.put("PRINTNO", 	strPrintno);
		ospreceiptsendlot.put("PRINTDATE", 	new Date());
		ospreceiptsendlot.put("PRINTUSER", 	row.get("PRINTUSER"));
		ospreceiptsendlot.put("VALIDSTATE", "Valid");
		ospreceiptsendlot.put("CREATOR", 	row.get("CREATOR"));
		ospreceiptsendlot.put("MODIFIER", 	row.get("MODIFIER"));
		//ospreceiptsendlot.put("LASTTXNID", TransactionId.MODIFY);
		log("[*** updateOspreceiptsendlotsegmentInsertData ***]"+ospreceiptsendlot.toString());
		generalDao.addUpdate(NAMESAPCE + ".updateOspreceiptsendlotsegmentInsertData", ospreceiptsendlot);
//      batch.execute();
    }
     
    private String getOspOutPutSlipNo(String sEnterpriseId, String sPlantid, String areaId, String processSegmentId, String processSegmentVersion) throws Exception {    	
        String OspOutPutSlipNo="";
        OspOutPutSlipNo = commonService.selectMaxOutboundNo(sEnterpriseId, sPlantid, "", areaId, processSegmentId, processSegmentVersion); //20210317 MODIFY
        /*
        TxnInfo txnInfo = TxnInfoUtil.getTxnInfo(this.getMessage().getTxnData());
     
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyMMdd");
        Date today = new Date();
        String strmonth = dateFormat.format(today);
        List<String> list = new ArrayList<String>();
        list.add(sPlantid);
        list.add(strmonth);
        list.add("-");  
        List<String> idList = IdService.createId("OspOutPutSlipNo", 1, list, txnInfo);
        OspOutPutSlipNo = idList.get(0);
        OspOutPutSlipNo= OspOutPutSlipNo.replace(sPlantid, "");
        OspOutPutSlipNo= OspOutPutSlipNo.trim();
        */
        return OspOutPutSlipNo;
    }
    
    // 프린트 출력용 테이블 데이터 추가
    private void insertPrintData(Map<String, Object> row, String uuid) throws Exception
    {
    	Map<String, Object> printKey = new HashMap<>();
    	printKey.put("UUID", 						uuid);
    	printKey.put("LOTHISTKEY", 				row.get("LOTHISTKEY"));
    	printKey.put("LOTID", 						row.get("LOTID"));
    	printKey.put("RECEIPTSEQUENCE", 		row.get("RECEIPTSEQUENCE"));
    	printKey.put("PATHSEQUENCESTART", 	row.get("PATHSEQUENCESTART"));
    	printKey.put("PATHSEQUENCEEND", 		row.get("PATHSEQUENCEEND"));
		generalDao.addUpdate(NAMESAPCE + ".insertOutSlipdata", printKey);
    }

    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}