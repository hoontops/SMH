<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.net.InetAddress" %>
<%@ page import="org.apache.commons.lang3.StringUtils" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
	String serverIp = StringUtils.substringAfterLast(InetAddress.getLocalHost().getHostAddress(), ".");
%>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>Interflex MES 로그인</title>
    <link rel="stylesheet" type="text/css" href="/pesmodule/resources/css/login/base_style.css">
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/jquery/jquery.placeholder.js"></script>
    <script type="text/javascript" src="/pesmodule/resources/js/comm.js"></script>
</head>

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

    if($("#loginId").val()==""){
		var userInputId = getCookie("userInputId");
		$("input[name='loginId']").val(userInputId); 
		 
    }
	if($("input[name='loginId']").val() != ""){ // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
	    $("#idSaveCheck").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
	}
	 
	$("#idSaveCheck").change(function(){ // 체크박스에 변화가 있다면,
	    if($("#idSaveCheck").is(":checked")){ // ID 저장하기 체크했을 때,
	        var userInputId = $("input[name='loginId']").val();
	        setCookie("userInputId", userInputId, 7); // 7일 동안 쿠키 보관
	    }else{ // ID 저장하기 체크 해제 시,
	        deleteCookie("userInputId");
	    }
	});
	// ID 저장하기를 체크한 상태에서 ID를 입력하는 경우, 이럴 때도 쿠키 저장.
	$("input[name='id']").keyup(function(){ // ID 입력 칸에 ID를 입력할 때,
	    if($("#idSaveCheck").is(":checked")){ // ID 저장하기를 체크한 상태라면,
	        var userInputId = $("input[name='id']").val();
	        setCookie("userInputId", userInputId, 7); // 7일 동안 쿠키 보관
	    }
	});	  
	
    var rtnLoginPw = $("#rtnLoginPw").val();
    if(rtnLoginPw != null && rtnLoginPw != ""){
        $("#loginPw").val(rtnLoginPw);
    }

	//로그인 실패 메시지 호출 함수
    fn_loginFailAlert();

    $("#loginId").focus();
	
  
});

//로그인 실패 체크 함수
function fn_loginFailAlert(){
	//인터셉터 메세지 전달
    if(document.loginForm.login_code.value == "IMPELH0000"){
        alert($("#login_msg").val());
        $("#login_msg").val("");

        //인터셉터에서 에러 발생시 로그아웃
        location.replace("/smh/logout.scr?nextUri="+$("#nextUri").val());

    }

    //사용자 정보 부정확
    if(document.loginForm.login_code.value == "IMPELH0001"){
        alert($("#login_msg").val());
        $("#login_msg").val("");
        $("#loginId").focus();
    }

    //사용자 다수 존재 TODO 팝업띄우고 취소한다음에 다음 팝업띄우면 버그;;
    if(document.loginForm.login_code.value == "IMPELH0002"){
        //POST로 팝업 생성
        //var title = "pop" + Math.floor(Math.random()*1000);
        var title = "newPopup";

       window.open("",title,'width=520, height=305, resizable=no, scrollbars=no, status=no, toolbar=no');

        document.loginForm.target = title;
        document.loginForm.action = "/smh/selectMultiUser.scr";
        document.loginForm.method = "post";
        document.loginForm.submit();


        //return false;
    }

    //본사직원 로그인 방지
    if(document.loginForm.login_code.value == "IMPELH0009"){
        alert($("#login_msg").val());
        $("#login_msg").val("");
        $("#loginId").focus();
    }

    //계정 중지상태
    if(document.loginForm.login_code.value == "IMPELH0003"){
        alert($("#login_msg").val());
        $("#login_msg").val("");
        $("#loginId").focus();
    }

    //오류횟수 3회초과(나올 수 는 없지만 체크함)
    if(document.loginForm.login_code.value == "IMPELH0004"){
        alert($("#login_msg").val());
        $("#login_msg").val("");
        $("#loginId").focus();
    }

    //90일간 로그인 이력없다면 사용중지
    if(document.loginForm.login_code.value == "IMPELH0005"){
        alert($("#login_msg").val());
        $("#login_msg").val("");
        $("#loginId").focus();
    }

    //패스워드 변경 90일지났지만 변경가능조건가짐
    if(document.loginForm.login_code.value == "IMPELH0006"){
        if(confirm($("#login_msg").val())){
            var loginId =  $("#loginId").val();
            var userId =  $("#userId").val();

            win_pop("/smh/updateChangeUserPw.scr?loginId="+loginId+"&userId="+userId, "changePwPop", '520', '350', 'yes');
        }else{
            return;
        }
    }

    //기존 접속중인 사용자 존재
    if(document.loginForm.login_code.value == "IMPELH0007"){
        if(confirm($("#login_msg").val())){
            $("#kickBeforeUser").val("Y");
            fn_login('');
        }else{
            return;
        }
    }

    //관리자가 패스워드 초기화 하여 재설정화면 이동
    if(document.loginForm.login_code.value == "IMPELH0008"){
        if(confirm($("#login_msg").val())){
            var loginId =  $("#loginId").val();
            var userId =  $("#userId").val();

            win_pop("/smh/updateResetUserPw.scr?loginId="+loginId+"&userId="+userId, "changePwPop", '520', '400', 'yes');
            
        }else{
            return;
        }
    }
}

