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
* @file        : BAS04200ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04200ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.13  yanghee.kim    최초  생성
*
*/
@Service
public class BAS04200ServiceImpl extends AbstractNbdfService implements BAS04200Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS04200Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
    * @fn          : selectInspitemList
    * @brief       : (Override method) 검사항목목록 조회
    * @Method Name : selectInspitemList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#selectInspitemList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspitemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspitemList", param));
    }

    /**
    * @fn          : selectLookInspmethodList
    * @brief       : (Override method) 검사방법목록 조회
    * @Method Name : selectLookInspmethodList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#selectLookInspmethodList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectLookInspmethodList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLookInspmethodList", param));
    }

    /**
    * @fn          : selectInspitemmethodTreeList
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사방법 조회
    * @Method Name : selectInspitemmethodTreeList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#selectInspitemmethodTreeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspitemmethodTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspitemmethodTreeList", param));
    }

    /**
    * @fn          : selectInspmethodList
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사방법 조회
    * @Method Name : selectInspmethodList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#selectInspmethodList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspmethodList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspmethodList", param));
    }

    /**
    * @fn          : selectInspmethoditemList
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사항목 조회
    * @Method Name : selectInspmethoditemList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#selectInspmethoditemList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspmethoditemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspmethoditemList", param));
    }

    /**
    * @fn          : saveInspitem
    * @brief       : (Override method) 검사항목목록 등록/수정/삭제 Call
    * @Method Name : saveInspitem
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#saveInspitem(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspitem(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspitem(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspitem(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertInspitem
    * @brief       : (Override method) 검사항목목록 등록
    * @Method Name : insertInspitem
    * @remark      : 상세설명
    * @see
    */
    private int insertInspitem(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
		Map<String, Object> map = new HashMap<>();
		String strLang = (String)paramMap.get("SESSION_LANGUAGETYPE");
		strLang = strLang.substring(3);
		String selCol = "INSPITEMNAME_"+strLang;
		
		map.put("ENTERPRISEID", paramMap.get("SESSION_ENTERPRISEID"));
		map.put("INSPITEMNAME", paramMap.get(selCol)); // 검사항목명
		map.put("INSPITEMID", paramMap.get("INSPITEMID"));
		
        //검사항목 명칭 중복체크
		List<Map<String, Object>> dupNameList = generalDao.addSelect(NAMESPACE + ".selectInspitemNameChk", map);        
        if (dupNameList.size() > 0 )
        {
            throw new BizException("ValidateInspItemNameEqual", String.format("Already exists Inspection Item Name is = %s", map.get("INSPITEMNAME")));
        }
        
        //검사항목  ID 중복체크
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspitemChk", paramMap);        
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
									                +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION")));
        }		
		
        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("INSPITEMKEYNAME", uid);
        //paramMap.put("INSPITEMNAME", paramMap.get(selCol)); // 검사항목명
        paramMap.put("DESCRIPTION", paramMap.get("INSPITEMNAME_KR"));
        
        return generalDao.addUpdate(NAMESPACE + ".insertInspitem", paramMap);
    }

    /**
    * @fn          : updateInspitem
    * @brief       : (Override method) 검사항목목록 수정
    * @Method Name : updateInspitem
    * @remark      : 상세설명
    * @see
    */
    private int updateInspitem(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String inspitemkeyname = (String)param.get("INSPITEMKEYNAME");
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

		Map<String, Object> map = new HashMap<>();		
		String strLang = (String)paramMap.get("SESSION_LANGUAGETYPE");
		strLang = strLang.substring(3);
		String selCol = "INSPITEMNAME_"+strLang;
		
		map.put("ENTERPRISEID", paramMap.get("SESSION_ENTERPRISEID"));
		map.put("INSPITEMNAME", paramMap.get(selCol)); // 검사항목명		
		map.put("INSPITEMID", paramMap.get("INSPITEMID"));
		
        //검사항목 명칭 중복체크
		List<Map<String, Object>> dupNameList = generalDao.addSelect(NAMESPACE + ".selectInspitemNameChk", map);        
        if (dupNameList.size() > 0 )
        {
            throw new BizException("ValidateInspItemNameEqual", String.format("Already exists Inspection Item Name is = %s", map.get("INSPITEMNAME")));
        }
        
        //검사항목  ID 중복체크
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspitemChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
	                                                +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION")));
        }

        int lnLength = EgovObjectUtil.isNull(inspitemkeyname) ? 0 : inspitemkeyname.length();
        
        if (lnLength == 0)
        {
            String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            paramMap.put("INSPITEMKEYNAME", uid);
        }
        
        paramMap.put("DESCRIPTION", paramMap.get("INSPITEMNAME_KR"));
        
        return generalDao.addUpdate(NAMESPACE + ".updateInspitem", paramMap);
    }

    /**
    * @fn          : saveLookInspmethod
    * @brief       : (Override method) 검사항목목록 등록/수정/삭제 Call
    * @Method Name : saveLookInspmethod
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#saveLookInspmethod(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLookInspmethod(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            param.put("LOOKUP_TYPE", "InspectionMethod");
            param.put("LOOKUP_CODE", param.get("INSPECTIONMETHODID"));
            param.put("MEANING", param.get("INSPECTIONMETHODNAME_KR"));
            param.put("DESCRIPTION", param.get("INSPECTIONMETHODNAME_KR"));
            param.put("DICTIONARYNAME_KR", param.get("INSPECTIONMETHODNAME_KR"));
            param.put("DICTIONARYNAME_US", param.get("INSPECTIONMETHODNAME_US"));
            param.put("DICTIONARYNAME_CN", param.get("INSPECTIONMETHODNAME_CN"));
            param.put("DICTIONARYNAME_VN", param.get("INSPECTIONMETHODNAME_VN"));
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertLookInspmethod(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateLookInspmethod(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertLookInspmethod
    * @brief       : (Override method) 검사항목목록 등록
    * @Method Name : insertLookInspmethod
    * @remark      : 상세설명
    * @see
    */
    public int insertLookInspmethod(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        //검사항목  ID 중복체크
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectLookValuesChk", paramMap);        
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("LOOKUP_TYPE = %s", paramMap.get("LOOKUP_TYPE"))+", "
                                                    +String.format("LOOKUP_CODE = %s", paramMap.get("LOOKUP_CODE")));
        }		
		
        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("DICTIONARYID", uid);
        
        return generalDao.addUpdate(NAMESPACE + ".insertLookValues", paramMap);
    }

    /**
    * @fn          : updateLookInspmethod
    * @brief       : (Override method) 검사항목목록 수정
    * @Method Name : updateLookInspmethod
    * @remark      : 상세설명
    * @see
    */
    public int updateLookInspmethod(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String dictionaryid = (String)param.get("DICTIONARYID");
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectLookValuesChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("LOOKUP_TYPE = %s", paramMap.get("LOOKUP_TYPE"))+", "
	                                                +String.format("LOOKUP_CODE = %s", paramMap.get("LOOKUP_CODE")));
        }

        int lnLength = EgovObjectUtil.isNull(dictionaryid) ? 0 : dictionaryid.length();
        
        if (lnLength == 0)
        {
            String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            paramMap.put("DICTIONARYID", uid);
        }

        return generalDao.addUpdate(NAMESPACE + ".updateLookValues", paramMap);
    }

    /**
    * @fn          : saveInspmethod
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사방법  등록/수정/삭제 Call
    * @Method Name : saveInspmethod
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#saveInspmethod(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspmethod(UiMapDto dto) throws Exception {
    	DataSetMap methodMap  = getParametersDataSetMap(dto, "INPUT1"); //감사방법별 검사항목 등록 - 검사방법
    	DataSetMap itemMap  = getParametersDataSetMap(dto, "INPUT2");   //감사방법별 검사항목 등록 - 검사항목

    	Map<String, Object> param;

        int result = 0;
        
        //감사방법별 검사항목 등록 - 검사방법
        for (int i = 0, n = methodMap.size(); i < n; i++) {
            param = methodMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspmethod(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspmethod(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        //감사방법별 검사항목 등록 - 검사항목
        for (int i = 0, n = itemMap.size(); i < n; i++) {
            param = itemMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspmethoditem(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspmethoditem(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }
        
        putDataSetMap(dto, result);
    }


    /**
    * @fn          : insertInspmethod
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사방법  등록
    * @Method Name : insertInspmethod
    * @remark      : 상세설명
    * @see
    */
    private int insertInspmethod(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        //검사항목  ID 중복체크
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspmethodChk", paramMap);        
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
									                +String.format("INSPECTIONMETHODID = %s", paramMap.get("INSPECTIONMETHODID")));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".insertInspmethod", paramMap);
    }

    /**
    * @fn          : updateInspmethod
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사방법  수정
    * @Method Name : updateInspmethod
    * @remark      : 상세설명
    * @see
    */
    private int updateInspmethod(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
         
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspmethodChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
	                                                +String.format("INSPECTIONMETHODID = %s", paramMap.get("INSPECTIONMETHODID")));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".updateInspmethod", paramMap);
    }

    /**
    * @fn          : saveInspmethoditem
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사항목 등록/수정 Call
    * @Method Name : saveInspmethoditem
    * @remark      : 상세설명
* @see smh.bas.service.BAS04200Service#saveInspmethoditem(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspmethoditem(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertInspmethoditem(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspmethoditem(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }


    /**
    * @fn          : insertInspmethoditem
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사항목 등록
    * @Method Name : insertInspmethoditem
    * @remark      : 상세설명
    * @see
    */
    private int insertInspmethoditem(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        //검사항목  ID 중복체크
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspmethoditemChk", paramMap);        
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
									                +String.format("INSPECTIONMETHODID = %s", paramMap.get("INSPECTIONMETHODID"))+", "
									                +String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
									                +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION")));
        }		

        paramMap.put("DESCRIPTION", paramMap.get("INSPECTIONMETHODNAME"));
        
        return generalDao.addUpdate(NAMESPACE + ".insertInspmethoditem", paramMap);
    }

    /**
    * @fn          : updateInspmethoditem
    * @brief       : (Override method) 감사방법별 검사항목 등록 - 검사항목  수정
    * @Method Name : updateInspmethoditem
    * @remark      : 상세설명
    * @see
    */
    private int updateInspmethoditem(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String inspitemname = (String)param.get("INSPITEMNAME");
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspmethoditemChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
									                +String.format("INSPECTIONMETHODID = %s", paramMap.get("INSPECTIONMETHODID"))+", "
									                +String.format("INSPITEMID = %s", paramMap.get("INSPITEMID"))+", "
									                +String.format("INSPITEMVERSION = %s", paramMap.get("INSPITEMVERSION")));
        }

        paramMap.put("DESCRIPTION", paramMap.get("INSPECTIONMETHODNAME"));

        return generalDao.addUpdate(NAMESPACE + ".updateInspmethoditem", paramMap);
    }
}