package com.nbdf.commons.ui.vo;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

/**
 * @Class ClassInfo
 * @Description 클래스 관련 유틸리티
 * @Modification
 * 
 * @author lessor
 * @version 1.0
 * @see
 */
public class ClassInfo {

    private Map<String, Method> getterMethods = new HashMap<>();

    private Map<String, Method> setterMethods = new HashMap<>();

    private Map<String, Class<?>> fields = new HashMap<>();

    private Class<?> clazz;

    private ClassInfo(Class<?> clazz) {
        this.clazz = clazz;
        initialize();
    }

    public static final ClassInfo getInstance(Class<?> clazz) {
        return new ClassInfo(clazz);
    }

    private void initialize() {
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            String name = method.getName();
            if (name.startsWith("set") && method.getParameterTypes().length == 1) {
                String mem = name.substring(3);
                mem = mem.substring(0, 1).toLowerCase(Locale.US) + mem.substring(1);
                setterMethods.put(mem, method);
            }

            if (name.startsWith("get") && method.getParameterTypes().length == 0) {
                String mem = name.substring(3);
                mem = mem.substring(0, 1).toLowerCase(Locale.US) + mem.substring(1);
                getterMethods.put(mem, method);
            }
        }
    }

    protected void addFields() {
        for (Field field : clazz.getDeclaredFields()) {
            fields.put(field.getName(), field.getType());
        }
    }

    public Set<String> getMembers() {
        return setterMethods.keySet();
    }

    public Method getSetterMethod(String memberName) {
        return setterMethods.get(memberName);
    }

    public Method getGetterMethod(String memberName) {
        return getterMethods.get(memberName);
    }

    public Class<?> getFieldType(String fieldName) {
        return fields.get(fieldName);
    }

}
