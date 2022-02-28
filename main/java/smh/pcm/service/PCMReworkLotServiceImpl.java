package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCMReworkLotServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMReworkLotServiceImpl
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
public class PCMReworkLotServiceImpl extends AbstractNbdfService implements PCMReworkLotService {

    public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACELOTCOM = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACE_CMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    public static final String NAMESPACE_CSM = "smh.pcm.dao.PCMCsmDao";
    public static final String NAMESPACE_OSP = "smh.pcm.dao.PCMOspDao";
    public static final String NAMESPACE_RC = "smh.pcm.dao.PCMReworkCancelDao";
    public static final String NAMESPACE_SL = "smh.pcm.dao.PCMSendLotDao";

    public static final String NAMESPACE = "smh.pcm.dao.PCMReworkLotDao";
    public static final String NAMESPACE4500 = "smh.pcm.dao.PCM04500Dao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMWipService wipService;
    
    @Autowired
    private PCMSendLotService sendLotService;

    @Autowired
    private PCMReceiveCancelService receiveCancelService;
    
	private final static String TXNID = "SaveLotRework";
    
    /**
     * @fn
     * @brief (Override method) 공정 관리 > 공정작업 > 재작업 LOT 투입
     * @remark - 재작업 Lot 투입
     * @see smh.pcm.service.PCMReworkLotService#ReworkLot(com.nbdf.commons.ui.vo.UiMapDto)
     */

