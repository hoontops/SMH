package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: BAS03500ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03500ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.15
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.   김기수     최초  생성
*/
@Service
public class BAS03500ServiceImpl extends AbstractNbdfService implements BAS03500Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03500Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.BAS03500Service#selectBasResourceUseProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasResourceUseProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasResourceUseProduct", param));
    }

    /**
     * @fn
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.BAS03500Service#selectResourcePopup(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectResourcePopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectResourcePopup", param));
    }
}