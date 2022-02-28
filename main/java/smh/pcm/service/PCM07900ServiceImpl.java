package smh.pcm.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.codec.binary.Base64;
import org.aspectj.apache.bcel.classfile.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import ch.qos.logback.core.net.SyslogOutputStream;
import smh.commons.TxnHistKey;

/**
 * @file		: PCM09300ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09300ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.3.18
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 18.  김진현      최초  생성 
 */
@Service
public class PCM07900ServiceImpl extends AbstractNbdfService implements PCM07900Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM07900Dao";
    
    public static final String NAMESAPCE_AREA = "smh.pcm.dao.PCM08400Dao";

    @Autowired
    private GeneralDao generalDao;
    
    
    
    
    /**
     * @fn
     * @brief 고객파트명 팝업 (사양정보에 등록된 내용 조회) - 고객pn, 고객모델명
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectCustPartNmList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectCustPartNmList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCustPartNmList", param));
    }
  	
  	
  	/**
     * @fn
     * @brief 포장 실적 등록 출고지 All
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPlantAllList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPlantAllList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPlantAllList" , param), "output1");					// 
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPlantList" , param), "output2");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefaultUserPlant" , param), "output3");			// 21.06.05 사용자의 기본 Site 정보 조회
    }
  	
  	
  	/**
     * @fn
     * @brief 고객사 정보 팝업 조회(조회조건) - 포장 실적 등록 sample 추가
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectCustomerSampleList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectCustomerSampleList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCustomerSampleList", param));
    }
  	
  	
  	/**
     * @fn
     * @brief 고객사 값 변경시 (버튼 / 그리드 활성화 정보 조회)
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectBtnAndHeadInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectBtnAndHeadInfo(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagCustomerFncList" , param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagMstHeadList" , param), "output2");
        
    }
  	
  	/**
     * @fn
     * @brief 그리드 고객모델명 팝업창
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPackDtlInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackDtlInfo(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackDtlInfo", param));
    }
  	
  	
  	/**
     * @fn
     * @brief 포장실적등록 - LOT조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPackLotInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackLotInfo(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackLotInfo", param));
    }
  	
  	/**
     * @fn
     * @brief 포장실적등록 - Main조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPackLabelMainList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackLabelMainList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackLabelMainList", param));
		
    }
  	
  	/**
     * @fn
     * @brief 포장실적등록 - SUB(Line, Lot)조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPackLabelSubList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackLabelSubList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackLineList" , param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackLotList" , param), "output2");
		
    }
  	
  	
  	/**
     * @fn
     * @brief 포장실적등록 - 일괄등록 저장
     * @remark 
     * @see smh.pcm.service.PCM07900Service#savePackLabelUpdate(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void savePackLabelUpdate(UiMapDto dto) throws Exception {
  		DataSetMap ds_main		= getParametersDataSetMap(dto, "ds_main");			//포장라벨 메인 정보
  		// 고객 정보 등록/수정/삭제(sub부터 전부 삭제 후 진행)
  	 	int result = 0;
  	 	Map<String, Object> param;
	  	for (int i = 0, n = ds_main.size(); i < n; i++) {
	          param = ds_main.get(i);
	          param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
	          int type = getRowType(param);
	          if (type == DataSet.ROW_TYPE_UPDATED) {
	        	  result += generalDao.update(NAMESAPCE + ".updatePackBatch", param);
	          }
	  	  }
	  	  
	  	  putDataSetMap(dto, result);
		
    }
  	
  	/**
     * @fn
     * @brief 포장실적등록 - Inv No
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPackInvNoList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackInvNoList(UiMapDto dto) throws Exception {
  		
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackInvNoList" , param), "output");
    }
  	
  	/**
     * @fn
     * @brief 포장실적등록 - Inv No 저장
     * @remark 
     * @see smh.pcm.service.PCM07900Service#savePackInvNo(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void savePackInvNo(UiMapDto dto) throws Exception {
  		DataSetMap ds_invoice		= getParametersDataSetMap(dto, "ds_invoice");				//포장라벨 inv 정보
  		DataSetMap ds_mainReg		= getParametersDataSetMap(dto, "ds_mainReg");			//포장라벨 메인 체크 정보
  		
  		String vChk = "";
  		Map<String, Object> paramChk;
  		// 저장전 중복 데이터 있는지 확인 필요
	  	// 포장라벨 Inv 저장시 Main 값 수정         
        for (int d = 0, n = ds_mainReg.size(); d < n; d++) {
        	paramChk = ds_mainReg.get(d);
            int type = getRowType(paramChk);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	
            	String vInvNo = (String)paramChk.get("INVNO");
            	paramChk = generalDao.addSelectOneMap(NAMESAPCE + ".selectPackPrdInvNo", paramChk);        		
            	vChk  = (String)paramChk.get("CHK");
            	if(vChk.equals("O"))
            	{
            		// 이미 등록된 INVOICE NO 입니다. 저장 할 수 없습니다. {0}
            		throw new BizException("CHKSAVEINVNO|"+String.format("INVNO=%s", vInvNo));
            	}
            }
        }
  		// 고객 정보 등록/수정/삭제(sub부터 전부 삭제 후 진행)  - 등록 삭제만 진행
  	 	int result = 0;
  	 	Map<String, Object> param;
	  	for (int i = 0, n = ds_invoice.size(); i < n; i++) {
	          param = ds_invoice.get(i);
	          param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
	          int type = getRowType(param);
		          if (type == DataSet.ROW_TYPE_INSERTED) {
		             	//param.put("UNITPRICEID", UUID.randomUUID().toString().toUpperCase());
		             	result += generalDao.insert(NAMESAPCE + ".insertPackInvNo", param);
		             }
		          	
//		 			 else if (type == DataSet.ROW_TYPE_UPDATED) {
//		             	result += generalDao.update(NAMESAPCE + ".updatePackInvNo", param);
//		             } 
//		             
//		 			else if (type == DataSet.ROW_TYPE_DELETED) {
//		             	
//		 				result += generalDao.delete(NAMESAPCE + ".deletePackInvNo", param);
//		             }
	  	  }
	  	// 포장라벨 Inv 저장시 Main 값 수정(팝업창에서 입력된 InvNo를 (체크된)Main에 등록한다.)         
        for (int d = 0, n = ds_mainReg.size(); d < n; d++) {
            param = ds_mainReg.get(d);
            param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.update(NAMESAPCE + ".updatePackMainInv", param);
            }
        }  
	  	  putDataSetMap(dto, result);
    }
  	
  	/**
     * @fn
     * @brief 포장실적등록 - Inv No 일괄 삭제 저장
     * @remark 
     * @see smh.pcm.service.PCM07900Service#deletePackInvNo(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void deletePackInvNo(UiMapDto dto) throws Exception {
  		DataSetMap ds_mainSre		= getParametersDataSetMap(dto, "ds_mainSre");				// 일괄 삭제할 inv정보
  		
  		int result = 0;
  	 	Map<String, Object> param;
	  	for (int i = 0, n = ds_mainSre.size(); i < n; i++) {
	          param = ds_mainSre.get(i);
	          
	          param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
	          // INV NO 테이블
         	  result += generalDao.insert(NAMESAPCE + ".deletePackInvNo", param);
         	  // MAIN 테이블 수정
         	  result += generalDao.update(NAMESAPCE + ".updatePackMainInvAll", param);		             
	  	  }
		
    }
  	
  	
  	/**
     * @fn
     * @brief 포장실적등록 - 등록 저장
     * @remark 
     * @see smh.pcm.service.PCM07900Service#savePackLabel(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void savePackLabel(UiMapDto dto) throws Exception {
  		DataSetMap ds_main		= getParametersDataSetMap(dto, "ds_main");			//포장라벨 메인 정보
        DataSetMap ds_line 		= getParametersDataSetMap(dto, "ds_line");			//포장라벨 LINE 정보
        DataSetMap ds_lot 		= getParametersDataSetMap(dto, "ds_lot");			//포장라벨 LOT 정보
        
        // 인수등록된 lot만 수정가능 or 인계등록된 lot의 경우 수정 불가능 (로직 추가 필요)
        // 정합성 체크 (lot)
        /*
        Map<String, Object> paramAreaLot;
        // lot 정보   (재공체크 -> 필요 없음 수량 체크 불필요)        
        for (int a = 0, t = ds_lot.size(); a < t; a++) {
        	paramAreaLot	= ds_lot.get(a);
            int typeLot 		= getRowType(paramAreaLot);
            String lot 		= (String)paramAreaLot.get("LOT");
        	String userId 	= (String)paramAreaLot.get("CREATER");
        	// 수량 체크(입력한)
			String inputQty = String.valueOf(paramAreaLot.get("QUANTITY"));
			String entId 		= (String)paramAreaLot.get("ENTERPRISEID");
			String plantId 	= (String)paramAreaLot.get("PLANTID");
			String hdrId 		= (String)paramAreaLot.get("PACKINGHDRID");
        	// 등록이면서 lot정보가 있으면..
        	//lot = "200917F001-1-FG00-001-004";		// 샘픔 LOT			
        	if (!(StringUtil.isNullOrEmpty(lot)))
        	{		
        		if (typeLot == DataSet.ROW_TYPE_INSERTED || typeLot == DataSet.ROW_TYPE_UPDATED) {        				
        			if(!lot.equals("00000000-0000-0000000-000-0-0"))
	         		{
        				// 대박스의 PACKINGHDRID 값 구하기 (다음번호)
	         			Map<String, Object> paramLotId = new HashMap<>();			// 조회 조건 리턴값
	         			paramLotId.put("LOTID", 				lot);	         		
	         			paramLotId = generalDao.addSelectOneMap(NAMESAPCE + ".selectLotInfo", paramLotId);
	         			System.out.println(" ####(000000000000000000) : "+paramLotId+" || "+paramLotId == null +" || "+ paramLotId.isEmpty());	         		
		         		String areaId  = (String)paramLotId.get("AREAID");		          		
		          		String lotQty  = String.valueOf(paramLotId.get("QTY"));		        		
		          		// 무전산의 경우 00000000-0000-0000000-000-0-0 으로 lot 등록
		          		String chkLotId  = (String)paramLotId.get("LOTID");
		          		if(!(StringUtil.isNullOrEmpty(chkLotId)))				// lot 정보가 있는 경우체크
		          		{
		          			// 사용자별 작업장 통제
			    			if(!IsAreaInAuthorityImpl(areaId, true, userId)) {
			    				// 해당 작업장에 대한 권한이 없습니다. {0}
			    				throw new BizException("HasNoAuthorityOfArea|"+String.format("AREAID=%s", areaId));
			    			}
			    			// lot별 수량 통제 (lot 수량, 입력수량, ENTERPRISEID, PLANTID, LOTID, 헤더값)
			    			if(!IsLotQtyCheckImpl(lotQty, inputQty, entId, plantId, lot, hdrId)) {
			    				// LOT의 포장 수량을 초과 할 수 없습니다. {0}
			    				throw new BizException("CheckPackLotQty|"+String.format("LOTID=%s", lot));
			    			}
		          		}
	         		}
        		}
            }
         }         	 
        */
        /**************************************************************************
         * 					인계처리 여부 확인 체크(↓)
         ***************************************************************************/        
        // [대포장 - main 확인]
        Map<String, Object> paramUpdateChkMain;
        for (int v2 = 0, tt = ds_main.size(); v2 < tt; v2++) {
        	paramUpdateChkMain	= ds_main.get(v2);
        	int typeMain 		= getRowType(paramUpdateChkMain);
        		if (typeMain == DataSet.ROW_TYPE_DELETED || typeMain == DataSet.ROW_TYPE_UPDATED) {       			// 수정, 삭제인 경우
        			// 정합성 체크
        			checkHandOver(paramUpdateChkMain);	         		
            }
         }
        
        // [소포장 - Line 확인]
        Map<String, Object> paramUpdateChkDetail;
        for (int v3 = 0, tt = ds_line.size(); v3 < tt; v3++) {
        	paramUpdateChkDetail	= ds_line.get(v3);
        	int typeMain 		= getRowType(paramUpdateChkDetail);
        		if (typeMain == DataSet.ROW_TYPE_DELETED || typeMain == DataSet.ROW_TYPE_UPDATED) {       			// 수정, 삭제인 경우
        			// 정합성 체크
        			System.out.println(" ======[line]");
        			checkHandOver(paramUpdateChkDetail);	         		
            }
         }
        
        // [소포장 - Lot 확인]
        Map<String, Object> paramUpdateChkLotl;
        for (int v4 = 0, ttt = ds_lot.size(); v4 < ttt; v4++) {
        	paramUpdateChkLotl	= ds_lot.get(v4);
        	int typeMain 		= getRowType(paramUpdateChkLotl);
        		if (typeMain == DataSet.ROW_TYPE_DELETED || typeMain == DataSet.ROW_TYPE_UPDATED) {       			// 수정, 삭제인 경우
        			// 정합성 체크
        			System.out.println(" ======[lot]");
        			checkHandOver(paramUpdateChkLotl);	         		
            }
         }
        
        
        /**************************************************************************
         * 					대포장 정합성 체크(↓)
         ***************************************************************************/
        // [대포장 - 입력값 정합성 체크]
        Map<String, Object> paramValidMain;
        for (int v1 = 0, t = ds_main.size(); v1 < t; v1++) {
        	paramValidMain	= ds_main.get(v1);
        	int typeMain 		= getRowType(paramValidMain);
        		if (typeMain == DataSet.ROW_TYPE_INSERTED || typeMain == DataSet.ROW_TYPE_UPDATED) {       			// 등록 수정인 경우만 체크
        			// 업체별 정합성 체크 msg
        			paramValidMain.put("BARTYPE", 					"M");								// 바코드 대/소구분  (M/S)
        			paramValidMain.put("p_BType", 					"X");								// B(바코드), X (기본)
        			
        			
        			// Test
        			//paramValidMain.put("CUSTOMERPN", 			"10-02-");								     // PN 공백으로 테스트
        			
        			// 정합성 체크
        			checkLabelValid(paramValidMain);	         		
            }
         } 
        // [대포장][소포장] 등록,수정,삭제
 		int result = 0;
 		
 		Map<String, Object> param;
 		Map<String, Object> paramline;
 		Map<String, Object> paramlot;
 		
 		String nextId	 		=""; 			// 신규 메인 id 
 		String nLots 		= "";			// LOT 정보
 		String nComp 		= "";			// 고객사정보 정보
 		String nDc 			= "";			// 주차 정보
 		String nPackDate 	= "";			// 포장일자 정보
 		String nPn 			= "";			// PN 정보
 		
 		// [대포장 - Main Save]
        for (int i = 0, n = ds_main.size(); i < n; i++) {
             param = ds_main.get(i);
             param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
             int type = getRowType(param);
             /**************************************************************************
  			  * 					대포장 등록(↓)
  			  ***************************************************************************/             
             if (type == DataSet.ROW_TYPE_INSERTED) {
             	/*
             	 * [1] 대포장 등록인 경우만 바코드 생성 (우선)
             	 * [1] 대포장 저보 생성 후 등록 후 -> 소포장에서는 등록된 대포장 내용 조회 후 사용
             	 */ 
            	// 대포장 다음 Box No, Box Seq 
            	Map<String, Object> nextMainBox 				= new HashMap<>();			// 조회 조건 리턴값     
            	nextMainBox.put("ENTERPRISEID", 				param.get("ENTERPRISEID"));
            	nextMainBox.put("SITE", 							param.get("SITE"));
            	nextMainBox.put("PACK_DATE", 					param.get("PACK_DATE"));
            	nextMainBox 	= generalDao.addSelectOneMap(NAMESAPCE + ".selectNextMainBoxNo", nextMainBox);
            	String nBoxNo	= (String)nextMainBox.get("NEXT_BOX_NO");
            	String nBoxSeq	= (String)	nextMainBox.get("NEXT_BOX_SEQ");
            	param.put("BOXNO", 				  				nBoxNo);							// Box No (대포장 바코드 생성시 활용 가능)
            	param.put("BOXSEQ", 				  				nBoxSeq);						// Box Seq 
            	// Box 이미 존재 하는지 체크 21.04.19 추가
            	List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkMainBoxList", param);
         		if (idList.size() > 1 ) 																	// 21.04.20 조건 수정(조건 반대로 설정되어 있었음)
         		{
         			throw new BizException("ChkBoxNo|"+String.format("Box NO = %s", param.get("BOXNO"))); 			
         		}
            	 
            	// 다음 Main Seq   값 조회
            	Map<String, Object> nextHdrId 				= new HashMap<>();			// 조회 조건 리턴값
          		nextHdrId.put("ENTERPRISEID", 					param.get("ENTERPRISEID"));
          		nextHdrId.put("SITE", 								param.get("SITE"));
          		nextHdrId 	= generalDao.addSelectOneMap(NAMESAPCE + ".selectPackNextHdrId", nextHdrId);        				
          		nextId  		= (String)nextHdrId.get("NEXT_HDRID");							// 신규인 경우 소포장에서 활용(Main 신규가 아닌경우 화면에서 소포장쪽은 Main 활용)
          		// Main seq 값 설정
          		param.put("PACKINGHDRID", 					nextId);
            	 // lot 번호 있으면 바코드 생성
          		 param.put("BARTYPE", 							"M");								// 바코드 대/소구분  (M/S)
          		 param.put("BAR_USER_ID", 						param.get("CREATER"));		// 바코드 생성시 시리얼 번호 생성자
          		 nLots 		= (String)param.get("LOTS");
          		 nComp 		= (String)param.get("COMP");
          		 nDc 			= (String)param.get("DC");
          		 nPackDate 	= (String)param.get("PACK_DATE");
          		 nPn 			= (String)param.get("CUSTOMERPN");          		 
          		 if (!(StringUtil.isNullOrEmpty(nLots)))												// 여러 입력된 LOT 중 하나만 가져옴 -> 바코드 생성시 활용 필요
             	 {	 
          			String[] nRtnArr 	= nLots.split("\\,");
          		 	nLots 					= nRtnArr[0];
          		 	param.put("BAR_LOT_ID", 				      	nLots);							// 바코드 생성시 시리얼 번호 생성자      		 	
          		 	param.put("MAINDC", 				     	  	nDc);								// 대포장에 주차 정보 없는 경우 대포장 바코드 생성시 주차 정보 활용 하는지 확인 필요
          		 	param.put("SUM_QTY", 					  	(String)param.get("GOODQTY"));				// 양품수량합계	(대)
          		 	param.put("SUM_CARDQTY", 			  	(String)param.get("CARDQTY"));				// 카드수량 합계(대)
          		 	param.put("SUB_SERIALNO", 				  	(String)param.get("ATTRIBUTE1"));			// 시리얼 번호	(대) - 소포장에서 사용
          		 	param.put("SUM_CARDQTY", 				(String)param.get("CARDQTY"));				// 카드 수량	(대) (대포장은 합계랑 같음)
          		 	// 바코드 생성 호출
          		 	try {
           		 	 	Map<String, Object> barcode = new HashMap<>();					// 조회 조건 리턴값         		
         	        	barcode = generalDao.addSelectOneMap(NAMESAPCE + ".selectBarcode", param);
         	        	String barArrText  = (String)barcode.get("BAR_TEXT");
         	       	 	if (!(StringUtil.isNullOrEmpty(barArrText)))
                      	{
         	       			String[] nBarArr 		=  barArrText.split("\\*");					// 키,값*키,값 형태로 넘어 온다.
         	       			for (int bb = 0, m = nBarArr.length; bb < m; bb++) {
         	       				String nValue 		= 	nBarArr[bb];
         	       				String[] nValrArr 	=  nValue.split("\\,");
         	       				param.put(nValrArr[0], 			nValrArr[1]);    					// 리턴 받은 값으로 map 구성    [컬럼명(insert Table), 값]	    
         	       			}
                     	}
     	      		} catch (Exception e) {
     	    	          	// TODO Auto-generated catch block
     	    	          	//logger.error("failed: {}", e);
     	    	    	  	throw new BizException("MAINBARCODEMSG|"+String.format("LOTID=%s", nLots));			// 대포장 추가 정보(바코드) 생성 중 오류가 발생했습니다.
     	    	    }
             	 }
          		// 바코드 체크 확인
          		// Test
     			//paramValidMain.put("CUSTOMERPN", 			"83001700001000000");								     // PN 공백으로 테스트
    			
     			// 정합성 체크
          		param.put("BARTYPE", 					"M");								// 바코드 대/소구분  (M/S)
          		param.put("p_BType", 					"B");								// B(바코드), X (기본)
     			checkLabelValid(param); 
          		 
          		 
         		if(!"".equals(nextId)){
         			result += generalDao.insert(NAMESAPCE + ".insertPackMain", param);	// [대포장 생성]
         		}
             }
             /**************************************************************************
  			  * 					대포장 수정(↓)
  			  ***************************************************************************/
             else if (type == DataSet.ROW_TYPE_UPDATED) {
            	
             	// lot 번호 있으면 바코드 생성
           		param.put("BARTYPE", 								"M");								// 바코드 대/소구분(M/S)
           		param.put("BAR_USER_ID", 						param.get("CREATER"));		// 바코드 생성시 시리얼 번호 생성자
           		nComp 		= (String)param.get("COMP");
           		nDc 			= (String)param.get("DC");
           		nPackDate 	= (String)param.get("PACK_DATE");
           		nPn 			= (String)param.get("CUSTOMERPN");   
           		 // 기존 양품 수량 구함.  == 저장시 수량 체크(lot정보도 가져 와야 될것 같음.. )
           		Map<String, Object> chkMain = new HashMap<>();							// 조회 조건 리턴값(대포장 수정시 기존 정보 확인)
           		chkMain.put("ENTERPRISEID", 					param.get("ENTERPRISEID"));
           		chkMain.put("SITE", 								param.get("SITE"));
           		chkMain.put("PACKINGHDRID", 					param.get("PACKINGHDRID"));
           		chkMain.put("CHK_QTY", 							param.get("GOODQTY"));		// 양품 수량 합계 변동 체크용
           		chkMain.put("CHK_DC", 							param.get("DC"));				// 대포장 주차 변동 추가용
           		// [대포장 - 수량, DC 변경 여부 체크]
           		chkMain 	= generalDao.addSelectOneMap(NAMESAPCE + ".selectCheckQty", chkMain);        		
          		String nChkYn 		= (String)chkMain.get("CHK_YN");							// 수량 변경 만 체크(수량/주차 변경 체크) 하나라도 변경시 Y
          		String nMainLot 	= (String)chkMain.get("LOTID");								// 하나의 lotId 호출
          		String nDcYn 		= (String)chkMain.get("DC_CHK");							// 주차 변경시 따로 체크 (수량,주차 하나라도 변경시 수정, 주차변경시 소포장도 따로 호출)
           		
           		 if (nChkYn.equals("Y") || nDcYn.equals("Y"))										// 주차 or 수량 변경 여부 확인(둘 중 변경시 바코드 수정)
              	 {	
           		 	param.put("BAR_LOT_ID", 				      	nMainLot);						// 바코드 생성시 시리얼 번호 생성자      		 	
           		 	param.put("MAINDC", 				     	  	nDc);								// 대포장에 주차 정보 없는 경우 대포장 바코드 생성시 주차 정보 활용 하는지 확인 필요
           		 	param.put("SUM_QTY", 					  	(String)param.get("GOODQTY"));			// 양품수량합계	(대)
          		 	param.put("SUM_CARDQTY", 				(String)param.get("CARDQTY"));			// 카드 수량	(대) (대포장은 합계랑 같음)
           		 	// 바코드 수정 호출
           		 	try {
            		 	 	Map<String, Object> barcode = new HashMap<>();				// 바코드값 및 룰에 의해 생성 된값들         		
            		 	 	barcode = generalDao.addSelectOneMap(NAMESAPCE + ".selectMainUpdateBarcode", param);
          	        		String barArrText  = (String)barcode.get("BAR_TEXT");
          	       	 	if (!(StringUtil.isNullOrEmpty(barArrText)))
                       	{
          	       			String[] nBarArr 		=  barArrText.split("\\*");					// 키,값*키,값 형태로 넘어 온다.
          	       			for (int bb = 0, m = nBarArr.length; bb < m; bb++) {
          	       				String nValue 		= 	nBarArr[bb];
          	       				String[] nValrArr 	=  nValue.split("\\,");
          	       				param.put(nValrArr[0], 					nValrArr[1]);    			// 리턴 받은 값으로 map 구성
          	       			}
                      	}
      	      		} catch (Exception e) {
      	    	          	// TODO Auto-generated catch block
      	    	          	//logger.error("failed: {}", e);
      	    	    	  	throw new BizException("MAINBARCODEMSG|"+String.format("LOTID=%s", nLots));			// 대포장 추가 정보(바코드) 생성 중 오류가 발생했습니다.
      	    	    }
           		 	/*************************************************************************************
         			 * 			대포장 주차(DC) 변경시 -> 소포장 조회 후 주차(DC) 변경 (21.04.15)
         			 *************************************************************************************/
           		 	if(nDcYn.equals("Y"))					// 대포장 주차 변경시
           		 	{
           		 		// 대포장에 해당하는 소포장 주차 정보 수정
           		 		SmallPackDcUpdate(param);		
           		 	}
           		 	
           		 	// 정합성 체크(바코드 수정인 경우)
           		 	param.put("BARTYPE", 					"M");								// 바코드 대/소구분  (M/S)
              		param.put("p_BType", 					"B");								// B(바코드), X (기본)
         			checkLabelValid(param); 
           		 	
              	 }
            	 result += generalDao.insert(NAMESAPCE + ".updatePackMain", param);		// [대포장 수정]
             }
             // 삭제 (사용 안함..)
             else if (type == DataSet.ROW_TYPE_DELETED) {
            	 	// Lot -> Line -> Main
            	 	result += generalDao.delete(NAMESAPCE + ".deletePackagLot", param);
  					result += generalDao.delete(NAMESAPCE + ".deletePackagLine", param);
  					result += generalDao.delete(NAMESAPCE + ".deletePackagMain", param);
             }
         }
         
        // [소포장 - Lot Save - 3블럭만]
        // lot 정보 (소포장에서 필요 할 수 있음 미리 등록함)     -> 3블럭의 경우만 들어 온다.    
		for (int j = 0, t = ds_lot.size(); j < t; j++) {
			paramlot = ds_lot.get(j);
			paramlot.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		    int typeLot = getRowType(paramlot);
		    if (typeLot == DataSet.ROW_TYPE_INSERTED) {
		    	// 헤더 seq 정보
		    	String nHdrId = (String)paramlot.get("PACKINGHDRID");							// Main이 신규가아닌 경우 화면에서 채워짐
	    	if((StringUtil.isNullOrEmpty(nHdrId)))														// Main 신규인 경우 생성된 값
		    	{
		    		paramlot.put("PACKINGHDRID", 				nextId);
		    	}
		    	result += generalDao.insert(NAMESAPCE + ".insertPackLot", paramlot);		// [소포장 - Lot 등록 - 3블럭만]
		     }
		     else if (typeLot == DataSet.ROW_TYPE_UPDATED) {
            	 result += generalDao.insert(NAMESAPCE + ".updatePackLot", paramlot);		// [소포장 - Lot 수정 - 3블럭만]
             }
		     else if (typeLot == DataSet.ROW_TYPE_DELETED) {
		    	 result += generalDao.insert(NAMESAPCE + ".deletePackLot", paramlot);		// [소포장 - Lot 삭제 - 3블럭만]
		     }
		 }
         
		// [소포장 - Line Save ]
		// Line 정보 등록 (등록/수정/삭제)       
		for (int d = 0, l = ds_line.size(); d < l; d++) {
			paramline = ds_line.get(d);
			paramline.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		    int typeLine = getRowType(paramline);
		     /**************************************************************************
  			  * 					소포장 등록(↓)	- 등록,수정 전 필요 변수 담기
  			  ***************************************************************************/
		     if (typeLine != DataSet.ROW_TYPE_DELETED) {
		    	 // lot 번호 있으면 바코드 생성
		    	 paramline.put("BARTYPE", 						"S");									// 바코드 대/소구분(M/S)
		    	 
		    	 if (typeLine == DataSet.ROW_TYPE_INSERTED) {
		    		 paramline.put("BAR_USER_ID", 				paramline.get("CREATER"));		// 바코드 생성시 시리얼 번호 생성자
		    	 }
		    	 else
		    	 {
		    		 paramline.put("BAR_USER_ID", 				paramline.get("MODIFIER"));		// 바코드 생성시 시리얼 번호 생성자
		    	 }		    	 
		    	 // 대포장 등록된 값 조회(소포장 바코드 생성시 대포장 정보 조회를 위해 조회 조건 설정)
		    	 Map<String, Object> mainInfo = new HashMap<>();								// 대포장 등록 정보 조회
		    	 mainInfo.put("ENTERPRISEID", 					paramline.get("ENTERPRISEID"));
		    	 mainInfo.put("SITE", 								paramline.get("SITE"));
		    	 if(!(StringUtil.isNullOrEmpty((String)paramline.get("PACKINGHDRID"))))			// 메인이 신규인지/수정인지에 따라서.
	          	 {
		    		 mainInfo.put("PACKINGHDRID", 				paramline.get("PACKINGHDRID"));	// 대포장 등록 상태
	          	 }
		    	 else
		    	 {		    		 
		    		 mainInfo.put("PACKINGHDRID", 				nextId);									// 대포장 초기 등록 상태
		    	 }
		    	 mainInfo 	= generalDao.addSelectOneMap(NAMESAPCE + ".selectPackMainInfo", mainInfo);   		// 대포장 정보 조회
		    	 
		    	 if((StringUtil.isNullOrEmpty((String)paramline.get("LOTID"))))							// Line에 Lot 정보 있으면 우선적용
	          	 {
		    		 paramline.put("BAR_LOT_ID", 				mainInfo.get("LOTID"));				// lot정보			(대/소)
	          	 }
		    	 else
		    	 {		    		 
		    		 paramline.put("BAR_LOT_ID", 				paramline.get("LOTID"));			// lot정보			(대/소)
		    	 }
		    	 
		    	 if((StringUtil.isNullOrEmpty((String)paramline.get("DC"))))							// 소포장 Dc 있으면 우선적용
	          	 {
		    		 paramline.put("MAINDC", 				    mainInfo.get("DC"));				// lot정보			(대)
	          	 }
		    	 else
		    	 {		    		 
		    		 paramline.put("MAINDC", 				    paramline.get("DC"));				// lot정보			(소)
		    	 }
      			 paramline.put("COMP", 				     	 	mainInfo.get("CUSTOMERID"));			// 고객사정보  	(대)
      			 paramline.put("PACK_DATE", 				    mainInfo.get("PACKINGDATE"));			// 포장일자정보 (대)
      			 paramline.put("CUSTOMERPN", 					mainInfo.get("CUSTOMERPN"));			// PN정보			(대)
      			 paramline.put("SUB_SERIALNO", 				mainInfo.get("SUB_SERIALNO"));			// 시리얼 번호	(대)
      			 /**************************************************************************
      			  * 					변수값 더 추가 될수 있음(↓)
      			  ***************************************************************************/
      			 // po no, CARDQTY(카드수량)__[주석]
      			 paramline.put("PONO", 				  			mainInfo.get("PONO"));					// 카드 수량	(대) (대포장은 합계랑 같음)
      			 paramline.put("SUM_CARDQTY", 				mainInfo.get("SUM_CARD_QTY"));		// 카드 SUM 수량	(대)  (소포장 추가시 수량이 다름 - 대포장에서만 사용 하면 상관x)
      			 paramline.put("CARDQTY", 						paramline.get("CARD"));					// 카드 수량			(소) -> 명칭 변경후 담음
      			 paramline.put("CUSTOMERCOMPANYID", 		mainInfo.get("CUSTOMERCOMPANYID"));	// 고객 업체 코드      			 
      			 paramline.put("CUSTOMERMODELNM", 		mainInfo.get("CUSTOMERMODELNM"));	// 고객 모델명
      		 	 paramline.put("CUSTOMERPRODNAME", 		mainInfo.get("CUSTOMERPRODNAME"));	// 고객 품명
      		 	 
      		 	 paramline.put("REMARK", 						mainInfo.get("REMARK"));						// 비고 (21.04.27) 추가
		     }
		     /**************************************************************************
  			  * 					소포장 업데이트(↓)
  			  ***************************************************************************/
		     if (typeLine == DataSet.ROW_TYPE_INSERTED) { 
		    	String nHdrId = (String)paramline.get("PACKINGHDRID");
		     	if((StringUtil.isNullOrEmpty(nHdrId)))									// Main 신규인 경우 생성된 값
		     	{
		     		paramline.put("PACKINGHDRID", 			nextId);
		     	}
		     	// 소포장 BOX NO 생성
            	Map<String, Object> nextLineBox = new HashMap<>();			// 조회 조건 리턴값     
            	nextLineBox.put("ENTERPRISEID", 				paramline.get("ENTERPRISEID"));
            	nextLineBox.put("SITE", 							paramline.get("SITE"));
            	nextLineBox.put("PACKINGHDRID", 				paramline.get("PACKINGHDRID"));
            	nextLineBox.put("BOXSEQ", 						paramline.get("BOXSEQ"));
            	// 소포장 (Line 내에서 -> 값은 화면에서 넘어옴)
            	nextLineBox = generalDao.addSelectOneMap(NAMESAPCE + ".selectNextLineBoxNo", nextLineBox);		
            	String nBoxNo	= (String)nextLineBox.get("NEXT_BOX_NO");
            	String nBoxSeq	= (String)	nextLineBox.get("NEXT_BOX_SEQ");
            	paramline.put("BOXNO", 				  			nBoxNo);				// Box No (대포장 바코드 생성시 활용 가능)
            	paramline.put("BOXSEQ", 				  			nBoxSeq);			// Box Seq
		    	 // 바코드 생성 호출 
		    	 try {
       		 	 	Map<String, Object> barcode = new HashMap<>();			// 조회 조건 리턴값         		
     	        		barcode = generalDao.addSelectOneMap(NAMESAPCE + ".selectBarcode", paramline);     	// 바코드 생성 호출  (소포장)      		
     	        		String barArrText  = (String)barcode.get("BAR_TEXT");
     	       	 	if (!(StringUtil.isNullOrEmpty(barArrText)))
                  	{
     	       			String[] nBarArr 		=  barArrText.split("\\*");					// 키,값*키,값 형태로 넘어 온다.
     	       			for (int bb = 0, m = nBarArr.length; bb < m; bb++) {
     	       				String nValue 		= 	nBarArr[bb];
     	       				String[] nValrArr 	=  nValue.split("\\,");
     	       				paramline.put(nValrArr[0], 			nValrArr[1]);					// 리턴 받은값 Map에 설정 (키값이 테이블 컬럼명)
     	       			}
                 	}
 	      		} catch (Exception e) {
 	    	          	// TODO Auto-generated catch block
 	    	          	//logger.error("failed: {}", e);
 	    	    	  	throw new BizException("SUBBARCODEMSG|"+String.format("LOTID=%s", nLots));			// 소포장 추가 정보(바코드) 생성 중 오류가 발생했습니다.
 	    	    }
		    	 
		    	// 정합성 체크(바코드 수정인 경우)
		    	paramline.put("BARTYPE", 					"S");								// 바코드 대/소구분  (M/S)
		    	paramline.put("p_BType", 						"B");								// B(바코드), X (기본)
      			checkLabelValid(paramline);  
		    	 
		     	result += generalDao.insert(NAMESAPCE + ".insertPackLine", paramline);			// 생성된 정보를 소포장(Line)등록한다.
		      }
		      else if (typeLine == DataSet.ROW_TYPE_UPDATED) {
		    	  // 수량 변동 시만적용 할지 판단해야됨... (대포장은 주차,수량 변동시만 바코드 업데이트)
		    	  try {
	       		 	 		Map<String, Object> barcode = new HashMap<>();			         		
	     	        		barcode = generalDao.addSelectOneMap(NAMESAPCE + ".selectSubUpdateBarcode", paramline);	// 바코드 수정 호출  (소포장)
	     	        		String barArrText  = (String)barcode.get("BAR_TEXT");
	     	       	 	if (!(StringUtil.isNullOrEmpty(barArrText)))
	                  	{
	     	       			String[] nBarArr 		=  barArrText.split("\\*");					// 키,값*키,값 형태로 넘어 온다.
	     	       			for (int bb = 0, m = nBarArr.length; bb < m; bb++) {
	     	       				String nValue 		= 	nBarArr[bb];
	     	       				String[] nValrArr 	=  nValue.split("\\,");
	     	       				paramline.put(nValrArr[0], 					nValrArr[1]);			// 리턴 받은값 Map에 설정
	     	       			}
	                 	}
	 	      		} catch (Exception e) {
	 	    	          	// TODO Auto-generated catch block
	 	    	          	//logger.error("failed: {}", e);
	 	    	    	  	throw new BizException("SUBBARCODEMSG|"+String.format("LOTID=%s", nLots));			// 소포장 추가 정보(바코드) 생성 중 오류가 발생했습니다.
	 	    	    }
		    	  	
		    	  	// 정합성 체크(바코드 수정인 경우)
			    	paramline.put("BARTYPE", 					"S");								// 바코드 대/소구분  (M/S)
			    	paramline.put("p_BType", 						"B");								// B(바코드), X (기본)
	      			checkLabelValid(paramline); 
		    	  
		    	  
		    	  	result += generalDao.insert(NAMESAPCE + ".updatePackLine", paramline);
              }
		      else if (typeLine == DataSet.ROW_TYPE_DELETED) {
		     	 result += generalDao.insert(NAMESAPCE + ".deletePackLine", paramline);
		      }
		 }
         putDataSetMap(dto, result);   
         
    }
  	
  	
  	/****************************************************************************************************************
	 * Valid 체크
	 * @param 대포장, 소포장(변수,바코드) 정합성 체크
	 * @throws Throwable
	 ****************************************************************************************************************/
  	private void checkLabelValid(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	paramMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectValid", param);
		String msgCode  = (String)paramMap.get("CHK_VALID");
		// msg가 OK 가 아니면 Exception 발생. 
		if(!msgCode.equals("OK")) {
			// 해당 작업장에 대한 권한이 없습니다. {0}
			String[] msgCodeArr 		=  msgCode.split("\\,");						// 키,값*키,값 형태로 넘어 온다.
    			
			if(msgCodeArr.length == 2)													// 21.04.14 msg 형태 2,1개 선택 가능
			{
				String msgCodeR 	= msgCodeArr[0];
				String msgText 		= msgCodeArr[1];
	       			throw new BizException(msgCodeR+"|"+msgText);				// msg를 어떻게 처리 할지 생각 필요(2개값)
			}
			// 변수 3개짜리
			else if(msgCodeArr.length == 3)											// 21.05.10 msg 형태 3개 선택 가능
			{
				String msgCodeR 		= msgCodeArr[0];
				String msgText1 		= msgCodeArr[1];
				String msgText2 		= msgCodeArr[2];
				System.out.println(" ===============> : "+msgCodeR+"|"+msgText1+"|"+msgText2);
	       		throw new BizException(msgCodeR+"|"+msgText1+"|"+msgText2);				// msg를 어떻게 처리 할지 생각 필요(3개값)
			}
			
			else
			{
				String msgCodeR 	= msgCodeArr[0];
	       			throw new BizException(msgCodeR);								// msg를 어떻게 처리 할지 생각 필요(1개값)
			}
		}
	}
  	
  	
  	/****************************************************************************************************************
	 * 인계 체크(수정, 삭제시 )
	 * @param 
	 * @throws Throwable
	 ****************************************************************************************************************/
  	private void checkHandOver(Map<String, Object> param) throws Exception{
    	Map<String, Object> paramMap = new HashMap<String, Object>();
    	
    	paramMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectHandOver", param);
		String modifiyFlag  = (String)paramMap.get("MODIFI_FLAG");
		System.out.println(" ##### [실행?] : "+modifiyFlag);
		// N이면 수정 삭제 불가능 
		if(!modifiyFlag.equals("Y")) {	
	       	throw new BizException("PackingHandOverCheckModify|"+String.format("Box NO = %s", param.get("BOXNO"))); 			// 인계처리된 경우 수정할 수 없습니다.
		}
	}
  	
  	
  	/****************************************************************************************************************
	 * 대포장 DC(주차)변경 후 소포장 주차 정보 수정
	 * @param 대포장 정보
	 * @throws Throwable
	 ****************************************************************************************************************/
	public void SmallPackDcUpdate(Map<String, Object> nMap)  throws Exception{
		
		List<Map<String, Object>> paramSubDc = generalDao.addSelect(NAMESAPCE + ".selectSmallPackDcList", nMap);
		
		Map<String, Object> paramLine = new HashMap<>();
		for(int i = 0; i < paramSubDc.size(); i++) {
			paramLine = paramSubDc.get(i);
			String nLineDc = (String)paramLine.get("MAINDC");
			if((StringUtil.isNullOrEmpty(nLineDc)))										// Line의 주차가 없다면 대포장의 주차 활용
			{	
				paramLine.put("MAINDC",   	 		nMap.get("MAINDC"));			// 대포장의 주차 정보
				paramLine.put("BAR_USER_ID",   	nMap.get("MODIFIER"));		// 대포장의 수정자
				paramLine.put("SUM_QTY",   	 	nMap.get("SUM_QTY"));		// 대포장의 양품수량합계				
				try {
   		 	 		Map<String, Object> barcodeLine = new HashMap<>();			         		
   		 	 		barcodeLine = generalDao.addSelectOneMap(NAMESAPCE + ".selectSubUpdateBarcode", paramLine);	// 소포장 업데이트 패키지 호출(변경된 주차 정보 바코드 생성)
 	        		String barArrText  = (String)barcodeLine.get("BAR_TEXT");
	 	       	 	if (!(StringUtil.isNullOrEmpty(barArrText)))
	              	{
	 	       			String[] nBarArr 		=  barArrText.split("\\*");					// 키,값*키,값 형태로 넘어 온다.
	 	       			for (int bb = 0, m = nBarArr.length; bb < m; bb++) {
	 	       				String nValue 		= 	nBarArr[bb];
	 	       				String[] nValrArr 	=  nValue.split("\\,");
	 	       				paramLine.put(nValrArr[0], 					nValrArr[1]);			// 리턴 받은값 Map에 설정(생성된 정보를 담는다.)
	 	       			}
	 	       			// 업데이트 호출(소포장 바코드만)
	 					generalDao.insert(NAMESAPCE + ".updateSubPackDcBarcode", paramLine);
	             	}
	      		} catch (Exception e) {
	    	          	// TODO Auto-generated catch block
	    	          	//logger.error("failed: {}", e);
	    	    	  	throw new BizException("SUBBARCODEMSG|"+String.format("LOTID=%s", ""));			// 소포장 추가 정보(바코드) 생성 중 오류가 발생했습니다.
	    	    }
			}
		}
	}
  	
  	
  	/****************************************************************************************************************
	 * 작업장이 TxnInfo.getTxnUser()에게 허용되었는지 여부를 반환한다
	 * @param areaId 작업장 ID
	 * @param isModify Y=등록권한, N=전체
	 * @throws Throwable
	 ****************************************************************************************************************/
	public boolean IsAreaInAuthorityImpl(String areaId, boolean isModify, String userId)  throws Exception{
		
		Map<String, Object> param = new HashMap<>();
		param.put("ISMODIFY", isModify ? "Y" : "N");
		param.put("USERID", userId);
		
		List<Map<String, Object>> paramArea = generalDao.addSelect(NAMESAPCE_AREA + ".selectAreaListByAuthorityList", param);
 		
		for(int i = 0; i < paramArea.size(); i++) {
			if(paramArea.get(i).get("AREAID").equals(areaId)) {
				return true;
			}
		}
		return false;
	}
	
	
	
	
	/****************************************************************************************************************
	 * lot의 qty가 입력된 총 수량보다 크지 않는지 여부를 반환한다
	 * @param lot 총수량
	 * @param 화면 입력 수량 (lot별)
	 * @param ENTERPRISEID
	 * @param PLANTID
	 * @param LOT
	 * @param hdrId
	 * @throws Throwable
	 ****************************************************************************************************************/
	public boolean IsLotQtyCheckImpl(String lotQty, String inputQty, String entId, String plantId, String lot, String hdrId)  throws Exception{
		
		Map<String, Object> param = new HashMap<>();
		param.put("ENTERPRISEID", entId);
		param.put("PLANTID", plantId);
		param.put("LOT", lot);
		param.put("PACKINGHDRID", hdrId);
		
		Map<String, Object> paramSum = generalDao.addSelectOneMap(NAMESAPCE + ".selectLotInputSumQty", param);
 		
		String sumQty  = (String)paramSum.get("SUMQTY");
		
		Double lotQtyD 	= Double.parseDouble(lotQty);
		Double inputQtyD 	= Double.parseDouble(inputQty);
		Double sumQtyD;
		if (!(StringUtil.isNullOrEmpty(sumQty)))
    	{
			sumQtyD 		= Double.parseDouble(sumQty);
    	}
		else
		{
			sumQtyD			= (double) 0;
		}
		// lot 총 수량 == 이미입력된수량 + 등록할 수량
		if( lotQtyD < (inputQtyD + sumQtyD))
		{	
			//System.out.println(" ############# [확인......(합계) ] ## :  "+lotQtyD+" == "+inputQtyD+" + "+ sumQtyD);
			return false;
		}
		return true;
	}
	
	
	/**
     * @fn
     * @brief 포장실적등록 - DNO 생성/취소
     * @remark 
     * @see smh.pcm.service.PCM07900Service#savePackDnoUpdate(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void savePackDnoUpdate(UiMapDto dto) throws Exception {
  		DataSetMap ds_mainDno		= getParametersDataSetMap(dto, "ds_mainDno");			//포장라벨 메인 정보
  		// 고객 정보 등록/수정/삭제(sub부터 전부 삭제 후 진행)
  	 	int result = 0;
  	 	Map<String, Object> param;
	  	for (int i = 0, n = ds_mainDno.size(); i < n; i++) {
	          param = ds_mainDno.get(i);
	          param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
	          String type 			= (String)param.get("TYPE");
	          if (type.equals("R")) {
	        	  Map<String, Object> paramNextDno = generalDao.addSelectOneMap(NAMESAPCE + ".selectPackDno", param);
	        	  String nextDno  = (String)paramNextDno.get("NEXT_D_NO");
	        	  param.put("P_DNO", 				nextDno);
	        	  result += generalDao.update(NAMESAPCE + ".updatePackDnoR", param);
	          }
	          else		// C (취소인 경우)
	          {
	        	  // 21.05.03 삭제시 존재 하는내용 전부다 취소 할 것
	        	  param.put("P_DNO", 				"");			// 초기화 할 D NO 값
	        	  result += generalDao.update(NAMESAPCE + ".updatePackDno", param);
	          }
	  	  }
	  	  putDataSetMap(dto, result);		
	  	
    }
  	
  	
  	/**
     * @fn
     * @brief 라벨 출력 후 count 
     * @remark 
     * @see smh.pcm.service.PCM07900Service#saveLabelCount(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveLabelCount(UiMapDto dto) throws Exception {    	
    	DataSetMap ds_labelPrint		= getParametersDataSetMap(dto, "ds_labelPrint");			// 라벨 출력 후 정보
  	 	int result = 0;
  	 	Map<String, Object> param;
	  	for (int i = 0, n = ds_labelPrint.size(); i < n; i++) {
	          param = ds_labelPrint.get(i);
	          param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
	          String type 		= (String)param.get("TYPE");
	          if (type.equals("M")) {
	        	  
	        	  	List<Map<String, Object>> paramNextMainCnt = generalDao.addSelect(NAMESAPCE + ".selectMainPrintCount", param);
	        	  	Map<String, Object> paramMain = new HashMap<>();
					for(int m = 0; m < paramNextMainCnt.size(); m++) {
						paramMain = paramNextMainCnt.get(m);
						result += generalDao.update(NAMESAPCE + ".updateMainPrintCount", paramMain);
					}
	          }
	          else		// C (취소인 경우)
	          {  
	        	  List<Map<String, Object>> paramNextSubCnt = generalDao.addSelect(NAMESAPCE + ".selctLinePrintCount", param);
	        	  Map<String, Object> paramSub = new HashMap<>();
					for(int s = 0; s < paramNextSubCnt.size(); s++) {
						paramSub = paramNextSubCnt.get(s);
						result += generalDao.update(NAMESAPCE + ".updateLinePrintCount", paramSub);
					}
	          }
	  	  }
	  	  putDataSetMap(dto, result);
    }
  	
  	/**
     * @fn
     * @brief 포장 작업자, 검자사 (포장관리자 권한 있는 사람만 조회)
     * @remark 
     * @see smh.pcm.service.PCM07900Service#getPackUserGroupUserList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void getPackUserGroupUserList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getPackUserGroupUserList", param));
    }
  	
  	/**
     * @fn
     * @brief : 포장,라벨 출력 - 인보이스 등록 팝업 (등록시 양품수량 조회)
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectPackInvNoQtyList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPackInvNoQtyList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackInvNoQtyList", param), "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackInvNoDcList", param), "output2");
        
    }
    
    /**
     * @fn
     * @brief : 검사번호로 XOUT 정보 조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectInspectXoutList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInspectXoutList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInspectXoutList", param));
    }
    
    
    
    /**
     * @fn
     * @brief : 검사번호로 XOUT 정보 조회 후 포장 기준 정보 조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectXoutPackInfoList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectXoutPackInfoList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectXoutPackInfoList", param), "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectXoutPackLotCheck", param), "output2");
    }
    
    /**
     * @fn
     * @brief : 검사번호로 XOUT 정보 조회 후 고객모델명 정보 여러건인 경우 
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectXoutPackInfoPopList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectXoutPackInfoPopList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectXoutPackInfoList", param));
    }
    
    /**
     * @fn
     * @brief : 포장라벨 - 인수된 LOT에 해당하는 검사번호 조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectXoutPackInspInfoPopList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectXoutPackInspInfoPopList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectXoutPackInspInfoPopList", param));
    }
    
    
  	
  	
  	
  	
  	
  	
  	/*******************************************************************************
  	 *   [이미지 테스트 용 ↓]
  	 ********************************************************************************/
    

    /**
     * @fn
     * @brief 가로 세로
     * @remark 
     * @see smh.pcm.service.PCM09300Service#selectImageHandV(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectImageHandV(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".selectImageHandV", param);
        
    	String nPath = (String)result.get("FULL_SAVE_COURS");
    	
    	
    	String filePath =  nPath;//"/MES_NAS/PCM//202103/BDDECB84237BECB1E053E00410AC7D0A.png";
    	
    	System.out.println(" #####[filePath(1..........)]#### --> : "+filePath);
    	
    	long[] nArr =  ObjectUtil.getImageInfoByFilePath(filePath);
    	try {
    		
        	
        	System.out.println(" #####[가로]#### --> : "+nArr[0]);
        	
        	System.out.println(" #####[세로]#### --> : "+nArr[1]);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(" #####[값이 없다]#### --> : ");
		}
    	
    	System.out.println(" #####[끝]#### --> : ");
    	
    	
    	
    	
    	
    	
    	
    	
    	
    }
  	
  	/**
     * @fn 			: selectChartTest
     * @brief 		: 자재 현황 조회 main List조회
     * @Method Name : selectChartTest
     * @remark		: 메인조회  List 반환
     * @see smh.pcm.service.PCM09300Service#selectChartTest(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectChartTest(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChartTest", param));
    	
       
    }
  	
    /**
     * @fn 			: selectImageBlob
     * @brief 		: blob
     * @Method Name : selectImageBlob
     * @remark		: 메인조회  List 반환
     * @see smh.pcm.service.PCM07900Service#selectImageBlob(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectImageBlob(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	
    	System.out.println(" #####[세로]#### --> : "+param.get("ATCH_FILE_ID"));
    	//putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChartTest", param));
    	
    	
    	List<Map<String, Object>> dtPrint = new ArrayList<Map<String, Object>>();
    	Map<String, Object> tempMap = new HashMap<>();
    	
    	
    	String fullSaveCours = (String) param.get("ATCH_FILE_ID");
    	
    	System.out.println(" #####[fullSaveCours]#### --> : "+fullSaveCours);
    	
    	File file = new File(fullSaveCours);
    	
    	System.out.println(" #####[파일 읽어옴]#### --> : "+(int) file.length());
    	
    	/*
    	tempMap.put("BLOB", 	convertFileToBlob(file)	);
    	System.out.println(" #####[리턴 성공?]#### --> : "+tempMap.get("BLOB"));
    	dtPrint.add(tempMap);
    	*/
    	
    	tempMap.put("BLOB", 	fileToBinary(file)	);
    	System.out.println(" #####[리턴 성공 - BLOB]#### --> : "+tempMap.get("BLOB"));
    	dtPrint.add(tempMap);
    	
    	putDataSetMap(dto, dtPrint, "output");
       
    }
  	
    
    /*
     * file -> blob 변경 시도 
     */
    private Blob convertFileToBlob(File file) throws Exception {
    	  
        Blob blob = null;
        FileInputStream inputStream = null;
      
        try {
            byte[] byteArray = new byte[(int) file.length()];
            inputStream = new FileInputStream(file);
            inputStream.read(byteArray);
       
            blob = new javax.sql.rowset.serial.SerialBlob(byteArray); 
       
        } catch (Exception e) {
            throw e;
       
        } finally {
            try {
                if (inputStream != null) {
                    inputStream.close();
                }



            } catch (Exception e) {

                inputStream = null;



            } finally {
                inputStream = null;
            }
        }
      
        return blob;
    } 
  	
    /**
     * 파일을 바이너리 스트링으로 변경 (String 으로 반환 해봄.. )
     *
     * @param file
     * @return
     */
    public static String fileToBinary(File file) {
        String out = new String();
        FileInputStream fis = null;
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
     
        try {
            fis = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            System.out.println("Exception position : FileUtil - fileToString(File file)");
        }
     
        int len = 0;
        byte[] buf = new byte[1024];
        try {
            while ((len = fis.read(buf)) != -1) {
                baos.write(buf, 0, len);
            }
     
            byte[] fileArray = baos.toByteArray();
            out = new String(base64Enc(fileArray));
     
            fis.close();
            baos.close();
        } catch (IOException e) {
            System.out.println("Exception position : FileUtil - fileToString(File file)");
        }
        //System.out.println(" #####[리턴 성공 - 리턴전]#### --> : "+out);
        return out;
    }
     
    public static byte[] base64Enc(byte[] buffer) {
    	return Base64.encodeBase64(buffer);
    }


    
  
  	
}