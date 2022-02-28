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
* @file        : BAS04800ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04800ServiceImpl
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
public class BAS04800ServiceImpl extends AbstractNbdfService implements BAS04800Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS04800Dao";
    public static final String NAME04300 = "smh.bas.dao.BAS04300Dao";
    public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectGetSelfInspectionList
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사기준정보 > 자주검사기준정보 조회
    * @Method Name : selectGetSelfInspectionList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04800Service#selectGetSelfInspectionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetSelfInspectionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetSelfInspectionList", param));
    }

    /**
    * @fn          : selectGetSelfInspectionPopup
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사 > 자주검사 리스트
    * @Method Name : selectGetSelfInspectionPopup
    * @remark      : 상세설명
* @see smh.bas.service.BAS04800Service#selectGetSelfInspectionPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetSelfInspectionPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetSelfInspectionPopup", param));
    }

    /**
    * @fn          : selectInspectionPointByRelInfo
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사 > 검사Point 조회(팝업)
    * @Method Name : selectInspectionPointByRelInfo
    * @remark      : 상세설명
* @see smh.bas.service.BAS04800Service#selectInspectionPointByRelInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspectionPointByRelInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspectionPointByRelInfo", param));
    }
    
    /**
    * @fn          : saveInspectionitemrel
    * @brief       : (Override method) 품질 기준 정보의 검사 종류, 검사 정의, 검사 통제를 관리한다.
    * @Method Name : saveInspectionitemrel
    * @remark      : 상세설명
* @see smh.bas.service.BAS04800Service#saveInspectionitemrel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspectionitemrel(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            String isAql = (String)param.get("ISAQL");
            if (!"Y".equals(isAql))
            {
                param.put("ISAQL", "");
            }
            
            String isNcr = (String)param.get("ISNCR");
            if (!"Y".equals(isNcr))
            {
                param.put("ISNCR", "");
            }

            String ncrDecisionDegree = (String)param.get("NCRDECISIONDEGREE");
            
            if (!EgovObjectUtil.isNull(ncrDecisionDegree) && !"".equals(ncrDecisionDegree) && ncrDecisionDegree != null)
            {
            	param.put("ISNCR", "Y");
            }
            else
            {
                param.put("ISNCR", "N");
            } 
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	List<Map<String, Object>> idList = generalDao.addSelect(NAME04300 + ".selectInspectionitemrelChk", param);
                if (idList.size() < 1 )
                {
                	result += insertInspectionitemrel(param);
                }
                else
                {
                	result += updateInspectionitemrel(param);
                }
            }                
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertInspectionitemrel
    * @brief       : (Override method) 자주 검사기준 정보 등록
    * @Method Name : insertInspectionitemrel
    * @remark      : 상세설명
    * @see
    */
    private int insertInspectionitemrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAME04300 + ".selectInspectionitemrelChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("ENTERPRISEID = %s", paramMap.get("ENTERPRISEID"))+", "
                                                    +String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
                                                    +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION"))+", "
                                                    +String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
                                                    +String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
                                                    +String.format("RESOURCEID = %s", paramMap.get("RESOURCEID"))+", "
                                                    +String.format("RESOURCEVERSION = %s", paramMap.get("RESOURCEVERSION"))+", "
                                                    +String.format("PROCESSSEGID = %s", paramMap.get("PROCESSSEGID"))+", "
                                                    +String.format("PROCESSEGVERSION = %s", paramMap.get("PROCESSEGVERSION")));
        }

        return generalDao.addUpdate(NAME04300 + ".insertInspectionitemrel", paramMap);
    }

    /**
    * @fn          : updateInspectionitemrel
    * @brief       : (Override method) 자주 검사기준 정보 수정
    * @Method Name : updateInspectionitemrel
    * @remark      : 상세설명
    * @see
    */
    private int updateInspectionitemrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAME04300 + ".selectInspectionitemrelChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("ENTERPRISEID = %s", paramMap.get("ENTERPRISEID"))+", "
                                                    +String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
                                                    +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION"))+", "
                                                    +String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
                                                    +String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
                                                    +String.format("RESOURCEID = %s", paramMap.get("RESOURCEID"))+", "
                                                    +String.format("RESOURCEVERSION = %s", paramMap.get("RESOURCEVERSION"))+", "
                                                    +String.format("PROCESSSEGID = %s", paramMap.get("PROCESSSEGID"))+", "
                                                    +String.format("PROCESSEGVERSION = %s", paramMap.get("PROCESSEGVERSION")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateSelfInspectionitemrel", paramMap);
    }

    /**
    * @fn          : saveBasInspectionPoint
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사 > 검사Point 저장(팝업)
    * @Method Name : saveBasInspectionPoint
    * @remark      : 상세설명
* @see smh.bas.service.BAS04800Service#saveBasInspectionPoint(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveBasInspectionPoint(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertBasInspectionPoint(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateBasInspectionPoint(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += deleteBasInspectionPoint(param);
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertBasInspectionPoint
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사 > 검사Point 등록
    * @Method Name : insertBasInspectionPoint
    * @remark      : 상세설명
    * @see
    */
    private int insertBasInspectionPoint(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1 + ".selectCurrentSystemTime", "");
        String sToday = systemDate.get(0).get("TODATE").toString();

        paramMap.put("IDCLASSID", "Inspectionpoint");
        paramMap.put("PREFIX", sToday.substring(0,8));

        return generalDao.addUpdate(NAMESPACE + ".insertBasInspectionPoint", paramMap);
    }

    /**
    * @fn          : updateBasInspectionPoint
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사 > 검사Point 수정
    * @Method Name : updateBasInspectionPoint
    * @remark      : 상세설명
    * @see
    */
    private int updateBasInspectionPoint(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectBasInspectionPointChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPECTIONPOINTID = %s", paramMap.get("INSPECTIONPOINTID"))+", "
                                                    +String.format("INSPITEMCLASSID = %s", paramMap.get("INSPITEMCLASSID"))+", "
                                                    +String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
                                                    +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION"))+", "
                                                    +String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
                                                    +String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
                                                    +String.format("RESOURCEID = %s", paramMap.get("RESOURCEID"))+", "
                                                    +String.format("RESOURCEVERSION = %s", paramMap.get("RESOURCEVERSION")));
        }
        return generalDao.addUpdate(NAMESPACE + ".updateBasInspectionPoint", paramMap);
    }

    /**
    * @fn          : deleteBasInspectionPoint
    * @brief       : (Override method) 기준정보 > 품질관리 > 자주검사 > 검사Point 삭제
    * @Method Name : updateQcsegmentinspect
    * @remark      : 상세설명
    * @see
    */
    private int deleteBasInspectionPoint(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectBasInspectionPointChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData003", String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
                                                    +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION"))+", "
                                                    +String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
                                                    +String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
                                                    +String.format("RESOURCEID = %s", paramMap.get("RESOURCEID"))+", "
                                                    +String.format("RESOURCEVERSION = %s", paramMap.get("RESOURCEVERSION"))+", "
                                                    +String.format("RESOURCETYPE = %s", paramMap.get("RESOURCETYPE"))+", "
                                                    +String.format("PROCESSSEGID = %s", paramMap.get("PROCESSSEGID"))+", "
                                                    +String.format("PROCESSEGVERSION = %s", paramMap.get("PROCESSEGVERSION"))+", "
                                                    +String.format("PROCESSSEGMENTTYPE = %s", paramMap.get("PROCESSSEGMENTTYPE")));
        }

        return generalDao.addUpdate(NAMESPACE + ".deleteBasInspectionPoint", paramMap);
    }
}