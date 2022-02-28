package com.nbdf.pes.pe.pemm.web;

import java.util.*;

import com.nbdf.commons.interceptor.*;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.Util;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.pes.pe.pemm.service.PEMM00010Service;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.ObjectMapper;



/**
* @file: PEMM00010Controller.java
* @Package: com.nbdf.pes.pe.pemm.web
* @Project name: IFC MES시스템재구축
* @Type name: PEMM00010Controller
* @Company: built1
* @Create Date: 2017 2017. 10. 9. 오후 01:54:00
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 10. 9.        JinSungHa     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pemm00010/")
public class PEMM00010Controller extends AbstractWebController {

    @Autowired
    private PEMM00010Service pemm00010Service;

    private final static String DEFAULT_VIEW_FOLDER = "pesmodule/pemm/";       

    /**
     * 세션사용자 정보 GET
    * @fn : getSessionInfo
    * @brief : 함수 간략한 설명
    * @Method Name : getSessionInfo
    * @Create Date: 2015 2015. 5. 13. 오전 8:35:43
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    private Map<String,String> getSessionInfo(HttpServletRequest request){
        return SessionManager.getInstance().getSessionInfo(request);
    }

    /**
     *
    * @fn : selectPemm00010List
    * @brief : 함수 간략한 설명
    * @Method Name : selectPostSearch
    * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "selectPemm00010List.scr", method = RequestMethod.GET )
    public String selectPopMemoList(HttpServletRequest request, Model model) throws Exception {
        Map<String,String> sessionInfo = getSessionInfo(request);
        Map<String, Object> dto = new HashMap<String, Object>();

        // 리스트 조회
        int pageNum = NumberUtils.toInt(ObjectUtil.toStrTrim(request.getParameter("PAGE_NUM")));
        int pageSize = NumberUtils.toInt(ObjectUtil.toStrTrim(request.getParameter("PAGE_SIZE")));
        pageNum = pageNum == 0 ? 1 : pageNum;
        pageSize = pageSize == 0 ? 5 : pageSize;

        dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
        dto.put("PAGE_SIZE", pageSize);
        dto.put("PAGE_NUM", pageNum);

        // 나의 메모 조회
        List<Map<String, Object>> memoList = pemm00010Service.selectMyMemoList(dto);
        model.addAttribute("memoList", memoList);

        //페이징 관련 param
        model.addAttribute("R_PAGE_NUM", pageNum);
        model.addAttribute("R_ROW_SIZE", 10);
        model.addAttribute("R_PAGE_SIZE", pageSize);

        return  DEFAULT_VIEW_FOLDER + "PEMM00010M";
    }

    /**
    *
   * @fn : selectPemm00010List
   * @brief : 함수 간략한 설명
   * @Method Name : selectPostSearch
   * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
   * @Author: JinSungHa
   * @param: XXXXXXXX
   * @return: XXXXX
   * @throws : Exception
    */
   @RequestMapping(value = "selectPemm00010List.scr", method = RequestMethod.POST )
   public String selectPopMemoListPost(HttpServletRequest request, Model model) throws Exception {
       Map<String,String> sessionInfo = getSessionInfo(request);
       Map<String, Object> dto = new HashMap<String, Object>();

       // 리스트 조회
       int pageNum = NumberUtils.toInt(ObjectUtil.toStrTrim(request.getParameter("PAGE_NUM")));
       int pageSize = NumberUtils.toInt(ObjectUtil.toStrTrim(request.getParameter("PAGE_SIZE")));
       pageNum = pageNum == 0 ? 1 : pageNum;
       pageSize = pageSize == 0 ? 5 : pageSize;

       dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
       dto.put("PAGE_SIZE", pageSize);
       dto.put("PAGE_NUM", pageNum);

       // 나의 메모 조회
       List<Map<String, Object>> memoList = pemm00010Service.selectMyMemoList(dto);
       model.addAttribute("memoList", memoList);

       //페이징 관련 param
       model.addAttribute("R_PAGE_NUM", pageNum);
       model.addAttribute("R_ROW_SIZE", 10);
       model.addAttribute("R_PAGE_SIZE", pageSize);

       return  DEFAULT_VIEW_FOLDER + "PEMM00010T";
   }

    /**
    *
   * @fn : selectPemm00020List
   * @brief : 함수 간략한 설명
   * @Method Name : selectPemm00020List
   * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
   * @Author: JinSungHa
   * @param: XXXXXXXX
   * @return: XXXXX
   * @throws : Exception
    */
   @RequestMapping(value = "selectPemm00020List.scr", method = RequestMethod.GET )
   public String selectPemm00020List() throws Exception {
       return  DEFAULT_VIEW_FOLDER + "PEMM00020M";
   }

   /**
   *
  * @fn : selectPemm00030List
  * @brief : 함수 간략한 설명
  * @Method Name : selectPemm00020List
  * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
  * @Author: JinSungHa
  * @param: XXXXXXXX
  * @return: XXXXX
  * @throws : Exception
   */
  @RequestMapping(value = "selectPemm00030List.scr", method = RequestMethod.GET )
  public String selectPemm00030List(HttpServletRequest request, Model model) throws Exception {
      Map<String, Object> dto = new HashMap<String, Object>();
      String myMemoId = request.getParameter("MY_MEMO_ID");

      dto.put("MY_MEMO_ID", myMemoId);

      // 나의 메모 조회
      Map<String, Object> memoData = pemm00010Service.selectMyMemoData(dto);
      model.addAttribute("memoData", memoData);

      return  DEFAULT_VIEW_FOLDER + "PEMM00030M";
  }

   /**
   *
  * @fn : insertMemo
  * @brief : 함수 간략한 설명
  * @Method Name : insertMemo
  * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
  * @Author: JinSungHa
  * @param: XXXXXXXX
  * @return: XXXXX
  * @throws : Exception
   */
  @RequestMapping(value = "insertMemo.scr", method = RequestMethod.POST )
  public String insertMemo(HttpServletRequest request, Model model) throws Exception {

      String memoComments = Util.encodeHtml(request.getParameter("MEMO_COMMENTS"));

      Map<String,String> sessionInfo = getSessionInfo(request);
      Map<String, Object> dto = new HashMap<String, Object>();

      dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
      dto.put("MEMO_COMMENTS", memoComments);

      pemm00010Service.insertMemo(dto);

      // 리스트 조회
      int pageNum = 1;
      int pageSize = 5;

      dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
      dto.put("PAGE_SIZE", pageSize);
      dto.put("PAGE_NUM", pageNum);

      // 나의 메모 조회
      List<Map<String, Object>> memoList = pemm00010Service.selectMyMemoList(dto);
      model.addAttribute("memoList", memoList);

      //페이징 관련 param
      model.addAttribute("R_PAGE_NUM", pageNum);
      model.addAttribute("R_ROW_SIZE", 10);
      model.addAttribute("R_PAGE_SIZE", pageSize);

      return  DEFAULT_VIEW_FOLDER + "PEMM00010M";
  }

   /**
   *
  * @fn : updateMemo
  * @brief : 함수 간략한 설명
  * @Method Name : updateMemo
  * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
  * @Author: JinSungHa
  * @param: XXXXXXXX
  * @return: XXXXX
  * @throws : Exception
   */
  @RequestMapping(value = "updateMemo.scr", method = RequestMethod.POST )
  public String updateMemo(HttpServletRequest request, Model model) throws Exception {

      String myMemoId = request.getParameter("MY_MEMO_ID");
      String memoComments = Util.encodeHtml(request.getParameter("MEMO_COMMENTS"));

      Map<String,String> sessionInfo = getSessionInfo(request);
      Map<String, Object> dto = new HashMap<String, Object>();

      dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
      dto.put("MY_MEMO_ID", myMemoId);
      dto.put("MEMO_COMMENTS", memoComments);

      pemm00010Service.updateMemo(dto);

      // 리스트 조회
      int pageNum = 1;
      int pageSize = 5;

      dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
      dto.put("PAGE_SIZE", pageSize);
      dto.put("PAGE_NUM", pageNum);

      // 나의 메모 조회
      List<Map<String, Object>> memoList = pemm00010Service.selectMyMemoList(dto);
      model.addAttribute("memoList", memoList);

      //페이징 관련 param
      model.addAttribute("R_PAGE_NUM", pageNum);
      model.addAttribute("R_ROW_SIZE", 10);
      model.addAttribute("R_PAGE_SIZE", pageSize);

      return  DEFAULT_VIEW_FOLDER + "PEMM00010M";
  }

  /**
  *
 * @fn : deleteMemo
 * @brief : 함수 간략한 설명
 * @Method Name : deleteMemo
 * @Create Date: 2015 2015. 7. 9. 오후 11:05:23
 * @Author: JinSungHa
 * @param: XXXXXXXX
 * @return: XXXXX
 * @throws : Exception
  */
 @ResponseBody
 @RequestMapping(value = "deleteMemo", method = RequestMethod.POST )
 public String deleteMemo(HttpServletRequest request, @RequestParam("MY_MEMO_IDS") List<String> myMemoIds) throws Exception {
     Map<String,String> sessionInfo = getSessionInfo(request);
     Map<String, Object> dto = new HashMap<String, Object>();

     dto.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));

     int result = 0;
     for(String myMemoId : myMemoIds){

         dto.put("MY_MEMO_ID", myMemoId);

         pemm00010Service.deleteMemo(dto);

         result++;
     }

     Map<String, Object> returnMap = new HashMap<String, Object>();
     ObjectMapper mapper = new ObjectMapper();

     if(result > 0){
         returnMap.put("result", result);
         returnMap.put("msg", "삭제되었습니다." );
     }else{
         returnMap.put("result", result);
         returnMap.put("msg", "오류가 발생하였습니다. 시스템 관리자에게 문의하여 주시기 바랍니다." );
     }

     return mapper.writeValueAsString(returnMap);
 }
}