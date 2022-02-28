package com.nbdf.commons.exception.handler;

import java.io.Serializable;

/**
 * @Class DatabaseErrorMessage
 * @Description 데이터베이스 에러 메시지 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 * 
 *      (c) Copyright Built1 2014. All rights reserved.
 */
@SuppressWarnings("serial")
public class DatabaseErrorMessage implements Serializable {

    private int code;

    private String state;

    private String message;

    public DatabaseErrorMessage(int code, String state, String message) {
        this.code = code;
        this.state = state;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String toString() {
        return message;
    }

}
