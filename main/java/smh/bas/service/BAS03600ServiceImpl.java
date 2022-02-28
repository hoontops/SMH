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
* @file: BAS03600ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03600ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.15
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 16.   김기수     최초  생성
*/
@Service
public class BAS03600ServiceImpl extends AbstractNbdfService implements BAS03600Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03600Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 자재 사용 품목 조회
     * @remark 
     * @see smh.bas.service.BAS03600Service#selectBasMaterialUseProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasMaterialUseProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasMaterialUseProduct", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 자재popup 리스트 조회
     * @remark 
     * @see smh.bas.service.BAS03600Service#selectMaterialPopupList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectMaterialPopupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMaterialPopupList", param));
    }

    /**
     * @fn
     * @brief (Override method) 자재popup 리스트 조회
     * @remark 
     * @see smh.bas.service.BAS03600Service#selectMaterialPopupList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasMaterialUseProductAll(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasMaterialUseProductAll", param));
    }
   
}