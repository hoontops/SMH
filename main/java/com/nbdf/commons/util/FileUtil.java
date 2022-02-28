package com.nbdf.commons.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Map;

import com.nbdf.batch.consts.CmdConsts;
import com.nbdf.cmd.cm.cmfm.web.FileSupport;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.web.support.GeneralDao;


public class FileUtil {
	private static final String NAMESAPCE = "com.nbdf.cmd.cm.cmfm.dao.CMFM01000Dao";

	/*********************************************************************
	 * 메소드명 	: serverFileWrite
	 * 설    명 	: 서버에 전문파일 생성 메소드
	 * 입    력 	: (String) fileMap.get("PATH")    = 파일생성경로
	 *                (String) fileMap.get("FILE_NM") = 파일명
	 * 결    과 	: 성공=true / 실패/false
	 *********************************************************************/
	public static String serverFileWrite(GeneralDao generalDao, Map<String,Object> fileMap, String resultTxt){
		int result = 0;
		if("".equals(resultTxt) || resultTxt == null){
			return "전문 생성할 데이터가 없습니다.";
			
		}else{
			if(!fileMap.containsKey("PATH")){
				return "전문 생성 파일 경로 정보가 없습니다.";
			}else if("".equals(fileMap.get("PATH")+"")){
				return "전문 생성 파일 경로 정보가 없습니다.";
			}
			if(!fileMap.containsKey("FILE_NM")){
				return "전문 생성 파일명 정보가 없습니다.";
			}else if("".equals(fileMap.get("FILE_NM")+"")){
				return "전문 생성 파일명 정보가 없습니다.";
			}
			
			// 테이블 키 체크
			if(!fileMap.containsKey("ATCH_SRC_KEY")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_SRC_KEY)";
			}else if("".equals(fileMap.get("ATCH_SRC_KEY")+"")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_SRC_KEY)";
			}
			
