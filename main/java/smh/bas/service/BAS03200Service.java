package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS03200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03200Service
* @Company: Built1
* @Create Date: 2021.2.3
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 3.  방성혁   최초  생성
 *
 *
*/
public interface BAS03200Service {

    /**
    * @fn : selectRoutionRollLossList
    * @brief : 품목 리스트
    * @Method Name : selectRoutionRollLossList
    * @remark
    * @Create Date: 2021.2.4
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.3.       방성혁     최초  생성
     *
    */
    public void selectProcessPathList(UiMapDto dto) throws Exception;
    
    public void selectProductDEFInfo(UiMapDto dto) throws Exception;
    
    public void selectWindowTimeList(UiMapDto dto) throws Exception;
    
    public void selectWindowActionList(UiMapDto dto) throws Exception;
    
    public void selectActionList(UiMapDto dto) throws Exception;
    
    public void select4step(UiMapDto dto) throws Exception;
    
    public void selectStepAll(UiMapDto dto) throws Exception;
    
    public void selectRoutingQTimeProcPopup(UiMapDto dto) throws Exception;
    
    public void saveRoutingWtime(UiMapDto dto) throws Exception;
    
 
 }