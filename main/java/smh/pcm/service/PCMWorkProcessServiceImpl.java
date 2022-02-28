package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMConstant.TransitionId;
import smh.pcm.service.PCMConstant.DurableState;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.AreaOwnType;

/**
 * @file		: PCMWorkProcessService.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축No qualifying bean of type
 * @Type name	: PCMWorkProcessServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.05
 * @Author		: 방성혁
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자      수정내용
 *   ------------  ------  ----------
 *   2021. 04. 05.  방성혁      최초  생성 
 */
@Service
public class PCMWorkProcessServiceImpl extends AbstractNbdfService implements PCMWorkProcessService {

    public static final String NAMESAPCE      = "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESAPCE_COMM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACE1     = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    public static final String NAMESAPCEWIP   = "smh.pcm.dao.PCMWipDao";
   
    
    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
  //  private smh.pcm.service.PCM02100Service PCM02100Service;
    private PCM02100Service PCM02100Service;
    
    @Autowired
 	private com.nbdf.cmd.cm.cmsy.service.CMSY03100Service serviceDictionary;
    
    /**
     * @fn
     * @brief (Override method) saveLotResourceId  
     * @remark - 자원, Lot Id 저장
     * @see smh.bas.service.PCM00100Service#saveLotResourceId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveLotResourceId(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
    	
    	Map<String, Object>  ldMap = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectSfLotKey", param);  ////SfLot 테이블에 lot_Id (pk) 로 조회
        
    	
        if(StringUtil.Object2String(ldMap.get("RESOURCEID")).equals("")){
        	
			param.put("ENTERPRISEID", ldMap.get("ENTERPRISEID"));
			param.put("PLANTID", ldMap.get("PLANTID"));
//			param.resourceId 에 있음 ; //pk
			
        	Map<String, Object>  rdMap = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectMmResourceKey3", param);  ////Mm_Resource 테이블에 lot_Id (pk) 로 조회
			
			param.put("AREAID", rdMap.get("AREAID"));
//			param.resourceId 에 있음 ; //pk
			param.put("LASTTXNID", this.getClass().getSimpleName());
			param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
			
			generalDao.addUpdate(NAMESAPCE_COMM + ".updateSfLotKey", param); 
			
			//ldMap에 RESOURCEID가 없음
			ldMap.put("RESOURCEID", param.get("RESOURCEID"));
			Map<String, Object> lwrdMap = this.getWorkResult(ldMap);  
			

			if(StringUtil.Object2String(lwrdMap.get("LOTID")).equals(""))			
			{				
				param.put("AREAID", rdMap.get("AREAID"));
				//resourceId
				
				generalDao.addUpdate(NAMESAPCE_COMM + ".updateCtLotworkresultKey", param);   //PCM_LOTWORKRESULT
			}			
			
        }
        
    }	
    
    
    private Map<String, Object> getWorkResult(Map<String, Object> param) 
    {
    	
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE_COMM + ".getLotWorkResultByTrackIn", param); 
		
		
		if (result.size() == 0)
		{
			// 작업 실적에 등록된 데이터가 존재하지 않습니다. {0}
			throw new BizException("NotExistsWorkResult", String.format("PlantId = %s  LotId = %s ProcessSegmentId = %s ProcessSegmentVersion = %s", (String)param.get("PLANTID"), (String)param.get("LOTID"), (String)param.get("PROCESSSEGMENTID"), (String)param.get("PROCESSSEGMENTVERSION")));
		}
		
		param.put("TXNHISTKEY", StringUtil.Object2String(result.get(0).get("TXNHISTKEY")));

		
		Map<String, Object>  rdMap = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectMmResourceKey3", param);   
		
		return rdMap;
		
	}
    
    /**
     * @fn
     * @brief 인수등록
     * @remark 
     * @see smh.pcm.service.PCMWorkProcessService#saveReceiveLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
   
  	public void saveReceiveLot(UiMapDto dto) throws Exception {
  		 DataSetMap paramMapDataInfo   = getParametersDataSetMap(dto,"ds_dataInfo");
  		 DataSetMap paramMapDefectList = getParametersDataSetMap(dto,"ds_defectList");
  		 
  		 Map<String, Object> dataInfo   = paramMapDataInfo.get(0);
  		 Map<String, Object> defectList = new HashMap<>();
  		 Map<String, Object> lrl        = new HashMap<>();
  		 Map<String, Object> lotInfo     = new HashMap<>();
  		 SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
  		 
   		 String sToday    =  this.getToDate();
  		 //작업자
    	 String userid    = StringUtil.Object2String(dataInfo.get("WORKER"));
    	 //현재시간
     	 Date now         = dateFormat.parse(sToday);
    	 //특이사항 
     	 String comment   = StringUtil.Object2String(dataInfo.get("COMMENT")) ;
     	 //Unit
     	 String unit      = StringUtil.Object2String(dataInfo.get("DEFECTUNIT"));
     	 //LOT LIST
     	 String[] lotList = StringUtil.Object2String(dataInfo.get("LOTID")).split(",");
     	 
     	// Is Batch
 		String isBatch = StringUtil.Object2String(dataInfo.get("ISBATCH")); 
     	 
     	 for(String lotId : lotList)
     	 {
     		if (lotId.isEmpty())
				continue;
     		
     		 lotInfo = wipService.validateLotInfo(lotId);
     		 
     		 //입력정보 검증 2021-07-07  windowTime시 락을 거는 위치를 form 에서 To 공정으로 변경처리
     		 this.validationData(dataInfo, lotInfo, TransitType.ReceiveLot);     		 
     		 
     		 wipService.executeCheckingWindowTimeNewTx(dto, lotInfo, now);
     		 
     		 lotInfo = wipService.validateLotInfo(lotId);
     		 
//     		 //입력정보 검증
//     		 this.validationData(dataInfo, lotInfo, TransitType.ReceiveLot);
     		 
     		 // 인수 등록 시 Lot Work Result에 동일 공정의 Skip 실적이 있는 경우 삭제한다.
     		 wipService.deleteSkipWorkResult(dto, lotInfo);
     		 
     	 
	     	//LOT 사용 설비 정보 Insert
     		 
     		
     		if(dataInfo.get("EQUIPMENTID")!= null) { 
     			
		     	for (String equipmentId :  dataInfo.get("EQUIPMENTID").toString().split(","))
				{
					if (equipmentId.isEmpty())
						continue;
					
					wipService.insertLotEquipment(dto, lotInfo, equipmentId, now);
				}
     		}
	     	
	        //LOT COMMENT 등록
	        if (!comment.isEmpty())
	        {
	        	wipService.insertLotComment(dto, lotInfo, comment, userid, TransitionId.ReceiveLot);
	        }
	        
	       // Update Lot Defect Unit
	     	if (!unit.isEmpty())
	     	{
	     		wipService.updateLotDefectUnit(dto, lotInfo, unit);	
	     	}
	     	
	     	//해당LOT의 인수등록 처리한다.
	     	lotInfo = wipService.updateReceiveLot(dto, lotInfo, userid, now);
	     	
	     	//마킹랏 처리 로직 없앰
	     	
	     	//ProcessDefid, ProcessDefVersion, processPathid 정보 조회
	     	
            Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
			
			String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
			String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));
			
			String processPathId     = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
			
			if (isBatch.equals("N"))
			{
				//불량 정보 처리
		     	double defectQty = StringUtil.Object2Double(dataInfo.get("DEFECTQTY"));
		     	if(defectQty > 0)
		     	{
		     		Map<String, Object> childLotInfo = wipService.splitDefectLot(dto, lotId, defectQty, defectQty, "Y", TransitType.ReceiveLot);
		     		
		     		String childLotId = StringUtil.Object2String(childLotInfo.get("LOTID"));
		     		
		     		wipService.saveDefectLotWorkResult(dto, lotInfo, childLotInfo, defectQty);
		     	
		     		lotInfo = this.saveLot( lotId, childLotId);
		     		
		     		wipService.saveLotDefect(dto, childLotInfo, paramMapDefectList, TransitType.ReceiveLot);
		     	}
			}
	        // Insert Lot Work Result
	        wipService.saveLotWorkResult(dto, lotInfo, TransitType.ReceiveLot, userid, now,"","");
	        
	       // Check Lot Reserve Locking
	        this.checkLotReserveLocking(lotInfo, LotProcessState.WaitForReceive, processDefId, processDefVersion);
	       		
     	 }
     	 	 
    }
  	
  	/**
     * @fn
     * @brief 작업시작
     * @remark 
     * @see smh.pcm.service.PCMWorkProcessService#saveTrackInLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveTrackInLot(UiMapDto dto) throws Exception {
  		 DataSetMap paramMapDataInfo       = getParametersDataSetMap(dto,"ds_dataInfo");
  		 DataSetMap paramMapDefectList     = getParametersDataSetMap(dto,"ds_defectList");
  		 DataSetMap paramMapConsumableList = getParametersDataSetMap(dto,"ds_consumableList");
  		 DataSetMap paramMapEquipmentList  = getParametersDataSetMap(dto,"ds_equipmentList");
  		 DataSetMap paramMapDurableList    = getParametersDataSetMap(dto,"ds_durableList");
  		 
  		 Map<String, Object> dataInfo   = paramMapDataInfo.get(0);
  		 Map<String, Object> defectList = new HashMap<>();
  		 Map<String, Object> rld        = new HashMap<>();
  		 Map<String, Object> lrl        = new HashMap<>();
  		 Map<String, Object> uLot       = new HashMap<>();
  		 Map<String, Object> consumableList = new HashMap<>();
  		 Map<String, Object> durable = new HashMap<>();
  		 
  		 SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
  		 
  		 String sToday      =  this.getToDate();
  	     // Worker List
 		 String userList    =  StringUtil.Object2String( dataInfo.get("WORKER"));
  		 //작업자
    	 String userid      =  userList.split(",")[0];
    	 //현재시간
     	 Date now           = dateFormat.parse(sToday);
    	 //특이사항 
     	 String comment     = StringUtil.Object2String( dataInfo.get("COMMENT"));
     	 //Unit
     	 String unit        = StringUtil.Object2String( dataInfo.get("DEFECTUNIT")); 
     	 //LOT ID
     	 String lotId       = StringUtil.Object2String( dataInfo.get("LOTID"));  
     	 
     	// Equipment Id
     	
     	String equipmentId = StringUtil.Object2String( dataInfo.get("EQUIPMENTID")).split(",")[0];
     	 
 		Map<String, Object> lotInfo = wipService.validateLotInfo(lotId);
 		
 		//입력정보 검증 2021-07-07  windowTime시 락을 거는 위치를 form 에서 To 공정으로 변경처리
 		this.validationData(dataInfo, lotInfo, TransitType.TrackInLot);
 		 
 		wipService.executeCheckingWindowTimeNewTx(dto, lotInfo, now);
 		
 		lotInfo = wipService.validateLotInfo(lotId);
 		
// 		//입력정보 검증
// 		this.validationData(dataInfo, lotInfo, TransitType.TrackInLot);
 		         
       // Update Lot Defect Unit
     	if (!unit.isEmpty())
     	{
     		wipService.updateLotDefectUnit(dto, lotInfo, unit);	
     	}
     	
        Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
		
		String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")); 
		String processDefVersion =  StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));  
		
		String processPathId     = StringUtil.Object2String( wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
		
     	//불량 정보 처리
     	double defectQty = StringUtil.Object2Double(dataInfo.get("DEFECTQTY"));
     	if(defectQty > 0)
     	{
     		Map<String, Object> childLotInfo = wipService.splitDefectLot(dto, lotId, defectQty, defectQty,"Y", TransitType.TrackInLot);
     		String childLotId = StringUtil.Object2String(childLotInfo.get("LOTID"));
     		
     		wipService.saveDefectLotWorkResult(dto, lotInfo, childLotInfo, defectQty);

     		lotInfo = this.saveLot( lotId, childLotId);
     		
     		wipService.saveLotDefect(dto, childLotInfo, paramMapDefectList, TransitType.TrackInLot);
     		
            double remainQty = StringUtil.Object2Double(lotInfo.get("QTY"));
			
			if (remainQty <= 0)
				return;
     	}
     	
        this.saveLotWorker(dto, lotInfo, userList);
      
        //LOT 사용 설비 정보 Insert
     	this.saveLotTrackInEquipment( dto, lotInfo, StringUtil.Object2String(dataInfo.get("EQUIPMENTID")), paramMapEquipmentList, now);
     	
     	
        //LOT COMMENT 등록
        if (!comment.isEmpty())
        {
        	wipService.insertLotComment(dto, lotInfo, comment, userid, TransitionId.TrackIn);
        }
        
        // 이전 Step이 StepType에 없는 경우 Lot 처리
        wipService.saveLotInfoByPreviousStep(dto, lotInfo, TransitionId.TrackIn, userid, now, equipmentId);
        
        //Track In Lot Process
        lotInfo = wipService.trackInLot(dto, lotInfo, equipmentId, userid, now);
        
        // 투입자재 임시 저장 정보 삭제 후 재저장
        wipService.deleteConsumeMaterialLotTempByConsumable(dto, lotInfo);
        
        int sequence = 0;
        
        for (int i = 0, len = paramMapConsumableList.size(); i < len; i++)
		{
        	sequence++;
        	consumableList = paramMapConsumableList.get(i);
        	// Consume Material Lot Temp Insert Data
        	this.saveConsumeMaterialLotTempData(dto, dataInfo, lotInfo, consumableList, sequence);	
		}
        
        // 사용 치공구 임시 저장 		
 		for (int i = 0, len = paramMapDurableList.size(); i < len; i++)
 		{
 			sequence++;
 			
 			durable = paramMapDurableList.get(i);
 			this.saveDurableLotTempData(dto, dataInfo, lotInfo, durable, sequence, now);
 		
 		}
        
        // Insert Lot Work Result
        wipService.saveLotWorkResult(dto, lotInfo, TransitType.TrackInLot, userid, now,"","");
        
       // Check Lot Reserve Locking
        this.checkLotReserveLocking(lotInfo, LotProcessState.Wait, processDefId, processDefVersion);
    }
  	
  	/**
     * @fn
     * @brief 작업완료
     * @remark 
     * @see smh.pcm.service.PCMWorkProcessService#SaveTrackOutLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveTrackOutLot(UiMapDto dto) throws Exception {
  		 DataSetMap paramMapDataInfo           = getParametersDataSetMap(dto,"ds_dataInfo");
  		 DataSetMap paramMapDefectList         = getParametersDataSetMap(dto,"ds_defectList");
  		 DataSetMap paramMapConsumableList     = getParametersDataSetMap(dto,"ds_consumableList");
  		 DataSetMap paramMapEquipmentList      = getParametersDataSetMap(dto,"ds_equipmentList");
  		 DataSetMap paramMapDurableList        = getParametersDataSetMap(dto,"ds_durableList");
 		 DataSetMap paramMapAoiDefectList      = getParametersDataSetMap(dto,"ds_aoiDefectList");
  		 DataSetMap paramMapBbtholeDefectList  = getParametersDataSetMap(dto,"ds_bbtholeDefectList");
  		
  	
  		 
  		 Map<String, Object> dataInfo   = paramMapDataInfo.get(0);
  		 Map<String, Object> defectList = new HashMap<>();
  		 Map<String, Object> rld        = new HashMap<>();
  		 Map<String, Object> lrl        = new HashMap<>();
  		 Map<String, Object> uLot       = new HashMap<>();
  		 Map<String, Object> consumable = new HashMap<>();
  		 Map<String, Object> durableRow  = new HashMap<>();
  		 Map<String, Object> durable  = new HashMap<>();
  		 Map<String, Object> paramDurable = new HashMap<>();
  		// Map<String, Object> aoiDefect = new HashMap<>();
  		 
         SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
  		 
  		 String sToday      =  this.getToDate();
  		 
  		 //LOT ID
     	 String lotId       = StringUtil.Object2String(dataInfo.get("LOTID")); 
     	 
  	     // Worker List
 		 String userList    = StringUtil.Object2String(dataInfo.get("WORKER"));  
  		 //작업자
    	 String userid      = userList.split(",")[0];
    	 
 		// PrintWeek
 		String printWeek    = StringUtil.Object2String(dataInfo.get("PRINTWEEK")); 
 		
 	   // Transit Area
 	    String transitArea  = StringUtil.Object2String(dataInfo.get("TRANSITAREA"));
    	 //현재시간
     	 Date now           = dateFormat.parse(sToday);
     	 
    	 //특이사항 
     	 String comment     = StringUtil.Object2String(dataInfo.get("COMMENT")); 
     	 //Unit
     	 String unit        = StringUtil.Object2String(dataInfo.get("DEFECTUNIT"));
     
     	 
     	// Equipment Id
     	String equipmentId =  StringUtil.Object2String(dataInfo.get("EQUIPMENTID")).split(",")[0];
     	
     	 
     	 Map<String, Object> lotInfo = wipService.validateLotInfo(lotId);
     	//입력정보 검증 2021-07-07  windowTime시 락을 거는 위치를 form 에서 To 공정으로 변경처리
     	 this.validationData(dataInfo, lotInfo, TransitType.TrackOutLot);
     	 
 		 wipService.executeCheckingWindowTimeNewTx(dto, lotInfo, now);
 		 
 		 lotInfo = wipService.validateLotInfo(lotId);
 		 
 		 Map<String, Object> defultlotInfo = wipService.validateLotInfo(lotId);
 		 
 		 //입력정보 검증
// 		 this.validationData(dataInfo, lotInfo, TransitType.TrackOutLot);
 		 
 		 this.saveLotTrackOutEquipmentList(dto, lotInfo, paramMapEquipmentList, now);
 		 
 		 //LOT COMMENT 등록
         if (!comment.isEmpty())
         {
         	wipService.insertLotComment(dto, lotInfo, comment, userid, TransitionId.TrackOut);
         }
        // Update Lot Defect Unit
      	if (!unit.isEmpty())
      	{
      		wipService.updateLotDefectUnit(dto, lotInfo, unit);	
      	}
        // 이전 Step이 StepType에 없는 경우 Lot 처리
        wipService.saveLotInfoByPreviousStep(dto, lotInfo,  TransitionId.TrackOut, userid, now, equipmentId);
 		
        lotInfo = wipService.trackOutLot(dto, lotInfo, equipmentId, userid, now) ;
        
        if (!printWeek.isEmpty())
        {
        	lotInfo = this.saveLotWeek(dto, lotInfo, printWeek, now);
        }
        // 자재 실적 저장 == 작업완료에서 인계처리 이동
        for (int i = 0, len = paramMapConsumableList.size(); i < len; i++)
  		{
          	
          	consumable = paramMapConsumableList.get(i);
          	double defectQty = StringUtil.Object2Double(consumable.get("DEFECTQTY"));
          	if (defectQty > 0)
          	{
          		
          		this.insertConsumableLot(dto, lotInfo, consumable);
          	}	
          	
  		}
        
        wipService.deleteConsumeMaterialLotTempByConsumable(dto, lotInfo);
        String txnGroupHistKey = this.saveConsumeMaterialLotByConsumable(lotInfo, paramMapConsumableList);
        
        Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
        
        String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
		String processDefVersion =  StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION")); 
		
		Map<String, Object> map = new HashMap<>();
		map.put("ENTERPRISEID"      , dataInfo.get("ENTERPRISEID"));
		map.put("PLANTID"           , dataInfo.get("PLANTID")); 
		map.put("LOTID"             , dataInfo.get("LOTID")); 
		map.put("PROCESSDEFID"      , processDefId);
		map.put("PROCESSDEFVERSION" , processDefVersion);
		
		
		List<Map<String, Object>> OperationPullByProcessInfo = generalDao.addSelect(NAMESAPCE + ".selectOperationPullByProcess", map);
		for (Map<String, Object> resultMap : OperationPullByProcessInfo)
		{
			
			 this.saveConsumeMaterialLotByConsumableForBackFlush(dto, lotInfo, resultMap);
		}
		// 자재 출고 API 호출 -- 안씀
		
		// 치공구 실적 저장	
		int result = 0;
		
		for (int i = 0, len = paramMapDurableList.size(); i < len; i++)
		{
			durableRow = paramMapDurableList.get(i);
			
			paramDurable.put("DURABLELOTID", durableRow.get("DURABLELOTID"));
			Map<String, Object> durableInfo = generalDao.addSelectOneMap(NAMESAPCE + ".selectTomDurablelot", paramDurable);
			
			if(durableInfo == null)
			{
				throw new BizException("InValidData001", String.format("DurableLotId = %s",durableRow.get("DURABLELOTID")));
			}
			
			durableInfo.put("USEDCOUNT", StringUtil.Object2Double(durableInfo.get("USEDCOUNT")) + StringUtil.Object2Double(durableRow.get("USINGQTY")));
			durableInfo.put("TOTALUSEDCOUNT", StringUtil.Object2Double(durableInfo.get("TOTALUSEDCOUNT"))  + StringUtil.Object2Double(durableRow.get("USINGQTY")));
			
			result +=  generalDao.addUpdate(NAMESAPCE + ".updateTomDurablelot", durableInfo);
		}
		
		wipService.deleteConsumeMaterialLotTempByDurable(dto, lotInfo, paramMapDurableList);
		this.saveConsumeMaterialLotByDurable(lotInfo, paramMapDurableList, now);
		
		//불량 정보 처리
     	double defectQty = StringUtil.Object2Double(dataInfo.get("DEFECTQTY"));
     	if(defectQty > 0)
     	{
     		Map<String, Object> childLotInfo = wipService.splitDefectLot(dto, lotId, defectQty, defectQty,"Y", TransitType.TrackOutLot);
     		
     		String childLotId = StringUtil.Object2String(childLotInfo.get("LOTID"));
     		
     		wipService.saveDefectLotWorkResult(dto, lotInfo, childLotInfo, defectQty);
     		
     		lotInfo = this.saveLot( lotId, childLotId);
     		
     		wipService.saveLotDefect(dto, childLotInfo, paramMapDefectList, TransitType.TrackOutLot);
     		
     	}
     	
        // Dispatch Lot Process
        String resourceId =  StringUtil.Object2String(dataInfo.get("RESOURCEID"));
        String toAreaId   =  StringUtil.Object2String(dataInfo.get("TRANSITAREA")); 
     	// Insert Lot Work Result
        wipService.saveLotWorkResult(dto, lotInfo, TransitType.TrackOutLot, userid, now, resourceId, toAreaId);
        
        // AOI/BBT/AOIHOLE 검사 공정 처리
 		String processSegmentType   = StringUtil.Object2String(dataInfo.get("PROCESSSEGMENTTYPE"));
 		boolean isInspectionProcess = Boolean.parseBoolean(dataInfo.get("ISINSPECTIONPROCESS").toString());
 		boolean isRepairProcess     = Boolean.parseBoolean(dataInfo.get("ISREPAIRPROCESS").toString()); 		
 		boolean hasAnalysisTarget   = Boolean.parseBoolean(dataInfo.get("HASANALYSISTARGET").toString()); 
 	    // 검사 공정 작업 완료 처리 인 경우
		if (isInspectionProcess)
		{
			int totalDefectCount = 0;
			
			// AOI 검사
			if (processSegmentType.equals("AOIInspection"))
			{
				// 분석 대상이 있는 경우
				if (hasAnalysisTarget)
				{
					for (int i = 0, len = paramMapAoiDefectList.size(); i < len; i++)
					{
						 Map<String, Object> aoiDefect = paramMapAoiDefectList.get(i);
						
						String enterpriseId      = StringUtil.Object2String(dataInfo.get("ENTERPRISEID"));
						String defectCodeGroupId = StringUtil.Object2String(aoiDefect.get("DEFECTCODEGROUPID"));  
						String defectCode        = StringUtil.Object2String(aoiDefect.get("DEFECTCODE")); 
						
						if (defectCodeGroupId.equals("005"))
						{
							this.saveQcAOIWorkCompleteAnalysisData(dto, lotInfo, aoiDefect, processDefId, processDefVersion, processSegmentType);
							//SaveQcAOIWorkCompleteAnalysisData(lot, defectRow, processDefId, processDefVersion, processSegmentType);
						}
						else
						{
							this.saveQcAOIWorkCompleteData(dto, lotInfo, aoiDefect, processDefId, processDefVersion, processSegmentType);
							//SaveQcAOIWorkCompleteData(lot, defectRow, processDefId, processDefVersion, processSegmentType);
						}
						
					}
					
					boolean isReworkPublish = Boolean.parseBoolean(StringUtil.Object2String(dataInfo.get("ISREWORKPUBLISH")));
					if (isReworkPublish)
					{
						String prevPlantId          = StringUtil.Object2String(lotInfo.get("PLANTID"));
						String prevFactoryId        = StringUtil.Object2String(lotInfo.get("FACTORYID")); 
						String prevAreaId           = StringUtil.Object2String(lotInfo.get("AREAID")); 
						
						String subProcessDefId      = StringUtil.Object2String(dataInfo.get("SUBPROCESSDEFID"));  
						String subProcessDefVersion = StringUtil.Object2String(dataInfo.get("SUBPROCESSDEFVERSION"));  
						String reworkResourceId     = StringUtil.Object2String(dataInfo.get("REWORKRESOURCEID")); 
						String reworkAreaId         = StringUtil.Object2String(dataInfo.get("REWORKAREAID")); 
						
						 Map<String, Object> reworkInfo = new HashMap<>();
						 
						 reworkInfo.put("LOTID"                   , lotInfo.get("LOTID"));
						 reworkInfo.put("REWORKPROCESSDEFID"      , subProcessDefId);
						 reworkInfo.put("REWORKPROCESSDEFVERSION" , subProcessDefVersion);
						 reworkInfo.put("RESOURCEID"              , reworkResourceId);
						 reworkInfo.put("AREAID"                  , reworkAreaId);
						 reworkInfo.put("PROCESSSTATE"            , LotProcessState.WaitForReceive);
						
						this.saveReworkReturnData(dto, lotInfo, dataInfo);
						
						String lastTxnHistKey = StringUtil.Object2String(wipService.reworkLot(dto, reworkInfo).get("LASTTXNHISTKEY"));
						
						lotInfo = wipService.validateLotInfo(lotId);
						
						lotInfo = wipService.saveLotWorkCount(dto, lotInfo);
						
						wipService.saveLotWorkResultForNextProcess(dto, lotInfo, lastTxnHistKey);
						
						wipService.saveLotHistory(dto, lastTxnHistKey, lotId, prevPlantId, prevFactoryId, prevAreaId);
						
					}
				}
				else // 분석 대상이 없는 경우
				{
					for (int i = 0, len = paramMapAoiDefectList.size(); i < len; i++)
					{
						
						Map<String, Object> aoiDefect = paramMapAoiDefectList.get(i);
						
						this.saveQcAOIWorkCompleteData(dto, lotInfo, aoiDefect, processDefId, processDefVersion, processSegmentType);
						
						this.saveInspectionDefectData(dto, lotInfo, aoiDefect, processSegmentType);
						
						totalDefectCount += StringUtil.Object2Int(aoiDefect.get("PCSQTY")) ;
					}
					
					this.saveInspectionResultData(dto, lotInfo, totalDefectCount, processDefId, processDefVersion, processSegmentType, now, userid);
					
					lotInfo = this.saveLotPseudoDefectQtyUpdate(dto, lotInfo, totalDefectCount);
				}
			}
			else if (processSegmentType.equals("BBTInspection"))
			{
				for (int i = 0, len = paramMapBbtholeDefectList.size(); i < len; i++)
				{
					Map<String, Object> bbtholeDefect = paramMapBbtholeDefectList.get(i);
					
                    int bbtDefectQty = StringUtil.Object2Int(bbtholeDefect.get("PCSQTY"));
					
					if (bbtDefectQty > 0)
					{
						
						this.saveQcBBTHOLEWorkCompleteData(dto, lotInfo, bbtholeDefect, processDefId, processDefVersion, processSegmentType);
						
						this.saveInspectionDefectData(dto, lotInfo, bbtholeDefect, processSegmentType);
						
						totalDefectCount += bbtDefectQty;
					}
				}
				if (totalDefectCount > 0)
				{
					this.saveInspectionResultData(dto, lotInfo, totalDefectCount, processDefId, processDefVersion, processSegmentType, now, userid);
					lotInfo = this.saveLotPseudoDefectQtyUpdate(dto, lotInfo, totalDefectCount);
				}
				
			}
			else if (processSegmentType.equals("AOIHoleInspection"))
			{
				/* 2021-06-16 박성수 차장 요청. AOI Hole불량은 일반 AOI처럼 저장
				for (int i = 0, len = paramMapBbtholeDefectList.size(); i < len; i++)
				{
					Map<String, Object> bbtholeDefect = paramMapBbtholeDefectList.get(i);
					
				    this.saveQcBBTHOLEWorkCompleteData(dto, lotInfo, bbtholeDefect, processDefId, processDefVersion, processSegmentType);
						
					this.saveInspectionDefectData(dto, lotInfo, bbtholeDefect, processSegmentType);
						
					totalDefectCount +=  StringUtil.Object2Int(bbtholeDefect.get("PCSQTY"));
					
				}
				
				this.saveInspectionResultData(dto, lotInfo, totalDefectCount, processDefId, processDefVersion, processSegmentType, now, userid);
				lotInfo = this.saveLotPseudoDefectQtyUpdate(dto, lotInfo, totalDefectCount);*/
				
