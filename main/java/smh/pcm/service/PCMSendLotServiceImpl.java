package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCMSendLotServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMSendLotServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class PCMSendLotServiceImpl extends AbstractNbdfService implements PCMSendLotService {

    public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACELOTCOM = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACE_CMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    public static final String NAMESPACE_RL = "smh.pcm.dao.PCMReworkLotDao";

    public static final String NAMESPACE = "smh.pcm.dao.PCMSendLotDao";
    
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMLotCommonService commonService;

    @Autowired
    private PCMWipService wipService;
    
    private static String TXNID = "SaveSendLot";
    /*
     * 프  로  그  램  명	: 공정 관리 > 공정작업 > 인계 등록
     * 설               명	: 인계 등록 화면에서 저장 버튼 클릭 시 데이터를 처리한다.
     * 수   정   이   력	: 
     */
	@Override
	public void SendLot(UiMapDto dto, String lotId, String processSegmentId, String toAreaId, String userId,
			String comment, double defectQty, List<Map<String, Object>> defectList, String enterpriseId, String plantId,
			boolean isRework, Map<String, Object> txnInfo) throws Exception {
		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE_CMSA+".selectCurrentSystemTime","");
    	
    	String sToday = systemDate.get(0).get("TODATE").toString();
    	
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	Date now = dateFormat.parse(sToday);		
		
		Map<String, Object> lot = wipService.validateLotInfo(lotId);
		
		// Insert Lot Comment
		if (!comment.isEmpty())
			commonService.SaveLotComment(lot, comment, userId, TransitionId.SendLot);
		
		// Data Validation
		ValidationData(lot, lotId, processSegmentId, userId, toAreaId, defectQty);
		
		// 불량이 있는 경우 splitLot API 호출
		if (defectQty > 0)
		{
//			TransactionUtils.setTransactionId(txnInfo, "splitLot");
			
			String childLotId = "";
			
			String splitSerialNo = lotId.substring(0, lotId.length() - 4);
			
			Map<String, Object> splitLotMap = new HashMap<>();
			splitLotMap.put("LOTID", splitSerialNo);
			
			List<Map<String, Object>> resultMap = generalDao.addSelect(NAMESPACE+".GetDefectLotMaxSequence", splitLotMap);
			char serialChar;
			int serialNo = 0;
			
			if (resultMap.size() > 0)
			{
				String lastSerial = resultMap.get(0).get("LASTID").toString();
				
				serialChar = lastSerial.substring(0, 1).toCharArray()[0];
				serialNo = Integer.parseInt(lastSerial.substring(1, 3)) + 1;
				
				if (serialNo > 99)
				{
					serialChar++;
					serialNo = 1;
				}
			}
			else
			{
				serialChar = 'A';
				serialNo = 1;
			}
			
			childLotId = lotId.substring(0, lotId.length() - 3) + String.format("%s%02d", String.valueOf(serialChar), serialNo);
			//splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty)
			Map<String, Object> cld = wipService.splitLot(dto, lot, childLotId, defectQty, defectQty);
			
//			TransactionUtils.setTransactionId(txnInfo, TXNID);
			
//			lot = lot.selectOne();
			wipService.saveDefectLotWorkResult(dto, lot, cld, defectQty);
			lot = SaveLot(lotId, childLotId);
			
//			cld = cld.selectOne();
			
			// Lot Defect 등록saveLotDefect(UiMapDto dto, Map<String, Object> lotInfo, DataSetMap defectList, String transitType) 
			wipService.saveLotDefect(dto, cld, (DataSetMap) defectList, TransitType.SendLot);
			
			
			// 불량이 있는 경우 NCR 체크 호출 (추후 기능 추가)
		}
		
		String toResourceId  = (String) txnInfo.get("TORESOURCEID"); 
		// Insert Lot Work Result
		Map<String, Object> wrd = wipService.saveLotWorkResult(dto, lot, TransitType.SendLot, userId, now, toResourceId, toAreaId);
		
		// Get Current Area
		String currentArea = (String) lot.get("AREAID");
		
		// 예산 통제 API 호출
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("AREAID",currentArea);
		Map<String, Object> originArea = generalDao.addSelectOneMap(NAMESPACE + ".selectBasArea",param);
		
		if (originArea == null)
		{
			// 해당 작업장이 존재하지 않습니다. {0}
			throw new BizException("NotExistArea", String.format("AreaId = %s", lot.get("AREAID")));
		}
		
//		if (originArea.get("OWNTYPE").equals(AreaOwnType.OutsideOSP) && enterpriseId.equals("YOUNGPOONG"))
//		{
//			boolean result = OspService.OspBudgetCheck(wrd);
//			
//			
//			if (!result)
//			{
//				// 예산통제 메시지
//				throw new BizException("예산통제 메시지");
//			}
//		}
		
	
		// Get Plant at Current Area
		String currentPlant = (String) lot.get("PLANTID");
		
		// Get Current Factory
		String currentFactory = (String) lot.get("FACTORYID");
		
		
		// Dispatch Lot Process
		//lot = wipService.dispatchLot(dto, lot, toAreaId, txnInfo);
		lot = wipService.dispatchLot(dto, lot, toAreaId, "");
		
		String lastTxnHistKey = (String) lot.get("LASTTXNHISTKEY");
		
//		TransactionUtils.setTransactionId(txnInfo, TXNID);
		
		lot = UpdateLotSend(lot, userId, now);
		
		
		// Get Transit Area Info
		param.put("AREAID",toAreaId);
		Map<String, Object> area = generalDao.addSelectOneMap(NAMESPACE + ".selectBasArea",param);
		
		if (area == null)
		{
			// 해당 작업장이 존재하지 않습니다. {0}
			throw new BizException("NotExistArea", String.format("AreaId = %s", toAreaId));
		}
		
		String ownType =(String) area.get("OWNTYPE");
		String nextPlant =(String) area.get("PLANTID");
		
		// if not Finished that Lot State then Outside Check Logic
		if (!lot.get("LOTSTATE").equals(LotState.Finished))
		{
			// Check Outside Area
			if (ownType.equals(AreaOwnType.OutsideOSP) || !nextPlant.equals(currentPlant))
			{
//				TransactionUtils.setTransactionId(txnInfo, "sendLot");
				
				String nextAreaId = "";
				String nextPlantId = "";
				
				if (ownType.equals(AreaOwnType.OutsideOSP))
					nextAreaId = toAreaId;
				else
					nextAreaId = (String) lot.get("AREAID");
				
				if (!nextPlant.equals(currentPlant))
					nextPlantId = nextPlant;
				else
					nextPlantId = (String) lot.get("PLANTID");
				
				wipService.sendLot(lotId, nextAreaId, nextPlantId);
				
//				TransactionUtils.setTransactionId(txnInfo, TXNID);
				
				if (!nextPlant.equals(currentPlant))
				{
					SaveLotPlantTransit(lot, lastTxnHistKey, userId, now);
				}
			}
		}
		
		// Check Move Area from Outside Area to Outside Area
		String lotState = (String) lot.get("LOTSTATE");
		
		String lotHistKey = "";
		
		// Insert Work Result by Next Process Segment
		if ((lotState.equals(LotState.InProduction) || lotState.equals(LotState.InTransit)) && !isRework)
		{
			lotHistKey = wipService.saveLotWorkResultForNextProcess(dto, lot, lastTxnHistKey);
		}
		
		if (!lot.get("LOTSTATE").equals(LotState.Finished))
		{
			// If Outside Area to Outside Area then Outside Warehouse Stock
			if (originArea.get("OWNTYPE").equals(AreaOwnType.OutsideOSP) && ownType.equals(AreaOwnType.OutsideOSP))
			{
				// 외주 창고 입고 API 호출
//				OspService.OspreciptsendlotCreate(lot.get("ENTERPRISEID"), lot.get("PLANTID"), lotId, lotHistKey, userId);
				//SaveOspReceiptSendLot(lot, lotHistKey);
			}
		}
		
		// if Semi-Product then Insert Consumable Lot
		param.put("PRODUCTDEFID",lot.get("PRODUCTDEFID"));
		param.put("PRODUCTDEFVERSION",lot.get("PRODUCTDEFVERSION"));
		Map<String, Object> pd = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductdefinition",param);
		if (pd == null)
		{
			// 해당 품목이 존재하지 않습니다. {0}
			throw new BizException("NotExistProduct", String.format("ProductDefId = %s, ProductDefVersion", lot.get("Productdefid"), lot.get("Productdefversion")));
		}
		
		String productDefType = (String) pd.get("Productdeftype");
		
		if ("SubAssembly".equals(productDefType) && LotState.Finished.equals(lotState))
		{
//			TransactionUtils.setTransactionId(txnInfo, "createConsumableLot");
			
			wipService.createConsumableLot(lot, toAreaId);
			
//			TransactionUtils.setTransactionId(txnInfo, TXNID);
			
			/*
			param.put("AREAID",toAreaId);
			Map<String, Object> ad = generalDao.addSelectOneMap(NAMESPACE + ".selectBasArea",param);
			
			// 반제품 자재 입고 API 호출
			CsmService.ConsumablelotTrans(enterpriseId, plantId, ad.get("WAREHOUSEID"), lotId, "");
			*/
		}
		
		// Lot History Previous Plant & Previous Area Update (임시)
		SaveLotHistory(lastTxnHistKey, lotId, currentPlant, currentFactory, currentArea);		
	}

	@Override
	public void SaveLotHistory(String txnHistKey, String lotId, String plantId, String factoryId, String areaId)
			throws Exception {
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("TXNHISTKEY",txnHistKey);
		param.put("LOTID",lotId);
		
		Map<String, Object> lhd = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmLothistory",param);
		lhd.put("PREVPLANTID",plantId);
		lhd.put("PREVFACTORYID",factoryId);
		lhd.put("PREVAREAID",areaId);
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLothistory",lhd);

	}

	@Override
	public Map<String, Object> SaveLot(String lotId, String childLotId) throws Exception {
		Map<String, Object> pld = wipService.validateLotInfo(lotId);
		
		Map<String, Object> pd = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductdefinition",pld);
		
		if (pd == null)
		{
			throw new BizException("InValidData001", String.format("ProductDefId = %s, ProductDefVersion = %s", pld.get("PRODUCTDEFID"), pld.get("PRODUCTDEFVERSION")));
		}
		
		// Get Array Per Quantity
		double arrayPerQty = Double.parseDouble(String.valueOf(pd.get("PCSARY")));	
		
		pld.put("PCSQTY",pld.get("QTY"));
		
		if (arrayPerQty > 0)
			pld.put("ARRAYQTY",Double.parseDouble(String.valueOf(pld.get("QTY"))) / arrayPerQty);
		
		if ((double)pld.get("Panelperqty") > 0)
			pld.put("PANELQTY",Double.parseDouble(String.valueOf(pld.get("QTY"))) / Double.parseDouble(String.valueOf(pld.get("PANELPERQTY"))));
		
		
		Map<String, Object> cld = wipService.validateLotInfo(childLotId);
		cld.put("LOTCREATEDTYPE","Defect");
		cld.put("ISLOCKING","Y");
		cld.put("ISDEFECTED","Y");
		cld.put("QTY",(double)0);
		cld.put("DEFECTQTY",cld.get("Createdqty"));
		cld.put("PCSQTY",(double)0);
		cld.put("ARRAYQTY",(double)0);
		cld.put("PANELQTY",(double)0);
		cld.put("PANELPERQTY",pld.get("PANELPERQTY"));
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",pld);
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",cld);
		
		return pld;		
	}

	@Override
	public Map<String, Object> UpdateLotSend(Map<String, Object> ld, String userId, Date time) throws Exception {

		Map<String, Object> map = new HashMap<>();
		map.put("LOTID", ld.get("LOTID"));
		map.put("PROCESSSEGMENTID", ld.get("PROCESSSEGMENTID"));
		map.put("PROCESSSEGMENTVERSION", ld.get("PROCESSSEGMENTVERSION"));
		
		List<Map<String, Object>> resultCount = generalDao.addSelect(NAMESPACELOTCOM + ".GetLotWorkResultCount", map);
		
		double workCount = 0;
		
		if (resultCount.size() > 0)
		{
			Map<String, Object> mapResult = resultCount.get(0);
			
			workCount = Double.parseDouble(mapResult.get("RESULTCNT").toString());
		}
		
		ld.put("WORKCOUNT",workCount);
		
		if (workCount > 0 || "Y".equals(ld.get("ISREWORK")))
			ld.put("ISREWORK","Y");
		else
			ld.put("ISREWORK","N");
		
		
		ld.put("SENDTIME",time);
		ld.put("SENDUSER",userId);
		ld.put("LASTTXNID",TXNID);
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",ld);
		
		return ld;		
	}  	
	@Override
	public void SaveLotPlantTransit(Map<String, Object> ld, String lastTxnHistKey, String userId, Date time)
			throws Exception {

		Map<String, Object> param = new HashMap<String, Object>(); 
		String lotId = (String) ld.get("LOTID");
		String txnHistKey = TxnHistKey.getTxnHistKey();
		param.put("TXNHISTKEY",txnHistKey);
		param.put("LOTID",lotId);
		
		Map<String, Object> ltd = generalDao.addSelectOneMap(NAMESPACE + ".selectMtmLotplanttransit",param);
		
		if (ltd != null)
		{
			throw new BizException("InValidData002", String.format("TxnHistKey = %s, LotId = %s", txnHistKey, lotId));
		}
		
		param.put("LOTID",lotId);
		param.put("TXNHISTKEY",lastTxnHistKey);
		Map<String, Object> lhd = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmLothistory",param);
		
		ltd.put("TXNHISTKEY",txnHistKey);
		ltd.put("LOTID",lotId);
		ltd.put("ENTERPRISEID",ld.get("ENTERPRISEID"));
		ltd.put("PLANTID",ld.get("PLANTID"));
		ltd.put("PRODUCTIONORDERID",ld.get("PRODUCTIONORDERID"));
		ltd.put("LINENO",ld.get("LINENO"));
		ltd.put("PREVPLANTID",StringUtil.isEmpty((String) lhd.get("PREVPLANTID")) ? ld.get("PLANTID") : lhd.get("PREVPLANTID"));
		ltd.put("FACTORYID",ld.get("FACTORYID"));
		ltd.put("AREAID",ld.get("AREAID"));
		ltd.put("PREVAREAID",StringUtil.isEmpty((String) lhd.get("PREVAREAID")) ? ld.get("AREAID") : lhd.get("PREVAREAID"));
		ltd.put("PROCESSDEFID",ld.get("PROCESSDEFID"));
		ltd.put("PROCESSDEFVERSION",ld.get("PROCESSDEFVERSION"));
		ltd.put("PROCESSSEGMENTID",ld.get("PROCESSSEGMENTID"));
		ltd.put("PREVPROCESSSEGMENTID",lhd.get("PREVPROCESSSEGMENTID"));
		ltd.put("SENDUSER",lhd.get("SENDUSER"));
		ltd.put("SENDDATE",lhd.get("SENDTIME"));
		ltd.put("TRANSITSTATUS","WaitShip");
		generalDao.addInsert(NAMESPACE + ".insertMtmLotplanttransit",param);
		
	}

	@Override
	public void ValidationData(Map<String, Object> lot, String lotId, String processSegmentId, String userId,
			String transitArea, double defectQty) throws Exception {
		// 보류 여부 체크
		String isHold = (String) lot.get("ISHOLD");
		
		if ("Y".equals(isHold))
		{
			// 보류 상태의 Lot 입니다.
			throw new BizException("LotIsHold", String.format("LotId = %s", lotId));
		}
		
		// Locking 여부 체크
		String isLocking = (String) lot.get("ISLOCKING");
		
		if ("Y".equals(isLocking))
		{
			// Locking 상태의 Lot 입니다.
			throw new BizException("LotIsLocking", String.format("LotId = %s", lotId));
		}
		
		// ProcessState 인계 가능 상태인지 체크
		if (!wipService.validateProcessState(lot, TransitType.SendLot))
		{
			// Lot이 인계 가능 상태가 아닙니다. {0}
			throw new BizException("LotStateIsNotAvailableSend", String.format("LotId = %s", lotId));
		}
		
		// 공정 체크
		String lotProcessSegmentId = (String) lot.get("PROCESSSEGMENTID");
		
		if (!lotProcessSegmentId.equals(processSegmentId))
		{
			// 인계 처리 시 공정과 실제 Lot의 공정이 다릅니다. {0}
			throw new BizException("SendProcessIsNotEqualLotProcess", String.format("LotId = %s, SendProcessSegmentId = %s, CurrentProcessSegmentId = %s"
					, lotId, processSegmentId, lotProcessSegmentId));
		}
		
		// 작업자 선택 여부 체크
		if (StringUtil.isNullOrEmpty(userId))
		{
			// 작업자가 선택되지 않았습니다.
			throw new BizException("NoSelectWorker");
		}
		
		// 인계 작업장 선택 여부 체크
		if (StringUtil.isNullOrEmpty(transitArea))
		{
			// 인계 작업장이 선택되지 않았습니다.
			throw new BizException("NoSelectTransitArea");
		}
		
		// Lot 수량 > Defect 수량 체크
		double qty = Double.parseDouble(String.valueOf( lot.get("QTY")));
		
		if (qty < defectQty)
		{
			// 불량 수량은 Lot 수량보다 많을 수 없습니다.
			throw new BizException("LotQtyLargerThanDefectQty", String.format("Lot 수량 = %d, 불량 수량 = %d", lot.get("QTY"), defectQty));
		}		
	}


   
}