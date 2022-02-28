package com.nbdf.commons.web;

/**
 * @Class AttributeKey
 * @Description Web 및 Controller 에서 사용할 키를 정의하세요. <br />
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
public class AttributeKey {

    /**
     * 요청 정보 {@value}
     */
    public static final String REQUEST_CONTEXT = "_RequestContext";

    /**
     * 사용자 세션 정보 {@value}
     */
    public static final String SESSION = "userSession";

    /**
     * 에러 메시지 {@value}
     */
    public static final String ERROR_MESSAGE = "errorMessage";

    /**
     * 결과 {@value}
     */
    public static final String RESULT = "result";

    /**
     * 결과 리스트 {@value}
     */
    public static final String RESULT_LIST = "resultList";

    /**
     * binding result of the validation {@value}
     */
    public static final String BINDING_RESULT = "org.springframework.validation.BindingResult";

    /**
     * 페이징 정보 {@value}
     */
    public static final String PAGINATION_INFO = "paginationInfo";

    /**
     * 파일 메타정보 {@value}
     */
    public static final String FILE_METADATA = "result";

    /**
     * 업로드된 파일명 {@value}
     */
    public static final String UPLOAD_FILE_NAME = "uploadFileName";

    /**
     * 다운로드 파일명 {@value}
     */
    public static final String DOWNLOAD_FILE_NAME = "download_file_name";

    /**
     * 엑셀뷰 {@value}
     */
    public static final String EXCEL_VIEW = "excel_view";

    /**
     * 엑셀 파일 확장자 {@value}
     */
    public static final String EXCEL_EXTENSION = ".xls";

    /**
     * 엑셀 결과 {@value}
     */
    public static final String MODEL_RESULT = "result";

    /**
     * 엑셀 엔트리 {@value}
     */
    public static final String EXCEL_ENTRIES = "excel_entries";

    /**
     * xml view {@value}
     */
    public static final String XML_VIEW = "xmlView";

    /**
     * 파일 업로드 원 파일명 {@value}
     */
    public static final String ORIGIN_FILE_NM = "originalFileName";

    /**
     * 파일 확장자 {@value}
     */
    public static final String FILE_EXT = "fileExtension";

    /**
     * 파일크기 {@value}
     */
    public static final String FILE_SIZE = "fileSize";

    /**
     * 파일경로 {@value}
     */
    public static final String FILE_PATH = "filePath";

    /**
     * 메인 uri {@value}
     */
    public static final String MAIN_URI = "/main.do";

}
