package com.nbdf.commons.ui;

import java.math.BigDecimal;
import java.sql.Types;
import java.util.Date;

import com.nexacro17.xapi.data.DataTypes;

/**
 * @Class ConvertDataType
 * @Description 데이타 타입을 변환하는 클래스
 * @Modification
 * 
 * @author lessor
 * @version 1.0
 * @see
 */
public class ConvertDataType {

    /**
     * 파라미터의 데이터 타입 구하기
     * 
     * @param obj
     * @return
     */
    public static final int getPlatformDataType(Object obj) {
        if (obj == null)
            return DataTypes.STRING;
        else 
        	return getPlatformDataType(obj.getClass());
    }

    /**
     * 파라미터 clazz 의 타입 구하기
     * 
     * @param clazz
     * @return
     */
    public static final int getPlatformDataType(Class<?> clazz) {
        int dataType = DataTypes.STRING;
        if (clazz == null)
            return dataType;

        String typeName = clazz.getName();
        if (typeName.equals(String.class.getName())) {
            dataType = DataTypes.STRING;
        } else if (typeName.equals(Integer.class.getName())) {
            dataType = DataTypes.INT;
        } else if (typeName.equals(Boolean.class.getName())) {
            dataType = DataTypes.INT;
        } else if (typeName.equals(BigDecimal.class.getName())) {
            dataType = DataTypes.BIG_DECIMAL;
        } else if (typeName.equals(Long.class.getName())) {
            dataType = DataTypes.BIG_DECIMAL;
        } else if (typeName.equals(Double.class.getName())) {
            dataType = DataTypes.FLOAT;
        } else if (typeName.equals(Date.class.getName())) {
            dataType = DataTypes.DATE_TIME;
        } else if (typeName.equals(Byte[].class.getName())) {
            dataType = DataTypes.BLOB;
        }

        return dataType;
    }

    /**
     * 파라미터 sqlVal 으로부터 데이터 타입 구하기
     * 
     * @param sqlVal
     * @return
     */
    public static final int getPlatformDataTypeFromSqlType(int sqlVal) {
        int dataType = DataTypes.STRING;
        switch (sqlVal) {
        case Types.VARCHAR:
        case Types.CHAR:
            dataType = DataTypes.STRING;
            break;
        case Types.BIGINT:
            dataType = DataTypes.LONG;
            break;
        case Types.DECIMAL:
            dataType = DataTypes.LONG;
            break;

        case Types.TINYINT:
        case Types.SMALLINT:
        case Types.INTEGER:
            dataType = DataTypes.INT;
            break;

        case Types.NUMERIC:
            dataType = DataTypes.LONG;
            break;

        case Types.BOOLEAN:
        case Types.BIT:
            dataType = DataTypes.BOOLEAN;
            break;

        case Types.TIME:
            dataType = DataTypes.TIME;
            break;
        case Types.TIMESTAMP:
            dataType = DataTypes.DATE_TIME;
            break;
        case Types.DATE:
            dataType = DataTypes.DATE;
            break;

        case Types.DOUBLE:
        case Types.FLOAT:
            dataType = DataTypes.FLOAT;
            break;
        case Types.BINARY:
            dataType = DataTypes.BLOB;
            break;

        case Types.BLOB:
        case Types.CLOB:
            dataType = DataTypes.BLOB;
            break;
        default:
            dataType = DataTypes.STRING;
            break;
        }

        return dataType;
    }

}
