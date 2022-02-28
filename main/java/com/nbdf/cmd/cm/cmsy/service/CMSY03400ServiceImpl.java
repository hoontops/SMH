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
* @Type name: CMSY03400ServiceImpl
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
public class CMSY03400ServiceImpl extends AbstractNbdfService implements CMSY03400Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY03400Dao";
	public static final String NAMESAPCE4 = "com.nbdf.cmd.cm.cmsy.dao.CMSY03300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사전리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdUsersList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdUsersList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUsersList",param);

        putDataSetMap(dto, list);
    }

 
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSY03100Service#saveCmdUsers(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdUsers(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                generalDao.addInsert(NAMESPACE+".insertCmdUsers",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addInsert(NAMESPACE+".updateCmdUsers",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteCmdUsers",param);
            }
        }
   
        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method)  비번 초기화
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#updateCmdUsersPwdInit(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateCmdUsersPwdInit(UiMapDto dto) {

    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("1".equals(param.get("CHK"))){
                generalDao.addInsert(NAMESPACE+".updateCmdUsersPwdInit",param);
            }
        }
   
        putDataSetMap(dto, result);

    }
    
    /**
    * @fn
    * @brief (Override method)  사용승인
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#updateCmdUsersPwdInit(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateCmdUsersApproval(UiMapDto dto) {
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("1".equals(param.get("CHK"))){
                generalDao.addInsert(NAMESPACE+".updateCmdUsersApproval",param);
                param.put("ENTERPRISEID", param.get("ENTERPRISEID"));
                param.put("PLANTID", param.get("PLANTID"));
                param.put("VALIDSTATE", "Valid");
                int cnt = generalDao.addSelectCount(NAMESAPCE4+".selectCmdPlantuser",param);
                if(cnt==0){
                    generalDao.addUpdate(NAMESAPCE4+".insertCmdPlantuser",param);
                }                
            }
        }

    } 
}
