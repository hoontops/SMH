package com.nbdf.commons.web.support;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.ui.vo.UiObjectDto;
import com.nbdf.commons.vo.UserSession;
import com.nbdf.commons.web.AttributeKey;

import javax.servlet.http.HttpServletRequest;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.support.WebArgumentResolver;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.PlatformException;

/**
 * @Class CustomHandlerMethodArgumentResolver
 * @Description Strategy interface 구현클래스 for resolving method parameters into argument values in the context of a given request.
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
public class CustomHandlerMethodArgumentResolver implements HandlerMethodArgumentResolver {

    /**
     * Whether the given {@linkplain MethodParameter method parameter} is supported by this resolver.
     *
     * @param parameter
     *            the method parameter to check
     * @return {@code true} if this resolver supports the supplied parameter; {@code false} otherwise
     * @see org.springframework.web.method.support.HandlerMethodArgumentResolver#supportsParameter(org.springframework.core.MethodParameter)
     */
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        Class<?> paramType = parameter.getParameterType();
        final boolean b = parameter.getParameterAnnotation(UserSession.class) != null || UiMapDto.class.isAssignableFrom(paramType)
                || UiObjectDto.class.isAssignableFrom(paramType);
        return b;
    }

    /**
     * Resolves a method parameter into an argument value from a given request. A {@link ModelAndViewContainer} provides access to the model for the request. A
     * {@link WebDataBinderFactory} provides a way to create a {@link WebDataBinder} instance when needed for data binding and type conversion purposes.
     *
     * @param parameter
     *            the method parameter to resolve. This parameter must have previously been passed to {@link #supportsParameter(org.springframework.core.MethodParameter)} and it
     *            must have returned {@code true}
     * @param mavContainer
     *            the ModelAndViewContainer for the current request
     * @param webRequest
     *            the current request
     * @param binderFactory
     *            a factory for creating {@link WebDataBinder} instances
     * @return the resolved argument value, or {@code null}.
     * @throws Exception
     *             in case of errors with the preparation of argument values
     * @see org.springframework.web.method.support.HandlerMethodArgumentResolver#resolveArgument(org.springframework.core.MethodParameter,
     *      org.springframework.web.method.support.ModelAndViewContainer, org.springframework.web.context.request.NativeWebRequest,
     *      org.springframework.web.bind.support.WebDataBinderFactory)
     */
    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        Class<?> paramType = parameter.getParameterType();
        if (WebRequest.class.isAssignableFrom(paramType)) {
            return webRequest;
        }

        // HttpServletRequest request = webRequest.getNativeRequest(HttpServletRequest.class);
        if (parameter.getParameterAnnotation(UserSession.class) != null) {
            return ((HttpServletRequest) webRequest.getNativeRequest()).getSession().getAttribute(AttributeKey.SESSION);
        } else if (UiMapDto.class.isAssignableFrom(paramType)) {
            PlatformData data = getData(webRequest);
            UiMapDto dto = new UiMapDto(data);
            return dto;
        } else if (UiObjectDto.class.isAssignableFrom(paramType)) {
            PlatformData data = getData(webRequest);
            UiObjectDto dto = new UiObjectDto(data);
            return dto;
        } else {
            return WebArgumentResolver.UNRESOLVED;
        }
    }

    private PlatformData getData(NativeWebRequest webRequest) throws PlatformException {
        HttpPlatformRequest xRequest = new HttpPlatformRequest((HttpServletRequest) webRequest.getNativeRequest());
        xRequest.receiveData();
        return xRequest.getData();
    }

}
