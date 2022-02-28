package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * @file		: PCM08400ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08400ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.3.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.  김진현      최초  생성 
 */
@Service
public class PCM08400ServiceImpl extends AbstractNbdfService implements PCM08400Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08400Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief site 조회(포장실적조회)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPlantList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPlantList", param));
    }
  	
  	
  	/**
     * @fn
     * @brief 제품 구분 조회(포장 실적 조회 - 품목코드 팝업)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectTypeList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTypeList", param));
    }
  	
  	
	/**
     * @fn
     * @brief 품목코드 팝업 조회(포장 실적 조회)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductDefinitionList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionList", param));
    }
  	
  	/**
     * @fn
     * @brief 작업장ID 조회(사용자 권한별)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectAreaListByAuthorityList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaListByAuthorityList", param));
    }
  	
  	/**
     * @fn
     * @brief Lot No 팝업 메인 조회(포장 실적 조회)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectLotIdList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotIdList", param));
    }
  	
  	/**
     * @fn
     * @brief 포장실적 조회 - Lot No - 품목 팝업 조회 
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductionOrderIdListOfLotInput(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductionOrderIdListOfLotInput", param));
    }
  	
  	/**
     * @fn
     * @brief 포장 실적 조회 (Lot No. 선택 팝업의 공정 팝업)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProcessSegmentList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentList", param));
    }
  	
  	/**
     * @fn
     * @brief 포장 실적 조회 (포장 작업 리스트 - 메인조회)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void SelectPackingFinishedList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectPackingFinishedList", param));
    }
  	
  	/**
     * @fn
     * @brief 포장 실적 조회 (포장 작업 리스트 - 상세조회)
     * @remark 
     * @see smh.pcm.service.PCM08400Service#PCM08400ServiceImpl.java(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void SelectPackingLotList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectPackingLotList", param));
    }
  	
  	/******************************************************************************************
  	 *  재포장 완료 조회
  	 ******************************************************************************************/
  	/**
     * @fn
     * @brief 재포장 완료 조회 list
     * @remark 
     * @see smh.pcm.service.PCM08400Service#selectRePackCompList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectRePackCompList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRePackCompList", param));
    }
  	
}