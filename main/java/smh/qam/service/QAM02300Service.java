package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM02300Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02300Service
* @Company     : Built1
* @Create Date : 2021.06.01
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.01  yanghee.kim    최초  생성
*
*/
public interface QAM02300Service {

    /**
    * @fn          : selectYieldRateByLOTList
    * @brief       : LOT별 수율현황 : LOT별 수율 조회
    * @remark
    * @Create Date : 2021.06.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.01  yanghee.kim    최초  생성
    *
    */
	public void selectYieldRateByLOTList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectStatusByLOTList
    * @brief       : LOT별 수율현황 : LOT별 불량현황
    * @remark
    * @Create Date : 2021.06.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.01  yanghee.kim    최초  생성
    *
    */
	public void selectDefectStatusByLOTList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectDetailByLOTList
    * @brief       : LOT별 수율현황 : 불량 세부
    * @remark
    * @Create Date : 2021.06.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.01  yanghee.kim    최초  생성
    *
    */
	public void selectDefectDetailByLOTList(UiMapDto dto) throws Exception;
}