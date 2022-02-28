package com.nbdf.cmd.cm.cmsm.service;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.ContextSqlSentence;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.sql.Clob;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: CMSM01000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSM01000ServiceImpl
* @Company: Built1
* @Create Date: 2015. 4. 27. 오전 10:43:47
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 27.        JIn Sung Ha     최초  생성
 *
*/
@Service
public class CMSM01000ServiceImpl extends AbstractNbdfService implements CMSM01000Service {
    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmsm.dao.CMSM01000Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method) 개인정보 조회 로그 등록
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmsm.service.CMSM01000Service#insertIvlInfoList(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public int insertIvlInfoList(String jobSysCd, String pngNm, String sqlNm, String sqlSntenc,
            String qryCnd, String qryRsltCnt, String saveFileNm,
            String fileSize, String rm) throws Exception {

        return generalDao.insert(NAMESAPCE + ".insertIvlInfo", createCusMap(jobSysCd, pngNm, sqlNm, sqlSntenc, qryCnd, qryRsltCnt, saveFileNm, fileSize, rm));
     }

    /**
    * @fn
    * @brief (Override method) 개인정보 조회 로그 등록
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmsm.service.CMSM01000Service#insertIvlInfoList(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
    */
    @Override
    public int insertIvlInfoList(String jobSysCd, String pngNm, String sqlNm, String sqlSntenc,
            String qryCnd, String qryRsltCnt) throws Exception {

        return generalDao.insert(NAMESAPCE + ".insertIvlInfo", createCusMap(jobSysCd, pngNm, sqlNm, sqlSntenc, qryCnd, qryRsltCnt, "", "", ""));
    }


    /**
    * @fn : createCusMap
    * @brief : DB에 저장을 하기위해 파라미터로 넘어온 정보를 MAP으로 전환
    * 		   개인 정보 이력 조회를 위한 기능 추가
    *        ThreadSafe 처리를 위해 세션 정보에 설정 유무를 지정한후 처리 	
    * 
    * @Method Name : createCusMap
    * @Create Date: 2015. 4. 21. 오후 2:10:20
    * @Author: JIn Sung Ha
    * @param: String sqlNm, String sqlSntenc,
                     String qryCnd, String qryRsltCnt, String saveFileNm,
                     String fileSize, String rm
    * @return: Map
    * @throws : Exception
    */
    public  Map<String, Object> createCusMap(String jobSysCd, String pngNm, String sqlNm, String sqlSntenc,
            String qryCnd, String qryRsltCnt, String saveFileNm,
            String fileSize, String rm){
        ConcurrentHashMap<String, Object> param = new ConcurrentHashMap<String, Object>();
        sqlSntenc = ContextSqlSentence.getSqlSentence(); 
        SessionUtil.removeSelectPersonalInfo();
        
        param.put( "JOB_SYS_CD", jobSysCd);
        param.put( "PGM_NM", pngNm);  // 프로그램명
        param.put( "SQL_NM", sqlNm); // SQL 명
        param.put( "SQL_SNTENC", sqlSntenc); // SQL문장
        param.put( "QRY_CND", qryCnd);  // 조회 조건

        if(qryRsltCnt == null || qryRsltCnt.trim().equals("")) {
            param.put( "QRY_RSLT_CNT", 0); // 조회결과 건수
        }else {
            param.put( "QRY_RSLT_CNT", qryRsltCnt); // 조회결과 건수
        }

       if( SessionManager.getInstance().getSessionInfo("gv_ipAddr") != null){
            param.put( "LGN_IP", (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_IP_ADDR)); // 접속 IP
        }else{
            param.put( "LGN_IP", ""); // 접속 IP
        }

        if(SessionManager.getInstance().getSessionInfo("REQ_FULL_URL") != null){
            param.put( "REQ_FULL_URL",  (String)SessionManager.getInstance().getSessionInfo("REQ_FULL_URL")); // 요청전체URL
        }else{
            param.put( "REQ_FULL_URL", ""); // 요청전체URL
        }

        param.put( "SAVE_FILE_NM", saveFileNm); // 저장 파일명


        if(fileSize == null || fileSize.trim().equals("")) {
            param.put( "FILE_SIZE", ""); // 파일 사이즈
        }else {
            param.put( "FILE_SIZE", fileSize); // 파일 사이즈
        }

        param.put( "RM", rm); // 비고

        if(SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ID) != null){
            param.put( "USER_ID", (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ID)); // 포털 사용자 ID
        }else{
            param.put( "USER_ID", ""); // 포털 사용자 ID
        }

        if(SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_LGN_ID) != null){
            param.put( "LGN_LOG_ID", (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_LGN_ID)); // 로그인 로그 ID
        }else{
            param.put( "LGN_LOG_ID", ""); // 로그인 로그 ID
        }

        String url = (String)SessionManager.getInstance().getSessionInfo("REQ_URI");
        if( url != null){
            param.put( "REQ_URI", url);
        }else{
            param.put( "REQ_URI",  "");
        }

        param = (ConcurrentHashMap<String, Object>) setWhoColumn(param);
        return param;
    }

    /**
    * @fn
    * @brief (Override method) 등록된 개인정보 저장 로그를 조회(화면) / 저장된 카운트(페이징)
    * @remark
    * - 등록된 개인정보 저장 로그를 조회(화면) / 저장된 카운트 조회 한다. (페이징 처리를 위해)
    * @see com.nbdf.cmd.cm.cmsm.service.CMSM01000Service#selectIvlList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectIvlList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(true, NAMESAPCE + ".selectIvlList", param);
        Map<String, Object> map = null;
        putDataSetMap(dto, list, "ds_ivl");
        list = generalDao.addSelect(true, NAMESAPCE + ".selectIvlCount", param);
        putDataSetMap(dto, list, "ds_ivlCount");
    }

	@Override
	public void selectIvlList4Excel(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
        BigDataUtil.selectBigCellDown(dto, generalDao, NAMESAPCE + ".selectIvlList", param, param.get("P_COUNT"), param.get("P_END"));
  	}
}