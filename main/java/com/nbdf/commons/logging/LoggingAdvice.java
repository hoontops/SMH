package com.nbdf.commons.logging;

import com.nbdf.commons.util.TxUtil;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Class Name : LoggingAdvice.java
 * @Description : LoggingAdvice Class
 * @Modification Information @ * @ 수정일 수정자 수정내용 @ --------- --------- ------------------------------- @ 2009.03.16 최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see Copyright (C) by MOPAS All right reserved.
 */
// @Aspect
public class LoggingAdvice {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAdvice.class);


    public Object controllerMethodCall(ProceedingJoinPoint joinPoint) throws Throwable {
        if (!logger.isDebugEnabled()) {
            return joinPoint.proceed();
        }
        logger.debug("{}", extractParameter(joinPoint));

        return joinPoint.proceed();
    }

    public Object serviceMethodCall(ProceedingJoinPoint joinPoint) throws Throwable {
        if (!logger.isDebugEnabled()) {
            return joinPoint.proceed();
        }

        logger.debug("{}", extractParameter(joinPoint));

        return joinPoint.proceed();
    }

    public Object daoMethodCall(ProceedingJoinPoint joinPoint) throws Throwable {
        if (!logger.isDebugEnabled()) {
            return joinPoint.proceed();
        }
        logger.debug("{}", extractParameter(joinPoint));

        return joinPoint.proceed();
    }

    public Object aroundMethodCall(ProceedingJoinPoint joinPoint) throws Throwable {
        if (!logger.isDebugEnabled()) {
            return joinPoint.proceed();
        }
        logger.debug("{}", extractParameter(joinPoint));

        return joinPoint.proceed();
    }

    private String extractParameter(ProceedingJoinPoint joinPoint) throws Throwable {
        Signature signature = joinPoint.getSignature();
        Object[] args = joinPoint.getArgs();

        StringBuilder inputParam = new StringBuilder();
        inputParam.append(signature.getDeclaringType().getSimpleName() + "." + signature.getName());

        for (Object arg : args) {
            if (arg == null) {
                continue;
            }
            inputParam.append("\n>> Input Parameters :::");
            inputParam.append("\n=>").append(arg.toString());
        }

        return inputParam.toString();
    }
}
