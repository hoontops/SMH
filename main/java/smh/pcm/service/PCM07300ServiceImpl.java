package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.pcm.service.PCMConstant.TransitType;

@Service
public class PCM07300ServiceImpl extends AbstractNbdfService implements PCM07300Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM07300Dao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESAPCE6900 				= "smh.pcm.dao.PCM06900Dao";
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectWIPMultiStateList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectWIPMultiStateList
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07300Service#selectWIPMultiStateList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectWIPMultiStateList(UiMapDto dto) throws Exception{
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPMultiStateList", param));        
    }
    

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07300Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramArgs = dto.getInVariableMap();        
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId) && sqlId != null){
        	//Arguments를 Param에 추가
        	for (Map.Entry<String, Object> entry : paramArgs.entrySet()) {        	    
        	    param.put(entry.getKey(), entry.getValue());
        	}
        	
        	//추가 배열파라미터가 존재하면 배열형태로 param에 바인딩
        	String addParam = (String)param.get("ADD_PARAM");
        	if(!"".equals(addParam) && addParam != null){
        		param.put("ADD_LIST", addParam.split("\\|"));
        	}
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
    * @fn 			: saveMultiLotAccept
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveMultiLotAccept
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07300Service#saveMultiLotAccept(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveMultiLotAccept(UiMapDto dto) throws Exception {
    	DataSetMap 						dsLotList				= getParametersDataSetMap(dto, "INPUT1");
    	String 							userId					= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_ID);
        String 							enterpriseId			= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_ENTERPRISEID);
        String 							plantId				= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_SITETYPE);
        String 							languageType		= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE);
		
	   	 for (int i = 0, n = dsLotList.size(); i < n; i++) {
	         Map<String, Object> lotData = dsLotList.get(i);
	         String lotId 			= 				lotData.get("LOTID").toString();
	         lotData.put("ENTERPRISEID", 		enterpriseId);
	         lotData.put("PLANTID", 			plantId);
	         lotData.put("LANGUAGETYPE", 	languageType);
	         
	         Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESAPCE6900 + ".selectLotData", lotData);
	         String 							areaId					= (String)lotMap.get("AREAID");
	 		 String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
	 		 String 							isHold 				= (String)lotMap.get("ISHOLD");		//보류여부
	 		 SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
	   	 	 Date 								nowDate         			= dateFormat.parse(sToday);//현재시간
	   	 	 
	   	 	// 보류 여부 체크
	  		if ("Y".equals(isHold)){	
	  			throw new BizException("LotIsHold", String.format("LotId = %s", lotId)); // 보류 상태의 Lot 입니다.
	  		}
	  		
	  		// 인수 가능 상태 확인
	  		if (!wipService.validateProcessState(lotMap, TransitType.ReceiveLot)){
	  			throw new BizException("LotStateIsNotAvailableReceive", String.format("LotId = %s", lotId)); // Lot이 인수 가능 상태가 아닙니다. {0}
	  		}
	  		
	  		// 사용자별 작업장 통제
	 		if(!wipService.isAreaInAuthority(areaId, true)) {			
	 			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
	 		}
	   	 	 
	 		lotMap = wipService.receiveLot(dto, lotMap, userId, nowDate);

			// Insert Lot Work Result
			wipService.saveLotWorkResult(dto, lotMap, TransitType.ReceiveLot, userId, nowDate, "", "");

			// 예약 Locking 체크
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotMap);
			
			String processDefId 		= (String)processDefInfo.get("PROCESSDEFID");
//			String processDefVersion 	= (String)processDefInfo.get("PROCESSDEFVERSION");
			
			// Check Lot Reserve Locking
			Map<String, Object> checkParam = new HashMap<>();
			checkParam.put("LOTID", 						lotId);
			checkParam.put("ENTERPRISEID", 			enterpriseId);
			checkParam.put("PLANTID", 					plantId);
			checkParam.put("PROCESSDEFID", 			processDefId);
			checkParam.put("PROCESSSEGMENTID", 	lotMap.get("PROCESSSEGMENTID"));
			checkParam.put("LOCKINGSTATUS", 			"Created");
			
			List<Map<String, Object>> 	listLotReserveLocking 			= new java.util.ArrayList<Map<String, Object>>();
			listLotReserveLocking = generalDao.addSelect(NAMESAPCE + ".selectLotReverseLocking", checkParam);
			
			if (listLotReserveLocking.size() > 0)
			{
				for (int k = 0, len = listLotReserveLocking.size(); k < len; k++)
				{	
					Map<String, Object> reverseData = listLotReserveLocking.get(k);
					
					String lockingType 	= (String)reverseData.get("LOCKINGTYPE");
					String lockingCode 	= (String)reverseData.get("LOCKINGCODE");
					String comments 	= (String)reverseData.get("COMMENTS");
					
					
					wipService.saveLotLocking(dto, lotId, lockingType, lockingCode, comments, userId, languageType);
				}
			}
	   	 }	 
    }   
}