package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitType;

/**
* @file: PCM04400ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04400ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class PCM04400ServiceImpl extends AbstractNbdfService implements PCM04400Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM04400Dao";	
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired 
    private PCMWipService wipService;
    
    /**
     * @fn
     * @brief : 불량 코드 팝업
     * @remark 
     * @see smh.pcm.service.PCM04400Service#selectDefectCodeList4Popup(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectCodeList4Popup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectCodeList4Popup", param));
    }
  

    /**
     * @fn
     * @brief : 전체 불량 처리
     * @remark 
     * @see smh.pcm.service.PCM04400Service#saveDefectAll(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveDefectAll(UiMapDto dto) throws Exception {
    	int result = 0;
		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		
		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
		DataSetMap paramMapTarget = getParametersDataSetMap(dto, "ds_TargetAll"); // Lotlist

		Map<String, Object> paramSearch = paramMapSearch.get(0);
		Map<String, Object> paramTarget; // dt = ds.getTable("lotlist");
    	
		String strEnterprise = paramSearch.get("ENTERPRISEID").toString();
		String strPlant = paramSearch.get("PLANTID").toString();
		String strUserId = paramSearch.get("USERID").toString();
		String strDefectCode = paramSearch.get("DEFECTCODE").toString();
		String strQcSegmentId = paramSearch.get("QCSEGMENTID").toString();
		String strLanguageType = paramSearch.get("LANGUAGETYPE").toString();
		String strCreatedTime = "";
		
		//CREATEDTIME 으로 재공 실사 조정 처리 가능 여부 판단. 
		if(paramSearch.get("CREATEDTIME") != null && !paramSearch.get("CREATEDTIME").toString().isEmpty()){
			
			strCreatedTime = paramSearch.get("CREATEDTIME").toString();
			
			for (int i = 0, n = paramMapTarget.size(); i < n; i++) {
				paramTarget = paramMapTarget.get(i); 
				String lotId = paramTarget.get("LOTID").toString();
				
					HashMap<String, Object> propertyMap = new HashMap<>();
					List<Map<String, Object>> list;
					
					propertyMap.put("LOTID", lotId);
					propertyMap.put("CREATEDTIME", strCreatedTime);
					list = generalDao.addSelect(NAMESAPCE + ".selectHasJobStart", propertyMap);
					String args = lotId + "," + strCreatedTime;
					
					if(list != null && list.size() != 0){	
						throw new BizException("HasJobStart", args);//해당 Lot {0} 은 {1} 이후에 작업 이력이 있습니다.
					}
					
					list = generalDao.addSelect(NAMESAPCE + ".selectHasDefectReg", propertyMap);
					
					if(list != null && list.size() != 0){	
						throw new BizException("HasJobStart", args);//해당 Lot {0} 은 {1} 이후에 불량 이력이 있습니다.
					}
					
					list = generalDao.addSelect(NAMESAPCE + ".selectHasLotGeneal", propertyMap);
					
					if(list != null && list.size() != 0){	
						throw new BizException("HasJobStart", args);//해당 Lot {0} 은 {1} 이후에 분할된 이력이 있습니다.
					}
					
			}
		}
		
		List<String> childLotIds = new ArrayList<String>(); 
		
		for (int i = 0, n = paramMapTarget.size(); i < n; i++) {
			paramTarget = paramMapTarget.get(i); //row = dt.getRow(i);
			
			String lotId = paramTarget.get("LOTID").toString();
			
			HashMap<String, Object> propertyMap = new HashMap<>();
			List<Map<String, Object>> list;
			
			propertyMap.put("LOTID", lotId);
			list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
			
			if(list == null || list.size() == 0){			
				throw new BizException("NotExistLot", "");//해당 Lot이 존재하지 않습니다.
			}
			
			Map<String, Object> lotData = list.get(0);
			
			/***********************************************************
			 * 사용자별 작업장 통제
			 ***********************************************************/
			propertyMap.put("LOTID", lotId);
			propertyMap.put("USERID", strUserId);
			propertyMap.put("AREA", lotData.get("AREAID"));
			propertyMap.put("LANGUAGETYPE", strLanguageType);
			
			list = generalDao.addSelect(NAMESAPCECOM + ".selectAreaListByAuthority", propertyMap);
			if(list == null || list.size() == 0){	
				String args = String.format("LotId=%s  AreaId=%s", lotId, lotData.get("AREAID"));
				throw new BizException("HasNoAuthorityOfArea", args);//해당 작업장에 대한 권한이 없습니다. {0}
			}
			
			/***********************************************************
			 * Check 재공상태
			 ***********************************************************/
			if(!lotData.get("LOTSTATE").equals(LotState.InProduction))
			{
				if(lotData.get("LOTSTATE").equals(LotState.InTransit))
				{
					lotData.put("LOTSTATE", LotState.InProduction);
					
					generalDao.update(NAMESAPCEWIP + ".updatePcmLot", lotData); //lotData.update();
				}
				else if(!lotData.get("LOTSTATE").equals(LotState.InTransit))
				{
					throw new BizException("CheckLotState", lotId);//Lot 상태를 확인하여 주십시오 {0}
				}
			}
			
			/***********************************************************
			 * Hold 해제후 불량 분할
			 ***********************************************************/
			ReleaseHoldLot(lotData,strUserId);
			
			/***********************************************************
			 * Split 공통함수 호출로 Split ,  Update
			 ***********************************************************/
			Double qty = Double.parseDouble(lotData.get("QTY").toString());
			Map<String, Object> splitLot = wipService.splitDefectLot(dto, lotId, qty, qty); //새로 생성된 Child Lot 이 Return 됨. 
			
			String childLotId = splitLot.get("LOTID").toString();
			childLotIds.add(childLotId);
			
			//asis code conversion 
