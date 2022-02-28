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
* @file        : BAS03900ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS03900ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.04
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.04  yanghee.kim    최초  생성
*
*/
@Service
public class BAS03900ServiceImpl extends AbstractNbdfService implements BAS03900Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS03900Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectDefectcoderelList
    * @brief       : (Override method) 불량코드 조회
    * @Method Name : selectDefectcoderelList
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#selectDefectcoderelList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectcoderelList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectcoderelList", param));
    }

    /**
    * @fn          : selectDefectcodeList
    * @brief       : (Override method) 품질공정 조회
    * @Method Name : selectDefectcodeList
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#selectDefectcodeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectcodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectcodeList", param));
    }

    /**
    * @fn          : selectQcsegmentList
    * @brief       : (Override method) 품질공정 조회
    * @Method Name : selectQcsegmentList
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#selectQcsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcsegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcsegmentList", param));
    }

    /**
    * @fn          : selectQcsegmentrelList
    * @brief       : (Override method) 중공정 조회
    * @Method Name : selectQcsegmentrelList
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#selectQcsegmentrelList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcsegmentrelList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcsegmentrelList", param));
    }

    /**
    * @fn          : saveDefectcoderel
    * @brief       : (Override method) 불량코드 등록/수정 Call
    * @Method Name : saveDefectcoderel
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#saveDefectcoderel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveDefectcoderel(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertDefectcoderel(param, i+1);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateDefectcoderel(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertDefectcoderel
    * @brief       : (Override method) 불량코드 등록
    * @Method Name : insertDefectcoderel
    * @remark      : 상세설명
    * @see
    */
    private int insertDefectcoderel(Map<String, Object> param, int seq) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String defectcode = (String)param.get("DEFECTCODE");
        String qcsegmentid = (String)param.get("QCSEGMENTID");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectDefectcoderelChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("defectcode = %s", defectcode)+", "
                                                     +String.format("qcsegmentid = %s", qcsegmentid));
        }

        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("DEFECTCODENAME", uid);
        paramMap.put("DISPLAYSEQUENCE", seq);
        
        return generalDao.addUpdate(NAMESPACE + ".insertDefectcoderel", paramMap);
    }

    /**
    * @fn          : updateDefectcoderel
    * @brief       : (Override method) 불량코드 수정
    * @Method Name : updateDefectcoderel
    * @remark      : 상세설명
    * @see
    */
    private int updateDefectcoderel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String defectcode = (String)param.get("DEFECTCODE");
        String qcsegmentid = (String)param.get("QCSEGMENTID");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectDefectcoderelChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("defectcode = %s", defectcode)+", "
                                                    +String.format("qcsegmentid = %s", qcsegmentid));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".updateDefectcoderel", paramMap);
    }

    /**
    * @fn          : saveDefectcode
    * @brief       : (Override method) 불량유형 등록/수정 Call
    * @Method Name : saveDefectcode
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#saveDefectcode(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveDefectcode(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertDefectcode(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateDefectcode(param);
                updateDefectcodeDefectcoderel(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertDefectcode
    * @brief       : (Override method) 불량유형 등록
    * @Method Name : insertDefectcode
    * @remark      : 상세설명
    * @see
    */
    private int insertDefectcode(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String defectcode = (String)param.get("DEFECTCODE");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectDefectcodeChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("defectcode = %s", defectcode));
        }

        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("DICTIONARYID", uid);
        
        return generalDao.addUpdate(NAMESPACE + ".insertDefectcode", paramMap);
    }

    /**
    * @fn          : updateDefectcode
    * @brief       : (Override method) 불량코드 수정
    * @Method Name : updateDefectcode
    * @remark      : 상세설명
    * @see
    */
    private int updateDefectcode(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String defectcode = (String)param.get("DEFECTCODE");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectDefectcodeChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("defectcode = %s", defectcode));
        }

        /*2021-03-11 수정시에는 update로 변경
        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("DICTIONARYID", uid);
        */   
        
        return generalDao.addUpdate(NAMESPACE + ".updateDefectcode", paramMap);
    }

    /**
    * @fn          : updateDefectcodeDefectcoderel
    * @brief       : (Override method) 불량코드 수정
    * @Method Name : updateDefectcodeDefectcoderel
    * @remark      : 불량유형에 매핑된 불량코드 수정
    * @see
    */
    private int updateDefectcodeDefectcoderel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String defectcode = (String)param.get("DEFECTCODE");

        /*불량유형에 매핑된 불량코드 조회*/
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectDefectcoderelList2", param);
        for(int i=0;i<list.size();i++)
        {
            //HashMap Copy
            for (Map.Entry<String, Object> entry : param.entrySet()) {
                paramMap.put(entry.getKey(), entry.getValue());
            }

            String qcsegmentid = list.get(i).get("QCSEGMENTID").toString();;
            paramMap.put("QCSEGMENTID", qcsegmentid);
            
            List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectDefectcoderelChk", paramMap);
            if (idList.size() < 1 )
            {
                throw new BizException("InValidData002", String.format("defectcode = %s", defectcode)+", "
                                                        +String.format("qcsegmentid = %s", qcsegmentid));
            }
        }

        return generalDao.addUpdate(NAMESPACE + ".updateDefectcoderel", paramMap);
    }

    /**
    * @fn          : saveQcsegment
    * @brief       : (Override method) 품질공정 등록/수정 Call
    * @Method Name : saveQcsegment
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#saveQcsegment(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveQcsegment(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            String inspectionclassid = "";
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertQcsegment(param);                
                
                /*OSPInspection*/
                inspectionclassid = "OSPInspection";                
                param.put("INSPECTIONCLASSID", inspectionclassid);
                insertQcsegmentinspect(param);
                
                /*SelfInspectionShip*/
                inspectionclassid = "SelfInspectionShip";                
                param.put("INSPECTIONCLASSID", inspectionclassid);
                insertQcsegmentinspect(param);
                
                /*FinishInspection*/
                inspectionclassid = "FinishInspection";                
                param.put("INSPECTIONCLASSID", inspectionclassid);
                insertQcsegmentinspect(param);
                
                /*ShipmentInspection*/
                inspectionclassid = "ShipmentInspection";                
                param.put("INSPECTIONCLASSID", inspectionclassid);
                insertQcsegmentinspect(param);                

				if ( "Y".equals(param.get("RECEIPTFLAG")))
				{
	                /*SelfInspectionTake*/
					inspectionclassid = "SelfInspectionTake";                
	                param.put("INSPECTIONCLASSID", inspectionclassid);
	                insertQcsegmentinspect(param);	
				}
                
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateQcsegment(param);
                
                /*입고여부*/
				if ( "Y".equals(param.get("RECEIPTFLAG")))
				{
					inspectionclassid = "SelfInspectionTake";                
	                param.put("INSPECTIONCLASSID", inspectionclassid);
	                
	                /*SelfInspectionTake가 존재하지 않을 경우만 생성*/
	                List<Map<String, Object>> chkList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentinspectChk", param);
	                if (chkList.size() < 1){	                
	                    insertQcsegmentinspect(param);
	                }
				}else{
					inspectionclassid = "SelfInspectionTake";                
	                param.put("INSPECTIONCLASSID", inspectionclassid);
	                
	                /*SelfInspectionTake가 존재할 경우만 삭제*/
	                List<Map<String, Object>> chkList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentinspectChk", param);
	                if (chkList.size() > 0){	                
	                	deleteQcsegmentinspect(param);
	                }
				}
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }
    
    /**
    * @fn          : insertQcsegment
    * @brief       : (Override method) 품질공정 등록
    * @Method Name : insertQcsegment
    * @remark      : 상세설명
    * @see
    */
    private int insertQcsegment(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String qcsegmentid = (String)param.get("QCSEGMENTID");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("qcsegmentid = %s", qcsegmentid));
        }

        String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
        paramMap.put("QCSEGMENTNAME", uid);
        
        return generalDao.addUpdate(NAMESPACE + ".insertQcsegment", paramMap);
    }

    /**
    * @fn          : updateQcsegment
    * @brief       : (Override method) 품질공정 수정
    * @Method Name : updateQcsegment
    * @remark      : 상세설명
    * @see
    */
    private int updateQcsegment(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String qcsegmentid = (String)param.get("QCSEGMENTID");
        String qcsegmentname = (String)param.get("QCSEGMENTNAME");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("qcsegmentid = %s", qcsegmentid));
        }

        int lnLength = EgovObjectUtil.isNull(qcsegmentname) ? 0 : qcsegmentname.length();
        
        if (lnLength == 0)
        {
            String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            paramMap.put("QCSEGMENTNAME", uid);
        }
        
        return generalDao.addUpdate(NAMESPACE + ".updateQcsegment", paramMap);
    }

    /**
    * @fn          : insertQcsegmentinspect
    * @brief       : (Override method) 품질공정 등록-품질관리공정 검사 매핑정보 등록
    * @Method Name : insertQcsegmentinspect
    * @remark      : 품질공정 등록시 품질관리공정 검사 매핑정보 등록
    * @see
    */
    private int insertQcsegmentinspect(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String qcsegmentid = (String)param.get("QCSEGMENTID");
        String inspectionclassid = (String)param.get("INSPECTIONCLASSID");            

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentinspectChk", paramMap);
        
        if (idList.size() > 0 )
        {
			throw new BizException("InValidData002", String.format("inspectionclassid = %s", inspectionclassid)+", "
					                                +String.format("qcsegmentid = %s", qcsegmentid) );
		}

        return generalDao.addUpdate(NAMESPACE + ".insertQcsegmentinspect", paramMap);
    }
    
    /**
    * @fn          : deleteQcsegmentinspect
    * @brief       : (Override method) 품질공정 수정-품질관리공정 검사 매핑정보 수정
    * @Method Name : updateQcsegmentinspect
    * @remark      : 품질공정 수정시 입고여부가 'N'으로 수정될 경우 삭제
    * @see
    */
    private int deleteQcsegmentinspect(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String qcsegmentid = (String)param.get("QCSEGMENTID");
        String inspectionclassid = (String)param.get("INSPECTIONCLASSID"); 

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        
        return generalDao.addUpdate(NAMESPACE + ".deleteQcsegmentinspect", paramMap);
    }
    
    /**
    * @fn          : saveQcsegmentrel
    * @brief       : (Override method) 품질공정 등록/수정 Call
    * @Method Name : saveQcsegmentrel
    * @remark      : 상세설명
* @see smh.bas.service.BAS03900Service#saveQcsegmentrel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveQcsegmentrel(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertQcsegmentrel(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateQcsegmentrel(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertQcsegmentrel
    * @brief       : (Override method) 품질공정 등록
    * @Method Name : insertQcsegmentrel
    * @remark      : 상세설명
    * @see
    */
    private int insertQcsegmentrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String qcsegmentid = (String)param.get("QCSEGMENTID");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentrelChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("qcsegmentid = %s", qcsegmentid));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".insertQcsegmentrel", paramMap);
    }

    /**
    * @fn          : updateQcsegmentrel
    * @brief       : (Override method) 품질공정 수정
    * @Method Name : updateQcsegmentrel
    * @remark      : 상세설명
    * @see
    */
    private int updateQcsegmentrel(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        String qcsegmentid = (String)param.get("QCSEGMENTID");
        String qcsegmentname = (String)param.get("QCSEGMENTNAME");

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcsegmentrelChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("qcsegmentid = %s", qcsegmentid));
        }


        int lnLength = EgovObjectUtil.isNull(qcsegmentname) ? 0 : qcsegmentname.length();
        
        if (lnLength == 0)
        {
            String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            paramMap.put("QCSEGMENTNAME", uid);
        }
        
        return generalDao.addUpdate(NAMESPACE + ".updateQcsegmentrel", paramMap);
    }
}