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
    <title>비밀번호 재설정</title>
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/base.css" />
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/layout.css" />
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/common/style.css" />
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/smoothness/jquery-ui-1.10.3.custom.css" />
  	<LINK href="/pesmodule/resources/css/login/base_style.css" type="text/css" rel="stylesheet"> 

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

	<script type="text/JavaScript">
	<!--
	function MM_swapImgRestore() { //v3.0
	  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
	}
	
	function MM_preloadImages() { //v3.0
	  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}
	
	function MM_findObj(n, d) { //v4.01
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
	}
	
	function MM_swapImage() { //v3.0
	  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
	}
	//-->
	</script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#userNm").focus();
		});

	   //확인버튼 이벤트
	   function fn_confirm(){

		   var loginIdVal = $("#loginId").val();
		   var userNm = $("#userNm").val();
		   var newPwVal1 = $("#newPassword1").val();
		   var newPwVal2 = $("#newPassword2").val();

		   if(loginIdVal.trim() == ""){
			    alert("로그인 아이디를 입력해 주십시오.");
			    $("#loginId").focus();
			    return;
		   }
		   if(userNm.trim() == ""){
			    alert("성명을 입력해 주십시오.");
			    $("#userNm").focus();
			    return;
		   }

		   if(newPwVal1.trim() == ""){
			    alert("새 비밀번호를 입력해 주십시오.");
			    $("#newPassword1").focus();
			    return;
		   }
		   if(newPwVal2.trim() == ""){
			    alert("새 비밀번호를 입력해 주십시오.");
			    $("#newPassword2").focus();
			    return;
		   }

		   if(newPwVal1 != newPwVal2){
			   alert("새 비밀번호가 일치하지 않습니다.");
			   return;
		   }
		   if(newPwVal1.indexOf(loginId)>-1){
			   alert("변경할 비밀번호에 사번이 포함되어 있습니다.");
			   return;
		   }

		   if(!is3NumContinue(newPwVal1)) return;	//연속된 숫자 3자리
		   if(!isSame3Str(newPwVal1)) return;		//동일한 문자 3자리
		   
		   //PW 검증
		   if(!isValidPassword(newPwVal1)){
			   alert("비밀번호는 영어+숫자+특수문자 조합으로 8자리 이상 15자리 이하이어야 합니다.");
			   $("#newPassword1").val("");
			   $("#newPassword2").val("");
			   $("#newPassword1").focus();
			   return;
		   }

		   for(var i=0; i < newPwVal1.length;i++){
			   newPwVal1 = newPwVal1.replace("+", "%2B");
			   newPwVal1 = newPwVal1.replace("&", "%26");
		   }
		   
		   //PW 재설정 서버 호출
		   var data = "newPassword="+newPwVal1 + "&loginId=" + escape(encodeURIComponent($("#loginId").val())) + "&userNm=" + escape(encodeURIComponent($("#userNm").val())) + "&userId=" + $("#userId").val();

          jQuery.ajax({
                    url:"/smh/updateResetUserPw.scr"
                    ,type:"post"
                    ,data:data
                    ,dataType:"json"
                    ,success:function(data){
                        alert(data.msg);
                        if(data.result > 0){
                            self.close();
                        }
                    },error:function(request,status,error){
                        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                    }
            });
	   }

		//창닫기
		function fn_close(){
			/* self.opener = self;
			window.close(); */

			self.close();
		}

	</script>
</head>

<body oncontextmenu="return false">
   <!-- popup size : 520 x 385 -->
    <div class="popWrap">
        <h1><span>비밀번호 재설정</span></h1>
        <div class="popcont">
            <input type="hidden" id="userId" value="${userId }">
                <p class="txt_guide"><strong class="c_point">※</strong> 본인 여부를 확인하기 아래 정보를 정확히 입력해주시기 바랍니다.</p>
                <table class="write_t01">
                    <caption>로그인 정보 입력</caption>
                    <colgroup>
                        <col width="25%">
                        <col width="*">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><label for="">아이디<i class="ico_ess">필수</i></label></th>
                            <td><input type="text" name="loginId" id="loginId" value="${loginId }"></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="">성명<i class="ico_ess">필수</i></label></th>
                            <td><input type="text" name="userNm" id="userNm" value="${userNm }"></td>
                        </tr>
                    </tbody>
                </table>
                <p class="txt_guide"><i class="ico_refer"></i>비밀번호는 영문+숫자+특수문자 조합으로 8자리 이상 15자리 이하이어야 합니다.</p>
                <table class="write_t01">
                    <caption>비밀번호 입력</caption>
                    <colgroup>
                        <col width="25%">
                        <col width="*">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><label for="">비밀번호</label></th>
                            <td><input type="password" name="newPassword1" id="newPassword1"></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="">비밀번호 확인</label></th>
                            <td><input type="password" name="newPassword2" id="newPassword2" onKeydown="javascript:if(event.keyCode == 13) fn_confirm('');"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn_area">
             	<a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image4','','/pesmodule/resources/images/login/btn_chgPassword_checkOn.png',1)"><img src="/pesmodule/resources/images/login/btn_chgPassword_checkOff.png" alt="확인" name="Image4" width="60" height="21" border="0" onclick="javascript:fn_confirm();" ></a>
                <a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image5','','/pesmodule/resources/images/login/btn_chgPassword_cancelOn.png',1)"><img src="/pesmodule/resources/images/login/btn_chgPassword_cancelOff.png" alt="취소" name="Image5" width="60" height="21" border="0" onclick="javascript:fn_close();return false;"></a>
                    
                </div>
        </div>
    </div>

</body>
</html>