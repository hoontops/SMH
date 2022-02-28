package smh.qam.service;

import java.io.BufferedReader;
import java.io.StringReader;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;

/**
* @file: QAM03300ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03300ServiceImpl
* @Company: Built1
* @Create Date: 2021.06.04
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.04.       권혜영     최초  생성
*/
@Service
public class QAM03300ServiceImpl extends AbstractNbdfService implements QAM03300Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM03300Dao";
    public static final String NAMESAPCE_03200 = "smh.qam.dao.QAM03200Dao"; //측정값 조회

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 수축율현황 조회
     * @remark 
     * @see smh.qam.service.QAM03300Service#selectQamShrinkmeasureList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamShrinkmeasureList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamShrinkmeasureList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 수축율 측정 팝업 조회
     * @remark 
     * @see smh.qam.service.QAM03300Service#selectQamShrinkmeasureList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamShrinkmeasurePopupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_03200 + ".selectQamShrinkmeasureList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 차트 - 수축율현황 그룹 조회
     * @remark 
     * @see smh.qam.service.QAM03300Service#selectQamShrinkmeasureGroupList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamShrinkmeasureGroupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> shrinkProductMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectShrinkProductIdInfo", param);
        if ("1".equals(param.get("FIRSTMEASUREYN"))){
        	param.put("SHRINKPRODUCTID", shrinkProductMap.get("SHRINKPRODUCTID"));
        }
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamShrinkmeasureGroupList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 차트 - 수축율현황 그룹 조회 > 선택 LOT 보기 팝업
     * @remark 
     * @see smh.qam.service.QAM03300Service#selectQamShrinkmeasureLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamShrinkmeasureLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamShrinkmeasureLotList", param));
    }
}