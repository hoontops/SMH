package smh.hra.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

@Service
public class HRA20110ServiceImpl extends AbstractNbdfService implements HRA20110Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA20110Dao";
	
	@Autowired
	private GeneralDao generalDao;
	
    /**
     * @fn          : selectStaffList
     * @brief       : (Override method) 부서원 인사 정보 조회
     * @Method Name : selectStaffList
     * @remark      : 상세설명
     * @see smh.hra.service.HRA20110Service#selectStaffList(com.nbdf.commons.ui.vo.UiMapDto)
     */ 
	
	public void selectStaffList(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		System.out.println(param);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectStaffList", param));
		
		
	}
	

}
