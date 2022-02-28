package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.eclipse.core.internal.filesystem.local.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;


/**
* @file: PCM01000ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01000ServiceImpl
* @Company: Built1
* @Create Date: 2021.03.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일                수정자      수정내용
 *   ------------  ------  ----------
 *   2021. 03. 24.  방성혁      최초  생성
*/
@Service
public class PCM01000ServiceImpl extends AbstractNbdfService implements PCM01000Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM01000Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEO300 = "smh.pcm.dao.PCM00300Dao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMCommonService commonServicePCM;
    
    @Autowired
    private com.nbdf.cmd.cm.cmsy.service.CMSY03100Service serviceDictionary;
    
    /**
     * @fn
     * @brief : 재투입대상 수주번호 조회
     * @remark 
     * @see smh.pcm.service.PCM01000Service#selectProductionOrderListForReInput(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductionOrderListForReInput(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductionOrderListForReInput", param));
    }
    
    /**
     * @fn
     * @brief : 품목조회 
     * @remark 
     * @see smh.pcm.service.PCM01000Service#selectProductDefinitionListByProductionOrder_YP(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDefinitionListByProductionOrder_YP(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionListByProductionOrder_YP", param));
    }
    
    /**
     * @fn
     * @brief : 재투입사유 조회
     * @remark 
     * @see smh.pcm.service.PCM01000Service#selectReinputReason(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectReinputReason(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReinputReason", param));
    }
    
    
    /**
     * @fn
     * @brief  : LOT 투입시 생성된 LOTID를 가져온다
     * @remark : 
     * @see smh.pcm.service.PCM01000Service#getLotId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void getLotStartNo(UiMapDto dto) throws Exception {
    	  Map<String, Object> param = getParametersMap(dto);
          putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLotStartNo", param));
    				
    }
    
    /**
     * @fn
     * @brief :재투입사유 조회
     * @remark : 
     * @see smh.pcm.service.PCM01000Service#selectReInputReason(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectReInputReason(UiMapDto dto) throws Exception {
    	  Map<String, Object> param = getParametersMap(dto);
    	  System.out.println("=====selectReInputReason ====== ");
          putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReInputReason", param));
    				
    }   
    
    /**
     * @fn
     * @brief :LOT재투입
     * @remark : 
     * @see smh.pcm.service.PCM01000Service#saveReInputLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveReInputLot(UiMapDto dto) throws Exception {
    	DataSetMap paramMapLotList  = getParametersDataSetMap(dto,"ds_lotList");
    	DataSetMap paramMapPo       = getParametersDataSetMap(dto,"ds_productionOrder");
    	Map<String, Object> paramLot;
    	Map<String, Object> paramReason = new HashMap<String, Object>();
    	
    	Map<String, Object> paramPo = paramMapPo.get(0);
    	String strDescription = "";
   
    	for (int i = 0, len = paramMapLotList.size(); i < len; i++) {   
    		paramLot = paramMapLotList.get(i);
    		
    		saveCreateLotData(dto, paramLot, paramPo);
    	}
    //	System.out.println("TESTLOTYN =" + paramPo.get("TESTLOTYN").toString() +" ====== ");
    //	if("0".equals(paramPo.get("TESTLOTYN").toString()))
    //	{
			System.out.println("=====업데이트 한다. ====== ");
    		updateProductOrderData(dto, paramPo);
    //	}
    	
    	
    	if(paramPo.get("TESTLOTYN").toString() == "1"){
    		paramReason.put("INPUTSEQUENCE", "1");
    	} else {
    		paramReason.put("INPUTSEQUENCE", paramPo.get("INPUTSEQUENCE"));
    	}
    	
    	if(paramPo.get("REASON").toString().isEmpty() || paramPo.get("REASON") == null){
    		if(paramPo.get("TESTLOTYN").toString() == "1"){
    			strDescription = "TEST LOT 생성";
    	    } else {
    		    strDescription = "LOT 재투입";
    	    }
    	} else {
    		strDescription = paramPo.get("REASON").toString();
    	}
    	
    	paramReason.put("PRODUCTIONORDERID", paramPo.get("PRODUCTIONORDERID"));
    	paramReason.put("LINENO", paramPo.get("LINENO"));	
    	paramReason.put("DESCRIPTION", strDescription);
    	paramReason.put("ISTESTLOT", paramPo.get("TESTLOTYN").toString());
    	
    	int result = generalDao.addInsert(NAMESAPCE + ".insertReInputReason", paramReason);
    	
    	putDataSetMap(dto, result);
    				
    }        
    private void saveCreateLotData(UiMapDto dto, Map<String, Object> paramLot, Map<String, Object> paramPo)  throws Exception {
    	
    	
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
    	paramLot.put("LASTTXNGROUPHISTKEY"    , TxnHistKey.getTxnGroupHistKey());
//    	paramLot.put("LASTTXNHISTKEY"         , TxnHistKey.getTxnHistKey());  	
   
    	paramLot.put("LOTTYPE"                , paramPo.get("PRODUCTIONTYPE"));
    	if(paramPo.get("TESTLOTYN").equals("0")){
    	   paramLot.put("LOTCREATEDTYPE"         , "ReInput");
    	   paramLot.put("LOTINPUTTYPE"           , "ReInput");
    	} else {
    	   paramLot.put("LOTCREATEDTYPE"         , "TestInput");
      	   paramLot.put("LOTINPUTTYPE"           , "TestInput");
    	}
    	paramLot.put("ISREWORK"               , "N");
    	paramLot.put("ISLOCKING"              , "N");
    	paramLot.put("ISREPRESENTROLLLOT"     , isRepresentRollLot);
    	
    	paramLot.put("DUEDATE"                , paramPo.get("PLANENDTIME"));
    	paramLot.put("LAYER"                  , paramRoutingInfo.get("LAYER"));
    	paramLot.put("CREATEDQTY"             , paramLot.get("QTY"));
    	paramLot.put("LOTSTDPANELQTY"         , paramPo.get("LOTPNL"));
    	paramLot.put("UNIT"                   , paramLot.get("UNIT"));
    	paramLot.put("PCSQTY"                 , paramLot.get("QTY"));
    	paramLot.put("DEPTH"                  , "0");
    	paramLot.put("WORKCOUNT"              , 0);
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
    	paramLot.put("LASTTXNHISTKEY"         , TxnHistKey.getTxnHistKey());  	
    	paramLot.put("TXNHISTKEY"             , paramLot.get("LASTTXNHISTKEY"));  	
    	
    	
    	result  +=generalDao.addInsert(NAMESAPCE + ".insertPcmLot", paramLot);
    	result  +=generalDao.addInsert(NAMESAPCE + ".insertPcmLotHistory", paramLot);
    	
    	paramLot.put("TXNHISTKEY"             , TxnHistKey.getTxnHistKey());  	
    	result  +=generalDao.addInsert(NAMESAPCE + ".insertPcmLotGeneal", paramLot);
    	
	
    	putDataSetMap(dto, result);
    }
    private void updateProductOrderData(UiMapDto dto,Map<String, Object> paramPo) throws Exception {
        
    	List<Map<String, Object>> bomList = generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionListByProductionOrder", paramPo);
    	
    	boolean isLotCreateComplete = true;
		
    	paramPo.put("INPUTSEQUENCE"          , paramPo.get("INPUTSEQUENCE"));
    	paramPo.put("LOTINPUTPNLQTY"         , paramPo.get("LOTPNL"));
    	paramPo.put("STDINPUTPNLQTY"         , paramPo.get("STANDARDINPUT"));
    	paramPo.put("STATE"                  , "LotCreate");
    
    	int result = 0;
    	
    	result =generalDao.addInsert(NAMESAPCE + ".updateProductOrder", paramPo);
	
    	putDataSetMap(dto, result);
    }
}