package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01300Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01300Service
* @Company: Built1
* @Create Date: 2021.03.24
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.  박대호   최초  생성
 *
 *
*/
public interface PCM01300Service {

  
    /**
     * @brief : 투입일 탭 투입율현황 조회 
     * @remark
     * @Create Date: 2021.03.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.24.       박대호     최초  생성
      *
     */
    public void selectInputLotRateByInputDate(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 투입일 탭 SUMMARY 조회 
     * @remark
     * @Create Date: 2021.03.25
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.25.       박대호     최초  생성
      *
     */
    public void selectInputLotRateByInputDateSummaryByLotInputType(UiMapDto dto) throws Exception;
   
    /**
     * @brief : 투입일탭 일자별상세내역 조회 
     * @remark
     * @Create Date: 2021.03.25
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.25.       박대호     최초  생성
      *
     */
    public void selectInputLotRateByInputDateSummaryByProduct(UiMapDto dto) throws Exception;
    /**
     * @brief : 모델별탭 조회 
     * @remark
     * @Create Date: 2021.03.26
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.26.       박대호     최초  생성
      *
     */
    public void selectInputLotRateByProduct(UiMapDto dto) throws Exception;
    /**
     * @brief : 고객사별탭 조회 
     * @remark
     * @Create Date: 2021.03.26
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.26.       박대호     최초  생성
      *
     */
    public void selectInputLotRateByCustomer(UiMapDto dto) throws Exception;
 }