	@Override
	public void ReworkLot(UiMapDto dto, String lotId, String reworkProcessDefId, String reworkProcessDefVersion,
			String resourceId, String areaId, String returnProcessPathId, String returnResourceId, String returnAreaId,
			String enterpriseId, String plantId, String isProductRouting, String reworkResourceId, String reworkPathId,
			String reworkAreaId, Map<String, Object> txnInfo) throws Exception {
		
		int result = 0;
		txnInfo.put("TXNUSER", SessionUtil.getSessionValue("USER_ACNT"));	
		
		// parameter validation
		if(StringUtil.isNullOrEmpty(lotId)) {
			// LOT No.는 필수 입력 항목입니다.
			throw new BizException("LotIdIsRequired");
		}
		if(StringUtil.isNullOrEmpty(reworkProcessDefId) || StringUtil.isNullOrEmpty(reworkProcessDefVersion)) {
			// 재작업 라우팅을 선택 해주세요.
			throw new BizException("ReworkRoutingValidation");
		}
		if(StringUtil.isNullOrEmpty(returnProcessPathId)) {
			// 재작업 후 공정을 선택 해주세요.
			throw new BizException("ReturnProcessPathValidation");
		}
		if(StringUtil.isNullOrEmpty(areaId)) {
			// 선택된 자원이 없습니다.
			throw new BizException("NoResourceSelected");
		}
		
		Map<String, Object> localLotData = getLot(lotId);	// 사이트 전용 SO
		validateLot(localLotData, lotId);		// LOT 상태 검증
		// TODO : 예산통제 검증
		
		//현재 작업장, 팩토리, 플랜트 
		String prevPlant = (String) localLotData.get("PLANTID");
		String prevFacotry = (String) localLotData.get("FACTORYID");
		String prevArea = (String) localLotData.get("AREAID");

		// 인수상태면 인수 취소
		if("Wait".equals(localLotData.get("PROCESSSTATE"))) {
				//Map<String, Object> ld, String userId, String comment, String txnId
			receiveCancelService.ReceiveCancel(localLotData, (String) txnInfo.get("TXNUSER"), TXNID, PCMReworkLotServiceImpl.class.getSimpleName());
		}
		
		// 인수/인수대기 상태의 실적은 삭제한다.
		if("Wait".equals(localLotData.get("PROCESSSTATE")) || "WaitForReceive".equals(localLotData.get("PROCESSSTATE"))) {
			deleteCurrentLotWorkResult(localLotData, lotId);
		}
		
		if("Y".equals(isProductRouting)) {	// 품목 라우팅
			// 품목라우팅에 인계대기면 자동인계처리
			// validateOspBudget(localLotData, areaId); // TODO : 오류발생. 임시로 막아놓음
			if("WaitForSend".equals(localLotData.get("PROCESSSTATE"))) {
				txnInfo.put("TORESOURCEID", reworkResourceId);	
				sendLotService.SendLot(dto, lotId, (String) localLotData.get("PROCESSSEGMENTID"), areaId, (String)txnInfo.get("TXNUSER"), TXNID, 0D, null, enterpriseId, plantId, true, txnInfo);				
			}
			
			Map<String, Object> repositionInfo = new HashMap<String, Object>();
			repositionInfo.put("LOTID",lotId);
			repositionInfo.put("DESTPROCESSPATHID",returnProcessPathId);
			repositionInfo.put("AREAID",areaId);
			repositionInfo.put("RESOURCEID", resourceId);

			Map<String, Object> factoryLotData = repositionSegment(returnProcessPathId, repositionInfo, lotId, localLotData);//String strPathId, Map<String, Object> paramChange, String lotID, Map<String, Object> lotData
			localLotData = getLot(lotId);

			//2021/08/02 by lyk 수정  ==> pcmLot과 lotWorkResutl 테이블의 workcount 동기화
			localLotData = wipService.saveLotWorkCount(dto, localLotData); // WorkCount 증가
			
			wipService.saveLotWorkResultForNextProcess(dto, localLotData, (String)factoryLotData.get("LASTTXNHISTKEY")); // 실적 데이터 생성
			SaveLotHistory((String)factoryLotData.get("LASTTXNHISTKEY"), lotId, prevPlant, prevFacotry, prevArea); // History 데이터 생성
		}
		else {	// 재작업 라우팅
			if("QAM".equals(txnInfo.get("JOB_FLAG"))) {
			}else {
				returnProcessPathId = (String) localLotData.get("PROCESSPATHSTACK");
			}
			// LOT 재작업 Return State 저장
			saveReworkReturnData(localLotData, lotId, returnProcessPathId, reworkPathId
					, reworkProcessDefId, reworkProcessDefVersion, reworkAreaId, reworkResourceId
					, returnResourceId, returnAreaId);
			
			//saveReworkOrder(localLotData);
			// processPathStack 에 재작업 라우팅 종료 후 돌아올 공정을 입력하고, AreaId 를 투입작업장의 ID로 변경, 공정상태는 인수대기
			Stack<String> lotProcessPathStack = StringUtil.convertStringToStack((String)localLotData.get("PROCESSPATHSTACK"), ".");
			lotProcessPathStack.pop();
			lotProcessPathStack.push(returnProcessPathId);
			localLotData.put("PROCESSPATHSTACK",StringUtil.convertStackToString(lotProcessPathStack, "."));
			localLotData.put("AREAID",areaId);
			localLotData.put("RESOURCEID",resourceId);
			localLotData.put("PROCESSSTATE","WaitForReceive");
			result = generalDao.addUpdate(NAMESPACE + ".updatePcmLot",localLotData);
			 
			// 재작업 라우팅으로 변경
			Map<String, Object> reworkLotInfo = new HashMap<String, Object>(); 
			reworkLotInfo.put("LOTID",lotId);
			reworkLotInfo.put("REWORKPROCESSDEFID",reworkProcessDefId);
			reworkLotInfo.put("REWORKPROCESSDEFVERSION",reworkProcessDefVersion);
			//lot 과 동일하게 넣어줌. by 방성혁
			reworkLotInfo.put("AREAID",areaId);
			reworkLotInfo.put("RESOURCEID",resourceId);
			reworkLotInfo.put("PROCESSSTATE","WaitForReceive");
			Map<String, Object> factoryLotData = wipService.reworkLot(dto, reworkLotInfo);
			
			localLotData = getLot(lotId);
			//2021/08/02 by lyk 수정  ==> pcmLot과 lotWorkResutl 테이블의 workcount 동기화
			localLotData = wipService.saveLotWorkCount(dto, localLotData); // WorkCount 증가
			wipService.saveLotWorkResultForNextProcess(dto, localLotData,(String) factoryLotData.get("LASTTXNHISTKEY")); // 다음공정 실적데이터 생성
			SaveLotHistory((String) factoryLotData.get("LASTTXNHISTKEY"), lotId, prevPlant, prevFacotry, prevArea); // History 정보 저장
		}		
	}

