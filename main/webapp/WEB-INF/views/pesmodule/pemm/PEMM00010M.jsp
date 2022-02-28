<%--
파일명 : PEMM00010M.jsp
화면명 : 나의 메모
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
	    $(document).ready(function(){
	        //공통 페이징 처리
	        fn_page('j_page_div', '');
	    });

	    /**
	     * 목록 검색
	     */
	    function fn_selectList(PAGE_NUM) {
	        var url = "/pes/pemm00010/selectPemm00010List.scr";
	        var type = "POST";

	        var data ="&PAGE_NUM=" + PAGE_NUM;

	        var target = $("#trTableDiv");
	        fn_getList(url, type, data, target);
	    }

	    function fn_getList(url, type, data, target) {
	        var AjaxHTML = jQuery.ajax({
	            url : url,
	            type : type,
	            data : data,
	            dataType : "html",
	            async : false ,
	            beforeSend:function(xmlHttpRequest){
	                xmlHttpRequest.setRequestHeader("AJAX","true");
	            },error:function(request,status,error){
	                if(request.status == "999"){
	                    alert("세션이 만료되어 로그인페이지로 이동합니다.");
	                    location.href = "/";
	                }
	            }
	        }).responseText;

	        target.html(AjaxHTML);
	    }

	    /**
	     * 삭제
	     */
	    function fn_delete(){
	        if($('input[name=MY_MEMO_CHK]:checked').length==0){
	        	   alert("삭제할 메모를 선택하세요.");
	            return;
	        }

	        if(!confirm("정말로 삭제하시겠습니까?")){
	            return;
	        }

	        var MY_MEMO_IDS = [];
	        $("input[name=MY_MEMO_CHK]:checked").each(function(){
	            MY_MEMO_IDS.push($(this).val());
	        });

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
	                 fn_selectList(1);
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

	    /**
         * CHECKBOX 전체선택
         */
        function fn_chkAll(){
            if($('input[name=MY_MEMO_CHKALL]').attr("checked")){
            	$('input[name=MY_MEMO_CHK]').attr('checked',true);
            }else{
            	$('input[name=MY_MEMO_CHK]').attr('checked',false);
            }
	    }

    </script>
</head>
<body>
    <!-- popup size : 590 x 405 -->
    <div class="popWrap">
        <h1><span>메모</span></h1>
        <div id="trTableDiv" class="popcont">
            <table class="list_t01">
                <caption>메모 목록</caption>
                <colgroup>
                    <col width="11%">
                    <col width="11%">
                    <col width="*">
                    <col width="18%">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col"><input name="MY_MEMO_CHKALL" type="checkbox" title="전체선택" onClick="fn_chkAll();"></th>
                        <th scope="col">번호</th>
                        <th scope="col">내용</th>
                        <th scope="col">등록일</th>
                    </tr>
                </thead>
                <tbody>
	                <c:set var="listCnt" value="${fn:length(memoList) }" />
	                <c:if test="${listCnt == 0 }">
	                    <tr>
	                       <td colspan="4">메모목록이 존재하지 않습니다.</td>
	                    </tr>
	                </c:if>
	                <c:if test="${listCnt > 0 }">
	                   <c:forEach var="target" items="${memoList}" varStatus="status">
	                   <c:set var="j_tot" value="${target.TOT_CNT}" />
	                    <tr>
	                        <td><input name="MY_MEMO_CHK" type="checkbox" value="${target.MY_MEMO_ID}" /></td>
	                        <td>${target.RN}</td>
	                        <td class="left">
	                           <a href="/pes/pemm00010/selectPemm00030List.scr?MY_MEMO_ID=${target.MY_MEMO_ID}">
	                               <span style="display: inline-block;width: 280px;height: 15px;overflow: hidden;text-overflow: ellipsis;">${target.MEMO_COMMENTS}</span>
	                           </a>
	                       </td>
	                        <td>${target.CREATION_DATE}</td>
	                    </tr>
	                    </c:forEach>
	                </c:if>
                </tbody>
            </table>
            <div class="j_page_div">
                <input type="hidden" name="j_now" value="${R_PAGE_NUM }" />
                <input type="hidden" name="J_tot" value="${j_tot }" />
                <input type="hidden" name="j_row" value="${R_ROW_SIZE }" />
                <input type="hidden" name="j_page" value="${R_PAGE_SIZE }" />
                <input type="hidden" name="j_event" value="fn_selectList" />
            </div>
            <div class="btn_area btn_pg_mt">
            	<a href="#" ><img src="/pesmodule/resources/images/comm/btn_delOff.png" alt="삭제" name="Image4" width="60" height="21" border="0" onclick="javascript:fn_delete();" ></a>
                <span class="fr">
            	<a href="/pes/pemm00010/selectPemm00020List.scr" ><img src="/pesmodule/resources/images/comm/btn_registOff.png" alt="등록" name="Image4" width="60" height="21" border="0" ></a>
                <a href="#" ><img src="/pesmodule/resources/images/loginbtn_chgPassword_cancelOff.png" alt="닫기" name="Image4" width="60" height="21" border="0" onclick="javascript:fn_close(); return false;" ></a>
                </span>
<!-- 
                <button class="btn_del fl" onClick="fn_delete();">삭제</button>
                <span class="fr">
                <a href="/pes/pemm00010/selectPemm00020List.scr" class="btn_save">등록</a>
                <button class="btn_cancel" onClick="fn_close(); return false;">닫기</button>
                </span>
-->
            </div>
        </div>
    </div>
</body>
</html>
