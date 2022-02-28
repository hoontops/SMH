package smh.mfm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
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
public class MFM00900ServiceImpl extends AbstractNbdfService implements MFM00900Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00900Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	public void selectDispatchingItemList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemList", param));
    }
  	
  	public void selectPriorityOfDispatchingItemList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPriorityOfDispatchingItemList", param));
    }
  	
  	public void selectLotListSetDispatchingItemSimulation(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotListSetDispatchingItemSimulation", param));
    }
  	
  	public void saveDispatching(UiMapDto dto) throws Exception {
    	//DataSetMap inputMap = getParametersDataSetMap(dto);
  		DataSetMap input = getParametersDataSetMap(dto, "INPUT");
  		//DataSetMap input2 = getParametersDataSetMap(dto, "INPUT2");
        Map<String, Object> reqParam;
        
        log("INPUT sz :: "+input.size());
        //log("INPUT2 sz :: "+input2.size());
        
        //왼쪽 그리드 저장
        int result = 0;
        for (int i = 0, n = input.size(); i < n; i++) {
        	reqParam = input.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	getInsertDispatchingItemData(reqParam);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateDispatchingItemData(reqParam);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	getDeleteDispatchingItemData(reqParam);
            }
        }
        
        //오른쪽 그리드 저장
        /*
        result = 0;
        for (int i = 0, n = input2.size(); i < n; i++) {
        	reqParam = input2.get(i);
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	getInsertDispatchingItemPriorityData(reqParam);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateDispatchingItemPriorityData(reqParam);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	getDeleteDispatchingItemPriorityData(reqParam);
            }
        }
        */
        
        putDataSetMap(dto, result);
    }
  	
  	
  	
  	
  	
  	/************************************************************************************************
     * Insert CT_DISPATCHINGITEM
     ************************************************************************************************/
    private void getInsertDispatchingItemData(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> dispatchingItemData = new HashMap<>();
    	dispatchingItemData.put("DISPATCHINGITEM", row.get("DISPATCHINGITEM"));
        
    	List<Map<String, Object>> dispatchingItemData2 = generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemData", dispatchingItemData);
    	if(dispatchingItemData2.size()>0){
    		throw new BizException("InValidData002|"+String.format("Dispatching Item = %s", row.get("DISPATCHINGITEM")));
        }
         
    	dispatchingItemData.put("PRIOTY", 				NumberUtil.toInt((String)row.get("PRIOTY")));
    	dispatchingItemData.put("ENTERPRISEID", 		row.get("ENTERPRISEID"));
    	dispatchingItemData.put("PLANTID", 				row.get("PLANTID"));
    	dispatchingItemData.put("DESCRIPTION", 		row.get("DESCRIPTION"));
    	dispatchingItemData.put("VALIDSTATE", 		row.get("VALIDSTATE"));
    	generalDao.addUpdate(NAMESAPCE + ".insertDispatchingItemData", dispatchingItemData);
    	//generalDao.addUpdate(NAMESAPCE + ".insertDispatchingItemData2", dispatchingItemData); //RIGHT ALL DELETE
    }
     
    /************************************************************************************************
     * Update CT_DISPATCHINGITEM
     ************************************************************************************************/
    private void getUpdateDispatchingItemData(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> dispatchingItemData = new HashMap<>();
    	dispatchingItemData.put("DISPATCHINGITEM", row.get("DISPATCHINGITEM"));
        
    	List<Map<String, Object>> dispatchingItemData2 = generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemData", dispatchingItemData);
    	if(dispatchingItemData2.size()==0){
    		throw new BizException("InValidData002|"+String.format("Dispatching Item = %s", row.get("DISPATCHINGITEM")));
        }
         
    	dispatchingItemData.put("PRIOTY", 				NumberUtil.toInt((String)row.get("PRIOTY")));
    	dispatchingItemData.put("ENTERPRISEID", 		row.get("ENTERPRISEID"));
    	dispatchingItemData.put("PLANTID", 				row.get("PLANTID"));
    	dispatchingItemData.put("DESCRIPTION", 		row.get("DESCRIPTION"));
    	dispatchingItemData.put("VALIDSTATE", 		row.get("VALIDSTATE"));
    	generalDao.addUpdate(NAMESAPCE + ".updateDispatchingItemData", dispatchingItemData);
    }
     
    /************************************************************************************************
     * Delete CT_DISPATCHINGITEM
     ************************************************************************************************/
    private void getDeleteDispatchingItemData(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> dispatchingItemData = new HashMap<>();
    	dispatchingItemData.put("DISPATCHINGITEM", row.get("DISPATCHINGITEM"));
         
    	List<Map<String, Object>> dispatchingItemData2 = generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemData", dispatchingItemData);
    	if(dispatchingItemData2.size()==0){
    		throw new BizException("InValidData002|"+String.format("Dispatching Item = %s", row.get("DISPATCHINGITEM")));
        }
         
    	generalDao.addUpdate(NAMESAPCE + ".deleteDispatchingItemData", dispatchingItemData);
    }
    
    
    
    
    
    
    /************************************************************************************************
     * Insert CT_DISPATCHINGITEMPRIOTY
     ************************************************************************************************/
    /*
    private void getInsertDispatchingItemPriorityData(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> dispatchingItemPriority = new HashMap<>();
        dispatchingItemPriority.put("DISPATCHINGITEM", 	row.get("DISPATCHINGITEM"));
        dispatchingItemPriority.put("ITEMPRIOTY", 			NumberUtil.toInt((String)row.get("ITEMPRIOTY")));
        
        List<Map<String, Object>> dispatchingItemPriority2 = generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemPriorityData", dispatchingItemPriority);
    	if(dispatchingItemPriority2.size()>0){
    		throw new BizException("InValidData002|"+String.format("Dispatching Item = %s, Item Priority = %d", row.get("DISPATCHINGITEM"), row.get("ITEMPRIOTY")));
        }
         
        dispatchingItemPriority.put("FROMVALUE", 			NumberUtil.toInt((String)row.get("FROMVALUE")));
        dispatchingItemPriority.put("TOVALUE", 				NumberUtil.toInt((String)row.get("TOVALUE")));
        dispatchingItemPriority.put("DESCRIPTION", 		row.get("DESCRIPTION"));
        dispatchingItemPriority.put("ENTERPRISEID", 		row.get("ENTERPRISEID"));
        dispatchingItemPriority.put("PLANTID", 				row.get("PLANTID"));
        dispatchingItemPriority.put("VALIDSTATE", 			row.get("VALIDSTATE"));
        generalDao.addUpdate(NAMESAPCE + ".insertDispatchingItemPriority", dispatchingItemPriority);
    }
    */
     
    /************************************************************************************************
     * Update CT_DISPATCHINGITEMPRIOTY
     ************************************************************************************************/
    /*
    private void getUpdateDispatchingItemPriorityData(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> dispatchingItemPriority = new HashMap<>();
        dispatchingItemPriority.put("DISPATCHINGITEM", 	row.get("DISPATCHINGITEM"));
        dispatchingItemPriority.put("ITEMPRIOTY", 			NumberUtil.toInt((String)row.get("ITEMPRIOTY")));
         
        List<Map<String, Object>> dispatchingItemPriority2 = generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemPriorityData", dispatchingItemPriority);
    	if(dispatchingItemPriority2.size()==0){
    		throw new BizException("InValidData002|"+String.format("Dispatching Item = %s, Item Priority = %d", row.get("DISPATCHINGITEM"), row.get("ITEMPRIOTY")));
        }
         
    	dispatchingItemPriority.put("FROMVALUE", 			NumberUtil.toInt((String)row.get("FROMVALUE")));
        dispatchingItemPriority.put("TOVALUE", 				NumberUtil.toInt((String)row.get("TOVALUE")));
        dispatchingItemPriority.put("DESCRIPTION", 		row.get("DESCRIPTION"));
        dispatchingItemPriority.put("ENTERPRISEID", 		row.get("ENTERPRISEID"));
        dispatchingItemPriority.put("PLANTID", 				row.get("PLANTID"));
        dispatchingItemPriority.put("VALIDSTATE", 			row.get("VALIDSTATE"));
        generalDao.addUpdate(NAMESAPCE + ".updateDispatchingItemPriority", dispatchingItemPriority);
    }
    */
     
    /************************************************************************************************
     * Delete CT_DISPATCHINGITEMPRIOTY
     ************************************************************************************************/
    /*
    private void getDeleteDispatchingItemPriorityData(Map<String, Object> row) throws Exception
    {
    	Map<String, Object> dispatchingItemPriority = new HashMap<>();
        dispatchingItemPriority.put("DISPATCHINGITEM", 	row.get("DISPATCHINGITEM"));
        dispatchingItemPriority.put("ITEMPRIOTY", 			NumberUtil.toInt((String)row.get("ITEMPRIOTY")));
         
        List<Map<String, Object>> dispatchingItemPriority2 = generalDao.addSelect(NAMESAPCE + ".selectDispatchingItemPriorityData", dispatchingItemPriority);
    	if(dispatchingItemPriority2.size()==0){
    		throw new BizException("InValidData002|"+String.format("Dispatching Item = %s, Item Priority = %d", row.get("DISPATCHINGITEM"), row.get("ITEMPRIOTY")));
        }
         
    	generalDao.addUpdate(NAMESAPCE + ".deleteDispatchingItemPriority", dispatchingItemPriority);
    }
    */

  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}