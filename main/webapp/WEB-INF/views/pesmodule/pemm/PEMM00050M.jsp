<%--
파일명 : PEMM00050M.jsp
화면명 : 나의 메모 등록 (업무)
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
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/base.css">
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/style_work.css">
    <!-- ie9이하 -->
    <!--[if lt ie 9]>
        <script src="/js/jquery/html5.js"></script>
    <![endif]-->
    <!-- //ie9이하 -->
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.bxslider.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.placeholder.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/comm.js"></script>
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

        $("#newFrm").attr("action", "/pemm00040/insertMemo.scr");
        $("#newFrm").submit();
    }
    </script>
</head>
<body>
    <!-- popup size : 540 x 325 -->
    <div class="popWrap">
        <h1>메모</h1>
        <div class="popcont">
            <div>
                 <form id="newFrm" method="post">
                    <textarea name="MEMO_COMMENTS" id="MEMO_COMMENTS" cols="30" rows="9" title="메모 작성" class="memo_box" maxlength="1300"></textarea>
                </form>
            </div>
            <div align="right">
            <a href="#" ><img src="/pesmodule/resources/images/comm/btn_saveOff.png" alt="저장" name="Image4" width="60" height="21" border="0" onclick="javascript:fn_saveMemo();" ></a>
             
            <a href="#" ><img src="/pesmodule/resources/images/comm/btn_listOff.png" alt="목록" name="Image4" width="60" height="21" border="0" onclick="javascript:window.location='/pemm00040/selectPemm00040List.scr'" ></a> 
            <!-- 
            <div class="btn_area">
                <button class="btn_pop_primary fl" onClick="fn_saveMemo();"><i class="i_save"></i>저장</button>
                <span class="fr">
                <button class="btn_pop_basic" onClick="javascript:window.location='/pemm00040/selectPemm00040List.scr'">목록</button>
                </span>
            -->    
            </div>
        </div>
    </div>
</body>
</html>
