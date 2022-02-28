package com.nbdf.cmd.cm.cmhm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMHM01100Service.java
* @Package: com.nbdf.cmd.cm.cmhm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMHM01100Service
* @Company: Built1
* @Create Date: 2015. 4. 29. 오후 8:31:15
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 29.        JIn Sung Ha     최초  생성
 *
*/
public interface CMHM01100Service {


    /**
    * @fn : selectHlp
    * @brief : 도움말 조회
    * @Method Name : selectHlp
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:43:05
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    public void selectHlpList(UiMapDto dto) throws Exception;


    /**
    * @fn : selectHlp
    * @brief : 도움말 상세 조회
    * @Method Name : selectHlp
    * @Create Date: 2015. 4. 28. 오후 4:04:09
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void selectHlp(UiMapDto dto) throws Exception;

    /**
    * @fn : insertHlp
    * @brief : 도움말 등록
    * @Method Name : insertHlp
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:43:16
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    public void insertHlp(UiMapDto dto) throws Exception;

    /**
    * @fn : deleteHlp
    * @brief : 도움말 삭제
    * @Method Name : deleteHlp
    * @remark
    * @Create Date: 2015 2015. 3. 30. 오후 3:14:17
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 30.        진성하     최초  생성
     *
    */
    public void deleteHlp(UiMapDto dto);

    /**
    * @fn : updateHlp
    * @brief : 도움말 수정
    * @Method Name : updateHlp
    * @Create Date: 2015. 4. 28. 오후 4:27:17
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void updateHlp(UiMapDto dto) throws Exception;

    /**
    * @fn : selectTreeHlps
    * @brief : 도움말 트리 조회
    * @Method Name : selectTreeHlps
    * @Create Date: 2015. 4. 28. 오후 4:05:02
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void selectHlpTree(UiMapDto dto) throws Exception;

    /**
    * @fn : insertHlpTree
    * @brief : 도움말 트리 추가(경로)
    * @Method Name : insertHlpTree
    * @Create Date: 2015. 4. 29. 오후 6:14:37
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void insertHlpTree(UiMapDto dto) throws Exception;

    /**
    * @fn : updateHlpTree
    * @brief : 도움말 트리 메뉴 수정
    * @Method Name : updateHlpTree
    * @Create Date: 2015. 4. 29. 오후 7:55:50
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void updateHlpTree(UiMapDto dto) throws Exception;


    /**
    * @fn : deleteHlpTree
    * @brief : 도움말 트리 메뉴 삭제
    * @Method Name : deleteHlpTree
    * @Create Date: 2015. 4. 29. 오후 8:31:17
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void deleteHlpTree(UiMapDto dto) throws Exception;


/*    // 도움말 종류 조회(도움말 목록 초기 화면 조회시 onload 이벤트로 호출됨)
    public void selectHelpKnd(UiMapDto dto);

    // 도움말 내용 업데이트


    // 도움말 트리 저장


    // 도움말 삭제
    */
}
