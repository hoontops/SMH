<html>
<head>
</head>
<title>index page</title>
<script type="text/javascript">
/*
var userDevice = "";
var device = "win16|win32|win64|mac|macintel";

if ( navigator.platform ) {
    if ( device.indexOf(navigator.platform.toLowerCase()) < 0 ) {
    	window.location.href = "/smh/smh/launch.html?screenid=pda";
    } else {
    	window.location.href = "/smh/smh/index.html";
    }
}
*/
</script>
<body>
<%

    String baseUrl = request.getServerName();
	String strCurrentUri = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();//현재URI
	System.out.println(strCurrentUri);
	if( "localhost".equals(baseUrl)){
		response.sendRedirect("/smh/index.html");	
	}
	else{
		response.sendRedirect("/smh/smh/index.html");		
	}
	//response.sendRedirect("/smh/smh/index.html");
/*
	String userAgent = request.getHeader("user-agent");
	boolean mobile1 = userAgent.matches( ".*(iPhone|iPod|Android|Windows CE|BlackBerry|Symbian
	                          |Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson).*");
	boolean mobile2 = userAgent.matches(".*(LG|SAMSUNG|Samsung).*"); 
	
	if (mobile1 || mobile2) {
		response.sendRedirect("/smh/smh/launch.html?screenid=pda");
	} else {
		response.sendRedirect("/smh/smh/index.html");
	}
	*/
%>
</body>
</html>
