package com.nbdf.commons.util;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;
import org.apache.commons.net.ftp.FTPReply;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nbdf.commons.exception.BizException;

public class FtpUtil {
	protected static Logger logger = LoggerFactory.getLogger(FtpUtil.class);
	private static String url;
	private static String id;
	private static String pwd;
	private static String port;
/*
	private static FtpUtil instance;
    private FtpUtil() {
    }
    public static FtpUtil getInstance() {
        synchronized (Util.class) {
            if (instance == null) {
                instance = new FtpUtil();
            }
        }
        return instance;
    }
*/    
    public FtpUtil(String url, String id, String pwd, String port) {
    	this.url = url;
    	this.id = id;
    	this.pwd = pwd;
    	this.port = port;
    }
	public static int download(String filePath, String fileName, String downloadPath, String dnFileName) throws Exception { 
		 FTPClient client = null;
		 BufferedOutputStream bos = null;
		 File fPath = null;
		 File f = null;
		 int result = -1;
     	 
		 try{ 
			 // download 경로에 해당하는 디렉토리 생성 
			 fPath = new File(downloadPath);
			 if(!fPath.exists()) fPath.mkdirs();
			 
			 f = new File(downloadPath, dnFileName);
			 client = new FTPClient();
			 client.setControlEncoding("euc-kr");
			 client.connect(url, Integer.parseInt(port));
		 	 boolean isLogin = client.login(id, pwd);
			 if (isLogin == false){
				logger.error("FTP 서버에 로그인 할 수 없습니다.");
				throw new BizException("FTP 서버에 로그인 할 수 없습니다.");
			 }
			 
			 client.enterLocalPassiveMode();
			 int resultCode = client.getReplyCode();
			 if (FTPReply.isPositiveCompletion(resultCode) == false){ 
				client.disconnect();
				logger.error("FTP 서버에 연결할 수 없습니다.");
			 	throw new BizException("FTP 서버에 연결할 수 없습니다.");
			 } else { 
				client.setSoTimeout(5000);
			 	client.setFileType(FTP.BINARY_FILE_TYPE);
				boolean isCwd = client.changeWorkingDirectory(filePath);
				bos = new BufferedOutputStream(new FileOutputStream(f));
				boolean isSuccess = client.retrieveFile(fileName, bos);
				if (isSuccess){ 
					result = 1;// 성공 
				} else{ 
					logger.error("파일 다운로드를 할 수 없습니다.");
					throw new BizException("파일 다운로드를 할 수 없습니다.");
				} 
				client.logout();
			 } // if ~ else 
		} catch (Exception e){ 
			logger.error("FTP Exception : " + e.getMessage());
			throw new BizException("FTP Exception : " + e);
		} 
		finally{ 
			if (bos != null) try{bos.close();} catch (Exception e) {} 
			if (client != null && client.isConnected())	try {client.disconnect();} catch (Exception e) {} 
			return result;
		} // try ~ catch ~ finally 
	} // download()
	/**
	* @fn : download2
	* @brief : 전문 파일용 다운로드
	* @Method Name : download2
	* @remark
	* @Create Date: 2018 2018. 4. 15. 오후 9:27:13 
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
	public static int download2(String filePath, String fileName, String downloadPath, String dnFileName) throws Exception { 
		FTPClient client = null;
		//BufferedOutputStream bos = null;
		OutputStream bos = null;
		File fPath = null;
		File f = null;
		int result = -1;
		
		try{ 
			// download 경로에 해당하는 디렉토리 생성 
			fPath = new File(downloadPath);
			if(!fPath.exists()) fPath.mkdirs();
			
			f = new File(downloadPath, dnFileName);
			client = new FTPClient();
			client.setControlEncoding("UTF-8");
			client.connect(url, Integer.parseInt(port));
			boolean isLogin = client.login(id, pwd);
			if (isLogin == false){
				logger.error("FTP 서버에 로그인 할 수 없습니다.");
				throw new BizException("FTP 서버에 로그인 할 수 없습니다.");
			}
			
			client.enterLocalPassiveMode();
			int resultCode = client.getReplyCode();
			if (FTPReply.isPositiveCompletion(resultCode) == false){ 
				client.disconnect();
				logger.error("FTP 서버에 연결할 수 없습니다.");
				throw new BizException("FTP 서버에 연결할 수 없습니다.");
			} else { 
				client.setSoTimeout(5000);
				client.setFileType(FTP.BINARY_FILE_TYPE);
				boolean isCwd = client.changeWorkingDirectory(filePath);
				bos = new FileOutputStream(f);
				boolean isSuccess = client.retrieveFile(fileName, bos);
				if (isSuccess){ 
					result = 1;// 성공 
				} else{ 
					logger.error("파일 다운로드를 할 수 없습니다.");
					throw new BizException("파일 다운로드를 할 수 없습니다.");
				} 
				client.logout();
			} // if ~ else 
		} catch (Exception e){ 
			logger.error("FTP Exception : " + e.getMessage());
			throw new BizException("FTP Exception : " + e);
		} 
		finally{ 
			if (bos != null) try{bos.close();} catch (Exception e) {} 
			if (client != null && client.isConnected())	try {client.disconnect();} catch (Exception e) {} 
			return result;
		} // try ~ catch ~ finally 
	} // download()
	
    public static int upload(String localFilePath, String remoteFilePath, String fileName) throws Exception { 
		 FTPClient ftp = null;
		 FileInputStream fis = null;
		 File uploadfile = new File(localFilePath+fileName);
		 int result = -1;
		 try
		 { 
			 ftp = new FTPClient();	// FTP Client 객체 생성
			 ftp.setControlEncoding("UTF-8");	// 문자 코드를 UTF-8로 인코딩
			 ftp.connect(url, Integer.parseInt(port));	// 서버접속 " "안에 서버 주소 입력 또는 "서버주소", 포트번호
			 ftp.login(id, pwd);
			 ftp.enterLocalPassiveMode();
			 logger.debug("remoteFilePath::"+remoteFilePath);
			 
			 
			 String[] dir = remoteFilePath.split("/");
			 for(int i=0; i< dir.length; i++){
				 boolean success = ftp.makeDirectory(dir[i]);
				 success = ftp.changeWorkingDirectory(dir[i]);
			 }
			 int cnt = ftp.getBufferSize();
			 ftp.setFileType(FTP.BINARY_FILE_TYPE);
			 try{ 
				 fis = new FileInputStream(uploadfile);
				 boolean isSuccess = ftp.storeFile(fileName, fis);
				 if (isSuccess){ 
					 result = 1;
				 } else{ 
					 throw new BizException("파일 업로드를 할 수 없습니다.");
				 } 
			 } catch(IOException ex){ 
				 logger.debug("IO Exception : " + ex.getMessage());
			 }finally{ 
				 if (fis != null){ 
					 try{ 
						 fis.close();
						 return result;
					 } catch(IOException ex){ 
						 logger.debug("IO Exception : " + ex.getMessage());
					 } 
				 } 
			} 

			 logger.debug("upload start...3");
			ftp.logout();// FTP Log Out 
			}catch(IOException e){ logger.debug("IO:"+e.getMessage());
		 }finally{ 
			 
			 if (ftp != null && ftp.isConnected()){ 
				 try{ 
					 ftp.disconnect();// 접속 끊기 
					 return result;
				 } catch (IOException e){ 
					 logger.debug("IO Exception : " + e.getMessage());
				 } 
			 } 
		 } 
		 return result;
	 }

    // FTP 문서보관(local경로, FTP생성경로, local파일명, FTP생성파일명)
    public static int upload(String localFilePath, String remoteFilePath, String fileName, String fileName2) throws Exception { 
		 FTPClient ftp = null;
		 FileInputStream fis = null;
		 File uploadfile = new File(localFilePath+fileName);
		 int result = -1;
		 try
		 { 
			 ftp = new FTPClient();	// FTP Client 객체 생성
			 ftp.setControlEncoding("UTF-8");	// 문자 코드를 UTF-8로 인코딩
			 ftp.connect(url, Integer.parseInt(port));	// 서버접속 " "안에 서버 주소 입력 또는 "서버주소", 포트번호
			 ftp.login(id, pwd);
			 ftp.enterLocalPassiveMode();
			 logger.debug("remoteFilePath::"+remoteFilePath);
			 String[] dir = remoteFilePath.split("/");
			 for(int i=0; i< dir.length; i++){
				 boolean success = ftp.makeDirectory(dir[i]);
				 success = ftp.changeWorkingDirectory(dir[i]);
			 }
			 ftp.setFileType(FTP.BINARY_FILE_TYPE);
			 try{ 
				 fis = new FileInputStream(uploadfile);
				 boolean isSuccess = ftp.storeFile(fileName2, fis);
				 if (isSuccess){ 
					 result = 1;
				 } else{ 
					 throw new BizException("파일 업로드를 할 수 없습니다.");
				 } 
			 } catch(IOException ex){ 
				 logger.debug("IO Exception : " + ex.getMessage());
			 }finally{ 
				 if (fis != null){ 
					 try{ 
						 fis.close();
						 return result;
					 } catch(IOException ex){ 
						 logger.debug("IO Exception : " + ex.getMessage());
					 } 
				 } 
			} 
			 logger.debug("upload start...3");
			ftp.logout();// FTP Log Out 
			}catch(IOException e){ logger.debug("IO:"+e.getMessage());
		 }finally{ 
			 if (ftp != null && ftp.isConnected()){ 
				 try{ 
					 ftp.disconnect();// 접속 끊기 
					 return result;
				 } catch (IOException e){ 
					 logger.debug("IO Exception : " + e.getMessage());
				 } 
			 } 
		 } 
		 return result;
	 }
    
    // FTP 파일 존재여부 확인
    public static boolean getFileSize(String filePath, String fileName) throws Exception {
    	
		 FTPClient ftp = null;
		 long fileSize = 0;
		 try{ 
			// FTP 접속
			ftp = new FTPClient();
		 	ftp.setControlEncoding("UTF-8");
		 	ftp.connect(url, Integer.parseInt(port));
		 	ftp.login(id, pwd);
		 	ftp.enterLocalPassiveMode();
		 	//ftp.changeWorkingDirectory(filePath);
		 	//ftp.setFileType(FTP.BINARY_FILE_TYPE);
		 	
	 		// FTP 해당 경로에 있는 파일정보 가져오기
	        FTPFile[] files = ftp.listFiles(filePath);
	        
	        // 파일 갯수만큼 반복문
	        for(int i=0;i<files.length;i++){
	        	//해당 파일 객체 가져오기
	        	FTPFile file = files[i];
	        	//명칭 비교
	        	if(file.getName().equals(fileName)){
	        		//같은 명칭이면 사이즈 가져오기
	        		fileSize = file.getSize();
	        		break;
	        	}
	        }
		 	ftp.logout();// FTP Log Out 
		 }catch(IOException e){ 
			 logger.debug("IO:"+e.getMessage());
		 }finally{ 
			 if (ftp != null && ftp.isConnected()){ 
				 try{ 
					 ftp.disconnect();// 접속 끊기
				 } catch (IOException e){ 
					 logger.debug("IO Exception : " + e.getMessage());
					 return false;
				 } 
			 } 
		 }
        
        // 사이즈 존재여부 Return : True / False 
        return fileSize > 0 ? true : false;
    }
    
    public static int delete(String remoteFilePath, String fileName) throws Exception { 
		 FTPClient ftp = null;
		 FileInputStream fis = null;
		 int result = -1;
		 try{ 
			ftp = new FTPClient();
		 	ftp.setControlEncoding("UTF-8");
		 	ftp.connect(url, Integer.parseInt(port));
		 	ftp.login(id, pwd);
		 	ftp.enterLocalPassiveMode();
		 	ftp.changeWorkingDirectory(remoteFilePath);
		 	ftp.setFileType(FTP.BINARY_FILE_TYPE);
		 	try{ 
		 		boolean isSuccess = ftp.deleteFile(fileName);
		 		if (isSuccess){ 
		 			result = 1;
		 		} else{ 
		 			throw new BizException("파일을 삭제 할 수 없습니다.");
		 		} 
		 	} catch(IOException ex){ 
		 		logger.debug("IO Exception : " + ex.getMessage());
		 	}finally{ 
		 		if (fis != null){ 
		 			try{ 
		 				fis.close(); // Stream 닫기 
		 				return result;
		 			} catch(IOException ex){ 
		 				logger.debug("IO Exception : " + ex.getMessage());
		 			} 
		 		} 
		 	} 
		 	ftp.logout();// FTP Log Out 
		 }catch(IOException e){ 
			 logger.debug("IO:"+e.getMessage());
		 }finally{ 
			 if (ftp != null && ftp.isConnected()){ 
				 try{ 
					 ftp.disconnect();// 접속 끊기 
					 return result;
				 } catch (IOException e){ 
					 logger.debug("IO Exception : " + e.getMessage());
				 } 
			 } 
		 } return result;
	}
    // 전문 파일 내용 가져오기
	@SuppressWarnings("finally")
	public static List<String> getFullTextList(String filePath, String fileName, String downloadPath, String dnFileName) throws Exception {
		// List<String> result = fu.getFullTextList(filePath, fileName, downloadTempPath, date+fileName);
		 FTPClient client = null;
		 BufferedOutputStream bos = null;
		 OutputStream outputStream = null;
		 File fPath = null;
		 File f = null;
		 int result = -1;
    	 
		 List<String> list = new ArrayList<String>();
		 
		 try{ 
			 // download 경로에 해당하는 디렉토리 생성 
			 fPath = new File(downloadPath);
			 if(!fPath.exists()) fPath.mkdirs();
			 
			 f = new File(downloadPath, dnFileName);
			 client = new FTPClient();
			 client.setControlEncoding("UTF-8");
			 client.connect(url, Integer.parseInt(port));
		 	 boolean isLogin = client.login(id, pwd);
			 if (isLogin == false){
				logger.error("FTP 서버에 로그인 할 수 없습니다.");
				throw new BizException("FTP 서버에 로그인 할 수 없습니다.");
			 }
			 
			 client.enterLocalPassiveMode();
			 int resultCode = client.getReplyCode();
			 if (FTPReply.isPositiveCompletion(resultCode) == false){ 
				client.disconnect();
				logger.error("FTP 서버에 연결할 수 없습니다.");
			 	throw new BizException("FTP 서버에 연결할 수 없습니다.");
			 } else { 
				client.setSoTimeout(10000);
			 	client.setFileType(FTP.BINARY_FILE_TYPE);
			 	client.changeWorkingDirectory(filePath);
			 	//bos = new BufferedOutputStream(new FileOutputStream(f)); .. 전문이 모두 가져와지지 않음
			 	outputStream = new FileOutputStream(f);
				boolean isSuccess = client.retrieveFile(fileName, outputStream);
				if (isSuccess){ 
					list = Files.readAllLines(Paths.get(downloadPath, dnFileName), StandardCharsets.UTF_8); 
				} else{ 
					logger.error("파일 다운로드를 할 수 없습니다.");
					throw new BizException("파일 다운로드를 할 수 없습니다.");
				} 
				
				client.logout();
			 } // if ~ else 
		} catch (Exception e){ 
			logger.error("FTP Exception : " + e.getMessage());
			throw new BizException("FTP Exception : " + e);
		} 
		finally{ 
			//if (bos != null) try{bos.close();} catch (Exception e) {} .. 전문이 모두 가져와지지 않음
			if (outputStream != null) try{outputStream.close();} catch (Exception e) {} 
			if (client != null && client.isConnected())	try {client.disconnect();} catch (Exception e) {} 
			return list;
		} // try ~ catch ~ finally 
	} // download()
	// 
	/**
	* @fn : getFtpFile
	* @brief : 전문파일 Was서버로 가져오기
	* @Method Name : getFtpFile
	* @remark
	* @Create Date: 2018 2018. 3. 21. 오전 9:32:08 
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
	@SuppressWarnings("finally")
	public static Boolean getFtpFile(String filePath, String fileName, String downloadPath, String dnFileName) throws Exception {
		// List<String> result = fu.getFullTextList(filePath, fileName, downloadTempPath, date+fileName);
		FTPClient client = null;
		BufferedOutputStream bos = null;
		OutputStream outputStream = null;
		File fPath = null;
		File f = null;
		boolean isSuccess = false;
		try{ 
			// download 경로에 해당하는 디렉토리 생성 
			fPath = new File(downloadPath);
			if(!fPath.exists()) fPath.mkdirs();
			
			f = new File(downloadPath, dnFileName);
			client = new FTPClient();
			client.setControlEncoding("UTF-8");
			client.connect(url, Integer.parseInt(port));
			boolean isLogin = client.login(id, pwd);
			if (isLogin == false){
				logger.error("FTP 서버에 로그인 할 수 없습니다.");
				throw new BizException("FTP 서버에 로그인 할 수 없습니다.");
			}
			
			client.enterLocalPassiveMode();
			int resultCode = client.getReplyCode();
			if (FTPReply.isPositiveCompletion(resultCode) == false){ 
				client.disconnect();
				logger.error("FTP 서버에 연결할 수 없습니다.");
				throw new BizException("FTP 서버에 연결할 수 없습니다.");
			} else { 
				client.setSoTimeout(10000);
				client.setFileType(FTP.BINARY_FILE_TYPE);
				client.changeWorkingDirectory(filePath); // 경로로 접근
				//bos = new BufferedOutputStream(new FileOutputStream(f)); .. 전문이 모두 가져와지지 않음
				outputStream = new FileOutputStream(f);
				isSuccess = client.retrieveFile(fileName, outputStream); // 경로에 있는 전문파일을 Was서버로 가져온다.
				
				client.logout();
			} // if ~ else 
		} catch (Exception e){ 
			logger.error("FTP Exception : " + e.getMessage());
			throw new BizException("FTP Exception : " + e);
		} 
		finally{ 
			//if (bos != null) try{bos.close();} catch (Exception e) {} .. 전문이 모두 가져와지지 않음
			if (outputStream != null) try{outputStream.close();} catch (Exception e) {} 
			if (client != null && client.isConnected())	try {client.disconnect();} catch (Exception e) {}
			return isSuccess;
		} // try ~ catch ~ finally 
	} // download()

}
