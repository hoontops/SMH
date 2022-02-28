package com.nbdf.cmd.cm.cmsa.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: CMSA03000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsa.service
* @Project name: 빌링시스템 재구축
* @Type name: CMSA03000ServiceImpl
* @Company: Built1
* @Create Date: 2017 2017. 3. 9. 오후 7:36:19
* @Author: XXXXXXXXXX
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 3. 9.    진성하     최초  생성
 *
*/


@Service
public class CMSA00300ServiceImpl extends AbstractNbdfService implements CMSA00300Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsa.dao.CMSA00300Dao";
    public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00301Dao";
    public static final String NAMESPACE2 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    public static final String NAMESPACE4 = "com.nbdf.cmd.cm.cmsy.dao.CMSY03100Dao";
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  공통코드 유형 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectEcmLookupValuesList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectEcmLookupValuesList(UiMapDto dto) {
    	logger.debug("SESSION_LANGUAGETYPE.."+SessionUtil.getSessionValue("LANGUAGETYPE"));
    	logger.debug("SESSION_SITETYPE.."+ SessionUtil.getSessionValue("SITETYPE"));
    	logger.debug("SESSION_ENTERPRISEID.."+ SessionUtil.getSessionValue("ENTERPRISEID"));

        Map<String, Object> param = getParametersMap(dto);
        logger.error("param.."+param);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE1+".selectEcmLookupValuesList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  공통코드 유형 VIEW 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectEcmLookupValuesVList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectEcmLookupValuesVList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE1+".selectEcmLookupValuesVList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  공통코드 저장
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#saveEcmLookupTypes(imcs.commons.ui.vo.UiMapDto)
    */
    public void saveEcmLookupTypes(UiMapDto dto) {
        int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT_H");

        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addInsert(NAMESPACE+".insertEcmLookupTypes",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESPACE+".updateEcmLookupTypes",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESPACE+".deleteEcmLookupTypes",param);
                result += generalDao.addUpdate(NAMESPACE1+".deleteEcmLookupValues2",param);
            }
            if(param.get("DICTIONARYID") == null || "".equals(param.get("DICTIONARYID"))) continue;
            
            param.put("DICTIONARYCLASSID", "COMMON");
            if (type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED) {
            	param.put("DICTIONARYNAME", param.get("NM_K"));
            	param.put("LANGUAGETYPE", "ko-KR");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_E"));
            	param.put("LANGUAGETYPE", "en-US");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_C"));
            	param.put("LANGUAGETYPE", "zh-CN");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_V"));
            	param.put("LANGUAGETYPE", "vi-VN");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }

            }
        }

        dsMap = getParametersDataSetMap(dto, "INPUT_L");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addInsert(NAMESPACE1+".insertEcmLookupValues",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESPACE1+".updateEcmLookupValues",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESPACE1+".deleteEcmLookupValues",param);
            }
            if(param.get("DICTIONARYID") == null || "".equals(param.get("DICTIONARYID"))) continue;
            param.put("DICTIONARYCLASSID", "COMMON");
            if (type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED) {
            	param.put("DICTIONARYNAME", param.get("NM_K"));
            	param.put("LANGUAGETYPE", "ko-KR");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_E"));
            	param.put("LANGUAGETYPE", "en-US");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_C"));
            	param.put("LANGUAGETYPE", "zh-CN");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_V"));
            	param.put("LANGUAGETYPE", "vi-VN");
                result = generalDao.addSelectCount(NAMESPACE4+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE4+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE4+".updateCmdDictionary",param);
                }

            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method)  공통코드 삭제
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#deleteEcmLookupTypes(imcs.commons.ui.vo.UiMapDto)
    */
    public void deleteEcmLookupTypes(UiMapDto dto) {
        int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> param = dsMap.get(0);
        result += generalDao.addUpdate(NAMESPACE+".deleteEcmLookupTypes",param);
        result += generalDao.addUpdate(NAMESPACE1+".deleteEcmLookupValues",param);
        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method) 공통코드 조회(팝업용)
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectEcmLookupTypesList(imcs.commons.ui.vo.UiMapDto)
    */
   public void selectEcmLookupTypesList(UiMapDto dto) {
//	   logger.error("getTxnGroupHistKey.."+TxnHistKey.getTxnGroupHistKey());
//	   logger.error("getTxnHistKey.."+TxnHistKey.getTxnHistKey());
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectEcmLookupTypesList",param);

        putDataSetMap(dto, list);
    }

   /**
   * @fn
   * @brief (Override method) 공통코드 조회 VEIW(팝업용)
   * @remark
   *  1. [조회] 버튼 클릭시 호출
   * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectEcmLookupTypesVList(imcs.commons.ui.vo.UiMapDto)
   */
  public void selectEcmLookupTypesVList(UiMapDto dto) {
       Map<String, Object> param = getParametersMap(dto);
       List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectEcmLookupTypesVList",param);

       putDataSetMap(dto, list);
   }

  /**
  * @fn
  * @brief (Override method)  공통코드 조회
  * @remark
  *  1. [조회] 버튼 클릭시 호출
  * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectEcmLookupValuesList2(imcs.commons.ui.vo.UiMapDto)
  */
   public void selectEcmLookupValuesList2(UiMapDto dto) {
       Map<String, Object> param = getParametersMap(dto);
       List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE1+".selectEcmLookupValuesList2",param);

       putDataSetMap(dto, list);
   }

   /**
   * @fn
   * @brief (Override method)  공통코드 VIEW 조회
   * @remark
   *  1. [조회] 버튼 클릭시 호출
   * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectEcmLookupValuesVList2(imcs.commons.ui.vo.UiMapDto)
   */
    public void selectEcmLookupValuesVList2(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE1+".selectEcmLookupValuesVList2",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  년도리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectYearList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectYearList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2+".selectYearList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  현재 일시분초 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectCurrentSystemTime(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectCurrentSystemTime(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2+".selectCurrentSystemTime",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  현재 일시분초 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectSystemDate(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectSystemDate(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2+".selectSystemDate",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method) ecm 공통코드 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA03000Service#selectCmdCmCdsList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectCmdCmCdsList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2+".selectCmdCmCdsList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  권한별 회계구분 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA00300Service#selectAcctGubunList(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectAcctGubunList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2+".selectAcctGubunList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  회계구분 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA00300Service#selectAccountGubunInformation(imcs.commons.ui.vo.UiMapDto)
    */
    public void selectAccountGubunInformation(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2+".selectAccountGubunInformation",param);

        putDataSetMap(dto, list);
    }



}
