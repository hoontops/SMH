package smh.osm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: OSM00200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00200Service
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
public interface OSM00200Service {

    /**
    * @fn : saveOsmOspetcclaimamount
    * @brief : Claim 기타비용 등록 저장
    * @Method Name : saveOsmOspetcclaimamount
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
    public void saveOsmOspetcclaimamount(UiMapDto dto) throws Exception;


    /**
    * @fn : selectOsmOspetcclaimamountList
    * @brief : Claim 기타비용 등록  조회
    * @Method Name : selectOsmOspetcclaimamountList
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
    public void selectOsmOspetcclaimamountList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectGetAreaidPopupListByOsp
    * @brief : 작업장  조회
    * @Method Name : selectGetAreaidPopupListByOsp
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
    public void selectGetAreaidPopupListByOsp(UiMapDto dto) throws Exception;

    /**
    * @fn : selectGetVendorListByOsp
    * @brief : 협력사  조회
    * @Method Name : selectGetAreaidPopupListByOsp
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
    public void selectGetVendorListByOsp(UiMapDto dto) throws Exception;
    
 }