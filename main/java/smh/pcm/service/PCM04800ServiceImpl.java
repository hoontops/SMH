package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;

/**
 * @file: PCM04800ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS04800ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.2.1
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 3. 10. 김애리 최초 생성
 */
@Service
public class PCM04800ServiceImpl extends AbstractNbdfService implements PCM04800Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM04800Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";

	@Autowired
	private GeneralDao generalDao;

	// 파라미터
	private String lotId; // LOT ID
	private String processSegmentId; // 클라이언트에서 LOT 정보 조회 당시의 LOT의 공정 ID
	private int firstChangedUserSequenceRouting; // 변경된 라우팅중 첫번째 공정의 UserSequence

	private DataSetMap routingTable; // 모든 공정 정보
	private DataSetMap routingCopyTable; // 변경된 라우팅중 첫번째 공정과 그 이후의 모든 공정 정보
	private DataSetMap resourceTable; // 변경된 자원과 그와 같은 공정에 있는 자원들의 정보
	private DataSetMap materialTable; // 변경된 자재와 그와 같은 공정에 있는 자재들의 정보
	private DataSetMap durableTable; // 변경된 자재와 그와 같은 공정에 있는 치공구들의 정보

	// 공통변수
	private boolean hasLotRouting; // LOT 라우팅 신규등록/수정 여부
	private String productProcessDefId; // LotRouting 신규등록인 경우 품목라우팅 ID
	private String productProcessDefVersion; // LotRouting 신규등록인 경우 품목라우팅 버전

	private final static int MAX_PATHSEQUENCE = 99999;
	private final static String RESOURCETYPE_RESOURCE = "Resource";
	private final static String RESOURCETYPE_DURABLE = "Durable";
	private final static String RESOURCETYPE_TOOL = "Tool";

	/**
	 * @fn
	 * @brief : 상단 Lot 정보
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotInfoBylotID(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotInfoBylotID(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotInfoBylotID", param), "ds_LotInfo");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductVersion", param), "ds_cbo_ProdVersion");
	}

	/**
	 * @fn
	 * @brief : 좌측 Routing 그리드
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotRouting(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotRouting(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotRouting", param));
	}

	/**
	 * @fn
	 * @brief : 자원 탭 그리드
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotRoutingResource(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotRoutingResource(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotRoutingResource", param));
	}

	/**
	 * @fn
	 * @brief : 자재 탭 그리드
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotRoutingMaterial(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotRoutingMaterial(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotRoutingMaterial", param));
	}

	/**
	 * @fn
	 * @brief : 치공구 탭 그리드
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotRoutingDurable(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotRoutingDurable(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotRoutingDurable", param));
	}

	/**
	 * @fn
	 * @brief : 자원 팝업
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotResource(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotResource(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotResource", param));
	}

	/**
	 * @fn
	 * @brief : Rev. 변경
	 * @remark
* @see smh.pcm.service.PCM04800Service#selectLotResource(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void saveChangeVersion(UiMapDto dto) throws Exception {
		int result = 0;
		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();

		DataSetMap paramMapTemp = getParametersDataSetMap(dto, "ds_temp");
		Map<String, Object> paramTemp = paramMapTemp.get(0);
		
		this.lotId = StringUtil.Object2String(paramTemp.get("LOTID"));
		this.processSegmentId = StringUtil.Object2String(paramTemp.get("PROCESSSEGMENTID"));
		String processDefVer = StringUtil.Object2String(paramTemp.get("PROCESSDEFVERSION"));
		String rcProcessDefVer = StringUtil.Object2String(paramTemp.get("RCPROCESSDEFVERSION"));
		
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", this.lotId);
		Map<String, Object> lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", param);
		
		validateLot(lotData);
		
		copyLotRouting(processDefVer, rcProcessDefVer); 
		copyBillofResource(lotData, processDefVer, rcProcessDefVer);
		copyBillofMaterial(lotData, processDefVer, rcProcessDefVer);
		
		putDataSetMap(dto, result);
	}

	private void copyLotRouting(String processDefVer, String rcProcessDefVer) {
		int result = 0;
		
		result += copyProcessDefinition(this.lotId, processDefVer, this.lotId, rcProcessDefVer);
		
		//모든 path를 다 가져와서 복사할 것으로 봄. 왜냐하면 MAX_PATHSEQUENCE 보다 작은건 다 가져오는 거니까...
		int lastPathSequence = copyProcessPath(this.lotId, processDefVer, this.lotId, rcProcessDefVer, this.MAX_PATHSEQUENCE);
		
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", this.lotId);
		Map<String, Object> lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", param);
		
		// 변경된 현재공정의 ProcessPathData 가져오기
		Map<String, Object> newProcessPathData = getNewProcessPath(this.lotId, rcProcessDefVer
				, lotData.get("PROCESSSEGMENTID").toString(), lotData.get("PROCESSSEGMENTVERSION").toString());

		// Lot의 공정정보 수정
		lotData.put("PROCESSDEFID", this.lotId);
		lotData.put("PROCESSDEFVERSION", rcProcessDefVer);
		Stack<String> stack = StringUtil.convertStringToStack(lotData.get("PROCESSPATHSTACK").toString(), ".");
		stack.set(0, newProcessPathData.get("PROCESSPATHID").toString());
		lotData.put("PROCESSPATHSTACK", StringUtil.convertStackToString(stack, "."));
		//lotData.put("USERSEQUENCE", newProcessPathData.get("USERSEQUENCE")); //ver 만 바꿀거라 안해도 됨. 
		updateLot(lotData);

		// 현재공정 실적의 공정정보 업데이트
		result += updateLotWorkResult(lotData);
		result += updateReservedLocking(lotData);
	}


	private void copyBillofResource(Map<String, Object> lotData, String processDefVer, String rcProcessDefVer) {
		Map<String, Object> param = new HashMap<>();
		param.put("PRODUCTDEFID", StringUtil.Object2String(lotData.get("PRODUCTDEFID")));
		param.put("PRODUCTDEFVERSION", StringUtil.Object2String(lotData.get("PRODUCTDEFVERSION")));
		param.put("PROCESSDEFID", StringUtil.Object2String(lotData.get("PROCESSDEFID")));
		param.put("PROCESSDEFVERSION", processDefVer);
		//param.put("RESOURCETYPE", resourcetypeResource); //resource 와 durable 을 함께 Copy 
		param.put("RCPROCESSDEFVERSION", rcProcessDefVer);
		
		generalDao.insert(NAMESAPCE + ".insertBasBillofresourceCopy", param);
		
	}
	

	private void copyBillofMaterial(Map<String, Object> lotData, String processDefVer, String rcProcessDefVer) {
		Map<String, Object> param = new HashMap<>();
		param.put("PRODUCTDEFID", StringUtil.Object2String(lotData.get("PRODUCTDEFID")));
		param.put("PRODUCTDEFVERSION", StringUtil.Object2String(lotData.get("PRODUCTDEFVERSION")));
		param.put("PROCESSDEFID", StringUtil.Object2String(lotData.get("PROCESSDEFID")));
		param.put("PROCESSDEFVERSION", processDefVer);
		param.put("RCPROCESSDEFVERSION", rcProcessDefVer);
		
		generalDao.insert(NAMESAPCE + ".insertBasBillofmaterialCopy", param);
		
	}
	

	/**
	 * @fn
	 * @brief : Lot Routing 저장.
	 * @remark : asis - SaveSampleRouting
* @see smh.pcm.service.PCM04800Service#saveLotRouting(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void saveLotRouting(UiMapDto dto) throws Exception {
		int result = 0;
		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();

		loadParameters(dto);

		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", this.lotId);
		Map<String, Object> lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", param);

		this.hasLotRouting = lotData.get("PROCESSDEFID").toString().equals(this.lotId);
		if (!this.hasLotRouting) {
			this.productProcessDefId = lotData.get("PROCESSDEFID").toString();
			this.productProcessDefVersion = lotData.get("PROCESSDEFVERSION").toString();
		}

		// LOT 유효성 검사
		validateLot(lotData);

		// 현재 Routing 이 품목 Routing 이면서 해당 LotId로 Routing이 등록되어 있는 경우 삭제 처리(첫 Lot
		// Routing)
		checkRoutingType(lotData);

		result += saveRouting(lotData); // NOTE : 가장 먼저 실행해야 함
		result += saveResource(lotData);
		result += saveMaterial(lotData);
		result += saveDurable(lotData);

		
		putDataSetMap(dto, result);
	}

	// 화면에서 넘어온 파라메터를 지역 변수로...
	private void loadParameters(UiMapDto dto) {

		DataSetMap paramMapTemp = getParametersDataSetMap(dto, "ds_temp");

		this.routingCopyTable = getParametersDataSetMap(dto, "ds_RoutingCopy");
		this.routingTable = getParametersDataSetMap(dto, "ds_Routing");
		this.resourceTable = getParametersDataSetMap(dto, "ds_Resource");
		this.materialTable = getParametersDataSetMap(dto, "ds_Material");
		this.durableTable = getParametersDataSetMap(dto, "ds_Durable");

		Map<String, Object> paramTemp = paramMapTemp.get(0);

		this.lotId = StringUtil.Object2String(paramTemp.get("LOTID"));
		this.processSegmentId = StringUtil.Object2String(paramTemp.get("PROCESSSEGMENTID"));
		this.firstChangedUserSequenceRouting = StringUtil.Object2Int(paramTemp.get("FirstChangedUserSequence"));

	}

	// LOT 유효성 검사
	private void validateLot(Map<String, Object> lotData) {
		
		if (!StringUtil.isNullOrEmpty(lotData.get("SUBPROCESSDEFID"))) {
			// 재작업중에는 샘플라우팅을 설정할 수 없습니다.
			throw new BizException("CannotSampleRoutingWhenRework","");
		}
		
		if (!StringUtil.Object2String(lotData.get("PROCESSSEGMENTID")).equals(this.processSegmentId)) {
			// LOT의 공정이 변경되었습니다. {0}
			throw new BizException("LotProcessSegmentIsChanged", String.format("Previous = %s  Current = %s",
					this.processSegmentId, StringUtil.Object2String(lotData.get("PROCESSSEGMENTID"))));
		}

	}

	// 좌측 라우팅 그리드 저장
	private int saveRouting(Map<String, Object> lotData) {
		int result = 0;

		String processDefID = StringUtil.Object2String(lotData.get("PROCESSDEFID"));
		String processDefVer = StringUtil.Object2String(lotData.get("PROCESSDEFVERSION"));

		if (this.hasLotRouting) { // LOT이 LOT Routing을 가지고 있음
			if (this.firstChangedUserSequenceRouting >= MAX_PATHSEQUENCE)
				return 0;

			// 변경되지 않은 공정중 마지막 공정의 pathSequence를 가져온다.
			int lastPathSequence = getLastPathSequence(processDefID, processDefVer,
					this.firstChangedUserSequenceRouting);

			// lastPathSequence 이후의 processPath 정보 삭제
			result += deleteProcessPath(processDefID, processDefVer, lastPathSequence);
			// 수정/추가된 공정을 추가
			int lastPathSequence2 = createProcessPath(processDefID, processDefVer, lastPathSequence);
			result += lastPathSequence2; //lastPathSequence2 는 그리드의 No 의 마지막이 되는 게 맞음. 
			// 라우팅의 마지막 공정의 PathType 을 End 로 업데이트
			result += updateLastPathTypeEnd(processDefID, processDefVer, lastPathSequence2);

		} else { // LOT이 LOT Routing을 가지고 있지 않음

			// Lot Routing 의 ProcessDefinition 을 생성
			result += copyProcessDefinition(processDefID, processDefVer, this.lotId, processDefVer); // 새로운 Lot Routing
																										// 도 버전을 가지고 있자.
			// 수정/추가된 공정의 이전공정들을 품목 라우팅에서 복사
			int lastPathSequence = copyProcessPath(processDefID, processDefVer, this.lotId, processDefVer,
					this.firstChangedUserSequenceRouting);
			// 수정/추가된 공정을 추가
			int lastPathSequence2 = createProcessPath(this.lotId, processDefVer, lastPathSequence);
			result += lastPathSequence2;
			// 라우팅의 마지막 공정의 PathType 을 End 로 업데이트
			result += updateLastPathTypeEnd(this.lotId, processDefVer, lastPathSequence2);
			
			result += updateReservedLocking(lotData);
			
		}

		// 변경된 현재공정의 ProcessPathData 가져오기
		Map<String, Object> newProcessPathData = getNewProcessPath(this.lotId,
				lotData.get("PROCESSDEFVERSION").toString(), lotData.get("PROCESSSEGMENTID").toString(),
				lotData.get("PROCESSSEGMENTVERSION").toString());

		// Lot의 공정정보 수정
		lotData.put("PROCESSDEFID", this.lotId);
		lotData.put("PROCESSDEFVERSION", processDefVer);
		Stack<String> stack = StringUtil.convertStringToStack(lotData.get("PROCESSPATHSTACK").toString(), ".");
		stack.set(0, newProcessPathData.get("PROCESSPATHID").toString());
		lotData.put("PROCESSPATHSTACK", StringUtil.convertStackToString(stack, "."));
		lotData.put("USERSEQUENCE", newProcessPathData.get("USERSEQUENCE"));
		updateLot(lotData);

		// 현재공정 실적의 공정정보 업데이트
		result += updateLotWorkResult(lotData);

		return result;
	}

	private int updateReservedLocking(Map<String, Object> lotData) {
		int result = 0;
		
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", this.lotId);
		param.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectLotReservedLocking", param);
		if(list != null && !list.isEmpty())
		{
			for(int i = 0; i < list.size(); i++)
			{
				Map<String, Object> rLocking = list.get(0);
				param.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
				param.put("ENTERPRISEID", rLocking.get("ENTERPRISEID")); 
				param.put("PLANTID", rLocking.get("PLANTID"));
				param.put("PROCESSSEGMENTID", rLocking.get("PROCESSSEGMENTID"));
				param.put("PROCESSSEGMENTVERSION", rLocking.get("PROCESSSEGMENTVERSION"));
				param.put("LOCKINGTYPE", rLocking.get("LOCKINGTYPE"));
				param.put("LOCKINGCODE", rLocking.get("LOCKINGCODE"));
				param.put("COMMENTS", rLocking.get("COMMENTS"));
				param.put("LOCKING_PROCESSSTATE", rLocking.get("LOCKING_PROCESSSTATE"));
				
				result += generalDao.insert(NAMESAPCE + ".insertLotReservedLocking", param);
			}
		
		}
		
		
		
		return result;
	}

	// 현재 공정의 실적의 공정정보 업데이트
	private int updateLotWorkResult(Map<String, Object> lotData) {
		int result = 0;
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", this.lotId);
		param.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		param.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		param.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		param.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		param.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
		param.put("PROCESSPATHID",
				StringUtil.convertStringToStack(lotData.get("PROCESSPATHSTACK").toString(), ".").peek());
		param.put("PROCESSPATHSTACK", lotData.get("PROCESSPATHSTACK"));

		result += generalDao.update(NAMESAPCE + ".updateLotworkresult", param);

		return result;
	}

	// 신규라우팅에서의 processPath 를 반환
	private Map<String, Object> getNewProcessPath(String processDefId, String processDefVersion,
			String processSegmentId, String processSegmentVersion) {

		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", processDefId);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("PROCESSSEGMENTID", processSegmentId);
		param.put("PROCESSSEGMENTVERSION", processSegmentVersion);

		Map<String, Object> pathData = generalDao.selectOne(NAMESAPCE + ".selectBasProcesspathList", param);

		return pathData;
	}

	// 자원 탭 저장
	private int saveResource(Map<String, Object> lotData) {
		int result = 0;
		if (this.hasLotRouting) { // LOT이 LOT Routing을 가지고 있음
			if (this.resourceTable.size() == 0) {
				return 0;
			}

			// 변경된 공정에 있는 BOR은 모두 삭제
			Set<String> processNotToAdd = deleteBillofresourceInTheSameProcess(lotData, this.resourceTable, RESOURCETYPE_RESOURCE);

			for (int i = 0; i < this.resourceTable.size(); i++) {
				Map<String, Object> row = this.resourceTable.get(i);
				if (processNotToAdd.contains(row.get("PROCESSSEGMENTID").toString())) { // 변경된 공정에 있는 BOR 추가
					if (getRowType(row) != DataSet.ROW_TYPE_DELETED) {
						result += insertBillofresourceData(lotData, row, RESOURCETYPE_RESOURCE);
					}
				}
			}

		} else { // LOT이 LOT Routing을 가지고 있지 않음
			// 변경되지않은 공정에 BOR은 LOT 라우팅으로 복사
			Set<String> processNotToAdd = copyBillofResourceNotInTheSameProcess(lotData, this.resourceTable, RESOURCETYPE_RESOURCE);
			// 변경된거 insert.
			for (int i = 0; i < this.resourceTable.size(); i++) {
				Map<String, Object> row = this.resourceTable.get(i); 
				if (processNotToAdd.contains(row.get("PROCESSSEGMENTID").toString())) {
					if (getRowType(row) != DataSet.ROW_TYPE_DELETED) {
						result += insertBillofresourceData(lotData, row, RESOURCETYPE_RESOURCE);
					}
				}
			}

		}

		return result;
	}

	// 현재 Routing 이 품목 Routing 이면서 해당 LotId로 Routing이 등록되어 있는 경우 삭제 처리(첫 Lot
	// Routing)
	private void checkRoutingType(Map<String, Object> lotData) {

		String lotId = StringUtil.Object2String(lotData.get("LOTID"));

		String productDefId = StringUtil.Object2String(lotData.get("PRODUCTDEFID"));
		String productDefVersion = StringUtil.Object2String(lotData.get("PRODUCTDEFVERSION"));
		String processDefId = StringUtil.Object2String(lotData.get("PROCESSDEFID"));

		// 현재 Routing 이 품목 Routing 이면서 해당 LotId로 Routing이 등록되어 있는 경우 삭제 처리(첫 Lot
		// Routing)
		if (productDefId.equals(processDefId)) {

			HashMap<String, Object> propertyMap = new HashMap<>();

			propertyMap.put("PROCESSDEFID", lotId);
			// propertyMap.put("PROCESSDEFVERSION", ("*")); //asis 는 ver 이 안들어갔으나 tobe 는
			// 들어감.

			generalDao.delete(NAMESAPCE + ".deleteProcessDefinition", propertyMap);
			generalDao.delete(NAMESAPCE + ".deleteProcesspath", propertyMap);

			propertyMap.put("PRODUCTDEFID", productDefId);
			propertyMap.put("PRODUCTDEFVERSION", productDefVersion);

			generalDao.delete(NAMESAPCE + ".deleteBillofmaterial", propertyMap);
			generalDao.delete(NAMESAPCE + ".deleteBillofresource", propertyMap);

		}

	}

	// 변경된 공정 이전공정중 마지막 공정의 pathSequence를 반환
	private int getLastPathSequence(String processDefId, String processDefVersion, int firstChangedUserSequence) {
		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", processDefId);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("GTUSERSEQUENCE", firstChangedUserSequence);

		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBasProcesspathList", param);
		return list.size();
	}

	// lastPathSequence 이후의 processPath 정보를 삭제
	private int deleteProcessPath(String processDefId, String processDefVersion, int lastPathSequence) {
		int result = 0;
		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", processDefId);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("LASTPATHSEQUENCE", lastPathSequence);

		generalDao.delete(NAMESAPCE + ".deleteProcesspath", param);

		return result;
	}

	// 변경된 라우팅 이후의 라우팅정보를 새로 생성
	private int createProcessPath(String processDefID, String processDefVer, int lastPathSequence) {

		int result = 0;

		for (int i = 0; i < this.routingCopyTable.size(); i++) {
			Map<String, Object> row = this.routingCopyTable.get(i);

			if (getRowType(row) == DataSet.ROW_TYPE_DELETED)
				continue;

			Map<String, Object> pathData = new HashMap<>();

			pathData.put("PROCESSPATHID", processDefID + String.valueOf(lastPathSequence + result + 1));
			pathData.put("ENTERPRISEID", row.get("ENTERPRISEID"));
			pathData.put("PLANTID", row.get("PLANTID"));
			pathData.put("PROCESSDEFID", processDefID);
			pathData.put("PROCESSDEFVERSION", processDefVer);
			pathData.put("PROCESSSEGMENTID", row.get("PROCESSSEGMENTID"));
			pathData.put("PROCESSSEGMENTVERSION", row.get("PROCESSSEGMENTVERSION"));
			pathData.put("PATHSEQUENCE", lastPathSequence + result + 1);
			pathData.put("USERSEQUENCE", row.get("USERSEQUENCE"));
			pathData.put("PATHTYPE", getPathType(lastPathSequence, i));
			pathData.put("PROCESSUOM", row.get("PROCESSUOM"));
			pathData.put("ISWEEKMNG", row.get("ISWEEKMNG"));
			pathData.put("VALIDSTATE", PCMConstant.VALIDSTATE_VALID);

			result += generalDao.insert(NAMESAPCE + ".insertBasProcesspath", pathData);
		}

		return lastPathSequence + result;
	}

	// PathType을 반환
	private String getPathType(int lastPathSequence, int index) {
		if (lastPathSequence == 0 && this.routingTable.size() == 1) {// lastPathSequence == 0 인건 품목 routing 에서 copy 한게
																		// 없다는 뜻.
			return PCMConstant.PathType.STARTEND;
		} else if (lastPathSequence == 0 && index == 0) {
			return PCMConstant.PathType.START;
		} else if (this.routingTable.size() - 1 == index) { // 마지막 공정이면.
			return PCMConstant.PathType.END;
		} else {
			return PCMConstant.PathType.NORMAL;
		}
	}

	// 라우팅의 마지막 공정의 PathType 을 End 로 업데이트
	private int updateLastPathTypeEnd(String processDefID, String processDefVer, int lastPathSequence) {
		int result = 0;

		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", processDefID);
		param.put("PROCESSDEFVERSION", processDefVer);
		param.put("PATHSEQUENCE", lastPathSequence);

		List<Map<String, Object>> pathList = generalDao.addSelect(NAMESAPCE + ".selectBasProcesspathList", param);

		Map<String, Object> pathToUpdate = pathList.get(0);
		if (lastPathSequence == 1) {
			pathToUpdate.put("PATHTYPE", PCMConstant.PathType.STARTEND);
		} else {

			Map<String, Object> pathData = new HashMap<>();

			pathData.put("PROCESSDEFID", processDefID);
			pathData.put("PROCESSDEFVERSION", processDefVer);
			pathData.put("PATHSEQUENCE", 1);

			List<Map<String, Object>> pdStartList = generalDao.addSelect(NAMESAPCE + ".selectBasProcesspathList",
					pathData);

			if (pdStartList.size() > 0) {
				Map<String, Object> pdStart = pdStartList.get(0);
				pdStart.put("PATHTYPE", PCMConstant.PathType.START);

				result += generalDao.update(NAMESAPCE + ".updateBasProcesspath", pdStart);
			}
			pathToUpdate.put("PATHTYPE", PCMConstant.PathType.END);

		}

		result += generalDao.update(NAMESAPCE + ".updateBasProcesspath", pathToUpdate);

		// update result 꼭 확인하자.
		return result;
	}

	// 품목 라우팅의 ProcessDefinition을 Lot 라우팅의 ProcessDefinition으로 복사
	private int copyProcessDefinition(String srcDefId, String srcDefVersion, String dstDefId, String dstDefVersion) {
		int result = 0;

		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", srcDefId);
		param.put("PROCESSDEFVERSION", srcDefVersion);

		Map<String, Object> processData = generalDao.selectOne(NAMESAPCECOM + ".selectBasProcessdefinition", param);

		Map<String, Object> newProcessData = new HashMap<>();

		newProcessData.put("PROCESSDEFID", dstDefId);
		newProcessData.put("PROCESSDEFVERSION", dstDefVersion);
		newProcessData.put("PROCESSCLASSID", processData.get("PROCESSCLASSID"));
		newProcessData.put("PROCESSDEFNAME", processData.get("PROCESSDEFNAME"));
		newProcessData.put("ENTERPRISEID", processData.get("ENTERPRISEID"));
		newProcessData.put("PLANTID", processData.get("PLANTID"));
		newProcessData.put("PROCESSDEFTYPE", "Lot");
		newProcessData.put("LEADTIME", processData.get("LEADTIME"));
		newProcessData.put("VERSIONSTATE", processData.get("VERSIONSTATE"));
		newProcessData.put("REWORKITEMCONTROL", processData.get("REWORKITEMCONTROL"));
		newProcessData.put("REWORKSEGMENTCONTROL", processData.get("REWORKSEGMENTCONTROL"));
		newProcessData.put("DESCRIPTION", processData.get("DESCRIPTION"));
		newProcessData.put("VALIDSTATE", processData.get("VALIDSTATE"));
		newProcessData.put("TOPPROCESSSEGMENTID", processData.get("TOPPROCESSSEGMENTID"));

		result += generalDao.insert(NAMESAPCE + ".insertBasProcessdefinition", newProcessData);

		return result;
	}

	// 품목라우팅에서 firstChangedUserSequence 보다 UserSequence가 작은 processPath를 복사하고 복사된
	// 마지막 pathSequence를 반환한다.
	private int copyProcessPath(String srcDefId, String srcDefVersion, String dstDefId, String dstDefVersion, int firstChangedUserSequence) {

		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", srcDefId);
		param.put("PROCESSDEFVERSION", srcDefVersion);
		param.put("GTUSERSEQUENCE", firstChangedUserSequence);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBasProcesspathList", param);

		int pathSeq = 0; 
		
		for (int i = 0; i < list.size(); i++) {
			Map<String, Object> pathData = new HashMap<>();
			//pathData.put("PROCESSPATHID", dstDefId + String.valueOf(i + 1));
			pathData.put("PROCESSPATHID", dstDefId + dstDefVersion + String.valueOf(i + 1));
			
			pathData.put("ENTERPRISEID", list.get(i).get("ENTERPRISEID"));
			pathData.put("PLANTID", list.get(i).get("PLANTID"));
			pathData.put("PROCESSDEFID", dstDefId);
			pathData.put("PROCESSDEFVERSION", dstDefVersion);
			pathData.put("PROCESSSEGMENTID", list.get(i).get("PROCESSSEGMENTID"));
			pathData.put("PROCESSSEGMENTVERSION", list.get(i).get("PROCESSSEGMENTVERSION"));
			pathData.put("PATHSEQUENCE", list.get(i).get("PATHSEQUENCE"));
			pathData.put("USERSEQUENCE", list.get(i).get("USERSEQUENCE"));
			pathData.put("PATHTYPE", list.get(i).get("PATHTYPE"));
			pathData.put("ALTERNATETYPE", list.get(i).get("ALTERNATETYPE"));
			pathData.put("ALTERNATEPROCESSCLASSID", list.get(i).get("ALTERNATEPROCESSCLASSID"));
			pathData.put("REWORKPROCESSDEFID", list.get(i).get("REWORKPROCESSDEFID"));
			pathData.put("REWORKPROCESSDEFVERSION", list.get(i).get("REWORKPROCESSDEFVERSION"));
			pathData.put("REWORKRETURNPATHID", list.get(i).get("REWORKRETURNPATHID"));
			pathData.put("DESCRIPTION", list.get(i).get("DESCRIPTION"));
			pathData.put("VALIDSTATE", list.get(i).get("VALIDSTATE"));
			pathData.put("PROCESSUOM", list.get(i).get("PROCESSUOM"));
			pathData.put("ISWEEKMNG", list.get(i).get("ISWEEKMNG"));

			if(StringUtil.Object2Int(list.get(i).get("PATHSEQUENCE")) > pathSeq) pathSeq = StringUtil.Object2Int(list.get(i).get("PATHSEQUENCE"));
			generalDao.insert(NAMESAPCE + ".insertBasProcesspath", pathData);
		}

		return pathSeq;
	}

	// 변경된 공정과 같은 공정에 있는 BOR 삭제
	private Set<String> deleteBillofresourceInTheSameProcess(Map<String, Object> lotData, DataSetMap rTable,
			String resourceType) {
		Set<String> processToDelete = new HashSet<String>();

		for (int i = 0; i < rTable.size(); i++) {
			Map<String, Object> row = rTable.get(i);
			if (getRowType(row) != DataSet.ROW_TYPE_NORMAL) {
				processToDelete.add(row.get("PROCESSSEGMENTID").toString());
			}
		}

		for (String processSegmentId : processToDelete) {
			Map<String, Object> param = new HashMap<>();
			param.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
			param.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
			param.put("PROCESSSEGMENTID", processSegmentId);
			param.put("RESOURCETYPE", resourceType);

			generalDao.delete(NAMESAPCE + ".deleteBillofresource", param);
		}
		
		return processToDelete;

	}

	// 변경되지 않은 공정일 경우 BOR을 품목 라우팅에서 LOT 라우팅으로 복사
	private Set<String> copyBillofResourceNotInTheSameProcess(Map<String, Object> lotData, DataSetMap rTable,
			String resourceType) {
		Set<String> processNotToAdd = new HashSet<String>();

		for (int i = 0; i < rTable.size(); i++) { //변경된 공정 찾아냄. 
			Map<String, Object> row = rTable.get(i);
			if (getRowType(row) != DataSet.ROW_TYPE_NORMAL) {
				processNotToAdd.add(row.get("PROCESSSEGMENTID").toString());
			}
		}

		Map<String, Object> param = new HashMap<>();
		param.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		param.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		param.put("PROCESSDEFID", this.productProcessDefId);
		param.put("PROCESSDEFVERSION", this.productProcessDefVersion);
		param.put("RESOURCETYPE", resourceType);

		List<Map<String, Object>> borList = generalDao.addSelect(NAMESAPCE + ".selectBasBillofresourceList", param);

		for (int i = 0; i < borList.size(); i++) {
			Map<String, Object> eachBorData = borList.get(i);
			if (!processNotToAdd.contains(eachBorData.get("PROCESSSEGMENTID").toString())) {// 변경되지 않은 공정일 경우.

				Map<String, Object> newBorData = new HashMap<>();
				newBorData.putAll(eachBorData);
				newBorData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
				newBorData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
				newBorData.put("SEQUENCE", eachBorData.get("sequence"));

				generalDao.insert(NAMESAPCE + ".insertBasBillofresource", newBorData);
			}
		}
		
		return processNotToAdd;
		

	}

	private int insertBillofresourceData(Map<String, Object> lotData, Map<String, Object> row, String resourceType) {
		int result = 0;

		Map<String, Object> borData = new HashMap<>();

		borData.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		borData.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		borData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		borData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		borData.put("PROCESSSEGMENTID", row.get("PROCESSSEGMENTID"));
		borData.put("PROCESSSEGMENTVERSION", row.get("PROCESSSEGMENTVERSION"));
		borData.put("RESOURCETYPE", resourceType);
		borData.put("SEQUENCE", row.get("USERSEQUENCE"));
		borData.put("EQUIPMENTID", "*");
		borData.put("RESOURCECLASSID", "*");
		if (resourceType.equals(RESOURCETYPE_RESOURCE)) {
			borData.put("RESOURCEID", row.get("RESOURCEID"));
			borData.put("RESOURCEVERSION", row.get("RESOURCEVERSION"));
		} else if (resourceType.equals(RESOURCETYPE_DURABLE)) {
			borData.put("RESOURCEID", row.get("DURABLEDEFID"));
			borData.put("RESOURCEVERSION", row.get("DURABLEDEFVERSION"));
		}
		borData.put("ISPRIMARYRESOURCE", row.get("ISPRIMARYRESOURCE"));
		borData.put("ENTERPRISEID", row.get("ENTERPRISEID"));
		borData.put("PLANTID", row.get("PLANTID"));
		borData.put("VALIDSTATE", PCMConstant.VALIDSTATE_VALID);

		result += generalDao.insert(NAMESAPCE + ".insertBasBillofresource", borData);

		return result;
	}

	private int saveMaterial(Map<String, Object> lotData) {
		int result = 0;
		if (this.hasLotRouting) { // LOT이 LOT Routing을 가지고 있음
			if (this.materialTable.size() == 0) {
				return 0;
			}

			Set<String> processNotToAdd = deleteBillofmaterialInTheSameProcess(lotData); //변경된 공정 material 삭제

			for (int i = 0; i < this.materialTable.size(); i++) {
				Map<String, Object> row = this.materialTable.get(i);
				if (processNotToAdd.contains(row.get("PROCESSSEGMENTID").toString())) {
					if (getRowType(row) != DataSet.ROW_TYPE_DELETED) {
						result += insertBillofmaterialData(lotData, row);
					}
				}
			}

		} else { // LOT이 LOT Routing을 가지고 있지 않음
			Set<String> processNotToAdd = copyBillofMaterialNotInTheSameProcess(lotData);

			for (int i = 0; i < this.materialTable.size(); i++) {
				Map<String, Object> row = this.materialTable.get(i);
				if (processNotToAdd.contains(row.get("PROCESSSEGMENTID").toString())) {
					if (getRowType(row) != DataSet.ROW_TYPE_DELETED) {
						result += insertBillofmaterialData(lotData, row);
					}
				}
			}

		}

		return result;
	}

	private int insertBillofmaterialData(Map<String, Object> lotData, Map<String, Object> row) {
		int result = 0;

		Map<String, Object> bomData = new HashMap<>();

		bomData.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		bomData.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		bomData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		bomData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		bomData.put("PROCESSSEGMENTID", row.get("PROCESSSEGMENTID"));
		bomData.put("PROCESSSEGMENTVERSION", row.get("PROCESSSEGMENTVERSION"));
		bomData.put("MATERIALTYPE", row.get("MATERIALTYPE"));
		bomData.put("MATERIALDEFID", row.get("MATERIALDEFID"));
		bomData.put("MATERIALDEFVERSION", row.get("MATERIALDEFVERSION"));
		bomData.put("SEQUENCE", row.get("USERSEQUENCE"));
		bomData.put("ENTERPRISEID", row.get("ENTERPRISEID"));
		bomData.put("PLANTID", row.get("PLANTID"));
		bomData.put("UNIT", row.get("UNIT"));
		bomData.put("QTY", row.get("QTY"));
		bomData.put("ISREQUIRED", row.get("ISREQUIRED"));
		bomData.put("WIPSUPPLYTYPE", row.get("WIPSUPPLYTYPE"));
		bomData.put("VALIDSTATE", PCMConstant.VALIDSTATE_VALID);

		generalDao.insert(NAMESAPCE + ".insertBasBillofmaterial", bomData);

		return result;
	}

	// 변경된 공정과 다른 공정에 있는 BOM을 품목 라우팅에서 LOT 라우팅으로 복사
	private Set<String> copyBillofMaterialNotInTheSameProcess(Map<String, Object> lotData) {

		Set<String> processNotToAdd = new HashSet<String>();

		for (int i = 0; i < this.materialTable.size(); i++) {
			Map<String, Object> row = this.materialTable.get(i);
			processNotToAdd.add(row.get("PROCESSSEGMENTID").toString());
		}

		Map<String, Object> param = new HashMap<>();
		param.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		param.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		param.put("PROCESSDEFID", this.productProcessDefId);
		param.put("PROCESSDEFVERSION", this.productProcessDefVersion);

		List<Map<String, Object>> bomList = generalDao.addSelect(NAMESAPCE + ".selectBasBillofmaterialList", param);

		for (int i = 0; i < bomList.size(); i++) {
			Map<String, Object> eachBomData = bomList.get(i);

			if (!processNotToAdd.contains(eachBomData.get("PROCESSSEGMENTID"))) {
				Map<String, Object> newBomData = new HashMap<>();

				newBomData.putAll(eachBomData);
				newBomData.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
				newBomData.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
				newBomData.put("SEQUENCE", eachBomData.get("sequence"));

				generalDao.insert(NAMESAPCE + ".insertBasBillofmaterial", newBomData);
			}
		}
		
		return processNotToAdd;
	}

	// 변경된 공정과 같은 공정에 있는 BOM 삭제
	private Set<String>  deleteBillofmaterialInTheSameProcess(Map<String, Object> lotData) {
		Set<String> processToDelete = new HashSet<String>();

		for (int i = 0; i < this.materialTable.size(); i++) {
			Map<String, Object> row = this.materialTable.get(i);
			if (getRowType(row) != DataSet.ROW_TYPE_NORMAL) {
				processToDelete.add(row.get("PROCESSSEGMENTID").toString());
			}
		}

		for (String processSegmentId : processToDelete) {
			Map<String, Object> param = new HashMap<>();
			param.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
			param.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
			param.put("PROCESSSEGMENTID", processSegmentId);

			generalDao.delete(NAMESAPCE + ".deleteBillofmaterial", param);
		}
		
		return processToDelete;

	}

	private int saveDurable(Map<String, Object> lotData) {
		int result = 0;

		if (this.hasLotRouting) { // LOT이 LOT Routing을 가지고 있음
			if (this.durableTable.size() == 0) {
				return 0;
			}

			// 변경된 공정에 있는 Durable은 모두 삭제
			Set<String> processNotToAdd = deleteBillofresourceInTheSameProcess(lotData, this.durableTable, RESOURCETYPE_DURABLE);

			for (int i = 0; i < this.durableTable.size(); i++) {
				Map<String, Object> row = this.durableTable.get(i);
				if (processNotToAdd.contains(row.get("PROCESSSEGMENTID").toString())) { // 변경된거 insert.
					if (getRowType(row) != DataSet.ROW_TYPE_DELETED) {
						result += insertBillofresourceData(lotData, row, RESOURCETYPE_DURABLE);
					}
				}
			}

		} else { // LOT이 LOT Routing을 가지고 있지 않음
			Set<String> processNotToAdd = copyBillofResourceNotInTheSameProcess(lotData, this.durableTable, RESOURCETYPE_DURABLE);

			for (int i = 0; i < this.durableTable.size(); i++) {
				Map<String, Object> row = this.durableTable.get(i);
				if (processNotToAdd.contains(row.get("PROCESSSEGMENTID").toString())) { // 변경된거 insert.
					if (getRowType(row) != DataSet.ROW_TYPE_DELETED) {
						result += insertBillofresourceData(lotData, row, RESOURCETYPE_DURABLE);
					}
				}
			}

		}

		return result;
	}

	private void updateLot(Map<String, Object> lot) {
		lot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lot);
		lot.put("TXNHISTKEY", lot.get("LASTTXNHISTKEY"));
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lot);
	}

}