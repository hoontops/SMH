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
* @file: BAS01000ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01000ServiceImpl
* @Company: IFC
* @Create Date: 2021.4.6
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 6.   유창균     최초  생성
*/
@Service
public class BAS01000ServiceImpl extends AbstractNbdfService implements BAS01000Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS01000Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 고객 정보 조회
     * @remark 
     * @see smh.bas.service.BAS01000Service#selectBasCustomerList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasCustomerList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasCustomerList", param));
    }
   
}