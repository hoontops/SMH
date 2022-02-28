package com.nbdf.cmd.cm.cmsy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSY03100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY03100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 9.    진성하     최초  생성
 *
*/

@Service
public class CMSY03100ServiceImpl extends AbstractNbdfService implements CMSY03100Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY03100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사전리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdDictionaryList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdDictionaryList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdDictionaryList",param);
        putDataSetMap(dto, list);
    }

 
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSY03100Service#saveCmdDictionary(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdDictionary(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            	
            if (type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED) {
            	param.put("DICTIONARYNAME", param.get("NM_K"));
            	param.put("LANGUAGETYPE", "ko-KR");
                result = generalDao.addSelectCount(NAMESPACE+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_E"));
            	param.put("LANGUAGETYPE", "en-US");
                result = generalDao.addSelectCount(NAMESPACE+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_C"));
            	param.put("LANGUAGETYPE", "zh-CN");
                result = generalDao.addSelectCount(NAMESPACE+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE+".updateCmdDictionary",param);
                }
            	param.put("DICTIONARYNAME", param.get("NM_V"));
            	param.put("LANGUAGETYPE", "vi-VN");
                result = generalDao.addSelectCount(NAMESPACE+".selectCmdDictionary",param);
                if(result==0){
                    generalDao.addInsert(NAMESPACE+".insertCmdDictionary",param);
                }else{
                    generalDao.addInsert(NAMESPACE+".updateCmdDictionary",param);
                }

            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteCmdDictionary",param);
            }
        }
   
        putDataSetMap(dto, result);
    }

	public String selectDictionaryName(String dictionaryId) {
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("DICTIONARYID", dictionaryId);
    	param.put("LANGUAGETYPE", SessionUtil.getSessionValue("LANGUAGETYPE"));
    	return generalDao.addSelectOne(NAMESPACE+".selectCmdDictionaryName", param);
    	
    }    
}