//			splitLot.put("LOTCREATEDTYPE", "Defect");
//			splitLot.put("QTY",0);
//			splitLot.put("PCSQTY", lotData.get("QTY"));
//			splitLot.put("DEFECTQTY", lotData.get("QTY"));
//			splitLot.put("ISDEFECTED","Y");
//			splitLot.put("WEEK" , lotData.get("WEEK"));
			
			//4step 방식 대로 변경함. 
			splitLot.put("LOTCREATEDTYPE", "Defect");
			splitLot.put("ISLOCKING", "Y");
			splitLot.put("ISDEFECTED", "Y");
			splitLot.put("QTY", 0);
			splitLot.put("DEFECTQTY", qty);
			splitLot.put("PCSQTY", 0);
			splitLot.put("ARRAYQTY", 0);
			splitLot.put("PANELQTY", 0);
			splitLot.put("PANELPERQTY", lotData.get("PANELPERQTY"));
			
			updateLot(splitLot);
			
			/***********************************************************
			 * 부모 Lot정보 Update 
			 ***********************************************************/
			propertyMap.clear();
			propertyMap.put("LOTID", lotId);
			lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", propertyMap);

			lotData.put("DEFECTQTY", 0);
			lotData.put("QTY",0);
			lotData.put("PCSQTY",0);
			lotData.put("PANELQTY",0);
			lotData.put("ARRAYQTY",0);
			// 모 lot 전수불량 처리시 DEFECT으로 처리할 경우 LOT HISTORY에서 조회안되는 문제로 DEFECT처리 제거
			//lotData.setIsdefected("Y");
			lotData.put("LOTSTATE", LotState.Terminated);
			
			//generalDao.update(NAMESAPCEWIP + ".updatePcmLot", lotData);
			updateLot(lotData);
			
			
			/***********************************************************
			 * Delete ConsumeMaterialLotTemp 
			 ***********************************************************/
			wipService.deleteConsumeMaterialLotTempByConsumable(dto, lotData); 
