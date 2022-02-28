package com.nbdf.cmd.cm.cmbm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: CMBM02200ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmbm.service  
* @Project name: IFC MES 시스템 구축
* @Type name: CMBM02200ServiceImpl    
* @Company: Built1
* @Create Date: 2018 2018. 10. 26. 오후 2:15:31 
* @Author: Jin Sung Ha
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 10. 26.        Jin Sung Ha     최초  생성
 *
*/
@Service
public class CMBM02200ServiceImpl extends AbstractNbdfService implements CMBM02200Service { 

	public static final String NAMESPACE = "com.nbdf.cmd.cm.cmbm.dao.CMBM02200Dao";

    private javax.sql.DataSource cp;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 
    * @brief (Override method) 배치관리 권한등록 - 배치프로그램 - 조회
    * @remark
    * - 1. 배치관리 권한등록 - 배치프로그램 - 조회
    * @see com.drens.dr.CMBM.service.CMBM02200Service#selectCMBMBatchCtrlAuth(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmbmBatchCtrlAuth(UiMapDto dto) throws Exception {
   	Map<String, Object> param = getParametersMap(dto);    	
   	List<Map<String, Object>> list = null;
       list = generalDao.addSelect(NAMESPACE + ".selectCmbmBatchCtrlAuth", param);	 	
	 	putDataSetMap(dto, list);
    }
   
    /**
    * @fn 
    * @brief (Override method) 배치관리 권한등록 - 배치프로그램 - 저장
    * @remark
    * - 1. 배치관리 권한등록 - 배치프로그램 - 저장
    * @see com.drens.dr.cmbm.service.CMBM02200Service#saveCmdDynamicSqlAuth(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmbmBatchCtrlAuth(UiMapDto dto) throws Exception {
		DataSetMap dsMap = getParametersDataSetMap(dto, "input");
		int result = 0;

		for (int i = 0, n = dsMap.size(); i < n; i++) {
			Map<String, Object> param = dsMap.get(i);			
			result += generalDao.addInsert(NAMESPACE+".saveCmbmBatchCtrlAuth", param);
		}
		putDataSetMap(dto, result);  
	}
   
    /**
    * @fn 
    * @brief (Override method) 배치 프로그램 목록 조회
    * @remark
    * - 1. 배치 프로그램 목록 조회
    * @see com.drens.dr.cmbm.service.CMBM02200Service#selectCmbmBatchCtrls(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmbmBatchCtrls(UiMapDto dto) throws Exception {
   	Map<String, Object> param = getParametersMap(dto);    	
   	List<Map<String, Object>> list = null;
       list = generalDao.addSelect(NAMESPACE + ".selectCmbmBatchCtrls", param);	 	
	 	putDataSetMap(dto, list);
	}


}
