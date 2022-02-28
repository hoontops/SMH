package com.nbdf.commons.ui.view;

import com.nbdf.commons.ui.ConvertDataType;
import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.DataSetVOMappingUtil;
import com.nbdf.commons.ui.vo.UiTransactionVO;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.view.AbstractView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;

/**
 * @Class UiView
 * @Description Map 형태와 Object의 DTO 들을 UI 솔루션의 Data에 맞게 변경하는 View
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 */
public class UiView extends AbstractView {

    protected Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * Subclasses must implement this method to actually render the view.
     * <p>
     * The first step will be preparing the request: In the JSP case, this would mean setting model objects as request attributes. The second step will be the actual rendering of
     * the view, for example including the JSP via a RequestDispatcher.
     *
     * @param model
     *            combined output Map (never {@code null}), with dynamic values taking precedence over static attributes
     * @param request
     *            current HTTP request
     * @param response
     *            current HTTP response
     * @throws Exception
     *             if rendering failed
     */
    @Override
    protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
    	logger.debug("model-->"+model);
    	logger.debug("model size-->"+model.size());
        request.setAttribute("uiViewModel", model);
    }

     /**
     * 객체를 DataSetList 에 담아서 리턴
     *
     * @param obj
     * @return
     */
    public DataSetList getDataSetList(Object obj) {
    	logger.debug("aaaaa1");
        DataSetList dsList = new DataSetList();
        // 여러 개의 Dataset으로 구성
        DataSet ds = (DataSet) obj;
        dsList.add(ds);
        return dsList;
    }

    /**
     * Map 형태의 model 객체를 DataSetList 에 담아서 리턴
     *
     * @param model
     *            Map 형태의 model
     * @return DataSetList 객체
     */
    @SuppressWarnings("unchecked")
    public DataSetList makeDataSetList(Object model) {
        DataSetList dataSetList = new DataSetList();
        // 여러 개의 Dataset으로 구성
        Map<String, DataSetMap> dsListMap = (Map<String, DataSetMap>) model;
        if (dsListMap == null)
            return dataSetList;
        //logger.error("dsListMap-->"+dsListMap);
        Iterator<String> iter = dsListMap.keySet().iterator();
        while (iter.hasNext()) {
            // 하나의 DataSet으로 이루어진 정보(List)를 꺼낸다.
            String dsName = iter.next();
            DataSetMap dsMap = dsListMap.get(dsName);
            DataSet ds = new DataSet(dsName);
            setDataSet(dsMap, ds);
            dataSetList.add(ds);
        }
        return dataSetList;
    }

    /**
     * List 형태의 Map 정보를 이용하여 하나의 Dataset의 데이터를 세팅한다.
     *
     * @param dataSetMap
     * @param ds
     */
    private void setDataSet(DataSetMap dataSetMap, DataSet ds) {
    	logger.debug("aaaaa3");
       for (int i = 0, n = dataSetMap.size(); i < n; i++) {
            Set<String> set = dataSetMap.getKeySet(i);
            Iterator<String> iter = set.iterator();
            if (set.contains(UiConstant.ONLY_METADATA_RETURN)) {
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
                int idx = ds.newRow();
                while (iter.hasNext()) {
                    String key = iter.next();
                    Object value = dataSetMap.getMapValue(i, key);
                    if (ds.getColumn(key) == null) {
                        ds.setChangeStructureWithData(true);
                        ds.addColumn(key, ConvertDataType.getPlatformDataType(value));
                    }
                    ds.set(idx, key, value);
                }
            }
        }
    }

    /**
     * Map 형태의 model 객체를 DataSetList 에 담아서 리턴
     *
     * @param obj
     * @return
     */
    @SuppressWarnings("unchecked")
    public DataSetList makeDataSetListByObject(Object obj) {
    	logger.debug("aaaaa4");
        DataSetList dataSetList = new DataSetList();
        // 여러 개의 Dataset으로 구성
        Map<String, List<Object>> listMap = (Map<String, List<Object>>) obj;
        List<Object> transInfo = (List<Object>) listMap.get(UiConstant.TRAN_INFO_DATASET_NAME);
        if (listMap == null || transInfo == null) {
            return dataSetList;
        }

        for (int i = 0, n = transInfo.size(); i < n; i++) {
            UiTransactionVO txVo = (UiTransactionVO) transInfo.get(i);
            String datasetName = txVo.getOutDataset();
            String voName = txVo.getOutVOClass();
            List<Object> objList = listMap.get(datasetName); // Dataset 이름으로 Object 가져오기
            DataSet ds = new DataSet(datasetName);
            convertObject2DataSet(ds, objList, voName);
            dataSetList.add(ds);
        }
        return dataSetList;
    }

    /**
     * List 형태의 Object 정보를 이용하여 하나의 Dataset의 데이터를 세팅한다.
     *
     * @param ds
     * @param list
     * @param className
     */
    private void convertObject2DataSet(DataSet ds, List<Object> list, String className) {
    	logger.debug("aaaaa5");
        DataSetVOMappingUtil.makeDataSetColumn(className, ds);
        for (int i = 0, n = list.size(); i < n; i++) {
            ds.newRow();
            Object data = list.get(i);
            DataSetVOMappingUtil.setDataSetRowFromVO(data, className, ds, i);
        }
    }
}
