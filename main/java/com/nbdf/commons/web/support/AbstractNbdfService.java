package com.nbdf.commons.web.support;

import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.AttributeKey;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

/**
 * @Class AbstractImcsService
 * @Description 서비스 구현체가 상속받는 추상클래스 <br />
 *              또한 AbstractImcsService 를 상속받는 클래스는 Logger 클래스 선언 없이 protected로 선언된 logger를 사용할 수 있다.
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 *
 *      (c) Copyright Built1 2014. All rights reserved.
 */
/**
* @file: AbstractImcsService.java
* @Package: com.nbdf.commons.web.support
* @Project name: IFC MES시스템 구축
* @Type name: AbstractImcsService
* @Company: Built1
* @Create Date: 2015 2015. 4. 15. 오전 11:48:55
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 15.        JIn Sung Ha     최초  생성
 *
*/
public class AbstractNbdfService {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    @Qualifier("Props")
    protected Properties prop;

    @Autowired
    @Qualifier("commonsProp")
    protected Properties commonProp;

    /**
     * 키 값을 이용하여 Properties 로부터 String 타입으로 가져오기
     *
     * @param key
     *            키 of the Properties
     * @return 문자열 값 of the Properties
     */
    public String getPropertyAsString(String key) {
        return prop.getProperty(key);
    }

    /**
     * 키 값을 이용하여 Properties 로부터 String 타입으로 가져오며 존재하지 않는 경우에는 defVal 값으로 리턴
     *
     * @param key
     *            키 of the Properties
     * @param defVal
     *            디폴트값
     * @return 문자열 값 of the Properties
     */
    public String getPropertyAsString(String key, String defVal) {
        return prop.getProperty(key, defVal);
    }

    /**
     * 키 값을 이용하여 Properties 로부터 String 타입으로 가져오기
     *
     * @param key
     *            키 of the Properties
     * @return 문자열 값 of the Properties
     */
    public String getProperty(String key) {
        return prop.getProperty(key);
    }

    /**
     * 키 값을 이용하여 Properties 로부터 String 타입으로 가져오기(commons.properties)
     *
     * @param key
     *            키 of the Properties
     * @return 문자열 값 of the Properties
     */
    public String getComProperty(String key) {
        return commonProp.getProperty(key);
    }

    /**
     * Client 로부터 받은 정보에서 파라미터 정보를 추출하기
     *
     * @param dto
     * @return
     */
    protected Map<String, Object> getVariableMap(UiMapDto dto) {
        setWhoCol(dto.getInVariableMap());
        return dto.getInVariableMap();
    }
 // TODO [YBYOON] 8월 7일 삭제 예정
    @Deprecated
    protected Object getVariableMap(UiMapDto vo, String key) {
        final Map<String, Object> map = getVariableMap(vo);
        setWhoCol(map);
        return map.containsKey(key) ? map.get(key) : null;
    }

