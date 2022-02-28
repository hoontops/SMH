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
 * @Type name: BAS00900ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.03.16
 * @Author: 방성혁
 * @File Version: v1.0
 *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.16.       방성혁     최초  생성
     *
 */
@Service
public class PCM00900ServiceImpl extends AbstractNbdfService implements PCM00900Service {

	public static final String NAMESAPCE      = "smh.pcm.dao.PCM00900Dao";
	public static final String NAMESAPCE_COMM = "smh.pcm.dao.PCMCommonDao";
	
	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn selectWIPListToCancelInput
	 * @brief (Override method) LOT 취소 대상리스트 조회
	 * @remark
* @see smh.pcm.service.PCM00900Service#selectWIPListToCancelInput(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectWIPListToCancelInput(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		if(param.get("PRODUCTDEFNAME") != null) {
			String[] splitProductDefnm = param.get("PRODUCTDEFNAME").toString().split(",");
			param.put("PRODUCTDEFNAME", splitProductDefnm);
		}
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPListToCancelInput", param));
	}

	/**
	 * @fn cancelInputLot
	 * @brief (Override method) LOT 투입  취소
	 * @remark
* @see smh.pcm.service.PCM00900Service#cancelInputLot(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void cancelInputLot(UiMapDto dto) throws Exception {
		DataSetMap paramMapLotList           = getParametersDataSetMap(dto);
		Map<String, Object> paramLot         = new HashMap<String, Object>();
		Map<String, Object> paramLotData     = new HashMap<String, Object>();
		Map<String, Object> paramLotInfo     = new HashMap<String, Object>();
		
		Map<String, Object> paramLcwr     = new HashMap<String, Object>();
		
		
			
		for (int i = 0, len = paramMapLotList.size(); i < len; i++) { 
			paramLot = paramMapLotList.get(i);
			
			if("Wait".equals(paramLot.get("PROCESSSTATE")) && "SHT".equals(paramLot.get("RTRSHT"))) {
				
				throw new BizException("인수취소 후 LOT 투입 취소가 가능합니다");
				//receiveCancel(dto, paramLot);
			}
			
			paramLotInfo.put("LOTID", paramLot.get("LOTID"));
			
			List<Map<String, Object>>  lotData = generalDao.addSelect(NAMESAPCE_COMM + ".selectPcmLotList", paramLotInfo);		
			
			if(lotData.size() == 0)
			{
				throw new BizException("NotExistLot", String.format("LOT ID : %s", paramLot.get("LOTID")));
			}
			
			int result = 0;
			
			for (int j = 0; j < lotData.size(); j++) { 
				paramLotData = lotData.get(j);
							
				paramLotData.put("PREVPROCESSSTATE"        , paramLotData.get("PROCESSSTATE"));
				paramLotData.put("PREVPROCESSDEFID"        , paramLotData.get("PROCESSDEFID"));
				paramLotData.put("PREVPROCESSDEFVERSION"   , paramLotData.get("PROCESSDEFVERSION"));
				paramLotData.put("PREVPROCESSSEGMENTID"    , paramLotData.get("PROCESSSEGMENTID"));
				paramLotData.put("PREVLOTSTATE"            , paramLotData.get("LOTSTATE"));
				paramLotData.put("LOTSTATE"                , "Created");
				paramLotData.put("TXNHISTKEY"              , TxnHistKey.getTxnHistKey());
				paramLotData.put("TXNGROUPHISTKEY"         , TxnHistKey.getTxnGroupHistKey());
				paramLotData.put("CANCELCOMMENTS"          , "CancelInputLot");
				paramLotData.put("AREAID"                  , "");
				paramLotData.put("RESOURCEID"              , "");
				
				
				System.out.println("paramLotData =" + paramLotData +" ====== ");
				
				result += generalDao.insert(NAMESAPCE + ".insertlotCancelWorkResult", paramLotData);
				result += generalDao.delete(NAMESAPCE + ".deleteLotWorkResult", paramLotData);	
				result += generalDao.delete(NAMESAPCE + ".deleteLotGeneral", paramLotData);
				
				paramLotData.put("TXNHISTKEY"     , TxnHistKey.getTxnHistKey());
				paramLotData.put("TXNGROUPHISTKEY", TxnHistKey.getTxnGroupHistKey());
				
				result += generalDao.update(NAMESAPCE + ".updateLot", paramLotData);
				
				paramLotData.put("STATE"          , "Create");
				paramLotData.put("TXNHISTKEY"     , TxnHistKey.getTxnHistKey());
				paramLotData.put("TXNGROUPHISTKEY", TxnHistKey.getTxnGroupHistKey());
				
				result += generalDao.update(NAMESAPCE + ".updateProductionOrder", paramLotData);
				
			}
			
			putDataSetMap(dto, result);
		}
		
	}	
	
	private void receiveCancel(UiMapDto dto, Map<String, Object> lotData)  throws Exception {
		
		
		// 1. 설비 정보 삭제
		// 2. Lot Window time 삭제
		// 3.
		Map<String, Object> paramDeleteLotEqu      = new HashMap<String, Object>();
		Map<String, Object> paramDeleteLotWTime    = new HashMap<String, Object>();
		Map<String, Object> paramProcessPathSearch = new HashMap<String, Object>();
		Map<String, Object> paramSaveLotComment    = new HashMap<String, Object>();
		Map<String, Object> paramProcessSearch     = new HashMap<String, Object>();
		Map<String, Object> paramLcwrk             = new HashMap<String, Object>();
		Map<String, Object> paramLwd               = new HashMap<String, Object>();
		
		int result = 0;
		
		paramDeleteLotEqu.put("LOTID", lotData.get("LOTID"));
		paramDeleteLotEqu.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		paramDeleteLotEqu.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		paramDeleteLotEqu.put("PROCESSSTATE", "WaitForReceive");
		
		result += generalDao.addDelete(NAMESAPCE + ".deletelotEquipment", paramDeleteLotEqu);
		
		
		paramProcessPathSearch.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		paramProcessPathSearch.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		paramProcessPathSearch.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		paramProcessPathSearch.put("PLANTID", lotData.get("PLANTID"));
		paramProcessPathSearch.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		
		Map<String, Object> processPathInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcesspathList", paramProcessPathSearch);
		
		String strProcessPathId = processPathInfo.get("PROCESSPATHID").toString();
		
		paramDeleteLotWTime.put("LOTID", lotData.get("LOTID"));
		paramDeleteLotWTime.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		paramDeleteLotWTime.put("PLANTID", lotData.get("PLANTID"));
		paramDeleteLotWTime.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		paramDeleteLotWTime.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		paramDeleteLotWTime.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		paramDeleteLotWTime.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		paramDeleteLotWTime.put("PROCESSPATHID", strProcessPathId);
		paramDeleteLotWTime.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		paramDeleteLotWTime.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		paramDeleteLotWTime.put("PROCESSSTATE", "WaitForReceive");
		    
		result += generalDao.addDelete(NAMESAPCE + ".deletelotWtime", paramDeleteLotWTime);
		
		
		
//		paramProcessSearch.put("PROCESSDEFID",      lotData.get("PROCESSDEFID"));
//		paramProcessSearch.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
//		
//		Map<String, Object> processDefInfo = generalDao.addSelectOneMap(NAMESAPCE_COMM + ".selectBasProcessdefinition", paramProcessSearch);
		
		paramSaveLotComment.put("LOTID", lotData.get("LOTID"));
		paramSaveLotComment.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		paramSaveLotComment.put("PLANTID", lotData.get("PLANTID"));
		paramSaveLotComment.put("AREAID", lotData.get("AREAID"));
		paramSaveLotComment.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		paramSaveLotComment.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		paramSaveLotComment.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		paramSaveLotComment.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		paramSaveLotComment.put("PROCESSPATHID", strProcessPathId);
		paramSaveLotComment.put("USERSEQUENCE", lotData.get("USERSEQUENCE"));
		paramSaveLotComment.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		paramSaveLotComment.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
		paramSaveLotComment.put("PROCESSSTATE", lotData.get("PROCESSSTATE"));
		paramSaveLotComment.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		paramSaveLotComment.put("TXNGROUPHISTKEY", TxnHistKey.getTxnGroupHistKey());
		paramSaveLotComment.put("TXNHISTKEY"     , TxnHistKey.getTxnHistKey());
		
		
		
		//LotCancelWorkResult
		
		paramLcwrk.put("LOTID"                  , lotData.get("LOTID"));
		paramLcwrk.put("ENTERPRISEID"           , lotData.get("ENTERPRISEID"));
		paramLcwrk.put("PLANTID"                , lotData.get("PLANTID"));
		paramLcwrk.put("FACTORYID"              , lotData.get("FACTORYID"));
		paramLcwrk.put("AREAID"                 , lotData.get("AREAID"));
		paramLcwrk.put("PROCESSDEFID"           , lotData.get("PROCESSDEFID"));
		paramLcwrk.put("PROCESSDEFVERSION"      , lotData.get("PROCESSDEFVERSION"));			
		paramLcwrk.put("PREVPROCESSDEFID"       , lotData.get("PROCESSDEFID"));
		paramLcwrk.put("PREVPROCESSDEFVERSION"  , lotData.get("PROCESSDEFVERSION"));
		paramLcwrk.put("PROCESSSEGMENTID"       , lotData.get("PROCESSSEGMENTID"));	
		paramLcwrk.put("WORKCOUNT"              , lotData.get("WORKCOUNT"));
		paramLcwrk.put("PREVPROCESSSEGMENTID"   , lotData.get("PROCESSSEGMENTID"));
		paramLcwrk.put("LOTSTATE"               , lotData.get("LOTSTATE"));
		paramLcwrk.put("PREVLOTSTATE"           , lotData.get("LOTSTATE"));
		paramLcwrk.put("PROCESSSTATE"           , "CancelReceiveLot");
		paramLcwrk.put("PRVPROCESSSTATE"        , "Wait");
		paramLcwrk.put("UNIT"                   , lotData.get("UNIT"));
		paramLcwrk.put("PCSQTY"                 , lotData.get("PCSQTY"));
		paramLcwrk.put("PANELQTY"               , lotData.get("PANELQTY"));
		paramLcwrk.put("CANCELCOMMENTS"         ,  "CancelInputLot");
		paramLcwrk.put("TXNGROUPHISTKEY"        , TxnHistKey.getTxnGroupHistKey());
		paramLcwrk.put("TXNHISTKEY"             , TxnHistKey.getTxnHistKey());
		
		result += generalDao.addInsert(NAMESAPCE + ".insertlotCancelWorkResult", paramLcwrk);
		
		//
		
		paramLwd.put("RECEIVETIME"               , null);
		paramLwd.put("RECEIVEUSER"               , null);
		paramLwd.put("RECEIVELEADTIME"           , null);
		paramLwd.put("RECEIVEPCSQTY"             , null);
		paramLwd.put("RECEIVEPANELQTY"           , null);
		paramLwd.put("RECEIVEARRAYQTY"           , null);
		
		
		result += generalDao.addInsert(NAMESAPCE + ".insertlotCancelWorkResult", paramLcwrk);
		
		
		
		
				
	}
		
}
