package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * 
* @file: PCM00600ServiceImpl.java
* @Package: smh.pcm.service  
* @Project name: IFC MES시스템 구축
* @Type name: PCM00600ServiceImpl    
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
public class PCM00600ServiceImpl extends AbstractNbdfService implements PCM00600Service {
	
	public static final String NAMESAPCE = "smh.pcm.dao.PCM00600Dao";
	
	@Autowired
	private GeneralDao generalDao;
	
	/**
	 * 
	* @fn 
	* @brief Card List 조회
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
* @see smh.pcm.service.PCM00600Service#selectPrintLotCardList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectPrintLotCardList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPrintLotCardList", param));
	}
	
	/**
	 * 
	* @fn 
	* @brief RD 해드 출력 조회
	* @remark
	* - 1. [출력] 버튼 클릭시 호출
* @see smh.pcm.service.PCM00600Service#selectLotInfoOnPrintLotCard(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotInfoOnPrintLotCard(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotInfoOnPrintLotCard", param));
	}
	
	/**
	 * 
	* @fn 
	* @brief RD 바디 출력 조회
	* @remark
	* - 1. [출력] 버튼 클릭시 호출
* @see smh.pcm.service.PCM00600Service#selectProcessResultAndRoutingForLotCardNormal(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectProcessResultAndRoutingForLotCardNormal(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessResultAndRoutingForLotCardNormal", param));
	}
}
