package com.nbdf.cmd.cm.cmcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: CMCM01100Service.java
* @Package: com.nbdf.cmd.cm.cmcm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMCM01100Service
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
public interface CMCM01100Service {

    /**
    * @fn : selectGrpCdList
    * @brief : 그룹 코드 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectGrpCdList
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
    public void selectGrpCdList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectCdList
    * @brief : 상세코드를 조회
    * @Method Name : selectCdList
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:33:03
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
    public void selectCdList(UiMapDto dto) throws Exception;

    public void selectCdListExcel(UiMapDto dto) throws Exception;
    /**
     * @fn : selectGrpCmCdList
     * @brief : (엑셀다운로드용)그룹코드와 상세코드 전체를 조회
     *              Multi 그리드 + Dataset 조회
     * @Method Name : selectGrpCmCdList
     * @remark
     * @Create Date: 2015 2015. 3. 10. 오후 9:13:35
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
    public void selectGrpCmCdList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveGrpCd
    * @brief :  그룹코드 저장(등록,삭제,갱신)
    * @Method Name : saveGrpCd
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
    public void saveGrpCd(UiMapDto dto) throws Exception;

    /**
    * @fn : saveCd
    * @brief :  상세코드 저장(등록,삭제,갱신)
    * @Method Name : saveCd
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:32:27
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
    public void saveCd(UiMapDto dto) throws Exception;

    /**
    * @fn : selectCmCode
    * @brief : 넥사크로에서 공통으로 사용하기 위해 그룹코드와 상세코드 전체를 조회
    * @Method Name : selectCmCode
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:37:49
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
    public void selectCmCode(UiMapDto dto) throws Exception;

    /**
    * @fn : selectExcelDn
    * @brief : 엑셀다운 버튼 클릭시
    * @Method Name : selectExcelDn
    * @Create Date: 2015. 5. 9. 오후 3:52:05
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void selectExcelDn(UiMapDto dto) throws Exception;

    /**
     * @fn : selectServerDbToday
     * @brief :  DB서버시간 가져오기 (YYYYMMDD)
     * @Method Name : selectServerDbToday
     * @Create Date: 2015. 10. 28.
     * @Author: 진성하
     * @param: UiMapDto dto
     * @return: void
     * @throws : Exception
     */
     public void selectServerDbToday(UiMapDto dto) throws Exception;

     /**
      * @fn : selectServerDbTime
      * @brief :  DB서버시간 가져오기 (YYYYMMDDHH24MISS)
      * @Method Name : selectServerDbTime
      * @Create Date: 2015. 10. 28.
      * @Author: 진성하
      * @param: UiMapDto dto
      * @return: void
      * @throws : Exception
      */
      public void selectServerDbTime(UiMapDto dto) throws Exception;

 }