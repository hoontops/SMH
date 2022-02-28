package smh.ben.service;

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
public class BEN60210ServiceImpl extends AbstractNbdfService implements BEN60210Service {
	
	public static final String NAMESPACE = "smh.ben.dao.BEN60210Dao";
	
	@Autowired
	private GeneralDao generalDao;

    /**
     * @fn          : selectSchoolExpenseList
     * @brief       : (Override method) 자녀 학자금 신청 내역 조회
     * @Method Name : selectSchoolExpenseList
     * @remark      : 상세설명
     * @see smh.ben.service.BEN60210Service#selectSchoolExpenseList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
	public void selectSchoolExpenseList(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectSchoolExpenseList", param));
	}
	
	/**
	* @fn 
	* @brief (Override method) 함수 간략한 설명
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
	* @see smh.ben.service.BEN60210Service#selectChildrenList(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	public void selectChildrenList(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectChildrenList", param));
	}
	
    /**
     * @fn		  : selectSchoolExpenseDetail
     * @brief 	  : (Override method) 자녀 학자금 신청 내역 상세조회
     * @remark    : selectSchoolExpenseDetail
     * @see "smh.ben.dao.BEN60210Dao.selectSchoolExpenseDetail"
     */

    public void selectSchoolExpenseDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectSchoolExpenseDetail", param));
    }
	
    /**
     * @fn          : saveSchoolExpense
     * @brief       : (Override method) 자녀 학자금 신청 내역 등록/수정/삭제
     * @Method Name : saveSchoolExpense
     * @remark      : 상세설명
     * @see smh.ben.service.BEN60210Service#saveSchoolExpense(com.nbdf.commons.ui.vo.UiMapDto)
     */  
    @Override
    public void saveSchoolExpense(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertSchoolExpense(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateSchoolExpense(param);
             } else if (type == DataSet.ROW_TYPE_DELETED) {
             	 result += deleteSchoolExpense(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
    /**
     * @fn          : insertSchoolExpense
     * @brief       : (Override method) 자녀 학자금 신청 내역 등록
     * @Method Name : insertSchoolExpense
     * @remark      : 상세설명
     * @see
     */
	private int insertSchoolExpense(Map<String, Object> param) throws Exception{
		Map<String, Object> paramMap = new HashMap<String, Object>();
	       
	    //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue()); 
		}	
			
	    return generalDao.addUpdate(NAMESPACE + ".insertSchoolExpense", paramMap);
	}
	    
	/**
	 * @fn          : updateSchoolExpense
	 * @brief       : (Override method) 자녀 학자금 신청 내역 수정
	 * @Method Name : updateSchoolExpense
	 * @remark      : 상세설명
	 * @see
	 */
	private int updateSchoolExpense(Map<String, Object> param) throws Exception {
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
	   	return generalDao.addUpdate(NAMESPACE + ".updateSchoolExpense", paramMap);   	 
	}
	    
	/**
	 * @fn          : deleteSchoolExpense
	 * @brief       : (Override method) 자녀 학자금 신청 내역 삭제
	 * @Method Name : deleteSchoolExpense
	 * @remark      : 상세설명
	 * @see
	 */
	private int deleteSchoolExpense(Map<String, Object> param) throws Exception{
		Map<String, Object> paramMap = new HashMap<String, Object>();
	      	 
		//HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue()); 
		}    	 
	   	
		return generalDao.addUpdate(NAMESPACE + ".deleteSchoolExpense", paramMap);
	}
}
