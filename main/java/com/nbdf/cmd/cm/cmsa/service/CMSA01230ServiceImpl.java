package com.nbdf.cmd.cm.cmsa.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.cmd.cm.cmfm.web.FileSupport;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: CMSA01230ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsa.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSA01230ServiceImpl    
* @Company: Built1
* @Create Date: 2018 2018. 6. 22. 오후 1:32:55 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 6. 22.        Kang Jeong Gi     최초  생성
 *
*/
@Service
public class CMSA01230ServiceImpl extends AbstractNbdfService implements CMSA01230Service {
    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmsa.dao.CMSA01230Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
    * @fn 
    * @brief (Override method) 파일 업로드/다운로드 - 자료 조회
    * @remark
    * - 1. 파일 업로드/다운로드 - 자료 조회
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA01230Service#selectAtchFileList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectAtchFileList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectAtchFileList", param);

        putDataSetMap(dto, list);
    }    
    
    		
    /**
    * @fn 
    * @brief (Override method) 파일 업로드/다운로드 - 상세/헤더 삭제
    * @remark
    * - 1. 파일 업로드/다운로드 - 상세/헤더 삭제
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA01230Service#deleteFile(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteAtchFile(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".getFileInfo", param);
		try {
			if(list.size() > 0 ){	
				// 서버에 저장된 파일 삭제
				for(int i=0; i<list.size(); i++){					
					FileSupport.ftpDeleteFile2(list.get(i).get("TEMP_FULL_PATH") + "");					
				}
				// 데이터베이스 삭제
				generalDao.addDelete(NAMESAPCE + ".deleteAtchFile", param);				
			}			
		} catch (Exception e) {			
			e.printStackTrace();
		}
	}
    
    /**
    * @fn 
    * @brief (Override method) 첨부파일 정보 저장 - 헤더/상세
    * @remark
    * - 1. 첨부파일 정보 저장 - 헤더/상세
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA01230Service#saveAtchFiles(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveAtchFiles(UiMapDto dto) throws Exception {    	
        DataSetMap dsMap = getParametersDataSetMap(dto, "input");
        int atchFileId = 0;        
        Map<String, Object> Map = null;        
        
        for(int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);    
            
            // 첨부파일 헤더 - 값 존재여부 및 존재할 경우 레코드 자료 조회            
            if(i == 0) {
            	Map = generalDao.addSelectOneMap(NAMESAPCE + ".getFileInfo", param);            	
            
	            if(Map == null ) {
	            	// 첨부파일 헤더 - 신규 저장
	                if(i == 0) generalDao.addUpdate(NAMESAPCE + ".insertAtchFilesHeader", param);            
	                // 첨부파일 헤더 - 신규 저장 후 첨부파일 ID 추출
	                atchFileId = Integer.parseInt(String.valueOf(param.get("ATCH_FILE_ID")));
	            }else{
	            	// 첨부파일 헤더 - 값이 존재할 경우 기존 첨부파일 ID 추출	
	            	atchFileId = Integer.parseInt(String.valueOf(Map.get("ATCH_FILE_ID")));
	            }
            }
            
            // 첨부파일 상세정보 신규 저장
            param.put("ATCH_FILE_ID", atchFileId);	
            int detailCnt = generalDao.addSelectCount(NAMESAPCE + ".selectAtchFilesDetailDup", param);
            if(detailCnt == 0) generalDao.addInsert(NAMESAPCE + ".insertAtchFilesDetail", param);
        }   
        Map<String, Object> result = new HashMap<>();
        result.put("ATCH_FILE_ID", atchFileId);
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn 
    * @brief (Override method) 파일 업로드/다운로드 - 상세정보 ATCH_FILE_GUID sequence 채번
    * @remark
    * - 1. 파일 업로드/다운로드 - 상세정보 ATCH_FILE_GUID sequence 채번
    * @see com.nbdf.cmd.cm.cmsa.service.CMSA01230Service#selectAtchFileGuidID()
    */
    public String selectAtchFileGuidID() throws Exception {
        return generalDao.selectOne(NAMESAPCE + ".selectAtchFileGuidID");
    }
}