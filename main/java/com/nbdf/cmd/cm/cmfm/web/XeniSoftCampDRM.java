package com.nbdf.cmd.cm.cmfm.web;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.channels.FileChannel;
import java.util.Properties;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;
import com.nexacro17.xeni.util.CommUtil;

/**
* @file: XeniSoftCampDRM.java
* @Package: com.nbdf.cmd.cm.cmfm.web
* @Project name: IFC MES시스템 구축
* @Type name: XeniSoftCampDRM
* @Company: Built1
* @Create Date: 2015. 6. 18. 오전 10:37:09
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 6. 18.        JIn Sung Ha     최초  생성
 *
*/
@Component
public class XeniSoftCampDRM {

    protected static Logger logger = LoggerFactory.getLogger(XeniSoftCampDRM.class);

    private static final String DRM_PROPERTY_NAME = "commons.properties";

    private static Properties props = new Properties();
    static {
        StringBuilder logBuilder = new StringBuilder();
        logBuilder.append("\n\t\t\t>>>>>>>   DRM CONFIGURATION   <<<<<<<\n\t--------------------------------------------------------------\n");

        try {
            props.load(getInputStream( DRM_PROPERTY_NAME));
            logBuilder.append("\tServerMode : " + getServerMode())
                        .append("\n\tdrm.use : ")
                        .append(propertiesLoad("drm.use"))
                        .append("\n\tdrm.file.includes : ")
                        .append(propertiesLoad("drm.file.includes"))
                        .append("\n\tdrm.groupId : ")
                        .append(propertiesLoad("drm.groupId") )
                        .append("\n\tdrm.str.auth : ")
                        .append( propertiesLoad("drm.str.auth"))
                        .append("\n\tdrm.dac.key.path : ")
                        .append(propertiesLoad("drm.dac.key.path"))
                        .append("\n\tdrm.softcamp.properties  : ")
                        .append(propertiesLoad("drm.softcamp.properties"))
                        .append("\n\t--------------------------------------------------------------\n");

        } catch (IOException e) {
            logger.error("DRM CONFIGURATION error {} ", e);
            logBuilder.append("DRM Properties Path (properties/" +getServerMode() + "/" + DRM_PROPERTY_NAME + ") is not defined..." );
        }

        logger.info(logBuilder.toString());
    };

    /**
    * @fn : propertiesLoad
    * @brief : 프로퍼티 호출 후 key 값을 이용하여 value값을 리턴
    *             key값을 전달하지 않는 경우 프로퍼티의 경로를 리턴
    * @Method Name : propertiesLoad
    * @Create Date: 2015. 6. 18. 오전 9:09:08
    * @Author: JIn Sung Ha
    * @param: 프로퍼티 명, 키 값
    * @return: value
    * @throws : Exception
    */
    public static String propertiesLoad(String key) throws IOException {
        return props.getProperty(key);
    }

    /**
    * @fn
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 엑셀 다운로드/업로드시 최종적으로 호출
    * @see com.nexacro17.xeni.util.XeniExtendBase#loadTargetStream(java.lang.String)
    */
    public InputStream loadTargetStream(String filepath) throws Exception {

        String drmUse = propertiesLoad("drm.use");

        if(drmUse.equals("true")) {
            String fullSaveCours = filepath;
            int pos = fullSaveCours.lastIndexOf("/");

            String fileName = fullSaveCours.substring(pos+1);
            fullSaveCours =  fullSaveCours.substring(0,pos);

            fileName = "/Temp_"+fileName;
            filepath= fullSaveCours + fileName;
        }

        File file = new File(filepath);
        logger.debug("file : {} " , file);
        return new FileInputStream(file);
    }

    /**
     * stream 으로 입력 받은 excel 을 file 로 저장.
     */
    /**
    * @return
     * @fn
    * @brief (Override method) 엑셀 업로드시 호출되는 함수
    * @remark
    * - 프로퍼티 설정에 따라 DRM 해제 여부
    * @see com.nexacro17.xeni.util.XeniExtendBase#saveImportStream(com.nexacro17.xapi.data.VariableList, java.io.InputStream, java.lang.String)
    */
    @SuppressWarnings("resource")
    public String saveImportStream(VariableList varlist, InputStream in, String filepath){
        int nIdx = filepath.lastIndexOf("/");
        String sPath = filepath.substring(0, nIdx);
        OutputStream out = null;
        int drmResult;

        try{
            File file = new File(sPath);
            if (!file.exists()) {
                file.mkdirs();
            }

            out = new FileOutputStream(filepath);

            byte[] buf = new byte[1024];
            int length = 0;
            while ((length = in.read(buf)) > 0) {
                out.write(buf, 0, length);
            }

            /* [DRM 해제 로직]
             * drmResult = 0 인 경우 DRM 문서 복호화 정상 성공 / drmResult = -36 인 경우 원본 문서가 암호화되지 않은 문서
             */
            if("true".equalsIgnoreCase(propertiesLoad("drm.use"))){
                drmResult = drmDecExcel(filepath); /* DRM 적용 */
                if(drmResult != 0 && drmResult != -36) {
                    logger.error("[DRM 적용시 오류가 발생하였습니다.] ERROR_CODE [" + drmResult + "] 관리자에게 문의 하세요" );
                }
            }
        }catch(IOException ioe){
            logger.error("saveImportStream 예외상황 발생[IOException] : " , ioe );
        }finally{
            if( out != null ) {
                try { 
                    out.close(); 
                } catch( IOException e ) {  
                    logger.error("file close error : ", e); 
                }
            }
        }
        return null;
    }

