package com.nbdf.commons.ui.vo;

import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.vo.BaseVo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

/**
 * @Class UiObjectDto
 * @Description UI 솔루션과 통신 자료 구조
 * @Modification
 *
 * @author lessor
 * @version 1.0
 * @see
 */
@SuppressWarnings("serial")
public class UiObjectDto extends BaseVo {

    /**
     * transaction 정보를 가지는 Dataset 정보
     */
    private List<Object> transInfo;

    /**
     * request 된 Variable 정보
     */
    private Map<String, Object> inVariableMap;

    /**
     * response 할 Variable 정보
     */
    private Map<String, Object> outVariableMap;

    /**
     * Request 된 DataSets 정보 <DataSetName, dataSet>
     */
    private Map<String, List<Object>> inDataSetMap;

    /**
     * Respose 할 DataSets 정보 <DataSetName, dataSet>
     */
    private Map<String, Object> outDataSetMap;

    public UiObjectDto(PlatformData data) {
    	super();
        this.setVariableMap(data.getVariableList());
        this.setTranInfoMap(data.getDataSetList());
        this.setInDataSetMap(data.getDataSetList());
    }

    public Object getVariable(String key) {
        Object val = null;
        if (inVariableMap != null) {
            val = inVariableMap.get(key);
        }
        return val;
    }

    /**
     * @param vList
     */
    public void setVariableMap(VariableList vList) {
        inVariableMap = new HashMap<>();
        for (int i = 0, n = vList.size(); i < n; i++) {
            inVariableMap.put(vList.get(i).getName(), vList.get(i).getObject());
        }
    }

    /**
     * Dataset 중에 Transaction 정보를 가진 DataSet을 DataSetObject 정보로 바꾼다.
     *
     * @param dsList
     * @param datasetName
     */
    public void setTranInfoMap(DataSetList dsList) {
        DataSet dsTransInfo = dsList.get(UiConstant.TRAN_INFO_DATASET_NAME);
        if (dsTransInfo != null) {
            transInfo = convertDataSet2ListObject(dsTransInfo, "egovframework.rte.cmmn.ria.xplatform.vo.XPlatformTransactionVO");
        }
    }

    /**
     * n개의 input DataSet을 Map에 넣는다. Map의 key 값은 input DataSet이름이 들어가며 value는 DataSetObject(List)객체가 들어간다. <br />
     * DataSetObject 객체는 Object(class member= DataSet.column명, member value=DataSet.rowvalue)를 가진다.
     *
     * @param dsList
     */
    public void setInDataSetMap(DataSetList dsList) {
        inDataSetMap = new HashMap<>();
        for (int i = 0, n = transInfo.size(); i < n; i++) {
            UiTransactionVO txVo = (UiTransactionVO) transInfo.get(i); // transaction Info DataSet에서
            String datasetName = txVo.getInDataset();
            String voName = txVo.getInVOClass();
            DataSet dataset = dsList.get(datasetName);
            List<Object> objectList = convertDataSet2ListObject(dataset, voName);
            if (objectList != null)
                inDataSetMap.put(datasetName, objectList);
        }
    }

    public List<Object> getTransInfo() {
        return transInfo;
    }

    public Map<String, Object> getInVariableMap() {
        return inVariableMap;
    }

    public Map<String, List<Object>> getInDataSetMap() {
        return inDataSetMap;
    }

    public Map<String, Object> getOutDataSetMap() {
        if (outDataSetMap == null)
            outDataSetMap = new HashMap<>();
        return outDataSetMap;
    }

    public Map<String, Object> getOutVariableMap() {
        if (outVariableMap == null)
            outVariableMap = new HashMap<>();
        return outVariableMap;
    }

    /**
     * DataSet을 List<Object> 형태로 변환한다.
     *
     * @param dataset
     * @param voName
     */
    public List<Object> convertDataSet2ListObject(DataSet dataset, String voName) {
        if (dataset == null)
            return null;

        List<Object> objList = new ArrayList<>();
        // normal, insert, update
        for (int j = 0, n = dataset.getRowCount(); j < n; j++) {
            Object obj = DataSetVOMappingUtil.getVOFromDataSetRow(voName, dataset, j, 0);
            // row type 세팅
            if (obj instanceof RowType) {
                int rowType = dataset.getRowType(j);
                ((RowType) obj).setRowType(rowType);
            }
            if (obj != null)
                objList.add(obj);
        }
        // Delete
        for (int i = 0, n = dataset.getRemovedRowCount(); i < n; i++) {
            Object obj = DataSetVOMappingUtil.getVOFromDataSetRow(voName, dataset, i, 1);
            if (obj instanceof RowType) {
                ((RowType) obj).setRowType(DataSet.ROW_TYPE_DELETED);
            }
            if (obj != null)
                objList.add(obj);
        }
        return objList;
    }

}
