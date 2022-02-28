package com.nbdf.cmd.cm.cmsy.service;
import com.nbdf.cmd.cm.cmfm.service.CMFM01000Service;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import com.nexacro17.xapi.data.DataSet;
/**
* @file: CMSY02400ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service;
* @Project name: IFC MES시스템 재구축
* @Type name: CMSY02400ServiceImpl
* @Company: 대륜E&S
* @Create Date: 2018.01.18 19:33:24
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2018.01.18.  JinSungHa   최초 생성
 **/

@Service
public class CMSY02400ServiceImpl extends AbstractNbdfService implements CMSY02400Service {

    public static final String NAMESPACE= "nbdf.cmd.cm.cmsy.dao.CMSY02400Dao";
    public static final String NAMESPACE1= "nbdf.cmd.cm.cmsy.dao.CMSY02401Dao";
    public static final String NAMESPACE2= "nbdf.cmd.cm.cmsy.dao.CMSY02402Dao";

    @Autowired
    protected GeneralDao generalDao;

    @Autowired
    private CMFM01000Service fmService;

    /**
     * @throws Exception 
     * @fn : saveCmdNotice
     * @brief (Override method) : 공지사항 저장
     * @remark
    * 1. [저장] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02400Service#saveCmdNotice(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void saveCmdNotice(UiMapDto dto) throws Exception { 
    	Map<String, Object> rtnMap = new HashMap<String, Object>();
    	
        int result = 0; 
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT"); 
        for (int i = 0, n = dsMap.size(); i < n; i++) { 
            Map<String, Object> param = dsMap.get(i); 
            int type = getRowType(param); 
            if (type == DataSet.ROW_TYPE_INSERTED) { 
                result += generalDao.addInsert(NAMESPACE+".insertCmdNotice",param); 
            } else if (type == DataSet.ROW_TYPE_UPDATED) { 
                result += generalDao.addUpdate(NAMESPACE+".updateCmdNotice",param); 
            } else if (type == DataSet.ROW_TYPE_DELETED) { 
                result += generalDao.addUpdate(NAMESPACE+".deleteCmdNotice",param); 
            } 
            rtnMap.put("NOTICE_ID", param.get("NOTICE_ID"));
        } 

        Map<String, Object> param = getVariableMap(dto);
        int atchFileCnt = Integer.parseInt((String) (param.get("ATCH_FILE_CNT")) );
        logger.debug("atchFileCnt-->"+atchFileCnt);
        /* [atchFileCnt > 0 ]
         * 첨부파일이 존재하므로 첨부파일 저장 API를 호출 */
    	String atchSrcKey = "";
        if(atchFileCnt > 0) {
        	if(rtnMap.get("NOTICE_ID") != null){
        		atchSrcKey =  (rtnMap.get("NOTICE_ID")).toString();
        	}else{
        		atchSrcKey =  (param.get("NOTICE_ID")).toString();
        	}
            fmService.insertAtchFiles(dto, atchSrcKey,"CMD_NOTICE", "공지사항" , "");
        }
        fmService.updateAtchFiles(dto, atchSrcKey,"CMD_NOTICE", "도움말 정보" , "");
       
        putDataSetMap(dto, rtnMap);
    }

    
    /**
     * @fn : saveCmdNoticeCfm
     * @brief (Override method) : 공지사항 저장
     * @remark
    * 1. [저장] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02400Service#saveCmdNoticeCfm(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void saveCmdNoticeCfm(UiMapDto dto) { 
        int result = 0; 
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT"); 
        for (int i = 0, n = dsMap.size(); i < n; i++) { 
        	Map<String, Object> param = dsMap.get(i); 
        	Map map = generalDao.addSelectOneMap(NAMESPACE1+".selectCmdNoticeCfmList",param);
        	if(map == null)
            result += generalDao.addInsert(NAMESPACE1+".insertCmdNoticeCfm",param); 
        } 
        putDataSetMap(dto, result);
    }


    /**
     * @throws Exception 
     * @fn : selectCmdNoticeList
     * @brief (Override method) : 공지사항 (리스트) 조회
     * @remark
    * 1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02400Service#selectCmdNoticeList(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void selectCmdNoticeList(UiMapDto dto) throws Exception { 
        Map<String, Object> param = getParametersMap(dto); 
        List<Map<String, Object>> list = generalDao.selectList(NAMESPACE+".selectCmdNoticeList",param); 
        putDataSetMap(dto, list); 

        List atchInfoList = fmService.selectAtchFiles(dto, param.get("NOTICE_ID"),"CMD_NOTICE", "");
        putDataSetMap(dto, atchInfoList, "ds_file");
        
    } 

    /**
     * @fn : selectCmdNoticeCfmList
     * @brief (Override method) : 공지사항 확인 (리스트) 조회
     * @remark
    * 1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02400Service#selectCmdNoticeCfmList(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void selectCmdNoticeCfmList(UiMapDto dto) { 
        Map<String, Object> param = getParametersMap(dto); 
        List<Map<String, Object>> list = generalDao.selectList(NAMESPACE1+".selectCmdNoticeCfmList",param); 
        putDataSetMap(dto, list); 
    } 

    /**
     * @fn : selectCmdNoticeJobList
     * @brief (Override method) : 공지사항 업무 (리스트) 조회
     * @remark
    * 1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02400Service#selectCmdNoticeJobList(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void selectCmdNoticeJobList(UiMapDto dto) { 
        Map<String, Object> param = getParametersMap(dto); 
        List<Map<String, Object>> list = generalDao.selectList(NAMESPACE2+".selectCmdNoticeJobList",param); 
        putDataSetMap(dto, list); 
    } 

}