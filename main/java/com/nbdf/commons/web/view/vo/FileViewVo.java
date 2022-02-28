package com.nbdf.commons.web.view.vo;

import java.io.File;

/**
 * @Class FileViewVo
 * @Description FileViewVo 클래스
 * @Modification
 *
 * @author
 * @version 1.0
 * @see
 */

@SuppressWarnings("serial")
public class FileViewVo extends AbstractViewVo {

    /**
     * 컨텐트 타입
     */
    private String contentType = null;

    /**
     * 파일종류 <br/>
     */
    private String fileExtension = null;

    /**
     * 파일 경로
     */
    private String filePath = null;

    /**
     * 파일 사이즈
     */
    private Long size = 0L;

    /**
     * 필수
     */
    private File file = null;

    /**
     * 컨텐트 타입 가져오기
     *
     * @return contentType
     */
    public String getContentType() {
        return contentType;
    }

    /**
     * 컨텐트 타입 설정하기
     *
     * @param contentType
     */
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    /**
     * @return the fileExtension 파일_종류 <br/>
     */
    public String getFileExtension() {
        return fileExtension;
    }

    /**
     * @param fileExtension
     *            the fileExtension to set
     */
    public void setFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
    }

    /**
     * @return the filePath
     */
    public String getFilePath() {
        return filePath;
    }

    /**
     * @param filePath
     *            the filePath to set
     */
    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    /**
     * @return the fileName
     */
    public String getFileName() {
        return fileName;
    }

    /**
     * @param fileName
     *            the fileName to set
     */
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    /**
     * 사이즈 가져오기
     *
     * @return
     */
    public Long getSize() {
        return size;
    }

    /**
     * 사이즈 설정하기
     *
     * @param size
     */
    public void setSize(Long size) {
        this.size = size;
    }

    /**
     * @return 파일
     */
    public File getFile() {
        return file;
    }

    /**
     * 파일 설정하기
     *
     * @param file
     */
    public void setFile(File file) {
        this.file = file;
    }

    /**
     * 파일 삭제하기
     */
   /* public void delete() throws Exception{
         if (fileName == null || "".equals(fileName)) {
                return;
         }
        File file = new File(fileName);
        if (file.exists()) {
            file.delete();
        }
    }*/

}
