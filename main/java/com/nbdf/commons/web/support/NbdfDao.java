package com.nbdf.commons.web.support;

import com.nbdf.commons.ui.vo.UiMapDto;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;

public interface NbdfDao {

    public abstract List<Map<String, Object>> addSelect(String queryId);

    public abstract List<Map<String, Object>> addSelect(boolean isSelectPeronalInfo, String queryId, Map<String, Object> map);

    public abstract List<Map<String, Object>> addSelect(String queryId, Map<String, Object> map);

    public abstract List<Map<String, Object>> addSelect(String queryId, List<String> list);

    public abstract List<Map<String, Object>> addSelect(String queryId, int param);

    public abstract List<Map<String, Object>> addSelect(String queryId, String param);

    public abstract Integer addSelectCount(String queryId, Map<String, Object> map);

    public abstract String addSelectOne(String queryId, Map<String, Object> map);

    public abstract Map<String, Object> addSelectOneMap(String queryId, Map<String, Object> map);

    public abstract Integer addInsert(String queryId, Map<String, Object> map);

    public abstract Integer addUpdate(String queryId, Map<String, Object> map);

    public abstract Integer addUpdate(String queryId);

    public abstract Integer addUpdate(String queryId, int param);

    public abstract Integer addUpdate(String queryId, String param);

    public abstract Integer addDelete(String queryId, Map<String, Object> map);

    public abstract Integer saveCud(UiMapDto dto, String nameSpace, String tableAlias);

    public abstract Integer saveCud(UiMapDto dto, String nameSpace, String insert_sqlid, String update_sqlid, String delete_sqlid);

    public abstract Integer saveCud(UiMapDto dto, String dsName, String nameSpace, String[] sql);

    public abstract Integer saveCudWithCheck(UiMapDto dto, String nameSpace, String tableAlias, String checkSql);

    public abstract Integer saveCudWithCheck(UiMapDto dto, String dsName, String nameSpace, String tableAlias, String checkSql);

    public abstract Integer _saveCudWithCheck(UiMapDto dto, String dsName, String nameSpace, String[] sql, String checkSql);

    public abstract Integer saveCudHist(UiMapDto dto, String nameSpace, String tableAlias, String checkSql, String histSql);

    public abstract Integer saveCudDuplCheck(UiMapDto dto, String nameSpace, String tableAlias, String checkSql);

    public abstract Integer saveCudHist(UiMapDto dto, String dsName, String nameSpace, String[] sql, String dupSql, String histSql);

    public abstract Map<String, Object> setWhoColumn(Map<String, Object> param);

    // EgovAbstractMapper Interface
    public abstract <E> List<E> selectList(String queryId);

    public abstract <E> List<E> selectList(String queryId, Object parameterObject);

    public abstract <E> List<E> selectList(String queryId, Object parameterObject, RowBounds rowBounds);

    public abstract <T> T selectOne(String queryId);

    public abstract <T> T selectOne(String queryId, Object parameterObject);

    public abstract int update(String queryId);

    public abstract int update(String queryId, Object parameterObject);

    public abstract int insert(String queryId);

    public abstract int insert(String queryId, Object parameterObject);

    public abstract int delete(String queryId);

    public abstract int delete(String queryId, Object parameterObject);
    
    public abstract void clearCache();

    public abstract int batchUpdate(String queryId, List<Map<String, Object>> list);

    
}