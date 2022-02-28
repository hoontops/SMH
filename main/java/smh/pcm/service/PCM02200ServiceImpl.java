package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;


/**
* @file: PCM02200ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02200ServiceImpl
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
public class PCM02200ServiceImpl extends AbstractNbdfService implements PCM02200Service {
//ASIS : SaveChangeEquipment
    public static final String NAMESAPCE = "smh.pcm.dao.PCM02200Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;


    @Autowired 
    private PCMWipService wipService;
    
    
    /**
     * @fn
     * @brief : 상단 LOT INFO
     * @remark 
     * @see smh.pcm.service.PCM02200Service#selectLotInfoBylotIDbyAreaAuthority(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotInfoBylotIDbyAreaAuthority(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotInfoBylotIDbyAreaAuthority", param));
    }
    
    /**
     * @fn
     * @brief :  작업 설비
     * @remark 
     * @see smh.pcm.service.PCM02200Service#selectEquipmentInfoByLotID4Run(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEquipmentInfoByLotID4Run(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEquipmentInfoByLotID4Run", param),"ds_EquipmentsRun");
    }
    
    
    /**
     * @fn
     * @brief :  변경 가능 설비
     * @remark 
     * @see smh.pcm.service.PCM02200Service#selectEquipmentInfoByLotID4Change(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEquipmentInfoByLotID4Change(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEquipmentInfoByLotID4Change", param),"ds_EquipmentsChange");
    }
    
    /**
     * @fn
     * @brief :  작업 치공구
     * @remark 
     * @see smh.pcm.service.PCM02200Service#selectDurableInfoByLotID4Run(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDurableInfoByLotID4Run(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableInfoByLotID4Run", param),"ds_DurableRun");
    }

    /**
     * @fn
     * @brief :  변경 가능 치공구
     * @remark 
     * @see smh.pcm.service.PCM02200Service#selectDurableInfoByLotID4Change(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void selectDurableInfoByLotID4Change(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableInfoByLotID4Change", param),"ds_DurableChange");
	}

	/**
     * @fn
     * @brief :  설비가동현황 탭 저장
     * @remark 
     * @see smh.pcm.service.PCM02200Service#saveChangeEquipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
	public void saveChangeEquipment(UiMapDto dto) throws Exception {
		int result = 0;
		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		
		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
		DataSetMap paramMapEqpRun = getParametersDataSetMap(dto, "ds_EquipmentsRun"); //dtEndEquipments
		DataSetMap paramMapEqpChange = getParametersDataSetMap(dto, "ds_EquipmentsChange"); //dtChangeEquipments
		DataSetMap paramMapDurableRun = getParametersDataSetMap(dto, "ds_DurableRun"); //EndedDurables
		DataSetMap paramMapDurableChange = getParametersDataSetMap(dto, "ds_DurableChange"); //dtChangeDurable
		DataSetMap paramMapLotInfo = getParametersDataSetMap(dto, "ds_LotInfo");
		
		
		Map<String, Object> paramSearch = paramMapSearch.get(0);
		Map<String, Object> paramEqpRun; //row
		Map<String, Object> paramEqpChange; //dtChangeEquipments
		Map<String, Object> paramDurableRun; //drow
		Map<String, Object> paramDurableChange; //dtChangeDurable
		Map<String, Object> paramLotInfo = paramMapLotInfo.get(0);
		
		String lotId = paramSearch.get("LOTID").toString();
		HashMap<String, Object> propertyMap = new HashMap<>();
		
		Map<String, Object> lotData = LotValidation(lotId, paramLotInfo);
		
		boolean durableRequired = hasDurableResourceInBor(lotData);	// 치공구 필수여부 
		
		// 설비 작업완료
		for(int i = 0; i < paramMapEqpRun.size(); i++)
		{
			paramEqpRun = paramMapEqpRun.get(i);
			
			String equipmentId = paramEqpRun.get("EQUIPMENTID").toString();
			Boolean isCompleted = paramEqpRun.get("ISCOMPLETED").toString().equals("1");
			String equipTxnhistKey = paramEqpRun.get("TXNHISTKEY").toString();
			
			if(!isCompleted) continue;
			propertyMap.clear();
			propertyMap.put("LOTID", lotId);
			propertyMap.put("TXNHISTKEY", equipTxnhistKey);
			List<Map<String, Object>> eqpList = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotequipment", propertyMap);
			Map<String, Object> lotEquipmentData = eqpList.get(0);
			
			if (lotEquipmentData == null) 
			{
				String args = String.format("LotId = %s  TxnHistKey = %s" , lotId, equipTxnhistKey);
				throw new BizException("InValidData001", args);//수정할 데이터가 존재하지 않습니다.({0})
			}
			
			if(lotEquipmentData.get("TRACKOUTTIME") != null) 
			{
				String args =  String.format("EquipmentId = %s" , equipmentId);
				throw new BizException("AlreadyCompletedEquipment", args);// 작업이 완료된 설비의 값은 수정/삭제 할 수 없습니다. {0}
			}
			
			// 완료처리
			lotEquipmentData.put("TRACKOUTTIME", paramEqpRun.get("TRACKOUTTIME")); 
			result += generalDao.update(NAMESAPCE + ".updatePcmLotEquipmentTrackOutTime", lotEquipmentData); 

//			setEESEquipmentState(equipmentId, lotData.getPlantid()); //EES 는 현재 버전에서 생략 by 이창영
			
		}
		
		// 치공구 DeKit
		for(int i =0; i < paramMapDurableRun.size(); i++)
		{
			paramDurableRun = paramMapDurableRun.get(i);
			
			String durableLotId = paramDurableRun.get("DURABLELOTID").toString();
			String duableEquipment = paramDurableRun.get("EQUIPMENTID").toString();
			String durableTxnHistKey = paramDurableRun.get("TXNHISTKEY").toString();
			String durableIsCompleted = paramDurableRun.get("ISCOMPLETED").toString();
			
			if(!durableIsCompleted.equals("1")) continue;
			propertyMap.clear();
			propertyMap.put("TXNHISTKEY", durableTxnHistKey);
			propertyMap.put("LOTID", lotId);
			propertyMap.put("EQUIPMENTID", duableEquipment);
			propertyMap.put("DURABLELOTID", durableLotId);
			
			List<Map<String, Object>> lotDurableList = generalDao.addSelect(NAMESAPCE + ".selectPcmLotdurable", propertyMap);
			Map<String, Object> lotDurableData = lotDurableList.get(0);
			
			lotDurableData.put("WORKENDTIME", paramDurableRun.get("WORKENDTIME"));
			
			result += generalDao.update(NAMESAPCE + ".updatePcmLotDurableWorkendtime", lotDurableData); 
			
			deleteConsumeMaterialLotTempData(dto, lotData, durableLotId);
		}
		
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		
		// 설비 작업시작
		for(int i = 0; i < paramMapEqpChange.size(); i++)
		{
			paramEqpChange = paramMapEqpChange.get(i);
			
			String equipmentId = paramEqpChange.get("EQUIPMENTID").toString();
			Boolean isChange = paramEqpChange.get("CHK").toString().equals("1");
			
			if(!isChange) continue;
			
			HashMap<String, Object> newlotEquipmentData = new HashMap<>();
			
			newlotEquipmentData.put("LOTID", lotId);
			newlotEquipmentData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
			newlotEquipmentData.put("EQUIPMENTID", equipmentId);
			newlotEquipmentData.put("PROCESSSTATE", lotData.get("PROCESSSTATE"));
			newlotEquipmentData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
			newlotEquipmentData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
			newlotEquipmentData.put("WORKCOUNT", lotData.get("WORKCOUNT"));
			newlotEquipmentData.put("TXNGROUPHISTKEY", txnGroupHistKey);
			
			newlotEquipmentData.put("TRACKINTIME", paramEqpChange.get("TRACKINTIME"));
			
			result += generalDao.insert(NAMESAPCE + ".insertPcmLotequipment", newlotEquipmentData); 

//			setEESEquipmentState(equipmentId, lotData.getPlantid());  //EES 는 현재 버전에서 생략 by 이창영
		}
		
		// 치공구 Kit
		for(int i =0; i < paramMapDurableChange.size(); i++)
		{
			paramDurableChange = paramMapDurableChange.get(i);
			
			String durableLotId = paramDurableChange.get("DURABLELOTID").toString();
			Boolean durableIsChange = paramDurableChange.get("CHK").toString().equals("1");
			
			if(!durableIsChange) continue;
			
			String durableEquipment = paramDurableChange.get("EQUIPMENTID").toString();
			
			// 설비상태가 작업중인지 검사
			propertyMap.clear();
			propertyMap.put("LOTID", lotId);
			propertyMap.put("EQUIPMENTID", durableEquipment);
			
			List<Map<String, Object>> lotEquipDataList = generalDao.addSelect(NAMESAPCE + ".selectPcmLotequipmentRun", propertyMap);
			
			if(lotEquipDataList.size() == 0) {
				throw new BizException("ValidateEquipmentNotRunForDurable", "");// 작업중이 아닌 설비에 치공구를 할당할 수 없습니다.
			}
			
			propertyMap.clear();
			propertyMap.put("DURABLELOTID", durableLotId);
			List<Map<String, Object>> DurablelotData = generalDao.addSelect(NAMESAPCECOM + ".selectTomDurablelot", propertyMap);

			if(DurablelotData.size() == 0) {
				// 치공구를 찾을 수 없습니다. ({0})
				throw new BizException("NotExistsDurableLot", String.format("DurableLotId = %s", durableLotId));
			}
			
			HashMap<String, Object> lotDurableData = new HashMap<>();
			lotDurableData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotDurableData.put("LOTID", lotId);
			lotDurableData.put("EQUIPMENTID", durableEquipment);
			lotDurableData.put("DURABLELOTID", durableLotId);
			lotDurableData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
			lotDurableData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
			lotDurableData.put("WORKCOUNT", lotData.get("WORKCOUNT"));
			lotDurableData.put("TXNGROUPHISTKEY", txnGroupHistKey);
			lotDurableData.put("WORKSTARTTIME", paramDurableChange.get("WORKSTARTTIME"));
			
			result += generalDao.insert(NAMESAPCE + ".insertPcmLotdurable", lotDurableData); 			
			
			// 임시자재 Table에 데이터 입력
			insertConsumeMaterialLotTempData(dto, durableEquipment, lotData, lotDurableData);
		}
		
		putDataSetMap(dto, result);
		
	}
	
	
	private Map<String, Object> LotValidation(String lotId, Map<String, Object> paramLotInfo) 
				throws Exception {
		
		Map<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotId);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
		Map<String, Object> lotData = list.get(0);
		
		if( !lotData.get("PROCESSSEGMENTID").toString().equals(paramLotInfo.get("PROCESSSEGMENTID").toString())
				|| !lotData.get("USERSEQUENCE").toString().equals(paramLotInfo.get("USERSEQUENCE").toString())
				|| !lotData.get("PROCESSSTATE").toString().equals(paramLotInfo.get("PROCESSSTATE").toString())
				|| StringUtil.Object2Int(lotData.get("WORKCOUNT")) != StringUtil.Object2Int(paramLotInfo.get("WORKCOUNT"))
			) {
			// Lot 을 재조회 후 실행해주세요.{0}
			throw new BizException("ValidLot", lotId);
		}
		
		// hold , locking 체크 by 전태선
		// Check Hold
		if(lotData.get("ISHOLD").toString().equals("Y"))
		{
			// 해당 Lot이 Hold 상태입니다. {0}
			throw new BizException("InHoldState", lotId);
		}
		
		// Check Locking
		if(lotData.get("ISLOCKING").toString().equals("Y"))
		{
			// 해당 Lot이 Locking 상태입니다. {0}
			throw new BizException("InLockingState", lotId);
		}
		
		return lotData;
	}


	/**
     * @fn
     * @brief :  치공구현황 탭 저장
     * @remark 
     * @see smh.pcm.service.PCM02200Service#saveChangeDurable(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
	public void saveChangeDurable(UiMapDto dto) throws Exception {
		int result = 0;
		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		
		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
		DataSetMap paramMapDurableRun = getParametersDataSetMap(dto, "ds_DurableRun2"); //EndedDurables
		DataSetMap paramMapDurableChange = getParametersDataSetMap(dto, "ds_DurableChange2"); //dtChangeDurable
		DataSetMap paramMapLotInfo = getParametersDataSetMap(dto, "ds_LotInfo");

		Map<String, Object> paramSearch = paramMapSearch.get(0);
		Map<String, Object> paramDurableRun; //drow
		Map<String, Object> paramDurableChange; //dtChangeDurable
		Map<String, Object> paramLotInfo = paramMapLotInfo.get(0);
		
		String lotId = paramSearch.get("LOTID").toString();
		HashMap<String, Object> propertyMap = new HashMap<>();
		
		Map<String, Object> lotData = LotValidation(lotId, paramLotInfo);
		
		// 치공구 DeKit
		for(int i =0; i < paramMapDurableRun.size(); i++)
		{
			paramDurableRun = paramMapDurableRun.get(i);
			
			String durableLotId = paramDurableRun.get("DURABLELOTID").toString();
			String duableEquipment = paramDurableRun.get("EQUIPMENTID").toString();
			String durableTxnHistKey = paramDurableRun.get("TXNHISTKEY").toString();
			Boolean durableIsCompleted = paramDurableRun.get("ISCOMPLETED").toString().equals("1");
			
			if(!durableIsCompleted) continue;
			
			propertyMap.clear();
			propertyMap.put("TXNHISTKEY", durableTxnHistKey);
			propertyMap.put("LOTID", lotId);
			propertyMap.put("EQUIPMENTID", duableEquipment);
			propertyMap.put("DURABLELOTID", durableLotId);
			
			List<Map<String, Object>> lotDurableList = generalDao.addSelect(NAMESAPCE + ".selectPcmLotdurable", propertyMap);
			Map<String, Object> lotDurableData = lotDurableList.get(0);
			
			lotDurableData.put("WORKENDTIME", paramDurableRun.get("WORKENDTIME"));
			
			result += generalDao.update(NAMESAPCE + ".updatePcmLotDurableWorkendtime", lotDurableData); 
			
			deleteConsumeMaterialLotTempData(dto, lotData, durableLotId);
			
		}
		
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		// 치공구 Kit
		for(int i =0; i < paramMapDurableChange.size(); i++)
		{
			paramDurableChange = paramMapDurableChange.get(i);
			
			String durableLotId = paramDurableChange.get("DURABLELOTID").toString();
			Boolean durableIsChange = paramDurableChange.get("CHK").toString().equals("1");
			
			if(!durableIsChange) continue;
			
			String durableEquipment = paramDurableChange.get("EQUIPMENTID").toString();
			
			propertyMap.clear();
			propertyMap.put("DURABLELOTID", durableLotId);
			List<Map<String, Object>> DurablelotData = generalDao.addSelect(NAMESAPCECOM + ".selectTomDurablelot", propertyMap);

			if(DurablelotData.size() == 0) {
				// 치공구를 찾을 수 없습니다. ({0})
				throw new BizException("NotExistsDurableLot", String.format("DurableLotId = %s", durableLotId));
			}
			

			HashMap<String, Object> lotDurableData = new HashMap<>();
			lotDurableData.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
			lotDurableData.put("LOTID", lotId);
			lotDurableData.put("EQUIPMENTID", durableEquipment);
			lotDurableData.put("DURABLELOTID", durableLotId);
			lotDurableData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
			lotDurableData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
			lotDurableData.put("WORKCOUNT", lotData.get("WORKCOUNT"));
			lotDurableData.put("TXNGROUPHISTKEY", txnGroupHistKey);
			lotDurableData.put("WORKSTARTTIME", paramDurableChange.get("WORKSTARTTIME"));
			
			result += generalDao.insert(NAMESAPCE + ".insertPcmLotdurable", lotDurableData); 			
			
			// 임시자재 Table에 데이터 입력
			insertConsumeMaterialLotTempData(dto, durableEquipment, lotData, lotDurableData);
		}
		
		putDataSetMap(dto, result);
		
	}
    
	
	
	private void insertConsumeMaterialLotTempData(UiMapDto dto, String equipmentId, Map<String, Object> lotData, HashMap<String, Object> lotDurableData) {
		//LotKey lotKey = lotData.key();

		Map<String, Object> durableLotData = kitDurableLot(dto, lotDurableData.get("DURABLELOTID").toString(), equipmentId);

		HashMap<String, Object> newConsumeMaterialLotTempData = new HashMap<>();
		// 중복검사
		newConsumeMaterialLotTempData.put("LOTID", lotData.get("LOTID"));
		newConsumeMaterialLotTempData.put("MATERIALLOTID", lotDurableData.get("DURABLELOTID"));
		newConsumeMaterialLotTempData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		
		List<Map<String, Object>> ConsumemateriallotTempList = generalDao.addSelect(NAMESAPCEWIP + ".selectPcmConsumemateriallotTempList", newConsumeMaterialLotTempData);
		
		if(ConsumemateriallotTempList.size() > 0) {
			return;
		}
		
		Map<String, Object> ConsumemateriallotTempData = new HashMap<>();
		
		newConsumeMaterialLotTempData.put("LOTID", lotData.get("LOTID"));
		newConsumeMaterialLotTempData.put("MATERIALLOTID", lotDurableData.get("DURABLELOTID"));
		newConsumeMaterialLotTempData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		newConsumeMaterialLotTempData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		newConsumeMaterialLotTempData.put("PLANTID", lotData.get("PLANTID"));
		newConsumeMaterialLotTempData.put("MATERIALTYPE", "Durable");
		newConsumeMaterialLotTempData.put("AREAID", lotData.get("AREAID"));
		newConsumeMaterialLotTempData.put("EQUIPMENTID", equipmentId);
		newConsumeMaterialLotTempData.put("MATERIALDEFID", lotDurableData.get("DURABLEDEFID"));
		newConsumeMaterialLotTempData.put("SEQUENCE", 1D);
		
		generalDao.insert(NAMESAPCEWIP + ".insertPcmConsumemateriallotTemp", newConsumeMaterialLotTempData);
		
	}

	private Map<String, Object> kitDurableLot(UiMapDto dto, String durableLotId, String newEquipmentId) {
		int result = 0;
		Map<String, Object> param     = new HashMap<>();
		param.put("DURABLELOTID", durableLotId);
		
		List<Map<String, Object>> durableLotList =  generalDao.addSelect(NAMESAPCECOM + ".selectTomDurablelot", param);
		Map<String, Object> durableLotData = durableLotList.get(0);
			
		if(durableLotList.size() == 0) {
			// 치공구를 찾을 수 없습니다. ({0})
			throw new BizException("NotExistsDurableLot", String.format("DurableLotId = %s", durableLotId));
		}
		
		if(durableLotData.get("EQUIPMENTID") != null &&  newEquipmentId.equals(durableLotData.get("EQUIPMENTID").toString())) {
			return durableLotData;
		}
		
		if(durableLotData.get("ISHOLD").equals("Y")) {
			// 보류중인 치공구는 사용할 수 없습니다. ({0})
			throw new BizException("ToolUseHoldState", String.format("DurableLotId = %s", durableLotId));
		}
		if(durableLotData.get("EQUIPMENTID") != null && durableLotData.get("EQUIPMENTID").toString().isEmpty() == false){
			// 다른설비에서 사용중인 치공구입니다. {0} 
			String args = String.format("DurableLotId = %s : EquipmentId = %s", durableLotId, durableLotData.get("EQUIPMENTID").toString());
			throw new BizException("DurableLotInUse", args);
		}
		
		if(!durableLotData.get("DURABLESTATE").equals(PCMConstant.DurableState.Available)) {
			// 치공구가 사용가능한 상태가 아닙니다. ({0})
			String args = String.format("DurableLotId = %s : DurableState = %s", durableLotId, PCMConstant.DurableState.Available);
			throw new BizException("DurableLotNotAvailable", args);
		}
		
		param.clear();
		param.put("EQUIPMENTID", newEquipmentId);
		param.put("DURABLESTATE", PCMConstant.DurableState.InUse);
		
		List<Map<String, Object>> alreadyKittedDataList =  generalDao.addSelect(NAMESAPCE + ".selectTomDurableLotbyEquipment", param);
		if(alreadyKittedDataList.size() > 0) {
			// 설비에서 이미 사용중인 치공구가 있습니다. {0}
			String args = String.format("EquipmentId = %s : DurableState = %s", newEquipmentId, PCMConstant.DurableState.InUse);
			throw new BizException("EquipmentHasDurableLot", args);
		}
		
		durableLotData.put("DURABLESTATE", PCMConstant.DurableState.InUse);
		durableLotData.put("EQUIPMENTID", newEquipmentId);
		
		result +=  generalDao.addDelete(NAMESAPCE + ".updateTomDurablelot", durableLotData);
		
		return durableLotData;
		
	}

	public void deleteConsumeMaterialLotTempData(UiMapDto dto, Map<String, Object> lotInfo, String durableLotId)  throws Exception
	{		
		dekitDurableLot(dto, durableLotId);
		
		Map<String, Object> param     = new HashMap<>();
		Map<String, Object>  consumemateriallotTemp     = new HashMap<>();
		int result = 0;
		
		param.put("LOTID", lotInfo.get("LOTID"));
		param.put("MATERIALLOTID", durableLotId);
		param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		
		
		List<Map<String, Object>> consumemateriallotTempListInfo =  generalDao.addSelect(NAMESAPCEWIP + ".selectPcmConsumemateriallotTempList", param);
		for (int i = 0, len = consumemateriallotTempListInfo.size(); i < len; i++)
		{
			consumemateriallotTemp = consumemateriallotTempListInfo.get(i);
			
			result +=  generalDao.addDelete(NAMESAPCEWIP + ".deletePcmConsumemateriallotTemp", consumemateriallotTemp);
		}

		putDataSetMap(dto, result);
		
	}	

	private void dekitDurableLot(UiMapDto dto, String durableLotId) {
		int result = 0;
		Map<String, Object> param     = new HashMap<>();
		param.put("DURABLELOTID", durableLotId);
		
		List<Map<String, Object>> durableLotList =  generalDao.addSelect(NAMESAPCECOM + ".selectTomDurablelot", param);
		
		if(durableLotList.size() == 0) {
			// 치공구를 찾을 수 없습니다. ({0})
			throw new BizException("NotExistsDurableLot", String.format("DurableLotId = %s", durableLotId));
		}
		
		Map<String, Object> durableLotData = durableLotList.get(0);
		
		if(!durableLotData.get("DURABLESTATE").equals(PCMConstant.DurableState.InUse)) {
			// 사용중인 치공구가 아닙니다. ({0}) 
			String args = String.format("DurableLotId = %s : DurableState = %s", durableLotId, PCMConstant.DurableState.InUse);
			throw new BizException("DurableLotNotInUse", args);
		}
		
		durableLotData.put("DURABLESTATE", PCMConstant.DurableState.Available);
		durableLotData.put("EQUIPMENTID", "");
		
		result +=  generalDao.addDelete(NAMESAPCE + ".updateTomDurablelot", durableLotData);

		putDataSetMap(dto, result);
	}

	private boolean hasDurableResourceInBor(Map<String, Object> lotData) {
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", lotData.get("PLANTID"));
		propertyMap.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		//propertyMap.put("RESOURCETYPE", lotData.get("Durable")); dao 에서 in ('Durable','Tool') 이걸로 
		propertyMap.put("VALIDSTATE","Valid");
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBasBillofresourceList", propertyMap);
		
		return list.size() > 0;
		
	}


}