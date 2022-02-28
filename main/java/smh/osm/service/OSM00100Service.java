package smh.osm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: OSM00100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00100Service
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
public interface OSM00100Service {

    /**
    * @fn : saveBasProductquotationsegment
    * @brief : 승인 저장
    * @Method Name : saveBasProductquotationsegment
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
    public void saveBasProductquotationsegment(UiMapDto dto) throws Exception;

    /**
    * @fn : copyBasProductquotationsegment
    * @brief : 복사
    * @Method Name : copyBasProductquotationsegment
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
    public void copyBasProductquotationsegment(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBasProductquotationsegmentList
    * @brief : 승인  조회
    * @Method Name : selectBasProductquotationsegmentList
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
    public void selectBasProductquotationsegmentList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectGetOutsourcedClaimBaseAmountCopy
    * @brief : 복사후  조회
    * @Method Name : selectGetOutsourcedClaimBaseAmountCopy
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
    public void selectGetOutsourcedClaimBaseAmountCopy(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectGetOutsourcedClaimBaseAmount
     * @brief : 환산금액  조회
     * @Method Name : selectGetOutsourcedClaimBaseAmount
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
    public void selectGetOutsourcedClaimBaseAmount(UiMapDto dto) throws Exception;

    /**
    * @fn : selectGetUomDefinitionListByOsp
    * @brief : 화폐단위 조회
    * @Method Name : selectGetUomDefinitionListByOsp
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
    public void selectGetUomDefinitionListByOsp(UiMapDto dto) throws Exception;

    
 }