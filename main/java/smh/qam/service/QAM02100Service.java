package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM02100Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02100Service
* @Company     : Built1
* @Create Date : 2021.04.21
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.21  yanghee.kim    최초  생성
*
*/
public interface QAM02100Service {

    /**
    * @fn          : selectGetDefectStatusList
    * @brief       : 불량현황 조회
    * @remark
    * @Create Date : 2021.04.21
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.21  yanghee.kim    최초  생성
    *
    */
    public void selectGetDefectStatusList(UiMapDto dto) throws Exception;
}