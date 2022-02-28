package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM02600Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02600Service
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
public interface QAM02600Service {

    /**
    * @fn          : selectDefectStatusByDefectList
    * @brief       : 불량별 현황 조회
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
	public void selectDefectStatusByDefectList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectStatusByProductList
    * @brief       : 불량별 현황>>품목별 현황(팝업) 조회
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
	public void selectDefectStatusByProductList(UiMapDto dto) throws Exception;
}