<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<!-- <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> -->
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta charset="utf-8" />
    <title>사용자선택</title>
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/base.css" />
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/layout.css" />
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/style.css" />
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/smoothness/jquery-ui-1.10.3.custom.css" />

    <!-- ie9이하 -->
    <!--[if lt ie 9]>
        <script src="/js/jquery/html5.js"></script>
    <![endif]-->
    <!-- //ie9이하 -->

    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.bxslider.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.placeholder.js"></script>

    <script type="text/javascript" src="/pesmodule/resources/js/comm.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/util.js"></script>


    <script type="text/javascript">

       //확인버튼 이벤트
       function fn_confirm(){
           var userId = $(":radio[name='manyUserRadio']:checked").val();
            if(userId == null || userId == "undefined"){
                alert("사용자를 선택 해 주세요.");
                return;
            }

            try{

                //로그인 진행 후 팝업 닫기
                var url = "/smh/loginPost.scr";
                var f = document.popForm;

                opener.parent.name = "tempOpener";
                f.target = opener.parent.name;
                f.portalUserId.value = userId;
                f.nextUri.value = opener.loginForm.nextUri.value;
                f.action = url;
                f.submit();

                self.close();
            }catch(e){
                alert("E : " + e);
            }


       }

        //창닫기
        function fn_close(){
            //self.opener = self;
            //opener.name = "";
            //window.close();

            opener.parent.name = "parent";

            self.close();
        }

    </script>

</head>

<body oncontextmenu="return false">
    <!-- popup size : 520 x 305 -->
    <div class="popWrap">
        <h1><span>사용자 선택</span></h1>
        <div class="popcont">
            <form name="popForm" method="post" onSubmit="return false;">
                <input type="hidden" name="loginId" value="" />
                <input type="hidden" name="nextUri" value="" />
            </form>
                <p class="txt_guide pl15"><i class="ico_refer ml_15"></i>동일한 이름의 사용자가 있습니다. 사용자를 선택해주세요.<br />사용자 선택시, 선택한 사용자로 로그인됩니다.</p>
                <table class="tb_select">
                    <caption>사용자 선택</caption>
                    <colgroup>
                        <col width="8%">
                        <col width="*">
                    </colgroup>
                    <tbody>

                    <c:forEach var="target" items="${userList}" varStatus="status">
                    <tr class="manyUserTr">
                        <th scope="row"><input type="radio" name="manyUserRadio" value="${target.USER_ID }"></th>
                        <td><label for="">${target.OFC_NM } <span class="c_point">&gt;</span> ${target.USER_NM }</label></td>
                    </tr>
                    </c:forEach>
                    </tbody>
                </table>
                <div class="btn_area">
                    <input type="submit" class="btn_pop_primary" value="확인" onclick="javascript:fn_confirm(); return false;" />
                    <button class="btn_pop_basic" onclick="javascript:fn_close();return false;">취소</button>
                </div>
        </div>
    </div>

</body>
</html>