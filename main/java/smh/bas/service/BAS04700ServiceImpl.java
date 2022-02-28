package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : BAS04700ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04700ServiceImpl
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
public class BAS04700ServiceImpl extends AbstractNbdfService implements BAS04700Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS04700Dao";
    public static final String NAME04300 = "smh.bas.dao.BAS04300Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectQcOperationInspectionItemList
    * @brief       : (Override method) 탭1. 계측검사 - 제품정보 조회
    * @Method Name : selectQcOperationInspectionItemList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04700Service#selectQcOperationInspectionItemList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcOperationInspectionItemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcOperationInspectionItemList", param));
    }

    /**
    * @fn          : selectQcOperationInspectionList
    * @brief       : (Override method) 탭1. 계측검사 - 검사정보 조회
    * @Method Name : selectQcOperationInspectionList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04700Service#selectQcOperationInspectionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcOperationInspectionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcOperationInspectionList", param));
    }

    /**
    * @fn          : selectQcOSPInspectionList
    * @brief       : (Override method) 탭2. 공정수입검사 조회
    * @Method Name : selectQcOSPInspectionList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04700Service#selectQcOSPInspectionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcOSPInspectionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcOSPInspectionList", param));
    }

    /**
    * @fn          : selectSpecDetailPopUp
    * @brief       : (Override method) 규격조회(팝업)
    * @Method Name : selectSpecDetailPopUp
    * @remark      : 상세설명
* @see smh.bas.service.BAS04700Service#selectSpecDetailPopUp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectSpecDetailPopUp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectSpecDetailPopUp", param));
    }
    
    /**
    * @fn          : saveInspectionitemrel
    * @brief       : (Override method) 품질 기준 정보의 검사 종류, 검사 정의, 검사 통제를 관리한다.
    * @Method Name : saveInspectionitemrel
    * @remark      : 상세설명
* @see smh.bas.service.BAS04700Service#saveInspectionitemrel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspectionitemrel(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap jobMap = getParametersDataSetMap(dto, "INPUT1");
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);    
       
    		param.put("INSPECTIONDEFVERSION", "*");
    		param.put("INSPITEMVERSION", "*");
    		param.put("PROCESSEGVERSION", "*");
    		
            if ("OperationInspection".equals(jobMap.get(0).get("JOBFLAG"))) //계측검사
            {
            	param.put("RESOURCEID", param.get("ITEMID"));
            	param.put("RESOURCEVERSION", param.get("ITEMVERSION"));
            	param.put("JOBFLAG", "OperationInspection");
            }
            else
            {
            	param.put("INSPECTIONDEFID", "OSPInspection");
            	param.put("PLANTID", "*");
            	param.put("RESOURCEID", "*");
            	param.put("RESOURCEVERSION", "*");
            	param.put("INSPITEMID", "*");
            	param.put("RESOURCETYPE", "QCSegmentID");
            	param.put("JOBFLAG", "OSPInspection");
            }

            if (type == DataSet.ROW_TYPE_INSERTED)
            {
                result += insertInspectionitemrel(param);
            }
            else if (type == DataSet.ROW_TYPE_UPDATED)
            {            
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
            else if (type == DataSet.ROW_TYPE_DELETED){}
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertInspectionitemrel
    * @brief       : (Override method) 공사 검사기준 정보 등록
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
    * @fn          : updateInspectionitemrel
    * @brief       : (Override method) 공사 검사기준 정보 수정
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
        if ("OperationInspection".equals(paramMap.get("JOBFLAG"))) //계측검사
        {
        	return generalDao.addUpdate(NAMESPACE + ".updateOperationInspectionitemrel", paramMap);
        }
        else
        {
        	return generalDao.addUpdate(NAMESPACE + ".updateOSPInspectionitemrel", paramMap);
        }
    }
}