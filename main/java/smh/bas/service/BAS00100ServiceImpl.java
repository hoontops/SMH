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
* @file: BAS00100ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00100ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   진성하     최초  생성
*/
@Service
public class BAS00100ServiceImpl extends AbstractNbdfService implements BAS00100Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 회사 정보 조회
     * @remark 
     * @see smh.bas.service.BAS00100Service#selectBasEnterpriseList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasEnterpriseList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasEnterpriseList", param));
    }


    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 회사 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS00100Service#saveBasEnterprise(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasEnterprise(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertBasEnterprise", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateBasEnterprise", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteBasEnterprise", param);
            }
        }
        
        putDataSetMap(dto, result);
    }

}