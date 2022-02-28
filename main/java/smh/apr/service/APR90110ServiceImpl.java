package smh.apr.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;



/**
* @file        : APR90110ServiceImpl.java
* @Package     : smh.apr.service 
* @Project name: SM상선 myHR 시스템 구축
* @Type name   : APR90110ServiceImpl    
* @Company     : Built1
* @Create Date : 2022.02.22. 오전 10:55:20 
* @Author      : yhee.kim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ----------  ----------
 *   2022.02.22.   yhee.kim   최초  생성
 *
*/
@Service 
public class APR90110ServiceImpl extends AbstractNbdfService implements APR90110Service {

    public static final String NAMESPACE = "smh.apr.dao.APR90110Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn          : selectOrganizationList
     * @brief       : (Override method) 조직정보 조회
     * @Method Name : selectOrganizationList
     * @remark      : 상세설명
     * @see smh.apr.service.APR90110Service#selectOrganizationList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void selectOrganizationList(UiMapDto dto) throws Exception {    	
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOrganizationList", param));
    }

    /**
     * @fn          : selectAppraisalHeadcountList
     * @brief       : (Override method) 부서인원배분 정보 조회
     * @Method Name : selectAppraisalHeadcountList
     * @remark      : 상세설명
     * @see smh.apr.service.APR90110Service#selectAppraisalHeadcountList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void selectAppraisalHeadcountList(UiMapDto dto) throws Exception {    	
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAppraisalHeadcountList", param));
    }
    
    /**
     * @fn          : saveAppraisalHeadcount
     * @brief       : (Override method) 부서인원배분 정보 등록/수정/삭제
     * @Method Name : saveAppraisalHeadcount
     * @remark      : 상세설명
     * @see smh.apr.service.APR90110Service#saveAppraisalHeadcount(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void saveAppraisalHeadcount(UiMapDto dto) throws Exception {    	
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);	

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertAppraisalHeadcount(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateAppraisalHeadcount(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	 result += deleteAppraisalHeadcount(param);
            }            
        }

        putDataSetMap(dto, result);
    }
    
    /**
     * @fn          : insertAppraisalHeadcount
     * @brief       : (Override method) 부서인원배분 정보 등록
     * @Method Name : insertAppraisalHeadcount
     * @remark      : 상세설명
     * @see
     */
   private int insertAppraisalHeadcount(Map<String, Object> param) throws Exception{
       Map<String, Object> paramMap = new HashMap<String, Object>();
       
       //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
		    paramMap.put(entry.getKey(), entry.getValue()); 
		}	
		
       return generalDao.addUpdate(NAMESPACE + ".insertAppraisalHeadcount", paramMap);
   }
    
    /**
     * @fn          : updateAppraisalHeadcount
     * @brief       : (Override method) 부서인원배분 정보 수정
     * @Method Name : updateAppraisalHeadcount
     * @remark      : 상세설명
     * @see
     */
    private int updateAppraisalHeadcount(Map<String, Object> param) throws Exception {
   	    Map<String, Object> paramMap = new HashMap<String, Object>();
   	    String documentNo = (String)param.get("DOCUMENT_NO");
   	 
   	    // HashMap Copy
   	    for (Map.Entry<String, Object> entry : param.entrySet()) {
   	   	    paramMap.put(entry.getKey(), entry.getValue());
   	    }
        
        return generalDao.addUpdate(NAMESPACE + ".updateAppraisalHeadcount", paramMap);
    }
    
    /**
     * @fn          : deleteAppraisalHeadcount
     * @brief       : (Override method) 부서인원배분 정보 삭제
     * @Method Name : deleteAppraisalHeadcount
     * @remark      : 상세설명
     * @see
     */
    private int deleteAppraisalHeadcount(Map<String, Object> param) throws Exception{
   	    Map<String, Object> paramMap = new HashMap<String, Object>();
   	 
   	    //HashMap Copy
   	    for (Map.Entry<String, Object> entry : param.entrySet()) {
   	        paramMap.put(entry.getKey(), entry.getValue());
   	    }
   	 
   	    return generalDao.addUpdate(NAMESPACE + ".deleteAppraisalHeadcount", paramMap);
    }
    
    /**
     * @fn          : createAppraisalHeadcount
     * @brief       : (Override method) 부서인원배분 정보 생성
     * @Method Name : createAppraisalHeadcount
     * @remark      : 상세설명
     * @see smh.apr.service.APR90110Service#createAppraisalHeadcount(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void createAppraisalHeadcount(UiMapDto dto) throws Exception {    	
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".createAppraisalHeadcount", param));
    }
}