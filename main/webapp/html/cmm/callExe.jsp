<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
	String strCurrentUri = request.getScheme() + "//" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();//현재URI
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">
</style>
<TITLE>scannocx test</TITLE>
<script language=javascript>
function CallExe(exePath, arg0)
{
  try{
	scan.runscan(exePath,arg0);
    }catch(ee){
      alert(ee+'');
    }
}


function CallTest()
{
  try{
	scan.runscan("C:\\scan_app\\scan_app.exe","RATE/DRBM/IA/");
    }catch(ee){
      alert(ee+'');
    }
}


function activex_err() {
 //alert("설치가 되지 않았습니다");
} 

</SCRIPT>
</head>
<BODY>
<!--	이 페이지의 모든 컨트롤에 사용권이 필요하면 
	사용권 패키지 파일을 만들어야 합니다.  LPK_TOOL.EXE를 실행하여 
	필요한 LPK 파일을 작성합니다. LPK_TOOL.EXE는 ActiveX SDK,
	http://www.microsoft.com/intdev/sdk/sdk.htm에 있습니다. Visual
	Basic 6.0 CD를 갖고 있으면 \Tools\LPK_TOOL 디렉터리에서 찾을 수 있습니다.	개체 태그의 예제입니다:

<OBJECT CLASSID="clsid:5220cb21-c88d-11cf-b347-00aa00a28331">
	<PARAM NAME="LPKPath" VALUE="LPKfilename.LPK">
</OBJECT>
-->

<br>
<input type="button" value="test" OnClick="CallTest()">

<OBJECT CLASSID="CLSID:55A01FE2-E675-4348-8E69-A8FE035F85B2" CODEBASE="<%=strCurrentUri%>/html/cab/drScan.cab#version=1,0,0,0" ID="scan" onError="activex_err();" >
</OBJECT>
</BODY>
</HTML>
