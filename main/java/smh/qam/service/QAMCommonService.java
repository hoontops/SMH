package smh.qam.service;

import java.util.Date;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAMCommonService.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMCommonService
* @Company     : Built1
* @Create Date : 2021.03.22
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.22  yanghee.kim    최초  생성
*
*/
public interface QAMCommonService {

    /**
    * @fn          : selectAffectLotSequence
    * @brief       : affectLot Sequenct 조회
    * @Method Name : selectAffectLotSequence
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  권혜영    최초  생성
    *
    */
	public int selectAffectLotSequence(Map<String,Object> param) throws Exception ;

	/**
	* @fn : selectSequence
	* @brief : 채번 조회
	* @Method Name : selectSequence
	* @remark
	* @Create Date: 2021.04.27
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.27.       권혜영     최초  생성
	*
	*/
	public int selectSequence(String idclassid, Object... keys) throws Exception;
	
	/**
	* @fn : createSequence
	* @brief : 채번 생성 조회 (자리수 포함)
	* @Method Name : createSequence
	* @remark
	* @Create Date: 2021.04.27
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.27.       권혜영     최초  생성
	*
	*/
	public String createSequence(String idclassid, int n, Object... keys) throws Exception;
	
	/**
	* @fn : createSequence
	* @brief : 채번 생성 조회 (자리수 : 5)
	* @Method Name : createSequence
	* @remark
	* @Create Date: 2021.04.27
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.27.       권혜영     최초  생성
	*
	*/
	public String createSequence(String idclassid, Object... keys) throws Exception;

    /**
    * @fn          : getActionType
    * @brief       : 검사에서 qcGrade를 파라미터로 받아 Action을 구한다. 원자재, 원자재 가공품, 공정수입, 출하
    * @Method Name : getActionType
    * @remark
    * @Create Date : 2021.04.27
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.27  yanghee.kim    최초  생성
    *
    */	
	public String getActionType(String enterpriseId, String plantId, String qcGrade) throws Exception;

    /**
    * @fn          : doActionAndGetIsSendEmailShipmentInspection
    * @brief       : 검사에서 qcGrade를 파라미터로 받아 Action을 구한다. 원자재, 원자재 가공품, 공정수입, 출하
    * @Method Name : doActionAndGetIsSendEmailShipmentInspection
    * @remark      : asis ==> DoActionAndGetIsSendEmailShipmentInspection
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim    최초  생성
    *
    */
	public Boolean doActionAndGetIsSendEmailShipmentInspection(String actionType, Map<String, Object> paramMap, Map<String, Object> lot, String lotId, String abnocrType, String enterpriseId, String plantId, Map<String, Object> dataMap) throws Exception;

    /**
    * @fn          : insertAbnormalOccurrenceShipmentInspAuto
    * @brief       : 이상발생 저장 - 출하검사 - 자동 car발행
    * @Method Name : insertAbnormalOccurrenceShipmentInspAuto
    * @remark      : asis ==> insertAbnormalOccurrenceShipmentInspAuto
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim    최초  생성
    *
    */
	public String insertAbnormalOccurrenceShipmentInspAuto(Map<String, Object> paramMap, Map<String, Object> dataMap, Map<String, Object>lot, String abnormalType) throws Exception;

    /**
    * @fn          : saveCARRequestAuto
    * @brief       : 이상발생 저장 - 출하검사 - 자동 car발행
    * @Method Name : saveCARRequestAuto
    * @remark      : asis ==> insertAbnormalOccurrenceShipmentInspAuto
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim    최초  생성
    *
    */
	public void saveCARRequestAuto(Map<String, Object> paramMap) throws Exception;

    /**
    * @fn          : getAbnormalNO
    * @brief       : 이상발생번호
    * @Method Name : getAbnormalNO
    * @remark      : asis ==> GetAbnormalNO
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim    최초  생성
    *
    */
	public String getAbnormalNO() throws Exception;

    /**
    * @fn          : createAbnormalNO
    * @brief       : 이상발생번호 채번 :오늘날짜(yyyyMMdd) + Serial
    * @Method Name : createAbnormalNO
    * @remark      : asis ==> CreateAbnormalNO
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim    최초  생성
    *
    */
	public String createAbnormalNO() throws Exception;

