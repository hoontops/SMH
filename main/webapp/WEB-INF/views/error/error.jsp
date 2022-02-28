<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<html>
    <head>
        <meta charset="utf-8">
        <title>Error Page</title>
    </head> 
    <body>
        죄송합니다. 처리도중 에러가 발생하였습니다.
        <h2>${exception}</h2>
        <br />
        <p>${exception.cause}</p>
        <br/><br/>
        <a href="#none" onclick="window.history.go(-1); return false;"><font color="red">이전으로</font></a>
        <a href="/smh/login.scr"><font color="red">홈으로</font></a>
    </body>
</html>
