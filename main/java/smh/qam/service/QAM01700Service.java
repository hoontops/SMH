package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM01700Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01700Service
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
public interface QAM01700Service {

    /**
    * @fn          : selectGetDefectLotList
    * @brief       : 불량 LOT 조회
    * @remark
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
    public void selectGetDefectLotList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetInboundDefectLotList
    * @brief       : 인수처리한 불량 LOT 조회
    * @remark
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
    public void selectGetInboundDefectLotList(UiMapDto dto) throws Exception;


    /**
    * @fn          : selectGetDefectLotDefectCodeInfo
    * @brief       : LOT별 불량
    * @remark
    * @Create Date : 2021.04.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.07  yanghee.kim    최초  생성
    *
    */
    public void selectGetDefectLotDefectCodeInfo(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetInbountDefectLotStateList
    * @brief       : LOT 상태확인
    * @remark
    * @Create Date : 2021.04.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.07  yanghee.kim    최초  생성
    *
    */
    public void selectGetInbountDefectLotStateList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectInbound
    * @brief       : 불량품 인수
    * @remark
    * @Create Date : 2021.04.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.07  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectInbound(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectInboundCancel
    * @brief       : 불량품 인수취소
    * @remark
    * @Create Date : 2021.04.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.07  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectInboundCancel(UiMapDto dto) throws Exception;
}