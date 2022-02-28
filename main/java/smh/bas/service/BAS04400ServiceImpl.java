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
* @file: BAS04400ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04400ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.13
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.13.       권혜영     최초  생성
*/
@Service
public class BAS04400ServiceImpl extends AbstractNbdfService implements BAS04400Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS04400Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief (Override method) 조치등급 조회
     * @remark 
     * @see smh.bas.service.BAS04400Service#selectBasQcgradeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasQcgradeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasQcgradeList", param));
    }

    /**
     * @fn
     * @brief (Override method) 품질 InterLock 등급정보  조회
     * @remark 
     * @see smh.bas.service.BAS04400Service#selectBasQcinterlockList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasQcinterlockList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasQcinterlockList", param));
    }

    /**
     * @fn
     * @brief (Override method) 품질 InterLock Action 정보 조회
     * @remark 
     * @see smh.bas.service.BAS04400Service#selectBasQcinterlockactionList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasQcinterlockactionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasQcinterlockactionList", param));
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark -품질 InterLock 등급정보 / 품질 InterLock Action 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS04400Service#saveBasQcinterlockaction(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasQcinterlock(UiMapDto dto) throws Exception {
        DataSetMap acinterlock = getParametersDataSetMap(dto, "ds_basQcinterlock");
        DataSetMap acinterlockaction = getParametersDataSetMap(dto, "ds_basQcinterlockaction");
        Map<String, Object> param;

        int result = 0;
        if(acinterlock != null) {
        	for (int i = 0, n = acinterlock.size(); i < n; i++) {
        		param = acinterlock.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			param.put("SEQUENCE", param.get("SEQ"));
        			result += generalDao.addUpdate(NAMESAPCE + ".insertBasQcinterlock", param);
        		} else if (type == DataSet.ROW_TYPE_UPDATED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".updateBasQcinterlock", param);
        		} else if (type == DataSet.ROW_TYPE_DELETED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".deleteBasQcinterlock", param);
        		}
        	}
        }
        
        if(acinterlockaction != null) {
        	for (int i = 0, n = acinterlockaction.size(); i < n; i++) {
        		param = acinterlockaction.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".insertBasQcinterlockaction", param);
        		} else if (type == DataSet.ROW_TYPE_UPDATED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".updateBasQcinterlockaction", param);
        		} else if (type == DataSet.ROW_TYPE_DELETED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".deleteBasQcinterlockaction", param);
        		}
        	}
        }
        
        putDataSetMap(dto, result);
    }

}