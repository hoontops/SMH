package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS04500ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04500ServiceImpl
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
public class BAS04500ServiceImpl extends AbstractNbdfService implements BAS04500Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS04500Dao";

    @Autowired
    private GeneralDao generalDao;

    
    /**
    * @fn 			: selectUserGroupList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUserGroupList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectUserGroupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserGroupList", param));
    }
    

    /**
    * @fn 			: selectUserGroupUserList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUserGroupUserList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectUserGroupUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserGroupUserList", param));
    }
    
    /**
    * @fn 			: getUserGroupUserList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : getUserGroupUserList
    * @remark		: 상세설명
* @see smh.bas.service.BAS04500Service#getUserGroupUserList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void getUserGroupUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getUserGroupUserList", param));
    }

    /**
    * @fn 			: saveUserGroup
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserGroup
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    @Override
     public void saveUserGroup(UiMapDto dto) throws Exception {
    	 DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");	        
         Map<String, Object> param;
         
         int result = 0;
        
         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);            
             if (type == DataSet.ROW_TYPE_INSERTED) {
            	 String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            	 param.put("USERGROUPNAME_KEY", uid);
             	result += insertUserGroup(param);             	
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
             	result += updateUserGroup(param);             	
             } else if (type == DataSet.ROW_TYPE_DELETED) {            	
 				result += deleteUserGroup(param); 				
             }            
         }
         putDataSetMap(dto, result);
     }

      /**
    * @fn 			: saveUserGroupUser
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserGroupUser
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 16.       sungmin.choe      최초  생성
     *
    */
    @Override
      public void saveUserGroupUser(UiMapDto dto) throws Exception {
     	 DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");	        
          Map<String, Object> param;
          
          int result = 0;
         
          for (int i = 0, n = paramMap.size(); i < n; i++) {
              param = paramMap.get(i);
              int type = getRowType(param);            
              if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertUserGroupUser(param);
              } else if (type == DataSet.ROW_TYPE_DELETED) {            	
  				result += deleteUserGroupUser(param); 				
              }            
          }
          putDataSetMap(dto, result);
      }
     
     private int insertUserGroup(Map<String, Object> param) throws Exception{
     	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".chkUserGroupList", param);
 		if (idList.size() > 0 ) 
 		{
 			throw new BizException("InValidData002|"+String.format("UserGroupId = %s", param.get("USERGROUPID")));
 		}
 		return generalDao.addUpdate(NAMESAPCE + ".insertUserGroup", param);		
 	}
     
     private int updateUserGroup(Map<String, Object> param) throws Exception{
    	 List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".chkUserGroupList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData001|"+String.format("UserGroupId = %s", param.get("USERGROUPID")));
 		}
     	
 		return generalDao.addUpdate(NAMESAPCE + ".updateUserGroup", param);		
 	}
     
     private int deleteUserGroup(Map<String, Object> param) throws Exception{
    	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".chkUserGroupList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData003|"+String.format("UserGroupId = %s", param.get("USERGROUPID")));
 		}
 		
      	List<Map<String, Object>> reasonCodeClassList = generalDao.addSelect(NAMESAPCE + ".checkUserGroupChildList", param);
 		if (reasonCodeClassList.size() > 0 ) 
 		{
 			throw new BizException("NoDeleteUserIncludingChildUserGroup|"+String.format("UserGroupId = %s", param.get("USERGROUPID")));
 		}
     	
 		return generalDao.addUpdate(NAMESAPCE + ".deleteUserGroup", param);		
 	}
     
     private int insertUserGroupUser(Map<String, Object> param) throws Exception{
      List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".checkUserGroupUserList", param);
  		if (idList.size() > 0 ) 
  		{
  			throw new BizException("InValidData002|"+String.format("UserGroupId = %s, UserId = %s", param.get("USERGROUPID"),param.get("USERID")));
  		}
  		return generalDao.addUpdate(NAMESAPCE + ".insertUserGroupUser", param);		
  	}
      
      private int deleteUserGroupUser(Map<String, Object> param) throws Exception{
      	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".checkUserGroupUserList", param);
  		if (idList.size() < 1 ) 
  		{
  			throw new BizException("InValidData003|"+String.format("UserGroupId = %s, UserId = %s", param.get("USERGROUPID"),param.get("USERID")));
  		}
      	
  		return generalDao.addUpdate(NAMESAPCE + ".deleteUserGroupUser", param);		
  	}
}