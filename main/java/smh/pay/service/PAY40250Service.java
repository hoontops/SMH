package smh.pay.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
 * @file        : PAY40250Service.java
 * @Project name: SM상선 myHR 고도화
 * @Type name   : PAY40250Service
 * @Create Date : 2022.02.23
 * @Author      : 권택진
  *
  * << 개정이력(Modification Information) >>
  *
  *   수정일        수정자   수정내용
  *   ------------  ------   ----------
  *   2022.02.23    권택진   최초작성
  *
 */
public interface PAY40250Service {
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
    public void selectHjspayCalendarList(UiMapDto dto) throws Exception;
    
    
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
    public void saveHjspayCalendar(UiMapDto dto) throws Exception;

}
