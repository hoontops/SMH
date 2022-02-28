package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import java.util.ArrayList;
import java.util.Arrays;

import org.eclipse.core.internal.filesystem.local.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitionId;
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMLotCommonService;;


/**
* @file: PCM02700ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02700ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.   김기수     최초  생성
*/
@Service
public class PCM02700ServiceImpl extends AbstractNbdfService implements PCM02700Service {

    public static final String NAMESPACE = "smh.pcm.dao.PCM02700Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACELOT = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMCommonService commonServicePCM;
    
    @Autowired
    private PCMLotCommonService lotCommonService;
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM02500#selectLotWorkCancelList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotListForSendCancel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotListForSendCancel", param));
    }   
    
    
    
    
    /**
     * @fn savePcmLotAcceptCancel
     * @brief (Override method) Lot 인수 취소 
     * @remark 
     * @see smh.bas.service.PCM02700#savePcmLotAcceptCancel(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePcmSendCancelLot(UiMapDto dto) throws Exception {
       // Map<String, Object> param = getParametersMap(dto);
		DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_pcmLotCancel"); // ds_pcmLotAcceptCancel
		DataSetMap paramMapComment = getParametersDataSetMap(dto, "ds_comment");		//ds_comment
		
		Map<String, Object> paramComment = paramMapComment.get(0);
		
		String comment = paramComment.get("COMMENT").toString();			// 작성 Comment
		String userId = paramComment.get("USERID").toString();				//Comment 작성 userId
		String txnId = "PCM02700Service";
		
		Map<String, Object> paramLotList; // LotList
		
		for (int i = 0; i < paramMapLotList.size(); i++) {
			
			//String txnHistKey = TxnHistKey.getTxnHistKey();
			paramLotList = paramMapLotList.get(i);
			
			String lotId = paramLotList.get("LOTID").toString();
			
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
			
			//LotData Validation Check!!
			ValidationData(lotData);
			
			String lotState = lotData.get("LOTSTATE").toString();
			
			if (!lotState.equals("Finished"))
			{
				Map<String, Object> lotWorkResultData = lotCommonService.GetWorkResult(lotData);
				
				String prevTxnHistKey = lotWorkResultData.get("PREVSENDLOTHISTKEY").toString();
				String prevLotState = lotData.get("LOTSTATE").toString();
				
				Map<String, Object> paramLotHistoryKey = new HashMap<>();
				paramLotHistoryKey.put("P_TXNHISTKEY" , prevTxnHistKey);
				paramLotHistoryKey.put("P_LOTID",lotId);
				
				List<Map<String,Object>> lotHistoryDataList = generalDao.addSelect(NAMESPACELOT + ".selectLotHistoryData", paramLotHistoryKey);
				
				if(lotHistoryDataList == null )
				{
					//이전 공정 이력이 없어 인수취소를 할수 없습니다.
					throw new BizException("DontHaveLotHistory");
				}
				
				Map<String,Object> lotHistoryData = lotHistoryDataList.get(0);
				
				
				Map<String,Object> paramProcessSegmentKey = new HashMap<>();
				paramProcessSegmentKey.put("PROCESSSEGMENTID" , lotHistoryDataList.get(0).get("PREVPROCESSSEGMENTID"));
				paramProcessSegmentKey.put("PROCESSSEGMENTVERSION" , lotHistoryDataList.get(0).get("PREVPROCESSSEGMENTVERSION"));
				
				List<Map<String,Object>> processSegmentDataList = generalDao.addSelect(NAMESPACELOT + ".selectProcessSegmentData",paramProcessSegmentKey );
				
				Map<String, Object>prevLotWorkResultData = lotCommonService.GetPreviousLotWorkResult(lotData, lotHistoryData);
				
				String prevProcessSegmentId = prevLotWorkResultData.get("PROCESSSEGMENTID").toString();
				String prevProcessSegmentVersion = prevLotWorkResultData.get("PROCESSSEGMENTVERSION").toString();
				
				lotCommonService.DeleteLotWTime(lotData, prevProcessSegmentId , prevProcessSegmentVersion);
				
				String prevAreaId = prevLotWorkResultData.get("AREAID").toString();
				String areaId = lotData.get("AREAID").toString();
				String prevPlantId = prevLotWorkResultData.get("PLANTID").toString();
				String plantId = lotData.get("PLANTID").toString();
				
				Map<String, Object> paramAreaKey = new HashMap<>();
				paramAreaKey.put("AREAID", areaId);
				Map<String, Object> paramPrevAreaKey = new HashMap<>();
				paramPrevAreaKey.put("AREAID", prevAreaId);
				
				List<Map<String, Object>> areaDataList = generalDao.addSelect(NAMESPACELOT + ".selectAreaData",paramAreaKey );
				
				if(areaDataList == null){
					// 해당 작업장이 존재하지 않습니다.
					throw new BizException("NotExistArea");
				}
				
				if(!plantId.equals(prevPlantId))
				{
					throw new BizException("AlreadyShipmentLot");
				}
				
				List<Map<String, Object>> prevAreaDataList = generalDao.addSelect(NAMESPACELOT + ".selectAreaData",paramPrevAreaKey );
				
				if(prevAreaDataList == null){
					// 해당 작업장이 존재하지 않습니다.
					throw new BizException("NotExistArea");
				}
				
				// 외주비 마감이 됐는지 확인. 외주비 마감이 된 건이면 Exception
				
				if(!prevAreaDataList.get(0).get("OWNTYPE").equals(AreaOwnType.OurCompany))
				{
					
					// 구현 필요
					boolean result = lotCommonService.OspPriceInvalidCheck(lotWorkResultData);
					
					if(!result)
					{
						throw new BizException("OspPriceValidCheck");
					}
				}
				
				Map<String, Object>  ospChangeLotData = new HashMap<>();
				if(areaDataList.get(0).get("OWNTYPE").equals(AreaOwnType.OutsideOSP) && !areaId.equals(prevAreaId))
				{
					//lotCommonService.CancelSendLot(lotId, prevAreaId, prevPlantId, "cancelSendLot");
					ospChangeLotData = lotCommonService.OspCancelSendLot(lotId, prevAreaId, prevPlantId, "cancelSendLot" );
				}
				
		
				//comment(특이사항)이 있는 경우 특이사항 저장 - PCM_LOTCOMMENT
				if(!(comment.isEmpty()))
					lotCommonService.SaveLotComment(lotData, comment, userId, TransitionId.CancelSendLot);
				
				
				//취소 이력 저장(PCM_LOTCANCELWORKRESULT)
				lotCommonService.SaveLotCancelWorkResult(lotData, TransitionId.CancelSendLot, comment ,prevLotState );
			
				lotCommonService.DispatchCancelLot(lotData ,prevLotWorkResultData ,lotHistoryData ,ospChangeLotData );
				// PCM_LOTWORKRESULT 변경
				lotCommonService.CancelLotWorkResult(lotData, TransitionId.CancelSendLot );
				
				lotCommonService.DeleteLotWorkResult(lotWorkResultData, lotData);
				
				
				// 2Step으로 작업 완료 취소 인 경우 LotEquipment 의 작업 완료 시간에 null 을 업데이트 한다.
				Map<String, Object> newLotData = lotCommonService.ValidateLotInfo(lotId);
				
				String newProcessState = newLotData.get("PROCESSSTATE").toString();
				
				if(newProcessState.equals("Run"))
				{
					Map<String,Object> paramLotEquipment = new HashMap<>();
					paramLotEquipment.put("LOTID" , newLotData.get("LOTID"));
					paramLotEquipment.put("WORKCOUNT" , newLotData.get("WORKCOUNT"));
					paramLotEquipment.put("PROCESSSEGMENTID" , newLotData.get("PROCESSSEGMENTID"));
					generalDao.addUpdate(NAMESPACE + ".updateLotEquipmentData", paramLotEquipment);
				}
				
				//Rework로 인계 취소 시 pcm_reworkreturn 상태 변경
				
			
				
				
			}

			else
			{
				
				
				
				
				//comment(특이사항)이 있는 경우 특이사항 저장 - PCM_LOTCOMMENT
				if(!(comment.isEmpty()))
					lotCommonService.SaveLotComment(lotData, comment, userId, TransitionId.CancelSendLot);
				
				
				//취소 이력 저장(PCM_LOTCANCELWORKRESULT)
				//lotCommonService.SaveLotCancelWorkResult(lotData, TransitionId.CancelSendLot, comment ,"Finished" );
				
				
				//getLotCancelWorkResultInsertData(lotId, lotData, newLotData, SessionUtil.getUserId() , comment );
				
				
				Map<String,Object> newLotData = cancelFinishLot(lotId);
				
				
				getLotCancelWorkResultInsertData(lotId, lotData, newLotData, SessionUtil.getUserId() , comment );
				
				getLotWorkResultCancelUpdateData(lotId ,lotData);
				
				deleteConsumableLot(lotData);
				
				if(newLotData.get("PROCESSSTATE").toString().equals("Run"))
				{
					Map<String,Object> paramLotEquipment = new HashMap<>();
					paramLotEquipment.put("LOTID" , newLotData.get("LOTID"));
					paramLotEquipment.put("WORKCOUNT" , newLotData.get("WORKCOUNT"));
					paramLotEquipment.put("PROCESSSEGMENTID" , newLotData.get("PROCESSSEGMENTID"));
					generalDao.addUpdate(NAMESPACE + ".updateLotEquipmentData", paramLotEquipment);
				}
			}
			
		}
   
    }   
    

    /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM02700#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
     */
	private void ValidationData(Map<String,Object> lotData)
			throws Exception {
		
		String lotId = lotData.get("LOTID").toString();
		String isHold = lotData.get("ISHOLD").toString();
		String enterpriseId = lotData.get("ENTERPRISEID").toString();
		String plantId = lotData.get("PLANTID").toString();
		
		if(!isHold.isEmpty() && isHold.equals("Y"))
		{
			//해당 Lot이 Hold 상태입니다.
			throw new BizException("InHoldState", lotId);
		}

		
		String processState = lotData.get("PROCESSSTATE").toString();
		if (!processState.equals(LotProcessState.WaitForReceive)) {
			String args = "LotStateIsNotAvailableTrackInCancel ,LOT ID : " + lotId;
			//Lot이 인계 취소 가능 상태가 아닙니다.
			throw new BizException("ValidLotState", args);
		}
		
		HashMap<String,Object> paramReceiveCancel = new HashMap<>();
		paramReceiveCancel.put("LOTID" , lotData.get("LOTID"));
		paramReceiveCancel.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
		paramReceiveCancel.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
		paramReceiveCancel.put("PROCESSSTATE" , lotData.get("PROCESSSTATE"));
		paramReceiveCancel.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		
		List<Map<String,Object>> listDefectLot = generalDao.addSelect(NAMESPACELOT + ".selectDefectLot",paramReceiveCancel);
		
		if(listDefectLot.size() > 0)
		{
			String args = listDefectLot.get(0).get("LOTID").toString();
			//DefectLot이 있는 경우 : 불량LOT 등록이 있습니다. 불량 취소 후 인수 취소 가능합니다. 불량LOT NO : EodEodEod
			throw new BizException("isDefectLotReceiveCancel" ,  args);
		}
		
		List<Map<String,Object>> listSplitLot = generalDao.addSelect(NAMESPACELOT + ".selectSplitLot",paramReceiveCancel);
		
		if(listSplitLot.size() > 0)
		{
			String args = listSplitLot.get(0).get("DESTINATIONLOTID").toString();
			// 해당 공정에서 LOT 분할이 발생 했습니다. 인수 취소 불가 입니다. 분할 LOT NO: Eodeodeod
			throw new BizException("isSplitLotSendCancel" , args);
		}
		
		String lotState = lotData.get("LOTSTATE").toString();
		
		List<Map<String, Object>> listOspWareHouse = generalDao.addSelect(NAMESPACE + ".selectOspWareHouseIn",paramReceiveCancel);
		
		if(listOspWareHouse.size() > 0)
		{
			String args = paramReceiveCancel.get("LOTID").toString();
			throw new BizException("InOspWareHouse", args);
		}
		
		
		if(lotState.equals("Finished"))
		{
			//창고 코드 가져오기
			Map<String,Object> paramWareHouse = new HashMap<>();
			paramWareHouse.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID"));
			paramWareHouse.put("PRODUCTDEFVERSION",lotData.get("PRODUCTDEFVERSION"));
			paramWareHouse.put("LOTID" , lotId);
			
			
			List<Map<String,Object>> itemWareHouseList = generalDao.addSelect(NAMESPACE + ".selectItemWareHouseData",paramWareHouse);
			if(itemWareHouseList== null || itemWareHouseList.size() < 1)
			{
				throw new BizException("itemWareHouseNotSet" );
			}
			String wareHouse = StringUtil.Object2String(itemWareHouseList.get(0).get("WAREHOUSEID"));
			
			System.out.println("WAREHOUSE======================> "+ wareHouse);
			
			if(StringUtil.isNullOrEmpty(wareHouse))
			{
				throw new BizException("itemWareHouseNotSet" );
			}
			Map<String,Object> param = new HashMap<>();
			param.put("WAREHOUSECODE" , wareHouse);
			param.put("LOTID" , lotId);
			param.put("PRODUCTDEFID" , lotData.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION" , lotData.get("PRODUCTDEFVERSION"));
			if(lotData.get("PRODUCTDEFID").toString().substring(0,1).equals("1"))
			{
				param.put("PRODUCTTYPE" , "Assembly");
			}
			else {
				param.put("PRODUCTTYPE" , "SubAssembly");
			}
			
			System.out.println("PRODUCTTYPE =================>           " + lotData.get("PRODUCTDEFID").toString().substring(0,1));
			
			List<Map<String,Object>> onHandDataList = generalDao.addSelect(NAMESPACE + ".selectOnHandDataList",param);
			if(onHandDataList== null || onHandDataList.size() < 1)
			{
				throw new BizException("ExistsOnHand" );
			}
			double onHandQty = Double.valueOf(onHandDataList.get(0).get("ONHAND_QTY").toString());
			double sendQty = Double.valueOf(lotData.get("PCSQTY").toString());
			if(onHandQty != sendQty)
			{
				throw new BizException("shortageQty" );
			}
		}
		
		HashMap<String,Object> paramMonthLastDay = new HashMap<>();
		paramMonthLastDay.put("LOTID",lotData.get("LOTID"));
		paramMonthLastDay.put("AREAID",lotData.get("AREAID"));
		paramMonthLastDay.put("USERSEQUENCE",lotData.get("USERSEQUENCE"));
		paramMonthLastDay.put("PROCESSSTATE",lotData.get("PROCESSSTATE"));
		paramMonthLastDay.put("LOTSTATE",lotData.get("LOTSTATE"));
		
		if(!lotData.get("LOTSTATE").equals("Finished")) {
			List<Map<String,Object>> listMonthLastDayCheck = generalDao.addSelect(NAMESPACELOT + ".selectLotMonthLastDay",paramMonthLastDay);
			
			if(listMonthLastDayCheck.size() > 0)
			{
				System.out.println("Exception =================>          isMonthLastDayLot 1" );
				throw new BizException("isMonthLastDayLot");
			}
		}
		else {
			List<Map<String,Object>> listMonthLastDayCheck = generalDao.addSelect(NAMESPACELOT + ".selectLotMonthLastDayWorkResult" , paramMonthLastDay);
			if(listMonthLastDayCheck.size() > 0)
			{
				System.out.println("Exception =================>          isMonthLastDayLot2 " );
				throw new BizException("isMonthLastDayLot");
			}
		}
		
	}
	
	private Map<String,Object> cancelFinishLot(String lotId)
			throws Exception {
	Map<String,Object> lotData = lotCommonService.getLotForUpdate(lotId);
		
		Map<String,Object> param = new HashMap<>();
		param.put("PREVLOTSTATE" , lotData.get("LOTSTATE"));
		
		
		String processState= lotCommonService.GetCancelLotLotState(lotData, TransitionId.CancelSendLot);
		
		Map<String,Object> lotHistoryCond = new HashMap<>();
		lotHistoryCond.put("P_LOTID", lotData.get("LOTID"));
		lotHistoryCond.put("P_TXNHISTKEY" , lotData.get("LASTTXNHISTKEY"));
		
		List<Map<String,Object>> lotHistoryDataList =  generalDao.addSelect(NAMESPACELOT + ".selectLotHistoryData",lotHistoryCond);
		
		
		
		lotData.put("LOTSTATE" , "InProduction");
		lotData.put("PROCESSSTATE",processState);
		
		if(processState.equals(LotProcessState.WaitForSend))
		{
			lotData.put("SENDTIME",null);
			lotData.put("SENDUSER",null);
		}
		else if(processState.equals(LotProcessState.Run))
		{
			lotData.put("SENDTIME",null);
			lotData.put("SENDUSER",null);
			lotData.put("TRACKOUTTIME",null);
			lotData.put("TRACKOUTUSER",null);
		}
		else if(processState.equals(LotProcessState.Wait))
		{
			lotData.put("SENDTIME",null);
			lotData.put("SENDUSER",null);
			lotData.put("TRACKOUTTIME",null);
			lotData.put("TRACKOUTUSER",null);
			lotData.put("TRACKINTIME",null);
			lotData.put("TRACKINUSER",null);
		}
		
		lotData.put("SENDTIME",null);
		lotData.put("SENDUSER",null);
		
		
		lotData.put("TXNHISTKEY", null);
		lotData.put("TXNID",null);
		lotData.put("MODIFIER",SessionUtil.getUserId());
		
		generalDao.addUpdate(NAMESPACE + ".updatePcmLotDataForCancelFinishLot", lotData);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);	
		
		return lotData;
	}

	private void getLotWorkResultCancelUpdateData(String lotId ,Map<String,Object> lotData)
			throws Exception {
		Map<String,Object> lotWorkResultData = new HashMap<>();
		
		Map<String,Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID" , lotId);
		propertyMap.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
		propertyMap.put("PRODUCTIONORDERID" , lotData.get("PRODUCTIONORDERID"));
		propertyMap.put("PRODUCTDEFID" , lotData.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION" , lotData.get("PRODUCTDEFVERSION"));
		
		String processState= lotCommonService.GetCancelLotLotState(lotData, TransitionId.CancelSendLot);
		
		List<Map<String,Object>> rsvData =  generalDao.addSelect(NAMESPACE + ".getExistLotWorkResultInfo",propertyMap);
		
		if(rsvData != null && rsvData.size() > 0)
		{
			String txnHistKey = rsvData.get(0).get("TXNHISTKEY").toString();
			Map<String,Object> cond = new HashMap<>();
			cond.put("P_TXNHISTKEY" , txnHistKey);
			cond.put("P_LOTID", lotId);
			
			List<Map<String,Object>> lotWorkResultDataList = generalDao.addSelect(NAMESPACELOT + ".selectLotWorkResultData",cond);
			
			if(lotWorkResultDataList == null)
			{
				throw new BizException("NoWorkResult");
			}
			
			lotWorkResultData = lotWorkResultDataList.get(0);
			
			if(processState.equals(LotProcessState.WaitForSend))
			{
				lotWorkResultData.put("SENDTIME" , null);
				lotWorkResultData.put("SENDUSER" , null);
				lotWorkResultData.put("SENDPCSQTY" , null);
				lotWorkResultData.put("SENDPANELQTY" , null);
			}
			else if (processState.equals(LotProcessState.Run))
			{
				lotWorkResultData.put("SENDTIME" , null);
				lotWorkResultData.put("SENDUSER" , null);
				lotWorkResultData.put("SENDPCSQTY" , null);
				lotWorkResultData.put("SENDPANELQTY" , null);
				lotWorkResultData.put("WORKENDTIME", null);
				lotWorkResultData.put("WORKENDUSER",null);
				lotWorkResultData.put("WORKENDPCSQTY",null);
				lotWorkResultData.put("WORKENDPANELQTY",null);
			}
			else if(processState.equals(LotProcessState.Wait))
			{
				lotWorkResultData.put("SENDTIME" , null);
				lotWorkResultData.put("SENDUSER" , null);
				lotWorkResultData.put("SENDPCSQTY" , null);
				lotWorkResultData.put("SENDPANELQTY" , null);
				lotWorkResultData.put("WORKENDTIME", null);
				lotWorkResultData.put("WORKENDUSER",null);
				lotWorkResultData.put("WORKENDPCSQTY",null);
				lotWorkResultData.put("WORKENDPANELQTY",null);
				lotWorkResultData.put("WORKSTARTTIME", null);
				lotWorkResultData.put("WORKSTARTUSER",null);
				lotWorkResultData.put("WORKSTARTPCSQTY",null);
				lotWorkResultData.put("WORKSTARTPANELQTY",null);
			}
			
			lotWorkResultData.put("P_TXNHISTKEY", txnHistKey);
			lotWorkResultData.put("TRANSITIONID","CancelSendLot");
			
			generalDao.addUpdate(NAMESPACE + ".updateLotWorkResultCancel", lotWorkResultData);
		}
	}
	
	private void getLotCancelWorkResultInsertData(String lotId, Map<String,Object> coreLotData, Map<String,Object> lotData, String userId, String comments  )
			throws Exception{
		Map<String,Object> cancelData = new HashMap<>();
		cancelData.put("LOTID" , lotId);
		cancelData.put("TXNHISTKEY" , null);
		cancelData.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
		cancelData.put("PLANTID" , lotData.get("PLANTID"));
		cancelData.put("FACTORYID" , lotData.get("FACTORYID"));
		cancelData.put("AREAID" , lotData.get("AREAID"));
		cancelData.put("PROCESSDEFID" , lotData.get("PROCESSDEFID"));
		cancelData.put("PROCESSDEFVERSION" , lotData.get("PROCESSDEFVERSION"));
		cancelData.put("PREVPROCESSDEFID" , coreLotData.get("PROCESSDEFID"));
		cancelData.put("PREVPROCESSDEFVERSION" , coreLotData.get("PROCESSDEFVERSION"));
		cancelData.put("PROCESSSEGMENTID" ,lotData.get("PROCESSSEGMENTID"));
		cancelData.put("PREVPROCESSSEGMENTID" , coreLotData.get("PROCESSSEGMENTID"));
		cancelData.put("LOTSTATE" , lotData.get("LOTSTATE"));
		cancelData.put("PROCESSSTATE" , lotData.get("PROCESSSTATE"));
		cancelData.put("PREVLOTSTATE" , coreLotData.get("LOTSTATE"));
		cancelData.put("PREVPROCESSSTATE" , coreLotData.get("PROCESSSTATE"));
		cancelData.put("UNIT" , lotData.get("UNIT"));
		cancelData.put("PCSQTY" , lotData.get("PCSQTY"));
		cancelData.put("PANELQTY" , lotData.get("PANELQTY"));
		cancelData.put("CANCELCOMMENT" , comments);
		
		generalDao.addInsert(NAMESPACELOT + ".insertLotCancelWorkResultData", cancelData);	
	}
	
	private void deleteConsumableLot(Map<String,Object> lotData )
			throws Exception{
		Map<String,Object> cancelDataParam = new HashMap<>();
		cancelDataParam.put("CONSUMABLELOTID" , lotData.get("LOTID"));
		cancelDataParam.put("CONSUMABLEDEFID" , lotData.get("PRODUCTDEFID"));
		cancelDataParam.put("CONSUMABLEDEFVERSION" , lotData.get("PRODUCTDEFVERSION"));
		
		generalDao.addInsert(NAMESPACELOT + ".deleteConsumableLot", cancelDataParam);	
	}
	
}