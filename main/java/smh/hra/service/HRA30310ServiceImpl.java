package smh.hra.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class HRA30310ServiceImpl extends AbstractNbdfService implements HRA30310Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA30310Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn          : selectQnaList
     * @brief       : (Override method) HR Q&A 현황 조회
     * @Method Name : selectQnaList
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30310Service#selectQnaList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void selectQnaList(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQnaList", param));
    }
    
    /**
     * @fn          : saveQnA
     * @brief       : (Override method) HR Q&A 신청내역 등록/수정/삭제
     * @Method Name : saveQnA
     * @remark      : 상세설명
     * @see smh.hra.service.HRA10610Service#saveQnA(com.nbdf.commons.ui.vo.UiMapDto)
     */  
    @Override
    public void saveQnA(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertQnA(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateQnA(param);
             } else if (type == DataSet.ROW_TYPE_DELETED) {
             	 result += deleteQnA(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
     /**
      * @fn          : insertQnA
      * @brief       : (Override method) HR Q&A 신청내역 등록
      * @Method Name : insertQnA
      * @remark      : 상세설명
      * @see
      */
    private int insertQnA(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
		    paramMap.put(entry.getKey(), entry.getValue()); 
		}	
		
        return generalDao.addUpdate(NAMESPACE + ".insertQnA", paramMap);
    }
     
     /**
      * @fn          : updateQnA
      * @brief       : (Override method) HR Q&A 신청내역 수정
      * @Method Name : updateQnA
      * @remark      : 상세설명
      * @see
      */
    private int updateQnA(Map<String, Object> param) throws Exception {
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	String subject = (String)param.get("SUBJECT");
   	 
    	//HashMap Copy		
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue()); 
    	}
    	
   	 	String isExists = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);

   	 	//Y가 아니면 Exception 처리.
   	 	if (!"Y".equals(isExists)) {		
   	 		throw new BizException("InValidData001", String.format("SUBJECT = %s", subject));
   	 	}
   	 
   	 	//Y리턴이면 업데이트 처리.
   	 	return generalDao.addUpdate(NAMESPACE + ".updateQnA", paramMap);   	 
    }
     
     /**
      * @fn          : deleteQnA
      * @brief       : (Override method) HR Q&A 신청내역 삭제
      * @Method Name : deleteQnA
      * @remark      : 상세설명
      * @see
      */
     private int deleteQnA(Map<String, Object> param) throws Exception{
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
       	 
     	//HashMap Copy		
     	for (Map.Entry<String, Object> entry : param.entrySet()) {
     		paramMap.put(entry.getKey(), entry.getValue()); 
     	}    	 
    	
     	return generalDao.addUpdate(NAMESPACE + ".deleteQnA", paramMap);
     }
}
