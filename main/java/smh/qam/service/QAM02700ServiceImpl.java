package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: QAM02700ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM02700ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.12
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.12.       권혜영     최초  생성
*/
@Service
public class QAM02700ServiceImpl extends AbstractNbdfService implements QAM02700Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM02700Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 재공불량 금액현황 정보 조회
     * @remark 
     * @see smh.qam.service.QAM02700Service#selectQamWorkDefectPriceStatusList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamWorkDefectPriceStatusList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamWorkDefectPriceStatusList", param));
    }

}