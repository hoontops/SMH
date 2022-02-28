package com.nbdf.cmd.cm.cmsa.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.com.StringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSA00100ServiceImpl.java
* @Package: com.nbdf.ecm.cm.cmsa.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSA00100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: XXXXXXXXXX
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 9.    진성하     최초  생성
 *
*/

@Service
public class CMSA00100ServiceImpl extends AbstractNbdfService implements CMSA00100Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsa.dao.CMSA00100Dao";
    public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00101Dao";
    public static final String NAMESPACE2 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00102Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  팝업리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdPopupList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdPopupList(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdPopupList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  팝업저장
    * @remark
    *  1. [저장] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#saveCmdPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdPopup(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT_H");
        Map<String, Object> rtnMap = new HashMap<String, Object>();
        int id = 0;
        String popupCd = "";
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                id = generalDao.selectOne(NAMESPACE + ".selectCmdPopupId");
                popupCd = "P"+StringUtils.lpad(""+id, 5, "0");
                param.put("POPUP_ID", id);
                param.put("POPUP_CD", popupCd);
                rtnMap.put("POPUP_ID", id);
                rtnMap.put("POPUP_CD", popupCd);
                generalDao.addInsert(NAMESPACE + ".insertCmdPopup",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addUpdate(NAMESPACE + ".updateCmdPopup",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE + ".deleteCmdPopup",param);
            }
        }

        dsMap = getParametersDataSetMap(dto, "INPUT_L");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                if (id > 0)
                    param.put("POPUP_ID", id);
                generalDao.addInsert(NAMESPACE1 + ".insertCmdPopupPls",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addUpdate(NAMESPACE1 + ".updateCmdPopupPls",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE1 + ".deleteCmdPopupPls",param);
            }
        }

        dsMap = getParametersDataSetMap(dto, "INPUT_C");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                if (id > 0)
                    param.put("POPUP_ID", id);
                generalDao.addInsert(NAMESPACE2 + ".insertCmdPopupSrhCndClum",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addUpdate(NAMESPACE2 + ".updateCmdPopupSrhCndClum",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE2 + ".deleteCmdPopupSrhCndClum",param);
            }
        }

        putDataSetMap(dto, rtnMap);
    }

    /**
    * @fn
    * @brief (Override method)  팝업 삭제
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#deleteCmdPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteCmdPopup(UiMapDto dto) {
        int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> param = dsMap.get(0);
        generalDao.addUpdate(NAMESPACE + ".deleteCmdPopup",param);
        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method)  조회 컬럼 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdPopupPlsList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdPopupPlsList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE1 + ".selectCmdPopupPlsList",param);

        putDataSetMap(dto, list);

    }

    /**
    * @fn
    * @brief (Override method)   조회조건 컬럼 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdPopupSrhCndClumList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdPopupSrhCndClumList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2 + ".selectCmdPopupSrhCndClumList",param);

        putDataSetMap(dto, list);

    }

    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00100Service#saveFavoriteActive(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveFavoriteActive(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
        Map<String, Object> param2 = dsMap2.get(0);
        Map<String, Object> rtnMap = new HashMap<String, Object>();
        int id = 0;
        String popupCd = "";
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_UPDATED) {
                param.put("USER_ID", param2.get("USER_ID"));
                param.put("OFFICE_CODE", param2.get("OFFICE_CODE"));
                param.put("MODULE", param2.get("MODULE"));

                logger.debug("@@@@@USER_ID 2 = " + param.get("USER_ID"));
                logger.debug("@@@@@OFFICE_CODE 2 = " + param.get("OFFICE_CODE"));
                logger.debug("@@@@@MODULE 2 = " + param.get("MODULE"));
                logger.debug("@@@@@SET_OF_BOOKS_ID 2 = " + param.get("SET_OF_BOOKS_ID"));
                logger.debug("@@@@@LOOKUP_CODE 2 = " + param.get("LOOKUP_CODE"));
                logger.debug("@@@@@FAVORITE 2 = " + param.get("FAVORITE"));

                param.put("FAVORITE", convertYn(param.get("FAVORITE").toString()));

                generalDao.addSelect(NAMESPACE+".saveFavoriteActive",param);
            }
        }
        putDataSetMap(dto, rtnMap);
    }

    public String convertYn(String zeroOne){
        if("0".equals(zeroOne))
            return "N";
        else
            return "Y";
    }

    /**
    * @fn
    * @brief (Override method)   조회조건 컬럼 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdPopupSrhCndClumList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectDsCommomPoup(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2 + ".selectDsCommomPoup",param);

        putDataSetMap(dto, list);

    }
    
}
