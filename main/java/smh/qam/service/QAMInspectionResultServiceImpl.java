package smh.qam.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;

/**
* @file        : QAMInspRsltAndItemRsltServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMInspRsltAndItemRsltServiceImpl
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
@Service
public class QAMInspectionResultServiceImpl extends AbstractNbdfService implements QAMInspectionResultService
{
    public static final String NAMESPACE = "smh.qam.dao.QAMInspectionResultDao";
    public static final String NAMEQAMCOM = "smh.qam.dao.QAMCommonDao";

    @Autowired
    private GeneralDao generalDao;
    @Autowired
    private QAMCommonService qamService;

    // 이상발생 시퀀스
    String Sequence;

    /**
    * @fn          : saveInspectionResult
    * @brief       : (Override method) QAM_INSPECTIONRESLUT 저장
    * @Method Name : updateResult
    * @remark      : asis ==> upsertInspectionResult
    * @see
    */
    public String saveInspectionResult(Map<String, Object> param, String resourceType, String txnGroupHistKey) throws Exception
    {
        String state = null;
        String txnHistKey = "";
        state = (String) param.get("STATE");

        if("added".equals(state))
        {
            txnHistKey = insertResult(param, resourceType, txnGroupHistKey);
        }
        else if("modified".equals(state))
        {
            updateResult(param, resourceType);
        }

        return txnHistKey;
    }

    /**
    * @fn          : insertResult
    * @brief       : (Override method) QAM_INSPECTIONRESLUT 수정
    * @Method Name : insertResult
    * @remark      : asis ==> getInsertResultData
    * @see
    */
    private String insertResult(Map<String, Object> param, String resourceType, String txnGroupHistKey) throws Exception
    {
        Map<String, Object> inspRsltMap = new HashMap<String, Object>();
        String txnHistKey = TxnHistKey.getTxnHistKey();
        inspRsltMap.put("TXNHISTKEY",            txnHistKey);
        inspRsltMap.put("RESOURCETYPE",          resourceType);
        inspRsltMap.put("RESOURCEID",            param.get("RESOURCEID"));
        inspRsltMap.put("PROCESSRELNO",          param.get("PROCESSRELNO"));
        inspRsltMap.put("INSPECTIONDEFID",       StringUtil.Object2String(param.get("INSPECTIONDEFID"))==""?"*":param.get("INSPECTIONDEFID"));
        inspRsltMap.put("INSPECTIONDEFVERSION",  StringUtil.Object2String(param.get("INSPECTIONDEFVERSION"))==""?"*":param.get("INSPECTIONDEFVERSION"));
        inspRsltMap.put("INSPECTIONCLASSID",     StringUtil.Object2String(param.get("INSPECTIONCLASSID"))==""?"*":param.get("INSPECTIONCLASSID"));
        inspRsltMap.put("DEGREE",                StringUtil.Object2String(param.get("DEGREE"))==""?"1":param.get("DEGREE"));
        inspRsltMap.put("INSPECTIONTYPE",        param.get("INSPECTIONTYPE"));
        inspRsltMap.put("ACCEPTDATE",            param.get("ACCEPTDATE"));
        inspRsltMap.put("INSPECTIONDATE",        param.get("INSPECTIONDATE"));
        inspRsltMap.put("REQUESTUSER",           param.get("REQUESTUSER"));
        inspRsltMap.put("INSPECTIONUSER",        param.get("INSPECTIONUSER"));

        //무검사 인계시 검사 결과 저장하지 않음
        if("ProcessInspection".equals(resourceType) && "HandOverProcessNon".equals(param.get("ISSEND")))
        {
            inspRsltMap.put("INSPECTIONRESULT", null);
        }
        else
        {
            inspRsltMap.put("INSPECTIONRESULT",  param.get("INSPECTIONRESULT"));
        }

        inspRsltMap.put("DESCRIPTION",           param.get("DESCRIPTION"));
        inspRsltMap.put("PLANTID",               param.get("PLANTID"));
        inspRsltMap.put("ENTERPRISEID",          param.get("ENTERPRISEID"));
        inspRsltMap.put("PRODUCTDEFID",          param.get("PRODUCTDEFID"));
        inspRsltMap.put("PRODUCTDEFVERSION",     param.get("PRODUCTDEFVERSION"));
        inspRsltMap.put("PROCESSSEGMENTID",      param.get("PROCESSSEGMENTID"));
        inspRsltMap.put("PROCESSSEGMENTVERSION", param.get("PROCESSSEGMENTVERSION"));
        inspRsltMap.put("PROCESSDEFID",          param.get("PROCESSDEFID"));
        inspRsltMap.put("PROCESSDEFVERSION",     param.get("PROCESSDEFVERSION"));
        inspRsltMap.put("AREAID",                param.get("AREAID"));
        inspRsltMap.put("ISSEND",                param.get("ISSEND"));
        inspRsltMap.put("RESULTITEM",            param.get("RESULTITEM"));
        inspRsltMap.put("SPECOUTQTY",            StringUtil.Object2Int(param.get("SPECOUTQTY")));
        inspRsltMap.put("INSPECTIONQTY",         StringUtil.Object2Int(param.get("INSPECTIONQTY")));
        inspRsltMap.put("SAMPLEQTY",             StringUtil.Object2Int(param.get("SAMPLEQTY")));
        inspRsltMap.put("WORKCOUNT",             StringUtil.Object2Double(param.get("WORKCOUNT")));
        inspRsltMap.put("JUDGMENTCRITERIA",      param.get("JUDGMENTCRITERIA"));
        
        /*checkpoint key채번 asis에 입력되어 추가함*/
        inspRsltMap.put("TXNGROUPHISTKEY",       txnGroupHistKey);
        
        /*2021.06.25 TOBE Add 품질규격입력자*/
        inspRsltMap.put("MEASUREUSER",           param.get("MEASUREUSER"));
        
        /*2021.07.13 TOBE Add 설비*/
        inspRsltMap.put("EQUIPMENTID",           param.get("EQUIPMENTID"));
        
        generalDao.addUpdate(NAMESPACE + ".insertQamInspectionResultInspRslt", inspRsltMap);

        return txnHistKey;
    }

    /**
    * @fn          : updateResult
    * @brief       : (Override method) QAM_INSPECTIONRESLUT 수정
    * @Method Name : updateResult
    * @remark      : asis ==> getUpdateResultData
    * @see
    */
    private void updateResult(Map<String, Object> paramMap, String resourceType) throws Exception
    {
        Map<String, Object> param = new HashMap<>();
        param.put("TXNHISTKEY",   paramMap.get("TXNHISTKEY"));
        param.put("RESOURCETYPE", resourceType);
        param.put("RESOURCEID",   paramMap.get("RESOURCEID"));
        param.put("PROCESSRELNO", paramMap.get("PROCESSRELNO"));
        
        Map<String, Object> inspRsltMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamInspectionResult", param);

        if(inspRsltMap == null)
        {
            throw new BizException("InValidData003", String.format("TxnHistKey = %s ,ResourceId = %s, ResourceType = %s",
            		(String) param.get("TXNHISTKEY"), (String) param.get("RESOURCEID"), (String) param.get("RESOURCETYPE")));
        }
        //20210811 화면에서 넘기는 정보는 검사자정보뿐임
        //inspRsltMap.put("ACCEPTDATE",     paramMap.get("ACCEPTDATE"));
        //inspRsltMap.put("REQUESTUSER",    paramMap.get("REQUESTUSER"));        
        //inspRsltMap.put("DESCRIPTION",    paramMap.get("DESCRIPTION"));
        inspRsltMap.put("INSPECTIONUSER", paramMap.get("INSPECTIONUSER"));
        generalDao.addUpdate(NAMESPACE + ".updateQamInspectionResultInspRslt", inspRsltMap);
    }

    /**
    * @fn          : saveInspectionItemResult
    * @brief       : (Override method) qam_inspectionItemResult 에 검사 결과 저장
    * @Method Name : updateResult
    * @remark      : asis ==> upsertInspectionItemResult
    * @see
    */
    public String saveInspectionItemResult(DataSetMap dsList, String resourceId, String resourcetype, String degree, String txnGroupHistKey, Boolean hasImage, String inspType) throws Exception
    {
        Map<String, Object> param = new HashMap();;
        String NGInspItem ="";

        for (int i = 0, len = dsList.size(); i < len; i++)
        {
            param = dsList.get(i);

            insertItemResult(param, resourceId, resourcetype, degree, txnGroupHistKey);

            if("NG".equals(param.get("INSPECTIONRESULT")))
            {
                if("Exterior".equals(inspType))
                {
                    NGInspItem += param.get("INSPITEMNAME")+"("+ param.get("INSPECTIONQTY")+"/"+param.get("SPECOUTQTY")+"/"
                        +param.get("DEFECTRATE") +")"+"\r\n";
                }
                else if("ExteriorOKNG".equals(inspType))
                {//원자재 검사 합불 판정의 경우
                    NGInspItem += param.get("INSPITEMNAME")+"\r\n";
                }

            }

			/*//checkpoint 이미지 공통으로 처리
			 * if("NG".equals(param.get("INSPECTIONRESULT")) && hasImage == true) {
			 * insertItemImage(param); }
			 */
        }

        return NGInspItem;
    }

    /**
    * @fn          : saveInspectionItemResultMeasure
    * @brief       : (Override method)
    * @Method Name : saveInspectionItemResultMeasure
    * @remark      : asis ==> upsertInspectionItemResultMeasure
    * @see
    */
    public Map<String, String> saveInspectionItemResultMeasure(DataSetMap dsList, String resourceId, String resourcetype, String degree, String txnGroupHistKey, Boolean hasImage, String inspType) throws Exception
    {
        Map<String, Object> param = new HashMap<String, Object>();
        Map<String, String> inspItemIdAndValue = new HashMap<String, String>();
        String inspItemId ="";
        String inspItemName ="";
        String inspStandard ="";
        String measureValue ="";
        String valueList ="";

        for (int i = 0, len = dsList.size(); i < len; i++)
        {
            param = dsList.get(i);

            insertItemResult(param, resourceId, resourcetype, degree, txnGroupHistKey);

            if("NG".equals(param.get("INSPECTIONRESULT")))
            {
                inspItemId   = StringUtil.Object2String(param.get("INSPITEMID"));
                inspItemName = StringUtil.Object2String(param.get("INSPITEMNAME"));
                inspStandard = StringUtil.Object2String(param.get("INSPECTIONSTANDARD"));
                measureValue = StringUtil.Object2String(param.get("MEASUREVALUE"));

                if(inspItemIdAndValue.containsKey(inspItemId))
                {
                    valueList = (String) inspItemIdAndValue.get(inspItemId);
                    valueList = valueList +"/"+ measureValue ;
                    inspItemIdAndValue.replace(inspItemId, valueList);
                }
                else
                {
                    inspItemIdAndValue.put(inspItemId, inspItemName +"(" + inspStandard +") : " + measureValue);
                }
            }
        }

        return inspItemIdAndValue;
    }

    /**
    * @fn          : insertItemResult
    * @brief       : (Override method) bas_inspectionitemresult 등록
    * @Method Name : insertItemResult
    * @remark      : asis ==> getInsertItemResultData
    * @see
    */
    private void insertItemResult(Map<String, Object> param, String resourceId, String resourcetype, String degree, String txnGroupHistKey) throws Exception
    {
        Map<String, Object> inspItemRsltMap = new HashMap<String, Object>();
        inspItemRsltMap.put("TXNHISTKEY",             TxnHistKey.getTxnHistKey());
        inspItemRsltMap.put("RESOURCETYPE",           resourcetype);
        inspItemRsltMap.put("RESOURCEID",             resourceId);
        inspItemRsltMap.put("INSPITEMID",             param.get("INSPITEMID"));
        inspItemRsltMap.put("INSPITEMVERSION",        param.get("INSPITEMVERSION"));
        inspItemRsltMap.put("PROCESSRELNO",           param.get("PROCESSRELNO"));
        
        if (!StringUtil.isNullOrEmpty(param.get("MEASUREVALUE")))	
            inspItemRsltMap.put("MEASUREVALUE",       StringUtil.Object2Double(param.get("MEASUREVALUE")));
        
        inspItemRsltMap.put("INSPECTIONRESULT",       param.get("INSPECTIONRESULT"));
        inspItemRsltMap.put("PARENTINSPITEMID",       param.get("INSPITEMMIDDLECLASSID"));
        inspItemRsltMap.put("PLANTID",                param.get("PLANTID"));
        inspItemRsltMap.put("ENTERPRISEID",           param.get("ENTERPRISEID"));
        
        if (!StringUtil.isNullOrEmpty(param.get("INSPITEMCLASSID")))
	        inspItemRsltMap.put("PARENTINSPITEMVERSION", "*");        
        
        inspItemRsltMap.put("DEGREE",                 degree == null?"1":degree);
        inspItemRsltMap.put("INSPECTIONDEFID",        param.get("INSPECTIONDEFID"));
        //2021.05.23 TOBE Modify 수입검사결과등록 측정정보 조회시 값이 들어가지 않아 조회되지 않음 
        //inspItemRsltMap.put("INSPECTIONDEFVERSION",   param.get("INSPECTIONDEFVERSION"));
        inspItemRsltMap.put("INSPECTIONDEFVERSION",   StringUtil.Object2String(param.get("INSPECTIONDEFVERSION"))==""?"*":param.get("INSPECTIONDEFVERSION"));
        
        if (!StringUtil.isNullOrEmpty(param.get("INSPECTIONQTY")))
        	inspItemRsltMap.put("INSPECTIONQTY",      StringUtil.Object2Int(param.get("INSPECTIONQTY")));

        if (!StringUtil.isNullOrEmpty(param.get("SPECOUTQTY")))
        	inspItemRsltMap.put("SPECOUTQTY",         StringUtil.Object2Int(param.get("SPECOUTQTY")));

        if (!StringUtil.isNullOrEmpty(param.get("TARGETVALUE")))
        	inspItemRsltMap.put("TARGETVALUE",        StringUtil.Object2Double(param.get("TARGETVALUE")));
        
        if (!StringUtil.isNullOrEmpty(param.get("UPPERSPECLIMIT")))
        	inspItemRsltMap.put("UPPERSPECLIMIT",     StringUtil.Object2Double(param.get("UPPERSPECLIMIT")));
        
        if (!StringUtil.isNullOrEmpty(param.get("LOWERSPECLIMIT")))
        	inspItemRsltMap.put("LOWERSPECLIMIT",     StringUtil.Object2Double(param.get("LOWERSPECLIMIT")));
        
        if (!StringUtil.isNullOrEmpty(param.get("UPPERCONTROLLIMIT")))
        	inspItemRsltMap.put("UPPERCONTROLLIMIT",  StringUtil.Object2Double(param.get("UPPERCONTROLLIMIT")));
        
        if (!StringUtil.isNullOrEmpty(param.get("LOWERCONTROLLIMIT")))
        	inspItemRsltMap.put("LOWERCONTROLLIMIT",  StringUtil.Object2Double(param.get("LOWERCONTROLLIMIT")));
        
        if (!StringUtil.isNullOrEmpty(param.get("UPPERSCREENLIMIT")))
        	inspItemRsltMap.put("UPPERSCREENLIMIT",   StringUtil.Object2Double(param.get("UPPERSCREENLIMIT")));
        
        if (!StringUtil.isNullOrEmpty(param.get("LOWERSCREENLIMIT")))
        	inspItemRsltMap.put("LOWERSCREENLIMIT",   StringUtil.Object2Double(param.get("LOWERSCREENLIMIT")));
        
        /*checkpoint 이미지 key 추가*/
        inspItemRsltMap.put("FILEID",                 param.get("FILEID"));
        
        /*checkpoint key채번 asis에 입력되어 추가함*/
        inspItemRsltMap.put("TXNGROUPHISTKEY",        txnGroupHistKey);
        
        generalDao.insert(NAMESPACE + ".insertBasInspectionItemResultInspRslt", inspItemRsltMap);

    }

    /**
    * @fn          : insertAbnormaloccurrence
    * @brief       : (Override method)
    * @Method Name : insertAbnormaloccurrence
    * @remark      : asis ==> getInsertAbnormaloccurrenceData
    * @see
    */
    private Map<String, Object> insertAbnormaloccurrence(Map<String, Object> param, String abnormalNO, String abnormalType, String degree) throws Exception
    {
        Map<String, Object> abnormalMap = new HashMap<String, Object>();
        Map<String, Object> selMap = new HashMap<String, Object>();
        selMap.put("ABNOCRNO",   abnormalNO);
        selMap.put("ABNOCRTYPE", abnormalType);

        abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", selMap);

        if(abnormalMap != null)
        {
            throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
        }

        abnormalMap.put("ABNOCRNO",                    abnormalNO);
        abnormalMap.put("ABNOCRTYPE",                  abnormalType);
        abnormalMap.put("PLANTID",                     StringUtil.Object2String(param.get("PLANTID"))==""?"*":param.get("PLANTID"));
        abnormalMap.put("ENTERPRISEID",                StringUtil.Object2String(param.get("ENTERPRISEID"))==""?"*":param.get("ENTERPRISEID"));
        abnormalMap.put("LOTID",                       StringUtil.Object2String(param.get("RESOURCEID"))==""?"*":param.get("RESOURCEID"));
        abnormalMap.put("PROCESSRELNO",                StringUtil.Object2String(param.get("REQUESTNO"))==""?"*":param.get("REQUESTNO"));
        abnormalMap.put("PROCESSDEFID",                StringUtil.Object2String(param.get("PROCESSDEFID"))==""?"*":param.get("PROCESSDEFID"));
        abnormalMap.put("PROCESSDEFVERSION",           StringUtil.Object2String(param.get("PROCESSDEFVERSION"))==""?"*":param.get("PROCESSDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTID",            StringUtil.Object2String(param.get("PROCESSSEGMENTID"))==""?"*":param.get("PROCESSSEGMENTID"));
        abnormalMap.put("PROCESSSEGMENTVERSION",       StringUtil.Object2String(param.get("PROCESSSEGMENTVERSION"))==""?"*":param.get("PROCESSSEGMENTVERSION"));
        abnormalMap.put("PRODUCTDEFID",                StringUtil.Object2String(param.get("PRODUCTDEFID"))==""?"*":param.get("PRODUCTDEFID"));
        abnormalMap.put("PRODUCTDEFVERSION",           StringUtil.Object2String(param.get("PRODUCTDEFVERSION"))==""?"*":param.get("PRODUCTDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTCLASSID",       StringUtil.Object2String(param.get("PROCESSSEGMENTCLASSID"))==""?"*":param.get("PROCESSSEGMENTCLASSID"));
        abnormalMap.put("EQUIPMENTID",                 StringUtil.Object2String(param.get("EQUIPMENTID"))==""?"*":param.get("EQUIPMENTID"));
        abnormalMap.put("CHILDEQUIPMENTID",            StringUtil.Object2String(param.get("CHILDEQUIPMENTID"))==""?"*":param.get("CHILDEQUIPMENTID"));
        abnormalMap.put("CONSUMABLEDEFID",             StringUtil.Object2String(param.get("CONSUMABLEDEFID"))==""?"*":param.get("CONSUMABLEDEFID"));
        abnormalMap.put("CONSUMABLEDEFVERSION",        StringUtil.Object2String(param.get("CONSUMABLEDEFVERSION"))==""?"*":param.get("CONSUMABLEDEFVERSION"));
        abnormalMap.put("STATE",                       param.get("STATE"));
        abnormalMap.put("REASONCODEID",                StringUtil.Object2String(param.get("REASONCODEID"))==""?"*":param.get("REASONCODEID"));
        abnormalMap.put("USERSEQUENCE",                StringUtil.Object2String(param.get("USERSEQUENCE"))==""?"*":param.get("USERSEQUENCE"));
        abnormalMap.put("AREAID",                      StringUtil.Object2String(param.get("AREAID"))==""?"*":param.get("AREAID"));
        abnormalMap.put("INSPITEMID",                  StringUtil.Object2String(param.get("INSPITEMID"))==""?"*":param.get("INSPITEMID"));
        abnormalMap.put("INSPITEMVERSION",             StringUtil.Object2String(param.get("INSPITEMVERSION"))==""?"*":param.get("INSPITEMVERSION"));
        abnormalMap.put("DEGREE",                      degree == null? "1":degree);
        abnormalMap.put("DEFECTCODE",                  StringUtil.Object2String(param.get("DEFECTCODE"))==""?"*":param.get("DEFECTCODE"));
        abnormalMap.put("QCSEGMENTID",                 StringUtil.Object2String(param.get("QCSEGMENTID"))==""?"*":param.get("QCSEGMENTID"));
        abnormalMap.put("NCRISSUEDATE",                qamService.getCurrentSystemTime("yyyyMMdd"));
        abnormalMap.put("ISNCRISSUE",                  "Y");
        abnormalMap.put("REASONCONSUMABLEDEFID",       StringUtil.Object2String(param.get("REASONCONSUMABLEDEFID")));
        abnormalMap.put("REASONCONSUMABLEDEFVERSION",  StringUtil.Object2String(param.get("REASONCONSUMABLEDEFVERSION")));
        abnormalMap.put("REASONCONSUMABLELOTID",       StringUtil.Object2String(param.get("REASONCONSUMABLELOTID")));
        
        /*원인공정 두가지 컬럼명으로 사용
         * REASONSEGMENTID 있으면 => REASONSEGMENTID
         *                      없으면 => REASONPROCESSSEGMENTID 체크
         *                                            REASONPROCESSSEGMENTID 있으면 => REASONPROCESSSEGMENTID
         *                                                                    없으면 => null
         */
        if (StringUtil.isNullOrEmpty(param.get("REASONSEGMENTID")))
        {
            if(StringUtil.isNullOrEmpty(param.get("REASONPROCESSSEGMENTID")))
            {
                abnormalMap.put("REASONSEGMENTID",     null);
            }
            else
            {
                abnormalMap.put("REASONSEGMENTID",     param.get("REASONPROCESSSEGMENTID"));
            }
        }
        else
        {
            abnormalMap.put("REASONSEGMENTID",         param.get("REASONSEGMENTID"));
        }

        abnormalMap.put("REASONAREAID",                StringUtil.Object2String(param.get("REASONAREAID")));        
        abnormalMap.put("VALIDSTATE",                  "Valid");

        return abnormalMap;
    }

    /**
    * @fn          : insertAbnormaloccurrenceHasLot
    * @brief       : (Override method)
    * @Method Name : insertAbnormaloccurrenceHasLot
    * @remark      : asis ==> getInsertAbnormaloccurrenceDataHasLot
    * @see
    */
    private Map<String, Object> insertAbnormaloccurrenceHasLot(Map<String, Object> param, Map<String, Object> lotParam, String abnormalNO, String abnormalType, String degree) throws Exception
    {
        Map<String, Object> abnormalMap = new HashMap<String, Object>();
        Map<String, Object> selMap = new HashMap<String, Object>();
        selMap.put("ABNOCRNO",   abnormalNO);
        selMap.put("ABNOCRTYPE", abnormalType);

        abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", selMap);

        if(abnormalMap != null)
        {
            throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
        }

        abnormalMap.put("ABNOCRNO",                    abnormalNO);
        abnormalMap.put("ABNOCRTYPE",                  abnormalType);
        abnormalMap.put("PLANTID",                     StringUtil.Object2String(param.get("PLANTID"))==""?"*":param.get("PLANTID"));
        abnormalMap.put("ENTERPRISEID",                StringUtil.Object2String(param.get("ENTERPRISEID"))==""?"*":param.get("ENTERPRISEID"));
        abnormalMap.put("LOTID",                       StringUtil.Object2String(param.get("RESOURCEID"))==""?"*":param.get("RESOURCEID"));
        //출하검사에서 Processrelno에 차수 관리 출하검사 REQUESTNO 없음
        if(degree == null) degree ="*";
        abnormalMap.put("PROCESSRELNO",                StringUtil.Object2String(param.get("REQUESTNO"))==""?degree:param.get("REQUESTNO"));
        abnormalMap.put("PROCESSDEFID",                lotParam.get("PROCESSDEFID"));
        abnormalMap.put("PROCESSDEFVERSION",           lotParam.get("PROCESSDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTID",            lotParam.get("PROCESSSEGMENTID"));
        abnormalMap.put("PROCESSSEGMENTVERSION",       lotParam.get("PROCESSSEGMENTVERSION"));
        abnormalMap.put("PRODUCTDEFID",                lotParam.get("PRODUCTDEFID"));
        abnormalMap.put("PRODUCTDEFVERSION",           lotParam.get("PRODUCTDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTCLASSID",       StringUtil.Object2String(param.get("PROCESSSEGMENTCLASSID"))==""?"*":param.get("PROCESSSEGMENTCLASSID"));
        abnormalMap.put("EQUIPMENTID",                 StringUtil.Object2String(param.get("EQUIPMENTID"))==""?"*":param.get("EQUIPMENTID"));
        abnormalMap.put("CHILDEQUIPMENTID",            StringUtil.Object2String(param.get("CHILDEQUIPMENTID"))==""?"*":param.get("CHILDEQUIPMENTID"));
        abnormalMap.put("CONSUMABLEDEFID",             StringUtil.Object2String(param.get("CONSUMABLEDEFID"))==""?"*":param.get("CONSUMABLEDEFID"));
        abnormalMap.put("CONSUMABLEDEFVERSION",        StringUtil.Object2String(param.get("CONSUMABLEDEFVERSION"))==""?"*":param.get("CONSUMABLEDEFVERSION"));
        abnormalMap.put("STATE",                       param.get("STATE"));
        abnormalMap.put("REASONCODEID",                StringUtil.Object2String(param.get("REASONCODEID"))==""?"*":param.get("REASONCODEID"));
        abnormalMap.put("USERSEQUENCE",                lotParam.get("USERSEQUENCE"));
        abnormalMap.put("AREAID",                      lotParam.get("AREAID"));
        abnormalMap.put("INSPITEMID",                  StringUtil.Object2String(param.get("INSPITEMID"))==""?"*":param.get("INSPITEMID"));
        abnormalMap.put("INSPITEMVERSION",             StringUtil.Object2String(param.get("INSPITEMVERSION"))==""?"*":param.get("INSPITEMVERSION"));

        abnormalMap.put("DEGREE",                      degree);
        abnormalMap.put("DEFECTCODE",                  StringUtil.Object2String(param.get("DEFECTCODE"))==""?"*":param.get("DEFECTCODE"));
        abnormalMap.put("QCSEGMENTID",                 StringUtil.Object2String(param.get("QCSEGMENTID"))==""?"*":param.get("QCSEGMENTID"));
        abnormalMap.put("NCRISSUEDATE",                qamService.getCurrentSystemTime("yyyyMMdd"));
        abnormalMap.put("ISNCRISSUE",                  "Y");
        abnormalMap.put("REASONCONSUMABLEDEFID",       StringUtil.Object2String(param.get("REASONCONSUMABLEDEFID")));
        abnormalMap.put("REASONCONSUMABLEDEFVERSION",  StringUtil.Object2String(param.get("REASONCONSUMABLEDEFVERSION")));
        abnormalMap.put("REASONCONSUMABLELOTID",       StringUtil.Object2String(param.get("REASONCONSUMABLELOTID")));
        /*원인공정 두가지 컬럼명으로 사용
         * REASONSEGMENTID 있으면 => REASONSEGMENTID
         *                 없으면 => REASONPROCESSSEGMENTID 체크
         *                                            REASONPROCESSSEGMENTID 있으면 => REASONPROCESSSEGMENTID
         *                                                                   없으면 => null
         */
        if (StringUtil.isNullOrEmpty(param.get("REASONSEGMENTID")))
        {
            if(StringUtil.isNullOrEmpty(param.get("REASONPROCESSSEGMENTID")))
            {
                abnormalMap.put("REASONSEGMENTID",     null);
            }
            else
            {
                abnormalMap.put("REASONSEGMENTID",     param.get("REASONPROCESSSEGMENTID"));
            }
        }
        else
        {
            abnormalMap.put("REASONSEGMENTID",         param.get("REASONSEGMENTID"));
        }

        abnormalMap.put("REASONAREAID",                StringUtil.Object2String(param.get("REASONAREAID")));
        abnormalMap.put("VALIDSTATE",                  "Valid");

        return abnormalMap;
    }

    /**
    * @fn          : saveInspectionDefect
    * @brief       : (Override method) qam_inspectionDefect 저장
    * @Method Name : saveInspectionDefect
    * @remark      : asis ==> upsertInspectionDefect
    * @see
    */
    public String saveInspectionDefect(DataSetMap dsList, String resourceId, String processRelNo, String resourcetype, String degree, String txnGroupHistKey, Boolean hasImage, String inspectionQty, String type) throws Exception
    {
        Map<String, Object> param = new HashMap() ;
        String NGDefect ="";

        for (int i = 0, len = dsList.size(); i < len; i++)
        {
            param = dsList.get(i);

            insertDefectResult(param, resourceId, processRelNo, resourcetype, degree, txnGroupHistKey);

            if ("NG".equals(param.get("INSPECTIONRESULT")) && "Exterior".equals(type))
            {
                NGDefect += param.get("DEFECTCODENAME")+"-"+ param.get("QCSEGMENTNAME")+"("+inspectionQty+"/"
                        +param.get("DEFECTQTY") + "/"+param.get("DEFECTRATE")+ ")"+ "\r\n";
            }
        }

        return NGDefect;
    }

    /**
    * @fn          : insertDefectResult
    * @brief       : (Override method) 검사 불량정보 등록
    * @Method Name : insertDefectResult
    * @remark      : asis ==> getInsertDefectResultData
    * @see
    */
    private void insertDefectResult(Map<String, Object> param, String resourceId, String processRelNo, String resourcetype,String degree, String txnGroupHistKey) throws Exception
    {
        Map<String, Object> defectMap = new HashMap<String, Object>();
        defectMap.put("TXNHISTKEY",             TxnHistKey.getTxnHistKey());
        defectMap.put("RESOURCETYPE",           resourcetype);
        defectMap.put("RESOURCEID",             resourceId == null?param.get("RESOURCEID"):resourceId);
        defectMap.put("DEFECTCODE",             param.get("DEFECTCODE"));
        defectMap.put("PROCESSRELNO",           processRelNo);
        defectMap.put("DEGREE",                 degree == null?"1":degree);
        defectMap.put("DEFECTQTY",              StringUtil.Object2Double(param.get("DEFECTQTY")));
        defectMap.put("REASONCONSUMABLELOTID",  param.get("REASONCONSUMABLELOTID"));
        defectMap.put("REASONSEGMENTID",        param.get("REASONSEGMENTID"));
        defectMap.put("REASONAREAID",           param.get("REASONAREAID"));
        defectMap.put("REASONCONSUMABLEDEFID",  param.get("REASONCONSUMABLEDEFID"));
        defectMap.put("REASONCONSUMABLEDEFVERSION", param.get("REASONCONSUMABLEDEFVERSION"));
        defectMap.put("INSPECTIONQTY",          StringUtil.Object2Double(param.get("INSPECTIONQTY")));
        defectMap.put("SAMPLEQTY",              StringUtil.Object2Double(param.get("INSPECTIONQTY")));
        defectMap.put("INSPECTIONRESULT",       param.get("INSPECTIONRESULT"));
        defectMap.put("QCSEGMENTID",            param.get("QCSEGMENTID"));
        
        /*checkpoint 이미지 key 추가*/
        defectMap.put("FILERESOURCEID",         param.get("FILERESOURCEID"));
        /*checkpoint key채번 asis에 입력되어 추가함*/
        defectMap.put("TXNGROUPHISTKEY",        txnGroupHistKey);
        
        generalDao.insert(NAMESPACE + ".insertQamInspectionDefectInspRslt", defectMap);
    }

    /**
    * @fn          : saveInspectionDefectAndNCR
    * @brief       : (Override method) 검사 불량정보 저장 , NCR 발행 (INTERFLEX) 자동발행  ///ShipemntInspection 전용
    * @Method Name : saveInspectionDefectAndNCR
    * @remark      : asis ==> upsertInspectionDefectAndNCR
    * @see
    */
    public List<Map<String, Object>> saveInspectionDefectAndNCR(DataSetMap dsList, Map<String, Object> lotParam, String lotId, String processRelNo, String resourcetype, String abnormalType, Map<String, String> param, Map<String, Object> dataParam, String txnGroupHistKey, List<Map<String, Object>> responseDt, Boolean hasImage) throws Exception
    {
        Map<String, Object> responseRow;
        Map<String, Object> selMap = new HashMap<String, Object>();
        Boolean isSendEmail = false;
        String actionType ="";
        String sendMailYn ="N";

        for (int i = 0, len = dsList.size(); i < len; i++)
        {
        	selMap = dsList.get(i);
            responseRow = new HashMap<String, Object>();

            if(lotId.equals(selMap.get("RESOURCEID")))
            {
                insertDefectResultMultiLot(selMap, lotId, processRelNo, resourcetype, param, txnGroupHistKey);

                if("NG".equals(selMap.get("INSPECTIONRESULT")))
                {
                    String enterpriseId = StringUtil.Object2String(lotParam.get("ENTERPRISEID"));
                    String plantId      = StringUtil.Object2String(lotParam.get("PLANTID"));

                    //actionType을 얻는다.
                    actionType = qamService.getActionType(enterpriseId, plantId, StringUtil.Object2String(selMap.get("QCGRADE")));

                    //actionType으로 action 취한다.
                    isSendEmail = qamService.doActionAndGetIsSendEmailShipmentInspection(actionType, selMap, lotParam, lotId, abnormalType, enterpriseId, plantId, dataParam);
                    
                    //Email을 보내는 row의 정보만 담아서 화면으로 보낸다
                    if(isSendEmail == true)
                    {
            	 		Double dInspectionQty = StringUtil.Object2Double(selMap.get("INSPECTIONQTY"));
            	 		Double dDefectQty = StringUtil.Object2Double(selMap.get("DEFECTQTY"));
//						String defectRate = ((double)Math.round(dDefectQty/dInspectionQty * 100.0))+"%";						
                    	int iInspectionQty = Integer.parseInt(String.valueOf(Math.round(dInspectionQty)));                    	
                    	int iDefectQty = Integer.parseInt(String.valueOf(Math.round(dDefectQty)));

                    	sendMailYn = "Y";
                        responseRow.put("RESOURCEID", selMap.get("RESOURCEID"));
                        responseRow.put("DEGREE", selMap.get("DEGREE"));
                        responseRow.put("EXTERIORNG", selMap.get("DEFECTCODENAME")+"-"+ selMap.get("QCSEGMENTNAME")+"("+iInspectionQty
                        						+"/"+iDefectQty + "/"+ (double)Math.round(Double.parseDouble(String.valueOf(selMap.get("DEFECTRATE"))))+ "%)");
                        responseRow.put("ISSENDEMAIL", sendMailYn);

                        responseDt.add(responseRow);
                    }
                }
            }
        }

        return responseDt;

    }

    /**
    * @fn          : saveInspectionDefectDisposal
    * @brief       : (Override method) 검사 불량정보 저장 , 출하검사 / 불량 처리
    * @Method Name : saveInspectionDefectDisposal
    * @remark      : asis ==> upsertInspectionDefectDisposal
    * @see
    */
    public void saveInspectionDefectDisposal(DataSetMap dsList, String lotId, String processRelNo, String resourcetype, Map<String, String> param, String txnGroupHistKey, Boolean hasImage) throws Exception
    {
        Map<String, Object> selMap = new HashMap<String, Object>();

        for (int z = 0 ; z < dsList.size(); z++)
        {
        	selMap = dsList.get(z);

            if(lotId.equals(selMap.get("RESOURCEID")))
            {
                insertDefectResultMultiLot(selMap, lotId, processRelNo, resourcetype, param, txnGroupHistKey);
            }
        }

    }

    /**
    * @fn          : insertDefectResultMultiLot
    * @brief       : (Override method) 검사 불량정보 저장 , ShipmentInspection 전용
    * @Method Name : insertDefectResultMultiLot
    * @remark      : asis ==> getInsertDefectResultMultiLotData
    * @see
    */
    private void insertDefectResultMultiLot(Map<String, Object> defectparam, String resourceId, String processRelNo, String resourcetype , Map<String, String> param, String txnGroupHistKey) throws Exception
    {
        Map<String, Object> defectMap = new HashMap<String, Object>();

/*checkpoint 확인필요
*        String groupTxnHistKey = map.get(row.getString("RESOURCEID"));
*/
        String groupTxnHistKey = param.get(defectparam.get("RESOURCEID"));
//        defectMap.put("TXNHISTKEY",             TxnHistKey.getTxnHistKey());
        defectMap.put("TXNHISTKEY",             defectparam.get("TXNHISTKEY"));
        defectMap.put("RESOURCETYPE",           resourcetype);
        defectMap.put("RESOURCEID",             resourceId == null?defectparam.get("RESOURCEID"):resourceId);
        defectMap.put("DEFECTCODE",             defectparam.get("DEFECTCODE"));
        defectMap.put("PROCESSRELNO",           processRelNo);

        defectMap.put("DEGREE",                 StringUtil.Object2String(defectparam.get("DEGREE"))==""?"1":defectparam.get("DEGREE"));
        defectMap.put("DEFECTQTY",              StringUtil.Object2Double(defectparam.get("DEFECTQTY")));
        defectMap.put("REASONCONSUMABLELOTID",  defectparam.get("REASONCONSUMABLELOTID"));
        defectMap.put("REASONSEGMENTID",        defectparam.get("REASONSEGMENTID"));
        defectMap.put("REASONAREAID",           defectparam.get("REASONAREAID"));
        defectMap.put("REASONCONSUMABLEDEFID",  defectparam.get("REASONCONSUMABLEDEFID"));
        defectMap.put("REASONCONSUMABLEDEFVERSION", defectparam.get("REASONCONSUMABLEDEFVERSION"));
        defectMap.put("TXNGROUPHISTKEY",        groupTxnHistKey);
        defectMap.put("INSPECTIONQTY",          StringUtil.Object2Double(defectparam.get("INSPECTIONQTY")));
        defectMap.put("SAMPLEQTY",              StringUtil.Object2Double(defectparam.get("INSPECTIONQTY")));
        defectMap.put("INSPECTIONRESULT",       defectparam.get("INSPECTIONRESULT"));
        defectMap.put("QCSEGMENTID",            defectparam.get("QCSEGMENTID"));

        /*checkpoint key채번 asis에 입력되어 추가함*/
        defectMap.put("TXNGROUPHISTKEY",        txnGroupHistKey);
        
        generalDao.insert(NAMESPACE + ".insertQamInspectionDefectInspRslt", defectMap);
    }

    /**
    * @fn          : saveInspectionResultWithLotData
    * @brief       : (Override method)
    * @Method Name : saveInspectionResultWithLotData
    * @remark      : asis ==> upsertInspectionResultWithLotData
    * @see
    */
    public void saveInspectionResultWithLotData(Map<String, Object> param, Map<String, Object> ld, String resourceType
                                              , String groupTxnHistKey, String inspector, String transitAreaId
                                              , String prevAreaId, String inspectionDate, String inspectionDefId
                                              , String aqlOrNcr, String degree) throws Exception
    {
        insertResultWithLot(param, ld ,resourceType, groupTxnHistKey, inspector, transitAreaId, prevAreaId, inspectionDate, inspectionDefId, aqlOrNcr,degree);
    }

    /**
    * @fn          : insertResultWithLot
    * @brief       : (Override method)
    * @Method Name : insertResultWithLot
    * @remark      : asis ==> getInsertResultWithLotData
    * @see
    */
    private void insertResultWithLot(Map<String, Object> param, Map<String, Object> ldMap, String resourceType
                                         , String groupTxnHistKey, String inspector, String transitAreaId
                                         , String prevAreaId, String inspectionDate, String inspectionDefId
                                         , String aqlOrNcr, String degree) throws Exception
    {
        Map<String, Object> inspRsltMap = new HashMap<String, Object>();
        inspRsltMap.put("TXNHISTKEY",            TxnHistKey.getTxnHistKey());
        inspRsltMap.put("RESOURCETYPE",          resourceType);
        inspRsltMap.put("RESOURCEID",            param.get("RESOURCEID"));
        inspRsltMap.put("PROCESSRELNO",          param.get("PROCESSRELNO"));
        inspRsltMap.put("DEGREE",                degree);
        inspRsltMap.put("INSPECTIONTYPE",       inspectionDefId);
        inspRsltMap.put("ACCEPTDATE",            param.get("ACCEPTDATE"));
        inspRsltMap.put("INSPECTIONDATE",        inspectionDate);
        inspRsltMap.put("REQUESTUSER",           param.get("REQUESTUSER"));
        inspRsltMap.put("INSPECTIONUSER",        inspector);
        inspRsltMap.put("INSPECTIONRESULT",      param.get("INSPECTIONRESULT"));
        inspRsltMap.put("DESCRIPTION",           param.get("DESCRIPTION"));
        inspRsltMap.put("PLANTID",               param.get("PLANTID"));
        inspRsltMap.put("ENTERPRISEID",          param.get("ENTERPRISEID"));
        inspRsltMap.put("PRODUCTDEFID",          ldMap.get("PRODUCTDEFID"));
        inspRsltMap.put("PRODUCTDEFVERSION",     ldMap.get("PRODUCTDEFVERSION"));
        inspRsltMap.put("PROCESSSEGMENTID",      ldMap.get("PROCESSSEGMENTID"));
        inspRsltMap.put("PROCESSSEGMENTVERSION", ldMap.get("PROCESSSEGMENTVERSION"));
        inspRsltMap.put("PROCESSDEFID",          ldMap.get("PROCESSDEFID"));
        inspRsltMap.put("PROCESSDEFVERSION",     ldMap.get("PROCESSDEFVERSION"));
        inspRsltMap.put("WORKCOUNT",             ldMap.get("WORKCOUNT"));

        if("OK".equals(param.get("INSPECTIONRESULT")))
        {
            inspRsltMap.put("AREAID",            transitAreaId);  //포장(다음 인계 작업장)
        }
        else if("NG".equals(param.get("INSPECTIONRESULT")))
        {
            inspRsltMap.put("AREAID",            null);  //포장(다음 인계 작업장)
        }

        inspRsltMap.put("ISSEND",                param.get("ISSEND"));
        inspRsltMap.put("RESULTITEM",            param.get("RESULTITEM"));

        if (!StringUtil.isNullOrEmpty(param.get("SPECOUTQTY"))) 	
        	inspRsltMap.put("SPECOUTQTY",        StringUtil.Object2Int(param.get("SPECOUTQTY")));
        
        if (!StringUtil.isNullOrEmpty(param.get("INSPECTIONQTY")))
        	inspRsltMap.put("INSPECTIONQTY",     StringUtil.Object2Int(param.get("INSPECTIONQTY")));
        
        if (!StringUtil.isNullOrEmpty(param.get("SAMPLEQTY")))
        	inspRsltMap.put("SAMPLEQTY",         StringUtil.Object2Int(param.get("SAMPLEQTY")));
        
        inspRsltMap.put("INSPECTIONDEFID",       inspectionDefId);
        inspRsltMap.put("INSPECTIONDEFVERSION",  "*");
        inspRsltMap.put("JUDGMENTCRITERIA",      aqlOrNcr);
        inspRsltMap.put("TXNGROUPHISTKEY",       groupTxnHistKey);

        generalDao.addUpdate(NAMESPACE + ".insertQamInspectionResultInspRslt", inspRsltMap);
    }

    /**
    * @fn          : getInsertNCRIssue
    * @brief       : (Override method) NCR
    * @Method Name : getInsertNCRIssue
    * @remark      : asis ==> getInsertNCRIssue
    * @see
    */
    private Map<String, Object> getInsertNCRIssue(Map<String, Object> param) throws Exception
    {
        Map<String, Object> ncrMap = new HashMap<String, Object>();
        ncrMap.put("LOTID",                 param.get("RESOURCEID"));
        ncrMap.put("DEGREE",                param.get("DEGREE"));
        ncrMap.put("DEFECTCODE",            param.get("DEFECTCODE"));
        ncrMap.put("NCRISSUETYPE",          param.get("NCRISSUETYPE"));
        ncrMap.put("REASONCONSUMABLELOTID", param.get("MATERIALLOTID"));
        ncrMap.put("REASONSEGMENTID",       param.get("PROCESSSEGMENTID"));
        ncrMap.put("CAUSEAREAID",           param.get("AREAID"));
        ncrMap.put("NCRISSUEDATE",          qamService.getCurrentSystemTime("yyyy-MM-dd HH:mm:ss.SSS"));
        ncrMap.put("ISNCRISSUE",            "Y");
        ncrMap.put("DESCRIPTION",           param.get("DESCRIPTION"));
        ncrMap.put("VALIDSTATE",            "Valid");
        return ncrMap;
    }

    /**
    * @fn          : saveItemRsltAndImgSeparate
    * @brief       : (Override method) bas_inspectionItemResult 에 검사 결과 저장 & 이미지 저장 다른 테이블에 이미지 있을때
    * @Method Name : saveItemRsltAndImgSeparate
    * @remark      : asis ==> saveItemRsltAndImgSeparate
    * @see
    */
    public Map<String, String> saveItemRsltAndImgSeparate(DataSetMap dsList, DataSetMap ImgList, String resourceId, String resourcetype, String degree, String txnGroupHistKey) throws Exception
    {
        Map<String, Object> param = new HashMap<String, Object>();
        Map<String, String> inspItemIdAndValue = new HashMap<String, String>();
        String inspItemId ="";
        String inspItemName ="";
        String inspStandard ="";
        String measureValue ="";
        String valueList ="";

        for (int i = 0, len = dsList.size(); i < len; i++)
        {
            param = dsList.get(i);

            insertItemResult(param, resourceId, resourcetype, degree, txnGroupHistKey);

            if("NG".equals(param.get("INSPECTIONRESULT")))
            {
                inspItemId   = StringUtil.Object2String(param.get("INSPITEMID"));
                inspItemName = StringUtil.Object2String(param.get("INSPITEMNAME"));
                inspStandard = StringUtil.Object2String(param.get("INSPECTIONSTANDARD"));
                measureValue = StringUtil.Object2String(param.get("MEASUREVALUE"));

                if(inspItemIdAndValue.containsKey(inspItemId))
                {
                    valueList = inspItemIdAndValue.get(inspItemId).toString();
                    valueList = valueList +"/"+ measureValue ;
                    inspItemIdAndValue.replace(inspItemId, valueList);
                }
                else
                {
                    inspItemIdAndValue.put(inspItemId, inspItemName +"(" + inspStandard +") : " + measureValue);
                }
            }
        }

        return inspItemIdAndValue;
    }

    /**
    * @fn          : saveLotDefectMultiLot
    * @brief       : (Override method) 공정 4-Step 작업 처리 중 발생한 불량 정보를 저장 한다.
    * @Method Name : saveLotDefectMultiLot
    * @remark      : asis ==> SaveLotDefectMultiLot
    * @see
    *----------------------------------------------------------------------------------------------------
    * 공정 4-Step 작업 처리 중 발생한 불량 정보를 저장 한다.
    * (Table : sf_lotdefect)
    * @param ld Lot Data
    * @param dt 불량 정보 DataTable (불량코드 - DEFECTCODE, 수량 - QTY, 원인공정 - REASONSEGMENTID, 원인자재 - REASONCONSUMABLELOTID)
    * @param transitType 공정 4-Step 구분 (인수등록 - ReceiveLot, 작업시작 - TrackInLot, 작업완료 - TrackOutLot, 인계등록 - SendLot)
    */
    public void saveLotDefectMultiLot(Map<String, Object> lotParam, DataSetMap dsList, String transitType, String LotId, String txnGroupHistKey) throws Exception
    {
        for (int i = 0, len = dsList.size(); i < len; i++)
        {	
        	if(LotId.equals(dsList.get(i).get("RESOURCEID")))
            {
                insertLotDefect(lotParam, dsList.get(i), transitType, txnGroupHistKey);
            }
        }
    }

    /**
    * @fn          : insertLotDefect
    * @brief       : (Override method) bas_inspectionItemResult 에 검사 결과 저장
    * @Method Name : insertLotDefect
    * @remark      : asis ==> SaveLotDefectImpl
    * @see
    */
    public void insertLotDefect(Map<String, Object> lotParam, Map<String, Object> defectParam, String transitType, String txnGroupHistKey) throws Exception
    {
        Map<String, Object> processDefInfo = getProcessDefinitionInfo(lotParam);
        String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID"));
        String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION"));
        String processPathId     = getProcessPathId(lotParam, processDefId, processDefVersion);

        Map<String, Object> lotDefectMap = new HashMap<String, Object>();
        lotDefectMap.put("TXNHISTKEY",                 TxnHistKey.getTxnHistKey());
        lotDefectMap.put("LOTID",                      lotParam.get("LOTID"));
        lotDefectMap.put("ENTERPRISEID",               lotParam.get("ENTERPRISEID"));
        lotDefectMap.put("PLANTID",                    lotParam.get("PLANTID"));
        lotDefectMap.put("AREAID",                     lotParam.get("AREAID"));
        lotDefectMap.put("PRODUCTDEFID",               lotParam.get("PRODUCTDEFID"));
        lotDefectMap.put("PRODUCTDEFVERSION",          lotParam.get("PRODUCTDEFVERSION"));
        lotDefectMap.put("PROCESSDEFID",               processDefId);
        lotDefectMap.put("PROCESSDEFVERSION",          processDefVersion);
        lotDefectMap.put("PROCESSPATHID",              processPathId);
        lotDefectMap.put("USERSEQUENCE",               lotParam.get("USERSEQUENCE"));
        lotDefectMap.put("PROCESSSEGMENTID",           lotParam.get("PROCESSSEGMENTID"));
        lotDefectMap.put("PROCESSSEGMENTVERSION",      lotParam.get("PROCESSSEGMENTVERSION"));
        lotDefectMap.put("REASONAREAID",               defectParam.get("REASONAREAID"));
        lotDefectMap.put("DEFECTCODE",                 defectParam.get("DEFECTCODE"));
        lotDefectMap.put("DEFECTQTY",                  defectParam.get("DEFECTQTY"));
        lotDefectMap.put("QCSEGMENTID",                defectParam.get("QCSEGMENTID"));
        lotDefectMap.put("REASONSEGMENTID",            defectParam.get("REASONSEGMENTID"));
        lotDefectMap.put("REASONCONSUMABLELOTID",      defectParam.get("REASONCONSUMABLELOTID"));
        lotDefectMap.put("REASONCONSUMABLEDEFVERSION", defectParam.get("CONSUMABLEDEFVERSION"));
        lotDefectMap.put("OCCURREDSTEP",               transitType);
        lotDefectMap.put("VALIDSTATE",                 "Valid");

        /*checkpoint key채번 asis에 입력되어 추가함*/
        lotDefectMap.put("TXNGROUPHISTKEY",            txnGroupHistKey);
        
        generalDao.addUpdate(NAMESPACE + ".insertPcmLotDefectInspRslt", lotDefectMap);
    }

    /**
    * @fn          : getProcessDefinitionInfo
    * @brief       : (Override method) bas_inspectionItemResult 에 검사 결과 저장
    * @Method Name : insertLotDefect
    * @remark      : asis ==> GetProcessDefinitionInfoImpl
    * @see
    */
    public Map<String, Object> getProcessDefinitionInfo(Map<String, Object> lotParam) throws Exception
    {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("PROCESSDEFID",      lotParam.get("PROCESSDEFID"));
        result.put("PROCESSDEFVERSION", lotParam.get("PROCESSDEFVERSION"));

        if (!StringUtil.isNullOrEmpty(lotParam.get("SUBPROCESSDEFID")))
        {
            Map<String, Object> param = new HashMap<String, Object>();
            param.put("PROCESSDEFID",      lotParam.get("SUBPROCESSDEFID"));
            param.put("PROCESSDEFVERSION", lotParam.get("SUBPROCESSDEFVERSION"));

            Map<String, Object> defMap = generalDao.addSelectOneMap(NAMESPACE + ".selectProcessDefType", param);

            if (defMap == null)
            {
                throw new BizException("checkProcessDef", String.format("ProcessDefId : %s, ProcessDefVersion : %s", lotParam.get("SUBPROCESSDEFID"), lotParam.get("SUBPROCESSDEFVERSION")));
            }
      
            if ("Rework".equals(defMap.get("PROCESSDEFTYPE")))
            {
                result.put("PROCESSDEFID",      lotParam.get("SUBPROCESSDEFID") );
                result.put("PROCESSDEFVERSION", lotParam.get("SUBPROCESSDEFVERSION"));
            }
        }

        return result;
    }

    /**
    * @fn          : getProcessPathId
    * @brief       : (Override method)
    * @Method Name : getProcessPathId
    * @remark      : asis ==> GetProcessPathIdImpl
    * @see
    */
    public String getProcessPathId(Map<String, Object> lotParam, String processDefId, String processDefVersion) throws Exception
    {
        String processPathId = StringUtil.Object2String(lotParam.get("PROCESSPATHSTACK"));
        
        Map<String, Object> param = new HashMap<String, Object>();
        param.put("ENTERPRISEID",          lotParam.get("ENTERPRISEID"));
        param.put("PLANTID",               lotParam.get("PLANTID"));
        param.put("PROCESSDEFID",          processDefId);
        param.put("PROCESSDEFVERSION",     processDefVersion);
        param.put("PROCESSSEGMENTID",      lotParam.get("PROCESSSEGMENTID"));
        param.put("PROCESSSEGMENTVERSION", lotParam.get("PROCESSSEGMENTVERSION"));

        Map<String, Object> pathMap = generalDao.addSelectOneMap(NAMESPACE + ".selectProcessPathId", param);

        if(pathMap == null)
        {
        	throw new BizException("NotDefineRoutingPath");
        }

        processPathId = StringUtil.Object2String(pathMap.get("PROCESSPATHID"));

        return processPathId;
    }

    /**
    * @fn          : insertAbnormalOccurrenceShipmentInspAuto
    * @brief       : (Override method)
    * @Method Name : insertAbnormalOccurrenceShipmentInspAuto
    * @remark      : asis ==> insertAbnormalOccurrenceShipmentInspAuto
    * @see
    */
    public void insertAbnormalOccurrenceShipmentInspAuto(Map<String, Object> param, Map<String, Object> dataParam , Map<String, Object> lotParam, String abnormalType) throws Exception
    {
        String abnormalNO = qamService.getAbnormalNO();
        
        Map<String, Object> selMap = new HashMap<String, Object>();
        selMap.put("ABNOCRNO",   abnormalNO);
        selMap.put("ABNOCRTYPE", abnormalType);
        
        Map<String, Object> abnormalMap = new HashMap<String, Object>();
        abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", selMap);

        if(abnormalMap != null)
        {
            throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
        }

//        String finalInspAreaId = (String) dataParam.get("AREAID");
//        String finalInspProcessSegmentId = (String) dataParam.get("PROCESSSEGMENTID");
//        String finalInspProcessSegmentVersion = (String) dataParam.get("PROCESSSEGMENTVERSION");
//        String finalInspUserSequecne = (String) dataParam.get("USERSEQUENCE");

        abnormalMap.put("ABNOCRNO",                    abnormalNO);
        abnormalMap.put("ABNOCRTYPE",                  abnormalType);
        abnormalMap.put("PLANTID",                     lotParam.get("PLANTID"));
        abnormalMap.put("ENTERPRISEID",                lotParam.get("ENTERPRISEID"));
        abnormalMap.put("LOTID",                       StringUtil.Object2String(param.get("RESOURCEID"))==""?"*":param.get("RESOURCEID"));
        abnormalMap.put("PROCESSRELNO",                param.get("DEGREE"));
        abnormalMap.put("PROCESSDEFID",                lotParam.get("PROCESSDEFID"));
        abnormalMap.put("PROCESSDEFVERSION",           lotParam.get("PROCESSDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTID",            StringUtil.Object2String(dataParam.get("PROCESSSEGMENTID")));//finalInspProcessSegmentId
        abnormalMap.put("PROCESSSEGMENTVERSION",       StringUtil.Object2String(dataParam.get("PROCESSSEGMENTVERSION")));//finalInspProcessSegmentVersion
        abnormalMap.put("PRODUCTDEFID",                lotParam.get("PRODUCTDEFID"));
        abnormalMap.put("PRODUCTDEFVERSION",           lotParam.get("PRODUCTDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTCLASSID",       StringUtil.Object2String(param.get("PROCESSSEGMENTCLASSID"))==""?"*":param.get("PROCESSSEGMENTCLASSID"));
        abnormalMap.put("EQUIPMENTID",                 lotParam.get("EQUIPMENTID"));
        abnormalMap.put("CHILDEQUIPMENTID",            param.get("CHILDEQUIPMENTID"));
        abnormalMap.put("CONSUMABLEDEFID",             StringUtil.Object2String(param.get("CONSUMABLEDEFID"))==""?"*":param.get("CONSUMABLEDEFID"));
        abnormalMap.put("CONSUMABLEDEFVERSION",        StringUtil.Object2String(param.get("CONSUMABLEDEFVERSION"))==""?"*":param.get("CONSUMABLEDEFVERSION"));
        abnormalMap.put("STATE",                       param.get("STATE"));
        abnormalMap.put("REASONCODEID",                "LockShipmentNonconfirm");
        abnormalMap.put("USERSEQUENCE",                StringUtil.Object2String(dataParam.get("USERSEQUENCE")));//finalInspUserSequecne
        abnormalMap.put("AREAID",                      StringUtil.Object2String(dataParam.get("AREAID")));     //finalInspAreaId
        abnormalMap.put("DEGREE",                      param.get("DEGREE"));
        abnormalMap.put("DEFECTCODE",                  param.get("DEFECTCODE"));
        abnormalMap.put("QCSEGMENTID",                 param.get("QCSEGMENTID"));
        abnormalMap.put("NCRISSUEDATE",                 qamService.getCurrentSystemTime("yyyyMMddHHmmss"));
        abnormalMap.put("ISNCRISSUE",                  "Y");
        abnormalMap.put("REASONCONSUMABLEDEFID",       lotParam.get("REASONCONSUMABLEDEFID"));
        abnormalMap.put("REASONCONSUMABLEDEFVERSION",  lotParam.get("REASONCONSUMABLEDEFVERSION"));
        abnormalMap.put("REASONCONSUMABLELOTID",       param.get("REASONCONSUMABLELOTID"));
        abnormalMap.put("REASONSEGMENTID",             param.get("REASONSEGMENTID"));
        abnormalMap.put("REASONAREAID",                param.get("REASONAREAID"));
        abnormalMap.put("VALIDSTATE",                  "Valid");
        abnormalMap.put("LASTTXNID",                   "insertQamAbnormalOccurrenceInspRslt"); //checkpoint 구분하기 위해 임의추가
        generalDao.addUpdate(NAMEQAMCOM + ".insertQamAbnormalOccurrence", abnormalMap);

        dataParam.put("ABNOCRNO",   abnormalNO);
        dataParam.put("ABNOCRTYPE", abnormalType);
/*checkpoint
 * qcmservice와 동일한 로직이라서 생성하지 않고 변경함
 */
        //UpsertCAR.insertCARRequestAuto(dataParam);
        qamService.saveCARRequestAuto(dataParam);
    }

    /**
    * @fn          : saveNCRIssue
    * @brief       : (Override method) NCR 발행 팝업에서 NCR입력
    * @Method Name : saveNCRIssue
    * @remark      : asis ==> upsertNCRIssue
    * @see
    */
    public void saveNCRIssue(DataSetMap dsList, Map<String, Object> lotParam, String abnormalType, String areaId, String processSegmentId, String processSegmentVersion, String userSequence) throws Exception
    {
        Map<String, Object> param = new HashMap<String, Object>();
        for (int i = 0, len = dsList.size(); i < len; i++)
        {
            param = dsList.get(i);

            if(StringUtil.isNullOrEmpty(param.get("ABNOCRNO")))
            {//insert
                insertNCRAbnormalOccurrence(param, lotParam, abnormalType, areaId, processSegmentId, processSegmentVersion, userSequence);
            }else
            {//update
                updateNCRAbnormalOccurrence(param);
            }
        }
    }

    /**
    * @fn          : insertNCRAbnormalOccurrence
    * @brief       : (Override method)
    * @Method Name : insertNCRAbnormalOccurrence
    * @remark      : asis ==> insertNCRAbnormalOccurrence
    * @see
    */
    public void insertNCRAbnormalOccurrence(Map<String, Object> param, Map<String, Object> lotParam, String abnormalType, String areaId, String processSegmentId, String processSegmentVersion, String userSequence) throws Exception
    {
        String abnormalNO = qamService.getAbnormalNO();
        
        Map<String, Object> selMap = new HashMap<String, Object>();
        selMap.put("ABNOCRNO",   abnormalNO);
        selMap.put("ABNOCRTYPE", abnormalType);

        Map<String, Object> abnormalMap = new HashMap<String, Object>();
        abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", selMap);

        if(abnormalMap != null)
        {
            throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
        }

        abnormalMap.put("ABNOCRNO",                      abnormalNO);
        abnormalMap.put("ABNOCRTYPE",                    abnormalType);
        abnormalMap.put("PLANTID",                       param.get("PLANTID"));
        abnormalMap.put("ENTERPRISEID",                  param.get("ENTERPRISEID"));
        abnormalMap.put("LOTID",                         param.get("RESOURCEID"));
        abnormalMap.put("PROCESSRELNO",                  param.get("DEGREE"));
        abnormalMap.put("PROCESSDEFID",                  lotParam.get("PROCESSDEFID"));
        abnormalMap.put("PROCESSDEFVERSION",             lotParam.get("PROCESSDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTID",              processSegmentId);
        abnormalMap.put("PROCESSSEGMENTVERSION",         processSegmentVersion);
        abnormalMap.put("PRODUCTDEFID",                  lotParam.get("PRODUCTDEFID"));
        abnormalMap.put("PRODUCTDEFVERSION",             lotParam.get("PRODUCTDEFVERSION"));
        abnormalMap.put("PROCESSSEGMENTCLASSID",         StringUtil.Object2String(param.get("PROCESSSEGMENTCLASSID"))==""?"*":param.get("PROCESSSEGMENTCLASSID"));
        abnormalMap.put("EQUIPMENTID",                   lotParam.get("EQUIPMENTID"));
        abnormalMap.put("CHILDEQUIPMENTID",              StringUtil.Object2String(param.get("CHILDEQUIPMENTID"))==""?"*":param.get("CHILDEQUIPMENTID"));
        abnormalMap.put("CONSUMABLEDEFID",               StringUtil.Object2String(param.get("CONSUMABLEDEFID"))==""?"*":param.get("CONSUMABLEDEFID"));
        abnormalMap.put("CONSUMABLEDEFVERSION",          StringUtil.Object2String(param.get("CONSUMABLEDEFVERSION"))==""?"*":param.get("CONSUMABLEDEFVERSION"));
        abnormalMap.put("STATE",                         param.get("STATE"));
        abnormalMap.put("REASONCODEID",                  "LockShipmentNonconfirm");
        abnormalMap.put("USERSEQUENCE",                  userSequence);
        abnormalMap.put("AREAID",                        areaId);
        abnormalMap.put("DEGREE",                        param.get("DEGREE"));
        abnormalMap.put("DEFECTCODE",                    param.get("DEFECTCODE"));
        abnormalMap.put("QCSEGMENTID",                   param.get("QCSEGMENTID"));
        abnormalMap.put("NCRISSUEDATE",                  qamService.getCurrentSystemTime("yyyyMMdd"));
        abnormalMap.put("ISNCRISSUE",                    "Y");

        if("SpillShipmentInspection".equals(abnormalType))
        {//유출공정 -> 최종정보
            abnormalMap.put("REASONCONSUMABLEDEFID",     lotParam.get("PRODUCTDEFID"));
            abnormalMap.put("REASONCONSUMABLEDEFVERSION",lotParam.get("PRODUCTDEFVERSION"));
            abnormalMap.put("REASONCONSUMABLELOTID",     param.get("RESOURCEID"));
            abnormalMap.put("REASONSEGMENTID",           processSegmentId);
            abnormalMap.put("REASONAREAID",              areaId);
        }
        else if("ReasonShipmentInspection".equals(abnormalType))
        {//원인공정 -> 입력정보
            abnormalMap.put("REASONCONSUMABLEDEFID",     StringUtil.Object2String(param.get("REASONCONSUMABLEDEFID"))==""?"*":param.get("REASONCONSUMABLEDEFID"));
            abnormalMap.put("REASONCONSUMABLEDEFVERSION",StringUtil.Object2String(param.get("REASONCONSUMABLEDEFVERSION"))==""?"*":param.get("REASONCONSUMABLEDEFVERSION"));
            abnormalMap.put("REASONCONSUMABLELOTID",     StringUtil.Object2String(param.get("REASONCONSUMABLELOTID"))==""?"*":param.get("REASONCONSUMABLELOTID"));
            abnormalMap.put("REASONSEGMENTID",           StringUtil.Object2String(param.get("REASONSEGMENTID"))==""?"*":param.get("REASONSEGMENTID"));
            abnormalMap.put("REASONAREAID",              StringUtil.Object2String(param.get("REASONAREAID"))==""?"*":param.get("REASONAREAID"));
        }

        abnormalMap.put("VALIDSTATE",                    "Valid");
        abnormalMap.put("LASTTXNID",                     "insertNCRAbnormalOccurrenceInspRslt"); //checkpoint 구분하기 위해 임의추가

        generalDao.addUpdate(NAMEQAMCOM + ".insertQamAbnormalOccurrence", abnormalMap);
    }

    /**
    * @fn          : updateNCRAbnormalOccurrence
    * @brief       : (Override method)
    * @Method Name : updateNCRAbnormalOccurrence
    * @remark      : asis ==> updateNCRAbnormalOccurrence
    * @see
    */
    public void updateNCRAbnormalOccurrence(Map<String, Object> param) throws Exception
    {
        Map<String, Object> selMap = new HashMap<String, Object>();
        selMap.put("ABNOCRNO",   param.get("ABNOCRNO"));
        selMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));

        Map<String, Object> abnormalMap = new HashMap<String, Object>();
        abnormalMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQamAbnormalOccurrenceInfo", selMap);

        if(abnormalMap == null)
        {
            throw new BizException("InValidData001", String.format("AbnormalNO = %s, AbnormalType = %s", param.get("ABNOCRNO"), param.get("ABNOCRTYPE") ));
        }

        abnormalMap.put("DESCRIPTION", param.get("DESCRIPTION"));

        generalDao.addUpdate(NAMESPACE + ".updateQamAbnormalOccurrenceInspRslt", abnormalMap);
    }
}