package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;


/**
* @file: PCM05700ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05700ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.12
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 12.   박대호     최초  생성
*/
@Service
public class PCM05700ServiceImpl extends AbstractNbdfService implements PCM05700Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05700Dao";
	public static final String NAMESPACE1   = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
	
    @Autowired
    private GeneralDao generalDao;
    @Autowired 
    private PCMWipService wipService;

    /**
     * @fn
     * @brief :  체공Lot 탭 조회  
     * @remark 
     * @see smh.pcm.service.PCM05700Service#selectDelayLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDelayLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDelayLotList", param));
    } 
    /**
     * @fn
     * @brief :  체공이력 탭 조회  
     * @remark 
     * @see smh.pcm.service.PCM05700Service#selectDelayList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDelayList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDelayList", param));
    } 
    /**
     * @fn
     * @brief :  체공사유 조회  
     * @remark 
     * @see smh.pcm.service.PCM05700Service#selectReasonCodeByProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectReasonCodeByProcess(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReasonCodeByProcess", param));
    } 
    /**
     * @fn
     * @brief :  체공사유 저장  
     * @remark 
     * @see smh.pcm.service.PCM05700Service#saveAbnormalOccurenceByDelayLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveAbnormalOccurenceByDelayLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
//        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".saveAbnormalOccurenceByDelayLot", param));
    	DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	
    	Map<String, Object> paramSearch = paramMapSearch.get(0);    	
    	String lotId = objectString(paramSearch.get("LOTID"), "String");
		String delayCode = objectString(paramSearch.get("DELAYCODE"), "String");
		String checkTime = objectString(paramSearch.get("CHECKTIME"), "String");
		String delayComment = objectString(paramSearch.get("DELAYCOMMENT"), "String");
		
		
    	 
		Map<String, Object> lot = wipService.validateLotInfo(lotId);
		
		param.put("LOTID", lotId);
		param.put("PROCESSDEFID", lot.get("PROCESSDEFID"));
		param.put("PROCESSDEFVERSION", lot.get("PROCESSDEFVERSION"));
		param.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", lot.get("PROCESSSEGMENTVERSION"));
		param.put("PROCESSSTATE", lot.get("PROCESSSTATE"));
		param.put("PRODUCTDEFID", lot.get("PRODUCTDEFID"));
		param.put("PRODUCTDEFVERSION", lot.get("PRODUCTDEFVERSION"));
		param.put("WORKCOUNT", lot.get("WORKCOUNT"));
		
		List<Map<String, Object>> delayLotList = generalDao.addSelect(NAMESAPCE + ".selectInputWaitingCodeDelayLot", param);
		Map<String, Object> delay = null;
		if(delayLotList.size() > 0) {
			delay = delayLotList.get(0);
		}
		
		
		Map<String, Object> stayParam = getParametersMap(dto);
		stayParam.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID"));
		stayParam.put("PROCESSSEGMENTVERSION", lot.get("PROCESSSEGMENTVERSION"));
		
		List<Map<String, Object>> segmentStayingTimeList = generalDao.addSelect(NAMESAPCE + ".selectInputWaitingCodeSegmentStayingTime", stayParam);
		Map<String, Object> stay = null;
		if(segmentStayingTimeList.size() > 0) {
			stay = segmentStayingTimeList.get(0);
		}
		
		Double stdDelayTime = null;
		
		if(lot.get("PROCESSSTATE").equals(LotProcessState.WaitForReceive))
		{
			stdDelayTime = Double.parseDouble(objectString(stay.get("RECEIVESTAYINGTIME"), "Double"));
		}
		else if(lot.get("PROCESSSTATE").equals(LotProcessState.Wait))
		{
			stdDelayTime = Double.parseDouble(objectString(stay.get("TRACKINSTAYINGTIME"), "Double"));
		}
		else if(lot.get("PROCESSSTATE").equals(LotProcessState.Run))
		{
			stdDelayTime = Double.parseDouble(objectString(stay.get("TRACKOUTSTAYINGTIME"), "Double"));
		}
		else if(lot.get("PROCESSSTATE").equals(LotProcessState.WaitForSend))
		{
			stdDelayTime = Double.parseDouble(objectString(stay.get("SENDSTAYINGTIME"), "Double"));
		}
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	String sToday      =  this.getToDate();
    	//현재시간
    	Date nowDate           = dateFormat.parse(sToday);
    	 
		SimpleDateFormat tr = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date dtCheckTime = tr.parse(checkTime);
		
		Double Gap =(double)((nowDate.getTime() - dtCheckTime.getTime())/1000);
		
		
		if(delay == null)
		{			
			param.put("LOTID", lot.get("LOTID"));
			param.put("PROCESSDEFID", lot.get("PROCESSDEFID"));
			param.put("PROCESSDEFVERSION", lot.get("PROCESSDEFVERSION"));
			param.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lot.get("PROCESSSEGMENTVERSION"));
			param.put("PROCESSSTATE", lot.get("PROCESSSTATE"));
			param.put("PRODUCTDEFID", lot.get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lot.get("PRODUCTDEFVERSION"));
			param.put("WORKCOUNT", lot.get("WORKCOUNT"));
			
			param.put("ENTERPRISEID", lot.get("ENTERPRISEID"));
			param.put("PLANTID", lot.get("PLANTID"));
			param.put("AREAID", lot.get("AREAID"));
			param.put("STDDELAYTIME", stdDelayTime);
			param.put("DELAYTIME", Gap);
			param.put("CHECKSTARTTIME", dtCheckTime);
			param.put("CHECKENDTIME", nowDate);
			param.put("DELAYREASONCODE", delayCode);
			param.put("DELAYCOMMENT", delayComment);
			param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			
			generalDao.addInsert(NAMESAPCE + ".insertAbnormalOccurenceByDelayLot", param);

		}
		else
		{
			param.put("ENTERPRISEID", lot.get("ENTERPRISEID"));
			param.put("PLANTID", lot.get("PLANTID"));
			param.put("AREAID", lot.get("AREAID"));
			param.put("STDDELAYTIME", stdDelayTime);
			param.put("DELAYTIME", Gap);
			param.put("CHECKSTARTTIME", dtCheckTime);
			param.put("CHECKENDTIME", nowDate);
			param.put("DELAYREASONCODE", delayCode);
			param.put("DELAYCOMMENT", delayComment);
			param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
			
			generalDao.addUpdate(NAMESAPCE + ".updateAbnormalOccurenceByDelayLot", param);
			
		}
    }
    //Object to String
    public String objectString(Object obj, String value) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		} else {
			if(value.equals("String")) {
				result = "";
			} else if(value.equals("Double")) {
				result = "0";
			}
		}
		return result;
	}
    private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return systemDate.get(0).get("TODATE").toString();
  	}
}