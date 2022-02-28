package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;


/**
* @file: PCM03100ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03100ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class PCM03100ServiceImpl extends AbstractNbdfService implements PCM03100Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM03100Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
	
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief : 
     * @remark 
     * @see smh.pcm.service.PCM03100Service#selectLotInfoByLotID(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotInfoByLotID(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotInfoByLotID", param));
    }
    
    /**
     * @fn
     * @brief :  
     * @remark 
     * @see smh.pcm.service.PCM03100Service#selectLotGenealTreeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotGenealTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotGenealTreeList", param));
    }
    
    
    /**
     * @fn
     * @brief : 
     * @remark 
     * @see smh.pcm.service.PCM03100Service#selectLotWorkHistoryList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotWorkHistoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotWorkHistoryList", param));
    }
    
    
    /**
     * @fn
     * @brief : 
     * @remark 
     * @see smh.pcm.service.PCM03100Service#selectLotSplitMergeHistory(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotSplitMergeHistory(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotSplitMergeHistory", param));
    }
    
    
    
    /**
     * @fn
     * @brief :  
     * @remark 
     * @see smh.pcm.service.PCM03100Service#selectProductSpecInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductSpecInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductSpecInfo", param));
    }
    
    /**
     * @fn
     * @brief : 
     * @remark 
     * @see smh.pcm.service.PCM03100Service#selectLotHistoryDefectPop(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotHistoryDefectPop(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotHistoryDefectPop", param));
    }
    
}