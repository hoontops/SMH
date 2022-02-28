package com.nbdf.cmd.cm.cmfm.web;

import static org.mockito.Matchers.anyString;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.FtpUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.util.Util;
import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

public class FileSupport{

    protected static Logger logger = LoggerFactory.getLogger(FileSupport.class);


    /**
    * @fn : getUploadPath
    * @brief : 업로드할 파일의 경로를 리턴
    * @Method Name : getUploadPath
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:38:38
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static String getUploadPath(String jobSysCd , String atchPath, String subPath ) throws Exception{

        if("temp".equals(subPath)) {
            return String.format("%s%s/%s/%s/",atchPath,  jobSysCd, subPath,  DateUtil.dateUtiltoday("yyyy") );
        }
        //return String.format("%s%s/%s/%s/%s/",atchPath,  jobSysCd,  DateUtil.dateUtiltoday("yyyy"),  DateUtil.dateUtiltoday("MM"),  DateUtil.dateUtiltoday("dd"));
        return String.format("%s%s/%s/%s%s/",atchPath,  jobSysCd,  subPath, DateUtil.dateUtiltoday("yyyy"),  DateUtil.dateUtiltoday("MM"));
    }

    /**
    * @fn : isLimitSize
    * @brief : 업로드할 파일의 크기,이름 및 확장자를 확인
    * @Method Name : isLimitSize
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:37:49
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static String isLimitCheck(MultipartFile file, String proExt, long proFileSize) {
        if ((file.getOriginalFilename() == null || file.getOriginalFilename().equals("")) && file.getSize() == 0)  return "파일명, 파일 크기를 확인 해주세요";

        String ext = FilenameUtils.getExtension(file.getOriginalFilename()).toLowerCase();
        boolean flag = false;

        if(ext == null || ext.equals("")){
        	//flag = false;
        	flag = true;
        }

        String[] check = proExt.split(",");
        for (int i = 0; i < check.length; i++) {
            if (ext.toLowerCase().equals(check[i])) {
                flag = true;
                break;
            }
        }
        
        if(!flag){
        	return ext+"(은)는 업로드 할 수 없는 확장자 입니다.";
        }

        if(file.getSize() > proFileSize)
            return "최대 첨부파일 크기는 50M 입니다.";

        return "success";
        }

    /**
    * @fn : fileSearch
    * @brief : 파일이 존재하는지 체크
    * @Method Name : fileSearch
    * @Create Date: 2015. 6. 15. 오후 7:26:12
    * @Author: JIn Sung Ha
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
    */
    public static boolean fileSearch(String fullSaveCours) {

        File f = new File(fullSaveCours);
        if(f.exists()) {
            return true;

        }
        return false;
    }

    /**
    * @fn : applyDrm
    * @brief : 파일 다운로드시 호출( DRM 적용 )
    * @Method Name : applyDrm
    * @Create Date: 2015. 6. 16. 오후 4:06:16
    * @Author: JIn Sung Ha
    * @param: 1. DRM Properties File Full Path
    *               2. keyDAC_SVR0.sc File Full Path
    *               3. 계정명 : SECURITYDOMAIN
    *               4. 열 권한 : 111011100
    *               5. 파일이 저장된 Full Path
    *               6. 실제 파일명
    * @return: 암호화하여 생성한 파일명
    * @throws : Exception
    */
    public static String applyDrm(String drmProPath , String drmKeyPath ,String drmGroupId, String strAuth , String fullSaveCours, String orgFileName){
        String srcFile,dstFile;
        srcFile = fullSaveCours;

        int pos = fullSaveCours.lastIndexOf("/");
        String fileName = fullSaveCours.substring(pos+1);
        String fullSaveCoursCon =  fullSaveCours.substring(0,pos);

        fileName = "/Enc"+fileName;
        dstFile= fullSaveCoursCon + fileName;

        return null;
    }

