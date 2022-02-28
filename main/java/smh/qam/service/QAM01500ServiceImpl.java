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
* @file: QAM01500ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01500ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.14
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.14.       권혜영     최초  생성
*/
@Service
public class QAM01500ServiceImpl extends AbstractNbdfService implements QAM01500Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01500Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 월별 LRR 목표등록  정보 조회
     * @remark 
     * @see smh.qam.service.QAM01500Service#selectQamShipinspectiontargetList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamShipinspectiontargetList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamShipinspectiontargetList", param));
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 월별 LRR 목표등록  정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.qam.service.QAM01500Service#saveQamShipinspectiontarget(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamShipinspectiontarget(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertQamShipinspectiontarget", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateQamShipinspectiontarget", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteQamShipinspectiontarget", param);
            }
        }
        
        putDataSetMap(dto, result);
    }

}