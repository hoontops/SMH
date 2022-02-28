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

/**
 * @file		: MFM00900ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00800ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
@Service
public class MFM01100ServiceImpl extends AbstractNbdfService implements MFM01100Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM01100Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	public void selectTackTimeList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTackTimeList", param));
    }
  	
  	public void selectTactimeApplySTD(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTactimeApplySTD", param));
    }
  	
  	public void saveTackTime(UiMapDto dto) throws Exception {
    	//DataSetMap inputMap = getParametersDataSetMap(dto);
  		DataSetMap input = getParametersDataSetMap(dto, "INPUT");
  		DataSetMap input2 = getParametersDataSetMap(dto, "INPUT2");
        Map<String, Object> reqParam;
        
        log("INPUT sz :: "+input.size());
        log("INPUT2 sz :: "+input2.size());
        
        int result = 0;
        for (int i = 0, n = input.size(); i < n; i++) {
        	reqParam = input.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpsertTackTime(reqParam);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	getDeleteTackTime(reqParam);
            }
        }
        
        result = 0;
        for (int i = 0, n = input2.size(); i < n; i++) {
        	reqParam = input2.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	updateApplicationTacktime(reqParam);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }
  	
  	/************************************************************************************************
	 * INSERT or MODIFY CT_TACKTIMEMANAGE 
	 ************************************************************************************************/
	private void getUpsertTackTime(Map<String, Object> row) throws Exception
	{		
		Map<String, Object> tacktimemanage = new HashMap<>();
		tacktimemanage.put("PRODUCTDEFID", 					row.get("PRODUCTDEFID"));
		tacktimemanage.put("PRODUCTDEFVERSION", 			row.get("PRODUCTDEFVERSION"));
		tacktimemanage.put("PROCESSSEGMENTID", 			row.get("PROCESSSEGMENTID"));
		tacktimemanage.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
		
		tacktimemanage.put("ENTERPRISEID",					SessionUtil.getSessionValue("ENTERPRISEID"));
		tacktimemanage.put("PLANTID", 							SessionUtil.getSessionValue("SITETYPE"));
		
		tacktimemanage.put("PROCESSDEFID", 					row.get("PROCESSDEFID"));
		tacktimemanage.put("PROCESSDEFVERSION", 			row.get("PROCESSDEFVERSION"));
		tacktimemanage.put("USERSEQUENCE", 					row.get("USERSEQUENCE"));
		
		tacktimemanage.put("THEORYTACKTIME", 				row.get("THEORYTACKTIME")); //이론값
		tacktimemanage.put("TARGETTACKTIME", 				row.get("TARGETTACKTIME")); //목표값
		tacktimemanage.put("STDLEADTIME", 					row.get("STDLEADTIME")); //표준LeadTime
		//tacktimemanage.put("APPLICATIONTACKTIME", 		row.get("APPLICATIONTACKTIME")); //적용값
		
		tacktimemanage.put("DESCRIPTION", 					row.get("DESCRIPTION"));
		tacktimemanage.put("VALIDSTATE", 						row.get("VALIDSTATE"));
		
		List<Map<String, Object>> tacktimemanage2 = generalDao.addSelect(NAMESAPCE + ".selectTacktimemanage", tacktimemanage);
    	if(tacktimemanage2.size()==0){
    		generalDao.addUpdate(NAMESAPCE + ".insertDispatchingItem", tacktimemanage);
        }else{
        	generalDao.addUpdate(NAMESAPCE + ".updateDispatchingItem", tacktimemanage);
        }
	}

	/************************************************************************************************
	 * DELETE CT_TACKTIMEMANAGE 
	 ************************************************************************************************/
	private void getDeleteTackTime(Map<String, Object> row) throws Exception
	{
		Map<String, Object> tacktimemanage = new HashMap<>();
		tacktimemanage.put("PRODUCTDEFID", 					row.get("PRODUCTDEFID"));
		tacktimemanage.put("PRODUCTDEFVERSION", 			row.get("PRODUCTDEFVERSION"));
		tacktimemanage.put("PROCESSSEGMENTID", 			row.get("PROCESSSEGMENTID"));
		tacktimemanage.put("PROCESSSEGMENTVERSION", 	row.get("PROCESSSEGMENTVERSION"));
		
		List<Map<String, Object>> dispatchingItemData2 = generalDao.addSelect(NAMESAPCE + ".selectTacktimemanage", tacktimemanage);
    	if(dispatchingItemData2.size()==0){
    		throw new BizException("InValidData003|"+String.format("ProductDefId = %s, ProcesssegmentId = %s", row.get("PRODUCTDEFID"), row.get("PROCESSSEGMENTID")));
        }
		
    	generalDao.addUpdate(NAMESAPCE + ".deleteTacktimemanage", tacktimemanage);
	}
	
	/************************************************************************************************
	 * UPDATE : 오른쪽 Grid 
	 ************************************************************************************************/
	private void updateApplicationTacktime(Map<String, Object> row) throws Exception
	{
		Map<String, Object> productDef = new HashMap<>();
		productDef.put("PRODUCTDEFID", 					row.get("PRODUCTDEFID"));
		productDef.put("PRODUCTDEFVERSION", 			row.get("PRODUCTDEFVERSION"));
		productDef.put("APPLICATIONTACKTIME",		row.get("APPLICATIONTACKTIME"));
		productDef.put("VALIDSTATE",					row.get("VALIDSTATE"));
		
    	generalDao.addUpdate(NAMESAPCE + ".updateApplicationTacktime", productDef);    	
    	
    	//generalDao.addUpdate(NAMESAPCE + ".updateApplicationTacktimeUpsert", productDef); //임시작업용
	}

  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}