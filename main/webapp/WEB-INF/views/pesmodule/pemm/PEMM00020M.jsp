<%--
파일명 : PEMM00020M.jsp
화면명 : 나의 메모 등록
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
     * 등록
     */
    function fn_saveMemo(){
        //valid check
        if($.trim($("textarea[name=MEMO_COMMENTS]").val())=="" ){
            alert("메모를 입력하세요.");
            $("#MEMO_COMMENTS").focus();
            return;
        }

        if(!confirm("등록하시겠습니까?")){
        	$("#MEMO_COMMENTS").focus();
            return;
        }

        $("#newFrm").attr("action", "/pes/pemm00010/insertMemo.scr");
        $("#newFrm").submit();
    }
    </script>
</head><body>
    <!-- popup size : 590 x 405 -->
    <div class="popWrap">
        <h1><span>메모</span></h1>
        <div class="popcont">
            <div>
                <form id="newFrm" method="post">
                    <textarea name="MEMO_COMMENTS" id="MEMO_COMMENTS" cols="30" rows="10" title="메모 작성" class="memo_box" maxlength="1300"></textarea>
                </form>
            </div>
            <div class="btn_area pl60">
                <button class="btn_pop_primary" onClick="fn_saveMemo();">저장</button>
                <button class="btn_pop_basic" onClick="javascript:window.location='/pes/pemm00010/selectPemm00010List.scr'">목록</button>
                <button class="btn_pop_basic fr" onClick="fn_close(); return false;">닫기</button>
            </div>
        </div>
    </div>
</body>
</html>