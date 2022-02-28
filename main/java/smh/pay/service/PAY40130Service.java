package smh.pay.service;


import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface PAY40130Service {
	/**
	* @fn : selectPayAttendanceStatusList
	* @brief : 출근현황 리스트 조회
	* @Method Name : selectPayAttendanceStatusList
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
    public void selectPayCalendarList(UiMapDto dto) throws Exception;
    
    public void saveCalendarList(UiMapDto dto) throws Exception;

}
