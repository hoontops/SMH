package com.nbdf.commons.exception.handler;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.view.UiView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Class ImcsExceptionHandler
 * @Description IMCS 에러 핸들러
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
@ControllerAdvice
public class NbdfExceptionHandler implements MessageSourceAware {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private MessageSource messageSource;

    @Resource(name = "uiView")
    private UiView uiView;

    /**
     * {@link com.nbdf.commons.exception.BizException} 처리
     *
     * @param request
     * @param e
     * @return
     */
    @ExceptionHandler(BizException.class)
    public ModelAndView handleBizException(HttpServletRequest request, Exception e) {
        String uri = request.getRequestURL().toString();
        final String message = getMessage(e.getMessage());

        ModelAndView mav = new ModelAndView(uiView);
        mav.addObject(UiConstant.RESULT_CODE, "-200");
        mav.addObject(UiConstant.ERROR_MSG, message);
        mav.addObject("exception", e);
        mav.addObject("url", uri);
        return mav;
    }

    /**
     * {@link org.springframework.dao.DataAccessException} 처리
     *
     * @param request
     * @param e
     * @return
     */
    @ExceptionHandler({ DataAccessException.class })
    public ModelAndView handleDAException(HttpServletRequest request, Exception e) {
        logger.error("failed: ", e);

        String uri = request.getRequestURL().toString();
        final String errorMessage = e.getMessage();
        ModelAndView mav = new ModelAndView(uiView);

        String oraError = errorMessage.toString().trim();
        int idx = oraError.indexOf("\n");

        if (idx != -1) {
            oraError = oraError.substring(0, idx);
        }
        oraError = oraError.replaceAll("'", "");

        String msg = "DATABASE 오류 입니다. 관리자에게 문의하세요.(" + oraError + ")";

        mav.addObject(UiConstant.RESULT_CODE, "-500");
        mav.addObject(UiConstant.ERROR_MSG, msg );
        mav.addObject("exception", e);
        mav.addObject("url", uri);
        return mav;
    }

    /**
     * {@link com.nbdf.commons.exception.BizException} 처리
     *
     * @param request
     * @param e
     * @return
     */
    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(HttpServletRequest request, Exception e) {
        logger.error("failed: {}", e);
        String uri = request.getRequestURL().toString();
        String errMsg = e.getMessage();
        if( errMsg == null) {
        	errMsg = "예외 메시지가 없습니다.";
        }
        
        int idx = errMsg.indexOf("\n");
        
        if (idx != -1) {
            errMsg = errMsg.substring(0, idx);
        }

        String msg = "어플리케이션 오류 입니다. 관리자에게 문의하세요.(" + errMsg + ")";
                
        ModelAndView mav = new ModelAndView(uiView);
        mav.addObject(UiConstant.RESULT_CODE, "-1");
        mav.addObject(UiConstant.ERROR_MSG, msg);
        mav.addObject("exception", e);
        mav.addObject("url", uri);
        return mav;
    }

    @Override
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public final String getMessage(String code) {
        return messageSource.getMessage(code, null, code, null);
    }

    public String getMessage(String code, Object[] args) {
        return messageSource.getMessage(code, args, code, null);
    }
}
