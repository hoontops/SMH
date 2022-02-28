package com.nbdf.commons.web.view.vo;

import com.nbdf.commons.vo.BaseVo;

/**
 * @Class AbstractViewVo
 * @Description AbstractViewVo 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
@SuppressWarnings("serial")
public abstract class AbstractViewVo extends BaseVo {

    /**
     * 데이터. <br />
     * 필수
     */
    protected Object entries;

    /**
     * 파일명. <br />
     */
    protected String fileName;

    /**
     * View 에 들어갈 정보 entries 객체 가져오기
     * 
     * @return
     */
    public Object getEntries() {
        return entries;
    }

    /**
     * View 에 들어갈 정보 entries 객체 설정하기
     * 
     * @param entries
     */
    public void setEntries(Object entries) {
        this.entries = entries;
    }

    /**
     * 파일명 가져오기
     * 
     * @return
     */
    public String getFileName() {
        return fileName;
    }

    /**
     * 파일명 설정하기
     * 
     * @param fileName
     */
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

}