	@Override
	public void validateLot(Map<String, Object> lotData, String lotId) throws Exception {
		if(lotData == null) {
			// 해당 Lot이 존재하지 않습니다. {0}
			throw new BizException("NotExistLot", String.format("Lot ID = %s", lotId));
		}
		if("Run".equals(lotData.get("PROCESSSTATE"))) {
			// 공정진행 상태가 Run인 LOT은 재작업 할 수 없습니다. {0}
			throw new BizException("LotProcessStateIsRun", String.format("ProcessState = %s", lotData.get("Processstate")));
		}
		if(!"InProduction".equals(lotData.get("LOTSTATE"))) {
			// 상태가 InProduction이 아닌 LOT은 재작업 할 수 없습니다. {0}
			throw new BizException("LotStateIsNotInProduction", String.format("LotState = %s", lotData.get("Lotstate")));
		}
		if("Y".equals(lotData.get("ISREWORK"))) {
			// 재작업중인 LOT을 다시 재작업 할 수 없습니다.
			throw new BizException("LotAlreadyIsRework");
		}
		if("Y".equals(lotData.get("ISLOCKING"))) {
			// 해당 Lot이 Locking 상태입니다. {0}
			throw new BizException("InLockingState", String.format("Lot ID = %s", lotId));
		}
		if("Y".equals(lotData.get("ISHOLD"))) {
			// 해당 Lot이 Hold 상태입니다. {0}
			throw new BizException("InHoldState", String.format("Lot ID = %s", lotId));
		}		
	}

	@Override
	public void validateOspBudget(Map<String, Object> lotData, String areaId) throws Exception {
		// 예산통제 Validation
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("AREAID",areaId);
		
		Map<String, Object> nextAreaData = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLothistory",param);

		if (nextAreaData == null)
		{
		   // 해당 작업장이 존재하지 않습니다. {0}
		   throw new BizException("NotExistArea", String.format("AreaId = %s", areaId));
		}

		Map<String, Object> lwr = wipService.getWorkResult(lotData);
		
//		if (!nextAreaData.get("OWNTYPE").equals(AreaOwnType.OurCompany))
//		{
//		   boolean budgetOk = OspService.OspBudgetCheck(lwr);      
//		   
//		   if (!budgetOk)
//		   {
//			   // 외주 예산을 초과하였습니다.
//			   throw new BizException("OspBudgetExceed");
//		   }
//		}     		
	}

	@Override
	public void deleteCurrentLotWorkResult(Map<String, Object> localLotData, String lotId) throws Exception {

		// LOT 실적 취소 이력
		Map<String, Object> cancelWorkResultData = new HashMap<String, Object>(); 
		cancelWorkResultData.put("LOTID",lotId);
//		cancelWorkResultKey.put("TXNHISTKEY",txnHistKey);
		cancelWorkResultData.put("ENTERPRISEID",localLotData.get("ENTERPRISEID"));
		cancelWorkResultData.put("PLANTID",localLotData.get("PLANTID"));
		cancelWorkResultData.put("FACTORYID",localLotData.get("FACTORYID"));
		cancelWorkResultData.put("AREAID","*");
		cancelWorkResultData.put("PROCESSDEFID",localLotData.get("PROCESSDEFID"));
		cancelWorkResultData.put("PROCESSDEFVERSION",localLotData.get("PROCESSDEFVERSION"));
		cancelWorkResultData.put("PREVPROCESSDEFID",localLotData.get("PROCESSDEFID"));
		cancelWorkResultData.put("PREVPROCESSDEFVERSION",localLotData.get("PROCESSDEFVERSION"));
		cancelWorkResultData.put("PROCESSSEGMENTID",localLotData.get("PROCESSSEGMENTID"));
		cancelWorkResultData.put("PREVPROCESSSEGMENTID",localLotData.get("PROCESSSEGMENTID"));
		cancelWorkResultData.put("LOTSTATE","Created");
		cancelWorkResultData.put("PREVLOTSTATE",localLotData.get("LOTSTATE"));
		cancelWorkResultData.put("PROCESSSTATE",localLotData.get("PROCESSSTATE"));
		cancelWorkResultData.put("PREVPROCESSSTATE",localLotData.get("PROCESSSTATE"));
		cancelWorkResultData.put("UNIT",localLotData.get("UNIT"));
		cancelWorkResultData.put("PCSQTY",localLotData.get("PCSQTY"));
		cancelWorkResultData.put("PANELQTY",localLotData.get("PANELQTY"));
		cancelWorkResultData.put("CANCELCOMMENTS",TXNID);
		generalDao.addUpdate(NAMESPACE + ".insertPcmLotcancelworkresult",cancelWorkResultData);
		
		// LOT 실적 삭제
		List<Map<String, Object>> resultsToDelete = getLotworkresultOfCurrentProcess(localLotData);
		for(int k = 0; k < resultsToDelete.size(); k++) {
			generalDao.addUpdate(NAMESPACE + ".deletePcmLotworkresult",resultsToDelete.get(k));
		}
	}

