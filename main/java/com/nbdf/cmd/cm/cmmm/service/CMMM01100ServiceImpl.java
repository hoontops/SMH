package com.nbdf.cmd.cm.cmmm.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

/**
* @file: CMMM01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmmm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMMM01100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 13. 오후 3:51:59
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 13.       진성하     최초  생성
 *   2015. 12. 17.     진성하      메시지 캐쉬 처리
 *
*/
@Service
public class CMMM01100ServiceImpl extends AbstractNbdfService implements CMMM01100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmmm.dao.CMMM01100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief 메시지 전체 조회
    * @remark
    * 화면 onLoad시 호출
    * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#selectMsgList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectMsgList(UiMapDto dto)  throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMsgList", param));
    }

    /**
    * @fn
    * @brief 메시지 조건 조회
    * @remark
    * 조건에 따라 메시지 조회
    * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#selectMsgSearch(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectMsgSearch(UiMapDto dto)  throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectMsgSearch", param);
        putDataSetMap(dto, list, "ds_msg");
        list = generalDao.addSelect(NAMESAPCE + ".selectMsgCount", param);
        putDataSetMap(dto, list, "ds_msgCount");
    }

    /**
    * @fn
    * @brief 메시지 저장
    * @remark
    * 메시지 저장기능 수행
    * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#insertMsg(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void insertMsg(UiMapDto dto)  throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".insertMsg", param));
    }

    /**
    * @fn
    * @brief 메시지 수정
    * @remark
    * 메시지 수정 기능 수행
    * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#updateMsg(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateMsg(UiMapDto dto)  throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".updateMsg", param));
    }

    /**
    * @fn
    * @brief 메시지 삭제
    * @remark
    * 메시지 삭제 기능 수행
    * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#deleteMsg(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteMsg(UiMapDto dto)  throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".deleteMsg", param));
    }

    /**
     * @fn
     * @brief 메시지 전체 조회
     * @remark
     * 넥사크로에서 공통으로 사용할 메시지 전체를 조회
     * @see com.nbdf.cmd.cm.cmmm.service.CMMM01100Service#selectCmMsg(com.nbdf.commons.ui.vo.UiMapDto)
     */
     public void selectCmMsg(UiMapDto dto)  throws Exception {
    	 Cache cache = null;
    	 List<Map<String, Object>> resultList = null;
    	 EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
    	 if (manager != null) {
	    	 cache = manager.getCache("CmMsg");
	    	 
	    	 if (cache != null && cache.get("CmMsg") != null) {
	    		 resultList = (List<Map<String, Object>>) cache.get("CmMsg").get();
	    	 } 
    	 }
    	 if (resultList == null) {
    		 resultList = generalDao.addSelect(NAMESAPCE + ".selectCmMsg");
    		 
    		 if (cache != null) {
    			 cache.put("CmMsg", resultList);
    		 }
    	 }
    	 
    	 putDataSetMap(dto, resultList, "gds_message");
      }
     
 }
