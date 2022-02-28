package smh.pay.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface PAY40240Service {
	/**
	* @fn          : selectPayAttendanceStatusList
	* @brief       : 팀원근태현황 리스트 조회
	* @Method Name : selectPayAttendanceStatusList
	* @remark
	* @Create Date : 2022. 01. 20
	* @Author      : 유성연
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일       수정자    수정내용
	 *   ------------   ------    ----------
	 *    2022.01.20.   유성연    최초 생성
	 *
	*/
    public void selectPayAttendanceStatusList(UiMapDto dto) throws Exception;

}
