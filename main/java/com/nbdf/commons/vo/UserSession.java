package com.nbdf.commons.vo;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @Class UserSession
 * @Description UserSession annotation 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
public @interface UserSession {

}
