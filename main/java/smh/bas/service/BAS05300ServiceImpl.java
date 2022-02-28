package smh.bas.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: BAS05300ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05300ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.2
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.2.       권혜영     최초  생성
*/
@Service
public class BAS05300ServiceImpl extends AbstractNbdfService implements BAS05300Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS05300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 작업장 트리 정보 조회
     * @remark 
     * @see smh.bas.service.BAS05300Service#selectBasAreaTreeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasAreaTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasAreaTreeList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 작업장 작업인원 정보 조회
     * @remark 
     * @see smh.bas.service.BAS05300Service#selectBasAreaworkerList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasAreaworkerList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasAreaworkerList", param));
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 작업장 작업인원 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS05300Service#saveBasAreaworker(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasAreaworker(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertBasAreaworker", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateBasAreaworker", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteBasAreaworker", param);
            }
        }
        
        putDataSetMap(dto, result);
    }

}