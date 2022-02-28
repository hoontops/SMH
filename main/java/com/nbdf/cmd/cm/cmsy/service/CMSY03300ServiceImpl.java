package com.nbdf.cmd.cm.cmsy.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSY03100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY03100ServiceImpl
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
public class CMSY03300ServiceImpl extends AbstractNbdfService implements CMSY03300Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY03300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사전리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdPlantuserList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdPlantuserList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdPlantuserList",param);

        putDataSetMap(dto, list);
    }

 
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSY03100Service#saveCmdPlantuser(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdPlantuser(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = DataSet.ROW_TYPE_NORMAL;
            result = generalDao.addSelectCount(NAMESPACE+".selectCmdPlantuser",param);
            if(result == 0){
            	type = DataSet.ROW_TYPE_INSERTED;
            }else{
            	type = DataSet.ROW_TYPE_UPDATED;
            }
            if (type == DataSet.ROW_TYPE_INSERTED) {
                generalDao.addInsert(NAMESPACE+".insertCmdPlantuser",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addInsert(NAMESPACE+".updateCmdPlantuser",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteCmdPlantuser",param);
            }
        }
   
        putDataSetMap(dto, result);
    }
}
