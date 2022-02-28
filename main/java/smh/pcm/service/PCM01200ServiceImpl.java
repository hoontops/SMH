package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM01200ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01200ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.12
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.   박대호     최초  생성
*/
@Service
public class PCM01200ServiceImpl extends AbstractNbdfService implements PCM01200Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM01200Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  미투입 List 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM01200Service#selectNotInputList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectNotInputList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputList", param));
    } 
    /**
     * @fn
     * @brief :  미투입 자재 소요 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM01200Service#selectNotInputMaterialRequirementByMainBase(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectNotInputMaterialRequirementByMainBase(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputMaterialRequirementByMainBase", param));
    } 
    /**
     * @fn
     * @brief :  미투입 자재 소요 탭 디테일 조회 
     * @remark 
     * @see smh.pcm.service.PCM01200Service#selectNotInputMaterialRequirementByConsumable(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectNotInputMaterialRequirementByConsumable(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputMaterialRequirementByConsumable", param));
    } 
    /**
     * @fn
     * @brief :  미투입 자재 소요 탭 머지 전체조회 
     * @remark 
     * @see smh.pcm.service.PCM01200Service#selectNotInputMaterialRequirementByConsumableTotalList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectNotInputMaterialRequirementByConsumableTotalList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputMaterialRequirementByConsumableTotalList", param));
    } 
    
    /**
     * @fn
     * @brief :  미투입(수주별) List 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM01200Service#selectNotInputListBySalseOrder(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectNotInputListBySalseOrder(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectNotInputListBySalseOrder", param));
    } 
    
    
}