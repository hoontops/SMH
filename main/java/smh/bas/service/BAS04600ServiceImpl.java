package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;
import smh.commons.TxnHistKey;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : BAS04600ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04600ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.24  yanghee.kim    최초  생성
*
*/
@Service
public class BAS04600ServiceImpl extends AbstractNbdfService implements BAS04600Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS04600Dao";
    public static final String NAME04300 = "smh.bas.dao.BAS04300Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectShipmentInspectionList
    * @brief       : (Override method) 출하 검사기준 정보 조회
    * @Method Name : selectShipmentInspectionList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04600Service#selectShipmentInspectionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectShipmentInspectionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectShipmentInspectionList", param));
    }

    /**
    * @fn          : saveShipmentInspection
    * @brief       : (Override method) 출하 검사기준 정보 등록/수정/삭제 Call
    * @Method Name : saveShipmentInspection
    * @remark      : 상세설명
* @see smh.bas.service.BAS04600Service#saveShipmentInspection(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveShipmentInspection(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
    
            param.put("ENTERPRISEID", (String)param.get("SESSION_ENTERPRISEID"));
            
            String ncrDecisionDegree = (String)param.get("NCRDECISIONDEGREE");
            
            if (!EgovObjectUtil.isNull(ncrDecisionDegree) && !"".equals(ncrDecisionDegree) && ncrDecisionDegree != null)
    		{
    			param.put("ISNCR", "Y");
    		}
    		else
    		{
    			param.put("ISNCR", "N");
    		}  
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertShipmentInspection(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateShipmentInspection(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertShipmentInspection
    * @brief       : (Override method) 출하 검사기준 정보 등록
    * @Method Name : insertShipmentInspection
    * @remark      : 상세설명
    * @see
    */
    private int insertShipmentInspection(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAME04300 + ".selectInspectionitemrelChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002"+"|" + String.format("ENTERPRISEID = %s", paramMap.get("ENTERPRISEID"))+", "
									            	    + String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
									            		+ String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION"))+", "
									            		+ String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
									            		+ String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
									            		+ String.format("RESOURCEID = %s", paramMap.get("RESOURCEID"))+", "
									            		+ String.format("RESOURCEVERSION = %s", paramMap.get("RESOURCEVERSION"))+", "
									            		+ String.format("PROCESSSEGID = %s", paramMap.get("PROCESSSEGID"))+", "
									            		+ String.format("PROCESSEGVERSION = %s", paramMap.get("PROCESSEGVERSION")));
        }

        return generalDao.addUpdate(NAME04300 + ".insertInspectionitemrel", paramMap);
    }

    /**
    * @fn          : updateShipmentInspection
    * @brief       : (Override method) 출하 검사기준 정보 수정
    * @Method Name : updateShipmentInspection
    * @remark      : 상세설명
    * @see
    */
    private int updateShipmentInspection(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAME04300 + ".selectInspectionitemrelChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001"+"|" + String.format("ENTERPRISEID = %s", paramMap.get("ENTERPRISEID"))+", "
									            	    + String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
									            		+ String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION"))+", "
									            		+ String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
									            		+ String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
									            		+ String.format("RESOURCEID = %s", paramMap.get("RESOURCEID"))+", "
									            		+ String.format("RESOURCEVERSION = %s", paramMap.get("RESOURCEVERSION"))+", "
									            		+ String.format("PROCESSSEGID = %s", paramMap.get("PROCESSSEGID"))+", "
									            		+ String.format("PROCESSEGVERSION = %s", paramMap.get("PROCESSEGVERSION")));
        }

        return generalDao.addUpdate(NAMESAPCE + ".updateInspectionitemrel", paramMap);
    }
}