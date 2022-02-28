package com.nbdf.commons.exception.handler;

import java.util.List;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;

/**
 * @Class DatabaseErrorMessageHelper
 * @Description 데이터베이스 에러 메시지를 찾는 클래스
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
public class DatabaseErrorMessageHelper {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private DataSource dataSource;

    private List<IDatabaseErrorMessageTranslator> translators;

    /*public List<IDatabaseErrorMessageTranslator> getTranslators() {
        return translators;
    }*/

    public void setTranslators(List<IDatabaseErrorMessageTranslator> translators) {
        this.translators = translators;
        this.translators.add(new DefaultDatabaseErrorMessageTranslator());
    }

    public DatabaseErrorMessage getErrorMessage(DataAccessException ex) {
    	logger.error("failed : ", ex);
    	
        return new DatabaseErrorMessage(-1002, "fatal", ex.getMessage());
    }

    public DataSource getDataSource() {
        return dataSource;
    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

}
