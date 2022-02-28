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
* @file: BAS00900ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00900ServiceImpl
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
public class BAS00900ServiceImpl extends AbstractNbdfService implements BAS00900Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00900Dao";

    @Autowired
    private GeneralDao generalDao;

    
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
    public void selectReasonClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReasonClassList", param));
    }
    
    /**
    * @fn 			: selectReasonList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectReasonList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00900Service#selectReasonList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectReasonList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReasonList", param));
    }
    
    /**
    * @fn 			: getParentReasonCodeClassId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getParentReasonCodeClassId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 15.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void getParentReasonCodeClassId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getParentReasonCodeClassId", param));
    }
    
    /**
     * @fn 			: saveReasonClass
     * @brief 		: (Override method) 함수 간략한 설명
     * @Method Name : saveReasonClass
     * @remark		: 상세설명
     * @see smh.bas.service.BAS00900Service#saveCategory(com.nbdf.commons.ui.vo.UiMapDto)
     */
     @Override
     public void saveReasonClass(UiMapDto dto) throws Exception {
    	 DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");	        
         Map<String, Object> param;
         
         int result = 0;
        
         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);            
             if (type == DataSet.ROW_TYPE_INSERTED) {
            	 String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            	 param.put("REASONCODECLASSNAME_KEY", uid);
             	result += insertReasonClass(param);             	
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
             	result += updateReasonClass(param);             	
             } else if (type == DataSet.ROW_TYPE_DELETED) {            	
 				result += deleteReasonClass(param); 				
             }            
         }
         putDataSetMap(dto, result);
     }
     
     /**
      * @fn 			: saveReason
      * @brief 		: (Override method) 함수 간략한 설명
      * @Method Name : saveReasonClass
      * @remark		: 상세설명
     * @see smh.bas.service.BAS00900Service#saveCategory(com.nbdf.commons.ui.vo.UiMapDto)
      */
      @Override
      public void saveReason(UiMapDto dto) throws Exception {
     	 DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");	        
          Map<String, Object> param;
          
          int result = 0;
         
          for (int i = 0, n = paramMap.size(); i < n; i++) {
              param = paramMap.get(i);
              int type = getRowType(param);            
              if (type == DataSet.ROW_TYPE_INSERTED) {
            	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
             	param.put("REASONCODENAME_KEY", uid);
              	result += insertReason(param);             	
              } else if (type == DataSet.ROW_TYPE_UPDATED) {
              	result += updateReason(param);             	
              } else if (type == DataSet.ROW_TYPE_DELETED) {            	
  				result += deleteReason(param); 				
              }            
          }
          putDataSetMap(dto, result);
      }
     
     private int insertReasonClass(Map<String, Object> param) throws Exception{    	 
    	 param.put("CHK_REASONCODECLASSID", param.get("REASONCODECLASSID"));
     	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectReasonClassList", param);
 		if (idList.size() > 0 ) 
 		{
 			throw new BizException("InValidData002|"+String.format("ReasonCodeClassId = %s", param.get("REASONCODECLASSID")));
 		}
 		return generalDao.addUpdate(NAMESAPCE + ".insertReasonClass", param);		
 	}
     
     private int updateReasonClass(Map<String, Object> param) throws Exception{
    	 param.put("CHK_REASONCODECLASSID", param.get("REASONCODECLASSID"));
 		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectReasonClassList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData001|"+String.format("ReasonCodeClassId = %s", param.get("REASONCODECLASSID")));
 		}
     	
 		return generalDao.addUpdate(NAMESAPCE + ".updateReasonClass", param);		
 	}
     
     private int deleteReasonClass(Map<String, Object> param) throws Exception{
    	param.put("CHK_REASONCODECLASSID", param.get("REASONCODECLASSID"));
      	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectReasonClassList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData003|"+String.format("ReasonCodeClassId = %s", param.get("REASONCODECLASSID")));
 		}
 		
      	List<Map<String, Object>> reasonCodeList = generalDao.addSelect(NAMESAPCE + ".selectReasonChk", param);
 		if (reasonCodeList.size() > 0 ) 
 		{
 			throw new BizException("NoDeleteReasonCodeClassIncludingCode|"+String.format("ReasonCodeClassId = %s", param.get("REASONCODECLASSID")));
 		}
 		
      	List<Map<String, Object>> reasonCodeClassList = generalDao.addSelect(NAMESAPCE + ".selectReasonChildChk", param);
 		if (reasonCodeClassList.size() > 0 ) 
 		{
 			throw new BizException("NoDeleteReasonCodeClassIncludingChildCodeClass|"+String.format("ReasonCodeClassId = %s", param.get("REASONCODECLASSID")));
 		}
     	
 		return generalDao.addUpdate(NAMESAPCE + ".deleteReasonClass", param);		
 	}
     
     private int insertReason(Map<String, Object> param) throws Exception{
      	Map<String, Object> paramMap = new HashMap<String, Object>();
      	
      	//HashMap Copy
      	for (Map.Entry<String, Object> entry : param.entrySet()) {
      		paramMap.put(entry.getKey(), entry.getValue());
      	}
      	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
      	paramMap.put("CATEGORYNAME", uid);
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectReasonCodeChk", paramMap);
  		if (idList.size() > 0 ) 
  		{
  			throw new BizException("InValidData002|"+String.format("ReasonCodeId = %s", param.get("REASONCODEID")));
  		}
  		return generalDao.addUpdate(NAMESAPCE + ".insertReason", paramMap);		
  	}
      
      private int updateReason(Map<String, Object> param) throws Exception{     	
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectReasonCodeChk", param);
  		if (idList.size() < 1 ) 
  		{
  			throw new BizException("InValidData001|"+String.format("ReasonCodeId = %s", param.get("REASONCODEID")));
  		}
      	
  		return generalDao.addUpdate(NAMESAPCE + ".updateReason", param);		
  	}
      
      private int deleteReason(Map<String, Object> param) throws Exception{
      	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectReasonCodeChk", param);
  		if (idList.size() < 1 ) 
  		{
  			throw new BizException("InValidData003|"+String.format("ReasonCodeId = %s", param.get("REASONCODEID")));
  		}
      	
  		return generalDao.addUpdate(NAMESAPCE + ".deleteReason", param);		
  	}
}