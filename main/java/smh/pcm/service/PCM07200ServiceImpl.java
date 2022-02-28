package smh.pcm.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitType;
import smh.qam.service.QAMCommonService;

@Service
public class PCM07200ServiceImpl extends AbstractNbdfService implements PCM07200Service {
	
	public static final String NAMESPACE1800 				= "smh.pcm.dao.PCM01800Dao";
	public static final String NAMESPACE6900 				= "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESPACE 						= "smh.pcm.dao.PCM07200Dao";
    public static final String NAMESPACEWIP 				= "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACEWORKPROCESS 	= "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESPACELOTCOM 		= "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACECOM 		= "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACE_RL = "smh.pcm.dao.PCMReworkLotDao";
    public static final String NAMESPACE_SL = "smh.pcm.dao.PCMSendLotDao";

    public static final String NAMESPACE1500 = "smh.pcm.dao.PCM01500Dao";
    public static final String NAMESPACE4500 = "smh.pcm.dao.PCM04500Dao";
    public static final String NAMESPACE7000 = "smh.pcm.dao.PCM07000Dao";
    public static final String NAMESAPCE7100 = "smh.pcm.dao.PCM07100Dao";
    
    @Autowired
    private PCMWipService  wipService;

    @Autowired
    private PCMReworkLotService  reworkLotService;

    @Autowired
    private QAMCommonService  qcmService;
    
    @Autowired
    private GeneralDao generalDao;

	@Override
	public void SelectLotInfoByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> rtnMap = new HashMap<String, Object>();
        Map<String, Object> param = getParametersMap(dto);  
//        재작업 여부 확인
        List<Map<String, Object>> processDefTypeInfo =  generalDao.addSelect(NAMESPACE + ".GetProcessDefTypeByProcess", param);
        
        String processDefType = "";
        String lastRework = "";
        if(processDefTypeInfo.size()>0) {
            processDefType = (String) processDefTypeInfo.get(0).get("PROCESSDEFTYPE");
            lastRework = (String) processDefTypeInfo.get(0).get("LASTREWORK");        	
        }
        String queryVersion = "10001";
        if ("Rework".equals(processDefType))
            queryVersion = "10011";
        
        param.put("VERSION", queryVersion);
        List<Map<String, Object>> lotInfo = generalDao.addSelect(NAMESPACE + ".SelectLotInfoByProcess",param);
        putDataSetMap(dto, lotInfo,			"ds_lotInfo");
        if(lotInfo.size()<1) {
        	throw new BizException("NoSelectData");
        }
        //double _panelPerQty = lotInfo.get(0).get("PANELPERQTY")==null?0:Double.parseDouble(String.valueOf(lotInfo.get(0).get("PANELPERQTY")));
        //double _panelQty = lotInfo.get(0).get("PNLQTY")==null?0:Double.parseDouble(String.valueOf(lotInfo.get(0).get("PNLQTY")));
        double _qty = lotInfo.get(0).get("PCSQTY")==null?0:Double.parseDouble(String.valueOf(lotInfo.get(0).get("PCSQTY")));

        //2020-03-07 강유라 분할lot조회시 재작업lot/ 아닌lot 조회조건
        String rework = !StringUtil.isNullOrEmpty((String) lotInfo.get(0).get("SUBPROCESSDEFID")) && "Y".equals(lotInfo.get(0).get("ISREWORK")) ? "Y" : "N";
        
        //2020-03-09 출하 -최종 재작업 전 이동한 내용 임시 처리
        if (StringUtil.isNullOrEmpty((String) lotInfo.get(0).get("SUBPROCESSDEFID")) && "Y".equals(lotInfo.get(0).get("ISREWORK")))
            rework = "NONE";
        rtnMap.put("GOODQTY", _qty);
        rtnMap.put("DEFECTQTY", 0);
        rtnMap.put("PARENTLOTQTY", lotInfo.get(0).get("PCSQTY"));
        rtnMap.put("UOM", "PNL");
        
        param.put("PROCESSSEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE6900 + ".selectCommentByProcess", param),			"ds_comment");
        
        param.put("PROCESSSEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
        param.put("CONTROLTYPE", "XBARR");
        param.put("SPECCLASSID", "OperationSpec");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectProcessSpecByProcess", param),			"ds_operationSpec");
        
        if(!StringUtil.isNullOrEmpty((String) lotInfo.get(0).get("PROCESSSEGMENTID"))) {
            param.put("PROCESSSEGMENTID", lotInfo.get(0).get("NEXTPROCESSSEGMENTID"));
            param.put("PROCESSSEGMENTVERSION", lotInfo.get(0).get("NEXTPROCESSSEGMENTVERSION"));
        }
        param.put("RESOURCETYPE", "Resource");
        String stepType = (String) lotInfo.get(0).get("STEPTYPE");
        if ((stepType+",").indexOf("WaitForSend,")>=0)
        {
        	param.put("VERSION",lastRework == "Y" ? "10032" : "10031");
        	List<Map<String, Object>> transitAreaList = generalDao.addSelect(NAMESPACE + ".GetTransitAreaList", param);
            String primaryAreaId = "";
            if(StringUtil.isNullOrEmpty((String) lotInfo.get(0).get("NEXTPROCESSSEGMENTID"))) {
            	primaryAreaId = (String) lotInfo.get(0).get("AREAID");
            }else {
            	for (int i = 0; i < transitAreaList.size(); i++)
                {
            		Map<String, Object> areaRow = transitAreaList.get(i);

                    if ("Y".equals(areaRow.get("ISPRIMARYRESOURCE")))
                    {
                        primaryAreaId = (String) areaRow.get("AREAID");
                        break;
                    }
                }
            }
            rtnMap.put("PRIMARYAREAID", primaryAreaId);
            
            putDataSetMap(dto, transitAreaList,			"ds_transitArea");
            
        }
        rtnMap.put("REWORK", rework);
        putDataSetMap(dto, rtnMap, "output");
        
      //----재작업 Y , subProcess 없는 경우--- 재작업 로직 추가전 최종으로 돌아간 경우
        if(!rework.equals("NONE")) param.put("ISREWORK", rework);
        
        param.put("VERSION", "10001");
        List<Map<String, Object>> lotList = generalDao.addSelect(NAMESPACE + ".selectLotListForFinalInspection", param);
	    if(lotList.size()==0) {
	    	throw new BizException("LotStateIsNotAvailableSend",(String)param.get("LOTID"));
	    }
        putDataSetMap(dto, lotList, "ds_lotList");
        
        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectReasonConsumableList", param),				"ds_ReasonConsumableList");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonConsumableLot", param),				"ds_ReasonConsumableLot");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonProcesssegment", param),				"ds_ReasonProcessSegment");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE1500 + ".SelectNcrStandardOfSelfInspection", param),		"ds_NcrList");
	}
