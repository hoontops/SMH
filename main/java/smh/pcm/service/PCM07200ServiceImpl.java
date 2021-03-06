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
//        ????????? ?????? ??????
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

        //2020-03-07 ????????? ??????lot????????? ?????????lot/ ??????lot ????????????
        String rework = !StringUtil.isNullOrEmpty((String) lotInfo.get(0).get("SUBPROCESSDEFID")) && "Y".equals(lotInfo.get(0).get("ISREWORK")) ? "Y" : "N";
        
        //2020-03-09 ?????? -?????? ????????? ??? ????????? ?????? ?????? ??????
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
        
      //----????????? Y , subProcess ?????? ??????--- ????????? ?????? ????????? ???????????? ????????? ??????
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
			
			// Lot ?????? ??????
			Map<String, Object> lotData = generalDao.addSelectOneMap(NAMESPACE4500 + ".selectPcmLot",param);
			Double lotQty = Double.parseDouble(lotData.get("QTY").toString());
			
			ValidationData(strUserId, lotData);
			
			Map<String, Object> segment = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",lotData);
			//?????????????????? ????????????????????? "Y" ????????????
			if("7026".equals(segment.get("PROCESSSEGMENTCLASSID")))
			{
				wipService.updateIsFinalInspect(lotData);
			}
			
			// ???????????? ????????? ??????
			if(!wipService.isAreaInAuthority((String) lotData.get("AREAID"), true)) {
				// ?????? ???????????? ?????? ????????? ????????????. {0}
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
				
				splitLot.put("PANELPERQTY", 		lotData.get("PANELPERQTY"));		//20210526 AS-IS?????? ??????, Defect Lot??? PanelPerQty ??? ???Lot??? PanelPerQty??? Update
//				splitLot.put("CREATOR",strUserId);
//				splitLot.put("LASTTXNTIME",now);
//				splitLot.put("LASTTXNUSER",strUserId);
				splitLot.put("WEEK",lotData.get("WEEK"));
				
				generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",splitLot);
				
				// ?????? LOT ??? ????????? ???????????? ??????LOT??? ct_reworkreturn ?????? ??????
				if(!StringUtil.isNullOrEmpty((String) lotData.get("SUBPROCESSDEFID")))
				{
					CopyReworkReturnData(lotId, childLotId);
				}
				
				// Response LotId List
				Map<String, Object> chdMap = new HashMap<String, Object>();
				chdMap.put("LOTID", childLotId);
				rpdt.add(chdMap);
				
				// Split Lot??? ?????? ?????? ??????
				wipService.saveSplitLotWorkResult(lotData, splitLot, splitQty);
				
				// Split Lot??? Dispatch Lot ??????
				//setDispatchLot(splitLot, strTransitArea, strResource, strUserId, now, txnInfo);	
				
				//2020-03-16 ????????? ??????lot??? ?????????????????? setDispatchLot=>setDispatchSplitLot ?????? ??????
				setDispatchSplitLot(dto, splitLot, strTransitArea, strResource, strUserId, now, txnInfo);	
				
				// ?????? LOt?????? Update
				// null?????? ???????????? ?????????(wipservice.splitlot?????? ????????????)
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
			
			// ??? Lot ???????????? Defect ??????
			if(defectlist.size() > 0)
			{
				// ????????? ?????? ??????
				int inspDegree = getInspectionResultInsertData(lotId, lotData, inspectionUser, txnInfo, now);
				//????????? 12-12 ???????????? ?????? ?????? Map??? LotId, actionType ?????? ??????
				Map<String,String> checkMap = new HashMap<String, String>();

				setDefectLot(dto, lotId, lotData, defectlist, Double.parseDouble(String.valueOf(defectQty)), strUserId, txnInfo);
			
				for(int i =0;i<defectlist.size();i++) {
					// ?????? Defect ?????? ??????
					//2019-12-10 ????????? getInspectionDefectInsertData???  responseDt???????????? ??????
					rtnDefectList = this.getInspectionDefectInsertData(lotId, lotData, StringUtil.Object2Double(lotData.get("QTY")), defectlist, inspDegree, checkMap,txnInfo, now);
				}
			}
			
			if(Double.parseDouble(String.valueOf(lotData.get("QTY"))) > 0)
			{
				
				// Check Window Time
				wipService.executeCheckingWindowTimeNewTx(dto, lotData, now);
				
				// ???????????? ??????//UiMapDto dto, Map<String, Object> lotInfo, String transitType, String userId, Date time
				
				Map<String, Object> wrd = wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId, now, strResource, strTransitArea);
				
				// ?????? ?????????
				String currentArea = (String)lotData.get("AREAID");
				
				// ?????? Site
				String currentPlant = (String)lotData.get("PLANTID");
				
				//?????? Factory
				String currentFactoryId = (String)lotData.get("FACTORYID");
				
				// ?????? ?????? API ??????
				Map<String, Object> originArea = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",lotData);
				
				if (originArea == null)
				{
					// ?????? ???????????? ???????????? ????????????. {0}
					throw new BizException("NotExistArea", String.format("AreaId = %s", lotData.get("AREAID")));
				}
				
//				if (!originArea.get("Owntype").equals(AreaOwnType.OurCompany))
//				{
//					boolean result = OspService.OspBudgetCheck(wrd);
//					
//					
//					if (!result)
//					{
//						// ???????????? ?????????
//						throw new MESException("???????????? ?????????");
//					}
//				}
				
				// Dispatch Lot ??????
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
						// ?????? ???????????? ???????????? ????????????. {0}
						throw new BizException("NotExistArea", String.format("AreaId = %s", strTransitArea));
					}
			
					String ownType = (String) area.get("OWNTYPE");
					String nextPlant = (String) area.get("PLANTID");
					Map<String, Object> pdd = generalDao.addSelectOneMap(NAMESPACE_SL + ".selectBasProductdefinition",lotData);
					
					if (pdd == null)
					{
						// ?????? ????????? ???????????? ????????????. {0}
						throw new BizException("NotExistProduct", String.format("ProductDefId = %s, ProductDefVersion", lotData.get("PRODUCTDEFID"), lotData.get("PRODUCTDEFVERSION")));
					}
					
					
					String productDefType = (String) pdd.get("PRODUCTDEFTYPE");
					
					
					// if not Finished that Lot State then Outside Check Logic
					if (!lotData.get("LOTSTATE").equals(LotState.Finished) &&  StringUtil.isNullOrEmpty((String) lotData.get("SUBPROCESSDEFID")))
					{
						// ???????????? ????????? ?????? SendLot ?????? ??????
						if (!currentArea.equals(strTransitArea))
						{
							// ???????????? ?????????, Sample ??? ?????? ?????? ??????
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
	* Defect Lot ??????
	***************************************************************************************/
	private void setDefectLot(UiMapDto dto, String lotId, Map<String, Object> lotData, DataSetMap defectlist, Double defectQty, String strUserId, Map<String, Object> txnInfo)  throws Exception
	{
		Map<String, Object> defectLot = null;	//LotData defectLot = null;
		
		try{
			//Split ???????????? ????????? Split //UiMapDto dto, String lotId, double childQty, double splitQty, String isDefected, String transitType
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
		
		// Defect Lot ???????????? ??????	WipService.SaveDefectLotWorkResult(lotId, defectKey.getLotid(), defectQty);
		wipService.saveDefectLotWorkResult(dto, lotData, defectLot, defectQty);	//UiMapDto dto,Map<String, Object> lotInfo, Map<String, Object> childLotInfo, double defectQty
		
		// Lot Locking ??????//UiMapDto dto, String lotId, String lockClass, String lockReason, String comments, String strUserId, String strLanguageType
		String strLanguageType = (String) SessionUtil.getSessionValue("LANGUAGETYPE");
		
		wipService.saveLotLocking(dto, (String) defectLot.get("LOTID"), "QCLockInSelfFinalExamination", "LockFinalExamNonconfirm", "", strUserId, strLanguageType);
		
		// ??? LOT ?????? ????????????
		lotData.put("PCSQTY",Double.parseDouble(String.valueOf(lotData.get("QTY"))) - defectQty);
		lotData.put("PANELQTY",Math.ceil((Double.parseDouble(String.valueOf(lotData.get("QTY"))) - defectQty) / Double.parseDouble(String.valueOf(lotData.get("PANELPERQTY")))));
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",lotData);
		
		if(defectlist != null && defectlist.size() > 0 && defectQty > 0)
		{
			// 2. Split??? LOT??? ?????? ????????? ??????
			// -----------------------------------
			// Lot Defect ??????
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
		
		
		// ProcessState Step Type ???????????? ?????????????????? ???????????? ?????? Dispatch ?????? 
		Map<String, Object> segmentData = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",lotData);
		
		String stepType = wipService.getStepTypeByLot(lotData);
		List<String> stepList = Arrays.asList(stepType.split(","));
		
		if(segmentData != null && stepList.contains("WaitForSend"))
		{
			if(strTransitArea == "")
			{
				// Lot ????????? ???????????? ?????????.
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
			
			// Dispatch Lot ?????? WorkCount ???????????? (Work Count??? ?????? 1??? ???????????? ?????????????????? ????????????)
			lotData = wipService.saveLotWorkCount(dto, lotData);
			
			lastTxnHistKey = wipService.saveLotWorkResultForNextProcess(dto, lotData, wrHistKey);
	
//			TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());
		}
		
//		batch.add(lotData, SQLUpsertType.UPDATE);
		
		
		return lastTxnHistKey;
	}
	
	/**************************************************************************************
	* Lot ?????? ????????????
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
	
	// Lot ??????, ?????? ?????? ??? Validation ??????
	private void ValidationData(String userId, Map<String, Object> lot) throws Exception
	{
		// ?????? ?????? ??????
		if ("Y".equals(lot.get("ISHOLD")))
		{
			// ?????? ????????? Lot ?????????.
			throw new BizException("LotIsHold", String.format("LotId = %s",(String) lot.get("LOTID")));
		}
		
		// Locking ?????? ??????
		if ("Y".equals(lot.get("ISLOCKING")))
		{
			// Locking ????????? Lot ?????????.
			throw new BizException("LotIsLocking", String.format("LotId = %s",(String) lot.get("LOTID")));
		}
		
		// ProcessState ?????? ?????? ???????????? ??????
		if (!wipService.validateProcessState(lot, TransitType.SendLot))
		{
			// Lot??? ?????? ?????? ????????? ????????????. {0}
			throw new BizException("LotStateIsNotAvailableSend", String.format("LotId = %s", (String) lot.get("LOTID")));
		}
		
		// ????????? ?????? ?????? ??????
		if (StringUtil.isNullOrEmpty(userId))
		{
			// ???????????? ???????????? ???????????????.
			throw new BizException("NoSelectWorker");
		}
	}
	
	/**************************************************************************************
	* reworkReturn ?????? ???????????? / ?????????
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
				// Lot ????????? ???????????? ?????????.
				throw new BizException("InValidData001");
			}
			try
			{
				lotData = UpdateLotSend(lotData, strUserId, time);
				
				//2020-03-16 ????????? ???lot sendTime ???????????? => ????????????
				wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId, time, resourceid, strTransitArea );
				//lotData = wipService.DispatchLot(lotData, strTransitArea, txnInfo);
				lotData = wipService.dispatchLot(dto, lotData, strTransitArea,resourceid);
			}catch (Throwable e) {
				// TODO Auto-generated catch block
				throw new BizException(e.toString());
			}
			String wrHistKey = (String) lotData.get("LASTTXNHISTKEY");
			
			// Dispatch Lot ?????? WorkCount ???????????? (Work Count??? ?????? 1??? ???????????? ?????????????????? ????????????)
			lotData = wipService.saveLotWorkCount(dto, lotData);
			
			//2020-03-16 ????????? ??????Lot??? ???????????? ?????? reworkReturn ?????? ?????????.
			boolean isReturn = wipService.saveReworkReturnData(dto, lotData);
			
			//2020-03-16 ????????? wipService.SaveReworkReturnData ?????? ?????? ????????? ?????? ????????? -> ????????????
			//lastTxnHistKey = wipService.SaveLotWorkResultForNextProcess(lotData, wrHistKey);
			
			//2020-03-16 ????????? wipService.SaveReworkReturnData ?????? ?????? ????????? ?????? ????????? -> ????????????
			//-> ????????? ???????????? ?????? ??????
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
	* ?????? Defect ????????? ??????
	* ?????? ?????? : 2019-12-10 ????????? IDataTable responseDt, Double lotQty ???????????? ??????, IDataTable ??????
	* 						  NCR ?????? ?????? ??????
	* 		   2019-12-12 ????????? Map<String,String> checkMap ???????????? ??????
	 * @throws Throwable 
	***************************************************************************************/
	private List<Map<String, Object>> getInspectionDefectInsertData(String lotId, Map<String, Object> lotData, Double lotQty, DataSetMap list, int inspDegree, Map<String,String> checkMap, Map<String, Object> txnInfo, Date now) throws Exception
	{

		List<Map<String, Object>>	defectList 			= new ArrayList<Map<String, Object>>();

		// ?????? ??????
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
			//????????? ?????? ??? row
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
				
				//2020-03-03 ????????? ????????? ?????? ??????/ ????????? ??? NCR ??????
				switch(lotData.get("ENTERPRISEID").toString())
				{
					default:
						
						//2019-12-10 ????????? NCR ?????? ?????? ??????
						//DataRow??? DecisionDegree??? ?????? ??? actionType ??????
						String actionType = this.getActionTypeSelfAndFinish(row, "FinishInspection", row.get("DECISIONDEGREE").toString(), lotData.get("ENTERPRISEID").toString(), lotData.get("PLANTID").toString());
						
						if(!StringUtil.isNullOrEmpty(actionType))
						{
							//2019-12-12 ????????? actionType??? LockingLot ??? ????????? ??????
							if(actionType.contains("LockingLot"))
							{
								//lot?????? ?????? ???????????? ?????? => 
								//?????? LockingLot actionType??? ????????? ?????? ????????? ????????? ??? ?????? ??????.
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
			throw new BizException("NoNCRStandardException", args);// "???????????????
																	// ????????????.(????????????:{0},????????????
																	// ?????? :{1})"
		}

		for (int i = 0, n = ncrStandard.size(); i < n; i++) {
			Map<String, Object> ncrRow = ncrStandard.get(i);
			String qtyOrRate = ncrRow.get("QTYORRATE").toString();
			Boolean isMatching = false;
			if (qtyOrRate.equals("RATE")) {// ???????????? ????????? ??????
				isMatching = IsMatchingSelfAndFinishRate(paramInspection, ncrRow);
			} else if (qtyOrRate.equals("QTY")) {// ?????? ???????????? ????????? ??????
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
		// NCR?????? ??????
		String ngCondition = ncrStandardRow.get("NGCONDITION").toString();
		// ??????
		Double fromNGRate = 0.0;
		if (ncrStandardRow.get("FROMNGRATE") != null
				&& !StringUtils.isEmpty(ncrStandardRow.get("FROMNGRATE").toString())) {
			fromNGRate = Double.valueOf(ncrStandardRow.get("FROMNGRATE").toString()).doubleValue();
		}

		Double toNGRate = 0.0;
		if (ncrStandardRow.get("TONGRATE") != null && !StringUtils.isEmpty(ncrStandardRow.get("TONGRATE").toString())) {
			toNGRate = Double.valueOf(ncrStandardRow.get("TONGRATE").toString()).doubleValue();
		}

		// ?????????
		Double defectRate = Double.parseDouble(paramInspection.get("DEFECTRATE").toString().replace("%", ""));

		if (defectRate > 0.0) {
			switch (ngCondition) {

			case "BT":// ?????? (??????, ??????)
				if (fromNGRate <= defectRate && defectRate < toNGRate) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "EQ":// ?????? ******from / to ???????????? ?????? ????????? ??????
				if (toNGRate == defectRate) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "GE":// ?????? ******from / to ???????????? ?????? ????????? ??????
				if (toNGRate <= defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "GT":// ?????? ******from / to ???????????? ?????? ????????? ??????
				if (toNGRate < defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LE":// ?????? ******from / to ???????????? ?????? ????????? ??????
				if (toNGRate >= defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LT":// ?????? ******from / to ???????????? ?????? ????????? ??????
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

		// NCR?????? ??????
		String ngCondition = ncrStandardRow.get("NGCONDITION").toString();
		// ??????
		int ngQuantity = 0;

		if (ncrStandardRow.get("NGQUANTITY") != null
				&& !StringUtils.isEmpty(ncrStandardRow.get("NGQUANTITY").toString())) {
			ngQuantity = Integer.valueOf(ncrStandardRow.get("NGQUANTITY").toString()).intValue();
		}

		// ?????????
		Double specOutQty = Double.valueOf(paramInspection.get("QTY").toString()).doubleValue();

		if (specOutQty > 0.0) {
			switch (ngCondition) {

			case "EQ":// ??????
				if (ngQuantity == specOutQty) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "GE":// ??????
				if (ngQuantity <= specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "GT":// ??????
				if (ngQuantity < specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LE":// ??????
				if (ngQuantity >= specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LT":// ??????
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

			// NCR ????????? ??????
			List<Map<String, Object>> actionTypeString = generalDao.addSelect(NAMESPACE1500 + ".selectInspResultActionType",
					param); // QueryProvider.select("GetInspResultActionType" ,
							// "10001" , param);

			if (actionTypeString != null && actionTypeString.size() > 0
					&& actionTypeString.get(0).get("ACTIONTYPE") != null) {
				actionType = actionTypeString.get(0).get("ACTIONTYPE").toString();
			} else {
				// "??????????????? ????????????.(????????????:{0})"
				throw new BizException("NoQCGradeExceptionItem", qcGrade);
			}
		}

		return actionType;
	}
	
    /**************************************************************************************
	* ????????? ?????? ??????
	***************************************************************************************/
	private int getInspectionResultInsertData(String lotId, Map<String, Object> lotMap, String strInspectUser, Map<String, Object> txnInfo, Date now) throws Exception
	{
		// ?????? ?????? ??????
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
		//2021-08-02 ????????? ?????? ?????? ??????
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
			
			//????????????
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
			//????????????
			generalDao.addUpdate(NAMESAPCE7100 + ".insertInspectionResult", inspMap);
		}
		// ????????? ??????
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
			
			//????????? ??????
			generalDao.addUpdate(NAMESAPCE7100 + ".insertInspectionWorker", inspectionWorkerMap);
		}
		return degree;
	}
	
}