			// 테이블 명 체크
			if(!fileMap.containsKey("ATCH_TY_CD")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_TY_CD)";
			}else if("".equals(fileMap.get("ATCH_TY_CD")+"")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_TY_CD)";
			}
			// 임시파일명 체크
			if(!fileMap.containsKey("ATCH_FILE_GUID")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_FILE_GUID)";
			}else if("".equals(fileMap.get("ATCH_FILE_GUID")+"")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_FILE_GUID)";
			}
			
			// 파일경로
			String path     = fileMap.get("PATH")+"";
			// 파일명
			String fileName = fileMap.get("FILE_NM")+"";
			// 임시파일명
			//String atchFileGuid = DateUtil.getNowDateTime()+UUID.randomUUID().toString()+"";
			String atchFileGuid = fileMap.get("ATCH_FILE_GUID")+"";
			try{
				
				fileMap.put("OC_FILE_NM", fileName); 	 				// 실제 파일명
				fileMap.put("SVR_SAVE_COURS", path); 					// 파일경로
				fileMap.put("FILE_SIZE", resultTxt.getBytes("euc-kr").length);  // 파일사이즈
				fileMap.put("FILE_EXT", ""); 						    // 파일확장자
				fileMap.put("DRM_APY_YN", "N"); 						// DRM 적용 여부
				fileMap.put("RM", ""); 									// 비고
				fileMap.put("KEEP_END_DATEC", "99991230"); 				// 보관 종료일자C
				
				result = generalDao.addUpdate(NAMESAPCE + ".insertAtchFilesMapngs", fileMap);
				result += generalDao.addUpdate(NAMESAPCE + ".insertAtchFiles", fileMap);
	            if (result < 2) {
	                return "첨부파일 등록 시 오류가 발생했습니다.(첨부파일 데이터 생성 오류)";
	            }
	            
				// 파일생성 시 유의사항 
	            // WAS : /data/upload/RATE/
	            // FTP : /RATE/
	            String wasPath = getWasPath(path);
			
	        	
	        	File file = new File(wasPath);
	        	if(!file.exists()){
	        		//없다면 생성
	        		file.mkdirs();	
	        	} 
	        	// BufferedWriter 와 FileWriter를 조합하여 사용 (속도 향상)
	        	BufferedWriter fw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(wasPath+atchFileGuid),"EUC-KR"));
	             
	            // 파일안에 문자열 쓰기
	            fw.write(resultTxt);
	            fw.flush();
	 
	            // 객체 닫기
	            fw.close();
	            
	            //file 저장용 ftp 서버로 옮긴다(WAS 경로, FTP경로, 파일명)
	            FileSupport.ftptransferFile(wasPath, path, atchFileGuid);
	            
	        }catch(Exception e){
	        	return e.getMessage();
	        }
		}
        
		return "";
	}
	/*********************************************************************
	 * 메소드명 	: serverFileWrite
	 * 설    명 	: 서버에 전문파일 생성 메소드
	 * 입    력 	: (String) fileMap.get("PATH")         = 파일생성경로
	 *                (String) fileMap.get("FILE_NM")      = 파일명
	 *                (String) fileMap.get("ATCH_TY_CD")   = 테이블명
	 *                (String) fileMap.get("ATCH_SRC_KEY") = 테이블키
	 * 결    과 	: 성공=true / 실패/false
	 *********************************************************************/
	public static String serverFileWrite(GeneralDao generalDao, Map<String,Object> fileMap, List<Map<String,Object>> list){
		int result = 0;
		if(list.size() == 0){
			return "전문 생성할 데이터가 없습니다.";
			
		}else{
			if(!fileMap.containsKey("PATH")){
				return "전문 생성 파일 경로 정보가 없습니다.";
			}else if("".equals(fileMap.get("PATH")+"")){
				return "전문 생성 파일 경로 정보가 없습니다.";
			}
			if(!fileMap.containsKey("FILE_NM")){
				return "전문 생성 파일명 정보가 없습니다.";
			}else if("".equals(fileMap.get("FILE_NM")+"")){
				return "전문 생성 파일명 정보가 없습니다.";
			}
			
			// 테이블 키 체크
			if(!fileMap.containsKey("ATCH_SRC_KEY")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_SRC_KEY)";
			}else if("".equals(fileMap.get("ATCH_SRC_KEY")+"")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_SRC_KEY)";
			}
			
			// 테이블 명 체크
			if(!fileMap.containsKey("ATCH_TY_CD")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_TY_CD)";
			}else if("".equals(fileMap.get("ATCH_TY_CD")+"")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_TY_CD)";
			}
			// 임시파일명 체크
			if(!fileMap.containsKey("ATCH_FILE_GUID")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_FILE_GUID)";
			}else if("".equals(fileMap.get("ATCH_FILE_GUID")+"")){
				return "전문 생성에 필요한 데이터가 부족합니다. (ATCH_FILE_GUID)";
			}
			
			String separator = "";
			// 줄바꿈여부
			if(fileMap.containsKey("SEPARATOR")){
				if(!"".equals(fileMap.get("SEPARATOR")+"")){
					separator = fileMap.get("SEPARATOR")+"";
				}
			} 
			
			// 파일경로
			String path     = fileMap.get("PATH")+"";
			// 파일명
			String fileName = fileMap.get("FILE_NM")+"";
			// 임시파일명
			//String atchFileGuid = DateUtil.getNowDateTime()+UUID.randomUUID().toString()+"";
			String atchFileGuid = fileMap.get("ATCH_FILE_GUID")+"";
			
			
			// 파일생성 시 유의사항 
			// WAS : /data/upload/RATE/
			// FTP : /RATE/
			String wasPath = getWasPath(path);
			try{
				
				File file = new File(wasPath);
				if(!file.exists()){
					//없다면 생성
					file.mkdirs();	
				} 
				// BufferedWriter 와 FileWriter를 조합하여 사용 (속도 향상)
				BufferedWriter fw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(wasPath+atchFileGuid),"euc-kr"));
				int sizeTemp = list.size();
				int txtSize  = 0;
	        	for(int i=0;i<sizeTemp;i++){
	        		// 파일안에 문자열 쓰기
	        		fw.append(list.get(i).get("FULL_TEXT")+""+separator);
	        		txtSize += (list.get(i).get("FULL_TEXT")+"").getBytes("euc-kr").length;
	        	}
				
				fw.flush();
				// 객체 닫기
				fw.close();
				
				fileMap.put("OC_FILE_NM"    , fileName); 	 	// 실제 파일명
				fileMap.put("SVR_SAVE_COURS", path); 			// 파일경로
				fileMap.put("FILE_SIZE"     , txtSize);  		// 파일사이즈
				fileMap.put("FILE_EXT"      , ""); 				// 파일확장자
				fileMap.put("DRM_APY_YN"    , "N"); 			// DRM 적용 여부
				fileMap.put("RM"            , ""); 				// 비고
				fileMap.put("KEEP_END_DATEC", "99991230"); 		// 보관 종료일자C
				
				result = generalDao.addUpdate(NAMESAPCE + ".insertAtchFilesMapngs", fileMap);
				result += generalDao.addUpdate(NAMESAPCE + ".insertAtchFiles", fileMap);
				if (result < 2) {
					return "첨부파일 등록 시 오류가 발생했습니다.(첨부파일 데이터 생성 오류)";
				}
				
				//file 저장용 ftp 서버로 옮긴다(WAS 경로, FTP경로, 파일명)
				FileSupport.ftptransferFile(wasPath, path, atchFileGuid);
				
			}catch(Exception e){
				return e.getMessage();
			}
		}
		
		return "";
	}
	/*********************************************************************
	 * 메소드명 	: serverFileWrite2
	 * 설    명 	: 서버에 전문파일 생성 메소드( 테이블정보를 생성하지않음)
	 * 입    력 	: (String) fileMap.get("PATH")    = 파일생성경로
	 *                (String) fileMap.get("FILE_NM") = 파일명
	 * 결    과 	: 성공=true / 실패/false
	 *********************************************************************/
	public static String serverFileWrite2(GeneralDao generalDao, Map<String,Object> fileMap, List<Map<String,Object>> list){
		if(list.size() == 0){
			return "전문 생성할 데이터가 없습니다.";
			
		}else{
			if(!fileMap.containsKey("PATH")){
				return "전문 생성 파일 경로 정보가 없습니다.";
			}else if("".equals(fileMap.get("PATH")+"")){
				return "전문 생성 파일 경로 정보가 없습니다.";
			}
			if(!fileMap.containsKey("FILE_NM")){
				return "전문 생성 파일명 정보가 없습니다.";
			}else if("".equals(fileMap.get("FILE_NM")+"")){
				return "전문 생성 파일명 정보가 없습니다.";
			}
			
			// 파일경로
			String path     = fileMap.get("PATH")+"";
			// 파일명
			String fileName = fileMap.get("FILE_NM")+"";
			
			String separator = "";
			// 줄바꿈여부
			if(fileMap.containsKey("SEPARATOR")){
				if(!"".equals(fileMap.get("SEPARATOR")+"")){
					separator = fileMap.get("SEPARATOR")+"";
				}
			} 
			
			// 파일생성 시 유의사항 
            // WAS : /data/upload/RATE/
            // FTP : /RATE/
			String wasPath = getWasPath(path);
            
            	
			try{
				
				File file = new File(wasPath);
				if(!file.exists()){
					//없다면 생성
					file.mkdirs();	
				} 
				// BufferedWriter 와 FileWriter를 조합하여 사용 (속도 향상)
				BufferedWriter fw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(wasPath+fileName),"EUC-KR"));
				int sizeTemp = list.size();
	        	for(int i=0;i<sizeTemp;i++){
	        		// 파일안에 문자열 쓰기
	        		fw.append(list.get(i).get("FULL_TEXT")+""+separator);
	        	}
				
				// 파일안에 문자열 쓰기
				//fw.write(resultTxt);
				fw.flush();
				// 객체 닫기
				fw.close();
				
			}catch(Exception e){
				return e.getMessage();
			}
		}
		
		return "";
	}
	

	/**
	* @fn : getMapKeyCheck
	* @brief : 필수 데이터 존재여부 확인 ( Return : ""(에러없음) / 에러문자열(에러있음) 
	* @Method Name : getEssentialCheck
	* @remark
	* @Create Date: 2018 2018. 3. 30. 오후 2:16:10 
	* @Author: JJM
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2018. 3. 30.        JJM     최초  생성
	 *
	*/
	public static String getMapKeyCheck(String step,String mapKey, Map<String,Object> param){
		String[] key = mapKey.split("\\|");
		for(int i=0;i<key.length;i++){
			if(!param.containsKey(key[i])){
				return "단계 : "+ step + " ( 작업 시 필요한 필수 데이터['"+key[i]+"']가 없습니다. )";
			}else if("".equals(param.get(key[i])+"")){
				return "단계 : "+ step + " ( 작업 시 필요한 필수 데이터['"+key[i]+"']가 비어있습니다. )";
			}
		}
		return "";
	}

	/**
	* @fn : getWasPath
	* @brief : Was 서버 경로 셋팅 
	* @Method Name : getWasPath
	* @remark
	* @Create Date: 2018 2018. 3. 30. 오후 2:16:10 
	* @Author: Jeong Jun Myeong
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2018. 3. 30.        JJM     최초  생성
	 *
	*/
	public static String getWasPath(String path){
		if(path.indexOf(CmdConsts.WAS_PATH) == -1){
        	return CmdConsts.WAS_PATH+path;
        }else{
        	return path;
        }
	}
}
