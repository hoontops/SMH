package smh.qam.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.regex.Pattern;

import javax.transaction.SystemException;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import egovframework.rte.fdl.string.EgovObjectUtil;
import smh.pcm.service.PCMConstant.LotState;
import smh.commons.TxnHistKey;
import smh.pcm.service.PCMWipService;

/**
* @file        : QAMCommonServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMCommonServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.22
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.22  yanghee.kim    최초  생성
*
*/
@Service
public class QAMCommonServiceImpl extends AbstractNbdfService implements QAMCommonService {

    public static final String NAMESPACE = "smh.qam.dao.QAMCommonDao";
    public static final String NAMESPACE_CMD = "com.nbdf.cmd.cm.cmcm.dao.CMD00100Dao";
    public static final String NAMECMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";    
    public static final String NAMESPACE_PCM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACE_PCM_WIP = "smh.pcm.dao.PCMWipDao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired 
    private PCMWipService wipService;
    
    
    /**
    * @fn          : selectAffectLotSequence
    * @brief       : (Override method) affectLot Sequenct 조회
    * @Method Name : selectAffectLotSequence
    * @remark      : 상세설명
* @see smh.qam.service.QAMCommonService#selectAffectLotSequence(Map<String,Object> param)
    */
    @Override
    public int selectAffectLotSequence(Map<String,Object> param) throws Exception {
    	List<Map<String, Object>> maxSequence = generalDao.addSelect(NAMESPACE + ".selectChemicalAffectLotSequence", param);

		int sequence = 0;
		
		if(maxSequence != null && maxSequence.size() > 0 && maxSequence.get(0).get("SEQUENCE") != null)
		{
			sequence = Integer.parseInt(maxSequence.get(0).get("SEQUENCE").toString());	
		}
		
		return sequence + 1;
    }
    
    /**
    * @fn          : InsertAffectLotImpl
    * @brief       : (Override method) AffectLot 저장
    * @Method Name : InsertAffectLotImpl
    * @remark      : 상세설명
* @see smh.qam.service.QAMCommonService#InsertAffectLotImpl
    */  	
  	public void InsertAffectLotImpl(String lotId, String actionType ,String abnocrType, String abnocrNo, String enterpriseId, String plantId) throws Exception {
  		String reasonCodeClassId= null, reasonCode = null, comment= null;
  		Map<String,Object> param =new HashMap<String,Object>();
  		
  		param.put("ABNOCRNO", abnocrNo);
  		param.put("ABNOCRTYPE", abnocrType);
  		param.put("PLANTID", plantId);
  		param.put("ENTERPRISEID", enterpriseId);
  		
  		int affectLotSequence = selectAffectLotSequence(param);
  		
  		switch (abnocrType) {
			case "ChemicalAnalysisInspection": // 약품분석
				reasonCodeClassId = "QCLockInChemical";
				reasonCode = "LockChemicalDrugConcent";
				comment = "SaveChamiclAnalysisAuto";
				break;
				
			case "ReliabilityRegular": // 신뢰성 검증(정기)
				reasonCodeClassId = "QCLockInReliabilityRegular";
				reasonCode = "LockReliablRegNonconfirm";
				comment = "SaveReliabilityRegularAuto";
				break;		
				
			case "ProcessInspection": // 공정수입
				reasonCodeClassId = "QCLockInProcess";
				reasonCode = "LockProcessNonconfirm";
				comment = "SaveOSPInspectionAuto";
				break;			
				
			case "SpillShipmentInspection": // 출하검사 (유출공정)
				reasonCodeClassId = "QCLockInShipment";
				reasonCode = "LockShipmentNonconfirm";
				comment = "SaveShipmentInspectionAuto";
				break;	
				
			case "ReasonShipmentInspection": // 출하검사 (원인공정)
				reasonCodeClassId = "QCLockInShipment";
				reasonCode = "LockShipmentNonconfirm";
				comment = "SaveShipmentInspNCRIssueAuto";
				break;	
				
			case "SelfInspectionTake": // 자주검사 (입고)
				reasonCodeClassId = "QCLockInSelfFinalExamination";
				reasonCode = "LockSelfExamNonconfirm";
				comment = "SaveSelfInspectionTakeNCRIssueAuto";
				break;	
				
			case "SelfInspectionShip": // 자주검사 (출하)
				reasonCodeClassId = "QCLockInSelfFinalExamination";
				reasonCode = "LockSelfExamNonconfirm";
				comment = "SaveSelfInspectionShipNCRIssueAuto";
				break;	
				
			case "FinishInspection": // 최종검사 
				reasonCodeClassId = "QCLockInSelfFinalExamination";
				reasonCode = "LockFinalExamNonconfirm";
				comment = "SaveFinishInspectionNCRIssueAuto";
				break;	
				
			case "QualityStandardInspection": // 품질규격
				reasonCodeClassId = "QCLockInQuality";
				reasonCode = getReasonCode(abnocrNo, abnocrType);
				comment = "SaveQualityInspectionNCRIssueAuto";
				break;	
		}
  		
	  	// ------------------------------------------------------------
		// [AffectLot Data] execute query
		// ------------------------------------------------------------
  		param.put("SEQUENCE", affectLotSequence);
  		param.put("LOTID", lotId);
  		
		Map<String, Object> affectlotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAffectlot", param);
		
		if(affectlotMap != null) {
			throw new BizException("InValidData002", String.format("AbnocrNO = %s,AbnocrType = %s,Sequence = %s,LOTId = %s"
					, abnocrNo, abnocrType, affectLotSequence, lotId));
		}
		
		// ------------------------------------------------------------
		// [Lot Data] execute query
		// ------------------------------------------------------------
		Map<String, Object> lotParamMap = new HashMap<String, Object>();
		lotParamMap.put("LOTID", lotId);
 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESPACE_PCM + ".selectPcmLotList", lotParamMap);
		
 		param.put("AFFECTEDDATE", DateUtil.getNowDateTime());
 		
