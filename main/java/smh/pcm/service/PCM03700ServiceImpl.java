package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * 
* @file: PCM03700ServiceImpl.java
* @Package: smh.pcm.service  
* @Project name: 대륜E&S 빌링시스템 재구축
* @Type name: PCM03700ServiceImpl    
* @Company: Built1
* @Create Date: 2021 2021. 4. 1. 오후 3:58:17 
* @Author: JinSungHa
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 1.        JinSungHa     최초  생성
 *
 */
@Service
public class PCM03700ServiceImpl extends AbstractNbdfService implements PCM03700Service {
	
	public static final String NAMESAPCE = "smh.pcm.dao.PCM03700Dao";
	
	@Autowired
	private GeneralDao generalDao;
	
	/**
	 * 
	* @fn 
	* @brief (Override method) 함수 간략한 설명
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
* @see smh.pcm.service.PCM03700Service#selectWIPLockList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLockList(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLockList", param));
	}
	
	/**
	 * 
	* @fn 
	* @brief (Override method) 함수 간략한 설명
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
* @see smh.pcm.service.PCM03700Service#selectLotLockingCount(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotLocking(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotLocking", param));
	}
	
	/**
	 * 
	* @fn 
	* @brief (Override method) 함수 간략한 설명
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
* @see smh.pcm.service.PCM03700Service#insertLotLocking(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void insertLotLocking(UiMapDto dto) throws Exception {
		
		int result = 0;
		Map<String, Object> param = null;
		DataSetMap ds_lotlocking = getParametersDataSetMap(dto, "ds_lotlocking");	
		for (int i = 0; i < ds_lotlocking.size(); i++) {
			
			param = ds_lotlocking.get(i);
			result += generalDao.addUpdate(NAMESAPCE + ".insertLotLocking", param);
			result += generalDao.addUpdate(NAMESAPCE + ".updateLot",        param);
		}
		 
		putDataSetMap(dto, result);
	}  
}
