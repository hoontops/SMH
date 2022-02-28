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
public class HRA30610ServiceImpl extends AbstractNbdfService implements HRA30610Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA30610Dao";
	
	@Autowired
	private GeneralDao generalDao;
	
    /**
     * @fn          : selectFaqList
     * @brief       : (Override method) HR F.A.Q 현황 조회
     * @Method Name : selectFaqList
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30610Service#selectFaqList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
	public void selectFaqList(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectFaqList", param));
	}
	
	public void selectFaqDetail(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectFaqDetail", param));
	}
	
    public void insertViewCount(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);        
            generalDao.addInsert(NAMESPACE+".updateViewCount",param);
        }
   
        putDataSetMap(dto, result);
    }
	
    /**
     * @fn          : saveFaq
     * @brief       : (Override method) F.A.Q 현황 등록/수정/삭제
     * @Method Name : saveFaq
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30610Service#saveFaq(com.nbdf.commons.ui.vo.UiMapDto)
     */  
    @Override
    public void saveFaq(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertFaq(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateFaq(param);
             } else if (type == DataSet.ROW_TYPE_DELETED) {
             	 result += deleteFaq(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
    /**
     * @fn          : insertFaq
     * @brief       : (Override method) HR F.A.Q 현황 등록
     * @Method Name : insertFaq
     * @remark      : 상세설명
     * @see
     */
	private int insertFaq(Map<String, Object> param) throws Exception{
		Map<String, Object> paramMap = new HashMap<String, Object>();
	       
	    //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue()); 
		}	
			
	    return generalDao.addUpdate(NAMESPACE + ".insertFaq", paramMap);
	}
	    
	/**
	 * @fn          : updateFaq
	 * @brief       : (Override method) HR F.A.Q 현황 수정
	 * @Method Name : updateFaq
	 * @remark      : 상세설명
	 * @see
	 */
	private int updateFaq(Map<String, Object> param) throws Exception {
		Map<String, Object> paramMap = new HashMap<String, Object>();
	  	 
	   	//HashMap Copy		
	   	for (Map.Entry<String, Object> entry : param.entrySet()) {
	   		paramMap.put(entry.getKey(), entry.getValue()); 
	   	}
	   	return generalDao.addUpdate(NAMESPACE + ".updateFaq", paramMap);   	 
	}
	
	    
	/**
	 * @fn          : deleteFaq
	 * @brief       : (Override method) HR F.A.Q 현황 삭제
	 * @Method Name : deleteFaq
	 * @remark      : 상세설명
	 * @see
	 */
	private int deleteFaq(Map<String, Object> param) throws Exception{
		Map<String, Object> paramMap = new HashMap<String, Object>();
	      	 
		//HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue()); 
		}    	 
	   	
		return generalDao.addUpdate(NAMESPACE + ".deleteFaq", paramMap);
	}
}
