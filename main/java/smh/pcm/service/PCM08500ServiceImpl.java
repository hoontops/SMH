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
 * @file		: PCM08500ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08500ServiceImpl
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
public class PCM08500ServiceImpl extends AbstractNbdfService implements PCM08500Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08500Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 공정관리물류창고 입고 조회
     * @remark 
     * @see smh.pcm.service.PCM08300Service#selectOutSourceWarehouseWare(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOutSourceWarehouseWare(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("[TRACE:1]//////////////////////////////////////////////////////////////// sqlId :: "+sqlId);
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
     * @see smh.pcm.service.PCM08300Service#saveOutSourceWarehouseWare(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveOutSourceWarehouseWare(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto); //데이터셋이 1개 일때, 여러개 일때는 뒤에 보낸데이터셋을 명시 한다.
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            insertData(param);
        }        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief 외주창고입고 insert
     * @remark 
     * @see smh.pcm.service.PCM08300Service#saveOutSourceWarehouseWare(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void insertData(Map<String, Object> row) throws Exception
	{	
		// 다시 자료의 조회 건수 비교 
		Map<String,Object> param = new HashMap<>();
		param.put("P_LOTID", row.get("LOTID"));	
		param.put("P_PLANTID", row.get("PLANTID"));	
		
		List<Map<String, Object>> attributeList = selectOutSourceWarehouseWareList(param);
		log("attributeList SZ :: "+attributeList.size());
		
		if(attributeList != null && attributeList.size() > 0)
		{
			Map<String, Object> map = attributeList.get(0);
			String strWearOkCheck = map.get("WEAROKCHECK").toString();
			log("strWearOkCheck :: "+strWearOkCheck);
			
			if (strWearOkCheck.equals("OK"))
			{
				//채번 로직 ..
				double dblReceiptsequence = selectCreateIdLineSeq(row);
				log("dblReceiptsequence :: "+dblReceiptsequence);
				
				System.out.println("LOTHISTKEY :: "+		row.get("LOTHISTKEY"));
				System.out.println("LOTID :: "+				row.get("LOTID"));
				System.out.println("dblReceiptsequence :: "+dblReceiptsequence);
				System.out.println("PLANTID :: "+			row.get("PLANTID"));
				System.out.println("ENTERPRISEID :: "+		row.get("ENTERPRISEID"));
				System.out.println("Date :: "+				new Date());
				System.out.println("OSPRECEIPTUSER :: "+	row.get("OSPRECEIPTUSER"));
				System.out.println("AREAID :: "+			row.get("AREAID"));
				System.out.println("Valid :: 				Valid");
				System.out.println("Y :: 					Y");
				System.out.println("TransactionId :: TransactionId.CREATE");
				
				param.put("LOTHISTKEY", 		row.get("LOTHISTKEY"));
				param.put("LOTID", 				row.get("LOTID"));
				param.put("RECEIPTSEQUENCE", 	dblReceiptsequence);
				param.put("PLANTID", 			row.get("PLANTID"));				
				param.put("ENTERPRISEID", 		row.get("ENTERPRISEID"));
				param.put("RECEIPTDATE", 		new Date());
				param.put("RECEIPTUSER", 		row.get("OSPRECEIPTUSER"));				
				param.put("SENDAREAID", 		row.get("AREAID"));
				param.put("VALIDSTATE", 		"Valid");
				param.put("ISLASTRECEIPT", 		"Y");//상태값 추가 처리
				//param.put("LASTTXNID", 		"Create");
				param.put("CREATOR", 			row.get("CREATOR"));
				param.put("MODIFIER", 			row.get("MODIFIER"));
				
				generalDao.addUpdate(NAMESAPCE + ".insertOutsourcedWarehouseWear", param);
				log("insertOutsourcedWarehouseWear ok");
								
				if (dblReceiptsequence > 1)
				{
					updateOspreceiptsendlotsegmentStatusChange(row, dblReceiptsequence);
					log("updateOspreceiptsendlotsegmentStatusChange ok");
				}
				
				insertOspreceiptsendlotsegmentMain(row, dblReceiptsequence);
				log("nsertOspreceiptsendlotsegmentMain ok");
			}
			else
			{
				log(String.format("OspreceiptsendlotKey Key = %s", row.get("LOTID")));
				throw new BizException("InValidOspData018|"+String.format("OspreceiptsendlotKey Key = %s", row.get("LOTID")));
			}
			
		}
		else
		{
			log(String.format("OspreceiptsendlotKey Key = %s", row.get("LOTID")));
			throw new BizException("InValidOspData002|"+String.format("OspreceiptsendlotKey Key = %s", row.get("LOTID")));
		}
	}
    
    /**
     * @fn 
     * @brief 공정관리물류창고 입고 조회
     * @remark
     */
    public List<Map<String, Object>> selectOutSourceWarehouseWareList(Map<String, Object> dto) throws Exception {
    	return generalDao.addSelect(NAMESAPCE + ".selectOutSourceWarehouseWare" ,dto);
    }
    
    /**
     * @fn 
     * @brief 채번
     * @remark
     */
    public double selectCreateIdLineSeq(Map<String, Object> row) throws Exception
 	{
 		Map<String,Object> insertMap =new HashMap<>();
 		insertMap.put("P_LOTID", 		row.get("LOTID"));	
 		insertMap.put("P_PLANTID", 		row.get("PLANTID"));	
 		insertMap.put("P_LOTHISTKEY", 	row.get("LOTHISTKEY"));	
 		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESAPCE + ".selectOutsourcedWarehouseWearReceiptsequence", insertMap);
 		Map<String, Object> map = degreeList.get(0);
 		String strtemp = map.get("RECEIPTSEQUENCE").toString();
 		double dblseq = Double.parseDouble(strtemp);
 		
 		log("dblseq :: "+dblseq);
 		
 		return dblseq;
 	}
    
    /**
     * @fn 
     * @brief 상태코드 업데이트
     * @remark
     */
    public void updateOspreceiptsendlotsegmentStatusChange(Map<String, Object> row, Double dblReceiptsequence) throws Exception 
    {
    	//채번 로직 ..
		double dblTempReceiptsequence = dblReceiptsequence - 1;

		Map<String,Object> updateMap =new HashMap<>();
		updateMap.put("LOTHISTKEY",			row.get("LOTHISTKEY"));
		updateMap.put("LOTID", 				row.get("LOTID"));
		updateMap.put("RECEIPTSEQUENCE", 	dblTempReceiptsequence);
		updateMap.put("PLANTID", 			row.get("PLANTID"));
		Map<String, Object> degree = generalDao.addSelectOneMap(NAMESAPCE + ".selectOspreceiptsendlotsegmentStatusChange", updateMap);
		
		log("degree :: "+degree);
		
		if (!(degree == null))
		{
			//상태값 변경 
			updateMap.put("ISLASTRECEIPT", 	"N");
			//updateMap.put("LASTTXNID", 	"Modify");
			generalDao.addUpdate(NAMESAPCE + ".updateOspreceiptsendlotsegmentStatusChange", updateMap);
			
			log("updateOspreceiptsendlotsegmentStatusChange ok");
		}
    }
    
    /**
     * @fn 
     * @brief 공정정보 추가 정보 조회 -> 외주창고입고 insert
     * @remark
     */
	public void insertOspreceiptsendlotsegmentMain(Map<String, Object> row, Double dblReceiptsequence) throws Exception 
	{
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("P_LOTID", 				row.get("LOTID"));	
		insertMap.put("P_PLANTID", 				row.get("PLANTID"));	
		insertMap.put("P_LOTHISTKEY", 			row.get("LOTHISTKEY"));	
		insertMap.put("P_PATHSEQUENCESTART", 	row.get("PATHSEQUENCESTART"));	
		insertMap.put("P_PATHSEQUENCEEND", 		row.get("PATHSEQUENCEEND"));	
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESAPCE + ".selectOutsourcedWarehouseWearSegment", insertMap);
		
		log("degreeList :: "+degreeList);
		
		if(degreeList != null && degreeList.size() > 0)
		{			
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> map = degreeList.get(i);
				insertOspreceiptsendlotsegmentInsertData(map, row, dblReceiptsequence);
		
				log("insertOspreceiptsendlotsegmentInsertData ok");				
			}
		}
	}
	
    /**
     * @fn 
     * @brief 외주창고입고 insert
     * @remark
     */
    public void insertOspreceiptsendlotsegmentInsertData(Map<String, Object> map, Map<String, Object> row, Double dblReceiptsequence) throws Exception
	{
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTHISTKEY", 			row.get("LOTHISTKEY"));
		insertMap.put("LOTID", 					row.get("LOTID"));
		insertMap.put("RECEIPTSEQUENCE", 		dblReceiptsequence);
		insertMap.put("PROCESSDEFID", 			map.get("PROCESSDEFID").toString());
		insertMap.put("PROCESSDEFVERSION", 		map.get("PROCESSDEFVERSION").toString());
		insertMap.put("PROCESSSEGMENTID", 		map.get("PROCESSSEGMENTID").toString());
		insertMap.put("PROCESSSEGMENTVERSION", 	map.get("PROCESSSEGMENTVERSION").toString());		
		insertMap.put("PATHSEQUENCE", 			Integer.parseInt(map.get("PATHSEQUENCE").toString()));
		insertMap.put("USERSEQUENCE", 			map.get("USERSEQUENCE").toString());
		insertMap.put("RESOURCEID", 			map.get("RESOURCEID").toString());
		insertMap.put("AREAID", 				map.get("AREAID").toString());
		insertMap.put("PREVRESOURCEID", 		map.get("RESOURCEID").toString());
		insertMap.put("PREVAREAID", 			map.get("AREAID").toString());
		insertMap.put("PLANTID", 				map.get("PLANTID").toString());
		insertMap.put("ENTERPRISEID", 			map.get("ENTERPRISEID").toString());		
		insertMap.put("VALIDSTATE", 			"Valid");
		//insertMap.put("LASTTXNID", 			"Create");
		insertMap.put("CREATOR", 				row.get("CREATOR"));
		insertMap.put("MODIFIER", 				row.get("MODIFIER"));		
		log("insertOspreceiptsendlotsegmentInsertData ok");
		generalDao.addUpdate(NAMESAPCE + ".insertOspreceiptsendlotsegmentInsertData", insertMap);
	}
    
    private void log(String message){
    	logger.debug("////////////////////////////////////////////////////////////////"+message);
    }
}