package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: QAM03400ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03400ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.27
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.27.       권혜영     최초  생성
*/
@Service
public class QAM03400ServiceImpl extends AbstractNbdfService implements QAM03400Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM03400Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) AFFECT LOT산정 조회
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectQamAffectLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamAffectLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamAffectLotList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) Lot 조회
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectLotIdList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectLotIdList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotIdList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 품목
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectProductListByCustomer(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProductListByCustomer(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductListByCustomer", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 주차
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectProductMKWeekByProductdefid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProductMKWeekByProductdefid(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductMKWeekByProductdefid", param));
    }
    
    /**
     * @fn
     * @brief (Override method) Box No
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectProductBoxNoByProductdefid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProductBoxNoByProductdefid(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductBoxNoByProductdefid", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 대공정
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectTopProcessSegmentIdByProductdefid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectTopProcessSegmentIdByProductdefid(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTopProcessSegmentIdByProductdefid", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 중공정
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectMiddleProcessSegmentIdByProductdefid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectMiddleProcessSegmentIdByProductdefid(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMiddleProcessSegmentIdByProductdefid", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 공정
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectProcessSegmentIdByProductdefid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProcessSegmentIdByProductdefid(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentIdByProductdefid", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 작업장
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectAreaIdByProcesssegmentId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectAreaIdByProcesssegmentId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaIdByProcesssegmentId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 설비그룹
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectEquipmentClassIdByAreaId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectEquipmentClassIdByAreaId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEquipmentClassIdByAreaId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 자원
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectResourceIdByEquipmentClassId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectResourceIdByEquipmentClassId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectResourceIdByEquipmentClassId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 설비호기
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectEquipmentidByResourceId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectEquipmentidByResourceId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEquipmentidByResourceId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 작업자
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectWorkstartUserByEquipmentid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectWorkstartUserByEquipmentid(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkstartUserByEquipmentid", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 치공구 명
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectDurableDefIdByDurableClassId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectDurableDefIdByDurableClassId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableDefIdByDurableClassId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 치공구 NO
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectDurablelotidByDurableDefId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectDurablelotidByDurableDefId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurablelotidByDurableDefId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 원자재
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectMaterialDefId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectMaterialDefId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMaterialDefId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 원자재 LOT
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectMateriallotidByMaterialDefId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectMateriallotidByMaterialDefId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMateriallotidByMaterialDefId", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 반제품명
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectProductMaterialLotId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProductMaterialLotId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductMaterialLotId", param));
    }
    /**
     * 
     * @fn
     * @brief (Override method) 반제품 LOT
     * @remark 
     * @see smh.qam.service.QAM03400Service#selectMaterialLotIdByProductMaterialLotId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectMaterialLotIdByProductMaterialLotId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMaterialLotIdByProductMaterialLotId", param));
    }

}