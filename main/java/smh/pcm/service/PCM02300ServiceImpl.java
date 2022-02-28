package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;

/**
* @file: PCM02300ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02300ServiceImpl
* @Company: Built1
* @Create Date: 2021.04-28
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.28.   김애리     최초  생성
*/
@Service
public class PCM02300ServiceImpl extends AbstractNbdfService implements PCM02300Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM02300Dao";	
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACE1   = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    
    @Autowired
    private GeneralDao generalDao;

    @Autowired 
    private PCMWipService wipService;
    
    /**
     * @fn
     * @brief :  Roll Lot 정보 
     * @remark 
     * @see smh.pcm.service.PCM02300Service#selectRollLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRollLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollLotList", param));
    }
  
    /**
     * @fn
     * @brief : 사용가능 Roll Lot 팝업 
     * @remark 
     * @see smh.pcm.service.PCM02300Service#selectConsumableLotListForRollLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConsumableLotListForRollLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableLotListForRollLot", param));
    }
    
    /**
     * @fn
     * @brief : Lot No 채번
     * @remark 
     * @see smh.pcm.service.PCM02300Service#selectLotIdMaxSequence(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotIdMaxSequence(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotIdMaxSequence", param));
    }
    
    
    
    /**
     * @fn
     * @brief : 화면 중간에, Roll lot 유효성 체크 그리드
     * @remark 
     * @see smh.pcm.service.PCM02300Service#selectConsumableLotInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConsumableLotInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableLotInfo", param));
    }
    
    
    /**
     * @fn
     * @brief : 화면 하단 왼쪽 , 자재 투입 내역
     * @remark 
     * @see smh.pcm.service.PCM02300Service#selectCreatedListByRollLotSplit(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCreatedListByRollLotSplit(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCreatedListByRollLotSplit", param));
    }
    
    
    /**
     * @fn
     * @brief : 화면 하단 오른쪽 , ROLL LOT 투입 분할 이력
     * @remark 
     * @see smh.pcm.service.PCM02300Service#selectCreatedLotListByRollLotSplit(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCreatedLotListByRollLotSplit(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCreatedLotListByRollLotSplit", param));
    }

    /**
     * @fn
     * @brief : 
     * @remark 
     * @see smh.pcm.service.PCM04400Service#saveRollLotSplit(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void saveRollLotSplit(UiMapDto dto) throws Exception {
		int result = 0;
    	Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		
		DataSetMap paramMapBody = getParametersDataSetMap(dto, "ds_temp");
		DataSetMap paramMapConsumable = getParametersDataSetMap(dto, "ds_ConsumableList"); //dtConsumable
		
		Map<String, Object> paramBody = paramMapBody.get(0);
		Map<String, Object> paramConsumable; 
		
		String lotId = paramBody.get("LOTID").toString();
		String childLotId = paramBody.get("CHILDLOTID").toString();
		String comment = paramBody.get("COMMENT").toString();

		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		Map<String, Object> sToday =  generalDao.selectOne(NAMESPACE1+".selectCurrentSystemTime");
 		java.util.Date nowDate = dateFormat.parse(sToday.get("TODATE").toString());
		
 		HashMap<String, Object> propertyMap = new HashMap<>();
 		
 		propertyMap.put("LOTID", lotId);
		Map<String, Object> lot = generalDao.selectOne(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
 		
		ValidationData(lot, paramBody);
		
		double splitQty = StringUtil.Object2Double(paramBody.get("SPLITQTY"));
		double splitPanelQty = StringUtil.Object2Double(paramBody.get("SPLITPNLQTY"));
		
		wipService.splitLot(dto, lot, childLotId, splitQty, splitQty);
		
		// Started User Id
		String startedUserId = paramBody.get("CREATOR").toString();
		System.out.println("--------------- before SaveLot!!!");
		Map<String, Object>  cld = SaveLot(lot, childLotId, splitPanelQty, startedUserId, nowDate);
		System.out.println("--------------- after SaveLot!!!");
		for (int i = 0, len = paramMapConsumable.size(); i < len; i++)
		{
			paramConsumable = paramMapConsumable.get(i);
			
			saveConsumeMaterialLotTempData(paramBody, cld, paramConsumable, i + 1);
		}
		System.out.println("--------------- after saveConsumeMaterialLotTempData!!!");
		if (!comment.isEmpty())
		{
			//wipService.saveLotComment(cld, comment, "", "");//SaveLotCommentImpl(LotData ld, String comment, String creator, String transitionId)
			//Comment 저장
			wipService.insertLotComment(dto, cld, comment, "", "");
			
		}
		System.out.println("--------------- after insertLotComment!!!");
		// Save Work Result
		double Createdqty = StringUtil.Object2Double(lot.get("CREATEDQTY"));
		//wipService.saveLotWorkResultForCurrentProcess(dto,cld, Createdqty, nowDate);
		wipService.saveLotWorkResultForCurrentProcess(dto,cld, splitQty, nowDate); //by 김기수 2021-07-27
		System.out.println("--------------- after saveLotWorkResultForCurrentProcess!!!");
		putDataSetMap(dto, result);
	}

	private void saveConsumeMaterialLotTempData(Map<String, Object> data, Map<String, Object> childLot, Map<String, Object> paramConsumable, int sequence) {
		Map<String, Object> temp = new HashMap<>();
		
		temp.put("LOTID",data.get("CHILDLOTID"));
		temp.put("MATERIALLOTID",paramConsumable.get("CONSUMABLELOTID"));
		temp.put("PROCESSSEGMENTID",childLot.get("PROCESSSEGMENTID"));
		temp = generalDao.selectOne(NAMESAPCEWIP +".selectPcmConsumemateriallotTempList",temp);
		
		
		if (temp != null)
		{
			throw new BizException("InValidData002"
					, String.format("LotId = %s  MaterialLotId = %s  ProcessSegmentId = %s"
							, data.get("LOTID"), paramConsumable.get("CONSUMABLELOTID"), childLot.get("PROCESSSEGMENTID")));
		}
		
		Map<String, Object> consumable = new HashMap<>();
		consumable.put("CONSUMABLEDEFID",paramConsumable.get("CONSUMABLEDEFID"));
		consumable.put("CONSUMABLEDEFVERSION",paramConsumable.get("CONSUMABLEDEFVERSION"));
		consumable = generalDao.selectOne(NAMESAPCECOM +".selectBasConsumabledefinition",consumable);
		
		if (consumable == null)
		{
			throw new BizException("InValidData001"
					, String.format("ConsumableDefId = %s  ConsumableDefVersion = %s"
							, paramConsumable.get("CONSUMABLEDEFID").toString(), paramConsumable.get("CONSUMABLEDEFVERSION").toString()));
		}

		temp = new HashMap<>();
		temp.put("LOTID",data.get("CHILDLOTID"));
		temp.put("MATERIALLOTID",paramConsumable.get("CONSUMABLELOTID"));
		temp.put("PROCESSSEGMENTID",childLot.get("PROCESSSEGMENTID"));
		temp.put("ENTERPRISEID",data.get("ENTERPRISEID"));
		temp.put("PLANTID",data.get("PLANTID"));
		temp.put("MATERIALTYPE","Consumable");
		temp.put("MATERIALDEFID",paramConsumable.get("CONSUMABLEDEFID"));
		temp.put("MATERIALDEFVERSION",paramConsumable.get("CONSUMABLEDEFVERSION"));
		temp.put("AREAID",childLot.get("AREAID"));
		temp.put("CONSUMEDQTY",StringUtil.Object2Double(paramConsumable.get("USEQTY")));
		temp.put("WAREHOUSEID",getWareHouseID(childLot.get("AREAID").toString()));

		generalDao.insert(NAMESAPCEWIP + ".insertPcmConsumemateriallotTemp",temp);
		
	}

	private String getWareHouseID(String Areaid) {
		HashMap<String, Object> propertyMap = new HashMap<>();
		
		propertyMap.put("AREAID", Areaid);
		propertyMap = generalDao.selectOne(NAMESAPCECOM +".selectBasArea",propertyMap);
		
		if(StringUtil.isNullOrEmpty(propertyMap.get("WAREHOUSEID"))) {
			throw new BizException("NoHaveWareHouse","");
		}
		
		return propertyMap.get("WAREHOUSEID").toString();
	}

	private Map<String, Object> SaveLot(Map<String, Object> lot, String childLotId, double splitPanelQty, String startedUserId,java.util.Date nowDate) throws Exception {
		HashMap<String, Object> propertyMap = new HashMap<>();
		Map<String, Object> pld = new HashMap<>();
		//pld.putAll(lot);
		pld = wipService.validateLotInfo(lot.get("LOTID").toString());
		
 		propertyMap.clear();
		propertyMap.put("PRODUCTDEFID", lot.get("PRODUCTDEFID").toString());
		propertyMap.put("PRODUCTDEFVERSION", lot.get("PRODUCTDEFVERSION").toString());
		Map<String, Object> pd = generalDao.selectOne(NAMESAPCECOM +".selectBasProductdefinitionList",propertyMap);
		
		if (pd == null)
		{
			throw new BizException("InValidData001", String.format("ProductDefId = %s  ProductDefVersion = %s", lot.get("PRODUCTDEFID").toString(), lot.get("PRODUCTDEFVERSION").toString()));
		}
		
		// Get Array Per Quantity
		double arrayPerQty = StringUtil.Object2Double(pd.get("PCSARY"));
		double pld_Qty =  StringUtil.Object2Double(pld.get("QTY"));
		double pld_Panelperqty = StringUtil.Object2Double(pld.get("PANELPERQTY"));
		pld.put("PCSQTY",pld_Qty);
		
		if (arrayPerQty > 0)
			pld.put("ARRAYQTY", pld_Qty / arrayPerQty);
		
		if (pld_Panelperqty > 0)
			pld.put("PANELQTY",pld_Qty / pld_Panelperqty);
		
		if (pld_Qty <= 0)
		{
			pld.put("PREVLOTSTATE", pld.get("LOTSTATE"));//Lot History Update 시 반영됨. 
			pld.put("LOTSTATE",LotState.Terminated);
			
			//pld.appendHistoryData(param);
		}
		

		Map<String, Object> cld = new HashMap<>();
		cld = wipService.validateLotInfo(childLotId);
		
		double qty = splitPanelQty * StringUtil.Object2Double(pld.get("PANELPERQTY"));
		
		cld.put("LOTID",childLotId);
		cld.put("ROOTLOTID",childLotId);
		cld.put("PARENTLOTID",childLotId);
		cld.put("WORKCOUNT",(double)0);
		cld.put("CREATEDQTY",qty);
		cld.put("UNIT","PCS");
		cld.put("QTY",qty);
		cld.put("PANELPERQTY",pld.get("PANELPERQTY"));
		cld.put("PANELQTY",splitPanelQty);
		cld.put("PCSQTY",qty);
		cld.put("LOTCREATEDTYPE","SplitRoll");
		cld.put("ISREPRESENTROLLLOT","N");
		cld.put("LOTSTARTDATE",nowDate);
		cld.put("STARTEDDATE",nowDate);
		cld.put("EXPECTEDCOMPLETEDATE", pld.get("EXPECTEDCOMPLETEDATE"));
		cld.put("ROOTLOTSTARTDATE",nowDate);
		cld.put("STARTEDUSER",startedUserId);
		cld.put("Pnlcreatedqty",qty);

		if (arrayPerQty > 0)
			cld.put("ARRAYQTY",StringUtil.Object2Double(cld.get("QTY")) / arrayPerQty);

		updateLot(pld);
		updateLot(cld);
		
		return cld;
	}

	private void ValidationData(Map<String, Object> lot, Map<String, Object> data) {
		String isHold = lot.get("ISHOLD").toString();
		String lotId = data.get("LOTID").toString();
		
		if (isHold.equals("Y"))
		{
			// 보류 상태의 Lot 입니다.
			throw new BizException("LotIsHold", String.format("LotId = %s", lotId));
		}
		
		// Locking 여부 체크
		String isLocking = lot.get("ISLOCKING").toString();
		if (isLocking.equals("Y"))
		{
			// Locking 상태의 Lot 입니다.
			throw new BizException("LotIsLocking", String.format("LotId = %s", lotId));
		}
		
		// ProcessState = 'WaitForReceive' 체크
		String processState = lot.get("PROCESSSTATE").toString();
		
		if (!processState.equals("WaitForReceive"))
		{
			// Lot의 진행 상태가 인수 대기 상태가 아닙니다.
			throw new BizException("LotStateIsNotWaitForReceive", String.format("LotId = %s ProcessState = %s", lotId, processState));
		}
		
		// 공정 체크
		String processSegmentId = lot.get("PROCESSSEGMENTID").toString();
		
		if (!processSegmentId.equals(data.get("PROCESSSEGMENTID").toString()))
		{
			// 공정이 다릅니다.
			throw new BizException("ProcessIsNotEqual"
					, String.format("LotId = %s  SendProcessSegmentId = %s  CurrentProcessSegmentId = %s"
							, lotId, data.get("PROCESSSEGMENTID").toString(), processSegmentId));
		}
		
		// 대표 Roll Lot 여부 체크
		String isRepresentRollLot = lot.get("ISREPRESENTROLLLOT").toString();
		
		if (!isRepresentRollLot.equals("Y"))
		{
			// 대표 Roll Lot이 아닙니다.
			throw new BizException("NotRollLot", String.format("LotId = %s", lotId));
		}
		
		// 모 Lot 수량 > 분할 Lot 수량 체크
		double qty = StringUtil.Object2Double(lot.get("QTY"));
		double splitQty = StringUtil.Object2Double(data.get("SPLITQTY"));
		
		if (qty < splitQty)
		{
			// 분할 Lot의 수량은 모 Lot의 수량보다 클 수 없습니다.
			throw new BizException("SplitQtyLessThanParentQty", String.format("ParentLotQty = %d  SplitLotQty = %d", qty, splitQty));
		}
		
	}
    
	private void updateLot(Map<String, Object> lot) {
		lot.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
		generalDao.addUpdate(NAMESAPCEWIP + ".updatePcmLot", lot);
		lot.put("TXNHISTKEY", lot.get("LASTTXNHISTKEY"));
		generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lot);
	}
   
}