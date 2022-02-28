package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM01900Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01900Service
* @Company     : Built1
* @Create Date : 2021.04.19
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.19  yanghee.kim    최초  생성
*
*/
public interface QAM01900Service {

    /**
    * @fn          : selectLotDefectCodeList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 불량LOT
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    public void selectLotDefectCodeList(UiMapDto dto) throws Exception;


    /**
    * @fn          : selectProductRoutingPreviousProcessPathsList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 라우팅
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    public void selectProductRoutingPreviousProcessPathsList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectIsAllQtyDefectLot
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 해당 Lot의 취소수량을 받아와 완불처리 됬는지 판별
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    public void selectIsAllQtyDefectLot(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectTotalLotDefectInfo
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 해당 Lot의 불량 총수량
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    public void selectTotalLotDefectInfo(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectCurrentRoutingByLotList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 > 라우팅선택 > 재작업 후 공정
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    public void selectCurrentRoutingByLotList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectTransitAreaList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 > 라우팅선택 > 재작업 후 공정
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    public void selectTransitAreaList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectCancelHistoryList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 내역조회
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    public void selectDefectCancelHistoryList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectCancelReworkRoutingList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 내역조회 > 공정순서
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    public void selectDefectCancelReworkRoutingList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectReworkRoutingList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량내역 > 라우팅선택 > 재작업 라우팅
    * @remark
    * @Create Date : 2021.04.25
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.25  yanghee.kim    최초  생성
    *
    */
    public void selectReworkRoutingList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProcessPathList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량내역 > 라우팅선택 > 재작업 라우팅
    * @remark
    * @Create Date : 2021.04.25
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.25  yanghee.kim    최초  생성
    *
    */
    public void selectProcessPathList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLotDefectCancel
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소
    * @Method Name : saveLotDefectCancel
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    public void saveLotDefectCancel(UiMapDto dto) throws Exception;
}