    /**
    * @fn : makeDir
    * @brief : 파일을 저장할 폴더를 생성
    * @Method Name : makeDir
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:36:53
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static void makeDir(String uploadPath){

        File dir = new File(uploadPath);
        if(!dir.exists()){
            dir.mkdirs();
        }
    }

    /**
    * @fn : createFileDataSet
    * @brief : DataSet 생성
    * @Method Name : createFileDataSet
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:36:34
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static DataSet createFileDataSet(){

        DataSet ds = new DataSet("Dataset00");

        ds.addColumn(new ColumnHeader("FILE_NAME", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("FILE_SIZE", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("JOB_SYS_CD", DataTypes.STRING));        // 업무시스템 코드
        ds.addColumn(new ColumnHeader("FILE_EXT", DataTypes.STRING));            // 파일 확장자
        ds.addColumn(new ColumnHeader("OC_FILE_NM", DataTypes.STRING));        // 실제 파일명.txt
        ds.addColumn(new ColumnHeader("ATCH_FILE_GUID", DataTypes.STRING));  // 실제 파일명을 GUID형태로 변경
        ds.addColumn(new ColumnHeader("SVR_SAVE_COURS", DataTypes.STRING));  // 저장 경로
        ds.addColumn(new ColumnHeader("DRM_APY_YN", DataTypes.STRING));

        return ds;
    }

    /**
    * @fn : setFileInfo
    * @brief : DataSet에 파일 정보를 저장하여 리턴
    * @Method Name : setFileInfo
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:36:00
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static DataSet setFileInfo(MultipartFile file, DataSet ds, String uploadPath, String jobSysCd, String uuid, boolean applyDrm) throws Exception{

        String ext = FilenameUtils.getExtension(file.getOriginalFilename());
        ext = ext.toLowerCase();

        int row = ds.newRow();

        ds.set(row, "FILE_NAME", file.getName());
        ds.set(row, "FILE_SIZE", file.getSize());
        ds.set(row, "JOB_SYS_CD", jobSysCd);
        ds.set(row, "FILE_EXT", ext);
        ds.set(row, "OC_FILE_NM", file.getOriginalFilename());
        ds.set(row, "ATCH_FILE_GUID", uuid);
        ds.set(row, "SVR_SAVE_COURS", uploadPath);

        if(applyDrm){
            ds.set(row, "DRM_APY_YN", "Y");
        }else{
            ds.set(row, "DRM_APY_YN", "N");
        }
        return ds;
    }

    /**
    * @fn : transferFile
    * @brief : 업로드 한 파일을 서버의 특정 경로에 저장
    * @Method Name : transferFile
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:35:08
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static boolean transferFileForTemp(MultipartFile file, String uploadTempPath, String  uuid) throws IllegalStateException, IOException {
        file.transferTo(new File(uploadTempPath + File.separator + uuid));
        return true;
    }
    public static boolean transferFileFor(MultipartFile file, String uploadPath, String  uuid) throws IllegalStateException, IOException {
    	makeDir(uploadPath);
        file.transferTo(new File(uploadPath + File.separator + uuid));
        return true;
    }
    public static boolean transferFileForTemp(StringBuffer sb, String tempPath, String  fileName) throws IllegalStateException, IOException {
    	BufferedWriter bwr = new BufferedWriter(new FileWriter(new File(tempPath + "/" + fileName)));
		bwr.write(sb.toString());
		bwr.flush();
		bwr.close();
        return true;
    }

    public static boolean transferFile(String uploadTempPath, String uploadPath, String uuid) throws IllegalStateException, IOException {
        File tempFile = new File(uploadTempPath + uuid);
        File file = new File(uploadPath+uuid);
        makeDir(uploadPath);
        if(tempFile.exists()) {
            tempFile.renameTo(file);
            return true;
        }
        return false;
    }

    public static boolean ftptransferFile(String uploadTempPath, String uploadPath, String uuid) throws Exception {
        File tempFile = new File(uploadTempPath + uuid);
		String url = Util.getCommonProperty("ftp.url");
		String id = Util.getCommonProperty("ftp.id");
		String pwd = Util.getCommonProperty("ftp.pwd");
		String port = Util.getCommonProperty("ftp.port");
        
        FtpUtil fu = new FtpUtil(url, id, pwd, port);
    	int result = fu.upload(uploadTempPath, uploadPath, uuid);
    	if(result<0) return false;
        if(tempFile.exists()) {
            tempFile.delete();
            return true;
        }
        return false;
    }
    
    /**
    * @fn : ftptransferFile
    * @brief : FTP 문서 보관용(local경로, FTP생성경로, local파일명, FTP생성파일명)
    * @Method Name : ftptransferFile
    * @remark
    * @Create Date: 2018 2018. 4. 5. 오후 1:07:15 
    * @Author: JJM
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 4. 5.        JJM     최초  생성
     *
    */
    public static boolean ftptransferFile(String uploadTempPath, String uploadPath, String uuid, String uuid2) throws Exception {
        File tempFile = new File(uploadTempPath + uuid);
		String url = Util.getCommonProperty("ftp.url");
		String id = Util.getCommonProperty("ftp.id");
		String pwd = Util.getCommonProperty("ftp.pwd");
		String port = Util.getCommonProperty("ftp.port");
        
        FtpUtil fu = new FtpUtil(url, id, pwd, port);
    	int result = fu.upload(uploadTempPath, uploadPath, uuid, uuid2);
    	if(result<0) return false;
        if(tempFile.exists()) {
            tempFile.delete();
            return true;
        }
        return false;
    }
    public static boolean ftptransferFile(String uploadTempPath, String uploadPath, String uuid ,String url ,String id,String pwd,String port) throws Exception {
        File tempFile = new File(uploadTempPath + uuid);
        
        FtpUtil fu = new FtpUtil(url, id, pwd, port);
    	int result = fu.upload(uploadTempPath, uploadPath, uuid);
    	if(result<0) return false;
    	
        if(tempFile.exists()) {
            tempFile.delete();
            return true;
        }
        return false;
    }    
    /**
    * @fn : getFileInfoForList
    * @brief : List 객체에서 원하는 Key값을 전달 받아 value 값을 리턴
    * @Method Name : getFileInfoForList
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:19:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
    public static String getFileInfoForList(List<Map<String, Object>> list, String param) {
        Map<String, Object> fileMap;
        String result="";

        for(int i=0; i <  list.size(); i++){
            fileMap = list.get(i);
            result = fileMap.get(param).toString();
            return result;
        }
        return result;
    }

    /**
    * @fn : fileDnForLocal
    * @brief : 로컬 PC로 파일을 다운로드
    * @Method Name : fileDnForLocal
    * @remark
    * @Create Date: 2015 2015. 3. 26. 오후 3:34:45
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 26.        진성하     최초  생성
     *
    */
       public static void fileDnForLocal(HttpServletResponse response, String fullSaveCours, String orgFileName) throws Exception {

        File file = new File(fullSaveCours);
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < orgFileName.length(); i++) {
            char c = orgFileName.charAt(i);
            if (c > '~') {
                sb.append(URLEncoder.encode("" + c, "UTF-8"));
            } else {
                sb.append(c);
            }
        }
        response.setHeader("Content-Disposition", "filename=" +"\"" +  sb.toString());
        response.setContentType("application/octer-stream");
        response.setHeader("Content-Transfer-Encoding", "binary");