				for (int i = 0, len = paramMapAoiDefectList.size(); i < len; i++)
				{
					
					Map<String, Object> aoiDefect = paramMapAoiDefectList.get(i);
					
					this.saveQcAOIWorkCompleteData(dto, lotInfo, aoiDefect, processDefId, processDefVersion, processSegmentType);
					
					this.saveInspectionDefectData(dto, lotInfo, aoiDefect, processSegmentType);
					
					totalDefectCount += StringUtil.Object2Int(aoiDefect.get("PCSQTY")) ;
				}
				
				this.saveInspectionResultData(dto, lotInfo, totalDefectCount, processDefId, processDefVersion, processSegmentType, now, userid);
				
				lotInfo = this.saveLotPseudoDefectQtyUpdate(dto, lotInfo, totalDefectCount);
			}
		}
		// Repair 공정 작업 완료 처리 인 경우
		if (isRepairProcess)
		{
			//DataSetMap paramMapAoiDefectList      = getParametersDataSetMap(dto,"ds_aoiDefectList");
			for (int i = 0, len = paramMapAoiDefectList.size(); i < len; i++)
			{
				Map<String, Object> defectRow = paramMapAoiDefectList.get(i);
				
				String enterpriseId      = StringUtil.Object2String(dataInfo.get("ENTERPRISEID")); 
				String defectCodeGroupId = StringUtil.Object2String(defectRow.get("DEFECTCODEGROUPID"));  
				String defectCode        = StringUtil.Object2String(defectRow.get("DEFECTCODE")); 
				
				if (enterpriseId.equals("INTERFLEX") && defectCodeGroupId.equals("005"))
				{
					this.saveQcAOIWorkCompleteAnalysisResultData(dto, lotInfo, defectRow, "AOIInspection");
				}
			}
		}
		
		 Map<String, Object> paramDefintion = new HashMap<>();
			
	    paramDefintion.put("PRODUCTDEFID"     , lotInfo.get("PRODUCTDEFID"));
	    paramDefintion.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
	    
	    Map<String, Object>  productdefinitionInfo   = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProductdefinitionList", paramDefintion);
	    
	    if (productdefinitionInfo == null)
		{
	    	// 해당 품목이 존재하지 않습니다. {0}
			throw new BizException("NotExistProduct", String.format("ProductDefId = %s, ProductDefVersion", lotInfo.get("PRODUCTDEFID"), lotInfo.get("PRODUCTDEFVERSION")));
		}
		
		
		// Save Recipe Parameter Value  -- 사용안함
		// 인계 작업장이 있는 경우 Lot 인계 처리
		if (!transitArea.isEmpty())
		{
		
			String currentArea    = StringUtil.Object2String(lotInfo.get("AREAID"));
			String currentFactory = StringUtil.Object2String(lotInfo.get("FACTORYID"));
			String currentPlant   = StringUtil.Object2String(lotInfo.get("PLANTID")); 
			
			Map<String, Object> workResultInfo =  wipService.getWorkResult(lotInfo);
			
			Map<String, Object> paramOriginArea = new HashMap<>();
			
			paramOriginArea.put("AREAID", currentArea);
		
			List<Map<String, Object>> originAreaInfo  =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramOriginArea);
			
			if (originAreaInfo.size() == 0)
			{
				// 해당 작업장이 존재하지 않습니다. {0}
				throw new BizException("NotExistArea", String.format("AreaId = %s", currentArea));
			}
			Map<String, Object> originArea = originAreaInfo.get(0);
			
			//예산 통제 관련 나중에 추가
			if (!originArea.get("OWNTYPE").equals(AreaOwnType.OurCompany))
			{
				/*
				Map<String, Object> paramBudget = new HashMap<>();
				//  현재 ERP 자원코드가 서로 달라서 테스트 불가 차후 오픈
				paramBudget.put("P_LOT_NAME" , workResultInfo.get("LOTID"));             // LOT ID
				paramBudget.put("P_SOP_CODE" , workResultInfo.get("PROCESSSEGMENTID"));  // 공정코드
				paramBudget.put("P_RSC_CODE" , workResultInfo.get("RESOURCEID"));        // 자원코드
				paramBudget.put("P_ITEM_CODE", workResultInfo.get("PRODUCTDEFID"));
				paramBudget.put("P_STEP_ID"  , "인계");
				
				generalDao.addSelectOneMap(NAMESAPCE + ".salectBudgetControl", paramBudget);
		
				String  oCtrlYn = StringUtil.Object2String(paramBudget.get("O_CTRL_YN")) ;
		        String  oErrMsg =  StringUtil.Object2String(paramBudget.get("O_ERR_MSG")) ;
				
		
				if(oCtrlYn.equals("N"))
				{
				}
				else
					// 예산통제 메시지
					throw new BizException(oErrMsg);
				}
				*/
			}
			
			
			
			lotInfo = wipService.saveLotInfoByNextStep(dto, lotInfo, TransitionId.TrackOut, userid, now, equipmentId, resourceId, toAreaId);
			
			boolean isReturn =  wipService.saveReworkReturnData(dto, lotInfo);
	 		if (!isReturn)
	 		{
				String lastTxnHistKey = StringUtil.Object2String(lotInfo.get("LASTTXNHISTKEY")); 
				
				lotInfo = wipService.saveLotWorkCount(dto, lotInfo);
				
	            Map<String, Object> paramArea = new HashMap<>();
				
	            paramArea.put("AREAID", toAreaId);
				
				Map<String, Object> areaInfo   =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramArea).get(0);
				
				if (areaInfo == null)
				{
					// 해당 작업장이 존재하지 않습니다. {0}
					throw new BizException("NotExistArea", String.format("AreaId = %s", currentArea));
				}
				
				String ownType   = StringUtil.Object2String(areaInfo.get("OWNTYPE"));
				String nextPlant = StringUtil.Object2String(areaInfo.get("PLANTID")); 
				
			    
			    String productDefType =  StringUtil.Object2String(productdefinitionInfo.get("PRODUCTDEFTYPE"));  
			    
			    if (!lotInfo.get("LOTSTATE").equals(LotState.Finished) && StringUtil.Object2String(lotInfo.get("SUBPROCESSDEFID")) == "")
			    {
			    	// 작업장이 동일한 경우 SendLot 호출 안함
					if (!currentArea.equals(toAreaId))
					{   //현재 공정이 사내 작업장이라면
						if (!originArea.get("OWNTYPE").equals(AreaOwnType.OutsideOSP))
						{
							//다음 공정이 사외외주이면
							if (ownType.equals(AreaOwnType.OutsideOSP))
							{
								
								 wipService.sendLot(StringUtil.Object2String(lotInfo.get("LOTID")), toAreaId, nextPlant);
							}
						} else {  //현재공정이 사외이라면
							
							boolean  inspection = PCM02100Service.selectLotInfoByProcess(StringUtil.Object2String(lotInfo.get("ENTERPRISEID")), nextPlant, toAreaId, StringUtil.Object2String(lotInfo.get("LOTID")));
							
							if(!inspection)
							{
								 wipService.sendLot(StringUtil.Object2String(lotInfo.get("LOTID")), toAreaId, nextPlant);
							}
							
						}
					}
					
			    }
			   
			   // Check Move Area from Outside Area to Outside Area
				String lotState = StringUtil.Object2String(lotInfo.get("LOTSTATE"));
				if (lotState.equals(LotState.InProduction) || lotState.equals(LotState.InTransit))
				{
					wipService.saveLotWorkResultForNextProcess(dto, lotInfo, lastTxnHistKey);
				}
				
				if (productDefType.equals("SubAssembly") && lotState.equals(LotState.Finished))
				{
					//TransactionUtils.setTransactionId(txnInfo, "createConsumableLot");
					
					wipService.createConsumableLot(lotInfo, toAreaId);
					
					//반제품 자재 입고 처리 하지 않음
				}
	 		
				// Lot History Previous Plant & Previous Area Update (임시)
				wipService.saveLotHistory(dto, lastTxnHistKey, lotId, currentPlant, currentFactory, currentArea);
	 		}
			
		}
		
		// Check Lot Reserve Locking
        this.checkLotReserveLocking(lotInfo, LotProcessState.Run, processDefId, processDefVersion);
		
    }  	
 
  	/**
     * @fn
     * @brief 인계등록
     * @remark 
     * @see smh.pcm.service.PCMWorkProcessService#SaveSendLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveSendLot(UiMapDto dto) throws Exception {
  		 DataSetMap paramMapDataInfo           = getParametersDataSetMap(dto,"ds_dataInfo");
  		 DataSetMap paramMapDefectList         = getParametersDataSetMap(dto,"ds_defectList");
  		 DataSetMap paramMapConsumableList     = getParametersDataSetMap(dto,"ds_consumableList");
  		 
  		 DataSetMap paramMapAoiDefectList      = getParametersDataSetMap(dto,"ds_aoiDefectList");
  		 DataSetMap paramMapBbtholeDefectList  = getParametersDataSetMap(dto,"ds_bbtholeDefectList");
  		 
  		 Map<String, Object> dataInfo   = paramMapDataInfo.get(0);
  		 
       //  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
         SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");

  
  		 
  		 String sToday      =  this.getToDate();
  		 
  		 String lotId       = StringUtil.Object2String(dataInfo.get("LOTID"));
  		  
  		 // Worker (User Id)
    	 String userid      = StringUtil.Object2String(dataInfo.get("WORKER")); 
    	
    	 //현재시간
      	 Date now           = dateFormat.parse(sToday);
     	 
     	 //Unit
     	 String unit        = StringUtil.Object2String(dataInfo.get("DEFECTUNIT"));  
     	
 		 Map<String, Object> lotInfo = wipService.validateLotInfo(lotId);
 		 //입력정보 검증 2021-07-07  windowTime시 락을 거는 위치를 form 에서 To 공정으로 변경처리
 		 this.validationData(dataInfo, lotInfo, TransitType.SendLot);
 		 
 		 wipService.executeCheckingWindowTimeNewTx(dto, lotInfo, now);
 		 
 		 lotInfo = wipService.validateLotInfo(lotId);
 		 
 		 //입력정보 검증
// 		 this.validationData(dataInfo, lotInfo, TransitType.SendLot);
 		 
 		 
 		double defectQty = StringUtil.Object2Double(dataInfo.get("DEFECTQTY"));
     	if(defectQty > 0)
     	{
     		Map<String, Object> childLotInfo = wipService.splitDefectLot(dto, lotId, defectQty, defectQty,"Y", TransitType.SendLot);
     		
     		String childLotId = StringUtil.Object2String(childLotInfo.get("LOTID"));
     		
     		wipService.saveDefectLotWorkResult(dto, lotInfo, childLotInfo, defectQty);
     			
     		lotInfo = this.saveLot( lotId, childLotId);
     		
     		wipService.saveLotDefect(dto, childLotInfo, paramMapDefectList, TransitType.SendLot);
     		
     		double remainQty = StringUtil.Object2Double(lotInfo.get("QTY"));
  			
  			if (remainQty <= 0)
  				return;
     	}
     	
        // Comment
        String comment = StringUtil.Object2String(dataInfo.get("COMMENT")); 
        //LOT COMMENT 등록
        if (!comment.isEmpty())
        {
        	wipService.insertLotComment(dto, lotInfo, comment, userid, TransitionId.SendLot);
        }
        
     // AOI 검사 결과 수정
        boolean isInspectionProcess = Boolean.parseBoolean(StringUtil.Object2String(dataInfo.get("ISINSPECTIONPROCESS")));
        if (isInspectionProcess)
        {
        	String processSegmentType = StringUtil.Object2String(dataInfo.get("PROCESSSEGMENTTYPE"));
        	int totalDefectCount = 0;
   
        	for (int i = 0, len = paramMapAoiDefectList.size(); i < len; i++)
        	{
        		Map<String, Object> aoiDefect = paramMapAoiDefectList.get(i);
        		
    			String enterpriseId      = StringUtil.Object2String(dataInfo.get("ENTERPRISEID")) ;
				String defectCodeGroupId = StringUtil.Object2String(aoiDefect.get("DEFECTCODEGROUPID")) ;  
				String defectCode        = StringUtil.Object2String(aoiDefect.get("DEFECTCODE")) ;   
				
				if (defectCodeGroupId.equals("005"))
				{
					this.saveQcAOIWorkCompleteAnalysisData(lotInfo, aoiDefect, processSegmentType);
					
					totalDefectCount += StringUtil.Object2Int(aoiDefect.get("FINALDEFECTQTY")); 
					
				}
				
				this.saveInspectionDefectData(dto, lotInfo, aoiDefect, enterpriseId, processSegmentType);
        	}
        	
        	this.saveInspectionResultData(dto, lotInfo, totalDefectCount, unit, comment, processSegmentType, now, userid);
        	
        	this.saveLotPseudoDefectQtyUpdate(dto, lotInfo, totalDefectCount);
        }
        
        // Dispatch Lot Process
 		String resourceId =  StringUtil.Object2String( dataInfo.get("RESOURCEID"));
 		String toAreaId   =  StringUtil.Object2String( dataInfo.get("TRANSITAREA"));
        
        // Insert Lot Work Result
 		
        Map<String, Object> workResultInfo = wipService.saveLotWorkResult(dto, lotInfo, TransitType.SendLot, userid, now, resourceId, toAreaId);
        
        // Get Current Area
        String currentArea = StringUtil.Object2String(lotInfo.get("AREAID"));
        
        Map<String, Object> paramOriginArea = new HashMap<>();
		
		paramOriginArea.put("AREAID", currentArea);
		
		List<Map<String, Object>> originAreaInfo       =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramOriginArea);
		
		if (originAreaInfo.size() == 0)
		{
			// 해당 작업장이 존재하지 않습니다. {0}
			throw new BizException("NotExistArea", String.format("AreaId = %s", currentArea));
		}
		Map<String, Object> originArea = originAreaInfo.get(0);
		
		//예산 통제 
		if (!originArea.get("OWNTYPE").equals(AreaOwnType.OurCompany))
		{
			Map<String, Object> paramBudget = new HashMap<>();
			//  현재 ERP 자원코드가 달라서 현제 에러가 남 추후 오픈
			/*paramBudget.put("P_LOT_NAME" , workResultInfo.get("LOTID"));             // LOT ID
			paramBudget.put("P_SOP_CODE" , workResultInfo.get("PROCESSSEGMENTID"));  // 공정코드
			paramBudget.put("P_RSC_CODE" , workResultInfo.get("RESOURCEID"));        // 자원코드
			paramBudget.put("P_ITEM_CODE", workResultInfo.get("PRODUCTDEFID"));
			paramBudget.put("P_STEP_ID"  , "인계");
			
			generalDao.addSelectOneMap(NAMESAPCE + ".salectBudgetControl", paramBudget);
	
			String  oCtrlYn = StringUtil.Object2String(paramBudget.get("O_CTRL_YN")) ;
	        String  oErrMsg =  StringUtil.Object2String(paramBudget.get("O_ERR_MSG")) ;
			
			if(oCtrlYn.equals("N"))
			{
			}
			else
				// 예산통제 메시지
				throw new BizException(oErrMsg);
			}
			*/
		}
		
		// Get Plant at Current Area
	    String currentPlant = StringUtil.Object2String(lotInfo.get("PLANTID"));
				
	    // Get Current Factory
		String currentFactory =  StringUtil.Object2String(lotInfo.get("FACTORYID"));
		
		
		lotInfo = wipService.sendLot(dto, lotInfo, userid, now);
		
		// Check Final Inspection Process
		Map<String, Object> paramSegment = new HashMap<>();
		paramSegment.put("PROCESSSEGMENTID"       , lotInfo.get("PROCESSSEGMENTID"));
		paramSegment.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		    
		Map<String, Object> processsegmentInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesssegment", paramSegment);
		
		//최종검사이면 최종검사여부에 "Y" 업데이트
        if(processsegmentInfo.get("PROCESSSEGMENTCLASSID").equals("7026"))
        {
           wipService.updateIsFinalInspect(lotInfo);
        }
        
       
 		
 		lotInfo = wipService.dispatchLot(dto, lotInfo, toAreaId, resourceId);
 		
 		String lastTxnHistKey = StringUtil.Object2String(lotInfo.get("LASTTXNHISTKEY"));
 		
 	     // Update Lot Work Count
 		boolean isReturn =  wipService.saveReworkReturnData(dto, lotInfo);
 		if (!isReturn)
		{
 			lotInfo = wipService.saveLotWorkCount(dto, lotInfo);
 			
            Map<String, Object> paramArea = new HashMap<>();
			
            paramArea.put("AREAID", toAreaId);
			
			List<Map<String, Object>> areaInfo   =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramArea);
			
			if (areaInfo.size() == 0)
			{
				// 해당 작업장이 존재하지 않습니다. {0}
				throw new BizException("NotExistArea", String.format("AreaId = %s", currentArea));
			}
			
			String ownType   = StringUtil.Object2String(areaInfo.get(0).get("OWNTYPE"));
			String nextPlant = StringUtil.Object2String(areaInfo.get(0).get("PLANTID")); 
			
			 Map<String, Object> paramDefintion = new HashMap<>();
				
		    paramDefintion.put("PRODUCTDEFID"     , lotInfo.get("PRODUCTDEFID"));
		    paramDefintion.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		    
		    Map<String, Object>  productdefinitionInfo   = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProductdefinitionList", paramDefintion);
		    
		    if (productdefinitionInfo == null)
			{
		    	// 해당 품목이 존재하지 않습니다. {0}
				throw new BizException("NotExistProduct", String.format("ProductDefId = %s, ProductDefVersion", lotInfo.get("PRODUCTDEFID"), lotInfo.get("PRODUCTDEFVERSION")));
			}
			
            String productDefType = StringUtil.Object2String(productdefinitionInfo.get("PRODUCTDEFTYPE"));
            
		    
		    // if not Finished that Lot State then Outside Check Logic   
		    if (!lotInfo.get("LOTSTATE").equals(LotState.Finished) && StringUtil.Object2String(lotInfo.get("SUBPROCESSDEFID")) == "")
		    {
		    	// 작업장이 동일한 경우 SendLot 호출 안함
				if (!currentArea.equals(toAreaId))
				{   //현재 공정이 사내 작업장이라면
					if (!originArea.get("OWNTYPE").equals(AreaOwnType.OutsideOSP))
					{
						//다음 공정이 사외외주이면
						if (ownType.equals(AreaOwnType.OutsideOSP))
						{
							
							 wipService.sendLot(StringUtil.Object2String(lotInfo.get("LOTID")), toAreaId, nextPlant);
						}
					} else {  //현재공정이 사외이라면
						
						boolean  inspection = PCM02100Service.selectLotInfoByProcess(StringUtil.Object2String(lotInfo.get("ENTERPRISEID")), nextPlant, toAreaId, StringUtil.Object2String(lotInfo.get("LOTID")));
						
						if(!inspection)
						{
							 wipService.sendLot(StringUtil.Object2String(lotInfo.get("LOTID")), toAreaId, nextPlant);
						}
						
					}
				}
				
		    }
		        
		   // Check Move Area from Outside Area to Outside Area
			String lotState = StringUtil.Object2String(lotInfo.get("LOTSTATE")) ;
			if (lotState.equals(LotState.InProduction) || lotState.equals(LotState.InTransit))
			{
				wipService.saveLotWorkResultForNextProcess(dto, lotInfo, lastTxnHistKey);
			}
			
			if (productDefType.equals("SubAssembly") && lotState.equals(LotState.Finished))
			{
				//TransactionUtils.setTransactionId(txnInfo, "createConsumableLot");
				
				wipService.createConsumableLot(lotInfo, toAreaId);
				
				//반제품 자재 입고 처리 하지 않음
			}
		}
		// Lot History Previous Plant & Previous Area Update (임시)
		wipService.saveLotHistory(dto, lastTxnHistKey, lotId, currentPlant, currentFactory, currentArea);     		
    } 
  	
    /**
     * @fn : 
     * @brief : 체공 이상발생 등록
     * @remark 
     * @see smh.pcm.service.PCMWorkProcessService#insertabnormalOccurenceByDelayLot(com.nbdf.commons.ui.vo.UiMapDto)
   */
	public void insertabnormalOccurenceByDelayLot(UiMapDto dto) throws Exception
	{
		Map<String, Object> delayKey = new HashMap<>();
		Map<String, Object> stayKey = new HashMap<>();
		Map<String, Object> param = getParametersMap(dto);
		Map<String, Object> delaylot = new HashMap<>();
		
		String enterpriseId = StringUtil.Object2String(param.get("ENTERPRISEID"));
		String plantId      = StringUtil.Object2String(param.get("PLANTID")); 
		String userId       = StringUtil.Object2String(param.get("USERID")); 
		String lotId        = StringUtil.Object2String(param.get("LOTID")); 
		String delayCode    = StringUtil.Object2String(param.get("DELAYCODE"));
		String checkTime    =  StringUtil.Object2String(param.get("CHECKTIME")); 
		String delayComment = StringUtil.Object2String(param.get("DELAYCOMMENT"));
		
        List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
    	
    	String sToday = StringUtil.Object2String(systemDate.get(0).get("TODATE"));
    	
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	Date tToday = dateFormat.parse(sToday);
    	
    	Map<String, Object> lotInfo = wipService.validateLotInfo(lotId);
    	
    	delayKey.put("LOTID", lotInfo.get("LOTID"));
    	delayKey.put("PROCESSDEFID", lotInfo.get("PROCESSDEFID"));
    	delayKey.put("PROCESSDEFVERSION", lotInfo.get("PROCESSDEFVERSION"));
    	delayKey.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
    	delayKey.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
    	delayKey.put("PROCESSSTATE", lotInfo.get("PROCESSSTATE"));
    	delayKey.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
    	delayKey.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
    	delayKey.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
    	
    	Map<String, Object> delaylotInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM+".selectPcmDelaylot",delayKey);
    	
    	stayKey.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
    	stayKey.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
    	
    	Map<String, Object> segmentstayingtimeInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM+".selectPcmSegmentstayingtime",stayKey);
    	Double stdDelayTime = null;
    	
    	if(lotInfo.get("PROCESSSTATE").equals(LotProcessState.WaitForReceive))
		{
			stdDelayTime = StringUtil.Object2Double(segmentstayingtimeInfo.get("RECEIVESTAYINGTIME")) ;
		}
		else if(lotInfo.get("PROCESSSTATE").equals(LotProcessState.Wait))
		{
			stdDelayTime = StringUtil.Object2Double(segmentstayingtimeInfo.get("TRACKINSTAYINGTIME")) ; 
		}
		else if(lotInfo.get("PROCESSSTATE").equals(LotProcessState.Run))
		{
			stdDelayTime = StringUtil.Object2Double(segmentstayingtimeInfo.get("TRACKOUTSTAYINGTIME")) ; 
		}
		else if(lotInfo.get("PROCESSSTATE").equals(LotProcessState.WaitForSend))
		{
			stdDelayTime = StringUtil.Object2Double(segmentstayingtimeInfo.get("SENDSTAYINGTIME")) ; 
		}
    	
    	Date dtCheckTime = dateFormat.parse(checkTime);
    	
    	Double gap =(double)((tToday.getTime() - dtCheckTime.getTime())/1000);
    	
    	int result = 0;
    	if(delaylotInfo == null)
    	{
    		
    		delaylot.put("LOTID", lotInfo.get("LOTID"));
    		delaylot.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
    		delaylot.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
    		delaylot.put("PROCESSDEFID", lotInfo.get("PROCESSDEFID"));
    		delaylot.put("PROCESSDEFVERSION", lotInfo.get("PROCESSDEFVERSION"));
    		delaylot.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
    		delaylot.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
    		delaylot.put("PROCESSSTATE", lotInfo.get("PROCESSSTATE"));
    		delaylot.put("WORKCOUNT", lotInfo.get("WORKCOUNT"));
    		delaylot.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
    		delaylot.put("PLANTID", lotInfo.get("PLANTID"));
    		delaylot.put("AREAID", lotInfo.get("AREAID"));
    		delaylot.put("STDDELAYTIME", stdDelayTime);
    		delaylot.put("DELAYTIME", gap);
    		delaylot.put("CHECKSTARTTIME", dtCheckTime);
    		delaylot.put("CHECKENDTIME", tToday);
    		delaylot.put("DELAYREASONCODE", delayCode);
    		delaylot.put("DELAYCOMMENT", delayComment);
    		
    		
    		result += generalDao.addInsert(NAMESAPCE + ".insertPcmDelaylot", delaylot);
    	}
    	else
    	{
    		delaylotInfo.put("ENTERPRISEID"   , lotInfo.get("ENTERPRISEID"));
    		delaylotInfo.put("PLANTID"        , lotInfo.get("PLANTID"));
    		delaylotInfo.put("AREAID"         , lotInfo.get("AREAID"));
    		delaylotInfo.put("STDDELAYTIME"   , stdDelayTime);
    		delaylotInfo.put("DELAYTIME"      , gap);
    		delaylotInfo.put("CHECKSTARTTIME" , dtCheckTime);
    		delaylotInfo.put("CHECKENDTIME"   , tToday);
    		delaylotInfo.put("DELAYREASONCODE", delayCode);
    		delaylotInfo.put("DELAYCOMMENT"   , delayComment);
    		delaylotInfo.put("LASTTXNID"      , TxnHistKey.getTxnHistKey());
    		delaylotInfo.put("MODIFIER"       , SessionUtil.getSessionValue("USER_ID"));
    		
    		result += generalDao.addUpdate(NAMESAPCE + ".updatePcmDelaylot", delaylotInfo);
    	}
    	
    	putDataSetMap(dto, result);
		
	}
  	
  	private String getToDate()
  	{	
  		Map<String, Object> param = new HashMap<>();   
  		
  		String toDate = generalDao.addSelectOne(NAMESAPCE_COMM + ".getSysdate", param);
  		
  		return toDate;
  	}
  	
	private void validationData(Map<String, Object> dataInfo, Map<String, Object> lotInfo, String transitType)  throws Exception 

	{	
		// 보류 여부 체크
		String isHold = StringUtil.Object2String(lotInfo.get("ISHOLD")); 
		
		if (isHold.equals("Y"))
		{
			// 보류 상태의 Lot 입니다.
			throw new  BizException("LotIsHold", String.format("LotId = %s", lotInfo.get("LOTID")));
		}
		
		
		// 인수 가능 상태 확인
		if (!wipService.validateProcessState(lotInfo, transitType))
		{
			switch (transitType) {
			case TransitType.ReceiveLot :
				throw new  BizException("LotStateIsNotAvailableReceive", String.format("LotId = %s", lotInfo.get("LOTID")));
			case TransitType.TrackInLot :
				throw new BizException("LotStateIsNotAvailableTrackIn", String.format("LotId = %s", lotInfo.get("LOTID")));
			case TransitType.TrackOutLot :
				throw new BizException("LotStateIsNotAvailableTrackOut", String.format("LotId = %s", lotInfo.get("LOTID")));
			case TransitType.SendLot :
				throw new BizException("LotStateIsNotAvailableSend", String.format("LotId = %s", lotInfo.get("LOTID")));
			}
			
		}
		
		// Locking 여부 체크
		String isLocking = StringUtil.Object2String(lotInfo.get("ISLOCKING")) ;
		
		switch (transitType) {
			case TransitType.TrackInLot :
			case TransitType.SendLot :
			   if (isLocking.equals("Y"))
			   {
				  // Locking 상태의 Lot 입니다.
				  throw new BizException("LotIsLocking", String.format("LotId = %s", lotInfo.get("LOTID")));
			   }
		}
		// 공정 체크
		String processSegmentId = StringUtil.Object2String(lotInfo.get("PROCESSSEGMENTID")) ; 
		
		switch (transitType) {
			case TransitType.TrackInLot :
				if (!processSegmentId.equals(StringUtil.Object2String(dataInfo.get("PROCESSSEGMENTID"))))
				{
					// 작업 시작 처리 시 공정과 실제 Lot의 공정이 다릅니다. {0}
					throw new BizException("TrackInProcessIsNotEqualLotProcess", String.format("LotId = %s, TrackInProcessSegmentId = %s, CurrentProcessSegmentId = %s", lotInfo.get("LOTID"), dataInfo.get("PROCESSSEGMENTID"), processSegmentId));
				}
			case TransitType.TrackOutLot :
				if (!processSegmentId.equals(StringUtil.Object2String(dataInfo.get("PROCESSSEGMENTID"))))
				{
					// 작업 완료 처리 시 공정과 실제 Lot의 공정이 다릅니다. {0}
					throw new BizException("TrackOutProcessIsNotEqualLotProcess", String.format("LotId = %s, TrackInProcessSegmentId = %s, CurrentProcessSegmentId = %s", lotInfo.get("LOTID"), dataInfo.get("PROCESSSEGMENTID"), processSegmentId));
				}
			case TransitType.SendLot :
				if (!processSegmentId.equals(StringUtil.Object2String(dataInfo.get("PROCESSSEGMENTID"))))
				{
					// 인계 처리 시 공정과 실제 Lot의 공정이 다릅니다. {0}
					throw new BizException("SendProcessIsNotEqualLotProcess", String.format("LotId = %s, TrackInProcessSegmentId = %s, CurrentProcessSegmentId = %s", lotInfo.get("LOTID"), dataInfo.get("PROCESSSEGMENTID"), processSegmentId));
				}
		}
		
		
		// 작업자 선택 여부 체크
		String worker = StringUtil.Object2String(dataInfo.get("WORKER")) ;
		
		if (worker.isEmpty())
		{
			// 작업자가 선택되지 않았습니다.
			throw new BizException("NoSelectWorker");
		}
		
		// Lot 수량 > Defect 수량 체크
		double qty       = StringUtil.Object2Double(lotInfo.get("QTY"));
		double defectQty = StringUtil.Object2Double(dataInfo.get("DEFECTQTY"));
		
		if (qty < defectQty)
		{
			// 불량 수량은 Lot 수량보다 많을 수 없습니다.
			throw new BizException("LotQtyLargerThanDefectQty", String.format("Lot 수량 = %d 불량 수량 = %d", lotInfo.get("QTY"), dataInfo.get("DEFECTQTY")));
		}
	} 
	
	private void saveLotLocking(Map<String, Object> lotInfo , String lockingType, String lockingCode, String comments, String processDefId, String processDefVersion)   throws Exception
	{
		 Map<String, Object> lld        = new HashMap<>();
		 
		 lld.put("LOTID"                 , lotInfo.get("LOTID"));
		 lld.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
		 lld.put("PLANTID"               , lotInfo.get("PLANTID"));
		 lld.put("AREAID"                , lotInfo.get("AREAID"));
		 lld.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
		 lld.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
		 lld.put("PROCESSDEFID"          , processDefId);
		 lld.put("PROCESSDEFVERSION"     , processDefVersion);
		 lld.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
		 lld.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
		 lld.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		 lld.put("LOCKINGSTATUS"         , "Y");
		 lld.put("LOCKINGTYPE"           , lockingType);
		 lld.put("LOCKINGCODE"           , lockingCode);
		 lld.put("COMMENTS"              , comments);
		 lld.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
		 
		 generalDao.addInsert(NAMESAPCE + ".insertPcmLotlocking", lld);
	   
	}
	
	private void saveLotTrackInEquipment(UiMapDto dto, Map<String, Object> lotInfo, String equipmentId, DataSetMap equipmentList, Date time)   throws Exception
	{  
		Map<String, Object> param     = new HashMap<>();
		Map<String, Object> lek       = new HashMap<>();
		Map<String, Object> equipment = new HashMap<>();
		Map<String, Object> cek       = new HashMap<>();
		Map<String, Object> led       = new HashMap<>();
		Map<String, Object> paramLed  = new HashMap<>();
		
		String lotId =  lotInfo.get("LOTID").toString();
		
		
		param.put("LOTID"                 , lotId);
		param.put("EQUIPMENTID"           , equipmentId);
		param.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		param.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
		
		List<Map<String, Object>> dataInfo =   generalDao.addSelect(NAMESAPCE + ".getNotExistsLotEquipment", param);
		
		int result = 0;
		for (Map<String, Object> map : dataInfo)
		{
			lek.put("LOTID", map.get("LOTID"));
			lek.put("TXNHISTKEY", map.get("TXNHISTKEY"));
			
			Map<String, Object> lotequipmentInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectPcmLotequipment", lek);
	
			if (lotequipmentInfo == null)
			{
				throw new BizException("InValidData003", String.format("LotId = %s TxnHistKey = %s", map.get("LOTID"), map.get("TXNHISTKEY")));
			}
			
			result +=  generalDao.addInsert(NAMESAPCE + ".deletePcmLotequipment", lek);
			
		}
		
		
		for (int i = 0, len = equipmentList.size(); i < len; i++)
		{
			equipment = equipmentList.get(i);
			
			Map<String, Object> lotequipmentInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasEquipment", equipment);
			
			if (lotequipmentInfo == null)
			{
				
				throw new BizException("InValidData001", String.format("EquipmentId = %s", equipment.get("EQUIPMENTID")));
			}
		
			String state    = StringUtil.Object2String(lotequipmentInfo.get("STATE"));
			String e10State =  StringUtil.Object2String(lotequipmentInfo.get("E10STATE"));
			
			if (state.equals("Down") && e10State.equals("SC2200"))
			{
				// 설비가 고장수리 중 입니다. {0}
				throw new BizException("EquipmentIsReparing", String.format("Equipment Id : %s", equipment.get("EQUIPMENTID")));
			}
			
			
			paramLed.put("LOTID"                 , lotId);
			paramLed.put("EQUIPMENTID"           , equipment.get("EQUIPMENTID"));
			paramLed.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			paramLed.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			paramLed.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
			
			List<Map<String, Object>> lotequipmentListInfo =  generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotequipmentList", paramLed);
			
			if (lotequipmentListInfo.size() > 0)
			{
				led = lotequipmentListInfo.get(0);
				
				led.put("PROCESSSTATE"          , lotInfo.get("PROCESSSTATE"));
				led.put("RECIPEID"              , equipment.get("RECIPEID"));
				led.put("RECIPEVERSION"         , equipment.get("RECIPEVERSION"));
				led.put("RECIPETYPE"            , equipment.get("RECIPETYPE"));
				led.put("TRACKINTIME"           , time);
					
				generalDao.addUpdate(NAMESAPCE + ".updatePcmLotequipment", led);
				
			}
			else
			{
				led.put("LOTID"                 , lotId);
				led.put("TXNHISTKEY"            , TxnHistKey.getTxnHistKey());
				led.put("EQUIPMENTID"           , equipment.get("EQUIPMENTID"));
				led.put("PROCESSSTATE"          , lotInfo.get("PROCESSSTATE"));
				led.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
				led.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
				led.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
				led.put("RECIPEID"              , equipment.get("RECIPEID"));
				led.put("RECIPEVERSION"         , equipment.get("RECIPEVERSION"));
				led.put("RECIPETYPE"            , equipment.get("RECIPETYPE"));
				led.put("TRACKINTIME"           , time);
				
				generalDao.addInsert(NAMESAPCE + ".insertPcmLotequipment", led);
			}
			
			lotequipmentInfo.put("STATE", "Run");
			
			result +=  generalDao.addUpdate(NAMESAPCE + ".updateBasEquipment", lotequipmentInfo);

		}
		
		putDataSetMap(dto, result);
	}	
	private void saveLotTrackOutEquipmentList(UiMapDto dto, Map<String, Object> lotInfo, DataSetMap equipmentList, Date time)  throws Exception
	{
		Map<String, Object> equipment         = new HashMap<>();
		Map<String, Object> paramEquipmentext = new HashMap<>();
		Map<String, Object> paramCode         = new HashMap<>();
		Map<String, Object> lookupValues      = new HashMap<>();
		Map<String, Object> paramEquipment    = new HashMap<>();
		Map<String, Object> paramLed          = new HashMap<>();
		Map<String, Object> lotequipment      = new HashMap<>();
		Map<String, Object> lotequipmentInfo  = new HashMap<>();
		
		int result = 0;
		String lotId =  lotInfo.get("LOTID").toString();
		
		for (int i = 0, len = equipmentList.size(); i < len; i++)
		{
			equipment = equipmentList.get(i);
			String equipmentId = StringUtil.Object2String(equipment.get("EQUIPMENTID"));
			
			paramEquipmentext.put("EQUIPMENTID", equipmentId);
			Map<String, Object> equipmentextInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasEquipmentext", paramEquipmentext);
			
			
			String managementState = StringUtil.Object2String(equipmentextInfo.get("MANAGEMENTSTATE"));
			
			if (!managementState.equals("Demo") && !managementState.equals("Lease") && !managementState.equals("Normal"))
			{
				 paramCode.put("LOOKUP_TYPE", "EquipmentState");
				 paramCode.put("LOOKUP_CODE",  managementState);
				 
				// List<Map<String, Object>> lookupValuesInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectCmdLookupValuesList", paramCode);
				 lookupValues = generalDao.addSelect(NAMESAPCE_COMM + ".selectCmdLookupValuesList", paramCode).get(0);
				
			//	String state =  serviceDictionary.selectDictionaryName(lookupValues.get("DICTIONARYID").toString()); 
				
				// 설비 관리 상태가 {0} 상태 입니다.
				throw new BizException("ManagementStateNotAvaiable", StringUtil.Object2String(lookupValues.get("MEANING")));
			}
			
			// Check Equipment State id Down			
			paramEquipment.put("EQUIPMENTID", equipment.get("EQUIPMENTID"));
			
			lotequipmentInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasEquipment", paramEquipment);
			
			String state    = StringUtil.Object2String(lotequipmentInfo.get("STATE"));
			String e10State = StringUtil.Object2String(lotequipmentInfo.get("E10STATE")); 
			
			if (state.equals("Down"))
			{
				 paramCode.put("LOOKUP_TYPE", "EESEquipmentState");
				 paramCode.put("LOOKUP_CODE",  e10State);
				 
				// List<Map<String, Object>> lookupValuesInfo = generalDao.addSelect(NAMESAPCE_COMM + ".selectCmdLookupValuesList", paramCode);
				 lookupValues = generalDao.addSelect(NAMESAPCE_COMM + ".selectCmdLookupValuesList", paramCode).get(0);
				//사전정보
				// String eqpState =  serviceDictionary.selectDictionaryName(lookupValues.get("DICTIONARYID").toString()); 	
				 // 설비가 {0} 사유로 Down 상태입니다.
				 throw new BizException("EquipmentStateIsDown", StringUtil.Object2String(lookupValues.get("DICTIONARYID")));
			}
			
			
			paramLed.put("LOTID"                 , lotId);
			paramLed.put("EQUIPMENTID"           , equipment.get("EQUIPMENTID"));
			paramLed.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			paramLed.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			paramLed.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
			
			List<Map<String, Object>> lotequipmentListInfo =  generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotequipmentList", paramLed);
			
			if (lotequipmentListInfo.size() > 0)
			{
				lotequipment = lotequipmentListInfo.get(0);
				
				lotequipment.put("PROCESSSTATE", lotInfo.get("PROCESSSTATE"));
				if(lotequipment.get("TRACKOUTTIME") == null)
				{
					lotequipment.put("TRACKOUTTIME", time);
				}
				lotequipment.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
				
				result +=  generalDao.addUpdate(NAMESAPCE + ".updatePcmLotequipment", lotequipment);			
			}
			
			// Update Equipment State
			Map<String, Object> map = new HashMap<>();
			map.put("LOTID", lotId);
			map.put("EQUIPMENTID", equipmentId);
			
			int equipmentCount =  generalDao.addSelectCount(NAMESAPCE + ".getRunEquipmentCount", map) ;
			
			if (equipmentCount == 0)
			{
				
				paramEquipment.put("EQUIPMENTID", equipment.get("EQUIPMENTID"));
				
				lotequipmentInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasEquipment", paramEquipment);
				
				if (lotequipmentInfo == null)
				{
					
					throw new BizException("InValidData001", String.format("EquipmentId = %s", equipment.get("EQUIPMENTID")));
				}
				
				lotequipmentInfo.put("STATE", "Idle");
				result +=  generalDao.addUpdate(NAMESAPCE + ".updateBasEquipment", lotequipmentInfo);
				
			}
		}
		putDataSetMap(dto, result);
	}	
	
	private void saveLotWorker(UiMapDto dto, Map<String, Object> lotInfo, String userList)  throws Exception
	{
		Map<String, Object> paramLotWork     = new HashMap<>();
		Map<String, Object> paramUser        = new HashMap<>();
		int result = 0;
		
		for (String userId : userList.split(","))
		{
			paramLotWork.put("LOTID", lotInfo.get("LOTID"));
			paramLotWork.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
			Map<String, Object> LotWorkInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectPcmLotworker", paramLotWork);
			
			if (LotWorkInfo != null)
			{
				throw new BizException("InValidData002", String.format("TxnHistKey = %s LotId = %s", TxnHistKey.getTxnHistKey(), lotInfo.get("LOTID")));
			}else {
				LotWorkInfo = new HashMap<String, Object>();
			}
			
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
			
			String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")) ;
			String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION")) ;
			
			String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
			
			LotWorkInfo.put("LOTID", lotInfo.get("LOTID"));
			LotWorkInfo.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
			LotWorkInfo.put("PLANTID"               , lotInfo.get("PLANTID"));
			LotWorkInfo.put("AREAID"                , lotInfo.get("AREAID"));
			LotWorkInfo.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
			LotWorkInfo.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
			LotWorkInfo.put("PROCESSDEFID"          , lotInfo.get("PROCESSDEFID"));
			LotWorkInfo.put("PROCESSDEFVERSION"     , lotInfo.get("PROCESSDEFVERSION"));
			LotWorkInfo.put("PROCESSPATHID"         , processPathId);
			LotWorkInfo.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
			LotWorkInfo.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			LotWorkInfo.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			LotWorkInfo.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
			LotWorkInfo.put("USERID"                , userId);
			
			paramUser.put("USER_ID", userId);
			Map<String, Object> usersInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectCmdUsers", paramUser);
			
			if(usersInfo == null)
			{
				LotWorkInfo.put("WORKERNAME"        , userId);
			}
			else
			{
				LotWorkInfo.put("WORKERNAME"        , usersInfo.get("USER_NM"));
			}
			
			result +=  generalDao.addUpdate(NAMESAPCEWIP + ".insertPcmLotworker", LotWorkInfo);
		}
		
		putDataSetMap(dto, result);
		
	}
	
	private void saveDurableLotTempData(UiMapDto dto, Map<String, Object>  dataInfo, Map<String, Object> lotInfo, Map<String, Object> durable, int sequence,Date time)  throws Exception
	{
		Map<String, Object> paramProductdefinition     = new HashMap<>();
		Map<String, Object> paramDurablelot            = new HashMap<>();
		
		int result = 0; 
		
		paramProductdefinition.put("PRODUCTDEFID"     , lotInfo.get("PRODUCTDEFID"));
		paramProductdefinition.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		
		Map<String, Object> productdefinitionInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProductdefinitionList", paramProductdefinition);
		
		String productDefType = StringUtil.Object2String(productdefinitionInfo.get("PRODUCTDEFTYPE")); 
		
		paramDurablelot.put("DURABLELOTID", durable.get("DURABLELOTID"));
		Map<String, Object> durablelotInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectTomDurablelot", paramDurablelot);
		
		String durableState = StringUtil.Object2String(durablelotInfo.get("DURABLESTATE")); 
		
		if (!productDefType.equals("SubAssembly") && durableState.equals(DurableState.InUse))
		{
			// 사용 중인 치공구 입니다.
			throw new BizException("DurableLotIsUsing", String.format("DurableLotId = %s", durable.get("DURABLELOTID")));
		}
		
		if (durableState.equals(DurableState.Cleaning))
		{
			// 연마 중인 치공구 입니다.
			throw new BizException("DurableLotIsCleaning", String.format("DurableLotId = %s", durable.get("DURABLELOTID")));
		}
		
		if (durableState.equals(DurableState.Repairing))
		{
			// 수리/수정 중인 치공구 입니다.
			throw new BizException("DurableLotIsRepairing", String.format("DurableLotId = %s", durable.get("DURABLELOTID")));
		}
		
        Map<String, Object> param     = new HashMap<>();
		
		param.put("LOTID"           , lotInfo.get("LOTID"));
		param.put("MATERIALLOTID"   , durable.get("DURABLELOTID"));
		param.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		
		List<Map<String, Object>> consumemateriallotTempListInfo =  generalDao.addSelect(NAMESAPCEWIP + ".selectPcmConsumemateriallotTempList", param);
		
		if (consumemateriallotTempListInfo.size()>0)
		{
			throw new BizException("InValidData002", String.format("LotId = %s  DurableLotId = %s  ProcessSegmentId = %s", dataInfo.get("LOTID"), durable.get("DURABLELOTID"), lotInfo.get("PROCESSSEGMENTID")));
		}
		
		
		Map<String, Object> paramDurabledefinition     = new HashMap<>();
		
		paramDurabledefinition.put("DURABLEDEFID"     , durable.get("DURABLEDEFID"));
		paramDurabledefinition.put("DURABLEDEFVERSION", durable.get("DURABLEDEFVERSION"));
		
		Map<String, Object> durabledefinitionInfo =  generalDao.addSelectOneMap(NAMESAPCE + ".selectTomDurabledefinition", paramDurabledefinition);
		
		if (durabledefinitionInfo == null)
		{
			throw new BizException("InValidData001", String.format("DurableDefId = %s  DurableDefVersion = %s", durable.get("DURABLELOTID"), durable.get("DURABLEDEFVERSION")));
		}
		
		Map<String, Object> paramArea     = new HashMap<>();
		paramArea.put("AREAID", lotInfo.get("AREAID"));
		List<Map<String, Object>> areaInfo =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramArea);
		
		Map<String, Object> area = areaInfo.get(0);

		Map<String, Object> temp     = new HashMap<>();
		
		temp.put("LOTID"             , dataInfo.get("LOTID"));
		temp.put("MATERIALLOTID"     , durable.get("DURABLELOTID"));
		temp.put("PROCESSSEGMENTID"  , lotInfo.get("PROCESSSEGMENTID"));
		temp.put("ENTERPRISEID"      , dataInfo.get("ENTERPRISEID"));
		temp.put("PLANTID"           , dataInfo.get("PLANTID"));
		temp.put("MATERIALTYPE"      , "Durable");
		temp.put("AREAID"            , lotInfo.get("AREAID"));
		temp.put("EQUIPMENTID"       , durable.get("EQUIPMENTID"));
		temp.put("MATERIALDEFID"     , durable.get("DURABLEDEFID"));
		temp.put("MATERIALDEFVERSION", durable.get("DURABLEDEFVERSION"));
		temp.put("SEQUENCE"          , (double)sequence);
		
	
		 result +=  generalDao.addInsert(NAMESAPCE + ".insertPcmConsumemateriallotTemp", temp);
		
		
		
		//Lot 별 치공구 사용 내역 추가 위에 consummaterial temp 저장 로직 삭제 예정 배선용 2019.11.06
		 Map<String, Object> lotdurableData     = new HashMap<>();
		
		lotdurableData.put("EQUIPMENTID"          , durable.get("EQUIPMENTID"));
		lotdurableData.put("DURABLELOTID"         , durable.get("DURABLELOTID"));
		lotdurableData.put("LOTID"                , lotInfo.get("LOTID"));
		lotdurableData.put("PROCESSSEGMENTID"     , lotInfo.get("PROCESSSEGMENTID"));
		lotdurableData.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		lotdurableData.put("WORKCOUNT"            , lotInfo.get("WORKCOUNT"));
		lotdurableData.put("WORKSTARTTIME"        , time);
		
		 result +=  generalDao.addInsert(NAMESAPCE + ".insertPcmLotdurable", lotdurableData);
		
		
		durablelotInfo.put("DURABLESTATE", "InUse");
		durablelotInfo.put("EQUIPMENTID" , durable.get("EQUIPMENTID"));
		durablelotInfo.put("LASTTXNUSER" , SessionUtil.getSessionValue("USER_ID"));
		durablelotInfo.put("MODIFIER"    , SessionUtil.getSessionValue("USER_ID"));
		
		result +=  generalDao.addUpdate(NAMESAPCE + ".updateTomDurablelot", durablelotInfo);
		
	
		putDataSetMap(dto, result);
	}
	
	private void saveConsumeMaterialLotTempData(UiMapDto dto, Map<String, Object> dataInfo, Map<String, Object> lotInfo, Map<String, Object> consumableList, int sequence)  throws Exception
	{
		Map<String, Object> param     = new HashMap<>();
		
		param.put("LOTID",  dataInfo.get("LOTID"));
		param.put("MATERIALLOTID",  consumableList.get("CONSUMABLELOTID"));
		
		List<Map<String, Object>> consumemateriallotTempListInfo =  generalDao.addSelect(NAMESAPCE + ".selectPcmConsumemateriallotTempList", param);
		Map<String, Object> consumemateriallotTemp = null;
		if(consumemateriallotTempListInfo.size() >0)
			consumemateriallotTemp = consumemateriallotTempListInfo.get(0);
		
		if (consumemateriallotTemp != null)
		{
			return;
		}
		
		Map<String, Object> paramconsumabledefinitio     = new HashMap<>();
		
		paramconsumabledefinitio.put("CONSUMABLEDEFID", consumableList.get("CONSUMABLEDEFID"));
		paramconsumabledefinitio.put("CONSUMABLEDEFVERSION", consumableList.get("CONSUMABLEDEFVERSION"));
			
		List<Map<String, Object>> consumabledefinitionInfo =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasConsumabledefinition", paramconsumabledefinitio);

		if (consumabledefinitionInfo.size() == 0)
		{
			throw new BizException("InValidData001", String.format("ConsumableDefId = %s  ConsumableDefVersion = %s", consumableList.get("CONSUMABLEDEFID"), consumableList.get("CONSUMABLEDEFVERSION")));
		}
		
		String keyColumn = StringUtil.Object2String(consumableList.get("KEYCOLUMN"));  
		String[] splitKey = keyColumn.split("\\|");
		String consumableDefId = splitKey[0];
		String consumableDefVersion = splitKey[1];
		
		Map<String, Object> paramArea     = new HashMap<>();
		paramArea.put("AREAID", lotInfo.get("AREAID"));
		List<Map<String, Object>> areaInfo =  generalDao.addSelect(NAMESAPCE_COMM + ".selectBasArea", paramArea);
		
		Map<String, Object> area = areaInfo.get(0);

		Map<String, Object> temp     = new HashMap<>();
		
		temp.clear();
		
		temp.put("LOTID"             , dataInfo.get("LOTID"));
		temp.put("MATERIALLOTID"     , consumableList.get("MATERIALLOTID"));
		temp.put("PROCESSSEGMENTID"  , lotInfo.get("PROCESSSEGMENTID"));
		temp.put("ENTERPRISEID"      , dataInfo.get("ENTERPRISEID"));
		temp.put("PLANTID"           , dataInfo.get("PLANTID"));
		temp.put("MATERIALTYPE"      , "Consumable");
		temp.put("AREAID"            , lotInfo.get("AREAID"));
		temp.put("MATERIALDEFID"     , consumableDefId);
		temp.put("MATERIALDEFVERSION", consumableDefVersion);
		temp.put("CONSUMEDQTY"       , consumableList.get("INPUTQTY"));
		temp.put("SEQUENCE"          , (double)sequence);
		temp.put("WAREHOUSEID"       , area.get("WAREHOUSEID"));
		temp.put("TXNGROUPHISTKEY"   , TxnHistKey.getTxnGroupHistKey());
	
		int result =  generalDao.addInsert(NAMESAPCE + ".insertPcmConsumemateriallotTemp", temp);
		
		putDataSetMap(dto, result);
	}
	
	private Map<String, Object> saveLotWeek(UiMapDto dto, Map<String, Object> lotData, String printWeek, Date time)  throws Exception
	{
			
		Map<String, Object> lotInfo = new HashMap<>(); 
		 
	    lotInfo = wipService.validateLotInfo(StringUtil.Object2String(lotData.get("LOTID")));
		
		lotInfo.put("WEEK"             , printWeek);
		lotInfo.put("LASTTXNHISTKEY"   , TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY"       , lotInfo.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotInfo);	
		
		return lotInfo;
		
	}	
	private void insertConsumableLot(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> consumable)   throws Exception
	{
		Map<String, Object> paramConsumablelot = new HashMap<>();
		Map<String, Object> consumemateriallot = new HashMap<>();
		
		paramConsumablelot.put("CONSUMABLELOTID", consumable.get("CONSUMABLELOTID"));
		paramConsumablelot.put("WAREHOUSEID"    , consumable.get("WAREHOUSEID"));
		
		Map<String, Object> consumablelotInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectMtmConsumablelot", paramConsumablelot);
		
		
		if (consumablelotInfo != null)
		{
			throw new BizException("InValidData002", String.format("ConsumableLotId = %s", consumable.get("CONSUMABLELOTID")));
		}
		

		
		Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo) ;
		
		String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")) ;
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION")) ;
		
		String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
		
		consumemateriallot.put("MATERIALLOTID"          , consumable.get("CONSUMABLELOTID"));
		consumemateriallot.put("LOTID"                  , lotInfo.get("LOTID"));
		consumemateriallot.put("MATERIALTYPE"           , "Consumable");
		consumemateriallot.put("ENTERPRISEID"           , lotInfo.get("ENTERPRISEID"));
		consumemateriallot.put("PLANTID"                , lotInfo.get("PLANTID"));
		consumemateriallot.put("AREAID"                 , lotInfo.get("AREAID"));
		consumemateriallot.put("CONSUMEDQTY"            , consumable.get("DEFECTQTY"));
		consumemateriallot.put("PRODUCTDEFID"           , lotInfo.get("PRODUCTDEFID"));
		consumemateriallot.put("PRODUCTDEFVERSION"      , lotInfo.get("PRODUCTDEFVERSION"));
		consumemateriallot.put("PROCESSDEFID"           , lotInfo.get("PROCESSDEFID"));
		consumemateriallot.put("PROCESSDEFVERSION"      , lotInfo.get("PROCESSDEFVERSION"));
		consumemateriallot.put("PROCESSPATHID"          , processPathId);
		consumemateriallot.put("USERSEQUENCE"           , lotInfo.get("USERSEQUENCE"));
		consumemateriallot.put("PROCESSSEGMENTID"       , lotInfo.get("PROCESSSEGMENTID"));
		consumemateriallot.put("PROCESSSEGMENTVERSION"  , lotInfo.get("PROCESSSEGMENTVERSION"));
		consumemateriallot.put("WORKCOUNT"              , lotInfo.get("WORKCOUNT"));
		consumemateriallot.put("CONSUMABLEDEFID"        , consumable.get("CONSUMABLEDEFID"));
		consumemateriallot.put("CONSUMABLEDEFVERSION"   , consumable.get("CONSUMABLEDEFVERSION"));
		consumemateriallot.put("WAREHOUSEID"            , consumable.get("WAREHOUSEID"));
		
        generalDao.addInsert(NAMESAPCE + ".insertMtmConsumemateriallot", consumemateriallot);
		
	
	}	
	private void saveConsumeMaterialLotByConsumableForBackFlush(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> data)  throws Exception
	{
		Map<String, Object> consumemateriallot = new HashMap<>();
	    Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo) ;
		
		String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")) ;
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION")) ;
		
		String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
		
		consumemateriallot.put("MATERIALLOTID"          , "*");
		consumemateriallot.put("LOTID"                  , lotInfo.get("LOTID"));
		consumemateriallot.put("MATERIALTYPE"           , "Consumable");
		consumemateriallot.put("ENTERPRISEID"           , lotInfo.get("ENTERPRISEID"));
		consumemateriallot.put("PLANTID"                , lotInfo.get("PLANTID"));
		consumemateriallot.put("AREAID"                 , lotInfo.get("AREAID"));
		consumemateriallot.put("CONSUMEDQTY"            , data.get("REQUIREMENTQTY"));
		consumemateriallot.put("PRODUCTDEFID"           , lotInfo.get("PRODUCTDEFID"));
		consumemateriallot.put("PRODUCTDEFVERSION"      , lotInfo.get("PRODUCTDEFVERSION"));
		consumemateriallot.put("PROCESSDEFID"           , lotInfo.get("PROCESSDEFID"));
		consumemateriallot.put("PROCESSDEFVERSION"      , lotInfo.get("PROCESSDEFVERSION"));
		consumemateriallot.put("PROCESSPATHID"          , processPathId);
		consumemateriallot.put("USERSEQUENCE"           , lotInfo.get("USERSEQUENCE"));
		consumemateriallot.put("PROCESSSEGMENTID"       , lotInfo.get("PROCESSSEGMENTID"));
		consumemateriallot.put("PROCESSSEGMENTVERSION"  , lotInfo.get("PROCESSSEGMENTVERSION"));
		consumemateriallot.put("WORKCOUNT"              , lotInfo.get("WORKCOUNT"));
		consumemateriallot.put("CONSUMABLEDEFID"        , data.get("CONSUMABLEDEFID"));
		consumemateriallot.put("CONSUMABLEDEFVERSION"   , data.get("CONSUMABLEDEFVERSION"));
		consumemateriallot.put("WAREHOUSEID"            , data.get("WAREHOUSEID"));
		
        generalDao.addInsert(NAMESAPCE + ".insertMtmConsumemateriallot", consumemateriallot);
		
	
		
	}	
	
	private void saveConsumableLotByDurable(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> consumable, Date time)   throws Exception
	{
		Map<String, Object> paramConsumablelot = new HashMap<>();
		Map<String, Object> paramLotdurable = new HashMap<>();
		Map<String, Object> paramDurablelot = new HashMap<>();
		Map<String, Object> consumemateriallot = new HashMap<>();
				
		paramConsumablelot.put("CONSUMABLELOTID", consumable.get("CONSUMABLELOTID"));
		paramConsumablelot.put("WAREHOUSEID"    , consumable.get("WAREHOUSEID"));
		
		Map<String, Object> consumablelotInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectMtmConsumablelot", paramConsumablelot);
		
		
		if (consumablelotInfo == null)
		{
			throw new BizException("InValidData002", String.format("ConsumableLotId = %s", consumable.get("CONSUMABLELOTID")));
		}
		

		
		Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo) ;
		
		String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
		String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));
		
		String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
		
		consumemateriallot.put("MATERIALLOTID"          , consumable.get("MATERIALLOTID"));
		consumemateriallot.put("LOTID"                  , lotInfo.get("LOTID"));
		consumemateriallot.put("MATERIALTYPE"           , "Durable");
		consumemateriallot.put("ENTERPRISEID"           , lotInfo.get("ENTERPRISEID"));
		consumemateriallot.put("PLANTID"                , lotInfo.get("PLANTID"));
		consumemateriallot.put("AREAID"                 , lotInfo.get("AREAID"));
		consumemateriallot.put("CONSUMEDQTY"            , consumable.get("USINGQTY"));
		consumemateriallot.put("EQUIPMENTID"            , consumable.get("EQUIPMENTID"));
		consumemateriallot.put("PRODUCTDEFID"           , lotInfo.get("PRODUCTDEFID"));
		consumemateriallot.put("PRODUCTDEFVERSION"      , lotInfo.get("PRODUCTDEFVERSION"));
		consumemateriallot.put("PROCESSDEFID"           , lotInfo.get("PROCESSDEFID"));
		consumemateriallot.put("PROCESSDEFVERSION"      , lotInfo.get("PROCESSDEFVERSION"));
		consumemateriallot.put("PROCESSPATHID"          , processPathId);
		consumemateriallot.put("USERSEQUENCE"           , lotInfo.get("USERSEQUENCE"));
		consumemateriallot.put("PROCESSSEGMENTID"       , lotInfo.get("PROCESSSEGMENTID"));
		consumemateriallot.put("PROCESSSEGMENTVERSION"  , lotInfo.get("PROCESSSEGMENTVERSION"));
		consumemateriallot.put("WORKCOUNT"              , lotInfo.get("WORKCOUNT"));
		consumemateriallot.put("CONSUMABLEDEFID"        , consumable.get("DURABLEDEFID"));
		consumemateriallot.put("CONSUMABLEDEFVERSION"   , consumable.get("DURABLEDEFVERSION"));
		
		generalDao.addInsert(NAMESAPCE + ".insertMtmConsumemateriallot", consumemateriallot);
		
		 paramLotdurable.put("TXNHISTKEY"  , consumable.get("TXNHISTKEY"));
		 paramLotdurable.put("LOTID"       , lotInfo.get("LOTID"));
		 paramLotdurable.put("EQUIPMENTID" , lotInfo.get("EQUIPMENTID"));
		 paramLotdurable.put("DURABLELOTID", lotInfo.get("DURABLELOTID"));
		
		Map<String, Object> lotdurableInfo =  generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotdurable", paramLotdurable);
		if(lotdurableInfo == null)
		{
			throw new BizException("InValidData001", String.format("TXNHISTKEY = %s LOTID = %s EQUIPMENTID = %s DURABLELOTID = %s", consumable.get("TXNHISTKEY"), lotInfo.get("LOTID"), lotInfo.get("EQUIPMENTID"), consumable.get("DURABLELOTID")));
		}
		
		
		lotdurableInfo.put("USEDQTY", consumable.get("USINGQTY"));
		
		
        if(lotdurableInfo.get("WORKENDTIME") == null)
        {
        	lotdurableInfo.put("WORKENDTIME", time);
        	
        	Map<String, Object> map = new HashMap<>();
			map.put("LOTID"       ,  lotInfo.get("LOTID"));
			map.put("DURABLELOTID",  consumable.get("DURABLELOTID"));

            int  durableCount = generalDao.addSelectCount(NAMESAPCE + ".getInUseDurableCount", map);   
            
            if(durableCount == 0)
    		{
            	paramDurablelot.put("DURABLELOTID", consumable.get("DURABLELOTID"));
        		Map<String, Object> durablelotInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectTomDurablelot", paramDurablelot);
        		
        		if (durablelotInfo == null)
				{
        			throw new BizException("InValidData001", String.format("DURABLELOTID = %s", consumable.get("DURABLELOTID")));
				}
        		
        		durablelotInfo.put("DURABLESTATE", DurableState.Available);
        		durablelotInfo.put("EQUIPMENTID" ,"");
        		
        		generalDao.addUpdate(NAMESAPCE + ".updateTomDurablelot", durablelotInfo);  
        		
    		}
           
        }
        
        generalDao.addUpdate(NAMESAPCE + ".updatePcmLotdurable", lotdurableInfo);  
		
	
	}		
	private Map<String, Object> saveLot(String lotId, String childLotId)  throws Exception
	{
		Map<String, Object> paramProductdefinition      = new HashMap<>();
	
			 
		Map<String, Object> lotInfo  = wipService.validateLotInfo(lotId);
		
		paramProductdefinition.put("PRODUCTDEFID"     , lotInfo.get("PRODUCTDEFID"));
		paramProductdefinition.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		
		Map<String, Object> productdefinitionInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProductdefinitionList", paramProductdefinition);
		
		
		if (productdefinitionInfo == null)
		{
			throw new BizException("InValidData001", String.format("ProductDefId = %s, ProductDefVersion = %s", lotInfo.get("PRODUCTDEFID"), lotInfo.get("PRODUCTDEFVERSION")));
		}
		
		// Get Array Per Quantity
		double arrayPerQty = StringUtil.Object2Double(lotInfo.get("PCSARY"));
		
		lotInfo.put("PCSQTY", lotInfo.get("QTY"));
		
		if (arrayPerQty > 0)
			
		    lotInfo.put("ARRAYQTY", StringUtil.Object2Double(lotInfo.get("QTY")) / arrayPerQty );
		
		if ( StringUtil.Object2Double(lotInfo.get("PANELPERQTY")) > 0)
		{
			 lotInfo.put("PANELQTY", Math.ceil(StringUtil.Object2Double(lotInfo.get("QTY")) / StringUtil.Object2Double(lotInfo.get("PANELPERQTY"))));
		}
		
		if (StringUtil.Object2Double(lotInfo.get("QTY")) <= 0)
		{
		
			lotInfo.put("PREVLOTSTATE", lotInfo.get("LOTSTATE"));
			lotInfo.put("LOTSTATE"    , LotState.Terminated);
			
		}
		
		lotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		lotInfo.put("TXNHISTKEY", lotInfo.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lotInfo); 
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotInfo); 
		
		Map<String, Object> childLotInfo = wipService.validateLotInfo(childLotId);		
		
		childLotInfo.put("LOTCREATEDTYPE", "Defect");
		childLotInfo.put("ISLOCKING", "Y");
		childLotInfo.put("ISDEFECTED", "Y");
		childLotInfo.put("QTY", 0);
		childLotInfo.put("DEFECTQTY", childLotInfo.get("CREATEDQTY"));
		childLotInfo.put("PCSQTY", 0);
		childLotInfo.put("ARRAYQTY", 0);
		childLotInfo.put("PANELQTY", 0);
		childLotInfo.put("PANELPERQTY", lotInfo.get("PANELPERQTY"));
		childLotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		childLotInfo.put("TXNHISTKEY", childLotInfo.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", childLotInfo); 
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", childLotInfo); 
		
		
		return lotInfo;
	}	
	
	// AOI 검사 분석대상 데이터 저장
	private void saveQcAOIWorkCompleteAnalysisData(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> defectRow, String processDefId, String processDefVersion, String processSegmentType)  throws Exception
	{
		Map<String, Object> qcaoibbtworkcomplete  = new HashMap<>();
		
		qcaoibbtworkcomplete.put("LOTID", lotInfo.get("LOTID"));
		qcaoibbtworkcomplete.put("ENTERPRISEID", lotInfo.get("ENTERPRISEID"));
		qcaoibbtworkcomplete.put("PLANTID", lotInfo.get("PLANTID"));
		qcaoibbtworkcomplete.put("AREAID", lotInfo.get("AREAID"));
		qcaoibbtworkcomplete.put("PRODUCTDEFID", lotInfo.get("PRODUCTDEFID"));
		qcaoibbtworkcomplete.put("PRODUCTDEFVERSION", lotInfo.get("PRODUCTDEFVERSION"));
		qcaoibbtworkcomplete.put("PROCESSDEFID", processDefId);
		qcaoibbtworkcomplete.put("PROCESSDEFVERSION", processDefVersion);
		qcaoibbtworkcomplete.put("PROCESSSEGMENTID", lotInfo.get("PROCESSSEGMENTID"));
		qcaoibbtworkcomplete.put("PROCESSSEGMENTVERSION", lotInfo.get("PROCESSSEGMENTVERSION"));
		qcaoibbtworkcomplete.put("SEGMENTTYPE", processSegmentType);
		qcaoibbtworkcomplete.put("LAYERID", defectRow.get("LAYER"));
		qcaoibbtworkcomplete.put("DEFECTCODE", defectRow.get("DEFECTCODE"));
		qcaoibbtworkcomplete.put("USERSEQUENCE", lotInfo.get("USERSEQUENCE"));
		qcaoibbtworkcomplete.put("DEFECTCOUNT", defectRow.get("PCSQTY"));
		qcaoibbtworkcomplete.put("ISREWORK", "Y");
		qcaoibbtworkcomplete.put("INSPECTIONQTY", lotInfo.get("QTY"));
		qcaoibbtworkcomplete.put("REPAIRTARGETQTY", defectRow.get("ANALYSISQTY"));
		qcaoibbtworkcomplete.put("VALIDSTATE", "Valid");
		
		generalDao.addInsert(NAMESAPCE + ".insertPcmQcaoibbtworkcomplete", qcaoibbtworkcomplete);   
		
	}
	
	// AOI 검사 분석대상 데이터 저장
	private void saveQcAOIWorkCompleteAnalysisData(Map<String, Object> lotInfo, Map<String, Object> defectRow, String processSegmentType)  throws Exception
	{
		Map<String, Object> parm  = new HashMap<>();
		
		parm.put("LOTID"                 , lotInfo.get("LOTID"));
		parm.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
		parm.put("PLANTID"               , lotInfo.get("PLANTID"));
		parm.put("AREAID"                , lotInfo.get("AREAID"));
		parm.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
		parm.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
		parm.put("PROCESSDEFID"          , lotInfo.get("PROCESSDEFID"));
		parm.put("PROCESSDEFVERSION"     , lotInfo.get("PROCESSDEFVERSION"));
		parm.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
		parm.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		parm.put("SEGMENTTYPE"           , processSegmentType);
		parm.put("LAYERID"               , defectRow.get("LAYER"));
		parm.put("DEFECTCODE"            , defectRow.get("DEFECTCODE"));
		
		Map<String, Object> qcaoibbtworkcomplete = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmQcaoibbtworkcomplete", parm);
	    
		if(qcaoibbtworkcomplete != null)
		{
			qcaoibbtworkcomplete.put("REPAIRRESULTQTY", defectRow.get("ANALYSISGOODQTY"));
			qcaoibbtworkcomplete.put("REPAIRRESULTPNLQTY", defectRow.get("ANALYSISGOODPNLQTY"));
			
			generalDao.addUpdate(NAMESAPCE + ".updatePcmQcaoibbtworkcomplete", qcaoibbtworkcomplete);   
		}
		
		
	}	
	
	// AOI 검사 불량 데이터 저장
	private void saveQcAOIWorkCompleteData(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> defectRow, String processDefId, String processDefVersion, String processSegmentType) throws Exception
	{
        Map<String, Object> qcaoibbtworkcomplete  = new HashMap<>();
		
		qcaoibbtworkcomplete.put("LOTID"                 , lotInfo.get("LOTID"));
		qcaoibbtworkcomplete.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
		qcaoibbtworkcomplete.put("PLANTID"               , lotInfo.get("PLANTID"));
		qcaoibbtworkcomplete.put("AREAID"                , lotInfo.get("AREAID"));
		qcaoibbtworkcomplete.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
		qcaoibbtworkcomplete.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
		qcaoibbtworkcomplete.put("PROCESSDEFID"          , processDefId);
		qcaoibbtworkcomplete.put("PROCESSDEFVERSION"     , processDefVersion);
		qcaoibbtworkcomplete.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
		qcaoibbtworkcomplete.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		qcaoibbtworkcomplete.put("SEGMENTTYPE"           , processSegmentType);
		qcaoibbtworkcomplete.put("LAYERID"               , defectRow.get("LAYER"));
		qcaoibbtworkcomplete.put("DEFECTCODE"            , defectRow.get("DEFECTCODE"));
		qcaoibbtworkcomplete.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
		qcaoibbtworkcomplete.put("DEFECTCOUNT"           , defectRow.get("PCSQTY"));
		qcaoibbtworkcomplete.put("ISREWORK"              , "N");
		qcaoibbtworkcomplete.put("INSPECTIONQTY"         , lotInfo.get("QTY"));
		qcaoibbtworkcomplete.put("REPAIRTARGETQTY"       , defectRow.get("ANALYSISQTY"));
		qcaoibbtworkcomplete.put("VALIDSTATE"            , "Valid");
		
		generalDao.addInsert(NAMESAPCE + ".insertPcmQcaoibbtworkcomplete", qcaoibbtworkcomplete);   
		
	}
	
	// Save Rework Return Data
	private void saveReworkReturnData(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> dataInfo) throws Exception
	{
		String subProcessDefId             = StringUtil.Object2String(dataInfo.get("SUBPROCESSDEFID")); 
		String subProcessDefVersion        = StringUtil.Object2String(dataInfo.get("SUBPROCESSDEFVERSION"));
		String reworkResourceId            = StringUtil.Object2String(dataInfo.get("REWORKRESOURCEID"));
		String reworkAreaId                = StringUtil.Object2String(dataInfo.get("REWORKAREAID")) ;
		String reworkProcessSegmentId      = "";
		String reworkProcessSegmentVersion = "";
		
		
		
		Map<String, Object> param = new HashMap<>();
		param.put("PROCESSDEFID", subProcessDefId);
		param.put("PROCESSDEFVERSION", subProcessDefVersion);
		
		List<Map<String, Object>> resultInfo = generalDao.addSelect(NAMESAPCE + ".getFirstProcessSegmentForRework", param);    
		
		if (resultInfo.size() > 0)
		{
			Map<String, Object> pp = resultInfo.get(0);
			
			reworkProcessSegmentId      = StringUtil.Object2String(pp.get("PROCESSSEGMENTID")) ;
			reworkProcessSegmentVersion = StringUtil.Object2String( pp.get("PROCESSSEGMENTVERSION"));
		}
		
		Map<String, Object> paramReworkreturn = new HashMap<>();
		Map<String, Object> reworkreturn = new HashMap<>();
		
		paramReworkreturn.put("LOTID", lotInfo.get("LOTID"));
		
		Map<String, Object> reworkreturnInfo =  generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmReworkreturn", paramReworkreturn); 
		
		if (reworkreturnInfo == null)
		{
			
			reworkreturn.put("LOTID"                     , lotInfo.get("LOTID"));
			reworkreturn.put("PRODUCTDEFID"              , lotInfo.get("PRODUCTDEFID"));
			reworkreturn.put("PRODUCTDEFVERSION"         , lotInfo.get("PRODUCTDEFVERSION"));
			reworkreturn.put("PROCESSDEFID"              , lotInfo.get("PROCESSDEFID"));
			reworkreturn.put("PROCESSDEFVERSION"         , lotInfo.get("PROCESSDEFVERSION"));
			reworkreturn.put("SUBPROCESSDEFID"           , subProcessDefId);
			reworkreturn.put("SUBPROCESSDEFVERSION"      , subProcessDefVersion);
			reworkreturn.put("FROMPROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			reworkreturn.put("FROMPROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			reworkreturn.put("FROMPROCESSSTATE"          , lotInfo.get("PROCESSSTATE"));
			reworkreturn.put("FROMAREAID"                , lotInfo.get("AREAID"));
			reworkreturn.put("FROMRESOURCEID"            , lotInfo.get("RESOURCEID"));
			reworkreturn.put("REWORKPROCESSSEGMENTID"    , reworkProcessSegmentId);
			reworkreturn.put("REWORKPROCESSSEGMENTVERSION", reworkProcessSegmentVersion);
			reworkreturn.put("REWORKAREAID"               , reworkAreaId);
			reworkreturn.put("REWORKRESOURCE"             , reworkResourceId);
			reworkreturn.put("TOPROCESSSEGMENTID"         , lotInfo.get("PROCESSSEGMENTID"));
			reworkreturn.put("TOPROCESSSEGMENTVERSION"    , lotInfo.get("PROCESSSEGMENTVERSION"));
			reworkreturn.put("TOPROCESSSTATE"             , lotInfo.get("PROCESSSTATE"));
			reworkreturn.put("TORESOURCEID"               , lotInfo.get("RESOURCEID"));
			reworkreturn.put("TOAREAID"                   , lotInfo.get("AREAID"));
			reworkreturn.put("MOVESTATE"                  , "Move");
			reworkreturn.put("WORKCOUNT"                  , lotInfo.get("WORKCOUNT"));
			reworkreturn.put("REWORKQTY"                  , lotInfo.get("QTY"));
			reworkreturn.put("VALIDSTATE"                 , "Valid");
			
			generalDao.addInsert(NAMESAPCE + ".insertPcmReworkreturn", reworkreturn);   
		}
		else
		{
			
			reworkreturnInfo.put("LOTID"                     , lotInfo.get("LOTID"));
			reworkreturnInfo.put("PRODUCTDEFID"              , lotInfo.get("PRODUCTDEFID"));
			reworkreturnInfo.put("PRODUCTDEFVERSION"         , lotInfo.get("PRODUCTDEFVERSION"));
			reworkreturnInfo.put("PROCESSDEFID"              , lotInfo.get("PROCESSDEFID"));
			reworkreturnInfo.put("PROCESSDEFVERSION"         , lotInfo.get("PROCESSDEFVERSION"));
			reworkreturnInfo.put("SUBPROCESSDEFID"           , subProcessDefId);
			reworkreturnInfo.put("SUBPROCESSDEFVERSION"      , subProcessDefVersion);
			reworkreturnInfo.put("FROMPROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			reworkreturnInfo.put("FROMPROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			reworkreturnInfo.put("FROMPROCESSSTATE"          , lotInfo.get("PROCESSSTATE"));
			reworkreturnInfo.put("FROMAREAID"                , lotInfo.get("AREAID"));
			reworkreturnInfo.put("FROMRESOURCEID"            , lotInfo.get("RESOURCEID"));
			reworkreturnInfo.put("REWORKPROCESSSEGMENTID"    , reworkProcessSegmentId);
			reworkreturnInfo.put("REWORKPROCESSSEGMENTVERSION", reworkProcessSegmentVersion);
			reworkreturnInfo.put("REWORKAREAID"               , reworkAreaId);
			reworkreturnInfo.put("REWORKRESOURCE"             , reworkResourceId);
			reworkreturnInfo.put("TOPROCESSSEGMENTID"         , lotInfo.get("PROCESSSEGMENTID"));
			reworkreturnInfo.put("TOPROCESSSEGMENTVERSION"    , lotInfo.get("PROCESSSEGMENTVERSION"));
			reworkreturnInfo.put("TOPROCESSSTATE"             , lotInfo.get("PROCESSSTATE"));
			reworkreturnInfo.put("TORESOURCEID"               , lotInfo.get("RESOURCEID"));
			reworkreturnInfo.put("TOAREAID"                   , lotInfo.get("AREAID"));
			reworkreturnInfo.put("MOVESTATE"                  , "Move");
			reworkreturnInfo.put("WORKCOUNT"                  , lotInfo.get("WORKCOUNT"));
			reworkreturnInfo.put("REWORKQTY"                  , lotInfo.get("QTY"));
			reworkreturnInfo.put("VALIDSTATE"                 , "Valid");
			
			generalDao.addUpdate(NAMESAPCE + ".updatePcmReworkreturn", reworkreturnInfo);   
			
		}
	
	}	
	// AOI/BBT/HOLE 검사 불량 데이터 저장
	private void saveInspectionDefectData(UiMapDto dto, Map<String, Object> lotInfo,  Map<String, Object> defectRow, String processSegmentType) throws Exception
	{
		Map<String, Object> inspectiondefect = new HashMap<>();
		
		inspectiondefect.put("TXNHISTKEY"    , TxnHistKey.getTxnHistKey());
		inspectiondefect.put("RESOURCETYPE"  , processSegmentType);
		inspectiondefect.put("RESOURCEID"    , lotInfo.get("LOTID"));
		inspectiondefect.put("DEFECTCODE"    , defectRow.get("DEFECTCODE"));
		inspectiondefect.put("PROCESSRELNO"  , "*");
		inspectiondefect.put("DEFECTQTY"     , defectRow.get("PCSQTY"));
		inspectiondefect.put("INSPECTIONQTY" , lotInfo.get("QTY"));
		inspectiondefect.put("SAMPLEQTY"     , lotInfo.get("QTY"));
		if (processSegmentType.equals("BBTInspection"))
		{
			inspectiondefect.put("QCSEGMENTID", "113");
		}
		
        generalDao.addInsert(NAMESAPCE + ".insertQamInspectiondefect", inspectiondefect);	
		
	}	
	
	// AOI/BBT/HOLE 검사 불량 데이터 저장
	private void saveInspectionDefectData(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> defectRow, String enterpriseId, String processSegmentType) throws Exception
	{
		Map<String, Object> inspectiondefect = new HashMap<>();
		
		double defectQty = 0;
		
		if("005".equals(defectRow.get("DEFECTCODEGROUPID")))
		{
			defectQty = StringUtil.Object2Double(defectRow.get("FINALDEFECTQTY"));
		}
		else
		{
			defectQty = StringUtil.Object2Double(defectRow.get("PCSQTY"));
		}
		
		inspectiondefect.put("TXNHISTKEY"    , TxnHistKey.getTxnHistKey());
		inspectiondefect.put("RESOURCETYPE"  , processSegmentType);
		inspectiondefect.put("RESOURCEID"    , lotInfo.get("LOTID"));
		inspectiondefect.put("DEFECTCODE"    , defectRow.get("DEFECTCODE"));
		inspectiondefect.put("PROCESSRELNO"  , "*");
		inspectiondefect.put("DEFECTQTY"     , defectQty);
		inspectiondefect.put("INSPECTIONQTY" , lotInfo.get("QTY"));
		inspectiondefect.put("SAMPLEQTY"     , lotInfo.get("QTY"));
		
        generalDao.addInsert(NAMESAPCE + ".insertQamInspectiondefect", inspectiondefect);	
		
	}		
	
	private void saveInspectionResultData(UiMapDto dto, Map<String, Object> lotInfo, int defectQty, String processDefId, String processDefVersion, String processSegmentType, Date time, String userId)  throws Exception
	{
		Map<String, Object> inspectionresult = new HashMap<>();
		Map<String, Object> param            = new HashMap<>();
			
		param.put("RESOURCETYPE", processSegmentType);
		param.put("RESOURCEID"  , lotInfo.get("LOTID"));
		param.put("PROCESSRELNO", "*");
				
		int resultCount = generalDao.addSelectCount(NAMESAPCE + ".selectQamInspectionresultCnt", param);
		
		String degree =   String.valueOf(resultCount + 1) ;
		
		double qty = StringUtil.Object2Double(lotInfo.get("QTY"));
				
		inspectionresult.put("TXNHISTKEY"            , TxnHistKey.getTxnHistKey());
		inspectionresult.put("RESOURCETYPE"          , processSegmentType);
		inspectionresult.put("RESOURCEID"            , lotInfo.get("LOTID"));
		inspectionresult.put("PROCESSRELNO"          , "*");
		inspectionresult.put("INSPECTIONDEFID"       , processSegmentType);
		inspectionresult.put("INSPECTIONDEFVERSION"  , "*");
		inspectionresult.put("DEGREE"                , degree);
		inspectionresult.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
		inspectionresult.put("PLANTID"               , lotInfo.get("PLANTID"));
		inspectionresult.put("INSPECTIONTYPE"        , processSegmentType);
		inspectionresult.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
		inspectionresult.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
		inspectionresult.put("PROCESSDEFID"          , "processDefId");
		inspectionresult.put("PROCESSDEFVERSION"     , "processDefVersion");
		inspectionresult.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
		inspectionresult.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		inspectionresult.put("INSPECTIONQTY"         , qty);
		inspectionresult.put("SAMPLEQTY"             , qty);
		inspectionresult.put("SPECOUTQTY"            , defectQty);
		inspectionresult.put("INSPECTIONDATE"        , time);
		inspectionresult.put("INSPECTIONUSER"        , userId);
		inspectionresult.put("AREAID"                , lotInfo.get("AREAID"));
		inspectionresult.put("INSPECTIONCLASSID"     , processSegmentType);
		
		
		generalDao.addInsert(NAMESAPCE + ".insertQamInspectionresult", inspectionresult);	
			
	}
	
	private Map<String, Object> saveLotPseudoDefectQtyUpdate(UiMapDto dto, Map<String, Object> lotData, int defectQty) throws Exception
	{
		
		Map<String, Object> lotInfo = new HashMap<>();   
		
		lotInfo.putAll(lotData);
		
		lotInfo.put("PSEUDODEFECTQTY"      , StringUtil.Object2Double(lotInfo.get("PSEUDODEFECTQTY")) + defectQty);
		lotInfo.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
	    lotInfo.put("TXNHISTKEY"           , lotInfo.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lotInfo);
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotInfo);	
		
		return lotInfo;
	}	
	
	// BBT/HOLE 검사 불량 데이터 저장
	private void saveQcBBTHOLEWorkCompleteData(UiMapDto dto, Map<String, Object> lotInfo,  Map<String, Object> defectRow, String processDefId, String processDefVersion, String processSegmentType) throws Exception
	{
		
		double qty = StringUtil.Object2Double(lotInfo.get("QTY"));
				
		 Map<String, Object> qcaoibbtworkcomplete  = new HashMap<>();
			
		qcaoibbtworkcomplete.put("LOTID"                 , lotInfo.get("LOTID"));
		qcaoibbtworkcomplete.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
		qcaoibbtworkcomplete.put("PLANTID"               , lotInfo.get("PLANTID"));
		qcaoibbtworkcomplete.put("AREAID"                , lotInfo.get("AREAID"));
		qcaoibbtworkcomplete.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
		qcaoibbtworkcomplete.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
		qcaoibbtworkcomplete.put("PROCESSDEFID"          , processDefId);
		qcaoibbtworkcomplete.put("PROCESSDEFVERSION"     , processDefVersion);
		qcaoibbtworkcomplete.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
		qcaoibbtworkcomplete.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
		qcaoibbtworkcomplete.put("SEGMENTTYPE"           , processSegmentType);
		qcaoibbtworkcomplete.put("LAYERID"               , "999");
		qcaoibbtworkcomplete.put("DEFECTCODE"            , defectRow.get("DEFECTCODE"));
		qcaoibbtworkcomplete.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
		qcaoibbtworkcomplete.put("DEFECTCOUNT"           , defectRow.get("PCSQTY"));
		qcaoibbtworkcomplete.put("ISREWORK"              , "N");
		qcaoibbtworkcomplete.put("INSPECTIONQTY"         , lotInfo.get("QTY"));
		qcaoibbtworkcomplete.put("VALIDSTATE"            , "Valid");
		
		generalDao.addInsert(NAMESAPCE + ".insertPcmQcaoibbtworkcomplete", qcaoibbtworkcomplete);  
		
	}	
	
	// AOI 검사 분석대상 분석양품 데이터 저장
	private void saveQcAOIWorkCompleteAnalysisResultData(UiMapDto dto, Map<String, Object> lotInfo, Map<String, Object> defectRow, String processSegmentType)  throws Exception
	{
		Map<String, Object> paramLothistory = new HashMap<>();
		Map<String, Object> paramQcaoibbtworkcomplete = new HashMap<>();
		
		Map<String, Object> wrd = wipService.getWorkResult(lotInfo);
		
		paramLothistory.put("TXNHISTKEY", wrd.get("PREVSENDLOTHISTKEY"));
		paramLothistory.put("LOTID"     , lotInfo.get("LOTID"));
		
		Map<String, Object> lothistoryInfo =  generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectPcmLothistory", paramLothistory);  
		
		paramQcaoibbtworkcomplete.put("LOTID"                  , lotInfo.get("LOTID"));
		paramQcaoibbtworkcomplete.put("ENTERPRISEID"           , lotInfo.get("ENTERPRISEID"));
		paramQcaoibbtworkcomplete.put("PLANTID"                , lotInfo.get("PLANTID"));
		paramQcaoibbtworkcomplete.put("AREAID"                 , lothistoryInfo.get("PREVAREAID"));
		paramQcaoibbtworkcomplete.put("PRODUCTDEFID"           , lotInfo.get("PRODUCTDEFID"));
		paramQcaoibbtworkcomplete.put("PRODUCTDEFVERSION"      , lotInfo.get("PRODUCTDEFVERSION"));
		paramQcaoibbtworkcomplete.put("PROCESSDEFID"           , lotInfo.get("PROCESSDEFID"));
		paramQcaoibbtworkcomplete.put("PROCESSDEFVERSION"      , lotInfo.get("PROCESSDEFVERSION"));
		paramQcaoibbtworkcomplete.put("PROCESSSEGMENTID"       , lothistoryInfo.get("PREVPROCESSSEGMENTID"));
		paramQcaoibbtworkcomplete.put("PROCESSSEGMENTVERSION"  , lothistoryInfo.get("PREVPROCESSSEGMENTVERSION"));
		paramQcaoibbtworkcomplete.put("SEGMENTTYPE"            , processSegmentType);
		paramQcaoibbtworkcomplete.put("LAYERID"                , defectRow.get("LAYER"));
		paramQcaoibbtworkcomplete.put("DEFECTCODE"             , defectRow.get("DEFECTCODE"));
		
		Map<String, Object> qcaoibbtworkcompleteInfo =  generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmQcaoibbtworkcomplete", paramQcaoibbtworkcomplete);  
		
		if (qcaoibbtworkcompleteInfo != null)
		{
			qcaoibbtworkcompleteInfo.put("REPAIRRESULTQTY", defectRow.get("ANALYSISGOODQTY"));
			qcaoibbtworkcompleteInfo.put("REPAIRRESULTPNLQTY", defectRow.get("ANALYSISGOODPNLQTY"));
			
			generalDao.addUpdate(NAMESAPCE + ".updatePcmQcaoibbtworkcomplete", qcaoibbtworkcompleteInfo);  
			
		}
	}	
	
 	private void saveLotPlantTransit(Map<String, Object> lotInfo, String lastTxnHistKey, String userId, Date time) throws Exception
	{
		Map<String, Object> Lotplanttransit = new HashMap<>(); 
				
		Lotplanttransit.put("TXNHISTKEY"          , TxnHistKey.getTxnHistKey());
		Lotplanttransit.put("LOTID"               , lotInfo.get("LOTID"));
		Lotplanttransit.put("ENTERPRISEID"        , lotInfo.get("ENTERPRISEID"));
		Lotplanttransit.put("PLANTID"             , lotInfo.get("PLANTID"));
		Lotplanttransit.put("PRODUCTIONORDERID"   , lotInfo.get("PRODUCTIONORDERID"));
		Lotplanttransit.put("LINENO"              , lotInfo.get("LINENO"));
		Lotplanttransit.put("PREVPLANTID"         , lotInfo.get("PLANTID"));
		Lotplanttransit.put("FACTORYID"           , lotInfo.get("FACTORYID"));
		Lotplanttransit.put("AREAID"              , lotInfo.get("AREAID"));
		Lotplanttransit.put("PREVAREAID"          , lotInfo.get("AREAID"));
		Lotplanttransit.put("PROCESSDEFID"        , lotInfo.get("PROCESSDEFID"));
		Lotplanttransit.put("PROCESSDEFVERSION"   , lotInfo.get("PROCESSDEFVERSION"));
		Lotplanttransit.put("PROCESSSEGMENTID"    , lotInfo.get("PROCESSSEGMENTID"));
		Lotplanttransit.put("PREVPROCESSSEGMENTID", lotInfo.get("PREVPROCESSSEGMENTID"));
		Lotplanttransit.put("SENDUSER"            , userId);
		Lotplanttransit.put("SENDDATE"            , time);
		Lotplanttransit.put("TRANSITSTATUS"       , "WaitShip");
		
		generalDao.addInsert(NAMESAPCE + ".insertMtmLotplanttransit", Lotplanttransit); 
	}
	
	private void saveConsumeMaterialLotByDurable(Map<String, Object> lotInfo, DataSetMap durableList, Date time) throws Exception
	{
		
		Map<String, Object> durable = new HashMap<>();  
		Map<String, Object> Consumemateriallot = new HashMap<>();   
		
		for (int i = 0, len = durableList.size(); i < len; i++)
		{
			durable = durableList.get(i);
			
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
			
			String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
			String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));
			
			String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
			
			Consumemateriallot.clear();
			
			Consumemateriallot.put("MATERIALLOTID"         , durable.get("DURABLELOTID"));
			Consumemateriallot.put("LOTID"                 , lotInfo.get("LOTID"));
			Consumemateriallot.put("MATERIALTYPE"          , "Durable");
			Consumemateriallot.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
			Consumemateriallot.put("PLANTID"               , lotInfo.get("PLANTID"));
			Consumemateriallot.put("AREAID"                , lotInfo.get("AREAID"));
			Consumemateriallot.put("CONSUMEDQTY"           , durable.get("USINGQTY"));
			Consumemateriallot.put("EQUIPMENTID"           , durable.get("EQUIPMENTID"));
			Consumemateriallot.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
			Consumemateriallot.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
			Consumemateriallot.put("PROCESSDEFID"          , lotInfo.get("PROCESSDEFID"));
			Consumemateriallot.put("PROCESSDEFVERSION"     , lotInfo.get("PROCESSDEFVERSION"));
			Consumemateriallot.put("PROCESSPATHID"         , processPathId);
			Consumemateriallot.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
			Consumemateriallot.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			Consumemateriallot.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			Consumemateriallot.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
			Consumemateriallot.put("CONSUMABLEDEFID"       , durable.get("DURABLEDEFID"));
			Consumemateriallot.put("CONSUMABLEDEFVERSION"  , durable.get("DURABLEDEFVERSION"));
			

			 generalDao.addInsert(NAMESAPCE + ".insertMtmConsumemateriallot", Consumemateriallot);   
			 
			 Map<String, Object> paramLotdurable = new HashMap<>();   
			
			 paramLotdurable.put("TXNHISTKEY"   , durable.get("TXNHISTKEY"));
			 paramLotdurable.put("LOTID"        , lotInfo.get("LOTID"));
			 paramLotdurable.put("EQUIPMENTID"  , durable.get("EQUIPMENTID"));
			 paramLotdurable.put("DURABLELOTID" , durable.get("DURABLELOTID"));
			
			 Map<String, Object> lotdurableInfo =  generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLotdurable", paramLotdurable);  
			
			 lotdurableInfo.put("USEDQTY", durable.get("USINGQTY"));
			
			
			
			if ( lotdurableInfo.get("WORKENDTIME") == null)
			{
				lotdurableInfo.put("WORKENDTIME", time);
					
				// Update Durable Lot State
				Map<String, Object> map = new HashMap<>();
				map.put("LOTID"        , lotInfo.get("LOTID"));
				map.put("DURABLELOTID" , durable.get("DURABLELOTID")); 
				
				int ResultCnt = generalDao.addSelectCount(NAMESAPCE + ".getInUseDurableCount", map); 
				
				if (ResultCnt == 0)
				{
					Map<String, Object> dlk = new HashMap<>();   
					
					dlk.put("DURABLELOTID",  durable.get("DURABLELOTID"));
					
					Map<String, Object> durablelotInfo =  generalDao.addSelectOneMap(NAMESAPCE + ".selectTomDurablelot", dlk);  
					
					
					if (durablelotInfo == null)
					{
						throw new BizException("InValidData001", String.format("DurableLotId", durable.get("DURABLELOTID")));
					}
					
					durablelotInfo.put("DURABLESTATE", DurableState.Available);
					durablelotInfo.put("EQUIPMENTID" , "");
					
					generalDao.addUpdate(NAMESAPCE + ".updateTomDurablelot", durablelotInfo);  
					
				}
			}
			
			generalDao.addUpdate(NAMESAPCE + ".updatePcmLotdurable", lotdurableInfo);  
		}
	}	
	private String saveConsumeMaterialLotByConsumable(Map<String, Object> lotInfo, DataSetMap consumableList)  throws Exception
	{
		
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		Map<String, Object> consumemateriallot = new HashMap<>();   
		
		for (int i = 0, len = consumableList.size(); i < len; i++)
		{
			Map<String, Object> consumabl = consumableList.get(i);
			
			String txnHistKey = TxnHistKey.getTxnHistKey();
			
	        Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
			
			String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
			String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));
			
			String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
	
			
			consumemateriallot.clear();
			
			consumemateriallot.put("MATERIALLOTID"         , consumabl.get("CONSUMABLELOTID"));
			consumemateriallot.put("LOTID"                 , lotInfo.get("LOTID"));
			consumemateriallot.put("MATERIALTYPE"          , "Consumable");
			consumemateriallot.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
			consumemateriallot.put("PLANTID"               , lotInfo.get("PLANTID"));
			consumemateriallot.put("AREAID"                , lotInfo.get("AREAID"));
			consumemateriallot.put("CONSUMEDQTY"           , consumabl.get("ORGINPUTQTY"));
			consumemateriallot.put("EQUIPMENTID"           , consumabl.get("EQUIPMENTID"));
			consumemateriallot.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
			consumemateriallot.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
			consumemateriallot.put("PROCESSDEFID"          , lotInfo.get("PROCESSDEFID"));
			consumemateriallot.put("PROCESSDEFVERSION"     , lotInfo.get("PROCESSDEFVERSION"));
			consumemateriallot.put("PROCESSPATHID"         , processPathId);
			consumemateriallot.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
			consumemateriallot.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			consumemateriallot.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			consumemateriallot.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
			consumemateriallot.put("CONSUMABLEDEFID"       , consumabl.get("CONSUMABLEDEFID"));
			consumemateriallot.put("CONSUMABLEDEFVERSION"  , consumabl.get("CONSUMABLEDEFVERSION"));
			consumemateriallot.put("WAREHOUSEID"           , consumabl.get("WAREHOUSEID"));
			consumemateriallot.put("TXNHISTKEY"            , txnHistKey);
			consumemateriallot.put("TXNGROUPHISTKEY"       , txnGroupHistKey);
			

			 generalDao.addInsert(NAMESAPCE + ".insertMtmConsumemateriallot", consumemateriallot);   
			
		}

		
		return txnGroupHistKey;
	}
	//Check Lot Reserve Locking
	private void checkLotReserveLocking(Map<String, Object> lotData, String lotProcessState,String processDefId, String processDefVersion)  throws Exception
	{
		Map<String, Object> rld        = new HashMap<>();
		Map<String, Object> lotInfo    = new HashMap<>();
		
		lotInfo.putAll(lotData);
		
        rld.put("LOTID"                  , lotInfo.get("LOTID"));
        rld.put("ENTERPRISEID"           , lotInfo.get("ENTERPRISEID"));
        rld.put("PLANTID"                , lotInfo.get("PLANTID"));
        rld.put("PROCESSDEFID"           , lotInfo.get("PROCESSDEFID"));
        rld.put("PROCESSSEGMENTID"       , lotInfo.get("PROCESSSEGMENTID"));
        rld.put("LOCKINGSTATUS"          , "Created");
        rld.put("LOCKING_PROCESSSTATE"   , lotProcessState);
        
        List<Map<String, Object>> lotreservelockingList = generalDao.addSelect(NAMESAPCE_COMM+".selectPcmLotreservelockingList",rld);
        
        if (lotreservelockingList.size() > 0)
        {
        	for (int i = 0, len = lotreservelockingList.size(); i < len; i++)
			{
        		Map<String, Object> lrl = lotreservelockingList.get(i);
        		
        		String lockingType = StringUtil.Object2String(lrl.get("LOCKINGTYPE"));
				String lockingCode = StringUtil.Object2String(lrl.get("LOCKINGCODE"));
				String comments    = StringUtil.Object2String(lrl.get("COMMENTS"));
				
				this.saveLotLocking(lotInfo, lockingType, lockingCode, comments, processDefId, processDefVersion);
				
				lrl.put("LOCKINGSTATUS", "Completed");
				
				generalDao.addUpdate(NAMESAPCE + ".updatePcmLotreservelocking", lrl);
			   
        		
			}
        	
        	Map<String, Object> uLot       = new HashMap<>();
        	uLot.putAll(lotInfo);
        	uLot.put("ISLOCKING"      , "Y");
        	uLot.put("LASTTXNHISTKEY" , TxnHistKey.getTxnHistKey());
        	uLot.put("TXNHISTKEY"     , uLot.get("LASTTXNHISTKEY"));
        	
        	generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", uLot);
        	generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", uLot);	
        }
	}
}