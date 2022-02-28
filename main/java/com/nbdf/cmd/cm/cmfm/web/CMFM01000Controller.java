package com.nbdf.cmd.cm.cmfm.web;

import java.io.File;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmfm.service.CMFM01000Service;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * @file: CMFM01000Controller.java
 * @Package: com.nbdf.cmd.cm.cmfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name: CMFM01000Controller
 * @Company: Built1
 * @Create Date: 2021. 3. 18. 오후 10:44:55
 * @Author: 진성하
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용
 *       ------------ ------ ----------
 *       2015. 3. 18. 진성하 최초 생성
 *
 *
 */
@Controller
@RequestMapping(value = "/comm")
public class CMFM01000Controller extends AbstractWebController {

    @Autowired
    private CMFM01000Service service;

    @Value("#{commonsProp['drm.use']?:false}")
    private boolean drmUse; // DRM을 사용할지 여부

    /**
    * @fn : uploadImg
    * @brief : 도움말 등록시 본문 내용에 이미지를 첨부
    * @Method Name : uploadImg
    * @Create Date: 2015. 5. 18. 오후 3:02:02
    * @Author: JIn Sung Ha
    * @param: MultipartHttpServletRequest request,
            HttpServletResponse response
    * @return: Void
    * @throws : Exception
    */
    @RequestMapping(value = "uploadImg.do")
    public void uploadImg( MultipartHttpServletRequest request,
            HttpServletResponse response) throws Exception{

    	String uploadPath = String.format("%s%s/%s%s/",(String)getProperty("atch.path"),  "IMAGE",  DateUtil.dateUtiltoday("yyyy"),  DateUtil.dateUtiltoday("MM"));
        
        PlatformData resData = new PlatformData();
        VariableList resVarList = resData.getVariableList();

        Map<String, MultipartFile> files = request.getFileMap();
        Iterator<MultipartFile> iter = files.values().iterator();

        DataSet ds = new DataSet("ds_output");
        ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("savefilename", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
        
        String uploadTempPath = (String)getProperty("atch.temp.path");
        
        
        while (iter.hasNext()) {
            MultipartFile file = iter.next();

            String date = DateUtil.getNowDateTime();
            String ext = file.getName().substring(file.getName().lastIndexOf("."), file.getName().length());
            String saveFileName = date+ext;
            if(FileSupport.transferFileForTemp(file, uploadTempPath, saveFileName)) {
//            	if( !FileSupport.ftptransferFile(uploadTempPath, uploadPath, saveFileName) ) {
            	if( !FileSupport.transferFile(uploadTempPath, uploadPath, saveFileName) ) {
                	throw new BizException("이미지 파일 저장중 오류발생");
            	}
            }
            
            int row = ds.newRow();
            ds.set(row, "filename", file.getName());
            ds.set(row, "savefilename",uploadPath+saveFileName);
            ds.set(row, "filesize", file.getSize());
            
        }
        resData.addDataSet(ds);
        resVarList.add("ErrorCode", 0);
        resVarList.add("ErrorMsg", "SUCC");

        HttpPlatformResponse res = new HttpPlatformResponse(response);
        res.setData(resData);
        res.sendData();
        
     }    
    
    @RequestMapping(value = "uploadImgHelp.do")
    public void uploadImgHelp( MultipartHttpServletRequest request,
            HttpServletResponse response) throws Exception{

    	String uploadPath = String.format("%s%s/%s%s/",(String)getProperty("atch.path"),  "HELP",  DateUtil.dateUtiltoday("yyyy"),  DateUtil.dateUtiltoday("MM"));
    	
        PlatformData resData = new PlatformData();
        VariableList resVarList = resData.getVariableList();

        Map<String, MultipartFile> files = request.getFileMap();
        Iterator<MultipartFile> iter = files.values().iterator();

        DataSet ds = new DataSet("ds_output");
        ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("savefilename", DataTypes.STRING));
        ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
        
        String uploadTempPath = (String)getProperty("atch.temp.path");
        
        
        while (iter.hasNext()) {
            MultipartFile file = iter.next();

            String date = DateUtil.getNowDateTime();
            String ext = file.getName().substring(file.getName().lastIndexOf("."), file.getName().length());
            String saveFileName = date+ext;
            if(FileSupport.transferFileForTemp(file, uploadTempPath, saveFileName)) {
//            	if( !FileSupport.ftptransferFile(uploadTempPath, uploadPath, saveFileName) ) {
            	if( !FileSupport.transferFile(uploadTempPath, uploadPath, saveFileName) ) {
                	throw new BizException("이미지 파일 저장중 오류발생");
            	}
            }
            
            int row = ds.newRow();
            ds.set(row, "filename", file.getName());
            ds.set(row, "savefilename",uploadPath+saveFileName);
            ds.set(row, "filesize", file.getSize());
            
        }
        resData.addDataSet(ds);
        resVarList.add("ErrorCode", 0);
        resVarList.add("ErrorMsg", "SUCC");

        HttpPlatformResponse res = new HttpPlatformResponse(response);
        res.setData(resData);
        res.sendData();
        
     }       
    /**
    * @fn : deleteImg
    * @brief : 도움말 본문 이미지 삭제
    * @Method Name : deleteImg
    * @Create Date: 2015. 5. 19. 오전 10:28:05
    * @Author: JIn Sung Ha
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
    */
    @RequestMapping(value = "deleteImg.do")
    public void deleteImg( HttpServletRequest request,
            HttpServletResponse response) throws Exception{

        String contextRealPath = request.getSession().getServletContext().getRealPath("/");
        String deletePath = "";
        String msg = "정상적으로 삭제되었습니다.";

        boolean succ = true;

        if( contextRealPath.substring(0,1).equals("C")) { /* 로컬인 경우 */
            deletePath = contextRealPath;
        }else {                                                       /* 서버인 경우 */
            deletePath = "/data/upload/";
        }

        PlatformData platformData = new PlatformData();
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request);

