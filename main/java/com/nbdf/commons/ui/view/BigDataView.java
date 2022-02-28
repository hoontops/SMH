package com.nbdf.commons.ui.view;

import com.nbdf.commons.ui.ConvertDataType;
import com.nbdf.commons.ui.UiConstant;
import com.nbdf.commons.ui.util.UiUtil;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.DataSetVOMappingUtil;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.ui.vo.UiObjectDto;
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
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;
import com.nexacro17.xeni.export.impl.GridExportExcel;

public class BigDataView extends AbstractView {

    protected Logger logger = LoggerFactory.getLogger(getClass());

    private boolean debug = false; // nexacro dataset Result 로그 보고 싶으시면 true로 변경하세요.(commit은 금지)

    @Override
    protected void renderMergedOutputModel(Map model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        try {
                VariableList variableList = UiUtil.setVariableList(model);
              if (model.get(UiConstant.RESULT_CODE) == null) {
                  variableList.add(UiConstant.ERROR_CODE, "0");
                  variableList.add(UiConstant.ERROR_MSG , "success");
              } else {
                  variableList.add(UiConstant.ERROR_CODE, model.get(UiConstant.RESULT_CODE));
                  variableList.add(UiConstant.ERROR_MSG, model.get(UiConstant.ERROR_MSG));
              }

              Class<?> dataSetType = (Class<?>) model.get(UiConstant.OUT_DATASET_TYPE);
              Object obj = model.get(UiConstant.OUT_DATASET_ATT_NAME);
              DataSetList datasetList = null;
              if (dataSetType == null || UiMapDto.class.isAssignableFrom(obj.getClass())) {
                  datasetList = makeDataSetList(obj);
              } else if (DataSet.class.isAssignableFrom(obj.getClass())) {
                  datasetList = getDataSetList(model);
              } else if (UiObjectDto.class.isAssignableFrom(dataSetType)) {
                  datasetList = makeDataSetListByObject(obj);
              }

              //조회된 데이터셋을 이용하여 엑셀 데이터 생성
              DataSet resultDataSet = exportBigData(model, variableList, datasetList);

              //엑셀생성 결과 정보를 담을 데이터셋 생성 - 엑셀처리시는 결과 데이터만 화면으로 전송된다.
              DataSetList outDatasetList = new DataSetList();
              outDatasetList.add(resultDataSet);

              PlatformData data = new PlatformData();
              data.setVariableList(variableList);
              data.setDataSetList(outDatasetList);

              if (debug) {
                  logger.debug(data.saveXml() + " by <{}>", dataSetType);
              }

              HttpPlatformResponse resp = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
              resp.setCharset(PlatformType.DEFAULT_CHAR_SET);
              resp.setData(data);
              resp.sendData();
          } catch (PlatformException e) {
              logger.error("Exception <{}>", e.getMessage(), e);
              throw e;
          }
    }

    /**
     * 디버그 옵션
     *
     * @param debug
     */
    public void setDebug(boolean debug) {
        this.debug = debug;
    }

    /**
     * 객체를 DataSetList 에 담아서 리턴
     *
     * @param obj
     * @return
     */
    public DataSetList getDataSetList(Object obj) {
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
        DataSetVOMappingUtil.makeDataSetColumn(className, ds);
        for (int i = 0, n = list.size(); i < n; i++) {
            ds.newRow();
            Object data = list.get(i);
            DataSetVOMappingUtil.setDataSetRowFromVO(data, className, ds, i);
        }
    }

    /**
     * 데이터 Export
     * @param model
     * @param dataSetList
     * @param response
     * @return
     * @throws Exception
     */
    private DataSet exportBigData(Map model, VariableList variableList, DataSetList dataSetList) throws Exception {
        GridExportExcel exporter = (GridExportExcel) model.get("BIG_DATA_EXPORTER");
        DataSet resultDataSet    = null;
        int  totalRows = 0;
        int dataCount = dataSetList.size();
        logger.info(" dataCount ==>  {} " , dataCount);

        if( dataCount > 0) {
            String fullDsName = dataSetList.get(0).getName();

            logger.info(" fullDsName ==>  {} " , fullDsName);
            String dataSetName = fullDsName.substring(0,fullDsName.length()-1);
            
            logger.info(" dataSetName ==>  {} " , dataSetName);

            long start_time = System.currentTimeMillis();
            for (int idx = 0; idx < dataCount; idx++ ) {
                String callDatasetName = (dataSetName+idx);
                DataSet dataSet = dataSetList.get(callDatasetName);
                if(dataSet == null){
                	dataSetName = fullDsName.substring(0,fullDsName.length()-2);
                	break;
                }
            }
            for (int idx = 0; idx < dataCount; idx++ ) {

                String callDatasetName = (dataSetName+idx);
                DataSet dataSet = dataSetList.get(callDatasetName);

                logger.info(" callDatasetName ==>  {} " , callDatasetName);
                logger.info(" dataSet ==>  {} " , dataSet);

                int errorCode = exporter.appendBody(dataSet);
                String errMsg = exporter.getErrorMessage();

                logger.debug("errorCode  {} : " , errorCode );
                logger.debug("errMsg  {} : " , errMsg );

                if( errorCode < 0) {
                    variableList.add(UiConstant.ERROR_CODE, String.valueOf(errorCode));
                    variableList.add(UiConstant.ERROR_MSG, errMsg);
                    break;
                }
                totalRows += dataSet.getRowCount();

                logger.info(" totalRows ==>  {} " , totalRows);

            }
            long end_time = System.currentTimeMillis();
            resultDataSet = exporter.disposeWorkbook();
            logger.debug("///// 엑셀처리 갯수 ["+totalRows+"]" );
            logger.debug("///// 엑셀처리 시간 ["+ (end_time-start_time) +"]ms ----------");
        }
        return resultDataSet;
    }
}