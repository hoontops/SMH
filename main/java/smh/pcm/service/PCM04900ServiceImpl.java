package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * 
* @file: PCM04900ServiceImpl.java
* @Package: smh.pcm.service  
* @Project name: IFC MES시스템 구축
* @Type name: PCM04900ServiceImpl    
* @Company: Built1
* @Create Date: 2021 2021. 3. 9.
* @Author: 장병곤
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 9.        장병곤     최초  생성
 *
 */
@Service
public class PCM04900ServiceImpl  extends AbstractNbdfService implements PCM04900Service {
	
	public static final String NAMESAPCE = "smh.pcm.dao.PCM04900Dao";
	
	@Autowired
	private GeneralDao generalDao;
	
	/**
	 * 
	* @fn selectComboList
	* @brief Rev
	* @remark
	* - 1. 폼 온 로드시 호출
* @see smh.pcm.service.PCM04900Service#selectComboList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectComboList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectComboList", param));
	}
	
	/**
	 * 
	* @fn selectComboList
	* @brief Rev
	* @remark
	* - 1. 폼 온 로드시 호출
* @see smh.pcm.service.PCM04900Service#selectComboList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectPopupList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPopupList", param));
	}
	
	/**
	 * 
	* @fn selectWIPList
	* @brief 재공 조회
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
* @see smh.pcm.service.PCM04900Service#selectWIPList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectWIPList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPList", param));
	}
}
