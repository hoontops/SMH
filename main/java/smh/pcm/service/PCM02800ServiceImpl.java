package smh.pcm.service;

import java.util.ArrayList;
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
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;

/**
 * @file: PCM02800ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: PCM02800ServiceImpl
 * @Company: Built1
 * @Create Date:  2021.04.19
 * @Author:
 * @File Version: v1.0
 *
 *
 */
@Service
public class PCM02800ServiceImpl extends AbstractNbdfService implements PCM02800Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM02800Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESAPCEWIP   = "smh.pcm.dao.PCMWipDao";
	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

	@Autowired
	private GeneralDao generalDao;
	
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private PCM02100Service PCM02100Service;
    
    @Autowired
    private PCMLotCommonService comService;
    
	@Autowired
	private com.nbdf.cmd.cm.cmsy.service.CMSY03100Service serviceDictionary;

	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.PCM02800Service#selectWipTransAreaList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectWipTransAreaList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWipTransAreaList", param));
	}
	
	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.PCM02800Service#getTransAreaList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getTransAreaList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getTransAreaList", param));
	}
	
    /**
     * @fn
     * @brief (Override method) savePrintLotCard  
     * @remark - Lot Card 출력 저장
     * @see smh.bas.service.PCM00100Service#savePrintLotCard(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveChangeArea(UiMapDto dto) throws Exception {
 		DataSetMap paramMapDataInfo   = getParametersDataSetMap(dto,"ds_dataInfo");
 		DataSetMap paramMapTranInfo  = getParametersDataSetMap(dto,"ds_transAreaList");
 		Map<String, Object> row = getParametersMap(dto);
 		
 		List<Map<String, Object>> lotWorkResultBatchList = new ArrayList();
 		Map<String, Object> lotInfo     = new HashMap<>();
 		int result = 0;
 		
  		 Map<String, Object> dataInfo   = paramMapDataInfo.get(0);
  		 
    	 String enterpriseId    	=  StringUtil.NVL((String)dataInfo.get("ENTERPRISEID"), "");
    	 String plantId    			=  StringUtil.NVL((String)dataInfo.get("PLANTID"), "");
    	 String user    				=  SessionUtil.getUserId(); //(String)dataInfo.get("USER");
    	 String transResourceId   =  StringUtil.NVL((String)dataInfo.get("TRANSRESOURCEID"), "");
    	 String transAreaId    		=  StringUtil.NVL((String)dataInfo.get("TRANSAREAID"), "");
    	 String uiSegment    		=  StringUtil.NVL((String)dataInfo.get("UISEGMENT"), "");
        
    	 
    	 Map<String, Object> lotData     = new HashMap<>();
    	 Map<String, Object> areaData     = new HashMap<>();
    	 Map<String, Object> originArea     = new HashMap<>();
    	 Map<String, Object> pdData     = new HashMap<>();
    	 
    	 
    	 for(int i = 0; i < paramMapTranInfo.size(); i++)
    	 {
    		 row = paramMapTranInfo.get(i);
    		 
    		 String lotId = StringUtil.NVL((String)row.get("LOTID"), "");    		 
 			
 			lotData = wipService.validateLotInfo(lotId);
 			
 			//LotValidation
  			this.LotValidation(row, lotData, uiSegment);
 			
 			//외주작업장 체크
 			areaData = this.validateAreaInfo(transAreaId);
 			
 			//작업장 타입
 			String ownType = StringUtil.NVL((String)areaData.get("OWNTYPE") , "");
 			//작업장 Site
 			String toPlantId = StringUtil.NVL((String)areaData.get("PLANTID") , "");
 			//상태 체크
 			String processState = StringUtil.NVL((String)lotData.get("PROCESSSTATE") , "");
 			
			//변수 선언
			String nowDate = this.getToDate();
			
			String nextPlant = StringUtil.NVL((String)areaData.get("PLANTID") , "IFC");
			
	    	String currentArea   =  StringUtil.Object2String( lotData.get("AREAID"));
	    	String toAreaId   =  StringUtil.Object2String( dataInfo.get("TRANSAREAID"));
 			originArea = this.validateAreaInfo(currentArea);
			
			switch(processState)
			{
				case LotProcessState.WaitForReceive:
					
					pdData = this.validateProductdefinitionInfo((String)lotData.get("PRODUCTDEFID"), (String)lotData.get("PRODUCTDEFVERSION"));
					
					if (pdData == null || pdData.size() == 0)
					{
						// 해당 품목이 존재하지 않습니다. {0}
						throw new BizException("NotExistProduct", String.format("ProductDefId = %s  ProductDefVersion= %s", (String)lotData.get("PRODUCTDEFID"), (String)lotData.get("PRODUCTDEFVERSION")));		
					}
					
//					String productDefType = StringUtil.NVL((String)pdData.get("PRODUCTDEFTYPE"), "");
					
//					String lotState = StringUtil.NVL((String)lotData.get("LOTSTATE"), "");
					
					//외주 작업장이면 SendLot
//					if(ownType.equals(AreaOwnType.OutsideOSP) && !lotState.equals(LotState.InTransit))
//					{
//						boolean isSend = this.checkStartProcessSegment(lotData);
//						
//						if(isSend)
//						{
//							wipService.sendLot(lotId, transAreaId, toPlantId);
//						}
//						
//					}
				    // if not Finished that Lot State then Outside Check Logic   
				    if (!lotData.get("LOTSTATE").equals(LotState.Finished) && StringUtil.Object2String(lotData.get("SUBPROCESSDEFID")) == "")
				    {
				    	// 작업장이 동일한 경우 SendLot 호출 안함
						if (!currentArea.equals(toAreaId))
						{   //현재 작업장이 사내 작업장이라면
							if (!originArea.get("OWNTYPE").equals(AreaOwnType.OutsideOSP))
							{
								//사내 (재공) ==>사외 (물류창고) 
								if (ownType.equals(AreaOwnType.OutsideOSP) && StringUtil.NVL((String)lotData.get("LOTSTATE"), "").equals(LotState.InProduction))
								{
									 Map<String, Object> paramSite = new HashMap<>();
							         paramSite.put("SITE", lotData.get("PLANTID"));

									Map<String, Object> siteInfo   =  generalDao.addSelectOneMap(NAMESAPCEWIP + ".selectBasPlant", paramSite);
							         
									lotData.put("PREVPLANTID", lotData.get("PLANTID"));
									lotData.put("PREVAREAID", lotData.get("AREAID"));
									lotData.put("AREAID", transAreaId);
									lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
									lotData.put("RESOURCEID", transResourceId);
									if(StringUtil.Object2String(siteInfo.get("ISOSPWAREHOUSEOPERATE")).equals("Y"))
							        {
										lotData.put("LOTSTATE", "InTransit");
							        }
									lotInfo.put("PLANTID", toPlantId);
									lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
									lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
									
									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
//									 wipService.sendLot(StringUtil.Object2String(lotData.get("LOTID")), toAreaId, StringUtil.NVL((String)areaData.get("PLANTID") , "IFC"));
//										lotData.put("RESOURCEID", transResourceId);
//										result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
										//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
								} else {  //사내 ==>사내 (물류창고)
									//작업장 및 리소스 변경(Update)
									lotData.put("PREVPLANTID", lotData.get("PLANTID"));
									lotData.put("PREVAREAID", lotData.get("AREAID"));
									lotData.put("AREAID", transAreaId);
									lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
									lotData.put("RESOURCEID", transResourceId);
									lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
									lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
									
									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
									//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);						
								}
							} else {  // 사외외주
								//사외 (재공) ==>사내 (물류창고) 
								if(!ownType.equals(AreaOwnType.OutsideOSP) && StringUtil.NVL((String)lotData.get("LOTSTATE"), "").equals(LotState.InProduction)) {
									boolean  inspection = PCM02100Service.selectLotInfoByProcess(StringUtil.Object2String(lotData.get("ENTERPRISEID")), nextPlant, toAreaId, StringUtil.Object2String(lotData.get("LOTID")));
									
									if(!inspection)
									{
										 Map<String, Object> paramSite = new HashMap<>();
								         paramSite.put("SITE", lotData.get("PLANTID"));

										Map<String, Object> siteInfo   =  generalDao.addSelectOneMap(NAMESAPCEWIP + ".selectBasPlant", paramSite);
								         
										lotData.put("PREVPLANTID", lotData.get("PLANTID"));
										lotData.put("PREVAREAID", lotData.get("AREAID"));
										lotData.put("AREAID", transAreaId);
										lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
										lotData.put("RESOURCEID", transResourceId);
										if(StringUtil.Object2String(siteInfo.get("ISOSPWAREHOUSEOPERATE")).equals("Y"))
								        {
											lotData.put("LOTSTATE", "InTransit");
								        }
										lotInfo.put("PLANTID", toPlantId);
										lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
										lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
										
										result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);											
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////										
//										 wipService.sendLot(StringUtil.Object2String(lotData.get("LOTID")), toAreaId, nextPlant);
//											lotData.put("RESOURCEID", transResourceId);
//											result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
											//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
									} else {
										lotData.put("PREVPLANTID", lotData.get("PLANTID"));
										lotData.put("PREVAREAID", lotData.get("AREAID"));
										lotData.put("AREAID", transAreaId);
										lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
										lotData.put("RESOURCEID", transResourceId);
										lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
										lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
										
										result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
										//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);						
									}
								} else {  //사외 (물류창고) ==>사내 (물류창고) 
									//작업장 및 리소스 변경(Update)
									lotData.put("PREVPLANTID", lotData.get("PLANTID"));
									lotData.put("PREVAREAID", lotData.get("AREAID"));
									lotData.put("AREAID", transAreaId);
									lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
									lotData.put("RESOURCEID", transResourceId);
									lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
									lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
									
									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
									//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);						
								}
							}
						}
				    } else {
						lotData.put("PREVPLANTID", lotData.get("PLANTID"));
						lotData.put("PREVAREAID", lotData.get("AREAID"));
						lotData.put("AREAID", transAreaId);
						lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
						lotData.put("RESOURCEID", transResourceId);
						lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
						lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
						
						result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
				    }
				    
				    result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);		//history 는 한번만 들어가게
				    
					//물류창고 입고 대기상태에서 같은 외주로 변경 했을경우
					// Area만 업데이트
//					else if(ownType.equals(AreaOwnType.OutsideOSP) && lotState.equals(LotState.InTransit))
//					{
//						lotData.put("PREVAREAID", lotData.get("AREAID"));
//						lotData.put("AREAID", transAreaId);
//						lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
//						lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
//							
//						result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
//						result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);								
//					}
					//물류창고 입고 대기상태에서 사내로 변경 했을 경우
					//Area바꾸고 Lot Status를 Inproduct
//					else if(!ownType.equals(AreaOwnType.OutsideOSP) || lotState.equals(LotState.InTransit))
//					{
//						lotData.put("PREVAREAID", lotData.get("AREAID"));
//						lotData.put("AREAID", transAreaId);
//						lotData.put("LOTSTATE(", "InProduction");
//						lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
//						lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
//							
//						result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
//						result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);								
//					}
	
					//CT_LOTWORKRESULT 작업장 Update
					lotWorkResultBatchList.add(this.getUpdateLotWorkResult(transAreaId, transResourceId, lotId, lotData, false));
					
					break;
				case LotProcessState.Wait:
	
					//인수 취소 Update
					
//					lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
//					//lotData.put("LASTTXNID", "CancelReceive");
//					lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
//					lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
					
//					for(int )
//					result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotArea", lotData);	
					//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);						
					
					//외주 작업장이면 SendLot
					/*
					if(ownType.equals(AreaOwnType.OutsideOSP))
					{
						boolean isSend = this.checkStartProcessSegment(lotData);
						if(isSend)
						{
							wipService.sendLot(lotId, transAreaId, toPlantId);
						}
					}
					*/

				    if (!lotData.get("LOTSTATE").equals(LotState.Finished) && StringUtil.Object2String(lotData.get("SUBPROCESSDEFID")) == "")
				    {
				    	// 작업장이 동일한 경우 SendLot 호출 안함
						if (!currentArea.equals(toAreaId))
						{   //현재 공정이 사내 작업장이라면
							if (!originArea.get("OWNTYPE").equals(AreaOwnType.OutsideOSP))
							{
								//사내 (재공) ==>사외 (물류창고) 
								if (ownType.equals(AreaOwnType.OutsideOSP) && StringUtil.NVL((String)lotData.get("LOTSTATE"), "").equals(LotState.InProduction))
								{
									 Map<String, Object> paramSite = new HashMap<>();
							         paramSite.put("SITE", lotData.get("PLANTID"));

									Map<String, Object> siteInfo   =  generalDao.addSelectOneMap(NAMESAPCEWIP + ".selectBasPlant", paramSite);
							         
									lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
									lotData.put("PREVPLANTID", lotData.get("PLANTID"));
									lotData.put("PREVAREAID", lotData.get("AREAID"));
									lotData.put("AREAID", transAreaId);
									lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
									lotData.put("RESOURCEID", transResourceId);
									if(StringUtil.Object2String(siteInfo.get("ISOSPWAREHOUSEOPERATE")).equals("Y"))
							        {
										lotData.put("LOTSTATE", "InTransit");
							        }
									lotData.put("RECEIVETIME", null); // 공백문자를 보내서 null 처리 
									lotData.put("RECEIVEUSER", null);
									lotInfo.put("PLANTID", toPlantId);
									lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
									lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
									
									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
									
//									 wipService.sendLot(StringUtil.Object2String(lotData.get("LOTID")), toAreaId, StringUtil.NVL((String)areaData.get("PLANTID") , "IFC"));
//									lotData.put("RESOURCEID", transResourceId);
//									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
									//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
									 
								} else { //사내 ==>사내 (물류창고)
									//작업장 변경(Update)
									lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
									lotData.put("PREVPLANTID", lotData.get("PLANTID"));
									lotData.put("PREVAREAID", lotData.get("AREAID"));
									lotData.put("AREAID", transAreaId);
									lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
									lotData.put("RESOURCEID", transResourceId);
									lotData.put("RECEIVETIME", null); // 공백문자를 보내서 null 처리 
									lotData.put("RECEIVEUSER", null);
									lotInfo.put("PLANTID", toPlantId);
									lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
									lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
									
									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
									//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
								}
							} else { //사외 (재공) ==>사내 (물류창고) 
								if(!ownType.equals(AreaOwnType.OutsideOSP) && StringUtil.NVL((String)lotData.get("LOTSTATE"), "").equals(LotState.InProduction)) {
									boolean  inspection = PCM02100Service.selectLotInfoByProcess(StringUtil.Object2String(lotData.get("ENTERPRISEID")), nextPlant, toAreaId, StringUtil.Object2String(lotData.get("LOTID")));
									
									if(!inspection)
									{
										 Map<String, Object> paramSite = new HashMap<>();
								         paramSite.put("SITE", lotData.get("PLANTID"));

										Map<String, Object> siteInfo   =  generalDao.addSelectOneMap(NAMESAPCEWIP + ".selectBasPlant", paramSite);
								         
										lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
										lotData.put("PREVPLANTID", lotData.get("PLANTID"));
										lotData.put("PREVAREAID", lotData.get("AREAID"));
										lotData.put("AREAID", transAreaId);
										lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
										lotData.put("RESOURCEID", transResourceId);
										if(StringUtil.Object2String(siteInfo.get("ISOSPWAREHOUSEOPERATE")).equals("Y"))
								        {
											lotData.put("LOTSTATE", "InTransit");
								        }
										lotData.put("RECEIVETIME", null); // 공백문자를 보내서 null 처리 
										lotData.put("RECEIVEUSER", null);
										lotInfo.put("PLANTID", toPlantId);
										lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
										lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
										
//										 wipService.sendLot(StringUtil.Object2String(lotData.get("LOTID")), toAreaId, nextPlant);
//											lotData.put("RESOURCEID", transResourceId);
											result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
											//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
									} else {
										//작업장 및 리소스 변경(Update)
										lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
										lotData.put("PREVPLANTID", lotData.get("PLANTID"));
										lotData.put("PREVAREAID", lotData.get("AREAID"));
										lotData.put("AREAID", transAreaId);
										lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
										lotData.put("RESOURCEID", transResourceId);
										lotData.put("RECEIVETIME", null); // 공백문자를 보내서 null 처리 
										lotData.put("RECEIVEUSER", null);
										lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
										lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
										
										result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
										//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
									}
								} else {  //사외 (물류창고) ==>사내 (물류창고) 
									//작업장 및 리소스 변경(Update)
									lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
									lotData.put("PREVPLANTID", lotData.get("PLANTID"));
									lotData.put("PREVAREAID", lotData.get("AREAID"));
									lotData.put("AREAID", transAreaId);
									lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
									lotData.put("RESOURCEID", transResourceId);
									lotData.put("RECEIVETIME", null); // 공백문자를 보내서 null 처리 
									lotData.put("RECEIVEUSER", null);
									lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
									lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
									
									result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
									//result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);							
								}
							}
						}
				    } else {
						//작업장 및 리소스 변경(Update)
						lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);
						lotData.put("PREVPLANTID", lotData.get("PLANTID"));
						lotData.put("PREVAREAID", lotData.get("AREAID"));
						lotData.put("AREAID", transAreaId);
						lotData.put("PREVLOTSTATE", lotData.get("LOTSTATE"));
						lotData.put("RESOURCEID", transResourceId);
						lotData.put("RECEIVETIME", null); // 공백문자를 보내서 null 처리 
						lotData.put("RECEIVEUSER", null);
						lotData.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
						lotData.put("TXNHISTKEY"           , lotData.get("LASTTXNHISTKEY"));
						
						result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotAreaChange", lotData);	
				    }
					
				    result += generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotData);		//history 는 한번만 들어가게...	
				    
					//CT_LOTWORKRESULT 작업장 Update
					lotWorkResultBatchList.add(this.getUpdateLotWorkResult(transAreaId, transResourceId, lotId, lotData, true));
					
					break;
			}//switch
			
			// Roll Lot 첫공정 자재 삭제
			this.DeleteConsumeMaterialLotData(lotId);			

    	 }//for
    	 
    	 
    	for(int i = 0; i < lotWorkResultBatchList.size(); i++)
    	{
    			Map<String, Object> lotWorkResult = lotWorkResultBatchList.get(i);
		    	 // update  
    			lotWorkResult.put("LASTTXNHISTKEY"       , TxnHistKey.getTxnHistKey());
					
				result += generalDao.addUpdate(NAMESAPCE + ".updatePcmLotworkresult", lotWorkResult);	
	    }
			
    	 
    	 putDataSetMap(dto, result);
    }	
    
	/********************************************************************************************
	 * 해당 Lot이 Roll Lot이고 첫 공정인 경우 Roll Lot 분할 시 사용한 자재 데이터 삭제
	 * param lotId Lot Id
	 * throws InValidDataException
	 * throws DatabaseException
	 * throws MESException
	 * throws SystemException
	 ********************************************************************************************/
	private void DeleteConsumeMaterialLotData(String lotId) throws Exception
	{
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", lotId);
		
		List<Map<String, Object>>  result = generalDao.addSelect(NAMESAPCE + ".getConsumeMaterialLotForRollLot", param);	
		
		
		for (Map<String, Object> materialLot : result)
		{
			Map<String, Object>  tdParam = new HashMap<>();
			
			tdParam.put("LOTID", materialLot.get("LOTID").toString());
			tdParam.put("MATERIALLOTID", materialLot.get("MATERIALLOTID").toString());
			tdParam.put("PROCESSSEGMENTID", materialLot.get("PROCESSSEGMENTID").toString());
			
			List<Map<String, Object>>  td = generalDao.addSelect(NAMESAPCE + ".selectPcmConsumemateriallotTemp", tdParam);	
			
			if (td != null && td.size() > 0)
			{
				generalDao.addDelete(NAMESAPCE + ".deletePcmConsumemateriallotTemp", tdParam);
			}
		}
	}
	
	/********************************************************************************************
	 * CT_LOTWORKRESULT 작업장 Update
	 *********************************************************************************************/
	private Map<String, Object> getUpdateLotWorkResult(String transAreaid, String resourceId, String lotId, Map<String, Object> lot, boolean isWait) throws Exception
	{
		Map<String, Object> lotWorkResultData = new HashMap<>();
		
		Map<String, Object> cond = new HashMap<>();
		
		cond.put("LOTID", lotId);
		cond.put("PRODUCTDEFID", lot.get("PRODUCTDEFID"));
		cond.put("PRODUCTDEFVERSION", lot.get("PRODUCTDEFVERSION"));
		cond.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID"));
		cond.put("PROCESSSEGMENTVERSION", lot.get("PROCESSSEGMENTVERSION"));
		cond.put("WORKCOUNT", lot.get("WORKCOUNT"));
		
		List<Map<String, Object>>  workResult = generalDao.addSelect(NAMESAPCE + ".getlotWorkResultData", cond);	
		
		
		
		if(workResult == null || workResult.size() == 0) {
			//해당 LOT의 실적이 존재하지 않습니다.
			throw new BizException("NotExistsWorkResult", String.format("LotId = %s Segment = %s", lotId, lot.get("PROCESSSEGMENTID")));
		}
		
		
		lotWorkResultData.putAll(workResult.get(0));
		
		lotWorkResultData.put("AREAID", transAreaid);
		lotWorkResultData.put("RESOURCEID", resourceId);
		
		if(isWait)
		{
			lotWorkResultData.put("RECEIVEPCSQTY", "");
			lotWorkResultData.put("RECEIVEPANELQTY", "");
			lotWorkResultData.put("RECEIVEARRAYQTY", "");
			lotWorkResultData.put("RECEIVELEADTIME", "");
			lotWorkResultData.put("RECEIVETIME", "");
			lotWorkResultData.put("RECEIVEUSER", "");
			
		}
		return lotWorkResultData;
	}
	
	/********************************************************************************************
	 * 첫 공정 체크 - 첫 공정이면 외주 작업장 이동 X
	 *********************************************************************************************/
	private boolean checkStartProcessSegment(Map<String, Object> lot) throws Exception
	{
		Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lot);
		
		String processDefId = processDefInfo.get("PROCESSDEFID").toString();
		String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
		
		Map<String, Object> processPathMap = wipService.processPathInfo(lot, processDefId, processDefVersion);
		
		String processPathId = StringUtil.NVL((String)processPathMap.get("PROCESSPATHID"), "");
		
		Map<String, Object> ppdMap = this.validateBasProcesspathInfo(processPathId);
		
		
		String pathType = StringUtil.NVL((String)ppdMap.get("PATHTYPE"), "");
		
		if(pathType.equals("Start") || pathType.equals("StartEnd")) {
			return false;
		}else {
			return true;
		}
	}
	
    public Map<String, Object> validateBasProcesspathInfo(String processpathid) throws Exception {
        
    	Map<String, Object> paramLot = new HashMap<String, Object>();
    	paramLot.put("PROCESSPATHID", processpathid);
    	
    
    	List<Map<String, Object>>  info = generalDao.addSelect(NAMESAPCE+".selectBasProcesspathList",paramLot);
    	
    	if(info == null || info.size() == 0) {
    		
    		throw new BizException("NotExistBasProcesspath", String.format("PROCESSPATHID = %s", processpathid));
    		
    	}
    	
    	return info.get(0);
    	
    }   
	
    public Map<String, Object> validateProductdefinitionInfo(String productdefid, String productdefversion) throws Exception {
        
    	Map<String, Object> paramLot = new HashMap<String, Object>();
    	paramLot.put("PRODUCTDEFID", productdefid);
    	paramLot.put("PRODUCTDEFVERSION", productdefversion);
    	
    
    	List<Map<String, Object>>  productdefinitionInfo = generalDao.addSelect(NAMESAPCE+".selectBasProductdefinitionList",paramLot);
    	
    	
    	return productdefinitionInfo.get(0);
    	
    }     
    
    
  	private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return systemDate.get(0).get("TODATE").toString();
  	}
  	
    
    public Map<String, Object> validateAreaInfo(String areaid) throws Exception {
        
    	Map<String, Object> paramLot = new HashMap<String, Object>();
    	paramLot.put("AREAID", areaid);
    	
    	List<Map<String, Object>>  lotInfo = generalDao.addSelect(NAMESAPCE+".selectBasAreaList",paramLot);
    	
    	if(lotInfo == null || lotInfo.size() == 0) {
    		
    		throw new BizException("NotExistArea", String.format("AREAID = %s", areaid));
    		
    	}
    	
    	return lotInfo.get(0);
    	
    }  
    
	private void LotValidation(Map<String, Object> row, Map<String, Object> lot, String segemtId) throws Exception
	{
		String lotId = StringUtil.NVL((String)row.get("LOTID"), "");
		
		if(lot == null || lotId.equals("")) {
			throw new BizException("InValidData001", String.format("LOT ID : %s", lotId));
		}
		
		String isHold = StringUtil.NVL((String)lot.get("ISHOLD") , "");
		if(isHold.equals("Y")) {
			//해당 LOT이 Hold 상태입니다.
			throw new BizException("InHoldState", String.format("LOT ID : %s", lotId));
		}
		
		String isLocking = StringUtil.NVL((String)lot.get("ISLOCKING") , "");
		if(isLocking.equals("Y")) {
			//해당 Lot이 Locking 상태입니다.
			throw new BizException("InLockingState", String.format("LOT ID : %S", lotId));
		}

		
		String lotState = StringUtil.NVL((String)lot.get("LOTSTATE") , "");
		if(!lotState.equals(LotState.InProduction) && !lotState.equals(LotState.InTransit) ) {
			//해당 Lot이 InProduction 상태가 아닙니다.
			throw new BizException("ValidLotState", String.format("InProduction = %s  LOT = %s", "InProduction",  lotId));
		}
		
		String processSegmentId = StringUtil.NVL((String)lot.get("PROCESSSEGMENTID") , "");
		if(!processSegmentId.equals(segemtId)) {
			//해당 Lot이 다른 공정에 있습니다. 재조회 후 실행해주세요.
			throw new BizException("ValidLotResource", String.format("LOT ID = %s  Segment ID = %s", lotId, segemtId));			
		}
	}
	
/*
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
		
		if(StringUtil.Object2String(siteInfo.get("ISOSPWAREHOUSEOPERATE")).equals("Y"))
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
	}* 
 */
	
	
}