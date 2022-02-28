package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;




/**
 * @file: PCM00500ServiceImpl.java
* @Package: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS00500ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.03.08
 * @Author: 방성혁
 * @File Version: v1.0
 *
 *  << 개정이력(Modification Information) >>
 *
 *   수정일 수정자 수정내용 ------------ ------ ---------- 2021. 2. 22. 방성혁 최초 생성
 */
@Service
public class PCM00500ServiceImpl extends AbstractNbdfService implements PCM00500Service {

	public static final String NAMESAPCE      = "smh.pcm.dao.PCM00500Dao";
	public static final String NAMESAPCE_COMM = "smh.pcm.dao.PCMCommonDao";
	 public static final String NAMESPACE1     = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn selectNotInputProductDefId
	 * @brief (Override method) PO 및 품목으로 미투입된 품목을 조회
	 * @remark
* @see smh.pcm.service.PCM00500Service#selectNotInputProductDefId(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectNotInputProductDefId(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputProductDefId", param));
	}

	/**
	 * @fn : getProductionOrderIdListOfLotInput
	 * @brief (Override method) LOT 투입 화면에서 검색조건의 S/O번호 팝업 정보를 조회
	 * @remark
* @see smh.pcm.service.PCM00500Service#getProductionOrderIdListOfLotInput(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getProductionOrderIdListOfLotInput(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		 System.out.println("param = "+ param);
		if(param.get("PRODUCTIONORDERID") != null) {
			String[] splitProductOrder = param.get("PRODUCTIONORDERID").toString().split(",");
			param.put("PRODUCTIONORDERID", splitProductOrder);
		}
		if(param.get("TXTPRODUCTDEFNAME") != null) {
			String[] splitProductDefid = param.get("TXTPRODUCTDEFNAME").toString().split(",");
			param.put("TXTPRODUCTDEFNAME", splitProductDefid);
		}
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProductionOrderIdListOfLotInput", param));
	}
	
	/**
	 * @fn : selectNotInputLotListByProductDefId
	 * @brief (Override method) 선택한 품목의 LOT 리스트 조회
	 * @remark
* @see smh.pcm.service.PCM00500Service#selectNotInputLotListByProductDefId(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectNotInputLotListByProductDefId(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputLotListByProductDefId", param));
	}	

	/**
	 * @fn : getLotInputAreaList
	 * @brief (Override method) 투입 작업장 조회
	 * @remark
* @see smh.pcm.service.PCM00500Service#getLotInputAreaList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getLotInputAreaList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLotInputAreaList", param));
	}	
	
	/**
	 * @fn selectExpectedCompleteDate
	 * @brief (Override method) 예상 생산 완료일 조회
	 * @remark
* @see smh.pcm.service.PCM00500Service#selectExpectedCompleteDate(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectExpectedCompleteDate(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectExpectedCompleteDate", param));
	}
	
	/**
	 * @fn Lot INPUT
	 * @brief (Override method)LOT 투입
	 * @remark
* @see smh.pcm.service.PCM00500Service#selectExpectedCompleteDate(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void saveInputLot(UiMapDto dto) throws Exception {
		DataSetMap paramMapLotList      = getParametersDataSetMap(dto,"ds_lotListTemp");
    	DataSetMap paramMapProductList = getParametersDataSetMap(dto,"ds_productList");
    	
    	Map<String, Object> paramLot;
  
    	Map<String, Object> paramPo = paramMapProductList.get(0);
    	paramPo.put("TXNGROUPHISTKEY", TxnHistKey.getTxnGroupHistKey());
    	
        int result = 0;
    	for (int i = 0, len = paramMapLotList.size(); i < len; i++) {   
    		paramLot = paramMapLotList.get(i);
    		System.out.println("paramMapLotList 순번 ("+ paramLot.get("LOTID") +")");
    		System.out.println("paramLot =" + paramLot);
    		paramLot.put("TXNGROUPHISTKEY", paramPo.get("TXNGROUPHISTKEY"));
           // LOT UPDATE
    		Map<String, Object> lotData = getInputLotUpdateData(dto, paramLot);
    		// Lot을 시작하거나 Lot의 인계등록 작업이 처리된 후 다음 공정을 위한 작업 결과(실적) 데이터를 미리 생성한다.
    	     saveLotWorkResultForNextProcess( dto, lotData, paramPo)	;	
    	}
    	
    	//Product Order Update
    	updateProductOrder(dto, paramPo);
		
	}	
	
	private Map<String, Object> getInputLotUpdateData(UiMapDto dto,Map<String, Object> paramLot) throws Exception {
	
		Map<String, Object> paramLotData = new HashMap<String, Object>();
		Map<String, Object> paramLotSearch = new HashMap<String, Object>();
		
		
		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
    	
    	String sToday = systemDate.get(0).get("TODATE").toString();
    	
    	 SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	 Date tToday = dateFormat.parse(sToday);
    	
    	int result = 0;
    	
		if(  Double.parseDouble(paramLot.get("INPUTPNLQTY").toString()) > Double.parseDouble(paramLot.get("PANELQTY").toString()))
		{
			throw new BizException("CantInputLagerThanLotQty");
		}
		
		paramLotSearch.put("LOTID", paramLot.get("LOTID"));
		
		List<Map<String, Object>> lotData = generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotList", paramLotSearch);
		
		if(lotData.size() == 0)
		{
			throw new BizException("NotExistLot", String.format("LOT ID : %s", paramLot.get("LOTID")));
		}
		
		for (int i = 0, len = lotData.size(); i < len; i++) {   
			paramLotData = lotData.get(i);
			String arguMsg =  "";	
			
			if (!paramLotData.get("LOTSTATE").equals("Created")) {
				
				arguMsg =  "CREATE," + paramLotData.get("LOTID").toString();		
				throw new BizException("ValidLotState",arguMsg);
			}
			if (paramLotData.get("ISHOLD").equals("Y")) {
				// LotHold 	
				throw new BizException("InHoldState", paramLotData.get("LOTID").toString());
			}
			if (paramLotData.get("ISLOCKING").equals("Y")) {
				// LotLocking 
				throw new BizException("InLockingState", paramLotData.get("LOTID").toString());
			}
			
			
			paramLotData.put("RESOURCEID", paramLot.get("RESOURCEID"));
			paramLotData.put("AREAID", paramLot.get("INPUTAREA"));
//			paramLotData.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			paramLotData.put("LASTTXNGROUPHISTKEY", paramLot.get("TXNGROUPHISTKEY"));
			paramLotData.put("ISFIRSTCREATELOT", "Y");
			paramLotData.put("ISDEFECTED", "N");
			paramLotData.put("LOTSTATE", "InProduction");
			paramLotData.put("STARTEDUSER", SessionUtil.getSessionValue("USER_ACNT"));
			paramLotData.put("ROOTLOTSTARTDATE", tToday);
			paramLotData.put("STARTEDDATE",      tToday);
			paramLotData.put("MODIFIEDTIME",     tToday);
			paramLotData.put("TXNGROUPHISTKEY",  paramLot.get("TXNGROUPHISTKEY"));
			paramLotData.put("DEPT", '1');
			paramLotData.put("LOTCREATETYPE", "StartLot");
			paramLotData.put("PNLROOTLOTID"        , paramLotData.get("ROOTLOTID"));
			paramLotData.put("LOTINPUTQTY"         , paramLotData.get("QTY"));
			paramLotData.put("PNLCREATEDQTY"       , paramLotData.get("CREATEDQTY"));
			paramLotData.put("DUEDATE"             , paramLot.get("DUEDATE"));
			paramLotData.put("LOTSTARTDATE",  tToday);
			paramLotData.put("WORKCOUNT", 0);
			if("MIG".equals(paramLotData.get("DESCRIPTION"))) {
				paramLotData.put("LOTSTARTDATE",  paramLotData.get("LOTID"));
			} 
			if(paramLot.get("EXPECTEDCOMPLETEDATE") != null) {
				paramLotData.put("EXPECTEDCOMPLETEDATE",  paramLot.get("EXPECTEDCOMPLETEDATE"));
			} 
			result += generalDao.update(NAMESAPCE + ".updateLot", paramLotData);
			
			result += generalDao.insert(NAMESAPCE_COMM + ".insertPcmLotGeneal", paramLotData);
			    			
		}
		putDataSetMap(dto, result);
		
		return paramLotData;
	}
	private void saveLotWorkResultForNextProcess(UiMapDto dto, Map<String, Object> lotData, Map<String, Object> paramPo)  throws Exception {
		Map<String, Object> paramProduct = new HashMap<String, Object>();
		Map<String, Object> paramProcess = new HashMap<String, Object>();
		Map<String, Object> LotworkresultData = new HashMap<String, Object>();
		
		paramProduct.put("PRODUCTDEFID",      lotData.get("PRODUCTDEFID"));
		paramProduct.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		
		Map<String, Object> productDefInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProductdefinitionList", paramProduct);
		
		if(productDefInfo.size() == 0) 
		{

			throw new BizException("CheckProductDefId", String.format("ProductDefId : %s, ProductDefVersion : %s", paramProduct.get("PRODUCTDEFID"), paramProduct.get("PRODUCTDEFVERSION")));
		}
		
		
		paramProcess.put("PROCESSDEFID",      productDefInfo.get("PROCESSDEFID"));
		paramProcess.put("PROCESSDEFVERSION", productDefInfo.get("PROCESSDEFVERSION"));
		
		Map<String, Object> processDefInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcessdefinition", paramProcess);
		
		if(processDefInfo.size() == 0) 
		{

			throw new BizException("checkProcessDef", String.format("ProcessDefId : %s, ProcessDefVersion : %s", paramProcess.get("PROCESSDEFID"), paramProcess.get("PROCESSDEFVERSION")));
		}
		System.out.println("=====================  processDefInfo 조회완료 ====== ");
		
		paramProcess.put("PATHTYPE",          "Start,StartEnd");
		System.out.println("=====================  processPathInfo 조회시작 ====== ")	;
		Map<String, Object> processPathInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", paramProcess);
		
		if(processPathInfo.size() == 0) 
		{

			throw new BizException("InValidData001", String.format("ProcessDefId : %s, ProcessDefVersion : %s", paramProcess.get("PROCESSDEFID"), paramProcess.get("PROCESSDEFVERSION")));
		}
		
		System.out.println("=====================  processPathInfo 조회완료 ====== ");	
		String processDefId      = processDefInfo.get("PROCESSDEFID").toString();
		String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
		String processPathId     = processPathInfo.get("PROCESSPATHID").toString();
		
		double arrayPerQty = 1;
		if(productDefInfo.get("PCSARY") != null){
			
			 arrayPerQty       = Double.parseDouble(productDefInfo.get("PCSARY").toString());
		}
		String txnHistKey        = TxnHistKey.getTxnHistKey();
		System.out.println("=====================  Lot 작업 실적 ====== ");		
		LotworkresultData.put("TXNHISTKEY"                , txnHistKey);
		LotworkresultData.put("LOTID"                     , lotData.get("LOTID")); 
		LotworkresultData.put("PROCESSSEGMENTID"          , lotData.get("PROCESSSEGMENTID"));
		LotworkresultData.put("PROCESSSEGMENTVERSION"     , lotData.get("PROCESSSEGMENTVERSION"));
		LotworkresultData.put("ENTERPRISEID"              , lotData.get("ENTERPRISEID"));
		LotworkresultData.put("PLANTID"                   , lotData.get("PLANTID"));
		LotworkresultData.put("FACTORYID"                 , lotData.get("FACTORYID"));
		LotworkresultData.put("AREAID"                    , lotData.get("AREAID"));
		LotworkresultData.put("PRODUCTIONORDERID"         , lotData.get("PRODUCTIONORDERID"));
		LotworkresultData.put("LINENO"                    , lotData.get("LINENO"));
		LotworkresultData.put("PRODUCTDEFID"              , lotData.get("PRODUCTDEFID"));
		LotworkresultData.put("PRODUCTDEFVERSION"         , lotData.get("PRODUCTDEFVERSION"));
		LotworkresultData.put("PROCESSDEFID"              , processDefId);
		LotworkresultData.put("PROCESSDEFVERSION"         , processDefVersion);
		LotworkresultData.put("PROCESSPATHID"             , processPathId);
		LotworkresultData.put("USERSEQUENCE"              , lotData.get("USERSEQUENCE"));
		LotworkresultData.put("WORKCOUNT"                 , lotData.get("WORKCOUNT"));
		LotworkresultData.put("ISPRINTLOTCARD"            , lotData.get("ISPRINTLOTCARD"));
		LotworkresultData.put("WEEK"                      , lotData.get("WEEK"));
		 System.out.println("=====================  Lot 작업 실적 111 ====== ");	
	
		 System.out.println("=====================  Lot 작업 실적 222 ====== ");	
		LotworkresultData.put("ISREWORK"                  , lotData.get("ISREWORK") == null ? "N" : lotData.get("ISREWORK"));
		LotworkresultData.put("REWORKTYPE"                , lotData.get("REWORKTYPE"));
		LotworkresultData.put("REWORKREASONCODE"          , lotData.get("REWORKREASONCODE"));
		LotworkresultData.put("REWORKCOUNT"               , lotData.get("REWORKCOUNT"));
	    LotworkresultData.put("ROOTLOTSTARTDATE"          , lotData.get("ROOTLOTSTARTDATE"));
	    LotworkresultData.put("ROOTLOTINPUTPANELQTY"      , lotData.get("PANELQTY"));
	   
	    if (arrayPerQty > 0) 
	    {
	    	LotworkresultData.put("ROOTLOTINPUTARRAYQTY"  , Double.parseDouble(lotData.get("QTY").toString())/arrayPerQty );
	    }
		 System.out.println("=====================  Lot 작업 실적 ㄴㄴㄴ ====== ");	
	    LotworkresultData.put("ROOTLOTINPUTPCSQTY"        , lotData.get("QTY"));
	    LotworkresultData.put("PROCESSPATHSTACK"          , lotData.get("PROCESSPATHSTACK"));
	    LotworkresultData.put("RESOURCEID"                , lotData.get("RESOURCEID"));
	    LotworkresultData.put("PREVSENDLOTHISTKEY"        , lotData.get("LASTTXNHISTKEY"));
		
	   int result = generalDao.insert(NAMESAPCE + ".insertLotWorkResult", LotworkresultData);
	   System.out.println("=====================  Lot 작업 실적 종료 ====== ");	
	    putDataSetMap(dto, result);
	    
	   
	}
	
	private void updateProductOrder(UiMapDto dto, Map<String, Object> paramPo)
	{
		String poState = "LotInput";
		String productionOrderId  = paramPo.get("PRODUCTIONORDERID").toString();
		String productDefId       = paramPo.get("PRODUCTDEFID").toString();
		String productDefVerseion = paramPo.get("PRODUCTDEFVERSION").toString();
		String lineNo             = paramPo.get("LINENO").toString();
		String plantId            = paramPo.get("PLANTID").toString();
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("PLANTID", plantId);
		propertyMap.put("PRODUCTDEFID", productDefId);
		propertyMap.put("PRODUCTDEFVERSION", productDefVerseion);
		propertyMap.put("PRODUCTIONORDERID", productionOrderId);
		propertyMap.put("LINENO", lineNo);
		
		int createdLotCount= generalDao.addSelectCount(NAMESAPCE_COMM + ".getCreatedLotListPoByProduct", propertyMap);
		

		if(createdLotCount == 0) 
		{
			propertyMap.put("STATE", poState);
			propertyMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			
			int result = generalDao.update(NAMESAPCE + ".updateProductOrder", propertyMap);
		    
		    putDataSetMap(dto, result);
		}
		
	}
}