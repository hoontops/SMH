package com.nbdf.cmd.cm.pesp.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: pesp01200Service.java
* @Package: com.nbdf.cmd.cm.pesp.service
* @Project name: IFC MES시스템 구축
* @Type name: pesp01200Service
* @Company: Built1
* @Create Date: 2015 2015. 4. 12. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface PESP01200Service {

    /**
    * @fn : selectPesHelpDeskList
    * @brief : 헬프데스크 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectPesHelpDeskList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void selectPesHelpDeskList(UiMapDto dto) throws Exception;


    /**
    * @fn : savePesHelpDesk
    * @brief :  헬프데스크 저장(등록,삭제,갱신)
    * @Method Name : savePesHelpDesk
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 6.     진성하     최초  생성
     *
    */
    public void savePesHelpDesk(UiMapDto dto) throws Exception;


    /**
    * @fn : selectPesPortalUsersList
    * @brief : 담당자 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectPesPortalUsersList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void selectPesPortalUsersList(UiMapDto dto) throws Exception;

 }