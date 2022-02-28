package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;


/**
* @file: QAM00300ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM00300ServiceImpl
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
public class QAM00300ServiceImpl extends AbstractNbdfService implements QAM00300Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM00300Dao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private QAMCommonService qamService;

    /**
     * @fn
     * @brief (Override method) 검사원관리 정보 조회
     * @remark 
     * @see smh.qam.service.QAM00300Service#selectQamQcinspectorList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamQcinspectorList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamQcinspectorList", param));
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 검사원관리 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.qam.service.QAM00300Service#saveQamQcinspector(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamQcinspector(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	
            	String enterYy = StringUtil.Object2String(param.get("ENTERDATE")).substring(0,4);
            	String enterYy2digits = enterYy.substring(2,4);
            	
            	//입사년도별 숫자SEQ 4자리
            	int iLastserialno = qamService.selectSequence("InspectorSequence", param.get("AREAID"),  param.get("PLANTCODEID"), enterYy);
            	String sequence = String.format("%04d", iLastserialno);
            	
            	//2021.05.17 작업장코드 + SITE구분 + 입사년도(00) + 입사년도별 숫자SEQ 4자리
            	StringBuffer sb = new StringBuffer();
            	sb.append(param.get("AREAID")).append(param.get("PLANTCODEID")).append(enterYy2digits).append(sequence);
            	
            	param.put("INSPECTORID", sb.toString());
            	
            	result += generalDao.addUpdate(NAMESAPCE + ".insertQamQcinspector", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateQamQcinspector", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteQamQcinspector", param);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) 검사원관리 정보 조회
     * @remark 
     * @see smh.qam.service.QAM00300Service#selectQamQcinspectorhistoryList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamQcinspectorhistoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamQcinspectorhistoryList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 검사원 관리의 점수에 따른 등급조회
     * @remark 
     * @see smh.qam.service.QAM00300Service#selectInspectionScore(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInspectionScore(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInspectionScore", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 검사원 등록 시 이미 등록된 검사원명, 사원번호인지 조회
     * @remark 
     * @see smh.qam.service.QAM00300Service#selectExistInspector(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectExistInspector(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectExistInspector", param));
    }

}