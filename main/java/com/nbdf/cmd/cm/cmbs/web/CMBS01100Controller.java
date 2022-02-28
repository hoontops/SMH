package com.nbdf.cmd.cm.cmbs.web;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import com.nbdf.cmd.cm.cmbs.service.CMBS01100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.util.DbUtil;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.View;
import com.nexacro17.xeni.export.impl.*;


/**
* @file: CMBS01100Controller.java
* @Package: com.nbdf.cmd.cm.cmbs.web
* @Project name: IFC MES시스템 구축
* @Type name: CMBS01100Controller
* @Company: Built1
* @Create Date: 2015. 6. 23. 오전 9:12:16
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 6. 23.        JIn Sung Ha     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmbs01100")
public class CMBS01100Controller extends AbstractXWebController{

    @Autowired
    private CMBS01100Service service;

    /**
    * @fn : selectLogList
    * @brief : 배치프로그램 관리(조회)
    * @Method Name : selectLogList
    * @Create Date: 2015. 6. 23. 오전 9:13:06
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectbatchList.do")
    public View selectbatchList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBatch
    * @brief : 배치프로그램 저장(수정/신규/삭제)
    * @Method Name : saveBatch
    * @Create Date: 2015. 6. 24. 오후 7:22:00
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveBatch.do")
    public View saveBatch(UiMapDto dto, Model model) throws Exception {
        service.saveBatch(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBatchParamList
    * @brief : 배치 파라미터 조회
    * @Method Name : selectBatchParamList
    * @Create Date: 2015. 6. 29. 오전 11:13:54
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectBatchParamList.do")
    public View selectBatchParamList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchParamList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBatchParam
    * @brief : 배치 파라미터 저장
    * @Method Name : saveBatchParam
    * @Create Date: 2015. 6. 29. 오후 1:17:37
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveBatchParam.do")
    public View saveBatchParam(UiMapDto dto, Model model) throws Exception {
        service.saveBatchParam(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBatchWKSList
    * @brief : 배치작업 목록
    * @Method Name : selectBatchWKSList
    * @Create Date: 2015. 6. 30. 오후 3:06:04
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectBatchWKSList.do")
    public View selectBatchWKSList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchWKSList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : deleteBatchWKS
    * @brief : 배치작업 삭제
    * @Method Name : deleteBatchWKS
    * @Create Date: 2015. 7. 1. 오후 3:18:14
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "deleteBatchWKS.do")
    public View deleteBatchWKS(UiMapDto dto, Model model) throws Exception {
        service.deleteBatchWKS(dto);
        return apply(dto, model);
    }

    /**
    * @fn : insertBatchWKS
    * @brief : 배치작업 등록
    * @Method Name : saveBatchWks
    * @Create Date: 2015. 7. 3. 오후 1:23:23
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "insertBatchWKS.do")
    public View insertBatchWKS(UiMapDto dto, Model model) throws Exception {
        service.insertBatchWKS(dto);
        return apply(dto, model);
    }

    /**
    * @fn : updateBatchWKS
    * @brief : 배치작업 수정
    * @Method Name : saveBatchWks
    * @Create Date: 2015. 7. 3. 오후 1:23:23
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "updateBatchWKS.do")
    public View updateBatchWKS(UiMapDto dto, Model model) throws Exception {
        service.updateBatchWKS(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBatchWksDupCheck
    * @brief : 배치 작업 목록 중복 확인
    * @Method Name : selectBatchWksDupCheck
    * @Create Date: 2015. 7. 13. 오전 9:23:56
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectBatchWksDupCheck.do")
    public View selectBatchWksDupCheck(UiMapDto dto, Model model) throws Exception {
        service.selectBatchWksDupCheck(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "deleteBatchDupWKS.do")
    public View deleteBatchDupWKS(UiMapDto dto, Model model) throws Exception {
        service.deleteBatchDupWKS(dto);
        return apply(dto, model);
    }

    /**
    * @fn : executeSampleBatch
    * @brief : 배치 샘플 실행 함수
    * @Method Name : executeSampleBatch
    * @Create Date: 2015. 7. 13. 오전 9:32:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
     * @throws Exception
    * @throws : Exception
    */
    @RequestMapping(value = "executeSampleBatch.do")
    public View executeSampleBatch(UiMapDto dto, Model model) throws Exception{
        service.executeSampleBatch(dto);
        return apply(dto, model);
    }


    /**
    * @fn : executeSampleBatch1
    * @brief : 배치 샘플 실행 함수
    * @Method Name : executeSampleBatch
    * @Create Date: 2015. 7. 13. 오전 9:32:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
     * @throws Exception
    * @throws : Exception
    */
    @RequestMapping(value = "executeSampleBatch1.do")
    public View executeSampleBatch1(UiMapDto dto, Model model) throws Exception{
        service.executeSampleBatch1(dto);
        return apply(dto, model);
    }


    /**
    * @fn : executeSampleBatch2
    * @brief : 배치 샘플 실행 함수
    * @Method Name : executeSampleBatch
    * @Create Date: 2015. 7. 13. 오전 9:32:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
     * @throws Exception
    * @throws : Exception
    */
    @RequestMapping(value = "executeSampleBatch2.do")
    public View executeSampleBatch2(UiMapDto dto, Model model) throws Exception{
        service.executeThreadSampleBatch(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBatchResultList
    * @brief : 배치 실행 결과 조회
    * @Method Name : selectBatchResultList
    * @Create Date: 2015. 7. 17. 오후 1:19:04
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @throws : Exception
    */
    @RequestMapping(value = "selectBatchResultList.do")
    public View selectBatchResultList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchResultList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectBatchResultDetailsList.do")
    public View selectBatchResultDetailsList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchResultDetailsList(dto);
        return apply(dto, model);
    }
    

    /**
    * @fn : selectStoredProcedures
    * @brief : 저장된 프로시져를 검색
    * @Method Name : selectStoredProcedures
    * @remark
    * @Create Date: 2015 2015. 7. 31. 오후 1:32:26
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 7. 31.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectStoredProcedures.do")
    public View selectStoredProcedures(UiMapDto dto, Model model) throws Exception {
        service.selectStoredProcedures(dto);
        return apply(dto, model);
    }

    /**
    * @fn : isvalidCronExpress
    * @brief : cron값 검증
    * @Method Name : isvalidCronExpress
    * @remark
    * @Create Date: 2015 2015. 12. 2. 오후 9:50:40
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 12. 2.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "isvalidCronExpress.do")
    public View isvalidCronExpress(UiMapDto dto, Model model) throws Exception {
        service.isvalidCronExpress(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "selectBatchResultListExcel.do")
    public View selectBatchResultListExcel(UiMapDto dto, Model model) throws Exception {
    	GridExportExcel exporter =  BigDataUtil.bigDataExporter(dto, "CMD");
    	if( exporter != null ) {
    		service.selectBatchResultListExcel(dto);
         }
         model.addAttribute("BIG_DATA_EXPORTER", exporter);
         return bigDataApply(dto, model);
    }

    /**
    * @fn : selectCmdBatPgmSmsList
    * @brief : SMS설정 조회
    * @Method Name : selectCmdBatPgmSmsList
    * @Create Date: 2016. 6. 29. 오전 11:13:54
    * @Author: JinSungHa
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectCmdBatPgmSmsList.do")
    public View selectCmdBatPgmSmsList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdBatPgmSmsList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCmdBatPgmSms
    * @brief : SMS설정 저장
    * @Method Name : saveCmdBatPgmSms
    * @Create Date: 2016. 6. 29. 오후 1:17:37
    * @Author: JinSungHa
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveCmdBatPgmSms.do")
    public View saveCmdBatPgmSms(UiMapDto dto, Model model) throws Exception {
        service.saveCmdBatPgmSms(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectFndLobsFile
    * @brief : lobs file 조회
    * @Method Name : selectFndLobsFile
    * @Create Date: 2016. 6. 29. 오전 11:13:54
    * @Author: JinSungHa
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    /*
    @RequestMapping(value = "selectFndLobsFile.do")
    public void selectFndLobsFile(@RequestParam("fileId") String fileId, @RequestParam("dbms") String dbms, HttpServletResponse res) throws FileNotFoundException, IOException, Exception {
        Map<String, Object> map = service.selectFndLobsFile(fileId,dbms);
        String fileName = java.net.URLEncoder.encode((String) map.get("FILE_NAME"),"UTF-8");

        byte[] fileBytes = (byte[]) map.get("FILE_DATA");
        res.setHeader("Content-Disposition", "filename=" +"\"" +  fileName);
        res.setContentType("application/octer-stream");
        res.setHeader("Content-Transfer-Encoding", "binary");
        res.setContentLength(fileBytes.length);
        ServletOutputStream out = null;
        try{
        out = res.getOutputStream();
        out.write(fileBytes);
        out.flush();
        if(out != null) out.close();
        }catch(FileNotFoundException fe){
            if(out != null) out.close();
        }catch(IOException ie){
            if(out != null) out.close();
        }finally{
            if(out != null) out.close();
        }
    }
    */
    @RequestMapping(value = "selectFndLobsFile.do")
    public void selectFndLobsFile(@RequestParam("fileId") String fileId, @RequestParam("dbms") String dbms, HttpServletResponse res) throws FileNotFoundException, IOException, Exception {
        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;

        String jndi_name = "jdbc/dsifc"; // default JNDI

        String query = " SELECT FILE_DATA ,FILE_CONTENT_TYPE ,SUBSTR(FILE_NAME, INSTR(FILE_NAME,'/',-1,1)+1) AS FILE_NAME ,FILE_FORMAT FROM fnd_lobs WHERE   FILE_ID = "+fileId;

        try {
            con = DbUtil.getConnect(jndi_name);
            stmt = con.createStatement();
            rs = stmt.executeQuery(query);
            if(rs.next()){
                String fileName = java.net.URLEncoder.encode(rs.getString("FILE_NAME"),"UTF-8");
                InputStream is = rs.getBinaryStream("FILE_DATA");
                ServletOutputStream out = null;
                res.setHeader("Content-Disposition", "filename=" +"\"" +  fileName);
                res.setContentType("application/octer-stream");
                res.setHeader("Content-Transfer-Encoding", "binary");
                out = res.getOutputStream();
               int i = 0;
                while((i= is.read()) != -1){
                    out.write(i);
                }
                out.flush();
                if(out != null) out.close();

            }

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

    }

}