/*
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE6900 + ".selectCommentByProcess", param),				"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE6900 + ".selectProcessSpecByProcess", param),				"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE7000 + ".selectLotListForFinalInspection", param),			"output3");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".getEquipmentByArea", param),						"output4");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE1500 + ".SelectNcrStandardOfSelfInspection", param),		"output5");
    }

	@Override
	public void SelectLotListForFinalInspection(UiMapDto dto) throws Exception {
	    Map<String, Object> param = getParametersMap(dto);  
	    putDataSetMap(dto, generalDao.addSelect(NAMESPACE7000 + ".selectLotListForFinalInspection", param), "ds_lotList");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".getEquipmentByArea", param),						"ds_equipmentInfo");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE1500 + ".SelectNcrStandardOfSelfInspection", param),		"ds_NcrList");
	}
*/

	@Override
	public void saveXout(UiMapDto dto) throws Exception {
		int result = 0;
		DataSetMap xout_h = getParametersDataSetMap(dto, "xout_h");
		for(int i = 0; i < xout_h.size(); i++) {
			Map<String, Object> row = xout_h.get(i);
			int type = getRowType(row);
//			generalDao.addSelectOneMap(NAMESPACE + ".deletePcmLotXOutHeader", row);
			Map<String, Object> map = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotXOutHeader", row);
			if(map== null)
				generalDao.addUpdate(NAMESPACE + ".insertPcmLotXOutHeader", row);
			else
				generalDao.addUpdate(NAMESPACE + ".updatePcmLotXOutHeader", row);
		
			generalDao.addUpdate(NAMESPACE + ".deletePcmLotXOutAll", row);
		}
		DataSetMap xoutlist = getParametersDataSetMap(dto, "xout");
		for(int i = 0; i < xoutlist.size(); i++)
		{
			Map<String, Object> row = xoutlist.get(i);
			generalDao.addUpdate(NAMESPACE + ".insertPcmLotXOut", row);
		}			
		putDataSetMap(dto,result);
	}
	
	@Override
	public void saveFinalInspectionSend(UiMapDto dto) throws Exception {

		List<Map<String,Object>> rpdt = new ArrayList<Map<String,Object>>();
		// Response Result
		DataSetMap data = getParametersDataSetMap(dto, "INPUT");
//		String strEnterprise = (String) SessionUtil.getSessionValue("ENTERPRISEID");
//		String strPlant = (String) SessionUtil.getSessionValue("SITETYPE");
		String strUserId = (String) SessionUtil.getSessionValue("USER_ID");
//		String inspectUser = (String) data.get(0).get("INSPECTOR");
//		String unit = (String) data.get(0).get("UNIT");
//		String defectQty = (String) data.get(0).get("DEFECTQTY");
		String strTransitArea = (String) data.get(0).get("TRANSITAREA");
		String strResource = (String) data.get(0).get("RESOURCEID");
		
		DataSetMap lotList = getParametersDataSetMap(dto, "lotList");
		DataSetMap splitList = getParametersDataSetMap(dto, "splitList");
		DataSetMap defectlist = getParametersDataSetMap(dto, "defectList");
		DataSetMap xoutlist = getParametersDataSetMap(dto, "xout");

		List<Map<String, Object>>	rtnDefectList 			= new ArrayList<Map<String, Object>>();

		for(int z = 0; z < lotList.size(); z ++)
		{
			Map<String, Object> param = lotList.get(z);
			if(!"1".equals(param.get("CHK"))) continue;	
			
			String lotId = (String) param.get("LOTID");
			String unit = (String) param.get("SAVE_UNIT");
			String defectQty = (String) param.get("SAVE_DEFECTQTY");
			String inspectionUser = (String) param.get("INSPECTIONUSER");
			
			// Lot 정보 조회
			Map<String, Object> lotData = generalDao.addSelectOneMap(NAMESPACE4500 + ".selectPcmLot",param);
			Double lotQty = Double.parseDouble(lotData.get("QTY").toString());
			
			ValidationData(strUserId, lotData);
			
			Map<String, Object> segment = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",lotData);
			//최종검사이면 최종검사여부에 "Y" 업데이트
			if("7026".equals(segment.get("PROCESSSEGMENTCLASSID")))
			{
				wipService.updateIsFinalInspect(lotData);
			}
			
			// 사용자별 작업장 통제
			if(!wipService.isAreaInAuthority((String) lotData.get("AREAID"), true)) {
				// 해당 작업장에 대한 권한이 없습니다. {0}
				throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s AreaId=%s", lotId, lotData.get("AREAID")));
			}
			
			String defectUnit = (String) lotData.get("DEFECTUNIT");
			
			if (StringUtil.isNullOrEmpty(defectUnit) && unit.equals("PCS"))
				lotData.put("DEFECTUNIT",unit);
			
			Date now = new Date();
			Map<String, Object> txnInfo = new HashMap<String, Object>();
			txnInfo.put("TXNUSER",strUserId);
			txnInfo.put("TXNTIME",now);
	
			// 1. Defect Lot Split
			String defectLotId = "";
			for(int i = 0; i < splitList.size(); i++)
			{
				Map<String, Object> row = splitList.get(i);
				
				if(!lotId.equals(row.get("HIDDEN_LOTID"))) break;
				
				if("Y".equals(row.get("ISPARENT")) || lotId.equals(row.get("LOTID"))) continue;
				
				String childLotId = "";
				Double splitQty = 0.0;
				splitQty = Double.parseDouble(String.valueOf(row.get("QTY")));
				Double panelQty = Double.parseDouble(String.valueOf(row.get("PANELQTY")));
				
//				Map<String, Object> splitLot = wipService.splitLot(dto, lotId, splitQty, splitQty);
				Map<String, Object> splitLot = wipService.splitLot(dto, lotId, splitQty, splitQty, TransitType.SendLot);
				
				childLotId = (String) splitLot.get("LOTID");
				
				splitLot.put("LOTCREATEDTYPE","FinalInspect");
				splitLot.put("CREATEDQTY",splitQty);
				splitLot.put("UNIT",row.get("UNIT"));
				//splitLot.put("Qty(splitQty);
				splitLot.put("PCSQTY",splitQty);
				if(lotData.get("PANELPERQTY") != null && Double.parseDouble(String.valueOf(lotData.get("PANELPERQTY"))) > 0.0)
				{
					splitLot.put("PANELQTY",Math.ceil((splitQty) / Double.parseDouble(String.valueOf(lotData.get("PANELPERQTY")))));
				}
				
				splitLot.put("PANELPERQTY", 		lotData.get("PANELPERQTY"));		//20210526 AS-IS에는 없음, Defect Lot의 PanelPerQty 는 모Lot의 PanelPerQty로 Update
//				splitLot.put("CREATOR",strUserId);
//				splitLot.put("LASTTXNTIME",now);
//				splitLot.put("LASTTXNUSER",strUserId);
				splitLot.put("WEEK",lotData.get("WEEK"));
				
				generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",splitLot);
				
				// 부모 LOT 이 재작업 상태이면 부모LOT의 ct_reworkreturn 정보 복사
				if(!StringUtil.isNullOrEmpty((String) lotData.get("SUBPROCESSDEFID")))
				{
					CopyReworkReturnData(lotId, childLotId);
				}
				
				// Response LotId List
				Map<String, Object> chdMap = new HashMap<String, Object>();
				chdMap.put("LOTID", childLotId);
				rpdt.add(chdMap);
				
				// Split Lot의 작업 실적 입력
				wipService.saveSplitLotWorkResult(lotData, splitLot, splitQty);
				
				// Split Lot의 Dispatch Lot 처리
				//setDispatchLot(splitLot, strTransitArea, strResource, strUserId, now, txnInfo);	
				
				//2020-03-16 강유라 부모lot이 재작업인경우 setDispatchLot=>setDispatchSplitLot 으로 변경
				setDispatchSplitLot(dto, splitLot, strTransitArea, strResource, strUserId, now, txnInfo);	
				
				// 부모 LOt정보 Update
				// null이면 업데이트 안친다(wipservice.splitlot에서 넣어준값)
				lotQty = lotQty - splitQty;
				lotData.put("PCSQTY",lotQty);
				lotData.put("QTY",lotQty);
				lotData.put("PANELQTY",Math.ceil((lotQty) / Double.parseDouble(String.valueOf(lotData.get("PANELPERQTY")))));
//				lotData.put("LASTTXNTIME",now);
//				lotData.put("LASTTXNUSER",strUserId);
				
				generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",lotData);
//				lotData.update();
			}

//			if(splitList.size() > 0)
//			{
//				// Response LotId List
//				Map<String, Object> chdMap = new HashMap<String, Object>();
//				chdMap.put("LOTID", lotData.get("LOTID"));
//				rpdt.add(chdMap);
//			}
			
			// 모 Lot 기준으로 Defect 처리
			if(defectlist.size() > 0)
			{
				// 검사원 정보 수정
				int inspDegree = getInspectionResultInsertData(lotId, lotData, inspectionUser, txnInfo, now);
				//강유라 12-12 인계여부 확인 위해 Map에 LotId, actionType 담아 체크
				Map<String,String> checkMap = new HashMap<String, String>();

				setDefectLot(dto, lotId, lotData, defectlist, Double.parseDouble(String.valueOf(defectQty)), strUserId, txnInfo);
			
				for(int i =0;i<defectlist.size();i++) {
					// 검사 Defect 정보 추가
					//2019-12-10 강유라 getInspectionDefectInsertData에  responseDt파라미터 추가
					rtnDefectList = this.getInspectionDefectInsertData(lotId, lotData, StringUtil.Object2Double(lotData.get("QTY")), defectlist, inspDegree, checkMap,txnInfo, now);
				}
			}
			
			if(Double.parseDouble(String.valueOf(lotData.get("QTY"))) > 0)
			{
				
				// Check Window Time
				wipService.executeCheckingWindowTimeNewTx(dto, lotData, now);
				
				// 작업실적 입력//UiMapDto dto, Map<String, Object> lotInfo, String transitType, String userId, Date time
				
				Map<String, Object> wrd = wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId, now, strResource, strTransitArea);
				
				// 현재 작업장
				String currentArea = (String)lotData.get("AREAID");
				
				// 현재 Site
				String currentPlant = (String)lotData.get("PLANTID");
				
				//현재 Factory
				String currentFactoryId = (String)lotData.get("FACTORYID");
				
				// 예산 통제 API 호출
				Map<String, Object> originArea = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",lotData);
				
				if (originArea == null)
				{
					// 해당 작업장이 존재하지 않습니다. {0}
					throw new BizException("NotExistArea", String.format("AreaId = %s", lotData.get("AREAID")));
				}
				
//				if (!originArea.get("Owntype").equals(AreaOwnType.OurCompany))
//				{
//					boolean result = OspService.OspBudgetCheck(wrd);
//					
//					
//					if (!result)
//					{
//						// 예산통제 메시지
//						throw new MESException("예산통제 메시지");
//					}
//				}
				
				// Dispatch Lot 처리
				String lastTxnHistKey = setDispatchLot(dto, lotData, strTransitArea,strResource, strUserId, now, txnInfo);
				
				//String lotLastTxnHistKey = lotData.get("Lasttxnhistkey();
				Map<String, Object> rd = wipService.getWorkResult(lotData);
				String lotLastTxnHistKey = (String) rd.get("PREVSENDLOTHISTKEY");
				
//				TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
				
				// Update Lot Work Count
				//lot = UpdateLotWorkCount(lot);
				boolean isReturn = wipService.saveReworkReturnData(dto,lotData);
				
				//lotData = wipService.SaveLotWorkCount(lotData);
				
				if (!isReturn)
				{
					// Get Transit Area Info
					Map<String, Object> param2 = new HashMap<String, Object>(); 
					param2.put("AREAID",strTransitArea);
					Map<String, Object> area = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",param2);
					
					if (area == null)
					{
						// 해당 작업장이 존재하지 않습니다. {0}
						throw new BizException("NotExistArea", String.format("AreaId = %s", strTransitArea));
					}
			
					String ownType = (String) area.get("OWNTYPE");
					String nextPlant = (String) area.get("PLANTID");
					Map<String, Object> pdd = generalDao.addSelectOneMap(NAMESPACE_SL + ".selectBasProductdefinition",lotData);
					
					if (pdd == null)
					{
						// 해당 품목이 존재하지 않습니다. {0}
						throw new BizException("NotExistProduct", String.format("ProductDefId = %s, ProductDefVersion", lotData.get("PRODUCTDEFID"), lotData.get("PRODUCTDEFVERSION")));
					}
					
					
					String productDefType = (String) pdd.get("PRODUCTDEFTYPE");
					
					
					// if not Finished that Lot State then Outside Check Logic
					if (!lotData.get("LOTSTATE").equals(LotState.Finished) &&  StringUtil.isNullOrEmpty((String) lotData.get("SUBPROCESSDEFID")))
					{
						// 작업장이 동일한 경우 SendLot 호출 안함
						if (!currentArea.equals(strTransitArea))
						{
							// 영풍전자 반제품, Sample 인 경우 호출 안함
							if (lotData.get("ENTERPRISEID").equals("INTERFLEX") ||
								(lotData.get("ENTERPRISEID").equals("YOUNGPOONG") && !productDefType.equals("SubAssembly") && !lotData.get("LOTTYPE").equals("Sample")))
							{
								// Check Outside Area
								if (ownType.equals(AreaOwnType.OutsideOSP) || !nextPlant.equals(currentPlant))
								{
//									TransactionUtils.setTransactionId(txnInfo, "sendLot");
									txnInfo.put("TXNID", "sendLot");
									
									String nextAreaId = "";
									String nextPlantId = "";
									
									if (ownType.equals(AreaOwnType.OutsideOSP))
										nextAreaId = strTransitArea;
									else
										nextAreaId = (String) lotData.get("AREAID");
									
									if (!nextPlant.equals(currentPlant))
										nextPlantId = nextPlant;
									else
										nextPlantId = (String) lotData.get("PLANTID");
									
									if (!nextPlant.equals(currentPlant))
									{
										SaveLotPlantTransit(lotData, lastTxnHistKey, strUserId, now);
									}
									
									lotData = wipService.sendLot( lotId, nextAreaId, nextPlantId);
									
//									TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
								}
							}
						}
					}					
				}
				reworkLotService.SaveLotHistory(lotLastTxnHistKey, lotId, currentPlant, currentFactoryId, currentArea);
			}
		}
		
	   	putDataSetMap(dto, rtnDefectList, "output");
		putDataSetMap(dto, rpdt, "output1");
		
	}

	/**************************************************************************************
	* Defect Lot 처리
	***************************************************************************************/
	private void setDefectLot(UiMapDto dto, String lotId, Map<String, Object> lotData, DataSetMap defectlist, Double defectQty, String strUserId, Map<String, Object> txnInfo)  throws Exception
	{
		Map<String, Object> defectLot = null;	//LotData defectLot = null;
		
		try{
			//Split 공통함수 호출로 Split //UiMapDto dto, String lotId, double childQty, double splitQty, String isDefected, String transitType
			defectLot = wipService.splitDefectLot(dto, lotId, defectQty, defectQty, "Y", TransitType.SendLot);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			throw new BizException(e.toString());
		}
		
		defectLot.put("LOTCREATEDTYPE","Defect");
		defectLot.put("PROCESSSTATE",LotProcessState.WaitForSend);
		defectLot.put("CREATEDQTY",defectQty);
		defectLot.put("UNIT","PCS");
		defectLot.put("QTY",0.0);
		defectLot.put("PCSQTY",0.0);
		defectLot.put("PANELQTY",0.0);
		defectLot.put("DEFECTQTY",defectQty);
//		defectLot.put("CREATOR",strUserId);
//		defectLot.put("Lasttxntime",SQLService.toDate());
//		defectLot.put("Lasttxnuser(strUserId);
		defectLot.put("ISDEFECTED","Y");
		if(defectLot.get("PANELPERQTY") == null)
			defectLot.put("PANELPERQTY", lotData.get("PANELPERQTY"));
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",defectLot);
		
		// Defect Lot 작업실적 저장	WipService.SaveDefectLotWorkResult(lotId, defectKey.getLotid(), defectQty);
		wipService.saveDefectLotWorkResult(dto, lotData, defectLot, defectQty);	//UiMapDto dto,Map<String, Object> lotInfo, Map<String, Object> childLotInfo, double defectQty
		
		// Lot Locking 처리//UiMapDto dto, String lotId, String lockClass, String lockReason, String comments, String strUserId, String strLanguageType
		String strLanguageType = (String) SessionUtil.getSessionValue("LANGUAGETYPE");
		
		wipService.saveLotLocking(dto, (String) defectLot.get("LOTID"), "QCLockInSelfFinalExamination", "LockFinalExamNonconfirm", "", strUserId, strLanguageType);
		
		// 모 LOT 정보 업데이트
		lotData.put("PCSQTY",Double.parseDouble(String.valueOf(lotData.get("QTY"))) - defectQty);
		lotData.put("PANELQTY",Math.ceil((Double.parseDouble(String.valueOf(lotData.get("QTY"))) - defectQty) / Double.parseDouble(String.valueOf(lotData.get("PANELPERQTY")))));
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",lotData);
		
		if(defectlist != null && defectlist.size() > 0 && defectQty > 0)
		{
			// 2. Split된 LOT에 불량 데이터 저장
			// -----------------------------------
			// Lot Defect 처리
			// -----------------------------------
			wipService.saveLotDefect(dto, defectLot, (DataSetMap) defectlist, TransitType.SendLot);
		}
		
	}
	
	/**************************************************************************************
	* DispatchLot
	***************************************************************************************/
	private String setDispatchLot(UiMapDto dto, Map<String, Object> lotData, String strTransitArea, String resourceid, String strUserId, Date time, Map<String, Object> txnInfo) throws Exception
	{
		String lastTxnHistKey = "";
		
		
		// ProcessState Step Type 체크하여 작업완료에서 완성되는 경우 Dispatch 실행 
		Map<String, Object> segmentData = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",lotData);
		
		String stepType = wipService.getStepTypeByLot(lotData);
		List<String> stepList = Arrays.asList(stepType.split(","));
		
		if(segmentData != null && stepList.contains("WaitForSend"))
		{
			if(strTransitArea == "")
			{
				// Lot 상태를 확인하여 주세요.
				throw new BizException("InValidData001");
			}
			try
			{
				lotData = UpdateLotSend(lotData, strUserId, time);
				
				//wipService.SaveLotWorkResult(lotData, TransitType.SendLot, strUserId, SQLService.toDate());
				//lotData = wipService.DispatchLot(lotData, strTransitArea, txnInfo);
				lotData = wipService.dispatchLot(dto, lotData, strTransitArea,resourceid);
			}catch (Throwable e) {
				// TODO Auto-generated catch block
				throw new BizException(e.toString());
			}
			String wrHistKey = (String) lotData.get("LASTTXNHISTKEY");
			
			// Dispatch Lot 이후 WorkCount 업데이트 (Work Count가 계속 1로 설정되어 다음공정에서 에러발생)
			lotData = wipService.saveLotWorkCount(dto, lotData);
			
			lastTxnHistKey = wipService.saveLotWorkResultForNextProcess(dto, lotData, wrHistKey);
	
//			TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
		}
		
//		batch.add(lotData, SQLUpsertType.UPDATE);
		
		
		return lastTxnHistKey;
	}
	
	/**************************************************************************************
	* Lot 정보 업데이트
	***************************************************************************************/
	private Map<String, Object> UpdateLotSend(Map<String, Object> ld, String userId, Date time) throws Exception
	{
		ld.put("SENDTIME",time);
		ld.put("SENDUSER",userId);
		ld.put("LASTTXNID",this.getClass().getSimpleName());
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",ld);
		
		return ld;
	}
	
	// Lot Plant Transit Insert Data
	private void SaveLotPlantTransit(Map<String, Object> ld, String lastTxnHistKey, String userId, Date time) throws Exception
	{
		String lotId = (String) ld.get("LOTID");
		String txnHistKey = TxnHistKey.getTxnHistKey();
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("TXNHISTKEY",txnHistKey);
		param.put("LOTID",lotId);
		Map<String, Object> ltd = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectMtmLotplanttransit",param);
		
		if (ltd != null)
		{
			throw new BizException("InValidData002", String.format("TxnHistKey = %s LotId = %s", txnHistKey, lotId));
		}else {
			ltd = new HashMap<String, Object>(); 
		}
		
		param.put("LOTID",lotId);
		param.put("TXNHISTKEY",lastTxnHistKey);
		Map<String, Object> lhd = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmLothistory",param);

		
		ltd.put("TXNHISTKEY",txnHistKey);
		ltd.put("LOTID",lotId);
		ltd.put("ENTERPRISEID",ld.get("ENTERPRISEID"));
		ltd.put("PLANTID",ld.get("PLANTID"));
		ltd.put("PRODUCTIONORDERID",ld.get("PRODUCTIONORDERID"));
		ltd.put("LINENO",ld.get("LINENO"));
		ltd.put("PREVPLANTID",lhd == null ? ld.get("PLANTID") : lhd.get("PREVPLANTID"));
		ltd.put("FACTORYID",ld.get("FACTORYID"));
		ltd.put("AREAID",ld.get("AREAID"));
		ltd.put("PREVAREAID",lhd == null ? ld.get("AREAID") : lhd.get("PREVAREAID"));
		ltd.put("PROCESSDEFID",ld.get("PROCESSDEFID"));
		ltd.put("PROCESSDEFVERSION",ld.get("PROCESSDEFVERSION"));
		ltd.put("PROCESSSEGMENTID",ld.get("PROCESSSEGMENTID"));
		ltd.put("PREVPROCESSSEGMENTID",lhd == null ? "":lhd.get("PREVPROCESSSEGMENTID"));
		ltd.put("SENDUSER",lhd == null ? "":lhd.get("SENDUSER"));
		ltd.put("SENDDATE",lhd == null ? "":lhd.get("SENDTIME"));
		ltd.put("TRANSITSTATUS","WaitShip");
		
		generalDao.addInsert(NAMESPACE_SL + ".insertMtmLotplanttransit",ltd);
	}
	
	// Lot 상태, 필수 입력 값 Validation 체크
	private void ValidationData(String userId, Map<String, Object> lot) throws Exception
	{
		// 보류 여부 체크
		if ("Y".equals(lot.get("ISHOLD")))
		{
			// 보류 상태의 Lot 입니다.
			throw new BizException("LotIsHold", String.format("LotId = %s",(String) lot.get("LOTID")));
		}
		
		// Locking 여부 체크
		if ("Y".equals(lot.get("ISLOCKING")))
		{
			// Locking 상태의 Lot 입니다.
			throw new BizException("LotIsLocking", String.format("LotId = %s",(String) lot.get("LOTID")));
		}
		
		// ProcessState 인계 가능 상태인지 체크
		if (!wipService.validateProcessState(lot, TransitType.SendLot))
		{
			// Lot이 인계 가능 상태가 아닙니다. {0}
			throw new BizException("LotStateIsNotAvailableSend", String.format("LotId = %s", (String) lot.get("LOTID")));
		}
		
		// 작업자 선택 여부 체크
		if (StringUtil.isNullOrEmpty(userId))
		{
			// 작업자가 선택되지 않았습니다.
			throw new BizException("NoSelectWorker");
		}
	}
	
	/**************************************************************************************
	* reworkReturn 정보 업데이트 / 황유성
	***************************************************************************************/
	private void CopyReworkReturnData(String parentLotId, String childLotId) throws Exception
	{
		Map<String, Object> param = new HashMap<String, Object>(); 
		
		param.put("LOTID",parentLotId);
		Map<String, Object> parentReturnData = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmReworkreturn",param);
		if(parentReturnData == null)
		{
			return;
		}
		
		param.put("LOTID",childLotId);
		Map<String, Object> childReturnData = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmReworkreturn",param);
		if(childReturnData == null)
		{
			Map<String, Object> newChildReturnData = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectPcmReworkreturn",param);
			generalDao.addInsert(NAMESPACE_RL + ".insertPcmReworkreturn", newChildReturnData);
		}
		else
		{
			childReturnData.put("LOTID",childLotId);
			generalDao.addUpdate(NAMESPACE_RL + ".updatePcmReworkreturn", childReturnData);
		}
	}
	
	/**************************************************************************************
	* SplitLot DispatchLot
	***************************************************************************************/
	private String setDispatchSplitLot(UiMapDto dto,Map<String, Object> lotData, String strTransitArea, String resourceid, String strUserId, Date time, Map<String, Object> txnInfo) throws Exception
	{
		String lastTxnHistKey = "";
		
		Map<String, Object> segmentData = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",lotData);
		
		String stepType = wipService.getStepTypeByLot(lotData);
		List<String> stepList = Arrays.asList(stepType.split(","));
		
		if(segmentData != null && stepList.contains("WaitForSend"))
		{
			if(strTransitArea == "")
			{
				// Lot 상태를 확인하여 주세요.
				throw new BizException("InValidData001");
			}
			try
			{
				lotData = UpdateLotSend(lotData, strUserId, time);
				
				//2020-03-16 강유라 자lot sendTime 입력필요 => 주석해제
				wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId, time, resourceid, strTransitArea );
				//lotData = wipService.DispatchLot(lotData, strTransitArea, txnInfo);
				lotData = wipService.dispatchLot(dto, lotData, strTransitArea,resourceid);
			}catch (Throwable e) {
				// TODO Auto-generated catch block
				throw new BizException(e.toString());
			}
			String wrHistKey = (String) lotData.get("LASTTXNHISTKEY");
			
			// Dispatch Lot 이후 WorkCount 업데이트 (Work Count가 계속 1로 설정되어 다음공정에서 에러발생)
			lotData = wipService.saveLotWorkCount(dto, lotData);
			
			//2020-03-16 강유라 부모Lot이 재작업인 경우 reworkReturn 대로 돌아감.
			boolean isReturn = wipService.saveReworkReturnData(dto, lotData);
			
			//2020-03-16 강유라 wipService.SaveReworkReturnData 에서 다음 공정의 실적 쌓아줌 -> 주석처리
			//lastTxnHistKey = wipService.SaveLotWorkResultForNextProcess(lotData, wrHistKey);
			
			//2020-03-16 강유라 wipService.SaveReworkReturnData 에서 다음 공정의 실적 쌓아줌 -> 주석처리
			//-> 재작업 아닌경우 실적 등록
			if(!isReturn)
			{
				Map<String, Object> param = new HashMap<>();
				param.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
				param.put("PLANTID", lotData.get("PLANTID"));
				param.put("LOTID", lotData.get("LOTID"));
				param.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
				param.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
				param.put("WORKCOUNT", lotData.get("WORKCOUNT"));
				
				List<Map<String,Object>> workResult = generalDao.addSelect(NAMESPACEWIP + ".getLotWorkResultByTrackIn",param );
				
				if (workResult.size() < 1)
				{
					wipService.saveLotWorkResultForNextProcess(dto, lotData,(String) lotData.get("LASTTXNHISTKEY"));
				}
			}
			
		}
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",lotData );
//		batch.add(lotData, SQLUpsertType.UPDATE);
		
		
		return lastTxnHistKey;
	}

	/**************************************************************************************
	* 검사 Defect 데이터 저장
	* 수정 이력 : 2019-12-10 강유라 IDataTable responseDt, Double lotQty 파라미터 추가, IDataTable 반환
	* 						  NCR 기준 적용 추가
	* 		   2019-12-12 강유라 Map<String,String> checkMap 파라미터 추가
	 * @throws Throwable 
	***************************************************************************************/
	private List<Map<String, Object>> getInspectionDefectInsertData(String lotId, Map<String, Object> lotData, Double lotQty, DataSetMap list, int inspDegree, Map<String,String> checkMap, Map<String, Object> txnInfo, Date now) throws Exception
	{

		List<Map<String, Object>>	defectList 			= new ArrayList<Map<String, Object>>();

		// 검사 정보
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("RESOURCETYPE", "FinishInspection");
		propertyMap.put("RESOURCEID", lotId);
		propertyMap.put("INSPECTIONDEFID", "FinishInspection");
		propertyMap.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", lotData.get("PLANTID"));
		propertyMap.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		propertyMap.put("INSPDEGREE", inspDegree);
		propertyMap.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		
		List<Map<String, Object>> inspList = generalDao.addSelect(NAMESAPCE7100 + ".GetInspectionResultInfo", propertyMap);
		
		if(inspList != null && !inspList.isEmpty() && inspList.size() > 0)
		{
			//화면에 반활 할 row
			Map<String, Object> responseRow;	
			
			for(int i = 0; i< list.size(); i++)
			{
				HashMap<String, Object> row = (HashMap<String, Object>) list.get(i);
				HashMap<String, Object> defectResult = (HashMap<String, Object>) list.get(i);
				responseRow = new HashMap<String, Object>();
				String txnHistKey = TxnHistKey.getTxnHistKey();
				
				defectResult.put("TXNHISTKEY", txnHistKey);
				defectResult.put("RESOURCETYPE","FinishInspection");
				defectResult.put("RESOURCEID",lotId);
				defectResult.put("PROCESSRELNO",lotData.get("PROCESSSEGMENTID"));
				defectResult.put("DEFECTCODE",row.get("DEFECTCODE"));
			
				defectResult.put("DEGREE",String.valueOf(inspDegree));
				//defectResult.setWorkcount(lotData.getWorkcount());
				defectResult.put("DEFECTQTY",row.get("QTY"));
				defectResult.put("QCSEGMENTID",row.get("QCSEGMENTID"));
				defectResult.put("REASONSEGMENTID",row.get("REASONSEGMENTID"));
				defectResult.put("REASONCONSUMABLELOTID",row.get("REASONCONSUMABLELOTID"));
				defectResult.put("REASONAREAID",row.get("REASONAREAID"));
				defectResult.put("FILERESOURCEID",row.get("IMAGERESOURCEID"));
				
				defectResult.put("TXNTIME",txnInfo.get("TXNTIME"));
				defectResult.put("TXNUSER",txnInfo.get("TXNUSER"));
				
				generalDao.addUpdate(NAMESAPCE7100 + ".insertInspectionDefect", defectResult);
				
				//2020-03-03 강유라 영풍의 경우 양산/ 시양산 만 NCR 적용
				switch(lotData.get("ENTERPRISEID").toString())
				{
					default:
						
						//2019-12-10 강유라 NCR 기준 적용 추가
						//DataRow의 DecisionDegree로 판정 및 actionType 반환
						String actionType = this.getActionTypeSelfAndFinish(row, "FinishInspection", row.get("DECISIONDEGREE").toString(), lotData.get("ENTERPRISEID").toString(), lotData.get("PLANTID").toString());
						
						if(!StringUtil.isNullOrEmpty(actionType))
						{
							//2019-12-12 강유라 actionType에 LockingLot 이 있는지 체크
							if(actionType.contains("LockingLot"))
							{
								//lot별로 여러 불량코드 검사 => 
								//이미 LockingLot actionType을 반환한 불량 코드가 있다면 또 넣지 않음.
								if(!checkMap.containsKey(lotId))
								{
									checkMap.put(lotId, actionType);
								}
							}
							
							String strInspDegree = String.valueOf(inspDegree);
							Boolean isSendEmail = qcmService.doActionAndGetIsSendEmail(actionType, row, lotId, "FinishInspection", lotData.get("ENTERPRISEID").toString(), lotData.get("PLANTID").toString(), strInspDegree);
							
							if(isSendEmail == true)
							{		
								Double defectQty = Double.parseDouble(row.get("QTY").toString());
								String defectRate = ((double)Math.round(defectQty/lotQty * 100.0))+"%";
								int	lotQtyInt = Integer.parseInt(String.valueOf(Math.round(lotQty)));
								int	defectQtyInt = Integer.parseInt(String.valueOf(Math.round(defectQty)));

								responseRow.put("LOTID", lotId);
								responseRow.put("DEFECTINFO", row.get("DEFECTCODENAME")+"-"+ row.get("QCSEGMENTNAME")+"("+(lotQtyInt+"/"+defectQtyInt+"/"+defectRate)+")");
								responseRow.put("ISSENDEMAIL", isSendEmail);
								defectList.add(responseRow);
							}
						}
				}
			}
		}
		
		return defectList;
	}
	
	
	private String getActionTypeSelfAndFinish(Map<String, Object> paramInspection, String inspectionClassId,
			String decisionDegree, String enterpriseId, String plantId) {
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("INSPECTIONCLASSID", inspectionClassId);
		propertyMap.put("NCRDECISIONDEGREE", decisionDegree);
		propertyMap.put("ENTERPRISEID", enterpriseId);
		propertyMap.put("PLANTID", plantId);
		List<Map<String, Object>> ncrStandard = generalDao.addSelect(NAMESPACE1500 + ".SelectNCRCheckBasis", propertyMap);

		String qcGrade = null;
		String actionType = null;

		if (ncrStandard == null || ncrStandard.size() == 0) {
			String args = paramInspection.get("DEFECTCODE") + "," + paramInspection.get("QCSEGMENTID");
			throw new BizException("NoNCRStandardException", args);// "판정조건이
																	// 없습니다.(불량코드:{0},품질공정
																	// 코드 :{1})"
		}

		for (int i = 0, n = ncrStandard.size(); i < n; i++) {
			Map<String, Object> ncrRow = ncrStandard.get(i);
			String qtyOrRate = ncrRow.get("QTYORRATE").toString();
			Boolean isMatching = false;
			if (qtyOrRate.equals("RATE")) {// 불량율로 판정일 경우
				isMatching = IsMatchingSelfAndFinishRate(paramInspection, ncrRow);
			} else if (qtyOrRate.equals("QTY")) {// 불량 수량으로 판정일 경우
				isMatching = IsMatchingSelfAndFinishQTY(paramInspection, ncrRow);

			}

			if (isMatching == true) {
				qcGrade = ncrRow.get("QCGRADE").toString();
				break;
			}

		}

		if (qcGrade != null && !StringUtils.isEmpty(qcGrade)) {
			actionType = GetActionType(enterpriseId, plantId, qcGrade);
		}

		return actionType;
	}
	
	private Boolean IsMatchingSelfAndFinishRate(Map<String, Object> paramInspection,
			Map<String, Object> ncrStandardRow) {
		Boolean isMatching = false;
		// NCR기준 조건
		String ngCondition = ncrStandardRow.get("NGCONDITION").toString();
		// 기준
		Double fromNGRate = 0.0;
		if (ncrStandardRow.get("FROMNGRATE") != null
				&& !StringUtils.isEmpty(ncrStandardRow.get("FROMNGRATE").toString())) {
			fromNGRate = Double.valueOf(ncrStandardRow.get("FROMNGRATE").toString()).doubleValue();
		}

		Double toNGRate = 0.0;
		if (ncrStandardRow.get("TONGRATE") != null && !StringUtils.isEmpty(ncrStandardRow.get("TONGRATE").toString())) {
			toNGRate = Double.valueOf(ncrStandardRow.get("TONGRATE").toString()).doubleValue();
		}

		// 입력값
		Double defectRate = Double.parseDouble(paramInspection.get("DEFECTRATE").toString().replace("%", ""));

		if (defectRate > 0.0) {
			switch (ngCondition) {

			case "BT":// 사이 (초과, 미만)
				if (fromNGRate <= defectRate && defectRate < toNGRate) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "EQ":// 동일 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate == defectRate) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "GE":// 이상 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate <= defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "GT":// 초과 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate < defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LE":// 이하 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate >= defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LT":// 미만 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate > defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;
			}

		}
		return isMatching;
	}	
	
	private Boolean IsMatchingSelfAndFinishQTY(Map<String, Object> paramInspection,
			Map<String, Object> ncrStandardRow) {
		Boolean isMatching = false;

		// NCR기준 조건
		String ngCondition = ncrStandardRow.get("NGCONDITION").toString();
		// 기준
		int ngQuantity = 0;

		if (ncrStandardRow.get("NGQUANTITY") != null
				&& !StringUtils.isEmpty(ncrStandardRow.get("NGQUANTITY").toString())) {
			ngQuantity = Integer.valueOf(ncrStandardRow.get("NGQUANTITY").toString()).intValue();
		}

		// 입력값
		Double specOutQty = Double.valueOf(paramInspection.get("QTY").toString()).doubleValue();

		if (specOutQty > 0.0) {
			switch (ngCondition) {

			case "EQ":// 동일
				if (ngQuantity == specOutQty) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "GE":// 이상
				if (ngQuantity <= specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "GT":// 초과
				if (ngQuantity < specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LE":// 이하
				if (ngQuantity >= specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LT":// 미만
				if (ngQuantity > specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;
			}

		}
		return isMatching;
	}	
	
	private String GetActionType(String enterpriseId, String plantId, String qcGrade) {
		String actionType = null;

		if (qcGrade != null && !StringUtils.isEmpty(qcGrade)) {
			Map<String, Object> param = new HashMap<>();
			param.put("ENTERPRISEID", enterpriseId);
			param.put("PLANTID", plantId);
			param.put("QCGRADE", qcGrade);

			// NCR 기준을 조회
			List<Map<String, Object>> actionTypeString = generalDao.addSelect(NAMESPACE1500 + ".selectInspResultActionType",
					param); // QueryProvider.select("GetInspResultActionType" ,
							// "10001" , param);

			if (actionTypeString != null && actionTypeString.size() > 0
					&& actionTypeString.get(0).get("ACTIONTYPE") != null) {
				actionType = actionTypeString.get(0).get("ACTIONTYPE").toString();
			} else {
				// "조치등급이 없습니다.(조치등급:{0})"
				throw new BizException("NoQCGradeExceptionItem", qcGrade);
			}
		}

		return actionType;
	}
	
    /**************************************************************************************
	* 검사원 정보 입력
	***************************************************************************************/
	private int getInspectionResultInsertData(String lotId, Map<String, Object> lotMap, String strInspectUser, Map<String, Object> txnInfo, Date now) throws Exception
	{
		// 검사 차수 조회
		HashMap<String, Object> degreeMap = new HashMap<>();
		degreeMap.put("RESOURCETYPE", 			"FinishInspection");
		degreeMap.put("INSPECTIONDEFID", 		"FinishInspection");
		degreeMap.put("RESOURCEID", 			lotId);
		degreeMap.put("ENTERPRISEID", 			lotMap.get("ENTERPRISEID").toString());
		degreeMap.put("PLANTID", 					lotMap.get("PLANTID").toString());
		degreeMap.put("PROCESSDEFID", 			lotMap.get("PROCESSDEFID").toString());
		degreeMap.put("PROCESSDEFVERSION", 	lotMap.get("PROCESSDEFVERSION").toString());
		degreeMap.put("PROCESSSEGMENTID", 	lotMap.get("PROCESSSEGMENTID").toString());
		degreeMap.put("WORKCOUNT", 				lotMap.get("WORKCOUNT").toString());
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESAPCE7100 + ".GetInspectionDegreeInfo", degreeMap);
		String txnHistKey = TxnHistKey.getTxnHistKey();
		int degree = 1;
		if(degreeList != null && !degreeList.isEmpty() && degreeList.size() > 0)
		{
			degree = Integer.parseInt(degreeList.get(0).get("INSPDEGREE").toString());
		}
		//2021-08-02 재작업 관련 로직 추가
		BigDecimal bd = (BigDecimal)lotMap.get("WORKCOUNT");
		degree = degree + bd.intValue();
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("TXNHISTKEY", 					txnHistKey);
		propertyMap.put("RESOURCETYPE", 				"FinishInspection");
		propertyMap.put("INSPECTIONDEFID", 			"FinishInspection");
		propertyMap.put("RESOURCEID", 					lotId);
		propertyMap.put("ENTERPRISEID", 					lotMap.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", 						lotMap.get("PLANTID"));		
		propertyMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID"));		
		propertyMap.put("INSPDEGREE", 						String.valueOf(degree));
		
		List<Map<String, Object>> inspList = generalDao.addSelect(NAMESAPCE7100 + ".GetInspectionResultInfo", propertyMap);
		
		HashMap<String, Object> inspMap = new HashMap<>();
		
		if(inspList != null && !inspList.isEmpty() && inspList.size() > 0){
			Map<String, Object> inspExMap = inspList.get(0);
			inspMap.put("TXNHISTKEY", 					inspExMap.get("TXNHISTKEY"));
			inspMap.put("RESOURCETYPE", 				"FinishInspection");
			inspMap.put("RESOURCEID", 					lotId);
			inspMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
			
			Map<String, Object> 	inspResult 			= generalDao.addSelectOneMap(NAMESAPCE7100 + ".selectInspResultData", inspMap);
			
			inspResult.put("INSPECTIONDATE", 			now);
			inspResult.put("AREAID", 						lotMap.get("AREAID").toString());
//			inspResult.put("TXNID", 						txnInfo.get("TXNID").toString());
			inspResult.put("TXNUSER", 					txnInfo.get("TXNUSER").toString());
			inspResult.put("TXNTIME", 					txnInfo.get("TXNTIME"));
			
			//검사결과
			generalDao.addUpdate(NAMESAPCE7100 + ".updateInspectionResult", inspResult);
		} else {
			inspMap.put("TXNHISTKEY", 					txnHistKey);
			inspMap.put("RESOURCETYPE", 				"FinishInspection");
			inspMap.put("INSPECTIONDEFID", 			"FinishInspection");
			inspMap.put("RESOURCEID", 					lotId);
			inspMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
			inspMap.put("INSPECTIONDATE", 			now);
			inspMap.put("ENTERPRISEID", 				lotMap.get("ENTERPRISEID"));
			inspMap.put("PLANTID", 						lotMap.get("PLANTID"));		
			inspMap.put("PRODUCTDEFID", 				lotMap.get("PRODUCTDEFID"));
			inspMap.put("PRODUCTDEFVERSION", 		lotMap.get("PRODUCTDEFVERSION"));
			inspMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
			inspMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
			inspMap.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID"));
			inspMap.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION"));
			inspMap.put("DEGREE", 						String.valueOf(degree));
			inspMap.put("WORKCOUNT", 					lotMap.get("WORKCOUNT"));
			inspMap.put("INSPECTIONQTY", 				lotMap.get("QTY"));
			inspMap.put("AREAID", 							lotMap.get("AREAID"));
			//검사결과
			generalDao.addUpdate(NAMESAPCE7100 + ".insertInspectionResult", inspMap);
		}
		// 검사원 등록
		for (String inspector : strInspectUser.split(","))
		{
			HashMap<String, Object> inspectionWorkerMap = new HashMap<>();
			inspectionWorkerMap.put("TXNHISTKEY", 					TxnHistKey.getTxnHistKey());
			inspectionWorkerMap.put("RESOURCETYPE", 				"FinishInspection");
			inspectionWorkerMap.put("RESOURCEID", 					lotId);
			inspectionWorkerMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
			inspectionWorkerMap.put("INSPECTIONDEFID", 			"FinishInspection");			
			inspectionWorkerMap.put("DEGREE", 						String.valueOf(degree));			
			inspectionWorkerMap.put("ENTERPRISEID", 				lotMap.get("ENTERPRISEID"));
			inspectionWorkerMap.put("PLANTID", 						lotMap.get("PLANTID"));
			inspectionWorkerMap.put("INSPECTIONUSER", 			inspector);
			inspectionWorkerMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
			inspectionWorkerMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
			inspectionWorkerMap.put("PROCESSSEGMENTID", 		lotMap.get("PROCESSSEGMENTID"));
			inspectionWorkerMap.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION"));
			inspectionWorkerMap.put("WORKCOUNT", 					lotMap.get("WORKCOUNT"));
			
			//검사원 저장
			generalDao.addUpdate(NAMESAPCE7100 + ".insertInspectionWorker", inspectionWorkerMap);
		}
		return degree;
	}
	
}