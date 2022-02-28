package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
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
import smh.pcm.service.PCMLotCommonService;;


/**
* @file: PCM02600ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02600ServiceImpl
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
public class PCM02600ServiceImpl extends AbstractNbdfService implements PCM02600Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM02600Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACELOT = "smh.pcm.dao.PCMLotCommonDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMCommonService commonServicePCM;
    
    @Autowired
    private PCMLotCommonService lotCommonService;
    
   
    
    
    
    /**
     * @fn savePcmLotTrackInCancel
     * @brief (Override method) Lot 작업시작 취소 
     * @remark 
     * @see smh.bas.service.PCM02600#savePcmLotTrackInCancel(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePcmLotTrackInCancel(UiMapDto dto) throws Exception {
       // Map<String, Object> param = getParametersMap(dto);
		DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_pcmLotCancel"); // ds_pcmLotAcceptCancel
		DataSetMap paramMapComment = getParametersDataSetMap(dto, "ds_comment");		//ds_comment
		
		Map<String, Object> paramComment = paramMapComment.get(0);
		
		String comment = paramComment.get("COMMENT").toString();			// 작성 Comment
		String userId = paramComment.get("USERID").toString();				//Comment 작성 userId
		String txnId = "PCM02600Service";
		
		Map<String, Object> paramLotList; // LotList
		
		for (int i = 0; i < paramMapLotList.size(); i++) {
			
			//String txnHistKey = TxnHistKey.getTxnHistKey();
			paramLotList = paramMapLotList.get(i);
			
			String lotId = paramLotList.get("LOTID").toString();
			
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
			
			//LotData Validation Check!!
			ValidationData(lotData);
			
			//PCM_LOTEQUIPMENT 업데이트 혹은 삭제
			lotCommonService.SaveLotEquipment(lotData , TransitionId.CancelTrackIn);
			
			// PCM_LOTWTIME 삭제
			lotCommonService.DeleteLotWTime(lotData);
			
			// Consumable Lot Temp 삭제
			lotCommonService.DeleteConsumeMaterialLotTemp(lotData , "Consumable");
			
			// Durable Lot Temp 삭제
			lotCommonService.DeleteConsumeMaterialLotTemp(lotData , "Durable");
			
			//PCM_LOTWORKER 삭제
			DeleteLotWorker(lotData);
			
			
			
			//comment(특이사항)이 있는 경우 특이사항 저장 - PCM_LOTCOMMENT
			if(!(comment.isEmpty()))
				lotCommonService.SaveLotComment(lotData, comment, userId, TransitionId.CancelReceiveLot);
			
			
			//취소 이력 저장(PCM_LOTCANCELWORKRESULT)
			lotCommonService.SaveLotCancelWorkResult(lotData, TransitionId.CancelReceiveLot, comment ,lotData.get("LOTSTATE").toString()  );
			
			//PCM_LOT 상태 변경 (LotProcessState)
			Map<String, Object> changeLotData = lotCommonService.TrackInCancelLot(lotId , txnId );
			
			// PCM_LOTWORKRESULT 변경
			lotCommonService.CancelLotWorkResult(changeLotData, TransitionId.CancelTrackIn );
			
		}
		
    }   
    
    /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM02600#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
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
		if (!processState.equals(LotProcessState.Run)) {
			String args = "LotStateIsNotAvailableTrackInCancel ,LOT ID : " + lotId;
			//Lot이 인수 취소 가능 상태가 아닙니다.
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
			throw new BizException("isSplitLotReceiveCancel" , args);
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
	
	private void DeleteLotWorker(Map<String, Object> lotData)
			throws Exception {
		String lotId = lotData.get("LOTID").toString();
		String processDefId = lotData.get("PROCESSDEFID").toString();
		String processDefVersion = lotData.get("PROCESSDEFVERSION").toString();
		//String processPathId = lotData.get("PROCESSPATHID").toString();
		String processSegmentId = lotData.get("PROCESSSEGMENTID").toString();
		String processSegmentVersion = lotData.get("PROCESSSEGMENTVERSION").toString();
		String workCount = lotData.get("WORKCOUNT").toString();
		
		
		Map<String, Object> paramLotWorker = new HashMap<>();
		paramLotWorker.put("LOTID" , lotId);
		paramLotWorker.put("PROCESSDEFID", processDefId);
		paramLotWorker.put("PROCESSDEFVERION", processDefVersion);
		//paramLotWorker.put("PROCESSPATHID" , processPathId);
		paramLotWorker.put("PROCESSSEGMENTID" , processSegmentId);
		paramLotWorker.put("PROCESSSEGMENTVERSION", processSegmentVersion);
		paramLotWorker.put("WORKCOUNT", workCount);
		
		generalDao.addUpdate(NAMESAPCE + ".deleteLotWorkerData", paramLotWorker);
	}
}