    /**
    * @fn : drmDecExcel
    * @brief : DRM 해제 함수
    * @Method Name : drmDecExcel
    * @Create Date: 2015. 6. 18. 오후 1:16:48
    * @Author: JIn Sung Ha
    * @param: DRM 문서의 Full Path
    * @return: 결과 값
    * @throws : Exception
    */
    public int drmDecExcel(String filepath) throws IOException {

        String fullSaveCours = filepath;

        int pos = fullSaveCours.lastIndexOf("/");
        String fileName = fullSaveCours.substring(pos+1);
        fullSaveCours =  fullSaveCours.substring(0,pos);

        String conFileName = "/Temp_"+fileName;
        String dstFile= fullSaveCours + conFileName;

        //int retVal = sFile.CreateDecryptFileDAC(propertiesLoad("drm.dac.key.path"), "SECURITYDOMAIN", filepath, dstFile);

        //return retVal;
        return 0;
    }


    /**
     * export 된 excel 파일을 저장 후 url 을 전달.
     */
    /**
    * @fn
    * @brief (Override method) 엑셀 다운로드시 호출되는 함수
    * @remark
    * -  프로퍼티 설정에 따라 DRM 적용 여부
    * @see com.nexacro17.xeni.util.XeniExtendBase#saveExportStream(com.nexacro17.xapi.data.VariableList, com.nexacro17.xapi.data.DataSet, java.io.ByteArrayOutputStream, java.lang.String, java.lang.String, javax.servlet.http.HttpServletResponse)
    */
    public int saveExportStream(VariableList varlist,
                                DataSet dscmd,
                                ByteArrayOutputStream out,
                                String filepath, String fileurl,
                                HttpServletResponse response)  throws Exception {

        int nIdx = filepath.lastIndexOf("/");
        String sPath = filepath.substring(0, nIdx);

        File file = new File(sPath);
        if (file.exists() == false) { file.mkdirs();}

        FileOutputStream fout = new FileOutputStream(filepath);
        fout.write(out.toByteArray());

        fout.close();
        out.close();
        int drmResult;

        String drmUse = propertiesLoad("drm.use");

        if ("true".equals(drmUse)) {
            drmResult = drmEncExcel(filepath); /* DRM 적용 */
            if(drmResult != 0) { logger.error("[DRM 적용시 오류가 발생하였습니다.] ERROR_CODE [" + drmResult + "] 관리자에게 문의 하세요" ); }
        }
        DataSet dsRes = CommUtil.getDatasetExportResponse(dscmd);

        PlatformData resData = new PlatformData();
        VariableList varList = resData.getVariableList();

        varList.add("ErrorCode", 0);
        varList.add("ErrorMsg", "SUCCESS");

        dsRes.set(0, "url", fileurl);
        resData.addDataSet(dsRes);

        HttpPlatformResponse platformRes = new HttpPlatformResponse(
                            response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
        platformRes.setData(resData);
        platformRes.sendData();
        return 0;
    }

    /**
    * @fn : drmEncExcel
    * @brief : DRM을 적용시키는 함수(소프트 캠프 DRM 솔루션 가이드 참고)
    * @Method Name : drmApplyExcel
    * @Create Date: 2015. 6. 18. 오전 10:44:58
    * @Author: JIn Sung Ha
    * @param: DRM을 적용시킬 원본파일 Full Path
    * @return: 0인 경우 정상 처리 그외의 값은 오류
    * @throws : Exception
    */
    public int drmEncExcel(String filepath) throws Exception {

        String dstFile, tempFile;
        String fullSaveCours = filepath;

        int pos = fullSaveCours.lastIndexOf("/");
        String fileName = fullSaveCours.substring(pos+1);
        fullSaveCours =  fullSaveCours.substring(0,pos);

        String conFileName = "/Enc_"+fileName;
        dstFile= fullSaveCours + conFileName;

        conFileName = "/Temp_"+fileName;
        tempFile= fullSaveCours + conFileName;

        return 0;
    }

    /**
    * @fn : fileCopy
    * @brief : 파일을 복사
    * @Method Name : fileCopy
    * @Create Date: 2015. 6. 18. 오전 10:35:39
    * @Author: JIn Sung Ha
    * @param: 원본파일 , 복사할 파일
    * @return: void
    * @throws : Exception
    */
 public static void fileCopy(String ocFile, String cpFile) throws IOException, FileNotFoundException{
        
        FileInputStream fis = new FileInputStream(ocFile);
        FileOutputStream fos = new FileOutputStream(cpFile);
        FileChannel fcin = null;
        FileChannel fcout = null;
        
        try{
            fcin = fis.getChannel();
            fcout = fos.getChannel();
            long size = fcin.size();
            fcin.transferTo(0, size, fcout);
        } catch(IOException e){
            logger.error(" fileCopy 예외상황 발생  :{}", e);
        }finally{
            fcin.close();
            fcout.close();
            fis.close();
            fos.close();
        }
 	}
        
  /*  public static void fileCopy(String ocFile, String cpFile) throws Exception{
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try{
            fis = new FileInputStream(ocFile);
            fos = new FileOutputStream(cpFile);

            int data = 0;
            while((data = fis.read()) != -1) { fos.write(data); }
        } catch (IOException e ){
            logger.error(" fileCopy 예외상황 발생  : ", e);
        }finally{
            try{
                if(fis != null) fis.close();
                if(fos != null) fos.close();
            } catch (IOException e){
                fis.close();
                fos.close();
            }
        }
    }
*/
    /**
    * @fn : fileDelete
    * @brief : 파일 삭제
    * @Method Name : fileDelete
    * @Create Date: 2015. 6. 18. 오전 10:36:23
    * @Author: JIn Sung Ha
    * @param: 삭제할 파일 Full Path
    * @return: boolean
    * @throws : Exception
    */
    public static boolean fileDelete(String fileFullPath) {
        File f = new File(fileFullPath);
        if(f.delete()) { return true; }
        return false;
    }

    /**
    * @fn : getPropertiesFilePath
    * @brief : 프로퍼티 파일명에 대한 RealPath를 리턴
    * @Method Name : getPropertiesFilePath
    * @Create Date: 2015. 6. 18. 오전 10:37:11
    * @Author: JIn Sung Ha
    * @param: 프로퍼티 명
    * @return: String(프로퍼티 RealPath)
    * @throws : Exception
    */
    public static InputStream getInputStream(String propertieFileName) {
        ClassLoader cl = Thread.currentThread().getContextClassLoader();
        return cl.getResourceAsStream("properties/"+getServerMode() + "/" + propertieFileName);
    }

    /**
    * @fn : getServerMode
    * @brief : SERVER_MODE를 통해 시스템 명을 전달
    * @Method Name : getSystemNm
    * @Create Date: 2015. 6. 16. 오후 5:23:43
    * @Author: JIn Sung Ha
    * @param: null
    * @return: String
    * @throws : Exception
    */
    public static String getServerMode() {
        return System.getProperty("SERVER_MODE", "local");
    }

    /**
     * 대용량 처리
    * @fn : saveExportStream
    * @brief : 함수 간략한 설명
    * @Method Name : saveExportStream
    * @remark
    * @Create Date: 2015 2015. 11. 28. 오후 2:01:18
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 11. 28.        IMCS     최초  생성
     *
     */
    public DataSet saveExportStream(VariableList varlist,
                                            DataSet dscmd,
                                            ByteArrayOutputStream out,
                                            String filepath, String fileurl)  throws Exception {
        int nIdx = filepath.lastIndexOf("/");
        String sPath = filepath.substring(0, nIdx);

        File file = new File(sPath);
        if (file.exists() == false) { file.mkdirs();}

        FileOutputStream fout = new FileOutputStream(filepath);
        fout.write(out.toByteArray());

        fout.close();
        out.close();
        int drmResult;

        String drmUse = propertiesLoad("drm.use");

        if ("true".equals(drmUse)) {
            drmResult = drmEncExcel(filepath); /* DRM 적용 */
            if(drmResult != 0) { logger.error("[DRM 적용시 오류가 발생하였습니다.] ERROR_CODE [" + drmResult + "] 관리자에게 문의 하세요" ); }
        }
        DataSet dsRes = CommUtil.getDatasetExportResponse(dscmd);
        dsRes.set(0, "url", fileurl);

        logger.debug(dsRes.saveXml());
        return dsRes;
        }
}
