package com.nbdf.commons.web.support;

import com.ibm.icu.util.BytesTrie.Iterator;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

/**
 * @file: AbstractDao.java * @Class AbstractDao
 * @Description DAO 추상클래스 <br />
 *              또한 AbstractDao 를 상속받는 클래스는 Logger 클래스 선언 없이 protected로 선언된 logger를 사용할 수 있다.
 * @Package: com.nbdf.commons.web.support
 * @Project name: IFC MES시스템 구축
 * @Type name: AbstractDao
 * @Company: Built1
 * @Create Date: 2015 2015. 3. 2. 오전 11:08:42
 * @Author: 채기용
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2015. 3. 2. 채기용 최초 생성
 *
 */

public abstract class AbstractNbdfDao extends EgovAbstractMapper implements NbdfDao {
//    final String DAO_NAME = "com.nbdf.commons.web.support.AbstractImcsDao";
//    private boolean sessionCheck = false;

 //   @Value("#{commonsProp['env.session.check']?:false}")
 //   private boolean sessionCheck;

    protected Logger logger = LoggerFactory.getLogger(getClass());

//    @Resource(name = "sqlSessionFactory")
//    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {
//        super.setSqlSessionFactory(sqlSession);
//    }

    @Override
    public List<Map<String, Object>> addSelect(String queryId) {
        return selectList(queryId);
//        StopWatch stopWatch = new StopWatch(DAO_NAME);
//        stopWatch.start(DAO_NAME);
//        List l = selectList(queryId);
//        stopWatch.stop();
//        logger.debug(stopWatch.shortSummary());
//        return l;
    }

    @Override
    public List<Map<String, Object>> addSelect(String queryId, Map<String, Object> map) {
        return selectList(queryId, map);
    }

    @Override
    public List<Map<String, Object>> addSelect(boolean isSelectPersonalInfo, String queryId, Map<String, Object> map) {
    	SessionUtil.setSelectPersonalInfo();
        return selectList(queryId, map);
    }
    
    
    @Override
    public List<Map<String, Object>> addSelect(String queryId, List<String> list) {
        return selectList(queryId, list);
    }

    @Override
    public List<Map<String, Object>> addSelect(String queryId, int param) {
        return selectList(queryId, param);
    }

    @Override
    public List<Map<String, Object>> addSelect(String queryId, String param) {
        return selectList(queryId, param);
    }

    @Override
    public Integer addSelectCount(String queryId, Map<String, Object> map) {
        return selectOne(queryId, map);
    }

    @Override
    public String addSelectOne(String queryId, Map<String, Object> map) {
        return selectOne(queryId, map);
    }

    @Override
    public Map<String, Object> addSelectOneMap(String queryId, Map<String, Object> map) {
        return selectOne(queryId, map);
    }

    @Override
    public Integer addInsert(String queryId, Map<String, Object> map) {
        return insert(queryId, map);
    }

    @Override
    public Integer addUpdate(String queryId, Map<String, Object> map) {
        return update(queryId, map);
    }

    @Override
    public Integer addUpdate(String queryId) {
        return update(queryId);
    }

    @Override
    public Integer addUpdate(String queryId, int param) {
        return update(queryId, param);
    }

    @Override
    public Integer addUpdate(String queryId, String param) {
        return update(queryId, param);
    }

    @Override
    public Integer addDelete(String queryId, Map<String, Object> map) {
        return delete(queryId, map);
    }

    private String getDsName(UiMapDto dto, String key) {
        DataSetMap txMap = dto.getTranInfoMap();
        String dsName = (String) txMap.getMapValue(0, key);
        return dsName;
    }

    protected Map<String, Object> getParametersMap(UiMapDto dto) {
        String dsName = getDsName(dto, UiConstant.TX_IN_DATASET_ATTR_NAME);

        Map<String, Object> map = null;
        if (dsName == null || "".equals(dsName)) {
            map = dto.getInVariableMap();
        } else {
            Map<String, DataSetMap> inDataset = dto.getInDataSetMap();
            DataSetMap inDsMap = inDataset.get(dsName);
            if (inDsMap.size() > 0l) {
                map = inDsMap.get(0);
                for (int i = 0, n = inDsMap.size(); i < n; i++) {
                    map = inDsMap.get(i);
                    setWhoCol(map);
                }
            }
        }
        return map;
    }

    public static String toCamelCase(String value) {
        String[] strings = StringUtils.split(value.toLowerCase(), "_");
        for (int i = 1; i < strings.length; i++) {
            strings[i] = StringUtils.capitalize(strings[i]);
        }
        return StringUtils.join(strings);
    }

    public static String getUniqueStringLong() {
        return UUID.randomUUID().toString();
    }

    @Override
    public Integer saveCud(UiMapDto dto, String nameSpace, String tableAlias) {
        return saveCud(dto, "", nameSpace, new String[] { ".insert" + tableAlias, ".update" + tableAlias, ".delete" + tableAlias });
    }

    @Override
    public Integer saveCud(UiMapDto dto, String nameSpace, String insert_sqlid, String update_sqlid, String delete_sqlid) {
        return saveCud(dto, "", nameSpace, new String[] { insert_sqlid, update_sqlid, delete_sqlid });
    }

