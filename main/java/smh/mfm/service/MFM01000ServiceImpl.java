package smh.mfm.service;

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
import com.nexacro17.xapi.data.DataSet;
import smh.pcm.service.PCMLotCommonService;;

/**
 * @file		: MFM01000ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01000ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.05.21
 * @Author		: 김기수
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 21.  김기수      최초  생성 
 */
@Service
public class MFM01000ServiceImpl extends AbstractNbdfService implements MFM01000Service {

    public static final String NAMESPACE = "smh.mfm.dao.MFM01000Dao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
   // public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO
    @Autowired
    private PCMLotCommonService lotCommonService;
    
    
    @Autowired
    private GeneralDao generalDao;
    
	public void selectDeliveryList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDeliveryList", param));
    }
  	

  	
  	public void saveDeliveryDate(UiMapDto dto) throws Exception {
    	//DataSetMap inputMap = getParametersDataSetMap(dto);
  		DataSetMap paramMapDeliveryList = getParametersDataSetMap(dto, "ds_deliveryList");
		String txnId = "saveDeliveryDate";
        
		Map<String, Object> paramDeliveryList; 
		for (int i = 0; i < paramMapDeliveryList.size(); i++) {
			paramDeliveryList = paramMapDeliveryList.get(i);
			
			
			String lotId = paramDeliveryList.get("LOTID").toString();
			String dueDate = paramDeliveryList.get("DUEDATE").toString();
			// LotId를 기준으로 LotData를 가져옴.
			Map<String, Object> lotData = lotCommonService.ValidateLotInfo(lotId);
			
			// pcm_lot의 dueDate 필드 없데이트
			updateDueDateLot(lotData,dueDate ,txnId);
			
				
			// mfm_productionorder의 dueDate 필드 없데이트
			updateDueDateProductionOrder(lotData, dueDate ,txnId);
			
			
		}
  	}
  	
  	public void updateDueDateLot(Map<String, Object> lotData, String dueDate ,String txnId)
  			throws Exception{
  		
  		lotData.put("DUEDATE" , dueDate);
  		lotData.put("MODIFIER",null);
  		lotData.put("MODIFIEDTIME",null);
  		lotData.put("LASTTXNID", txnId);
  		lotData.put("LASTTXNHISTKEY", null);

  		
  		generalDao.addUpdate(NAMESPACE + ".updateDueDateLot", lotData);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", lotData);	
  	}
  	

  	public void updateDueDateProductionOrder(Map<String, Object> lotData, String dueDate,  String txnId)
  			throws Exception{
  		String productionOrderId = lotData.get("PRODUCTIONORDERID").toString();
  		String lineNo = lotData.get("LINENO").toString();
  		
  		Map<String, Object> paramDueDate = new HashMap<>();
  		paramDueDate.put("PRODUCTIONORDERID", productionOrderId);
  		paramDueDate.put("LINENO", lineNo);
  		paramDueDate.put("DUEDATE", dueDate);
  		paramDueDate.put("LASTTXNID", txnId);
  		paramDueDate.put("LASTTXNHISTKEY", null);
  		
  		generalDao.addUpdate(NAMESPACE + ".updateDueDateProductionOrder", paramDueDate);
  		
  		
  	}
}