	@Override
	public void SaveLotHistory(String txnHistKey, String lotId, String plantId, String factoryId, String areaId)
			throws Exception {
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("TXNHISTKEY",txnHistKey);
		param.put("LOTID",lotId);
		
		Map<String, Object> lhd = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLothistory",param);
		if(lhd != null) {
			lhd.put("PREVPLANTID",plantId);
			lhd.put("PREVFACTORYID",factoryId);
			lhd.put("PREVAREAID",areaId);
			generalDao.addUpdate(NAMESPACE + ".updatePcmLothistory",lhd);
		}
	}
/*
 * LOT 재작업 Return State 저장
 */
	@Override
	public void saveReworkReturnData(Map<String, Object> localLotData, String lotId, String returnProcessPathId,
			String reworkPathId, String reworkProcessDefId, String reworkProcessDefVersion, String reworkAreaId,
			String reworkResourceId, String returnResourceId, String returnAreaId) throws Exception {
		
		Map<String, Object> param = new HashMap<String, Object>(); 		
		param.put("PROCESSPATHID",returnProcessPathId);
		Map<String, Object> returnProcessPathData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProcesspath",param);
		
		//rework 공정
		param.put("PROCESSPATHID",reworkPathId);
		Map<String, Object> reworkPath = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProcesspath",param);

		
		param.put("LOTID",lotId);
		Map<String, Object> reworkReturnData = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmReworkreturn",param);

		boolean isInsert = false;
		if(reworkReturnData == null) {
			reworkReturnData = new HashMap<String, Object>(); 		
			reworkReturnData.put("LOTID",lotId);
			isInsert = true;
		}
		reworkReturnData.put("PRODUCTDEFID",localLotData.get("PRODUCTDEFID"));
		reworkReturnData.put("PRODUCTDEFVERSION",localLotData.get("PRODUCTDEFVERSION"));
		reworkReturnData.put("PROCESSDEFID",localLotData.get("PROCESSDEFID"));
		reworkReturnData.put("PROCESSDEFVERSION",localLotData.get("PROCESSDEFVERSION"));
		reworkReturnData.put("SUBPROCESSDEFID",reworkProcessDefId);
		reworkReturnData.put("SUBPROCESSDEFVERSION",reworkProcessDefVersion);
		
		reworkReturnData.put("FROMPROCESSSEGMENTID",localLotData.get("PROCESSSEGMENTID"));
		reworkReturnData.put("FROMPROCESSSEGMENTVERSION",localLotData.get("PROCESSSEGMENTVERSION"));
		reworkReturnData.put("FROMPROCESSSTATE",localLotData.get("PROCESSSTATE"));
		reworkReturnData.put("FROMAREAID",localLotData.get("AREAID"));
		reworkReturnData.put("FROMRESOURCEID",localLotData.get("RESOURCEID"));
		
		reworkReturnData.put("REWORKPROCESSSEGMENTID",reworkPath.get("PROCESSSEGMENTID"));
		reworkReturnData.put("REWORKPROCESSSEGMENTVERSION",reworkPath.get("PROCESSSEGMENTVERSION"));
		reworkReturnData.put("REWORKAREAID",reworkAreaId);
		reworkReturnData.put("REWORKRESOURCE",reworkResourceId);
		reworkReturnData.put("REWORKQTY",localLotData.get("QTY"));
		
		reworkReturnData.put("TOPROCESSSEGMENTID",returnProcessPathData.get("PROCESSSEGMENTID"));
		reworkReturnData.put("TOPROCESSSEGMENTVERSION",returnProcessPathData.get("PROCESSSEGMENTVERSION"));
		
		if(returnProcessPathData.get("PROCESSSEGMENTID").equals(localLotData.get("PROCESSSEGMENTID"))
				&& returnProcessPathData.get("PROCESSSEGMENTVERSION").equals(localLotData.get("PROCESSSEGMENTVERSION"))) {
			if("Wait".equals(localLotData.get("PROCESSSTATE")) || "WaitForReceive".equals(localLotData.get("PROCESSSTATE"))) {
				reworkReturnData.put("TOPROCESSSTATE","WaitForReceive");		
			}
			else if ("WaitForSend".equals(localLotData.get("PROCESSSTATE"))){
				reworkReturnData.put("TOPROCESSSTATE","WaitForSend");
			}
		}
		else {
			reworkReturnData.put("TOPROCESSSTATE","WaitForReceive");
		}
		
		reworkReturnData.put("TORESOURCEID",returnResourceId);
		reworkReturnData.put("TOAREAID",returnAreaId);
		reworkReturnData.put("MOVESTATE","Move");
		reworkReturnData.put("WORKCOUNT",localLotData.get("WORKCOUNT"));
		reworkReturnData.put("VALIDSTATE","ValidState");
		
		if(isInsert) {
			generalDao.addUpdate(NAMESPACE + ".insertPcmReworkreturn",reworkReturnData);
		}
		else {
			generalDao.addUpdate(NAMESPACE + ".updatePcmReworkreturn",reworkReturnData);
		}
	}

