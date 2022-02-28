package smh.mtm.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: MTM00100ServiceImpl.java
* @Package: smh.mtm.service
* @Project name: IFC MES시스템 구축
* @Type name: MTM00100ServiceImpl
* @Company: IFC
* @Create Date: 2021.4.28
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 20.   유창균     최초  생성
*/
@Service
public class MTM00100ServiceImpl extends AbstractNbdfService implements MTM00100Service {

    public static final String NAMESAPCE = "smh.mtm.dao.MTM00100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 마스터품목(자재) 조회
     * @remark 
     * @see smh.bas.service.MTM00100Service#selectMtmMaterialManagementList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectMtmMaterialManagementList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMtmMaterialManagementList", param));
    }
    
    public void selectMtmMaterialDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMtmMaterialDetail", param));
    }
   
}