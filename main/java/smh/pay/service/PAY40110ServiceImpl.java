package smh.pay.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @fn : selectRequestAttendanceList
* @brief : 팀원근태현황 리스트 조회
* @Method Name : selectRequestAttendanceList
* @remark
* @Create Date: 2022. 01. 20
* @Author: 유성연
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자       수정내용
 *   ------------   ------    ----------
 *    2022.01.20.    유성연       최초 생성
 *
*/

@Service
public class PAY40110ServiceImpl extends AbstractNbdfService implements PAY40110Service {

    public static final String NAMESPACE = "smh.pay.dao.PAY40110Dao";
    
    @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 
    * @brief (Override method) 연차정보 및 근태신청 현황 조회
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see smh.pay.service.PAY40110Service#selectRequestAttendanceList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectRequestAttendanceList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectYearHoliInfo",param), "output"); //연차정보
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectRequestAttendanceList",param), "output2"); //근태신청현황       
    }
    
    /**
    * @fn 
    * @brief (Override method) 근태신청 현황 상세조회
    * @remark
    * - 1. [근태신청현황 내역] 클릭시 호출
    * @see smh.pay.service.PAY40110Service#selectRequestAttendanceInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectRequestAttendanceInfo(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectRequestAttendanceInfo",param));       
    }

    /**
    * @fn 
    * @brief (Override method) 마감여부체크
    * @remark
    * - 1. [저장] 버튼 클릭시 호출
    * @see smh.pay.service.PAY40110Service#selectCheckCloseYn(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCheckCloseYn(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCheckCloseYn",param));       
    }
    
    /**
    * @fn 
    * @brief (Override method) 날짜간의 일수계산WT
    * @remark
    * - 1. [기간정보] 입력시 호출
    * @see smh.pay.service.PAY40110Service#selectWorkDayCntWt(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectWorkDayCntWt(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectWorkDayCntWt",param));       
    }
    
    /**
    * @fn 
    * @brief (Override method) 날짜간의 일수계산
    * @remark
    * - 1. [기간정보] 입력시 호출
    * @see smh.pay.service.PAY40110Service#selectWorkDayCnt(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectWorkDayCnt(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectWorkDayCnt",param));       
    }    

    /**
    * @fn 
    * @brief (Override method) 날짜간의 일수계산
    * @remark
    * - 1. [기간정보] 입력시 호출
    * @see smh.pay.service.PAY40110Service#selectWorkDayCnt(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectDiffDay(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
		    paramMap.put(entry.getKey(), entry.getValue()); 
		}	
		
  		String startDate = (String) paramMap.get("START_DATE");
  		String startDateTime = (String) paramMap.get("START_DATE_TIME");
  		
  		String endDate = (String) paramMap.get("END_DATE");
  		String endDateTime = (String) paramMap.get("END_DATE_TIME");
  		
  		paramMap.put("TEMP_START_DATE_TIME", startDate); 
  		//시간이 입력되는 근태신청의 경우 일자와 시간을 조합하여 저장
     	if (startDateTime!= null){
     		String tempStartDate = startDate+startDateTime;
      		paramMap.put("TEMP_START_DATE_TIME", tempStartDate);     		
     	}
     	
     	paramMap.put("TEMP_END_DATE_TIME", endDate);
     	if (endDateTime!= null){
     		String tempEndDate = endDate+endDateTime;
     		paramMap.put("TEMP_END_DATE_TIME", tempEndDate);
     	}
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDiffDay",paramMap));       
    }
    
    /**
     * @fn          : saveAttendance
     * @brief       : (Override method) 근태신청 등록/수정/삭제
     * @Method Name : saveAttendance
     * @remark      : 상세설명
     * @see smh.pay.service.PAY40110Service#saveAttendance(com.nbdf.commons.ui.vo.UiMapDto)
     */  
    @Override
    public void saveAttendance(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_INSERTED) {
                 result += insertAttendance(param);
             } else if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateAttendance(param);
             }             
         }

         putDataSetMap(dto, result);
     }
    
     /**
      * @fn          : insertAttendance
      * @brief       : (Override method) 근태신청 등록
      * @Method Name : insertAttendance
      * @remark      : 상세설명
      * @see
      */
    private int insertAttendance(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy		
		for (Map.Entry<String, Object> entry : param.entrySet()) {
		    paramMap.put(entry.getKey(), entry.getValue()); 
		}	
		
 		String startDate = (String) paramMap.get("START_DATE");
 		String startDateTime = (String) paramMap.get("START_DATE_TIME");
 		
 		//시간이 입력되지 않는 근태신청의 경우 시작일자를 넣어줌=> 향후 확인 필요
 		paramMap.put("START_DATE_TIME", startDate);
 		
 		String endDate = (String) paramMap.get("END_DATE");
 		String endDateTime = (String) paramMap.get("END_DATE_TIME"); 		
 		
 		//시간이 입력되지 않는 근태신청의 경우 종료일자를 넣어줌=> 향후 확인 필요
 		paramMap.put("END_DATE_TIME", endDate);
    	
 		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmm");
 		
 		//시간이 입력되는 근태신청의 경우 일자와 시간을 조합하여 저장
    	if (startDateTime!= null){
    		String tempStartDate = startDate+startDateTime;
    		
    		Date dStartDate = dateFormat.parse(tempStartDate);
     		paramMap.put("START_DATE_TIME", dStartDate);     		
    	}
    	
    	if (endDateTime!= null){
    		String tempEndDate = endDate+endDateTime;    		
    		Date dEndDate = dateFormat.parse(tempEndDate);
    		paramMap.put("END_DATE_TIME", dEndDate);
    	}
		
	    //반휴일[130]  경우만 근태일이 중복되어 입력되고, 나머지의 경우 중복 오류
		String calenderType = (String) paramMap.get("CALENDER_TYPE");
		if (!"130".equals(calenderType)) {
			String dayCheck = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateDayChk", paramMap); 
			if ("Y".equals(dayCheck)) {
				throw new BizException("ValidateDuplicateDay", String.format("day = %s", startDate)); //[이미 신청된 일자입니다.]
			}
			
		}
		
	    //기간(시작일자)를 기준으로 해서 연도정보 가져오기=>향후 확인 필요
		String befYear = DateUtil.addDate(Calendar.YEAR, -1, "yyyy", startDate.substring(0,4));
        String curYear = startDate.substring(0,4);
		paramMap.put("FROM_YYYY", befYear);
		paramMap.put("TO_YYYY", curYear);
		
		// test를 위해서 임시 주석 처리, 향후 주석 처리 제거 
//		Map closeMap = generalDao.addSelectOneMap(NAMESPACE + ".selectCheckCloseYn", paramMap); 
//		if (closeMap != null)
//		{
//			String closeFlag = (String) closeMap.get("CLOSE_FLAG");		
//			String year = (String) closeMap.get("APPLY_YYYY");		
//			if ("Y".equals(closeFlag)) {
//				throw new BizException("ValidateAnnualLeaveClosed", String.format("Year = %s", year)); //[2022]년도 연차가 이미 마감되었습니다. 담당자에게 문의하여 주시기 바랍니다.
//			}
//		}
//		else
//		{
//			throw new BizException("ValidateAnnualLeaveClosed", String.format("Year = %s", "2023")); //[2022]년도 연차가 이미 마감되었습니다. 담당자에게 문의하여 주시기 바랍니다.
//		}
		
        return generalDao.addUpdate(NAMESPACE + ".insertAttendance", paramMap);
    }
     
     /**
      * @fn          : updateAttendance
      * @brief       : (Override method) 근태신청 수정
      * @Method Name : updateAttendance
      * @remark      : 상세설명
      * @see
      */
    private int updateAttendance(Map<String, Object> param) throws Exception {
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	 
    	// HashMap Copy
    	for (Map.Entry<String, Object> entry : param.entrySet()) {
    		paramMap.put(entry.getKey(), entry.getValue());
    	}
    	
 		String startDate = (String) paramMap.get("START_DATE");
 		String startDateTime = (String) paramMap.get("START_DATE_TIME");
 		
 		//시간이 입력되지 않는 근태신청의 경우 시작일자를 넣어줌=> 향후 확인 필요
 		paramMap.put("START_DATE_TIME", startDate);
 		
 		String endDate = (String) paramMap.get("END_DATE");
 		String endDateTime = (String) paramMap.get("END_DATE_TIME");
 		
 		//시간이 입력되지 않는 근태신청의 경우 종료일자를 넣어줌=> 향후 확인 필요
 		paramMap.put("END_DATE_TIME", endDate);
    	 
 		//시간이 입력되는 근태신청의 경우 일자와 시간을 조합하여 저장
    	if (startDateTime!= null){
    		String tempStartDate = startDate+startDateTime;
    		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmm");
    		Date dStartDate = dateFormat.parse(tempStartDate);
     		paramMap.put("START_DATE_TIME", dStartDate);     		
    	}
    	
    	if (endDateTime!= null){
    		String tempEndDate = endDate+endDateTime;
    		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmm");
    		Date dEndDate = dateFormat.parse(tempEndDate);
    		paramMap.put("END_DATE_TIME", dEndDate);
    	}
        
	    //반휴일[130]  경우만 근태일이 중복되어 입력되고, 나머지의 경우 중복 오류
		String calenderType = (String) paramMap.get("CALENDER_TYPE");
		if (!"130".equals(calenderType)) {
			String dayCheck = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateDayChk", paramMap); 
			if ("Y".equals(dayCheck)) {
				throw new BizException("ValidateDuplicateDay", String.format("day = %s", startDate)); //[이미 신청된 일자입니다.]
			}			
		}
   	 
 	    String isExsist = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);    	 


