package smh.pcm.service;

import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.pcm.service.PCMConstant.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCMReworkLotServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMReworkLotServiceImpl
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
public class PCMReceiveCancelServiceImpl extends AbstractNbdfService implements PCMReceiveCancelService {

    public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACELOTCOM = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACE_CMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    public static final String NAMESPACE = "smh.pcm.dao.PCMReceiveCancelDao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private PCMLotCommonService commonService;

    @Autowired
    private PCMWipService wipService;
    
	@Override
	public void ReceiveCancel(Map<String, Object> ld, String userId, String comment, String txnId) throws Exception {
		// Delete Lot Equipment
		DeleteLotEquipment(ld);
		
		// Delete Lot Window Time Data
		DeleteLotWTime(ld);
		
		// Insert Lot Comment
		if (!comment.isEmpty())
			commonService.SaveLotComment(ld, comment, userId, TransitionId.CancelReceiveLot);
		
		commonService.SaveLotCancelWorkResult(ld, TransitionId.CancelReceiveLot, comment, (String) ld.get("LOTSTATE"));
		
		ld = commonService.ReceiveCancelLot(ld, txnId);
		
		commonService.CancelLotWorkResult(ld, TransitionId.CancelReceiveLot);
	}

	@Override
	public void DeleteLotEquipment(Map<String, Object> ld) throws Exception {
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("LOTID", ld.get("LOTID"));
		param.put("PROCESSSTATE", LotProcessState.WaitForReceive);
		param.put("PROCESSSEGMENTID", ld.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", ld.get("PROCESSSEGMENTVERSION"));
		param.put("WORKCOUNT", ld.get("WORKCOUNT"));
		
		List<Map<String, Object>> listResult = generalDao.addSelect(NAMESPACECOM + ".selectPcmLotequipmentList",param);
		for (int i = 0, len = listResult.size(); i < len; i++)
		{
			generalDao.addDelete(NAMESPACE + ".deletePcmLotequipment",listResult.get(i));	
		}

	}

	@Override
	public void DeleteLotWTime(Map<String, Object> ld) throws Exception {
		
		Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(ld);
		
		String processDefId = processDefInfo.get("PROCESSDEFID").toString();
		String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
		
		String processPathId = commonService.GetProcessPathId(ld, processDefId, processDefVersion);
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("LOTID", ld.get("LOTID"));
		param.put("ENTERPRISEID", ld.get("ENTERPRISEID"));
		param.put("PLANTID", ld.get("PLANTID"));
		param.put("PRODUCTDEFID", ld.get("PRODUCTDEFID"));
		param.put("PRODUCTDEFVERSION", ld.get("PRODUCTDEFVERSION"));
		param.put("PROCESSDEFID", processDefId);
		param.put("PROCESSDEFVERSION", processDefVersion);
		param.put("PROCESSPATHID", processPathId);
		param.put("PROCESSSEGMENTID", ld.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", ld.get("PROCESSSEGMENTVERSION"));
		param.put("PROCESSSTATE", LotProcessState.WaitForReceive);

		List<Map<String, Object>> listResult = generalDao.addSelect(NAMESPACE + ".selectPcmLotwtimeList",param);
		for (int i = 0, len = listResult.size(); i < len; i++)
		{
			generalDao.addDelete(NAMESPACE + ".deletePcmLotwtime",listResult.get(i));	
		}
	}


}