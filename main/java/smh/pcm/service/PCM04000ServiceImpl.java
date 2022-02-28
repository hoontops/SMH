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
* @file: PCM04000ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04000ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 24.   박대호     최초  생성
*/
@Service
public class PCM04000ServiceImpl extends AbstractNbdfService implements PCM04000Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM04000Dao";
	public static final String NAMESAPCE3800 = "smh.pcm.dao.PCM03800Dao";
    @Autowired
    private GeneralDao generalDao;
    @Autowired 
    private PCMWipService wipService;

    /**
     * @fn
     * @brief :  재공현황 조회
     * @remark 
     * @see smh.pcm.service.PCM04000Service#selectLotLockingReserve(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotLockingReserve(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotLockingReserve", param));
    } 
    /**
     * @fn
     * @brief :  예약Locking 해제 저장
     * @remark 
     * @see smh.pcm.service.PCM04000Service#saveLotLockingReserveData(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveLotLockingReserveData(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	DataSetMap paramMapLocking = getParametersDataSetMap(dto, "ds_lockingList");
    	
    	Map<String, Object> paramSearch = paramMapSearch.get(0);
    	String strComments = objectString(paramSearch.get("COMMENTS"));//특이사항
    	for (int i = 0; i < paramMapLocking.size();  i++) {
    		Map<String, Object> paramLocking = paramMapLocking.get(i);
    		String lotId = objectString(paramLocking.get("LOTID"));
    		String txnHistKey = objectString(paramLocking.get("TXNHISTKEY"));
    		
    		Map<String, Object> lotData = wipService.validateLotInfo(lotId);
    		
    		if(lotData == null) {
    			throw new BizException("NotExistLot", lotId);//해당 Lot이 존재하지 않습니다. {0}
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
    		propertyMap.put("TXNHISTKEY", txnHistKey);//TXNHISTKEY
    		
    		//Locking LOT 조회
    		Map<String, Object> unlock = generalDao.addSelect(NAMESAPCE+".selectUnLotLockingList", propertyMap).get(0);
    		if(unlock == null) {
    			throw new BizException("NotExistLot", lotId);//해당 Lot이 존재하지 않습니다. {0}
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
    		param.put("LOTID", lotId);
    		param.put("TXNHISTKEY", txnHistKey);
    		param.put("COMMENTS", strComments);
    		param.put("LOCKINGSTATUS", "Cancled");
    		generalDao.update(NAMESAPCE + ".saveLotLockingReserveData", param);
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