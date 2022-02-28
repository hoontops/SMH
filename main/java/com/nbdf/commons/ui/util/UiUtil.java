package com.nbdf.commons.ui.util;

import com.nbdf.commons.ui.ConvertDataType;
import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.vo.DataSetMap;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;

/**
 * @Class UiUtil
 * @Description UI Adapter의 실행을 돕는 Helper 클래스
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 */
public class UiUtil {

    private static final String ERROR_CODE = "ErrorCode";
    private static final String ERROR_MESSAGE = "ErrorMsg";
    protected static final Logger logger = LoggerFactory.getLogger(UiUtil.class);

    /**
     *
     * @param model
     * @return
     */
    @SuppressWarnings("unchecked")
    public static final VariableList setVariableList(Map<String, Object> model) {
        VariableList variableList = new VariableList();
        variableList.add(UiConstant.ERROR_CODE, (String) model.get(UiConstant.ERROR_CODE));
        variableList.add(UiConstant.ERROR_MSG, (String) model.get(UiConstant.ERROR_MSG));
        Map<String, Object> map = (Map<String, Object>) model.get(UiConstant.OUT_VARIABLES_ATT_NAME);
        if (map == null)
            return variableList;

        Iterator<String> iter = map.keySet().iterator();
        while (iter.hasNext()) {
            String key = iter.next();
            Object value = map.get(key);
            Variable var = makeVariable(key, value);
            variableList.add(var);
        }
        return variableList;
    }

    public static final Variable makeVariable(String name, Object value) {
        int dataType = ConvertDataType.getPlatformDataType(value);
        Variable var = new Variable(name);
        var.setType(dataType);
        var.set(value);
        return var;
    }

    /**
     * List 형태의 Map 정보를 이용하여 하나의 Dataset의 데이터를 세팅한다.
     *
     * @param dataSetMap
     * @param ds
     */
    public static final void setDataSet(DataSetMap dataSetMap, DataSet ds) {
        for (int i = 0, n = dataSetMap.size(); i < n; i++) {
            Set<String> keySet = dataSetMap.getKeySet(i);
            Iterator<String> iter = keySet.iterator();
            if (keySet.contains(UiConstant.ONLY_METADATA_RETURN)) {
                while (iter.hasNext()) {
                    String key = iter.next();
                    if (!key.equals(UiConstant.ONLY_METADATA_RETURN)) {
                        int value = (Integer) dataSetMap.getMapValue(i, key);
                        if (ds.getColumn(key) == null) {
                            ds.setChangeStructureWithData(true);
                            ds.addColumn(key, ConvertDataType.getPlatformDataTypeFromSqlType(value));
                        }
                    }
                }
            } else {
                int rowIndex = ds.newRow();
                while (iter.hasNext()) {
                    String key = iter.next();
                    Object value = dataSetMap.getMapValue(i, key);
                    if (ds.getColumn(key) == null) {
                        ds.setChangeStructureWithData(true);
                        ds.addColumn(key, ConvertDataType.getPlatformDataType(value));
                    }
                    ds.set(rowIndex, key, value);
                }
            }
        }
    }

    @SuppressWarnings("unchecked")
    public static final DataSetList setDataSetList(Map<String, Object> model) {
        DataSetList dataSetList = new DataSetList();
        // 여러 개의 Dataset으로 이루어져있다.
        Map<String, DataSetMap> map = (Map<String, DataSetMap>) model.get(UiConstant.OUT_DATASET_ATT_NAME);
        if (map == null)
            return dataSetList;

        Iterator<String> iter = map.keySet().iterator();
        while (iter.hasNext()) {
            // 하나의 DataSet으로 이루어진 정보(List)를 꺼낸다.
            String dsName = iter.next();
            // DataSetMap dsMap = new DataSetMap();
            DataSetMap dsMap = map.get(dsName);
            DataSet ds = new DataSet(dsName);
            setDataSet(dsMap, ds);
            dataSetList.add(ds);
        }
        return dataSetList;
    }

    /**
     * HttpServletRequest로부터 UI에서 전송된 Data를 읽어들인다.
     *
     * @param request
     *            {@link HttpServletRequest} 객체
     * @return {@link PlatformData} 객체
     * @throws PlatformException
     */
    public static final PlatformData getPlatformDataFrom(HttpServletRequest request) throws PlatformException {
        PlatformData data = null;
        HttpPlatformRequest xRequest = new HttpPlatformRequest(request);
        // 예외가 발생한 경우 자동적으로 로그 저장 위치에 수신받은 데이터(stream)가 저장됨
        xRequest.receiveData();
        data = xRequest.getData();
        return data;
    }

    /**
     * 서비스 실행 후 UI로 Data를 response 객체에 담아 전송한다.
     *
     * @param outDataSetList
     *            {@link DataSetList} 서비스 실행 후 UI로 전송할 DataSet 리스트
     * @param outVariableList
     *            {@link VariableList} 서비스 실행 후 UI로 전송할 Variable 리스트
     * @param response
     *            {@link HttpServletResponse} 객체
     * @throws Exception
     */
    public static final void sendData(DataSetList outDataSetList, VariableList outVariableList, HttpServletResponse response) throws Exception {
        PlatformData data = new PlatformData();
        if (outDataSetList != null) {
            data.setDataSetList(outDataSetList);
        }
        if (outVariableList != null) {
            if (outVariableList.contains("JSESSIONID")) { // jsessionid 는 response에 담지 않는다.
                outVariableList.remove("JSESSIONID");
            }
            data.setVariableList(outVariableList);
        }
        HttpPlatformResponse resp = new HttpPlatformResponse(response);
        resp.setData(data);
        resp.sendData();
    }

    /**
     * 성공여부에 따라 response 객체에 담을 VariableList에 메세지를 담는다.
     *
     * @param success
     *            서비스 실행 성공여부
     * @param outVariableList
     *            UI로 전송할 Variable 리스트
     * @param message
     *            문자열 타입의 UI로 전송할 메세지
     */
    public static final void writeMessage(boolean success, VariableList outVariableList, String message) {
        if (message != null) {
            outVariableList.add(ERROR_CODE, success ? 0 : -1);
            outVariableList.add(ERROR_MESSAGE, message);
            logger.debug(ERROR_MESSAGE + ": {}", message);
        }
    }

}