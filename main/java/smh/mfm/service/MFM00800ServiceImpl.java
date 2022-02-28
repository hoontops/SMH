package smh.mfm.service;

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
import com.nexacro17.xapi.data.DataSet;

/**
 * @file		: MFM00800ServiceImpl.java
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
public class MFM00800ServiceImpl extends AbstractNbdfService implements MFM00800Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00800Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 품목 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductPriorityList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductPriorityList", param));
    }
  	
  	public void saveProductPefPriority(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto);
        Map<String, Object> reqParam;
        Map<String, Object> productDefId = new HashMap<>();
        
        int result = 0;
        for (int i = 0, n = inputMap.size(); i < n; i++) {
        	reqParam = inputMap.get(i);
        	
        	productDefId.put("PRODUCTDEFID", 	reqParam.get("PRODUCTDEFID"));
        	List<Map<String, Object>> productDefId2 = generalDao.addSelect(NAMESAPCE + ".selectProductDefSearch", productDefId);
        	if(productDefId2.size()==0){
      			throw new BizException("InValidData001|"+String.format("PruductDefId = %s", reqParam.get("PRODUCTDEFID")));
      		}
           
            int type = getRowType(reqParam);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	getUpdateData(reqParam);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getUpdateData(reqParam);            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	reqParam.put("PRIORITY", 					null);
            	getUpdateData(reqParam);
            }
        }
        
        putDataSetMap(dto, result);
    }
  	
  	protected void getUpdateData(Map<String, Object> row) throws Exception
  	{
  		Map<String, Object> productDefId = new HashMap<>();
  		productDefId.put("PRODUCTDEFID", 			row.get("PRODUCTDEFID"));
  		productDefId.put("PRODUCTDEFVERSION", 	row.get("PRODUCTDEFVERSION"));
  		productDefId.put("PRIORITY", 					row.get("PRIORITY"));
		generalDao.addUpdate(NAMESAPCE + ".updateProductDefPriority", productDefId);
		
		String lastTxnHistory = (String)productDefId.get("LASTTXNHISTKEY");
  	    log("lastTxnHistory :: "+lastTxnHistory);
  	    
		productDefId.put("HISTKEY", 					lastTxnHistory);
		generalDao.addUpdate(NAMESAPCE + ".updateProductDefPriorityHistory", productDefId);
  	}
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}