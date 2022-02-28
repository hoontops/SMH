package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM01000Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01000Service
* @Company     : Built1
* @Create Date : 2021.05.03
* @Author      : 권혜영
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.03  권혜영    최초  생성
*
*/
public interface QAM01000Service {

    /**
    * @fn          : selectFinalInspectionResultList
    * @brief       : 최종검사 결과조회
    * @remark
    * @Create Date : 2021.05.03
    * @Author      : 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.03  권혜영    최초  생성
    *
    */
    public void selectFinalInspectionResultList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectIndependentInspectionResultDetailList
    * @brief       : 최종검사 결과조회 상세
    * @remark
    * @Create Date : 2021.05.03
    * @Author      : 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.03  권혜영    최초  생성
    *
    */
    public void selectFinalInspectionResultDetailList(UiMapDto dto) throws Exception;
}