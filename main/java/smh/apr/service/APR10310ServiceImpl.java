package smh.apr.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: APR10310ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10310ServiceImpl
* @Company: Built1
* @Create Date: 2022. 02. 23
* @Author: 권택진
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 02. 23   권택진     최초  생성
*/
@Service 
public class APR10310ServiceImpl extends AbstractNbdfService implements APR10310Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR10310Dao";

    @Autowired
    private GeneralDao generalDao;


    
    /**
     * @fn
     * @brief (Override method) 행동평가 평가자 내역 조회
     * @remark 
     * @see smh.apr.service.APR10310ServiceImpl#selectSelfEvaluationListDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    
    public void selectBehaviorUserList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBehaviorUserList",param);
        
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");

        putDataSetMap(dto, list);
    }
    
    public void selectRatingList(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectRatingList",param);
    	
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");
    	
    	putDataSetMap(dto, list);
    }
    
    public void selectBehaviorTableList(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBehaviorTableList",param);
    	
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");
    	
    	putDataSetMap(dto, list);
    }
    
    
    public void updateBehaviorTable(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	System.out.println(" ===========================UPDATE !!!!! ============================");
            	generalDao.addUpdate(NAMESAPCE+".updateBehaviorTable",param);
//            if (type == DataSet.ROW_TYPE_DELETED) {
//                generalDao.addUpdate(NAMESPACE+".deleteGon",param);
            }
        }
   
        putDataSetMap(dto, result);
    }
    
    
    public void selectRatingExists(UiMapDto dto) {
    	DataSetMap paramList = getParametersDataSetMap(dto, "INPUT");
    	
    	System.out.println("1111111111111111111111111111111111");
    	System.out.println(paramList);
    	System.out.println("1111111111111111111111111111111111");
    	
    	 Map<String, Object> param;
         List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>(); 
         for (int i = 0, n = paramList.size(); i < n; i++) {
             param = paramList.get(i);
             resultList.add(generalDao.addSelect(NAMESAPCE + ".selectRatingDetailCount", param).get(0));
             
             
             if(resultList.get(i).size() > 0) {
            	 if(generalDao.addSelect(NAMESAPCE + ".selectRatingExists", param).size() > 0) {
             		resultList.get(i).put("PASS_FLAG", "PASS");
             	} else {
             		resultList.get(i).put("PASS_FLAG", "FAIL");
             	}
             }
            
             System.out.println("===============resultList=========");
             
             System.out.println(resultList);
         }
         putDataSetMap(dto, resultList);
         
        
//        List<Map<String, Object>> resultList = generalDao.addSelect(NAMESAPCE + ".selectRatingDetailCount", param);
//        if(resultList.size() > 0) {
//        	if(generalDao.addSelect(NAMESAPCE + ".selectRatingExists", param).size() > 0) {
//        		resultList.get(0).put("PASS_FLAG", "PASS");
//        	} else {
//        		resultList.get(0).put("PASS_FLAG", "FAIL");
//        	}
//        }
//        putDataSetMap(dto, resultList);
    }
    
    
    public void updateAppraisalMaster(UiMapDto dto) {
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
    	int result = 0;
    	for (int i = 0, n = dsMap.size(); i < n; i++) {
    		Map<String, Object> param = dsMap.get(i);
    		
			System.out.println(" ===========================UPDATE USER!!!!! ============================");
			generalDao.addUpdate(NAMESAPCE+".updateAppraisalUser",param);
			
			System.out.println(" ===========================UPDATE MASTER!!!!! ============================");
			generalDao.addUpdate(NAMESAPCE+".updateAppraisalMaster",param);
			
			
    	}
    	
    	putDataSetMap(dto, result);
    }
    

    
}