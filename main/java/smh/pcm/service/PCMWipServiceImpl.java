package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import smh.commons.MultiLanguage;
import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.ConsumableState;
import smh.pcm.service.PCMConstant.LotProcessState;

import com.nbdf.cmd.cm.cmam.service.CMAM00100Service;
import com.nbdf.com.StringUtils;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.pcm.service.PCMConstant.LotProcessState2;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMConstant.TransitionId;
import smh.pcm.service.PCMConstant.WTimeType;
import smh.pcm.service.PCMConstant.WTimeActionType;
import smh.pcm.service.PCMConstant.LotState;

/**
 * @file: PCMWipServiceImpl.java
* @Package: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name: PCMWipServiceImpl
 * @Company: Built1
 * @Create Date: 2021.04.02
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021.04. 02. 방성혁 최초 생성
 */
@Service
public class PCMWipServiceImpl extends AbstractNbdfService implements PCMWipService {

	public static final String NAMESAPCE = "smh.pcm.dao.PCMWipDao";
	public static final String NAMESAPCE_COMM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
	public static final String NAMESAPCE_BASCOMM = "smh.bas.dao.BASCommonDao";

	@Autowired
	private GeneralDao generalDao;

	@Autowired
	private CMAM00100Service CMAM00100Service;

	public Map<String, Object> validateLotInfo(String lotid) throws Exception {

		Map<String, Object> paramLot = new HashMap<String, Object>();
		paramLot.put("LOTID", lotid);

		List<Map<String, Object>> lotInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotList", paramLot);

		if (lotInfo.size() == 0) {

			throw new BizException("NotExistLot", String.format("LotId = %s", lotid));

		}

		return lotInfo.get(0);

	}

	public String executeCheckingWindowTimeNewTx(UiMapDto dto, Map<String, Object> lotData, Date time) throws Exception {

		Map<String, Object> wTimeDef = new HashMap<>();
		Map<String, Object> lotwtimeData = new HashMap<>();
		Map<String, Object> paramLotWtime = new HashMap<>();
		Map<String, Object> lotWtime = new HashMap<>();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");

		List<Map<String, Object>> wTimeSetList = this.getWtimeSetList(lotData);

		for (int i = 0; i < wTimeSetList.size(); i++) {
			wTimeDef = wTimeSetList.get(i);
			
			paramLotWtime.put("LOTID"               , lotData.get("LOTID"));
			paramLotWtime.put("ENTERPRISEID"        , wTimeDef.get("ENTERPRISEID"));
			paramLotWtime.put("PLANTID"             , wTimeDef.get("PLANTID"));
			paramLotWtime.put("WTIMEDEFID"          , wTimeDef.get("WTIMEDEFID"));
			paramLotWtime.put("PROCESSDEFID"        , wTimeDef.get("PROCESSDEFID"));
			paramLotWtime.put("PROCESSDEFVERSION"   , wTimeDef.get("PROCESSDEFVERSION"));
			paramLotWtime.put("PROCESSSEGMENTID"    , wTimeDef.get("PROCESSSEGMENTID"));
			paramLotWtime.put("PROCESSSTATE"        , wTimeDef.get("PROCESSSTATE"));
			paramLotWtime.put("TOPROCESSDEFID"      , wTimeDef.get("TOPROCESSDEFID"));
			paramLotWtime.put("TOPROCESSDEFVERSION" , wTimeDef.get("TOPROCESSDEFVERSION"));
			
			List<Map<String, Object>> LotWtimeInfo = generalDao.addSelect(NAMESAPCE_COMM+ ".selectPcmLotwtimeList", paramLotWtime);
            if(LotWtimeInfo.size() == 0)
            {
			
				String txnHistKey = TxnHistKey.getTxnHistKey();
	
				int setWtimeLimit = StringUtil.Object2Int(wTimeDef.get("WTIMELIMIT")); // (int)Math.round((float)wTimeDef.get("WTIMELIMIT"));
	
				Calendar cal = Calendar.getInstance();
				cal.setTime(time);
				cal.add(Calendar.SECOND, setWtimeLimit * 60);
				Date occureTime = cal.getTime();
	
				lotwtimeData.put("TXNHISTKEY", txnHistKey);
				lotwtimeData.put("LOTID", lotData.get("LOTID"));
				lotwtimeData.put("WTIMEDEFID", wTimeDef.get("WTIMEDEFID"));
				lotwtimeData.put("WTIMEDEFNAME", wTimeDef.get("WTIMEDEFNAME"));
				lotwtimeData.put("ENTERPRISEID", wTimeDef.get("ENTERPRISEID"));
				lotwtimeData.put("PLANTID", wTimeDef.get("PLANTID"));
				lotwtimeData.put("PRODUCTDEFID", wTimeDef.get("PRODUCTDEFID"));
				lotwtimeData.put("PRODUCTDEFVERSION", wTimeDef.get("PRODUCTDEFVERSION"));
				lotwtimeData.put("PROCESSDEFID", wTimeDef.get("PROCESSDEFID"));
				lotwtimeData.put("PROCESSDEFVERSION", wTimeDef.get("PROCESSDEFVERSION"));
				lotwtimeData.put("PROCESSPATHID", wTimeDef.get("PROCESSPATHID"));
				lotwtimeData.put("USERSEQUENCE", wTimeDef.get("USERSEQUENCE"));
				lotwtimeData.put("PROCESSSEGMENTID", wTimeDef.get("PROCESSSEGMENTID"));
				lotwtimeData.put("PROCESSSEGMENTVERSION", wTimeDef.get("PROCESSSEGMENTVERSION"));
				lotwtimeData.put("PROCESSSTATE", wTimeDef.get("PROCESSSTATE"));
				lotwtimeData.put("TOPROCESSDEFID", wTimeDef.get("TOPROCESSDEFID"));
				lotwtimeData.put("TOPROCESSDEFVERSION", wTimeDef.get("TOPROCESSDEFVERSION"));
				lotwtimeData.put("TOPROCESSPATHID", wTimeDef.get("TOPROCESSPATHID"));
				lotwtimeData.put("TOPROCESSSEGMENTID", wTimeDef.get("TOPROCESSSEGMENTID"));
				lotwtimeData.put("TOPROCESSSEGMENTVERSION", wTimeDef.get("TOPROCESSSEGMENTVERSION"));
				lotwtimeData.put("TOPROCESSSTATE", wTimeDef.get("TOPROCESSSTATE"));
				lotwtimeData.put("SETTIME", time);
				lotwtimeData.put("OCCURETIME", occureTime);
				lotwtimeData.put("WTIMETYPE", wTimeDef.get("WTIMETYPE"));
				lotwtimeData.put("WTIMELIMIT", wTimeDef.get("WTIMELIMIT"));
	
				generalDao.addInsert(NAMESAPCE + ".insertPcmLotwtime", lotwtimeData);
            }

		}

		List<Map<String, Object>> lotWtimeList = this.getLotWtimeList(lotData);
		for (int i = 0; i < lotWtimeList.size(); i++) {
			lotWtime = lotWtimeList.get(i);

			if (lotWtime.get("WTIME") != null) {
				continue;
			}

			String WtimeCheckType = StringUtil.Object2String(lotWtime.get("WTIMETYPE"));
			Date OccureTime = dateFormat.parse(dateFormat.format(lotWtime.get("OCCURETIME")));
			String WtimeDefid = StringUtil.Object2String(lotWtime.get("WTIMEDEFID"));
			int checkTime = time.compareTo(OccureTime);

			Boolean checked = true;

			lotWtime.put("WTIME", time);
			lotWtime.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
			generalDao.addUpdate(NAMESAPCE + ".updatePcmLotwtime", lotWtime);

			if (WtimeCheckType.equals(WTimeType.Max)) {

				if (checkTime > 0) {
					checked = false;
				}
			} else if (WtimeCheckType.equals(WTimeType.Min)) {
				if (checkTime < 0) {
					checked = false;
				}
			}

			if (!checked) {
				this.wtimeAction(dto, lotData, StringUtil.Object2String(lotWtime.get("WTIMEDEFID")), lotWtime, time);
			}

		}

		return "";

	}

