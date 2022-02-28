package smh.osm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: OSM00400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00400Service
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
public interface OSM00400Service {

    /**
    * @fn : saveOsmOspclaim
    * @brief : Claim 대상 감면 관리 저장
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
    * @brief : Claim 대상 감면 관리  조회
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

     public void selectGetFactoryListByCsm(UiMapDto dto) throws Exception;
    
 }