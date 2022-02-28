package com.nbdf.cmd.cm.cmsy.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSY01200ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01200ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: JinSungHa
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
public class CMSY01200ServiceImpl extends AbstractNbdfService implements CMSY01200Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY01200Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  팝업리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdJobMenuMngList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdJobMenuMngList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdJobMenuMngList",param);

        putDataSetMap(dto, list);
    }


    /**
    * @fn
    * @brief (Override method)  팝업 삭제
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#deleteCmdJobMenuMng(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteCmdJobMenuMng(UiMapDto dto) {
        int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> param = dsMap.get(0);
        generalDao.addUpdate(NAMESPACE + ".deleteCmdJobMenuMng",param);
        putDataSetMap(dto, result);
    }

 
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00100Service#saveCmdJobMenuMng(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdJobMenuMng(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                generalDao.addInsert(NAMESPACE+".insertCmdJobMenuMng",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addUpdate(NAMESPACE+".updateCmdJobMenuMng",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteCmdJobMenuMng",param);
            }
        }
        putDataSetMap(dto, result);
    }

}