    /**
     * Client 로부터 받은 파라미터 정보를 가져오기
     *
     * @param dto
     * @return
     */
    protected Map<String, Object> getParametersMap(UiMapDto dto) {
        String dsName = getDsName(dto, UiConstant.TX_IN_DATASET_ATTR_NAME);
        Map<String, Object> map = null;
        if (dsName == null || "".equals(dsName)) {
            map = dto.getInVariableMap();
            setWhoCol(map);
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

    /**
     * Client 로부터 받은 파라미터 중에서 DataSetMap 가져오기
     *
     * @param dto
     * @return
     */
    protected DataSetMap getParametersDataSetMap(UiMapDto dto) {
        String dsName = getDsName(dto, UiConstant.TX_IN_DATASET_ATTR_NAME);
        DataSetMap inDsMap = null;
        if (dsName == null || "".equals(dsName)) {
            return null;
        } else {
            Map<String, DataSetMap> inDataset = dto.getInDataSetMap();
            inDsMap = inDataset.get(dsName);
            /* HistoryServiceAdvice에서 처리 (중복호출 제거)
            Map<String, Object> param;
            for (int i = 0, n = inDsMap.size(); i < n; i++) {
                param = inDsMap.get(i);
                setWhoCol(param);
            }
            */
        }
        return inDsMap;
    }

    /**
     * Client 로부터 받은 파라미터 중에서 dsName에 해당하는 DataSetMap 가져오기
     *
     * @param dto
     * @param dsName
     * @return
     */
    protected DataSetMap getParametersDataSetMap(UiMapDto dto, String dsName) {
        DataSetMap inDsMap = null;
        if (dsName != null && !"".equals(dsName)) {
            Map<String, DataSetMap> inDataset = dto.getInDataSetMap();
            inDsMap = inDataset.get(dsName);
            /* HistoryServiceAdvice에서 처리 (중복호출 제거)
            Map<String, Object> param;
            for (int i = 0, n = inDsMap.size(); i < n; i++) {
                param = inDsMap.get(i);
                setWhoCol(param);
            }
            */
        }
        return inDsMap;
    }

    /**
     * UiMapDto 클래스에서 key에 해당하는 값 가져오기
     *
     * @param dto
     * @param key
     * @return
     */
    private String getDsName(UiMapDto dto, String key) {
        DataSetMap txMap = dto.getTranInfoMap();

        if (txMap == null || txMap.size() == 0) {
            return null;
        }

        String dsName = (String) txMap.getMapValue(0, key);
        return dsName;
    }

    /**
     * UiMapDto 클래스에서 key에 해당하는 값 가져오는 데 값이 없는 경우에는 defDsName 으로 리턴
     *
     * @param dto
     * @param key
     * @param defDsName
     * @return
     */
    protected String getDsName(UiMapDto dto, String key, String defDsName) {
        String dsName = getDsName(dto, key);
        if (dsName == null || "".equals(dsName))
            dsName = defDsName;
        return dsName;
    }

    /**
     * UiMapDto 클래스에 dsName 으로 List<Map<String, Object>> 형태로 저장
     *
     * @param dto
     * @param list
     * @param dsName
     */
    protected void putDataSetMap(UiMapDto dto, List<Map<String, Object>> list, String dsName) {
        DataSetMap dsMap = new DataSetMap();
        dsMap.setRowMaps(list);
        Map<String, DataSetMap> outDataset = dto.getOutDataSetMap();
        outDataset.put(dsName, dsMap);
    }

    /**
     * UiMapDto 클래스에 요청받은 값을 찾아 List<Map<String, Object>> 형태로 저장
     *
     * @param dto
     * @param list
     */
    protected void putDataSetMap(UiMapDto dto, List<Map<String, Object>> list) {
        String dsName = getDsName(dto, UiConstant.TX_OUT_DATASET_ATTR_NAME);
        if (dsName == null) {
            dsName = "output";
        }
        putDataSetMap(dto, list, dsName);
    }

    /**
     * UiMapDto 클래스에 Map<String, Object> 형태를 List<Map<String, Object>> 형태로 변환하여 저장
     *
     * @param dto
     * @param map
     */
    protected void putDataSetMap(UiMapDto dto, Map<String, Object> map) {
        List<Map<String, Object>> list = new ArrayList<>();
        if (map == null) {
            map = new HashMap<>();
        }
        list.add(map);
        putDataSetMap(dto, list);
    }
    
    protected void putDataSetMap(UiMapDto dto, Map<String, Object> map, String dsName) {
    	List<Map<String, Object>> list = new ArrayList<>();
        if (map == null) {
            map = new HashMap<>();
        }
        list.add(map);
        putDataSetMap(dto, list, dsName);
    }

    /**
     * UiMapDto 클래스에 Map<String, Object> 형태를 List<Map<String, Object>> 형태로 변환하여 "<code>result</code>" 값으로 저장
     *
     * @param dto
     * @param obj
     * @param clazz
     */
    protected void putDataSetMap(UiMapDto dto, Object obj, Class<Integer> clazz) {
        try {
            List<Map<String, Object>> list = new ArrayList<>();
            if (obj == null)
                obj = clazz.getClass().newInstance();
            Map<String, Object> map = new HashMap<>();
            map.put(AttributeKey.RESULT, obj);
            list.add(map);
            putDataSetMap(dto, list);
        } catch (InstantiationException | IllegalAccessException e) {
            logger.error("{}", e.getMessage(), e);
        }
    }

    /**
     * UiMapDto 클래스에 int 타입을 List<Map<String, Object>> 형태로 변환하여 "<code>result</code>" 값으로 저장
     *
     * @param dto
     * @param sum
     */
    protected void putDataSetMap(UiMapDto dto, int sum) {
        putDataSetMap(dto, sum, Integer.class);
    }

    /**
     * Map<String, Object> 형태의 요청값 가져오기
     *
     * @param param
     * @return
     * @see com.nexacro17.xapi.data.DataSet
     */
    protected int getRowType(Map<String, Object> param) {
    	if(param.get(UiConstant.DATASET_ROW_TYPE) == null) return -1;
        return ((Integer) param.get(UiConstant.DATASET_ROW_TYPE)).intValue();
    }

    // TODO [YBYOON] 8월 7일 삭제 예정
    public Map<String, Object> setWhoColumn(Map<String, Object> param){
    	if(SessionUtil.getSessionValue("USER_ID") == null) return param;
    	
        param.put("CREATED_BY", SessionUtil.getSessionValue("ID"));
        param.put("LAST_UPDATED_BY",SessionUtil.getSessionValue("ID"));
        param.put("LAST_UPDATE_LOGIN",SessionUtil.getSessionValue("LGN_LOG_ID"));
    	param.put("CREATOR", SessionUtil.getSessionValue("USER_ID"));
        param.put("MODIFIER", SessionUtil.getSessionValue("USER_ID"));
    	param.put("SESSION_LANGUAGETYPE", SessionUtil.getSessionValue("LANGUAGETYPE"));
        param.put("SESSION_SITETYPE", SessionUtil.getSessionValue("SITETYPE"));
        param.put("SESSION_ENTERPRISEID", SessionUtil.getSessionValue("ENTERPRISEID"));
        return param;
    }

    /**
    * @fn : setWhoCol
    * @brief : Session에 저장된 정보를 이용하여 WhoColumn 설정
    * @Method Name : setWhoCol
    * @remark
    * @Create Date: 2015 2015. 8. 5. 오후 2:57:29
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 8. 5.    진성하     최초  생성
     *
    */
    protected void setWhoCol(Map<String, Object> map){
    	//logger.error("SESSION_COMPANY_CD-->"+SessionUtil.getSessionValue("COMPANY_CD"));
//    	String createdBy = (String) SessionUtil.getSessionValue("ID");
        map.put("SESSION_ID", SessionUtil.getSessionValue("ID"));
        map.put("CREATED_BY", SessionUtil.getSessionValue("ID"));
        map.put("LAST_UPDATED_BY",SessionUtil.getSessionValue("ID"));
        map.put("CREATOR", SessionUtil.getSessionValue("USER_ID"));
        map.put("MODIFIER",SessionUtil.getSessionValue("USER_ID"));
        map.put("SESSION_USER_ID", SessionUtil.getSessionValue("USER_ID"));
        map.put("SESSION_LANGUAGETYPE", SessionUtil.getSessionValue("LANGUAGETYPE"));
        map.put("SESSION_SITETYPE",SessionUtil.getSessionValue("SITETYPE"));
        map.put("SESSION_ENTERPRISEID", SessionUtil.getSessionValue("ENTERPRISEID"));
        map.put("SESSION_SAMPLE2STEP", SessionUtil.getSessionValue("SAMPLE2STEP"));
        map.put("PERSONID",SessionUtil.getSessionValue("PERSONID"));
        
    }

}
