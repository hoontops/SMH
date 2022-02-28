package com.nbdf.cmd.cm.cmsa.service;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: CMSA01320ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsa.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSA01320ServiceImpl    
* @Company: Built1
* @Create Date: 2018 2018. 6. 21. 오후 5:53:15 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 6. 21.        Kang Jeong Gi     최초  생성
 *
*/
@Service
public class CMSA01320ServiceImpl extends AbstractNbdfService implements CMSA01320Service {
    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmsa.dao.CMSA01320Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 
    * @brief (Override method) (첨부)파일 다운로드 - 조회
    * @remark
    * - 1. (첨부)파일 다운로드 - 조회
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA01320Service#selectAtchFileList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectAtchFileList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectAtchFileList", param);	 	
	 	putDataSetMap(dto, list);    
	}  
    
    public strictfp void selectBigDataExcel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list00 = null;
        /**
         * ######################################################
         * 조회 index from / to 를 설정하기 위한 페이징 정보 추출
         * ######################################################
         */
        double totalRows     = Double.parseDouble(String.valueOf(param.get("P_COUNT")));
        double rowsPerPage = Double.parseDouble(String.valueOf(param.get("P_END")));
        int loopCount    =  (int) Math.ceil(totalRows/rowsPerPage);
        
        String nameSpace = (String) param.get("NAME_SPACE");
        
        SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat ( "yyyyMMddHHmmss", Locale.KOREA );
        Date currentTime = new Date ();
        String mTime = mSimpleDateFormat.format ( currentTime );
        
        logger.debug("##########################################");
        logger.debug("          전체 데이터 갯수    ["+totalRows+"]");
        logger.debug("          페이징당 데이터 수 ["+rowsPerPage+"]");
        logger.debug("          반복횟수                ["+loopCount+"]");
        logger.debug("##########################################");
        for(int idx = 0; idx < loopCount; idx++) {

            int startIndex = (int)(idx*rowsPerPage);
            int endIndex  =  (int)((idx*rowsPerPage)+(int)rowsPerPage)-1;

            param.put("P_START", startIndex);
            param.put("P_END", endIndex);

            list00 = generalDao.addSelect(nameSpace, param);
            
            putDataSetMap(dto, list00, "ds_"+mTime+idx);

        }
    }    
}