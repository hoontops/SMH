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
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
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
public class CMSY03200ServiceImpl extends AbstractNbdfService implements CMSY03200Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY03200Dao";
    public static final String NAMESPACE2 = "smh.com.dao.COM00100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사전리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdMessageList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdMessageList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdMessageList",param);

        putDataSetMap(dto, list);
    }

 
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSY03100Service#saveCmdMessage(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdMessage(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                generalDao.addInsert(NAMESPACE+".insertCmdMessage",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addInsert(NAMESPACE+".updateCmdMessage",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteCmdMessage",param);
            }
        }
   
        putDataSetMap(dto, result);
    }

    /**
     * @fn
     * @brief 메시지 전체 조회
     * @remark
     * 넥사크로에서 공통으로 사용할 메시지 전체를 조회
     * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#selectCmMsg(com.nbdf.commons.ui.vo.UiMapDto)
     */
     public void selectCmMsg(UiMapDto dto)  throws Exception {
    	 Map<String, Object> param = getParametersMap(dto);
    	 if(param.get("SESSION_LANGUAGETYPE")==null) param.put("SESSION_LANGUAGETYPE","ko-KR");
	   	 String cacheName = "CmMsg_"+param.get("SESSION_LANGUAGETYPE");
    	 Cache cache = null;
    	 List<Map<String, Object>> resultList = null;
    	 EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
    	 
    	 if (manager != null) {
	    	 cache = manager.getCache(cacheName);
	    	 
	    	 if (cache != null && cache.get(cacheName) != null) {
	    		 resultList = (List<Map<String, Object>>) cache.get(cacheName).get();
	    	 } 
    	 }
    	 //logger.error("getServerMode-->"+BizUtil.getServerMode());
    	 //if("local".equals(BizUtil.getServerMode())) resultList = null;	//local일 경우 메시지 다시조회(개발편의성을 위하여)
    	 int cnt = 0;
    	 if(resultList != null)
    		 cnt = generalDao.addSelectCount(NAMESPACE + ".selectCmdMessageCnt",param);
    	 
	   	 if (resultList == null || (resultList != null && cnt != resultList.size())) {
    		 resultList = generalDao.addSelect(NAMESPACE + ".selectCmdMessage",param);
    		 
    		 if (cache != null) {
    			 cache.put(cacheName, resultList);
    		 }
    	 }
    	 
	   	
	   	 cacheName = "HistoryAopInfo";
   		 param.put("LOOKUP_TYPE","COM_HISTORY_SAVE");
   		 Map<String, Object> map = new HashMap();
   		 String services = "";
   		 String daos = "";
   		 List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2 + ".selectLookupCodeHistory",param);
		 for(int j=0; j<list.size(); j++) {
			 services = services + (j==0?"":",") + list.get(j).get("DESCRIPTION");
			 daos = daos + (j==0?"":",") + list.get(j).get("MEANING");
//			 logger.error(services);
		 }
		 map.put("SERVICES",services);
		 map.put("DAOS",daos);
		 cache = manager.getCache(cacheName);
		 cache.put(cacheName, map);

	   	 putDataSetMap(dto, resultList, "gds_message");
    	 
      }    
}
