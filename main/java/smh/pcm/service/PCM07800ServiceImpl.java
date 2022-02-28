package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
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
import smh.pcm.service.PCMLotCommonService;
import smh.pcm.service.PCMWipService;


/**
* @file: PCM07800ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM07800ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.   김기수     최초  생성
*/
@Service
public class PCM07800ServiceImpl extends AbstractNbdfService implements PCM07800Service {

    public static final String NAMESPACE = "smh.pcm.dao.PCM07800Dao";
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACELOT = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACE_CMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMCommonService commonServicePCM;
    
    @Autowired
    private PCMLotCommonService lotCommonService;
    
    @Autowired
    private PCMWipService wipService;
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PCM02500#selectLotWorkCancelList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotWorkPacking(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotWorkPacking", param));
    }   
    
    
    
    
    /**
     * @fn savePcmLotTrackInCancel
     * @brief (Override method) Lot 작업시작 취소 
     * @remark 
     * @see smh.bas.service.PCM07800#savePcmLotTrackInCancel(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePcmBoxPackingAccept(UiMapDto dto) throws Exception {
       // Map<String, Object> param = getParametersMap(dto);
		DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_pcmLot"); // 
		
		String userId = SessionUtil.getUserId();
		String txnId = "PCM07800Service";
		System.out.println("========================>txnId  :  " + txnId + "   Start!!!!");
		Map<String, Object> paramLotList; // LotList
		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE_CMSA+".selectCurrentSystemTime","");
    	
    	String sToday = systemDate.get(0).get("TODATE").toString();
    	
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	Date nowDate = dateFormat.parse(sToday);
    	
    	//String languageType = paramSearch.get("LANGUAGETYPE").toString();
    	
    	for(int i=0;i<paramMapLotList.size();i++)
    	{
    		paramLotList = paramMapLotList.get(i);
    		System.out.println("========================>LOTID Check   :  " + paramLotList.get("LOTID").toString());
    	}
    	
    	
    	
    	
		for (int i = 0; i < paramMapLotList.size(); i++) {
			
			if(paramMapLotList.get(i).get("CHK").equals("1"))
			{
				paramLotList = paramMapLotList.get(i);
				String langType = paramLotList.get("SESSION_LANGUAGETYPE").toString();
				String lotId = paramLotList.get("LOTID").toString();
				
				
				
				// LotId를 기준으로 LotData를 가져옴.
				Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
				
				//LotData Validation Check!!
				ValidationData(lotData);
				
				
				wipService.executeCheckingWindowTimeNewTx(dto ,lotData, nowDate);
				
				lotData = wipService.receiveLot(dto, lotData ,userId, nowDate);
				
				String toResourceId="";
				String toAreaId="";
				wipService.saveLotWorkResult(dto, lotData, TransitType.ReceiveLot, userId, nowDate , toResourceId , toAreaId);
				
				Map<String, Object> processDefInfo = lotCommonService.GetProcessDefinitionInfo(lotData);
				
				String processDefid = processDefInfo.get("PROCESSDEFID").toString();
				String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
				
				Map<String, Object> lotReserveLockingCond = new HashMap<>();
				lotReserveLockingCond.put("LOTID" , lotId);
				lotReserveLockingCond.put("ENTERPRISEID" , lotData.get("ENTERPRISEID"));
				lotReserveLockingCond.put("PLANTID" , lotData.get("PLANTID"));
				lotReserveLockingCond.put("PROCESSDEFID" , processDefid);
				lotReserveLockingCond.put("PROCESSSEGMENTID" , lotData.get("PROCESSSEGMENTID"));
				lotReserveLockingCond.put("LOCKINGSTATUS","Created");
				
				List<Map<String,Object>> lotReserveLockingDataList = generalDao.addSelect(NAMESPACELOT+".selectLotReserveLockingDataList",lotReserveLockingCond);
				//Map<String,Object> lotReserveLockingData = lotReserveLockingDataList.get(0);
				
				if(lotReserveLockingDataList.size() >0)
				{
					for(int j = 0, len = lotReserveLockingDataList.size(); j < len ; j++)
					{
						Map<String,Object> lotReserveLockingData = lotReserveLockingDataList.get(j);
						
						String lockingType;
						if(lotReserveLockingData.get("LOCKINGTYPE") == null)
						{
							lockingType = "";
						}
						else
						{
							lockingType = lotReserveLockingData.get("LOCKINGTYPE").toString();
						}
						
						String lockingCode;
						if(lotReserveLockingData.get("LOCKINGCODE") ==null)
						{
							lockingCode = "";
						}
						else
						{
							lockingCode = lotReserveLockingData.get("LOCKINGCODE").toString();
						}
						
						String comments ;
						
						if(lotReserveLockingData.get("COMMENTS") ==null)
						{
							comments = "";
						}
						else
						{
							comments = lotReserveLockingData.get("COMMENTS").toString();
						}
						
						wipService.saveLotLocking(dto ,lotId, lockingType, lockingCode, comments , userId, langType);
						
					}
				}
			}	
		}
   
    }   
    
    /**
     * @fn ValidationData
     * @brief (Override method) LotData Validate
     * @remark 
     * @see smh.bas.service.PCM07800#ValidationData(com.nbdf.commons.ui.vo.UiMapDto)
     */
	private void ValidationData(Map<String,Object> lotData)
			throws Exception {
		
		String lotId = lotData.get("LOTID").toString();
		String isHold = lotData.get("ISHOLD").toString();
		
		if(isHold.equals("Y"))
		{
			//해당 Lot이 Hold 상태입니다.
			throw new BizException("InHoldState", lotId);
		}
		
		String processState = lotData.get("PROCESSSTATE").toString();
		
		System.out.println("processState ==========================>   : " + processState );
		
		if (!wipService.validateProcessState(lotData, TransitType.ReceiveLot)) {
			String args = "LotStateIsNotAvailableReceive ,LOTID : " + lotId;
			//Lot이 인수 취소 가능 상태가 아닙니다.
			throw new BizException("ValidLotState", args);
		}
		
		if(!wipService.isAreaInAuthority(lotData.get("AREAID").toString(), true))
		{
			//Lot이 인수 취소 가능 상태가 아닙니다.
			throw new BizException("HasNoAuthorityOfArea", String.format("LotId = %s , AreaId = %s", lotData.get("LOTID").toString() , lotData.get("AREAID").toString()));

		}
	}
}