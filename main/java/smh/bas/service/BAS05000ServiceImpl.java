package smh.bas.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;



/**
* @file: BAS05000ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05000ServiceImpl
* @Company: Built1
* @Create Date: 2021.04.28
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.28.       김진현     최초  생성
*/
@Service
public class BAS05000ServiceImpl extends AbstractNbdfService implements BAS05000Service {

    public static final String NAMESAPCE 				= "smh.bas.dao.BAS05000Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief 설비 그룹 - 필터조회 - 조회조건(콤보)
     * @remark 
     * @see smh.bas.service.BAS05000Service#selectConditionitem(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConditionitem(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConditionitem" , param), "output1");
        
    }
    
    /**
     * @fn
     * @brief 설비 그룹 - 트리 그리드 조회
     * @remark 
     * @see smh.bas.service.BAS05000Service#selectEqpClassTreeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEqpClassTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEqpClassTreeList", param));
    }
    
    /**
     * @fn
     * @brief 설비 그룹 - 메인 그리드 조회(Tree row 변경시)
     * @remark 
     * @see smh.bas.service.BAS05000Service#selectEqpClassList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEqpClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEqpClassList", param));
    }
    
    /**
     * @fn
     * @brief 설비 그룹 - 메인 그리드 조회(저장)
     * @remark 
     * @see smh.bas.service.BAS05000Service#saveEqpGrp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveEqpGrp(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertEqpGrpClass(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateEqpGrpClass(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteEqpGrpClass(param);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /*
  	 * 설비그룹 등록
  	 */
  	private int insertEqpGrpClass(Map<String, Object> param) throws Exception{
    	
  		String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거) -> 다국어용
    	
    	String eqpClassId 	= (String)param.get("EQUIPMENTCLASSID");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkEqpGrpClassList", param);
		if (idList.size() > 0 )
		{
			throw new BizException("InValidData002|"+String.format("EquipmentClassId = %s"
					,eqpClassId));
		}
		
		param.put("EQUIPMENTCLASSNAME",	 uid);			// 다국어 설정
		
		return generalDao.addUpdate(NAMESAPCE + ".insertEqpGrpClass", param);
		
	}
  	
  	/*
  	 * 설비그룹 수정
  	 */
  	private int updateEqpGrpClass(Map<String, Object> param) throws Exception{
    	
  		String eqpClassId 	= (String)param.get("EQUIPMENTCLASSID");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkEqpGrpClassList", param);
		if (idList.size() < 1 ) 
		{
			throw new BizException("InValidData001|"+String.format("EquipmentClassId = %s", eqpClassId));
		}
		
		return generalDao.addUpdate(NAMESAPCE + ".updateEqpGrpClass", param);		
	}
	/*
  	 * 설비그룹 삭제
  	 */
  	 private int deleteEqpGrpClass(Map<String, Object> param) throws Exception{
     	
  		String eqpClassId 	= (String)param.get("EQUIPMENTCLASSID");
 		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkEqpGrpClassList", param);
 		if (idList.size() < 1 ) 
 		{
 			throw new BizException("InValidData003|"+String.format("EquipmentClassId = %s", eqpClassId)); 			
 		}
 		
 		// 삭제전 체크 (하위 노드 값들이 있는지 판단.)
 		Map<String, Object> dMap = new HashMap<String, Object>();
 		dMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectUsingEquipmentClass", param);
		String parentNm  	= (String)dMap.get("PARENTNM");
		String nm  			= (String)dMap.get("NM");
		
		String parentId  	= (String)dMap.get("PARENTID");
		String id 				= (String)dMap.get("ID");
 		
 		if (idList.size() > 0 && !(StringUtil.isNullOrEmpty(parentId))&& !(StringUtil.isNullOrEmpty(id))	) 
 		{
 			throw new BizException("UsedEquipmentClass|"+ parentNm+"|"+nm ); 			
 		}
 		return generalDao.addUpdate(NAMESAPCE + ".deleteEqpGrpClass", param);
 	}
  	 
  	 
  	
  	 


   
  	
  	

}