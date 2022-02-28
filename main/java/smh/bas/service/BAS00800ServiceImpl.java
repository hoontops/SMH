package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS00800ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00800ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.04
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 04.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS00800ServiceImpl extends AbstractNbdfService implements BAS00800Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00800Dao";

    @Autowired
    private GeneralDao generalDao;

    
    /**
    * @fn 			: selectTreeList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectTreeList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00800Service#selectTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTreeList", param));
    }
    
    /**
    * @fn 			: selectCategoryList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCategoryList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 04.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectCategoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCategoryList", param));
    }
    
    /**
     * @fn 			: saveCategory
     * @brief 		: (Override method) 함수 간략한 설명
     * @Method Name : saveCategory
     * @remark		: 상세설명
     * @see smh.bas.service.BAS00800Service#saveCategory(com.nbdf.commons.ui.vo.UiMapDto)
     */
     @Override
     public void saveCategory(UiMapDto dto) throws Exception {
    	 DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");	        
         Map<String, Object> param;
         
         int result = 0;
        
         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);            
             if (type == DataSet.ROW_TYPE_INSERTED) {
             	result += insertCategory(param);             	
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
             	result += updateCategory(param);             	
             } else if (type == DataSet.ROW_TYPE_DELETED) {            	
 				result += deleteCategory(param); 				
             }            
         }
         putDataSetMap(dto, result);
     }
     
     private int insertCategory(Map<String, Object> param) throws Exception{
     	Map<String, Object> paramMap = new HashMap<String, Object>();
     	
     	//HashMap Copy
     	for (Map.Entry<String, Object> entry : param.entrySet()) {
     		paramMap.put(entry.getKey(), entry.getValue());
     	}
     	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
     	paramMap.put("CATEGORYNAME", uid);
 		
 		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectCategory", paramMap);
 		if (idList.size() > 0 ) 
 		{
 			throw new BizException("InValidData002|"+String.format("CategoryId = %s, CategorySet = %s", param.get("CATEGORYID"), param.get("CATEGORYSET")));
 		}
 		return generalDao.addUpdate(NAMESAPCE + ".insertCategory", paramMap);		
 	}
     
     private int updateCategory(Map<String, Object> param) throws Exception{     	
 		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectCategory", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData001|"+String.format("CategoryId = %s, CategorySet = %s", param.get("CATEGORYID"), param.get("CATEGORYSET")));
 		}
     	
 		return generalDao.addUpdate(NAMESAPCE + ".updateCategory", param);		
 	}
     
     private int deleteCategory(Map<String, Object> param) throws Exception{
     	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectCategory", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData003|"+String.format("CategoryId = %s, CategorySet = %s", param.get("CATEGORYID"), param.get("CATEGORYSET")));
 		}
     	
 		return generalDao.addUpdate(NAMESAPCE + ".deleteCategory", param);		
 	}
}