 		//LotData 없는경우
		if(lotMap == null)
		{
			param.put("PROCESSDEFID", "*");
			param.put("PROCESSDEFVERSION", "*");
			param.put("PROCESSSEGMENTID", "*");
			param.put("PROCESSSEGMENTVERSION", "*");
			param.put("USERSEQUENCE", "*");
			param.put("PRODUCTDEFID", "*");
			param.put("PRODUCTDEFVERSION", "*");
			param.put("AREAID", "*");
		}
		else
		{
			param.put("PROCESSDEFID", lotMap.get("PROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lotMap.get("PROCESSDEFVERSION"));
			param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
			param.put("USERSEQUENCE", lotMap.get("USERSEQUENCE"));
			param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
			param.put("AREAID", lotMap.get("AREAID"));
		}
		
		param.put("REASONCODEID", reasonCode);
		
		//Locking
		if(actionType.contains("LockingLot") && !abnocrType.equals("ChemicalAnalysisInspection")
				&& !abnocrType.equals("RawInspection")&& !abnocrType.equals("ArrivalRawMaterialInspection")
				&& !abnocrType.equals("SubassemblyInspection"))
				//2019-12-26 신뢰성, 출하 자동 LOCKING없지만 기준정보에 맞춰서 진행..
				//&& !abnocrType.equals("ReliabilityNonRegular")&& !abnocrType.equals("ReliabilityRegular")
				//&& !abnocrType.equals("SpillShipmentInspection")&& !abnocrType.equals("ReasonShipmentInspection"))
		{
			// Lot Locking 처리	
			String lockingTxnHistKey = SaveLotLockingImpl(lotId, reasonCodeClassId, reasonCode, comment);
			param.put("LOCKINGTXNHISTKEY", lockingTxnHistKey);		
			param.put("ISLOCKING", "Y");	
			
		}
		
		// ------------------------------------------------------------
		// [AffectLot Data] execute Query
		// ------------------------------------------------------------
		generalDao.addUpdate(NAMESPACE + ".insertQamAffectlot", param);
		
  	}
  	
    //이상발생 저장**************신뢰성
  	private  String getInsertAbnormalOccurrenceReliability(Map<String, Object> map, String abnocrType,String enterpriseId, String plantId) {		
  		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd");
    	String abnormalNO = createSequence("AbnormalSequence", LocalDate.now().format(dateFormat));
  		
  		//ct_abnormaloccerence (to-be :insertQamAbnormaloccurrence) Insert
  		// as-is 에서 abnormalNO, abnocrType 으로 중복 체크 하는 부분 제외
  		Map<String, Object> retMap = new HashMap<String, Object>();
  		String convertColumn = "PLANTID|ENTERPRISEID|PROCESSDEFID|PROCESSDEFVERSION|PROCESSSEGMENTID|PROCESSSEGMENTVERSION|PRODUCTDEFID|PRODUCTDEFVERSION|PROCESSSEGMENTCLASSID|EQUIPMENTID|CHILDEQUIPMENTID|CONSUMABLEDEFID|CONSUMABLEDEFVERSION|REASONCODEID|USERSEQUENCE|AREAID|INSPITEMID|INSPITEMVERSION|DEGREE|DEFECTCODE|QCSEGMENTID";
  		retMap = isNullConvertStr(map, convertColumn);
  		
  		retMap.put("ABNOCRNO", abnormalNO);
  		retMap.put("ABNOCRTYPE", abnocrType);
  		retMap.put("STATE", map.get("STATE"));

  		retMap.put("LOTID", StringUtil.isEmpty(StringUtil.Object2String(map.get("RESOURCEID"))) ? "*" : map.get("RESOURCEID"));
  		retMap.put("PROCESSRELNO", StringUtil.isEmpty(StringUtil.Object2String(map.get("REQUESTNO"))) ? "*" : map.get("REQUESTNO"));
  		
  		retMap.put("LASTTXNID", SessionUtil.getUserId());
  		retMap.put("VALIDSTATE", "Valid");
  		retMap.put("ISNCRISSUE", "Y");
  		
  		generalDao.addUpdate(NAMESPACE + ".insertQamAbnormaloccurrence", retMap);
  		
  		return abnormalNO;
  	}
  
    /**
    * @fn          : getInsertAbnormaloccurrenceData
    * @brief       : (Override method) 이상발생 저장
    * @Method Name : getInsertAbnormaloccurrenceData
    * @remark      : 상세설명
* @see smh.qam.service.QAMCommonService#getInsertAbnormaloccurrenceData
    */    	
  	private String getInsertAbnormaloccurrenceData(Map<String, Object> map, String lotId, String abnormalType, String enterpriseId, String plantId ,String inspDegree ) throws Exception
  	{
  		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd");
    	String abnormalNO = createSequence("AbnormalSequence", LocalDate.now().format(dateFormat));
    	
		// ------------------------------------------------------------
		// [이상발생정보 Data] make Query parameters && execute query
		// ------------------------------------------------------------
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("ABNOCRNO", abnormalNO);
    	param.put("ABNOCRTYPE", abnormalType);
    	
    	Map<String, Object> abnormaloccurrenceData = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", param);
    	
    	if(abnormaloccurrenceData != null) {
    		throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
    	}
    	
    	// ------------------------------------------------------------
		// [Lot Data] execute query
		// ------------------------------------------------------------
		Map<String, Object> lotParamMap = new HashMap<String, Object>();
		lotParamMap.put("LOTID", lotId);
 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESPACE_PCM + ".selectPcmLotList", lotParamMap);

 		
 		if(abnormalType.equals("ProcessInspection"))
		{//공정 수입검사 ProcessrelNo <= degree
 			param.put("PROCESSRELNO", (StringUtil.isNullOrEmpty(StringUtil.Object2String(map.get("DEGREE")))?"*":StringUtil.Object2String(map.get("DEGREE"))));		
		}
		else if (abnormalType.equals("SelfInspectionTake") || abnormalType.equals("SelfInspectionShip") || abnormalType.equals("FinishInspection"))
		{//자주 최종 검사 ProcessrelNo <= ProcessrelNo
			
			param.put("PROCESSRELNO", lotMap.get("PROCESSSEGMENTID"));		
		}
		else
		{
			param.put("PROCESSRELNO", (StringUtil.isNullOrEmpty(StringUtil.Object2String(map.get("REQUESTNO")))?"*":StringUtil.Object2String(map.get("REQUESTNO"))));
		}
 		
 		param.put("PLANTID", (StringUtil.isNullOrEmpty(plantId)?"*":plantId));
 		param.put("ENTERPRISEID", (StringUtil.isNullOrEmpty(enterpriseId)?"*":enterpriseId));
 		
 		//원자재/원자재 가공품 lotid <= 자재LOTID 
		if(abnormalType.equals("RawInspection") || abnormalType.equals("ArrivalRawMaterialInspection"))
		{
			param.put("LOTID", map.get("RESOURCEID"));		
			
		}
		else
		{
			param.put("LOTID", (StringUtil.isNullOrEmpty(lotId)?"*":lotId));
		}
		
		if(lotMap == null)
		{
			param.put("PROCESSDEFID", "*");
			param.put("PROCESSDEFVERSION", "*");
			param.put("PROCESSSEGMENTID", "*");
			param.put("PROCESSSEGMENTVERSION", "*");
			param.put("PRODUCTDEFID", "*");
			param.put("PRODUCTDEFVERSION", "*");
			param.put("USERSEQUENCE", "*");
			param.put("AREAID", "*");
			
		}
		else 
		{
			param.put("PROCESSDEFID", lotMap.get("PROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lotMap.get("PROCESSDEFVERSION"));
			param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
			param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
			param.put("USERSEQUENCE", lotMap.get("USERSEQUENCE"));
			param.put("AREAID", lotMap.get("AREAID"));

		}
		
		param.put("PROCESSSEGMENTCLASSID", StringUtil.isNullOrEmpty(map.get("PROCESSSEGMENTCLASSID"))?"*":StringUtil.Object2String(map.get("PROCESSSEGMENTCLASSID")));
		param.put("EQUIPMENTID", StringUtil.isNullOrEmpty(map.get("EQUIPMENTID"))?"*":StringUtil.Object2String(map.get("EQUIPMENTID")));
		param.put("CHILDEQUIPMENTID", StringUtil.isNullOrEmpty(map.get("CHILDEQUIPMENTID"))?"*":StringUtil.Object2String(map.get("CHILDEQUIPMENTID")));
		param.put("CONSUMABLEDEFID", StringUtil.isNullOrEmpty(map.get("CONSUMABLEDEFID"))?"*":StringUtil.Object2String(map.get("CONSUMABLEDEFID")));
		param.put("CONSUMABLEDEFVERSION", StringUtil.isNullOrEmpty(map.get("CONSUMABLEDEFVERSION"))?"*":StringUtil.Object2String(map.get("CONSUMABLEDEFVERSION")));
		
		param.put("STATE", map.get("STATE"));

		param.put("REASONCODEID", (StringUtil.isNullOrEmpty(StringUtil.Object2String(map.get("REASONCODEID")))?"*":StringUtil.Object2String(map.get("REASONCODEID"))));
		param.put("INSPITEMID", StringUtil.isNullOrEmpty(map.get("INSPITEMID"))?"*":StringUtil.Object2String(map.get("INSPITEMID")));
		param.put("INSPITEMVERSION", StringUtil.isNullOrEmpty(map.get("INSPITEMVERSION"))?"*":StringUtil.Object2String(map.get("INSPITEMVERSION")));

		if(abnormalType.equals("FinishInspection"))
		{
			param.put("DEGREE", inspDegree);
			
		}else
		{
			param.put("DEGREE", StringUtil.isNullOrEmpty(map.get("DEGREE"))?"1":StringUtil.Object2String(map.get("DEGREE")));
		}

		param.put("DEFECTCODE", StringUtil.isNullOrEmpty(map.get("DEFECTCODE"))?"*":StringUtil.Object2String(map.get("DEFECTCODE")));
		param.put("QCSEGMENTID", StringUtil.isNullOrEmpty(map.get("QCSEGMENTID"))?"*":StringUtil.Object2String(map.get("QCSEGMENTID")));
		
		param.put("NCRISSUEDATE", getCurrentSystemTime("yyyyMMddHHmmss"));
		param.put("ISNCRISSUE", "Y");
		param.put("REASONCONSUMABLEDEFID", StringUtil.Object2String(map.get("REASONCONSUMABLEDEFID")));
		param.put("REASONCONSUMABLEDEFVERSION", StringUtil.Object2String(map.get("REASONCONSUMABLEDEFVERSION")));
		param.put("REASONCONSUMABLELOTID", StringUtil.Object2String(map.get("REASONCONSUMABLELOTID")));

		//원인공정 두가지 컬럼명으로 사용 REASONSEGMENTID 있으면 => REASONSEGMENTID
		//										 없으면 => REASONPROCESSSEGMENTID 체크 
		//																			REASONPROCESSSEGMENTID 있으면 => REASONPROCESSSEGMENTID
		//																								      없으면 => null
		
		param.put("REASONSEGMENTID", StringUtil.isNullOrEmpty(map.get("REASONSEGMENTID"))?StringUtil.Object2String(map.get("REASONPROCESSSEGMENTID")):StringUtil.Object2String(map.get("REASONSEGMENTID")));
		param.put("REASONAREAID", StringUtil.Object2String(map.get("REASONAREAID")));
		param.put("VALIDSTATE", "Valid");

		generalDao.addUpdate(NAMESPACE + ".insertQamAbnormalOccurrence", param);
		
    	
  		return abnormalNO;
  	}
  	
  	private static Map<String, Object> isNullConvertStr(Map<String, Object> map, String convertColumn) {
		Map<String, Object> retMap = new HashMap<String, Object>();
        Iterator<String> keys = map.keySet().iterator();
        String [] convertColumnArr = convertColumn.split("|");
        
        while( keys.hasNext()) {
            String key = keys.next();
            String value = StringUtil.Object2String(map.get(key));
            
           for(String str : convertColumnArr) {
        	   if(str.equals(key) && StringUtil.isEmpty(value)) {
               		value = "*";
               }
           }
            
            retMap.put(key, value);
        }
        return retMap;
	}    

  	/**
     * @fn          : selectSequence
     * @brief       : (Override method) 채번 조회
     * @Method Name : selectSequence
     * @remark      : 상세설명
     * @see smh.qam.service.QAMCommonService#selectSequence
     */   	
  	@Override
     public int selectSequence(String idclassid, Object... keys) {
     	Map<String, Object> param = new HashMap<String, Object>();
     	
     	StringBuffer sb = new StringBuffer();
     	int iLastserialno = 1;
 		
 		for (Object key : keys) {
 			sb.append(key);
 		}
 		
 		// ------------------------------------------------------------
 		// make Query parameters
 		// ------------------------------------------------------------
     	param.put("IDCLASSID", idclassid);
 		param.put("PREFIX", sb.toString());
     	
     	Map<String, Object> seqMap = generalDao.addSelectOneMap(NAMESPACE + ".selectSequence", param);
     	
     	// ------------------------------------------------------------
 		// execute Query
 		// ------------------------------------------------------------
     	if(seqMap != null && seqMap.get("LASTSERIALNO") != null) {
     		iLastserialno = Integer.parseInt(StringUtil.Object2String(seqMap.get("LASTSERIALNO"))) + 1; 
     		param.put("LASTSERIALNO", iLastserialno);
     		generalDao.addUpdate(NAMESPACE_CMD + ".updateBasIdclassserial", param);
     		
     	} else {
     		param.put("LASTSERIALNO", iLastserialno);
     		generalDao.addUpdate(NAMESPACE_CMD + ".insertBasIdclassserial", param);
     		
     	}
     	return iLastserialno;
     }
     
  	/**
     * @fn          : createSequence
     * @brief       : (Override method) 채번 생성
     * @Method Name : createSequence
     * @remark      : 상세설명
     * @see smh.qam.service.QAMCommonService#createSequence
     */   	
     @Override
     public String createSequence(String idclassid, int n, Object... keys) {
     	Map<String, Object> param = new HashMap<String, Object>();
     	
     	StringBuffer sb = new StringBuffer();
     	int iLastserialno = 1;
 		
 		for (Object key : keys) {
 			sb.append(key);
 		}
 		
 		// ------------------------------------------------------------
 		// make Query parameters
 		// ------------------------------------------------------------
     	param.put("IDCLASSID", idclassid);
 		param.put("PREFIX", sb.toString());
     	
     	Map<String, Object> seqMap = generalDao.addSelectOneMap(NAMESPACE + ".selectSequence", param);
     	
     	// ------------------------------------------------------------
 		// execute Query
 		// ------------------------------------------------------------
     	if(seqMap != null && seqMap.get("LASTSERIALNO") != null) {
     		iLastserialno = Integer.parseInt(StringUtil.Object2String(seqMap.get("LASTSERIALNO"))) + 1; 
     		param.put("LASTSERIALNO", iLastserialno);
     		generalDao.addUpdate(NAMESPACE_CMD + ".updateBasIdclassserial", param);
     		
     	} else {
     		param.put("LASTSERIALNO", iLastserialno);
     		generalDao.addUpdate(NAMESPACE_CMD + ".insertBasIdclassserial", param);
     		
     	}
     	
     	// ------------------------------------------------------------
 		// return value
 		// ------------------------------------------------------------
     	sb.append(String.format("%0"+n+"d", iLastserialno));
     	return sb.toString();
     }
     
    /**
    * @fn          : createSequence
    * @brief       : (overloading ) 채번 생성
    * @Method Name : createSequence
    * @remark      : 상세설명
* @see smh.qam.service.QAMCommonService#createSequence
    */   	
     @Override
    public String createSequence(String idclassid, Object... keys) {
    	return createSequence(idclassid, 5, keys);
    }
    
    /**
    * @fn          : getActionType
    * @brief       : (Override method) 검사에서 qcGrade를 파라미터로 받아 Action을 구한다. 원자재, 원자재 가공품, 공정수입, 출하
    * @Method Name : getActionType
    * @remark      : 
* @see smh.qam.service.QAMCommonService#getActionType
    */    
    public String getActionType(String enterpriseId, String plantId, String qcGrade) throws Exception
    {
    	String actionType = null;

        if(!StringUtil.isNullOrEmpty(qcGrade))
        {
            Map<String,Object> param = new HashMap<String, Object>();
            param.put("ENTERPRISEID", enterpriseId);
            param.put("PLANTID", plantId);
            param.put("QCGRADE", qcGrade);

            //NCR 기준을 조회
            List<Map<String, Object>> actionTypeString = generalDao.addSelect(NAMESPACE + ".selectGetInspResultActionType", param);

            if( actionTypeString != null && actionTypeString.size() > 0 && actionTypeString.get(0).get("ACTIONTYPE")!=null)
            {
                actionType = actionTypeString.get(0).get("ACTIONTYPE").toString();
            }
            else
            {
                //"조치등급이 없습니다.(조치등급:{0})"
                throw new BizException("NoQCGradeExceptionItem", qcGrade);
            }
        }

        return actionType;
    }

    /**
    * @fn          : doActionAndGetIsSendEmailShipmentInspection
    * @brief       : (Override method) 검사에서 qcGrade를 파라미터로 받아 Action을 구한다. 원자재, 원자재 가공품, 공정수입, 출하
    * @Method Name : doActionAndGetIsSendEmailShipmentInspection
    * @remark      : asis ==>DoActionAndGetIsSendEmailShipmentInspection
* @see smh.qam.service.QAMCommonService#doActionAndGetIsSendEmailShipmentInspection
    */  
	public Boolean doActionAndGetIsSendEmailShipmentInspection(String actionType, Map<String, Object> paramMap, Map<String, Object> lot, String lotId, String abnocrType, String enterpriseId, String plantId, Map<String, Object> dataMap) throws Exception
	{
		Boolean isSendEmail = false;
		
		if(actionType != null)
		{			
			String abnormalNO ="";
			
			if(actionType.contains("NCR")) 
			{//이상발생 저장	
				abnormalNO = insertAbnormalOccurrenceShipmentInspAuto(paramMap, dataMap, lot, abnocrType);	
			}
			
			if(actionType.contains("AffectLot")) 
			{//affectLot 추가
			
				if(StringUtil.isNullOrEmpty(abnormalNO))
				{
					//이상 발생 하지않아 이상발생 번호 없는 경우
					throw new BizException("NoNCRNumber");//이상 발생 번호가 없습니다.				
				}
				
				InsertAffectLotImpl(lotId, actionType , abnocrType, abnormalNO, enterpriseId, plantId); 
				
			}
			
			if(actionType.contains("SendEMail")) 
			{//SendEmail
				isSendEmail = true;			
			}
		}
		
		return isSendEmail;
	}

    /**
    * @fn          : insertAbnormalOccurrenceShipmentInspAuto
    * @brief       : (Override method) 이상발생 저장 - 출하검사 - 자동 car발행
    * @Method Name : insertAbnormalOccurrenceShipmentInspAuto
    * @remark      : asis ==>insertAbnormalOccurrenceShipmentInspAuto
* @see smh.qam.service.QAMCommonService#insertAbnormalOccurrenceShipmentInspAuto
    */ 	
	public String insertAbnormalOccurrenceShipmentInspAuto(Map<String, Object> paramMap, Map<String, Object> dataMap, Map<String, Object> lotMap, String abnormalType) throws Exception 
	{
  		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd");
    	String abnormalNO = createSequence("AbnormalSequence", LocalDate.now().format(dateFormat));
		
        Map<String, Object> abnormalMap = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
        param.put("ABNOCRNO",   abnormalNO);
        param.put("ABNOCRTYPE", abnormalType);
        		
		abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", param);		
		
		if(abnormalMap != null)
		{
			throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
		}
		
		String finalInspAreaId = (String)dataMap.get("AREAID");
		String finalInspProcessSegmentId = (String) dataMap.get("PROCESSSEGMENTID");
		String finalInspProcessSegmentVersion = (String)dataMap.get("PROCESSSEGMENTVERSION");
		String finalInspUserSequecne = (String)dataMap.get("USERSEQUENCE");
		
		abnormalMap  = new HashMap<String, Object>();
		abnormalMap.put("ABNOCRNO",                      abnormalNO);
		abnormalMap.put("ABNOCRTYPE",                    abnormalType);                                                        
		abnormalMap.put("PLANTID",                       lotMap.get("PLANTID"));
		abnormalMap.put("ENTERPRISEID",                  lotMap.get("ENTERPRISEID"));
		abnormalMap.put("LOTID",                         paramMap.get("RESOURCEID"));
		abnormalMap.put("PROCESSRELNO",                  "*");                                                        
		abnormalMap.put("PROCESSDEFID",                  lotMap.get("PROCESSDEFID"));
		abnormalMap.put("PROCESSDEFVERSION",             lotMap.get("PROCESSDEFVERSION"));                                                        
		abnormalMap.put("PROCESSSEGMENTID",              finalInspProcessSegmentId);
		abnormalMap.put("PROCESSSEGMENTVERSION",         finalInspProcessSegmentVersion);
		abnormalMap.put("PRODUCTDEFID",                  lotMap.get("PRODUCTDEFID"));
		abnormalMap.put("PRODUCTDEFVERSION",             lotMap.get("PRODUCTDEFVERSION"));                                                        
		abnormalMap.put("PROCESSSEGMENTCLASSID",         StringUtil.isNullOrEmpty(paramMap.get("PROCESSSEGMENTCLASSID"))?"*":paramMap.get("PROCESSSEGMENTCLASSID"));
		abnormalMap.put("EQUIPMENTID",                   lotMap.get("EQUIPMENTID"));
		abnormalMap.put("CHILDEQUIPMENTID",              paramMap.get("CHILDEQUIPMENTID"));                                                        
		abnormalMap.put("CONSUMABLEDEFID",               StringUtil.isNullOrEmpty(paramMap.get("CONSUMABLEDEFID"))?"*":paramMap.get("CONSUMABLEDEFID"));
		abnormalMap.put("CONSUMABLEDEFVERSION",          StringUtil.isNullOrEmpty(paramMap.get("CONSUMABLEDEFVERSION"))?"*":paramMap.get("CONSUMABLEDEFVERSION"));
        abnormalMap.put("STATE",                         paramMap.get("STATE"));
		abnormalMap.put("REASONCODEID",                  "LockShipmentNonconfirm");
		abnormalMap.put("USERSEQUENCE",                  finalInspUserSequecne);
		abnormalMap.put("AREAID",                        finalInspAreaId);
		abnormalMap.put("DEGREE",                        paramMap.get("DEGREE"));
		abnormalMap.put("DEFECTCODE",                    paramMap.get("DEFECTCODE"));
		abnormalMap.put("QCSEGMENTID",                   paramMap.get("QCSEGMENTID"));                                                        
		abnormalMap.put("NCRISSUEDATE",                  getCurrentSystemTime("yyyyMMddHHmmss")); //getCurrentSystemTime("yyyyMMdd"));
		abnormalMap.put("ISNCRISSUE",                    "Y");                                                        
		//자동 NCR 발행 이상발생 최종으로                         
		abnormalMap.put("REASONCONSUMABLEDEFID",         lotMap.get("PRODUCTDEFID"));
		abnormalMap.put("REASONCONSUMABLEDEFVERSION",    lotMap.get("PRODUCTDEFVERSION"));
		abnormalMap.put("REASONCONSUMABLELOTID",         paramMap.get("RESOURCEID"));
		abnormalMap.put("REASONSEGMENTID",               finalInspProcessSegmentId);
		abnormalMap.put("REASONAREAID",                  finalInspAreaId);
		abnormalMap.put("VALIDSTATE",                    "Valid");
		
		generalDao.addUpdate(NAMESPACE + ".insertQamAbnormalOccurrence", abnormalMap);		
		
		dataMap.put("ABNOCRNO",   abnormalNO);
		dataMap.put("ABNOCRTYPE", abnormalType);
		
		saveCARRequestAuto(dataMap);
		
		return abnormalNO;
		
	}

    /**
    * @fn          : saveCARRequestAuto
    * @brief       : (Override method) 이상발생 저장 - 출하검사 - 인터플렉스 자동 car발행
    * @Method Name : saveCARRequestAuto
    * @remark      : asis ==>insertCARRequestAuto
* @see smh.qam.service.QAMCommonService#saveCARRequestAuto
    */
	public void saveCARRequestAuto(Map<String, Object> paramMap ) throws Exception
	{
		Map<String, Object> carMap = new HashMap<String, Object>();
		
		String abnocrno = (String) paramMap.get("ABNOCRNO");
		String abnocrtype = (String) paramMap.get("ABNOCRTYPE");
		
		carMap.put("ABNOCRNO",   abnocrno);
		carMap.put("ABNOCRTYPE", abnocrtype);
		carMap.put("SEQUENCE",   1);
        
		carMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamCarRequestInfo", carMap);
		
		if (carMap == null) 
		{
			insertCarRequestAuto(paramMap);
		}	

		updateAbnormalReqCompAuto(abnocrno, abnocrtype);

	}

    /**
    * @fn          : insertCarRequest
    * @brief       : (Override method) CAR 요청정보 등록
    * @Method Name : insertCarRequest
    * @remark      : asis ==>getRequestInsertAutoData
* @see smh.qam.service.QAMCommonService#insertCarRequestAuto
    */	
	private void insertCarRequestAuto(Map<String, Object> paramMap) throws Exception
	{
		Map<String, Object> carMap = new HashMap<String, Object>();
		carMap.put("ABNOCRNO",          paramMap.get("ABNOCRNO"));
		carMap.put("ABNOCRTYPE",        paramMap.get("ABNOCRTYPE"));
		carMap.put("SEQUENCE",          1);				
		carMap.put("CARREQUESTDATE",    paramMap.get("CARREQUESTDATE"));
		carMap.put("ISREQUESTMEASURES", paramMap.get("ISREQUESTMEASURES"));
		carMap.put("CHARGERID",         paramMap.get("CHARGERID"));
		carMap.put("STATE",             paramMap.get("STATE"));
		carMap.put("PLANTID",           paramMap.get("PLANTID"));
		carMap.put("ENTERPRISEID",      paramMap.get("ENTERPRISEID"));
		
		generalDao.addUpdate(NAMESPACE + ".insertQamCarRequest", carMap);
	}

    /**
    * @fn          : insertCarRequest
    * @brief       : (Override method) car 자동 발행시 이상 발생 번호와 타입을 받음
    * @Method Name : insertCarRequest
    * @remark      : asis ==>getAbnormalUpdateReqCompAuto
* @see smh.qam.service.QAMCommonService#updateAbnormalReqCompAuto
    */	
	private void updateAbnormalReqCompAuto(String abnormalNO, String abnormalType) throws Exception
	{
		Map<String, Object> abnormalMap = new HashMap<String, Object>();
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ABNOCRNO",   abnormalNO);
		param.put("ABNOCRTYPE", abnormalType);
		
		abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", param);		
		
		if(abnormalMap == null)
		{
			throw new BizException("InValidData001", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
		}
		
		abnormalMap.put("STATE", "CARRequestCompleted");
		
		generalDao.addUpdate(NAMESPACE + ".updateQamAbnormalOccurrence", abnormalMap);
	}

    /**
    * @fn          : getAbnormalNO
    * @brief       : (Override method) 이상발생번호
    * @Method Name : getAbnormalNO
    * @remark      : asis ==> GetAbnormalNO
* @see smh.qam.service.QAMCommonService#getAbnormalNO
    */	
	public String getAbnormalNO() throws Exception
	{		
		String sequence = createAbnormalNO();
		return sequence;
	}
	
    /**
    * @fn          : createAbnormalNO
    * @brief       : (Override method) 이상발생번호 채번 :오늘날짜(yyyyMMdd) + Serial
    * @Method Name : createAbnormalNO
    * @remark      : asis ==> CreateAbnormalNO
* @see smh.qam.service.QAMCommonService#createAbnormalNO
    */	
	public String createAbnormalNO() throws Exception
	{
		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMECMSA + ".selectCurrentSystemTime", "");
        String sToday = systemDate.get(0).get("TODATE").toString();
		
		//List<String> idList = IdService.createId("AbnormalSequence", 1, list, trans);
		String sequence = createSequence("AbnormalSequence", sToday);
		
  		return sequence;
	}

    /**
    * @fn          : getCurrentSystemTime
    * @brief       : (Override method) 서버현재시간
    * @Method Name : getCurrentSystemTime
    * @remark      : 상세설명
* @see smh.qam.service.QAMCommonService#getCurrentSystemTime
    */
    public Date getCurrentSystemTime(String strDateFormat) throws Exception
    {
        List<Map<String, Object>> systemDate = generalDao.addSelect(NAMECMSA + ".selectCurrentSystemTime", "");
        String sToday = systemDate.get(0).get("TODATE").toString();
        SimpleDateFormat dateFormat = new SimpleDateFormat(strDateFormat);
        Date nowDate = dateFormat.parse(sToday);
        
        return nowDate;
    }

    /**
    * @fn          : getLotIsOSPInspControl
    * @brief       : (Override method) LOT의 작업자원정보의 외주검사여부
    * @Method Name : getLotIsOSPInspControl
    * @remark      : 상세설명
* @see smh.qam.service.QAMCommonService#getLotIsOSPInspControl
    */
    public String getLotIsOSPInspControl(String lotId) throws Exception
    {
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("LOTID", lotId);    
    	return generalDao.addSelectOne(NAMESPACE + ".selectLotIsOSPInspControl", param);
    }

    
    
    
    // ------------------------------------------------------------
 	// [권혜영] 추가 함수
 	// ------------------------------------------------------------
    
    /**
     * @fn
     * @brief (Override method) 약품, 풀질 규격, 신뢰성 검사에서 decisionDegree로  qcGrade를 구한 후 actionType을 구한다. 
     * @remark 
     * @see smh.qam.service.QAMCommonService#getActionTypeByDecisionDegree(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public String getActionTypeByDecisionDegree(Map<String, Object> map, String inspectionClassId, String enterpriseId, String plantId, String decisionDegree) throws Exception {
    	String qcGrade = null;
		String actionType = null;
		
		qcGrade = getQCGradeByDecisionDegree(map, enterpriseId, plantId, inspectionClassId, decisionDegree);
		
		if(qcGrade != null)
		{
			actionType = getActionType(enterpriseId, plantId, qcGrade);
		}
		
		return actionType;
    }
    
    /**
     * @fn
     * @brief (Override method) decisionDegree를 넘겨받아 qcGrade를 구한다. 
     * @remark 
     * @see smh.qam.service.QAMCommonService#getQCGradeByDecisionDegree(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public String getQCGradeByDecisionDegree(Map<String, Object> map, String enterpriseId, String plantId, String inspectionClassId, String decisionDegree) throws Exception {
    	String qcGrade = null; 
		
		Map<String,Object> param =new HashMap<>();
		param.put("ENTERPRISEID", enterpriseId);	
		param.put("PLANTID", plantId);	
		param.put("INSPECTIONCLASSID", inspectionClassId);	
		param.put("NCRDECISIONDEGREE", decisionDegree);	

		//NCR 기준을 조회
		List<Map<String, Object>> qcGradeString = generalDao.addSelect(NAMESPACE + ".selectNCRCheckBasis", param);
		
		if( qcGradeString != null && qcGradeString.size() > 0 && qcGradeString.get(0) != null)
		{	
			qcGrade = qcGradeString.get(0).get("QCGRADE").toString();
		}
		else
		{
			//유태근전용 ㅡㅡ
			String inspItemName = StringUtil.Object2String(map.get("INSPITEMNAME"));
			if(StringUtil.isNullOrEmpty(map.get("INSPITEMNAME"))) {
				inspItemName = StringUtil.Object2String(map.get("CHEMICALNAME"));
			}
			// "판정조건이 없습니다.(검사항목명:{0})"
			throw new BizException("NoNCRStandardExceptionItem", inspItemName);	
		}
		
		return qcGrade;
    }
    
    /**
     * @fn
     * @brief (Override method) ActionType에 따른 action을 취한다. Lot이 없는경우 lotId 파라미터 => null 
     * @remark 
     * @see smh.qam.service.QAMCommonService#doActionAndGetIsSendEmail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public boolean  doActionAndGetIsSendEmail(String actionType, Map<String, Object> map, String lotId, String abnocrType, String enterpriseId, String plantId, String inspDegree) throws Exception{
    	Boolean isSendEmail = false;
    	Map<String, Object> retMap = doActionAndGetIsSendEmail(map, actionType, lotId, abnocrType, enterpriseId, plantId, inspDegree, true);
    	
    	if(retMap != null) {
    		Object oIsSendMail = retMap.get("ISSENDEMAIL") ;
    		if(oIsSendMail != null) {
    			isSendEmail = Boolean.valueOf(oIsSendMail.toString());
    		}
    	}
    	return isSendEmail;
    }
    
    /**
     * @fn
     * @brief (overloading ) ActionType에 따른 action을 취한다. Lot이 없는경우 lotId 파라미터 => null 
     * @remark 
     * @see smh.qam.service.QAMCommonService#doActionAndGetIsSendEmail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public Map<String, Object>  doActionAndGetIsSendEmail(Map<String, Object> map, String actionType, String lotId, String abnocrType, String enterpriseId, String plantId, String inspDegree, Boolean isAbnorNo) throws Exception{
    	Map<String, Object> retMap = new HashMap<String, Object>();
    	Boolean isSendEmail = false;
    	String abnorNo = "";
		
		if(actionType != null)
		{
			if(actionType.contains("NCR")) 
			{//이상발생 저장	
				/*if(!actionType.equals("ReliabilityRegular") || !actionType.equals("ReliabilityNonRegular") 
						|| (actionType.equals("ReliabilityRegular") && row.getString("ISNCRPUBLISH").equals("Y") ) 
						|| (actionType.equals("ReliabilityNonRegular") && row.getString("ISNCRPUBLISH").equals("Y")))
				{
					abnorNo = getInsertAbnormaloccurrenceData(row, lotId ,abnocrType, enterpriseId, plantId, txnInfo);	
				}*/
				
				if(abnocrType.equals("ReliabilityRegular") || abnocrType.equals("ReliabilityNonRegular") || abnocrType.equals("BBTReliability"))
				{
					abnorNo = getInsertAbnormalOccurrenceReliability(map, abnocrType, enterpriseId, plantId);
				}
				else
				{
					abnorNo = getInsertAbnormaloccurrenceData(map, lotId ,abnocrType, enterpriseId, plantId, inspDegree);
				}
			}
			
			if(actionType.contains("AffectLot") && !abnocrType.equals("RawInspection") && !abnocrType.equals("ArrivalRawMaterialInspection")) 
			{//affectLot 추가
				if (!isAbnorNo)
				{
					if(StringUtil.isNullOrEmpty(abnorNo))
					{
						//이상 발생 하지않아 이상발생 번호 없는 경우
						throw new BizException("NoNCRNumber");//이상 발생 번호가 없습니다.				
					}
				}

				if(abnocrType.equals("ChemicalAnalysisInspection") || abnocrType.equals("WaterInspection"))
				{//약품 수질 검사의 경우 => 그 회차 사이에 진행된 Lot 모두 affect,Locking
				 // 수질 검사 abnocrType 등록안됨
					
					// 정기건일때만 진행
					if ("Period".equals(map.get("PMTYPE")))
					{
						Map<String,Object> param =new HashMap<>();
						param.put("ENTERPRISEID", enterpriseId);	
						param.put("PLANTID", plantId);	
						param.put("INSPECTIONCLASSID", map.get("CHEMICALWATERTYPE"));	
						param.put("INSPITEMCLASSID", map.get("CHILDEQUIPMENTID"));	
						param.put("INSPITEMID", map.get("INSPITEMID"));	
						
						//사이클 타임  조회
						List<Map<String, Object>> cycleTable =  generalDao.addSelect(NAMESPACE + ".selectNGCycleTime", param);
						
						String degree = StringUtil.Object2String(map.get("DEGREE"));
						
						//파라미터로 넘길 lot 작업시작 시간 범위 
						//affectLot 등록 범위 그 회차의 전 회차시간 ~ 현재 회차시간 1분전까지
						//ex 1회차 09:30
						//	 2회차 11:30
						//	 3회차 13:30
						//2회차 검사 NG => 09:30 ~ 11:29분 까지 affectLot 등록
						String strfromWorktime ="";
						String strtoWorkTime ="";
						
						//년월일시분초 포맷
						SimpleDateFormat allFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
						
						//마지막 회차의 시간
						String strlastTimeCycle = cycleTable.get(cycleTable.size()-1).get("TIMECYCLE").toString();
						
						for (Map<String, Object> cycleMap : cycleTable) {
							
						      //검사 한 회차가 맞을때
				               if (cycleMap.get("CYCLESEQUENCE").toString().equals(degree))
				                {         	   
				            	   //회차의 시간 
				            	   //Date timeCycle =new SimpleDateFormat("HH:mm").parse(map.get("TIMECYCLE").toString());	      	
				            	   
				            	   //전 회차의 시간  
				            	   //Date beforetimeCycle =new SimpleDateFormat("HH:mm").parse(map.get("BEFORETIMECYCLE").toString());
				            	   
				            	   //분석일 년월일
				            	   //Date analysisDate =new SimpleDateFormat("yyyy-MM-dd").parse(row.getString("ANALYSISDATE"));
				            	   
				            	   //회차의 시간 string
				            	   String strtimeCycle =cycleMap.get("TIMECYCLE").toString();
				            	  //전 회차의 시간  string
				            	   String strbeforetimeCycle =null;
				            	   if(cycleMap.get("BEFORETIMECYCLE") != null)
				            	   {
				            		   strbeforetimeCycle =cycleMap.get("BEFORETIMECYCLE").toString();
				            	   }
				            	   
				            	  //분석일 년월일 string
				            	   String stranalysisDate = StringUtil.Object2String(map.get("ANALYSISDATE"));

				            	   Date dateToWorkTime = allFormat.parse(stranalysisDate + " " + strtimeCycle);
				            	   Calendar calToWorkTime = Calendar.getInstance();
				            	   calToWorkTime.setTime(dateToWorkTime);
				            	   calToWorkTime.add(Calendar.MINUTE, -1);

				            	   strtoWorkTime = allFormat.format(calToWorkTime.getTime());
				            	   
				                    if (strbeforetimeCycle==null)
				                    {//BEFORETIMECYCLE가 없을 때 = 첫번째 회차에서 이상 발생시 (마지막 row의 TIMECYCLE을 fromWorkTime으로 설정)
				                    	
				                        strfromWorktime = stranalysisDate +" "+strlastTimeCycle;
				                        
				                        Calendar calFromWorkTime = Calendar.getInstance();
				                        calFromWorkTime.setTime(allFormat.parse(strfromWorktime));
				 	            	   
				                        //calFromWorkTime > calToWorkTime
				                        if (calFromWorkTime.compareTo(calToWorkTime) == 1)
				                        {//마지막 row의 측정시간이 첫번째 회차보다 늦은시간을때 
				                         //ex) 1회차 오전 8:00...12회차 23:30 -> 8-11 23:30 ~ 8-12 8:00	                          
				                          calFromWorkTime.add(Calendar.DATE, -1);
				                          strfromWorktime = allFormat.format(calFromWorkTime.getTime());
				                        }                
				                    }
				                    else
				                    {
				                    	strfromWorktime = stranalysisDate +" "+strbeforetimeCycle;
				                    }

				                    break;
				                }
							}
						
						Map<String,Object> param2 =new HashMap<>();
						param2.put("ENTERPRISEID", enterpriseId);	
						param2.put("PLANTID", plantId);	
						param2.put("ABNOCRNO", abnorNo);	
						param2.put("ABNOCRTYPE", abnocrType);	
						param2.put("EQUIPMENTID", StringUtil.Object2String(map.get("EQUIPMENTID")));	
						param2.put("FROMWORKTIME", strfromWorktime);	
						param2.put("TOWORKTIME", strtoWorkTime);	
						
						//사이클 타임  조회
						List<Map<String, Object>> autoAffectLot =  generalDao.addSelect(NAMESPACE + ".selecToAffectLotCycleTime", param2);
						
						if(autoAffectLot != null && autoAffectLot.size() > 0)
						{
							for (Map<String, Object> map2 : autoAffectLot) {
								
								InsertAffectLotImpl(map2.get("LOTID").toString(), actionType , abnocrType, abnorNo, enterpriseId, plantId); 
							}
							
						}
					}
									
				}
				else if (actionType.equals("ReliabilityRegular"))
				{
					Map<String,Object> param =new HashMap<>();
					param.put("LOTID", lotId);	
					//파라미터 타입 테스트필요
					param.put("REQUESTTIME", StringUtil.Object2String(map.get("REQUESTTIME")));	
		
					//affectLot조회
					List<Map<String, Object>> toAffectList = generalDao.addSelect(NAMESPACE + ".selectAffectLotReliability", param);
					
					if(toAffectList != null && toAffectList.size() > 0)
					{
						for (Map<String, Object> toAffectMap : toAffectList) {
							
							InsertAffectLotImpl(toAffectMap.get("LOTID").toString(), actionType , abnocrType, abnorNo, enterpriseId, plantId); 
						}
						
					}
				}			
				else
				{
					InsertAffectLotImpl(lotId, actionType , abnocrType, abnorNo, enterpriseId, plantId ); 
				}
			}
			
			if(actionType.contains("SendEMail")) 
			{//SendEmail
				isSendEmail = true;			
			}
			
		}
		
