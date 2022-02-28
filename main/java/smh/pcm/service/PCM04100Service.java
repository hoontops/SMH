package smh.pcm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: PCM04100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04100Service
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
public interface PCM04100Service {

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
    public void savePcmLothold(UiMapDto dto) throws Exception;

    /**
    * @fn : selectWIPListCommon
    * @brief : 승인  조회
    * @Method Name : selectWIPListCommon
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
    public void selectWIPListCommon(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBasReasonCodeClassList
    * @brief : 사유코드  조회
    * @Method Name : selectBasReasonCodeClassList
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
    public void selectBasReasonCodeClassList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBasReasonCodeList
    * @brief : ReasonCode 조회
    * @Method Name : selectBasReasonCodeList
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
    public void selectBasReasonCodeList(UiMapDto dto) throws Exception;

    public boolean isAreaInAuthority(String areaId, boolean isModify, Map<String, Object> param) throws Exception;


    
 }