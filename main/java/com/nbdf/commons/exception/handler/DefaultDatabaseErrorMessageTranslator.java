package com.nbdf.commons.exception.handler;

import javax.annotation.Resource;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataAccessException;

/**
 * @Class DefaultDatabaseErrorMessageTranslator
 * @Description 기본 데이터베이스 에러 메시지 번역기
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 * 
 *      (c) Copyright Built1 2014. All rights reserved.
 */
public class DefaultDatabaseErrorMessageTranslator implements IDatabaseErrorMessageTranslator {

    private static final String DEFAULT_ERRORCODE_PREFIX = "database";

    @Resource(name = "messageSource")
    private MessageSource messageSource;

    protected enum DataAccessExceptionType {
        BadSqlGrammar, InvalidResultSetAccess, DuplicateKey, DataIntegrityViolation, PermissionDenied, DataAccessResourceFailure, TransientDataAccessResource, CannotAcquireLock, DeadlockLoser, CannotSerializeTransaction, UNKNOWN;
    }

    @Override
    public boolean canTranslate(Database db) {
        return true;
    }

    @Override
    public DatabaseErrorMessage translateMessage(int errorCode, String state, String errorMessage, DataAccessException daex) {
        String message = null;
        if (daex != null) {
            message = generateErrorMessage(daex);
        }

        if (message == null) {
            message = errorMessage;
        }

        return new DatabaseErrorMessage(errorCode, state, generateErrorMessage(daex));
    }

    private String generateErrorMessage(DataAccessException daex) {
        if (daex == null)
            return "none";

        DataAccessExceptionType daetype = DataAccessExceptionType.UNKNOWN;
        String name = daex.getClass().getName();
        for (DataAccessExceptionType type : DataAccessExceptionType.values()) {
            if (type.name().equalsIgnoreCase(name)) {
                daetype = type;
                break;
            }
        }

        String errorMessageCode = DEFAULT_ERRORCODE_PREFIX + daetype.name().toLowerCase();
        return messageSource.getMessage(errorMessageCode, null, LocaleContextHolder.getLocale());
    }

}
