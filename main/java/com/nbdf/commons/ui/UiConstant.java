package com.nbdf.commons.ui;

/**
 * @Class UiConstant
 * @Description UI 에서 사용하는 키
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
public class UiConstant {

    /**
     * 메타데이터 코드
     */
    public static final String ONLY_METADATA_RETURN = "ONLY_METADATA_RETURN";

    /**
     * Nexacro 결과 코드
     */
    public static final String RESULT_CODE = "ResultCode";

    /**
     * Nexacro 응답 코드 (>= 0 성공 , < 0 오류)
     */
    public static final String ERROR_CODE = "ErrorCode";

    /**
     * Nexacro 오류 메시지
     */
    public static final String ERROR_MSG = "ErrorMsg";

    /**
     * out variables의 object 이름 {@value}
     */
    public static final String OUT_VARIABLES_ATT_NAME = "outVariables";

    /**
     * out DataSet의 object 이름 {@value}
     */
    public static final String OUT_DATASET_ATT_NAME = "outDataSets";

    /**
     * out DataSet의 object 이름 {@value}
     */
    public static final String OUT_DATASET_TYPE = "__DataSetType__";

    /**
     * Nexacro과 transaction시 기본 정보를 담은 Dataset 이름 {@value}
     */
    public static final String TRAN_INFO_DATASET_NAME = "__DS_TRANS_INFO__";

    /**
     * Nexacro Parameter 기본 정보를 담은 Dataset 이름 {@value}
     */
    public final static String PARAM_INFO_DATASET_NAME = "__DS_PARAM_INFO__";

    /**
     * in DataSet의 object 이름 {@value}
     */
    public static final String TX_IN_DATASET_ATTR_NAME = "strInDatasets";

    /**
     * in DataSet의 object 이름 {@value}
     */
    public static final String TX_OUT_DATASET_ATTR_NAME = "strOutDatasets";

    /**
     * in DataSet의 object 의 default 이름 {@value}
     */
    public static final String TX_OUT_DATASET_DEF_NAME = "outDs";

    /**
     * row type을 저장하기 위한 Key value
     */
    public static final String DATASET_ROW_TYPE = "ROW_TYPE";

    /**
     * Global User Info DataSet Name
     */
    public static final String SESSION_USER_DATASET_NAME = "gds_userInfo";

    /**
     * Global Paging Info DataSet Name {@value}
     */
    public static final String PAGING_DATASET_NAME = "gds_pageInfo";

    /**
     * Global Paging Info Map Name
     */
    public static final String PAGING_MAP_NAME = "PAGE";

    /**
     * Global User Info Map Name {@value}
     */
    public static final String SESSION_USER_MAP_NAME = "USER";

}
