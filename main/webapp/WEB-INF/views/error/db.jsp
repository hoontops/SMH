<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<html>
    <head>
        <meta charset="utf-8">
        <title>Error Page</title>
    </head> 
    <body>
        DB Exception <br />
        <font color="red">Failed URL: ${url}</font> <br />
        
        Exception:  ${exception.message} <br />
        <c:forEach items="${exception.stackTrace}" var="ste">${ste}
        </c:forEach>
    </body>
</html>
