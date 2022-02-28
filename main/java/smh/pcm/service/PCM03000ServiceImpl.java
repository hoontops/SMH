package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;


/**
* @file: PCM03000ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03000ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class PCM03000ServiceImpl extends AbstractNbdfService implements PCM03000Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM03000Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
	
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief : 제품 버전 콤보 데이타 조회
     * @remark 
     * @see smh.pcm.service.PCM03000Service#selectProductVersion(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductVersion(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductVersion", param));
    }
    
    /**
     * @fn
     * @brief :  품목 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM03000Service#selectProductDefinitionList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductDefinitionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionList", param));
    }
    
    
    /**
     * @fn
     * @brief :  공정 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM03000Service#selectProcessSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessSegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
		if (param.get("PROCESSSEGMENTID") != null) {
			String[] splitSegmentID = param.get("PROCESSSEGMENTID").toString().split(",");
			param.put("PROCESSSEGMENTID", splitSegmentID);
		}

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentList", param));
    }
    
    /**
     * @fn
     * @brief :  Lot 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM03000Service#selectWipLotMessageList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWipLotMessageList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);


		if (param.get("PROCESSSEGMENTID") != null) {
			String[] splitSegmentID = param.get("PROCESSSEGMENTID").toString().split(",");
			param.put("PROCESSSEGMENTID", splitSegmentID);
		}

//		if (param.get("LOTID") != null) {
//			String[] splitLotID = param.get("LOTID").toString().split(",");
//			param.put("LOTID", splitLotID);
//		}

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWipLotMessageList", param));
    }
    

    /**
     * @fn
     * @brief : 전달 공정 팝업 조회
     * @remark 
     * @see smh.pcm.service.PCM03000Service#selectProcessPathByProductDef(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessPathByProductDef(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessPathByProductDef", param));
    }
    
    
    public void saveProductDefInfo(UiMapDto dto) throws Exception {
    	int result = 0;
        
        DataSetMap paramMapProduct = getParametersDataSetMap(dto, "ds_ProductDefInfo");
        DataSetMap paramMapMessage = getParametersDataSetMap(dto, "ds_Message");
        
        Map<String, Object> paramProduct = paramMapProduct.get(0);
        Map<String, Object> paramMessage = paramMapMessage.get(0); 
        
        String sendSegment = paramMessage.get("PROCESSSEGMENTID").toString();

		//LOT List 조회
		List<Map<String, Object>> targetLotList = GetLotListToProduct("PRODUCT", sendSegment, paramProduct);

		//라우팅 정보 조회
		if(targetLotList.size() > 0)
		{
			String processDefId = targetLotList.get(0).get("PROCESSDEFID").toString();
			String processDefVersion = targetLotList.get(0).get("PROCESSDEFVERSION").toString();
			List<Map<String, Object>> tergetRoutingInfo = GetRoutingInfo(processDefId, processDefVersion, sendSegment);
		
			for(int k = 0; k < targetLotList.size(); k++)
			{
				Map<String, Object> targetLot = targetLotList.get(k); 
				
				result += ExecuteLotMessageInsert(targetLot, tergetRoutingInfo.get(0), paramMessage);
			}
		
		}
		result += ExecuteLotMessageMngInsert(paramProduct, paramMessage);
//        result += generalDao.insert(NAMESAPCE + ".insertBasUnitpriceformes", param);
        
        putDataSetMap(dto, result);
    }
    
    
   	public void saveSegmentInfo(UiMapDto dto) throws Exception {
   		int result = 0;
        
        DataSetMap paramMapSegment = getParametersDataSetMap(dto, "ds_SegmentInfo");
        DataSetMap paramMapMessage = getParametersDataSetMap(dto, "ds_Message");
   
        Map<String, Object> paramSegment;
        Map<String, Object> paramMessage = paramMapMessage.get(0); 
        
       	for(int i = 0; i < paramMapSegment.size(); i++)
       	{
       		paramSegment = paramMapSegment.get(i); 
       		if(paramSegment.get("CHK").toString().equals("0")) continue;
       		
			String sendSegment = paramSegment.get("PROCESSSEGMENTID").toString();
			String prevProcessDefId = "";
			String prevProcessDefVer = "";
			
			paramMessage.put("PROCESSSEGMENTID", sendSegment);//공정은 메세지에서 공정 선택 안하고 그리드에서 선택하니까...
			
			//공정에 해당하는 라우팅 정보 조회
			List<Map<String, Object>> tergetRoutingInfo = GetRoutingInfo("", "", sendSegment);
       		
			if(tergetRoutingInfo != null && !tergetRoutingInfo.isEmpty())
			{
				for(int x = 0; x < tergetRoutingInfo.size(); x++)
				{
					String processDefId = tergetRoutingInfo.get(x).get("PROCESSDEFID").toString();
					String processDefVer = tergetRoutingInfo.get(x).get("PROCESSDEFVERSION").toString();
					
					//ProcessPaht의 ENTERPRISEID, PLANTID, USERSEQUENCE 가져오기
					String enterpriseId = tergetRoutingInfo.get(x).get("ENTERPRISEID").toString();
					String plantId = tergetRoutingInfo.get(x).get("PLANTID").toString();
					String usersequence = tergetRoutingInfo.get(x).get("USERSEQUENCE").toString();
					
					if(!prevProcessDefId.equals(processDefId) || !prevProcessDefVer.equals(processDefVer)) //Routing 정보가 달라지면
					{
						prevProcessDefId = processDefId;
						prevProcessDefVer = processDefVer;
						
						//Routing 에 해당하는 LOT List 조회 
						List<Map<String, Object>> targetLotList = GetLotListToProduct("SEGMENT", sendSegment, tergetRoutingInfo.get(x));
						
						if(targetLotList != null && !targetLotList.isEmpty())
						{
							for(int k = 0; k < targetLotList.size(); k++)
							{
								result += ExecuteLotMessageInsert(targetLotList.get(k), tergetRoutingInfo.get(x), paramMessage);
							}
							
							//TOBE 는 PCM_LOTMESSAGE 에 넣을 때만  MNG 에 넣음 : by 이창영 이사님
							HashMap<String, Object> options = new HashMap();
							options.put("PROCESSDEFID", processDefId);
							options.put("PROCESSDEFVERSION", processDefVer);
							
							List<Map<String, Object>> productList = generalDao.addSelect(NAMESAPCE + ".selectBasProductdefinitionList", options); 
							
							if(productList != null && !productList.isEmpty())
							{
								//LOTMESSAGEMNG 저장
								result += ExecuteLotMessageMngInsert(productList.get(0), paramMessage);
							}
							
							
						}
					}//if(!prevProcessDefId.equals(processDefId) || !prevProcessDefVer.equals(processDefVer)) //Routing 정보가 달라지면
					
				}
			}
			
       	}
           
//           result += generalDao.insert(NAMESAPCE + ".insertBasUnitpriceformes", param);
       		if(result == 0)
       		{
       			throw new BizException("NoLotSelectedSegment"); //선택한 공정에 해당하는 Lot 이 없습니다. 
       		}
       	
           putDataSetMap(dto, result);
       }
       
   	public void saveTargetWip(UiMapDto dto) throws Exception {
   		int result = 0;
        
        DataSetMap paramMapWip = getParametersDataSetMap(dto, "ds_TargetWip");
        DataSetMap paramMapMessage = getParametersDataSetMap(dto, "ds_Message");
   
        Map<String, Object> paramWip;
        Map<String, Object> paramMessage = paramMapMessage.get(0); 
        
        String sendSegment = paramMessage.get("PROCESSSEGMENTID").toString();
        
        String[] segmentId = sendSegment.split(",");
        for(int x = 0; x < segmentId.length; x++)
		{
        	for(int i = 0; i < paramMapWip.size(); i++)
           	{
        		paramWip = paramMapWip.get(i); 
        		
        		//LOT List 조회
				List<Map<String, Object>> targetLotList = GetLotListToProduct("LOT", segmentId[x], paramWip);
				
				//라우팅 정보 조회
				String processDefId = targetLotList.get(0).get("PROCESSDEFID").toString();
				String processDefVersion = targetLotList.get(0).get("PROCESSDEFVERSION").toString();
				List<Map<String, Object>> tergetRoutingInfo = GetRoutingInfo(processDefId, processDefVersion, segmentId[x]);
				
				//ProcessPaht의 ENTERPRISEID, PLANTID, USERSEQUENCE 가져오기
				String enterpriseId = tergetRoutingInfo.get(0).get("ENTERPRISEID").toString();
				String plantId = tergetRoutingInfo.get(0).get("PLANTID").toString();
				String usersequence = tergetRoutingInfo.get(0).get("USERSEQUENCE").toString();
				
				if(targetLotList != null && !targetLotList.isEmpty())
				{
					for(int k = 0; k < targetLotList.size(); k++)
					{
						result += ExecuteLotMessageInsert(targetLotList.get(k), tergetRoutingInfo.get(0), paramMessage);
					}
					
					//안에서 공정만큼 도는 데 밖에서 또 돌 필요 없음. 공정 for 밖으로 빠짐. 
//					result += ExecuteLotMessageMngInsert(paramWip, paramMessage);//paramProduct.get("PRODUCTDEFID") 
					
				}
				
           	}
		}
        
        for(int i = 0; i < paramMapWip.size(); i++) {
        	paramWip = paramMapWip.get(i); 
        	result += ExecuteLotMessageMngInsert(paramWip, paramMessage);
        }
        
           putDataSetMap(dto, result);
       }
       
	/************************************************************************************************
	 * PCM_LOTMESSAGE Insert 작업 실행
	 ************************************************************************************************/
	private int ExecuteLotMessageInsert(Map<String, Object> targetLot, Map<String, Object> tergetRouting, Map<String, Object> paramMessage) {
		int result = 0;
		HashMap<String, Object> propertyMap = new HashMap();
		
		propertyMap.put("LOTID", targetLot.get("LOTID"));
    	propertyMap.put("PRODUCTDEFID", targetLot.get("PRODUCTDEFID"));
    	propertyMap.put("PRODUCTDEFVERSION", targetLot.get("PROCESSDEFVERSION"));
    	//propertyMap.put("PROCESSSEGMENTID", paramMessage.get("PROCESSSEGMENTID"));
    	propertyMap.put("PROCESSSEGMENTID", tergetRouting.get("PROCESSSEGMENTID"));
		
    	List<Map<String, Object>> lotMessageList = generalDao.addSelect(NAMESAPCE + ".selectLotMessageSequence", propertyMap);
    	int seq = 1;
		if(lotMessageList != null && !lotMessageList.isEmpty())
		{
			//같은 조건이 있다면 seq + 1
			String strSeq = lotMessageList.get(0).get("MAX").toString();							
			seq = StringUtils.isEmpty(strSeq) ? 0 : Integer.parseInt(strSeq);
			seq += 1;
		}
		
		propertyMap.put("SEQUENCE", seq);
		propertyMap.put("PROCESSSEGMENTVERSION", "*");
		propertyMap.put("ENTERPRISEID", tergetRouting.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", tergetRouting.get("PLANTID"));
		propertyMap.put("AREAID", targetLot.get("AREAID"));
		propertyMap.put("PROCESSDEFID", targetLot.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", targetLot.get("PROCESSDEFVERSION"));
		propertyMap.put("USERSEQUENCE", tergetRouting.get("USERSEQUENCE"));
		propertyMap.put("SHOWTYPE", paramMessage.get("SHOWPOPUP"));
		propertyMap.put("TITLE", paramMessage.get("TITLE"));
		propertyMap.put("MESSAGE", paramMessage.get("CONTENTS"));
		propertyMap.put("ISREAD", "N");
		propertyMap.put("CREATOR", paramMessage.get("CREATOR"));
		propertyMap.put("VALIDSTATE", "Valid");
		propertyMap.put("WORKCOUNT", targetLot.get("WORKCOUNT"));
		propertyMap.put("REGPROCESSSEGMENTID", targetLot.get("PROCESSSEGMENTID"));
		propertyMap.put("REGPROCESSSEGMENTVERSION", targetLot.get("PROCESSSEGMENTVERSION"));
		propertyMap.put("MESSAGE_PROCESSSTATE", paramMessage.get("MSGPROCSTATE"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		
		result += generalDao.insert(NAMESAPCE + ".insertPcmLotmessage", propertyMap);
		
		return result;
		
	}

	/************************************************************************************************
	 * PCM_LOTMESSAGEMNG Insert 작업 실행
	 ************************************************************************************************/
	private int ExecuteLotMessageMngInsert(Map<String, Object> paramProduct,Map<String, Object> paramMessage) {
		int result = 0;
		HashMap<String, Object> propertyMap = new HashMap();
		
		//String txnHistKey = TxnHistKey.getTxnHistKey();
		String sendSegment = paramMessage.get("PROCESSSEGMENTID").toString();
		
		String[] segmentId = sendSegment.split(","); //LOT 탭은  전달 공정이 여러개 선택됨. 
		
		for(int x = 0; x < segmentId.length; x++)
		{
			String txnHistKey = TxnHistKey.getTxnHistKey();
			
			propertyMap.put("MESSAGEID", txnHistKey);
			propertyMap.put("TITLE", paramMessage.get("TITLE"));
			propertyMap.put("MESSAGE", paramMessage.get("CONTENTS"));
			propertyMap.put("PRODUCTDEFID", paramProduct.get("PRODUCTDEFID"));
			propertyMap.put("PRODUCTDEFVERSION", paramProduct.get("PRODUCTDEFVERSION"));
	    	propertyMap.put("PROCESSSEGMENTID", segmentId[x]);
	    	propertyMap.put("PROCESSSEGMENTVERSION", "*");
			propertyMap.put("CREATOR", paramMessage.get("CREATOR"));
			propertyMap.put("VALIDSTATE", "Valid");
			propertyMap.put("MESSAGE_PROCESSSTATE", paramMessage.get("MSGPROCSTATE"));
			propertyMap.put("LASTTXNHISTKEY",  txnHistKey);
			
			result += generalDao.insert(NAMESAPCE + ".insertPcmLotmessageMng", propertyMap);
		}
		return result;
		
	}
    
    private List<Map<String, Object>> GetRoutingInfo(String processDefId, String processDefVersion, String sendSegment) {
    	HashMap<String, Object> propertyMap = new HashMap();
		
    	propertyMap.put("PROCESSDEFID", processDefId);
    	propertyMap.put("PROCESSDEFVERSION", processDefVersion);
    	propertyMap.put("PROCESSSEGMENTID", sendSegment);
    	
		List<Map<String, Object>> processPathInfo = generalDao.addSelect(NAMESAPCECOM + ".selectBasProcesspathList", propertyMap);
		
		return processPathInfo;
	}

	private List<Map<String, Object>> GetLotListToProduct(String tabType, String processSegmentId, Map<String, Object> param) {
				
				HashMap<String, Object> propertyMap = new HashMap<>();
				
				switch(tabType)
				{
				case "PRODUCT":
					propertyMap.put("PRODUCTDEFID", param.get("PRODUCTDEFID"));
					propertyMap.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));
					
					break;
				case "SEGMENT": //Segment 는 위에서 Map 에 PROCESSDEFID 넣고 들어올 것. 
					propertyMap.put("PROCESSDEFID", param.get("PROCESSDEFID"));
					propertyMap.put("PROCESSDEFVERSION", param.get("PROCESSDEFVERSION"));
					break;
				case "LOT":
					propertyMap.put("LOTID", param.get("LOTID"));
					break;
				}
		
				List<Map<String, Object>> lotList = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
				
				return lotList;
	}
	

   
}