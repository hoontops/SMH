package com.nbdf.cmd.cm.cmhm.service;

import com.nbdf.cmd.cm.cmfm.service.CMFM01000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.sql.Clob;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: CMHM01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmhm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMHM01100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 19. 오후 10:01:16
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 19.        진성하     최초  생성
 *
*/
@Service
public class CMHM01100ServiceImpl extends AbstractNbdfService implements CMHM01100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmhm.dao.CMHM01100Dao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private CMFM01000Service fmService;

    /**
    * @fn
    * @brief (Override method) 도움말 조회
    * @remark
    * - 도움말 조회
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#selectHlp(com.nbdf.commons.ui.vo.UiMapDto)
    */

    @Override
    public void selectHlpList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectHlpList", param);
        putDataSetMap(dto, list, "ds_hlps");

        list = generalDao.addSelect(NAMESAPCE + ".selectHlpCount", param);
        putDataSetMap(dto, list, "ds_hlpCount");
    }

    /**
    * @fn
    * @brief (Override method) 도움말 상세 조회
    * @remark
    * - 도움말 첨부파일 등록 우뮤 확인 및 상세 조회
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#selectHlp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectHlp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getVariableMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectHlp", param);
        Map<String, Object> map = null;

        /* 도움말 상세 검색시 도움말이 등록되어 있는 경우만 로직 수행 */
        if(list.size() > 0) {
            for(int i=0; i<list.size(); i++) {
                map = list.get(i);
                Clob hlpCnClob  =  (Clob) map.get("HLP_CN");

                String hlpCn = ObjectUtil.ClobConvertForString(hlpCnClob);
                map.put("HLP_CN" ,hlpCn);
           }
           list.add(map);

            putDataSetMap(dto, list);

            /* 초기 등록 (도움말 팝업 화면)에서 등록시 HPL_ID가 없으므로 분기 로직 추가 */
            //if( param.get("HLP_ID") != null  &&  param.get("HLP_ID") != "") {
            if( param.get("HLP_ID") != null  &&  !param.get("HLP_ID").equals("")) {
                Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectHlpAtchFileYn", param);
                boolean attchYn = attachSelect(dto, result);
                logger.debug("(2-1)첨부파일 존재 우뮤  :" + attchYn);
            /* 업무영역에서 도움말 버튼을 클릭하여 바로 도움말 팝업을 호출한 경우 */
            }else if( param.get("HLP_COURS_ID") != null  &&  !param.get("HLP_COURS_ID").equals("")) {
                Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectHlpAtchFileYnPop", param);
                boolean attchYn = attachSelect(dto, result);
                logger.debug("(2-2)첨부파일 존재 우뮤  :" + attchYn);
            }
        }
    }

    /**
    * @fn : attachSelect
    * @brief : 첨부파일이 등록되어 있는지 조회
    * @Method Name : attachSelect
    * @Create Date: 2015. 6. 1. 오전 9:30:43
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Map<String, Object> result
    * @return: boolean
    * @throws : Exception
    */
    public boolean attachSelect(UiMapDto dto, Map<String, Object> result) throws Exception{

        if(result != null) {
            String atchFileCnt = result.get( "ATCH_FILE_CNT").toString();
            List<Map<String, Object>> atchInfoList;

            if( Integer.parseInt( atchFileCnt ) > 0){
                Object hlpId =  result.get("HLP_ID");
                atchInfoList = fmService.selectAtchFiles(dto, hlpId,"CMD_HLPS", "");
                putDataSetMap(dto, atchInfoList, "ds_file");

                return true;
            }
        }
        return false;
    }

    /**
    * @fn
    * @brief (Override method) 도움말 등록
    * @remark
    * - 도움말 등록
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#insertHlp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void insertHlp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getVariableMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";

        // 20145.12.12 by 진성하 : 넘어올때 '문자가 사라지는 문제 때문에 nexa에서 별도로 변환한 특수문자를 저장 전에 다시 replace한다.
        String hlp_sj = (String)param.get("HLP_SJ");
        String hlp_cn = (String)param.get("HLP_CN");

        hlp_sj = StringUtil.cleanXSS(hlp_sj);
        hlp_cn = StringUtil.cleanXSS(hlp_cn);

        logger.debug(" BEFORE: HLP_SJ : " +  hlp_sj);
        hlp_sj = hlp_sj.replaceAll("@!@", "'");
        logger.debug(" AFTER :  HLP_SJ : " +  hlp_sj);

        // 다시 바꿔줌 2015.12.29 by 진성하 :  ("hlpimg" --> "hlpImg")
        hlp_cn = hlp_cn.replaceAll("hlpimg", "hlpImg");

        hlp_cn = hlp_cn.replaceAll("@!@", "'");
        param.put("HLP_SJ", (String)hlp_sj);
        param.put("HLP_CN", (String)hlp_cn);


        int result = generalDao.addInsert(NAMESAPCE + ".insertHlp", param);
        String cmdHlpsCoursMpngs;

        if( result > 0){
            cmdHlpsCoursMpngs =  (String) param.get("CMD_HLPS_COURS_MPNGS");
            /* 조건 : [cmdHlpsCoursMpngs == Y]
             * 도움말 트리 팝업에서 메뉴를 선택한 경우 'CMD_HLPS_COURS_MPNGS' 테이블에 저장 */
            if(cmdHlpsCoursMpngs.equals("Y")) {
                result += generalDao.addInsert(NAMESAPCE + ".insertHlpMpngs", param);
            }

            int atchFileCnt = Integer.parseInt((String) (param.get("ATCH_FILE_CNT")) );
            logger.debug("atchFileCnt-->"+atchFileCnt);
            /* [atchFileCnt > 0 ]
             * 첨부파일이 존재하므로 첨부파일 저장 API를 호출 */
            if(atchFileCnt > 0) {
                Object hlpId;
                hlpId =  param.get("HLP_ID");
                fmService.insertAtchFiles(dto, hlpId,"CMD_HLPS", "도움말 정보" , "");
            }
        }
        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method) 도움말 내용 수정
    * @remark
    * 도움말 내용 수정 로직
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#updateHlp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateHlp(UiMapDto dto) throws Exception {
        Map<String, Object> map = getVariableMap(dto);
        //DataSetMap dsMap = getParametersDataSetMap(dto, "ds_hlps" );
        //DataSetMap dsMap2 = getParametersDataSetMap(dto, "ds_file" );
        /*
        if(dsMap == null) {
            logger.debug("***  dsMap is NULL");
            putDataSetMap(dto, -1);
            return;
        } else {
            logger.debug("*** dsMap.size() = " + dsMap.size() + ", dsMap2.size() = " +  dsMap2.size());
        }
        Map<String, Object> map = dsMap.get(0);
        logger.debug(" ds_hlps(HLP_SJ)  : " +  (String)map.get("HLP_SJ"));
        logger.debug(" ds_hlps(JOB_SYS_CD)  : " +  (String)map.get("JOB_SYS_CD"));
        if( (String)map.get("JOB_SYS_CD") == null) {
            map.put("JOB_SYS_CD", (String)args.get("JOB_SYS_CD"));
            logger.debug(" ds_hlps(JOB_SYS_CD is NULL )  =>  " +  (String)map.get("JOB_SYS_CD"));
        }
        */
        map.putAll(map);
        Object hlpId = map.get("HLP_ID");
        String cmdHlpsCoursMpngs = "N";

        String fromJobSysCd = (String)map.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";
        // 20145.12.12 by 진성하 : 넘어올대 '문자가 사라지는 문제 때문에 nexa에서 별도로 변환한 특수문자를 저장 전에 다시 replace한다.
        String hlp_sj = (String)map.get("HLP_SJ");
        String hlp_cn = (String)map.get("HLP_CN");
        logger.debug(" BEFORE: HLP_SJ : " +  hlp_sj);
        hlp_sj = hlp_sj.replaceAll("@!@", "'");
        logger.debug(" AFTER :  HLP_SJ : " +  hlp_sj);

        hlp_cn = hlp_cn.replaceAll("@!@", "'");
        map.put("HLP_SJ", (String)hlp_sj);
        map.put("HLP_CN", (String)hlp_cn);

        int result = generalDao.addUpdate(NAMESAPCE + ".updateHlp", map);
        if( result > 0){
            /* 조건 : [cmdHlpsCoursMpngs == Y]
             * 도움말 트리 팝업에서 메뉴를 선택한 경우 'CMD_HLPS_COURS_MPNGS' 테이블에 저장 */
            cmdHlpsCoursMpngs =  (String) map.get("CMD_HLPS_COURS_MPNGS");
            if(cmdHlpsCoursMpngs.equals("Y")) {
                result += generalDao.addInsert(NAMESAPCE + ".insertHlpMpngs", map);
            }
        }
        fmService.updateAtchFiles(dto, hlpId,"CMD_HLPS", "도움말 정보" , "");
        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method) 도움말 삭제
    * @remark
    * 도움말 삭제 로직
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#deleteHlp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void deleteHlp(UiMapDto dto){
        Map<String, Object> param = getParametersMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";

        putDataSetMap(dto, generalDao.addUpdate(NAMESAPCE + ".deleteHlp", param));
    }

    /**
    * @fn
    * @brief (Override method) 도움말 트리 검색
    * @remark
    * 1. 도움말 팝업(CMHM01500P) : 도움말 트리 검색 로직
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#selectTreeHlps(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectHlpTree(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectHlpTree", param));
    }

    /**
    * @fn
    * @brief (Override method) 도움말 트리 추가(경로)
    * @remark
    * - 도움말 트리에서 경로를 추가한 경우 로직
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#insertHlpTree(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void insertHlpTree(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";

        putDataSetMap(dto, generalDao.addInsert(NAMESAPCE + ".insertHlpTree", param));
    }

    /**
    * @fn
    * @brief (Override method) 도움말 트리 경로 수정
    * @remark
    * - 도움말 트리에서 경로를 수정한 경우 로직
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#updateHlpTree(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void updateHlpTree(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";

        putDataSetMap(dto, generalDao.addInsert(NAMESAPCE + ".updateHlpTree", param));

    }

    /**
    * @fn
    * @brief (Override method) 도움말 트리 메뉴 삭제
    * @remark
    * -  도움말 트리 메뉴 삭제
    * @see com.nbdf.cmd.cm.cmhm.service.CMHM01100Service#deleteHlpTree(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void deleteHlpTree(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        String fromJobSysCd = (String)param.get("FROM_JOB_SYS_CD"); //  어디 업무에서 조회했는가?CMD, KMC,ABM,MIS
        if(fromJobSysCd == null || fromJobSysCd.equals("")) fromJobSysCd = "CMD";

        putDataSetMap(dto, generalDao.addDelete(NAMESAPCE + ".deleteHlpTree", param));

    }
}
