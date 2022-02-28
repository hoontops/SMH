package com.nbdf.cmd.cm.cmbm.service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.naming.NamingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DbUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: CMBM02100ServiceImpl.java
* @Package: com.drens.dr.CMBM.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM02100ServiceImpl    
* @Company: Built1
* @Create Date: 2018. 5. 2. 오후 1:49:07 
* @Author: Built1
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일          수정자   수정내용
*   ------------  ------  ----------
*   2018. 5. 2.        Built1     최초  생성
*
*/
@Service
public class CMBM02100ServiceImpl extends AbstractNbdfService implements CMBM02100Service { 

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmbm.dao.CMBM02100Dao";

    private javax.sql.DataSource cp;
    
   @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 
    * @brief (Override method) 배치프로그램 실행 리스트 조회
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02100Service#selectBatchProgramRunList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchProgramRunList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectBatchProgramRunList", param);
        putDataSetMap(dto, list);
    }


    /**
    * @fn 
    * @brief (Override method) 배치JOB로그 조회
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02100Service#selectCmbmBatchJobLogs(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmbmBatchJobLogs(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectCmbmBatchJobLogs", param);
        putDataSetMap(dto, list);
    }


	/**
	* @fn 
	* @brief (Override method) 배치실행 취소
	* @remark
	* - 1. [조회] 버튼 클릭시 호출
	* @see com.drens.dr.CMBM.service.CMBM02100Service#executeBatchRunCancel(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	public void executeBatchRunCancel(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		generalDao.addUpdate(NAMESPACE+".executeBatchRunCancel",param);
		putDataSetMap(dto, param);
	}
    
	public void executeBatchDisable(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		generalDao.addUpdate(NAMESPACE+".executeBatchDisable",param);
		putDataSetMap(dto, param);
	}
	public void executeBatchEnable(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		generalDao.addUpdate(NAMESPACE+".executeBatchEnable",param);
		putDataSetMap(dto, param);
	}
	public void executeBatchDrop(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		generalDao.addUpdate(NAMESPACE+".executeBatchDrop",param);
		putDataSetMap(dto, param);
	}
	public void selectBatchScheduleList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE+".selectBatchScheduleList",param));
	}
	public void executeBatchModifyJob(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE+".executeBatchModifyJob",param));
	}
    /**
    * @fn 
    * @brief (Override method) 배치 프로그램 리스트 조회
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02100Service#selectBatchProgramList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchProgramList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectBatchProgramList", param);
        putDataSetMap(dto, list);
    }

    /**
    * @fn 
    * @brief (Override method) 배치 파라미터 리스트 조회
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02100Service#selectBatchParamsList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBatchParamsList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectBatchParamsList", param);
        putDataSetMap(dto, list);
    }
    

    /**
    * @fn 
    * @brief (Override method) 사용자 SQL 실행
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
    * @see com.drens.dr.CMBM.service.CMBM02100Service#selectUserQryList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUserQryList(UiMapDto dto) throws NamingException, SQLException {
        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;
        List<Map<String, Object>> list = null;

        Map<String, Object> param = getParametersMap(dto);
        String query = "";
        String condition = "";
        String orderby = "";

        //javax.naming.Context ctx;
        //ctx = new InitialContext();
        //cp = (javax.sql.DataSource) ctx.lookup("java:/comp/env/jdbc/dsdrens");
        try {
        	con = DbUtil.getConnect("jdbc/dsdrens");

            if(param.get("QUERY") != null) query = (String) param.get("QUERY");
            if(param.get("CONDITION") != null) condition = (String) param.get("CONDITION");
            if(param.get("ORDERBY") != null) orderby = (String) param.get("ORDERBY");

            query = query + "\n" + condition + "\n" + orderby;

            logger.debug("query-->"+query);
            stmt = con.createStatement();
            rs = stmt.executeQuery(query);
            list = getRsToList(rs);
            rs.close();
            stmt.close();
            con.close();
        } catch (SQLException e) {
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(con != null) con.close();
        } finally{
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(con != null) con.close();
        }

        putDataSetMap(dto, list);
    }
    
    public List<Map<String, Object>> getRsToList(ResultSet rs) throws SQLException{
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        while(rs.next()){
            Map<String, Object> map = new HashMap<String, Object>();
            ResultSetMetaData rsMD = rs.getMetaData();
            int rsMDCnt = rsMD.getColumnCount();
            for( int i = 1; i <= rsMDCnt ; i++){
                String column = rsMD.getColumnName(i);
                map.put(column, rs.getObject(column));
            }
            list.add(map);
        }
        return list;
    }
   
	/**
	* @fn 
	* @brief (Override method) 배치실행
	* @remark
	* - 1. [실행] 버튼 클릭시 호출
	* @see com.drens.dr.CMBM.service.CMBM02100Service#executeBatchJobRun(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	public void executeBatchJobRun(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		generalDao.addUpdate(NAMESPACE+".executeBatchJobRun",param);
		putDataSetMap(dto, param);
	}

}
