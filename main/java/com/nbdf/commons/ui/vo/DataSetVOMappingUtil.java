package com.nbdf.commons.ui.vo;

import com.nbdf.commons.ui.ConvertDataType;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Iterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro17.xapi.data.DataSet;

/**
 * @Class DataSetVOMappingUtil
 * @Description DataSetVOMapping 유틸 클래스
 * @Modification
 *
 * @author lessor
 * @version 1.0
 * @see
 */
public class DataSetVOMappingUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(DataSetVOMappingUtil.class);

    /**
    * @fn : getVOFromDataSetRow
    * @brief : 함수 간략한 설명
    * @Method Name : getVOFromDataSetRow
    * @remark
    * @Create Date: 2015 2015. 8. 30. 오후 2:22:15
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 8. 30.        진성하    예외처리 적용
     *
    */
    public static final Object getVOFromDataSetRow(String className, DataSet ds, int rowIndex, int isDelete){
        Object vo = null;
        try{
            Class<?> clazz = Class.forName(className);
            vo = clazz.newInstance();

            ClassInfo classInfo = ClassInfo.getInstance(clazz);
            Iterator<String> iter = classInfo.getMembers().iterator();
            while (iter.hasNext()) {
                String memberName = iter.next();
                Object data;
                if (isDelete == 0) // isDelete 에 따라 column 값을 읽어오는 API가 다름
                    data = ds.getObject(rowIndex, memberName);
                else
                    data = ds.getRemovedData(rowIndex, memberName);

                Method m = classInfo.getSetterMethod(memberName);
                if (m != null && data != null)
                    m.invoke(vo, data);
            }
        } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | IllegalArgumentException | InvocationTargetException  e) {
            LOGGER.error("{}", e.getMessage(), e);
        }

        return vo;
    }

    /**
     * VO의 값들을 DataSet의 하나의 row에 추가한다.
     *
     * @param vo
     * @param className
     * @param ds
     * @param rowIndex
     */
    public static final void setDataSetRowFromVO(Object vo, String className, DataSet ds, int rowIndex) {
        try {
            Class<?> clazz = Class.forName(className);
            vo = clazz.cast(vo);
            ClassInfo classInfo = ClassInfo.getInstance(clazz);

            Iterator<String> iter = classInfo.getMembers().iterator();
            while (iter.hasNext()) {
                String memberName = iter.next();
                Method method = classInfo.getGetterMethod(memberName);
                Object value = null;
                if (method != null)
                    value = method.invoke(vo);
                if (!memberName.equals("rowType")) {
                    ds.set(rowIndex, memberName, value);
                }
            }
        } catch (ClassNotFoundException |  IllegalAccessException | IllegalArgumentException | InvocationTargetException  e) {
            LOGGER.error("{}", e.getMessage(), e);
        }
    }

    /**
     * Class 를 가지고 column을 만든다.
     *
     * @param className
     * @param ds
     */
    public static final void makeDataSetColumn(String className, DataSet ds) {
        try {
            ds.setChangeStructureWithData(true);
            Class<?> clazz = Class.forName(className);
            ClassInfo classInfo = ClassInfo.getInstance(clazz);

            Iterator<String> iter = classInfo.getMembers().iterator();
            while (iter.hasNext()) {
                String memberName = iter.next();
                if (!memberName.equals("rowType")) {
                    Class<?> typeClass = classInfo.getFieldType(memberName);
                    ds.addColumn(memberName, ConvertDataType.getPlatformDataType(typeClass));
                }
            }
            ds.setChangeStructureWithData(false);
        } catch (ClassNotFoundException e) {
            LOGGER.error("{}", e.getMessage(), e);
        }
    }
}