	// AS-IS : GetProcessPathId
	public Map<String, Object> processPathInfo(Map<String, Object> lotData, String processDefid,
			String processDefVersion) throws Exception {

		Map<String, Object> param = new HashMap<String, Object>();

		param.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		param.put("PLANTID", lotData.get("PLANTID"));
		param.put("PROCESSDEFID", processDefid);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));

		Map<String, Object> processPathInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList",
				param);

		if (processPathInfo == null) {
			throw new BizException("NotDefineRoutingPath");
		}

		return processPathInfo;

	}

	public Map<String, Object> processPathInfoByProcessDef(String processDefid, String processDefVersion,
			int pathSequence) throws Exception {

		Map<String, Object> param = new HashMap<String, Object>();
		param.put("PROCESSDEFID", processDefid);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("PATHSEQUENCE", pathSequence);

		Map<String, Object> processPathInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList",
				param);

		if (processPathInfo == null) {
			throw new BizException("NotDefineRoutingPath");
		}

		return processPathInfo;

	}

	public Map<String, Object> processPathInfoByProcessDef(String processDefid, String processDefVersion,
			String pathType) throws Exception {

		Map<String, Object> param = new HashMap<String, Object>();
		Map<String, Object> processPathInfo = new HashMap<String, Object>();
		param.put("PROCESSDEFID", processDefid);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("PATHTYPE", pathType);

		processPathInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", param);

		if (processPathInfo == null) {
			param.clear();
			param.put("PROCESSDEFID", processDefid);
			param.put("PROCESSDEFVERSION", processDefVersion);
			param.put("PATHTYPE", "StartEnd");

			processPathInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", param);

			if (processPathInfo == null) {
				throw new BizException("NotDefineRoutingPath");
			}
		}

		return processPathInfo;

	}

	public Map<String, Object> processPathInfoByProcessPathId(String processPathid) throws Exception {

		Map<String, Object> param = new HashMap<String, Object>();

		param.put("PROCESSPATHID", processPathid);

		List<Map<String, Object>> processPathInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectBasProcesspathList",
				param);

		if (processPathInfo.size() == 0) {
			throw new BizException("NotDefineRoutingPath");
		}

		return processPathInfo.get(0);

	}

	public List<Map<String, Object>> getLotWtimeList(Map<String, Object> lotData) throws Exception {

		Map<String, Object> param = new HashMap<String, Object>();
		
		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotData);

		String processPathId = StringUtil
				.Object2String(this.processPathInfo(lotData, StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")),
						StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"))).get("PROCESSPATHID"));

		param.put("LOTID", lotData.get("LOTID"));
		param.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		param.put("PLANTID", lotData.get("PLANTID"));
		param.put("TOPROCESSDEFID", processDefInfo.get("PROCESSDEFID"));
		param.put("TOPROCESSDEFVERSION", processDefInfo.get("PROCESSDEFVERSION"));
		param.put("TOROCESSPATHID", processPathId);
		param.put("TOPROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		param.put("TOPROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		param.put("TOPROCESSSTATE", lotData.get("PROCESSSTATE"));

		List<Map<String, Object>> lotWtimeList = generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotwtimeList", param);

		return lotWtimeList;
	}

	public List<Map<String, Object>> getWtimeSetList(Map<String, Object> lotData) throws Exception {
		Map<String, Object> param = new HashMap<String, Object>();
		
		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotData);

		String processPathId = StringUtil
				.Object2String(this.processPathInfo(lotData, StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")),
						StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"))).get("PROCESSPATHID"));

		param.put("ENTERPRISEID"          , lotData.get("ENTERPRISEID"));
		param.put("PLANTID"               , lotData.get("PLANTID"));
		param.put("PRODUCTDEFID"          , lotData.get("PRODUCTDEFID"));
		param.put("PRODUCTDEFVERSION"     , lotData.get("PRODUCTDEFVERSION"));
		param.put("PROCESSDEFID"          , processDefInfo.get("PROCESSDEFID"));
		param.put("PROCESSDEFVERSION"     , processDefInfo.get("PROCESSDEFVERSION"));
		param.put("PROCESSPATHID"         , processPathId);
		param.put("USERSEQUENCE"          , lotData.get("USERSEQUENCE"));
		param.put("PROCESSSEGMENTID"      , lotData.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
		param.put("PROCESSSTATE", lotData.get("PROCESSSTATE"));
		param.put("VALIDSTATE", "Valid");

		List<Map<String, Object>> wTimeDefintionInfo = generalDao
				.addSelect(NAMESAPCE_COMM + ".selectBasWtimedefinitionList", param);

		return wTimeDefintionInfo;

	}

	public Boolean validateProcessState(Map<String, Object> lotInfo, String transitType) throws Exception {

		String processState = StringUtil.Object2String(lotInfo.get("PROCESSSTATE"));
		String stepType = this.getStepTypeByLot(lotInfo);
		List<String> stepList = Arrays.asList(stepType.split(","));

		String processStateByCurrentStep = getProcessStateByTransitType(transitType);

		if (processStateByCurrentStep.isEmpty()) {
			return false;
		}
		if (stepList.size() < 1 || !stepList.contains(processStateByCurrentStep)) {
			return false;
		}
		switch (transitType) {
		case TransitType.ReceiveLot:
			if (processState.equals(LotProcessState2.WaitForReceive))
				return true;
			else
				return false;
		case TransitType.TrackInLot:
			if ((processState.equals(LotProcessState2.Receive) && stepList.contains(LotProcessState2.WaitForReceive)
					|| (processState.equals(LotProcessState2.WaitForReceive)
							&& !stepList.contains(LotProcessState2.WaitForReceive))))
				return true;
			else
				return false;
		case TransitType.TrackOutLot:
			if ((processState.equals(LotProcessState2.WorkStart) && stepList.contains(LotProcessState2.Receive))
					|| (processState.equals(LotProcessState2.Receive) && !stepList.contains(LotProcessState2.Receive)
							&& stepList.contains(LotProcessState2.WaitForReceive))
					|| (processState.equals(LotProcessState2.WaitForReceive)
							&& !stepList.contains(LotProcessState2.Receive)
							&& !stepList.contains(LotProcessState2.WaitForReceive)))
				return true;
			else
				return false;
		case TransitType.SendLot:
			if ((processState.equals(LotProcessState2.WorkEnd) && stepList.contains(LotProcessState2.WorkStart))
					|| (processState.equals(LotProcessState2.WorkStart)
							&& !stepList.contains(LotProcessState2.WorkStart)
							&& stepList.contains(LotProcessState2.Receive))
					|| (processState.equals(LotProcessState2.Receive) && !stepList.contains(LotProcessState2.WorkStart)
							&& !stepList.contains(LotProcessState2.Receive)
							&& stepList.contains(LotProcessState2.WaitForReceive))
					|| (processState.equals(LotProcessState2.WaitForReceive)
							&& !stepList.contains(LotProcessState2.WorkStart)
							&& !stepList.contains(LotProcessState2.Receive)
							&& !stepList.contains(LotProcessState2.WaitForReceive)))
				return true;
			else
				return false;
		default:
			return false;
		}
	}

	public void insertLotEquipment(UiMapDto dto, Map<String, Object> lotInfo, String equipmentId, Date time)
			throws Exception {

		Map<String, Object> param = new HashMap<String, Object>();

		param.put("LOTID", lotInfo.get("LOTID"));
		param.put("EQUIPMENTID", equipmentId);
		param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		param.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
		param.put("PROCESSSTATE", lotInfo.get("PROCESSSTATE"));
		param.put("RECEIVETIME", time);

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotequipment", param);

	}

	public void deleteSkipWorkResult(UiMapDto dto, Map<String, Object> lotInfo) throws Exception {
		Map<String, Object> param = new HashMap<String, Object>();
		Map<String, Object> lotworkresult = new HashMap<String, Object>();

		param.put("LOTID", lotInfo.get("LOTID"));
		param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		param.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
		param.put("RESULTTYPE", "SKIP");

		List<Map<String, Object>> lotworkresultInfo = generalDao
				.addSelect(NAMESAPCE_COMM + ".selectPcmLotworkresultList", param);

		for (int i = 0, len = lotworkresultInfo.size(); i < len; i++) {
			lotworkresult = lotworkresultInfo.get(i);

			generalDao.addDelete(NAMESAPCE + ".deletePcmLotworkresult", lotworkresult);

		}

	}

	public void insertLotComment(UiMapDto dto, Map<String, Object> lotInfo, String comment, String creator,
			String transitionId) throws Exception {

		Map<String, Object> paramLot = new HashMap<String, Object>();
		Map<String, Object> paramLotcomment = new HashMap<String, Object>();

		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotInfo);

		String processPathId = this.processPathInfo(lotInfo, processDefInfo.get("PROCESSDEFID").toString(),
				processDefInfo.get("PROCESSDEFVERSION").toString()).get("PROCESSPATHID").toString();

		paramLotcomment.put("LOTID", lotInfo.get("LOTID"));
		paramLotcomment.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
		paramLotcomment.put("PLANTID", lotInfo.get("PLANTID"));
		paramLotcomment.put("AREAID", lotInfo.get("AREAID"));
		paramLotcomment.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
		paramLotcomment.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		paramLotcomment.put("PROCESSDEFID", processDefInfo.get("PROCESSDEFID"));
		paramLotcomment.put("PROCESSDEFVERSION", processDefInfo.get("PROCESSDEFVERSION"));

		paramLotcomment.put("PROCESSPATHID", processPathId);
		paramLotcomment.put("USERSEQUENCE", lotInfo.get("USERSEQUENCE"));
		paramLotcomment.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		paramLotcomment.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		paramLotcomment.put("PROCESSSTATE", lotInfo.get("PROCESSSTATE"));
		paramLotcomment.put("COMMENTS", comment);
		paramLotcomment.put("TRANSITIONID", transitionId);
		paramLotcomment.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));

		if (!creator.isEmpty()) {
			paramLotcomment.put("CREATOR", creator);
		}

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotcomment", paramLotcomment);

	}

	public void updateLotDefectUnit(UiMapDto dto, Map<String, Object> lotInfo, String unit) throws Exception {

		String defectUnit = StringUtil.Object2String(lotInfo.get("DEFECTUNIT"));

		if (defectUnit == "" && unit.equals("PCS")) {
			lotInfo.put("DEFECTUNIT", unit);
			lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

			generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
			generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		}

	}

	public Map<String, Object> getProcessDefinitionInfo(Map<String, Object> lotInfo) throws Exception {
		Map<String, Object> result = new HashMap<>();
		Map<String, Object> param = new HashMap<>();

		result.put("PROCESSDEFID", lotInfo.get("PROCESSDEFID"));
		result.put("PROCESSDEFVERSION", lotInfo.get("PROCESSDEFVERSION"));

		if (lotInfo.get("SUBPROCESSDEFID") != null && !lotInfo.get("SUBPROCESSDEFID").toString().isEmpty()) {
			param.put("PROCESSDEFID", lotInfo.get("SUBPROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lotInfo.get("SUBPROCESSDEFVERSION"));
			Map<String, Object> processDefinitionInfo = generalDao
					.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcessdefinition", param);

			if (processDefinitionInfo == null) {
				throw new BizException("checkProcessDef", String.format("ProcessDefId : %s  ProcessDefVersion : %s",
						lotInfo.get("SUBPROCESSDEFID"), lotInfo.get("SUBPROCESSDEFVERSION")));
			}

			if (processDefinitionInfo.get("PROCESSDEFTYPE").equals("Rework")) {
				result.put("PROCESSDEFID", lotInfo.get("SUBPROCESSDEFID"));
				result.put("PROCESSDEFVERSION", lotInfo.get("SUBPROCESSDEFVERSION"));
			}

		}

		return result;
	}

	public Map<String, Object> updateReceiveLot(UiMapDto dto, Map<String, Object> lotInfo, String userId, Date time)
			throws Exception {

		lotInfo.put("PROCESSSTATE", LotProcessState2.Receive);
		lotInfo.put("RECEIVEUSER", userId);
		lotInfo.put("RECEIVETIME", time);
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return lotInfo;

	}

	public Map<String, Object> splitDefectLot(UiMapDto dto, String lotId, double childQty, double splitQty) throws Exception {
		String childLotId  = "";
		String pattern     = "^[0-9]*$"; // 숫자만
		String maxSequence ="";
		
		Map<String, Object> lotInfo = this.validateLotInfo(lotId);
		
		String rootLotId = StringUtil.Object2String(lotInfo.get("ROOTLOTID"));

		Map<String, Object> paramDefect = new HashMap<String, Object>();
		paramDefect.put("ROOTLOTID", rootLotId);

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".selectMaxDefectMaxSequence", paramDefect);
		}
		else 
		{
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".selectMigMaxDefectMaxSequence", paramDefect);
		}
		
		String serialChar;
		int serialNo = 0;

		if (maxSequence != null) {
			if( maxSequence.substring(0, 1).equals("Z"))
			{
				//throw new BizException("불량LOT을 더이상 생성할수 없습니다.");
				throw new BizException("LOTCannotCreated");
			}
			if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
				serialChar = maxSequence.substring(0, 1);
				serialNo = Integer.parseInt(maxSequence.substring(1)) + 1;
				
				if(serialNo == 100)
				{
					serialChar = StringUtil.nextAlphabet(maxSequence.substring(0, 1));
					serialNo = 1;
				}
				
			}
			else 
			{
				serialChar =  StringUtil.nextAlphabet(maxSequence.substring(0, 1));
			}
		} else {
			serialChar = "A";
			serialNo = 1;
		}

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			childLotId = lotId.substring(0, lotId.length() - 3)
					+ String.format("%s%02d", String.valueOf(serialChar), serialNo);
		} else {
			
			childLotId = rootLotId + String.format("%s", String.valueOf(serialChar));
		}

		return this.splitLot(dto, lotInfo, childLotId, childQty, splitQty, "Y");

	}

	public Map<String, Object> splitDefectLot(UiMapDto dto, String lotId, double childQty, double splitQty, String isDefected) throws Exception {
		String childLotId = "";
		String rootLotId = "";
		String pattern = "^[0-9]*$"; // 숫자만
		String maxSequence ="";

		Map<String, Object> lotInfo = this.validateLotInfo(lotId);

		rootLotId = StringUtil.Object2String(lotInfo.get("ROOTLOTID"));

		Map<String, Object> paramDefect = new HashMap<String, Object>();
		paramDefect.put("ROOTLOTID", rootLotId);

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".selectMaxDefectMaxSequence", paramDefect);
		}
		else 
		{
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".selectMigMaxDefectMaxSequence", paramDefect);
		}

		String serialChar;
		int serialNo = 0;

		if (maxSequence != null) {
			if( maxSequence.substring(0, 1).equals("Z"))
			{
				//throw new BizException("불량LOT을 더이상 생성할수 없습니다.");
				throw new BizException("LOTCannotCreated");
			}
			if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
				serialChar = maxSequence.substring(0, 1);
				serialNo = Integer.parseInt(maxSequence.substring(1)) + 1;
				
				if(serialNo == 100)
				{
					serialChar = StringUtil.nextAlphabet(maxSequence.substring(0, 1));
					serialNo = 1;
				}
				
			}
			else 
			{
				serialChar =  StringUtil.nextAlphabet(maxSequence.substring(0, 1));
			}
		} else {
			serialChar = "A";
			serialNo = 1;
		}

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			childLotId = lotId.substring(0, lotId.length() - 3)
					+ String.format("%s%02d", String.valueOf(serialChar), serialNo);
		} else {
			//childLotId = lotId + "-" + String.format("%s%02d", String.valueOf(serialChar), serialNo);
			childLotId = rootLotId + String.format("%s", String.valueOf(serialChar));
		}

		return this.splitLot(dto, lotInfo, childLotId, childQty, splitQty, isDefected);

	}
	public Map<String, Object> splitDefectLot(UiMapDto dto, String lotId, double childQty, double splitQty, String isDefected, String transitType) throws Exception {
		String childLotId = "";
		String rootLotId = "";
		String pattern = "^[0-9]*$"; // 숫자만
		String maxSequence ="";

		Map<String, Object> lotInfo = this.validateLotInfo(lotId);

		rootLotId = StringUtil.Object2String(lotInfo.get("ROOTLOTID"));

		Map<String, Object> paramDefect = new HashMap<String, Object>();
		paramDefect.put("ROOTLOTID", rootLotId);
		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".selectMaxDefectMaxSequence", paramDefect);
		}
		else 
		{
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".selectMigMaxDefectMaxSequence", paramDefect);
		}

		String serialChar;
		int serialNo = 0;

		if (maxSequence != null) {
			if( maxSequence.substring(0, 1).equals("Z"))
			{
				//throw new BizException("불량LOT을 더이상 생성할수 없습니다.");
				throw new BizException("LOTCannotCreated");
			}
			
			if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
				serialChar = maxSequence.substring(0, 1);
				serialNo = Integer.parseInt(maxSequence.substring(1)) + 1;
				
				if(serialNo == 100)
				{
					serialChar = StringUtil.nextAlphabet(maxSequence.substring(0, 1));
					serialNo = 1;
				}
				
			}
			else 
			{
				serialChar =  StringUtil.nextAlphabet(maxSequence.substring(0, 1));
			}
		} else {
			serialChar = "A";
			serialNo = 1;
		}

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			childLotId = lotId.substring(0, lotId.length() - 3)
					+ String.format("%s%02d", String.valueOf(serialChar), serialNo);
		} else {
			
			childLotId = rootLotId + String.format("%s", String.valueOf(serialChar));
		}

		return this.splitLot(dto, lotInfo, childLotId, childQty, splitQty, isDefected, transitType);

	}

	public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty) throws Exception {

		Map<String, Object> uptLot = new HashMap<>();
		Map<String, Object> childLot = new HashMap<>();
		Map<String, Object> upHisLot = new HashMap<>();
		Map<String, Object> lotGeneal = new HashMap<>();
		Map<String, Object> childLotGeneal = new HashMap<>();
		Map<String, Object> paramLrl = new HashMap<>();
		Map<String, Object> plocking = new HashMap<>();
		Map<String, Object> clocking = new HashMap<>();
		Map<String, Object> psd = new HashMap<>();
		Map<String, Object> psc = new HashMap<>();

		double mainLotQty = 0;
		double childLotCreateQty = 0;
		double childLotQty = 0;
		double scrappedQty = 0;

		uptLot = this.validateLotInfo(StringUtil.Object2String(lotInfo.get("LOTID")));
		
		childLotCreateQty = childQty;
		childLotQty = splitQty;
		mainLotQty = StringUtil.Object2Double(uptLot.get("QTY")) - childLotQty;
		
		uptLot.put("CHILDLOTID", childLotId);
		uptLot.put("PREVQTY", uptLot.get("QTY"));
		uptLot.put("QTY", mainLotQty);
		
		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", uptLot);

		// MAIM LOT 추적 이력 정보 등록
		int lotGeneaCnt = generalDao.addInsert(NAMESAPCE + ".selectPcmLotgenealCnt", uptLot);
		String depth = lotGeneaCnt == 0 ? "0" : String.valueOf(lotGeneaCnt);

		lotGeneal.put("LOTID"                  , uptLot.get("LOTID"));
		lotGeneal.put("ENTERPRISEID"           , uptLot.get("ENTERPRISEID"));
		lotGeneal.put("PLANTID"                , uptLot.get("PLANTID"));
		lotGeneal.put("AREAID"                 , uptLot.get("AREAID"));
		lotGeneal.put("PRODUCTDEFID"           , uptLot.get("PRODUCTDEFID"));
		lotGeneal.put("PRODUCTDEFVERSION"      , uptLot.get("PRODUCTDEFVERSION"));
		lotGeneal.put("PROCESSDEFID"           , uptLot.get("PROCESSDEFID"));
		lotGeneal.put("PROCESSDEFVERSION"      , uptLot.get("PROCESSDEFVERSION"));
		lotGeneal.put("PROCESSPATHID"          , uptLot.get("PROCESSPATHSTACK"));
		lotGeneal.put("USERSEQUENCE"           , uptLot.get("USERSEQUENCE"));
		lotGeneal.put("PROCESSSEGMENTID"       , uptLot.get("PROCESSSEGMENTID"));
		lotGeneal.put("PROCESSSEGMENTVERSION"  , uptLot.get("PROCESSSEGMENTVERSION"));
		lotGeneal.put("ROOTLOTID"              , uptLot.get("ROOTLOTID"));
		lotGeneal.put("DEPTH"                  , depth);
		lotGeneal.put("CREATEDQTY"             , uptLot.get("CREATEDQTY"));
		lotGeneal.put("QTY"                    , uptLot.get("QTY"));
		lotGeneal.put("SOURCELOTID"            , uptLot.get("PARENTLOTID"));
		lotGeneal.put("DESTINATIONLOTID"       , childLotId);
		lotGeneal.put("PROCESSSTATE"           , uptLot.get("PROCESSSTATE"));
		lotGeneal.put("WORKCOUNT"              , uptLot.get("WORKCOUNT"));
		lotGeneal.put("LOTCREATETYPE"          , "SplitLot");

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotgeneal", lotGeneal);

		// Child LOT 등록
		childLot.put("LOTID"                 , childLotId);
		childLot.put("LINENO"                , uptLot.get("LINENO"));
		childLot.put("LOTNAME"               , childLotId);
		childLot.put("DESCRIPTION"           , uptLot.get("DESCRIPTION"));
		childLot.put("ENTERPRISEID"          , uptLot.get("ENTERPRISEID"));
		childLot.put("PLANTID"               , uptLot.get("PLANTID"));
		childLot.put("AREAID"                , uptLot.get("AREAID"));
		childLot.put("RESOURCEID"            , uptLot.get("RESOURCEID"));
		childLot.put("LOCATIONID"            , uptLot.get("LOCATIONID"));
		childLot.put("ORIGINALPLANTID"       , uptLot.get("ORIGINALPLANTID"));
		childLot.put("RAWMATERIALID"         , uptLot.get("RAWMATERIALID"));
		childLot.put("ROOTLOTID"             , uptLot.get("ROOTLOTID"));
		childLot.put("LOTTYPE"               , uptLot.get("LOTTYPE"));
		childLot.put("HASSUBLOT"             , uptLot.get("HASSUBLOT"));
		childLot.put("PRODUCTDEFID"          , uptLot.get("PRODUCTDEFID"));
		childLot.put("PRODUCTDEFVERSION"     , uptLot.get("PRODUCTDEFVERSION"));
		childLot.put("PROCESSDEFID"          , uptLot.get("PROCESSDEFID"));
		childLot.put("PROCESSDEFVERSION"     , uptLot.get("PROCESSDEFVERSION"));
		childLot.put("PROCESSPATHSTACK"      , uptLot.get("PROCESSPATHSTACK"));
		childLot.put("USERSEQUENCE"          , uptLot.get("USERSEQUENCE"));
		childLot.put("PROCESSSEGMENTID"      , uptLot.get("PROCESSSEGMENTID"));
		childLot.put("PROCESSSEGMENTVERSION" , uptLot.get("PROCESSSEGMENTVERSION"));
		childLot.put("PRODUCTIONORDERID"     , uptLot.get("PRODUCTIONORDERID"));
		childLot.put("PRIORITY"              , uptLot.get("PRIORITY"));
		childLot.put("DUEDATE"               , uptLot.get("DUEDATE"));
		childLot.put("TRACKINTIME"           , uptLot.get("TRACKINTIME"));
		childLot.put("TRACKINUSER"           , uptLot.get("TRACKINUSER"));
		childLot.put("TRACKOUTUSER"          , uptLot.get("TRACKOUTUSER"));
		childLot.put("TRACKOUTTIME"          , uptLot.get("TRACKOUTTIME"));
		childLot.put("LOTSTATE"              , uptLot.get("LOTSTATE"));
		childLot.put("PROCESSSTATE"          , uptLot.get("PROCESSSTATE"));
		childLot.put("WEEK"                  , uptLot.get("WEEK"));
		childLot.put("ISHOLD"                , "N");
		childLot.put("ISREWORK"              , uptLot.get("ISREWORK"));
		childLot.put("DEFECTQTY"             , 0);
		childLot.put("CARRIERID"             , "");
		childLot.put("CHILDLOTID"            , "");
		childLot.put("CREATEDQTY"            , childQty);
		childLot.put("EQUIPMENTID"           , "");
		childLot.put("LOTGROUPID"            , "");
		childLot.put("PARENTLOTID"           , uptLot.get("LOTID"));
		childLot.put("QTY"                   , childQty);
		childLot.put("RECIPEDEFID"           , "");
		childLot.put("RECIPEDEFVERSION"      , "");
		childLot.put("WORKCOUNT"             , 0);
		childLot.put("REWORKCOUNT"           , 0);
		childLot.put("TOTALREWORKCOUNT"      , 0);

		childLot.put("SUBPROCESSDEFID"       , uptLot.get("SUBPROCESSDEFID"));
		childLot.put("SUBPROCESSDEFVERSION"  , uptLot.get("SUBPROCESSDEFVERSION"));
		childLot.put("ROOTLOTSTARTDATE"      , uptLot.get("ROOTLOTSTARTDATE"));
		childLot.put("STARTEDDATE"           , uptLot.get("STARTEDDATE"));
		childLot.put("STARTEDUSER"           , uptLot.get("STARTEDUSER"));
		childLot.put("LOTSTARTDATE"          , uptLot.get("LOTSTARTDATE"));
		childLot.put("SENDUSER"              , uptLot.get("SENDUSER"));
		childLot.put("SENDTIME"              , uptLot.get("SENDTIME"));
		childLot.put("EXPECTEDCOMPLETEDATE"  , uptLot.get("EXPECTEDCOMPLETEDATE"));
		childLot.put("ISFIRSTCREATELOT"      , "N");
		childLot.put("LOTINPUTQTY"           , null);
		childLot.put("ISHOLD"                , "N");
		childLot.put("ISLOCKING"             , "N");
		childLot.put("ISDEFECTED"            , "N");
		childLot.put("ISSHRINKTEST"          , "N");
		childLot.put("DEFECTUNIT"            , uptLot.get("DEFECTUNIT"));
		childLot.put("UNIT"                  , uptLot.get("UNIT"));
		childLot.put("LASTTXNHISTKEY"        , TxnHistKey.getTxnHistKey());
		childLot.put("TXNHISTKEY"            , childLot.get("LASTTXNHISTKEY"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmLot", childLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", childLot);

		// CHILD LOT 추적 이력 정보 등록
		int childLotGeneaCnt = generalDao.addInsert(NAMESAPCE + ".selectPcmLotgenealCnt", childLot);
		String childDepth = childLotGeneaCnt == 0 ? "0" : String.valueOf(childLotGeneaCnt);

		childLotGeneal.put("LOTID"                  , childLot.get("LOTID"));
		childLotGeneal.put("ENTERPRISEID"           , childLot.get("ENTERPRISEID"));
		childLotGeneal.put("PLANTID"                , childLot.get("PLANTID"));
		childLotGeneal.put("AREAID"                 , childLot.get("AREAID"));
		childLotGeneal.put("PRODUCTDEFID"           , childLot.get("PRODUCTDEFID"));
		childLotGeneal.put("PRODUCTDEFVERSION"      , childLot.get("PRODUCTDEFVERSION"));
		childLotGeneal.put("PROCESSDEFID"           , childLot.get("PROCESSDEFID"));
		childLotGeneal.put("PROCESSDEFVERSION"      , childLot.get("PROCESSDEFVERSION"));
		childLotGeneal.put("PROCESSPATHID"          , childLot.get("PROCESSPATHSTACK"));
		childLotGeneal.put("USERSEQUENCE"           , childLot.get("USERSEQUENCE"));
		childLotGeneal.put("PROCESSSEGMENTID"       , childLot.get("PROCESSSEGMENTID"));
		childLotGeneal.put("PROCESSSEGMENTVERSION"  , childLot.get("PROCESSSEGMENTVERSION"));
		childLotGeneal.put("ROOTLOTID"              , childLot.get("ROOTLOTID"));
		childLotGeneal.put("DEPTH"                  , childDepth);
		childLotGeneal.put("CREATEDQTY"             , childLot.get("CREATEDQTY"));
		childLotGeneal.put("QTY"                    , childLot.get("QTY"));
		childLotGeneal.put("SOURCELOTID"            , childLot.get("PARENTLOTID"));
		childLotGeneal.put("PROCESSSTATE"           , childLot.get("PROCESSSTATE"));
		childLotGeneal.put("LOTCREATETYPE"          , "SplitLot");
		childLotGeneal.put("WORKCOUNT"              , childLot.get("WORKCOUNT"));
		generalDao.addInsert(NAMESAPCE + ".insertPcmLotgeneal", childLotGeneal);
		
		
		if (mainLotQty <= 0) {
			uptLot.put("PREVLOTSTATE", uptLot.get("LOTSTATE"));
			uptLot.put("LOTSTATE", LotState.Terminated);
		}

		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", uptLot);		
		
		
		String pattern = "^[0-9]*$"; // 숫자만
		
		String chData  = "";
		
	    if (Pattern.matches(pattern, childLotId.substring(0, 1)) == false) {
			   
		   chData = childLotId.substring(childLotId.length() - 3, childLotId.length() - 2);
	    }
	    else {
		   
		   chData = childLotId.substring(childLotId.length() - 1);
	    }
	    
		
	    if (Pattern.matches(pattern, chData) == true) 
	    {	

			paramLrl.put("LOTID", uptLot.get("LOTID"));
			paramLrl.put("LOCKINGSTATUS", "Created");
	
			List<Map<String, Object>> LotreservelockingInfo = generalDao
					.addSelect(NAMESAPCE + ".selectPcmLotreservelocking", paramLrl);
	
			for (int k = 0; k < LotreservelockingInfo.size(); k++) {
				plocking = LotreservelockingInfo.get(k);
	
				clocking.put("LOTID", childLotId);
				clocking.put("ENTERPRISEID", plocking.get("ENTERPRISEID"));
				clocking.put("PLANTID", plocking.get("PLANTID"));
				clocking.put("PROCESSDEFID", plocking.get("PROCESSDEFID"));
				clocking.put("PROCESSDEFVERSION", plocking.get("PROCESSDEFVERSION"));
				clocking.put("PROCESSSEGMENTID", plocking.get("PROCESSSEGMENTID"));
				clocking.put("PROCESSSEGMENTVERSION", plocking.get("PROCESSSEGMENTVERSION"));
				clocking.put("LOCKINGTYPE", plocking.get("LOCKINGTYPE"));
				clocking.put("LOCKINGCODE", plocking.get("LOCKINGCODE"));
				clocking.put("LOCKINGSTATUS", plocking.get("LOCKINGSTATUS"));
				clocking.put("COMMENTS", plocking.get("COMMENTS"));
				clocking.put("DESCRIPTION", plocking.get("DESCRIPTION"));
				clocking.put("LOCKING_PROCESSSTATE", plocking.get("LOCKING_PROCESSSTATE"));
				clocking.put("TXNHISTKEY", null);
	
				generalDao.addInsert(NAMESAPCE + ".insertPcmLotreservelocking", clocking);
	
			}
	   }

		psd.put("PROCESSSEGMENTID", uptLot.get("PROCESSSEGMENTID"));
		psd.put("PROCESSSEGMENTVERSION", uptLot.get("PROCESSSEGMENTVERSION"));

		Map<String, Object> processsegmentInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment",
				psd);

		String processSegmentClassId_Middle = StringUtil.Object2String(processsegmentInfo.get("PROCESSSEGMENTCLASSID"));

		psc.put("PROCESSSEGMENTCLASSID", processSegmentClassId_Middle);
		Map<String, Object> processsegmentclassInfo = generalDao
				.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegmentclass", psc);

		String processSegmentClassId = StringUtil
				.Object2String(processsegmentclassInfo.get("PARENTPROCESSSEGMENTCLASSID"));

		if (!processSegmentClassId.equals("80")) {
			this.copyLotRouting(dto, StringUtil.Object2String(lotInfo.get("LOTID")), childLotId);
		}

		return this.validateLotInfo(childLotId);

	}

	public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty, String isDefected) throws Exception {

		Map<String, Object> uptLot = new HashMap<>();
		Map<String, Object> childLot = new HashMap<>();
		Map<String, Object> upHisLot = new HashMap<>();
		Map<String, Object> lotGeneal = new HashMap<>();
		Map<String, Object> childLotGeneal = new HashMap<>();
		Map<String, Object> paramLrl = new HashMap<>();
		Map<String, Object> plocking = new HashMap<>();
		Map<String, Object> clocking = new HashMap<>();
		Map<String, Object> psd = new HashMap<>();
		Map<String, Object> psc = new HashMap<>();

		double mainLotQty = 0;
		double childLotCreateQty = 0;
		double childLotQty = 0;
		double scrappedQty = 0;

		// uptLot = lotInfo;
		uptLot   = this.validateLotInfo(StringUtil.Object2String(lotInfo.get("LOTID")));
		
		childLotCreateQty = childQty;
		childLotQty = splitQty;
		mainLotQty = StringUtil.Object2Double(uptLot.get("QTY")) - childLotQty;
		
		uptLot.put("CHILDLOTID", childLotId);
		uptLot.put("PREVQTY", uptLot.get("QTY"));
		uptLot.put("QTY", mainLotQty);
		
		
		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", uptLot);

		// MAIM LOT 추적 이력 정보 등록
		int lotGeneaCnt = generalDao.addInsert(NAMESAPCE + ".selectPcmLotgenealCnt", uptLot);
		String depth = lotGeneaCnt == 0 ? "0" : String.valueOf(lotGeneaCnt);

		lotGeneal.put("LOTID"                 , uptLot.get("LOTID"));
		lotGeneal.put("ENTERPRISEID"          , uptLot.get("ENTERPRISEID"));
		lotGeneal.put("PLANTID"               , uptLot.get("PLANTID"));
		lotGeneal.put("AREAID"                , uptLot.get("AREAID"));
		lotGeneal.put("PRODUCTDEFID"          , uptLot.get("PRODUCTDEFID"));
		lotGeneal.put("PRODUCTDEFVERSION"     , uptLot.get("PRODUCTDEFVERSION"));
		lotGeneal.put("PROCESSDEFID"          , uptLot.get("PROCESSDEFID"));
		lotGeneal.put("PROCESSDEFVERSION"     , uptLot.get("PROCESSDEFVERSION"));
		lotGeneal.put("PROCESSPATHID"         , uptLot.get("PROCESSPATHSTACK"));
		lotGeneal.put("USERSEQUENCE"          , uptLot.get("USERSEQUENCE"));
		lotGeneal.put("PROCESSSEGMENTID"      , uptLot.get("PROCESSSEGMENTID"));
		lotGeneal.put("PROCESSSEGMENTVERSION" , uptLot.get("PROCESSSEGMENTVERSION"));
		lotGeneal.put("ROOTLOTID"             , uptLot.get("ROOTLOTID"));
		lotGeneal.put("DEPTH"                 , depth);
		lotGeneal.put("CREATEDQTY"            , uptLot.get("CREATEDQTY"));
		lotGeneal.put("QTY"                   , uptLot.get("QTY"));
		lotGeneal.put("SOURCELOTID"           , uptLot.get("PARENTLOTID"));
		lotGeneal.put("DESTINATIONLOTID"      , childLotId);
		lotGeneal.put("PROCESSSTATE"          , uptLot.get("PROCESSSTATE"));
		lotGeneal.put("WORKCOUNT"             , uptLot.get("WORKCOUNT"));
		lotGeneal.put("LOTCREATETYPE"         , "SplitLot");

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotgeneal", lotGeneal);

		// Child LOT 등록
		childLot.put("LOTID"                  , childLotId);
		childLot.put("LINENO"                 , uptLot.get("LINENO"));
		childLot.put("LOTNAME"                , childLotId);
		childLot.put("DESCRIPTION"            , uptLot.get("DESCRIPTION"));
		childLot.put("ENTERPRISEID"           , uptLot.get("ENTERPRISEID"));
		childLot.put("PLANTID"                , uptLot.get("PLANTID"));
		childLot.put("AREAID"                 , uptLot.get("AREAID"));
		childLot.put("RESOURCEID"             , uptLot.get("RESOURCEID"));
		childLot.put("LOCATIONID"             , uptLot.get("LOCATIONID"));
		childLot.put("ORIGINALPLANTID"        , uptLot.get("ORIGINALPLANTID"));
		childLot.put("RAWMATERIALID"          , uptLot.get("RAWMATERIALID"));
		childLot.put("ROOTLOTID"              , uptLot.get("ROOTLOTID"));
		childLot.put("LOTTYPE"                , uptLot.get("LOTTYPE"));
		childLot.put("HASSUBLOT"              , uptLot.get("HASSUBLOT"));
		childLot.put("PRODUCTDEFID"           , uptLot.get("PRODUCTDEFID"));
		childLot.put("PRODUCTDEFVERSION"      , uptLot.get("PRODUCTDEFVERSION"));
		childLot.put("PROCESSDEFID"           , uptLot.get("PROCESSDEFID"));
		childLot.put("PROCESSDEFVERSION"      , uptLot.get("PROCESSDEFVERSION"));
		childLot.put("PROCESSPATHSTACK"       , uptLot.get("PROCESSPATHSTACK"));
		childLot.put("USERSEQUENCE"           , uptLot.get("USERSEQUENCE"));
		childLot.put("PROCESSSEGMENTID"       , uptLot.get("PROCESSSEGMENTID"));
		childLot.put("PROCESSSEGMENTVERSION"  , uptLot.get("PROCESSSEGMENTVERSION"));
		childLot.put("PRODUCTIONORDERID"      , uptLot.get("PRODUCTIONORDERID"));
		childLot.put("PRIORITY"               , uptLot.get("PRIORITY"));
		childLot.put("DUEDATE"                , uptLot.get("DUEDATE"));
		childLot.put("TRACKINTIME"            , uptLot.get("TRACKINTIME"));
		childLot.put("TRACKINUSER"            , uptLot.get("TRACKINUSER"));
		childLot.put("TRACKOUTUSER"           , uptLot.get("TRACKOUTUSER"));
		childLot.put("TRACKOUTTIME"           , uptLot.get("TRACKOUTTIME"));
		childLot.put("LOTSTATE"               , uptLot.get("LOTSTATE"));
		childLot.put("PROCESSSTATE"           , uptLot.get("PROCESSSTATE"));
		childLot.put("WEEK"                   , uptLot.get("WEEK"));
		childLot.put("ISHOLD"                 , "N");
		childLot.put("ISREWORK"               , uptLot.get("ISREWORK"));
		childLot.put("DEFECTQTY"              , 0);
		childLot.put("CARRIERID"              , "");
		childLot.put("CHILDLOTID"             , "");
		childLot.put("CREATEDQTY"             , childQty);
		childLot.put("EQUIPMENTID"            , "");
		childLot.put("LOTGROUPID"             , "");
		childLot.put("PARENTLOTID"            , lotInfo.get("LOTID"));
		childLot.put("QTY"                    , childQty);
		childLot.put("RECIPEDEFID"            , "");
		childLot.put("RECIPEDEFVERSION"       , "");
		childLot.put("WORKCOUNT"              , 0);
		childLot.put("REWORKCOUNT"            , 0);
		childLot.put("TOTALREWORKCOUNT"       , 0);
		childLot.put("ROOTLOTSTARTDATE"       , uptLot.get("ROOTLOTSTARTDATE"));
		childLot.put("SUBPROCESSDEFID"        , uptLot.get("SUBPROCESSDEFID"));
		childLot.put("SUBPROCESSDEFVERSION"   , uptLot.get("SUBPROCESSDEFVERSION"));
		childLot.put("STARTEDDATE"            , uptLot.get("STARTEDDATE"));
		childLot.put("STARTEDUSER"            , uptLot.get("STARTEDUSER"));
		childLot.put("LOTSTARTDATE"           , uptLot.get("LOTSTARTDATE"));
		childLot.put("SENDUSER"               , uptLot.get("SENDUSER"));
		childLot.put("SENDTIME"               , uptLot.get("SENDTIME"));
		childLot.put("EXPECTEDCOMPLETEDATE"   , uptLot.get("EXPECTEDCOMPLETEDATE"));
		childLot.put("ISFIRSTCREATELOT"       , "N");
		childLot.put("LOTINPUTQTY"            , null);
		childLot.put("ISHOLD"                 , "N");
		childLot.put("ISLOCKING"              , "N");
		childLot.put("ISDEFECTED"             , isDefected);
		childLot.put("ISSHRINKTEST"           , "N");
		childLot.put("DEFECTUNIT"             , uptLot.get("DEFECTUNIT"));
		childLot.put("UNIT"                   , uptLot.get("UNIT"));
		childLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		childLot.put("TXNHISTKEY", childLot.get("LASTTXNHISTKEY"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmLot", childLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", childLot);

		// CHILD LOT 추적 이력 정보 등록
		int childLotGeneaCnt = generalDao.addInsert(NAMESAPCE + ".selectPcmLotgenealCnt", childLot);
		String childDepth = childLotGeneaCnt == 0 ? "0" : String.valueOf(childLotGeneaCnt);

		childLotGeneal.put("LOTID"                 , childLot.get("LOTID"));
		childLotGeneal.put("ENTERPRISEID"          , childLot.get("ENTERPRISEID"));
		childLotGeneal.put("PLANTID"               , childLot.get("PLANTID"));
		childLotGeneal.put("AREAID"                , childLot.get("AREAID"));
		childLotGeneal.put("PRODUCTDEFID"          , childLot.get("PRODUCTDEFID"));
		childLotGeneal.put("PRODUCTDEFVERSION"     , childLot.get("PRODUCTDEFVERSION"));
		childLotGeneal.put("PROCESSDEFID"          , childLot.get("PROCESSDEFID"));
		childLotGeneal.put("PROCESSDEFVERSION"     , childLot.get("PROCESSDEFVERSION"));
		childLotGeneal.put("PROCESSPATHID"         , childLot.get("PROCESSPATHSTACK"));
		childLotGeneal.put("USERSEQUENCE"          , childLot.get("USERSEQUENCE"));
		childLotGeneal.put("PROCESSSEGMENTID"      , childLot.get("PROCESSSEGMENTID"));
		childLotGeneal.put("PROCESSSEGMENTVERSION" , childLot.get("PROCESSSEGMENTVERSION"));
		childLotGeneal.put("ROOTLOTID"             , childLot.get("ROOTLOTID"));
		childLotGeneal.put("DEPTH"                 , childDepth);
		childLotGeneal.put("CREATEDQTY"            , childLot.get("CREATEDQTY"));
		childLotGeneal.put("QTY"                   , childLot.get("QTY"));
		childLotGeneal.put("SOURCELOTID"           , childLot.get("PARENTLOTID"));
		childLotGeneal.put("PROCESSSTATE"          , childLot.get("PROCESSSTATE"));
		childLotGeneal.put("WORKCOUNT"             , childLot.get("WORKCOUNT"));
		childLotGeneal.put("LOTCREATETYPE"         , "SplitLot");

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotgeneal", childLotGeneal);
		
		if (mainLotQty <= 0) {
			uptLot.put("PREVLOTSTATE", uptLot.get("LOTSTATE"));
			uptLot.put("LOTSTATE", LotState.Terminated);
		}

		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", uptLot);
		

		
		String pattern = "^[0-9]*$"; // 숫자만
		String chData  = "";
		
	    if (Pattern.matches(pattern, childLotId.substring(0, 1)) == false) {
			   
		   chData = childLotId.substring(childLotId.length() - 3, childLotId.length() - 2);
	    }
	    else {
		   
		   chData = childLotId.substring(childLotId.length() - 1);
	    }
	    
		if (Pattern.matches(pattern, chData) == true) 
		{	
			paramLrl.put("LOTID"         , uptLot.get("LOTID"));
			paramLrl.put("LOCKINGSTATUS" , "Created");
	
			List<Map<String, Object>> LotreservelockingInfo = generalDao
					.addSelect(NAMESAPCE + ".selectPcmLotreservelocking", paramLrl);
			
			for (int k = 0; k < LotreservelockingInfo.size(); k++) {
				plocking = LotreservelockingInfo.get(k);
	
				clocking.put("LOTID", childLotId);
				clocking.put("ENTERPRISEID"         , plocking.get("ENTERPRISEID"));
				clocking.put("PLANTID"              , plocking.get("PLANTID"));
				if(StringUtil.Object2String( plocking.get("LOTID")).equals(StringUtil.Object2String(plocking.get("PROCESSDEFID"))))
				{
					clocking.put("PROCESSDEFID"         , childLotId);
					
				} else {
					
					clocking.put("PROCESSDEFID"         , plocking.get("PROCESSDEFID"));
				}
				clocking.put("PROCESSDEFVERSION"    , plocking.get("PROCESSDEFVERSION"));
				clocking.put("PROCESSSEGMENTID"     , plocking.get("PROCESSSEGMENTID"));
				clocking.put("PROCESSSEGMENTVERSION", plocking.get("PROCESSSEGMENTVERSION"));
				clocking.put("LOCKINGTYPE"          , plocking.get("LOCKINGTYPE"));
				clocking.put("LOCKINGCODE"          , plocking.get("LOCKINGCODE"));
				clocking.put("LOCKINGSTATUS"        , plocking.get("LOCKINGSTATUS"));
				clocking.put("COMMENTS"             , plocking.get("COMMENTS"));
				clocking.put("DESCRIPTION"          , plocking.get("DESCRIPTION"));
				clocking.put("LOCKING_PROCESSSTATE" , plocking.get("LOCKING_PROCESSSTATE"));
				clocking.put("TXNHISTKEY"           , TxnHistKey.getTxnHistKey());
	
				generalDao.addInsert(NAMESAPCE + ".insertPcmLotreservelocking", clocking);
	
			}
		}

		psd.put("PROCESSSEGMENTID", uptLot.get("PROCESSSEGMENTID"));
		psd.put("PROCESSSEGMENTVERSION", uptLot.get("PROCESSSEGMENTVERSION"));

		Map<String, Object> processsegmentInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment",
				psd);

		String processSegmentClassId_Middle = StringUtil.Object2String(processsegmentInfo.get("PROCESSSEGMENTCLASSID"));

		psc.put("PROCESSSEGMENTCLASSID", processSegmentClassId_Middle);
		Map<String, Object> processsegmentclassInfo = generalDao
				.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegmentclass", psc);

		String processSegmentClassId = StringUtil
				.Object2String(processsegmentclassInfo.get("PARENTPROCESSSEGMENTCLASSID"));

		if (!processSegmentClassId.equals("80") && !isDefected.equals("Y")) {
			this.copyLotRouting(dto, StringUtil.Object2String(lotInfo.get("LOTID")), childLotId);
		}

		return this.validateLotInfo(childLotId);

	}
	public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty, String isDefected, String transitType) throws Exception {

		Map<String, Object> uptLot = new HashMap<>();
		Map<String, Object> childLot = new HashMap<>();
		Map<String, Object> upHisLot = new HashMap<>();
		Map<String, Object> lotGeneal = new HashMap<>();
		Map<String, Object> childLotGeneal = new HashMap<>();
		Map<String, Object> paramLrl = new HashMap<>();
		Map<String, Object> plocking = new HashMap<>();
		Map<String, Object> clocking = new HashMap<>();
		Map<String, Object> psd = new HashMap<>();
		Map<String, Object> psc = new HashMap<>();

		double mainLotQty = 0;
		double childLotCreateQty = 0;
		double childLotQty = 0;
		double scrappedQty = 0;



		// uptLot = lotInfo;
		uptLot = this.validateLotInfo(StringUtil.Object2String(lotInfo.get("LOTID")));
		
		childLotCreateQty = childQty;
		childLotQty = splitQty;
		mainLotQty = StringUtil.Object2Double(uptLot.get("QTY")) - childLotQty;
		
		
		uptLot.put("CHILDLOTID", childLotId);
		uptLot.put("PREVQTY", uptLot.get("QTY"));
		uptLot.put("QTY", mainLotQty);
		
		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", uptLot);

		// MAIM LOT 추적 이력 정보 등록
		int lotGeneaCnt = generalDao.addInsert(NAMESAPCE + ".selectPcmLotgenealCnt", uptLot);
		String depth = lotGeneaCnt == 0 ? "0" : String.valueOf(lotGeneaCnt);

		lotGeneal.put("LOTID"                 , uptLot.get("LOTID"));
		lotGeneal.put("ENTERPRISEID"          , uptLot.get("ENTERPRISEID"));
		lotGeneal.put("PLANTID"               , uptLot.get("PLANTID"));
		lotGeneal.put("AREAID"                , uptLot.get("AREAID"));
		lotGeneal.put("PRODUCTDEFID"          , uptLot.get("PRODUCTDEFID"));
		lotGeneal.put("PRODUCTDEFVERSION"     , uptLot.get("PRODUCTDEFVERSION"));
		lotGeneal.put("PROCESSDEFID"          , uptLot.get("PROCESSDEFID"));
		lotGeneal.put("PROCESSDEFVERSION"     , uptLot.get("PROCESSDEFVERSION"));
		lotGeneal.put("PROCESSPATHID"         , uptLot.get("PROCESSPATHSTACK"));
		lotGeneal.put("USERSEQUENCE"          , uptLot.get("USERSEQUENCE"));
		lotGeneal.put("PROCESSSEGMENTID"      , uptLot.get("PROCESSSEGMENTID"));
		lotGeneal.put("PROCESSSEGMENTVERSION" , uptLot.get("PROCESSSEGMENTVERSION"));
		lotGeneal.put("ROOTLOTID"             , uptLot.get("ROOTLOTID"));
		lotGeneal.put("DEPTH"                 , depth);
		lotGeneal.put("CREATEDQTY"            , uptLot.get("CREATEDQTY"));
		lotGeneal.put("QTY"                   , uptLot.get("QTY"));
		lotGeneal.put("SOURCELOTID"           , uptLot.get("PARENTLOTID"));
		lotGeneal.put("DESTINATIONLOTID"      , childLotId);
		lotGeneal.put("PROCESSSTATE"          , uptLot.get("PROCESSSTATE"));
		lotGeneal.put("WORKCOUNT"             , uptLot.get("WORKCOUNT"));
		lotGeneal.put("LOTCREATETYPE"         , "SplitLot");
		lotGeneal.put("PROCESSSTEP"           , transitType);

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotgeneal", lotGeneal);

		// Child LOT 등록
		childLot.put("LOTID"                  , childLotId);
		childLot.put("LINENO"                 , uptLot.get("LINENO"));
		childLot.put("LOTNAME"                , childLotId);
		childLot.put("DESCRIPTION"            , uptLot.get("DESCRIPTION"));
		childLot.put("ENTERPRISEID"           , uptLot.get("ENTERPRISEID"));
		childLot.put("PLANTID"                , uptLot.get("PLANTID"));
		childLot.put("AREAID"                 , uptLot.get("AREAID"));
		childLot.put("RESOURCEID"             , uptLot.get("RESOURCEID"));
		childLot.put("LOCATIONID"             , uptLot.get("LOCATIONID"));
		childLot.put("ORIGINALPLANTID"        , uptLot.get("ORIGINALPLANTID"));
		childLot.put("RAWMATERIALID"          , uptLot.get("RAWMATERIALID"));
		childLot.put("ROOTLOTID"              , uptLot.get("ROOTLOTID"));
		childLot.put("LOTTYPE"                , uptLot.get("LOTTYPE"));
		childLot.put("HASSUBLOT"              , uptLot.get("HASSUBLOT"));
		childLot.put("PRODUCTDEFID"           , uptLot.get("PRODUCTDEFID"));
		childLot.put("PRODUCTDEFVERSION"      , uptLot.get("PRODUCTDEFVERSION"));
		childLot.put("PROCESSDEFID"           , uptLot.get("PROCESSDEFID"));
		childLot.put("PROCESSDEFVERSION"      , uptLot.get("PROCESSDEFVERSION"));
		childLot.put("PROCESSPATHSTACK"       , uptLot.get("PROCESSPATHSTACK"));
		childLot.put("USERSEQUENCE"           , uptLot.get("USERSEQUENCE"));
		childLot.put("PROCESSSEGMENTID"       , uptLot.get("PROCESSSEGMENTID"));
		childLot.put("PROCESSSEGMENTVERSION"  , uptLot.get("PROCESSSEGMENTVERSION"));
		childLot.put("PRODUCTIONORDERID"      , uptLot.get("PRODUCTIONORDERID"));
		childLot.put("PRIORITY"               , uptLot.get("PRIORITY"));
		childLot.put("DUEDATE"                , uptLot.get("DUEDATE"));
		childLot.put("TRACKINTIME"            , uptLot.get("TRACKINTIME"));
		childLot.put("TRACKINUSER"            , uptLot.get("TRACKINUSER"));
		childLot.put("TRACKOUTUSER"           , uptLot.get("TRACKOUTUSER"));
		childLot.put("TRACKOUTTIME"           , uptLot.get("TRACKOUTTIME"));
		childLot.put("LOTSTATE"               , uptLot.get("LOTSTATE"));
		childLot.put("PROCESSSTATE"           , uptLot.get("PROCESSSTATE"));
		childLot.put("WEEK"                   , uptLot.get("WEEK"));
		childLot.put("ISHOLD"                 , "N");
		childLot.put("ISREWORK"               , uptLot.get("ISREWORK"));
		childLot.put("DEFECTQTY"              , 0);
		childLot.put("CARRIERID"              , "");
		childLot.put("CHILDLOTID"             , "");
		childLot.put("CREATEDQTY"             , childQty);
		childLot.put("EQUIPMENTID"            , "");
		childLot.put("LOTGROUPID"             , "");
		childLot.put("PARENTLOTID"            , uptLot.get("LOTID"));
		childLot.put("QTY"                    , childQty);
		childLot.put("RECIPEDEFID"            , "");
		childLot.put("RECIPEDEFVERSION"       , "");
		childLot.put("WORKCOUNT"              , 0);
		childLot.put("REWORKCOUNT"            , 0);
		childLot.put("TOTALREWORKCOUNT"       , 0);
		childLot.put("ROOTLOTSTARTDATE"       , uptLot.get("ROOTLOTSTARTDATE"));
		childLot.put("SUBPROCESSDEFID"        , uptLot.get("SUBPROCESSDEFID"));
		childLot.put("SUBPROCESSDEFVERSION"   , uptLot.get("SUBPROCESSDEFVERSION"));
		childLot.put("STARTEDDATE"            , uptLot.get("STARTEDDATE"));
		childLot.put("STARTEDUSER"            , uptLot.get("STARTEDUSER"));
		childLot.put("LOTSTARTDATE"           , uptLot.get("LOTSTARTDATE"));
		childLot.put("SENDUSER"               , uptLot.get("SENDUSER"));
		childLot.put("SENDTIME"               , uptLot.get("SENDTIME"));
		childLot.put("EXPECTEDCOMPLETEDATE"   , uptLot.get("EXPECTEDCOMPLETEDATE"));
		childLot.put("ISFIRSTCREATELOT"       , "N");
		childLot.put("LOTINPUTQTY"            , null);
		childLot.put("ISHOLD"                 , "N");
		childLot.put("ISLOCKING"              , "N");
		childLot.put("ISDEFECTED"             , isDefected);
		childLot.put("ISSHRINKTEST"           , "N");
		childLot.put("DEFECTUNIT"             , uptLot.get("DEFECTUNIT"));
		childLot.put("UNIT"                   , uptLot.get("UNIT"));
		childLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		childLot.put("TXNHISTKEY", childLot.get("LASTTXNHISTKEY"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmLot", childLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", childLot);

		// CHILD LOT 추적 이력 정보 등록
		int childLotGeneaCnt = generalDao.addInsert(NAMESAPCE + ".selectPcmLotgenealCnt", childLot);
		String childDepth = childLotGeneaCnt == 0 ? "0" : String.valueOf(childLotGeneaCnt);

		childLotGeneal.put("LOTID"                 , childLot.get("LOTID"));
		childLotGeneal.put("ENTERPRISEID"          , childLot.get("ENTERPRISEID"));
		childLotGeneal.put("PLANTID"               , childLot.get("PLANTID"));
		childLotGeneal.put("AREAID"                , childLot.get("AREAID"));
		childLotGeneal.put("PRODUCTDEFID"          , childLot.get("PRODUCTDEFID"));
		childLotGeneal.put("PRODUCTDEFVERSION"     , childLot.get("PRODUCTDEFVERSION"));
		childLotGeneal.put("PROCESSDEFID"          , childLot.get("PROCESSDEFID"));
		childLotGeneal.put("PROCESSDEFVERSION"     , childLot.get("PROCESSDEFVERSION"));
		childLotGeneal.put("PROCESSPATHID"         , childLot.get("PROCESSPATHSTACK"));
		childLotGeneal.put("USERSEQUENCE"          , childLot.get("USERSEQUENCE"));
		childLotGeneal.put("PROCESSSEGMENTID"      , childLot.get("PROCESSSEGMENTID"));
		childLotGeneal.put("PROCESSSEGMENTVERSION" , childLot.get("PROCESSSEGMENTVERSION"));
		childLotGeneal.put("ROOTLOTID"             , childLot.get("ROOTLOTID"));
		childLotGeneal.put("DEPTH"                 , childDepth);
		childLotGeneal.put("CREATEDQTY"            , childLot.get("CREATEDQTY"));
		childLotGeneal.put("QTY"                   , childLot.get("QTY"));
		childLotGeneal.put("SOURCELOTID"           , childLot.get("PARENTLOTID"));
		childLotGeneal.put("PROCESSSTATE"          , childLot.get("PROCESSSTATE"));
		childLotGeneal.put("WORKCOUNT"             , childLot.get("WORKCOUNT"));
		childLotGeneal.put("LOTCREATETYPE"         , "SplitLot");
		childLotGeneal.put("PROCESSSTEP"           , transitType);

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotgeneal", childLotGeneal);

		
		if (mainLotQty <= 0) {
			uptLot.put("PREVLOTSTATE", uptLot.get("LOTSTATE"));
			uptLot.put("LOTSTATE", LotState.Terminated);
		}

		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", uptLot);
		
		//childLotId = lotId.substring(0, lotId.length() - 3)
		String pattern = "^[0-9]*$"; // 숫자만
		String chData  = "";
	    if (Pattern.matches(pattern, childLotId.substring(0, 1)) == false) {
		   
		   chData = childLotId.substring(childLotId.length() - 3, childLotId.length() - 2);
	    }
	    else {
		   
		   chData = childLotId.substring(childLotId.length() - 1);
	    }
	   if (Pattern.matches(pattern, chData) == true) 
	   {
		    paramLrl.put("LOTID"         , uptLot.get("LOTID"));
			paramLrl.put("LOCKINGSTATUS" , "Created");

			List<Map<String, Object>> LotreservelockingInfo = generalDao
					.addSelect(NAMESAPCE + ".selectPcmLotreservelocking", paramLrl);

			for (int k = 0; k < LotreservelockingInfo.size(); k++) {
				plocking = LotreservelockingInfo.get(k);
	
				clocking.put("LOTID", childLotId);
				clocking.put("ENTERPRISEID"          , plocking.get("ENTERPRISEID"));
				clocking.put("PLANTID"               , plocking.get("PLANTID"));
				if(StringUtil.Object2String( plocking.get("LOTID")).equals(StringUtil.Object2String(plocking.get("PROCESSDEFID"))))
				{
					clocking.put("PROCESSDEFID"         , childLotId);
					
				} else {
					
					clocking.put("PROCESSDEFID"         , plocking.get("PROCESSDEFID"));
				}
				clocking.put("PROCESSDEFVERSION"     , plocking.get("PROCESSDEFVERSION"));
				clocking.put("PROCESSSEGMENTID"      , plocking.get("PROCESSSEGMENTID"));
				clocking.put("PROCESSSEGMENTVERSION" , plocking.get("PROCESSSEGMENTVERSION"));
				clocking.put("LOCKINGTYPE"           , plocking.get("LOCKINGTYPE"));
				clocking.put("LOCKINGCODE"           , plocking.get("LOCKINGCODE"));
				clocking.put("LOCKINGSTATUS"         , plocking.get("LOCKINGSTATUS"));
				clocking.put("COMMENTS"              , plocking.get("COMMENTS"));
				clocking.put("DESCRIPTION"           , plocking.get("DESCRIPTION"));
				clocking.put("LOCKING_PROCESSSTATE"  , plocking.get("LOCKING_PROCESSSTATE"));
				clocking.put("TXNHISTKEY"            , TxnHistKey.getTxnHistKey());
			
	
				generalDao.addInsert(NAMESAPCE + ".insertPcmLotreservelocking", clocking);
	
			}
	   }

		psd.put("PROCESSSEGMENTID", uptLot.get("PROCESSSEGMENTID"));
		psd.put("PROCESSSEGMENTVERSION", uptLot.get("PROCESSSEGMENTVERSION"));

		Map<String, Object> processsegmentInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment",
				psd);

		String processSegmentClassId_Middle = StringUtil.Object2String(processsegmentInfo.get("PROCESSSEGMENTCLASSID"));

		psc.put("PROCESSSEGMENTCLASSID", processSegmentClassId_Middle);
		Map<String, Object> processsegmentclassInfo = generalDao
				.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegmentclass", psc);

		String processSegmentClassId = StringUtil
				.Object2String(processsegmentclassInfo.get("PARENTPROCESSSEGMENTCLASSID"));

		if (!processSegmentClassId.equals("80") && !isDefected.equals("Y")) {
			this.copyLotRouting(dto, StringUtil.Object2String(lotInfo.get("LOTID")), childLotId);
		}

		return this.validateLotInfo(childLotId);

	}
	
	public Map<String, Object> splitLot(UiMapDto dto, String lotId, double childQty, double splitQty) throws Exception {
		String childLotId = "";
		String splitSerialNo = "";
		String pattern = "^[0-9]*$"; // 숫자만
		String maxSequence = "";

		Map<String, Object> lotInfo = this.validateLotInfo(lotId);

		// ERP LOT 이라면

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			splitSerialNo = lotId.substring(0, lotId.length() - 4);
		} else {
//			if(lotId.substring(lotId.length() - 1).equals("S") 
//			   || lotId.substring(lotId.length() - 1).equals("E")
//			   || lotId.substring(lotId.length() - 1).equals("R")
//			   || lotId.substring(lotId.length() - 1).equals("T")
//			   || lotId.substring(lotId.length() - 1).equals("P")
//			   || lotId.substring(lotId.length() - 1).equals("F"))
			if (Pattern.matches(pattern, lotId.substring(lotId.length() - 1)) == false) 
			{
				if (lotId.length() == 30) 
				   {
					   splitSerialNo = lotId.substring(0, lotId.length() - 1);
					   
				   } 
				   else
				   {
					   splitSerialNo = lotId;
				   }
				
			} else {
				
				splitSerialNo = lotId.substring(0, lotId.length() - 1);
			}
		}

		Map<String, Object> splitLotMap = new HashMap<>();
		splitLotMap.put("LOTID", splitSerialNo);

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".getMaxSplitLot", splitLotMap);
		} 
		else 
		{
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".getMigMaxSplitLot", splitLotMap);
		}

		int serialNo = 0;

		if (maxSequence != null) {

		    serialNo = Integer.parseInt(maxSequence) + 1;		
				
		} else {
			
			if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
				
				serialNo = 1;
			}
		}
		// ERP LOT 이라면
		
		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			childLotId = lotId.substring(0, lotId.length() - 3) + String.format("%03d", serialNo);
		} else {

			if(serialNo == 10) {
				throw new BizException("LOTPartitionFailed");
			}
//			if(Pattern.matches(pattern, lotId.substring(lotId.length() - 1)))
//			{
//				childLotId = lotId.substring(0, lotId.length() - 1) + serialNo;
//			}
//			else 
//			{
				childLotId = splitSerialNo+ serialNo;
//			}
		}

		return this.splitLot(dto, lotInfo, childLotId, childQty, splitQty);
	}
	
	public Map<String, Object> splitLot(UiMapDto dto, String lotId, double childQty, double splitQty, String transitType) throws Exception {
		String childLotId = "";
		String splitSerialNo = "";
		String pattern = "^[0-9]*$"; // 숫자만
		String maxSequence = "";

		Map<String, Object> lotInfo = this.validateLotInfo(lotId);

		// ERP LOT 이라면

		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			splitSerialNo = lotId.substring(0, lotId.length() - 4);
		} else {
//			if(lotId.substring(lotId.length() - 1).equals("S") 
//			   || lotId.substring(lotId.length() - 1).equals("E")
//			   || lotId.substring(lotId.length() - 1).equals("R")
//			   || lotId.substring(lotId.length() - 1).equals("T")
//			   || lotId.substring(lotId.length() - 1).equals("P")
//			   || lotId.substring(lotId.length() - 1).equals("F"))
			if (Pattern.matches(pattern, lotId.substring(lotId.length() - 1)) == false) 
			{
			   if (lotId.length() == 30) 
			   {
				   splitSerialNo = lotId.substring(0, lotId.length() - 1);
				   
			   } 
			   else
			   {
				   splitSerialNo = lotId;
			   }
				
			} else {
				
				splitSerialNo = lotId.substring(0, lotId.length() - 1);
			}
		}

		Map<String, Object> splitLotMap = new HashMap<>();
		splitLotMap.put("LOTID", splitSerialNo);

	//	String maxSequence = generalDao.addSelectOne(NAMESAPCE + ".getMaxSplitLot", splitLotMap);
		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".getMaxSplitLot", splitLotMap);
		} 
		else 
		{
			maxSequence = generalDao.addSelectOne(NAMESAPCE + ".getMigMaxSplitLot", splitLotMap);
		}

		int serialNo = 0;

		if (maxSequence != null) {

		    serialNo = Integer.parseInt(maxSequence) + 1;		
				
		} else {
			
			if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
				
				serialNo = 1;
			}
		}
		// ERP LOT 이라면
		if (Pattern.matches(pattern, lotId.substring(0, 1)) == false) {
			childLotId = lotId.substring(0, lotId.length() - 3) + String.format("%03d", serialNo);
		} else {

			if(serialNo == 10) {
				throw new BizException("LOTPartitionFailed");
			}
//			if(Pattern.matches(pattern, lotId.substring(lotId.length() - 1)) == false &&  lotId.length() == 30 )
//			{
//				childLotId = lotId.substring(0, lotId.length() - 1) + serialNo;
//			}
//			else 
//			{
				childLotId = splitSerialNo+ serialNo;
//			}
		}

		return this.splitLot(dto, lotInfo, childLotId, childQty, splitQty,"N", transitType);
	}

	public void saveDefectLotWorkResult(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> childLotInfo,
			double defectQty) throws Exception {
		Map<String, Object> cwrk = new HashMap<>();
		String childLotId = StringUtil.Object2String(childLotInfo.get("LOTID"));

		Map<String, Object> wrd = this.getWorkResult(lotInfo);

		cwrk.put("LOTID", childLotId);
		cwrk.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
		cwrk.put("PROCESSSEGMENTID", wrd.get("PROCESSSEGMENTID"));
		cwrk.put("PROCESSSEGMENTVERSION", wrd.get("PROCESSSEGMENTVERSION"));
		cwrk.put("ENTERPRISEID", wrd.get("ENTERPRISEID"));
		cwrk.put("PLANTID", wrd.get("PLANTID"));
		cwrk.put("FACTORYID", wrd.get("FACTORYID"));
		cwrk.put("AREAID", wrd.get("AREAID"));
		cwrk.put("PRODUCTIONORDERID", wrd.get("PRODUCTIONORDERID"));
		cwrk.put("LINENO", wrd.get("LINENO"));
		cwrk.put("PRODUCTDEFID", wrd.get("PRODUCTDEFID"));
		cwrk.put("PRODUCTDEFVERSION", wrd.get("PRODUCTDEFVERSION"));
		cwrk.put("PROCESSDEFID", wrd.get("PROCESSDEFID"));
		cwrk.put("PROCESSDEFVERSION", wrd.get("PROCESSDEFVERSION"));
		cwrk.put("PROCESSPATHID", wrd.get("PROCESSPATHID"));
		cwrk.put("USERSEQUENCE", wrd.get("USERSEQUENCE"));
		cwrk.put("WORKCOUNT", wrd.get("WORKCOUNT"));
		cwrk.put("PROCESSPATHID", wrd.get("PROCESSPATHID"));
		cwrk.put("ISPRINTLOTCARD", wrd.get("ISPRINTLOTCARD"));
		cwrk.put("WEEK", wrd.get("WEEK"));
		cwrk.put("ISREWORK", wrd.get("ISREWORK"));
		cwrk.put("REWORKTYPE", wrd.get("REWORKTYPE"));
		cwrk.put("REWORKREASONCODE", wrd.get("REWORKREASONCODE"));
		cwrk.put("EWORKCOUNT", wrd.get("EWORKCOUNT"));
		cwrk.put("RECEIVETIME", wrd.get("RECEIVETIME"));
		cwrk.put("RECEIVEUSER", wrd.get("RECEIVEUSER"));
		cwrk.put("ROOTLOTSTARTDATE", wrd.get("ROOTLOTSTARTDATE"));
		cwrk.put("WORKSTARTTIME", wrd.get("WORKSTARTTIME"));
		cwrk.put("WORKSTARTUSER", wrd.get("WORKSTARTUSER"));
		cwrk.put("WORKENDTIME", wrd.get("WORKENDTIME"));
		cwrk.put("WORKENDUSER", wrd.get("WORKENDUSER"));
		cwrk.put("SENDTIM", wrd.get("SENDTIM"));
		cwrk.put("SENDUSER", wrd.get("SENDUSER"));
		cwrk.put("RECEIVELEADTIME", wrd.get("RECEIVELEADTIME"));
		cwrk.put("WORKSTARTLEADTIME", wrd.get("WORKSTARTLEADTIME"));
		cwrk.put("WORKENDLEADTIME", wrd.get("WORKENDLEADTIME"));
		cwrk.put("SENDLEADTIME", wrd.get("SENDLEADTIME"));
		cwrk.put("DEFECTQTY", defectQty);
		cwrk.put("ROOTLOTINPUTPCSQTY", wrd.get("ROOTLOTINPUTPCSQTY"));
		cwrk.put("ROOTLOTINPUTARRAYQTY", wrd.get("ROOTLOTINPUTARRAYQTY"));
		cwrk.put("ROOTLOTINPUTPANELQTY", wrd.get("ROOTLOTINPUTPANELQTY"));
		cwrk.put("RECEIVEPCSQTY", 0);
		cwrk.put("RECEIVEARRAYQTY", 0);
		cwrk.put("RECEIVEPANELQTY", 0);
		cwrk.put("WORKSTARTPCSQTY", 0);
		cwrk.put("WORKSTARTARRAYQTY", 0);
		cwrk.put("WORKSTARTPANELQTY", 0);
		cwrk.put("WORKENDPCSQTY", 0);
		cwrk.put("WORKENDARRAYQTY", 0);
		cwrk.put("WORKENDPANELQTY", 0);
		cwrk.put("SENDPCSQTY", 0);
		cwrk.put("ENDARRAYQTY", 0);
		cwrk.put("ENDPANELQTY", 0);
		cwrk.put("PREVSENDLOTHISTKEY", wrd.get("PREVSENDLOTHISTKEY"));
		cwrk.put("DESCRIPTION", wrd.get("DESCRIPTION"));
		cwrk.put("PROCESSPATHSTACK", wrd.get("PROCESSPATHSTACK"));
		cwrk.put("RESOURCEID", wrd.get("RESOURCEID"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotworkresult", cwrk);

	}

	public Map<String, Object> getWorkResult(Map<String, Object> LotInfo) throws Exception {

		Map<String, Object> param = new HashMap<>();

		param.put("LOTID", LotInfo.get("LOTID"));
		param.put("PROCESSSEGMENTID", LotInfo.get("PROCESSSEGMENTID"));
		param.put("WORKCOUNT", LotInfo.get("WORKCOUNT"));

		// Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE +
		// ".getLotWorkResultByTrackIn", param);
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".getLotWorkResultByTrackIn", param);

		if (result.size() == 0) {
			// 작업 실적에 등록된 데이터가 존재하지 않습니다. {0}
			throw new BizException("NotExistsWorkResult", String.format("LotId = %s  ProcessSegmentId = %s",
					LotInfo.get("LOTID").toString(), LotInfo.get("PROCESSSEGMENTID").toString()));
		}

		return result.get(0);
	}

	public void saveLotDefect(UiMapDto dto, Map<String, Object> lotInfo, DataSetMap defectList, String transitType)
			throws Exception {

		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotInfo);

		String processDefId = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));
		String processPathId = this.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID")
				.toString();

		Map<String, Object> ldk = new HashMap<>();

		for (int i = 0, len = defectList.size(); i < len; i++) {
			Map<String, Object> paramDefect = defectList.get(i);

			ldk.clear();
			ldk.put("LOTID", lotInfo.get("LOTID"));
			ldk.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
			ldk.put("PLANTID", lotInfo.get("PLANTID"));
			ldk.put("AREAID", lotInfo.get("AREAID"));
			ldk.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
			ldk.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
			ldk.put("PROCESSDEFID", processDefId);
			ldk.put("PROCESSDEFVERSION", processDefVersion);
			ldk.put("PROCESSPATHID", processPathId);
			ldk.put("USERSEQUENCE", lotInfo.get("USERSEQUENCE"));
			ldk.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
			ldk.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
			ldk.put("DEFECTCODE", paramDefect.get("DEFECTCODE"));
			ldk.put("DEFECTQTY", paramDefect.get("QTY"));
			ldk.put("QCSEGMENTID", paramDefect.get("QCSEGMENTID"));
			ldk.put("REASONCONSUMABLEDEFID", paramDefect.get("REASONCONSUMABLEDEFID"));
			ldk.put("REASONCONSUMABLEDEFVERSION", paramDefect.get("REASONCONSUMABLEDEFVERSION"));
			ldk.put("REASONCONSUMABLELOTID", paramDefect.get("REASONCONSUMABLELOTID"));
			ldk.put("REASONSEGMENTID", paramDefect.get("REASONPROCESSSEGMENTID"));
			ldk.put("REASONAREAID", paramDefect.get("REASONAREAID"));
			ldk.put("CREATEDTIME", new Date());
			ldk.put("OCCURREDSTEP", transitType);
			ldk.put("VALIDSTATE", "Valid");
			ldk.put("RESOURCEID", lotInfo.get("RESOURCEID"));
			ldk.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
			ldk.put("TXNHISTKEY", "");
			ldk.put("LASTTXNHISTKEY", "");

			generalDao.addInsert(NAMESAPCE + ".insertPcmLotdefect", ldk);
		}

	}

	public Map<String, Object> saveLotWorkResult(UiMapDto dto, Map<String, Object> lotInfo, String transitType,
			String userId, Date time, String resourceId, String toAreaId) throws Exception {

		String stepType = this.getStepTypeByLot(lotInfo);
		Map<String, Object> wrd = new HashMap<>();

		List<String> stepList = Arrays.asList(stepType.split(","));

		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotInfo);

		if (processDefInfo == null) {
			throw new BizException("InValidData001", String.format("ProductDefId = %s  ProductDefVersion = %s",
					lotInfo.get("PRODUCTDEFID"), lotInfo.get("PRODUCTDEFVERSION")));
		}

		// Get Array Per Quantity

		double arrayPerQty = StringUtil.Object2Double(processDefInfo.get("PCSARY"));

		switch (transitType) {
		case TransitType.ReceiveLot:
			wrd = saveWorkResultByWorkState(dto, lotInfo, transitType, userId, time, arrayPerQty);

			if (!stepList.contains(LotProcessState.Wait)) {
				wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.TrackInLot, userId, time, arrayPerQty);

				if (!stepList.contains(LotProcessState.Run)) {
					wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.TrackOutLot, userId, time, arrayPerQty);

					if (!stepList.contains(LotProcessState.WaitForSend)) {
						wrd = saveWorkResultByWorkState_SendLot(dto, lotInfo, TransitType.SendLot, userId, time, arrayPerQty,resourceId, toAreaId);
					}
				}
			}

			break;
		case TransitType.TrackInLot:
			if (!stepList.contains(LotProcessState.WaitForReceive)) {
				wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.ReceiveLot, userId, time, arrayPerQty);
			}

			wrd = saveWorkResultByWorkState(dto, lotInfo, transitType, userId, time, arrayPerQty);

			if (!stepList.contains(LotProcessState.Run)) {
				wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.TrackOutLot, userId, time, arrayPerQty);

				if (!stepList.contains(LotProcessState.WaitForSend)) {
					wrd = saveWorkResultByWorkState_SendLot(dto, lotInfo, TransitType.SendLot, userId, time, arrayPerQty,resourceId, toAreaId);
				}
			}

			break;
		case TransitType.TrackOutLot:
			if (!stepList.contains(LotProcessState.Wait)) {
				if (!stepList.contains(LotProcessState.WaitForReceive)) {
					wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.ReceiveLot, userId, time, arrayPerQty);
				}

				wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.TrackInLot, userId, time, arrayPerQty);
			}

			wrd = saveWorkResultByWorkState(dto, lotInfo, transitType, userId, time, arrayPerQty);

			if (!stepList.contains(LotProcessState.WaitForSend)) {
				wrd = saveWorkResultByWorkState_SendLot(dto, lotInfo, TransitType.SendLot, userId, time, arrayPerQty,resourceId, toAreaId);
			}

			break;
		case TransitType.SendLot:
			if (!stepList.contains(LotProcessState.Run)) {
				if (!stepList.contains(LotProcessState.Wait)) {
					if (!stepList.contains(LotProcessState.WaitForReceive)) {
						wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.ReceiveLot, userId, time,
								arrayPerQty);
					}

					wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.TrackInLot, userId, time, arrayPerQty);
				}

				wrd = saveWorkResultByWorkState(dto, lotInfo, TransitType.TrackOutLot, userId, time, arrayPerQty);
			}

			wrd = saveWorkResultByWorkState_SendLot(dto, lotInfo, transitType, userId, time, arrayPerQty,resourceId, toAreaId);

			break;
		}

		return wrd;
	}

	public String saveLotLocking(UiMapDto dto, String lotId, String lockClass, String lockReason, String comments,
			String strUserId, String strLanguageType) throws Exception {

		// TODO Auto-generated method stub
		HashMap<String, Object> propertyMap = new HashMap<>();

		propertyMap.put("LOTID", lotId);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotList", propertyMap);

		Map<String, Object> lotData = list.get(0);

		// Check 재공상태
		if (!lotData.get("LOTSTATE").equals(LotState.InProduction)) {
			if (!lotData.get("LOTSTATE").equals(LotState.InTransit)) {
				throw new BizException("CheckLotState", "");// Lot 상태를 확인하여 주십시오 {0}
			}
		}

		// Check Hold
		if (lotData.get("ISHOLD").equals("Y")) {
			throw new BizException("LotInHold", lotId); // 해당 Lot이 Hold 상태입니다. {0}
		}

		propertyMap.put("USERID", strUserId);
		propertyMap.put("AREA", lotData.get("AREAID"));
		propertyMap.put("LANGUAGETYPE", strLanguageType);

		// 사용자별 작업장 통제
		list = generalDao.addSelect(NAMESAPCE_COMM + ".selectAreaListByAuthority", propertyMap);
		if (list == null || list.size() == 0) {
			String args = String.format("LotId=%s  AreaId=%s", lotId, lotData.get("AREAID"));
			throw new BizException("HasNoAuthorityOfArea", args);// 해당 작업장에 대한 권한이 없습니다. {0}
		}

		// String txnHistKey = TxnHistKey.getTxnHistKey();

		// Lot Locking Count :: 같은 사유로 등록된 경우가 있는지 체크
		propertyMap.clear();
		propertyMap.put("LOTID", lotId);
		propertyMap.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		propertyMap.put("LOCKINGTYPE", lockClass);
		propertyMap.put("LOCKINGCODE", lockReason);

		int count = generalDao.addSelectCount(NAMESAPCE + ".selectLotLockingCount", propertyMap);

		// String count = StringUtil.Object2String(list.get(0).get("COUNT"));

		if (count > 0) {
			throw new BizException("InLockingState", String.format("LOCKINGTYPE=%s  LOCKINGCODE=%s", lockClass, lockReason));// 이미 같은 사유로 등록된 정보가 있습니다.
		}

		// Lot Locking 데이터 입력
		HashMap<String, Object> lockingData = new HashMap<>();
		lockingData.put("LOTID", lotId);
		lockingData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
		lockingData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		lockingData.put("PLANTID", lotData.get("PLANTID"));
		lockingData.put("AREAID", lotData.get("AREAID"));
		lockingData.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		lockingData.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		lockingData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		lockingData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		lockingData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		lockingData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		lockingData.put("LOCKINGSTATUS", "Y");
		lockingData.put("LOCKINGTYPE", lockClass);
		lockingData.put("LOCKINGCODE", lockReason);
		lockingData.put("COMMENTS", comments);
		lockingData.put("WORKCOUNT", lotData.get("WORKCOUNT"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotlocking", lockingData);

		lotData.put("ISLOCKING", "Y");
		lotData.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
		lotData.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotData.put("TXNHISTKEY", lotData.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotData);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotData);

		return lockingData.get("TXNHISTKEY").toString();
	}

	// Lot의 현재 공정 StepType에 따라 이전 Step 작업을 처리한다.
	public Map<String, Object> saveLotInfoByPreviousStep(UiMapDto dto, Map<String, Object> lotData, String transitionId,
			String userId, Date time, String equipmentId) throws Exception {
		Map<String, Object> lotInfo = new HashMap<>();

	
		lotInfo = this.validateLotInfo( StringUtil.Object2String(lotData.get("LOTID")));
		
		String stepType = this.getStepTypeByLot(lotInfo);
		String strFlag  = "N";

		List<String> stepList = Arrays.asList(stepType.split(","));

		switch (transitionId) {
		case TransitionId.TrackIn:
			if (!stepList.contains(LotProcessState.WaitForReceive)) {
				lotInfo = this.receiveLot(dto, lotInfo, userId, time);
				
				strFlag = "Y";
			}

			break;

		case TransitionId.TrackOut:
			if (!stepList.contains(LotProcessState.WaitForReceive) && !stepList.contains(LotProcessState.Wait)) {
				lotInfo = receiveLot(dto, lotInfo, userId, time);
				
				strFlag = "Y";
			}

			if (!stepList.contains(LotProcessState.Wait)) {
				lotInfo = this.trackInLot(dto, lotInfo, equipmentId, userId, time);
				
				strFlag = "Y";
			}

			break;

		case TransitionId.SendLot:
			if (!stepList.contains(LotProcessState.WaitForReceive) && !stepList.contains(LotProcessState.Wait)
					&& !stepList.contains(LotProcessState.Run)) {
				lotInfo = this.receiveLot(dto, lotInfo, userId, time);
				
				strFlag = "Y";
			}

			if (!stepList.contains(LotProcessState.Wait) && !stepList.contains(LotProcessState.Run)) {
				lotInfo = this.trackInLot(dto, lotInfo, equipmentId, userId, time);
				
				strFlag = "Y";

			}

			if (!stepList.contains(LotProcessState.Run)) {
				lotInfo = this.trackOutLot(dto, lotInfo, equipmentId, userId, time);
				
				strFlag = "Y";
			}

			break;
		}
	
		if("Y".equals(strFlag))
		{
			this.executeCheckingWindowTimeNewTx(dto, lotInfo, time); 
		}
		return lotInfo;
	}

	public Map<String, Object> saveLotInfoByNextStep(UiMapDto dto, Map<String, Object> lotInfo, String transitionId,
			String userId, Date time, String equipmentId, String toResourceId, String toAreaId) throws Exception {

		String stepType = this.getStepTypeByLot(lotInfo);

		List<String> stepList = Arrays.asList(stepType.split(","));

		switch (transitionId) {
		case TransitionId.ReceiveLot:
			if (!stepList.contains(LotProcessState.Wait)) {
				lotInfo = this.trackInLot(dto, lotInfo, equipmentId, userId, time);
			}

			if (!stepList.contains(LotProcessState.Wait) && !stepList.contains(LotProcessState.Run)) {

				lotInfo = this.trackOutLot(dto, lotInfo, equipmentId, userId, time);
			}

			if (!stepList.contains(LotProcessState.Wait) && !stepList.contains(LotProcessState.Run)
					&& !stepList.contains(LotProcessState.WaitForSend)) {

				lotInfo = this.sendLot(dto, lotInfo, userId, time);

				lotInfo = this.dispatchLot(dto, lotInfo, toAreaId, toResourceId);
			}

			break;
		case TransitionId.TrackIn:
			if (!stepList.contains(LotProcessState.Run)) {
				lotInfo = this.trackOutLot(dto, lotInfo, equipmentId, userId, time);
			}

			if (!stepList.contains(LotProcessState.Run) && !stepList.contains(LotProcessState.WaitForSend)) {
				lotInfo = this.sendLot(dto, lotInfo, userId, time);

				lotInfo = this.dispatchLot(dto, lotInfo, toAreaId, toResourceId);
			}

			break;
		case TransitionId.TrackOut:
			if (!stepList.contains(LotProcessState.WaitForSend)) {
				lotInfo = this.sendLot(dto, lotInfo, userId, time);

				lotInfo = this.dispatchLot(dto, lotInfo, toAreaId, toResourceId);
			}

			break;
		}

		return lotInfo;
	}

	public Map<String, Object> receiveLot(UiMapDto dto, Map<String, Object> lotData, String userId, Date time)
			throws Exception {
		Map<String, Object> lotInfo = new HashMap<>();

		lotInfo.putAll(lotData);
		lotInfo.put("RECEIVEUSER", userId);
		lotInfo.put("RECEIVETIME", time);
		lotInfo.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
		lotInfo.put("PROCESSSTATE", LotProcessState.Wait);
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return lotInfo;
	}

	public Map<String, Object> trackInLot(UiMapDto dto, Map<String, Object> lotData, String equipmentId, String userId,
			Date time) throws Exception {
		Map<String, Object> lotInfo = new HashMap<>();

		lotInfo = this.validateLotInfo( StringUtil.Object2String(lotData.get("LOTID"))) ;

		lotInfo.put("PROCESSSTATE", LotProcessState.Run);
		lotInfo.put("EQUIPMENTID", equipmentId);
		lotInfo.put("RECIPEDEFID", lotInfo.get("RECIPEDEFID"));
		lotInfo.put("RECIPEDEFVERSION", lotInfo.get("RECIPEDEFVERSION"));
		lotInfo.put("PREVPROCESSSTATE", lotInfo.get("PROCESSSTATE"));
		lotInfo.put("PREVEQUIPMENTID", lotInfo.get("EQUIPMENTID"));
		lotInfo.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
		lotInfo.put("TRACKINUSER", userId);
		lotInfo.put("TRACKINTIME", time);
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return this.validateLotInfo(lotInfo.get("LOTID").toString());
	}

	public Map<String, Object> trackOutLot(UiMapDto dto, Map<String, Object> lotData, String equipmentId, String userId,
			Date time) throws Exception {
		Map<String, Object> lotInfo = new HashMap<>();

		
		lotInfo = this.validateLotInfo( StringUtil.Object2String(lotData.get("LOTID"))) ;
		
		lotInfo.put("PREVEQUIPMENTID", lotInfo.get("EQUIPMENTID"));
		lotInfo.put("PREVPROCESSSTATE", lotInfo.get("PROCESSSTATE"));
		lotInfo.put("PREVLOTSTATE", lotInfo.get("VLOTSTATE"));
		lotInfo.put("EQUIPMENTID", "");
		lotInfo.put("RECIPEDEFID", "");
		lotInfo.put("RECIPEDEFVERSION", "");
		lotInfo.put("PROCESSSTATE", LotProcessState.WaitForSend);
		lotInfo.put("TRACKOUTUSER", userId);
		lotInfo.put("TRACKOUTTIME", time);
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return this.validateLotInfo(lotInfo.get("LOTID").toString());
	}

	public Map<String, Object> sendLot(UiMapDto dto, Map<String, Object> lotInfo, String userId, Date time)
			throws Exception {

		lotInfo.put("SENDUSER", userId);
		lotInfo.put("SENDTIME", time);
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return this.validateLotInfo(lotInfo.get("LOTID").toString());
	}

	public Map<String, Object> sendLot(String lotId, String toAreaId, String toPlantId) throws Exception {
	
		Map<String, Object> param = new HashMap<>();

		Map<String, Object> lotInfo = this.validateLotInfo(lotId);
		
		 Map<String, Object> paramSite = new HashMap<>();
         paramSite.put("SITE", lotInfo.get("PLANTID"));
         
         Map<String, Object> siteInfo   =  generalDao.addSelectOneMap(NAMESAPCE + ".selectBasPlant", paramSite);
         
         if(siteInfo == null)   
         {
		     throw new BizException("NotExistPlant","");
         }

		lotInfo.put("PREVPLANTID", lotInfo.get("PLANTID"));
		lotInfo.put("PREVAREAID", lotInfo.get("AREAID"));
		lotInfo.put("PREVLOTSTATE", lotInfo.get("LOTSTATE"));
		
		if(StringUtil.Object2String(siteInfo.get("ISOSPWAREHOUSEOPERATE")).equals("Y") && !StringUtil.Object2String(lotInfo.get("PRODUCTDEFID")).substring(0, 1).equals("2"))
        {
			lotInfo.put("LOTSTATE", this.stateTransition("LotState", StringUtil.Object2String(lotInfo.get("LOTSTATE")), "sendLot").get("TOSTATEID"));
        }
		lotInfo.put("AREAID", toAreaId);
		lotInfo.put("PLANTID", toPlantId);
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);

		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return this.validateLotInfo(lotId);
	}
	

	// 인계 작업장 추가 하여 오버로드
	public Map<String, Object> dispatchLot(UiMapDto dto, Map<String, Object> lotData, String toAreaId,
			String toResourceId) throws Exception {
		Map<String, Object> lotInfo = new HashMap<>();
		
		lotInfo = this.validateLotInfo(StringUtil.Object2String(lotData.get("LOTID")));
	
		// lotInfo.put("PROCESSSTATE", LotProcessState.WaitForSend);
		lotInfo.put("PROCESSSTATE", this.stateTransition("LotProcessState", LotProcessState.WaitForSend, "MoveDispatchLot").get("TOSTATEID"));
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		// Call Dispatch Lot API

		lotInfo.put("PREVPROCESSSTATE", lotInfo.get("PROCESSSTATE"));
		lotInfo.put("PREVLOTSTATE", lotInfo.get("LOTSTATE"));
		lotInfo.put("PREVUSERSEQUENCE", lotInfo.get("USERSEQUENCE"));
		lotInfo.put("PREVPROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		lotInfo.put("PREVPROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		lotInfo.put("PROCESSSTATE", this.stateTransition("LotProcessState",
				StringUtil.Object2String(lotInfo.get("PROCESSSTATE")), "DispatchLot").get("TOSTATEID"));

		// String[] lotProcessPathStack =
		// lotInfo.get("PROCESSPATHSTACK").toString().split(".");
		Stack<String> lotProcessPathStack = StringUtil.convertStringToStack(StringUtil.Object2String(lotInfo.get("PROCESSPATHSTACK")), ".");
		boolean isOriginalPath = (lotProcessPathStack.size() < 2);

		Map<String, Object> paramCurrentProcessPath = new HashMap<String, Object>();

		paramCurrentProcessPath.put("PROCESSPATHID", lotProcessPathStack.peek());
		Map<String, Object> currentProcessPath = generalDao
				.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", paramCurrentProcessPath);

		Map<String, Object> toProcessPath = new HashMap<>();

		if (currentProcessPath.get("PATHTYPE").equals("End") || currentProcessPath.get("PATHTYPE").equals("StartEnd")) {
			if (toProcessPath.size() == 0) {
				if (isOriginalPath) {
					lotInfo.put("LOTSTATE", this.stateTransition("LotState", StringUtil.Object2String(lotInfo.get("LOTSTATE")), "finishLot").get("TOSTATEID"));
				} else {
					lotProcessPathStack.pop();

					Map<String, Object> paramToProcessPath = new HashMap<String, Object>();
					paramToProcessPath.put("PROCESSPATHID", lotProcessPathStack.peek());
					toProcessPath = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList",
							paramToProcessPath);

					if (lotProcessPathStack.size() < 2) {
						lotInfo.put("ISREWORK", "N");
						lotInfo.put("REWORKCOUNT", 0);
						lotInfo.put("SUBPROCESSDEFID", "");
						lotInfo.put("SUBPROCESSDEFVERSION", "");
					}
				}
			} else {
				Stack<String> toProcessPathStack = this.pathFinder(lotProcessPathStack, toProcessPath);

				if (lotProcessPathStack.size() < 2) {
					lotInfo.put("ISREWORK", "N");
					lotInfo.put("REWORKCOUNT", 0);
					lotInfo.put("SUBPROCESSDEFID", "");
					lotInfo.put("SUBPROCESSDEFVERSION", "");
				}

				lotProcessPathStack.pop();
				toProcessPathStack.push(StringUtil.Object2String(toProcessPath.get("PROCESSPATHID")));
				lotProcessPathStack = toProcessPathStack;

			}
		} else {
			if (toProcessPath.size() == 0) {

				toProcessPath = this.getNextPath(lotProcessPathStack);
			}

			lotProcessPathStack.pop();
			lotProcessPathStack.push(StringUtil.Object2String(toProcessPath.get("PROCESSPATHID")));
		}

		if (lotInfo.get("LOTSTATE").equals(LotState.Finished)) {

			lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

			generalDao.addInsert(NAMESAPCE + ".updatePcmLot", lotInfo);
			generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		} else {

			Map<String, Object> paramSegment = new HashMap<>();

			paramSegment.put("PROCESSSEGMENTID", toProcessPath.get("PROCESSSEGMENTID"));
			paramSegment.put("PROCESSSEGMENTVERSION", toProcessPath.get("PROCESSSEGMENTVERSION"));

			Map<String, Object> processsegmentInfo = generalDao
					.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment", paramSegment);

			String areaId = StringUtil.isNullOrEmpty(toAreaId)
					? StringUtil.Object2String(processsegmentInfo.get("AREAID"))
					: toAreaId;

			lotInfo.put("PROCESSPATHSTACK", StringUtil.convertStackToString(lotProcessPathStack, "."));
			lotInfo.put("USERSEQUENCE", toProcessPath.get("USERSEQUENCE"));
			lotInfo.put("PROCESSSEGMENTID", toProcessPath.get("PROCESSSEGMENTID"));
			lotInfo.put("PROCESSSEGMENTVERSION", toProcessPath.get("PROCESSSEGMENTVERSION"));
			lotInfo.put("AREAID", areaId);
			lotInfo.put("RESOURCEID", toResourceId);
			lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

			generalDao.addInsert(NAMESAPCE + ".updatePcmLot", lotInfo);
			generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);
		}

		return lotInfo;
	}

	public void deleteConsumeMaterialLotTempByConsumable(UiMapDto dto, Map<String, Object> lotInfo) throws Exception {
		Map<String, Object> param = new HashMap<>();
		Map<String, Object> consumemateriallotTemp = new HashMap<>();

		param.put("LOTID", lotInfo.get("LOTID"));
		param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));

		List<Map<String, Object>> consumemateriallotTempListInfo = generalDao
				.addSelect(NAMESAPCE + ".selectPcmConsumemateriallotTempList", param);
		for (int i = 0, len = consumemateriallotTempListInfo.size(); i < len; i++) {
			consumemateriallotTemp = consumemateriallotTempListInfo.get(i);

			generalDao.addDelete(NAMESAPCE + ".deletePcmConsumemateriallotTemp", consumemateriallotTemp);
		}

	}

	public void deleteConsumeMaterialLotTempByDurable(UiMapDto dto, Map<String, Object> lotInfo, DataSetMap durableList)
			throws Exception {
		Map<String, Object> durable = new HashMap<>();

		for (int i = 0, len = durableList.size(); i < len; i++) {
			durable = durableList.get(i);

			generalDao.addDelete(NAMESAPCE + ".deletePcmConsumemateriallotTemp", durable);
		}

	}

	public void saveConsumeMaterialLotTempData(UiMapDto dto, Map<String, Object> dataInfo, Map<String, Object> lotInfo,
			Map<String, Object> consumableList, int sequence) throws Exception {
		Map<String, Object> param = new HashMap<>();

		param.put("LOTID", dataInfo.get("LOTID"));
		param.put("MATERIALLOTID", consumableList.get("CONSUMABLELOTID"));

		List<Map<String, Object>> consumemateriallotTempListInfo = generalDao
				.addSelect(NAMESAPCE + ".selectPcmConsumemateriallotTempList", param);

		if (consumemateriallotTempListInfo.size() > 0) {
			return;
		}

		Map<String, Object> paramconsumabledefinition = new HashMap<>();

		paramconsumabledefinition.put("CONSUMABLEDEFID", consumableList.get("CONSUMABLEDEFID"));
		paramconsumabledefinition.put("CONSUMABLEDEFVERSION", consumableList.get("CONSUMABLEDEFVERSION"));

		List<Map<String, Object>> consumabledefinitionInfo = generalDao
				.addSelect(NAMESAPCE_COMM + ".selectBasConsumabledefinition", paramconsumabledefinition);

		if (consumabledefinitionInfo.size() == 0) {
			throw new BizException("InValidData001", String.format("ConsumableDefId = %s  ConsumableDefVersion = %s",
					consumableList.get("CONSUMABLEDEFID"), consumableList.get("CONSUMABLEDEFVERSION")));
		}

		String keyColumn = StringUtil.Object2String(consumableList.get("KEYCOLUMN"));
		String[] splitKey = keyColumn.split("\\|");
		String consumableDefId = splitKey[0];
		String consumableDefVersion = splitKey[1];

		Map<String, Object> paramArea = new HashMap<>();
		paramArea.put("AREAID", lotInfo.get("AREAID"));

		Map<String, Object> area = generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramArea).get(0);

		Map<String, Object> temp = new HashMap<>();

		temp.put("LOTID", dataInfo.get("LOTID"));
		temp.put("MATERIALLOTID", consumableList.get("CONSUMABLELOTID"));
		temp.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		temp.put("ENTERPRISEID", dataInfo.get("ENTERPRISEID"));
		temp.put("PLANTID", dataInfo.get("PLANTID"));
		temp.put("MATERIALTYPE", "Consumable");
		temp.put("AREAID", lotInfo.get("AREAID"));
		temp.put("MATERIALDEFID", consumableDefId);
		temp.put("MATERIALDEFVERSION", consumableDefVersion);
		temp.put("CONSUMEDQTY", consumableList.get("INPUTQTY"));
		temp.put("SEQUENCE", (double) sequence);
		temp.put("WAREHOUSEID", area.get("WAREHOUSEID"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmConsumemateriallotTemp", temp);

	}

	private void wtimeAction(UiMapDto dto, Map<String, Object> LotInfo, String WtimeDefid, Map<String, Object> lwt,
			Date time) throws Exception {
		Map<String, Object> paramWtimeaction = new HashMap<>();
		Map<String, Object> wtimeaction = new HashMap<>();
		Map<String, Object> paramAction = new HashMap<>();

		paramWtimeaction.put("WTIMEDEFID", WtimeDefid);
		paramWtimeaction.put("VALIDSTATE", "Valid");

		List<Map<String, Object>> wtimeactionList = generalDao.addSelect(NAMESAPCE + ".selectBasWtimeactionList",
				paramWtimeaction);

		for (int k = 0; k < wtimeactionList.size(); k++) {
			wtimeaction = wtimeactionList.get(k);

			paramAction.put("ACTIONID", wtimeaction.get("WTIMEACTIONID"));

			Map<String, Object> actionInfo = generalDao.addSelectOneMap(NAMESAPCE + ".selectBasAction", paramAction);

			switch (StringUtil.Object2String(actionInfo.get("ACTIONTYPE"))) {
			case WTimeActionType.LockingLot:
				this.saveLotLocking(dto, LotInfo.get("LOTID").toString(), "LotLockinETC", "LockETCOverWT",
						"Window Time Over System Auto Locking", SessionUtil.getSessionValue("USER_ID").toString(),
						SessionUtil.getSessionValue("LANGUAGETYPE").toString());

				break;
			// Locking
			case WTimeActionType.HoldLot:
				// WtimeHold(LotInfo,time);
				this.WtimeHold(dto, LotInfo, time);
				break;
			// 홀드
			case WTimeActionType.SendEMail:
				// 이메일	
				 WtimeEmail(LotInfo,actionInfo,lwt,time);
				break;
			

			}
		}
	}

	private void WtimeHold(UiMapDto dto, Map<String, Object> lotInfo, Date time) throws Exception {
		Map<String, Object> hold = new HashMap<>();

		hold.put("LOTID", lotInfo.get("LOTID"));
		hold.put("AREAID", lotInfo.get("AREAID"));
		hold.put("PROCESSDEFID", lotInfo.get("PROCESSDEFID"));
		hold.put("PROCESSDEFVERSION", lotInfo.get("PROCESSDEFVERSION"));
		hold.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		hold.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		hold.put("HOLDTOPCLASSID", "HoldETC");
		hold.put("HOLDCODE", "HoldETCOverWT");
		hold.put("HOLDCOMMENT", "Window Time Over System Auto Hold");
		hold.put("HOLDUSER", "system");
		hold.put("HOLDTIME", time);
		hold.put("HOLDSTATUS", "Y");

		generalDao.addInsert(NAMESAPCE + ".insertPcmLothold", hold);

		lotInfo.put("ISHOLD", "Y");
		lotInfo.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

	}

	public boolean isAreaInAuthority(String areaId, boolean isModify) throws Exception {
		Map<String, Object> param = new HashMap<>();

		param.put("ISMODIFY", isModify ? "Y" : "N");
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".getAreaListByAuthority", param);

		for (int i = 0; i < result.size(); i++) {
			if (result.get(i).get("AREAID").equals(areaId)) {
				return true;
			}
		}
		return false;
	}

	public Map<String, Object> reworkLot(UiMapDto dto, Map<String, Object> reworkLotInfo) throws Exception {

		Map<String, Object> reworkPathInfo = new HashMap<>();

		Map<String, Object> lotInfo = this.validateLotInfo(reworkLotInfo.get("LOTID").toString());

		if (reworkLotInfo.get("REWORKPROCESSPATHID") != null) {
			reworkPathInfo = this
					.processPathInfoByProcessPathId(StringUtil.Object2String(reworkLotInfo.get("REWORKPROCESSPATHID")));
		} else {
			reworkPathInfo = this.processPathInfoByProcessDef(
					StringUtil.Object2String(reworkLotInfo.get("REWORKPROCESSDEFID")),
					StringUtil.Object2String(reworkLotInfo.get("REWORKPROCESSDEFVERSION")), "Start");
		}

		Stack<String> lotProcessPathStack = StringUtil.convertStringToStack(StringUtil.Object2String(lotInfo.get("PROCESSPATHSTACK")), ".");
		lotProcessPathStack.push(StringUtil.Object2String(reworkPathInfo.get("PROCESSPATHID")));

		Double reWorkCnt = StringUtil.Object2Double(lotInfo.get("REWORKCOUNT"));
		Double totalWorkCnt = StringUtil.Object2Double(lotInfo.get("TOTALREWORKCOUNT"));

		lotInfo.put("PREVPROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		lotInfo.put("PREVPROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		lotInfo.put("PREVUSERSEQUENCE", lotInfo.get("USERSEQUENCE"));
		lotInfo.put("PROCESSPATHSTACK", StringUtil.convertStackToString(lotProcessPathStack, "."));
		lotInfo.put("PROCESSSEGMENTID", reworkPathInfo.get("PROCESSSEGMENTID"));
		lotInfo.put("PROCESSSEGMENTVERSION", reworkPathInfo.get("PROCESSSEGMENTVERSION"));
		lotInfo.put("USERSEQUENCE", reworkPathInfo.get("USERSEQUENCE"));

		lotInfo.put("REWORKCOUNT", reWorkCnt + 1);
		lotInfo.put("TOTALREWORKCOUNT", totalWorkCnt + 1);
		lotInfo.put("SUBPROCESSDEFID", reworkPathInfo.get("PROCESSDEFID"));
		lotInfo.put("SUBPROCESSDEFVERSION", reworkPathInfo.get("PROCESSDEFVERSION"));
		lotInfo.put("ISREWORK", "Y");
		lotInfo.put("RESOURCEID"   , reworkLotInfo.get("RESOURCEID") );
		lotInfo.put("AREAID"       , reworkLotInfo.get("AREAID"));
		lotInfo.put("PROCESSSTATE" , reworkLotInfo.get("PROCESSSTATE"));
		
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return lotInfo;
	}

//	public Map<String, Object> saveLotWorkCount(UiMapDto dto, Map<String, Object> lotInfo) throws Exception {
//		Map<String, Object> param = new HashMap<>();
//		
//		lotInfo = this.validateLotInfo(StringUtil.Object2String(lotInfo.get("LOTID")));
//		
//
//		if (!lotInfo.get("LOTSTATE").equals(LotState.Finished)) {
//
//			param.put("LOTID", lotInfo.get("LOTID"));
//			param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
//
//			int resultCount = generalDao.addSelectCount(NAMESAPCE + ".getLotWorkResultCount", param);
//
//			lotInfo.put("WORKCOUNT", resultCount);
//
//			if (resultCount > 0) {
//				
//				param.put("PROCESSPATHSTACK", lotInfo.get("PROCESSPATHSTACK"));
//				
//				int resultCount2 = generalDao.addSelectCount(NAMESAPCE + ".getLotWorkResultCount", param);
//				
//				if (resultCount2 > 0) {
//					
//					lotInfo.put("ISREWORK", "Y");
//				} 
//				else
//				{
//					lotInfo.put("ISREWORK", "N");
//				}
//					
//			} else {
//				if (lotInfo.get("SUBPROCESSDEFID") != null) {
//					if (StringUtil.Object2String(lotInfo.get("SUBPROCESSDEFID")) == "") {
//						lotInfo.put("ISREWORK", "N");
//					} else {
//						lotInfo.put("ISREWORK", "Y");
//					}
//
//				} else {
//					lotInfo.put("ISREWORK", "N");
//				}
//			} 
//			
//			
//
//		}
//
//		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
//		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));
//
//		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
//		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);
//
//		return lotInfo;
//	}
	
	public Map<String, Object> saveLotWorkCount(UiMapDto dto, Map<String, Object> lotInfo) throws Exception {
		Map<String, Object> param = new HashMap<>();
		
		lotInfo = this.validateLotInfo(StringUtil.Object2String(lotInfo.get("LOTID")));
		

		if (!lotInfo.get("LOTSTATE").equals(LotState.Finished)) {

			param.put("LOTID", lotInfo.get("LOTID"));
			param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));

			int resultCount = generalDao.addSelectCount(NAMESAPCE + ".getLotWorkResultCount", param);

			lotInfo.put("WORKCOUNT", resultCount);

			
			if (lotInfo.get("SUBPROCESSDEFID") != null) {
				if (StringUtil.Object2String(lotInfo.get("SUBPROCESSDEFID")) == "") {
					lotInfo.put("ISREWORK", "N");
				} else {
					lotInfo.put("ISREWORK", "Y");
				}
			} 
			else if (resultCount > 0) 
			{
				
				param.put("PROCESSPATHSTACK", lotInfo.get("PROCESSPATHSTACK"));
				
				int resultCount2 = generalDao.addSelectCount(NAMESAPCE + ".getLotWorkResultCount", param);
				
				if (resultCount2 > 0) {
					
					lotInfo.put("ISREWORK", "Y");
				} 
				else
				{
					lotInfo.put("ISREWORK", "N");
				}
					

			} else {
				lotInfo.put("ISREWORK", "N");
			}
			
		}

		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

		return lotInfo;
	}	

	// Lot을 시작하거나 Lot의 인계등록 작업이 처리된 후 다음 공정을 위한 작업 결과(실적) 데이터를 미리 생성한다.
	public String saveLotWorkResultForNextProcess(UiMapDto dto, Map<String, Object> lotInfo, String lastTxnHistKey)
			throws Exception {

		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotInfo);
		Map<String, Object> lotworkresult = new HashMap<>();

		String processDefId = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));

		String processPathId = StringUtil
				.Object2String(this.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));

		double arrayPerQty = StringUtil.Object2Double(processDefInfo.get("PCSARY"));

		String txnHistKey = TxnHistKey.getTxnHistKey();

		lotworkresult.put("TXNHISTKEY", txnHistKey);
		lotworkresult.put("LOTID", lotInfo.get("LOTID"));
		lotworkresult.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		lotworkresult.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		lotworkresult.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
		lotworkresult.put("PLANTID", lotInfo.get("PLANTID"));
		lotworkresult.put("FACTORYID", lotInfo.get("FACTORYID"));
		lotworkresult.put("AREAID", lotInfo.get("AREAID"));
		lotworkresult.put("PRODUCTIONORDERID", lotInfo.get("PRODUCTIONORDERID"));
		lotworkresult.put("LINENO", lotInfo.get("LINENO"));
		lotworkresult.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
		lotworkresult.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		lotworkresult.put("PROCESSDEFID", processDefId);
		lotworkresult.put("PROCESSDEFVERSION", processDefVersion);
		lotworkresult.put("PROCESSPATHID", processPathId);
		lotworkresult.put("USERSEQUENCE", lotInfo.get("USERSEQUENCE"));
		lotworkresult.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
		lotworkresult.put("ISPRINTLOTCARD", lotInfo.get("ISPRINTLOTCARD"));
		lotworkresult.put("WEEK", lotInfo.get("WEEK"));
		lotworkresult.put("ISREWORK", StringUtil.Object2String(lotInfo.get("ISREWORK")) == "" ? "N" : lotInfo.get("ISREWORK"));
		lotworkresult.put("REWORKTYPE", lotInfo.get("REWORKTYPE"));
		lotworkresult.put("REWORKREASONCODE", lotInfo.get("REWORKREASONCODE"));
		lotworkresult.put("REWORKCOUNT", lotInfo.get("REWORKCOUNT"));
		lotworkresult.put("ROOTLOTSTARTDATE", lotInfo.get("ROOTLOTSTARTDATE"));
		lotworkresult.put("ROOTLOTINPUTPANELQTY", lotInfo.get("PANELQTY"));
		lotworkresult.put("ROOTLOTINPUTPCSQTY", lotInfo.get("QTY"));
		lotworkresult.put("PROCESSPATHSTACK", lotInfo.get("PROCESSPATHSTACK"));
		lotworkresult.put("RESOURCEID", lotInfo.get("RESOURCEID"));
		lotworkresult.put("PREVSENDLOTHISTKEY", lastTxnHistKey);

		if (arrayPerQty > 0) {
			lotworkresult.put("ROOTLOTINPUTARRAYQTY", StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty);
		}

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotworkresult", lotworkresult);

		return txnHistKey;
	}

	public void saveLotWorkResultForCurrentProcess(UiMapDto dto, Map<String, Object> lotInfo, double rootLotQty,
			Date time) throws Exception {

		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(lotInfo);

		String lotId = lotInfo.get("LOTID").toString();

		Map<String, Object> lotworkresult = new HashMap<>();

		String processDefId = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));

		String processPathId = StringUtil
				.Object2String(this.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));

		double arrayPerQty = StringUtil.Object2Double(processDefInfo.get("PCSARY"));

		String txnHistKey = TxnHistKey.getTxnHistKey();

		lotworkresult.put("TXNHISTKEY", txnHistKey);
		lotworkresult.put("LOTID", lotInfo.get("LOTID"));
		lotworkresult.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		lotworkresult.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		lotworkresult.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
		lotworkresult.put("PLANTID", lotInfo.get("PLANTID"));
		lotworkresult.put("FACTORYID", lotInfo.get("FACTORYID"));
		lotworkresult.put("AREAID", lotInfo.get("AREAID"));
		lotworkresult.put("PRODUCTIONORDERID", lotInfo.get("PRODUCTIONORDERID"));
		lotworkresult.put("LINENO", lotInfo.get("LINENO"));
		lotworkresult.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
		lotworkresult.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		lotworkresult.put("PROCESSDEFID", processDefId);
		lotworkresult.put("PROCESSDEFVERSION", processDefVersion);
		lotworkresult.put("PROCESSPATHID", processPathId);
		lotworkresult.put("USERSEQUENCE", lotInfo.get("USERSEQUENCE"));
		lotworkresult.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
		lotworkresult.put("ISPRINTLOTCARD", lotInfo.get("ISPRINTLOTCARD"));
		lotworkresult.put("WEEK", lotInfo.get("WEEK"));
		lotworkresult.put("ISREWORK",
				StringUtil.Object2String(lotInfo.get("ISREWORK")) == "" ? "N" : lotInfo.get("ISREWORK"));
		lotworkresult.put("REWORKTYPE", lotInfo.get("REWORKTYPE"));
		lotworkresult.put("REWORKREASONCODE", lotInfo.get("REWORKREASONCODE"));
		lotworkresult.put("REWORKCOUNT", lotInfo.get("REWORKCOUNT"));
		lotworkresult.put("ROOTLOTSTARTDATE", time);
		lotworkresult.put("ROOTLOTINPUTPCSQTY", rootLotQty);
		lotworkresult.put("PROCESSPATHSTACK", lotInfo.get("PROCESSPATHSTACK"));
		lotworkresult.put("RESOURCEID", lotInfo.get("RESOURCEID"));
		lotworkresult.put("DESCRIPTION", lotInfo.get("DESCRIPTION"));
		lotworkresult.put("RESULTTYPE", "NORMAL");

		if (arrayPerQty > 0) {
			lotworkresult.put("ROOTLOTINPUTARRAYQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty));
		}

		if (StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0) {
			lotworkresult.put("ROOTLOTINPUTPANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));
		}

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotworkresult", lotworkresult);

	}

	public void saveLotHistory(UiMapDto dto, String txnHistKey, String lotId, String plantId, String factoryId,
			String areaId) throws Exception {
		Map<String, Object> lotHistory = new HashMap<>();

		lotHistory.put("PREVPLANTID", plantId);
		lotHistory.put("PREVFACTORYID", factoryId);
		lotHistory.put("PREVAREAID", areaId);
		lotHistory.put("LOTID", lotId);
		lotHistory.put("TXNHISTKEY", txnHistKey);

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLothistory", lotHistory);

	}

	public Map<String, Object> getConsumableLot(String consumableLotId, String warehouseId) throws Exception {

		Map<String, Object> param = new HashMap<>();

		param.put("CONSUMABLELOTID", consumableLotId);
		param.put("WAREHOUSEID", warehouseId);

		Map<String, Object> dataList = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectMtmConsumablelot", param);
		if (dataList != null)
			return null;
		else
			return dataList;
	}

	public void createConsumableLot(Map<String, Object> lotInfo, String transitArea) throws Exception {

		Map<String, Object> paramArea = new HashMap<>();

		paramArea.put("AREAID", transitArea);

		List<Map<String, Object>> areaInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramArea);

		if (areaInfo.size() == 0) {
			// 해당 작업장이 존재하지 않습니다. {0}
			throw new BizException("NotExistArea", String.format("AreaId = %s", transitArea));
		}

		String consumableLotId = lotInfo.get("LOTID").toString();
		String warehouseId = StringUtil.Object2String(areaInfo.get(0).get("WAREHOUSEID"));

		Map<String, Object> consumableLotInfo = this.getConsumableLot(consumableLotId, warehouseId);

		if (consumableLotInfo != null) {
			throw new BizException("EXPCODE_DUP_ALREADYEXISTDATA",
					String.format(" %s,%s", "ConsumableLotId", consumableLotInfo.get("CONSUMABLELOTID")));
		}

		Map<String, Object> consumableLot = new HashMap<>();

		consumableLot.put("CONSUMABLELOTID", consumableLotId);
		consumableLot.put("WAREHOUSEID", warehouseId);
		consumableLot.put("CONSUMABLELOTNAME", lotInfo.get("LOTNAME"));
		consumableLot.put("CONSUMABLEDEFID", lotInfo.get("PRODUCTDEFID"));
		consumableLot.put("CONSUMABLEDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		consumableLot.put("CONSUMABLESTATE", ConsumableState.Available);
		consumableLot.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
		consumableLot.put("PLANTID", lotInfo.get("PLANTID"));
		consumableLot.put("AREAID", transitArea);
		consumableLot.put("LOCATIONID", lotInfo.get("LOCATIONID"));
		consumableLot.put("CREATEDQTY", lotInfo.get("QTY"));
		consumableLot.put("CONSUMABLELOTQTY", lotInfo.get("QTY"));
		consumableLot.put("ISHOLD", "N");

		if (StringUtil.Object2Int(consumableLot.get("CREATEDQTY")) < 0) {

			throw new BizException("EXPCODE_INVDATA_DEFAULT",
					String.format(" %s,%s", "CreateQty", consumableLot.get("CREATEDQTY")));
		}

		generalDao.addInsert(NAMESAPCE + ".insertMtmConsumablelot", consumableLot);
	}

	public void saveLotLockingRelease(String lotId, String txnHistKey, String lockReason, String comments)
			throws Exception {
		Map<String, Object> lotInfo = this.validateLotInfo(lotId);

		Map<String, Object> paramLocking = new HashMap<>();

		paramLocking.put("LOTID", lotId);
		paramLocking.put("P_TXNHISTKEY", txnHistKey);

		Map<String, Object> lotlockingInfo = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotlocking",
				paramLocking);

		if (lotlockingInfo == null) {
			// 해당 Lot이 존재하지 않습니다.
			throw new BizException("NotExistLot");
		}

		// 사용자별 작업장 통제
		if (!this.isAreaInAuthority(StringUtil.Object2String(lotInfo.get("AREAID")), true)) {
			// 해당 작업장에 대한 권한이 없습니다. {0}
			throw new BizException("HasNoAuthorityOfArea",
					String.format("LotId=%s, AreaId=%s", lotInfo.get("LOTID"), lotInfo.get("AREAID")));
		}

		lotlockingInfo.put("LOCKINGSTATUS", "N");
		lotlockingInfo.put("UNLOCKINGCODE", lockReason);
		lotlockingInfo.put("RELEASECOMMENTS", comments);

		generalDao.addUpdate(NAMESAPCE + ".updatePcmLotlocking", lotlockingInfo);

		// Lot Locking Count
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotInfo.get("LOTID"));

		// Locking LOT 조회