//			propertyMap.clear();
//			propertyMap.put("LOTID", lotId);
//			generalDao.delete(NAMESAPCEWIP + ".deletePcmConsumemateriallotTemp", propertyMap);
			
			
			/***********************************************************
			 * Lot Defect 전수 처리 
			 ***********************************************************/
			result += setLotDefectALLInsertData(splitLot, strDefectCode, strQcSegmentId, strUserId, strCreatedTime);
			
			
		}//for (int i = 0, n = paramMapTarget.size(); i < n; i++) {
		
		for(int i = 0; i < childLotIds.size(); i++) {
			// Lot Locking 처리
			wipService.saveLotLocking(dto, childLotIds.get(i), "LotLockinQuality", "LockQCDefect", "SaveLotDefect", strUserId, strLanguageType);
		}
		
        putDataSetMap(dto, result);
    }
    
    



	/**
     * @fn
     * @brief : Lot Defect 전수 처리
     * @remark 
     * @see smh.pcm.service.PCM04400Service#setLotDefectALLInsertData(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private int setLotDefectALLInsertData(Map<String, Object> lotData, String strDefectCode
    								, String strQcSegmentId, String strUserId, String strCreatedTime) throws Exception {
    	int result = 0;
    	String lotId = lotData.get("LOTID").toString();
    	
		Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotData);
		
		String processDefId = processDefInfo.get("PROCESSDEFID").toString();
		String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
		
		//String processPathId = WipService.GetProcessPathId(lotData, processDefId, processDefVersion);
	    String processPathId = wipService.processPathInfo(lotData, processDefId, processDefVersion).get("PROCESSPATHID").toString();

	    String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
	    
	    HashMap<String, Object> defectData = new HashMap<>();
	    defectData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
	    defectData.put("LOTID", lotId);
	    defectData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
	    defectData.put("PLANTID", lotData.get("PLANTID"));
	    defectData.put("AREAID", lotData.get("AREAID"));
	    defectData.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
	    defectData.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
	    defectData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
	    defectData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
	    defectData.put("PROCESSPATHID", processPathId);
	    defectData.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
	    defectData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
	    defectData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
	    defectData.put("DEFECTCODE", strDefectCode);
	    defectData.put("CREATOR", strUserId);
	    
	    Double pcsqty = Double.parseDouble(lotData.get("DEFECTQTY").toString());
	    defectData.put("DEFECTQTY", pcsqty.intValue());
	    defectData.put("QCSEGMENTID", strQcSegmentId);
	    defectData.put("TXNGROUPHISTKEY", txnGroupHistKey);
	    defectData.put("TXNUSER", strUserId);

	    String procState = StringUtil.Object2String(lotData.get("PROCESSSTATE"));
	    if(procState.equals(LotProcessState.WaitForReceive)) defectData.put("OCCURREDSTEP", TransitType.ReceiveLot);
	    else if(procState.equals(LotProcessState.Wait)) defectData.put("OCCURREDSTEP", TransitType.TrackInLot);
	    else if(procState.equals(LotProcessState.Run)) defectData.put("OCCURREDSTEP", TransitType.TrackOutLot);
	    else if(procState.equals(LotProcessState.WaitForSend)) defectData.put("OCCURREDSTEP", TransitType.SendLot);
	    
	    
	    if(!strCreatedTime.isEmpty()) {
	    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    	java.util.Date nowDate = dateFormat.parse(strCreatedTime);
	    	defectData.put("CREATEDTIME", nowDate);
	    }
	    
	    result += generalDao.insert(NAMESAPCEWIP + ".insertPcmLotdefect", defectData); 
	    
	    return result;
	}


	/**
     * @fn
     * @brief : 전체 불량 처리 시, Hold 해제후 불량 분할
     * @remark 
     * @see smh.pcm.service.PCM04400Service#saveDefectLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    private void ReleaseHoldLot(Map<String, Object> Lot,String strUserId)
	{
		HashMap<String, Object> propertyMap = new HashMap<>();
		List<Map<String, Object>> holdList;
		
		propertyMap.put("LOTID", Lot.get("LOTID"));
		holdList = generalDao.addSelect(NAMESAPCEWIP + ".selectPcmLothold", propertyMap);

		for(int i = 0; i < holdList.size(); i++) 
		{
			Map<String, Object> holdLot =  holdList.get(i);
			holdLot.put("HOLDSTATUS", "N");
			holdLot.put("RELEASECOMMENTS","Caused by Scrapped");
			holdLot.put("RELEASEUSER",strUserId);
			holdLot.put("RELEASEDATE", new java.util.Date());	
			generalDao.update(NAMESAPCEWIP + ".updatePcmLothold", holdLot); 
			
		}
		if(Lot.get("ISHOLD").equals("Y"))
		{
			Lot.put("ISHOLD", "N");
			
			updateLot(Lot);
			
		}
		
		
	}
    
    
    /**
     * @fn
     * @brief : Lot별 불량 처리
     * @remark 
     * @see smh.pcm.service.PCM04400Service#saveDefectLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveDefectLot(UiMapDto dto) throws Exception {
    	int result = 0;
    	Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		
		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
		DataSetMap paramMapTarget = getParametersDataSetMap(dto, "ds_TargetLot"); // Lotlist
		DataSetMap paramMapDefect = getParametersDataSetMap(dto, "ds_DefectList"); // Defectlist
		
		Map<String, Object> paramSearch = paramMapSearch.get(0);
		Map<String, Object> paramTarget; // dt = ds.getTable("lotlist");
		Map<String, Object> paramDefect; 
		
		String strEnterprise = paramSearch.get("ENTERPRISEID").toString();
		String strPlant = paramSearch.get("PLANTID").toString();
		String strUserId = paramSearch.get("USERID").toString();
		String strLanguageType = paramSearch.get("LANGUAGETYPE").toString();
		String strOrgDefectQty = paramSearch.get("DEFECTQTY").toString();
		String strDefectQty = paramSearch.get("DEFECTQTY").toString();
		String strDefectUom = paramSearch.get("UOM").toString();
		String strCreatedTime = "";
		
		//CREATEDTIME 으로 재공 실사 조정 처리 가능 여부 판단. 
		if(paramSearch.get("CREATEDTIME") != null && !paramSearch.get("CREATEDTIME").toString().isEmpty()){
			
			strCreatedTime = paramSearch.get("CREATEDTIME").toString();
			
			for (int i = 0, n = paramMapTarget.size(); i < n; i++) {
				paramTarget = paramMapTarget.get(i); 
				String lotId = paramTarget.get("LOTID").toString();
				
					HashMap<String, Object> propertyMap = new HashMap<>();
					List<Map<String, Object>> list;
					
					propertyMap.put("LOTID", lotId);
					propertyMap.put("CREATEDTIME", strCreatedTime);
					list = generalDao.addSelect(NAMESAPCE + ".selectHasJobStart", propertyMap);
					String args = lotId + "," + strCreatedTime;
					
					if(list != null && list.size() != 0){		
						throw new BizException("HasJobStart", args);//해당 Lot {0} 은 {1} 이후에 작업 이력이 있습니다.
					}
					
					list = generalDao.addSelect(NAMESAPCE + ".selectHasDefectReg", propertyMap);
					
					if(list != null && list.size() != 0){	
						throw new BizException("HasJobStart", args);//해당 Lot {0} 은 {1} 이후에 불량 이력이 있습니다.
					}
					
					list = generalDao.addSelect(NAMESAPCE + ".selectHasLotGeneal", propertyMap);
					
					if(list != null && list.size() != 0){	
						throw new BizException("HasJobStart", args);//해당 Lot {0} 은 {1} 이후에 분할된 이력이 있습니다.
					}
					
			}
		}
				
		List<String> childLotIds = new ArrayList<String>(); 
        
		for (int i = 0, n = paramMapTarget.size(); i < n; i++) {
			paramTarget = paramMapTarget.get(i); //row = dt.getRow(i);
			
			String lotId = paramTarget.get("LOTID").toString();
			
			HashMap<String, Object> propertyMap = new HashMap<>();
			List<Map<String, Object>> list;
			
			propertyMap.put("LOTID", lotId);
			list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
			
			if(list == null || list.size() == 0){			
				throw new BizException("NotExistLot", "");//해당 Lot이 존재하지 않습니다.
			}
			
			Map<String, Object> lotData = list.get(0);
			
			/***********************************************************
			 * 사용자별 작업장 통제
			 ***********************************************************/
			propertyMap.put("LOTID", lotId);
			propertyMap.put("USERID", strUserId);
			propertyMap.put("AREA", lotData.get("AREAID"));
			propertyMap.put("LANGUAGETYPE", strLanguageType);
			
			list = generalDao.addSelect(NAMESAPCECOM + ".selectAreaListByAuthority", propertyMap);
			if(list == null || list.size() == 0){	
				String args = String.format("LotId=%s, AreaId=%s", lotId, lotData.get("AREAID"));
				throw new BizException("HasNoAuthorityOfArea", args);//해당 작업장에 대한 권한이 없습니다. {0}
			}
			
			if(strDefectUom.equals("PNL")) {
				Double panel4Qty = Double.parseDouble(lotData.get("PANELPERQTY").toString());
				strDefectQty = String.valueOf(Math.ceil(Double.parseDouble(strOrgDefectQty) / panel4Qty) * panel4Qty);
			}
			else {
				strDefectQty = strOrgDefectQty;
			}

			String childLotId = "";
			
			// 전수불량이 아닌 경우 Lot Split
			if(Double.parseDouble(lotData.get("PCSQTY").toString()) > Double.parseDouble(strDefectQty)){
				/***********************************************************
				 * Split 공통함수 호출로 Split ,  Update
				 ***********************************************************/
				Double qty = Double.parseDouble(strDefectQty);
				Map<String, Object> splitLot = wipService.splitDefectLot(dto, lotId, qty, qty); //새로 생성된 Child Lot 이 Return 됨. 
				
				childLotId = splitLot.get("LOTID").toString();
				childLotIds.add(childLotId);
				
				//asis code conversion 
//				splitLot.put("LOTCREATEDTYPE", "Defect");
//				splitLot.put("QTY",0);
//				splitLot.put("PCSQTY", qty);
//				splitLot.put("DEFECTQTY", qty);
//				splitLot.put("ISDEFECTED","Y");
//				splitLot.put("WEEK" , lotData.get("WEEK"));
				
				//4step 방식 대로 변경함. 
				splitLot.put("LOTCREATEDTYPE", "Defect");
				splitLot.put("ISLOCKING", "Y");
				splitLot.put("ISDEFECTED", "Y");
				splitLot.put("QTY", 0);
				splitLot.put("DEFECTQTY", qty);
				splitLot.put("PCSQTY", 0);
				splitLot.put("ARRAYQTY", 0);
				splitLot.put("PANELQTY", 0);
				splitLot.put("PANELPERQTY", lotData.get("PANELPERQTY"));
				
				generalDao.update(NAMESAPCEWIP + ".updatePcmLot", splitLot);
				
				
				/***********************************************************
				 * 부모 Lot정보 Update 
				 ***********************************************************/
				propertyMap.clear();
				propertyMap.put("LOTID", lotId);
				lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", propertyMap);

				if (lotData.get("DEFECTUNIT") == null || ( lotData.get("DEFECTUNIT").toString().isEmpty()) && strDefectUom.equals("PCS"))
				{
					lotData.put("DEFECTUNIT", strDefectUom);
				}
				
				//lotData.put("DEFECTQTY", lotData.get("QTY"));
				//lotData.put("QTY",0);
				Double lot_pcsQty = Double.parseDouble(lotData.get("PCSQTY").toString()); //원 수량
				Double pcsQty = lot_pcsQty - Double.parseDouble(strDefectQty); //  남는 수량 = 원 수량 - 불량 수량. 
				Double lot_panelQty = Double.parseDouble(lotData.get("PANELQTY").toString()); //원 panel 수량. 
				Double panel4Qty = Double.parseDouble(lotData.get("PANELPERQTY").toString()); 
//				Double panelQty = lot_panelQty - Math.ceil(Double.parseDouble(strDefectQty) / panel4Qty); //남는 panel 수량 = 원 panel 수량 - 불량 panel 수량.
				Double panelQty = Math.ceil(pcsQty / panel4Qty); // TOBE 는 PCS 를 기준으로 변경함.  
				//lotData.setPanelqty(lotData.getPanelqty() - Math.ceil(Double.parseDouble(strDefectQty) / lotData.getPanelperqty()));
				
				lotData.put("QTY",pcsQty);
				lotData.put("PCSQTY",pcsQty);
				lotData.put("PANELQTY",panelQty);
				
				generalDao.update(NAMESAPCEWIP + ".updatePcmLot", lotData);
				
				
			} else { //전수 불량인 경우(같거나 더 커버리면 전수 불량으로 처리)
				/***********************************************************
				 * Check 재공상태
				 ***********************************************************/
				if(!lotData.get("LOTSTATE").equals(LotState.InProduction))
				{
					if(lotData.get("LOTSTATE").equals(LotState.InTransit))
					{
						lotData.put("LOTSTATE", LotState.InProduction);
						
						generalDao.update(NAMESAPCEWIP + ".updatePcmLot", lotData); //lotData.update();
					}
					else if(!lotData.get("LOTSTATE").equals(LotState.InTransit))
					{
						throw new BizException("CheckLotState", lotId);//Lot 상태를 확인하여 주십시오 {0}
					}
				}
				
				/***********************************************************
				 * Hold 해제후 불량 분할
				 ***********************************************************/
				ReleaseHoldLot(lotData,strUserId);
				
				/***********************************************************
				 * Split 공통함수 호출로 Split ,  Update
				 ***********************************************************/
				Double qty = Double.parseDouble(lotData.get("QTY").toString());
				Map<String, Object> splitLot = wipService.splitDefectLot(dto, lotId, qty, qty); //새로 생성된 Child Lot 이 Return 됨. 
				
				childLotId = splitLot.get("LOTID").toString();
				childLotIds.add(childLotId);
				
				//asis code conversion 
//				splitLot.put("LOTCREATEDTYPE", "Defect");
//				splitLot.put("QTY",0);
//				splitLot.put("PCSQTY", lotData.get("QTY"));
//				splitLot.put("DEFECTQTY", lotData.get("QTY"));
//				splitLot.put("ISDEFECTED","Y");
//				splitLot.put("WEEK" , lotData.get("WEEK"));
				
				//4step 방식 대로 변경함. 
				splitLot.put("LOTCREATEDTYPE", "Defect");
				splitLot.put("ISLOCKING", "Y");
				splitLot.put("ISDEFECTED", "Y");
				splitLot.put("QTY", 0);
				splitLot.put("DEFECTQTY", qty);
				splitLot.put("PCSQTY", 0);
				splitLot.put("ARRAYQTY", 0);
				splitLot.put("PANELQTY", 0);
				splitLot.put("PANELPERQTY", lotData.get("PANELPERQTY"));
				
				generalDao.update(NAMESAPCEWIP + ".updatePcmLot", splitLot);
				
				
				/***********************************************************
				 * 부모 Lot정보 Update 
				 ***********************************************************/
				propertyMap.clear();
				propertyMap.put("LOTID", lotId);
				lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", propertyMap);

				lotData.put("DEFECTQTY", 0);
				lotData.put("QTY",0);
				lotData.put("PCSQTY",0);
				lotData.put("PANELQTY",0);
				lotData.put("ARRAYQTY",0);
				// 모 lot 전수불량 처리시 DEFECT으로 처리할 경우 LOT HISTORY에서 조회안되는 문제로 DEFECT처리 제거
				//lotData.setIsdefected("Y");
				lotData.put("LOTSTATE", LotState.Terminated);
				
				generalDao.update(NAMESAPCEWIP + ".updatePcmLot", lotData);
				
				
				
			} //if(Double.parseDouble(lotData.get("PCSQTY").toString()) > Double.parseDouble(strDefectQty)){ //전수 불량인지.
			
			/***********************************************************
			 * Delete ConsumeMaterialLotTemp 
			 ***********************************************************/
			wipService.deleteConsumeMaterialLotTempByConsumable(dto, lotData);