	@Override
	public Map<String, Object> getLot(String lotId) throws Exception {
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("LOTID",lotId);
		return generalDao.addSelectOneMap(NAMESPACE4500 + ".selectPcmLot",param);
	}
	// LOT의 현재공정의 실적정보를 조회한다.
	@Override
	public List<Map<String, Object>> getLotworkresultOfCurrentProcess(Map<String, Object> lotData) throws Exception {
		Map<String, Object> param = new HashMap<String, Object>(); 
		
		param.put("LOTID", lotData.get("LOTID"));
		param.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		param.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
		param.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		
		return generalDao.addSelect(NAMESPACE + ".selectPcmLotworkresultList",param);
	}
    
	public Map<String, Object> repositionSegment(String strPathId, Map<String, Object> paramChange, String lotID, Map<String, Object> lotData) throws Exception {
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotID);
		Map<String, Object> reLotData = new HashMap<>();
		reLotData.putAll(lotData);
		
		
		Stack<String> lotProcessPathStack = StringUtil.convertStringToStack(lotData.get("PROCESSPATHSTACK").toString(), ".");
		
		propertyMap.clear();
		propertyMap.put("PROCESSPATHID", strPathId);
		List<Map<String, Object>> newlist = generalDao.addSelect(NAMESPACECOM +".selectBasProcesspathList",propertyMap);
		Map<String, Object> toProcessPath = newlist.get(0);
		
		reLotData.put("PREVUSERSEQUENCE", reLotData.get("USERSEQUENCE"));
		reLotData.put("PREVPROCESSSEGMENTID", reLotData.get("PROCESSSEGMENTID"));
		reLotData.put("PREVPROCESSSEGMENTVERSION", reLotData.get("PROCESSSEGMENTVERSION"));
		reLotData.put("PREVAREAID", reLotData.get("AREAID"));
		
		lotProcessPathStack.pop();
		lotProcessPathStack.push( StringUtil.Object2String(toProcessPath.get("PROCESSPATHID")));

		//reLotData.put("PROCESSPATHSTACK", toProcessPath.get("PROCESSPATHID").toString());
		reLotData.put("PROCESSPATHSTACK", StringUtil.convertStackToString(lotProcessPathStack, "."));
		reLotData.put("USERSEQUENCE", toProcessPath.get("USERSEQUENCE"));
		reLotData.put("PROCESSSEGMENTID", toProcessPath.get("PROCESSSEGMENTID"));
		reLotData.put("PROCESSSEGMENTVERSION", toProcessPath.get("PROCESSSEGMENTVERSION"));
		reLotData.put("RESOURCEID", paramChange.get("RESOURCEID"));
		reLotData.put("AREAID", paramChange.get("AREAID")); //혹여나 areaID 가 안들어온다면 BAS_PROCESSSEGMENT 에서 가져온다. toProcessPath 에 processSegmentID 로 
		
		/*added by jsh 20210614*/
		reLotData.put("PROCESSDEFVERSION", toProcessPath.get("PROCESSDEFVERSION"));
		reLotData.put("PROCESSDEFID", toProcessPath.get("PROCESSDEFID"));
		
		
		reLotData.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
		generalDao.addUpdate(NAMESPACEWIP + ".updatePcmLot", reLotData);
		reLotData.put("TXNHISTKEY", reLotData.get("LASTTXNHISTKEY"));
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", reLotData);
		
		//executeLotPlan(lotData); //lotPlan 을 사용 안함. 
		System.out.println(" *************************** end repositionSegment"); 
		return reLotData;
	}
}