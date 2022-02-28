package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
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
import smh.pcm.service.PCMConstant.LotProcessState;



/**
* @file: PCM05800ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05800ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.31
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 31.   박대호     최초  생성
*/
@Service
public class PCM05800ServiceImpl extends AbstractNbdfService implements PCM05800Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05800Dao";
	public static final String NAMESPACE1   = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief :  재공현황 조회
     * @remark 
     * @see smh.pcm.service.PCM05800Service#selectWipListOfPhysicalCount(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWipListOfPhysicalCount(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWipListOfPhysicalCount", param), "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectIsWipSurvey", param), "output2");
        
    } 
    /**
     * @fn
     * @brief :  해당 site를 locking 또는 unlocking
     * @remark 
     * @see smh.pcm.service.PCM05800Service#saveWipSurveyLocking(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveWipSurveyLocking(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
    	DataSetMap paramMapLocking = getParametersDataSetMap(dto, "ds_lockingList");
    	Map<String, Object> paramSearch = paramMapSearch.get(0);
    	String lockingType = objectString(paramSearch.get("LOCKINGTYPE"));
    	String plantId = objectString(paramSearch.get("PLANTID"));
    	
    	Map<String, Object> pData = generalDao.addSelect(NAMESAPCE + ".selectBasPlantList", param).get(0);
		
		
		if(pData == null) {
			throw new BizException("InValidData001", String.format("PlantId = %s", plantId));
		}
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    	String sToday      =  this.getToDate();
    	//현재시간
    	Date now           = dateFormat.parse(sToday);
		
		SimpleDateFormat formatMonth = new SimpleDateFormat("yyyy-MM");
		String surveyMonth = formatMonth.format(now);
		
		String userId = SessionUtil.getUserId();
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		String txnHistkey = TxnHistKey.getTxnHistKey();
		String txnId = this.getClass().getSimpleName();
		
		switch (lockingType)
		{
			case "Start":
				param.put("P_PLANTID", plantId);
				param.put("P_SURVEYMONTH", surveyMonth);
				param.put("P_USERID", userId);
				param.put("P_DATETIME", now);
				param.put("P_TXNGROUPHISTKEY", txnGroupHistKey);
				param.put("P_TXNID", txnId);
				generalDao.addSelect(NAMESAPCE + ".insertWipSurvey", param);
				
				pData.put("LASTTXNHISTKEY", txnHistkey);
				pData.put("ISWIPSURVEY", "Y");
				pData.put("LASTTXNID", this.getClass().getSimpleName());
				pData.put("MODIFIER", userId);
				generalDao.addUpdate(NAMESAPCE + ".updateBasPlant", pData);
				pData.put("TXNID", this.getClass().getSimpleName());
				pData.put("TXNHISTKEY", txnHistkey);
				generalDao.addUpdate(NAMESAPCE + ".insertBasPlantHistory", pData);
				
				break;
			case "Stop":
				pData.put("LASTTXNHISTKEY", txnHistkey);
				pData.put("ISWIPSURVEY", "N");
				pData.put("LASTTXNID", this.getClass().getSimpleName());
				pData.put("MODIFIER", userId);
				generalDao.addUpdate(NAMESAPCE + ".updateBasPlant", pData);
				pData.put("TXNID", this.getClass().getSimpleName());
				pData.put("TXNHISTKEY", txnHistkey);
				generalDao.addUpdate(NAMESAPCE + ".insertBasPlantHistory", pData);
				break;
			case "Save"://사용하지 않는 기능
//				IDataTable surveyList = ds.getTable("surveyList");
//				IDataRow row = null;
//				
//				for (int i = 0, len = surveyList.size(); i < len; i++)
//				{
//					row = surveyList.getRow(i);
//					
//					WipsurveyData wsd = new WipsurveyData();
//					WipsurveyKey wsk = wsd.key();
//					wsk.setLotid(row.getString("LOTID"));
//					wsk.setSurveymonth(surveyMonth);
//					
//					wsd = wsd.selectOne();
//					
//					if (wsd == null)
//					{
//						throw new MESException("NotExistSurveyData", String.format("Survey Month : %s, Lot Id : %s", surveyMonth, row.getString("LOTID")));
//					}
//					
//					wsd.setWipsurveyconfirm("Y");
//					wsd.setSurveyqty(row.getDouble("REALWIPPCSQTY"));
//					wsd.setLossqty(row.getDouble("REALWIPLOSSPCSQTY"));
//					wsd.setEtcqty(row.getDouble("REALWIPETCPCSQTY"));
//					wsd.setSurveycomment(row.getString("REASONCOMMENT"));
//					
//					wsd.update();
//				}
				break;
		}
    } 
    public String objectString(Object obj) {
		String result = "";
		if(obj != null) {
			result = obj.toString();
		}
		return result;
	}
    private String getToDate()
  	{	
  		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1+".selectCurrentSystemTime","");
  		
  		return systemDate.get(0).get("TODATE").toString();
  	}
    
}