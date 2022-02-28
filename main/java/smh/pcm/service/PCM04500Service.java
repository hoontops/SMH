package smh.pcm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: PCM04500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04500Service
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
public interface PCM04500Service {

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
    public void saveLotSplit(UiMapDto dto) throws Exception;

    /**
    * @fn : selectWIPList
    * @brief : 승인  조회
    * @Method Name : selectWIPList
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
    public void selectWIPList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectGetUomDefinitionList
    * @brief : 사유코드  조회
    * @Method Name : selectGetUomDefinitionList
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
    public void selectGetUomDefinitionList(UiMapDto dto) throws Exception;

 
    public void selectLotInfoBylotID(UiMapDto dto) throws Exception;
    public void GetCurrentRoutingByLot(UiMapDto dto) throws Exception;
    public void SelectReworkRoutingResource(UiMapDto dto) throws Exception;
    public void SelectReworkRoutingResource10002(UiMapDto dto) throws Exception;
    public void selectGetReasonCodeList(UiMapDto dto) throws Exception;

    public void GetProcessPathList(UiMapDto dto) throws Exception;

    public void SelectReworkRouting(UiMapDto dto) throws Exception;
    public void GetProcessPathList10005(UiMapDto dto) throws Exception;
    public void GetProductRoutingPreviousProcessPaths(UiMapDto dto) throws Exception;

    
 }