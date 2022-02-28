package smh.hra.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: HRA90110ServiceImpl.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA90110ServiceImpl    
* @Company: Built1
* @Create Date: 2022. 2. 18.
* @Author: 한만섭
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 18.  한만섭     최초  생성
 *
 */
@Service
public class HRA90110ServiceImpl extends AbstractNbdfService implements HRA90110Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA90110Dao";

    @Autowired
    private GeneralDao generalDao;
    
    public void selectOrgTree(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> treeList = generalDao.addSelect(NAMESPACE + ".selectOrgTree", param);
        putDataSetMap(dto, treeList, "ds_tree");
        List<Map<String, Object>> memberList = generalDao.addSelect(NAMESPACE + ".selectMembers", param);
        putDataSetMap(dto, memberList, "ds_members");
    }
    
    public void selectMembers(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectMembers", param);

        putDataSetMap(dto, list);
    } 
}
