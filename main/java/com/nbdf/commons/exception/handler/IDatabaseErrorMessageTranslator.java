package com.nbdf.commons.exception.handler;

import org.springframework.dao.DataAccessException;

/**
 * @Class IDatabaseErrorMessageTranslator
 * @Description 데이터베이스 에러 메시지 번역기 인터페이스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 * 
 *      (c) Copyright Built1 2014. All rights reserved.
 */
public interface IDatabaseErrorMessageTranslator {

    public enum Database {
        DB2, Derby, H2, HSQL, Informix, MSSQL, MySQL, Oracle, PostgreSQL, Sybase;

        @Override
        public String toString() {
            switch (this) {
            case MSSQL:
                return "MS-SQL";

            default:
                return name();
            }
        }
    }

    boolean canTranslate(Database db);

    DatabaseErrorMessage translateMessage(int errorCode, String state, String errorMessage, DataAccessException dae);

}
