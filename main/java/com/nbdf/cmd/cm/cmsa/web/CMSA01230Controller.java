package com.nbdf.cmd.cm.cmsa.web;

import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmfm.web.FileSupport;
import com.nbdf.cmd.cm.cmsa.service.CMSA01230Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;

/**
* @file: CMSA01230Controller.java
* @Package: com.nbdf.cmd.cm.cmsa.web  
* @Project name: IFC MES시스템 재구축
* @Type name: CMSA01230Controller    
* @Company: Built1
* @Create Date: 2018 2018. 6. 22. 오후 1:32:37 
* @Author: Kang Jeong Gi
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 6. 22.        Kang Jeong Gi     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsa01230/")
public class CMSA01230Controller extends AbstractWebController {

    @Autowired
    private CMSA01230Service service;

    /**
    * @fn : selectAtchFileList
    * @brief : 파일 업로드/다운로드 - 자료 조회 
    * @Method Name : selectAtchFileList
    * @remark
    * @Create Date: 2018 2018. 6. 22. 오후 1:32:29 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 22.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "selectAtchFileList")
    public View selectAtchFileList(UiMapDto dto, Model model) throws Exception {
        service.selectAtchFileList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : deleteFile
    * @brief : 파일 업로드/다운로드 - 상세/헤더 삭제 
    * @Method Name : deleteFile
    * @remark
    * @Create Date: 2018 2018. 6. 22. 오후 4:37:00 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 22.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "deleteAtchFile")
    public View deleteAtchFile(UiMapDto dto, Model model) throws Exception {
        service.deleteAtchFile(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveAtchFiles
    * @brief : 첨부파일 정보 저장 - 헤더/상세 
    * @Method Name : saveAtchFiles
    * @remark
    * @Create Date: 2018 2018. 6. 25. 오전 9:54:51 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 25.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "saveAtchFiles")
    public View saveAtchFiles(UiMapDto dto, Model model) throws Exception {
        service.saveAtchFiles(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : uploadFile
    * @brief : 파일 업로드 
    * @Method Name : uploadFile
    * @remark
    * @Create Date: 2018 2018. 6. 25. 오후 2:12:37 
    * @Author: Kang Jeong Gi
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 6. 25.        Kang Jeong Gi     최초  생성
     *
    */
    @RequestMapping(value = "/uploadFile/{jobSysCd}/{subDir}.do")
    public void uploadFile( @PathVariable("jobSysCd") String jobSysCd,  @PathVariable("subDir") String subDir,  MultipartHttpServletRequest request,
            HttpServletResponse response) throws Exception{

        String msg            = "";
        String uploadTempPath = (String)getProperty("atch.temp.path");
        String uploadPath     = FileSupport.getUploadPath(jobSysCd, (String)getProperty("atch.path"), subDir);

        boolean applyDrm      = false;
        boolean flag          = false;

        FileSupport.makeDir(uploadTempPath);
        PlatformData resData    = new PlatformData();
        VariableList resVarList = resData.getVariableList();

        Map<String, MultipartFile> files = request.getFileMap();
        Iterator<MultipartFile> iter     = files.values().iterator();

        DataSet ds = FileSupport.createFileDataSet();

        while (iter.hasNext()) {
            MultipartFile file =  iter.next();
            if( file.getSize()  > 0) {     
            	// 파일 업로드/다운로드 - 상세정보 ATCH_FILE_GUID sequence 채번
                String uuid = service.selectAtchFileGuidID();
                msg = FileSupport.isLimitCheck(file, (String) getProperty("drm.file.includes"), Long.parseLong(getProperty("file.limitSize")));

                if(msg.equals("success")){
                    String ext = FilenameUtils.getExtension(file.getOriginalFilename()).toLowerCase();
                    if(!"".equals(ext))uuid = uuid + "." + ext;                    
                    FileSupport.setFileInfo(file, ds, uploadPath, jobSysCd,uuid, applyDrm);
                    /* (1) 임시 TEMP 디렉토리에 파일을 생성*/
                    if(FileSupport.transferFileForTemp(file, uploadTempPath, uuid)) {
                        /* (2) 임시 TEMP 디렉토리에 파일이 생성되면 실제 경로에 파일을 복사 */
                    	//if( FileSupport.transferFile(uploadTempPath, uploadPath, uuid) ) {
                    	if( FileSupport.ftptransferFile(uploadTempPath, uploadPath, uuid) ) {
                                    flag = true;
                        }
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
}