package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM02500Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02500Service
* @Company     : Built1
* @Create Date : 2021.06.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.24  yanghee.kim    최초  생성
*
*/
public interface QAM02500Service {

    /**
    * @fn          : selectYieldRateByDayList
    * @brief       : 일별 수율현황 : 일별 수율 조회
    * @remark
    * @Create Date : 2021.06.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.24  yanghee.kim    최초  생성
    *
    */
	public void selectYieldRateByDayList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectYieldRateWorstByDayList
    * @brief       : 일별 수율현황 : 일별 Worst
    * @remark
    * @Create Date : 2021.06.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.24  yanghee.kim    최초  생성
    *
    */
	public void selectYieldRateWorstByDayList(UiMapDto dto) throws Exception;
}