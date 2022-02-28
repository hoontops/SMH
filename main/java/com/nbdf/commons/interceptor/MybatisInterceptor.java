package com.nbdf.commons.interceptor;

import java.util.HashSet;
import java.util.Properties;
import java.util.Set;

import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class MybatisInterceptor implements Interceptor {
    protected static Logger logger = LoggerFactory.getLogger(MybatisInterceptor.class);

    protected Set<?> encodeColumns = new HashSet();
    protected Set<?> decodeColumns = new HashSet();

    @Override
    public abstract Object intercept(Invocation invocation) throws Throwable;

    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }

    @Override
    public void setProperties(Properties properties) {
        // TODO Auto-generated method stub
    }

    public Set<?> getEncodeColumns() {
        return encodeColumns;
    }

    public void setEncodeColumns(Set<?> encodeColumns) {
        this.encodeColumns = encodeColumns;
    }

    public Set<?> getDecodeColumns() {
        return decodeColumns;
    }

    public void setDecodeColumns(Set<?> decodeColumns) {
        this.decodeColumns = decodeColumns;
    }

}