//			propertyMap.clear();
//			propertyMap.put("LOTID", lotId);
//			generalDao.delete(NAMESAPCEWIP + ".deletePcmConsumemateriallotTemp", propertyMap);
			
			
			if(childLotId.equals(""))  childLotId = lotId; 
			String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
			
			// Defect Data 저장
			for (int k = 0, m = paramMapDefect.size(); k < m; k++) {
				paramDefect = paramMapDefect.get(i); 
				result += setLotDefectInsertData(childLotId, paramDefect, strUserId, txnGroupHistKey,strCreatedTime);
			}
		}//for (int i = 0, n = paramMapTarget.size(); i < n; i++) {
		

		for(int i = 0; i < childLotIds.size(); i++) {
			// Lot Locking 처리
			wipService.saveLotLocking(dto, childLotIds.get(i), "LotLockinQuality", "LockQCDefect", "SaveLotDefect", strUserId, strLanguageType);
		}
		
        putDataSetMap(dto, result);
    }


	private int setLotDefectInsertData(String lotId, Map<String, Object> paramDefect
						, String strUserId, String txnGroupHistKey, String strCreatedTime) throws ParseException {
		int result = 0;
		HashMap<String, Object> propertyMap = new HashMap<>();
		List<Map<String, Object>> list;
		
		propertyMap.put("LOTID", lotId);
		list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
		
		if(list == null || list.size() == 0){			
			throw new BizException("NotExistLot", "");//해당 Lot이 존재하지 않습니다.
		}
		
		Map<String, Object> lotData = list.get(0);
		
		/***********************************************************
		 * Check 재공상태
		 ***********************************************************/
		if(!lotData.get("LOTSTATE").equals(LotState.InProduction))
		{
			if(!lotData.get("LOTSTATE").equals(LotState.InTransit))
			{
				throw new BizException("CheckLotState", lotId);//Lot 상태를 확인하여 주십시오 {0}
			}
			
		}
		// Lot Defect 데이터 입력
		HashMap<String, Object> defectData = new HashMap<>();
		
	    defectData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
	    defectData.put("LOTID", lotId);
	    defectData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
	    defectData.put("PLANTID", lotData.get("PLANTID"));
	    defectData.put("AREAID", lotData.get("AREAID"));
	    defectData.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
	    defectData.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
	    defectData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
	    defectData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
	    //defectData.put("PROCESSPATHID", processPathId);
	    defectData.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
	    defectData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
	    defectData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
	    defectData.put("DEFECTCODE", paramDefect.get("DEFECTCODE"));
	    defectData.put("QCSEGMENTID", paramDefect.get("QCSEGMENTID"));
	    defectData.put("REASONCONSUMABLEDEFID", paramDefect.get("REASONCONSUMABLEDEFID"));
	    defectData.put("REASONCONSUMABLELOTID", paramDefect.get("REASONCONSUMABLELOTID"));
	    defectData.put("REASONSEGMENTID", paramDefect.get("REASONPROCESSSEGMENTID"));
	    defectData.put("REASONAREAID", paramDefect.get("REASONAREAID"));
	    defectData.put("DESCRIPTION", paramDefect.get("DESCRIPTION"));
	    defectData.put("CREATOR", strUserId);
	    
	    String procState = StringUtil.Object2String(lotData.get("PROCESSSTATE"));
	    if(procState.equals(LotProcessState.WaitForReceive)) defectData.put("OCCURREDSTEP", TransitType.ReceiveLot);
	    else if(procState.equals(LotProcessState.Wait)) defectData.put("OCCURREDSTEP", TransitType.TrackInLot);
	    else if(procState.equals(LotProcessState.Run)) defectData.put("OCCURREDSTEP", TransitType.TrackOutLot);
	    else if(procState.equals(LotProcessState.WaitForSend)) defectData.put("OCCURREDSTEP", TransitType.SendLot);
	    
	    Double pcsqty = Double.parseDouble(paramDefect.get("QTY").toString());
	    defectData.put("DEFECTQTY", pcsqty.intValue());
	    
	    defectData.put("TXNGROUPHISTKEY", txnGroupHistKey);
	    defectData.put("TXNUSER", strUserId);

	    
	    if(!strCreatedTime.isEmpty()) {
	    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    	java.util.Date nowDate = dateFormat.parse(strCreatedTime);
	    	defectData.put("CREATEDTIME", nowDate);
	    }
	    
	    result += generalDao.insert(NAMESAPCEWIP + ".insertPcmLotdefect", defectData); 
					
		return result;
	}
    
	
	private void updateLot(Map<String, Object> lot) {
		lot.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lot);
		lot.put("TXNHISTKEY", lot.get("LASTTXNHISTKEY"));
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lot);
	}
   
}