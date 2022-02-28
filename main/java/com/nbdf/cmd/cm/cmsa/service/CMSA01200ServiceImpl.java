package com.nbdf.cmd.cm.cmsa.service;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.cmd.cm.cmfm.service.CMFM01000Service;
import com.nbdf.cmd.cm.cmfm.web.FileSupport;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;

/**
* @file: CMSA01100ServiceImpl.java
* @Package: com.nbdf.ecm.cm.cmsa.service;
* @Project name: IFC MES시스템 구축
* @Type name: CMSA01100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 10.  진성하   최초 생성
 **/

@Service
public class CMSA01200ServiceImpl extends AbstractNbdfService implements CMSA01200Service {
    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmfm.dao.CMFM01000Dao";

    @Autowired
    private CMFM01000Service service;

    /**
    * @throws Exception
     * @fn
    * @brief (Override method)  첨부파일 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01200Service#selectGrpCd(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectAtchFileList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String jobSysCd = (String) param.get("JOB_SYS_CD");
        String tableName = (String) param.get("TABLE_NAME");

        List<Map<String, Object>> list = service.selectAtchFiles(dto, param.get("ATCH_SRC_KEY"), tableName, jobSysCd);

        putDataSetMap(dto, list);
    }

    /**
    * @throws Exception
     * @fn
    * @brief (Override method)  첨부파일 등록
    * @remark
    *  1. [업로드] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01200Service#selectGrpCd(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateAtchFiles(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        // 스캔의 경우 해당 파일이 존재하는지 확인
        String scanFlg = "N";
        if(param.containsKey("SCAN_FLG")){
        	scanFlg = param.get("SCAN_FLG")+"";
        }
        if("Y".equals(scanFlg)){
        	// 첨부파일 존재여부 확인
            if(!FileSupport.getFtpFileExis( param.get("FULL_SAVE_COURS")+"")){
            	throw new BizException("FTP 경로에 해당 파일이 없습니다. (경로 : " + param.get("FULL_SAVE_COURS")+"" + " )");
            }
        }
        
        
        String jobSysCd = "";
        if(param.get("JOB_SYS_CD") != null)	jobSysCd = (String) param.get("JOB_SYS_CD");
        String tableName = (String) param.get("TABLE_NAME");
        String desc = (String) param.get("DESC");

        int result = 0;
        boolean bResult = service.updateAtchFiles(dto, param.get("ATCH_SRC_KEY"), tableName, desc , jobSysCd);
        if(bResult==true){
            result = 0;
        }else{
            result = -1;
        }
        putDataSetMap(dto, result);
    }


    /**
    * @throws Exception
     * @fn
    * @brief (Override method)  첨부파일 삭제
    * @remark
    *  1. [삭제] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01200Service#deleteFile(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteFile(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String jobSysCd = "CMM";
        if(param.get("JOB_SYS_CD") != null && !"".equals(param.get("JOB_SYS_CD")))	jobSysCd = (String) param.get("JOB_SYS_CD");

        int result = 0;
        boolean bResult = service.deleteFile(dto, jobSysCd);
        if(bResult==true){
            result = 0;
        }else{
            result = -1;
        }
        putDataSetMap(dto, result);
    }

    /**
     * @fn : deleteFile
     * @brief : 키,테이블명에 대한 모든파일 삭제
     * @Method Name : deleteFile
     * @remark
     * @Create Date: 2015 2015. 3. 30. 오전 10:04:25
     * @Author: 진성하
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 30.        진성하     최초  생성
     *
     */
    public void deleteFile2(UiMapDto dto)  throws Exception {
    	service.deleteFile2(dto);
    }
}