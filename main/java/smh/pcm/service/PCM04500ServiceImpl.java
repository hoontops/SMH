package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.pcm.service.PCMConstant.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCM04500ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04500ServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class PCM04500ServiceImpl extends AbstractNbdfService implements PCM04500Service {

    public static final String NAMESPACE = "smh.pcm.dao.PCM04500Dao";
    public static final String NAMESPACECOM = "smh.com.dao.COM00100Dao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMWipService wipService;
    
    @Autowired
    private PCMReworkLotService reworkLotService;

    /**
     * @fn
     * @brief (Override method) Lot보류  수정, 등록, 삭제 기능
     * @remark - Lot보류 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.pcm.service.PCM04500Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveLotSplit(UiMapDto dto) throws Exception {
    	int result = 0;
		String strEnterprise = (String) SessionUtil.getSessionValue("ENTERPRISEID");
		String strPlant = (String) SessionUtil.getSessionValue("SITETYPE");
		String strUserId = (String) SessionUtil.getSessionValue("USER_ID");
		String lotId = "";
		Map<String, Object> lotData = null;
		List<Map<String, Object>> rtnList = new ArrayList<Map<String, Object>>();
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if(i==0) {
            	lotId = (String) param.get("LOTID");
                lotData = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLot",param);
                logger.error("lotData.."+lotData);
        		if(lotData == null){			
        			//해당 Lot이 존재하지 않습니다.
        			throw new BizException("NotExistLot");
        		}
        		// 사용자별 작업장 통제
        		if(!wipService.isAreaInAuthority((String) lotData.get("AREAID"), true)) {
        			// 해당 작업장에 대한 권한이 없습니다. {0}
        			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, lotData.get("AREAID")));
        		}
            	
            }
            
			String childLotId = "";
			String reworkType = (String) param.get("REWORKTYPE");
			String processDefId = (String) param.get("PROCESSDEFID");
			String processDefVer = (String) param.get("PROCESSDEFVER");
			String segmentId = (String) param.get("PROCESSSEGMENTID");
			String returnSequence = (String) param.get("RETURNPATHSEQUENCE");
			String processPathId = (String) param.get("PROCESSPATHID");
			String pathSequence = (String) param.get("PATHSEQUENCE");
			String returnPathSequence = (String) param.get("RETURNPATHSEQUENCE");
			String resourceId = (String) param.get("RESOURCEID");
			String areaId = null;
			String returnAreaId = null;
			String returnResourceId = (String) param.get("RETURNRESOURCEID");
			String returnProcessPathId = (String) param.get("RETURNPROCESSPATHID");
			
			Map<String, Object> resourceData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasResource",param);
			if(resourceData != null) {
				areaId = (String) resourceData.get("AREAID");
			}

			if(!StringUtil.isNullOrEmpty(returnResourceId)) {
				Map<String, Object> param2 = new HashMap<String, Object>(); 
				param2.put("RESOURCEID", returnResourceId);
				Map<String, Object> returnResourceData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasResource",param2);
				if(returnResourceData != null) {
					returnAreaId = (String) returnResourceData.get("AREAID");
				}
			}
			
			double splitQty = 0.0;
			
			splitQty = Double.parseDouble(String.valueOf(param.get("QTY")));
			
			// Split 공통함수 호출로 Split
			//childLotId = Functions.SplitLotUtil(lotId, splitQty, lotData.getLotcreatedtype(), txnInfo, this.getClass().getSimpleName());
			Map<String, Object> splitLot = wipService.splitLot(dto, lotId, splitQty, splitQty);	
			childLotId = (String) splitLot.get("LOTID"); 
			
			splitLot.put("LOTCREATEDTYPE",lotData.get("LOTCREATEDTYPE"));
			splitLot.put("CREATEDQTY",splitQty);
			splitLot.put("UNIT",param.get("UNIT"));
			splitLot.put("QTY",splitQty);
			splitLot.put("PCSQTY",splitQty);
			splitLot.put("PANELQTY",param.get("PANELQTY"));	//splitLot.put("PANELQTY",Double.parseDouble(String.valueOf(param.get("PANELQTY"))));
			splitLot.put("PANELPERQTY",lotData.get("PANELPERQTY"));
			splitLot.put("LASTTXNCOMMENT",param.get("REASONCODEID"));
			splitLot.put("WEEK",lotData.get("WEEK"));
			splitLot.put("ISREPRESENTROLLLOT",lotData.get("ISREPRESENTROLLLOT"));
			splitLot.put("EXPECTEDCOMPLETEDATE ",lotData.get("EXPECTEDCOMPLETEDATE "));
        	result = generalDao.addUpdate(NAMESPACE + ".updatePcmLot",splitLot);
        	result = generalDao.addInsert(NAMESPACECOM + ".insertPcmLothistory",splitLot);
        	
        	wipService.saveSplitLotWorkResult(lotData, splitLot, splitQty);
        	
        	Map<String, Object> txnInfo = new HashMap<String, Object>(); 
			if("PRODUCT".equals(reworkType)) // 품목 Routing의 재작업인 경우
			{
				reworkLotService.ReworkLot(dto, childLotId, processDefId, processDefVer, resourceId
						, areaId, returnProcessPathId, returnResourceId, returnAreaId, strEnterprise
						, strPlant, "Y", resourceId, processPathId, areaId, txnInfo);
			}
			else if("REWORK".equals(reworkType)) // 재작업 Routing 인 경우
			{
				reworkLotService.ReworkLot(dto, childLotId, processDefId, processDefVer, resourceId
						, areaId, returnProcessPathId, returnResourceId, returnAreaId, strEnterprise
						, strPlant, "N", resourceId, processPathId, areaId, txnInfo);
			}
			
			// Split Lot 작업실적 입력
			String transitType = "";
			switch((String)splitLot.get("PROCESSSTATE"))
			{
				case TransitType.ReceiveLot :
					transitType = TransitType.ReceiveLot;
					break;
				case TransitType.TrackInLot :
					transitType = TransitType.TrackInLot;
					break;
				case TransitType.TrackOutLot :
					transitType = TransitType.TrackOutLot;
					break;
				case TransitType.SendLot :
					transitType = TransitType.SendLot;
					break;
				default :
					transitType = TransitType.ReceiveLot;;
					break;
			}
			
			// 부모 LOt정보 Update

			lotData.put("QTY",Double.parseDouble(String.valueOf(lotData.get("PCSQTY"))) - splitQty);
			lotData.put("PCSQTY",Double.parseDouble(String.valueOf(lotData.get("PCSQTY"))) - splitQty);
			lotData.put("PANELQTY",Double.parseDouble(String.valueOf(lotData.get("PANELQTY"))) - Double.parseDouble(String.valueOf(param.get("PANELQTY"))));
			lotData.put("LASTTXNHISTKEY", "");
			lotData.put("TXNHISTKEY", "");
			result = generalDao.addUpdate(NAMESPACE + ".updatePcmLot",lotData);
			result = generalDao.addInsert(NAMESPACECOM + ".insertPcmLothistory",lotData);
			// Split된 LOT ID정보 Return
			param.put("LOTID", splitLot.get("LOTID"));
			param.put("REWORKTYPE", reworkType);
			rtnList.add(param);			
			
        }
        putDataSetMap(dto, rtnList);
    }

    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#selectWIPList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWIPList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectWIPList", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) UomDefinition 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#selectGetUomDefinitionList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetUomDefinitionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetUomDefinitionList", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) selectLotInfoBylotID 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#selectLotInfoBylotID(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotInfoBylotID(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotInfoBylotID", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) GetCurrentRoutingByLot 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#GetCurrentRoutingByLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void GetCurrentRoutingByLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetCurrentRoutingByLot", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) SelectReworkRoutingResource 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#SelectReworkRoutingResource(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectReworkRoutingResource(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectReworkRoutingResource", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) SelectReworkRoutingResource 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#SelectReworkRoutingResource(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectReworkRoutingResource10002(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectReworkRoutingResource10002", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) selectGetReasonCodeList 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#selectGetReasonCodeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetReasonCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetReasonCodeList", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) selectGetProcessPathList 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#selectGetProcessPathList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void GetProcessPathList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetProcessPathList", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) SelectReworkRouting 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#SelectReworkRouting(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectReworkRouting(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectReworkRouting", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) GetProcessPathList10005 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#GetProcessPathList10005(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void GetProcessPathList10005(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetProcessPathList10005", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) GetProcessPathList10005 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04500Service#GetProcessPathList10005(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void GetProductRoutingPreviousProcessPaths(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetProductRoutingPreviousProcessPaths", param), "output");
    }


}