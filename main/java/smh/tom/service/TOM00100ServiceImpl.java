package smh.tom.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.tom.service.TOM00200Service;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
 * @file		: TOM01100ServiceImpl.java
 * @Package		: smh.tom.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOM01100ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Service
public class TOM00100ServiceImpl extends AbstractNbdfService implements TOM00100Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM00100Dao";
    public static final String NAMESAPCE2 = "smh.tom.dao.TOM00200Dao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
	private TOMCommonService service;
    
    @Autowired
    private TOM00200Service service2;

    /**
     * @fn
     * @brief 치공구 제작 의뢰 :: 상단 Grid
     * @remark 
     * @see smh.tom.service.TOM00100Service#selectToolRequest(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectToolRequest(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief Tool code List :: 팝업
     * @remark 
     * @see smh.bas.service.PCM00100Service#selectToolDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectToolDetail(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief tool code 리스트 :: 팝업
     * @remark 
     * @see smh.bas.service.PCM00100Service#selectToolDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectToolCodeList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    public void selectToolCodeList2(UiMapDto dto) throws Exception { //수정/수리일 경우
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief tool 정보 그리드 정보 저장
     * @remark 
     * @see smh.bas.service.PCM00100Service#saveToolGrid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveToolGrid(UiMapDto dto) throws Exception {
    	DataSetMap inputMap = getParametersDataSetMap(dto, "INPUT"); //Request : 삭제 이벤트 처리
        DataSetMap inputDetMap = getParametersDataSetMap(dto, "INPUT_DET"); //Request Detail : 수정/추가 처리
        DataSetMap inputDetMap2 = getParametersDataSetMap(dto, "INPUT_DET2"); //Request Detail : 삭제 처리
        Map<String, Object> reqParam;
        
        log("@@@ INPUT SZ :: "+inputMap.size());
        log("@@@ INPUT_DET SZ :: "+inputDetMap.size());
        log("@@@ INPUT_DET2 SZ :: "+inputDetMap2.size());
        
        //상세 내역 처리(추가/수정만 처리)
        int result = 0;
        int continueSequence = 0;
        for (int i = 0, n = inputDetMap.size(); i < n; i++) {
        	reqParam = inputDetMap.get(i);
        	reqParam.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
        	
        	if(continueSequence>0){ //20210408/Edit/PHW
        		reqParam.put("REQUESTSEQUENCE", continueSequence);
        	}
           
            int type = getRowType(reqParam);
            
            //============
            // 추가 건 저장
            //============
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	continueSequence = getDetInsertData(reqParam);
            //============
            // 수정 건 저장
            //============	
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	getDetUpdateData(reqParam);
            }
        }
        
        //=====================================================
        //[이후처리] 상세 내역 처리(삭제만 처리) :: inputDetMap2 데이터셋을 사용 한다.
        //=====================================================
        for (int i = 0, n = inputDetMap2.size(); i < n; i++) {
        	reqParam = inputDetMap2.get(i);
        	reqParam.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
        	
            int type = getRowType(reqParam);
            
            if (type == DataSet.ROW_TYPE_DELETED) {
            	getDetDeleteData(reqParam);            	
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief tool 상단 의뢰(Request) 삭제 : 요청+상세 등 모두 삭제 (등록단계만 삭제 가능)
     * @remark 
     * @see smh.bas.service.PCM00100Service#saveToolGrid(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void deleteRequest(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	//1. 의뢰Lot삭제
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".deleteRequestLot", param));
        	//2. 의뢰상세삭제
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".deleteRequestDetail", param));
        	//3. 의뢰삭제
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".deleteRequest", param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    //==========================
  	//--------------------------
    //제작의뢰 의뢰  [Insert]
    //--------------------------
    //==========================
    private int getDetInsertData(Map<String, Object> row) throws Exception
    {
    	//제작의뢰 번호 채번하기
    	String requestDate = (String)row.get("REQUESTDATE");
    	String deliveryDate = (String)row.get("DELIVERYDATE");
    	String toolMakeType = (String)row.get("TOOLMAKETYPE"); //Add:증작, Modify(수정), New(신규), Repair(수리)
    	String requestSequence = StringUtil.NVL(row.get("REQUESTSEQUENCE")+"",""); //의뢰순번
    	String currDurableLotId = (String)row.get("TOOLNUMBER");    	
    	log("requestDate :: "+requestDate);
    	log("deliveryDate :: "+deliveryDate);
    	log("toolMakeType :: "+toolMakeType);
    	log("requestSequence :: "+requestSequence);
    	log("currDurableLotId :: "+currDurableLotId); //수정/수리 이전 Tool코드 (입고 전 까지 사용)
    	int sequence = 0;
    	
    	//의뢰순번이 없다면 채번 한다.
    	if(requestSequence.equals("0")){
    		
    		//의뢰순서 채번    		
	    	sequence = getToolRequestSequence(requestDate);
	    	
	    	//row에 새로 생성한 시퀀스를 설정 (하위 클래스에서 해당 값을 사용할 수 있도록)
	    	row.put("REQUESTSEQUENCE", sequence);	       
	    	
	    	Map<String, Object> productdef = new HashMap<>();
	    	productdef.put("PRODUCTDEFID", row.get("PRODUCTDEFID"));
	    	productdef.put("PRODUCTDEFVERSION", row.get("PRODUCTDEFVERSION"));    	
	    	productdef = generalDao.addSelectOneMap(NAMESAPCE + ".selectProductDefinition", productdef);
	    	
	    	//존재여부확인
	    	if(productdef == null)
	    	{
	    		throw new BizException("InValidData001|"+String.format("productDefinition Key = %s is not exists!", row.get("PRODUCTDEFID") + ", version = " + row.get("PRODUCTDEFVERSION")));
	    	}
	    	//삭제여부 확인 
	    	if (productdef.get("VALIDSTATE").equals("Invalid")) 
	    	{
	    		throw new BizException("InValidData001|"+String.format("productDefinition Key = %s is deleted!", row.get("PRODUCTDEFID") + ", version = " + row.get("PRODUCTDEFVERSION")));
	    	}
	    	
	    	Map<String, Object> toolReq = new HashMap<>();
	    	//키지정
	    	toolReq.put("REQUESTDATE", requestDate);
	    	toolReq.put("REQUESTSEQUENCE", sequence);	       
	    	//데이터지정
	    	toolReq.put("PRODUCTDEFID", 			row.get("PRODUCTDEFID"));
	    	toolReq.put("PRODUCTDEFVERSION", 	row.get("PRODUCTDEFVERSION"));
	    	toolReq.put("ENTERPRISEID", 				row.get("ENTERPRISEID"));
	    	toolReq.put("PLANTID", 					row.get("PLANTID"));
	    	toolReq.put("REQUESTDEPARTMENT", 	row.get("REQUESTDEPARTMENT")); //의뢰부서
	    	toolReq.put("REQUESTUSER", 				row.get("REQUESTUSER")); //의뢰자
	    	toolReq.put("DELIVERYDATE", 				deliveryDate); //납기일
	    	toolReq.put("REQUESTCOMMENT", 		row.get("REQUESTCOMMENT")); //의뢰사유
	    	toolReq.put("ISAPPROVALUSE", 			"N"); //승인사용여부
	    	toolReq.put("TOOLPROGRESSSTATUS", 	row.get("TOOLPROGRESSSTATUS"));
	    	toolReq.put("TOOLMAKETYPE", 			row.get("TOOLMAKETYPE"));
	    	toolReq.put("DESCRIPTION", 				row.get("DESCRIPTION")); //특이사항
	    	//TR
	    	toolReq.put("CREATOR", 					row.get("CREATOR"));
	    	toolReq.put("MODIFIER", 					row.get("CREATOR"));
	    	toolReq.put("LASTTXNHISTKEY", 			row.get("LASTTXNHISTKEY"));
	    	toolReq.put("LASTTXNID", 					"Create");
	    	toolReq.put("LASTTXNUSER", 				row.get("CREATOR"));
	    	toolReq.put("LASTTXNCOMMENT", 		null);
	    	toolReq.put("VALIDSTATE", 				"Valid");
	    	
	    	log("================================================");
	    	log("(I) 의뢰 마스터=Insert : 의뢰순번 채번");
	    	log("================================================");
	    	log("REQUESTDATE :: "+			toolReq.get("REQUESTDATE"));
	    	log("REQUESTSEQUENCE :: "+		toolReq.get("REQUESTSEQUENCE"));
	    	log("================================================");
	    	log("PRODUCTDEFID :: "+			toolReq.get("PRODUCTDEFID"));
	    	log("PRODUCTDEFVERSION :: "+	toolReq.get("PRODUCTDEFVERSION"));
	    	log("ENTERPRISEID :: "+			toolReq.get("ENTERPRISEID"));
	    	log("PLANTID :: "+					toolReq.get("PLANTID"));
	    	log("REQUESTDEPARTMENT :: "+	toolReq.get("REQUESTDEPARTMENT"));
	    	log("REQUESTUSER :: "+			toolReq.get("REQUESTUSER"));
	    	log("DELIVERYDATE :: "+			toolReq.get("DELIVERYDATE"));
	    	log("REQUESTQTY :: "+				toolReq.get("REQUESTQTY"));
	    	log("REQUESTCOMMENT :: "+		toolReq.get("REQUESTCOMMENT"));
	    	log("DESCRIPTION :: "+				toolReq.get("DESCRIPTION"));
	    	log("ISAPPROVALUSE :: "+	"N");
	    	log("TOOLPROGRESSSTATUS :: "+toolReq.get("TOOLPROGRESSSTATUS"));
	    	log("TOOLMAKETYPE :: "+			toolReq.get("TOOLMAKETYPE"));
	    	log("DESCRIPTION :: "+				toolReq.get("DESCRIPTION"));
	    	log("CREATOR :: "+					toolReq.get("CREATOR"));
	    	log("LASTTXNHISTKEY :: "+		toolReq.get("LASTTXNHISTKEY"));
	    	
	    	//의뢰 마스터 insert
	    	generalDao.addUpdate(NAMESAPCE + ".insertToolRequest", toolReq);
	    	
	    	log(">>>>>>>>>>>>>>>>>>>>>>> INSERT 처리 :: ToolRequest 완료");
	    	
    	}else{ //아래는 의뢰순번에 묶어서 처리 한다.
    		
    		sequence = NumberUtil.toInt(requestSequence);
    		
    		Map<String, Object> toolReq = new HashMap<>();
    		//키지정
	    	toolReq.put("REQUESTDATE", requestDate);
	    	toolReq.put("REQUESTSEQUENCE", sequence);	       
	    	//데이터지정
	    	toolReq.put("PRODUCTDEFID", 			row.get("PRODUCTDEFID"));
	    	toolReq.put("PRODUCTDEFVERSION", 	row.get("PRODUCTDEFVERSION"));
	    	toolReq.put("ENTERPRISEID", 				row.get("ENTERPRISEID"));
	    	toolReq.put("PLANTID", 					row.get("PLANTID"));
	    	toolReq.put("REQUESTDEPARTMENT", 	row.get("REQUESTDEPARTMENT")); //의뢰부서
	    	toolReq.put("REQUESTUSER", 				row.get("REQUESTUSER")); //의뢰자
	    	toolReq.put("DELIVERYDATE", 				deliveryDate); //납기일	    	
	    	toolReq.put("REQUESTCOMMENT", 		row.get("REQUESTCOMMENT")); //의뢰사유
	    	toolReq.put("ISAPPROVALUSE", 			"N"); //승인사용여부
	    	toolReq.put("TOOLPROGRESSSTATUS", 	row.get("TOOLPROGRESSSTATUS"));
	    	toolReq.put("TOOLMAKETYPE", 			row.get("TOOLMAKETYPE"));
	    	toolReq.put("DESCRIPTION", 				row.get("DESCRIPTION")); //특이사항
	    	//TR
	    	toolReq.put("CREATOR", 					row.get("CREATOR"));
	    	toolReq.put("MODIFIER", 					row.get("CREATOR"));
	    	toolReq.put("LASTTXNHISTKEY", 			row.get("LASTTXNHISTKEY"));
	    	toolReq.put("LASTTXNID", 					"Create");
	    	toolReq.put("LASTTXNUSER", 				row.get("CREATOR"));
	    	toolReq.put("LASTTXNCOMMENT", 		null);
	    	toolReq.put("VALIDSTATE", 				"Valid");
	    	
	    	log("================================================");
	    	log("(I) 의뢰 마스터=Update : 의뢰순번 그룹핑");
	    	log("================================================");
	    	log("REQUESTDATE :: "+			toolReq.get("REQUESTDATE"));
	    	log("REQUESTSEQUENCE :: "+		toolReq.get("REQUESTSEQUENCE"));
	    	log("================================================");
	    	log("PRODUCTDEFID :: "+			toolReq.get("PRODUCTDEFID"));
	    	log("PRODUCTDEFVERSION :: "+	toolReq.get("PRODUCTDEFVERSION"));
	    	log("ENTERPRISEID :: "+			toolReq.get("ENTERPRISEID"));
	    	log("PLANTID :: "+					toolReq.get("PLANTID"));
	    	log("REQUESTDEPARTMENT :: "+	toolReq.get("REQUESTDEPARTMENT"));
	    	log("REQUESTUSER :: "+			toolReq.get("REQUESTUSER"));
	    	log("DELIVERYDATE :: "+			toolReq.get("DELIVERYDATE"));
	    	log("REQUESTQTY :: "+				toolReq.get("REQUESTQTY"));
	    	log("REQUESTCOMMENT :: "+		toolReq.get("REQUESTCOMMENT"));
	    	log("ISAPPROVALUSE :: "+			"N");
	    	log("TOOLPROGRESSSTATUS :: "+toolReq.get("TOOLPROGRESSSTATUS"));
	    	log("TOOLMAKETYPE :: "+			toolReq.get("TOOLMAKETYPE"));
	    	log("DESCRIPTION :: "+				toolReq.get("DESCRIPTION"));
	    	log("CREATOR :: "+					toolReq.get("CREATOR"));
	    	log("LASTTXNHISTKEY :: "+		toolReq.get("LASTTXNHISTKEY"));
	    	
	    	//의뢰 마스터 update
    		generalDao.addUpdate(NAMESAPCE + ".updateToolRequest", toolReq);
    	}
    	
    	//Add:증작, Modify(수정), New(신규), Repair(수리)
    	String[] toolCodeArr = new String[2];
    	String toolCode = "";
    	String toolVersion = "";
    	
    	//*********************************************************************
    	//*********************************************************************
    	//치공구 버젼 채번(합수,X,Y 동일한 값 미존재시 버젼 증가함(20210412)
    	//*********************************************************************
    	//*********************************************************************
    	toolCodeArr = this.getDurableIdVersion(row);
    	toolCode = toolCodeArr[0]; //tool코드는 조합이다.
    	toolVersion = toolCodeArr[1]; //합수/scalex/scaley가 변경되면 버젼 변경된다.
    	//*********************************************************************
    	
    	Map<String, Object> toolReqDet = new HashMap<>();
    	//키지정
    	toolReqDet.put("DURABLEDEFID", 		toolCode);
    	toolReqDet.put("DURABLEDEFVERSION",	toolVersion);
    	toolReqDet.put("REQUESTDATE", 			requestDate);
    	toolReqDet.put("REQUESTSEQUENCE", 	sequence);
    	toolReqDet.put("REQUESTIDX", 			row.get("REQUESTIDX"));
    	//데이터지정
    	toolReqDet.put("PLANTID", 				row.get("PLANTID"));
    	toolReqDet.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
    	toolReqDet.put("AREAID", 					row.get("RECEIPTAREAID"));
    	toolReqDet.put("VENDORID", 				row.get("VENDORID"));
    	toolReqDet.put("OWNSHIPTYPE", 			""); //소유구분
    	toolReqDet.put("QTY", 						row.get("QTY")); //의뢰수량
    	toolReqDet.put("ORDERQTY", 				row.get("ORDERQTY")); //수주량
    	toolReqDet.put("NETPNL", 					row.get("NETPNL")); //NETPNL
    	toolReqDet.put("DESCRIPTION", 			row.get("DESCRIPTION")); //특이사항
    	//TR
    	toolReqDet.put("CREATOR", 				row.get("CREATOR"));
    	toolReqDet.put("MODIFIER", 				row.get("CREATOR"));
    	toolReqDet.put("LASTTXNHISTKEY", 		row.get("LASTTXNHISTKEY"));
    	toolReqDet.put("LASTTXNID", 				"Create");
    	toolReqDet.put("LASTTXNUSER", 			row.get("CREATOR"));
    	toolReqDet.put("LASTTXNCOMMENT", 	null);
    	toolReqDet.put("VALIDSTATE", 			"Valid");
    	
    	log("================================================");
    	log("(II) 의뢰 내역 insert");
    	log("================================================");
    	log("DURABLEDEFID :: "+			toolCode);
    	log("DURABLEDEFVERSION :: "+	toolVersion);
    	log("REQUESTDATE :: "+			requestDate);
    	log("REQUESTSEQUENCE :: "+		sequence);
    	log("REQUESTIDX :: "+				row.get("REQUESTIDX"));
    	log("================================================");
    	log("PLANTID :: "+					toolReqDet.get("PLANTID"));
    	log("ENTERPRISEID :: "+			toolReqDet.get("ENTERPRISEID"));
    	log("AREAID :: "+					toolReqDet.get("AREAID"));
    	log("VENDORID :: "+				toolReqDet.get("VENDORID"));
    	log("OWNSHIPTYPE :: "+			toolReqDet.get("OWNSHIPTYPE"));
    	log("QTY :: "+						toolReqDet.get("QTY"));
    	log("ORDERQTY :: "+				toolReqDet.get("ORDERQTY"));
    	log("DESCRIPTION :: "+				toolReqDet.get("DESCRIPTION"));
    	log("CREATOR :: "+					toolReqDet.get("CREATOR"));
    	log("LASTTXNHISTKEY :: "+		toolReqDet.get("LASTTXNHISTKEY"));
    	
    	//의뢰 내역 insert
    	generalDao.addUpdate(NAMESAPCE + ".insertToolRequestDetail", toolReqDet);
    	
    	//#########################################################################################
    	//#########################################################################################20210412추가함.(의뢰단계에서 수리/수정의 경우 툴코드 생성)
    	//#########################################################################################
    	//DetailLot insert
    	if(toolMakeType.equals("Modify") || toolMakeType.equals("Repair")){ //수정/수리의 경우만 의뢰단계에서 
    		//키지정
			Map<String, Object>	toolReqDetailLot = new HashMap<>();
			toolReqDetailLot.put("DURABLEDEFID", 			toolCode);
			toolReqDetailLot.put("DURABLEDEFVERSION", 	toolVersion);
			toolReqDetailLot.put("REQUESTDATE", 			requestDate);
			toolReqDetailLot.put("REQUESTSEQUENCE", 	sequence);
			toolReqDetailLot.put("REQUESTIDX", 				row.get("REQUESTIDX"));
			
			toolReqDetailLot.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
			toolReqDetailLot.put("PLANTID", 					row.get("PLANTID"));
			
			toolReqDetailLot.put("CREATOR", 					row.get("CREATOR"));
			toolReqDetailLot.put("MODIFIER", 				row.get("CREATOR"));
			toolReqDetailLot.put("LASTTXNHISTKEY", 		row.get("LASTTXNHISTKEY"));
			toolReqDetailLot.put("LASTTXNID", 				"Create");
			toolReqDetailLot.put("LASTTXNUSER", 			row.get("CREATOR"));
			toolReqDetailLot.put("LASTTXNCOMMENT", 	null);
			toolReqDetailLot.put("VALIDSTATE", 				"Valid");
			
			//의뢰Lot가 존재하지 않으면 의뢰수량 만큼 TOOL코드 채번 추가 한다.
			List<Map<String, Object>> toolReqDetail2 = generalDao.addSelect(NAMESAPCE2 + ".selectToolReqDetailLot", toolReqDetailLot); //해당순번의 치공구ID가 TOM_TOOLREQUESTDETAILLOT존재여부파악(4개컬럼)->(5개컬럼)
			log("toolReqDetail2 sz :: "+toolReqDetail2.size());
			if(toolReqDetail2.size()==0) //DurableLot 데이터가 존재하지 않을시만 의뢰수량 만큼 신규 채번 한다.
			{	
				//DetailLot생성
				String tempDurableLotID = "";
				toolReqDetailLot.put("TOOLCODE", 				toolCode);
				toolReqDetailLot.put("TOOLMAKETYPE", 			toolMakeType);
				tempDurableLotID = service2.createIdToolRequestDetailLotSequence(toolReqDetailLot); //내역등록서비스의 TOOL코드 채번 호출, 2021-06-11수정함 :: 채번규칙 바꿈.(createIdToolRequestDetailLotSequence2), 2021-07-28수정함 :: 신규/증작과 동일하게 Tool code채번으로 수정함.
				log("tempDurableLotID :: "+tempDurableLotID);				
				if(toolMakeType.equals("Modify")){ //수정의 경우 이전lot번호 기억
					toolReqDetailLot.put("TOOLNUMBER", currDurableLotId); //tool코드는 기존 tool코드 사용(입고시 까지만)
					//===================================================================================
					//****************************************************************************************************************************
					toolReqDetailLot.put("NEXTDURABLELOTID", tempDurableLotID); //수정의 경우, 입고시 부터 사용할 Tool코드를 미리 채번 한다.
					//****************************************************************************************************************************
					//===================================================================================
					log("(수정Lot : 입고이후 사용)NEXTDURABLELOTID :: "+tempDurableLotID);
				}else{//수리의경우
					toolReqDetailLot.put("TOOLNUMBER", currDurableLotId); //이전tool코드 그대로 사용 (tool코드 채번 없슴)
					toolReqDetailLot.put("NEXTDURABLELOTID", null);
				}
				log("TOOLNUMBER :: "+tempDurableLotID);
				generalDao.addUpdate(NAMESAPCE2 + ".insertToolReqDetailLot", toolReqDetailLot); //수정,수리는 의뢰Lot 먼저 추가 한다.20210412추가함
			}else{
				log("수리는 기존Tool코드 사용하므로 Lot 처리 없슴");
			}
    	}else{
    		log("신규/증작은 Lot 처리 의뢰 단계에서 하지 않음");
    	}
    	//#########################################################################################
    	//#########################################################################################
    	//#########################################################################################
    	
    	return sequence;
    }
    
    //==========================
  	//--------------------------
    //의뢰내역 수정  [Update]
    //--------------------------
    //==========================
    private void getDetUpdateData(Map<String, Object> row) throws Exception
    {    	
    	Map<String, Object> toolReqDet = new HashMap<>();
    	//키지정
    	toolReqDet.put("DURABLEDEFID", 			row.get("TOOLCODE"));
    	toolReqDet.put("DURABLEDEFVERSION", 	row.get("TOOLVERSION"));
    	toolReqDet.put("REQUESTDATE", 				row.get("REQUESTDATE"));
    	toolReqDet.put("REQUESTSEQUENCE", 		row.get("REQUESTSEQUENCE"));
    	toolReqDet.put("REQUESTIDX", 				row.get("REQUESTIDX"));
    	//데이터지정
    	toolReqDet.put("AREAID", 						row.get("RECEIPTAREAID"));
    	toolReqDet.put("VENDORID", 					row.get("VENDORID"));
    	toolReqDet.put("OWNSHIPTYPE", 				""); //소유구분
    	toolReqDet.put("QTY", 							row.get("QTY")); //의뢰수량
    	toolReqDet.put("ORDERQTY", 					row.get("ORDERQTY")); //수주량
    	toolReqDet.put("OLB", 							row.get("OLB")); //OLB
    	toolReqDet.put("NETPNL", 						row.get("NETPNL")); //NETPNL
    	toolReqDet.put("DESCRIPTION", 				row.get("DESCRIPTION")); //특이사항(설명) 
    	//REQ
    	toolReqDet.put("DELIVERYDATE", 				row.get("DELIVERYDATE")); //납기일자
    	toolReqDet.put("REQUESTDEPARTMENT", 	row.get("REQUESTDEPARTMENT")); //의뢰부서
    	toolReqDet.put("REQUESTUSER", 				row.get("REQUESTUSER")); //의뢰자
    	toolReqDet.put("REQUESTCOMMENT", 		row.get("REQUESTCOMMENT")); ///의뢰사유
    	//TR    	
    	toolReqDet.put("MODIFIER", 					row.get("CREATOR"));
    	toolReqDet.put("LASTTXNHISTKEY", 			row.get("LASTTXNHISTKEY"));
    	toolReqDet.put("LASTTXNID", 					"Update");
    	toolReqDet.put("LASTTXNUSER", 				row.get("CREATOR"));
    	toolReqDet.put("LASTTXNCOMMENT", 		null);
    	toolReqDet.put("VALIDSTATE", 				"Valid");
    	
    	log("================================================");
    	log("(III_1) 의뢰 내역 update");
    	log("================================================");
    	log("TOOLCODE :: "+				toolReqDet.get("DURABLEDEFID"));
    	log("TOOLVERSION :: "+			toolReqDet.get("DURABLEDEFVERSION"));
    	log("REQUESTDATE :: "+			toolReqDet.get("REQUESTDATE"));
    	log("REQUESTSEQUENCE :: "+		toolReqDet.get("REQUESTSEQUENCE"));
    	log("REQUESTIDX :: "+				toolReqDet.get("REQUESTIDX"));
    	log("================================================");
    	log("AREAID :: "+					toolReqDet.get("AREAID"));
    	log("VENDORID :: "+				toolReqDet.get("VENDORID"));
    	log("OWNSHIPTYPE :: "+			toolReqDet.get("OWNSHIPTYPE"));
    	log("QTY :: "+						toolReqDet.get("QTY"));
    	log("ORDERQTY :: "+				toolReqDet.get("ORDERQTY"));
    	log("OLB :: "+						toolReqDet.get("OLB"));
    	log("NETPNL :: "+					toolReqDet.get("NETPNL"));
    	log("DELIVERYDATE :: "+			toolReqDet.get("DELIVERYDATE"));
    	log("REQUESTCOMMENT :: "+		toolReqDet.get("REQUESTCOMMENT"));
    	log("DESCRIPTION :: "+				toolReqDet.get("DESCRIPTION"));
    	log("MODIFIER :: "+					toolReqDet.get("MODIFIER"));
    	log("LASTTXNHISTKEY :: "+		toolReqDet.get("LASTTXNHISTKEY"));
    	
    	//의뢰 내역 update
    	generalDao.addUpdate(NAMESAPCE + ".updateToolRequestDetail", toolReqDet);
    	
    	log("(III_2) 의뢰 내역 update");
    	
    	//의뢰 마스터 update    	
    	generalDao.addUpdate(NAMESAPCE + ".updateToolRequest", toolReqDet);
    	
    	//치공구 정의 Update
    	toolReqDet.put("SCALEX", 						row.get("SCALEX"));
    	toolReqDet.put("SCALEY", 						row.get("SCALEY"));
    	toolReqDet.put("SUMMARY", 					row.get("SUMMARY"));
    	toolReqDet.put("DURABLECLASSID", 			row.get("TOOLCATEGORYID"));
    	toolReqDet.put("FORM", 						row.get("FORMID"));
    	toolReqDet.put("TOOLKIND", 					row.get("TOOLKINDID"));
    	//TR
    	toolReqDet.put("MODIFIER", 					row.get("CREATOR"));
    	toolReqDet.put("LASTTXNHISTKEY", 			row.get("LASTTXNHISTKEY"));
    	toolReqDet.put("LASTTXNID", 					"Update");
    	toolReqDet.put("LASTTXNUSER", 				row.get("CREATOR"));
    	toolReqDet.put("LASTTXNCOMMENT", 		null);
    	toolReqDet.put("VALIDSTATE", 				"Valid");
    	generalDao.addUpdate(NAMESAPCE + ".updateDurableDefinition", toolReqDet);    	
    }
    
    //=================================================
  	//-----------------------------------------------------------------------
    //의뢰내역 삭제  [Delete] : 하단 그리드에서 삭제 이벤트 처리
    //-----------------------------------------------------------------------
    //=================================================
    private void getDetDeleteData(Map<String, Object> row) throws Exception
    {
    	String toolMakeType =  (String)row.get("TOOLMAKETYPE");
    	
    	Map<String, Object> toolReqDet = new HashMap<>();
    	//키지정
    	toolReqDet.put("DURABLEDEFID", 			row.get("TOOLCODE"));
    	toolReqDet.put("DURABLEDEFVERSION", 	row.get("TOOLVERSION"));
    	toolReqDet.put("REQUESTDATE", 				row.get("REQUESTDATE"));
    	toolReqDet.put("REQUESTSEQUENCE", 		row.get("REQUESTSEQUENCE"));
    	toolReqDet.put("REQUESTIDX", 				row.get("REQUESTIDX"));
    	log("================================================");
    	log("(IV_1) 의뢰 내역 delete");
    	log("================================================");
    	log("TOOLCODE :: "+				toolReqDet.get("DURABLEDEFID"));
    	log("TOOLVERSION :: "+			toolReqDet.get("DURABLEDEFVERSION"));
    	log("REQUESTDATE :: "+			toolReqDet.get("REQUESTDATE"));
    	log("REQUESTSEQUENCE :: "+		toolReqDet.get("REQUESTSEQUENCE"));
    	log("REQUESTIDX :: "+				toolReqDet.get("REQUESTIDX"));
    	log("================================================");
    	
    	//Lot 관련 건 delete    	
    	if(toolMakeType.equals("Modify")){ //수정
    		log("의뢰LOT찾아서 삭제");
    		generalDao.addUpdate(NAMESAPCE + ".deleteToolRequestDetailLot", toolReqDet); //의뢰 Lot 삭제
	    	generalDao.addUpdate(NAMESAPCE + ".deleteToolLot2", toolReqDet); //입고시점Lot 찾아서 삭제
	    		generalDao.addUpdate(NAMESAPCE + ".deleteToolLotHistory2", toolReqDet); //입고시점Lot 찾아서 삭제
    	}else if(toolMakeType.equals("New") || toolMakeType.equals("Add")){ //신규 or 증작
    		log("신규LOT찾아서 삭제");
    		generalDao.addUpdate(NAMESAPCE + ".deleteToolRequestDetailLot", toolReqDet); //의뢰 Lot 삭제
	    	generalDao.addUpdate(NAMESAPCE + ".deleteToolLot", toolReqDet);
	    		generalDao.addUpdate(NAMESAPCE + ".deleteToolLotHistory", toolReqDet);    	
    	}else{ //수리
    		log("LOT삭제---SKIP");
    		generalDao.addUpdate(NAMESAPCE + ".deleteToolRequestDetailLot", toolReqDet); //의뢰 Lot 삭제
    		//처리 없슴.
    	}
    	
    	//=============
    	//의뢰 내역 delete
    	//=============
    	//2021-04-26:맨위에서 아래(여기로 내림)로 옮김(의뢰Lot삭제하고, 의뢰도 삭제)
    	generalDao.addUpdate(NAMESAPCE + ".deleteToolRequestDetail", toolReqDet);
    	
    	//의뢰 마스터 delete :: 내역이 존재하지 않으면 master도 삭제 한다.
    	generalDao.addUpdate(NAMESAPCE + ".deleteToolRequest", toolReqDet);
    }
    
    //메일 발송 : 내용 detail List(UI에서 호출함)
    public void selectToolRequestMailList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	log("SELSTR (선택건 처리2021-07-26) :: "+param.get("SELSTR"));
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectToolRequestMailList", param));
    }
    
    //메일 발송 : 내용 detail List(java에서 호출함)
    //private List<Map<String, Object>> selectToolRequestMailList2(UiMapDto dto) throws Exception {
    //	Map<String, Object> param = getParametersMap(dto);
    //	return generalDao.addSelect(NAMESAPCE + ".selectToolRequestMailList", param);
    //}
    
    //==========================
  	//--------------------------
    //발주(Order) 처리
    //--------------------------
    //==========================
    public void saveOrder(UiMapDto dto) throws Exception {
    	int result = 0;
    	String fromDeptNm = (String)SessionUtil.getSessionValue(ContextConstant.SESSION_DEPT_NM);
	   	String fromName = (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_NM);
	   	String fromAddr = (String)SessionUtil.getSessionValue(ContextConstant.SESSION_EMAIL);
    	Map<String, Object> param = getParametersMap(dto);
    	param.put("FROMDEPTNM", fromDeptNm);
    	param.put("FROMNAME", fromName);
    	param.put("FROMADDR", fromAddr);
    	log("REQUESTDATE :: "+			param.get("REQUESTDATE"));
    	log("REQUESTSEQUENCE :: "+		param.get("REQUESTSEQUENCE"));
    	log("SESSION_DEPT_NM :: "+		param.get("FROMDEPTNM"));
    	log("SESSION_USER_NM :: "+		param.get("FROMNAME"));
    	log("SESSION_EMAIL :: "+			param.get("FROMADDR"));
    	
    	log("SELSTR(발주 저장) :: "+			param.get("SELSTR"));
    	
    	//1/3 : 발주 처리
    	generalDao.addUpdate(NAMESAPCE + ".saveOrder", param);
    	log("발주 처리 저장 완료");
    	
    	//2/3 : 내역에 발주번호 저장
    	Map<String, Object> orderInfo = generalDao.addSelectOneMap(NAMESAPCE + ".selectLastOrderNoSequence", param);
    	log("채번 발주번호 :: " + orderInfo.get("NEXTORDERNO"));
    	param.put("NEXTORDERNO", orderInfo.get("NEXTORDERNO"));
    	generalDao.addUpdate(NAMESAPCE + ".saveDetailOrderNoSave", param);
    	log("내역에 발주번호 저장 완료");
    	
    	//2/3 : 발주 메일 발송
    	this.orderMailSent(dto, param, true); //3번째 파라메터 : true:발주, false:발주취소
    	log("발주 메일을 성공적으로 전송 하였습니다.");
    	
	   	putDataSetMap(dto, result);
    }
    
    //공통전송이력 :: SELECT * FROM CMD_SNDNG_LOGS WHERE ATCH_SRC_KEY = '2021-04-21|2'
    //==========================
  	//--------------------------
    //발주 취소(Order Cancel) 처리
    //--------------------------
    //==========================
    public void saveOrderCancel(UiMapDto dto) throws Exception {
    	int result = 0;
    	String fromDeptNm = (String)SessionUtil.getSessionValue(ContextConstant.SESSION_DEPT_NM);
	   	String fromName = (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_NM);
	   	String fromAddr = (String)SessionUtil.getSessionValue(ContextConstant.SESSION_EMAIL);
    	Map<String, Object> param = getParametersMap(dto);
    	param.put("FROMDEPTNM", fromDeptNm);
    	param.put("FROMNAME", fromName);
    	param.put("FROMADDR", fromAddr);
    	log("REQUESTDATE :: "+			param.get("REQUESTDATE"));
    	log("REQUESTSEQUENCE :: "+		param.get("REQUESTSEQUENCE"));    	
    	log("SESSION_DEPT_NM :: "+		param.get("FROMDEPTNM"));
    	log("SESSION_USER_NM :: "+		param.get("FROMNAME"));
    	log("SESSION_EMAIL :: "+			param.get("FROMADDR"));
    	
    	log("SELSTR(발주취소 저장) :: "+			param.get("SELSTR"));
    	
    	//1/3 : 발주 취소 처리
    	generalDao.addUpdate(NAMESAPCE + ".saveOrderCancel", param);
    	log("발주-취소 처리 저장 완료");
    	
    	//2/3 : 내역에 발주번호 공백 처리 (발주 취소에 따른)
    	generalDao.addUpdate(NAMESAPCE + ".saveDetailOrderNoCancel", param);
    	log("내역에 발주번호 공백 처리 (발주 취소에 따른) 완료");
    	
    	//2/3 : 취소 메일 발송
    	this.orderMailSent(dto, param, false); //3번째 파라메터 : true:발주, false:발주취소
    	log("발주 취소 메일을 성공적으로 전송 하였습니다.");
    	
	   	putDataSetMap(dto, result);
    }
    
    //==========================
  	//--------------------------
    //메일 발송
    //--------------------------
    //==========================
    private void orderMailSent(UiMapDto dto, Map<String, Object> param, boolean sentFlag) throws Exception {
    	int result = 0;
    	String fromName = (String)param.get("FROMNAME"); //의뢰자
    	String fromAddr = (String)param.get("FROMADDR"); //의뢰자 email
    	
    	//발주/발주취소 관련 이메일 발송
    	String resultHtml = service.getMailCssString();
    	log("css :: "+resultHtml);
    	
    	//==========
    	//수신자 List
    	//==========
    	List<Map<String, Object>> recvList = service.selectToolRequestMailRecvList2(dto); //ATCH_SRC_KEY
    	log("recvList SZ :: "+recvList.size());
    	
    	String mailSubject = "";
    	String mailContent = "";
    	if(recvList.size()>0){
    		Map<String, Object> recv0 = recvList.get(0);
    		mailSubject = (String)recv0.get("SUBJECT_TEXT");
    		mailContent = (String)recv0.get("CONTENT2");
    	}

    	log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ mailSubject :: "+mailSubject);
    	log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ mailContent :: "+mailContent);
    	
    	resultHtml = resultHtml + mailContent;
    	    	
    	String toAddr = "";
	   	String toName = "";  	
	   	String toCc = "";	
	   	String toCcName = ""; 	
	   	String jobSysCd = "";
	   	int cnt = 0;
	   	
	   	for (int i = 0, n = recvList.size(); i < n; i++) {
	   		Map<String, Object> recv = recvList.get(i);
            	toAddr = toAddr + (cnt==0?"":";") + (String) recv.get("EMAIL_ADDR"); //수신자List가 ; 로 구분되게 문자열로 저장한다.
            	toName = toName + (cnt==0?"":";") + (String) recv.get("USER_NM");
            	jobSysCd = (String) recv.get("JOB_SYS_CD");
            	cnt++;
        }
	   	
	   	service.emailSend(toAddr, toName, fromAddr, fromName, toCc, toCcName, mailSubject, mailContent, jobSysCd, param, true); //실제 메일 발송	   
	
	   	putDataSetMap(dto, result);	   	
	}
    
    //==========================
    //--------------------------
    //Tool 의뢰 공통 로직 시작
	//--------------------------
    //==========================
    
    //해당 일자의 마지막 순번을 구한다.
    private int getToolRequestSequence(String requestDate) throws Exception {
    	Map<String, Object> param = new HashMap<>();
    	param.put("REQUESTDATE", requestDate);
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolRequestDateSequence", param);
    	if(result==null){
    		log("::해당일자("+requestDate+")에는 REQUESTSEQUENCE가 존재하지 않습니다. 1 로 세팅");
    		result = new HashMap<>();
    		result.put("REQUESTSEQUENCE", 1); 
    	}
    	String lastSequence = (String)result.get("REQUESTSEQUENCE");
    	int returnSequence = NumberUtil.toInt(lastSequence);
    	log("[*** 순번 채번 ***] <"+requestDate +"> => "+returnSequence);
    	return returnSequence;
    }
    
    //ToolCode조합(Tool구분 + 제품코드 + Tool종류)
    private String[] getDurableIdVersion(Map<String, Object> row) throws Exception {
    	String[] returnArr = new String[3];
    	log("row :: "+row.toString());
    	String toolMakeType = (String)row.get("TOOLMAKETYPE");
    	log("[******************]");
    	log("[*** 치공규 버젼 조합  ***]");
    	log("[******************]");
    	log("[ENTERPRISEID :: "+			row.get("ENTERPRISEID")+"]");
    	log("[PLANTID :: "+					row.get("PLANTID")+"]");
    	log("[PRODUCTDEFVERSION :: "+	row.get("PRODUCTDEFVERSION")+"]");
    	log("[FORMID :: "+					row.get("FORMID")+"]");
    	log("[FORM :: "+						row.get("FORM")+"]");
    	log("[SUMMARY :: "+				row.get("SUMMARY")+"]");
    	log("[SCALEX :: "+					row.get("SCALEX")+"]");
    	log("[SCALEY :: "+					row.get("SCALEY")+"]");    	
    	log("[ 1. toolCategory :: "+			row.get("TOOLCATEGORYID")+"]");
    	log("[ 2. productDefId :: "+		row.get("PRODUCTDEFID")+"]");
    	log("[ 3. toolKind :: "+				row.get("TOOLKINDID")+"]");
    	log("[ 4. toolMakeType :: "+		row.get("TOOLMAKETYPE")+"]");
    	
    	Map<String, Object> param = new HashMap<>();
    	param.put("ENTERPRISEID", 			row.get("ENTERPRISEID"));
    	param.put("PLANTID", 					row.get("PLANTID"));
    	param.put("PRODUCTDEFVERSION", 	row.get("PRODUCTDEFVERSION"));
    	param.put("FORM", 						row.get("FORMID"));
    	param.put("SUMMARY", 				row.get("SUMMARY"));
    	param.put("SCALEX", 					row.get("SCALEX"));
    	param.put("SCALEY", 					row.get("SCALEY"));    	
    	param.put("OLB", 						row.get("OLB")); //OLB
    	param.put("TOOLCATEGORY", 		row.get("TOOLCATEGORYID"));
    	param.put("PRODUCTDEFID", 			fnProductDefIdConvert((String)row.get("PRODUCTDEFID")));
    	param.put("PRODUCTDEFID2", 		row.get("PRODUCTDEFID"));
    	param.put("TOOLKINDID", 			row.get("TOOLKINDID"));
    	param.put("TOOLMAKETYPE", 		row.get("TOOLMAKETYPE"));
    	String tempStr = row.get("TOOLCATEGORYID")+""+fnProductDefIdConvert((String)row.get("PRODUCTDEFID"))+""+row.get("TOOLKINDID");
    	param.put("TOOLCODE", tempStr);
    	if(toolMakeType.equals("Modify")){ //수정이면 문구 추가
    		//param.put("TOOLNAME", "[수정] "+row.get("PRODUCTDEFNAME"));
    		param.put("TOOLNAME", "[수정] "+row.get("TOOLNAME"));
    	}else{
    		//param.put("TOOLNAME", row.get("PRODUCTDEFNAME"));
    		param.put("TOOLNAME", row.get("TOOLNAME"));
    	}
    	//TR
    	param.put("CREATOR", 			row.get("CREATOR"));
    	param.put("MODIFIER", 			row.get("CREATOR"));
    	param.put("LASTTXNHISTKEY", 	row.get("LASTTXNHISTKEY"));
    	param.put("LASTTXNID", 			"Create");
    	param.put("LASTTXNUSER", 		row.get("CREATOR"));
    	param.put("LASTTXNCOMMENT",	null);
    	param.put("VALIDSTATE", 			"Valid");
    	
    	returnArr[0] = tempStr; //치공구ID=TOOL구분+품목코드(뒷2자리삭제)+TOOL종류
    	
    	//===========================
    	//치공구 **** 버젼 **** 채번(A+숫자2자리)
    	//===========================
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectToolDurableDefinitionVersion", param); 
    	returnArr[1] = (String)result.get("NEWTOOLVERSION");
    	returnArr[2] = (String)result.get("EXISTVERSIONYN");
    	log("[NEWTOOLVERSION :: "+returnArr[1]+"]");
    	log("[EXISTVERSIONYN :: "+returnArr[2]+"]");
    	
    	param.put("TOOLVERSION", returnArr[1]);
    	
    	if(returnArr[2].equals("N")){ //버젼이 상이한 경우 치공구 정의에 추가 한다.
	    	generalDao.addUpdate(NAMESAPCE + ".insertToolDurableDefinition", param);
	    	generalDao.addUpdate(NAMESAPCE + ".insertToolDurableDefinitionLang", param);
    	}
    	log("[******************]");
    	return returnArr;
    }
    
    private String fnProductDefIdConvert(String productDefId){
    	String retv = productDefId.substring(0, productDefId.length()-2);
    	return retv;
    }
    
    //의뢰서 조회
    public void selectRequestDocument(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLine1", param), "output1");
            putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLine2", param), "output2");
            putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLine3", param), "output3");
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}