        platformRequest.receiveData();
        PlatformData pData = platformRequest.getData();

        DataSetList inDl = new DataSetList();     //input dataset list
        inDl = pData.getDataSetList();  // dataset list

        DataSet inDs = inDl.get("input"); //Dataset

        for(int i=0 ; i<inDs.getRowCount(); i++)
        {
            String fileRealNm = inDs.getString(i, "savefilename");

            if( fileRealNm == null ) {
                msg = "이미지 삭제 대상 파일이 존재하지 않습니다.";
                logger.error("[deleteImg] : 이미지 삭제 대상 폴더가 존재하지 않음");
                succ = false;
                break;
            }
            String[]  deleteFolder = fileRealNm.split("/");

            File file = new File(deletePath +  fileRealNm.substring(1,fileRealNm.length()));
            file.delete();

            file = new File(deletePath +  deleteFolder[1] +"/" +deleteFolder[2]); /* 폴더 삭제 */
            file.delete();
        }
        platformData.addDataSet(inDs);
        VariableList varList = platformData.getVariableList();

        if (succ)
        {
            varList.add("ErrorCode", "0");
            varList.add("ErrorMsg", msg);
        }
        else
        {
            varList.add("ErrorCode", "-1");
            varList.add("ErrorMsg", msg);
        }

        HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
        pRes.setData(platformData);
        pRes.sendData();

    }

    /**
    * @fn : uploadFile
    * @brief : 파일업로드(멀티 업로드 구현)
    * @Method Name : uploadFile
    * @remark
    * @Create Date: 2021. 3. 18. 오후 10:45:02
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 18.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "uploadFile/{jobSysCd}/{subDir}.do")
    public void uploadFile( @PathVariable("jobSysCd") String jobSysCd,  @PathVariable("subDir") String subDir,  MultipartHttpServletRequest request,
            HttpServletResponse response) throws Exception{

        String msg = "";

        String uploadTempPath = (String)getProperty("atch.temp.path");
        String uploadPath = FileSupport.getUploadPath( jobSysCd ,  (String)getProperty("atch.path") , subDir );

        boolean applyDrm = false;
        boolean flag = false;

        FileSupport.makeDir(uploadTempPath);

        PlatformData resData = new PlatformData();
        VariableList resVarList = resData.getVariableList();

        Map<String, MultipartFile> files = request.getFileMap();
        Iterator<MultipartFile> iter = files.values().iterator();

        DataSet ds = FileSupport.createFileDataSet();

        while (iter.hasNext()) {

            MultipartFile file =  iter.next();

            if( file.getSize()  > 0) {
                String uuid = service.selectAtchFileGuid();
                //uuid = date+uuid;
                msg = FileSupport.isLimitCheck(file, (String) getProperty("drm.file.includes"), Long.parseLong(getProperty("file.limitSize")));

                if(msg.equals("success")){
                    //String ext = FilenameUtils.getExtension(file.getOriginalFilename()).toLowerCase();
                    //if(!"".equals(ext))	uuid = uuid+"."+ext;
                    FileSupport.setFileInfo(file, ds, uploadPath, jobSysCd,uuid, applyDrm);
                    if(FileSupport.transferFileFor(file, uploadPath, uuid)) {
                    	flag = true;
                    }
                    /* (1) 임시 TEMP 디렉토리에 파일을 생성*/
