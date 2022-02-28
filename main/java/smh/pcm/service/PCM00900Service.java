package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM00500Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM005900Service
* @Company: Built1
* @Create Date: 2021.03.16
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 03. 19.  방성혁   최초  생성
 *
 *
*/
public interface PCM00900Service {

    /**
    * @fn : selectWIPListToCancelInput
    * @brief : LOT 취소 대상리스트 조회
    * @Method Name : selectWIPListToCancelInput
    * @remark
    * @Create Date: 2021.03.16
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.16.       방성혁     최초  생성
     *
    */
    public void selectWIPListToCancelInput(UiMapDto dto) throws Exception;
    
    /**
     * @fn : cancelInputLot
     * @brief : LOT 투입 취소
     * @Method Name : cancelInputLot
     * @remark
     * @Create Date: 2021.03.16
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.17.       방성혁     최초  생성
      *
     */
     public void cancelInputLot(UiMapDto dto) throws Exception;    
        
 }