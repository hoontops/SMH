package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: QAM02900ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM02900ServiceImpl
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
public class QAM02900ServiceImpl extends AbstractNbdfService implements QAM02900Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM02900Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 검사원 등급 정보 조회
     * @remark 
     * @see smh.qam.service.QAM02900Service#selectQamQcinspectorgradeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamQcinspectorgradeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamQcinspectorgradeList", param));
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 검사원 등급 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.qam.service.QAM02900Service#saveQamQcinspectorgrade(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamQcinspectorgrade(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertQamQcinspectorgrade", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateQamQcinspectorgrade", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteQamQcinspectorgrade", param);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) 검사원 등급 정보 조회
     * @remark 
     * @see smh.qam.service.QAM02900Service#selectQamQcinspectorgradehistoryList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamQcinspectorgradehistoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamQcinspectorgradehistoryList", param));
    }

}