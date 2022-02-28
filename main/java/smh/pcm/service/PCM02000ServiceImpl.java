package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.util.StringUtil;

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
import smh.pcm.service.PCMLotCommonService;
import com.nbdf.commons.util.SessionUtil;

import smh.pcm.service.PCMCancelInfo.CancelConsumeMaterialInfo;
import smh.pcm.service.PCMCancelInfo.MaterialInfo;


/**
* @file: PCM02000ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02000ServiceImpl
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
public class PCM02000ServiceImpl extends AbstractNbdfService implements PCM02000Service {

    public static final String NAMESPACE = "smh.pcm.dao.PCM02000Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACELOT = "smh.pcm.dao.PCMLotCommonDao";
    
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
    public void selectLotListForWorkEndCancel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotListForWorkEndCancel", param));
    }   
    
    
    
    
    /**
     * @fn savePcmLotAcceptCancel
     * @brief (Override method) Lot 인수 취소 
     * @remark 
     * @see smh.bas.service.PCM02000#savePcmLotAcceptCancel(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePcmLotWorkEndCancel(UiMapDto dto) throws Exception {
       // Map<String, Object> param = getParametersMap(dto);
		DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_pcmLotCancel"); // ds_pcmLotAcceptCancel
		DataSetMap paramMapComment = getParametersDataSetMap(dto, "ds_comment");		//ds_comment
		
		Map<String, Object> paramComment = paramMapComment.get(0);
		
		String comment = paramComment.get("COMMENT").toString();			// 작성 Comment
		String userId = paramComment.get("USERID").toString();				//Comment 작성 userId
		String txnId = "PCM02000Service";
		//String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		
		Map<String, Object> paramLotList; // LotList
		
		for (int i = 0; i < paramMapLotList.size(); i++)
		{
		
			System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>LotId : " + paramMapLotList.get(i).get("LOTID") );
		}
		
		for (int i = 0; i < paramMapLotList.size(); i++) {
			
			//String txnHistKey = TxnHistKey.getTxnHistKey();
			paramLotList = paramMapLotList.get(i);
			
			String lotId = paramLotList.get("LOTID").toString();
			
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
			
			//LotData Validation Check!!
			ValidationData(lotData);
			
			
			Map<String, Object> processDefInfo = lotCommonService.GetProcessDefinitionInfo(lotData);
			String processDefId	= processDefInfo.get("PROCESSDEFID").toString();
			String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
			
			String processPathId = lotCommonService.GetProcessPathId(lotData, processDefId, processDefVersion);
			
			//Lot Comment 삭제
			lotCommonService.DeleteLotComment(lotData);
			
			// Lot Reel 정보 삭제.(Reel 사용안함으로 주석 처리 - 기능 있음. 사용한다면 주척 처리 제거)
			//lotCommonService.DeleteLotReelInfo(lotData);
			
			//UpdateLotEquipment(lotData);:   UpdateLotEquipmentTrackOutCancel 로 변경
			lotCommonService.UpdateLotEquipmentTrackOutCancel(lotData);
			
			lotCommonService.UpdateDeleteWTime(lotData);
			
			Map<String, Object> paramProcessSegmentKey = new HashMap<>();
			paramProcessSegmentKey.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
			paramProcessSegmentKey.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
			
			List<Map<String,Object>> processSegmentDataList = generalDao.addSelect(NAMESPACELOT + ".selectProcessSegmentData",paramProcessSegmentKey );
			
			
			//processSegmentType이 "MKPrint" 면 Lot Updata를 할때 Week를 null 처리 해준다.
			String processSegmentType = processSegmentDataList.get(0).get("PROCESSSEGMENTTYPE").toString();
			
			//자재 소모 이력 처리
			UpdateMaterialUseHistory(lotData, "pcm02000");
			
			Map<String,Object> lotDurableCond = new HashMap<>();
			lotDurableCond.put("LOTID", lotId);
			lotDurableCond.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
			lotDurableCond.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
			lotDurableCond.put("WORKCOUNT",lotData.get("WORKCOUNT"));
			
			List<Map<String,Object>> lotDurableDataList = generalDao.addSelect(NAMESPACELOT + ".selectLotDurableDataList",lotDurableCond );
			
			for(int idx=0, len =lotDurableDataList.size(); idx<len; idx++)
			{
				Map<String,Object> lotDurableData = lotDurableDataList.get(idx);
				
				double usedQty =0.0;
				
				if(lotDurableData.get("USEDQTY") == null || StringUtil.Object2String(lotDurableData.get("USEDQTY")) =="")
				{
					usedQty  =0.0;
				}
				else
				{
					usedQty= Double.valueOf(StringUtil.Object2String(lotDurableData.get("USEDQTY")));
				}
				
				lotDurableData.put("USEDQTY",null);
				
				
				if(lotDurableData.get("WORKENDTIME") != null)
				{
					lotDurableData.put("WORKENDTIME", null);
				}
				
				lotDurableData.put("P_TXNID" , "pcm02000");
				
				generalDao.addUpdate(NAMESPACELOT + ".updateLotDurableCancelTrackOut", lotDurableData);
				
				Map<String,Object> durableLotKey = new HashMap<>();
				durableLotKey.put("DURABLELOTID" , lotDurableData.get("DURABLELOTID"));
				
				List<Map<String,Object>> durableLotDataList = generalDao.addSelect(NAMESPACELOT + ".selectDurableLotDataList",durableLotKey );
				Map<String,Object> durableLotData = durableLotDataList.get(0);
				
				durableLotData.put("P_USECOUNT" , Double.valueOf(durableLotData.get("USEDCOUNT").toString()) - (int)usedQty);
				durableLotData.put("P_TOTALUSEDCOUNT" , Double.valueOf(durableLotData.get("TOTALUSEDCOUNT").toString()) - (int)usedQty);
				durableLotData.put("P_LASTTXNID" , "pcm02000");
				
				generalDao.addUpdate(NAMESPACELOT + ".updateDurableLotDataCancelTrackOut", durableLotData);
				
				Map<String,Object> consumeMaterialLotCond = new HashMap<>();
				consumeMaterialLotCond.put("MATERIALLOTID", lotDurableData.get("DURABLELOTID"));
				consumeMaterialLotCond.put("LOTID", lotId);
				consumeMaterialLotCond.put("MATERIALTYPE", "Durable");
				consumeMaterialLotCond.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
				consumeMaterialLotCond.put("PLANTID", lotData.get("PLANTID"));
				consumeMaterialLotCond.put("AREAID", lotData.get("AREAID"));
				consumeMaterialLotCond.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
				consumeMaterialLotCond.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
				consumeMaterialLotCond.put("PROCESSDEFID", processDefId);
				consumeMaterialLotCond.put("PROCESSDEFVERSION", processDefVersion);
				consumeMaterialLotCond.put("PROCESSPATHID", processPathId);
				consumeMaterialLotCond.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
				consumeMaterialLotCond.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
				consumeMaterialLotCond.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
				
				//List<Map<String,Object>> consumeMaterialLotDataList = generalDao.addSelect(NAMESPACELOT + ".selectConsumeMaterialLotDataListCancelTrackOut",consumeMaterialLotCond );
				//delete로 변경
				generalDao.addUpdate(NAMESPACELOT + ".deleteConsumeMaterialLotCancelTrackOut", consumeMaterialLotCond);	
				
				Map<String,Object> consumeMaterialLotTempData = new HashMap<>();
				consumeMaterialLotTempData.put("LOTID" , lotId);
				consumeMaterialLotTempData.put("MATERIALLOTID", lotDurableData.get("DURABLELOTID"));
				consumeMaterialLotTempData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
				consumeMaterialLotTempData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
				consumeMaterialLotTempData.put("PLANTID", lotData.get("PLANTID"));
				consumeMaterialLotTempData.put("MATERIALTYPE","Durable");
				consumeMaterialLotTempData.put("AREAID", lotData.get("AREAID"));
				consumeMaterialLotTempData.put("EQUIPMENTID",  lotDurableData.get("EQUIPMENTID"));
				consumeMaterialLotTempData.put("MATERIALDEFID", durableLotData.get("DURABLEDEFID"));
				consumeMaterialLotTempData.put("MATERIALDEFVERSION", durableLotData.get("DURABLEDEFVERSION"));
				consumeMaterialLotTempData.put("SEQUENCE", idx+1);
				
				generalDao.insert(NAMESPACELOT + ".insertConsumeMaterialLotTemp", consumeMaterialLotTempData);
				
				
				
			}
			
			if(processSegmentType.equals("BBTInspection") || processSegmentType.equals("AOIHoleInspection") || processSegmentType.equals("AOIInspection"))
			{
				Map<String,Object> qcAOIBBTWorkCompleteCond = new HashMap<>();
				qcAOIBBTWorkCompleteCond.put("LOTID", lotId);
				qcAOIBBTWorkCompleteCond.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
				qcAOIBBTWorkCompleteCond.put("PLANTID", lotData.get("PLANTID"));
				qcAOIBBTWorkCompleteCond.put("AREAID", lotData.get("AREAID"));
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFID", processDefId);
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFVERSION", processDefVersion);
				qcAOIBBTWorkCompleteCond.put("SEGMENTTYPE", processSegmentType);
				//delete로 변경
				generalDao.addUpdate(NAMESPACELOT + ".deleteQCAOIBBTWorkCompleteDataCancelTrackOut", qcAOIBBTWorkCompleteCond);	
				
				
				Map<String,Object> inspectionDefectCond = new HashMap<>();
				inspectionDefectCond.put("RESOURCETYPE", processSegmentType);
				inspectionDefectCond.put("RESOURCEID" , lotId);
				//delete로 변경
				generalDao.addUpdate(NAMESPACELOT + ".deleteInspectionDefectDataCancelTrackOut", inspectionDefectCond);	
				
				Map<String,Object> inspectionResultCond = new HashMap<>();
				inspectionResultCond.put("RESOURCETYPE",processSegmentType);
				inspectionResultCond.put("RESOURCEID" , lotId);
				inspectionResultCond.put("PROCESSRELNO" , "*");
				
				List<Map<String,Object>> resultCount = generalDao.addSelect(NAMESPACELOT + ".selectInspectionResultDataCancelTrackOut",inspectionResultCond );
				String degree = String.valueOf(resultCount.size());
				
				inspectionResultCond.put("DEGREE", degree);
				
				//delete로 변경
				generalDao.addUpdate(NAMESPACELOT + ".deleteInspectionResultCancelTrackOut", inspectionResultCond);	
				
			}
			if(processSegmentType.equals("AOIInspection"))
			{
				Map<String,Object> qcAOIBBTWorkCompleteCond = new HashMap<>();
				qcAOIBBTWorkCompleteCond.put("LOTID",lotId);
				qcAOIBBTWorkCompleteCond.put("ENTERPRISEID",lotData.get("ENTERPRISEID"));
				qcAOIBBTWorkCompleteCond.put("PLANTID",lotData.get("PLANTID"));
				qcAOIBBTWorkCompleteCond.put("AREAID",lotData.get("AREAID"));
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID"));
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFVERSION",lotData.get("PRODUCTDEFVERSION"));
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTVERSION",lotData.get("PROCESSSEGMENTVERSION"));
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFID",processDefId);
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFVERSION",processDefVersion);
				qcAOIBBTWorkCompleteCond.put("SEGMENTTYPE",processSegmentType);
				qcAOIBBTWorkCompleteCond.put("ISREWORK","Y");
				
				List<Map<String,Object>> qcAOIBBTWorkCompleteDataList = generalDao.addSelect(NAMESPACELOT + ".selectQCAOIBBTWorkCompleteDataListCancelTrackOut",qcAOIBBTWorkCompleteCond );
				
				for(int idx= 0, len=qcAOIBBTWorkCompleteDataList.size(); idx < len ; idx++)
				{
					Map<String,Object> qcAOIBBTWorkCompleteData = qcAOIBBTWorkCompleteDataList.get(0);
					qcAOIBBTWorkCompleteData.put("P_REPAIRRESULTQTY" , null);
					qcAOIBBTWorkCompleteData.put("P_LASTTXNID","pcm0200");
					qcAOIBBTWorkCompleteData.put("P_USER",SessionUtil.getUserId());
					generalDao.addUpdate(NAMESPACELOT + ".updateQCAOIBBTWorkCompleteDataCancelTrackOut", qcAOIBBTWorkCompleteData);
				}
			}
			else
			{
				Map<String,Object> qcAOIBBTWorkCompleteCond = new HashMap<>();
				qcAOIBBTWorkCompleteCond.put("LOTID",lotId);
				qcAOIBBTWorkCompleteCond.put("ENTERPRISEID",lotData.get("ENTERPRISEID"));
				qcAOIBBTWorkCompleteCond.put("PLANTID",lotData.get("PLANTID"));
				qcAOIBBTWorkCompleteCond.put("AREAID",lotData.get("AREAID"));
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFID",lotData.get("PRODUCTDEFID"));
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFVERSION",lotData.get("PRODUCTDEFVERSION"));
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTVERSION",lotData.get("PROCESSSEGMENTVERSION"));
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFID",processDefId);
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFVERSION",processDefVersion);
				qcAOIBBTWorkCompleteCond.put("SEGMENTTYPE",processSegmentType);
				
				//delete로 변경
				generalDao.addUpdate(NAMESPACELOT + ".deleteQCAOIBBTWorkCompleteDataCancelTrackOut", qcAOIBBTWorkCompleteCond);	
				
				Map<String,Object> param = new HashMap<>();
				param.put("LOTID", lotId);
				
				List<Map<String,Object>> wrList =  generalDao.addSelect(NAMESPACELOT + ".GetWorkResultByAOIRepairProcess",param );
				
				if(wrList.size() > 0)
				{
					Map<String, Object> wrInfo = wrList.get(0);
					String txnHistKey = wrInfo.get("TXNHISTKEY").toString();
					
					Map<String,Object> lotWorkResultCond = new HashMap<>();
					lotWorkResultCond.put("P_LOTID",lotId);
					lotWorkResultCond.put("P_TXNHISTKEY",txnHistKey);
					
					//delete로 변경
					generalDao.addUpdate(NAMESPACELOT + ".deleteLotWorkResultByRepairProcess", lotWorkResultCond);	
					
				}
				
			}
		
			if(processSegmentType.equals("VRS"))
			{
				Map<String,Object> qcAOIBBTWorkCompleteCond = new HashMap<>();
				qcAOIBBTWorkCompleteCond.put("LOTID", lotId);
				qcAOIBBTWorkCompleteCond.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
				qcAOIBBTWorkCompleteCond.put("PLANTID", lotId);
				qcAOIBBTWorkCompleteCond.put("AREAID", lotId);
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFID", lotId);
				qcAOIBBTWorkCompleteCond.put("PRODUCTDEFVERSION", lotId);
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTID", lotId);
				qcAOIBBTWorkCompleteCond.put("PROCESSSEGMENTVERSION", lotId);
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFID", processDefId);
				qcAOIBBTWorkCompleteCond.put("PROCESSDEFVERSION", processDefVersion);
				qcAOIBBTWorkCompleteCond.put("SEGMENTTYPE", processSegmentType);
				qcAOIBBTWorkCompleteCond.put("ISREWORK", "Y");
				
				List<Map<String,Object>> qcAOIBBTWorkCompleteVRSDataList = generalDao.addSelect(NAMESPACELOT + ".selectQCAOIBBTWorkCompleteDataListCancelTrackOut",qcAOIBBTWorkCompleteCond ); 
				for(int idx=0,len=qcAOIBBTWorkCompleteVRSDataList.size();idx<len;idx++)
				{
					Map<String,Object> qcAOIBBTWorkCompleteVRSData = qcAOIBBTWorkCompleteVRSDataList.get(idx);
					qcAOIBBTWorkCompleteVRSData.put("P_REPAIRRESULTQTY",null);
					qcAOIBBTWorkCompleteVRSData.put("P_TXNID", "pcm02000");
					qcAOIBBTWorkCompleteVRSData.put("P_USER" , SessionUtil.getUserId());
					
					generalDao.addUpdate(NAMESPACELOT + ".updateQCAOIBBTWorkCompleteDataCancelTrackOut", qcAOIBBTWorkCompleteVRSData);
					
					
				}
			}
		

			//comment(특이사항)이 있는 경우 특이사항 저장 - PCM_LOTCOMMENT
			if(!(comment.isEmpty()))
				lotCommonService.SaveLotComment(lotData, comment, userId, TransitionId.CancelTrackOut);
			
			
			//취소 이력 저장(PCM_LOTCANCELWORKRESULT)
			lotCommonService.SaveLotCancelWorkResult(lotData, TransitionId.CancelTrackOut, comment ,lotData.get("LOTSTATE").toString() );
			
			lotCommonService.TrackOutCancelLot(lotId);
		
			
			// PCM_LOTWORKRESULT 변경
			lotCommonService.CancelLotWorkResult(lotData, TransitionId.CancelTrackOut );	
		}
   
    }   
    
    /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM02000#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
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
		if (!processState.equals(LotProcessState.WaitForSend)) {
			String args = "LotStateIsNotAvailableTrackOutCancel ,LOT ID : " + lotId;
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
			throw new BizException("isSplitLotWorkEndCancel" , args);
		}
		
		HashMap<String,Object> paramMonthLastDay = new HashMap<>();
		paramMonthLastDay.put("LOTID",lotData.get("LOTID"));
		paramMonthLastDay.put("AREAID",lotData.get("AREAID"));
		paramMonthLastDay.put("USERSEQUENCE",lotData.get("USERSEQUENCE"));
		paramMonthLastDay.put("PROCESSSTATE",lotData.get("PROCESSSTATE"));
		
		List<Map<String,Object>> listMonthLastDayCheck = generalDao.addSelect(NAMESPACELOT + ".selectLotMonthLastDay",paramMonthLastDay);
		
		if(listMonthLastDayCheck.size() > 0)
		{
			throw new BizException("isMonthLastDayLot");
		}

	}
	
	private void UpdateMaterialUseHistory(Map<String,Object> lotData, String txnInfo)
			throws Exception {
		String lotId = lotData.get("LOTID").toString();
		
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		
		Map<String, Object> paramAreaKey = new HashMap<>();
		paramAreaKey.put("AREAID" , lotData.get("AREAID"));
		
		List<Map<String,Object>> AreaDataList = generalDao.addSelect(NAMESPACELOT + ".selectAreaData",paramAreaKey );
		
		String wareHouseId = "";
		if(!(AreaDataList.get(0).get("WAREHOUSEID")==null))
		{
			wareHouseId = AreaDataList.get(0).get("WAREHOUSEID").toString();
		}
		
		Map<String, Object> cmlParam = new HashMap<>();
		cmlParam.put("LOTID",lotId);
		cmlParam.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
		cmlParam.put("WAREHOUSEID", wareHouseId);
		
		List<Map<String, Object>> cmlResult = generalDao.addSelect(NAMESPACE + ".GetConsumeMaterialLotByLastRelease",cmlParam );
		
		for(int i = 0 , len = cmlResult.size(); i<len ; i++)
		{
			Map<String,Object> cmld = cmlResult.get(i);
			
			String materialLotId = cmld.get("MATERIALLOTID").toString();
			double consumedQty = Double.valueOf(cmld.get("CONSUMEDQTY").toString());
			String consumableDefId = cmld.get("CONSUMABLEDEFID").toString();
			String consumableDefVersion = cmld.get("CONSUMABLEDEFVERSION").toString();
			
			Map<String,Object> materialInfo = new HashMap<>();
			materialInfo.put("MATERIALID" , materialLotId);
			materialInfo.put("WAREHOUSEID" , wareHouseId);
			materialInfo.put("MATERIALTYPE" , "Consumable");
			materialInfo.put("CONSUMEDQTY", consumedQty);
			materialInfo.put("P_AREAID", lotData.get("AREAID"));
			materialInfo.put("P_WORKCOUNT" , lotData.get("WORKCOUNT"));
			materialInfo.put("P_CONSUMABLEDEFID" , consumableDefId);
			materialInfo.put("P_CONSUMABLEDEFVERSION" , consumableDefVersion);
			materialInfo.put("LOTID", lotId);
			
			lotCommonService.cancelConsumeMaterial(materialInfo , txnInfo);
			
			Map<String, Object> consumeMaterialLotTempData = new HashMap<>();
			consumeMaterialLotTempData.put("LOTID",lotId);
			consumeMaterialLotTempData.put("MATERIALLOTID",materialLotId);
			consumeMaterialLotTempData.put("PROCESSSEGMENTID",lotData.get("PROCESSSEGMENTID"));
			consumeMaterialLotTempData.put("ENTERPRISEID",lotData.get("ENTERPRISEID"));
			consumeMaterialLotTempData.put("PLANTID",lotData.get("PLANTID"));
			consumeMaterialLotTempData.put("MATERIALTYPE","Consumable");
			consumeMaterialLotTempData.put("AREAID",lotData.get("AREAID"));
			consumeMaterialLotTempData.put("MATERIALDEFID",consumableDefId);
			consumeMaterialLotTempData.put("MATERIALDEFVERSION",consumableDefVersion);
			consumeMaterialLotTempData.put("CONSUMEDQTY",consumedQty);
			consumeMaterialLotTempData.put("SEQUNCE",(double)i+1);
			consumeMaterialLotTempData.put("WAREHOUSEID",lotData.get("WAREHOUSEID"));
			consumeMaterialLotTempData.put("TXNGROUPHISTKEY", txnGroupHistKey);
			
			generalDao.insert(NAMESPACELOT + ".insertConsumeMaterialLotTempData", consumeMaterialLotTempData);
			//info.setMaterialInfos(new MaterialInfo[] {MaterialInfo(materialInfoUdf)});
			
			lotCommonService.MaterialTransMain(lotData.get("ENTERPRISEID").toString(), lotData.get("PLANTID").toString(), txnGroupHistKey,"");
			
		}
	}

}