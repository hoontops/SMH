package com.nbdf.commons.web.view.vo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @Class ExcelViewVo
 * @Description ExcelViewVo 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
@SuppressWarnings("serial")
public class ExcelViewVo extends AbstractViewVo {

    private static final String TIMESTAMP_PATTERN = "yyyyMMddHHmmss";

    /**
     * 시트명. <br />
     * 기본 값은 Sheet1
     */
    private String sheetName;

    /**
     * 엑셀에 출력할 제목 (한글). <br />
     * 기본 값은 modelKey를 가져와 사용함.
     */
    private List<String> headers;

    /**
     * 엑셀 데이터를 가져올 키 (영문) <br />
     * 필수
     */
    private List<String> modelKey;

    /**
     * 기본 값은 NONAME-{yyyyMMddHHmmss}.xls
     * 
     * @return
     */
    public String getFileName() {
        if (fileName == null) {
            fileName = "NONAME-" + new SimpleDateFormat(TIMESTAMP_PATTERN).format(new Date()) + ".xls";
        }
        return fileName;
    }

    /**
     * 시트명 가져오기
     * 
     * @return
     */
    public String getSheetName() {
        if (sheetName == null) {
            sheetName = "Sheet1";
        }
        return sheetName;
    }

    /**
     * 시트명 설정하기
     * 
     * @param sheetName
     */
    public void setSheetName(String sheetName) {
        this.sheetName = sheetName;
    }

    /**
     * 헤더명 가져오기
     * 
     * @return
     */
    public List<String> getHeaders() {
        if (headers == null) {
            headers = modelKey;
        }
        return headers;
    }

    /**
     * 헤더명 설정하기
     * 
     * @param headers
     */
    public void setHeaders(List<String> headers) {
        this.headers = headers;
    }

    /**
     * 모델키 가져오기
     * 
     * @return
     */
    public List<String> getModelKey() {
        return modelKey;
    }

    /**
     * 모델키 설정하기
     * 
     * @param modelKey
     */
    public void setModelKey(List<String> modelKey) {
        this.modelKey = modelKey;
    }

}
