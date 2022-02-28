package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;


/**
* @file: PCM06400ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06400ServiceImpl
* @Company: Built1
* @Create Date: 2021.6.07
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 6. 07.   박대호     최초  생성
*/
@Service
public class PCM06400ServiceImpl extends AbstractNbdfService implements PCM06400Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06400Dao";
	public static final String NAMESPACE1   = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  승인자 팝업
     * @remark 
     * @see smh.pcm.service.PCM06400Service#selectUserList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserList", param));
    } 
    /**
     * @fn
     * @brief :  재작업이력 조회
     * @remark 
     * @see smh.pcm.service.PCM06400Service#selectReworkHistory(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectReworkHistory(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReworkHistory", param));
    } 
    /**
     * @fn
     * @brief :  재작업 이력 팝업
     * @remark 
     * @see smh.pcm.service.PCM06400Service#selectCommentByProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCommentByProcess(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCommentByProcess", param));
    } 
    /**
     * @fn
     * @brief :  재작업 승인
     * @remark 
     * @see smh.pcm.service.PCM06400Service#saveReworkHistory(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveReworkHistory(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        

        String userId = SessionUtil.getUserId();
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	String sToday      =  this.getToDate();
    	//현재시간
    	Date now           = dateFormat.parse(sToday);
    	
    	DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	DataSetMap paramMapList = getParametersDataSetMap(dto, "ds_list");
    	
    	Map<String, Object> paramSearch = paramMapSearch.get(0);
    	boolean isCancel = paramSearch.get("ISCANCEL").toString().equals("Y");
    	
		for(int i = 0; i< paramMapList.size(); i++) {
			Map<String, Object> row = paramMapList.get(i);
			String lotId = objectString(row.get("LOTID"));
			param.put("LOTID", lotId);
			List<Map<String, Object>> dataList = generalDao.addSelect(NAMESAPCE + ".selectPcmReworkReturnInfo", param);
			
			if(dataList.size() < 1) {
				// 재작업 이력을 찾을 수 없습니다. {0}
				throw new BizException("ReworkHistoryNotFound", String.format("LotId = %s", lotId));
			}
			Map<String, Object> data = dataList.get(0);
			if(isCancel) {
				if(data.get("APPLOVEDDATE") == null) {
					// 승인되지 않은 재작업은 취소할 수 없습니다. {0}
					throw new BizException("ReworkHistoryAlreadyCanceled", String.format("LotId = %s", lotId));
				}
				data.put("APPLOVEDUSER", null);
				data.put("APPLOVEDDATE", null);
			}
			else {
				if(data.get("APPLOVEDDATE") != null) {
					// 이미 승인된 재작업 입니다. {0}
					throw new BizException("ReworkHistoryAlreadyApproved", String.format("LotId = %s", lotId));
				}
				data.put("APPLOVEDUSER", userId);
				data.put("APPLOVEDDATE", now);
			}
			data.put("LASTTXNHISTKEY" 		, TxnHistKey.getTxnHistKey());
			data.put("TXNHISTKEY"     			, data.get("LASTTXNHISTKEY"));
			
			generalDao.addUpdate(NAMESAPCE + ".updatePcmReworkreturn", data);
			generalDao.addInsert(NAMESAPCE + ".insertPcmReworkreturnhistory", data);
			
		}
        
    } 
    private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return systemDate.get(0).get("TODATE").toString();
  	}
    public String objectString(Object obj) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		}
		return result;
	}
}