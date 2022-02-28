package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM00800Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00800Service
* @Company     : Built1
* @Create Date : 2021.04.26
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.26  yanghee.kim    최초  생성
*
*/
public interface QAM00800Service {

    /**
    * @fn          : selectIndependentInspResultList
    * @brief       : 자주검사 결과조회
    * @remark
    * @Create Date : 2021.04.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.26  yanghee.kim    최초  생성
    *
    */
    public void selectIndependentInspResultList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectIndependentInspectionResultDetailList
    * @brief       : 자주검사 결과조회 상세
    * @remark
    * @Create Date : 2021.04.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.26  yanghee.kim    최초  생성
    *
    */
    public void selectIndependentInspResultDetailList(UiMapDto dto) throws Exception;
}