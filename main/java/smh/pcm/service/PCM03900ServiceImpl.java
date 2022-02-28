package smh.pcm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.pcm.service.PCMConstant.LotState;


/**
* @file: PCM03900ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03900ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.21
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 21.   박대호     최초  생성
*/
@Service
public class PCM03900ServiceImpl extends AbstractNbdfService implements PCM03900Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM03900Dao";
	public static final String NAMESAPCE3800 = "smh.pcm.dao.PCM03800Dao";
    @Autowired
    private GeneralDao generalDao;
    @Autowired 
    private PCMWipService wipService;

    /**
     * @fn
     * @brief :  재공현황 조회
     * @remark 
     * @see smh.pcm.service.PCM03900Service#selectWIPList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWIPList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPList", param));
    } 
    
    /**
     * @fn
     * @brief :  대상공정 콤보 조회
     * @remark 
     * @see smh.pcm.service.PCM03900Service#selectProcessPathByProductDefAndSequence(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessPathByProductDefAndSequence(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessPathByProductDefAndSequence", param));
    } 
    
    /**
     * @fn
     * @brief :  대상공정 콤보 조회 4 Lot Routing
     * @remark 
     * @see smh.pcm.service.PCM03900Service#selectProcessPathByProductDef4Lot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessPathByProductDef4Lot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessPathByProductDef4Lot", param));
    } 
    
    
    /**
     * @fn
     * @brief :  Step 콤보 조회
     * @remark 
     * @see smh.pcm.service.PCM03900Service#selectStepCboList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectStepCboList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectStepCboList", param));
    } 
    
    /**
     * @fn
     * @brief :  사유 콤보 조회
     * @remark 
     * @see smh.pcm.service.PCM03900Service#selectReasonCodeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectReasonCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReasonCodeList", param));
    } 
    
    /**
     * @fn
     * @brief :  예약Locking 저장
     * @remark 
     * @see smh.pcm.service.PCM03900Service#saveLotLocking(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveLotLocking(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	DataSetMap paramMapLocking = getParametersDataSetMap(dto, "ds_lockingList");
    	
    	Map<String, Object> paramSearch = paramMapSearch.get(0);
		String strSegment = objectString(paramSearch.get("PROCESSSEGMENTID"));//대상공정
		String strStep = objectString(paramSearch.get("STEP"));//STEP
		String strLockClass = objectString(paramSearch.get("REASONCODECLASSID"));//분류 
		String strLockReason = objectString(paramSearch.get("REASONCODEID"));//사유
		String strComments = objectString(paramSearch.get("COMMENTS"));//특이사항
		
    	
		for (int i = 0; i < paramMapLocking.size();  i++) {
			Map<String, Object> paramLocking = paramMapLocking.get(i);
    		String lotId = objectString(paramLocking.get("LOTID"));
    		
    		Map<String, Object> lotData = wipService.validateLotInfo(lotId);
    		
    		if(lotData == null) {
    			throw new BizException("NotExistLot", lotId);
    		}
    		
    		// Check 재공상태
    		if(!objectString(lotData.get("LOTSTATE")).equals(LotState.InProduction)) //
    		{
    			if(!objectString(lotData.get("LOTSTATE")).equals(LotState.InTransit))
    			{
    				// Lot 상태를 확인하여 주십시오 {0}
    				throw new BizException("CheckLotState", lotId);
    			}
    		}
    		// Check Hold
    		if(objectString(lotData.get("ISHOLD")).equals("Y"))
    		{
    			// 해당 Lot이 Hold 상태입니다. {0}
    			throw new BizException("InHoldState", lotId);
    		}
    		Map<String, Object> propertyMap = new HashMap<>();	
    		propertyMap.put("LOTID", lotId);//LOTID
    		propertyMap.put("PROCESSSEGMENTID", strSegment);//대상공정
    		propertyMap.put("LOCKING_PROCESSSTATE", strStep);//STEP
    		propertyMap.put("LOCKINGTYPE", strLockClass);//분류
    		propertyMap.put("LOCKINGCODE", strLockReason);//사유
    		//Locking LOT 조회
    		List<Map<String, Object>> lockCount = generalDao.addSelect(NAMESAPCE+".selectLotLockingReserveCount", propertyMap);
    		
    		if(lockCount != null && lockCount.get(0).get("COUNT").toString().equals("1"))
    		{
    			// 이미 같은 사유로 등록된 정보가 있습니다.
    			throw new BizException("ExistsReasonData");
    		}
    		
    		// 사용자별 작업장 통제
    		boolean authority = false;
    		param.put("ISMODIFY", "Y"); 
    		param.put("LOTID", lotId);
    		List<Map<String, Object>> areaList = generalDao.addSelect(NAMESAPCE3800 + ".selectAreaListByAuthority", param);
    		for (int j = 0; j < areaList.size();  j++) {
    			if(areaList.get(j).get("AREAID").toString().equals(objectString(lotData.get("AREAID")))){
    				authority = true;
    			}
    		}
    		if (!authority) {
    			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, objectString(lotData.get("AREAID"))));
    		}
    		
    		// Lot Locking 데이터 입력    		
    		param.put("LOTID", lotId);
    		param.put("ENTERPRISEID", objectString(lotData.get("ENTERPRISEID")));
    		param.put("PLANTID", objectString(lotData.get("PLANTID")));
    		param.put("PROCESSDEFID", objectString(lotData.get("PROCESSDEFID")));
    		param.put("PROCESSDEFVERSION", objectString(lotData.get("PROCESSDEFVERSION")));
    		param.put("PROCESSSEGMENTVERSION", objectString(lotData.get("PROCESSSEGMENTVERSION")));
    		param.put("PROCESSSEGMENTID", strSegment);
    		param.put("LOCKING_PROCESSSTATE", strStep);
    		param.put("LOCKINGTYPE", strLockClass);
    		param.put("LOCKINGCODE", strLockReason);
    		param.put("COMMENTS", strComments);
    		param.put("LOCKINGSTATUS", "Created");
    		
    		generalDao.addInsert(NAMESAPCE + ".saveLotLocking", param);	
    		
		}		
    } 
    
    public String objectString(Object obj) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		}
		return result;
	}
}