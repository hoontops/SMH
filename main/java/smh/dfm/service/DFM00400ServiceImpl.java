package smh.dfm.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;




/**
 * @file		: DFM00400ServiceImpl.java
 * @Package		: smh.dfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: DFM00200ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.06.01
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 06. 01.  김진현      최초  생성 
 */
@Service
public class DFM00400ServiceImpl extends AbstractNbdfService implements DFM00400Service {

    public static final String NAMESAPCE = "smh.dfm.dao.DFM00400Dao";

    @Autowired
    private GeneralDao generalDao;
    
    
    /**
     * @fn
     * @brief : Layer별 불량 현황 - [필터 - Lot No]
     * @remark 
     * @see smh.dfm.service.DFM00400Service#selectDefectMapLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectMapLotList", param));
    }
    
    /**
     * @fn
     * @brief : Layer별 불량 현황 - [필터 - 품목코드]
     * @remark 
     * @see smh.dfm.service.DFM00400Service#selectDefectMapProductList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapProductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectMapProductList", param));
    }
    
    /**
     * @fn
     * @brief : Layer별 불량 현황 - [필터 - 품목 Rev]
     * @remark 
     * @see smh.dfm.service.DFM00400Service#selectProductDefVersionByRate(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDefVersionByRate(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefVersionByRate", param));
    }
    
    /**
     * @fn
     * @brief : Layer별 불량 현황 - [필터 - Layer 팝업]
     * @remark 
     * @see smh.dfm.service.DFM00400Service#selectLayerByProductdef(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLayerByProductdef(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLayerByProductdef", param));
    }
    
    /**
     * @fn
     * @brief : Layer별 불량 현황 - [메인 조회 raw data]
     * @remark 
     * @see smh.dfm.service.DFM00400Service#selectDefectRateByLayerList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectRateByLayerList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectRateByLayerList" , param)								, "output1");
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectGrpComboList" , param)				, "output2");
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectCodeComboList" , param)			, "output3");
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLayerDefectMapDefectList" , param)							, "output4");
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLayerDefectMapDefectColorList" , param)					, "output5");
        
        
    }
    
    
  	
}