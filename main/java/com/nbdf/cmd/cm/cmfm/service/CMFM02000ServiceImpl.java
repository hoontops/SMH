package com.nbdf.cmd.cm.cmfm.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.cmd.cm.cmfm.web.FileSupport;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

    /**
    * @file: CMFM02000ServiceImpl.java
    * @Package: com.nbdf.cmd.cm.cmfm.service
    * @Project name: IFC MES시스템 구축
    * @Type name: CMFM02000ServiceImpl
    * @Company: Built1
    * @Create Date: 2015 2015. 3. 24. 오전 10:00:40
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 24.   진성하     최초  생성
     *   2015. 8. 11.   진성하     Source Refactory
     *
    */
    @Service
    public class CMFM02000ServiceImpl extends AbstractNbdfService implements CMFM02000Service {

        private static final String NAMESAPCE = "com.nbdf.cmd.cm.cmfm.dao.CMFM02000Dao";
        private static final String END_OF_DATE = "99991230";

        @Autowired
        private GeneralDao generalDao;


        /**
        * @fn
        * @brief (Override method) 첨부파일 등록
        * @remark
        * - 첨부파일 정보 저장
        * 1. 업무시스템 구분(STM OR FCM) - DB구분
        * 2. UI에서 넘겨준 DATA_SET(ds_file)과 파라미터를  subGridCode()로 전달
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#insertAtchFiles(com.nbdf.commons.ui.vo.UiMapDto, java.lang.Object, java.lang.String, java.lang.String)
        */
        @Override
        public boolean insertAtchFiles(UiMapDto dto,Object obj, String tableName, String desc, String jobSysCd) throws Exception {
            return subGridCode(dto, getParametersDataSetMap(dto, "ds_file" ), obj, tableName, desc, jobSysCd);
        }

        /**
        * @fn : subGridCode
        * @brief : 첨부파일 정보를 저장(INSERT)
        * @Method Name : subGridCode
        * @Create Date: 2015 2015. 4. 21. 오전 10:37:40
        * @Author: JIn Sung Ha
        * @param: UiMapDto dto, DataSetMap dsMap, Object obj, String tableName, String desc, String jobSyscd
        * @return: boolean
        * @throws : Exception
        */
        private boolean subGridCode(UiMapDto dto, DataSetMap dsMap, Object obj, String tableName, String desc, String jobSysCd) throws Exception {
            int result = 0;
            String keepEndDate;
            Map<String, Object> param;

            for (int i = 0, n = dsMap.size(); i < n; i++) {
                param = setWhoColumn(dsMap.get(i));
                keepEndDate = (String) param.get("KEEP_END_DATEC");

                param.put("KEEP_END_DATEC", keepEndDate != null ? keepEndDate : END_OF_DATE);

                param  = setAtchFile(param, tableName,  obj, desc);

                result = generalDao.addUpdate(NAMESAPCE + ".insertAtchFiles", param);
                result += generalDao.addUpdate(NAMESAPCE + ".insertAtchFilesMapngs", param);
            }

            if (result < 2) {
                throw new BizException("첨부파일 등록 시 오류 발생");
            }

            putDataSetMap(dto, result);

            return true;
        }

        /**
        * @fn
        * @brief (Override method) 첨부파일 정보 조회
        * @remark
        * - 첨부파일 정보 조회 후 List 형태로 전달
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#selectAtchFiles(com.nbdf.commons.ui.vo.UiMapDto, java.lang.Object, java.lang.String)
        */
        public List<Map<String, Object>> selectAtchFiles(UiMapDto dto, Object obj, String tableName, String jobSysCd) throws Exception {
            Map<String, Object> param = getParametersMap(dto);
            param  = setAtchFile(param, tableName,  obj, "");

                return generalDao.addSelect(NAMESAPCE + ".selectAtchFiles", param);
        }

        /**
        * @fn
        * @brief (Override method) 다운로드 파일 정보 조회
        * @remark
        * - 다운로드를 요청한 정보 조회(PK)
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#selectAtchFileDn(java.lang.String)
        */
        public List<Map<String, Object>> selectAtchFileDn(int atchFileId, String jobSysCd) throws Exception {
                return generalDao.addSelect(NAMESAPCE + ".selectAtchFileDn", atchFileId);
        }

        /**
        * @fn
        * @brief (Override method) 함수 간략한 설명
        * @remark
        * - 다운로드를 요청한 정보 조회(GUID)
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#selectAtchFileDn(java.lang.String, java.lang.String)
        */
        public List<Map<String, Object>> selectAtchFileDn(String atchFileGuid, String jobSysCd) throws Exception {
            return generalDao.addSelect(NAMESAPCE + ".selectAtchFileGuidDn", atchFileGuid);
        }


        /**
        * @fn
        * @brief (Override method) 다운로드 횟수 증가
        * @remark
        * - 다운로드 횟수 증가(PK)
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#updateAtchFileDnCnt(int)
        */
        public int updateAtchFileDnCnt(int atchFileId, String jobSysCd) throws Exception {
            Map<String, Object> map = new ConcurrentHashMap<String, Object>();
            map.put("ATCH_FILE_ID", atchFileId);
            map = setWhoColumn(map);

                return  generalDao.addUpdate(NAMESAPCE + ".updatetAtchFilesDnldCnt", map);
        }

        /**
        * @fn
        * @brief (Override method) 함수 간략한 설명
        * @remark
        * - 다운로드 횟수 증가(GUID)
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#updateAtchFileDnCnt(java.lang.String, java.lang.String)
        */
        public int updateAtchFileDnCnt(String atchFileGuid, String jobSysCd) throws Exception {
            Map<String, Object> map = new ConcurrentHashMap<String, Object>();
            map.put("ATCH_FILE_GUID", atchFileGuid);
            map = setWhoColumn(map);
            String keepEndDate = (String) map.get("KEEP_END_DATEC");
            map.put("KEEP_END_DATEC", keepEndDate != null ? keepEndDate : END_OF_DATE);
            return  generalDao.addUpdate(NAMESAPCE + ".updatetAtchFilesGuidDnldCnt", map);
        }

        /**
        * @fn
        * @brief (Override method) 파일 삭제
        * @remark
        * - 오버라이드 함수의 상세 설명
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#deleteFile(com.nbdf.commons.ui.vo.UiMapDto, java.lang.String)
        */
        public boolean deleteFile(UiMapDto dto, String jobSysCd) throws Exception {
            int result = 0;
            Map<String, Object> param = setWhoColumn(getParametersMap(dto));


            result = generalDao.addUpdate(NAMESAPCE + ".deleteAtchFiles", param);
            //result += generalDao.addUpdate(NAMESAPCE + ".deleteAtchFilesMpngs", param);

            return result >= 2;
        }

        /**
        * @fn
        * @brief (Override method) 파일 삭제(DataSet)
        * @remark
        * - DataSet받아서 처리
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#deleteFile(com.nbdf.commons.ui.vo.UiMapDto, java.lang.String)
        */
        public boolean deleteFile(UiMapDto dto, String jobSysCd, String dataset) throws Exception {
            int result = 0;
            DataSetMap dsMap = getParametersDataSetMap(dto, dataset);


            for (int i = 0, n = dsMap.size(); i < n; i++) {
                Map<String, Object> dsParam = setWhoColumn(dsMap.get(i));

                result = generalDao.addUpdate(NAMESAPCE + ".deleteAtchFiles", dsParam);
                result += generalDao.addUpdate(NAMESAPCE + ".deleteAtchFilesMpngs", dsParam);

                if (result < 2) {
                    return false;
                }
            }

            return true;
        }
        /**
         * @fn
         * @brief (Override method) 키,테이블명에 대한 모든파일 삭제
         * @remark
         * - 오버라이드 함수의 상세 설명
         * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#deleteFile(com.nbdf.commons.ui.vo.UiMapDto, java.lang.String)
         */
        public boolean deleteFile2(UiMapDto dto) throws Exception {
        	int result = 0;
        	Map<String, Object> param = setWhoColumn(getParametersMap(dto));
        	Map<String, Object> param2 = new HashMap<String, Object>();
        	// 테이블명, 키에 대한 정보 조회
        	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectAtchFilesKeyAll", param);
        	for(int i=0;i<list.size();i++){
        		param2 = list.get(i);
        		// 파일경로
        		String fullSaveCours = param2.get("FULL_SAVE_COURS")+"";
        		// 파일삭제
        		FileSupport.removeFile(fullSaveCours);
        		// 파일데이터 삭제
        		result = generalDao.addUpdate(NAMESAPCE + ".deleteAtchFilesKeyAll", param2);
        	}
        	
        	//result += generalDao.addUpdate(NAMESAPCE + ".deleteAtchFilesMpngsKeyAll", param);
        	
        	return result >= 2;
        }

        /**
        * @fn
        * @brief (Override method) 첨부파일 수정
        * @remark
        * - 첨부파일은 삭제 혹은 신규만 존재함(파일 자체를 변경할 수가 없음)
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#updateAtchFiles(com.nbdf.commons.ui.vo.UiMapDto, java.lang.Object, java.lang.String, java.lang.String, java.lang.String)
        */
        public boolean updateAtchFiles(UiMapDto dto,Object obj, String tableName, String desc, String jobSysCd) throws Exception {
        	int result = 0;
        	int atchFileId = 0;
            List<Map<String, Object>> list;
            Map<String, Object> param;
            String keepEndDate;
            DataSetMap dsMap = getParametersDataSetMap(dto, "ds_file" );
            for (int i = 0; i < dsMap.size(); i++) {
                param = setWhoColumn(dsMap.get(i));
                param  = setAtchFile(param, tableName,  obj, desc);
                keepEndDate = (String) param.get("KEEP_END_DATEC");

                param.put("KEEP_END_DATEC", keepEndDate != null ? keepEndDate : END_OF_DATE);

                int type = getRowType(param);


                if (type == 0) {
                    Map map = generalDao.addSelectOneMap(NAMESAPCE + ".selectAtchFilesMpngsAtchFileId", param);
                    
                    if (map == null ) {
                        if(i == 0)	result += generalDao.addUpdate(NAMESAPCE + ".insertAtchFilesMapngs", param);
                        atchFileId = Integer.parseInt(String.valueOf(param.get("ATCH_FILE_ID")));
                    }else{
                    	atchFileId = Integer.parseInt(String.valueOf(map.get("ATCH_FILE_ID")));
                    }
                    param.put("ATCH_FILE_ID", atchFileId);	
                    result = generalDao.addUpdate(NAMESAPCE + ".insertAtchFiles", param);
                } else if (type == 3) {
                    result = generalDao.addUpdate(NAMESAPCE + ".deleteAtchFiles", param); //내부 로직 처리시는 맞지만 일괄 처리후에는 result가 맞지 않음
                    result += generalDao.addUpdate(NAMESAPCE + ".deleteAtchFilesMpngs", param);
                }
            }
            return result >= 2; // ??? 루프 로직 처리시 비교할지 아니면 처리후 일괄 비교후 리턴할지 결정
        }

        private Map<String, Object> setAtchFile(Map<String, Object> param, String tableName, Object atchFilePk, String desc){
            param.put("RM", desc);
            param.put("ATCH_SRC_KEY", atchFilePk);
            param.put("ATCH_TY_CD", tableName);

            return param;
        }

        /**
        * @fn
        * @brief (Override method) 첨부파일 정보 조회
        * @remark
        * - 첨부파일 정보 조회 후 List 형태로 전달
        * @see com.nbdf.cmd.cm.cmfm.service.CMFM02000Service#selectAtchFiles(com.nbdf.commons.ui.vo.UiMapDto, java.lang.Object, java.lang.String)
        */
        public String selectAtchFileGuid() throws Exception {
            return generalDao.selectOne(NAMESAPCE + ".selectAtchFileGuid");
        }
        
}