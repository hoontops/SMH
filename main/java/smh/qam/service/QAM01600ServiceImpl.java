package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: QAM01600ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01600ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.5.       권혜영     최초  생성
*/
@Service
public class QAM01600ServiceImpl extends AbstractNbdfService implements QAM01600Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01600Dao";
    public static final String NAMESAPCE_PCM = "smh.pcm.dao.PCMCommonDao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief (Override method) 출하검사이상발생 조회
     * @remark 
     * @see smh.qam.service.QAM01600Service#selectShipmentAbnormalOccurrence(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectShipmentAbnormalOccurrence(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectShipmentAbnormalOccurrence", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 품질규격 이상발생 > 품질규격 측정항목의 파일 리스트 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectShipmentInspectionImage(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectShipmentInspectionImage(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectShipmentInspectionImage", param));
    }

}