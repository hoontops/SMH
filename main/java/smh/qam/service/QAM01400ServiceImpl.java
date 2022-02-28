package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: QAM01400ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01400ServiceImpl
* @Company: Built1
* @Create Date: 2021.06.17
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.17.       권혜영     최초  생성
*/
@Service
public class QAM01400ServiceImpl extends AbstractNbdfService implements QAM01400Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01400Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 종합현황 조회 > 월별 LRR 조회
     * @remark 
     * @see smh.qam.service.QAM01400Service#selectQamOverallStatusList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamOverallStatusList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusList", param));
    }
    
        /**
     * @fn
     * @brief (Override method) 종합현황 조회 > 일별 LRR 조회
     * @remark 
     * @see smh.qam.service.QAM01400Service#selectQamOverallStatusDetailList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamOverallStatusDetailList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusDetailList", param), "ds_qamOverallStatusDetail");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusDetailChartList", param), "ds_qamOverallStatusChartDetail");
    }
    /**
     * @fn
     * @brief (Override method) 업체별 현황(월)
     * @remark 
     * @see smh.qam.service.QAM01400Service#selectQamOverallStatusVendorMonList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamOverallStatusVendorMonList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusVendorMonList", param));
    }
    /**
     * @fn
     * @brief (Override method) 업체별 현황(일)
     * @remark 
     * @see smh.qam.service.QAM01400Service#selectQamOverallStatusVendorDateList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamOverallStatusVendorDateList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusVendorDateList", param), "ds_qamOverallStatusVendorDate");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusVendorDateChartList", param), "ds_qamOverallStatusVendorDateChart");
    }
    /**
     * @fn
     * @brief (Override method) 품목별 현황
     * @remark : 사용안함
     * @see smh.qam.service.QAM01400Service#selectQamOverallStatusItemList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamOverallStatusItemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusItemList", param), "ds_qamOverallStatusItem");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusGroupItemList", param), "ds_qamOverallStatusGroupItem");
    }
    /**
     * @fn
     * @brief (Override method) 품목별 현황
     * @remark  : selectQamOverallStatusItemList 대체
     * @see smh.qam.service.QAM01400Service#selectQamOverallStatusProductDefList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamOverallStatusProductDefList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamOverallStatusProductDefList", param));
    }
}