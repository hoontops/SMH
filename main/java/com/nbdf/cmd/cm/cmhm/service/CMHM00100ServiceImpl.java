package com.nbdf.cmd.cm.cmhm.service;

import com.nbdf.cmd.cm.cmfm.service.CMFM01000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.sql.Clob;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: CMHM00100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmhm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMHM00100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 19. 오후 10:01:16
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 19.        진성하     최초  생성
 *
*/
@Service
public class CMHM00100ServiceImpl extends AbstractNbdfService implements CMHM00100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmhm.dao.CMHM00100Dao";

    @Autowired
    private GeneralDao generalDao;

   /**
    * @fn
    * @brief (Override method) 도움말 조회
    * @remark
    * - 도움말 조회
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM00100Service#selectManualMenuList(com.nbdf.commons.ui.vo.UiMapDto)
    */

    @Override
    public void selectManualMenuList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectManualMenuList", param);
        putDataSetMap(dto, list);
    }

    /**
     * @fn
     * @brief (Override method) 상세 조회
     * @remark
     * - 도움말 조회
     * @see com.nbdf.cmd.cm.cmhm.service.CMHM00100Service#selectManualMenuDtlList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectManualMenuDtlList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectManualMenuDtlList", param);
        putDataSetMap(dto, list);
    }
    
 }