    @Override
    public Integer saveCud(UiMapDto dto, String dsName, String nameSpace, String[] sql) {

        String dsNm = dsName;
        if (dsNm == null || "".equals(dsNm)) {
            dsNm = getDsName(dto, UiConstant.TX_IN_DATASET_ATTR_NAME);
        }
        DataSetMap paramMap = dto.getInDataSetMap().get(dsNm);

        int type;
        int result = 0;
        Map<String, Object> param;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            setWhoCol(param);
            type = ((Integer) param.get(UiConstant.DATASET_ROW_TYPE));
            result += addUpdate(nameSpace + sql[type - 1], param);
        }
        return result;
    }

    @Override
    public Integer saveCudWithCheck(UiMapDto dto, String nameSpace, String tableAlias, String checkSql) {
        return _saveCudWithCheck(dto, "", nameSpace, new String[] { ".insert" + tableAlias, ".update" + tableAlias, ".delete" + tableAlias }, checkSql);
    }

    @Override
    public Integer saveCudWithCheck(UiMapDto dto, String dsName, String nameSpace, String tableAlias, String checkSql) {
        return _saveCudWithCheck(dto, dsName, nameSpace, new String[] { ".insert" + tableAlias, ".update" + tableAlias, ".delete" + tableAlias }, checkSql);
    }

    @Override
    public Integer _saveCudWithCheck(UiMapDto dto, String dsName, String nameSpace, String[] sql, String checkSql) {
        if (dsName == null || "".equals(dsName)) {
            dsName = getDsName(dto, UiConstant.TX_IN_DATASET_ATTR_NAME);
        }

        DataSetMap paramMap = dto.getInDataSetMap().get(dsName);

        int type;
        int result = 0;
        Map<String, Object> param;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            setWhoCol(param);
            type = ((Integer) param.get(UiConstant.DATASET_ROW_TYPE));
            if (addSelect(nameSpace + checkSql, param).size() > 0) {
                try {
                    throw new BizException("중복된 데이터가 있습니다.");
                } catch (BizException e) {
                    // TODO Auto-generated catch block
                    logger.error("failed: {}", e);
                }
            }
            result += addUpdate(nameSpace + sql[type - 1], param);
        }
        return result;
    }

    @Override
    public Integer saveCudHist(UiMapDto dto, String nameSpace, String tableAlias, String checkSql, String histSql) {
        return saveCudHist(dto, "", nameSpace, new String[] { ".insert" + tableAlias, ".update" + tableAlias, ".delete" + tableAlias }, checkSql, histSql);
    }

    @Override
    public Integer saveCudDuplCheck(UiMapDto dto, String nameSpace, String tableAlias, String checkSql) {
        return saveCudHist(dto, "", nameSpace, new String[] { ".insert" + tableAlias, ".update" + tableAlias, ".delete" + tableAlias }, checkSql, "");
    }

    @Override
    public Integer saveCudHist(UiMapDto dto, String dsName, String nameSpace, String[] sql, String dupSql, String histSql) {
        if (dsName == null || "".equals(dsName)) {
            dsName = getDsName(dto, UiConstant.TX_IN_DATASET_ATTR_NAME);
        }
        DataSetMap paramMap = dto.getInDataSetMap().get(dsName);

        int type;
        int result = 0;
        Map<String, Object> param;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            setWhoCol(param);
            type = ((Integer) param.get(UiConstant.DATASET_ROW_TYPE));
            // type - 1 : Insert, 2: Update
            if (type == 1 && dupSql != null && !"".equals(dupSql)) {
                if (addSelect(nameSpace + dupSql, param).size() > 0) {
                    try {
                        throw new BizException("정상처리되지 않았습니다.");
                    } catch (BizException e) {
                        // TODO Auto-generated catch block
                        logger.error("failed: ", e);
                    }
                }
            }
            result += addUpdate(nameSpace + sql[type - 1], param);
            if (type == 1 || type == 2) {
                if (histSql != null && !"".equals(histSql)) {
                    addUpdate(nameSpace + "." + histSql, param);
                }
            }
        }
        return result;
    }

    /**
     * @fn : setWhoColumn
     * @brief : Session에 저장된 정보를 이용하여 WhoColumn 설정
     * @Method Name : setWhoColumn
     * @Create Date: 2015 2015. 4. 21. 오전 10:47:55
     * @Author: JIn Sung Ha
     * @param: Map<String, Object> param
     * @return: Map
     * @throws : Exception
     */
    // TODO [YBYOON] 8월 7일 삭제 예정
    @Deprecated
    public Map<String, Object> setWhoColumn(Map<String, Object> param) {

        if (SessionManager.getInstance().getSessionMap() != null) {
        	param.put("CREATED_BY", SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ID));
            param.put("LAST_UPDATED_BY", SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ID));
            param.put("LAST_UPDATE_LOGIN", SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_LGN_ID));
        	param.put("CREATOR", SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ACNT));
            param.put("MODIFIER", SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ACNT));

        } else {
            param.put("CREATED_BY", "1004");
            param.put("LAST_UPDATED_BY", "1004");
            param.put("LAST_UPDATE_LOGIN", "9999");
        	param.put("CREATOR", "1004");
            param.put("MODIFIER", "1004");
        }
        return param;
    }

    /**
    * @fn : setWhoCol
    * @brief : Session에 저장된 정보를 이용하여 WhoColumn 설정
    * @Method Name : setWhoCol
    * @remark
    * @Create Date: 2015 2015. 8. 5. 오후 2:56:04
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 8. 5.        진성하     최초  생성
     *
    */
    protected void setWhoCol(Map<String, Object> map){
    	map.put("CREATED_BY", SessionUtil.getSessionValue("USER_ACNT"));
        map.put("LAST_UPDATED_BY",SessionUtil.getSessionValue("USER_ACNT"));
        map.put("LAST_UPDATE_LOGIN",SessionUtil.getSessionValue("LGN_LOG_ID"));
    }

    @Override
    public void clearCache() {
        super.getSqlSession().clearCache();
    }

    @Override
    public int batchUpdate(String queryId, List<Map<String, Object>> list) {
    	int result = 0;
    	java.util.Iterator<Map<String, Object>> it = list.iterator();
    	while (it.hasNext()){
    		result += update(queryId, it.next());
    	}
        return result;
    }
    
}