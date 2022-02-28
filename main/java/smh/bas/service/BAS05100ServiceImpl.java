package smh.bas.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.util.SessionUtil;




/**
* @file: BAS05100ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05100ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.01
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.01.       김진현     최초  생성
*/
@Service
public class BAS05100ServiceImpl extends AbstractNbdfService implements BAS05100Service {

    public static final String NAMESAPCE 				= "smh.bas.dao.BAS05100Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief 설비/설비단 관리 - 메인 설비현황 조회
     * @remark 
     * @see smh.bas.service.BAS05100Service#SelectEquipmentManagementList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectEquipmentManagementList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectEquipmentManagementList", param));
    }
    
    /**
     * @fn
     * @brief 설비/설비단 관리 - 트리 조회
     * @remark 
     * @see smh.bas.service.BAS05100Service#selectEqpClassTreeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEqpClassTreeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEqpClassTreeList", param));
    }
   
    /**
     * @fn
     * @brief 설비/설비단 관리 - 설비 (MC) List
     * @remark 
     * @see smh.bas.service.BAS05100Service#SelectEquipmentClass03(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectEquipmentClass03(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectEquipmentClass03", param));
    }
    
    /**
     * @fn
     * @brief 설비/설비단 관리 - 설비 (SC) List
     * @remark 
     * @see smh.bas.service.BAS05100Service#SelectEquipmentClass02(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectEquipmentClass02(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectEquipmentClass02", param));
    }
    
    /**
     * @fn
     * @brief 설비/설비단 관리 -  설비단 조회
     * @remark 
     * @see smh.bas.service.BAS05100Service#SelectEquimentClass(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectEquimentClass(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectEquimentClass", param));
    }
    
    /**
     * @fn
     * @brief 설비/설비단 관리 -  그리드 콤보 조회
     * @remark 
     * @see smh.bas.service.BAS05100Service#SelectEqpClassGridCombo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectEqpClassGridCombo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getEquipmentState" , param), "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectMainEquipment" , param), "output2");
    }
    
    /**
     * @fn
     * @brief 설비/설비단 관리 - 설비단 설비단id 팝업
     * @remark 
     * @see smh.bas.service.BAS05100Service#SelectEquipmentClass(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void SelectEquipmentClass(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectEquipmentClass", param));
    }
    
    /**
     * @fn
     * @brief 설비/설비단 관리 - 설비/설비단 저장
     * @remark 
     * @see smh.bas.service.BAS05100Service#saveEquipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveEquipment(UiMapDto dto) throws Exception {
    	
    	DataSetMap ds_eqpMain				= getParametersDataSetMap(dto, "ds_eqpMain");			// 설비단 저장
    	DataSetMap ds_eqpClassMain		= getParametersDataSetMap(dto, "ds_eqpClassMain");		// 설비 저장
        Map<String, Object> paramEqp;			// 설비단
        Map<String, Object> paramEqpClass;		// 설비
        
        String _inspectorSeq = "";					// 신규 키값

        int result = 0;
        //ERP INSERT
        int seqNextVal = 0;
        for (int i = 0, n = ds_eqpClassMain.size(); i < n; i++) {
        	paramEqpClass = ds_eqpClassMain.get(i);
            int type = getRowType(paramEqpClass);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	_inspectorSeq = getCreateInspectorSeq(paramEqpClass);
            	result += insertEqpClass(paramEqpClass, _inspectorSeq);
            	result += insertEqpEXTClass(paramEqpClass, _inspectorSeq);
            	
            	//ERP I/F 시퀀스 채번
            	seqNextVal = getERPSeqNextVal();
            	erpIFData(paramEqpClass, seqNextVal, "C");
            	
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	
            	result += updateEqpClass(paramEqpClass);
            	result += updateEqpEXTClass(paramEqpClass);
            	
            	//ERP I/F 시퀀스 채번
            	seqNextVal = getERPSeqNextVal();
            	erpIFData(paramEqpClass, seqNextVal, "U");
            	
            	
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	
            	// 메인 삭제
            	result += deleteEqpClass(paramEqpClass);
            	// 이미지 삭제 대기
            	
            	// EXT 삭제
            	result += deleteEqpEXTClass(paramEqpClass);
            	// sub(설비단)
            	result += deleteSubEqpClass(paramEqpClass);
            	
            	// (21.07.19) 이미지 테이블 삭제 추가
          		if (!(StringUtil.isNullOrEmpty(paramEqpClass.get("ATCH_FILE_GUID"))))
            	{	
          			generalDao.addUpdate(NAMESAPCE + ".deleteEqpImageFile", paramEqpClass);	
            	}
            	
            	/*
            	 batch.add(getDeleteData(row, batch), SQLUpsertType.DELETE);
				getDeleteEXTData(row, batch);
				getFileDeleteData(row, batch);
				getSubDeleteData(row, batch);
            	 */
            }
        }
        
        for (int i = 0, n = ds_eqpMain.size(); i < n; i++) {
        	paramEqp = ds_eqpMain.get(i);
            int type = getRowType(paramEqp);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertEqp(paramEqp);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateEqp(paramEqp);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteEqp(paramEqp);
            }
        }
        
        putDataSetMap(dto, result);
    }
  	
    
    /*
  	 * 설비단 등록
  	 */
  	private int insertEqp(Map<String, Object> param) throws Exception{
    	
  		String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거) -> 다국어용
  		
  		String eqpId 	= (String)param.get("EQUIPMENTID");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkEqpList", param);
		if (idList.size() > 0 )
		{
			throw new BizException("InValidData002|"+String.format("EquipmentId = %s"
					,eqpId));
		}
	
		param.put("EQUIPMENTNAME",	 uid);			// 다국어 설정
		
		param.put("EQUIPMENTCLASSID",	 eqpId.substring(1,4));			
		
		return generalDao.addUpdate(NAMESAPCE + ".insertEqp", param);
		
	}
  	
  	/*
  	 * 설비단 수정
  	 */
  	private int updateEqp(Map<String, Object> param) throws Exception{
    	
  		String eqpId 	= (String)param.get("EQUIPMENTID");
  		
  		String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거) -> 다국어용
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkEqpList", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData001|"+String.format("EquipmentId = %s"
					,eqpId));
		}
  		
  		String dictionaryId = (String)param.get("EQUIPMENTNAME");
		
		if ((StringUtil.isNullOrEmpty(dictionaryId)))	
		{
			param.put("EQUIPMENTNAME",	 uid);			// 다국어 설정
		}
		return generalDao.addUpdate(NAMESAPCE + ".updateEqp", param);		
	}
  	/*
  	 * 설비단 삭제
  	 */
  	 private int deleteEqp(Map<String, Object> param) throws Exception{
     	
  		String eqpId 	= (String)param.get("EQUIPMENTID");
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkEqpList", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData003|"+String.format("EquipmentId = %s"
					,eqpId));
		}
 		return generalDao.addUpdate(NAMESAPCE + ".deleteEqp", param);		
 	}
  	
  	 
  	/**
      * @fn
      * @brief 설비/설비단 관리 - 설비/설비단 저장
      * @remark 
     * @see smh.bas.service.BAS05100Service#selectAreaListByEquipmentClassId(com.nbdf.commons.ui.vo.UiMapDto)
      */
     public void selectAreaListByEquipmentClassId(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);
         putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaListByEquipmentClassId", param));
     }
     
     /**
      * @fn
      * @brief 설비/설비단 관리 - [공정그룹 popup]
      * @remark 
     * @see smh.bas.service.BAS05100Service#selectProcessSegmentClass(com.nbdf.commons.ui.vo.UiMapDto)
      */
     public void selectProcessSegmentClass(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);
         putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentClass", param));
     }
     
     
     
     /*
      * 시리얼 번호 조회
      */
     private String getCreateInspectorSeq(Map<String, Object> param) throws Exception{
		 String strID = "";
		 String eqpId 		= (String)param.get("EQUIPMENTID");
		 String separator 	= (String)param.get("SEPARATOR");
		 String eqpClass 	= (String)param.get("EQUIPMENTCLASSID");
		 if ((StringUtil.isNullOrEmpty(eqpId)))	
		 {
			 //System.out.println("####### [신규 EQUIPMENTID 값이 없다.] ### "+separator+" || "+eqpClass);
			 Map<String, Object> nextSerial 				= new HashMap<>();			// 조회 조건 리턴값   
			 nextSerial.put("IDCLASSID", 						"EquipmentId");
			 nextSerial.put("PREFIX", 							separator+eqpClass);
			 nextSerial.put("SESSION_USER_ID", 				SessionUtil.getSessionValue("USER_ID"));
			 
			// System.out.println("####### [신규 EQUIPMENTID 값이 없다.] ### "+"MI41003".substring(0, 4)+" || "+"MI41003".substring(4, 7));
				
			 generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", nextSerial);
			 strID = (String)nextSerial.get("O_NEWID");
			
		}
		else
		{
			// (21.07.27) 중복 / max값 체크 확인
			Map<String, Object> chkSerial 				= new HashMap<>();			// 조회 조건 리턴값   
			chkSerial.put("IDCLASSID", 						"EquipmentId");
			chkSerial.put("PREFIX", 							separator+eqpClass);
			chkSerial.put("SESSION_USER_ID", 				SessionUtil.getSessionValue("USER_ID"));
			chkSerial.put("SERIALID", 							eqpId);
			
			Map<String, Object> chkEqpId 				= new HashMap<>();			// 조회 조건 리턴값
			chkEqpId.put("SERIALID", 							eqpId);
			Map<String, Object> extMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectDupEqpId", chkEqpId);
			String maxEqp = (String)extMap.get("MAX_EQP");
			if(maxEqp.equals("N"))
        	{
        		// 이미 등록된 INVOICE NO 입니다. 저장 할 수 없습니다. {0}
        		throw new BizException("CHECKEQPDUP|"+String.format("EQUIPMENTID=%s", eqpId));
        	}
			
			List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectMaxEqpId", chkSerial);
	  		
  			if (idList.size() < 1 )
			{
				// 처음 생성하는 설비id입니다. 자동 생성 하세요.
	  			throw new BizException("CHECKAUTOEQPID|"+String.format("EQUIPMENTID = %s"	,eqpId));
			}
			
	  		Map<String, Object> paramEqp;
	  		for(int i=0;i<idList.size();i++)
			{
	   			paramEqp = idList.get(i);
	   			
	   			String MaxEqpId 			= (String)paramEqp.get("MAX_EQPID");
	   			String MaxEqpIdChk 		= (String)paramEqp.get("CHK_YN");
	   			
	   			if(MaxEqpIdChk.equals("N"))
	   			{	
	   				// 입력가능한 설비id 범위를 벗어났습니다.(다음 자동생성 max 설비id :{0} 입니다.)
		  			throw new BizException("CHECKMAXEQPID|"+String.format("%s"	,MaxEqpId));
	   			}
	 		}
	  		strID = eqpId;			// 화면에서 넘겨 받은 값으로 설정
			
			//System.out.println("####### [신규 EQUIPMENTID 값이 있다 해당 경우는 없는데.. .] ### ");
			
		}
		 
		 return strID;
     }
     
     /*
   	 * 설비 등록
   	 */
   	private int insertEqpClass(Map<String, Object> param, String idSerial) throws Exception{
     	
   		//System.out.println("####### [신규 EQUIPMENTID 값이 없다.] ### "+ idSerial);
   		
		String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거) -> 다국어용
		
		param.put("SERIALID", 							idSerial);
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectEquipment", param);
		if (idList.size() > 0 )
		{
			throw new BizException("InValidData002|"+String.format("EquipmentId = %s"
					,idSerial));
		}
		
		String eqpId 	= (String)param.get("EQUIPMENTID");
		
		if ((StringUtil.isNullOrEmpty(eqpId)))	
		{
			param.put("EQUIPMENTID",	 idSerial);
		}
		
		param.put("EQUIPMENTNAME",	 uid);							// 다국어 ID
		param.put("CONTROLMODE",	 	"Offline");						// 설비 제어 모드 값 설정
		
		//System.out.println("####### [ EQUIPMENTID ] ### "+(String)param.get("EQUIPMENTID"));
		
		return generalDao.addUpdate(NAMESAPCE + ".insertEqpClass", param);
 	}
   	
    /*
  	 * 설비 등록(EXT)
  	 */
  	private int insertEqpEXTClass(Map<String, Object> param, String idSerial) throws Exception{
    	
		param.put("SERIALID", 							idSerial);
		String eqpId 	= (String)param.get("EQUIPMENTID");
		
		if ((StringUtil.isNullOrEmpty(eqpId)))	
		{
			param.put("EQUIPMENTID",	 idSerial);
		}
		
		return generalDao.addUpdate(NAMESAPCE + ".insertEqpExtClass", param);
	}
  	
	/*
  	 * 설비 수정
  	 */
  	private int updateEqpClass(Map<String, Object> param) throws Exception{
    	
  		String eqpId 	= (String)param.get("EQUIPMENTID");
  		
  		String uid 		= UUID.randomUUID().toString().replaceAll("-","").toUpperCase(); //UID 신규채번 (- 제거) -> 다국어용
  		
  		param.put("SERIALID", 							eqpId);
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectEquipment", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData001|"+String.format("EquipmentId = %s"
					,eqpId));
		}
  		
  		String dictionaryId = (String)param.get("EQUIPMENTNAME");
  		
		if ((StringUtil.isNullOrEmpty(dictionaryId)))
		{
			param.put("EQUIPMENTNAME", 							uid);
		}
		return generalDao.addUpdate(NAMESAPCE + ".updateEqpClass", param);		
	}
  	
  	/*
  	 * 설비 수정(EXT)
  	 */
  	private int updateEqpEXTClass(Map<String, Object> param) throws Exception{
    	
  		String eqpId 	= (String)param.get("EQUIPMENTID");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectEquipmentExt", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData001|"+String.format("EquipmentId = %s"
					,eqpId));
		}
		return generalDao.addUpdate(NAMESAPCE + ".updateEqpExtClass", param);		
	}
  	
  	
  	/*
  	 * 설비 삭제(Main)
  	 */
  	 private int deleteEqpClass(Map<String, Object> param) throws Exception{
     	
  		String eqpId 	= (String)param.get("EQUIPMENTID");
  		param.put("SERIALID", 							eqpId);
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectEquipment", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData003|"+String.format("EquipmentId = %s"
					,eqpId));
		}
 		return generalDao.addUpdate(NAMESAPCE + ".deleteEqpClass", param);		
 	}
  	 
  	/*
   	 * 설비 삭제(Main) - EXT
   	 */
   	 private int deleteEqpEXTClass(Map<String, Object> param) throws Exception{
      			
   		Map<String, Object> extMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectEquipmentExt", param);
   		
   		if(extMap != null)
 		{
   			return generalDao.addUpdate(NAMESAPCE + ".deleteEqpExtClass", param);		
 		}
   		return 0;
  	}
     
 
   	/*
   	 * 설비 삭제(Sub)
   	 */
   	 private int deleteSubEqpClass(Map<String, Object> param) throws Exception{
      	
   		String eqpId 	= (String)param.get("EQUIPMENTID");
   		param.put("P_EQUIPMENTID", 							eqpId);
   		int result = 0;
   		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".SelectEquimentClass", param);		// sub들 전부 조회
   		
   		Map<String, Object> paramEqp;
   		
   		for(int i=0;i<idList.size();i++)
		{
   			paramEqp = idList.get(i);
   			result += generalDao.addUpdate(NAMESAPCE + ".deleteEqp", paramEqp);
 		}
  		return result;		
  	}
   	 
   	 /*
   	  * ERP 연동 IF 일련 번호 조회
   	  */
     public int getERPSeqNextVal() throws Exception 
     {
     	int seqNextVal = 0;
     	Map<String, Object> param = new HashMap<>();
     	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".getERPSeqNextVal", param);
     	if(result==null){
     		seqNextVal = 1;
     	}else{
     		seqNextVal = NumberUtil.toInt((String)result.get("SEQNEXTVAL"));
     	}
     	System.out.println("seqNextVal :: "+seqNextVal);
     	return seqNextVal;
     }
     
     /************************************************************************************************
      * ERP I/F
      ************************************************************************************************ */
     private void erpIFData(Map<String, Object> row, int serialId, String crud) throws Exception
     {  
    	 //System.out.println("ERP 저장 타입 :: "+crud);
    	 
    	 //System.out.println("ERP Seq :: "+serialId);
    	 
    	 row.put("SERIALID", 							serialId);
    	 row.put("CRUD",	 							crud);
    	 
    	 
    	 generalDao.addSelectOneMap(NAMESAPCE + ".insertERPIFData", row);
    	
     }
     
     /**
      * @fn
      * @brief 설비/설비단 관리 - 설비 그룹 (POP - 메인 그리드)
      * @remark 
     * @see smh.bas.service.BAS05400Service#SelectMainEquipmentPop(com.nbdf.commons.ui.vo.UiMapDto)
      */
     public void SelectMainEquipmentPop(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);
         putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectMainEquipmentPop", param));
     }
  	

}