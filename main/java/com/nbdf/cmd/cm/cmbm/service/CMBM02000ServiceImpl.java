package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

@Service
public class CMBM02000ServiceImpl extends AbstractNbdfService implements CMBM02000Service { 

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmbm.dao.CMBM02000Dao";

   @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  배치프로그램 리스트 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02000Service#selectBatchCtrlsList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectBatchCtrlsList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectBatchCtrlsList", param);
        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  배치프로그램 파라미터 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02000Service#selectBatchParamsList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectBatchParamsList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectBatchParamsList", param);
        putDataSetMap(dto, list);
    }
    
    /**
     * @fn
     * @brief (Override method) 배치프로그램 리스트 저장(신규/수정)
     * @remark
     * - 배치프로그램 리스트 저장(신규/수정)
     * @see com.drens.dr.CMBM.service.CMBM02000Service#saveBatchCtrls(com.nbdf.commons.ui.vo.UiMapDto)
     */ 
     public void saveBatchCtrls(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;
         int result = 0;
         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);
             if (type == DataSet.ROW_TYPE_INSERTED) {
            	 result += generalDao.addInsert(NAMESPACE + ".insertBatchCtrls", param);
             }
             else if (type == DataSet.ROW_TYPE_UPDATED) {
            	 result += generalDao.addUpdate(NAMESPACE + ".updateBatchCtrls", param);
             }
             //else if (type == DataSet.ROW_TYPE_DELETED) {
          	 //  result += generalDao.addDelete(NAMESPACE + ".deleteBatchCtrls", param);
             //}
         }           
         //Map<String, Object> rtnMap = new HashMap<String, Object>();
         //putDataSetMap(dto, rtnMap);
         putDataSetMap(dto, result);
     }

     /**
      * @fn
      * @brief (Override method) 배치파라미터 리스트 저장(신규/수정/삭제)
      * @remark
      * - 배치파라미터 리스트 저장(신규/수정/삭제)
      * @see com.drens.dr.CMBM.service.CMBM02000Service#saveBatchParams(com.nbdf.commons.ui.vo.UiMapDto)
      */ 
      public void saveBatchParams(UiMapDto dto) throws Exception {
          DataSetMap paramMap = getParametersDataSetMap(dto);
          Map<String, Object> param;
          int result = 0;
          for (int i = 0, n = paramMap.size(); i < n; i++) {
              param = paramMap.get(i);
              int type = getRowType(param);
              if (type == DataSet.ROW_TYPE_INSERTED) {
            	  result += generalDao.addInsert(NAMESPACE + ".insertBatchParams", param);
              }
              else if (type == DataSet.ROW_TYPE_UPDATED) {
            	  result += generalDao.addUpdate(NAMESPACE + ".updateBatchParams", param);
              }
              else if (type == DataSet.ROW_TYPE_DELETED) {
            	  result += generalDao.addDelete(NAMESPACE + ".deleteBatchParams", param);
              }
          }           
          //Map<String, Object> rtnMap = new HashMap<String, Object>();
          putDataSetMap(dto, result);
      }

      /**
       * @fn
       * @brief (Override method) 배치프로그램(신규,수정) & 파라미터 리스트 (신규/수정/삭제) 저장
       * @remark
       * - 배치프로그램(신규,수정) & 파라미터 리스트 (신규/수정/삭제) 저장
       * @see com.drens.dr.CMBM.service.CMBM02000Service#saveBatchCtrlsParams(com.nbdf.commons.ui.vo.UiMapDto)
       */ 
       public void saveBatchCtrlsParams(UiMapDto dto) throws Exception {

    	   int result = 0;
    	   DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT_H");
           
           for (int i = 0, n = dsMap.size(); i < n; i++) {
        	   Map<String, Object> param = dsMap.get(i);
               int type = getRowType(param);
               if (type == DataSet.ROW_TYPE_INSERTED) {
            	   result += generalDao.addInsert(NAMESPACE + ".insertBatchCtrls", param);
               }
               else if (type == DataSet.ROW_TYPE_UPDATED) {
            	   result += generalDao.addUpdate(NAMESPACE + ".updateBatchCtrls", param);
               }
               else if (type == DataSet.ROW_TYPE_DELETED) {
            	   result += generalDao.addDelete(NAMESPACE + ".deleteBatchCtrls", param);
               }
           }           

           dsMap = getParametersDataSetMap(dto, "INPUT_L");
    	   for (int i = 0, n = dsMap.size(); i < n; i++) {
        	   Map<String, Object> param = dsMap.get(i);
               int type = getRowType(param);
               if (type == DataSet.ROW_TYPE_INSERTED) {
            	   result += generalDao.addInsert(NAMESPACE + ".insertBatchParams", param);
               }
               else if (type == DataSet.ROW_TYPE_UPDATED) {
            	   result += generalDao.addUpdate(NAMESPACE + ".updateBatchParams", param);
               }
               else if (type == DataSet.ROW_TYPE_DELETED) {
            	   result += generalDao.addDelete(NAMESPACE + ".deleteBatchParams", param);
               }
           }           
           //Map<String, Object> rtnMap = new HashMap<String, Object>();
           putDataSetMap(dto, result);
       }

       /**
    * @fn 
    * @brief 배치 프로그램 실행 여부
    * @remark
    * - 1. 배치 프로그램 실행 여부
    * @see com.drens.dr.CMBM.service.CMBM02000Service#selectBatchProgramRunYn(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchProgramRunYn(UiMapDto dto) {
           Map<String, Object> param = getParametersMap(dto);
           List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectBatchProgramRunYn", param);
           putDataSetMap(dto, list);
       }
}