//		List<Map<String, Object>> lockCount = generalDao.addSelect(NAMESAPCE + ".selectLotLockingCount", propertyMap); 
//		
//		String count = StringUtil.Object2String(lockCount.get(0).get("COUNT"));

		int count = generalDao.addSelectCount(NAMESAPCE + ".selectLotLockingCount", propertyMap);

		if (count == 0) {
			// Lot Locking 해제
			lotInfo.put("ISLOCKING", "N");
			lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

			generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
			generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);
		}
	}

	private Stack<String> pathFinder(Stack<String> toProcessPathStack, Map<String, Object> toProcessPath)
			throws Exception {
		if (toProcessPathStack.size() == 0) {
			throw new BizException("50031", String.format(" %s,%s", "pathFinder ProcessPathStack's size", "0"));
		}

		Map<String, Object> param = new HashMap<String, Object>();

		param.put("PROCESSPATHID", toProcessPathStack.peek());
		Map<String, Object> lotProcessPath = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList",
				param);

		if (!isSamePathBetweenProcessDefAndPath(lotProcessPath, toProcessPath)) {

			toProcessPathStack.pop();
			toProcessPathStack = pathFinder(toProcessPathStack, toProcessPath);

		}

		return toProcessPathStack;

	}

	private boolean isSamePathBetweenProcessDefAndPath(Map<String, Object> processPathByProcessDef,
			Map<String, Object> processPathByPathId) throws Exception {
		if (StringUtil.equals(StringUtil.Object2String(processPathByProcessDef.get("PROCESSDEFID")),
				StringUtil.Object2String(processPathByPathId.get("PROCESSDEFID")))
				&& StringUtil.equals(StringUtil.Object2String(processPathByProcessDef.get("PROCESSDEFVERSION")),
						StringUtil.Object2String(processPathByPathId.get("PROCESSDEFVERSION")))) {
			return true;
		}

		return false;
	}

	public boolean isSamePathBetweenProcessDefAndPath(String processDefId, String processDefVersion,
			String processPathId) throws Exception {
		Map<String, Object> processPath = this.processPathInfoByProcessPathId(processPathId);

		if (StringUtil.equals(processDefId, StringUtil.Object2String(processPath.get("PROCESSDEFID"))) && StringUtil
				.equals(processDefVersion, StringUtil.Object2String(processPath.get("PROCESSDEFVERSION")))) {
			return true;
		}
		return false;
	}

	public Map<String, Object> updateIsFinalInspect(Map<String, Object> lotInfo) throws Exception {

		HashMap<String, Object> param = new HashMap<>();
		param.put("LOTID", lotInfo.get("LOTID"));

		// Routing상 BBT 중공정의 Max 공정을 가져온다.
		List<Map<String, Object>> FinalCheck = generalDao.addSelect(NAMESAPCE + ".selectBBTPathSequenceByRouting",
				param);

		if (FinalCheck.size() > 0) {
			String checkFin = StringUtil.Object2String(FinalCheck.get(0).get("CHECKFIN"));

			if (checkFin.equals("Y")) {

				lotInfo.put("ISFINALINSPECTPROGESS", "Y");
				lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
				lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

				generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
				generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);
			}
		}

		return this.validateLotInfo(lotInfo.get("LOTID").toString());
	}

	public boolean saveReworkReturnData(UiMapDto dto, Map<String, Object> lotInfo) throws Exception {
		boolean returnResult = false;

		Map<String, Object> paramReworkreturn = new HashMap<>();

		paramReworkreturn.put("LOTID", lotInfo.get("LOTID"));
		paramReworkreturn.put("FROMPROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		paramReworkreturn.put("FROMPROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		paramReworkreturn.put("MOVESTATE", "Move");

		List<Map<String, Object>> reworkreturnInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmReworkreturn",
				paramReworkreturn);

		if (reworkreturnInfo.size() > 0) {
			Map<String, Object> reworkreturn = reworkreturnInfo.get(0);

			lotInfo.put("PROCESSSTATE", reworkreturn.get("TOPROCESSSTATE"));

			if (!(reworkreturn.get("FROMPROCESSSTATE").equals(LotProcessState.WaitForReceive)
					|| reworkreturn.get("FROMPROCESSSTATE").equals(LotProcessState.Wait))) {
				lotInfo.put("WORKCOUNT", reworkreturn.get("WORKCOUNT"));
			} else {
				lotInfo = this.saveLotWorkCount(dto, lotInfo);
			}

			// 재작업후 출하 인수대기로 돌아오는 경우 isRework "Y"로 update

			Map<String, Object> paramProMnt = new HashMap<String, Object>();

			paramProMnt.put("PROCESSSEGMENTID", reworkreturn.get("TOPROCESSSEGMENTID"));
			paramProMnt.put("PROCESSSEGMENTVERSION", reworkreturn.get("TOPROCESSSEGMENTVERSION"));

			Map<String, Object> processsegmentInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment", paramProMnt);

			if (StringUtil.Object2Int(reworkreturn.get("WORKCOUNT")) > 0
				&& (    "7030".equals(processsegmentInfo.get("PROCESSSEGMENTCLASSID"))
					 || "7536".equals(processsegmentInfo.get("PROCESSSEGMENTCLASSID")))) {

				lotInfo.put("ISREWORK", "Y");
			}

			lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));

			generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", lotInfo);
			generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", lotInfo);

			Map<String, Object> param = new HashMap<>();
			param.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
			param.put("PLANTID", lotInfo.get("PLANTID"));
			param.put("LOTID", lotInfo.get("LOTID"));
			param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
			param.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));

			List<Map<String, Object>> workResult = generalDao.addSelect(NAMESAPCE + ".getLotWorkResultByTrackIn", param);

			if (workResult.size() == 0) {
				this.saveLotWorkResultForNextProcess(dto, lotInfo, StringUtil.Object2String(lotInfo.get("LASTTXNHISTKEY")));
			}

			reworkreturn.put("MOVESTATE", "End");
			reworkreturn.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());

			generalDao.addUpdate(NAMESAPCE + ".updatePcmReworkreturn", reworkreturn);

			returnResult = true;
		}

		return returnResult;
	}

	public void saveSplitLotWorkResult(Map<String, Object> lotInfo, Map<String, Object> childLotInfo, double splitQty)
			throws Exception {

		Map<String, Object> workResult = this.getWorkResult(lotInfo);

		Map<String, Object> processDefInfo = this.getProcessDefinitionInfo(childLotInfo);

		String processDefId = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));

		String txnHistKey = TxnHistKey.getTxnHistKey();

		Map<String, Object> lotworkresult = new HashMap<>();

		lotworkresult.put("TXNHISTKEY", txnHistKey);
		lotworkresult.put("LOTID", childLotInfo.get("LOTID"));
		lotworkresult.put("PROCESSSEGMENTID", childLotInfo.get("PROCESSSEGMENTID"));
		lotworkresult.put("PROCESSSEGMENTVERSION", childLotInfo.get("PROCESSSEGMENTVERSION"));
		lotworkresult.put("ENTERPRISEID", childLotInfo.get("ENTERPRISEID"));
		lotworkresult.put("PLANTID", childLotInfo.get("PLANTID"));
		lotworkresult.put("FACTORYID", childLotInfo.get("FACTORYID"));
		lotworkresult.put("AREAID", childLotInfo.get("AREAID"));
		lotworkresult.put("PRODUCTIONORDERID", childLotInfo.get("PRODUCTIONORDERID"));
		lotworkresult.put("LINENO", childLotInfo.get("LINENO"));
		lotworkresult.put("PRODUCTDEFID", childLotInfo.get("PRODUCTDEFID"));
		lotworkresult.put("PRODUCTDEFVERSION", childLotInfo.get("PRODUCTDEFVERSION"));
		lotworkresult.put("PROCESSDEFID", processDefId);
		lotworkresult.put("PROCESSDEFVERSION", processDefVersion);
		lotworkresult.put("PROCESSPATHID", StringUtil
				.convertStringToStack(StringUtil.Object2String(childLotInfo.get("PROCESSPATHSTACK")), ".").peek());
		lotworkresult.put("USERSEQUENCE", childLotInfo.get("USERSEQUENCE"));
		lotworkresult.put("WORKCOUNT", workResult.get("WORKCOUNT"));
		lotworkresult.put("ISPRINTLOTCARD", childLotInfo.get("ISPRINTLOTCARD"));
		lotworkresult.put("WEEK", childLotInfo.get("WEEK"));
		lotworkresult.put("ISREWORK",
				StringUtil.Object2String(workResult.get("ISREWORK")) == "" ? "N" : workResult.get("ISREWORK"));
		lotworkresult.put("REWORKTYPE", childLotInfo.get("REWORKTYPE"));
		lotworkresult.put("REWORKREASONCODE", workResult.get("REWORKREASONCODE"));
		lotworkresult.put("REWORKCOUNT", workResult.get("REWORKCOUNT"));
		lotworkresult.put("RECEIVETIME", workResult.get("RECEIVETIME"));
		lotworkresult.put("RECEIVEUSER", workResult.get("RECEIVEUSER"));
		lotworkresult.put("ROOTLOTSTARTDATE", workResult.get("ROOTLOTSTARTDATE"));
		lotworkresult.put("WORKSTARTTIME", workResult.get("WORKSTARTTIME"));
		lotworkresult.put("WORKSTARTUSER", workResult.get("WORKSTARTUSER"));
		lotworkresult.put("WORKENDTIME", workResult.get("WORKENDTIME"));
		lotworkresult.put("WORKENDUSER", workResult.get("WORKENDUSER"));
		lotworkresult.put("SENDTIME", workResult.get("SENDTIME"));
		lotworkresult.put("SENDUSER", workResult.get("SENDUSER"));
		lotworkresult.put("RECEIVELEADTIME", workResult.get("RECEIVELEADTIME"));
		lotworkresult.put("WORKSTARTLEADTIME", workResult.get("WORKSTARTLEADTIME"));
		lotworkresult.put("WORKENDLEADTIME", workResult.get("WORKENDLEADTIME"));
		lotworkresult.put("SENDLEADTIME", workResult.get("SENDLEADTIME"));
		lotworkresult.put("ROOTLOTINPUTPANELQTY", workResult.get("ROOTLOTINPUTPANELQTY"));
		lotworkresult.put("ROOTLOTINPUTARRAYQTY", workResult.get("ROOTLOTINPUTARRAYQTY"));
		lotworkresult.put("ROOTLOTINPUTPANELQTY", workResult.get("ROOTLOTINPUTPANELQTY"));
		lotworkresult.put("PREVSENDLOTHISTKEY", workResult.get("PREVSENDLOTHISTKEY"));
		lotworkresult.put("DESCRIPTION", workResult.get("DESCRIPTION"));
		lotworkresult.put("PROCESSPATHSTACK", childLotInfo.get("PROCESSPATHSTACK"));
		lotworkresult.put("RESOURCEID", workResult.get("RESOURCEID"));

		generalDao.addInsert(NAMESAPCE + ".insertPcmLotworkresult", lotworkresult);

	}

	private Map<String, Object> getNextPath(Stack<String> lotProcessPathStack) throws Exception {
		Map<String, Object> processPath = this
				.processPathInfoByProcessPathId(StringUtil.Object2String(lotProcessPathStack.peek()));

		int nextPathSeq = Integer.parseInt(processPath.get("PATHSEQUENCE").toString()) + 1;

		String processDefId = StringUtil.Object2String(processPath.get("PROCESSDEFID"));
		String processDefVersion = StringUtil.Object2String(processPath.get("PROCESSDEFVERSION"));
		return this.processPathInfoByProcessDef(processDefId, processDefVersion, nextPathSeq);

	}

	private Map<String, Object> stateTransition(String stateModelId, String fromStateId, String transitionId) {
		Map<String, Object> param = new HashMap<>();

		param.put("STATEMODELID", stateModelId);
		param.put("FROMSTATEID", fromStateId);
		param.put("TRANSITIONID", transitionId);

		Map<String, Object> StatetransitionInfo = generalDao
				.addSelectOneMap(NAMESAPCE_COMM + ".selectBasStatetransition", param);

		return StatetransitionInfo;

	}

	private void WtimeEmail(Map<String, Object> lotInfo, Map<String, Object> actionInfo,
			Map<String, Object> lwt, Date time) throws Exception {
		
		
		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		String StartTime = transFormat.format(lwt.get("SETTIME"));
		String EndTime   = transFormat.format(lwt.get("OCCURETIME"));
		String Wtime     = StringUtil.Object2String(lwt.get("WTIME"));

		if (StringUtil.Object2String(actionInfo.get("USERCLASSID")) != "") {
			Map<String, Object> param = new HashMap<>();
			Map<String, Object> userGroup = new HashMap<>();
			Map<String, Object> emailMap = new HashMap<>();
			Map<String, Object> parameters = new HashMap<>();

			String toAddr = "";
			String toName = "";
			String fromAddr = "";
			String fromName = "";
			String toCc = "";
			String toCcName = "";
			String subject = "";
			String content = "";
			String jobSysCd = "";

			

			parameters.put("WTIMEOCCURENOTICE"     , MultiLanguage.getMessage("WTIMEOCCURENOTICE"));
			parameters.put("WTIMEOCCUREDETAILLOT"  , MultiLanguage.getMessage("WTIMEOCCUREDETAILLOT", (String) lwt.get("LOTID")));
			parameters.put("WTIMEOCCUREDETAILSTART", MultiLanguage.getMessage("WTIMEOCCUREDETAILSTART", StartTime));
			parameters.put("WTIMEOCCUREDETAILEND"  , MultiLanguage.getMessage("WTIMEOCCUREDETAILEND", EndTime));
			parameters.put("WTIMEOCCUREDETAILWTIME", MultiLanguage.getMessage("WTIMEOCCUREDETAILWTIME", Wtime));

			param.put("USERGROUPID", actionInfo.get("USERCLASSID"));
		//	param.put("VALIDSTATE", "Valid");
			
			List<Map<String, Object>> userGroupList = generalDao.addSelect(NAMESAPCE + ".selectBasUsergroupuser", param);
			for (int k = 0; k < userGroupList.size(); k++) {
				userGroup = userGroupList.get(k);
				toAddr = toAddr + (k == 0 ? "" : ";") + userGroup.get("EMAILADDRESS").toString();
			}
			fromAddr = (String) SessionUtil.getSessionValue("EMAILADDR");
			subject = MultiLanguage.getMessage("WTIMEOCCURESUBJECT");
			content = "OccureWindowTime";
			emailMap.put("FROM_ADDR", fromAddr);
			emailMap.put("TO_ADDR", toAddr);
			emailMap.put("SUBJECT", subject);
			emailMap.put("CONTENT_ID", "OccureWindowTime");
			emailMap.put("PARAMETERS", parameters);
			emailMap.put("JOB_SYS_CD", "PCM");
			emailMap.put("ATCH_SRC_KEY", "");
			emailMap.put("ATCH_TY_CD", "");
			
			CMAM00100Service.emailSend(emailMap);

		}
	}

	private String getProcessStateByTransitType(String transitType) {
		switch (transitType) {
		case TransitType.ReceiveLot:
			return LotProcessState2.WaitForReceive;
		case TransitType.TrackInLot:
			return LotProcessState2.Receive;
		case TransitType.TrackOutLot:
			return LotProcessState2.WorkStart;
		case TransitType.SendLot:
			return LotProcessState2.WorkEnd;
		default:
			return "";
		}
	}

	public String getStepTypeByLot(Map<String, Object> lotInfo) throws Exception {

		Map<String, Object> paramResource = new HashMap<String, Object>();

		paramResource.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
		paramResource.put("PLANTID", lotInfo.get("PLANTID"));
		paramResource.put("RESOURCEID", lotInfo.get("RESOURCEID"));

		Map<String, Object> resourceInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasResource",
				paramResource);

		String stepClass = "";
		String stepType = "";

		if (resourceInfo == null || StringUtil.Object2String(resourceInfo.get("STEPCLASS")) == "") {
			Map<String, Object> paramProMnt = new HashMap<String, Object>();

			paramProMnt.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
			paramProMnt.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));

			Map<String, Object> resourceMentInfo = generalDao
					.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment", paramProMnt);

			if (resourceMentInfo == null) {
				throw new BizException("InValidData001",
						String.format("ProcessSegmentId = %s  ProcessSegmentVersion = %s",
								lotInfo.get("PROCESSSEGMENTID"), lotInfo.get("PROCESSSEGMENTVERSION")));
			}

			stepClass = StringUtil.Object2String(resourceMentInfo.get("STEPCLASS"));
		} else {
			stepClass = StringUtil.Object2String(resourceInfo.get("STEPCLASS"));
		}

		stepType = getStepTypeByStepClass(stepClass);

		return stepType;
	}

	private String getStepTypeByStepClass(String stepClass) throws Exception {

		Map<String, Object> paramCode = new HashMap<String, Object>();
		Map<String, Object> lookupValues = new HashMap<String, Object>();

		paramCode.put("LOOKUP_TYPE", stepClass);

		List<Map<String, Object>> lookupValuesInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectCmdLookupValuesList",
				paramCode);

		String stepType = "";

		for (int i = 0, len = lookupValuesInfo.size(); i < len; i++) {

			lookupValues = lookupValuesInfo.get(i);

			stepType += lookupValues.get("LOOKUP_CODE").toString() + ",";
		}

		stepType = stepType.substring(0, stepType.length() - 1);

		return stepType;
	}

	private void copyLotRouting(UiMapDto dto, String lotId, String childLotId) throws Exception {
		Map<String, Object> lotInfo = this.validateLotInfo(lotId);
		Map<String, Object> childLotInfo = this.validateLotInfo(childLotId);
		Map<String, Object> paramDef = new HashMap<>();

		paramDef.put("PROCESSDEFID", lotInfo.get("PROCESSDEFID"));
		paramDef.put("PROCESSDEFVERSION", lotInfo.get("PROCESSDEFVERSION"));

		Map<String, Object> processdefinitionInfo = generalDao
				.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcessdefinition", paramDef);

//		if(   processdefinitionInfo == null 
//		   || childLotInfo.get("ISDEFECTED").equals("Y")   
//		   || (  !processdefinitionInfo.get("PROCESSDEFTYPE").equals("Lot") && !lotInfo.get("DESCRIPTION").toString().toUpperCase().equals("MIG")
//				&& !processdefinitionInfo.get("PROCESSDEFID").equals(lotId))) {
//			return;
//		}

		if (processdefinitionInfo == null || "Y".equals(childLotInfo.get("ISDEFECTED"))
				|| (!"Lot".equals(processdefinitionInfo.get("PROCESSDEFTYPE"))
						&& !"MIG".equals(lotInfo.get("DESCRIPTION"))
						&& !lotId.equals(processdefinitionInfo.get("PROCESSDEFID")))) {
			return;
		}

		Map<String, Object> map = new HashMap<>();
		map.put("P_LOTID", lotId);
		map.put("P_CHILDLOTID", childLotId);
		//부모랑 버젼은 같음
		map.put("P_PROCESSDEFVERSION", childLotInfo.get("PROCESSDEFVERSION"));
				
		//ROUTING 정의 복사
		generalDao.addInsert(NAMESAPCE + ".insertBasProcessDefinitionCopy", map);
		
		//ROUTING PATH 복제
		generalDao.addInsert(NAMESAPCE + ".insertBasProcessPathCopy", map);
		
		//BILLOFMATERIAL 복제
		generalDao.addInsert(NAMESAPCE + ".insertBasBillOfMaterialCopy", map);
		
		//BILLOFRESOURCE 복제
		generalDao.addInsert(NAMESAPCE + ".insertBasBillOfResourceCopy", map);
		
		//PCM_LOTWORKRESULT 업데이트
		generalDao.addInsert(NAMESAPCE + ".updatePcmLotworkresultCopy", map);
		
		
		Map<String, Object> paramPath = new HashMap<>();

		paramPath.put("PROCESSDEFID"      , childLotId);
		paramPath.put("PROCESSDEFVERSION" , childLotInfo.get("PROCESSDEFVERSION"));
		paramPath.put("PROCESSSEGMENTID"  , childLotInfo.get("PROCESSSEGMENTID"));
		
		Map<String, Object> newProcessPathData = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", paramPath);
		
		childLotInfo.put("PROCESSDEFID", childLotId);
		
		Stack<String> stack = StringUtil.convertStringToStack(childLotInfo.get("PROCESSPATHSTACK").toString(), ".");
		stack.set(0, newProcessPathData.get("PROCESSPATHID").toString());
			
		childLotInfo.put("PROCESSPATHID", StringUtil.Object2String(newProcessPathData.get("PROCESSPATHID")));
		childLotInfo.put("PROCESSPATHSTACK", StringUtil.convertStackToString(stack, "."));
		childLotInfo.put("USERSEQUENCE", newProcessPathData.get("USERSEQUENCE"));
		
		childLotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		childLotInfo.put("TXNHISTKEY", childLotInfo.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESAPCE + ".updatePcmLot", childLotInfo);
		generalDao.addInsert(NAMESAPCE + ".insertPcmLothistory", childLotInfo);

		// 현재공정 실적의 공정정보 업데이트
		
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID"             , childLotId);
		param.put("PROCESSSEGMENTID"  , childLotInfo.get("PROCESSSEGMENTID"));
		param.put("WORKCOUNT"         , childLotInfo.get("WORKCOUNT"));
		param.put("PROCESSDEFID"      , childLotInfo.get("PROCESSDEFID"));
		param.put("PROCESSDEFVERSION" , childLotInfo.get("PROCESSDEFVERSION"));
		param.put("USERSEQUENCE"      , childLotInfo.get("USERSEQUENCE"));
		param.put("PROCESSPATHID"     , StringUtil.convertStringToStack(childLotInfo.get("PROCESSPATHSTACK").toString(), ".").peek());
		param.put("PROCESSPATHSTACK"  , childLotInfo.get("PROCESSPATHSTACK"));

		generalDao.update(NAMESAPCE + ".updateLotworkresult", param);

		
	}

	private Map<String, Object> saveWorkResultByWorkState(UiMapDto dto, Map<String, Object> lotInfo, String transitType,
			String userId, Date time, double arrayPerQty) throws Exception {
		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Map<String, Object> wrd = this.getWorkResult(lotInfo);

		long diffInMillies;
		long diff;
		
		wrd.put("WEEK", lotInfo.get("WEEK"));

		switch (transitType) {
		case TransitType.ReceiveLot:

			wrd.put("RECEIVETIME", time);
			wrd.put("RECEIVEUSER", userId);
			String createdDate = transFormat.format(wrd.get("CREATEDTIME"));
			diffInMillies = Math.abs(time.getTime() - transFormat.parse(createdDate).getTime());
			diff = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);

			wrd.put("RECEIVELEADTIME", (double) diff);

			if (StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0)
				wrd.put("RECEIVEPANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY"))
						/ StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));

			if (arrayPerQty > 0) {
				wrd.put("RECEIVEARRAYQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty));
			}
			wrd.put("RECEIVEPCSQTY", lotInfo.get("QTY"));

			generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", wrd);

			break;
		case TransitType.TrackInLot:

			wrd.put("WORKSTARTTIME", time);
			wrd.put("WORKSTARTUSER", userId);
			String receiveTime = transFormat.format(wrd.get("RECEIVETIME"));
			diffInMillies = Math.abs(time.getTime() - transFormat.parse(receiveTime).getTime());

			diff = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);

			wrd.put("WORKSTARTLEADTIME", (double) diff);

			if (StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0) {
				wrd.put("WORKSTARTPANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY"))
						/ StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));
			}

			if (arrayPerQty > 0) {
				wrd.put("WORKSTARTARRAYQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty));
			}

			wrd.put("WORKSTARTPCSQTY", lotInfo.get("QTY"));

			generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", wrd);

			break;
		case TransitType.TrackOutLot:

			wrd.put("WORKENDTIME", time);
			wrd.put("WORKENDUSER", userId);

			wrd.get("WORKSTARTTIME");

			if (wrd.get("WORKSTARTTIME") == null) {
				wrd.put("WORKSTARTTIME", time);
			}
			String workStartTime = transFormat.format(wrd.get("WORKSTARTTIME"));
			diffInMillies = Math.abs(time.getTime() - transFormat.parse(workStartTime).getTime());

			diff = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);

			wrd.put("WORKENDLEADTIME", (double) diff);

			if (StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0) {
				wrd.put("WORKENDPANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY"))
						/ StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));
			}

			if (arrayPerQty > 0) {
				wrd.put("WORKENDARRAYQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty));
			}

			wrd.put("WORKENDPCSQTY", lotInfo.get("QTY"));

			generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", wrd);

			break;
//		case TransitType.SendLot:
//
//			wrd.put("SENDTIME", time);
//			wrd.put("SENDUSER", userId);
//
//			String workEndTime;
//
//			if (wrd.get("WORKENDTIME") == null) {
//				workEndTime = transFormat.format(time);
//			} else {
//
//				workEndTime = transFormat.format(wrd.get("WORKENDTIME"));
//			}
//
//			diffInMillies = Math.abs(time.getTime() - transFormat.parse(workEndTime).getTime());
//
//			diff = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);
//
//			wrd.put("SENDLEADTIME", diff);
//
//			if (StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0) {
//				wrd.put("SENDPANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY"))
//						/ StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));
//			}
//
//			if (arrayPerQty > 0) {
//				wrd.put("SENDARRAYQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty));
//			}
//
//			wrd.put("SENDPCSQTY", lotInfo.get("QTY"));
//
//			generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", wrd);
//
//			break;
		}

		return wrd;
	}
	
	private Map<String, Object> saveWorkResultByWorkState_SendLot(UiMapDto dto, Map<String, Object> lotInfo, String transitType,
			String userId, Date time, double arrayPerQty, String toResourceId, String toAreaId) throws Exception {
		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Map<String, Object> wrd = this.getWorkResult(lotInfo);

		long diffInMillies;
		long diff;
		wrd.put("SENDTIME", time);
		wrd.put("SENDUSER", userId);

		String workEndTime;

		if (wrd.get("WORKENDTIME") == null) {
			workEndTime = transFormat.format(time);
		} else {

			workEndTime = transFormat.format(wrd.get("WORKENDTIME"));
		}

		diffInMillies = Math.abs(time.getTime() - transFormat.parse(workEndTime).getTime());

		diff = TimeUnit.SECONDS.convert(diffInMillies, TimeUnit.MILLISECONDS);

		wrd.put("SENDLEADTIME", diff);

		if (StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0) {
			wrd.put("SENDPANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY"))
					/ StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));
		}

		if (arrayPerQty > 0) {
			wrd.put("SENDARRAYQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty));
		}

		wrd.put("SENDPCSQTY", lotInfo.get("QTY"));
		

		
		Stack<String> lotProcessPathStack = StringUtil.convertStringToStack(StringUtil.Object2String(lotInfo.get("PROCESSPATHSTACK")), ".");
		
		boolean isOriginalPath = (lotProcessPathStack.size() < 2);
		Map<String, Object> paramCurrentProcessPath = new HashMap<String, Object>();

		paramCurrentProcessPath.put("PROCESSPATHID", lotProcessPathStack.peek());
		Map<String, Object> currentProcessPath = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", paramCurrentProcessPath);

		Map<String, Object> toProcessPath = new HashMap<>();
		
		if (currentProcessPath.get("PATHTYPE").equals("End") || currentProcessPath.get("PATHTYPE").equals("StartEnd")) {
			
			//if (isOriginalPath == false) {
			//lotProcessPathStack.pop();
			Map<String, Object> paramToProcessPath = new HashMap<String, Object>();
			paramToProcessPath.put("PROCESSPATHID", lotProcessPathStack.peek());
			toProcessPath = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", paramToProcessPath);
			//}
			
			Stack<String> toProcessPathStack = this.pathFinder(lotProcessPathStack, toProcessPath);
			lotProcessPathStack.pop();
			toProcessPathStack.push(StringUtil.Object2String(toProcessPath.get("PROCESSPATHID")));
			lotProcessPathStack = toProcessPathStack;

			
		} else {
			
		    toProcessPath = this.getNextPath(lotProcessPathStack);
			lotProcessPathStack.pop();
			lotProcessPathStack.push(StringUtil.Object2String(toProcessPath.get("PROCESSPATHID")));
		}
		
		
		if (!lotInfo.get("LOTSTATE").equals(LotState.Finished)) {
			
			Map<String, Object> paramSegment = new HashMap<>();

			paramSegment.put("PROCESSSEGMENTID", toProcessPath.get("PROCESSSEGMENTID"));
			paramSegment.put("PROCESSSEGMENTVERSION", toProcessPath.get("PROCESSSEGMENTVERSION"));

			Map<String, Object> processsegmentInfo = generalDao
					.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment", paramSegment);

			String areaId = StringUtil.isNullOrEmpty(toAreaId) ? StringUtil.Object2String(processsegmentInfo.get("AREAID")): toAreaId;
			
			wrd.put("NEXT_PROCESSPATHSTACK" , StringUtil.convertStackToString(lotProcessPathStack, "."));
			wrd.put("NEXT_PROCESSSEGMENTID" , toProcessPath.get("PROCESSSEGMENTID"));
			wrd.put("NEXT_AREAID"           , areaId);
			wrd.put("NEXT_RESOURCEID"       , toResourceId);
			
		}
		
		generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", wrd);

		

		return wrd;
	}

}