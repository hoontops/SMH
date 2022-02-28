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
* @file: BAS03800ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03800ServiceImpl
* @Company: IFC
* @Create Date: 2021.3.11
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 11.   김기수     최초  생성
*/
@Service
public class BAS03800ServiceImpl extends AbstractNbdfService implements BAS03800Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03800Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 치공구 사용품목 조회
     * @remark 
     * @see smh.bas.service.BAS03800Service#selectBasToolList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasToolList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasToolList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 치공구 POPUP List
     * @remark 
     * @see smh.bas.service.BAS03800Service#selectBasToolList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDurableCodePopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDurableCodePopup", param));
    }


   
}