function fn_login(userId){

	var loginId = $("#loginId").val();
    var loginPw = $("#loginPw").val();
    var nextUri = $("#nextUri").val();
    var kickBeforeUser = $("#kickBeforeUser").val();
    if(nextUri == null || nextUri == "null" || nextUri == ""){
        nextUri = "/smh/index.html";
    }

    if(loginId.trim() == "" ){
        alert("아이디를 입력해주세요.");
        $("#loginId").focus();
        return;
    }

    if(loginPw.trim() == "" ){
        alert("비밀번호를 입력해주세요.");
        $("#loginPw").focus();
        return;
    }

    var url = "/smh/loginPost.scr"; //업무단 로그인


    document.loginForm.loginId.value = loginId;
    document.loginForm.loginPw.value = loginPw;
    document.loginForm.nextUri.value = nextUri;
    document.loginForm.userId.value = userId;
    document.loginForm.kickBeforeUser.value = kickBeforeUser;
    document.loginForm.action         = url;
    document.loginForm.submit();
}

$(document).on("click","#loginPost",function(event){
    fn_login('');
});
$(document).on("click","#pwChange",function(event){
    var loginId =  $("#loginId").val();
    var userId =  $("#userId").val();

    win_pop("/smh/updateChangeUserPw.scr?loginId="+loginId+"&userId="+userId, "changePwPop", '520', '350', 'yes');

});

function setCookie(cookieName, value, exdays){
var exdate = new Date();
exdate.setDate(exdate.getDate() + exdays);
var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName){
var expireDate = new Date();
expireDate.setDate(expireDate.getDate() - 1);
document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
cookieName = cookieName + '=';
var cookieData = document.cookie;
var start = cookieData.indexOf(cookieName);
var cookieValue = '';
if(start != -1){
    start += cookieName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cookieValue = cookieData.substring(start, end);
}
return unescape(cookieValue);
}
</script>

<body oncontextmenu="return false" onLoad="MM_preloadImages('/pesmodule/resources/images/login/login_button_login_on.png','/pesmodule/resources/images/login/login_button_password_on.png')">
<font size=1><%=serverIp%></font>
<form name="loginForm" method="post" onSubmit="return false;">
<input type="hidden" id="login_code" name="login_code" value="${code }"/>
<input type="hidden" id="login_msg" name="login_msg" value="${msg }"/>
<input type="hidden" id="kickBeforeUser" name="kickBeforeUser" value=""/>
<input type="hidden" id="userId" name="userId" value="${userId }"/>
<input type="hidden" id="nextUri" name="nextUri" value="${nextUri }"/>
<input type="hidden" id="rtnLoginPw" name="rtnLoginPw" value="${loginPw }"/>
<table width="100%" border="0" cellspacing="0" cellpadding="0"  >
  <tr>
   <td height="145" align="center" valign="bottom"  background="/pesmodule/resources/images/login/login_topbg2.png">
		<table width="886" border="0" cellspacing="0" cellpadding="0">
		<tr>
<!--/ 로고이미지--------------->
			<td align="left" ><img src="/pesmodule/resources/images/login/login_toplogo.png" alt="로고"></td>
		</tr>
		</table>	
  </td>
  </tr>
  <tr>
  <td align="center" valign="top">
<!--/ 메인이미지--------------->
  		<table width="886" height="549" border="0" cellspacing="0" cellpadding="0" background="/pesmodule/resources/images/login/login_mainimg1.png">
		<tr>
			<td align="right" valign="top">
				<table width="300" border="0" cellspacing="0" cellpadding="0">
				<tr>
<!--/ 타이틀이미지--------------->
					<td><img src="/pesmodule/resources/images/login/login_title.png"></td>
				</tr>
				<tr>
					<td>
<!--/ 로그인 시작--------------->
						<table width="300" border="0" cellspacing="0" cellpadding="0">
						  <tr>
							<td><input id="loginId" name="loginId" type="text" size="24" class="login" placeholder="아이디" value="${loginId }" tabindex="1" style="ime-mode:inactive;" ></td>
							<td width="62" rowspan="3"><a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image3','','/pesmodule/resources/images/login/login_button_login_on.png',1)"><img id="loginPost" tabindex="3" src="/pesmodule/resources/images/login/login_button_login_off.png" alt="로그인" name="Image3" width="62" height="82" border="0"></a></td>
							<td width="5" rowspan="2"><img src="/pesmodule/resources/images/login/noimg.png" width="5" height="1"></td>
							<td width="62" rowspan="3"><a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image5','','/pesmodule/resources/images/login/login_button_password_on.png',1)"><img id="pwChange" tabindex="4" src="/pesmodule/resources/images/login/login_button_password_off.png" alt="비밀번호변경" name="Image5" width="62" height="82" border="0"></a></td>
						  </tr>
						  <tr><td height="7"></td></tr>
						  <tr>
						  	<td><input id="loginPw" name="loginPw" type="password" size="24" class="login" placeholder="패스워드" autocomplete="off" tabindex="2" onKeydown="javascript:if(event.keyCode == 13) fn_login('');" ></td>
						  </tr>
						  <tr><td height="7"></td></tr>
						  <tr>
						  	<td  style="font-family: Malgun Gothic;" colspan="2" valign="middle">
						  	<label><input type="checkbox" name="idSaveCheck" style="vertical-align:-2px"id="idSaveCheck" tabindex="3"/><font size=1px>ID저장</font></label>
							</td>
						  </tr>
						</table>

<!--/ 로그인 끝--------------->					
					</td>
				</tr>
				</table>
			
			</td>
  		</tr>
		</table>
  </td>
  </tr>
</table>

</form>

</body>
</html>