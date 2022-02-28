package smh.osm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: OSM00300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00300Service
* @Company: Built1
* @Create Date: 2021. 3. 1. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface OSM00300Service {

    /**
    * @fn : saveOsmOspclaim
    * @brief : Claim 대상 마감월 등록 저장
    * @Method Name : saveOsmOspclaim
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void saveOsmOspclaim(UiMapDto dto) throws Exception;


    /**
    * @fn : selectOsmOspclaimList
    * @brief : Claim 대상 마감월 등록  조회
    * @Method Name : selectOsmOspclaimList
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectOsmOspclaimList(UiMapDto dto) throws Exception;

    /**
     * @fn : saveCloseProcess
     * @brief : Claim 기간 저장
     * @Method Name : saveCloseProcess
     * @remark
     * @Create Date: 2021. 3. 6. 오후 3:33:03
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 6.     진성하     최초  생성
      *
     */
     public void saveCloseProcess(UiMapDto dto) throws Exception;
    
   
    /**
     * @fn : saveBasPeriod
     * @brief : Claim 기간 저장
     * @Method Name : saveBasPeriod
     * @remark
     * @Create Date: 2021. 3. 6. 오후 3:33:03
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 6.     진성하     최초  생성
      *
     */
     public void saveBasPeriod(UiMapDto dto) throws Exception;

     /**
    * @fn : selectBasPeriodList
    * @brief : Claim 기간 조회
    * @Method Name : selectBasPeriodList
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectBasPeriodList(UiMapDto dto) throws Exception;

    /**
   * @fn : selectGetFactoryListByCsm
   * @brief : 공장
   * @Method Name : selectGetFactoryListByCsm
   * @remark
   * @Create Date: 2021. 3. 6. 오후 3:33:03
   * @Author: 진성하
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021. 3. 6.     진성하     최초  생성
    *
   */
    public void selectGetFactoryListByCsm(UiMapDto dto) throws Exception;
    
    
    /**
     * @fn : selectChkPeriodState
     * @brief : Claim 비용 마감 - 조회시 메인 상단 마감년월 값 있는 경우 마감 상태 재조회
     * @Method Name : selectChkPeriodState
     * @remark
     * @Create Date: 2021. 07. 01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 07. 01.     김진현        최초  생성
      *
     */
    public void selectChkPeriodState(UiMapDto dto) throws Exception;
    
    
 }