//                    if(FileSupport.transferFileForTemp(file, uploadTempPath, uuid)) {
//                        /* (2) 임시 TEMP 디렉토리에 파일이 생성되면 실제 경로에 파일을 복사 */
//                    	if( FileSupport.transferFile(uploadTempPath, uploadPath, uuid) ) {
//                    	//if( FileSupport.ftptransferFile(uploadTempPath, uploadPath, uuid) ) {
//                                    flag = true;
//                        }
//                    }
                }else{
                    break;
                }
            }
        }
        if (flag){
            logger.debug("파일 업로드 정상처리");
            resData.addDataSet(ds);
            resVarList.add("ErrorCode", 200);
            resVarList.add("ErrorMsg", "");
        }else{
            logger.debug("비 정상처리");
            resVarList.add("ErrorCode", 500);
            resVarList.add("ErrorMsg", msg);
        }
        HttpPlatformResponse res = new HttpPlatformResponse(response);
        res.setData(resData);
        res.sendData();
     }

    /**
    * @fn : uploadFile
    * @brief : 파일업로드(멀티 업로드 구현)
    * @Method Name : uploadFile
    * @remark
    * @Create Date: 2021. 3. 18. 오후 10:45:02
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 18.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "uploadFileTemp.do")
    public void uploadFile(MultipartHttpServletRequest request, HttpServletResponse response) throws Exception{
    	
    	String fileName = request.getParameter("filename");
        String msg = "";
        
        String uploadTempPath = (String)getProperty("atch.temp.path");

        boolean flag = false;

        FileSupport.makeDir(uploadTempPath);

        PlatformData resData = new PlatformData();
        VariableList resVarList = resData.getVariableList();

        Map<String, MultipartFile> files = request.getFileMap();
        Iterator<MultipartFile> iter = files.values().iterator();

        DataSet ds = FileSupport.createFileDataSet();

        while (iter.hasNext()) {

            MultipartFile file =  iter.next();
            logger.error("file.getOriginalFilename()-->"+file.getOriginalFilename());
            String orgFileName = file.getOriginalFilename();
            //String orgFileName = new String(file.getOriginalFilename().getBytes("8859_1"),"UTF-8");	//한글깨짐 방지
            if(fileName == null || "".equals(fileName)) fileName =  orgFileName;
            if( file.getSize()  > 0) {
                msg = FileSupport.isLimitCheck(file, (String) getProperty("drm.file.includes"), Long.parseLong(getProperty("file.limitSize")));

                if(msg.equals("success")){
                    /* (1) 임시 TEMP 디렉토리에 파일을 생성*/
                    if(FileSupport.transferFileForTemp(file, uploadTempPath, fileName)) {
                    	flag = true;
                    }
                }else{
                    break;
                }
            }
        }
        if (flag){
            logger.debug("파일 업로드 정상처리");
            resData.addDataSet(ds);
            resVarList.add("ErrorCode", 200);
            resVarList.add("ErrorMsg", "");
        }else{
            logger.debug("비 정상처리");
            resVarList.add("ErrorCode", 500);
            resVarList.add("ErrorMsg", msg);
        }
        HttpPlatformResponse res = new HttpPlatformResponse(response);
        res.setData(resData);
        res.sendData();
     }
    
     /**
    * @fn : dnFile
    * @brief : 파일 다운로드 요청시 호출
    * @Method Name : dnFile
    * @remark
    * @Create Date: 2021. 3. 26. 오후 1:19:43
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
    @RequestMapping(value = "dnFile/{atchFileId}/{seqNo}.do")
    public void dnFile(@PathVariable("atchFileId") int atchFileId, @PathVariable("seqNo") int seqNo, HttpServletResponse response)  throws Exception {

        int result = 0;
        Map<String, Object> param = new HashMap<String, Object>();
        List <Map<String, Object>> list;

        list = service.selectAtchFileDn(atchFileId, seqNo);
        result = service.updateAtchFileDnCnt(atchFileId, seqNo);

        if( list.size() == 0 || result == 0 )
            throw new BizException("조회결과가 없습니다.");

        String fullSaveCours = FileSupport.getFileInfoForList(list, "FULL_SAVE_COURS");
        String ocFileNm = FileSupport.getFileInfoForList(list, "OC_FILE_NM");
        FileSupport.fileDnForLocal(response, fullSaveCours, ocFileNm);
//
//        if(drmUse) {
//            String fileExt = FileSupport.getFileInfoForList(list, "FILE_EXT");
//            boolean drmExt = FileSupport.isDrmExtCheck(fileExt, (String) getProperty("drm.file.includes") );
//
//            if(drmExt) {
//                fullSaveCours = FileSupport.applyDrm((String) getProperty("drm.softcamp.properties") ,(String) getProperty("drm.dac.key.path") , (String) getProperty("drm.groupId"), (String) getProperty("drm.str.auth") , fullSaveCours, ocFileNm);
//                logger.debug("[DRM 적용 후 파일 다운로드 실시]  " + fullSaveCours);
//            }else {
//                logger.error("[DRM을 적용할 수 없는 파일 형식]  파일 확장자 : " + fileExt);
//            }
//        }
//
//        //if( FileSupport.fileSearch(fullSaveCours) ) {
//     	    //String downloadTempPath = FileSupport.getUploadPath( jobSysCd ,  (String)getProperty("atch.path"), "temp" );
//     	    String downloadTempPath = (String)getProperty("atch.temp.path");
//     	    result = FileSupport.ftpfileDnForLocal(response, fullSaveCours, ocFileNm, downloadTempPath);
//            if(result < 0){
//                logger.error("[" + fullSaveCours+ "] 파일이 존재 하지 않습니다.");
//            }
//        //}else {
//            //logger.error("[" + fullSaveCours+ "] 파일이 존재 하지 않습니다.");
//        //}
     }
    

    /**
    * @fn : downFile
    * @brief : 파일 다운로드 요청시 호출(FILE_GUID)
    * @Method Name : downFile
    * @remark
    * @Create Date: 2021. 3. 26. 오후 1:19:43
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
    @RequestMapping(value = "downFile/{atchFileGuid}.do")
    public void downFile(@PathVariable("atchFileGuid") String atchFileGuid, HttpServletResponse response)  throws Exception {

        int result = 0;
        List <Map<String, Object>> list;

        list = service.selectAtchFileDn(atchFileGuid, "");
        result = service.updateAtchFileDnCnt(atchFileGuid, "");

        if( list.size() == 0 || result == 0 )
            throw new BizException("조회결과가 없습니다.");

        String fullSaveCours = FileSupport.getFileInfoForList(list, "FULL_SAVE_COURS");
        String ocFileNm = FileSupport.getFileInfoForList(list, "OC_FILE_NM");
//        String drmApyYn = FileSupport.getFileInfoForList(list, "DRM_APY_YN");
        FileSupport.fileDnForLocal(response, fullSaveCours, ocFileNm);

        //String downloadTempPath = FileSupport.getUploadPath( jobSysCd ,  (String)getProperty("atch.temp.path"), "temp" );
//        String downloadTempPath = (String)getProperty("atch.temp.path");
// 	    result = FileSupport.ftpfileDnForLocal(response, fullSaveCours, ocFileNm, downloadTempPath);
//        if(result < 0){
//            logger.error("[" + fullSaveCours+ "] 파일이 존재 하지 않습니다.");
//        }
    }
    /**
     * @fn : downFile2
     * @brief : 파일 다운로드 요청시 호출(FILE_GUID) : 전문 다운용
     * @Method Name : downFile
     * @remark
     * @Create Date: 2021. 3. 26. 오후 1:19:43
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
    @RequestMapping(value = "downFile2/{atchFileGuid}/{jobSysCd}.do")
    public void downFile2(@PathVariable("atchFileGuid") String atchFileGuid, @PathVariable("jobSysCd") String jobSysCd, HttpServletResponse response)  throws Exception {
    	
    	int result = 0;
    	List <Map<String, Object>> list;
    	
    	list = service.selectAtchFileDn(atchFileGuid, "");
    	result = service.updateAtchFileDnCnt(atchFileGuid, "");
    	
    	if( list.size() == 0 || result == 0 )
    		throw new BizException("조회결과가 없습니다.");
    	
    	String fullSaveCours = FileSupport.getFileInfoForList(list, "FULL_SAVE_COURS");
    	String ocFileNm = FileSupport.getFileInfoForList(list, "OC_FILE_NM");
//        String drmApyYn = FileSupport.getFileInfoForList(list, "DRM_APY_YN");
    	//FileSupport.fileDnForLocal(response, fullSaveCours, ocFileNm);
    	
    	//String downloadTempPath = FileSupport.getUploadPath( jobSysCd ,  (String)getProperty("atch.path"), "temp" );
    	String downloadTempPath = (String)getProperty("atch.temp.path");
    	result = FileSupport.ftpfileDnForLocal2(response, fullSaveCours, ocFileNm, downloadTempPath);
    	if(result < 0){
    		logger.error("[" + fullSaveCours+ "] 파일이 존재 하지 않습니다.");
    	}
    }

    /**
    * @fn : dnFile
    * @brief : DB저장 정보 없이 File FullPath로만  다운로드
    * @Method Name : dnFile
    * @remark
    * @Create Date: 2021. 3. 30. 오전 9:04:07
    * @Author: 진성하
    * @File Version: v1.0
     *
     *  개정이력(Modification Information)
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 30.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "directDnFile/{orgFileName}/{jobSysCd}/{subDir}/{yyyymmdd}/{atchFileGuid}.do")
    public void dnFile(@PathVariable("orgFileName") String orgFileName,@PathVariable("jobSysCd") String jobSysCd,
            @PathVariable("subDir") String subDir,@PathVariable("yyyymmdd") String yyyymmdd,
            @PathVariable("atchFileGuid") String atchFileGuid,  HttpServletResponse response)  throws Exception {

    	//String filePath = "/data/upload/RATE/"+ jobSysCd +"/"+ subDir +"/"+ yyyymmdd +"/"+ atchFileGuid;
    	String filePath = "/RATE/"+ jobSysCd +"/"+ subDir +"/"+ yyyymmdd +"/"+ atchFileGuid;
        //FileSupport.fileDnForLocal(response, filePath, new String(orgFileName.getBytes("UTF-8")));
        //String downloadTempPath = FileSupport.getUploadPath( jobSysCd ,  (String)getProperty("atch.path"), "temp" );
        String downloadTempPath = (String)getProperty("atch.temp.path");
        FileSupport.ftpfileDnForLocal(response, filePath, orgFileName, downloadTempPath);
    	
    }

    /**
    * @fn : dnSampleFile
    * @brief : 샘플 파일 다운로드
    * @Method Name : dnSampleFile
    * @Create Date: 2015. 5. 26. 오후 4:17:15
    * @Author: JIn Sung Ha
    * @param: 업무시스템코드, 저장된 파일명, 받고자 하는 파일명
    * @return: void
    * @throws : Exception
    */
    @RequestMapping(value = "dnSampleFile/{jobSysCd}/{fileName}/{orgFileName}.do")
    public void dnSampleFile(@PathVariable("fileName") String fileName, @PathVariable("jobSysCd") String jobSysCd,  @PathVariable("orgFileName") String orgFileName,
        HttpServletResponse response)  throws Exception {
        String filePath = "/app/attach/SAMPLE/"+ jobSysCd +"/"+ fileName;
        FileSupport.fileDnForLocal(response, filePath, orgFileName);
    }

    /**
    * @fn : deleteFile
    * @brief : 파일 삭제 (파라미터 값이 deleteDb 인경우 DB삭제 후 파일 삭제)
    * @Method Name : deleteFile
    * @remark
    * @Create Date: 2021. 3. 30. 오전 10:04:25
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
    @RequestMapping(value = "deleteFile.do")
    public View deleteFile(UiMapDto dto, Model model)  throws Exception {

        String param = (String) dto.getVariable("param");
        String jobSysCd = (String) dto.getVariable("jobSysCd");

        boolean flag = false;

        flag = service.deleteFile(dto, "");
        if(param != null && param.equals("deleteDb")){
            
        	//if(jobSysCd != null && jobSysCd.equals("STM")){
            //flag = service.deleteFile(dto, "STM");
            //}else{
                flag = service.deleteFile(dto, "");
            //}
        }else{
            /* 서버에 올려져 있는 실제 파일만 삭제하는 경우*/
            //FileSupport.deleteFile(dto);
            FileSupport.ftpDeleteFile(dto);
        }
        /* DB정보 삭제 + 서버에 올려져 있는 실제 파일 삭제 */
        if(flag){
            //FileSupport.deleteFile(dto);
            FileSupport.ftpDeleteFile(dto);
        }
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectAtchFileGuid.do")
    public View selectAtchFileGuid(UiMapDto dto, Model model)  throws Exception {
    	service.selectAtchFileGuid2(dto);
    	return apply(dto, model);
    }

    /**
    * @fn : dnHlpImg
    * @brief : 파일 다운로드 요청시 호출
    * @Method Name : dnHlpImg
    * @remark
    * @Create Date: 2021. 3. 26. 오후 1:19:43
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
    /*
    @RequestMapping(value = "dnHlpImg/{fullSaveCours}/{orgFileName}.do")
    public void dnHlpImg(@PathVariable("fullSaveCours") String fullSaveCours, @PathVariable("orgFileName") String orgFileName,
        HttpServletResponse response)  throws Exception {
        String filePath = "/data/upload/"+ fullSaveCours ;
        FileSupport.fileDnForLocal(response, filePath, orgFileName);
    }
    @RequestMapping(value = "dnHlpImg/{uuid}/{fileName}/{ext}.do")
    public void dnHlpImg(@PathVariable("uuid") String uuid, @PathVariable("fileName") String fileName, @PathVariable("ext") String ext,
        HttpServletResponse response)  throws Exception {
        String filePath = "/data/upload/hlpImg/"+ uuid +"/"+ fileName + "."+ ext;
        logger.error("filePath-->"+filePath);
        FileSupport.fileDnForLocal(response, filePath, "temp."+ext);
    }
	*/
    @RequestMapping(value = "dnHlpImg/{yymm}/{fileName}/{ext}.do")
    public void dnHlpImg(@PathVariable("yymm") String yymm, @PathVariable("fileName") String fileName, @PathVariable("ext") String ext,
        HttpServletResponse response)  throws Exception {
        
    	fileName = URLDecoder.decode(fileName, "UTF-8"); 
    	logger.error("fileName-->"+fileName);
    	String fullSaveCours = (String)getProperty("atch.path")+"HELP/"+yymm+"/" + fileName + "."+ ext;
        String downloadTempPath = (String)getProperty("atch.temp.path");
        int result = FileSupport.ftpfileDnForLocal(response, fullSaveCours, "temp."+ext, downloadTempPath);
        if(result < 0){
            throw new BizException("[" + fullSaveCours+ "] 파일이 존재 하지 않습니다.");
        }
        
    }
    
    /**
    * @fn : downFile
    * @brief : 파일 다운로드 요청시 호출(FILE_GUID)
    * @Method Name : downFile
    * @remark
    * @Create Date: 2021. 3. 26. 오후 1:19:43
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
    @RequestMapping(value = "downImage/{atchFileGuid}.do")
    public void downImage(@PathVariable("atchFileGuid") String atchFileGuid, HttpServletResponse response)  throws Exception {

        int result = 0;
        List <Map<String, Object>> list;

        list = service.selectAtchFileDn(atchFileGuid, "");
        result = service.updateAtchFileDnCnt(atchFileGuid, "");

        if( list.size() == 0 || result == 0 )
            throw new BizException("조회결과가 없습니다.");

        String fullSaveCours = FileSupport.getFileInfoForList(list, "FULL_SAVE_COURS");
        String ocFileNm = FileSupport.getFileInfoForList(list, "OC_FILE_NM");
        FileSupport.fileDnForLocalImage(response, fullSaveCours, ocFileNm);

    }    
    
    /**
    * @fn : downFIleFullSaveCours
    * @brief : 파일 다운로드 요청시 호출(FILE_path)
    * @Method Name : downFIleFullSaveCours
    * @remark
    * @Create Date: 2021. 3. 26. 오후 1:19:43
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 26.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "downFIleFullSaveCours.do")
    public void downFIleFullSaveCours(HttpServletRequest request, HttpServletResponse response)  throws Exception {
    	String fullSaveCours = request.getParameter("fullSaveCours");
    	String orgFileName = fullSaveCours.substring(fullSaveCours.lastIndexOf("/")+1);
        FileSupport.fileDnForLocal(response, fullSaveCours, orgFileName);
    }
}
