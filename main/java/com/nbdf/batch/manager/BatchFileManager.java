package com.nbdf.batch.manager;

import com.nbdf.cmd.cm.cmfm.web.FileSupport;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BatchFileManager {
    private static Logger logger = LoggerFactory.getLogger(BatchFileManager.class);

    public static boolean removeAttachFiles(List<Map<String, Object>>  fileList){
        logger.debug("파일 삭제 처리 완료");

        String filePathAndName;
        for(Map<String, Object> fileMap : fileList) {
            filePathAndName = (String) fileMap.get("FULL_SAVE_COURS");
            FileSupport.removeFile(filePathAndName);
        }
        return true;
    }

}