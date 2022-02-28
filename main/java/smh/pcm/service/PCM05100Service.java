package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05100Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05100Service
* @Company: Built1
* @Create Date: 2021.04.05
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.  박대호   최초  생성
 *
 *
*/
public interface PCM05100Service {

  
    /**
     * @brief : 고객사 조회 
     * @remark
     * @Create Date: 2021.04.05
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.05.       박대호     최초  생성
      *
     */
    public void selectProductDefVersion(UiMapDto dto) throws Exception;
    /**
     * @brief : 품목라우팅 목록 
     * @remark
     * @Create Date: 2021.04.05
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.05.       박대호     최초  생성
      *
     */
    public void selectProductDetailRoutingList(UiMapDto dto) throws Exception;
    /**
     * @brief :  자재 데이터 조회
     * @remark
     * @Create Date: 2021.04.05
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.05.       박대호     최초  생성
      *
     */
    public void selectProductDetailConsumableList(UiMapDto dto) throws Exception;
    /**
     * @brief :  연관 공정 현황
     * @remark
     * @Create Date: 2021.04.05
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.05.       박대호     최초  생성
      *
     */
    public void selectProductDetailRelatedSegment(UiMapDto dto) throws Exception;
    /**
     * @brief :  공정별 치공구 사용이력
     * @remark
     * @Create Date: 2021.04.06
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.06.       박대호     최초  생성
      *
     */
    public void selectProductDetailDurableList(UiMapDto dto) throws Exception;
    /**
     * @brief :  공정별 설비 사용이력
     * @remark
     * @Create Date: 2021.04.06
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.06.       박대호     최초  생성
      *
     */
    public void selectProductDetailEquipmentList(UiMapDto dto) throws Exception;
    /**
     * @brief :  불량 이력
     * @remark
     * @Create Date: 2021.04.06
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.06.       박대호     최초  생성
      *
     */
    public void selectProductDetailDefectList(UiMapDto dto) throws Exception;
    /**
     * @brief :  재공현황
     * @remark
     * @Create Date: 2021.04.06
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.06.       박대호     최초  생성
      *
     */
    public void selectWIPListCommon(UiMapDto dto) throws Exception;
    /**
     * @brief :  공정실적
     * @remark
     * @Create Date: 2021.04.06
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.06.       박대호     최초  생성
      *
     */
    public void selectProductDetailWorkResult(UiMapDto dto) throws Exception;
    
 }