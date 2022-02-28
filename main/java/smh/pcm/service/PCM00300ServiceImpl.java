package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;


/**
 * @file: PCM00300ServiceImpl.java
* @Package: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS00300ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.2.22
 * @Author: 방성혁
 * @File Version: v1.0
 *
 *  << 개정이력(Modification Information) >>
 *
 *   수정일 수정자 수정내용 ------------ ------ ---------- 2021. 2. 22. 방성혁 최초 생성
 */
@Service
public class PCM00300ServiceImpl extends AbstractNbdfService implements PCM00300Service {

	public static final String NAMESAPCE      = "smh.pcm.dao.PCM00300Dao";
	public static final String NAMESAPCE_COMM = "smh.pcm.dao.PCMCommonDao";
	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn selectProductionOrderList
	 * @brief (Override method) 제픔생산 계획 정보 조회
	 * @remark
* @see smh.pcm.service.PCM00300Service#selectProductionOrderList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectProductionOrderList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductionOrderList", param));
	}

	/**
	 * @fn : selectLotListByProductionOrder
	 * @brief (Override method) LOT정보 조회
	 * @remark
* @see smh.pcm.service.PCM00300Service#selectLotListByProductionOrder(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotListByProductionOrder(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListByProductionOrder", param));
	}

	/**
	 * @fn : selectProductDefinitionListByProductionOrder
	 * @brief (Override method) BOM 정보
	 * @remark
* @see smh.pcm.service.PCM00300Service#selectProductDefinitionListByProductionOrder(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectProductDefinitionListByProductionOrder(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionListByProductionOrder", param));
	}

	/**
	 * @fn : selectLineNo
	 * @brief (Override method) Line 정보
	 * @remark
* @see smh.pcm.service.PCM00300Service#selectLineNo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLineNo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);	
		if(param.get("PRODUCTIONORDERID") != null) {
			String[] splitProductOrder = param.get("PRODUCTIONORDERID").toString().split(",");
			param.put("PRODUCTIONORDERID", splitProductOrder);
		}
		if(param.get("PRODUCTDEFID") != null) {
			String[] splitProductId = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductId);
		}
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLineNo", param));
	}

	/**
	 * @fn
	 * @brief (Override method) updateProductionOrder_IsSplit
	 * @remark - 완료저장 ,완료해제
* @see smh.bas.service.PCM00300Service#updateProductionOrder_IsSplit(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void updateProductionOrder_IsSplit(UiMapDto dto) throws Exception {
		DataSetMap paramMap = getParametersDataSetMap(dto);
		Map<String, Object> param;

		int result = 0;
		for (int i = 0, n = paramMap.size(); i < n; i++) {
			param = paramMap.get(i);
			param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());

			result += generalDao.addUpdate(NAMESAPCE + ".updateProductionOrder_IsSplit", param);

		}

		putDataSetMap(dto, result);
	}

	/**
	 * @fn : getLotIdMaxSequence
	 * @brief (Override method)
	 * @remark
* @see smh.pcm.service.PCM00300Service#getLotIdMaxSequence(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getLotIdMaxSequence(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		if(param.get("RTRSHT").equals("RTR")) {
		 putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLotIdRollMaxSequence", param));
		} else {
			putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLotIdSheetMaxSequence", param));
		}
	}

	/**
     * @fn : SaveCreateLot
     * @brief (Override method)  
     * @remark 
     * @see smh.pcm.service.PCM00300Service#SaveCreateLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveCreateLot(UiMapDto dto) throws Exception {
    	// System.out.println("=====================  saveCreateLot 호출 ====== ");
    	DataSetMap paramMapLotList      = getParametersDataSetMap(dto,"ds_lotListTemp");
    	//System.out.println("=====================  ds_lotListTemp 통과 ====== ");
    	DataSetMap paramMapProductOrder = getParametersDataSetMap(dto,"ds_productionOrderTemp");
    	//System.out.println("=====================  paramMapProductOrder 통과 ====== ");
    	Map<String, Object> paramLot;
    	Map<String, Object> paramPo = paramMapProductOrder.get(0);
    //	System.out.println("=====================  paramPo 조회 ====== ");
    	for (int i = 0, len = paramMapLotList.size(); i < len; i++) {   
    		paramLot = paramMapLotList.get(i);
    		
    		saveCreateLotData(dto, paramPo, paramLot);
    	}
    	
    	updateProductOrderData(dto, paramPo);

    } 
    
	/**
     * @fn : cancelCreateLot
     * @brief (Override method)  
     * @remark 
     * @see smh.pcm.service.PCM00300Service#cancelCreateLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void cancelCreateLot(UiMapDto dto) throws Exception {
    	 
 		DataSetMap paramMapDataList = getParametersDataSetMap(dto, "ds_data");
 		DataSetMap paramMap         = getParametersDataSetMap(dto, "ds_productTemp");
 		
 		Map<String, Object> paramLotInfo;
 		
 		Map<String, Object> paramData = paramMapDataList.get(0);
 		

 		int result = 0;
 		
 		Map<String, Object> ProductionorderInfo =   generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectMfmProductionorder", paramData);
 		
 		if(ProductionorderInfo == null)
 		{
 			throw new BizException("InValidData001", String.format("ProductionOrderId = %s, LineNo = %s", paramData.get("PRODUCTIONORDERID"), paramData.get("LINENO")));
 		}
 		
 		String poState = StringUtil.Object2String(ProductionorderInfo.get("STATE"));
 		
 		if(poState.equals("LotCreate"))
 		{
 			ProductionorderInfo.put("STATE", "Create");
 			result += generalDao.addUpdate(NAMESAPCE + ".updateProductOrder", ProductionorderInfo);
 		}
  		
 		
 		for (int i = 0, n = paramMap.size(); i < n; i++) {
 			
 			Map<String, Object> param = paramMap.get(i);
 			
 			param.put("PRODUCTIONORDERID", paramData.get("PRODUCTIONORDERID"));
 			param.put("LINENO"           , paramData.get("LINENO"));
 			
 			int  lotCnt = generalDao.addSelectCount(NAMESAPCE + ".getExistsLotWithLotStateIsNotCreated", param);
 			if (lotCnt >  0)
 			{
 					// "S/O번호 : {0}, 라인 : {1}" 수주 정보의 Lot은 이미 투입되거나 작업 완료된 상태입니다.	 
 	    		 throw new BizException("AlreadyUsingLot", String.format("ProductionOrderId = %s, LineNo = %s", paramData.get("PRODUCTIONORDERID"), paramData.get("LINENO")));
 			}
 			
 			List<Map<String, Object>> lotInfo = generalDao.addSelect(NAMESAPCE + ".selectLot", param);
 	    	 
 			 for (int j = 0, m = lotInfo.size(); j < m; j++) {
 			 
 	    		paramLotInfo = lotInfo.get(j);
 	
 	 			result += generalDao.addDelete(NAMESAPCE + ".deleteLot", paramLotInfo);
 	 			//result += generalDao.addInsert(NAMESAPCE + ".insertPcmLotHistory", paramLotInfo);
 			 }
 		}
 		
 		putDataSetMap(dto, result);

    } 
    
    
    private void saveCreateLotData(UiMapDto dto, Map<String, Object> paramPo, Map<String, Object> paramLot) throws Exception {
    	
    	List<Map<String, Object>> routingInfo = generalDao.addSelect(NAMESAPCE + ".checkRoutingInfoByProduct", paramLot);
    	
    	
    	if(routingInfo.size() == 0)
    	{	
    		throw new BizException("NotExistsRoutingInfo");
    	}
    	
    	Map<String, Object> paramRoutingInfo = routingInfo.get(0);
    	
    	int result = 0;
    	String isRepresentRollLot = "";
    	
    	double pcsPerArray = 0;
    	if(paramRoutingInfo.get("PCSARY") != null) {
    		
    		pcsPerArray = Double.parseDouble(paramRoutingInfo.get("PCSARY").toString());
    	}
    	
    	if(paramLot.get("RTRSHT").equals("RTR")) {
    		isRepresentRollLot = "Y";
    	} else if(paramLot.get("RTRSHT").equals("SHT")) {
    		isRepresentRollLot = "N";
    	}
    	
    	
    	paramLot.put("HASSUBLOT"              , "");
    	paramLot.put("PROCESSDEFID"           , paramRoutingInfo.get("PROCESSDEFID"));
    	paramLot.put("PROCESSDEFVERSION"      , paramRoutingInfo.get("PROCESSDEFVERSION"));
    	paramLot.put("PROCESSPATHSTACK"       , paramRoutingInfo.get("PROCESSPATHSTACK"));
    	paramLot.put("USERSEQUENCE"           , paramRoutingInfo.get("USERSEQUENCE"));
    	paramLot.put("PROCESSSEGMENTID"       , paramRoutingInfo.get("PROCESSSEGMENTID"));
    	paramLot.put("PROCESSSEGMENTVERSION"  , paramRoutingInfo.get("PROCESSSEGMENTVERSION"));
    	paramLot.put("ORIGINALPLANTID"        , paramLot.get("PLANTID"));
    	paramLot.put("LOTSTATE"               , "Created");
    	paramLot.put("PROCESSSTATE"           , "WaitForReceive");
    	paramLot.put("ISHOLD"                 , "N");
    	paramLot.put("REWORKCOUNT"            , "0");
    	paramLot.put("TOTALREWORKCOUNT"       , "0");
    	paramLot.put("WORKORDERID"            , "*");
    	paramLot.put("PRIORITY"               , "1.0");
    	paramLot.put("AREAID"                 , "*");
//    	paramLot.put("LASTTXNGROUPHISTKEY"    , TxnHistKey.getTxnGroupHistKey());
//    	paramLot.put("LASTTXNHISTKEY"         , TxnHistKey.getTxnHistKey());  	
   
    	paramLot.put("LOTTYPE"                , paramPo.get("PRODUCTIONTYPE"));
    	paramLot.put("LOTCREATEDTYPE"         , "Normal");
    	paramLot.put("LOTINPUTTYPE"           , "Normal");
    	paramLot.put("ISREWORK"               , "N");
    	paramLot.put("ISLOCKING"              , "N");
    	paramLot.put("ISREPRESENTROLLLOT"     , isRepresentRollLot);
    	paramLot.put("DUEDATE"                , paramPo.get("PLANENDTIME"));
    	paramLot.put("LAYER"                  , paramRoutingInfo.get("LAYER"));
    	paramLot.put("CREATEDQTY"             , paramLot.get("QTY"));
    	paramLot.put("LOTSTDPANELQTY"         , paramPo.get("LOTPNL"));
    	paramLot.put("UNIT"                   , paramLot.get("UNIT"));
    	paramLot.put("PCSQTY"                 , paramLot.get("QTY"));
    	paramLot.put("DEPTH"                 , "0");
    	if (pcsPerArray > 0)
    	{
    		paramLot.put("ARRAYQTY"           , Double.parseDouble(paramLot.get("QTY").toString())/pcsPerArray);
    	}
    	paramLot.put("PANELQTY"               , paramLot.get("PNLQTY"));
    	paramLot.put("PANELPERQTY"            , paramLot.get("JOINTQTY"));
    	paramLot.put("HANDLETYPE"             , "UI");
    	paramLot.put("ISDEFECTED"             , "N");
    	paramLot.put("ISPRINTLOTCARD"         , "N");
    	paramLot.put("ISFINALINSPECTPROGESS"  , "N");
    	paramLot.put("ISFIRSTCREATELOT"       , "Y");
    	paramLot.put("ISOEM"                  , "N");
    	paramLot.put("LINENO"                  , paramPo.get("LINENO"));
    //	paramLot.put("TXNHISTKEY"             , TxnHistKey.getTxnHistKey());  	
   
    	
    	result  +=generalDao.addInsert(NAMESAPCE + ".insertPcmLot", paramLot);
    	result  +=generalDao.addInsert(NAMESAPCE + ".insertPcmLotGeneal", paramLot);
    //	result  +=generalDao.addInsert(NAMESAPCE + ".insertPcmLotHistory", paramLot);
	
    	putDataSetMap(dto, result);
    }
    private void updateProductOrderData(UiMapDto dto,Map<String, Object> paramPo) throws Exception {
    
    	List<Map<String, Object>> bomList = generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionListByProductionOrder", paramPo);
    	
    	boolean isLotCreateComplete = true;
		
		for (int i = 0, len = bomList.size(); i < len; i++)
		{
			String isLotCreate = bomList.get(i).get("ISLOTCREATE").toString();
			
			System.out.println("ProductId = " +  bomList.get(i).get("PRODUCTDEFID").toString() + ", isLotCreate ="+ isLotCreate);
			
			if (isLotCreate.equals("N"))
				isLotCreateComplete = false;
		}
    	
    	paramPo.put("LASTTXNHISTKEY" , TxnHistKey.getTxnHistKey());  	
    	
    	if (isLotCreateComplete)
    	{
    		paramPo.put("STATE"      ,"LotCreate");
    	}
    	paramPo.put("INPUTSEQUENCE"          , "1");
    	paramPo.put("PUREORDER"              , paramPo.get("PUREORDER"));
    	paramPo.put("PUREINPUT"              , paramPo.get("PUREINPUT"));
    	paramPo.put("SURPLUSSTOCK"           , paramPo.get("SURPLUSSTOCK"));
    	paramPo.put("SURPLUSWIP"             , paramPo.get("SURPLUSWIP"));
    	paramPo.put("UNDERAGE"               , paramPo.get("LACKQTY"));
    	paramPo.put("STDINPUTPNLQTY"         , paramPo.get("STANDARDINPUT"));
    	paramPo.put("LOTINPUTPNLQTY"         , paramPo.get("LOTPNL"));
    	paramPo.put("UNDERAGE"               , paramPo.get("LACKQTY"));
    	
    	int result = 0;
    	
    	result =generalDao.addUpdate(NAMESAPCE + ".updateProductOrder", paramPo);
	
    	putDataSetMap(dto, result);
    }
    
	/**
	 * @fn : getProductionOrderIdList
	 * @brief (Override method) S/O 조회
	 * @remark
* @see smh.pcm.service.PCM00300Service#getProductionOrderIdList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getProductionOrderIdList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProductionOrderIdList", param));
	}    
}