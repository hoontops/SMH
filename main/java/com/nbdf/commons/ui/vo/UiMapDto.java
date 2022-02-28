package com.nbdf.commons.ui.vo;

import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.vo.BaseVo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

/**
 * @Class UiMapDto
 * @Description UiMapDto 클래스
 * @Modification
 *
 * @author lessor
 * @version 1.0
 * @see
 */
@SuppressWarnings("serial")
public class UiMapDto extends BaseVo {

    /**
     * transaction 정보를 가지는 Dataset을 Map 형태로 변경
     */
    private DataSetMap tranInfoMap = new DataSetMap();

    /**
     * request 된 Variable 정보
     */
    private Map<String, Object> inVariableMap;

    /**
     * response 할 Variable 정보
     */
    private Map<String, Object> outVariableMap;

    /**
     * Request 된 DataSets 정보 <DataSetName, DataSetMap>
     */
    private Map<String, DataSetMap> inDataSetMap = new HashMap<>();

    /**
     * Respose 할 DataSets 정보 <DataSetName, DataSetMap>
     */
    private Map<String, DataSetMap> outDataSetMap;

    /**
     * 데이터셋리스트 변수 추가 - 2015.11.18
     */
    private DataSetList dataSetList;

    public UiMapDto(PlatformData data) {
        super();

        final DataSetList dsList = data.getDataSetList();

        //2015.11.18  추가 - 데이터셋리스트 설정
        setDataSetList(dsList);
        setVariableMap(data.getVariableList(), dsList);
        // setDataSetListAsMap(dsList);
    }

    /**
     * DataSetList 설정 - 2015.11.18  추가
     *
     * @param dataSetList
     *            DataSetList
     * @return
     */
    public void setDataSetList(DataSetList dataSetList) {
        this.dataSetList = dataSetList;
    }

    /**
    * @fn : getDataSetList
    * @brief : 데이터셋리스트 반환 - 2015.11.18  추가
    * @Method Name : getDataSetList
    * @remark
    * @Create Date: 2015 2015. 11. 18. 오후 8:00:16
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 11. 18.        IMCS     최초  생성
     *
     */
    public DataSetList getDataSetList() {
        return this.dataSetList;
    }
    /**
     * 키에 해당하는 객체를 추출
     *
     * @param key
     *            키
     * @return 키에 해당하는 객체
     */
    public Object getVariable(String key) {
        Object val = null;
        if (inVariableMap != null && inVariableMap.containsKey(key)) {
            val = inVariableMap.get(key);
        }
        return val;
    }

    /**
     * 키값을 VariableList에 설정 -- 2015.11.26 추가
     *
     * @param key
     *            키
     * @return 키에 해당하는 객체
     */
    public void setVariable(String key, Object value) {
        if (inVariableMap != null ) {
            inVariableMap.put(key, value);
        }
    }

    /**
     * DataSet 의 n열에 해당하는 객체 가져오기
     *
     * @param ds
     *            DataSet 객체
     * @param nRow
     *            열 번호
     * @return 열에 해당하는 객체 정보
     */
    protected Map<String, Object> getDataSetMap(DataSet ds, int nRow) {
        Map<String, Object> map = new HashMap<>();
        if (ds == null || nRow < 0 || ds.getRowCount() <= nRow)
            return map;

        for (int i = 0, n = ds.getColumnCount(); i < n; i++) {
            String colName = ds.getColumn(i).getName();
            Object colData = ds.getObject(nRow, colName);
            map.put(colName, colData);
        }
        return map;
    }

    /**
     * VariableList 에 해당하는 정보에서 추출하여 Map 객체에 담기
     *
     * @param vList
     */
    public void setVariableMap(VariableList vList) {
        inVariableMap = new HashMap<>();
        for (int i = 0, n = vList.size(); i < n; i++) {
            inVariableMap.put(vList.get(i).getName(), vList.get(i).getObject());
        }
    }

    /**
     * UI 툴에서 받은 파라미터 정보를 추출하여 셋팅
     *
     * @param vList
     * @param dsList
     */
    public void setVariableMap(VariableList vList, DataSetList dsList) {
        // Parameter Info
        DataSet dsParam = dsList.get(UiConstant.PARAM_INFO_DATASET_NAME);
        Map<String, Object> paramMap = getDataSetMap(dsParam, 0);

        // Session Info
        DataSet dsUserInfo = dsList.get(UiConstant.SESSION_USER_DATASET_NAME);
        Map<String, Object> userInfoMap = getDataSetMap(dsUserInfo, 0);

        // Paging Info
        DataSet dsPaging = dsList.get(UiConstant.PAGING_DATASET_NAME);
        Map<String, Object> pagingMap = getDataSetMap(dsPaging, 0);

        inVariableMap = new HashMap<>();
        for (int i = 0; i < vList.size(); i++) {
            inVariableMap.put(vList.get(i).getName(), vList.get(i).getObject());
        }

        inVariableMap.put(UiConstant.SESSION_USER_MAP_NAME, userInfoMap);
        inVariableMap.put(UiConstant.PAGING_MAP_NAME, pagingMap);

        // Parameter DataSet을 변수로 처리
        if (paramMap != null) {
            Iterator<String> iter = paramMap.keySet().iterator();
            while (iter.hasNext()) {
                String key = iter.next();
                Object value = paramMap.get(key);
                inVariableMap.put(key, value);
            }
        }
        setTranInfoMap(dsList);
        setInDataSetMap(dsList, userInfoMap, pagingMap);
    }

