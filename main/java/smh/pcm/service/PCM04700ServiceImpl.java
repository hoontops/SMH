package smh.pcm.service;

import com.nbdf.cmd.cm.cmam.service.CMAM00100Service;
import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
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

import org.eclipse.core.internal.filesystem.local.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.MultiLanguage;
import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;

/**
* @file: PCM04700ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04700ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.17
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 05.17.   김애리     최초  생성
*/
@Service
public class PCM04700ServiceImpl extends AbstractNbdfService implements PCM04700Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM04700Dao";	
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired 
    private PCMWipService wipService;

	@Autowired
	private com.nbdf.cmd.cm.cmsy.service.CMSY03100Service serviceDictionary;    
	
	@Autowired
	private CMAM00100Service  CMAM00100Service;
	
    // 상수 정의
 	private final String LOCKTYPE_SPEC = "LotLockinSpec";
 	private final String LOCKING_SPEC = "LockSpecChange";
 	private final String LOCKRELEASE_SPEC = "LockReleaseSpec";
 	private final String COMMENT = "";
 	
 	private final String RCRESULT_PASS = "RCRESULTPASS";
 	private final String RCRESULT_FAIL = "RCRESULTFAIL";
 	
 	// 파라미터
 	private String enterpriseId;		// 회사코드
 	private String plantId;				// 공장코드
 	private String transactionType;		// PCNNO/PRODUCT
 	private String pcnNo;				// PCN No.
 	private String isLotCardPrinted;	// LOT CARD 발행여부
 	private String isSendEmail;			// R/C 이메일 발송여부
 	
 	// 공통 변수
 	private String productDefId;		// 변경전 품목 ID
 	private String productDefVersion;	// 변경전 품목 버전
 	private String processDefId;		// 변경전 라우팅 ID
 	private String processDefVersion;	// 변경전 라우팅 버전
 	private String rcProductDefId;		// 변경후 품목 ID
 	private String rcProductDefversion;	// 변경후 품목 버전
 	private int minPathSequence;		// R/C 가능 최소 pathSequence(minPathSequence보다 작은 PathSequence를 가지고있는 LOT들만 R/C 가능)
 	private Map<String, Object> newProductDefData;
 	
 	private Map<String, Object> paramPcnInfo;
 	

	/**
	 * @fn
	 * @brief : PCNNO 팝업
	 * @remark
* @see smh.pcm.service.PCM04700Service#selectPcnListForRC(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectPcnListForRC(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPcnListForRC", param));
	}
 	
 	
    /**
	 * @fn
	 * @brief : LOT 적용 품목 조회
	 * @remark
* @see smh.pcm.service.PCM04700Service#selectProductDefinitionList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectProductDefinitionList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionList", param));
	}

	/**
	 * @fn
	 * @brief : LOT 적용 PCNNO 조회
	 * @remark
* @see smh.pcm.service.PCM04700Service#selectPcnInfoForRC(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectPcnInfoForRC(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPcnInfoForRC", param));
	}

	/**
	 * @fn
	 * @brief : 적용이력 조회
	 * @remark
* @see smh.pcm.service.PCM04700Service#selectRcApplyHistory(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRcApplyHistory(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRcApplyHistory", param));
	}

	/**
	 * @fn
	 * @brief : RC LOT 대상 목록
	 * @remark
* @see smh.pcm.service.PCM04700Service#selectRcTargetLotList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRcTargetLotList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRcTargetLotList", param));
	}
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.PCM04700Service#SaveRCLot(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void saveRCLot(UiMapDto dto) throws Exception {
    	int result = 0;
    	Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		
		//ds_RCLot
		DataSetMap paramMapRCLot = getParametersDataSetMap(dto, "ds_RCLot");
		
		
		loadParameters(dto);
		
		if(this.transactionType.equals("PCNNO")) {
			loadPcnInfo();
		}
		else if(this.transactionType.equals("PRODUCT")) {
			loadProductInfo();
		}
		
		loadMinPathSequence();
		
		Map<String, Object> param = new HashMap<>();
		param.put("PRODUCTDEFID", this.rcProductDefId);
		param.put("PRODUCTDEFVERSION", this.rcProductDefversion);
		this.newProductDefData = generalDao.selectOne(NAMESAPCECOM + ".selectBasProductdefinitionList", param);
		

		String lotIds = "";
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		for(int i = 0; i < paramMapRCLot.size(); i++)
		{
			Map<String, Object> paramRCLot = paramMapRCLot.get(i);
			
			String lotId = paramRCLot.get("LOTID").toString();
			lotIds += lotId + "<br>";
			
			param.clear();
			param.put("LOTID", lotId);
			Map<String, Object> lotData = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", param);
			
			//유효성 검증
			if( !lotData.get("PROCESSSEGMENTID").toString().equals(paramRCLot.get("PROCESSSEGMENTID").toString())
					|| !lotData.get("USERSEQUENCE").toString().equals(paramRCLot.get("USERSEQUENCE").toString())
					|| !lotData.get("PROCESSSTATE").toString().equals(paramRCLot.get("PROCESSSTATE").toString())
					|| StringUtil.Object2Int(lotData.get("WORKCOUNT")) != StringUtil.Object2Int(paramRCLot.get("WORKCOUNT"))
				) {
				// Lot 을 재조회 후 실행해주세요.{0}
				throw new BizException("ValidLot", lotId);
			}
			
			// Check 재공상태
			if(!lotData.get("LOTSTATE").toString().equals(LotState.InProduction)) 
			{
				if(!lotData.get("LOTSTATE").toString().equals(LotState.InTransit))
				{
					// Lot 상태를 확인하여 주세요.
					throw new BizException("CheckLotState", lotId);
					
				}
			}
						
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
			
			// 사용자별 작업장 통제
			if(!wipService.isAreaInAuthority(lotData.get("AREAID").toString(), true)) {
				// 해당 작업장에 대한 권한이 없습니다. {0}
				throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s  AreaId=%s", lotId, lotData.get("AREAID").toString()));
			}
			
			this.processDefId = lotData.get("PROCESSDEFID").toString();
			this.processDefVersion = lotData.get("PROCESSDEFVERSION").toString();

			String pathID = StringUtil.convertStringToStack(lotData.get("PROCESSPATHSTACK").toString(), ".").get(0);
			param.clear();
			param.put("PROCESSPATHID", pathID);
			Map<String, Object> processPathData = generalDao.selectOne(NAMESAPCECOM + ".selectBasProcesspathList", param);
			
			
			if(StringUtil.Object2Int(processPathData.get("PATHSEQUENCE")) >= this.minPathSequence) {	  
				saveRunningChangeInfo(dto, lotData, "FAIL", txnGroupHistKey);
				Map<String, Object> responseMap = new HashMap<>();
				responseMap.put("LOTID", lotId);
				responseMap.put("RCRESULT", serviceDictionary.selectDictionaryName(RCRESULT_FAIL));
				responseMap.put("RCRESULTID", "FAIL");
				responseDt.add(responseMap);
				
			}
			else {
				saveRunningChangeInfo(dto, lotData, "PASS", txnGroupHistKey); //5(현공정)>=8(minSeq) 가 false 이므로 FA2로 바꿈.  
				changeProductDefVersion(lotData, this.rcProductDefId, this.rcProductDefversion);
				updateLotWorkResult(dto, lotData);
				releaseLotLocking(dto, lotData, LOCKTYPE_SPEC, LOCKING_SPEC, LOCKRELEASE_SPEC, COMMENT);
				lotData.put("ISPRINTLOTCARD","N");
				lotData.put("ISPRINTRCLOTCARD", this.isLotCardPrinted.equals("1") ? "Y" : "N" );	// 카드 발행 여부
				lotData.put("LASTTXNCOMMENT",COMMENT);
				
				updateLot(lotData);
				
				//lotData.getTxnInfo().set(txnInfo.getTransaction());
				//batch.add(lotData, SQLUpsertType.UPDATE);
				
				Map<String, Object> responseMap = new HashMap<>();
				responseMap.put("LOTID", lotId);
				responseMap.put("RCRESULT", serviceDictionary.selectDictionaryName(RCRESULT_PASS)); 
				responseMap.put("RCRESULTID", "PASS");
				responseDt.add(responseMap);
			}
			
		}
		
		if(this.isSendEmail.equals("1") || this.isSendEmail.equals("true")) {
			String content = String.format("PCN No : %s<br>Product Def ID : %s<br>Product Def Version : %s<br>RC Product ID : %s<br>RC Product Def Version : %s<br>LOT ID :<br>%s"
					, this.pcnNo, this.productDefId, this.productDefVersion, this.rcProductDefId, this.rcProductDefversion, lotIds);
			sendEmail(content, paramMapRCLot.size());
		}
		
		param.clear();
		param.put("ITEMID", this.rcProductDefId);
		param.put("ITEMVERSION", this.rcProductDefversion);
		
		generalDao.addUpdate(NAMESAPCE + ".saveBasItemMaster", param);
		
		
		putDataSetMap(dto, responseDt);
    }


	private void sendEmail(String contents, int lotCount) throws Exception{
		
		Map<String, Object> emailMap   = new HashMap<>();
		Map<String, Object> userGroup  = new HashMap<>();
		Map<String, Object> parameters   = new HashMap<>();
		
		String toAddr = "";    	
        String fromAddr = "";        	
        String subject = "";   		
        
		List<Map<String, Object>> userGroupList = generalDao.addSelect(NAMESAPCE + ".selectUserListForRcEmail"); 
		for(int k = 0; k < userGroupList.size(); k++) 
		{
			userGroup = userGroupList.get(k);
			toAddr   = StringUtil.Object2String(userGroup.get("EMAIL_ADDR"));
			if(toAddr.equals("")) continue;
			String languageType = StringUtil.Object2String(userGroup.get("LANGUAGETYPE"));
			
			fromAddr = (String) SessionUtil.getSessionValue("EMAILADDR");
			subject  =  MultiLanguage.getMessage("RCMAILSUBJECT", languageType,  Double.toString(lotCount));
			parameters.put("CONTENT", contents);	
			
			emailMap.put("FROM_ADDR", fromAddr);
			emailMap.put("TO_ADDR", toAddr);
			emailMap.put("SUBJECT", subject);
			emailMap.put("CONTENT_ID", "RCChangeEmail");
			emailMap.put("PARAMETERS", parameters);
			emailMap.put("JOB_SYS_CD", "PCM");
			emailMap.put("ATCH_SRC_KEY", "");
			emailMap.put("ATCH_TY_CD", "");
			
			String rstMsg = CMAM00100Service.emailSend(emailMap);
			
		}
	}


	private void releaseLotLocking(UiMapDto dto, Map<String, Object> lotData, String strLockType, String strLockReason
			, String strReleaseReason, String strReleaseComments) {
		
		String lotId = lotData.get("LOTID").toString();
		String processSegmentId = lotData.get("PROCESSSEGMENTID").toString();
		
//		PCM_LOTLOCKING
		
//		selectPcmLotlocking
		
		Map<String, Object> param = new HashMap<>();
		
		param.put("LOTID", lotId);
		param.put("LOCKINGSTATUS", "Y");
		param.put("PROCESSSEGMENTID", processSegmentId);
		param.put("LOCKINGTYPE", strLockType);
		param.put("LOCKINGCODE", strLockReason);
		
		
		List<Map<String, Object>> lotLockingList = generalDao.addSelect(NAMESAPCEWIP + ".selectPcmLotlocking", param);
		
		for(int i = 0; i < lotLockingList.size(); i++) {
			Map<String, Object> eachLotLockingData = lotLockingList.get(i);
			eachLotLockingData.put("LOCKINGSTATUS", "N");
			eachLotLockingData.put("UNLOCKINGCODE", strReleaseReason);
			eachLotLockingData.put("RELEASECOMMENTS", strReleaseComments);
			
			generalDao.update(NAMESAPCEWIP + ".updatePcmLotlocking", eachLotLockingData);
			
		}
		
		// Lot Locking Count
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotId);

		// Locking LOT 조회
		int lockCount = generalDao.addSelectCount(NAMESAPCEWIP + ".selectLotLockingCount", propertyMap);
		
		if(lockCount == lotLockingList.size() )
		{
			lotData.put("ISLOCKING","N");
		}
	}

	private void updateLotWorkResult(UiMapDto dto, Map<String, Object> lotData) {
		Map<String, Object> param = new HashMap<>();
		
		param.put("LOTID", lotData.get("LOTID"));
		param.put("PRODUCTDEFID", this.productDefId);
		param.put("PRODUCTDEFVERSION", this.productDefVersion);
		param.put("PROCESSDEFID", this.processDefId);
		param.put("PROCESSDEFVERSION", this.processDefVersion);
		param.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		param.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		
		
		List<Map<String, Object>> workResults = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotworkresultList", param);
		
		Stack<String> pathStack = StringUtil.convertStringToStack(lotData.get("PROCESSPATHSTACK").toString(), ".");
		String processPathId = pathStack.firstElement();
		
		for(int i = 0; i < workResults.size(); i++) {
			Map<String, Object> eachData = workResults.get(i);
			eachData.put("PRODUCTDEFID", this.rcProductDefId);
			eachData.put("PRODUCTDEFVERSION", this.rcProductDefversion);
			eachData.put("PROCESSDEFID", this.newProductDefData.get("PROCESSDEFID"));
			eachData.put("PROCESSDEFVERSION", this.newProductDefData.get("PROCESSDEFVERSION"));
			eachData.put("PROCESSPATHID", processPathId); 
			eachData.put("PROCESSPATHSTACK", lotData.get("PROCESSPATHSTACK"));
			generalDao.update(NAMESAPCEWIP + ".updatePcmLotworkresult", eachData);
			
		}
	}

	private void changeProductDefVersion(Map<String, Object> lotData,  String newProductDefId, String newProductDefVersion) {
		Stack<String> pathStack = StringUtil.convertStringToStack(StringUtil.Object2String(lotData.get("PROCESSPATHSTACK")), ".");
		String processPathId = pathStack.firstElement();
		
		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSPATHID", processPathId);
		Map<String, Object> processPathData = generalDao.selectOne(NAMESAPCECOM + ".selectBasProcesspathList", param);
		
		
		Map<String, Object> newProcessPathData = getProcessPathByProcessSegment(
				this.newProductDefData.get("PROCESSDEFID").toString(), this.newProductDefData.get("PROCESSDEFVERSION").toString()
				, processPathData.get("PROCESSSEGMENTID").toString(), processPathData.get("PROCESSSEGMENTVERSION").toString());
		
		pathStack.set(0, newProcessPathData.get("PROCESSPATHID").toString());

		lotData.put("PREVPRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		lotData.put("PREVPRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		lotData.put("PRODUCTDEFID", newProductDefId);
		lotData.put("PRODUCTDEFVERSION", newProductDefVersion);
		lotData.put("PROCESSDEFID", this.newProductDefData.get("PROCESSDEFID"));
		lotData.put("PROCESSDEFVERSION", this.newProductDefData.get("PROCESSDEFVERSION"));
		lotData.put("PROCESSPATHSTACK", StringUtil.convertStackToString(pathStack, "."));
		
		if(pathStack.size() == 1) {
			lotData.put("PROCESSSEGMENTID", newProcessPathData.get("PROCESSSEGMENTID"));
			lotData.put("PROCESSSEGMENTVERSION", newProcessPathData.get("PROCESSSEGMENTVERSION"));
			lotData.put("USERSEQUENCE", newProcessPathData.get("USERSEQUENCE"));
		}
		
	}

	private Map<String, Object> getProcessPathByProcessSegment(String processDefId, String processDefVersion , String processSegmentId, String processSegmentVersion)  {

		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", processDefId);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("PROCESSSEGMENTID", processSegmentId);
		param.put("PROCESSSEGMENTVERSION", processSegmentVersion);
		param.put("VALIDSTATE", PCMConstant.VALIDSTATE_VALID);
		
		List<Map<String, Object>> processPathList = generalDao.addSelect(NAMESAPCECOM + ".selectBasProcesspathList", param); 
		
		if(processPathList.size() == 1) {
			return processPathList.get(0);
		}
		else {
			// 라우팅에서 해당공정을 찾을 수 없습니다. ({0})
			throw new BizException("ProcessPathNotFound"
					, String.format("ProcessDefId = %s  ProcessDefVersion = %s  ProcessSegmentId = %s  ProcessSegmentVersion = %s"  
							,processDefId, processDefVersion, processSegmentId, processSegmentVersion));
		}
	}
	
	private void saveRunningChangeInfo(UiMapDto dto, Map<String, Object> lotData, String changeState, String txnGroupHistKey) {
		
		Map<String, Object> rciData = new HashMap<>();
		
		rciData.put("LOTID", lotData.get("LOTID"));
		rciData.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		rciData.put("PLANTID", lotData.get("PLANTID"));
		rciData.put("PCN_NO", this.pcnNo);
		rciData.put("AREAID", lotData.get("AREAID"));
		rciData.put("PRODUCTDEFID", this.productDefId);
		rciData.put("PRODUCTDEFVERSION", this.productDefVersion);
		rciData.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
		rciData.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		rciData.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		rciData.put("PROCESSSTATE", lotData.get("PROCESSSTATE"));
		rciData.put("TOPRODUCTDEFID", this.rcProductDefId); 
		rciData.put("TOPRODUCTDEFVERSION", this.rcProductDefversion);
		rciData.put("CHANGESTATE", changeState);
		rciData.put("TXNGROUPHISTKEY", txnGroupHistKey);
		
		generalDao.addInsert(NAMESAPCE + ".insertPcmRunningchangeinfo", rciData);
		
	}

	private void loadParameters(UiMapDto dto) {
		
		DataSetMap paramMapPcnInfo = getParametersDataSetMap(dto, "ds_PcnInfo");
		paramPcnInfo = paramMapPcnInfo.get(0);
		
		this.enterpriseId = paramPcnInfo.get("ENTERPRISEID").toString();
		this.plantId = paramPcnInfo.get("PLANTID").toString();
		//this.transactionType = paramPcnInfo.get("TRANSACTIONTYPE").toString();
		this.pcnNo = StringUtil.Object2String(paramPcnInfo.get("PCNNO"));
		this.transactionType = this.pcnNo.equals("") ? "PRODUCT" : "PCNNO";
		this.isLotCardPrinted = paramPcnInfo.get("ISLOTCARDPRINTED").toString();
		this.isSendEmail = paramPcnInfo.get("ISSENDEMAIL").toString();
		
	}
	
	private void loadPcnInfo() {
		// TODO Auto-generated method stub
		Map<String, Object> param = new HashMap<>();
		param.put("PCNNO", this.pcnNo);
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".selectPcnInfoForRC", param);
		if(result.size() == 0) {
			// 변경점 신청서를 찾을 수 없습니다. PCN No = {0}
			throw new BizException("PcnNoNotExists", this.pcnNo);
		}
		this.productDefId =  result.get(0).get("PRODUCTDEFID").toString();
		this.productDefVersion = result.get(0).get("PRODUCTDEFVERSION").toString();
		this.rcProductDefId = result.get(0).get("RCPRODUCTDEFID").toString();
		this.rcProductDefversion = result.get(0).get("RCPRODUCTDEFVERSION").toString();
	}

	private void loadProductInfo() {
		this.productDefId = paramPcnInfo.get("PRODUCTDEFID").toString();
		this.productDefVersion = paramPcnInfo.get("PRODUCTDEFVERSION").toString();
		this.rcProductDefId = paramPcnInfo.get("RCPRODUCTDEFID").toString();
		this.rcProductDefversion = paramPcnInfo.get("RCPRODUCTDEFVERSION").toString();
	}


	private void loadMinPathSequence() {
		
		Map<String, Object> param = new HashMap<>();
		
		param.put("PRODUCTDEFID", this.productDefId);
		param.put("PRODUCTDEFVERSION", this.productDefVersion);
		param.put("RCPRODUCTDEFID", this.rcProductDefId);
		param.put("RCPRODUCTDEFVERSION", this.rcProductDefversion);
		
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".selectMinPathSequenceForRc", param); 
		if(result.size() == 0) {
			// 라우팅 정보를 찾을수 없습니다.({0})
			throw new BizException("checkProcessDef"
					, String.format("ProductDefId = {0}  ProductDefVersion = {1}  R/C ProductDefId = {2}  R/C ProductDefVersion = {3}"
							, this.productDefId, this.productDefVersion, this.rcProductDefId, this.rcProductDefversion));
		}
		this.minPathSequence = Integer.valueOf(result.get(0).get("MIN_PATHSEQUENCE").toString()); //제품의 공정 순서 MIN을 가져옴. 
		
	}

	private void updateLot(Map<String, Object> lot) {
		lot.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lot);
		lot.put("TXNHISTKEY", lot.get("LASTTXNHISTKEY"));
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lot);
	}
}