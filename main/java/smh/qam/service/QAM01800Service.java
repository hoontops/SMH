package smh.qam.service;

import java.util.Map;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM01800Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01800Service
* @Company     : Built1
* @Create Date : 2021.04.06
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.06  yanghee.kim    최초  생성
*
*/
public interface QAM01800Service {

    /**
    * @fn          : selectGetInboundDefectLotList
    * @brief       : 인수처리한 불량 Lot을 조회한다.(불량품 원인판정화면)
    * @remark
    * @Create Date : 2021.04.12
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.12  yanghee.kim    최초  생성
    *
    */
    public void selectGetInboundDefectLotList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetDefectLotDefectCodeList
    * @brief       : 인수처리한 불량 Lot별 불량코드를 조회한다.
    * @remark
    * @Create Date : 2021.04.12
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.12  yanghee.kim    최초  생성
    *
    */
    public void selectGetDefectLotDefectCodeList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetDefectCodeOutboundList
    * @brief       : 불량코드별 반출정보를 조회한다.
    * @remark
    * @Create Date : 2021.04.12
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.12  yanghee.kim    최초  생성
    *
    */
    public void selectGetDefectCodeOutboundList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectConfirm
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정
    * @Method Name : saveLotDefectConfirm
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectConfirm(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectHold
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정
    * @Method Name : saveLotDefectHold
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectHold(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectMakeup
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정 - 불량내역조정
    * @Method Name : saveLotDefectMakeup
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectMakeup(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectOutbound
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정 - 불량반출
    * @Method Name : saveLotDefectOutbound
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectOutbound(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : insertErpInterface
    * @brief       : ERP 시스템에 불량확정, 확정취소, 불량폐기 정보 전송
    * @Method Name : insertErpInterface
    * @remark
    * @Create Date : 2021.05.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.17  yanghee.kim    최초  생성
    *
    */
    public void insertErpInterface(Map<String, Object> param, String jobType) throws Exception;
}