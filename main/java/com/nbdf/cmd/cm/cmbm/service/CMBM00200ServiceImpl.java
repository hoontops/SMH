package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
/**
* @file: CMBM00200ServiceImpl.java
* @Package: com.drens.dr.CMBM.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM00200ServiceImpl    
* @Company: Built1
* @Create Date: 2018 2018. 1. 24. 오후 3:46:36 
* @Author: Built1
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 1. 24.        Built1     최초  생성
 *
*/
@Service
public class CMBM00200ServiceImpl extends AbstractNbdfService implements CMBM00200Service { 

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmbm.dao.CMBM00200Dao";

   @Autowired
    private GeneralDao generalDao;

 
	/**
	* @fn 
	* @brief 공통코드 조회
	* @remark
	* - 1. 공통코드 조회
	* @see com.drens.dr.CMBM.service.CMBM00200Service#selectCmdLookupTypeValuesList(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	public void selectCmdLookupTypeValuesList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdLookupTypeValuesList", param);
        putDataSetMap(dto, list);
	}	
}
