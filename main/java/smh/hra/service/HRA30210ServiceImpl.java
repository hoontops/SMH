package smh.hra.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import smh.hra.service.HRA30210Service;
@Service
public class HRA30210ServiceImpl extends AbstractNbdfService implements HRA30210Service {

    public static final String NAMESPACE = "smh.hra.dao.HRA30210Dao";
    @Autowired
    private GeneralDao generalDao;
	 /**
     * @fn			: selectCounselingStatusList
     * @brief		: (Override method)인사고충 상담현황 조회
     * @Method Name : selectCounselingStatusList
     * @remark 		: 리스트 조회
     * @see "smh.hra.dao.HRA30210Service#selectCounselingStatusList"
     */


    public void selectCounselingStatusList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("param.entrySet() : " + param.entrySet());
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCounselingStatusList",param);

        putDataSetMap(dto, list);
    }
    /**
     * @fn		  : selectCounselingStatusDetail
     * @brief 	  : (Override method)인사고충현황 상세조회
     * @remark    : selectCounselingStatusDetail
     * @see "smh.hra.dao.HRA30110Dao.selectCounselingDetail"
     */

    public void selectCounselingStatusDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCounselingStatusDetail", param));
    }
  
    /**
     * @fn          : saveCounselingStatus
     * @brief       : (Override method) 인사고충상담현황 등록/수정/삭제
     * @Method Name : saveCounselingStatus
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30210Service#saveCounselingStatus(com.nbdf.commons.ui.vo.UiMapDto)
     */  
    @Override
    public void saveCounselingStatus(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertCounselingStatus(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateCounselingStatus(param);
             } else if (type == DataSet.ROW_TYPE_DELETED) {
             	 result += deleteCounselingStatus(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
     /**
      * @fn          : insertCounselingStatus
      * @brief       : (Override method) 인사고충상담 상담내용 등록
      * @Method Name : insertCounselingStatus
      * @remark      : 상세설명
      * @see
      */
    private int insertCounselingStatus(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
		    paramMap.put(entry.getKey(), entry.getValue()); 
		}	
		
        return generalDao.addUpdate(NAMESPACE + ".insertCounselingStatus", paramMap);
    }
     
     /**
      * @fn          : updateCounselingStatus
      * @brief       : (Override method) 내역 수정
      * @Method Name : updateCounselingStatus
      * @remark      : 내역 수정
      * @see
      */
     private int updateCounselingStatus(Map<String, Object> param) throws Exception {
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
    	 String subject = (String)param.get("SUBJECT");
    	 
    	 // HashMap Copy
    	 for (Map.Entry<String, Object> entry : param.entrySet()) {
    		 paramMap.put(entry.getKey(), entry.getValue());
    	 }
    	 
// 2022-02-15 중복체크 제외
//    	 String isExsist = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);
//
//         if (!"Y".equals(isExsist) )
//         {
//             throw new BizException("InValidData001", String.format("SUBJECT = %s", subject));
//         } 
         
         return generalDao.addUpdate(NAMESPACE + ".updateCounselingStatus", paramMap);
     }
     
     /**
      * @fn          : deleteCounselingStatus
      * @brief       : (Override method) 내역 삭제
      * @Method Name : deleteCounselingStatus
      * @remark      : 내역 삭제
      * @see
      */
     private int deleteCounselingStatus(Map<String, Object> param) throws Exception{
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
    	 
    	 //HashMap Copy
    	 for (Map.Entry<String, Object> entry : param.entrySet()) {
    		 paramMap.put(entry.getKey(), entry.getValue());
    	 }
    	 
    	 return generalDao.addUpdate(NAMESPACE + ".deleteCounselingStatus", paramMap);
     }
     
     
     
     /**
      * @fn          : saveChangeStatus
      * @brief       : (Override method) 인사고충상담현황 상태 수정
      * @Method Name : saveChangeStatus
      * @remark      : 상세설명
      * @see smh.hra.service.HRA30210Service#saveChangeStatus(com.nbdf.commons.ui.vo.UiMapDto)
      */  
     @Override
     public void saveChangeStatus(UiMapDto dto) throws Exception {
          DataSetMap paramMap = getParametersDataSetMap(dto);
          Map<String, Object> param;

          int result = 0;

          for (int i = 0, n = paramMap.size(); i < n; i++) {
              param = paramMap.get(i);
              int type = getRowType(param);	

              if (type == DataSet.ROW_TYPE_INSERTED) {
                  result += insertCounselingStatus(param);
              } else if (type == DataSet.ROW_TYPE_UPDATED) {
                  result += updateChangeStatus(param);
              } else if (type == DataSet.ROW_TYPE_DELETED) {
              	 result += deleteCounselingStatus(param);
              }            
          }

          putDataSetMap(dto, result);
      }

      
      /**
       * @fn          : updateChaangeStatus
       * @brief       : (Override method) 상태변경
       * @Method Name : updateChaangeStatus
       * @remark      : 상태변경
       * @see
       */
      private int updateChangeStatus(Map<String, Object> param) throws Exception {
     	 Map<String, Object> paramMap = new HashMap<String, Object>();
     	 String subject = (String)param.get("SUBJECT");
     	 
     	 // HashMap Copy
     	 for (Map.Entry<String, Object> entry : param.entrySet()) {
     		 paramMap.put(entry.getKey(), entry.getValue());
     	 }
     	 
     	 String isExsist = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);

          if (!"Y".equals(isExsist) )
          {
              throw new BizException("InValidData001", String.format("SUBJECT = %s", subject));
          } 
          
          return generalDao.addUpdate(NAMESPACE + ".updateChangeStatus", paramMap);
      }
      

    
}