package smh.hra.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file        : HRA30710ServiceImpl.java
* @Package     : smh.hra.service 
* @Project name: SM상선 myHR 시스템 구축
* @Type name   : HRA30710ServiceImpl    
* @Company     : Built1
* @Create Date : 2022.02.17. 오후 1:11:20 
* @Author      : yhee.kim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ----------  ----------
 *   2022.02.17.   yhee.kim   최초  생성
 *
*/
@Service
public class HRA30710ServiceImpl extends AbstractNbdfService implements HRA30710Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA30710Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn          : selectFAQList
     * @brief       : (Override method) FAQ 내역 조회
     * @Method Name : selectFAQList
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30710Service#selectFAQList(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void selectFAQList(UiMapDto dto) throws Exception {    	
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectFAQList", param));
    }

    /**
     * @fn          : selectFAQInfo
     * @brief       : (Override method) FAQ 상세내역 조회
     * @Method Name : selectFAQInfo
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30710Service#selectFAQInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */    
    public void selectFAQInfo(UiMapDto dto) throws Exception {    	
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> fqaMap = generalDao.addSelectOneMap(NAMESPACE + ".selectFAQInfo", param);
        
        /*조회 후 첫행의 상세정보 조회가 아닌 사용자가 클릭하여 상세정보가 조회될 경우만 view_count 증가*/
        if ("N".equals(param.get("FIRST_CALL_YN")) && fqaMap != null) {
        	generalDao.addUpdate(NAMESPACE + ".updateViewCount", param);
        }
        putDataSetMap(dto, fqaMap);
    }
    
}