        OutputStream out = response.getOutputStream();
        FileInputStream fis = null;

        try {
            fis = new FileInputStream(file);
            FileCopyUtils.copy(fis, out);
        }catch(FileNotFoundException fE) {
            return;
        } finally {
            if(fis != null){
                fis.close();
            }
        }
        out.flush();
    }

       public static void fileDnForLocalImage(HttpServletResponse response, String fullSaveCours, String orgFileName) throws Exception {

           File file = new File(fullSaveCours);
           StringBuffer sb = new StringBuffer();
           for (int i = 0; i < orgFileName.length(); i++) {
               char c = orgFileName.charAt(i);
               if (c > '~') {
                   sb.append(URLEncoder.encode("" + c, "UTF-8"));
               } else {
                   sb.append(c);
               }
           }
           
           response.setHeader("Content-Disposition", "filename=" +"\"" +  orgFileName);
           if (orgFileName.toLowerCase().endsWith(".jpg") || orgFileName.toLowerCase().endsWith(".jpeg")) {
        	   response.setContentType("image/jpeg");
           } else if (orgFileName.toLowerCase().endsWith(".png")) {
        	   response.setContentType("image/png");
           } else if (orgFileName.toLowerCase().endsWith(".gif")) {
        	   response.setContentType("image/gif");
           } else {
        	   response.setContentType("image/*");
           }

           OutputStream out = response.getOutputStream();
           FileInputStream fis = null;

           try {
               fis = new FileInputStream(file);
               FileCopyUtils.copy(fis, out);
           }catch(FileNotFoundException fE) {
               return;
           } finally {
               if(fis != null){
                   fis.close();
               }
           }
           out.flush();
       }       
   public static int ftpfileDnForLocal(HttpServletResponse response, String fullSaveCours, String orgFileName, String downloadTempPath) throws Exception {
	   
	   int index = fullSaveCours.lastIndexOf("/");
	   String filePath = fullSaveCours.substring(0, index+1);
	   String fileName = fullSaveCours.substring(index+1);
	   String url = Util.getCommonProperty("ftp.url");
	   String id = Util.getCommonProperty("ftp.id");
	   String pwd = Util.getCommonProperty("ftp.pwd");
	   String port = Util.getCommonProperty("ftp.port");
	   String date = DateUtil.getNowDateTime();

       FtpUtil fu = new FtpUtil(url, id, pwd, port);
       int result = fu.download(filePath, fileName, downloadTempPath, date+fileName);
       File file = new File(downloadTempPath+"/"+date+fileName);
       StringBuffer sb = new StringBuffer();
       for (int i = 0; i < orgFileName.length(); i++) {
           char c = orgFileName.charAt(i);
           if (c > '~') {
               sb.append(URLEncoder.encode("" + c, "UTF-8"));
           } else {
               sb.append(c);
           }
       }
       response.addHeader("Access-Control-Allow-Origin", "*");
       response.addHeader("Access-Control-Allow-Credentials", "true");
       response.setHeader("Content-Disposition", "filename=" +"\"" +  sb.toString());
       response.setContentType("application/octer-stream");
       response.setHeader("Content-Transfer-Encoding", "binary");

       OutputStream out = response.getOutputStream();
       FileInputStream fis = null;

       try {
           fis = new FileInputStream(file);
           FileCopyUtils.copy(fis, out);
       }catch(FileNotFoundException fE) {
           return -2 ;
       } finally {
           if(fis != null){
               fis.close();
           }
       }
       out.flush();
       
       removeFile(downloadTempPath+"/"+date+fileName);
       
       return result;
   }
   /**
* @fn : ftpfileDnForLocal2
* @brief : 전문 파일용 다운로드
* @Method Name : ftpfileDnForLocal2
* @remark
* @Create Date: 2018 2018. 4. 15. 오후 9:28:15 
* @Author: JJM
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 4. 15.        JJM     최초  생성
 *
*/
public static int ftpfileDnForLocal2(HttpServletResponse response, String fullSaveCours, String orgFileName, String downloadTempPath) throws Exception {
	   
	   int index = fullSaveCours.lastIndexOf("/");
	   String filePath = fullSaveCours.substring(0, index+1);
	   String fileName = fullSaveCours.substring(index+1);
	   String url = Util.getCommonProperty("ftp.url");
	   String id = Util.getCommonProperty("ftp.id");
	   String pwd = Util.getCommonProperty("ftp.pwd");
	   String port = Util.getCommonProperty("ftp.port");
	   String date = DateUtil.getNowDateTime();

       FtpUtil fu = new FtpUtil(url, id, pwd, port);
       
	   // WAS 경로 : /data/upload/RARE/
	   // FTP 경로 : /RARE/
	   String wasPath = "/data/upload"+downloadTempPath;
	   
       int result = fu.download2(filePath, fileName, wasPath, date+fileName);
       
       File file = new File(wasPath+"/"+date+fileName);
       
       StringBuffer sb = new StringBuffer();
       
       for (int i = 0; i < orgFileName.length(); i++) {
    	   
           char c = orgFileName.charAt(i);
           
           if (c > '~') {
        	   
               sb.append(URLEncoder.encode("" + c, "UTF-8"));
               
           } else {
        	   
               sb.append(c);
               
           }
           
       }
       response.setHeader("Content-Disposition", "filename=" +"\"" +  sb.toString());
       response.setContentType("application/octer-stream");
       response.setHeader("Content-Transfer-Encoding", "binary");

       OutputStream out = response.getOutputStream();
       FileInputStream fis = null;

       try {
           fis = new FileInputStream(file);
           FileCopyUtils.copy(fis, out);
       }catch(FileNotFoundException fE) {
           return -2 ;
       } finally {
           if(fis != null){
               fis.close();
           }
       }
       out.flush();
       
       removeFile(wasPath+"/"+date+fileName);
       
       return result;
   }
   
   /**
	* @fn : getFtpFile
	* @brief : FTP에 있는 파일을 Was서버로 가져오기
	* @Method Name : getFtpFile
	* @remark 
	* @Create Date: 2018 2018. 3. 21. 오전 9:22:38 
	* @Author: JJM
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2018. 3. 21.        JJM     최초  생성
	 *
	*/
   public static String getFtpFile(String fullSaveCours, String orgFileName, String downloadTempPath) throws Exception {
	   
	   int index = fullSaveCours.lastIndexOf("/");
	   String filePath = fullSaveCours.substring(0, index+1);
	   String fileName = fullSaveCours.substring(index+1);
	   String url = Util.getCommonProperty("ftp.url");
	   String id = Util.getCommonProperty("ftp.id");
	   String pwd = Util.getCommonProperty("ftp.pwd");
	   String port = Util.getCommonProperty("ftp.port");
	   String date = DateUtil.getNowDateTime();

       FtpUtil fu = new FtpUtil(url, id, pwd, port);
       
       // FTP 경로, FTP에 있는 파일명, WAS에 옮길 경로, WAS로 옮길 파일명
       Boolean isSuccess = fu.getFtpFile(filePath, fileName, downloadTempPath, date+fileName);
       if (!isSuccess){ 
    	   logger.error("파일 다운로드를 할 수 없습니다.");
    	   throw new BizException("파일 다운로드를 할 수 없습니다.( " + filePath + fileName + " )");
       }
       
       return downloadTempPath+date+fileName;
   }
   /**
    * @fn : getFtpFile
    * @brief : FTP에 있는 파일을 Was서버로 가져오기
    * @Method Name : getFtpFile
    * @remark 
    * @Create Date: 2018 2018. 3. 21. 오전 9:22:38 
    * @Author: JJM
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 3. 21.        JJM     최초  생성
    *
    */
   public static String getFtpFile(String fullSaveCours, String downloadTempPath) throws Exception {
	   
	   int index = fullSaveCours.lastIndexOf("/");
	   String filePath = fullSaveCours.substring(0, index+1);
	   String fileName = fullSaveCours.substring(index+1);
	   String url = Util.getCommonProperty("ftp.url");
	   String id = Util.getCommonProperty("ftp.id");
	   String pwd = Util.getCommonProperty("ftp.pwd");
	   String port = Util.getCommonProperty("ftp.port");
	   String date = DateUtil.getNowDateTime();
	   
	   FtpUtil fu = new FtpUtil(url, id, pwd, port);
	   Boolean isSuccess = fu.getFtpFile(filePath, fileName, downloadTempPath, date+fileName);
	   if (!isSuccess){ 
		   logger.error("파일 다운로드를 할 수 없습니다.");
		   throw new BizException("FTP 서버에서 파일을 가져오지 못했습니다.( " + filePath + fileName + " )");
	   }
	   
	   return downloadTempPath+date+fileName;
   }
   /**
    * @fn : getFtpFileExis
    * @brief : FTP에 있는 파일존재 여부 확인
    * @Method Name : getFtpFileExis
    * @remark 
    * @Create Date: 2018. 7. 06. 오전 9:22:38 
    * @Author: Jeong Jun Myeong
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 7. 06.   Jeong Jun Myeong   최초  생성
    *
    */
   
   public static boolean getFtpFileExis(String fullSaveCours) throws Exception {
	   
	   int index = fullSaveCours.lastIndexOf("/");
	   String filePath = fullSaveCours.substring(0, index+1);
	   String fileName = fullSaveCours.substring(index+1);
	   String url = Util.getCommonProperty("ftp.url");
	   String id = Util.getCommonProperty("ftp.id");
	   String pwd = Util.getCommonProperty("ftp.pwd");
	   String port = Util.getCommonProperty("ftp.port");
	   String date = DateUtil.getNowDateTime();
	   
	   FtpUtil fu = new FtpUtil(url, id, pwd, port);
	   Boolean isSuccess = fu.getFileSize(filePath, fileName);
	   
	   logger.debug("파일존재여부 : " + isSuccess);
	   
	   return isSuccess;
   }
   
   /**
    * @fn : ftpfileFullText
    * @brief : ftp에 위치한 파일의 전문(FullText)을 List로 리턴
    * @Method Name : ftpfileFullText
    * @remark
    * @Create Date: 2018 2018. 3. 21. 오전 9:22:38 
    * @Author: JJM
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2018. 3. 21.        JJM     최초  생성
    *
    */
   public static List<String> ftpfileFullText(String fullSaveCours, String orgFileName, String downloadTempPath, int len) throws Exception {
	   
	   String path = getFtpFile(fullSaveCours,orgFileName,downloadTempPath); // Was서버에 파일 복사
	   List<String> list = new ArrayList<String>();
	   
   	   // 인코딩을 euc-kr로 하지 않으면 한글이 깨짐. ( 전문 파일은 모두 euc-kr )
	   BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(path), "euc-kr"));
	   
	   // 한 라인을 가져와서
	   String line = reader.readLine();
	   
	   
	   // 전문 파일이 개행되어있는지 여부 확인 ( 개행이 없는 경우 ) 
	   if(line.getBytes("euc-kr").length > len){
		   
		   // 크기만큼 잘라 배열에 보관
		   String[] arr = StringUtil.byteStringCute(line,len);
		   list = Arrays.asList(arr);
		   
		// 전문 파일이 개행되어있는지 여부 확인 ( 개행이 있는 경우 ) 
	   } else {
		   list.add(line);
		   
		   while ((line = reader.readLine()) != null) {
			   list.add(line);
		   }
		   // 강정기 팀장님 화면에서 30만건을 List로 변환 중 에러남
		   //list = Files.readAllLines(Paths.get(path), StandardCharsets.UTF_8);
		   
	   }
	   reader.close();
	   //List<String> list = Files.readAllLines(Paths.get(path), StandardCharsets.UTF_8);
	   
	   removeFile(path);
	   
	   return list;
   }

    /**
    * @fn : deleteFile
    * @brief : 서버에 저장된 파일 삭제
    * @Method Name : deleteFile
    * @remark
    * @Create Date: 2015 2015. 3. 30. 오후 6:07:23
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
    public static void deleteFile(UiMapDto dto){

        Map<String, DataSetMap> inDataset = dto.getInDataSetMap();
        DataSetMap inDsMap = inDataset.get("ds_file");
        Map<String, Object> map  = inDsMap.get(0);

        String svrSaveCours = (String) map.get("SVR_SAVE_COURS");
        String atchFileGuid = (String) map.get("ATCH_FILE_GUID");

        File file = new File(svrSaveCours+atchFileGuid.substring(1,atchFileGuid.length() ));
        file.delete();
    }

    public static void ftpDeleteFile(UiMapDto dto) throws Exception{

        Map<String, DataSetMap> inDataset = dto.getInDataSetMap();
        DataSetMap inDsMap = inDataset.get("ds_file");
        Map<String, Object> map  = inDsMap.get(0);

        String svrSaveCours = (String) map.get("SVR_SAVE_COURS");
        String atchFileGuid = (String) map.get("ATCH_FILE_GUID");
        String fullSaveCours = (String) map.get("FULL_SAVE_COURS");
        if( fullSaveCours == null) {
        	fullSaveCours = svrSaveCours+atchFileGuid;
        }
        
        if( !StringUtils.isEmpty(fullSaveCours)) {
            File file = new File(fullSaveCours);
            file.delete();
        }

        //FtpUtil.delete(svrSaveCours, atchFileGuid);
    }
    

    /**
    * @fn : ftpDeleteFile2
    * @brief : 템프성으로 생성된 파일 제거( 수납 전문 제거 )
    * @Method Name : ftpDeleteFile2
    * @remark
    * @Create Date: 2018 2018. 3. 13. 오전 11:29:13 
    * @Author: JJM
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 3. 13.        JJM     최초  생성
     *
    */
    public static void ftpDeleteFile2(String fullSaveCours) throws Exception{
       int index = fullSaveCours.lastIndexOf("/");
 	   String filePath = fullSaveCours.substring(0, index+1);
 	   String fileName = fullSaveCours.substring(index+1);
 	   String url = Util.getCommonProperty("ftp.url");
 	   String id = Util.getCommonProperty("ftp.id");
 	   String pwd = Util.getCommonProperty("ftp.pwd");
 	   String port = Util.getCommonProperty("ftp.port");
 	   
    	FtpUtil fu = new FtpUtil(url, id, pwd, port);
    	fu.delete(filePath, fileName);
    }

    public static void removeFile(String filePathAndName){
        if( filePathAndName == null){
            logger.error("filePathAndName is not found");
        }
        File file = new File(filePathAndName);
        file.delete();
    }

    /**
    * @fn : mapSearchFileNm
    * @brief :  List 객체에서 원하는 정보를 추출하여 리턴
    * @Method Name : mapSearchFileNm
    * @Create Date: 2015. 4. 27. 오후 10:06:11
    * @Author: JIn Sung Ha
    * @param:  List<Map<String, Object>> atchInfoList, String 원하는 정보
    * (예) <String search의 값>
    * 사용 유무 : USE_YN
    * 다운로드 횟수 : DNLD_CNT
    * 비고 : RM
    * 파일명 : OC_FILE_NM
    * 저장 경로 : SVR_SAVE_COURS
    * (FULL)저장 경로 : FULL_SAVE_COURS
    * GUID : ATCH_FILE_GUID
    * FILE_SIZE : FILE_SIZE
    * @return: String fileNm(파일명)
    * @throws : Exception
    */
    public static String fileMapSearch( List<Map<String, Object>> atchInfoList, String search) {
        String result = "";
        Map<String, Object> list = null;

        for(int i=0; i<atchInfoList.size(); i++) {
            list = atchInfoList.get(i);
            if( list != null){
                result += "["+Integer.toString(i+1)+"]";
                result += list.get(search).toString();
                result += "/";
            }
        }
        return result;
    }

    /**
    * @fn : isDrmExtCheck
    * @brief : DRM 적용이 가능한 확장자 인지 확인
    * @Method Name : isDrmExtCheck
    * @Create Date: 2015. 6. 16. 오전 11:24:28
    * @Author: JIn Sung Ha
    * @param: 파일의 확장자, properties의 확장자
    * @return: true/false
    * @throws : Exception
    */
    public static boolean isDrmExtCheck(String ext, String proDrmExt) {

        String[] check = proDrmExt.split(",");
        for (int i = 0; i < check.length; i++) {
            if (ext.equals(check[i].trim())) {
                return true;
            }
        }
        return false;
    }

}
