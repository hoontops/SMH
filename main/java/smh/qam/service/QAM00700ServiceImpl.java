package smh.qam.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file        : QAM00700ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00700ServiceImpl
* @Company     : Built1
* @Create Date : 2021.05.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.13  yanghee.kim    최초  생성
*
*/
@Service
public class QAM00700ServiceImpl extends AbstractNbdfService implements QAM00700Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM00700Dao";
    public static final String NAMESAPCE_QAM00600 = "smh.qam.dao.QAM00600Dao";
    public static final String NAMESAPCE_QAM = "smh.qam.dao.QAMCommonDao";
    

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private QAMCommonService qamService;

    /**
    * @fn          : selectProcessInspAbnormalList
    * @brief       : (Override method) 수입검사 NCR
    * @Method Name : selectProcessInspAbnormalList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00700Service#selectProcessInspAbnormalList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessInspAbnormalList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessInspAbnormalList", param));
    }    
    
    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 수입검사 NCR > 업체동의 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS05300Service#saveOSPInspectionCompanyAgree(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveOSPInspectionCompanyAgree(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	
            	Map<String, Object> abnormalMap = new HashMap<String, Object>();
    			abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
    			abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
    			abnormalMap.put("COMPANYAGREE", "Y");
    			abnormalMap.put("COMPANYAGREEDATE", qamService.getCurrentSystemTime("yyyyMMddHHmmss"));
    			
                result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) Lot정보 조회
     * @remark 
     * @see smh.qam.service.QAM00700Service#selectLotInfoByLotIDOSP(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectLotInfoByLotIDOSP(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_QAM00600 + ".selectLotInfoByLotIDOSP", param));
    }
    
}