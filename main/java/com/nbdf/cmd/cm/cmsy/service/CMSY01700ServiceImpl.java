package com.nbdf.cmd.cm.cmsy.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: CMSY01700ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01700ServiceImpl
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
public class CMSY01700ServiceImpl extends AbstractNbdfService implements CMSY01700Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY01700Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사용자리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSA01000Service#selectCmdCompanyAltAuthList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdCompanyAltAuthList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdCompanyAltAuthList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  사용자리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSA01000Service#selectCmdUserCompanyMpngList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdUserCompanyMpngList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUserCompanyMpngList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  사용자리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSA01000Service#selectCmdUserCompanyMpngList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdUserCompanyMpngListMulti(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUserCompanyMpngListMulti",param);

        putDataSetMap(dto, list);
    }
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY01700Service#saveCmdUserCompanyMpng(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdUserCompanyMpng(UiMapDto dto) {
    	int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if ("1".equals(param.get("CHK"))) {
            	result += generalDao.addInsert(NAMESPACE+".insertCmdUserCompanyMpng",param);
            } else {
            	result += generalDao.addUpdate(NAMESPACE+".deleteCmdUserCompanyMpng",param);
            }
        }
        
        putDataSetMap(dto, result);
    }

}