		retMap.put("ISSENDEMAIL", isSendEmail);
		retMap.put("ABNORNO", abnorNo);
		return retMap;
    }
    
    /**
     * @fn
     * @brief (Override method) 신뢰성 의뢰(정기) 처리 
     * @remark 
     * @see smh.qam.service.QAMCommonService#CreateQcReliablityRequest(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void createQcReliablityRequest(UiMapDto dto, String strEnterpriseid ,String strPlantid , String strLotid        ,String strOspreceiptuser , boolean isType) throws Exception {
		Map<String, Object> param = new HashMap<>();
		
		// ------------------------------------------------------------
		// [User Data] execute query 
		// ------------------------------------------------------------
		param.put("USER_ID", strOspreceiptuser);
 		Map<String, Object> userMap = generalDao.addSelectOneMap(NAMESPACE + ".selectCmdUsers", param);
 		
 		String today = DateUtil.getNowDate("yyyyMMdd");
 		String strRequestNo = createSequence("ReliabilitySequence", strPlantid, today);
		
 		// ------------------------------------------------------------
		// make Query parameters
		// ------------------------------------------------------------
 		param.put("REQUESTNO", strRequestNo);
		param.put("ENTERPRISEID", strEnterpriseid);
		param.put("PLANTID", strPlantid);
		param.put("RELIABILITYTYPE", "Regular");
 		param.put("REQUESTDATE", today);
 		param.put("MEASURECOMPLETIONDATE", today);
 		param.put("VALIDSTATE", "Valid");
		
		if(userMap == null)
		{
			param.put("REQUESTOR", strOspreceiptuser); //의뢰자
			param.put("REQUESTDEPT", "Equipment Interface"); //의뢰부서
			param.put("REQUESTORJOBPOSITION", "System"); //의뢰자 직책		
			param.put("REQUESTMOBILENO", ""); //의뢰자 휴대폰번호
			
		} 
		else
		{
			param.put("REQUESTOR", userMap.get("USER_NM")); //의뢰자
			param.put("REQUESTDEPT", userMap.get("DEPT_NM")); //의뢰부서
			param.put("REQUESTORJOBPOSITION", userMap.get("JIKWI_CD")); //의뢰자 직책		
			param.put("REQUESTMOBILENO", userMap.get("MBPH_NO")); //의뢰자 휴대폰번호
		}
		
		// ------------------------------------------------------------
		// [신뢰성의뢰 : QAM_QCRELIABILITYREQUEST] execute query
		// ------------------------------------------------------------
		generalDao.addUpdate(NAMESPACE + ".insertQamQcreliabilityrequest", param);
		
		// ------------------------------------------------------------
		// [Lot Data] execute query
		// ------------------------------------------------------------
		Map<String, Object> lotParamMap = new HashMap<String, Object>();
		lotParamMap.put("LOTID", strLotid);
 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESPACE_PCM + ".selectPcmLotList", lotParamMap);
 		
 		// ------------------------------------------------------------
		// [QAM_QCRELIABILITYLOT ] make Query parameters
		// ------------------------------------------------------------
 		Map<String, Object> qcLotParam = new HashMap<String, Object>();
 		qcLotParam.put("REQUESTNO", strRequestNo);
 		qcLotParam.put("ENTERPRISEID", strEnterpriseid);
 		qcLotParam.put("PLANTID", strPlantid);
 		qcLotParam.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
 		qcLotParam.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
 		qcLotParam.put("LOTID", strLotid);
 		qcLotParam.put("INSPITEMID", "*");
 		qcLotParam.put("INSPITEMVERSION", "*");

 		qcLotParam.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
 		qcLotParam.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
 		qcLotParam.put("AREAID", lotMap.get("AREAID"));
 		qcLotParam.put("WORKCOUNT", lotMap.get("WORKCOUNT"));

		
		// 신릐성 의뢰 요청할때 공통코드(ReliaVerifiLockingSegment)에 등록된 대공정에 해당하는 공정인 경우 자동으로 Locking 처리 -2019.12.14-유석진
		Map<String, Object> segmentParam = new HashMap<>();
		segmentParam.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
		List<Map<String, Object>> resultList = generalDao.addSelect(NAMESPACE + ".selectReleaseReliaVerifiRequestLockingSegmentCheck", segmentParam);
		
		if(resultList.size() > 0)
		{
			String userId = SessionUtil.getUserId();
    		String languageType = StringUtil.Object2String(SessionUtil.getSessionValue("LANGUAGETYPE"));
    		
			// 2020-03-02 유석진 isType이 true이면 화면, false 이면 설비, 화면이면 작업장 권한 체크 설비이면 작업장 권한 체크 하지 않음
			if(isType)
			{
				String lockingTxnHistKey = wipService.saveLotLocking(dto, strLotid, "LotLockinQuality", "LockLockingReliaVerifiRequest", "SaveQualityInspectionReliaVerifiRequest", userId, languageType);
				qcLotParam.put("LOCKINGTXNHISTKEY", lockingTxnHistKey);
			} else
			{			
				String lockingTxnHistKey = wipService.saveLotLocking(dto, strLotid, "LotLockinQuality", "LockLockingReliaVerifiRequest", "SaveQualityInspectionReliaVerifiRequest", userId, languageType);
				qcLotParam.put("LOCKINGTXNHISTKEY", lockingTxnHistKey);
			}				
		}
		// ------------------------------------------------------------
		// [QAM_QCRELIABILITYLOT] execute query
		// ------------------------------------------------------------
		generalDao.addUpdate(NAMESPACE + ".insertQamQcreliabilitylot", qcLotParam);
    }
    
    // 중공정 혹은 대공정에 따른 품질규격 이상발생 사유코드 설정 함수
  	public String getReasonCode(Object segmentId, Object segmentVersion) {
  		
  		// 품질규격 사유코드 설정로직
  		Map<String, Object> segmentParam = new HashMap<>();
  		segmentParam.put("PROCESSSEGMENTID", segmentId);
  		segmentParam.put("PROCESSSEGMENTVERSION", segmentVersion);
  		
  		List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectTopAndMiddleProcesssegment", segmentParam); 		
  		
  		String topSegment = (list == null || list.size() <= 0)  ? "" : list.get(0).get("TOPPROCESSSEGMENTCLASSID").toString(); // 해당 공정의 대공정
  		String middleSegment =  (list == null || list.size() <= 0)  ? "" : list.get(0).get("MIDDLEPROCESSSEGMENTCLASSID").toString(); // 해당 공정의 중공정
  		String reasonCode = ""; // 사유코드
  		
  		// 중공정 코드에 따른 분류체계 
  		if (middleSegment.equals("2010") || middleSegment.equals("2016") || middleSegment.equals("2032"))
  		{
  			switch (middleSegment)
  			{
  				case "2010": // CNC Drill
  					reasonCode = "LotckQualitySpecifiCNC";
  					break;
  				default: // UV Laser, Co2 Laser
  					reasonCode = "LotckQualitySpecifiLASER";
  					break;
  			}
  		}
  		// 대공정 코드에 따른 분류체계
  		else 
  		{
  			switch (topSegment)
  			{
  				case "25": // 동도금
  					reasonCode = "LotckQualitySpecifiCOPPER";
  					break;
  				case "15": // 회로
  					reasonCode = "LotckQualitySpecifiCIRCUIT";
  					break;
  				case "40": // 적층
  					reasonCode = "LotckQualitySpecifiADDITIVE";
  					break;
  				case "55": // 포면처리
  					reasonCode = "LotckQualitySpecifiGOLD";
  					break;
  				default: // 인쇄
  					reasonCode = "LotckQualitySpecifiPRINT";
  					break;
  			}
  		}
  		
  		return reasonCode;
  	}
  	
  	// Locking 정보 저장 *동일 사유 체크하지않는것!! WipService 동일 사유 저장 불가
	public  String SaveLotLockingImpl(String lotId, String lockClass, String lockReason, String comments) throws SystemException
	{
		
		Map<String, Object> lotMap = ValidateLotInfoImpl(lotId);
		
		String lotState = "";
		if(lotMap != null && lotMap.get("LOTSTATE") != null) {
			lotState = StringUtil.Object2String(lotMap.get("LOTSTATE"));
		}
		// Check 재공상태
		if(!LotState.InProduction.equals(lotState) && !LotState.InTransit.equals(lotState) && !LotState.Terminated.equals(lotState)) //
		{
			//해당 Lot이 재공상태가 아닙니다. LOT 상태를 확인하여 주십시오.
			throw new BizException("ValidWipLot", String.format("LOT ID : %s", lotId));
		}
		
		// Check Hold
		if("Y".equals(StringUtil.Object2String(lotMap.get("ISHOLD"))))
		{
			// Lot이 Hold되어 있습니다.
			throw new BizException("EXPCODE_INVSTATE_DEFAULTREVERSE");
		}
		
		String txnHistKey =null;
		
		if(!LotState.Terminated.equals(lotState))
		{
			Map<String, Object> param = new HashMap<>();
			txnHistKey = TxnHistKey.getTxnHistKey();
			// ------------------------------------------------------------
			// [AffectLot Data] execute Query
			// ------------------------------------------------------------
			param.put("LOTID", lotId);
			param.put("TXNHISTKEY", txnHistKey);
			
			param.put("ENTERPRISEID", lotMap.get("ENTERPRISEID"));
			param.put("PLANTID", lotMap.get("PLANTID"));
			param.put("AREAID", lotMap.get("AREAID"));
			param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
			param.put("PROCESSDEFID", lotMap.get("PROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lotMap.get("PROCESSDEFVERSION"));
			param.put("USERSEQUENCE", lotMap.get("USERSEQUENCE"));
			param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
			param.put("WORKCOUNT", lotMap.get("WORKCOUNT"));

			param.put("LOCKINGSTATUS", "Y");
			param.put("LOCKINGTYPE", lockClass);
			param.put("LOCKINGCODE", lockReason);
			param.put("COMMENTS", comments);

			generalDao.addUpdate(NAMESPACE_PCM_WIP + ".insertPcmLotlocking", param);
			
			// ------------------------------------------------------------
			// [Lot Data] execute Query (Lot Locking 설정)
			// ------------------------------------------------------------
			lotMap.put("ISLOCKING", "Y");
			generalDao.addUpdate(NAMESPACE_PCM + ".updateSfLotKey", lotMap);
			
		}
		
		return txnHistKey;
	}
	
	// LotId 유효성 검사
	private Map<String, Object> ValidateLotInfoImpl(String lotId) 
	{
		// ------------------------------------------------------------
		// [Lot Data] execute query
		// ------------------------------------------------------------
		Map<String, Object> lotParamMap = new HashMap<String, Object>();
		lotParamMap.put("LOTID", lotId);
 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESPACE_PCM + ".selectPcmLotList", lotParamMap);
		
		if (lotMap == null)
		{
			throw new BizException("NotExistLot", String.format("LotId = %s", lotId));
		}
		
		return lotMap;
	}
}