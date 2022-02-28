package com.nbdf.cmd.cm.cmsl.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: CMSL02200ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsl.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSL02200ServiceImpl    
* @Company: Built1
* @Create Date: 2018 2018. 10. 25. 오전 10:29:09 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 10. 25.        Kang Jeong Gi     최초  생성
 *
*/
@Service
public class CMSL02200ServiceImpl extends AbstractNbdfService implements CMSL02200Service {
    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsl.dao.CMSL02200Dao";

    @Autowired
    private GeneralDao generalDao;
   
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 권한등록 - 프로그램 - 조회
    * @remark
    * - 1. 다양한 쿼리 권한등록 - 프로그램 - 조회
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02200Service#selectCmdDynamicSqlAuth(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdDynamicSqlAuth(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);    	
    	List<Map<String, Object>> list = null;
        list = generalDao.addSelect(NAMESPACE + ".selectCmdDynamicSqlAuth", param);	 	
	 	putDataSetMap(dto, list);
    }
        
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 권한등록 - 프로그램 - 저장
    * @remark
    * - 1. 다양한 쿼리 권한등록 - 프로그램 - 저장
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02200Service#saveCmdDynamicSqlAuth(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdDynamicSqlAuth(UiMapDto dto) throws Exception {
		DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
		int result = 0;

		for (int i = 0, n = dsMap.size(); i < n; i++) {
			Map<String, Object> param = dsMap.get(i);			
			result += generalDao.addInsert(NAMESPACE+".saveCmdDynamicSqlAuth", param);
		}
		putDataSetMap(dto, result);  
	}
    
    /**
    * @fn 
    * @brief (Override method) 다양한 쿼리 데이터 조회
    * @remark
    * - 1. 다양한 쿼리 데이터 조회
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL02200Service#selectCmdDyamicSqlHeader(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdDyamicSqlHeader(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);    	
    	List<Map<String, Object>> list = null;
        list = generalDao.addSelect(NAMESPACE + ".selectCmdDyamicSqlHeader", param);	 	
	 	putDataSetMap(dto, list);
	}
}
