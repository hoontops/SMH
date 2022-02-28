package com.nbdf.commons.web.view;

import com.nbdf.commons.web.view.vo.FileViewVo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.FileCopyUtils;

/**
 * @Class FileDownloadView
 * @Description 파일 다운로드 뷰 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
public class FileDownloadView extends AbstractBaseView {

    private String tmpDir;

    /**
     * 기본 생성자
     */
    public FileDownloadView() {
    	super();
        setContentType("application/octet-stream");
    }

    /**
     * Subclasses must implement this method to actually render the view.
     * <p>
     * The first step will be preparing the request: In the JSP case, this would mean setting model objects as request attributes. The second step will be the actual rendering of
     * the view, for example including the JSP via a RequestDispatcher.
     * 
     * @param model
     *            combined output Map (never {@code null}), with dynamic values taking precedence over static attributes
     * @param request
     *            current HTTP request
     * @param response
     *            current HTTP response
     * @throws Exception
     *             if rendering failed
     */
    @Override
    protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        FileViewVo fileViewVo = (FileViewVo) getModel(model, modelKey);
        String fileName = fileViewVo.getFileName();
        File file = fileViewVo.getFile();
        if (file == null || !file.exists() || !file.canRead()) {
            file = createEmptyFile(fileName);
        }
        if (file != null && fileName == null) {
            fileName = file.getName();
        }
        logger.debug("file <{}>, readable <{}>", file, file != null && file.canRead());

        // 파일이름 인코딩 변환
        String header = request.getHeader("User-Agent");
        if (header.indexOf("MSIE") != -1 || header.indexOf("Trident") != -1) {
            fileName = URLEncoder.encode(fileName, "UTF-8");
        } else {
            fileName = new String(fileName.getBytes("utf-8"), "iso-8859-1");
        }

        response.reset();
        response.setContentType("application/x-msdownload");
        response.setHeader("Content-Type", "application/octet-stream;charset=UTF-8");
        response.setHeader("Content-Disposition", "attachment;filename=" + fileName + ";");
        response.setHeader("Content-Transfer-Encoding", "binary");
        response.setHeader("Content-Length", String.valueOf(file.length()));
        response.setHeader("Pragma", "no-cache;");
        response.setHeader("Expires", "-1;");

        try (InputStream in = new FileInputStream(file); OutputStream out = response.getOutputStream();) {
            FileCopyUtils.copy(in, out);
        } catch (IOException e) {
            logger.error("Exception <{}>", e.getMessage(), e);
        }
    }

    private File createEmptyFile(String fileName) {
        if (fileName == null || "".equals(fileName)) {
            fileName = "FILE_NOT_FOUND";
        }

        File file = new File(tmpDir, fileName + ".txt");
        try (FileWriter out = new FileWriter(file);) {
            out.write("File Not Found [" + fileName + "]");
            out.close();
        } catch (IOException e) {
            logger.error("{}", e.getMessage(), e);
        }

        return file;
    }

}
