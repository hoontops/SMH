package com.nbdf.commons.util;

import com.nbdf.commons.exception.BizException;

import java.math.BigDecimal;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Class DbUtil
 * @Description DB 관련 유틸(Dynamic SQL)
 * @Modification
 *
 * @author lessor(진성하)/ybyoon(진성하)
 * @version 1.0
 * @see
 */
public class DbUtil {
    private static Logger logger = LoggerFactory.getLogger(DbUtil.class);

    /**
     * Dynamic SQL(다양한 조회)에서 사용되는 DB연결 Connection..
     *  server.xml, context.xml, WEB-INF/web.xml 의 jndi 이름과 일치시켜야 한다.
     *
     * @param String jndi_name JNDI
     * @return Connection
     * @throws BizException
     *
     * 2016-08-29 변경 전략DB커넥션 변경 ( jeus는 커넥션방법이 다름 )
     */
    public static Connection getConnect(String jndi_name) throws SQLException, BizException {
        Context initContext;
        Context envContext;
        DataSource ds = null;
        Connection conn = null;

        try {
            initContext = new InitialContext();

            if("jdbc/dsifc".equals(jndi_name))
            {
				String serverMode = BizUtil.getServerMode();
                if("local".equalsIgnoreCase(serverMode)){   //로컬이 아니면(개발,운영) 쿠키에 도메인 설정
                    envContext  = (Context)initContext.lookup("java:/comp/env");
                    ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
                }else if("dev".equalsIgnoreCase(serverMode)){   //로컬이 아니면(개발,운영) 쿠키에 도메인 설정
                    envContext  = (Context)initContext.lookup("java:/comp/env");
                    ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
                }else if("vera".equalsIgnoreCase(serverMode)){   //로컬이 아니면(개발,운영) 쿠키에 도메인 설정
                    envContext  = (Context)initContext.lookup("java:/comp/env");
                    ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
                }else{
                	ds  = (DataSource)initContext.lookup(jndi_name);
                }	


            }else
            {
                envContext  = (Context)initContext.lookup("java:/comp/env");
                ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
            }

            //envContext  = (Context)initContext.lookup("java:/comp/env");
            //ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
            conn = ds.getConnection();
            if(conn == null) {
                logger.error("## DB Connection FAIL!");
            }
            return conn;
        } catch ( NamingException e) {
              logger.error(e.getMessage());
              throw new BizException(e.getMessage()); // DB connection 실패시에 메시지 넘겨주기..
        } catch ( SQLException e) {
            logger.error(e.getMessage());
            throw new BizException(e.getMessage()); // DB connection 실패시에 메시지 넘겨주기..
        }
    }
/*    
    public static Connection getConnect(String jndi_name) throws SQLException, BizException {
        Context initContext;
        Context envContext;
        DataSource ds = null;
        Connection conn = null;

        try {
            initContext = new InitialContext();

            initContext = new InitialContext();
            ds = (javax.sql.DataSource) initContext.lookup("java:/comp/env/jdbc/dsifc");
            //envContext  = (Context)initContext.lookup("java:/comp/env/");
            //ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
            //envContext  = (Context)initContext.lookup("java:/comp/env");
            //ds = (DataSource)envContext.lookup(jndi_name); // server.xml + web.xml 에 설정된 값.
            conn = ds.getConnection();
            if(conn == null) {
                logger.error("## DB Connection FAIL!");
            }
            return conn;
        } catch ( NamingException e) {
              logger.error(e.getMessage());
              throw new BizException(e.getMessage()); // DB connection 실패시에 메시지 넘겨주기..
        } catch ( SQLException e) {
            logger.error(e.getMessage());
            throw new BizException(e.getMessage()); // DB connection 실패시에 메시지 넘겨주기..
        }
    }
*/
    /**
     * Dynamic SQL(다양한 조회)에서 날린 SQL문장을 전송하여 결과를 List로 가져온다.
     * - SQL구문 에러 발생시 "ORA-ERR"를 map에 담겨준다.
     *
     * @param sql              SELECT문장
     * @param jndi_name    jndi_name
     * @param countSqlYn  CountSQL 여부(Y,N)
     * @param nCommaYn  1000단위 콤마(,) 여부
     * @param floatRoundNum  Y일때 소수점 절사(반올림) 범위(소수점 몇번째 1~5)
     * @return List
     * @throws BizException
     */
    public static List selectSQL(String sql, String jndi_name, String countSqlYn, String nCommaYn, String floatRoundNum) throws SQLException, BizException {
        ArrayList<Map> list = new ArrayList<Map>();
        Statement stmt = null;
        ResultSet rs = null;
        Connection conn = null;

        try {
            conn = getConnect(jndi_name); // 재정경영DB연결 test ("jdbc/dsifc")
            stmt = conn.createStatement();
            if(stmt ==  null) {
                logger.error("### conn.createStatementis NULL");
                return null;
            }
            //log.debug(sql);
            rs = stmt.executeQuery(sql);
            if(rs ==  null) {
                logger.error("### stmt.executeQuery is NULL");
                return null;
            }
            LinkedHashMap<Object, Object> map = null; // HashMap에 넣은 순서대로 나오게 하려면 LinkedHashMap를 써야한다.
            int rowCnt = 0;
            int colCnt = rs.getMetaData().getColumnCount(); // 컬럼 갯수
            logger.debug("## colCnt = " + colCnt + ", nCommaYn = " + nCommaYn + ", floatRoundNum = " + floatRoundNum);

            while(rs.next())
            {
                int startColum = 1;
                /*
                if(countSqlYn != null && countSqlYn.equals("N")) { // COUNT SQL이 아닐 경우
                    startColum = 2;
                }
                */
                /*
                if(rowCnt <= 2) {
                    log.debug("##  : rowCnt [" + rowCnt + "] ##");
                    log.debug("##  : getColumnName(First) [" + rs.getMetaData().getColumnName(startColum) + "] ##");
                    log.debug("##  : getColumnName(Last) [" + rs.getMetaData().getColumnName(colCnt) + "] ##");
                    log.debug("##  : getColumnTypeName [" + rs.getMetaData().getColumnTypeName(startColum) + "] ##");
                }
                */

                map = new LinkedHashMap<Object, Object>();
                for(int i=startColum;i <= colCnt;i++) { // 0이 아니고 1 또는 2부터 시작. - 1:카운트SQL, 2:조회SQL(1은 순서컬럼)
                    String columnName = rs.getMetaData().getColumnLabel(i).toUpperCase();
                    String columnType = rs.getMetaData().getColumnTypeName(i);
                    //log.debug("## ColumnName [" + rs.getMetaData().getColumnName(i) + "] , ColumnType = " + rs.getMetaData().getColumnTypeName(i));
                    if(columnType.indexOf("NUM") != -1) { // 숫자형태일 경우
                        //double value = rs.getDouble(i);
                    	BigDecimal value = rs.getBigDecimal(i);
                        if(!floatRoundNum.equals("0")) { // 소수점 절사 옵션선택 + NUM형태일 경우 소숫점 절사.
                            if(nCommaYn.equals("N")) { // 1000단위 콤마N + 소수점 절사
                                //map.put(columnName, NumberUtil.ceilPoint(value, Integer.parseInt(floatRoundNum)) );
                                //map.put(columnName, NumberUtil.toDouble(rs.getString(i)));
                                if(countSqlYn.equals("Y")) {
                                    map.put(columnName,  rs.getInt(i));
                                } else {
                                    map.put(columnName,  value);
                                }
                            } else if(nCommaYn.equals("Y")) { // 1000단위 콤마Y + 소수점 절사
                                //map.put(columnName, NumberUtil.toFloat(NumberUtil.notation(NumberUtil.ceilPoint(value, Integer.parseInt(floatRoundNum)))));
                                //map.put(columnName, NumberUtil.ceilPoint(NumberUtil.toDouble(NumberUtil.notation(value)), Integer.parseInt(floatRoundNum)) );
                                //map.put(columnName, NumberUtil.notation(NumberUtil.ceilPoint(value, Integer.parseInt(floatRoundNum))) );
                                // 1000단위 콤마 제거함(client단에서 masking처리)
                                if(countSqlYn.equals("Y")) {
                                    map.put(columnName,  rs.getInt(i));
                                } else {
                                    //map.put(columnName, NumberUtil.ceilPoint(value, Integer.parseInt(floatRoundNum)));
                                	map.put(columnName, NumberUtil.ceilPoint(value.intValue(), Integer.parseInt(floatRoundNum)));
                                }
                            }
                        } else if(floatRoundNum.equals("0")) { // 숫자형태이고 소수점 절사 미선택시
                            if(countSqlYn.equals("Y")) {
                                map.put(columnName,  rs.getInt(i));
                            } else {
                                map.put(columnName,  value); // double
                            }
                            // map.put(columnName,  NumberUtil.toDouble(rs.getString(i)));
                            /*
                            if(nCommaYn.equals("N")) { // 1000단위 콤마N + 소수점 미절사
                                map.put(columnName, rs.getString(i));
                            } else if(nCommaYn.equals("Y")) { // 1000단위 콤마Y + 소수점 미절사
                                map.put(columnName, NumberUtil.notation(value)); // 1000단위 콤마만 표시
                            } else {
                                map.put(columnName, rs.getString(i));
                            }
                            */
                        }
                    } else {
                        map.put(columnName, rs.getString(i));
                    }
                }
                list.add(map);
                rowCnt++;
                if(rowCnt <= 3) logger.debug(rowCnt + " : map.toString() = " + map.toString());
            }
            logger.debug("## Row Count = " + rowCnt);
            return list;
        } catch (SQLException e) {
              logger.error("SQL Exception! : " , e);
              Map map = new HashMap();
              //map.put("ORA-ERR", e.getMessage()); // Oracle Error code message.
              map.put("SQL 오류 메시지", e.getMessage());
              list.add(map);
              return list;
      } finally {
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(conn != null) {
                conn.close();
                logger.debug("## DB Connection closed.");
            }
        }
    }

}
