package smh.qam.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import egovframework.rte.fdl.string.EgovObjectUtil;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMWipService;
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMReworkLotService;


/**
* @file        : QAM01900ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01900ServiceImpl
* @Company     : Built1
* @Create Date : 2021.04.19
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.19  yanghee.kim    최초  생성
*
*/
@Service
public class QAM01900ServiceImpl extends AbstractNbdfService implements QAM01900Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM01900Dao";
    public static final String NAMECMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    public static final String NAMEPCMCOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMEPCMWIP = "smh.pcm.dao.PCMWipDao";

    @Autowired
    private GeneralDao generalDao;
    @Autowired
    private QAMCommonService qamService;
    @Autowired
    private PCMWipService wipService;
    @Autowired
    private PCMReworkLotService reworkLotService;
    @Autowired
    private QAM01800Service qam01800Service;

    private String cancelUser; // 취소자
    private Date cancelDate; // 취소일시
    private String parentLotId; // 불량취소할 Lot의 모Lot ID
    private String lotId; // 불량취소할 Lot ID
    private String productDefId; // 품목 ID
    private String productDefVersion; // 품목 Version
    private Double panelPerQty; // PNL당 PCS수량
    private Double totalDefectQty; // 불량 총수량
    private Double cancelDefectQty; // 불량취소할 불량 총 PCS수량
    private Double cancelDefectPnl; // 불량취소할 불량 총 PNL수량
    //private TxnInfo txnInfo; // TxnInfo
    private String splitLotId; // Split된 Lot No
    private String txnUserId; // 트랙잭션 발생자
    private String routingType; // 라우팅 타입
    private String grandParentLotId; // 불량 Lot의 부모 Lot
    private boolean isNextSegment; // 다음공정이 있는지 유무
    private String inputProcessDefId; // Split 후 라우팅 ID
    private String inputProcessDefVersion; // Split 후 라우팅 Version
    private String inputProcessPathId; // Split 후 라우팅 상세정의 ID
    private String returnProcessPathId; // Split 및 재작업 후 돌아올 라우팅 상세정의 ID
    private boolean isRoutingCopy; // 라우팅 Copy 여부
    private String txnGroupHistKey; //

    /**
    * @fn          : selectLotDefectCodeList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 불량LOT
    * @Method Name : selectLotDefectCodeList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01900Service#selectLotDefectCodeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectLotDefectCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotDefectCodeList", param));
    }

    /**
    * @fn          : selectProductRoutingPreviousProcessPathsList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 라우팅
    * @Method Name : selectProductRoutingPreviousProcessPathsList
    * @remark      : 불량품 폐기취소 : 폐기취소할 LOT의 현재 공정의 이전공정 혹은 이후공정조회
* @see smh.qam.service.QAM01900Service#selectProductRoutingPreviousProcessPathsList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductRoutingPreviousProcessPathsList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProductRoutingPreviousProcessPathsList", param));
    }

    /**
    * @fn          : selectIsAllQtyDefectLot
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 해당 Lot의 취소수량을 받아와 완불처리 됬는지 판별
    * @Method Name : selectIsAllQtyDefectLot
    * @remark      :
* @see smh.qam.service.QAM01900Service#selectIsAllQtyDefectLot(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectIsAllQtyDefectLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectIsAllQtyDefectLot", param));
    }

    /**
    * @fn          : selectTotalLotDefectInfo
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 해당 Lot의 불량 총수량
    * @Method Name : selectTotalLotDefectInfo
    * @remark      :
* @see smh.qam.service.QAM01900Service#selectTotalLotDefectInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTotalLotDefectInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectTotalLotDefectInfo", param));
    }

    /**
    * @fn          : selectCurrentRoutingByLotList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 > 라우팅선택 > 재작업 후 공정
    * @Method Name : selectCurrentRoutingByLotList
    * @remark      :
* @see smh.qam.service.QAM01900Service#selectCurrentRoutingByLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectCurrentRoutingByLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCurrentRoutingByLotList", param));
    }

    /**
    * @fn          : selectTransitAreaList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 > 라우팅선택 > 재작업 후 공정
    * @Method Name : selectTransitAreaList
    * @remark      :
* @see smh.qam.service.QAM01900Service#selectTransitAreaList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTransitAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectTransitAreaList", param));
    }

    /**
    * @fn          : selectDefectCancelHistoryList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 내역조회
    * @Method Name : selectDefectCancelHistoryList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01900Service#selectDefectCancelHistoryList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectCancelHistoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectCancelHistoryList", param));
    }

    /**
    * @fn          : selectDefectCancelReworkRoutingList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 내역조회 > 공정순서
    * @Method Name : selectDefectCancelReworkRoutingList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01900Service#selectDefectCancelReworkRoutingList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectCancelReworkRoutingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProductRoutingPreviousProcessPathsList", param), "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectCancelReworkRoutingList", param), "output2");
    }

    /**
    * @fn          : selectReworkRoutingList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량내역 > 라우팅선택 > 재작업 라우팅
    * @Method Name : selectReworkRoutingList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01900Service#selectReworkRoutingList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectReworkRoutingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectReworkRoutingList", param));
    }

    /**
    * @fn          : selectProcessPathList
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량내역 > 라우팅선택 > 재작업 라우팅
    * @Method Name : selectProcessPathList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01900Service#selectProcessPathList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessPathList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessPathList", param));
    }

    /**
    * @fn          : saveLotDefectCancel
    * @brief       : (Override method) 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소
    * @Method Name : saveLotDefectCancel
    * @remark      : 상세설명
* @see smh.qam.service.QAM01900Service#saveLotDefectCancel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectCancel(UiMapDto dto) throws Exception {
        DataSetMap countMap = getParametersDataSetMap(dto, "ds_lotDefectCountList"); //취소할 불량코드 데이터
        DataSetMap routingMap = getParametersDataSetMap(dto, "ds_routingList");   //취소할 Lot 데이터        
        DataSetMap reworkMap = getParametersDataSetMap(dto, "ds_reworkLotDefectList"); //재작업 라우팅을 태우는 경우 선택된 라우팅 상세정의
        DataSetMap etcMap = getParametersDataSetMap(dto, "ds_saveEtcParam");
        Map<String, Object> routingParam = routingMap.get(0);
        Map<String, Object> etcParam = etcMap.get(0);
        List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>(); //취소된 Repair Lot 정보를 화면으로 전송
        
        splitLotId = null; // Split된 Lot No
        routingType = null; // 라우팅 타입
        inputProcessDefId = null; // Split 후 라우팅 ID
        inputProcessDefVersion = null; // Split 후 라우팅 Version
        inputProcessPathId = null; // Split 후 라우팅 상세정의 ID
        returnProcessPathId = null; // Split 및 재작업 후 돌아올 라우팅 상세정의 ID
        isRoutingCopy = false; // 라우팅 Copy 여부
        
        String sCancelDate = (String) etcParam.get("CANCELDATE");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        Date dCancelDate = dateFormat.parse(sCancelDate);

        cancelUser        = (String) etcParam.get("CANCELUSER"); // 취소자 세팅
        cancelDate        = dCancelDate; // 취소일시 세팅
        parentLotId       = (String) etcParam.get("PARENTLOTID"); // 모 Lot ID 세팅
        lotId             = (String) etcParam.get("LOTID"); // 불량취소할 Lot ID 세팅
        productDefId      = (String) etcParam.get("PRODUCTDEFID"); // 제품 ID
        productDefVersion = (String) etcParam.get("PRODUCTDEFVERSION"); // 제품 Version
        panelPerQty       = Double.parseDouble(etcParam.get("PANELPERQTY").toString()); // PNL당 PCS수량
        totalDefectQty    = Double.parseDouble(etcParam.get("TOTALDEFECTQTY").toString()); // 불량 총수량
        cancelDefectQty   = Double.parseDouble(etcParam.get("CANCELDEFECTPCS").toString()); // 불량취소할 불량 총 PCS수량
        cancelDefectPnl   = Double.parseDouble(etcParam.get("CANCELDEFECTPNL").toString()); // 불량취소할 불량 총 PNL수량

        /*txnInfo에 포함되는 값(추측)   txngrouphistkey/txnuser(로그인사용자)/txntime(sysdate) */
        //txnInfo           = TransactionUtils.getTransactionInfo(txnData); // TxnInfo 세팅
        txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
        txnUserId       = SessionUtil.getUserId(); // 트랙잭션 발생자

        Map<String, Object> txnInfo = new HashMap<String, Object>();
        txnInfo.put("TXNUSER",  txnUserId);
        txnInfo.put("JOB_FLAG", "QAM");

        if ("true".equals(etcParam.get("ISNEXTSEGMENT")))
            isNextSegment = true; // 다음공정이 있는지 유무
        else if ("false".equals(etcParam.get("ISNEXTSEGMENT")))
            isNextSegment = false; // 다음공정이 있는지 유무

        Map<String, Object> param;
        int result = 0;

        /************************************************************************************************
         * BAS_LOTDEFECT에 수량조정 및 ValidState 관리
         *************************************************************************************************/
        for (int i = 0, n = countMap.size(); i < n; i++) {
            param = countMap.get(i);
            updateDefectLotValidState(param); //BAS_LOTDEFECT에 수량조정 및 Valid 관리
        }

        /************************************************************************************************
         * PCM_LOT에 불량 Lot을 양품 Lot으로 Update
         * 불량 Lot의 부모 Lot 세팅
         * Original Lot Merge Check여부에 따라 Lot을 Merge할 것인지 Split할 것인지 체크
         * Lot을 Split하기 전에 양품으로 만들고 Split한 후 다시 불량으로 처리
         * 샘플라우팅인 경우 Split Lot에 대한 라우팅정보, BOR, BOM정보를 복사
         * 공정진행상태에 따라서 재작업 및 품목라우팅 처리
         * 양품으로 떨어져 나온 Split Lot에 대해서 Update
         *************************************************************************************************/        
        updateNormalLot(lotId);// PCM_LOT에 불량 Lot을 양품 Lot으로 Update
        grandParentLotId = generalDao.addSelectOne(NAMESPACE + ".selectParentLotId", etcParam); // 불량 Lot의 부모 Lot 세팅
        
        logger.error("***** QAM01900 MergeCheck::" +routingParam.get("MERGECHECK") + "- LotId::" +lotId+"- CancleCode::"+routingParam.get("CANCELCODE"));
        
        //취소할 Lot정보 Row
        if ("1".equals(routingParam.get("MERGECHECK")))
        {            
            updateMergeLot(parentLotId, cancelDefectQty); //PCM_LOT의 부모 LOT에  Merge
        }
        //Split할 경우
        else
        {
            /************************************************************************************************
             * Split 수행
             *************************************************************************************************/            
            Map<String, Object> splitLotMap = wipService.splitLot(dto, lotId, cancelDefectQty, cancelDefectQty);
            splitLotId = (String) splitLotMap.get("LOTID");
            
            /************************************************************************************************
             * 2021.06.08 TOBE Add panelPerQty 반영 및 반영한 정보를 splitLotMap에 반영 
             * 기존 updateNormalLot에서 수행하던 작업을 splitLot 작업후 수행하도록 분리
             *************************************************************************************************/            
            updateLotPanelPerQty(splitLotId, panelPerQty);            
            splitLotMap = wipService.validateLotInfo(splitLotId);
            
            /************************************************************************************************
             * 2021.07.23 TOBE Add 불량LOT의 ISDEFECTED UPDATE
             * 기존 updateNormalLot에서 수행하던 작업을 splitLot 작업후 수행하도록 분리
             *************************************************************************************************/
            updateDefectLotIsDefected(lotId);
            
            // Split Lot의 Parent 객체
            Map<String, Object> parentLotMap = new HashMap<String, Object>();
            parentLotMap.put("LOTID", parentLotId);
            parentLotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", parentLotMap);

            /************************************************************************************************
             * 복사된 라우팅 인지 확인하여 셋팅
             *************************************************************************************************/
            setIsCopyRouting(routingParam);

            /************************************************************************************************
             * 복사된 라우팅 정보 및 재작업 후 라우팅 정보 세팅
             *************************************************************************************************/
            setInputProcessDefInfo(routingParam);  // 복사된 라우팅 정보 저장
            setReturnProcessDefInfo(routingParam); // 복사된 재작업 후 라우팅 정보 저장

            /************************************************************************************************
             * 취소사유, 공정진행상태, 라우팅타입에 따른 로직처리
             *************************************************************************************************/
            // 취소사유가 재작업인 경우
            if ("Rework".equals(routingParam.get("CANCELCODE")))
            {
                // 품목라우팅을 태우는 경우
                if (reworkMap.size() == 0)
                {
                    //품목라우팅 상의 이전공정에 대한 재작업처리이므로 Lot의 공정진행상태에 상관없이 리포지션만 진행하면 된다.
                    repositionSegment(dto, routingParam); // 품목 라우팅 Reposition
                    updateReworkState(splitLotMap); // 재작업 여부 N으로 업데이트
                }
                // 재작업라우팅을 태우는 경우
                else
                {
                    /****************************************************************************************************************
                     * 재작업라우팅 Function 호출
                     * @param splitLotId - 불량취소 후 재생된 Lot No
                     * @param reworkProcessDefId - 재작업 라우팅 ID
                     * @param reworkProcessDefVersion - 재작업 라우팅 Version
                     * @param resourceId - 현재 Lot의 자원 ID
                     * @param areaId - 현재 Lot의 작업장 ID
                     * @param returnProcessPathId - 돌아올 라우팅 상세정의 ID
                     * @param returnResourceId - 돌아올 라우팅 상세정의에 해당하는 자원 ID
                     * @param returnAreaId - 돌아올 라우팅 상세정의에 해당하는 작업장 ID
                     * @param enterprisdId - 현재 Lot의 회사 ID
                     * @param plantId - 현재 Lot의 Site ID
                     * @param isProductRouting - 품목라우팅 여부 (N)
                     * @param reworkResourceId - 재작업 첫공정의 자원 ID
                     * @param reworkPathId - 재작업 라우팅 첫공정의 라우팅 상세정의 ID
                     * @param reworkAreaId - 재작업 첫공정의 작업장 ID
                     * @param txnInfo - 트랙잭션 정보
                     ****************************************************************************************************************/
                    String reworkProcessDefId      = (String) routingParam.get("INPUTPROCESSDEFID");
                    String reworkProcessDefVersion = (String) routingParam.get("INPUTPROCESSDEFVERSION");
                    String resourceId              = (String) routingParam.get("INPUTRESOURCEID");
                    String areaId                  = (String) routingParam.get("INPUTAREAID");
                    String returnProcessPathId     = (String) routingParam.get("RETURNPROCESSPATHID");
                    String returnResourceId        = (String) routingParam.get("RETURNRESOURCEID");
                    String returnAreaId            = (String) routingParam.get("RETURNAREAID");
                    String enterpriseId            = (String) splitLotMap.get("ENTERPRISEID");
                    String plantId                 = (String) splitLotMap.get("PLANTID");
                    String isProductRouting        = "N";
                    String reworkResourceId        = (String) routingParam.get("INPUTRESOURCEID");
                    String reworkPathId            = (String) routingParam.get("INPUTPROCESSPATHID");
                    String reworkAreaId            = (String) routingParam.get("INPUTAREAID");

                    reworkLotService.ReworkLot(dto, splitLotId, reworkProcessDefId, reworkProcessDefVersion, resourceId, areaId
                                             , returnProcessPathId, returnResourceId, returnAreaId
                                             , enterpriseId, plantId, isProductRouting
                                             , reworkResourceId, reworkPathId, reworkAreaId, txnInfo);
                }
            }
            // 취소사유가 불량취소인 경우
            else if ("Retest".equals(routingParam.get("CANCELCODE")))
            {
                insertSplitLotWorkResult(parentLotMap, splitLotMap, cancelDefectQty); // 모 Lot 실적 Copy
                updateSplitLotWaitForReceiveWorkResult(splitLotMap); // 작업실적 초기화
                updateReworkState(splitLotMap); // 재작업 여부 N으로 업데이트
            }
            // 취소사유가 양품인계인 경우
            else
            {            	
            	insertSplitLotWorkResult(parentLotMap, splitLotMap, cancelDefectQty);// 모 Lot 실적 Copy
           	
            	Map<String, Object> copySplitLotMap = new HashMap<String, Object>();
            	copySplitLotMap.putAll(splitLotMap);
            	//해당 Lot을 인계 등록 처리한다. (ProcessState : WaitForSend -> WaitForReceive)            	
            	wipService.dispatchLot(dto, copySplitLotMap, (String) routingParam.get("INPUTAREAID"), (String) routingParam.get("INPUTRESOURCEID")); // Split Lot 인계처리                

                Date nowDate = qamService.getCurrentSystemTime("yyyyMMddHHmmss");

                // 인계실적 입력
                wipService.saveLotWorkResult(dto, splitLotMap, TransitType.SendLot, txnUserId, nowDate, (String) routingParam.get("INPUTRESOURCEID"), (String) routingParam.get("INPUTAREAID"));

                sendLotCheck(routingParam, splitLotMap); // Send Lot 체크
                repositionSegment(dto, routingParam); // Reposition
                updateReworkState(splitLotMap); // 재작업 여부 N으로 업데이트
            }

            // Split 된 Lot에 대해 필요한 정보 업데이트
            updateSplitLotInfo(splitLotId, grandParentLotId, parentLotMap, cancelDefectQty, routingParam);
   
            // Split 된 Lot에 대해 작업실적 라우팅정보를 LOT기준으로 업데이트한다.
            updateSplitLotWorkResultInfo(splitLotId);
        }
        
        // PCM_LOT에 양품상태로 바꿨던 불량 Lot을 다시 불량 Lot으로 바꿔준다.
        updateDefectLot(lotId);

        /************************************************************************************************
         * QAM_QCLOTDEFECTCANCEL(Lot기준), QAM_QCLOTDEFECTCANCELDEFECT(불량기준), QAM_QCLOTDEFECTCANCELREWORK(재작업라우팅)에 데이터 삽입
         * Skip한 라우팅이 있다면 SF_LOTPLAN에 Skip한 라우팅 상세 정보 삽입
         *************************************************************************************************/
        String txnHistKey =  TxnHistKey.getTxnHistKey(); // 품질 테이블 Hist Key
        routingType = reworkMap.size() == 0 ? "Product" : "Rework"; // 라우팅 타입

        //QAM_QCLOTDEFECTCANCEL에 취소한 Lot정보 삽입
        insertCancelData(routingParam, txnHistKey);

        param = null;
        for (int i = 0; i < countMap.size(); i++)
        {
            param = countMap.get(i);

            // QAM_QCLOTDEFECTCANCELDEFECT에 취소한 불량정보 삽입
            insertCancelDefectData(param, txnHistKey);
            
            //불량확정된 정보를 불량폐기 취소할 경우만 ERP에 연계
            int cnt = generalDao.addSelectCount(NAMESPACE + ".selectInterfaceLotDefectResultChk", param);
            if (cnt > 0)
            {
            	param.put("DEFECTQTY", param.get("CANCELPCSQTY")); // 취소 PCS 수량
            	qam01800Service.insertErpInterface(param, "ConfirmCancel");
            }
        }

        param = null;
        // 저장할 사용자정의 재작업라우팅이 있다면 저장
        if (reworkMap.size() > 0)
        {
            for (int i = 0; i < reworkMap.size(); i++)
            {
                param = reworkMap.get(i);
                
                // QAM_QCLOTDEFECTCANCELREWORK에 취소한 Lot의 재작업라우팅정보 삽입
                insertCancelCustomRoutingData(param, txnHistKey);

                // Skip하는 공정이라면 PCM_LOTPLAN에 삽입
                if ("Y".equals(param.get("ISSKIP")))
                {
                    // PCM_LOTPLAN에 Skip한 라우팅 상세정의 삽입
                    insertCancelSkipRoutingData(param, splitLotId);
                }
            }
        }

        // 화면으로 Lot No, 수량 Response
        Map<String, Object> repairLotMap = new HashMap<String, Object>();
        repairLotMap.put("LOTID", splitLotId);
        repairLotMap.put("QTY", cancelDefectQty);
        responseDt.add(repairLotMap);

        putDataSetMap(dto, responseDt);
    }

    /**
    * @fn          : updateDefectLotValidState
    * @brief       : (Override method) 불량취소할 Defect Lot의 갯수 및 ValidState 조정
    * @Method Name : updateDefectLotValidState
    * @remark      : asis => getUpdateDefectLotValidState
    * @see
    */
    private int updateDefectLotValidState(Map<String, Object> param) throws Exception
    {
        int result = 0;

        Map<String, Object> defectMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotDefectChk", param);
        Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", param);
        
        // Row별로 취소할 불량수량과 총 불량수량이 같다면 해당 불량코드는 수량을 0으로 만들어 준뒤 Invalid로 변경(전량취소)
        if (param.get("CANCELPCSQTY").equals(param.get("DEFECTPCSQTY")))
        {
            defectMap.put("DEFECTQTY", 0);
            defectMap.put("VALIDSTATE", "Invalid");
        }
        // 그렇지 않은경우 수량만 변경(일부취소)
        else
        {
            int defectPcsQty = (int) param.get("DEFECTPCSQTY");
            int cancelPcsQty = (int) param.get("CANCELPCSQTY"); // 불량수량 - 취소수량
            defectMap.put("DEFECTQTY", defectPcsQty-cancelPcsQty);
        }

        /*checkpoint key채번 asis에 입력되어 추가함*/
        defectMap.put("TXNGROUPHISTKEY", txnGroupHistKey);
        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotDefectValidStateDefectCancle", defectMap);

        return result;
    }

    /**
    * @fn          : updateNormalLot
    * @brief       : (Override method) 불량코드를 가지고 있는 불량 Lot을 양품상태로 바꿔준다.
    * @Method Name : updateNormalLot
    * @remark      : 상세설명
    * @see
    */
    private int updateNormalLot(String lotId) throws Exception
    {
        int result = 0;
        Map<String, Object> lotMap = new HashMap<String, Object>();
        lotMap.put("LOTID", lotId);
        lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);
        
        //checkpoint history 생성을 위해 현재 Lot 상태 Copy
        Map<String, Object> histLotMap = new HashMap<String, Object>();
        histLotMap.putAll(lotMap);
        
        Double panelQty = panelPerQty == 0.0 ? 0 : Math.ceil(totalDefectQty / panelPerQty);

        lotMap.put("QTY",          totalDefectQty); // 총수량
        lotMap.put("PCSQTY",       totalDefectQty); // PCS수량
        lotMap.put("PANELQTY",     panelQty.intValue());// PNL수량
        lotMap.put("DEFECTQTY",    0); // 불량수량
        lotMap.put("ISLOCKING",    "N"); // LOCKING 여부
        lotMap.put("ISDEFECTED",   "N"); // 불량여부
        lotMap.put("LOTSTATE",     LotState.InProduction); // Lot상태 InProduction
        lotMap.put("PROCESSSTATE", "WaitForReceive");

        /*checkpoint key채번 asis에 입력되어 추가함*/
        lotMap.put("LASTTXNGROUPHISTKEY", txnGroupHistKey);
        lotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotNormalLotDefectCancle", lotMap);

        /*checkpoint history 생성*/
        if (result > 0)
        {
        	lotMap.put("TXNHISTKEY",       lotMap.get("LASTTXNHISTKEY"));
        	lotMap.put("PREVQTY",          histLotMap.get("QTY")); //이전 수량
            lotMap.put("PREVPCSQTY",       histLotMap.get("PCSQTY")); //이전 PCS 수량
            lotMap.put("PREVPANELQTY",     histLotMap.get("PANELQTY"));//이전 PNL수량
            lotMap.put("PREVDEFECTQTY",    histLotMap.get("DEFECTQTY")); //이전 불량수량
            lotMap.put("PREVLOTSTATE",     histLotMap.get("LOTSTATE")); //이전 Lot상태 InProduction
            lotMap.put("PREVPROCESSSTATE", histLotMap.get("PROCESSSTATE")); //이전 LOT 공정진행 상태            

            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", lotMap);
        }

        return result;
    }
    
    /**
    * @fn          : updateNormalLot
    * @brief       : (Override method) 불량코드를 가지고 있는 불량 Lot을 양품상태로 바꿔준다.
    * @Method Name : updateNormalLot
    * @remark      : 상세설명
    * @see
    */
    private int updateDefectLotIsDefected(String lotId) throws Exception
    {
        int result = 0;
        Map<String, Object> lotMap = new HashMap<String, Object>();
        lotMap.put("LOTID", lotId);
        lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);
        
        //checkpoint history 생성을 위해 현재 Lot 상태 Copy
        Map<String, Object> histLotMap = new HashMap<String, Object>();
        histLotMap.putAll(lotMap);
        
        lotMap.put("ISDEFECTED",   "N"); // 불량여부
        lotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotNormalLotDefectCancle", lotMap);

        /*checkpoint history 생성*/
        if (result > 0)
        {
        	lotMap.put("TXNHISTKEY",       lotMap.get("LASTTXNHISTKEY"));
            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", lotMap);
        }

        return result;
    }
    

    /**
    * @fn          : updateMergeLot
    * @brief       : (Override method) Merge 수량만큼 모Lot에 반영
    * @Method Name : updateMergeLot
    * @remark      : 상세설명
    * @see
    */
    private int updateMergeLot(String parentLotId, double MergeQty) throws Exception
    {
        int result = 0;
        Map<String, Object> lotMap = new HashMap<String, Object>();
        lotMap.put("LOTID", parentLotId);
        lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectParentLotQty", lotMap);
        
        Map<String, Object> histLotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);
        
        double qty= StringUtil.Object2Double(lotMap.get("QTY"));
        Double totalMergeQty =  qty + MergeQty;
        //defectPcsQty/panelPerQty => 올림 처리하여 Lot PannelQty Update
        Double totalMergePNLQty = panelPerQty == 0.0 ? 0 : Math.ceil(totalMergeQty / panelPerQty);

        lotMap.put("QTY",          totalMergeQty); // Merge된 총수량
        lotMap.put("PCSQTY",       totalMergeQty); // Merge된 총수량
        lotMap.put("PANELQTY",     totalMergePNLQty); // 불량수량
        lotMap.put("DEFECTQTY",    0); // 불량수량
        lotMap.put("ISLOCKING",    "N"); // LOCKING 여부
        lotMap.put("ISDEFECTED",   "N"); // 불량여부
        lotMap.put("LOTSTATE",     LotState.InProduction); // Lot상태 InProduction
        lotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotMergeLotDefectCancle", lotMap);

        /*checkpoint history 생성*/
        if (result > 0)
        {
        	Map<String, Object> histMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);
        	histMap.put("TXNHISTKEY",       histMap.get("LASTTXNHISTKEY"));
        	histMap.put("PREVQTY",          histLotMap.get("QTY")); //이전 수량
        	histMap.put("PREVPCSQTY",       histLotMap.get("PCSQTY")); //이전 PCS 수량
        	histMap.put("PREVPANELQTY",     histLotMap.get("PANELQTY"));//이전 PNL수량
        	histMap.put("PREVDEFECTQTY",    histLotMap.get("DEFECTQTY")); //이전 불량수량
        	histMap.put("PREVLOTSTATE",     histLotMap.get("LOTSTATE")); //이전 Lot상태 InProduction           

            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", lotMap);
        }
        return result;
    }
    
    /**
     * @fn          : updateLotPanelPerQty
     * @brief       : (Override method) Parent Lot의 PanelPerQty를 Child Lot의 PanelPerQty에 반영
     * @Method Name : updateMergeLot
     * @remark      : 상세설명
     * @see
     */
     private int updateLotPanelPerQty(String lotId, double PanelPerQty) throws Exception
     {
         int result = 0;
         Map<String, Object> lotMap = new HashMap<String, Object>();         
         lotMap.put("LOTID", lotId);
         lotMap.put("PANELPERQTY",  PanelPerQty);
         lotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
         result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotPanelPerQtyDefectCancle", lotMap);
         
         lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);
         
         /*checkpoint history 생성*/
         if (result > 0)
         {
         	 lotMap.put("TXNHISTKEY",       lotMap.get("LASTTXNHISTKEY"));         	
             generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", lotMap);
         }
         
         return result;         
     }    
   

    /**
    * @fn          : setIsCopyRouting
    * @brief       : (Override method) 라우팅이 복사된 Lot인지 확인
    * @Method Name : setIsCopyRouting
    * @remark      : 상세설명
    * @see
    */
    private void setIsCopyRouting(Map<String, Object> routingParam) throws Exception
    {
        Map<String, Object> lotMap = new HashMap<String, Object>();
        lotMap.put("LOTID", routingParam.get("LOTID"));
        lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);

        Map<String, Object> processDefinitionMap = new HashMap<String, Object>();
        processDefinitionMap.put("PROCESSDEFID",      lotMap.get("PROCESSDEFID"));
        processDefinitionMap.put("PROCESSDEFVERSION", lotMap.get("PROCESSDEFVERSION"));

        processDefinitionMap = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProcessDefinitionInfo", processDefinitionMap);

        // 복사되지 않았다면 false
        if (   processDefinitionMap == null
           || !"Lot".equals(processDefinitionMap.get("PROCESSDEFTYPE"))
           && !lotId.equals(processDefinitionMap.get("PROCESSDEFID")))
        {
            isRoutingCopy = false;
        }
        // 복사됬다면 true
        else
        {
            isRoutingCopy = true;
        }
    }

    /**
    * @fn          : setInputProcessDefInfo
    * @brief       : (Override method) Split 후 복사된 라우팅 정보를 세팅한다.
    * @Method Name : setInputProcessDefInfo
    * @remark      : 상세설명
    * @see
    */
    private void setInputProcessDefInfo(Map<String, Object> routingParam) throws Exception
    {
        if (isRoutingCopy)
        {
            String inputSegmentId = "";
            String returnProcessDefId = (String) routingParam.get("RETURNPROCESSDEFID");

            if (EgovObjectUtil.isNull(returnProcessDefId) || "".equals(returnProcessDefId) || returnProcessDefId == null)
            {
                inputSegmentId = (String) routingParam.get("INPUTSEGMENTID");
            }
            else
            {
                inputSegmentId = (String) routingParam.get("RETURNSEGMENTID");
            }

            Map<String, Object> processpathMap = new HashMap<String, Object>();
            processpathMap.put("PROCESSDEFID",      splitLotId);
            processpathMap.put("PROCESSDEFVERSION", "*");
            processpathMap.put("PROCESSSEGMENTID",  inputSegmentId);

            processpathMap = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProcessPath", processpathMap);

            inputProcessDefId      = (String) processpathMap.get("PROCESSDEFID");
            inputProcessDefVersion = (String) processpathMap.get("PROCESSDEFVERSION");
            inputProcessPathId     = (String) processpathMap.get("PROCESSPATHID");
        }
        else
        {
            inputProcessDefId      = (String) routingParam.get("INPUTPROCESSDEFID");
            inputProcessDefVersion = (String) routingParam.get("INPUTPROCESSDEFVERSION");
            inputProcessPathId     = (String) routingParam.get("INPUTPROCESSPATHID");
        }
    }

    /**
    * @fn          : setReturnProcessDefInfo
    * @brief       : (Override method) Split 및 재작업 후 복사된 라우팅 정보를 세팅한다.
    * @Method Name : setReturnProcessDefInfo
    * @remark      : 상세설명
    * @see
    */
    private void setReturnProcessDefInfo(Map<String, Object> routingParam) throws Exception
    {
        if (isRoutingCopy)
        {
            Map<String, Object> processpathMap = new HashMap<String, Object>();
            processpathMap.put("PROCESSDEFID",      splitLotId);
            processpathMap.put("PROCESSDEFVERSION", "*");
            processpathMap.put("PROCESSSEGMENTID",  routingParam.get("RETURNSEGMENTID"));

            processpathMap = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProcessPath", processpathMap);

            if (processpathMap.size() > 0)
            {
                returnProcessPathId = (String) processpathMap.get("PROCESSPATHID");
            }
        }
        else
        {
            String processPathId = (String) routingParam.get("RETURNPROCESSPATHID");
            if (!EgovObjectUtil.isNull(processPathId) && !"".equals(processPathId) && processPathId != null)
            {
                returnProcessPathId = (String) routingParam.get("RETURNPROCESSPATHID");
            }
        }
    }

