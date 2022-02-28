package smh.bas.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;


import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;




/**
* @file: BAS05400ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05400ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.06
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.06.       김진현     최초  생성
*/
@Service
public class BAS05400ServiceImpl extends AbstractNbdfService implements BAS05400Service {

    public static final String NAMESAPCE 				= "smh.bas.dao.BAS05400Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief PCS이미지 관리 - 품목 팝업
     * @remark 
     * @see smh.bas.service.BAS05400Service#selectProductDefList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDefList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefList", param));
    }
    
    /**
     * @fn
     * @brief PCS이미지 관리 - 메인 그리드 조회
     * @remark 
     * @see smh.bas.service.BAS05400Service#selectPCSImageList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPCSImageList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPCSImageList", param));
    }
    
    /**
     * @fn
     * @brief PCS이미지 관리 - 메인 그리드 저장
     * @remark 
     * @see smh.bas.service.BAS05400Service#savePcmImage(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePcmImage(UiMapDto dto) throws Exception {
    	DataSetMap ds_pcmImage				= getParametersDataSetMap(dto, "ds_imgMain");			// pcm Img 저장
    	Map<String, Object> paramPcm;			// pcm
    	int result = 0;
    	for (int i = 0, n = ds_pcmImage.size(); i < n; i++) {
    		paramPcm = ds_pcmImage.get(i);
            int type = getRowType(paramPcm);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertPcm(paramPcm);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updatePcm(paramPcm);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deletePcm(paramPcm);
            }
        }
    	putDataSetMap(dto, result);
    }
    
    /*
  	 * PCM 이미지 등록
  	 */
  	private int insertPcm(Map<String, Object> param) throws Exception{
    	
  		String prodId 	= (String)param.get("PRODUCTDEFID");
  		String prodRev 	= (String)param.get("PRODUCTDEFVERSION");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkPcmImageList", param);
		if (idList.size() > 0 )
		{
			throw new BizException("InValidData002|"+String.format("PRODUCTDEFID = %s, PRODUCTDEFVERSION = %s"
					,prodId,prodRev));
		}
		
		//param.put("WIDTH",	 StringUtil.isNullOrEmpty((String)param.get("WIDTH")) ? null : Double.parseDouble((String)param.get("WIDTH")));			// 가로
		//param.put("HEIGHT",	 StringUtil.isNullOrEmpty((String)param.get("HEIGHT")) ? null : Double.parseDouble((String)param.get("HEIGHT")));			// 세로
		
		param.put("WIDTH", StringUtil.isNullOrEmpty(String.valueOf(param.get("WIDTH"))) ? null : Double.parseDouble(String.valueOf(param.get("WIDTH"))));		// 가로
		param.put("HEIGHT", StringUtil.isNullOrEmpty(String.valueOf(param.get("HEIGHT"))) ? null : Double.parseDouble(String.valueOf(param.get("HEIGHT"))));	// 세로
		
		return generalDao.addUpdate(NAMESAPCE + ".insertPcmImage", param);
		
	}
  	/*
  	 * PCM 이미지 수정
  	 */
  	private int updatePcm(Map<String, Object> param) throws Exception{
    	
  		String prodId 	= (String)param.get("PRODUCTDEFID");
  		String prodRev 	= (String)param.get("PRODUCTDEFVERSION");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkPcmImageList", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData001|"+String.format("PRODUCTDEFID = %s, PRODUCTDEFVERSION = %s"
					,prodId,prodRev));
		}
  		
  		//param.put("WIDTH",	 StringUtil.isNullOrEmpty((String)param.get("WIDTH")) ? null : Double.parseDouble((String)param.get("WIDTH")));			// 가로
		//param.put("HEIGHT",	 StringUtil.isNullOrEmpty((String)param.get("HEIGHT")) ? null : Double.parseDouble((String)param.get("HEIGHT")));			// 세로
  		
  		param.put("WIDTH", StringUtil.isNullOrEmpty(String.valueOf(param.get("WIDTH"))) ? null : Double.parseDouble(String.valueOf(param.get("WIDTH"))));		// 가로
		param.put("HEIGHT", StringUtil.isNullOrEmpty(String.valueOf(param.get("HEIGHT"))) ? null : Double.parseDouble(String.valueOf(param.get("HEIGHT"))));	// 세로
		
		return generalDao.addUpdate(NAMESAPCE + ".updatePcmImage", param);		
	}
  	
  	/**
     * @fn
     * @brief PCS이미지 관리 - 메인 그리드 저장(가로/세로)
     * @remark 
     * @see smh.bas.service.BAS05400Service#savePCSImageSize(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePCSImageSize(UiMapDto dto) throws Exception {
    	DataSetMap ds_pcmImageSize				= getParametersDataSetMap(dto, "ds_imageSize");			// pcm Img 가로,세로
    	Map<String, Object> paramPcmSize;			// pcm
    	
    	for (int i = 0, n = ds_pcmImageSize.size(); i < n; i++) {
    		paramPcmSize = ds_pcmImageSize.get(i);
    		
    		String prodId 	= (String)paramPcmSize.get("PRODUCTDEFID");
      		String prodRev 	= (String)paramPcmSize.get("PRODUCTDEFVERSION");
    		
    		Map<String, Object> extMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectImageHandV", paramPcmSize);
    		
    		String filePath = (String)extMap.get("FULL_SAVE_COURS");
    		
    		
    		if (!(StringUtil.isNullOrEmpty(filePath)))
        	{
    			long[] nArr =  ObjectUtil.getImageInfoByFilePath(filePath);
            	
        		if(nArr == null)
        		{
        			throw new BizException("InValidImageHandV|"+String.format("PRODUCTDEFID = %s, PRODUCTDEFVERSION = %s"
        					,prodId,prodRev));
        		}    		
        		
            	extMap.put("WIDTH", StringUtil.isNullOrEmpty(String.valueOf(nArr[0])) ? null : Double.parseDouble(String.valueOf(nArr[0])));
            	extMap.put("HEIGHT", StringUtil.isNullOrEmpty(String.valueOf(nArr[1])) ? null : Double.parseDouble(String.valueOf(nArr[1])));
        	}
    		else
    		{
    			extMap.put("WIDTH", null);
            	extMap.put("HEIGHT", null);
    		}
    		
        	generalDao.addUpdate(NAMESAPCE + ".updatePcmImageSize", extMap);
        }
    }
    
    /*
  	 * PCM 이미지 삭제
  	 */
  	 private int deletePcm(Map<String, Object> param) throws Exception{
     	
  		String prodId 	= (String)param.get("PRODUCTDEFID");
  		String prodRev 	= (String)param.get("PRODUCTDEFVERSION");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkPcmImageList", param);
  		
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData003|"+String.format("PRODUCTDEFID = %s, PRODUCTDEFVERSION = %s"
					,prodId,prodRev));
		}
  		
  		// (21.07.16) 이미지 테이블 삭제 추가
  		if (!(StringUtil.isNullOrEmpty(param.get("FILEGUID"))))
    	{	
  			generalDao.addUpdate(NAMESAPCE + ".deletePcmImageFile", param);	
    	}
 		return generalDao.addUpdate(NAMESAPCE + ".deletePcmImage", param);		
 	}
  
  	

}