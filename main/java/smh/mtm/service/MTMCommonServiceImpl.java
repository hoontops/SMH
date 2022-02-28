package smh.mtm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MTMCommonServiceImpl extends AbstractNbdfService implements MTMCommonService {

    public static final String NAMESAPCE = "smh.mtm.dao.MTMCommonDao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 검색조건 콤보값 조회
     * @remark 
     * @see 
     */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        
        Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        } 
        
    }
    
    //창고명 조회
    public void selectWhNmPopupList(UiMapDto dto) throws Exception{
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWhNmPopupList", param));    	
    }
    
    
    
    /**
     * @fn 			: selectConsumableList
     * @brief 		: (Override method) 함수 간략한 설명
     * @Method Name : selectConsumableList
     * @remark		: 상세설명
     * @see smh.mtm.service.MTMCommonService#selectConsumableList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConsumableList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableList", param));
    	
       
    }
    
    /**
     * @fn 			: selectRequestType
     * @brief 		: (Override method) 자재 불출 요청 유형
     * @Method Name : selectRequestType
     * @remark		: 자재 불출 요청 유형
     * @see smh.mtm.service.MTMCommonService#selectRequestType(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRequestType(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRequestType", param));
    	
       
    }
    
  
}