package smh.pay.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;


/**
* @file: PAY40210ServiceImpl.java
* @Package: smh.pay.service
* @Project name: 
* @Type name: PAY40210ServiceImpl
* @Company: Built1
* @Create Date: 2022.2.14
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 14.   박대호     최초  생성
*/

@Service
public class PAY40210ServiceImpl extends AbstractNbdfService implements PAY40210Service {

    public static final String NAMESPACE = "smh.pay.dao.PAY40210Dao";
    
    @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 
    * @brief (Override method) 근태 승인내역 조회
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see smh.pay.service.PAY40210Service#selectAttendanceApproveList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectAttendanceApproveList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAttendanceApproveList",param)); //연차정보
    }
    
    /**
     * @fn 
     * @brief (Override method) 근태상세 승인
     * @remark
     * - 1. [승인] 버튼 클릭시 호출
     * @see smh.pay.service.PAY40210Service#SaveAttendanceApprove(com.nbdf.commons.ui.vo.UiMapDto)
     */
     public void saveAttendanceApprove(UiMapDto dto) {
         Map<String, Object> param = getParametersMap(dto);
         putDataSetMap(dto, generalDao.addSelectOneMap(NAMESPACE+".saveAttendanceApprove",param));
     }
     /**
      * @fn 
      * @brief (Override method) 근태 대리신청 성명조회
      * @remark
      * @see smh.pay.service.PAY40210Service#selectEmployeeList(com.nbdf.commons.ui.vo.UiMapDto)
      */
      public void selectEmployeeList(UiMapDto dto) {
          Map<String, Object> param = getParametersMap(dto);
          putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectEmployeeList",param));
      }
      /**
       * @fn 
       * @brief (Override method) 근태상세 반려
       * @remark
       * - 1. [반려] 버튼 클릭시 호출
       * @see smh.pay.service.PAY40210Service#saveAttendanceApproveReturn(com.nbdf.commons.ui.vo.UiMapDto)
       */
       public void saveAttendanceApproveReturn(UiMapDto dto) {
           Map<String, Object> param = getParametersMap(dto);
           putDataSetMap(dto, generalDao.addSelectOneMap(NAMESPACE+".saveAttendanceApproveReturn",param));
       }
      
       /**
        * @fn 
        * @brief (Override method) 근태목록 승인 
        * @remark
        * - 1. [승인] 버튼 클릭시 호출
        * @see smh.pay.service.PAY40210Service#saveAttendanceApproveList(com.nbdf.commons.ui.vo.UiMapDto)
        */
        public void saveAttendanceApproveList(UiMapDto dto) {
        	
        	 DataSetMap paramMapList = getParametersDataSetMap(dto, "ds_attendanceApproveList");
        	 Map<String, Object> param;
        	 
             for (int i = 0; i < paramMapList.size(); i++) {
                 param = paramMapList.get(i);
                 if(param.get("CHK").equals("1")) {
                	 putDataSetMap(dto, generalDao.addSelectOneMap(NAMESPACE+".saveAttendanceApprove",param));
                 }
             }
        }
        /**
         * @fn 
         * @brief (Override method) 근태목록 반려 
         * @remark
         * - 1. [반려] 버튼 클릭시 호출
         * @see smh.pay.service.PAY40210Service#saveAttendanceApproveReturnList(com.nbdf.commons.ui.vo.UiMapDto)
         */
         public void saveAttendanceApproveReturnList(UiMapDto dto) {
         	
         	 DataSetMap paramMapList = getParametersDataSetMap(dto, "ds_attendanceApproveList");
         	 Map<String, Object> param;
         	 
              for (int i = 0; i < paramMapList.size(); i++) {
                  param = paramMapList.get(i);
                  if(param.get("CHK").equals("1")) {
                	  putDataSetMap(dto, generalDao.addSelectOneMap(NAMESPACE+".saveAttendanceApproveReturn",param));
                  }
              }
         }
         /**
          * @fn 
          * @brief (Override method) 근태 대리신청 저장
          * @remark
          * - 1. [저장] 버튼 클릭시 호출
          * @see smh.pay.service.PAY40210Service#saveEmployee(com.nbdf.commons.ui.vo.UiMapDto)
          */
          public void saveEmployee(UiMapDto dto) {
              Map<String, Object> param = getParametersMap(dto);
              putDataSetMap(dto, generalDao.addSelectOneMap(NAMESPACE+".saveEmployee",param));
          }
         
}
