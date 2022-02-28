package com.nbdf.commons.ui.vo;

import com.nbdf.commons.ui.UiConstant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;

import com.nexacro17.xapi.data.DataSet;

/**
 * @Class DataSetMap
 * @Description DateSetMap vo 클래스
 * @Modification
 *
 * @author lessor
 * @version 1.0
 * @see
 */
public class DataSetMap {

    private List<Map<String, Object>> rowMaps = new ArrayList<>();

    public DataSetMap() {
    }

    public Map<String, Object> get(int index) {
        return rowMaps.get(index);
    }

    public void add(Map<String, Object> elem) {
        rowMaps.add(elem);
    }

    public int size() {
        return rowMaps.size();
    }

    public Object[] toArray() {
        return rowMaps.toArray();
    }

    public void setRowMaps(List<Map<String, Object>> list) {
        rowMaps = list;
    }

    public List<Map<String, Object>> getRowMaps() {
        return rowMaps;
    }

    public Object getMapValue(int idx, Object key) {
        return get(idx).get(key);
    }

    public Set<String> getKeySet(int idx) {
        return get(idx).keySet();
    }

    /**
     * DataSet을 DataSetMap으로 변경한다.
     *
     * @param ds
     *            변경할 DataSet
     */
    public void convertDataSet2DataSetMap(DataSet ds) {
        // Dataset의 record 반복
        for (int j = 0, n = ds.getRowCount(); j < n; j++) {
            Map<String, Object> map = new HashMap<>();
            for (int k = 0, m = ds.getColumnCount(); k < m; k++) {
                Object obj = ds.getObject(j, k);
                if (obj != null) {
                    map.put(ds.getColumn(k).getName(), ds.getObject(j, k));
                }
            }
            int rowType1 = ds.getRowType(j);
            map.put(UiConstant.DATASET_ROW_TYPE, new Integer(rowType1));
            rowMaps.add(map);
        }

        for (int i = 0, n = ds.getRemovedRowCount(); i < n; i++) {
            Map<String, Object> map = new HashMap<>();
            map.put(UiConstant.DATASET_ROW_TYPE, new Integer(DataSet.ROW_TYPE_DELETED));
            for (int j = 0, m = ds.getColumnCount(); j < m; j++) {
                map.put(ds.getColumn(j).getName(), StringUtils.stripToEmpty(ds.getRemovedStringData(i, j)));
            }
            rowMaps.add(map);
        }
    }

    /**
     * DataSet을 DataSetMap으로 변경한다.
     *
     * @param ds
     *            변경할 DataSet
     */
    public void convertDataSet2DataSetMap(DataSet ds, Map<String, Object> userInfoMap, Map<String, Object> paginMap) {
        // Dataset의 record 반복
        for (int j = 0, n = ds.getRowCount(); j < n; j++) {
            Map<String, Object> map = new HashMap<>();
            for (int k = 0, m = ds.getColumnCount(); k < m; k++) {
                Object obj = ds.getObject(j, k);
                if (obj != null) {
                    map.put(ds.getColumn(k).getName(), ds.getObject(j, k));
                }
            }

            int rowType = ds.getRowType(j);
            map.put(UiConstant.DATASET_ROW_TYPE, rowType);
            map.put(UiConstant.SESSION_USER_MAP_NAME, userInfoMap);
            map.put(UiConstant.PAGING_MAP_NAME, paginMap);
            rowMaps.add(map);
        }

        for (int i = 0, n = ds.getRemovedRowCount(); i < n; i++) {
            Map<String, Object> map = new HashMap<>();
            map.put(UiConstant.DATASET_ROW_TYPE, new Integer(DataSet.ROW_TYPE_DELETED));
            map.put(UiConstant.SESSION_USER_MAP_NAME, userInfoMap);
            map.put(UiConstant.PAGING_MAP_NAME, paginMap);

            for (int j = 0, m = ds.getColumnCount(); j < m; j++) {
                map.put(ds.getColumn(j).getName(), StringUtils.stripToEmpty(ds.getRemovedStringData(i, j)));
            }
            rowMaps.add(map);
        }
    }

}
