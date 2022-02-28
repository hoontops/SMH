package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM05000ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05100ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.   박대호     최초  생성
*/
@Service
public class PCM05100ServiceImpl extends AbstractNbdfService implements PCM05100Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05100Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  고객사 조회  
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDefVersion(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDefVersion(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefVersion", param));
    } 
    /**
     * @fn
     * @brief :  품목라우팅 조회 
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDefVersion(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailRoutingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailRoutingList", param));
    } 
    /**
     * @fn
     * @brief :  자재 데이터 조회 
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDetailConsumableList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailConsumableList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailConsumableList", param));
    } 
    /**
     * @fn
     * @brief :  연관 공정 현황
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDetailRelatedSegment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailRelatedSegment(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailRelatedSegment", param));
    } 
    /**
     * @fn
     * @brief :  공정별 치공구 사용이력
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDetailDurableList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailDurableList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailDurableList", param));
    } 
    /**
     * @fn
     * @brief :  공정별 설비 사용이력
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDetailEquipmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailEquipmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailEquipmentList", param));
    } 
    /**
     * @fn
     * @brief :  불량이력
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDetailDefectList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailDefectList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailDefectList", param));
    } 
    /**
     * @fn
     * @brief :  재공현황
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectWIPListCommon(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWIPListCommon(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPListCommon", param));
    } 
    /**
     * @fn
     * @brief :  공정실적
     * @remark 
     * @see smh.pcm.service.PCM05100Service#selectProductDetailWorkResult(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDetailWorkResult(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDetailWorkResult", param));
    } 
    
}