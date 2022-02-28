package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS03300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03300Service
* @Company: Built1
* @Create Date: 2021.2.3
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 3.  김애리   최초  생성
 *
 *
*/
public interface BAS03300Service {

    /**
    * @fn : selectProcessDefPopup
    * @brief : 
    * @Method Name : selectProcessDefPopup
    * @remark
    * @Create Date: 2021.2.4
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.3.       김애리     최초  생성
     *
    */
    public void selectProcessDefPopup(UiMapDto dto) throws Exception;
    
    public void selectProcessPathList(UiMapDto dto) throws Exception;
    
    public void selectWindowTimeList(UiMapDto dto) throws Exception;
    
    public void selectWindowActionList(UiMapDto dto) throws Exception;
    
    public void selectActionList(UiMapDto dto) throws Exception;
    
    public void select4step(UiMapDto dto) throws Exception;
    
    public void selectStepAll(UiMapDto dto) throws Exception;
    
    public void selectProductDefinitionListPopup(UiMapDto dto) throws Exception;
    
    public void saveRoutingWtime(UiMapDto dto) throws Exception;
    
 }