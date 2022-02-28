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

import smh.commons.TxnHistKey;
import smh.qam.service.QAM01200ServiceImpl;

/**
* @file: PCM03800ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03800ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.12
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.   박대호     최초  생성
*/
@Service
public class PCM03800ServiceImpl extends AbstractNbdfService implements PCM03800Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM03800Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    @Autowired
    private GeneralDao generalDao;
    @Autowired 
    private PCMWipService wipService;
    @Autowired
    private QAM01200ServiceImpl qam1200Service;
    /**
     * @fn
     * @brief :  LOT Locking 해제 조회
     * @remark 
     * @see smh.pcm.service.PCM03800Service#selectLotLockingList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotLockingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotLockingList", param));
    } 
    /**
     * @fn
     * @brief :  LOT Locking 해제
     * @remark 
     * @see smh.pcm.service.PCM03800Service#setReleaseLocking(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void setReleaseLocking(UiMapDto dto) throws Exception {
    	DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	DataSetMap paramMapUnLocking = getParametersDataSetMap(dto, "ds_unLockingList");
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
    	Map<String, Object> responseRow = new HashMap<String, Object>();
    	int result = 0;
    	
    	Map<String, Object> paramSearch = paramMapSearch.get(0);
    	String releasereason = paramSearch.get("RELEASEREASON").toString();
    	String comments = objectString(paramSearch.get("COMMENTS"));
    	
    	for (int i = 0; i < paramMapUnLocking.size();  i++) {
    		
    		Map<String, Object> paramUnLocking = paramMapUnLocking.get(i);
    		String lotId = paramUnLocking.get("LOTID").toString();
    		String txnhistKey = paramUnLocking.get("TXNHISTKEY").toString();
    		
    		//PCM_LOT에서 LOT조회
    		param.put("LOTID", lotId);
    		Map<String, Object> lotData = wipService.validateLotInfo(lotId);
    		List<Map<String, Object>> lotList = generalDao.addSelect(NAMESAPCE + ".selectLot", param);    		
    		if (lotList == null || lotList.size() == 0) {
    			throw new BizException("NotExistLot", lotId);
    		}
    		String areaId = lotList.get(0).get("AREAID").toString();
    		
    		//PCM_LOTLOCKING에서 LOT조회
    		param.put("TXNHISTKEY", txnhistKey);    		
    		List<Map<String, Object>> lotLockingList = generalDao.addSelect(NAMESAPCE + ".selectLotLocking", param);
    		if (lotLockingList == null || lotLockingList.size() == 0) {
    			throw new BizException("NotExistLot", lotId);
    		}
    		
    		//권한조회
    		boolean authority = false;
    		param.put("ISMODIFY", "Y");    		
    		List<Map<String, Object>> areaList = generalDao.addSelect(NAMESAPCE + ".selectAreaListByAuthority", param);
    		for (int j = 0; j < areaList.size();  j++) {
    			if(areaList.get(j).get("AREAID").toString().equals(areaId)){
    				authority = true;
    			}
    		}
    		if (!authority) {
    			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));
    		}
    		//PCM_LOTLOCKING 업데이트
    		param.put("LOCKINGSTATUS", "N");
    		param.put("UNLOCKINGCODE", releasereason);
    		param.put("COMMENTS", comments);
    		param.put("TXNGROUPHISTKEY", lotLockingList.get(0).get("TXNGROUPHISTKEY"));
    		result += generalDao.update(NAMESAPCE + ".updateLotLocking", param);
    		
    		List<Map<String, Object>> AbnocrTypeList =generalDao.addSelect(NAMESAPCE + ".selectLotAbnocrTypeCheck", param);
			if(AbnocrTypeList.size() > 0) {
				Map<String, Object> AbnocrType = AbnocrTypeList.get(0);
				AbnocrType.put("ISLOCKING", "N");
				qam1200Service.updateLotWorkResult(AbnocrType);//Lotworkresult 업데이트
				
				param.put("ABNOCRTYPE", AbnocrType.get("ABNOCRTYPE"));
				param.put("ISLOCKING", "N");
				generalDao.update(NAMESAPCE + ".updateQamAffectlotBylotid", param);//QAM_AFFECTLOT 업데이트
			}
			
    		//PCM_LOTLOCKING 카운트조회
    		List<Map<String, Object>> lockCount = generalDao.addSelect(NAMESAPCE + ".selectLotLockingCount", param);
    		if(lockCount == null || lockCount.get(0).get("COUNT").toString().equals("0")){
    			param.put("ISLOCKING", "N");
    			param.put("LASTTXNID", "setReleaseLocking");    	
    			lotData.put("LOCKINGSTATUS", "N");
    			lotData.put("UNLOCKINGCODE", releasereason);
    			lotData.put("COMMENTS", comments);
    			lotData.put("TXNGROUPHISTKEY", lotLockingList.get(0).get("TXNGROUPHISTKEY"));
    			lotData.put("ISLOCKING", "N");
    			lotData.put("TXNID", "PCM03800ServiceImpl.setReleaseLocking");    
    			generalDao.update(NAMESAPCE + ".SetReleaseLocking", param);
    			lotData.put("LASTTXNHISTKEY"         , TxnHistKey.getTxnHistKey());  	
    			lotData.put("TXNHISTKEY"             , lotData.get("LASTTXNHISTKEY"));
    			generalDao.addInsert(NAMESAPCECOM + ".insertPcmLotHistory", lotData);
    		}
    	}
    	    	
		responseRow.put("RESULTCNT", result);
		responseDt.add(responseRow);

		putDataSetMap(dto, responseDt);
    } 
    
    public String objectString(Object obj) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		}
		return result;
	}
}