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
 * @file		: DFM00200ServiceImpl.java
 * @Package		: smh.dfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: DFM00200ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.05.21
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 21.  김진현      최초  생성 
 */
@Service
public class DFM00200ServiceImpl extends AbstractNbdfService implements DFM00200Service {

    public static final String NAMESAPCE = "smh.dfm.dao.DFM00200Dao";

    @Autowired
    private GeneralDao generalDao;
    
    
    
    /**
     * @fn
     * @brief : 품목별 Defect Map 조회 (필터 - 품목코드 팝업)
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectDefectMapProductList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapProductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectMapProductList", param));
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - Rev 콤보값 조회
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectItemRevList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectItemRevList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemRevList", param));
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - 필터 공정 콤보 조회
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectFilterProcComboList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectFilterProcComboList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectFilterProcComboList", param));
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - 필터 품목코드 미선택시 메인 조회
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectNoInputMainList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectNoInputMainList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNoInputMainList", param));
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - 품목코드 입력시 메인 조회
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectInputMainList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputMainList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputMainList" , param)		, "output1");

        List<Map<String, Object>> SearchList  = new ArrayList<Map<String, Object>>();
		SearchList = generalDao.addSelect(NAMESAPCE + ".selectProcesssegmentIdList", param);    			// 조회 조건의 기준에 해당하는 검사공정을 구한다
		
		putDataSetMap(dto, SearchList		, "output3");
		
		String[] columnsSelect 	= new String[SearchList.size()]; 
		String[] columns 			= new String[SearchList.size()];
		// (21.07.07) MAX값 추가
		String[] columnsMax 		= new String[SearchList.size()];
		
    	for (int i = 0; i < SearchList.size();  i++) {
    		
    		columns[i] = "'" + SearchList.get(i).get("COLUMNS").toString() + "'";
    		
    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_RATE").toString();
    		
    		// (21.07.07) MAX값 추가
    		columnsMax[i] = SearchList.get(i).get("COLUMNS_RATE_MAX").toString(); 
		}
    	param.put("COLUMNS", 				String.join(",", columns));
    	param.put("COLUMNS_RATE",	 	String.join(",", columnsSelect));
    	
    	// (21.07.07) MAX 값 추가
    	param.put("COLUMNS_RATE_MAX",	 	String.join(",", columnsMax));
		
    	//System.out.println(" ####### []  : "+param.get("COLUMNS"));
    	//System.out.println(" ####### []  : "+param.get("COLUMNS_RATE"));
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputMainChartList" , param)		, "output2");
		
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - 해석 (Raw Data, 차트, 이미지 조회)
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectDefectMapList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectMapList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapRawDataList" , param)				, "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectGrpComboList" , param)		, "output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectCodeComboList" , param)	, "output3");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectList" , param)					, "output4");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapLayerInfoList" , param)				, "output5");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectImgPointList" , param)		, "output6");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectColorList" , param)			, "output7");
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectLayerList" , param)			, "output8");
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - 필터 Layer 동적 이미지 포인트 정보 재조회
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectProcDefectMapDefectImgPointList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcDefectMapDefectImgPointList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapDefectImgPointList", param));
    }
    
    /**
     * @fn
     * @brief : 품목별 Defect Map - 선택된 (이미지 설정된 Layer, Lot 정보에 따른 생성해야 할 판넬 정보 조회) 
     * @remark 
     * @see smh.dfm.service.DFM00200Service#selectProcDefectMapPanelFilterList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcDefectMapPanelFilterList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcDefectMapPanelFilterList", param));
    }


    
  	
}