/*checkpoint 메소드 명칭 룰 고려
 *
 */

    /**
    * @fn          : repositionSegment
    * @brief       : (Override method) 품목라우팅을 태우는 경우 Reposition API 호출
    * @Method Name : repositionSegment
    * @remark      : 상세설명
    * @see
    */
    private void repositionSegment(UiMapDto dto, Map<String, Object> param) throws Exception
    {
        Map<String, Object> repositionMap = new HashMap<String, Object>();
        repositionMap.put("LOTID",             splitLotId);
        repositionMap.put("DESTPROCESSPATHID", inputProcessPathId); // 투입 라우팅 상세 정의 ID
        repositionMap.put("AREAID",            param.get("INPUTAREAID")); // 투입 작업장

/*checkpoint 확인필요 repositionMap.setUdf("RESOURCEID",     param.get("INPUTRESOURCEID")); // 투입 Resource ID
 *
 */
        repositionMap.put("RESOURCEID",     param.get("INPUTRESOURCEID")); // 투입 Resource ID

/*checkpoint 확인필요
 *    LotService.repositionSegment(repositionMap, txnInfo);
 */
        Map<String, Object> wipLotMap = wipService.validateLotInfo(splitLotId);        
        reworkLotService.repositionSegment(inputProcessPathId, repositionMap, splitLotId, wipLotMap);
                
        // 실적 데이터 생성
        Map<String, Object> lotMap = new HashMap<String, Object>();
        lotMap.put("LOTID", splitLotId);
        lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);

        double createdQty = Double.parseDouble(lotMap.get("CREATEDQTY").toString());
        Date nowDate = qamService.getCurrentSystemTime("yyyyMMddHHmmss");

        wipService.saveLotWorkResultForCurrentProcess(dto, lotMap, createdQty, nowDate);
    }

    /**
    * @fn          : updateReworkState
    * @brief       : (Override method) ISREWORK을 N으로 변경
    * @Method Name : updateReworkState
    * @remark      : asis => ChangeReworkState
    * @see
    */
    private void updateReworkState(Map<String, Object> param) throws Exception
    {
    	int result = 0;
    	Map<String, Object> lotMap = new HashMap<String, Object>();    	    	
    	lotMap.put("LOTID",    param.get("LOTID"));
    	lotMap.put("ISREWORK", "N");
        //param.setLasttxnid(this.getClass().getSimpleName());

        /*checkpoint key채번 asis에 입력되어 추가함*/
    	lotMap.put("LASTTXNHISTKEY",      TxnHistKey.getTxnHistKey());
    	lotMap.put("LASTTXNGROUPHISTKEY", txnGroupHistKey);

        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotReworkStateDefectCancle", lotMap);
        
        /*checkpoint history 생성*/
        if (result > 0)
        {
        	lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);
        	lotMap.put("TXNHISTKEY", lotMap.get("LASTTXNHISTKEY"));
            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", lotMap);
        }
    }


    /**
    * @fn          : insertSplitLotWorkResult
    * @brief       : (Override method) Split Lot의 작업실적 입력
    * @Method Name : insertSplitLotWorkResult
    * @remark      : asis => SetSplitLotWorkResult
    * @see
    */
    public String insertSplitLotWorkResult(Map<String, Object> parentLotParam, Map<String, Object> childParam, double splitQty) throws Exception
    {
        String childLotId = (String) childParam.get("LOTID");
        String txnHistKey = TxnHistKey.getTxnHistKey();

        //LOT 작업실적
        Map<String, Object> lotWorkResultMap = new HashMap<String, Object>();
        lotWorkResultMap = getWorkResult(parentLotParam);
        
        if (lotWorkResultMap == null)
        {
            throw new BizException("InValidData001", String.format("lotId = %s", childLotId));
        }
        lotWorkResultMap.put("TXNHISTKEY",              txnHistKey);
        lotWorkResultMap.put("LOTID",                   childLotId);
        lotWorkResultMap.put("PROCESSSEGMENTID",        childParam.get("PROCESSSEGMENTID"));
        lotWorkResultMap.put("PROCESSSEGMENTVERSION",   childParam.get("PROCESSSEGMENTVERSION"));
        lotWorkResultMap.put("ENTERPRISEID",            childParam.get("ENTERPRISEID"));
        lotWorkResultMap.put("PLANTID",                 childParam.get("PLANTID"));
        lotWorkResultMap.put("FACTORYID",               childParam.get("FACTORYID"));
        lotWorkResultMap.put("AREAID",                  childParam.get("AREAID"));
        lotWorkResultMap.put("PRODUCTIONORDERID",       childParam.get("PRODUCTIONORDERID"));
        lotWorkResultMap.put("LINENO",                  childParam.get("LINENO"));
        lotWorkResultMap.put("PRODUCTDEFID",            childParam.get("PRODUCTDEFID"));
        lotWorkResultMap.put("PRODUCTDEFVERSION",       childParam.get("PRODUCTDEFVERSION"));
        lotWorkResultMap.put("USERSEQUENCE",            childParam.get("USERSEQUENCE"));
        lotWorkResultMap.put("ISPRINTLOTCARD",          childParam.get("ISPRINTLOTCARD"));
        lotWorkResultMap.put("WEEK",                    childParam.get("WEEK"));

        String isRework = (String) lotWorkResultMap.get("ISREWORK");

        if (EgovObjectUtil.isNull(isRework) || "".equals(isRework) || isRework == null)
        {
            lotWorkResultMap.put("ISREWORK", "N");
        }

        lotWorkResultMap.put("REWORKTYPE",              childParam.get("REWORKTYPE"));
        lotWorkResultMap.put("WORKENDPCSQTY",           splitQty);
        lotWorkResultMap.put("WORKSTARTARRAYQTY",       splitQty);
/*checkpoint 똑같은 작업 수행하는데....
 *      lotWorkResultMap.put("WORKSTARTARRAYQTY", splitQty);
 */
        generalDao.addUpdate(NAMESPACE + ".insertPcmLotWorkResultSplitLotDefectCancel", lotWorkResultMap);

        return txnHistKey;
    }

    /**
    * @fn          : updateSplitLotWaitForReceiveWorkResult
    * @brief       : (Override method) Split Lot의 인수대기 상태에 대한 작업실적 초기화
    * @Method Name : updateSplitLotWaitForReceiveWorkResult
    * @remark      : asis => SetSplitLotWaitForReceiveWorkResult
    * @see
    */
    public void updateSplitLotWaitForReceiveWorkResult(Map<String, Object> childParam) throws Exception
    {
        Map<String, Object> lotWorkResultMap = new HashMap<String, Object>();
        lotWorkResultMap = getWorkResult(childParam);
        
        lotWorkResultMap.put("RECEIVETIME",       null);
        lotWorkResultMap.put("RECEIVEUSER",       null);
        lotWorkResultMap.put("WORKSTARTTIME",     null);
        lotWorkResultMap.put("WORKSTARTUSER",     null);
        lotWorkResultMap.put("WORKENDTIME",       null);
        lotWorkResultMap.put("WORKENDUSER",       null);
        lotWorkResultMap.put("SENDTIME",          null);
        lotWorkResultMap.put("SENDUSER",          null);
        lotWorkResultMap.put("RECEIVEPCSQTY",     null);
        lotWorkResultMap.put("RECEIVEARRAYQTY",   null);
        lotWorkResultMap.put("RECEIVEPANELQTY",   null);
        lotWorkResultMap.put("WORKSTARTPCSQTY",   null);
        lotWorkResultMap.put("WORKSTARTARRAYQTY", null);
        lotWorkResultMap.put("WORKSTARTPANELQTY", null);
        lotWorkResultMap.put("WORKENDPCSQTY",     null);
        lotWorkResultMap.put("WORKENDARRAYQTY",   null);
        lotWorkResultMap.put("WORKENDPANELQTY",   null);
        lotWorkResultMap.put("SENDPCSQTY",        null);
        lotWorkResultMap.put("SENDARRAYQTY",      null);
        lotWorkResultMap.put("SENDPANELQTY",      null);

        generalDao.addUpdate(NAMESPACE + ".updatePcmLotWorkResultWaitInitialDefectCancle", lotWorkResultMap);
    }

    /**
    * @fn          : sendLotCheck
    * @brief       : (Override method) sendLotCheck
    * @Method Name : sendLotCheck
    * @remark      : 상세설명
    * @see
    */
    private void sendLotCheck(Map<String, Object> routingParam, Map<String, Object> childLotParam) throws Exception
    {
        Map<String, Object> areaMap = new HashMap<String, Object>();
        areaMap.put("AREAID", routingParam.get("INPUTAREAID"));
        areaMap = generalDao.addSelectOneMap(NAMESPACE + ".selectBasAreanfo", areaMap);

        String nextPlantId = StringUtil.Object2String(areaMap.get("PLANTID")); // 인계 Site ID
        String nextAreaId  = StringUtil.Object2String(areaMap.get("AREAID")); // 인계 작업장 ID
        String ownType     = StringUtil.Object2String(areaMap.get("OWNTYPE")); // 인계 작업장 타입
        String areaId      = StringUtil.Object2String(routingParam.get("AREAID")); // 현재 작업장 ID
        String plantId     = StringUtil.Object2String(routingParam.get("PLANTID")); // 현재 Site ID
		
        // if not Finished that Lot State then Outside Check Logic
        if (LotState.Finished.equals(childLotParam.get("LOTSTATE")))
        {
        	// 작업장이 동일한 경우 SendLot 호출 안함
            if (!nextAreaId.equals(areaId))
            {
				if (AreaOwnType.OutsideOSP.equals(ownType) || !nextPlantId.equals(plantId))
                {
                    //TransactionUtils.setTransactionId(txnInfo, "sendLot");
                    String nextAreaId2 = "";
                    String nextPlantId2 = "";
                 
					if (AreaOwnType.OutsideOSP.equals(ownType))                 
                        nextAreaId2 = nextAreaId;
                    else
                        nextAreaId2 = StringUtil.Object2String(childLotParam.get("AREAID"));

                    if (!nextPlantId.equals(plantId))
                        nextPlantId2 = nextPlantId;
                    else
                        nextPlantId2 = StringUtil.Object2String(childLotParam.get("PLANTID"));

                    System.out.println("************************************> QAM01900.wipService.sendLot call");
                    //작업장 또는 Site 간 Lot을 인계 한다. LotState를 InTransit으로 변경한다.
                    wipService.sendLot(lotId, nextAreaId2, nextPlantId2);

                    //TransactionUtils.setTransactionId(txnInfo, this.getClass().getSimpleName());

                    if (!nextPlantId.equals(plantId))
                    {
                        String lastTxnHistKey = StringUtil.Object2String(childLotParam.get("LASTTXNHISTKEY"));
                        Date nowDate = qamService.getCurrentSystemTime("yyyyMMddHHmmss");
                        saveLotPlantTransit(childLotParam, lastTxnHistKey, txnUserId, nowDate);
                    }
                }
            }
        }
    }

    /**
    * @fn          : getWorkResult
    * @brief       : (Override method) LOT 작업결과
    * @Method Name : getWorkResult
    * @remark      : 상세설명
    * @see
    */
    public Map<String, Object> getWorkResult(Map<String, Object> param) throws Exception
    {
        List<Map<String,Object>> result = generalDao.addSelect(NAMESPACE + ".getLotWorkResultByTrackIn", param);

        if (result.size() == 0)
        {
            // 작업 실적에 등록된 데이터가 존재하지 않습니다. {0}
        	throw new BizException("NotExistsWorkResult", String.format("LotId = %s ProcessSegmentId = %s ProcessSegmentVersion = %s WorkCount = %s", (String)param.get("LOTID"), (String)param.get("PROCESSSEGMENTID"), (String)param.get("PROCESSSEGMENTVERSION"), (String)param.get("PLANTID")));
        }

        Map<String, Object> workResultMap = new HashMap<String, Object>();
        workResultMap.put("LOTID",      param.get("LOTID"));
        workResultMap.put("TXNHISTKEY", (String) result.get(0).get("TXNHISTKEY"));

        workResultMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotWorkResultInfo", workResultMap);

        return workResultMap;
    }

    /**
    * @fn          : saveLotPlantTransit
    * @brief       : (Override method) Lot Plant Transit Insert Data
    * @Method Name : saveLotPlantTransit
    * @remark      : 상세설명
    * @see
    */
    private void saveLotPlantTransit(Map<String, Object> childLotParam, String lastTxnHistKey, String userId, Date time) throws Exception
    {
        Map<String, Object> lotPlantTransitMap = new HashMap<String, Object>();
        String txnHistKey = TxnHistKey.getTxnHistKey();
        lotPlantTransitMap.put("LOTID",      childLotParam.get("LOTID"));
        lotPlantTransitMap.put("TXNHISTKEY", txnHistKey);
        
        lotPlantTransitMap = generalDao.addSelectOneMap(NAMESPACE + ".selectMtmLotPlantTransitInfo", lotPlantTransitMap);

        if (lotPlantTransitMap != null)
        {
            throw new BizException("InValidData002", String.format("TxnHistKey = %s, LotId = %s", txnHistKey, childLotParam.get("LOTID")));
        }

        Map<String, Object> lotHistoryMap = new HashMap<String, Object>();
        lotHistoryMap.put("LOTID",       childLotParam.get("LOTID"));
        lotHistoryMap.put("TXNHISTKEY",  lastTxnHistKey);
        lotHistoryMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotHistoryInfo", lotHistoryMap);

        lotPlantTransitMap.put("TXNHISTKEY",        	txnHistKey);
        lotPlantTransitMap.put("LOTID",             	childLotParam.get("LOTID"));
        lotPlantTransitMap.put("ENTERPRISEID",      	childLotParam.get("ENTERPRISEID"));
        lotPlantTransitMap.put("PLANTID",           	childLotParam.get("PLANTID"));
        lotPlantTransitMap.put("PRODUCTIONORDERID", 	childLotParam.get("PRODUCTIONORDERID"));
        lotPlantTransitMap.put("LINENO",            	childLotParam.get("LINENO"));
        lotPlantTransitMap.put("PREVPLANTID",       	StringUtil.Object2String(lotHistoryMap.get("PREVPLANTID"))==""?childLotParam.get("PLANTID"):lotHistoryMap.get("PREVPLANTID")); 
        lotPlantTransitMap.put("FACTORYID",         	childLotParam.get("FACTORYID"));
        lotPlantTransitMap.put("AREAID",            	childLotParam.get("AREAID"));
        lotPlantTransitMap.put("PREVAREAID",        	StringUtil.Object2String(lotHistoryMap.get("PREVAREAID"))==""?childLotParam.get("AREAID"):lotHistoryMap.get("PREVPLANTID"));
        lotPlantTransitMap.put("PROCESSDEFID",      	childLotParam.get("PROCESSDEFID"));
        lotPlantTransitMap.put("PROCESSDEFVERSION", 	childLotParam.get("PROCESSDEFVERSION"));
        lotPlantTransitMap.put("PROCESSSEGMENTID",  	childLotParam.get("PROCESSSEGMENTID"));
        lotPlantTransitMap.put("PREVPROCESSSEGMENTID", 	lotHistoryMap.get("PREVPROCESSSEGMENTID"));
        lotPlantTransitMap.put("SENDUSER",          	lotHistoryMap.get("SENDUSER"));
        lotPlantTransitMap.put("SENDDATE",          	lotHistoryMap.get("SENDDATE"));
        lotPlantTransitMap.put("TRANSITSTATUS",     	"WaitShip");

        generalDao.addUpdate(NAMESPACE + ".insertMtmLotPlantTransitDefectCancel", lotPlantTransitMap);
    }

    /**
    * @fn          : updateSplitLotInfo
    * @brief       : (Override method) Split된 Lot의 필요한 데이터 Update
    * @Method Name : updateSplitLotInfo
    * @remark      : asis => UpdateSplitLotInfo
    * @see
    */
    private void updateSplitLotInfo(String splitLotId, String grandParentLotId, Map<String, Object> parentLotParam, double splitQtyCount, Map<String, Object> routingParam) throws Exception
    {
        int result = 0;
        Map<String, Object> childLotMap = new HashMap<String, Object>();
        childLotMap.put("LOTID", splitLotId);
        childLotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", childLotMap);

        //checkpoint history 생성을 위해 현재 Lot 상태 Copy
        Map<String, Object> histLotMap = new HashMap<String, Object>();
        histLotMap.putAll(childLotMap);
        
        Double panelQty;
        Double panelPerQty = StringUtil.Object2Double(childLotMap.get("PANELPERQTY"));
        if (panelPerQty.equals(0.0))
            panelQty = (double) 0;
        else
            panelQty = Math.ceil(splitQtyCount / panelPerQty);
        
        childLotMap.put("PCSQTY",         splitQtyCount);
        childLotMap.put("PARENTLOTID",    grandParentLotId);
        childLotMap.put("LOTCREATEDTYPE", "Repair");    //LOT생성유형
        childLotMap.put("AREAID",         routingParam.get("INPUTAREAID"));
        childLotMap.put("RESOURCEID",     routingParam.get("INPUTRESOURCEID")); //자원ID
        childLotMap.put("PANELQTY",       panelQty);
        childLotMap.put("DESCRIPTION",    parentLotParam.get("DESCRIPTION"));
        
        //LOT의 공정진행 상태
        if (!"WaitForReceive".equals(childLotMap.get("PROCESSSTATE")))
        {
            childLotMap.put("PROCESSSTATE", "WaitForReceive"); // 인수대기상태로 변경
            updateSplitLotWaitForReceiveWorkResult(childLotMap); // 인수대기상태에 대한 작업실적 초기화
        }

        //childLotMap.setLasttxnid(this.getClass().getSimpleName());

        /*checkpoint key채번 asis에 입력되어 추가함*/
        childLotMap.put("LASTTXNGROUPHISTKEY", txnGroupHistKey);
        childLotMap.put("LASTTXNHISTKEY",      TxnHistKey.getTxnHistKey());
        
        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotSplitLotDefectCancel", childLotMap);

        /*checkpoint history 생성*/
        if (result > 0)
        {
        	childLotMap.put("TXNHISTKEY",       childLotMap.get("LASTTXNHISTKEY"));
        	childLotMap.put("PREVPCSQTY",       histLotMap.get("PCSQTY")); //이전 PCS 수량
            childLotMap.put("PREVAREAID",       histLotMap.get("AREAID")); //이전 작업장 ID
            childLotMap.put("PREVPANELQTY",     histLotMap.get("PANELQTY"));//이전 PNL수량
            childLotMap.put("PREVPROCESSSTATE", histLotMap.get("PROCESSSTATE")); //이전 LOT 공정진행 상태            

            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", childLotMap);
        }
    }

    /**
    * @fn          : updateSplitLotWorkResultInfo
    * @brief       : (Override method) LOT기준으로 라우팅ID, Version, ProcessPathStack 업데이트
    * @Method Name : updateSplitLotWorkResultInfo
    * @remark      : 상세설명
    * @see
    */
    private void updateSplitLotWorkResultInfo(String splitLotId) throws Exception
    {
        Map<String, Object> childLotMap = new HashMap<String, Object>();
        childLotMap.put("LOTID", splitLotId);
        childLotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", childLotMap);

        Map<String, Object> lotWorkResultMap = new HashMap<String, Object>();
        lotWorkResultMap = getWorkResult(childLotMap);

        String processPathId;

        if ("Y".equals(lotWorkResultMap.get("ISREWORK")))
        {
            String[] arrayStr = childLotMap.get("PROCESSPATHSTACK").toString().split("\\.");

            if (arrayStr.length > 1)
            {
                processPathId = childLotMap.get("PROCESSPATHSTACK").toString().split("\\.")[1];
            }
            else
            {
                processPathId = (String) childLotMap.get("PROCESSPATHSTACK");
            }
        }
        else
        {
            processPathId = (String) childLotMap.get("PROCESSPATHSTACK");
        }

        lotWorkResultMap.put("PROCESSDEFID",      childLotMap.get("PROCESSDEFID"));
        lotWorkResultMap.put("PROCESSDEFVERSION", childLotMap.get("PROCESSDEFVERSION"));
        lotWorkResultMap.put("PROCESSPATHID",     processPathId);
        lotWorkResultMap.put("PROCESSPATHSTACK",  childLotMap.get("PROCESSPATHSTACK"));

        generalDao.addUpdate(NAMESPACE + ".updatePcmLotWorkResultSplitLotDefectCancel", lotWorkResultMap);
    }

    //
    /**
    * @fn          : updateDefectLot
    * @brief       : (Override method) 양품상태로 바꿔줬던 Lot을 다시 불량 Lot으로 바꿔준다.
    * @Method Name : updateDefectLot
    * @remark      : 상세설명
    * @see
    */
    private void updateDefectLot(String lotId) throws Exception
    {
        int result = 0;
        Map<String, Object> lotMap = new HashMap<String, Object>();
        lotMap.put("LOTID", lotId);
        lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotInfo", lotMap);

        //checkpoint history 생성을 위해 현재 Lot 상태 Copy
        Map<String, Object> histLotMap = new HashMap<String, Object>();
        histLotMap.putAll(lotMap);
        
        Double defectQty = totalDefectQty - cancelDefectQty;

        if (defectQty == 0)
        {
            if (!LotState.Terminated.equals(lotMap.get("LOTSTATE")))
            {
                lotMap.put("LOTSTATE", LotState.Terminated);
            }
        }

        lotMap.put("QTY",          0); // 총수량
        lotMap.put("PCSQTY",       0); // PCS수량
        lotMap.put("PANELQTY",     0);// PNL수량
        lotMap.put("DEFECTQTY",    defectQty); // 불량수량
        lotMap.put("ISLOCKING",    "Y"); // LOCKING 여부
        lotMap.put("ISDEFECTED",   "Y"); // 불량여부
        //lotMap.setLasttxnid(this.getClass().getSimpleName());

        /*checkpoint key채번 asis에 입력되어 추가함*/
        lotMap.put("LASTTXNGROUPHISTKEY", txnGroupHistKey);
        lotMap.put("LASTTXNHISTKEY",      TxnHistKey.getTxnHistKey());
        result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotDefectLotDefectCancel", lotMap);

        /*checkpoint history 생성*/
        if (result > 0)
        {
        	lotMap.put("TXNHISTKEY",       lotMap.get("LASTTXNHISTKEY"));
        	lotMap.put("PREVQTY",          histLotMap.get("QTY")); //이전 수량
            lotMap.put("PREVPCSQTY",       histLotMap.get("PCSQTY")); //이전 PCS 수량
            lotMap.put("PANELQTY",         histLotMap.get("PANELQTY"));//이전 PNL수량
            lotMap.put("PREVDEFECTQTY",    histLotMap.get("DEFECTQTY")); //이전 불량수량
            lotMap.put("PREVLOTSTATE",     histLotMap.get("LOTSTATE")); //이전 Lot상태 InProduction            

            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryDefectCancel", lotMap);
        }
    }

    /**
    * @fn          : insertCancelData
    * @brief       : (Override method) 불량취소 테이블(불량별)에 취소한 LOT정보 삽입
    * @Method Name : insertCancelData
    * @remark      : asis => getInsertCancelData
    * @see
    */
    private void insertCancelData(Map<String, Object> routingParam, String txnHistKey) throws Exception
    {
        Map<String, Object> cancelMap = new HashMap<String, Object>();
        cancelMap.put("LOTID",                       routingParam.get("LOTID"));
        cancelMap.put("TXNHISTKEY",                  txnHistKey);
        cancelMap.put("ENTERPRISEID",                routingParam.get("ENTERPRISEID")); // 회사 ID
        cancelMap.put("PLANTID",                     routingParam.get("PLANTID")); // Site ID
        cancelMap.put("CANCELREASONCODE",            (StringUtils.isEmpty((String)routingParam.get("CANCELCODE")) ? null : routingParam.get("CANCELCODE"))); // 취소사유코드
        cancelMap.put("CANCELROUTINGTYPE",           routingType); // 취소라우팅타입
        cancelMap.put("PRODUCTDEFID",                routingParam.get("PRODUCTDEFID")); // 제품 ID
        cancelMap.put("PRODUCTDEFVERSION",           routingParam.get("PRODUCTDEFVERSION")); // 제품 Version
        cancelMap.put("USERSEQUENCE",                (StringUtils.isEmpty((String)routingParam.get("INPUTUSERSEQUENCE")) ? null : routingParam.get("INPUTUSERSEQUENCE"))); // 공정수순
        cancelMap.put("PROCESSSEGMENTID",            (StringUtils.isEmpty((String)routingParam.get("INPUTSEGMENTID")) ? null : routingParam.get("INPUTSEGMENTID"))); // 투입공정 ID
        cancelMap.put("PROCESSSEGMENTVERSION",       (StringUtils.isEmpty((String)routingParam.get("INPUTSEGMENTVERSION")) ? null : routingParam.get("INPUTSEGMENTVERSION"))); // 투입공정 Version
        cancelMap.put("AREAID",                      (StringUtils.isEmpty((String)routingParam.get("INPUTAREAID")) ? null : routingParam.get("INPUTAREAID"))); // 투입작업장 ID
        cancelMap.put("RESOURCEID",                  (StringUtils.isEmpty((String)routingParam.get("INPUTRESOURCEID")) ? null : routingParam.get("INPUTRESOURCEID"))); //  투입 자원 ID
        cancelMap.put("RETURNUSERSEQUENCE",          (StringUtils.isEmpty((String)routingParam.get("RETURNUSERSEQUENCE")) ? null : routingParam.get("RETURNUSERSEQUENCE"))) ; // 재작업 후 순서
        cancelMap.put("RETURNPROCESSSEGMENTID",      (StringUtils.isEmpty((String)routingParam.get("RETURNSEGMENTID")) ? null : routingParam.get("RETURNSEGMENTID"))) ; // 재작업 후 공정 ID
        cancelMap.put("RETURNPROCESSSEGMENTVERSION", (StringUtils.isEmpty((String)routingParam.get("RETURNSEGMENTVERSION")) ? null : routingParam.get("RETURNSEGMENTVERSION"))) ; // 재작업 후 공정 Version
        cancelMap.put("RETURNAREAID",                (StringUtils.isEmpty((String)routingParam.get("RETURNAREAID")) ? null : routingParam.get("RETURNAREAID"))) ; // 재작업 후 작업장 ID
        cancelMap.put("RETURNRESOURCEID",            (StringUtils.isEmpty((String)routingParam.get("RETURNRESOURCEID")) ? null : routingParam.get("RETURNRESOURCEID"))) ; // 재작업 후  자원 ID
        cancelMap.put("DESCRIPTION",                 (StringUtils.isEmpty((String)routingParam.get("DESCRIPTION")) ? null : routingParam.get("DESCRIPTION"))); // 비고
        cancelMap.put("STATUS",                      "*"); // 무슨상태?
        cancelMap.put("CANCELTIME",                  cancelDate); // 취소일시
        cancelMap.put("CANCELUSER",                  cancelUser); // 취소자
        cancelMap.put("REPAIRLOTNO",                 splitLotId); // Split된 Lot No
        cancelMap.put("VALIDSTATE",                  "Valid"); // 유효상태

      if ("Product".equals(routingType))
      {
          cancelMap.put("PROCESSDEFID",              (StringUtils.isEmpty(inputProcessDefId) ? null : inputProcessDefId)); // 투입라우팅 ID
          cancelMap.put("PROCESSDEFVERSION",         (StringUtils.isEmpty(inputProcessDefVersion) ? null : inputProcessDefVersion)); // 투입라우팅 Version
          cancelMap.put("PROCESSPATHID",             (StringUtils.isEmpty(inputProcessPathId) ? null : inputProcessPathId)); // 투입라우팅 상세 ID
          cancelMap.put("RETURNPROCESSPATHID",       (StringUtils.isEmpty(returnProcessPathId) ? null : returnProcessPathId)) ; // 재작업 후 라우팅 상세 ID
      }
      else
      {
          cancelMap.put("PROCESSDEFID",              (StringUtils.isEmpty((String)routingParam.get("INPUTPROCESSDEFID")) ? null : routingParam.get("INPUTPROCESSDEFID"))); // 투입라우팅 ID
          cancelMap.put("PROCESSDEFVERSION",         (StringUtils.isEmpty((String)routingParam.get("INPUTPROCESSDEFVERSION")) ? null : routingParam.get("INPUTPROCESSDEFVERSION"))); // 투입라우팅 Version
          cancelMap.put("PROCESSPATHID",             (StringUtils.isEmpty((String)routingParam.get("INPUTPROCESSPATHID")) ? null : routingParam.get("INPUTPROCESSPATHID"))); // 투입라우팅 상세 ID
          cancelMap.put("RETURNPROCESSPATHID",       (StringUtils.isEmpty(returnProcessPathId) ? null : inputProcessPathId)) ; // 재작업 후 라우팅 상세 ID
      }
      //defectMap.put("LASTTXNID",         TransactionId.CREATE);

      generalDao.addUpdate(NAMESPACE + ".insertQamQcLotDefectCancelDefectCancel", cancelMap);
  }

    /**
    * @fn          : insertCancelDefectData
    * @brief       : (Override method) 불량취소 테이블(불량별)에 취소한 불량정보 삽입
    * @Method Name : insertCancelDefectData
    * @remark      : 상세설명
    * @see
    */
    private void insertCancelDefectData(Map<String, Object> countParam, String txnHistKey) throws Exception
    {
        Map<String, Object> defectMap = new HashMap<String, Object>();
        defectMap.put("LOTID",             countParam.get("LOTID"));
        defectMap.put("TXNHISTKEY",        txnHistKey);
        defectMap.put("DEFECTCODE",        countParam.get("DEFECTCODE"));
        defectMap.put("DEFECTTXNHISTKEY",  countParam.get("TXNHISTKEY"));
        defectMap.put("REQUESTNO",         "*");
        defectMap.put("ENTERPRISEID",      countParam.get("ENTERPRISEID")); // 회사 ID
        defectMap.put("PLANTID",           countParam.get("PLANTID")); // Site ID
        defectMap.put("PCSQTY",            countParam.get("CANCELPCSQTY")); // 취소 PCS 수량
        defectMap.put("PANELQTY",          countParam.get("CANCELPNLQTY")); // 취소 PNL 수량
        defectMap.put("UOMDEFID",          countParam.get("UOM"));
        // SplitLotId가 없다면 원복, 있다면 분할
        defectMap.put("STATUS",            StringUtil.Object2String(splitLotId)=="" ? "RESTORE" : "DIVISION");
        defectMap.put("VALIDSTATE",        "Valid"); // 유효상태
        //defectMap.put("LASTTXNID",         TransactionId.CREATE);

        generalDao.addUpdate(NAMESPACE + ".insertQamQcLotDefectCancelDefectDefectCancel", defectMap);
    }

    /**
    * @fn          : insertCancelCustomRoutingData
    * @brief       : (Override method) 불량취소 재작업 라우팅 테이블에 재작업 라우팅 삽입
    * @Method Name : insertCancelCustomRoutingData
    * @remark      : 상세설명
    * @see
    */
    private void insertCancelCustomRoutingData(Map<String, Object> reworkParam, String txnHistKey) throws Exception
    {
        Map<String, Object> reworkMap = new HashMap<String, Object>();
        
        // 현재 불량취소 재작업 라우팅 테이블의 해당 Lot의 MaxSequence를 가져온다.
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("LOTID", reworkParam.get("LOTID"));
        map.put("TXNHISTKEY", txnHistKey);

        int maxSequence = generalDao.addSelectCount(NAMESPACE + ".selectGetCancelLotRoutingMaxSequence", map);

        reworkMap.put("LOTID",                 reworkParam.get("LOTID"));
        reworkMap.put("TXNHISTKEY",            txnHistKey);
        reworkMap.put("SEQUENCE",              maxSequence);
        reworkMap.put("REQUESTNO",             "*");
        reworkMap.put("ENTERPRISEID",          reworkParam.get("ENTERPRISEID")); // 회사 ID
        reworkMap.put("PLANTID",               reworkParam.get("PLANTID")); // Site ID
        reworkMap.put("PROCESSDEFID",          reworkParam.get("PROCESSDEFID")); // 라우팅 ID
        reworkMap.put("PROCESSDEFVERSION",     reworkParam.get("PROCESSDEFVERSION")); // 라우팅 Version
        reworkMap.put("PROCESSPATHID",         reworkParam.get("PROCESSPATHID")); // 공정별 라우팅 정의 ID
        reworkMap.put("USERSEQUENCE",          reworkParam.get("USERSEQUENCE")); // 공정수순
        reworkMap.put("PROCESSSEGMENTID",      reworkParam.get("PROCESSSEGMENTID")); // 공정 ID
        reworkMap.put("PROCESSSEGMENTVERSION", reworkParam.get("PROCESSSEGMENTVERSION")); // 공정 Version
        reworkMap.put("ISSKIP",                reworkParam.get("ISSKIP")); // Skip 여부
        reworkMap.put("VALIDSTATE",            "Valid"); // 유효상태
        //reworkMap.put("LASTTXNID",             TransactionId.CREATE);

        generalDao.addUpdate(NAMESPACE + ".insertQamQcLotDefectCancelReworkDefectCancle", reworkMap);
    }

    /**
    * @fn          : insertCancelSkipRoutingData
    * @brief       : (Override method) PCM_LOTPLAN에 Skip한 라우팅 상세 정의 삽입
    * @Method Name : insertCancelSkipRoutingData
    * @remark      : 상세설명
    * @see
    */
    private void insertCancelSkipRoutingData(Map<String, Object> reworkParam, String SplitLotId) throws Exception
    {
        Map<String, Object> lotPlanMap = new HashMap<String, Object>();
        lotPlanMap.put("LOTID",                 SplitLotId);
        lotPlanMap.put("PRODUCTDEFID",          productDefId);
        lotPlanMap.put("PRODUCTDEFVERSION",     productDefVersion);
        lotPlanMap.put("PROCESSDEFID",          reworkParam.get("PROCESSDEFID"));
        lotPlanMap.put("PROCESSDEFVERSION",     reworkParam.get("PROCESSDEFVERSION"));
        lotPlanMap.put("PROCESSPATHID",         reworkParam.get("PROCESSPATHID"));
        lotPlanMap.put("USERSEQUENCE",          reworkParam.get("USERSEQUENCE"));
        lotPlanMap.put("PROCESSSEGMENTID",      reworkParam.get("PROCESSSEGMENTID"));
        lotPlanMap.put("PROCESSSEGMENTVERSION", reworkParam.get("PROCESSSEGMENTVERSION"));
        lotPlanMap.put("PLANACTIONTYPE",        "Skip");
        lotPlanMap.put("ITERATEFLAG",           "Y");
        //lotPlantMap.put("LASTTXNID", this.getClass().getSimpleName());

        generalDao.addUpdate(NAMESPACE + ".insertPcmLotPlanCancelSkipRoutingDefectCancel", lotPlanMap);
    }
}