    /**
    * @fn          : getCurrentSystemTime
    * @brief       : 서버의 현재시간조회
    * @Method Name : getCurrentSystemTime
    * @remark
    * @Create Date : 2021.04.27
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.27  yanghee.kim    최초  생성
    *
    */
	public Date getCurrentSystemTime(String strDateFormat) throws Exception;
	
    /**
    * @fn          : getLotIsOSPInspControl
    * @brief       : LOT의 작업자원정보의 외주검사여부
    * @Method Name : getLotIsOSPInspControl
    * @remark
    * @Create Date : 2021.05.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.15  yanghee.kim    최초  생성
    *
    */
	public String getLotIsOSPInspControl(String lotId) throws Exception;


	
	
	
	// ------------------------------------------------------------
	// [권혜영] 추가 함수
	// ------------------------------------------------------------
	
	/**
	* @fn : getActionTypeByDecisionDegree
	* @brief : 약품, 풀질 규격, 신뢰성 검사에서 decisionDegree로  qcGrade를 구한 후 actionType을 구한다. 
	* @Method Name : getActionTypeByDecisionDegree
	* @remark
	* @Create Date: 2021.05.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.01.       권혜영     최초  생성
	*
	*/
	public String getActionTypeByDecisionDegree(Map<String, Object> map, String inspectionClassId, String enterpriseId, String plantId, String decisionDegree) throws Exception;
	
	/**
	* @fn : getQCGradeByDecisionDegree
	* @brief : decisionDegree를 넘겨받아 qcGrade를 구한다. 
	* @Method Name : getActionTypeByDecisionDegree
	* @remark
	* @Create Date: 2021.05.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.01.       권혜영     최초  생성
	*
	*/
	public String getQCGradeByDecisionDegree(Map<String, Object> map, String enterpriseId, String plantId, String inspectionClassId, String decisionDegree) throws Exception;
	
	/**
	* @fn : doActionAndGetIsSendEmail
	* @brief : ActionType에 따른 action을 취한다. Lot이 없는경우 lotId 파라미터 =>boolean만 return
	* @Method Name : doActionAndGetIsSendEmail
	* @remark
	* @Create Date: 2021.05.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.01.       권혜영     최초  생성
	*
	*/
	public boolean  doActionAndGetIsSendEmail(String actionType, Map<String, Object> map, String lotId, String abnocrType, String enterpriseId, String plantId, String inspDegree) throws Exception;
	
	/**
	* @fn : doActionAndGetIsSendEmail
	* @brief : ActionType에 따른 action을 취한다. Lot이 없는경우 lotId 파라미터 => null 
	* @Method Name : doActionAndGetIsSendEmail
	* @remark
	* @Create Date: 2021.05.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.01.       권혜영     최초  생성
	*
	*/
	public Map<String, Object>  doActionAndGetIsSendEmail(Map<String, Object> map, String actionType, String lotId, String abnocrType, String enterpriseId, String plantId, String inspDegree, Boolean isAbnorNo) throws Exception;
	
	/**
	* @fn : CreateQcReliablityRequest (AS-IS : QcReliablityRequestCreate)
	* @brief : 신뢰성 의뢰(정기) 처리  조회
	* @Method Name : CreateQcReliablityRequest
	* @remark
	* 	 isType이 true이면 화면, false 이면 설비, 화면이면 작업장 권한 체크 설비이면 작업장 권한 체크 하지 않음
	* @Create Date: 2021.05.02
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.02.       권혜영     최초  생성
	*
	*/
	public void createQcReliablityRequest(UiMapDto dto, String strEnterpriseid ,String strPlantid ,String strLotid        ,String strOspreceiptuser , boolean isType) throws Exception;
	
	
	/**
	* @fn : getReasonCode (AS-IS : GetReasonCode)
	* @brief : 중공정 혹은 대공정에 따른 품질규격 이상발생 사유코드 설정 함수
	* @Method Name : getReasonCode
	* @remark
	* @Create Date: 2021.05.10
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.10.       권혜영     최초  생성
	*
	*/
	public String getReasonCode(Object segmentId, Object segmentVersion);
}