package com.nbdf.cmd.cm.cmsl.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.DbUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.sql.Clob;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: CMSL01000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsl.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSL01000ServiceImpl
* @Company: Built1
* @Create Date: 2015. 5. 02
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일            수정자     수정내용
 *   ------------  ------    ----------
 *   2015. 5. 02.    진성하     최초  생성
 *   2016-08-29     심병석    전략DB커넥션 변경 ( jeus는 커넥션방법이 다름
*/
@Service
public class CMSL01000ServiceImpl extends AbstractNbdfService implements CMSL01000Service {
    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmsl.dao.CMSL01000Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 다양한SQL 목록 - 검색 카운트
     * @param dto UiMapDto
     * @remark
     * 1. 초기 또는 [조회] 버튼 클릭시 호출
     * @see
     */
     public void selectSqlListCount(UiMapDto dto)  throws Exception {
         Map<String, Object> param = getParametersMap(dto);

         List<Map<String, Object>> cntList = generalDao.addSelect(NAMESAPCE + ".selectSqlListCount", param);
         logger.debug("*** 전체 카운트 : selectSqlListCount = " + cntList.get(0).get("CNT"));
         putDataSetMap(dto, cntList);
     }

    /**
     * @fn
     * @brief (Override method)  다양한SQL 목록 - 검색 리스트
     * @remark
     *  1. 초기 또는 [조회] 버튼 클릭시 호출
     * @see
     */
    public void selectSqlList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        /*
        if(param != null) {
            logger.debug("*** param=" + param.toString());
        }
        */
        int pStart = 1;
        int pEnd = 500;
        if(param.get("P_START") != null && (param.get("P_START").equals("") || param.get("P_START").equals("NaN"))) {
            param.put("P_START", pStart); // 시작페이지
        }
        if(param.get("P_END") != null && (param.get("P_END").equals("") || param.get("P_END").equals("NaN"))) {
            param.put("P_END", pEnd);     // 페이지당 목록 수
        }

        List<String> list = new ArrayList<String>();
        if(param != null) {
            String job_auth_chk = (String)param.get("JOB_AUTH_CHK");
            String use_job_arr = (String)param.get("USE_JOB_ARR");
            logger.debug("*** param JOB_AUTH_CHK = " + job_auth_chk  + ", USE_JOB_ARR = " + use_job_arr);
            if(job_auth_chk != null && job_auth_chk.equals("Y")) {
                String arr[] = use_job_arr.split(",");
                for(int i=0;i < arr.length;i++) {
                    list.add((String)arr[i]);
                }
                // 전체공통(CMM)은 무조건 추가(모든 권한 가능하게..)
                list.add("CMM");
                param.put("JOB_LIST", list); // list KEY
                logger.debug("*** list.toString() = " + list.toString());
            }
        }
        List<Map<String, Object>> sqlList = generalDao.addSelect(NAMESAPCE + ".selectSqlList", param);
        Map<String, Object> map = null;
        if(sqlList.size() > 0) {
            for(int i=0; i < sqlList.size(); i++) {
                map = sqlList.get(i);
                Clob selectCnClob  =  (Clob) map.get("SELECT_SNTENC");
                Clob fromCnClob  =  (Clob) map.get("FROM_SNTENC");

                String selectCn = ObjectUtil.ClobConvertForString(selectCnClob);
                map.put("SELECT_SNTENC", selectCn);
                String fromCn = ObjectUtil.ClobConvertForString(fromCnClob);
                map.put("FROM_SNTENC", fromCn);
            }
        }
        putDataSetMap(dto, sqlList);
        //putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSqlList", param));
    }

    /**
     * @fn
     * @brief (Override method)  다양한SQL상세 - 파라미터 조회 리스트
     * @remark
     *  1. 다양한SQL상세 클릭시 호출
     * @see
     */
    public void selectSqlParamList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        /*
        if(param != null) {
            logger.debug("*** param=" + param.toString());
        }
        */
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSqlParamList", param));
    }

    /**
     * @fn
     * @brief (Override method)  다양한SQL상세 - SQL권한 조회 리스트
     * @remark
     *  1. 다양한SQL상세 클릭시 호출
     * @see
     */
    public void selectSqlAuthList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        /*
        if(param != null) {
            logger.debug("*** param=" + param.toString());
        }
        */
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSqlAuthList", param));
    }

    /**
     * @fn
     * @brief (Override method)  SQL컬럼설정 조회 리스트
     * @remark
     *  1. 다양한SQL(상세 클릭,수정화면,컬럼 설정 팝업)에서 호출
     * @see
     */
    public void selectSqlColmList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSqlClumMngsList", param));
    }

    /**
     * @fn
     * @brief (Override method) Dynamic SQL 조회 리스트(페이징 처리용)
     * @remark
     *  1. 다양한SQL파라미터 팝업, 다양한조회 업무공통, 등록, 수정 화면에서 호출
     * @see
     */
    public void selectDynamicSqlList(UiMapDto dto) throws Exception {
        String sqls = "";
        String jndi_name = "jdbc/dsifc"; // default JNDI
        String param_jndi_name = "";


//        javax.naming.Context ctx;
//        ctx = new InitialContext();
//        cp = (javax.sql.DataSource) ctx.lookup("jdbc/dsfcm");
//        int sql_id = 0;
        int p_start = 1;
        int p_end = 500;
        String nCommaYn = "Y";       // 1000단위 콤마(,) 여부
        String floatRoundNum = "0";  // Y일때 소수점 절사(반올림) 범위(소수점 몇번째 1~5)

        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input" );

        logger.debug("*** dsMap.size() = " + dsMap.size());
        //String from = "";
        //String where = "";
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> dsParam = dsMap.get(i);
            sqls = (String)dsParam.get("SQL");        // 전체 SELECT sql문장
            //from = (String)dsParam.get("FROM");     // FROM절 문장만(for COUNT)
            //where = (String)dsParam.get("WHERE"); // WHERE절 문장만(for COUNT)
//            sql_id =  (int)dsParam.get("SQL_ID");
            p_start =  (int)dsParam.get("P_START");
            p_end =  (int)dsParam.get("P_END");
            param_jndi_name = (String)dsParam.get("JNDI_NAME");
            nCommaYn  = (String)dsParam.get("NUM_COMMA_YN");
            floatRoundNum = (String)dsParam.get("FLOAT_ROUND_NUM");
        }
        logger.error("----->selectDynamicSqlList sqls: " +sqls);
        logger.debug("*** NUM_COMMA_YN= [" + nCommaYn + "]");
        if(nCommaYn == null || nCommaYn.equals("")) nCommaYn = "N";
        if(floatRoundNum == null || floatRoundNum.equals("")) floatRoundNum = "0";
        /*
        logger.debug("*** SQL = " + sqls);
        logger.debug("*** SQL_ID = " + sql_id);
        logger.debug("*** P_START = " + p_start + ", P_END = " + p_end);
        logger.debug("*** JNDI_NAME = " + param_jndi_name);
        */
        if(param_jndi_name != null) jndi_name = param_jndi_name;

        logger.debug("*** jndi_name= "+jndi_name);
        if(p_start == 0) p_start = 1;
        if(p_end == 0) p_end = 500;

        String espTime = ""; // SQL 수행시간
        Timestamp timep = DateUtil.stamp(); // 현재 시간
        // 페이징 처리를 위해서 카운트 SQL을 먼저 날려서 전체  rows를 얻어온다.
        //String cntSqls = "SELECT COUNT(*)  as CNT \n" + from + "\n" + where;
        String cntSqls = "SELECT COUNT(*)  as CNT FROM ( \n" + sqls + "\n" +  "\n )";
        //logger.debug("*** SELECT = " + sqls);
        //logger.debug("*** FROM = " + from);
        //logger.debug("*** WHERE = " + where);
        //logger.debug("*** ORDER = " + order);
        //logger.debug("*** cntSqls = " + cntSqls);
        List sqlResulList = new ArrayList();
        //List cntList = DbUtil.selectSQL(cntSqls, jndi_name, "Y", "N", "0"); // count SQL실행결과 정보
        List cntList = DbUtil.selectSQL(cntSqls, jndi_name, "Y", "N", "0"); // count SQL실행결과 정보

        logger.debug("*** cntList.toString() = " + cntList.toString());
        // 먼저 카운트 SQL에서 오류가 발생했는지 체크한다.
        int cnt = 0;
        if(cntList != null) {
            Map<String, Object>  cntPrm = (Map<String, Object> ) cntList.get(0);
            String errCase1 = (String)cntPrm.get("SQL 오류 메시지");
            String errCase2 = (String)cntPrm.get("DB연결 오류 메시지");
            if(errCase1 != null && errCase1.length() > 10) {
                logger.debug("*** errCase1 = [" + errCase1 + "]");
                Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
                param.put("CNT", "0");
                param.put("MSEC", "0");
                sqlResulList.add(param);
                putDataSetMap(dto, sqlResulList, "ds_sqlResult");   // 결과 카운트, 수행시간 정보
                putDataSetMap(dto, cntList, "ds_output");            // Grid 리스트
                logger.debug(" --- Force RETURN  errCase1 ");
                return;
            }
            if(errCase2 != null && errCase2.length() > 10) {
                logger.debug("*** errCase2 = [" + errCase2 + "]");
                Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
                param.put("CNT", "0");
                param.put("MSEC", "0");
                sqlResulList.add(param);
                putDataSetMap(dto, sqlResulList, "ds_sqlResult");  // 결과 카운트, 수행시간 정보
                putDataSetMap(dto, cntList, "ds_output");           // Grid 리스트
                logger.debug(" --- Force RETURN  errCase2 ");
                return;
            }
            Map<String, Object>  cntParam = (Map<String, Object> ) cntList.get(0);
            //int cnt = Integer.parseInt((String)cntParam.get("CNT"));
            cnt = (int)cntParam.get("CNT");
            logger.debug(" --- CNT = " + cnt);
        }
        int totCnt = 0;
        //String sqlName = "";
        if(cnt <= 500) {
            logger.debug("*** Change Init!: cnt = " + cnt + ", p_start = " + p_start + ", p_end = " + p_end);
            p_start = 1;
            p_end = 500;
        }
        String chgSqls = "SELECT * FROM ( \n  SELECT ROWNUM AS 순서, T.* FROM ( \n" + sqls + "\n) T WHERE ROWNUM <= " + p_end + "\n ) WHERE 순서 >= " + p_start ;
        logger.debug("*** chg SQLs = \n" + chgSqls);
        //logger.debug("*** NUM_COMMA_YN = " + nCommaYn + ", FLOAT_ROUND_NUM = " + floatRoundNum);
        sqlResulList =  DbUtil.selectSQL(chgSqls, jndi_name, "N", nCommaYn, floatRoundNum); // 원래 select SQL실행
        Timestamp timepEnd = DateUtil.stamp(); // 현재 시간
        espTime = Long.toString(timepEnd.getTime() - timep.getTime());
        if(cntList != null) {
            Map<String, Object>  cntParam = (Map<String, Object> ) cntList.get(0);
            //totCnt = Integer.parseInt((String)cntParam.get("CNT"));
            totCnt = (int)cntParam.get("CNT");
            cntParam.put("MSEC", espTime);
            logger.debug("*** CNT = " + totCnt + ", espTime = " + espTime + " mSec");
            if(totCnt == 0) {
                logger.debug("SELECT SQL문장의 결과는 0");
            } else {
                Map<String, Object>  retParam = (Map<String, Object> ) sqlResulList.get(0);
                String errCase1 = (String)retParam.get("SQL 오류 메시지");
                String errCase2 = (String)retParam.get("DB연결 오류 메시지");
                if(errCase1 != null && errCase1.length() > 10) {
                    logger.debug("# errCase1 = [" + errCase1 + "]");
                    cntList.clear();
                    Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
                    param.put("CNT", "0");
                    param.put("MSEC", "0");
                    cntList.add(param);
                    //putDataSetMap(dto, cntList, "ds_sqlResult");
                    //putDataSetMap(dto, sqlResulList, "ds_output");
                    logger.debug(" --- SQL  errCase1 ");
                    //return;
                } else if(errCase2 != null && errCase2.length() > 10) {
                    logger.debug("# errCase2 = [" + errCase2 + "]");
                    cntList.clear();
                    Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
                    param.put("CNT", "0");
                    param.put("MSEC", "0");
                    //putDataSetMap(dto, cntList, "ds_sqlResult");
                    //putDataSetMap(dto, sqlResulList, "ds_output");
                    logger.debug(" --- SQL  errCase2 ");
                    //return;
                } else {
                    logger.debug("SELECT SQL문장이 정상적으로 수행됨. ");
                }
            }
        }
        logger.debug("Dynamic SQL END!. ");
        putDataSetMap(dto, cntList, "ds_sqlResult");       // 결과 카운트, 수행시간 정보
        putDataSetMap(dto, sqlResulList, "ds_output");    // Grid 리스트
    }

    /**
     * @fn
     * @brief (Override method) Dynamic SQL 조회 리스트(페이징처리X)
     * @remark
     *  1. 다양한SQL파라미터 팝업, 다양한조회, 등록, 수정 화면에서 호출
     * @see
     */
    public void selectDynamicSqlListNoPage(UiMapDto dto) throws Exception {
        String sqls = "";
        String jndi_name = "jdbc/dsifc"; // default JNDI
        String param_jndi_name = "";
        String nCommaYn = "Y";       // 1000단위 콤마(,) 여부
        String floatRoundNum = "0";  // Y일때 소수점 절사(반올림) 범위(소수점 몇번째 1~5)

        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input" );
        /*
        if(dsMap == null ) {
            logger.debug("***  dsMap is NULL! ");
            return;
        }
        if(dsMap.size() == 0) {
            logger.debug("***  dsMap.size() is 0 ");
            return;
        }
        */
        logger.debug("*** dsMap.size() = " + dsMap.size());
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> dsParam = dsMap.get(i);
            sqls = (String)dsParam.get("SQL");        // 전체 SELECT sql문장
            param_jndi_name = (String)dsParam.get("JNDI_NAME");
            nCommaYn  = (String)dsParam.get("NUM_COMMA_YN");
            floatRoundNum = (String)dsParam.get("FLOAT_ROUND_NUM");
        }
        if(param_jndi_name != null) jndi_name = param_jndi_name;
        if(nCommaYn == null || nCommaYn.equals("")) nCommaYn = "N";
        if(floatRoundNum == null || floatRoundNum.equals("")) floatRoundNum = "0";
        logger.error("----->selectDynamicSqlListNoPage sqls: " +sqls);
        logger.debug("*** NUM_COMMA_YN = " + nCommaYn + ", FLOAT_ROUND_NUM = " + floatRoundNum);

        String espTime = ""; // SQL 수행시간
        Timestamp timep = DateUtil.stamp(); // 현재 시간

        List sqlResulList = new ArrayList();
        List cntList = new ArrayList();
        int totCnt = 0;
        //String chgSqls = "SELECT * FROM ( \n  SELECT ROWNUM AS 순서, T.* FROM ( \n" + sqls + "\n) T WHERE ROWNUM <= " + p_end + "\n ) WHERE 순서 >= " + p_start ;
        //logger.debug("*** chg SQLs = \n" + chgSqls);
        sqlResulList =  DbUtil.selectSQL(sqls, jndi_name, "N", nCommaYn, floatRoundNum); // 원래 select SQL실행
        Timestamp timepEnd = DateUtil.stamp(); // 현재 시간
        espTime = Long.toString(timepEnd.getTime() - timep.getTime());

        Map<String, Object>  retParam = (Map<String, Object> ) sqlResulList.get(0);
        String errCase1 = (String)retParam.get("SQL 오류 메시지");
        String errCase2 = (String)retParam.get("DB연결 오류 메시지");
        if(errCase1 != null && errCase1.length() > 10) {
            logger.debug("# errCase1 = [" + errCase1 + "]");
            cntList.clear();
            Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
            param.put("CNT", "0");
            param.put("MSEC", "0");
            cntList.add(param);
            logger.debug(" --- SQL  errCase1 ");
        } else if(errCase2 != null && errCase2.length() > 10) {
            logger.debug("# errCase2 = [" + errCase2 + "]");
            cntList.clear();
            Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
            param.put("CNT", "0");
            param.put("MSEC", "0");
            logger.debug(" --- SQL  errCase2 ");
        } else {
            logger.debug("SELECT SQL문장이 정상적으로 수행됨. ");
            Map<String, Object>  param =  new ConcurrentHashMap<String, Object>();
            totCnt = sqlResulList.size();
            param.put("CNT", totCnt);
            param.put("MSEC", espTime);
            logger.debug("*** 전체 카운트 = " + totCnt + ", 소요시간 = " + espTime + " mSec");
            cntList.add(param);
        }
        logger.debug("Dynamic SQL END!(Excel) ");
        putDataSetMap(dto, cntList, "ds_sqlResult");       // 결과 카운트, 수행시간 정보
        putDataSetMap(dto, sqlResulList, "ds_output");    // Grid 리스트
    }

    /**
     * @fn
     * @brief (Override method) Dynamic SQL 등록(SQL+파라미터+권한)
     * @remark
     *  1. Dynamic SQL 등록 화면에서 호출
     * @see
     */
    public void insertSqlParam(UiMapDto dto) throws Exception {
        int result = 0;
        String select = "";
        String from = "";
        String where = "";
        String order = "";

        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input" );    // SQL input dataSet
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "ds_input2" ); // SQL 파라미터 input dataSet
        DataSetMap dsMap3 = getParametersDataSetMap(dto, "ds_input3" ); // SQL 권한 input dataSet
        DataSetMap dsMap4 = getParametersDataSetMap(dto, "ds_input4" ); // SQL 컬럼설정 input dataSet
        Map<String, Object> args = dto.getInVariableMap();
        /*
        if(args != null) {
            logger.debug("***  args.toString() = " + args.toString());
        }
        if(dsMap == null ) {
            logger.debug("***  dsMap is NULL! ");
            return;
        }
        if(dsMap.size() == 0) {
            logger.debug("***  dsMap.size() is 0 ");
            return;
        }
        */
        logger.debug("*** (SQL)dsMap.size() = " + dsMap.size() + ", (AUTH)dsMap4.size() = " +  dsMap4.size());

        Map<String, Object> dsParam = dsMap.get(0);
        select = (String)dsParam.get("SELECT");
        from = (String)dsParam.get("FROM");
        where = (String)dsParam.get("WHERE");
        order = (String)dsParam.get("ORDER");

        logger.debug("SELECT => " +  select);
        logger.debug("FROM    => " +  from);
        logger.debug("WHERE  => " +  where);
        logger.debug("ORDER  => " +  order);
        dsParam.putAll(args);
        result = generalDao.addUpdate(NAMESAPCE + ".insertSqls", dsParam);
        int sql_id =  (int)dsParam.get("SQL_ID"); // 등록된 신규 PK값 구해오기
        logger.debug("insertSqlParam result : " +  result + ", SQL_ID(PK) = " + sql_id);
        if(sql_id <= 0) {
            logger.error("Invalid insertSqlParam(SQL_ID) PK!");
            return;
        }
        // SQL파라미터 등록
        if(dsMap2 != null ) {
            int paramResult = 0;
            for (int i = 0, n = dsMap2.size(); i < n; i++) {
                Map<String, Object> dsParam2 = dsMap2.get(i);
                //dsParam2 = setWhoColumn(dsParam2); // whoColumn 추가
                /*
                String paramNm = (String)dsParam2.get("PARAMTR");
                int seqNo = (int)dsParam2.get("SEQ_NO");
                logger.debug("*** SEQ_NO= " + seqNo + ", PARAMTR = " + paramNm);
                */
                dsParam2.put("SQL_ID", sql_id); // PK값 셋팅
                dsParam2.putAll(args);
                //logger.debug("*** dsParam2.toString= " + dsParam2.toString());
                paramResult += generalDao.addUpdate(NAMESAPCE + ".insertSqlParamtrs", dsParam2);
            }
            logger.debug("insertSqlParam result : " +  paramResult);
        } else {
            logger.debug("***  dsMap2 is NULL! (파라미터 없음)");
        }
        // SQL권한 등록
        if(dsMap3 != null ) {
            int authResult = 0;
            for (int i = 0, n = dsMap3.size(); i < n; i++) {
                Map<String, Object> dsParam3 = dsMap3.get(i);
                dsParam3.put("SQL_ID", sql_id); // PK값 셋팅
                dsParam3.putAll(args);
                authResult += generalDao.addUpdate(NAMESAPCE + ".insertSqlAuths", dsParam3);
            }
            logger.debug("insertSqlAuths result : " +  authResult);
        }

       // SQL컬럼설정 등록
        if(dsMap4 != null ) {
            int authResult = 0;
            for (int i = 0, n = dsMap4.size(); i < n; i++) {
                Map<String, Object> dsParam4 = dsMap4.get(i);
                dsParam4.put("SQL_ID", sql_id); // PK값 셋팅
                dsParam4.putAll(args);
                authResult += generalDao.addUpdate(NAMESAPCE + ".insertSqlClumMngs", dsParam4);
            }
            logger.debug("insertSqlClumMngs result : " +  authResult);
        }

        putDataSetMap(dto, result);
    }

    /**
     * @fn
     * @brief (Override method) Dynamic SQL 등록(SQL+파라미터+권한)
     * @remark
     *  1. Dynamic SQL 수정 화면에서 호출
     * @see
     */
    public void updateSqlParam(UiMapDto dto) throws Exception {
        int result = 0;
        int sql_id = 0;
        String select = "";
        String from = "";
        String where = "";
        String order = "";

        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input" );    // SQL input dataSet
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "ds_input2" ); // SQL 파라미터 input dataSet
        DataSetMap dsMap3 = getParametersDataSetMap(dto, "ds_input3" ); // SQL 권한 input dataSet
        DataSetMap dsMap4 = getParametersDataSetMap(dto, "ds_input4" ); // SQL 컬럼설정 input dataSet
        Map<String, Object> args = dto.getInVariableMap();
        /*
        if(args != null) {
            logger.debug("***  args.toString() = " + args.toString());
        }
        if(dsMap == null ) {
            logger.debug("***  dsMap is NULL! ");
            return;
        }
        if(dsMap.size() == 0) {
            logger.debug("***  dsMap.size() is 0 ");
            return;
        }
        */
        logger.debug("*** (SQL)dsMap.size() = " + dsMap.size() + ", (AUTH)dsMap3.size() = " + dsMap3.size());

        Map<String, Object> dsParam = dsMap.get(0);
        //sql_id = Integer.parseInt((String)dsParam.get("SQL_ID"));
        sql_id = (Integer)dsParam.get("SQL_ID");
        select = (String)dsParam.get("SELECT");
        from = (String)dsParam.get("FROM");
        where = (String)dsParam.get("WHERE");
        order = (String)dsParam.get("ORDER");

        logger.debug("SQL_ID => " +  sql_id);
        logger.debug("SELECT => " +  select);
        logger.debug("FROM    => " +  from);
        logger.debug("WHERE  => " +  where);
        logger.debug("ORDER  => " +  order);
        //dsParam = setWhoColumn(dsParam); // whoColumn 추가
        dsParam.putAll(args);
        result = generalDao.addUpdate(NAMESAPCE + ".updateSqls", dsParam);
        logger.debug("updateSqls result : " +  result);

        // SQL파라미터 등록/수정
        int paramResult = 0;
        if(dsMap2 != null ) {
            // SQL파라미터는 모두 지우고 갯수만큼 새로 등록한다.
            logger.debug("*** (PARAM)dsMap2.size() = " + dsMap2.size());
            Map<String, Object> param =  new ConcurrentHashMap<String, Object>();
            param.put("SQL_ID", sql_id);
            int prmResult = generalDao.addDelete(NAMESAPCE + ".deleteSqlParamtrs", param);
            logger.debug("*** deleteSqlParamtrs :  prmResult = " + prmResult);
            for (int i = 0, n = dsMap2.size(); i < n; i++) {
                Map<String, Object> dsParam2 = dsMap2.get(i);
                //dsParam2 = setWhoColumn(dsParam2); // whoColumn 추가
                dsParam2.put("SQL_ID", sql_id); // PK값 셋팅
                dsParam2.putAll(args);
                logger.debug("*** dsParam2.toString= " + dsParam2.toString());
                paramResult += generalDao.addUpdate(NAMESAPCE + ".insertSqlParamtrs", dsParam2);
            }
            logger.debug("updateSqlParamtrs result : " +  paramResult);
        }
       // SQL권한 등록/수정
        int authResult = 0;
        if(dsMap3 != null ) {
            // SQL권한을 모두 지우고 갯수만큼 새로 등록한다.
            logger.debug("*** (AUTH)dsMap3.size() = " + dsMap3.size());
            Map<String, Object> param =  new ConcurrentHashMap<String, Object>();
            param.put("SQL_ID", sql_id);
            authResult = generalDao.addDelete(NAMESAPCE + ".deleteSqlAuths", param);
            logger.debug("*** deleteSqlAuths :  authResult = " + authResult);
            for (int i = 0, n = dsMap3.size(); i < n; i++) {
                Map<String, Object> dsParam3 = dsMap3.get(i);
                dsParam3.put("SQL_ID", sql_id); // PK값 셋팅
                dsParam3.putAll(args);
                logger.debug("*** dsParam3.toString= " + dsParam3.toString());
                authResult += generalDao.addUpdate(NAMESAPCE + ".insertSqlAuths", dsParam3);
            }
            logger.debug("insertSqlAuths result : " +  authResult);
        }
        // SQL컬럼설정 등록
        int clumResult = 0;
        if(dsMap4 != null ) {
            // SQL컬럼설정을 모두 지우고 갯수만큼 새로 등록한다.
            logger.debug("*** (COLUMN)dsMap4.size() = " + dsMap4.size());
            Map<String, Object> param =  new ConcurrentHashMap<String, Object>();
            param.put("SQL_ID", sql_id);
            clumResult = generalDao.addDelete(NAMESAPCE + ".deleteSqClumMngs", param);
            logger.debug("*** deleteSqClumMngs :  clumResult = " + clumResult);
            for (int i = 0, n = dsMap4.size(); i < n; i++) {
                Map<String, Object> dsParam4 = dsMap4.get(i);
                dsParam4.put("SQL_ID", sql_id); // PK값 셋팅
                dsParam4.putAll(args);
                logger.debug("*** dsParam4.toString= " + dsParam4.toString());
                clumResult += generalDao.addUpdate(NAMESAPCE + ".insertSqlClumMngs", dsParam4);
            }
            logger.debug("insertSqlClumMngs result : " +  clumResult);
        }

        // 수정화면 새로고침을 위해서 ds_result에 SQL_ID pk값을 지정해서 넣음.
        List<Map<String, Object>> resulList = new ArrayList<Map<String, Object>>();
        Map<String, Object> resultMap =  new ConcurrentHashMap<String, Object>();
        resultMap.put("SQL_ID",  sql_id); // PK
        resultMap.put("SQL_UPDATE_CNT",  result);
        resultMap.put("PARAM_UPDATE_CNT",  paramResult);
        resulList.add(resultMap);
        putDataSetMap(dto, resulList, "ds_output");
        //putDataSetMap(dto, result);
    }

    /**
     * @fn
     * @brief (Override method) Dynamic SQL 삭제
     * @remark
     *  1. Dynamic SQL 상세 화면에서 호출
     * @see
     */
    public void deleteSqlParam(UiMapDto dto) throws Exception {
        int result = 0;
        Map<String, Object> param = getParametersMap(dto);
        if(param == null) {
            logger.debug("*** param is NULL!");
            return;
        }
        logger.debug("*** param.toString() = " + param.toString());

        result = generalDao.addDelete(NAMESAPCE + ".deleteSqlParamtrs", param);  // SQL파라미터
        logger.debug("*** deleteSqlParamtrs  result = " + result);

        result = generalDao.addDelete(NAMESAPCE + ".deleteSqlAuths", param);      // SQL 권한
        logger.debug("*** deleteSqlAuths  result = " + result);

        result = generalDao.addDelete(NAMESAPCE + ".deleteSqClumMngs", param); // SQL 컬럼설정
        logger.debug("*** deleteSqClumMngs  result = " + result);

        result = generalDao.addDelete(NAMESAPCE + ".deleteSqls", param);
        logger.debug("*** deleteSqls  result = " + result);

        putDataSetMap(dto, result);
    }

    /**
    * @fn
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - SEQ_ID 로 DEF_VAL 가져오기
    * @see com.nbdf.cmd.cm.cmsl.service.CMSL01000Service#selectDefVal(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectDefVal(UiMapDto dto)  throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        logger.debug("SQL_ID ==> "+param.get("SQL_ID"));
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectDefVal", param);
        putDataSetMap(dto, list);
    }

}
