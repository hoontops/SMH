package com.nbdf.pes.pe.pelh.service;

import com.nbdf.commons.ui.vo.UiMapDto;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.ui.Model;


/**
* @file: PENC00010Service.java
* @Package: com.nbdf.pes.pe.pelh.service
* @Project name: IFC MES시스템 구축
* @Type name: PENC00010Service
* @Company: Built1
* @Create Date: 2015 2015. 3. 27. 오전 9:38:47
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 27.        JinSungHa     최초  생성
 *
*/
public interface PELH00010Service {

   /**
    *
 * @fn : selectUserInfoList
   * @brief : 로그인 사용자 정보 조회
   * @Method Name : selectUserInfoList
   * @remark
   * @Create Date: 2015 2015. 3. 31. 오전 10:29:09
   * @Author: JinSungHa
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2015. 3. 31.        JinSungHa     최초  생성
    *
    */
    public List<Map<String, Object>> selectUserInfoList(String sessionPortalId, Map<String, Object> paramMap) throws Exception;

    public List<Map<String, Object>> selectUserInfoSSOList(String sessionPortalId, Map<String, Object> paramMap) throws Exception;
    /**
     *
    * @fn : saveMergeSessionInfo
    * @brief : 공통 세션 테이블에 정보갱신
    * @Method Name : saveMergeSessionInfo
    * @remark
    * @Create Date: 2015 2015. 4. 1. 오후 3:24:39
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 1.        JinSungHa     최초  생성
     *
     */
    public int saveMergeSessionInfo(Map<String, Object> dto, HttpServletRequest request) throws Exception;

    /**
     *
    * @fn : selectSessionInfo
    * @brief : 세션테이블을 조회하여 동일한 사용자가 접속중인지 체크
    * @Method Name : selectSessionInfo
    * @remark
    * @Create Date: 2015 2015. 4. 1. 오후 4:55:45
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 1.        JinSungHa     최초  생성
     *
     */
    public String[] selectIsExistDuplicatedSession(Map<String, Object> dto) throws Exception;


    /**
     *
    * @fn : saveCheckLogin
    * @brief : 로그인 진행
    * @Method Name : saveCheckLogin
    * @remark
    * @Create Date: 2015 2015. 4. 6. 오후 8:14:54
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 6.        JinSungHa     최초  생성
     *
     */
    public Model saveCheckLogin(Model model, Map<String, Object> userLoginMap, boolean isPortal, HttpServletRequest request, HttpServletResponse response) throws Exception;

    public Model saveCheckLoginSSO(Model model, Map<String, Object> userLoginMap, boolean isPortal, HttpServletRequest request, HttpServletResponse response) throws Exception;

    public Model saveReLogin(Model model, UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception;

    /**
    *
   * @fn : updateLgnLog
   * @brief : 로그아웃시 로그아웃시간 업데이트
   * @Method Name : updateLgnLog
   * @remark
   * @Create Date: 2015 2015. 4. 1. 오전 10:01:32
   * @Author: JinSungHa
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2015. 4. 1.        JinSungHa     최초  생성
    *
    */
   public int updateLgnLog(Map<String, String> dto) throws Exception;

    /**
     *
    * @fn : updateSessionLogout
    * @brief : 로그아웃 세션정보 수정
    * @Method Name : updateSessionLogout
    * @remark
    * @Create Date: 2015 2015. 4. 6. 오후 8:16:51
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 6.        JinSungHa     최초  생성
     *
     */
    public int updateSessionLogout(Map<String, String> sessionInfo) throws Exception;


    /**
     *
    * @fn : updateUserPw
    * @brief : 비밀번호 변경
    * @Method Name : updateUserPw
    * @remark
    * @Create Date: 2015 2015. 4. 18. 오후 6:24:57
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 18.        JinSungHa     최초  생성
     *
     */
    public int updateChangeUserPw(Map<String, Object> dto) throws Exception;

    /**
     *
    * @fn : updateResetUserPw
    * @brief : 비밀번호 초기화 변경
    * @Method Name : updateResetUserPw
    * @remark
    * @Create Date: 2015 2015. 4. 20. 오후 10:31:13
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 20.        JinSungHa     최초  생성
     *
     */
    public int updateResetUserPw(Map<String, Object> dto) throws Exception;


    /**
     * 
    * @fn : nexaLogout
    * @brief : 업무화면 로그아웃 처리 
    * @Method Name : nexaLogout
    * @Create Date: 2015 2015. 9. 14. 오후 4:52:40 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    public void nexaLogout(UiMapDto dto) throws Exception;


}
