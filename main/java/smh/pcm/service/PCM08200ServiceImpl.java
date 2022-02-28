package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import java.util.ArrayList;
import java.util.Arrays;

import org.eclipse.core.internal.filesystem.local.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitionId;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMLotCommonService;;


/**
* @file: PCM08200ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM08200ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 13.   김기수     최초  생성
*/
@Service
public class PCM08200ServiceImpl extends AbstractNbdfService implements PCM08200Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08200Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACELOT = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACEWIP="smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMCommonService commonServicePCM;
    
    @Autowired
    private PCMLotCommonService lotCommonService;
    
    @Autowired
    private PCMWipService	wipService;
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM08200#selectLotBoxPackingSendList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPackingLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackingLot", param));
    }   
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM08200#selectLotBoxPackingSendList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotListForBoxSendCancel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListForBoxSendCancel", param));
    }   
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM08200#selectLotBoxPackingSendList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotListForBoxSendCancelBoxNo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListForBoxSendCancelBoxNo", param));
    }   
    
    /**
     * @fn savePcmLotAcceptCancel
     * @brief (Override method) Lot 인수 취소 
     * @remark 
     * @see smh.bas.service.PCM08100#saveSendPackingLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePcmSendCancelLotForBoxPacking(UiMapDto dto) throws Exception {
    	
    	DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_pcmLotCancel"); // ds_pcmSendLot
		//DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");		//ds_comment
		
		//Map<String, Object> paramSearch = paramMapSearch.get(0);
		
		String userId = SessionUtil.getUserId();				//Comment 작성 userId
		String txnId = "PCM08200Service";
		
		
		
		Map<String, Object> paramLotList; // LotList
		
		for (int i = 0; i < paramMapLotList.size(); i++) {
			
			//String txnHistKey = TxnHistKey.getTxnHistKey();
			Date now = new Date();
			paramLotList = paramMapLotList.get(i);
			
			String lotId = paramLotList.get("LOTID").toString();
			String docuNo = paramLotList.get("DOCUMENTNO").toString();
			String strComment = StringUtil.Object2String(paramLotList.get("REASONCANCEL")).toString();
		//	String defectQty = paramLotList.get("DEFECTQTY").toString();
			
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
			
			//LotData Validation Check!!
			ValidationData(lotData);
			
			//pcm_boxpacking 데이터 삭제
			
			Map<String,Object> boxPackingCond = new HashMap<>();
			boxPackingCond.put("LOTID", lotData.get("LOTID"));
			boxPackingCond.put("DOCUMENTNO" , docuNo);
			generalDao.addUpdate(NAMESAPCE + ".deletePcmBoxPacking", boxPackingCond);
			
			Map<String,Object> txnInfo = new HashMap<>();
			txnInfo.put("USERID",SessionUtil.getUserId());
			txnInfo.put("TXNID",txnId);
			
	
			
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> newLotData = cancelFinishLot(lotId , txnInfo);
			
			getLotWorkResultCancelUpdateData(lotId , newLotData);
			
			getLotCancelWorkResultInsertData(lotId, lotData, newLotData, SessionUtil.getUserId() , strComment );
		
		}
	//	saveBoxPackingData(documentNo, paramMapLotList , txnId, userId);
    }

    /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM08100#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
     */
	private void ValidationData(Map<String,Object> lotData)
			throws Exception {
		
		String lotId = lotData.get("LOTID").toString();
		//String isHold = lotData.get("ISHOLD").toString();
		String enterpriseId = lotData.get("ENTERPRISEID").toString();
		String plantId = lotData.get("PLANTID").toString();
		String lotState = lotData.get("LOTSTATE").toString();
		
		if(!lotState.equals(LotState.Finished))
		{
			//해당 Lot이 Hold 상태입니다.
			throw new BizException("InValidData001", lotId);
		}

	}
	
	 /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM08100#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
     */
	private Map<String,Object> cancelFinishLot(String lotId ,Map<String,Object> txnInfo)
			throws Exception {
		Map<String,Object> lotData = lotCommonService.getLotForUpdate(lotId);
		
		Map<String,Object> param = new HashMap<>();
		param.put("PREVLOTSTATE" , lotData.get("LOTSTATE"));
		
		Map<String,Object> lotHistoryCond = new HashMap<>();
		lotHistoryCond.put("P_LOTID", lotData.get("LOTID"));
		lotHistoryCond.put("P_TXNHISTKEY" , lotData.get("LASTTXNHISTKEY"));
		
		List<Map<String,Object>> lotHistoryDataList =  generalDao.addSelect(NAMESPACELOT + ".selectLotHistoryData",lotHistoryCond);
		
		lotData.put("LOTSTATE" , lotHistoryDataList.get(0).get("PREVLOTSTATE"));
		lotData.put("PROCESSSTATE",LotProcessState.Wait);
		lotData.put("SENDTIME",null);
		lotData.put("SENDUSER",null);
		lotData.put("TXNHISTKEY", null);
		lotData.put("TXNID",null);
		lotData.put("MODIFIER",txnInfo.get("USERID"));
		generalDao.addUpdate(NAMESAPCE + ".updatePcmLotDataForCancelFinishLot", lotData);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);	
		
		return lotData;
	}

	private void getLotWorkResultCancelUpdateData(String lotId , Map<String,Object> lotData)
			throws Exception {
		
		Map<String,Object> lotWorkResultData = new HashMap<>();
		
		Map<String,Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID" , lotId);
		propertyMap.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION" , lotData.get("PROCESSSEGMENTVERSION"));
		propertyMap.put("PRODUCTIONORDERID" , lotData.get("PRODUCTIONORDERID"));
		propertyMap.put("PRODUCTDEFID" , lotData.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION" , lotData.get("PRODUCTDEFVERSION"));
		
		List<Map<String,Object>> rsvData =  generalDao.addSelect(NAMESAPCE + ".getExistLotWorkResultInfo",propertyMap);
		
		if(rsvData != null && rsvData.size() > 0)
		{
			String txnHistKey = rsvData.get(0).get("TXNHISTKEY").toString();
			Map<String,Object> cond = new HashMap<>();
			cond.put("P_TXNHISTKEY" , txnHistKey);
			cond.put("P_LOTID", lotId);
			
			List<Map<String,Object>> lotWorkResultDataList = generalDao.addSelect(NAMESPACELOT + ".selectLotWorkResultData",cond);
			
			if(lotWorkResultDataList == null)
			{
				throw new BizException("NoWorkResult");
			}
			
			lotWorkResultData = lotWorkResultDataList.get(0);
			
			lotWorkResultData.put("SENDTIME" , null);
			lotWorkResultData.put("SENDUSER" , null);
			lotWorkResultData.put("SENDPCSQTY" , null);
			lotWorkResultData.put("SENDPANELQTY" , null);
			lotWorkResultData.put("P_TXNHISTKEY", txnHistKey);
			lotWorkResultData.put("TRANSITIONID","CancelSendLot");
			
			generalDao.addUpdate(NAMESPACELOT + ".updateLotWorkResultCancel", lotWorkResultData);
		}
		
		
	}
	
	private void getLotCancelWorkResultInsertData(String lotId, Map<String,Object> coreLotData, Map<String,Object> lotData, String userId, String comments  )
			throws Exception{
		Map<String,Object> cancelData = new HashMap<>();
		cancelData.put("LOTID" , lotId);
		cancelData.put("TXNHISTKEY" , null);
		cancelData.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
		cancelData.put("PLANTID" , lotData.get("PLANTID"));
		cancelData.put("FACTORYID" , lotData.get("FACTORYID"));
		cancelData.put("AREAID" , lotData.get("AREAID"));
		cancelData.put("PROCESSDEFID" , lotData.get("PROCESSDEFID"));
		cancelData.put("PROCESSDEFVERSION" , lotData.get("PROCESSDEFVERSION"));
		cancelData.put("PREVPROCESSDEFID" , coreLotData.get("PROCESSDEFID"));
		cancelData.put("PREVPROCESSDEFVERSION" , coreLotData.get("PROCESSDEFVERSION"));
		cancelData.put("PROCESSSEGMENTID" ,lotData.get("PROCESSSEGMENTID"));
		cancelData.put("PREVPROCESSSEGMENTID" , coreLotData.get("PROCESSSEGMENTID"));
		cancelData.put("LOTSTATE" , lotData.get("LOTSTATE"));
		cancelData.put("PROCESSSTATE" , lotData.get("PROCESSSTATE"));
		cancelData.put("PREVLOTSTATE" , coreLotData.get("LOTSTATE"));
		cancelData.put("PREVPROCESSSTATE" , coreLotData.get("PROCESSSTATE"));
		cancelData.put("UNIT" , lotData.get("UNIT"));
		cancelData.put("PCSQTY" , lotData.get("PCSQTY"));
		cancelData.put("PANELQTY" , lotData.get("PANELQTY"));
		cancelData.put("CANCELCOMMENT" , comments);
		
		generalDao.addInsert(NAMESPACELOT + ".insertLotCancelWorkResultData", cancelData);	
	}
}