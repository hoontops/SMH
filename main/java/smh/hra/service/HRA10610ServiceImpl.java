package smh.hra.service;

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

@Service
public class HRA10610ServiceImpl extends AbstractNbdfService implements HRA10610Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA10610Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn          : selectVarificationLetter
     * @brief       : (Override method) 증명서 신청내역 조회
     * @Method Name : selectVarificationLetterList
     * @remark      : 상세설명
     * @see smh.hra.service.HRA10610Service#selectVarificationLetterList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void selectVarificationLetterList(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectVarificationLetterList", param));
    }
    
    /**
     * @fn          : saveVarificationLetter
     * @brief       : (Override method) 증명서 신청내역 등록/수정/삭제
     * @Method Name : saveVarificationLetter
     * @remark      : 상세설명
     * @see smh.hra.service.HRA10610Service#saveVarificationLetter(com.nbdf.commons.ui.vo.UiMapDto)
     */  
    @Override
    public void saveVarificationLetter(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertVarificationLetter(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateVarificationLetter(param);
             } else if (type == DataSet.ROW_TYPE_DELETED) {
             	 result += deleteVarificationLetter(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
     /**
      * @fn          : insertVarificationLetter
      * @brief       : (Override method) 증명서 신청내역 등록
      * @Method Name : insertVarificationLetter
      * @remark      : 상세설명
      * @see
      */
    private int insertVarificationLetter(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
		    paramMap.put(entry.getKey(), entry.getValue()); 
		}	
		
        return generalDao.addUpdate(NAMESPACE + ".insertVarificationLetter", paramMap);
    }
     
     /**
      * @fn          : updateVarificationLetter
      * @brief       : (Override method) 증명서 신청내역 수정
      * @Method Name : updateVarificationLetter
      * @remark      : 상세설명
      * @see
      */
     private int updateVarificationLetter(Map<String, Object> param) throws Exception {
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
    	 String documentNo = (String)param.get("DOCUMENT_NO");
    	 
    	 // HashMap Copy
    	 for (Map.Entry<String, Object> entry : param.entrySet()) {
    		 paramMap.put(entry.getKey(), entry.getValue());
    	 }
    	 
    	 String isExsist = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);

         if (!"Y".equals(isExsist) )
         {
             throw new BizException("InValidData001", String.format("documentNo = %s", documentNo));
         } 
         
         return generalDao.addUpdate(NAMESPACE + ".updateVarificationLetter", paramMap);
     }
     
     /**
      * @fn          : deleteVarificationLetter
      * @brief       : (Override method) 증명서 신청내역 삭제
      * @Method Name : deleteVarificationLetter
      * @remark      : 상세설명
      * @see
      */
     private int deleteVarificationLetter(Map<String, Object> param) throws Exception{
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
    	 
    	 //HashMap Copy
    	 for (Map.Entry<String, Object> entry : param.entrySet()) {
    		 paramMap.put(entry.getKey(), entry.getValue());
    	 }
    	 
    	 return generalDao.addUpdate(NAMESPACE + ".deleteVarificationLetter", paramMap);
     }
    
}
