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
* @file        : BAS04100ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04100ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.10
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.10  yanghee.kim    최초  생성
*
*/
@Service
public class BAS04100ServiceImpl extends AbstractNbdfService implements BAS04100Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS04100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectInspectionclassList
    * @brief       : (Override method) 검사정의 조회
    * @Method Name : selectInspectionclassList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#selectInspectionclassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspectionclassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspectionclassList", param));
    }

    /**
    * @fn          : selectProcesssegmentclassLList
    * @brief       : (Override method) 검사통제 - 대공정 조회
    * @Method Name : selectProcesssegmentclassLList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#selectProcesssegmentclassLList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcesssegmentclassLList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcesssegmentclassLList", param));
    }
    
    /**
    * @fn          : selectProcesssegmentclassMList
    * @brief       : (Override method) 검사통제 - 중공정 조회
    * @Method Name : selectProcesssegmentclassMList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#selectProcesssegmentclassMList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcesssegmentclassMList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcesssegmentclassMList", param));
    }

    /**
    * @fn          : selectProcesssegmentclassList
    * @brief       : (Override method) 검사통제 - 공정 조회
    * @Method Name : selectProcesssegmentclassList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#selectProcesssegmentclassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcesssegmentclassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcesssegmentclassList", param));
    }

    /**
    * @fn          : selectProcessInspectionclassList
    * @brief       : (Override method) 검사통제 - 검사종류 조회
    * @Method Name : selectProcessInspectionclassList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#selectProcessInspectionclassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessInspectionclassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessInspectionclassList", param));
    }

    /**
    * @fn          : saveInspectionclass
    * @brief       : (Override method) 검사정의 수정 Call
    * @Method Name : saveInspectionclass
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#saveInspectionclass(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspectionclass(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        //작업장 데이터 작업
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {                
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateInspectionclass(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : updateInspectionclass
    * @brief       : (Override method) 검사정의 수정
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

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionclassChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData002", String.format("DEFECTCODECLASSID = %s", paramMap.get("DEFECTCODECLASSID"))+", "
									                +String.format("DEFECTITEMCODE = %s", paramMap.get("DEFECTITEMCODE"))+", "
									                +String.format("EQUIPMENTID = %s", paramMap.get("EQUIPMENTID"))+", "
									                +String.format("DEFECTCODE = %s", paramMap.get("DEFECTCODE")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateInspectionclass", paramMap);
    }
    
    /**
    * @fn          : saveInspectionsegmentrel
    * @brief       : (Override method) 검사 공정 - 통제 정보 등록/수정 Call
    * @Method Name : saveInspectionsegmentrel
    * @remark      : 상세설명
* @see smh.bas.service.BAS04100Service#saveInspectionsegmentrel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveInspectionsegmentrel(UiMapDto dto) throws Exception {        
        DataSetMap largeMap  = getParametersDataSetMap(dto, "INPUT11"); //검사통제-대공정 검사종류 
        DataSetMap middleMap = getParametersDataSetMap(dto, "INPUT22"); //검사통제-중공정 검사종류        
        DataSetMap stdMap    = getParametersDataSetMap(dto, "INPUT33"); //검사통제-공정 검사종류
        
        Map<String, Object> param;

        int result = 0;

        //검사통제-대공정 검사종류 
        for (int i = 0, n = largeMap.size(); i < n; i++) {
            param = largeMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	
            	List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionsegmentrelChk", param);
                
            	if (idList.size() > 0 ){
                	result += updateInspectionsegmentrel(param);
                }else{
                	result += insertInspectionsegmentrel(param);
                }
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteInspectionsegmentrel(param);
            }
        }

        //검사통제-중공정 검사종류 
        for (int i = 0, n = middleMap.size(); i < n; i++) {
            param = middleMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	
            	List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionsegmentrelChk", param);
                
            	if (idList.size() > 0 ){
                	result += updateInspectionsegmentrel(param);
                }else{
                	result += insertInspectionsegmentrel(param);
                }
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteInspectionsegmentrel(param);
            }
        }
        
        //검사통제-공정 검사종류 
        for (int i = 0, n = stdMap.size(); i < n; i++) {
            param = stdMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	
            	List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionsegmentrelChk", param);
                
            	if (idList.size() > 0 ){
                	result += updateInspectionsegmentrel(param);
                }else{
                	result += insertInspectionsegmentrel(param);
                }
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteInspectionsegmentrel(param);
            }
        }
        
        putDataSetMap(dto, result);
    }
  
    /**
    * @fn          : insertInspectionsegmentrel
    * @brief       : (Override method) 검사 통제 - 공정 등록
    * @Method Name : insertInspectionsegmentrel
    * @remark      : 상세설명
    * @see
    */
    private int insertInspectionsegmentrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionsegmentrelChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("PROCESSSEGMENTID = %s", paramMap.get("PROCESSSEGMENTID"))+", "
									                +String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
									                +String.format("PROCESSSEGMENTTYPE = %s", paramMap.get("PROCESSSEGMENTTYPE"))+", "
									                +String.format("PROCESSSEGMENTVERSION = %s", paramMap.get("PROCESSSEGMENTVERSION")));
        }

        return generalDao.addUpdate(NAMESPACE + ".insertInspectionsegmentrel", paramMap);
    }
    
    /**
    * @fn          : updateInspectionsegmentrel
    * @brief       : (Override method) 검사 통제 - 공정 수정
    * @Method Name : updateInspectionsegmentrel
    * @remark      : 상세설명
    * @see
    */
    private int updateInspectionsegmentrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionsegmentrelChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("PROCESSSEGMENTID = %s", paramMap.get("PROCESSSEGMENTID"))+", "
	                                                +String.format("INSPECTIONCLASSID = %s", paramMap.get("INSPECTIONCLASSID"))+", "
	                                                +String.format("PROCESSSEGMENTTYPE = %s", paramMap.get("PROCESSSEGMENTTYPE"))+", "
	                                                +String.format("PROCESSSEGMENTVERSION = %s", paramMap.get("PROCESSSEGMENTVERSION")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateInspectionsegmentrel", paramMap);
    }

    /**
    * @fn          : deleteInspectionsegmentrel
    * @brief       : (Override method) 검사 통제 - 공정 삭제
    * @Method Name : deleteInspectionsegmentrel
    * @remark      : 상세설명
    * @see
    */
    private int deleteInspectionsegmentrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectInspectionsegmentrelChk", paramMap);
        if (idList.size() < 1 ) 
        {
            throw new BizException("InValidData003", String.format("DEFECTCODECLASSID = %s", paramMap.get("DEFECTCODECLASSID"))+", "
            		                                +String.format("DEFECTITEMCODE = %s", paramMap.get("DEFECTITEMCODE"))+", "
            		                               	+String.format("EQUIPMENTID = %s", paramMap.get("EQUIPMENTID"))+", "
            		                                +String.format("DEFECTCODE = %s", paramMap.get("DEFECTCODE")));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".deleteInspectionsegmentrel", paramMap);        
    }
}