    /**
     * DataSet 중에 Transaction 정보를 가진 DataSet을 Map 정보로 바꾼다.
     *
     * @param dsList
     * @param datasetName
     */
    public void setTranInfoMap(DataSetList dsList) {
        DataSet dsTransInfo = dsList.get(UiConstant.TRAN_INFO_DATASET_NAME);
        if (dsTransInfo == null) {
            return;
        }

        for (int i = 0, n = dsTransInfo.getRowCount(); i < n; i++) {
            Map<String, Object> tranInfoRow = new HashMap<>();
            for (int j = 0; j < dsTransInfo.getColumnCount(); j++) {
                tranInfoRow.put(dsTransInfo.getColumn(j).getName(), dsTransInfo.getString(i, j));
            }
            tranInfoMap.add(tranInfoRow);
        }
    }

    /**
     * n 개의 input DataSet을 Map에 넣는다. Map의 key 값은 inputset이름이 들어가며 value는 List객체가 들어간다. <br />
     * List 객체는 Map(column, value)를 가진다.
     *
     * @param dsList
     */
    public void setInDataSetMap(DataSetList dsList, Map<String, Object> userInfoMap, Map<String, Object> pagingMap) {
        for (int i = 0, n = tranInfoMap.size(); i < n; i++) {
            String dsName = (String) tranInfoMap.getMapValue(i, UiConstant.TX_IN_DATASET_ATTR_NAME);
            DataSet ds = dsList.get(dsName);
            if (ds != null) {
                DataSetMap dsMap = new DataSetMap();
                dsMap.convertDataSet2DataSetMap(ds, userInfoMap, pagingMap);
                inDataSetMap.put(dsName, dsMap);
            }
        }
    }

    public void setDataSetListAsMap(DataSetList dsList) {
        // Session Info
        DataSet dsUserInfo = dsList.remove(UiConstant.SESSION_USER_DATASET_NAME);
        Map<String, Object> userInfoMap = getDataSetMap(dsUserInfo, 0);

        // Paging Info
        DataSet dsPaging = dsList.remove(UiConstant.PAGING_DATASET_NAME);
        Map<String, Object> pagingMap = getDataSetMap(dsPaging, 0);

        for (int i = 0; i < dsList.size(); i++) {
            final String dsName = dsList.get(i).getName();
            DataSet dataset = new DataSet(dsName);
            if (dataset != null) {
                DataSetMap datasetData = new DataSetMap();
                datasetData.convertDataSet2DataSetMap(dataset, userInfoMap, pagingMap);
                inDataSetMap.put(dsName, datasetData);
            }
        }
    }

    /**
     * dataset 이름을 parsing 한다.
     *
     * @param dsName
     *            list of dataset name
     * @param type
     *            왼쪽은 0, 오른쪽은 1
     * @return
     */
    public List<String> getDataSetName(String dsName, int type) {
        List<String> dsNameList = new ArrayList<>();
        StringTokenizer token = new StringTokenizer(dsName, " ");
        while (token.hasMoreElements()) {
            String str1 = token.nextToken();
            StringTokenizer sToken1 = new StringTokenizer(str1, "=");
            String subDsName = null;
            if (type == 0) {
                subDsName = sToken1.nextToken();
            } else if (type == 1) {
                sToken1.nextToken();
                subDsName = sToken1.nextToken();
            }
            if (subDsName != null && subDsName.trim().length() > 0)
                dsNameList.add(subDsName);
        }
        return dsNameList;
    }

    public DataSetMap getTranInfoMap() {
        return tranInfoMap;
    }

    public Map<String, DataSetMap> getInDataSetMap() {
        return inDataSetMap;
    }

    public Map<String, DataSetMap> getOutDataSetMap() {
        if (outDataSetMap == null)
            outDataSetMap = new HashMap<>();
        return outDataSetMap;
    }

    public Map<String, Object> getInVariableMap() {
        return inVariableMap;
    }

    public Map<String, Object> getOutVariableMap() {
        if (outVariableMap == null)
            outVariableMap = new HashMap<>();
        return outVariableMap;
    }

    /**
     * Map 에 해당하는 객체 정보를 출력
     *
     * @param map
     * @return
     */
    protected String printMap(Map<String, String> map) {
        String buffer = "";
        Iterator<String> iter = map.keySet().iterator();
        while (iter.hasNext()) {
            String key = iter.next();
            String value = map.get(key);
            buffer += key + ":" + value + "\n";
        }
        return buffer;
    }

}
