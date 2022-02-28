package smh.qam.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAMInspRsltAndItemRsltService.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMInspRsltAndItemRsltService
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
public interface QAMInspectionResultService {

    /**
    * @fn          : saveInspectionResult
    * @brief       : qam_inspectionResult 에 검사 결과 저장
    * @Method Name :
    * @remark      : asis ==> upsertInspectionResult
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim   최초  생성
    *
    */
    public String saveInspectionResult(Map<String, Object> param, String resourceType, String txnGroupHistKey) throws Exception;

    /**
    * @fn          : saveInspectionItemResult
    * @brief       : qam_inspectionItemResult 에 검사 결과 저장
    * @Method Name :
    * @remark      : asis ==> upsertInspectionItemResult
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim   최초  생성
    *
    */
    public String saveInspectionItemResult(DataSetMap dsList, String resourceId, String resourcetype, String degree, String txnGroupHistKey, Boolean hasImage, String inspType) throws Exception;

    /**
    * @fn          : saveInspectionItemResultMeasure
    * @brief       : qam_inspectionItemResult 에 검사 결과 저장
    * @Method Name :
    * @remark      : asis ==> upsertInspectionItemResultMeasure
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public Map<String, String> saveInspectionItemResultMeasure(DataSetMap dsList, String resourceId, String resourcetype, String degree, String txnGroupHistKey, Boolean hasImage, String inspType) throws Exception;

/*checkpoint 미구현
 *
 */
/*
    public ISQLUpsertBatch insertAbnormalOccurrence(IDataRow row, ISQLUpsertBatch batch, String abnormalNO, String abnormalType, String degree) throws Exception;

    public ISQLUpsertBatch insertAbnormalOccurrence(IDataRow row, LotData ld, ISQLUpsertBatch batch, String abnormalNO, String abnormalType, String degree) throws Exception;
*/
    /**
    * @fn          : saveInspectionDefect
    * @brief       : qam_inspectionDefect 저장
    * @Method Name :
    * @remark      : asis ==> upsertInspectionDefect
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public String saveInspectionDefect(DataSetMap dsList, String resourceId, String processRelNo, String resourcetype, String degree, String txnGroupHistKey, Boolean hasImage, String inspectionQty, String type) throws Exception;

    /**
    * @fn          : saveInspectionDefectAndNCR
    * @brief       : 검사 불량정보 저장 , NCR 발행 (INTERFLEX) 자동발행  ///ShipemntInspection 전용
    * @Method Name :
    * @remark      : asis ==> upsertInspectionDefectAndNCR
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public List<Map<String, Object>> saveInspectionDefectAndNCR(DataSetMap dsList, Map<String, Object> lotParam, String lotId, String processRelNo, String resourcetype, String abnormalType, Map<String, String> param, Map<String, Object> dataParam, String txnGroupHistKey, List<Map<String, Object>> responseDt, Boolean hasImage) throws Exception;

    /**
    * @fn          : saveInspectionDefectDisposal
    * @brief       : 검사 불량정보 저장 , 출하검사 / 불량 처리
    * @Method Name :
    * @remark      : asis ==> upsertInspectionDefectDisposal
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void saveInspectionDefectDisposal(DataSetMap dsList, String lotId, String processRelNo, String resourcetype, Map<String, String> param, String txnGroupHistKey, Boolean hasImage) throws Exception;

    /**
    * @fn          : saveInspectionResultWithLotData
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> upsertInspectionResultWithLotData
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void saveInspectionResultWithLotData(Map<String, Object> param, Map<String, Object> ld, String resourceType
            , String groupTxnHistKey, String inspector, String transitAreaId
            , String prevAreaId, String inspectionDate, String inspectionDefId
            , String aqlOrNcr, String degree) throws Exception;
/*checkpoint 미구현
 *
 */
/*
    public ISQLUpsertBatch upsertNCRIssue(IDataTable dt, ISQLUpsertBatch batch) throws InValidDataException, MESException, SystemException, UnsupportedEncodingException
*/

    /**
    * @fn          : saveItemRsltAndImgSeparate
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> saveItemRsltAndImgSeparate
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public Map<String, String> saveItemRsltAndImgSeparate(DataSetMap dsList, DataSetMap ImgList, String resourceId, String resourcetype, String degree, String txnGroupHistKey) throws Exception;

    /**
    * @fn          : saveLotDefectMultiLot
    * @brief       : 공정 4-Step 작업 처리 중 발생한 불량 정보를 저장 한다.
    * @Method Name :
    * @remark      : asis ==> SaveLotDefectMultiLot
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void saveLotDefectMultiLot(Map<String, Object> lotParam, DataSetMap dsList, String transitType, String LotId, String txnGroupHistKey) throws Exception;

    /**
    * @fn          : insertLotDefect
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> SaveLotDefectImpl
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void insertLotDefect(Map<String, Object> lotParam, Map<String, Object> defectParam, String transitType, String txnGroupHistKey) throws Exception;

    /**
    * @fn          : insertLotDefect
    * @brief       : bas_inspectionItemResult 에 검사 결과 저장
    * @Method Name :
    * @remark      : asis ==> GetProcessDefinitionInfoImpl
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public Map<String, Object> getProcessDefinitionInfo(Map<String, Object> lotParam) throws Exception;

    /**
    * @fn          : getProcessPathId
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> GetProcessPathIdImpl
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public String getProcessPathId(Map<String, Object> lotParam, String processDefId, String processDefVersion) throws Exception;

    /**
    * @fn          : insertAbnormalOccurrenceShipmentInspAuto
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> insertAbnormalOccurrenceShipmentInspAuto
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void insertAbnormalOccurrenceShipmentInspAuto(Map<String, Object> param, Map<String, Object> dataParam , Map<String, Object> lotParam, String abnormalType) throws Exception;

    /**
    * @fn          : saveNCRIssue
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> upsertNCRIssue
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void saveNCRIssue(DataSetMap dsList, Map<String, Object> lotParam, String abnormalType, String areaId, String processSegmentId, String processSegmentVersion, String userSequence) throws Exception;

    /**
    * @fn          : insertNCRAbnormalOccurrence
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> insertNCRAbnormalOccurrence
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void insertNCRAbnormalOccurrence(Map<String, Object> param, Map<String, Object> lotParam, String abnormalType, String areaId, String processSegmentId, String processSegmentVersion, String userSequence) throws Exception;

    /**
    * @fn          : updateNCRAbnormalOccurrence
    * @brief       :
    * @Method Name :
    * @remark      : asis ==> updateNCRAbnormalOccurrence
    * @Create Date : 2021.05.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.01  yanghee.kim   최초  생성
    *
    */
    public void updateNCRAbnormalOccurrence(Map<String, Object> param) throws Exception;
}