package smh.pay.service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import com.nbdf.commons.web.support.AbstractNbdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * @file        : PAY40250ServiceImpl.java
 * @Project name: SM상선 myHR 고도화
 * @Type name   : PAY40250ServiceImpl
 * @Create Date : 2022.01.23
 * @Author      : 권택진
  *
  * << 개정이력(Modification Information) >>
  *
  *   수정일        수정자   수정내용
  *   ------------  ------   ----------
  *   2022.02.23    권택진   최초작성
  *
 */
@Service
public class PAY40250ServiceImpl extends AbstractNbdfService implements PAY40250Service {

    public static final String NAMESPACE = "smh.pay.dao.PAY40250Dao";
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectHjspayCalendarList
    * @brief       : 팀원출근현황 조회
    * @Method Name : selectHjspayCalendarList
    * @remark
    * @Create Date : 2022. 02. 23
    * @Author      : 권택진
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일       수정자    수정내용
     *   ------------   ------    ----------
     *    2022.02.23.   권택진    최초작성
     *
    */
    @Override
    public void selectHjspayCalendarList(UiMapDto dto) {        
    	Map<String, Object> param = getParametersMap(dto);    	
        //System.out.println("param.entrySet() : " + param.entrySet());
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectHjspayCalendarList", param);
        putDataSetMap(dto, list);
    }
    
    
    /**
	* @fn          : saveHjspayCalendar
	* @brief       : 팀원출근현황 저장
	* @Method Name : saveHjspayCalendar
	* @remark
	* @Create Date : 2022. 02. 23
	* @Author      : 권택진
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일       수정자    수정내용
	 *   ------------   ------    ----------
	 *    2022.02.23.   권택진    최초작성
	 *
	*/
    @Override
    public void saveHjspayCalendar(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            // 키값 = "-1" 가상의 키 값으로 신규 처리
            // 그렇지 않으면 신규, 수정, 삭제 처리
            String pk = param.get("HJSPAY_CALENDAR_SEQ_PK").toString();
            if ("-1".equals(pk)) {
            	// 키 값을 null로 처리
            	param.put("HJSPAY_CALENDAR_SEQ_PK", null);
            }
         
            
            // 지각여부 : 사용자가 선택한 코드에 따라 저장 컬럼 분기
            // 지각 : CALENDAR_TYPE = "510", LATE_YN = "Y"
            // 결근 : CALENDAR_TYPE = "520"
            // 조퇴 : CALENDAR_TYPE = "530"
            if (param.containsKey("LATE_CODE")) {
	            String lateCode = param.get("LATE_CODE").toString();
	            
	            if ("".equals(lateCode) || lateCode.isEmpty() || lateCode == null) {
	            	param.put("CALENDAR_TYPE", null);
	            	param.put("LATE_YN", null);
	            } else {
		            if ("510".equals(lateCode)) {
		            	param.put("CALENDAR_TYPE", "510");
		            	param.put("LATE_YN", "Y");
		            } else if ("520".equals(lateCode)) {
		            	param.put("CALENDAR_TYPE", "520");
		            	param.put("LATE_YN", null);
		            } else if ("530".equals(lateCode)) {
		            	param.put("CALENDAR_TYPE", "530");
		            	param.put("LATE_YN", null);
		            }
	            }
            } 
         
            
            // ATTRIBUTE1 : E:SSHR, S:CONCURRENT
            if (param.containsKey("ATTRIBUTE1")) {	
	            String attribute1 = param.get("ATTRIBUTE1").toString();
	            
	            // ATTRIBUTE1 공백, null일 경우 : "E" 값을 할당 
	            if ("".equals(attribute1) || attribute1.isEmpty() || attribute1 == null) {
	            	param.put("ATTRIBUTE1", "E");
	            } 
            }
            
            // 신규, 수정, 삭제 매퍼 호출
            if ("-1".equals(pk) ) {
            	result += generalDao.addUpdate(NAMESPACE + ".insertHjspayCalendar", param);
            } else {
            	if (type == DataSet.ROW_TYPE_INSERTED) { 
	            	result += generalDao.addUpdate(NAMESPACE + ".insertHjspayCalendar", param);
	            } else if (type == DataSet.ROW_TYPE_UPDATED) {
	                result += generalDao.addUpdate(NAMESPACE + ".updateHjspayCalendar", param);
	            } else if (type == DataSet.ROW_TYPE_DELETED) {
	                result += generalDao.addUpdate(NAMESPACE + ".deleteHjspayCalendar", param);
	            }
            }
        }
        
        putDataSetMap(dto, result);
    }
}
