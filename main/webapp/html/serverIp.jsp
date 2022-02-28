<%@ page import="java.net.InetAddress" %>
<%@ page import="org.apache.commons.lang3.StringUtils" %>

<font size=1><%=StringUtils.substringAfterLast(InetAddress.getLocalHost().getHostAddress(), ".")%></font>