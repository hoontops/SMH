package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM02700Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM02700Service
* @Company: Built1
* @Create Date: 2021.05.12
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.12.   권혜영   최초  생성
 *
 *
*/
public interface QAM02700Service {

    /**
    * @fn : selectQamWorkDefectPriceStatusList
    * @brief : 재공불량 금액현황 정보 조회
    * @Method Name : selectQamWorkDefectPriceStatusList
    * @remark
    * @Create Date: 2021.4.5
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.5.       권혜영     최초  생성
     *
    */
    public void selectQamWorkDefectPriceStatusList(UiMapDto dto) throws Exception;

 }