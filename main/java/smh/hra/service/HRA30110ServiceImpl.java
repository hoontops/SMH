package smh.hra.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class HRA30110ServiceImpl extends AbstractNbdfService implements HRA30110Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA30110Dao";
    
	@Autowired
    private GeneralDao generalDao;
    
	 /**
     * @fn			: selectCounselingList
     * @brief		: (Override method)인사고충 상담내역 조회
     * @Method Name : selectCertificationList
     * @remark 		: 리스트 조회
     * @see "smh.hra.dao.HRA30110Service#selectCounselingList"
     */

    public void selectCounselingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCounselingList", param));
    }
    
	 /**
     * @fn			: selectCounselingDetail
     * @brief		: (Override method)인사고충 상담내역 상세조회
     * @Method Name : selectCounselingDetail
     * @remark 		: 상세조회
     * @see "smh.hra.dao.HRA30110Service#selectCounselingDetail"
     */
    
    public void selectCounselingDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCounselingDetail", param));
    }
    
    
	 /**
     * @fn			: saveCounseling
     * @brief		: (Override method)인사고충 상담신청/수정/삭제 
     * @Method Name : saveCounseling
     * @remark 		: 상담신청/수정/삭제 
     * @see "smh.hra.dao.HRA30110Service#saveCounseling"
     */
    
    @Override
    public void saveCounseling(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

          for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertCounseling(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                  result += updateCounseling(param);
             } else if (type == DataSet.ROW_TYPE_DELETED) {
             	 result += deleteCounseling(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
     /**
      * @fn          : insertCounseling
      * @brief       : (Override method)  신청내역 등록
      * @Method Name : insertCounseling
      * @remark      :  신청 등록
      * @see
      */
     private int insertCounseling(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	//String documentNo = (String)param.get("DOCUMENT_NO");
    	
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
   		 paramMap.put(entry.getKey(), entry.getValue());
   	 }
    	return generalDao.addUpdate(NAMESPACE + ".insertCounseling", paramMap);
     }
     
     /**
      * @fn          : updateCounseling
      * @brief       : (Override method)  내역 수정
      * @Method Name : updateCounseling
      * @remark      : 증명서 신청내역 수정
      * @see
      */
     
     private int updateCounseling(Map<String, Object> param) throws Exception {
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
    	 String subject = (String)param.get("SUBJECT");
    	 
    	 // HashMap Copy
    	 for (Map.Entry<String, Object> entry : param.entrySet()) {
    		 paramMap.put(entry.getKey(), entry.getValue());
    	 }
    	 
// 		2022-02-15 
//      체크로직 제외요청으로 제외

    	 
//    	 String isExists = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);
//
//    	 if (!"Y".equals(isExists))
//    	 {		//Y가 아니면 Exception 처리.
//             throw new BizException("InValidData001", String.format("SUBJECT = %s", subject));
//         } 
         //Y리턴이면 업데이트 처리.
         return generalDao.addUpdate(NAMESPACE + ".updateCounseling", paramMap);
    	 
     }
     
     /**
      * @fn          : deleteCounseling
      * @brief       : (Override method) 내역 삭제
      * @Method Name : deleteCounseling
      * @remark      : 내역 삭제
      * @see
      */
     private int deleteCounseling(Map<String, Object> param) throws Exception{
    	 Map<String, Object> paramMap = new HashMap<String, Object>();
    	 
    	 //HashMap Copy
    	 for (Map.Entry<String, Object> entry : param.entrySet()) {
    		 paramMap.put(entry.getKey(), entry.getValue());
    	 }
    	 
    	 return generalDao.addUpdate(NAMESPACE + ".deleteCounseling", paramMap);
     }
    
    
    
}