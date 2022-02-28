package smh.mfm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * @file		: MFM00200ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
@Service
public class MFM00500ServiceImpl extends AbstractNbdfService implements MFM00500Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM00500Dao";
    public static final String NAMESAPCE_MFM_COMMON = "smh.mfm.dao.MFM00001Dao"; //TOM 공통 DAO

    @Autowired
    private GeneralDao generalDao;
    
	/**
     * @fn
     * @brief 종합 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentListByTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadPredictionPerRecordTotalList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);  		
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadPredictionPerRecordTotalList", param));
    }
  	
  	/**
     * @fn
     * @brief 상세 List
     * @remark 
     * @see smh.mfm.service.MFM00200Service#selectLoadSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLoadPredictionPerRecordList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLoadPredictionPerRecordList", param));
    }
  	
  	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}