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
* @file        : BAS04000ServiceImpl.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04000ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.09
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.09  yanghee.kim    최초  생성
*
*/
@Service
public class BAS04000ServiceImpl extends AbstractNbdfService implements BAS04000Service {

    public static final String NAMESPACE = "smh.bas.dao.BAS04000Dao";
 
    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private BAS04200ServiceImpl  BAS04200ServiceImpl;
    
    /**
    * @fn          : selectEquipmentdefectcodeList
    * @brief       : (Override method) 설비 불량코드 연계정보 조회
    * @Method Name : selectEquipmentdefectcodeList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04000Service#selectEquipmentdefectcodeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectEquipmentdefectcodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectEquipmentdefectcodeList", param));
    }
    
    /**
    * @fn          : selectDefectItemList
    * @brief       : (Override method) 불량항목 리스트 조회
    * @Method Name : selectDefectItemList
    * @remark      : 상세설명
* @see smh.bas.service.BAS04000Service#selectDefectItemList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectItemList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectItemList", param));
    }

    /**
    * @fn          : saveEquipmentdefectcode
    * @brief       : (Override method) 설비 불량코드 연계정보 등록/수정/삭제 Call
    * @Method Name : saveEquipmentdefectcode
    * @remark      : 상세설명
* @see smh.bas.service.BAS04000Service#saveEquipmentdefectcode(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveEquipmentdefectcode(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += insertEquipmentdefectcode(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += updateEquipmentdefectcode(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteEquipmentdefectcode(param);
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertEquipmentdefectcode
    * @brief       : (Override method) 설비 불량코드 연계정보 등록
    * @Method Name : insertEquipmentdefectcode
    * @remark      : 상세설명
    * @see
    */
    private int insertEquipmentdefectcode(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectEquipmentdefectcodeChk", paramMap);
        if (idList.size() > 0 )
        {
            throw new BizException("InValidData002", String.format("DEFECTCODECLASSID = %s", paramMap.get("DEFECTCODECLASSID"))+", "
									                +String.format("DEFECTITEMCODE = %s", paramMap.get("DEFECTITEMCODE"))+", "
									                +String.format("EQUIPMENTID = %s", paramMap.get("EQUIPMENTID"))+", "
									                +String.format("DEFECTCODE = %s", paramMap.get("DEFECTCODE")));
        }

        return generalDao.addUpdate(NAMESPACE + ".insertEquipmentdefectcode", paramMap);
    }

    /**
    * @fn          : updateEquipmentdefectcode
    * @brief       : (Override method) 설비 불량코드 연계정보 수정
    * @Method Name : updateEquipmentdefectcode
    * @remark      : 상세설명
    * @see
    */
    private int updateEquipmentdefectcode(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectEquipmentdefectcodeChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001", String.format("DEFECTCODECLASSID = %s", paramMap.get("DEFECTCODECLASSID"))+", "
									                +String.format("DEFECTITEMCODE = %s", paramMap.get("DEFECTITEMCODE"))+", "
									                +String.format("EQUIPMENTID = %s", paramMap.get("EQUIPMENTID"))+", "
									                +String.format("DEFECTCODE = %s", paramMap.get("DEFECTCODE")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateEquipmentdefectcode", paramMap);
    }

    /**
    * @fn          : deleteEquipmentdefectcode
    * @brief       : (Override method) 설비 불량코드 연계정보 삭제
    * @Method Name : deleteEquipmentdefectcode
    * @remark      : 상세설명
    * @see
    */
    private int deleteEquipmentdefectcode(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectEquipmentdefectcodeChk", paramMap);
        if (idList.size() < 1 ) 
        {
            throw new BizException("InValidData003", String.format("DEFECTCODECLASSID = %s", paramMap.get("DEFECTCODECLASSID"))+", "
            		                                +String.format("DEFECTITEMCODE = %s", paramMap.get("DEFECTITEMCODE"))+", "
            		                               	+String.format("EQUIPMENTID = %s", paramMap.get("EQUIPMENTID"))+", "
            		                                +String.format("DEFECTCODE = %s", paramMap.get("DEFECTCODE")));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".deleteEquipmentdefectcode", paramMap);        
    }
    
    /**
    * @fn          : saveDefectItem
    * @brief       : (Override method) 불량항목 리스트  등록/수정 Call
    * @Method Name : saveDefectItem
    * @remark      : 상세설명
* @see smh.bas.service.BAS04000Service#saveDefectItem(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveDefectItem(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            if ("VRS".equals(param.get("PARENTCODEID")) || "BBT".equals(param.get("PARENTCODEID")))
            {
            	param.put("PARENTCODEID", "");
            }
            
            param.put("MEANING", param.get("DICTIONARYNAME_KR"));
            param.put("DESCRIPTION", param.get("DICTIONARYNAME_KR"));
            
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += BAS04200ServiceImpl.insertLookInspmethod(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += BAS04200ServiceImpl.updateLookInspmethod(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            }
        }

        putDataSetMap(dto, result);
    }
  
}