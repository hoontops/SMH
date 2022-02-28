package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file        : BAS04300ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04300ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.16
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.16  yanghee.kim    최초  생성
*
*/
@Service
public class BAS04300ServiceImpl extends AbstractNbdfService implements BAS04300Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS04300Dao";
    public static final String NAMEBAS04100 = "smh.bas.dao.BAS04100Dao";
    public static final String NAMEBAS04200 = "smh.bas.dao.BAS04200Dao";
    
    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private BAS04200ServiceImpl  BAS04200ServiceImpl;
    
    /**
    * @fn          : selectInspClassIdList
    * @brief       : (Override method) 검사종류 조회(조회조건)
    * @Method Name : selectInspClassIdList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectInspClassIdList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspClassIdList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspClassIdList", param));
    }
    
    /**
    * @fn          : selectInspDefinitionList
    * @brief       : (Override method) 검사방법 조회
    * @Method Name : selectInspDefinitionList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectInspDefinitionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspDefinitionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspDefinitionList", param));
    }

    /**
    * @fn          : selectInspMethodItemList
    * @brief       : (Override method) 검사항목 조회
    * @Method Name : selectInspMethodItemList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectInspMethodItemList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspMethodItemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspMethodItemList", param));
    }

    /**
    * @fn          : selectImportInspTreeList
    * @brief       : (Override method) 수입(원자재),수입(원자재가공품) Tree 조회
    * @Method Name : selectImportInspTreeList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectImportInspTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectImportInspTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectImportInspTreeList", param));
    }

    /**
    * @fn          : selectInspClassMatList
    * @brief       : (Override method) 수입(원자재),수입(원자재가공품) 자재분류 리스트 조회
    * @Method Name : selectInspClassMatList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectInspClassMatList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspClassMatList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspClassMatList", param));
    }

    /**
    * @fn          : selectReliabilityInspTreeList
    * @brief       : (Override method) 신뢰성 검증 Tree 조회
    * @Method Name : selectReliabilityInspTreeList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectReliabilityInspTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectReliabilityInspTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectReliabilityInspTreeList", param));
    }

    /**
    * @fn          : selectReliabilityClassList
    * @brief       : (Override method) 신뢰성 검증 검사그룹리스트 조회
    * @Method Name : selectReliabilityClassList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectReliabilityClassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectReliabilityClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectReliabilityClassList", param));
    }

    /**
    * @fn          : selectReliabilityItemList
    * @brief       : (Override method) 신뢰성 검증 검사항목 리스트 조회
    * @Method Name : selectReliabilityItemList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#selectReliabilityItemList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectReliabilityItemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectReliabilityItemList", param));
    }
    
    /**
    * @fn          : saveInspDefinition
    * @brief       : (Override method) 검사방법목록 등록/수정 Call
    * @Method Name : saveInspDefinition
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#saveInspDefinition(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspDefinition(UiMapDto dto) throws Exception {
    	DataSetMap methodMap  = getParametersDataSetMap(dto, "INPUT1"); //검사방법
    	DataSetMap itemMap  = getParametersDataSetMap(dto, "INPUT2");   //검사항목
        Map<String, Object> param;

        int result = 0;

        //검사방법
        for (int i = 0, n = methodMap.size(); i < n; i++) {
            param = methodMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspDefinition(param);                
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspDefinition(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        //검사방법정보, 검사방법별 검사항목 등록/수정 Call
        BAS04200ServiceImpl.saveInspmethod(dto);
 

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertInspDefinition
    * @brief       : (Override method) 검사방법목록 등록
    * @Method Name : insertInspDefinition
    * @remark      : 상세설명
    * @see
    */
    private int insertInspDefinition(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        paramMap.put("INSPECTIONDEFVERSION", "*");
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspDefinitionChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
									                +String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
									                +String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
									                +String.format("INSPECTIONMETHODID = %s", paramMap.get("INSPECTIONMETHODID")));
        }

        return generalDao.addUpdate(NAMESPACE + ".insertInspDefinition", paramMap);
    }

    /**
    * @fn          : updateInspDefinition
    * @brief       : (Override method) 검사방법목록 수정
    * @Method Name : updateInspDefinition
    * @remark      : 상세설명
    * @see
    */
    private int updateInspDefinition(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        paramMap.put("INSPECTIONDEFVERSION", "*");
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspDefinitionChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPECTIONDEFID = %s", paramMap.get("INSPECTIONDEFID"))+", "
									                +String.format("INSPECTIONDEFVERSION = %s", paramMap.get("INSPECTIONDEFVERSION"))+", "
									                +String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
									                +String.format("INSPECTIONMETHODID = %s", paramMap.get("INSPECTIONMETHODID")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateInspDefinition", paramMap);
    }

    /**
    * @fn          : saveImportInsp
    * @brief       : (Override method) 수입(원자재),수입(원자재가공품) 등록/수정 Call
    * @Method Name : saveImportInsp
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#saveRawInsp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveImportInsp(UiMapDto dto) throws Exception {
    	DataSetMap classMap  = getParametersDataSetMap(dto, "INPUT1");   //자재분류리스트
    	DataSetMap methodMap  = getParametersDataSetMap(dto, "INPUT2");  //검사 방법 리스트
        Map<String, Object> param;

        int result = 0;

        //자재분류리스트(검사 그룹 정보)
        for (int i = 0, n = classMap.size(); i < n; i++) {
            param = classMap.get(i);
            int type = getRowType(param);
            
            param.put("INSPECTIONCLASSID", param.get("PARENTINSPECTIONCLASSID"));
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspectionclass(param);                
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspectionclass(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        //검사 방법 리스트(검사 정의 정보)
        for (int i = 0, n = methodMap.size(); i < n; i++) {
            param = methodMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspDefinition(param);                
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspDefinition(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }       

        putDataSetMap(dto, result);
    }
    
    /**
    * @fn          : insertInspectionclass
    * @brief       : (Override method) 자재분류리스트(검사 그룹 정보) 등록
    * @Method Name : insertInspectionclass
    * @remark      : 상세설명
    * @see
    */
    private int insertInspectionclass(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMEBAS04100 + ".selectInspectionclassChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID")));
        }
        
        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("INSPECTIONCLASSNAME", uid);
        
        return generalDao.addUpdate(NAMESPACE + ".insertInspectionclass", paramMap);
    }

    /**
    * @fn          : updateInspectionclass
    * @brief       : (Override method) 자재분류리스트(검사 그룹 정보) 수정
    * @Method Name : updateInspectionclass
    * @remark      : 상세설명
    * @see
    */
    private int updateInspectionclass(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMEBAS04100 + ".selectInspectionclassChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID")));
        }

        return generalDao.addUpdate(NAMEBAS04100 + ".updateInspectionclass", paramMap);
    }
    
    /**
    * @fn          : saveReliabilityInsp
    * @brief       : (Override method) 신뢰성 검증 등록/수정 Call
    * @Method Name : saveReliabilityInsp
    * @remark      : 상세설명
* @see smh.bas.service.BAS04300Service#saveReliabilityInsp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveReliabilityInsp(UiMapDto dto) throws Exception {
    	DataSetMap classMap  = getParametersDataSetMap(dto, "INPUT3");   //검사그룹리스트
    	DataSetMap methodMap  = getParametersDataSetMap(dto, "INPUT1");  //검사 방법 리스트
    	DataSetMap itemMap  = getParametersDataSetMap(dto, "INPUT2");    //검사 항목 리스트
        Map<String, Object> param;

        int result = 0;

        //검사그룹리스트(검사 그룹 정보)
        for (int i = 0, n = classMap.size(); i < n; i++) {
            param = classMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspectionclass(param);                
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspectionclass(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        //검사 정의 정보, 검사방법, 검사방법별 검사항목  등록/수정 Call
        saveInspDefinition(dto);      

        //검사 항목 정의 등록
        for (int i = 0, n = itemMap.size(); i < n; i++) {
            param = itemMap.get(i);
            int type = getRowType(param);
            
            String ncrDecisionDegree = (String)param.get("NCRDECISIONDEGREE");
            param.put("INSPITEMVERSION", "*");         /*검사 항목 Version*/
            param.put("INSPECTIONDEFVERSION", "*");    /*검사 정의 Version*/
            param.put("RESOURCEID", "*");              /*자원 ID*/
            param.put("RESOURCEVERSION", "*");         /*자원 Version*/
            param.put("PROCESSSEGID", "*");            /*공정ID*/
            param.put("PROCESSEGVERSION", "*");        /*공정Version*/
 
            if (!EgovObjectUtil.isNull(ncrDecisionDegree) && !"".equals(ncrDecisionDegree) && ncrDecisionDegree != null)
			{
				param.put("ISNCR", "Y");
				param.put("ISINSPECTIONREQUIRED","Y");
			}
			else
			{
				param.put("ISNCR", "N");
				param.put("ISINSPECTIONREQUIRED","N");
			}
			
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspectionitemrel(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspectionitemrel(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        putDataSetMap(dto, result);
    } 
    
    /**
    * @fn          : insertInspectionitemrel
    * @brief       : (Override method) 검사 항목 정의 등록
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
		
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionitemrelChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID")));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".insertInspectionitemrel", paramMap);
    }

    /**
    * @fn          : updateInspectionitemrel
    * @brief       : (Override method) 검사 항목 정의 수정
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
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionitemrelChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateInspectionitemrel", paramMap);
    }
}