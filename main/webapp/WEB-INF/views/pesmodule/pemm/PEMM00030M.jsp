<%--
파일명 : PEMM00030M.jsp
화면명 : 나의 메모 수정
--%>

<%@page import="com.nbdf.commons.util.ObjectUtil"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>메모</title>
    <link rel="stylesheet" type="text/css" href="/css/common/base.css">
    <link rel="stylesheet" type="text/css" href="/css/common/layout.css">
    <link rel="stylesheet" type="text/css" href="/css/common/style.css">
    <!-- ie9이하 -->
    <!--[if lt ie 9]>
        <script src="/js/jquery/html5.js"></script>
    <![endif]-->
    <!-- //ie9이하 -->
    <script type="text/javascript" src="/js/jquery/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="/js/jquery/jquery.bxslider.js"></script>
    <script type="text/javascript" src="/js/jquery/jquery.placeholder.js"></script>
    <script type="text/javascript" src="/js/comm.js"></script>
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

        $("#newFrm").attr("action", "/pes/pemm00010/updateMemo.scr");
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
	          url:"/pes/pemm00010/deleteMemo"
	          ,type:"post"
	          ,data:data
	          ,dataType:"json"
	          ,beforeSend:function(xmlHttpRequest){
	              xmlHttpRequest.setRequestHeader("AJAX","true");
	          }
	          ,success:function(data){
	              alert(data.msg);
	              window.location = "/pes/pemm00010/selectPemm00010List.scr";
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
    <!-- popup size : 590 x 405 -->
    <div class="popWrap">
        <h1><span>메모</span></h1>
        <div class="popcont">
            <!-- <div class="memo_box"> -->
            <div>
                <form id="newFrm" method="post">
                    <textarea name="MEMO_COMMENTS" id="MEMO_COMMENTS" cols="30" rows="10" title="메모 작성" class="memo_box" maxlength="1300">${memoData.MEMO_COMMENTS}</textarea>
                    <input name="MY_MEMO_ID" type="hidden" value="${memoData.MY_MEMO_ID}">
                </form>
            </div>
            <div class="btn_area pl60">
                <button class="btn_pop_primary"  onClick="fn_updateMemo();">수정</button>
                <button class="btn_pop_basic"  onClick="fn_deleteMemo();">삭제</button>
                <button class="btn_pop_basic" onClick="javascript:window.location='/pes/pemm00010/selectPemm00010List.scr'">목록</button>
                <button class="btn_pop_basic fr"  onClick="fn_close(); return false;">닫기</button>
            </div>
        </div>
    </div>
</body>
</html>
