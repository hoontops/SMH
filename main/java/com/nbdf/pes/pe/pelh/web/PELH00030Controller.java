package com.nbdf.pes.pe.pelh.web;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.pes.pe.pelh.service.PELH00010Service;

import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.View;

import com.fasterxml.jackson.databind.ObjectMapper;


/**
* @file: PENC00010Controller.java
* @Package: com.nbdf.pes.pe.pelh.web
* @Project name: IFC MES시스템 구축
* @Type name: PENC00010Controller
* @Company: Built1
* @Create Date: 2015 2015. 4. 2. 오후 2:44:41
* @Author: JinSungHa
* @File Version: v1.0
* @info 업무단에서 단독으로 사용하게 될 로그인
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 2.        JinSungHa     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/smh/")
public class PELH00030Controller extends AbstractWebController {


    @Autowired
    private PELH00010Service pelh00010Service;

    private final static String DEFAULT_VIEW_FOLDER = "pesmodule/login/";       //업무단 로그인 패키지(webapp/WEB-INF/생략됨)

    @Value("#{commonsProp['env.server']?:local}")
    private String envServer;  //서버종류(local,dev,real)

    /**
     *
    * @fn : login
    * @brief : 업무단 로그인 페이지로 이동
    * @Method Name : login
    * @remark
    * @Create Date: 2015 2015. 4. 2. 오후 2:45:08
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 2.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "login.scr")
    public String login(HttpServletRequest request, Model model) throws Exception {

        // sessionInterceptor에서 로그인으로 forward된 경우 체크
        String msg = ObjectUtil.toStrTrim(request.getAttribute("msg"));
        String nextUri = ObjectUtil.toStrTrim(request.getAttribute("nextUri"));

        if(StringUtils.isEmpty(nextUri)){
            nextUri = request.getParameter("nextUri");
        }

        model.addAttribute("nextUri", nextUri);

        if (!StringUtils.isEmpty(msg)) {
            logger.debug("\n from interceptor msg : " + msg);
            model.addAttribute("code", "IMPELH0000");   //인터셉터의 메세지를 띄워주는 코드
            model.addAttribute("msg", msg);
        }

        // 로그인중이면 main으로 redirect
        Map<String,String> sessionInfo = SessionManager.getInstance().getSessionInfo(request);
        String gv_userId = sessionInfo.get(ContextConstant.SESSION_USER_ID);
        logger.debug("gv_userId : " + gv_userId);

        if (!StringUtils.isEmpty(gv_userId) && StringUtils.isEmpty(msg)) {
            nextUri = StringUtils.isEmpty(nextUri)?"/smh/logout.scr":nextUri;   //다음 페이지가 비었다면 비정상 접근으로 로그아웃후 재시작
            return "redirect:" + nextUri;
        }

        logger.debug("NORMAL LOGIN PAGE MOVE!");
        return DEFAULT_VIEW_FOLDER + "PELH00030M";
    }

    /**
     *
    * @fn : loginPost
    * @brief : 업무단 로그인 진행
    * @Method Name : loginPost
    * @remark
    * @Create Date: 2015 2015. 4. 21. 오후 7:12:59
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 21.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "loginPost.scr")
    public String loginPost(HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
        boolean isPortal = false;    //포털 로그인인지 여부(false 는 업무단 로그인)

        String nextUri = ObjectUtil.toStrTrim(request.getParameter("nextUri"));   //로그인 후 이동할 업무페이지
        String reqLoginId = ObjectUtil.toStrTrim(request.getParameter("loginId"));
        String reqLoginPwOrg = ObjectUtil.toStrTrim(request.getParameter("loginPw"));
        //String reqLoginPw = ObjectUtil.toStrTrim(request.getParameter("loginPw"));
        String reqLoginPw = ObjectUtil.encodeSHA256(reqLoginPwOrg);		//jsh 20180626 sha256암호화 적용
        String reqUserId = ObjectUtil.toStrTrim(request.getParameter("userId"));   
        String kickBeforeUser = ObjectUtil.toStrTrim(request.getParameter("kickBeforeUser"));   //기존 사용자의 접속을 종료하고 로그인 할 여부
        logger.debug("nextUri : " + nextUri);

        // 세션 정보
        SessionManager sessionManager = SessionManager.getInstance();
        Map<String,String> sessionInfo = sessionManager.getSessionInfo(request);
        String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
      //세션의 userID나 로그인시 계정ID 가 없는 경우(사용자가 직접 해당 url을 치고 들어오는 경우)
        if (StringUtils.isEmpty(sessionUserId) && StringUtils.isEmpty(reqLoginId) && StringUtils.isEmpty(reqUserId)) {
            return DEFAULT_VIEW_FOLDER + "PELH00030M";
        }

        Map<String, Object> userLoginMap = new ConcurrentHashMap<String, Object>();   //사용자 로그인용 MAP
        userLoginMap.put("USER_ACNT", reqLoginId);
        userLoginMap.put("USER_PWD", reqLoginPw);
        userLoginMap.put("USER_PWD_ORG", reqLoginPwOrg);
        userLoginMap.put("USER_ID", reqUserId);
        userLoginMap.put("kickBeforeUser", kickBeforeUser);

        Model rtnModel = pelh00010Service.saveCheckLogin(model, userLoginMap, isPortal, request, response);

        boolean isError = rtnModel.containsAttribute("code");

        logger.debug("isError : " + isError);
        if(isError){
            model.addAttribute("nextUri", nextUri);
            return DEFAULT_VIEW_FOLDER + "PELH00030M";
        }else{
            return "redirect:"+nextUri;
        }

    }

    @RequestMapping(value = "SSOlogin.scr")
    public String loginSSO(HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
        boolean isPortal = false;    //포털 로그인인지 여부(false 는 업무단 로그인)

        String nextUri = "/smh/smh/index.html";   //로그인 후 이동할 업무페이지
        String reqLoginId = ObjectUtil.decodeString(ObjectUtil.toStrTrim(request.getParameter("loginId")));	//SSOid 복호화
        //String reqLoginId = ObjectUtil.toStrTrim(request.getParameter("loginId"));	//SSOid 복호화
        if(reqLoginId != "" && reqLoginId.length()>3) reqLoginId = reqLoginId.substring(3);	//"dda"+loginid이므로 4번째 자리부터 적용
        
        //String reqLoginPw = ObjectUtil.toStrTrim(request.getParameter("loginPw"));
        //reqLoginPw = ObjectUtil.encodeSHA256(reqLoginPw);		//jsh 20180626 sha256암호화 적용
        String kickBeforeUser = ObjectUtil.toStrTrim(request.getParameter("kickBeforeUser"));   //기존 사용자의 접속을 종료하고 로그인 할 여부

        logger.debug("nextUri : " + nextUri);

        // 세션 정보
        SessionManager sessionManager = SessionManager.getInstance();
        Map<String,String> sessionInfo = sessionManager.getSessionInfo(request);
        String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
        //세션의 userID나 로그인시 계정ID 가 없는 경우(사용자가 직접 해당 url을 치고 들어오는 경우)
        if (StringUtils.isEmpty(sessionUserId) && StringUtils.isEmpty(reqLoginId)) {
            return DEFAULT_VIEW_FOLDER + "PELH00030M";
        }

        Map<String, Object> userLoginMap = new ConcurrentHashMap<String, Object>();   //사용자 로그인용 MAP
        userLoginMap.put("USER_ACNT", reqLoginId);
        //userLoginMap.put("USER_PWD", reqLoginPw);
        userLoginMap.put("kickBeforeUser", kickBeforeUser);

        Model rtnModel = pelh00010Service.saveCheckLoginSSO(model, userLoginMap, isPortal, request, response);

        boolean isError = rtnModel.containsAttribute("code");

        logger.debug("isError : " + isError);
        if(isError){
            model.addAttribute("nextUri", nextUri);
            return DEFAULT_VIEW_FOLDER + "PELH00030M";
        }else{
            return "redirect:"+nextUri;
        }

    }
    
    @RequestMapping(value = "reLoginByChgCompany.do")
    public View reLoginByChgCompany(HttpServletRequest request, HttpServletResponse response, UiMapDto dto, Model model) throws Exception {
		pelh00010Service.saveReLogin(model, dto, request, response);

		return apply(dto, model);
    }    

    /**
     *
    * @fn : logout
    * @brief : 업무단 로그아웃
    * @Method Name : logout
    * @remark
    * @Create Date: 2015 2015. 4. 21. 오후 7:13:32
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 21.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "logout.scr")
    public View logout(UiMapDto dto,Model model, HttpServletRequest request,HttpServletResponse response) throws Exception {

//        String nextUri = request.getParameter("nextUri");
        Map<String,String> sessionInfo = SessionManager.getInstance().getSessionInfo(request);

        logger.debug("sessionInfo : " + sessionInfo.toString());
        //강제로 로그아웃을 호출할경우 대비
        if(sessionInfo != null && !StringUtils.isEmpty(sessionInfo.get(ContextConstant.SESSION_USER_ID)) ){
            // 1. 로그인 이력에 로그아웃시간 update
            pelh00010Service.updateLgnLog(sessionInfo);

            // 2. 세션 테이블에 update
            sessionInfo.put("CNCT_IP", ObjectUtil.toStrTrim(BizUtil.getClientIp(request)));
            pelh00010Service.updateSessionLogout(sessionInfo);
        }

        // 3. 쿠키,세션 제거
        SessionManager.getInstance(envServer).removeCookie(request, response);
        SessionManager.getInstance(envServer).removeSession(request, response);

  	    pelh00010Service.nexaLogout(dto);

        return apply(dto, model);
    }

    /**
     *
    * @fn : selectMultiUser
    * @brief : 다수사용자 중 로그인할 사용자 선택 팝업
    * @Method Name : selectMultiUser
    * @remark
    * @Create Date: 2015 2015. 4. 21. 오후 7:13:57
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 21.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "selectMultiUser.scr")
    public String selectMultiUser(HttpServletRequest request, Model model) throws Exception {

        String reqLoginId = ObjectUtil.toStrTrim(request.getParameter("loginId"));
        String reqLoginPw = ObjectUtil.toStrTrim(request.getParameter("loginPw"));
        reqLoginPw = ObjectUtil.encodeSHA256(reqLoginPw);		//jsh 20180626 sha256암호화 적용

        Map<String,Object> dto = new ConcurrentHashMap<String,Object>();
        dto.put("USER_ACNT", reqLoginId);
        dto.put("USER_PWD", reqLoginPw);

        List<Map<String,Object>> userList = pelh00010Service.selectUserInfoList("", dto);

        model.addAttribute("userList", userList);

        return DEFAULT_VIEW_FOLDER + "PELH00013P";

    }

    /**
    *
   * @fn : updateChangeUserPw
   * @brief : 비밀번호 변경 팝업호출
   * @Method Name : updateChangeUserPw
   * @remark
   * @Create Date: 2015 2015. 4. 18. 오후 5:52:56
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
   @RequestMapping(value = "updateChangeUserPw.scr", method = RequestMethod.GET)
   public String updateChangeUserPw(HttpServletRequest request, Model model) throws Exception {
       String loginId = ObjectUtil.toStrTrim(request.getParameter("loginId"));
       String userId = ObjectUtil.toStrTrim(request.getParameter("userId"));

       model.addAttribute("loginId" , loginId);
       model.addAttribute("userId" , userId);

       return DEFAULT_VIEW_FOLDER + "PELH00012P";

   }

   /**
    *
   * @fn : updateChangeUserPwPost
   * @brief : 비밀번호 변경 진행
   * @Method Name : updateChangeUserPwPost
   * @remark
   * @Create Date: 2015 2015. 4. 18. 오후 6:27:00
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
   @ResponseBody
   @RequestMapping(value = "updateChangeUserPw.scr", method = RequestMethod.POST)
   public String updateChangeUserPwPost(HttpServletRequest request) throws Exception {

       String userId = ObjectUtil.toStrTrim(request.getParameter("userId"));
       String loginId = ObjectUtil.toStrTrim(request.getParameter("loginId"));
       String oldPassword = ObjectUtil.toStrTrim(request.getParameter("oldPassword"));
       String newPassword = ObjectUtil.toStrTrim(request.getParameter("newPassword"));
       oldPassword = ObjectUtil.encodeSHA256(oldPassword);		//jsh 20180626 sha256암호화 적용
       newPassword = ObjectUtil.encodeSHA256(newPassword);		//jsh 20180626 sha256암호화 적용

       Map<String,Object> dto = new ConcurrentHashMap<String,Object>();
       dto.put("USER_ID", userId);
       dto.put("USER_ACNT", loginId);
       dto.put("USER_PWD", oldPassword);
       dto.put("NEW_USER_PWD", newPassword);

       int result =  pelh00010Service.updateChangeUserPw(dto);

       Map<String, Object> map = new HashMap<String, Object>();

       if (result > 0) {
           map.put("result", result);
           map.put("msg", "비밀번호가 수정되었습니다. 변경된 비밀번호로 로그인 해 주세요.");
       }else if(result == -1){
           map.put("result", result);
           map.put("msg", "이전 비밀번호가 일치하지 않습니다.");
       }else if(result == -2){
           map.put("result", result);
           map.put("msg", "비밀번호는 영어+숫자+특수문자 조합으로 8자리 이상 9자리 이하이어야 합니다.");
       }else if(result == -3){
           map.put("result", result);
           map.put("msg", "이전에 사용하던 비밀번호와 동일합니다.");
       }else if(result == -4){
           map.put("result", result);
           map.put("msg", "변경할 비밀번호에 사번이 포함되어 있습니다.");
       }else {
           map.put("result", result);
           map.put("msg", "수정에 실패했습니다.");
       }

       ObjectMapper mapper = new ObjectMapper();
       String data = mapper.writeValueAsString(map);

       logger.debug("data : " + data);

       return data;

   }


   /**
    *
   * @fn : updateResetUserPw
   * @brief : 비밀번호 재설정 팝업 호출
   * @Method Name : updateResetUserPw
   * @remark
   * @Create Date: 2015 2015. 4. 20. 오후 10:17:21
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
   @RequestMapping(value = "updateResetUserPw.scr", method = RequestMethod.GET)
   public String updateResetUserPw(HttpServletRequest request, Model model) throws Exception {
       String loginId = ObjectUtil.toStrTrim(request.getParameter("loginId"));
       String userId = ObjectUtil.toStrTrim(request.getParameter("userId"));

       model.addAttribute("loginId" , loginId);
       model.addAttribute("userId" , userId);

       return DEFAULT_VIEW_FOLDER + "PELH00011P";

   }


   /**
    *
   * @fn : updateResetUserPwPost
   * @brief : 비밀번호 재설정 진행
   * @Method Name : updateResetUserPwPost
   * @remark
   * @Create Date: 2015 2015. 4. 20. 오후 10:26:44
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
   @ResponseBody
   @RequestMapping(value = "updateResetUserPw.scr", method = RequestMethod.POST)
   public String updateResetUserPwPost(HttpServletRequest request) throws Exception {

       String userId = ObjectUtil.toStrTrim(request.getParameter("userId"));
       String userNm = URLDecoder.decode(ObjectUtil.toStrTrim(request.getParameter("userNm")),"UTF-8");
       String loginId = URLDecoder.decode(ObjectUtil.toStrTrim(request.getParameter("loginId")),"UTF-8");
       String newPassword = ObjectUtil.toStrTrim(request.getParameter("newPassword"));
       newPassword = ObjectUtil.encodeSHA256(newPassword);		//jsh 20180626 sha256암호화 적용

       Map<String,Object> dto = new ConcurrentHashMap<String,Object>();
       dto.put("USER_ID", userId);
       dto.put("SESSION_USER_ID", userId); //쿼리 재사용 위해
       dto.put("USER_NM", userNm);
       dto.put("USER_ACNT", loginId);
       dto.put("NEW_USER_PWD", newPassword);

       int result =  pelh00010Service.updateResetUserPw(dto);

       HashMap<String, Object> map = new HashMap<String, Object>();

       if (result > 0) {
           map.put("result", result);
           map.put("msg", "비밀번호가 수정되었습니다. 변경된 비밀번호로 로그인 해 주세요.");
       }else if(result == -1){
           map.put("result", result);
           map.put("msg", "본인여부 확인에 실패했습니다. 아이디와 성명을 확인 해 주세요.");
       }else if(result == -2){
           map.put("result", result);
           map.put("msg", "비밀번호는 영어+숫자+특수문자 조합으로 8자리 이상 15자리 이하이어야 합니다.");
       }else if(result == -3){
           map.put("result", result);
           map.put("msg", "이전에 사용하던 비밀번호와 동일합니다.");
       }else if(result == -4){
           map.put("result", result);
           map.put("msg", "변경할 비밀번호에 사번이 포함되어 있습니다.");
       }else {
           map.put("result", result);
           map.put("msg", "수정에 실패했습니다.");
       }

       ObjectMapper mapper = new ObjectMapper();
       String data = mapper.writeValueAsString(map);

       logger.debug("data : " + data);

       return data;

   }

   /**
    *
   * @fn : checkSessionAjax
   * @brief : 공통업무에서 다른모듈 호출전 세션체크
   * @Method Name : checkSessionAjax
   * @Create Date: 2015 2015. 8. 27. 오전 9:54:05
   * @Author: JinSungHa
   * @param: XXXXXXXX
   * @return: XXXXX
   * @throws : Exception
    */
   @ResponseBody
   @RequestMapping(value = "checkSessionAjax.scr")
   public String checkSessionAjax() throws Exception {
       logger.debug("enter String gv_userId");
       HashMap<String, Object> map = new HashMap<String, Object>();

       map.put("result", 1);
       map.put("msg", "ok");

       ObjectMapper mapper = new ObjectMapper();
       String data = mapper.writeValueAsString(map);

       logger.debug("data : " + data);

       return data;

   }

}
