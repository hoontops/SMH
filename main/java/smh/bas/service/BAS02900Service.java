package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS02900Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02900Service
* @Company: Built1
* @Create Date: 2021.02.05
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.02.05.   김애리   최초  생성
 *
 *
*/
public interface BAS02900Service {

    /**
    * @brief : BOM 정보 조회
    * @Method Name : selectBasBOMList
    * @remark
    * @Create Date: 2021.02.05
    * @Author: 김애리
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.02.05.       김애리     최초  생성
     *
    */
    public void selectBasBOMList(UiMapDto dto) throws Exception;

    public void selectProductDEFInfo(UiMapDto dto) throws Exception;
    
    public void selectOpeRationResource(UiMapDto dto) throws Exception;
    
    public void selectResource(UiMapDto dto) throws Exception;
    
    public void selectResourcePopup(UiMapDto dto) throws Exception;
    
    public void selectDurableList(UiMapDto dto) throws Exception;
    
    public void selectDurablePopupList(UiMapDto dto) throws Exception;
    
    public void saveBillOfResourceList(UiMapDto dto) throws Exception;
    
    public void saveBillOfDurableList(UiMapDto dto) throws Exception;
 
 }