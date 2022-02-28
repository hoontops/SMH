package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: PCM04200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04200Service
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
public interface PCM04200Service {

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
    public void saveReleaseLotHold(UiMapDto dto) throws Exception;

    /**
    * @fn : selectLotHoldList
    * @brief : 승인  조회
    * @Method Name : selectLotHoldList
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
    public void selectLotHoldList(UiMapDto dto) throws Exception;

 

    
 }