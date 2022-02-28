<!DOCTYPE html>
<%--
파일명 : PEMM00060M.jsp
화면명 : 나의 메모 수정 (업무)
--%>

<%@page import="com.nbdf.commons.util.ObjectUtil"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>메모</title>
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/base.css">
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/style_work.css">
    <!-- ie9이하 -->
    <!--[if lt ie 9]>
        <script src="module/resources/js/jquery/html5.js"></script>
    <![endif]-->
    <!-- //ie9이하 -->
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.bxslider.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.placeholder.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/comm.js"></script>
    <script type="text/javascript">

    /**
     * 수정
     */
    function fn_updateMemo(){
        //valid check
        if($.trim($("textarea[name=MEMO_COMMENTS]").val())=="" ){
            alert("메모를 입력하세요.");
            $("#MEMO_COMMENTS").focus();
            return;
        }

        if(!confirm("수정하시겠습니까?")){
            $("#MEMO_COMMENTS").focus();
            return;
        }

        $("#newFrm").attr("action", "/pemm00040/updateMemo.scr");
        $("#newFrm").submit();
    }

    /**
     * 삭제
     */
    function fn_deleteMemo(){
         if(!confirm("정말로 삭제하시겠습니까?")){
             return;
         }

         var MY_MEMO_IDS = [];
         MY_MEMO_IDS.push($('input[name=MY_MEMO_ID]').val());

         var data = "MY_MEMO_IDS="+MY_MEMO_IDS;

          jQuery.ajax({
              url:"/pemm00040/deleteMemo.scr"
              ,type:"post"
              ,data:data
              ,dataType:"json"
              ,beforeSend:function(xmlHttpRequest){
                  xmlHttpRequest.setRequestHeader("AJAX","true");
              }
              ,success:function(data){
                  alert(data.msg);
                  window.location = "/pemm00040/selectPemm00040List.scr";
              },error:function(request,status,error){
            	  if(request.status == "999"){
                      alert("세션이 만료되어 로그인페이지로 이동합니다.");
                      location.href = "/";
                  }else{
	                  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                  }
              }
          });
    }
    </script>
</head>
<body>
    <!-- popup size : 540 x 325 -->
    <div class="popWrap">
        <h1>메모</h1>
        <div class="popcont">
            <!-- <div class="memo_box"> -->
            <div>
                <form id="newFrm" method="post">
                    <textarea name="MEMO_COMMENTS" id="MEMO_COMMENTS" cols="30" rows="10" title="메모 작성" class="memo_box" maxlength="1300">${memoData.MEMO_COMMENTS}</textarea>
                    <input name="MY_MEMO_ID" type="hidden" value="${memoData.MY_MEMO_ID}">
                </form>
            </div>
            <div align="right">
            <a href="#" ><img src="/pesmodule/resources/images/comm/btn_modifyOff.png" alt="수정" name="Image4" width="60" height="21" border="0" onclick="javascript:fn_updateMemo();" ></a>
             
          	<a href="#" ><img src="/pesmodule/resources/images/comm/btn_delOff.png" alt="삭제" name="Image5" width="60" height="21" border="0" onclick="javascript:fn_deleteMemo();" ></a>
             
            <a href="#" ><img src="/pesmodule/resources/images/comm/btn_listOff.png" alt="목록" name="Image6" width="60" height="21" border="0" onclick="javascript:window.location='/pemm00040/selectPemm00040List.scr'" ></a> 
            </div>
            <!-- 
            <div class="btn_area">
                <button class="btn_pop_primary fl"  onClick="fn_updateMemo();" style="margin-right: 4px;"><i class="i_save"></i>수정</button>
                <button class="btn_pop_primary fl"  onClick="fn_deleteMemo();"><i class="i_del"></i>삭제</button>
                <span class="fr">
                <button class="btn_pop_basic"  onClick="javascript:window.location='/pemm00040/selectPemm00040List.scr'">목록</button>
                </span>
            </div>
            -->
        </div>
    </div>
</body>
</html>
