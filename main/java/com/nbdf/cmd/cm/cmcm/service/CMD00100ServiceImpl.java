package com.nbdf.cmd.cm.cmcm.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

/**
* @file: CMD00100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmcm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMD00100ServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class CMD00100ServiceImpl extends AbstractNbdfService implements CMD00100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmcm.dao.CMD00100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark 1. onLoad()시 호출 2. [조회] 버튼 클릭시 호출
     * @see com.nbdf.cmd.cm.cmcm.service.CMD00100Service#selectBasIdclassList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasIdclassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasIdclassList", param),"ds_basIdclass");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasIddefinitionList", param),"ds_basIddefinition");
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 그룹코드 수정, 등록, 삭제 트랜젝션 처리 - 상세코드에 데이터가 있으면 삭제처리 하지 않고 롤백
     * @see com.nbdf.cmd.cm.cmcm.service.CMD00100Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasIdclass(UiMapDto dto) throws Exception {
    	int result = 0;
    	
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result = generalDao.addInsert(NAMESAPCE + ".insertBasIdclass",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result = generalDao.addUpdate(NAMESAPCE + ".updateBasIdclass",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result = generalDao.addUpdate(NAMESAPCE + ".deleteBasIdclass",param);
            }
        }
        putDataSetMap(dto, result);
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 그룹코드 수정, 등록, 삭제 트랜젝션 처리 - 상세코드에 데이터가 있으면 삭제처리 하지 않고 롤백
     * @see com.nbdf.cmd.cm.cmcm.service.CMD00100Service#saveBasIddefinition(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasIddefinition(UiMapDto dto) throws Exception {
    	int result = 0;
    	
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result = generalDao.addInsert(NAMESAPCE + ".insertBasIddefinition",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result = generalDao.addUpdate(NAMESAPCE + ".updateBasIddefinition",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result = generalDao.addUpdate(NAMESAPCE + ".deleteBasIddefinition",param);
            }
        }

        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark 1. onLoad()시 호출 2. [조회] 버튼 클릭시 호출
     * @see com.nbdf.cmd.cm.cmcm.service.CMD00100Service#selectBasIdclassserialList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasIdclassserialList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasIdclassserialList", param));
    }


}