//         if (!"Y".equals(isExsist) )
//         {
//             throw new BizException("InValidData001", String.format("documentNo = %s", documentNo));
//         } 
//         
         return generalDao.addUpdate(NAMESPACE + ".updateAttendance", paramMap);
         
     }
     
     
     /**
      * @fn          : saveStatus
      * @brief       : (Override method) 근태신청 행삭제 및 철회 대기 변경
      * @Method Name : saveStatus
      * @remark      : 상세설명
      * @see smh.pay.service.PAY40110Service#saveStatus(com.nbdf.commons.ui.vo.UiMapDto)
      */  
     @Override
     public void saveStatus(UiMapDto dto) throws Exception {
          DataSetMap paramMap = getParametersDataSetMap(dto);
          Map<String, Object> param;

          int result = 0;

          for (int i = 0, n = paramMap.size(); i < n; i++) {
              param = paramMap.get(i);
              int type = getRowType(param);	

              if (type == DataSet.ROW_TYPE_UPDATED) {
                  result += updateStatus(param);
              } else if (type == DataSet.ROW_TYPE_DELETED) {
              	 result += deleteAttendance(param);
              }            
          }

          putDataSetMap(dto, result);
      }
     
      
      /**
       * @fn          : updateStatus
       * @brief       : (Override method) 근태신청 상태 변경
       * @Method Name : updateStatus
       * @remark      : 상세설명
       * @see
       */
      private int updateStatus(Map<String, Object> param) throws Exception {
     	 Map<String, Object> paramMap = new HashMap<String, Object>();

     	 
     	 // HashMap Copy
     	 for (Map.Entry<String, Object> entry : param.entrySet()) {
     		 paramMap.put(entry.getKey(), entry.getValue());
     	 }
     	 

          return generalDao.addUpdate(NAMESPACE + ".updateAttendanceStatus", paramMap);
          
      }
      
      /**
       * @fn          : deleteStatus
       * @brief       : (Override method) 근태신청 삭제
       * @Method Name : deleteStatus
       * @remark      : 상세설명
       * @see
       */
      private int deleteAttendance(Map<String, Object> param) throws Exception{
     	 Map<String, Object> paramMap = new HashMap<String, Object>();
     	 
     	 //HashMap Copy
     	 for (Map.Entry<String, Object> entry : param.entrySet()) {
     		 paramMap.put(entry.getKey(), entry.getValue());
     	 }
     	 
     	 return generalDao.addUpdate(NAMESPACE + ".deleteAttendance", paramMap);
      }
     
     /**
      * @fn          : updateAttendanceStatus
      * @brief       : (Override method) 근태신청 철회
      * @Method Name : updateAttendanceStatus
      * @remark      : 상세설명
      * @see smh.pay.service.PAY40110Service#updateAttendanceStatus(com.nbdf.commons.ui.vo.UiMapDto)
      */  
     @Override
     public void updateAttendanceStatus(UiMapDto dto) throws Exception {
          DataSetMap paramMap = getParametersDataSetMap(dto);
          Map<String, Object> param;

          int result = 0;

          for (int i = 0, n = paramMap.size(); i < n; i++) {
              param = paramMap.get(i);
              int type = getRowType(param);	

              if (type == DataSet.ROW_TYPE_UPDATED) {
                  result += updateStatus(param);              
              }            
          }

          putDataSetMap(dto, result);
      }     
}
