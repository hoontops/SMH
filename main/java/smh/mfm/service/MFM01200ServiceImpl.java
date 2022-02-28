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
 * @file		: MFM01200ServiceImpl.java
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
public class MFM01200ServiceImpl extends AbstractNbdfService implements MFM01200Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM01200Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	public void getLeadTimeCategory(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLeadTimeCategory", param));
    }
	
	public void getLeadTimeList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLeadTimeList", param));
    }
	
	public void selectTackTimeList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTackTimeList", param));
    }
	
	public void getLeadTimeCategoryReg(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getLeadTimeCategoryReg", param));
    }
	
	
	public void saveLeadTime(UiMapDto dto) throws Exception {
    	//DataSetMap inputMap = getParametersDataSetMap(dto);
  		DataSetMap input = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        log("INPUT sz :: "+input.size());
        
        int result = 0;
        for (int i = 0, n = input.size(); i < n; i++) {
        	reqParam = input.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpsertLeadTime(reqParam);
            }
        }
        
        putDataSetMap(dto, result);
    }
	
	private void getUpsertLeadTime(Map<String, Object> row) throws Exception
    {
		Map<String, Object> itemMaster = new HashMap<>();
        //PK 
        itemMaster.put("ITEMID", 			row.get("ITEMID"));
        itemMaster.put("ITEMVERSION", 	row.get("ITEMVERSION"));
        itemMaster.put("ENTERPRISEID", 	row.get("ENTERPRISEID"));
        List<Map<String, Object>> itemMaster2 = generalDao.addSelect(NAMESAPCE + ".selectItemMaster", itemMaster);
    	if(itemMaster2.size()==0){
    		throw new BizException("InValidData003|");
        }
         
    	itemMaster.put("PRODUCTLT", 		row.get("PRODUCTLT"));
    	itemMaster.put("SITELT", 				row.get("SITELT"));
    	
    	generalDao.addUpdate(NAMESAPCE + ".updateLeadTime", itemMaster);
    }
	
	
	
	
	
	public void saveLeadTimePerCategory(UiMapDto dto) throws Exception {
    	//DataSetMap inputMap = getParametersDataSetMap(dto);
  		DataSetMap input = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> reqParam;
        
        log("INPUT sz :: "+input.size());
        
        int result = 0;       
        for (int i = 0, n = input.size(); i < n; i++) {
        	reqParam = input.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpsertLeadTimePerCategory(reqParam);
            }
        }
        
        putDataSetMap(dto, result);
    }	
     
    private void getUpsertLeadTimePerCategory(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> itemMaster = new HashMap<>();
        //PK
    	itemMaster.put("ITEMID", 			row.get("ITEMID"));
        itemMaster.put("ITEMVERSION", 	row.get("ITEMVERSION"));
        itemMaster.put("ENTERPRISEID", 	row.get("ENTERPRISEID"));
        itemMaster.put("PLANTID", 		SessionUtil.getSessionValue("SITETYPE"));        
        
        itemMaster.put("MASTERDATACLASSID", "Model");
    	itemMaster.put("MODELCODE", 	row.get("CATEGORYID"));
    	itemMaster.put("ITEMNAME", 		row.get("CATEGORYID"));
    	itemMaster.put("STATUS", 			"Active");
    	itemMaster.put("DESCRIPTION", 	row.get("CATEGORYID"));
    	itemMaster.put("VALIDSTATE", 	"Valid");
        //itemMaster.put("LEADTIME", 		row.get("PRODUCTLT"));
    	//itemMaster.put("TACTTIME", 		row.get("SITELT"));
    	itemMaster.put("PRODUCTLT", 	row.get("PRODUCTLT"));
    	itemMaster.put("SITELT", 			row.get("SITELT"));
    	itemMaster.put("PRODUCTLT2", 	row.get("PRODUCTLT2"));
    	itemMaster.put("SITELT2", 			row.get("SITELT2"));
        
    	itemMaster.put("ITEMID", 			row.get("CATEGORYID")); //2021-08-12수정함 by phw
        List<Map<String, Object>> itemMaster2 = generalDao.addSelect(NAMESAPCE + ".selectItemMaster2", itemMaster);
        if(itemMaster2.size()==0){
        	itemMaster.put("ITEMVERSION", 	"*");
            itemMaster.put("ENTERPRISEID", 	"INTERFLEX");
        	generalDao.addUpdate(NAMESAPCE + ".insertLeadTimePerCategory", itemMaster);
        }else{        	        	
        	generalDao.addUpdate(NAMESAPCE + ".updateLeadTimePerCategory0", itemMaster); //MASTERDATACLASSID='Model' 라인 갱신
        }
        
        generalDao.addUpdate(NAMESAPCE + ".updateLeadTimePerCategory", itemMaster); //양산
    	generalDao.addUpdate(NAMESAPCE + ".updateLeadTimePerCategory2", itemMaster); //샘플
    	
    }
 

  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}