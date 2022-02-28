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
* @file: CMSY02600ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service;
* @Project name: IFC MES시스템 재구축
* @Type name: CMSY02600ServiceImpl
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
public class CMSY02600ServiceImpl extends AbstractNbdfService implements CMSY02600Service {

    public static final String NAMESPACE= "nbdf.cmd.cm.cmsy.dao.CMSY02600Dao";
    public static final String NAMESPACE1= "nbdf.cmd.cm.cmsy.dao.CMSY02401Dao";
    public static final String NAMESPACE2= "nbdf.cmd.cm.cmsy.dao.CMSY02402Dao";

    @Autowired
    protected GeneralDao generalDao;

    @Autowired
    private CMFM01000Service fmService;

    /**
     * @throws Exception 
     * @fn : saveCmdBoard
     * @brief (Override method) : 게시판 저장
     * @remark
    * 1. [저장] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02600Service#saveCmdBoard(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void saveCmdBoard(UiMapDto dto) throws Exception { 
    	Map<String, Object> rtnMap = new HashMap<String, Object>();
    	
        int result = 0; 
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT"); 
        for (int i = 0, n = dsMap.size(); i < n; i++) { 
            Map<String, Object> param = dsMap.get(i); 
            int type = getRowType(param); 
            if (type == DataSet.ROW_TYPE_INSERTED) { 
                result += generalDao.addInsert(NAMESPACE+".insertCmdBoard",param); 
            } else if (type == DataSet.ROW_TYPE_UPDATED) { 
                result += generalDao.addUpdate(NAMESPACE+".updateCmdBoard",param); 
            } else if (type == DataSet.ROW_TYPE_DELETED) { 
                result += generalDao.addUpdate(NAMESPACE+".deleteCmdBoard",param); 
            } 
            rtnMap.put("BOARD_ID", param.get("BOARD_ID"));
        } 
        dsMap = getParametersDataSetMap(dto, "INPUT2"); 
        for (int i = 0, n = dsMap.size(); i < n; i++) { 
            Map<String, Object> param = dsMap.get(i); 
            String chk = (String) param.get("CHK");
            if ("1".equals(chk)) {
            	if(param.get("BOARD_ID")==null)	param.put("BOARD_ID", rtnMap.get("BOARD_ID"));
                result += generalDao.addInsert(NAMESPACE2+".insertCmdBoardJob",param); 
            } else {
            	if(param.get("BOARD_ID") != null)
            		result += generalDao.addUpdate(NAMESPACE2+".deleteCmdBoardJob",param); 
            }
            
        } 
        
        Map<String, Object> param = getVariableMap(dto);
        int atchFileCnt = Integer.parseInt((String) (param.get("ATCH_FILE_CNT")) );
        logger.debug("atchFileCnt-->"+atchFileCnt);
        /* [atchFileCnt > 0 ]
         * 첨부파일이 존재하므로 첨부파일 저장 API를 호출 */
        if(atchFileCnt > 0) {
        	String atchSrcKey = "";
        	if(rtnMap.get("BOARD_ID") != null){
        		atchSrcKey =  (rtnMap.get("BOARD_ID")).toString();
        	}else{
        		atchSrcKey =  (param.get("BOARD_ID")).toString();
        	}
            fmService.insertAtchFiles(dto, atchSrcKey,"CMD_BOARD", "게시판" , "");
        }
       
        putDataSetMap(dto, rtnMap);
    }

    
    /**
     * @fn : saveCmdBoardCfm
     * @brief (Override method) : 게시판 저장
     * @remark
    * 1. [저장] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02600Service#saveCmdBoardCfm(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void saveCmdBoardCfm(UiMapDto dto) { 
        int result = 0; 
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT"); 
        for (int i = 0, n = dsMap.size(); i < n; i++) { 
        	Map<String, Object> param = dsMap.get(i); 
        	Map map = generalDao.addSelectOneMap(NAMESPACE1+".selectCmdBoardCfmList",param);
        	if(map == null)
            result += generalDao.addInsert(NAMESPACE1+".insertCmdBoardCfm",param); 
        } 
        putDataSetMap(dto, result);
    }


    /**
     * @throws Exception 
     * @fn : selectCmdBoardList
     * @brief (Override method) : 게시판 (리스트) 조회
     * @remark
    * 1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02600Service#selectCmdBoardList(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void selectCmdBoardList(UiMapDto dto) throws Exception { 
        Map<String, Object> param = getParametersMap(dto); 
        List<Map<String, Object>> list = generalDao.selectList(NAMESPACE+".selectCmdBoardList",param); 
        putDataSetMap(dto, list); 

        List atchInfoList = fmService.selectAtchFiles(dto, param.get("BOARD_ID"),"CMD_BOARD", "");
        putDataSetMap(dto, atchInfoList, "ds_file");
        
    } 

    /**
     * @fn : selectCmdBoardCfmList
     * @brief (Override method) : 게시판 확인 (리스트) 조회
     * @remark
    * 1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02600Service#selectCmdBoardCfmList(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void selectCmdBoardCfmList(UiMapDto dto) { 
        Map<String, Object> param = getParametersMap(dto); 
        List<Map<String, Object>> list = generalDao.selectList(NAMESPACE1+".selectCmdBoardCfmList",param); 
        putDataSetMap(dto, list); 
    } 

    /**
     * @fn : selectCmdBoardJobList
     * @brief (Override method) : 게시판 업무 (리스트) 조회
     * @remark
    * 1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.cmd.cm.cmsy.service.CMSY02600Service#selectCmdBoardJobList(com.nbdf.commons.ui.vo.UiMapDto)
    **/
    public void selectCmdBoardJobList(UiMapDto dto) { 
        Map<String, Object> param = getParametersMap(dto); 
        List<Map<String, Object>> list = generalDao.selectList(NAMESPACE2+".selectCmdBoardJobList",param); 
        putDataSetMap(dto, list); 
    } 

}