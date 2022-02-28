package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Decimal;

import smh.commons.TxnHistKey;


/**
* @file: BAS03000ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03000ServiceImpl
* @Company: Built1
* @Create Date: 2021.02.24
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.02.24   김애리     최초  생성
*/
@Service
public class BAS03000ServiceImpl extends AbstractNbdfService implements BAS03000Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03000Dao";

    @Autowired
    private GeneralDao generalDao;

    //재작업 번호 팝업 리스트 조회 
    public void selectProcessDefIDPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessDefIDPopup", param));
    }
	
    //Site 콤보 Dataset 조회
    public void selectPLANTID(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPLANTID", param),"ds_cbo_PLANTID");
    }


    //대공정 콤보 Dataset 조회
    public void selectProcessSegMentTop(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegMentTop", param),"ds_cbo_topProcessSegmentID");
    }
    
    //재작업 버전 콤보 Dataset 조회
    public void selectProcessdefVersion(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessdefVersion", param));
    }

    
    //재작업 구분 콤보 Dataset 조회
    public void selectProcessClassType(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessClassType", param),"ds_cbo_ProcessClassID");
    }

    //재작업 라우팅 조회(상단 그리드)
    public void selectProcessdefinitionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessdefinitionList", param));
    }
    
    //공정 순서 조회(중간 탭 1 페이지)
    public void selectProcessPathList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessPathList", param),"ds_Operation");
    }
    
    //품목지정 조회(중간 탭 2 페이지)
    public void selectProductReworkControl(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductReworkControl", param),"ds_ReworkProduct");
    }
    
    //사용 작업장 조회(중간 탭 3 페이지)
    public void selectAreaReworkControl(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaReworkControl", param),"ds_ReworkArea");
    }
    
    //대체자원 조회(하단 탭 1 페이지)
    public void selectReworkRoutingResource(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReworkRoutingResource", param));
    }
    
    //설비 지정 조회(하단 탭 2 페이지)
    public void selectReworkRoutingEquipment(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReworkRoutingEquipment", param));
    }
    
    //공정 팝업 
    public void selectProcessSegmentExtPupop(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentExtPupop", param));
    }
    
    //품목 코드
    public void selectProductDefinitionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) Rework Routing 수정, 등록, 삭제 기능
     * @remark - Rework Routing 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS03000Service#saveReworkRouting(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveReworkRouting(UiMapDto dto) throws Exception {
    	DataSetMap paramMapRouting = getParametersDataSetMap(dto,"ds_Routing");
    	DataSetMap paramMapOperation = getParametersDataSetMap(dto,"ds_Operation");
    	DataSetMap paramMapReworkProduct = getParametersDataSetMap(dto,"ds_ReworkProduct");
    	DataSetMap paramMapReworkArea = getParametersDataSetMap(dto,"ds_ReworkArea");
    	DataSetMap paramMapResource = getParametersDataSetMap(dto,"ds_Resource");
    	DataSetMap paramMapEquipment = getParametersDataSetMap(dto,"ds_Equipment");
    	
        
    	Map<String, Object> paramRouting;
        Map<String, Object> paramOperation;
        Map<String, Object> paramReworkProduct;
        Map<String, Object> paramReworkArea;
        Map<String, Object> paramResource;
        Map<String, Object> paramEquipment;

        int result = 0;
        for (int i = 0, len = paramMapRouting.size(); i < len; i++) {
        	paramRouting = paramMapRouting.get(i);
        	int state = getRowType(paramRouting);
        	
            switch (state) 
			{
				case DataSet.ROW_TYPE_INSERTED:
				{
					String tempSEQ = paramRouting.get("TEMPSEQ").toString();
					String TopSegID = paramRouting.get("TOPPROCESSSEGMENTID").toString();
					String reworkRoutingId = getProductDefinitionNewID(paramRouting, TopSegID);
					String reworkRoutingVersion = "A1";
					if(reworkRoutingId == "")
					{
						throw new BizException("CancelSave");
					}
	
					paramRouting.put("PROCESSDEFID", reworkRoutingId);
					paramRouting.put("PROCESSDEFVERSION", reworkRoutingVersion);
					paramRouting.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
					result += generalDao.insert(NAMESAPCE + ".insertBasProcessdefinition", paramRouting);
					
					//탭들에 있는 PROCESSDEFID 를 변경 
					setDetailMapper(paramMapOperation, reworkRoutingId, reworkRoutingVersion, tempSEQ);
					setDetailMapper(paramMapReworkProduct, reworkRoutingId, reworkRoutingVersion, tempSEQ);
					setDetailMapper(paramMapReworkArea, reworkRoutingId, reworkRoutingVersion, tempSEQ);
					setDetailMapper(paramMapResource, reworkRoutingId, reworkRoutingVersion, tempSEQ);
					setDetailMapper(paramMapEquipment, reworkRoutingId, reworkRoutingVersion, tempSEQ);
					
					break;
				}
				case DataSet.ROW_TYPE_UPDATED:
				{
					String reworkItemControl = paramRouting.get("REWORKITEMCONTROL").toString(); 
					String reworkSegmentControl = paramRouting.get("REWORKSEGMENTCONTROL").toString(); 
					
					HashMap<String, Object> propertyMap = new HashMap<>();
					propertyMap.put("PROCESSDEFID", paramRouting.get("PROCESSDEFID_R"));
					propertyMap.put("PROCESSDEFVERSION", paramRouting.get("PROCESSDEFVERSION_R"));
					propertyMap.put("ENTERPRISEID", paramRouting.get("ENTERPRISEID"));
					
					
					if(reworkItemControl.equals("N"))
					{
						propertyMap.put("CONTROLTYPE", "Product");
						generalDao.delete(NAMESAPCE + ".deleteBasReworkcontrolAll", propertyMap);
						generalDao.delete(NAMESAPCE + ".deleteBasBillofmaterialAll", propertyMap);
						
					}	
					if(reworkSegmentControl.equals("N"))
					{
						propertyMap.put("CONTROLTYPE", "Area");
						generalDao.delete(NAMESAPCE + ".deleteBasReworkcontrolAll", propertyMap);
						
					}
					
					paramRouting.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
					result += generalDao.update(NAMESAPCE + ".updateBasProcessdefinition", paramRouting);
					break;
				}
				case DataSet.ROW_TYPE_DELETED:
				{
					result += generalDao.delete(NAMESAPCE + ".deleteBasProcessdefinition", paramRouting);
					break;
				}
			}//switch (state) 
        }//for (int i = 0, len = paramMapRouting.size(); i < len; i++) {
        
        //공정순서 그리드 CRUD
        int cntOper = 0;
        for (int i = 0, len = paramMapOperation.size(); i < len; i++) {
        	paramOperation = paramMapOperation.get(i);
        	int state = getRowType(paramOperation);
        	
            switch (state) 
			{
				case DataSet.ROW_TYPE_INSERTED:
				{

			        paramOperation.put("PRODUCTDEFID", "*");
			        paramOperation.put("PRODUCTDEFVERSION", "*");

			        
//					paramOperation.put("PROCESSPATHID", UUID.randomUUID().toString().toUpperCase()); //ID 발급을 바꾸기로 함.
			        String seq = String.format("%06d",  i+1);
			        String parthID = paramOperation.get("PROCESSDEFID").toString() + paramOperation.get("PROCESSDEFVERSION").toString() + seq;
			        paramOperation.put("PROCESSPATHID", parthID);
					paramOperation.put("DESCRIPTION", paramOperation.get("UNIQUENESS"));
					result += generalDao.insert(NAMESAPCE + ".insertBasProcesspath", paramOperation);
					
					paramOperation.put("RESOURCETYPE", "Resource");
					List<Map<String, Object>> mmResourceList = generalDao.addSelect(NAMESAPCE + ".selectMaxSequenceByBillofResource", paramOperation);
					
					Map<String, Object> map =mmResourceList.get(0);
					
					double  iSEQUENCE = 0;
			        if(map.get("SEQUENCE1") != null)
			        {
			        	String strtemp =map.get("SEQUENCE1").toString();
			        	iSEQUENCE = Integer.parseInt(strtemp);
			        }
					
			        iSEQUENCE = iSEQUENCE + 1;
			        paramOperation.put("PATHSEQUENCE", iSEQUENCE);
			        
			        paramOperation.put("EQUIPMENTID", "*");
			        paramOperation.put("RESOURCECLASSID", "*");
			        
			        result += generalDao.insert(NAMESAPCE + ".insertBasBillofresource", paramOperation);
			        
			        cntOper++;
					break;
				}
				case DataSet.ROW_TYPE_UPDATED:
				{
					paramOperation.put("DESCRIPTION", paramOperation.get("UNIQUENESS"));
		    		
					result += generalDao.update(NAMESAPCE + ".updateBasProcesspath", paramOperation);
					
					result += generalDao.update(NAMESAPCE + ".updateBasBillofresource", paramOperation);
					
					String alternativeResource = paramOperation.get("ALTERNATIVERESOURCE").toString();
					String assignEquipment = paramOperation.get("ASSIGNEQUIPMENT").toString();
					
					if(alternativeResource.equals("N"))
					{
						paramOperation.put("RESOURCETYPE", "Resource");
						generalDao.delete(NAMESAPCE + ".deleteBillofresource4Sub", paramOperation);
					}
					
					if(assignEquipment.equals("N"))
					{
						paramOperation.put("RESOURCETYPE", "Equipment");
						generalDao.delete(NAMESAPCE + ".deleteBillofresource4Sub", paramOperation);
					}
					
					cntOper++;
					break;
				}
				case DataSet.ROW_TYPE_DELETED:
				{
					result += generalDao.delete(NAMESAPCE + ".deleteBasProcesspath", paramOperation);
					
					paramOperation.put("EQUIPMENTID", "*");
					paramOperation.put("PRODUCTDEFID", "*");
					paramOperation.put("PRODUCTDEFVERSION", "*");
					paramOperation.put("RESOURCECLASSID", "*");
					paramOperation.put("RESOURCETYPE", "Resource");
					result += generalDao.delete(NAMESAPCE + ".deleteBasBillofresource", paramOperation);
					
					cntOper++;
					break;
				}
			}
        }
        
        //공정 순서 수정 시 ProcessPath에 CUD가 있었다면 PATHSEQUENCE, PATHTYPE 때문에 시작과 끝을 찾아서 다시 update 해야함. 
        if (cntOper > 0) {
        
        	String processDefID = paramMapOperation.get(0).get("PROCESSDEFID").toString();
        	String processDefVer = paramMapOperation.get(0).get("PROCESSDEFVERSION").toString();
        	String enterprise = paramMapOperation.get(0).get("ENTERPRISEID").toString();
        	
        	HashMap<String, Object> propertyMap = new HashMap<>();
        	
        	propertyMap.put("PROCESSDEFID", processDefID);
        	propertyMap.put("PROCESSDEFVERSION", processDefVer);
        	propertyMap.put("ENTERPRISEID", enterprise);
        	
        	List<Map<String, Object>> pathList = generalDao.addSelect(NAMESAPCE + ".selectBasProcesspath4UserSeq", propertyMap);
        	Map<String, Object> paramPath;
        	
	        for (int i = 0, len = pathList.size(); i < len; i++) {
	        	paramPath = pathList.get(i);
	        	
	        	paramPath.put("PATHSEQUENCE", i+1);
	        	
	        	if (len == 1)
	        		paramPath.put("PATHTYPE", "StartEnd");
				else {
					if (i == 0)
						paramPath.put("PATHTYPE", "Start");
					else if (i == len - 1)
						paramPath.put("PATHTYPE", "End");
					else if (i < len)
						paramPath.put("PATHTYPE", "Normal");
				}
	        	

	        	generalDao.update(NAMESAPCE + ".updateBasProcesspath", paramPath);
	        }
        }
        
        
        //품목지정 그리드 CRUD
        for (int i = 0, len = paramMapReworkProduct.size(); i < len; i++) {
        	paramReworkProduct = paramMapReworkProduct.get(i);
        	int state = getRowType(paramReworkProduct);
        	
            switch (state) 
			{
				case DataSet.ROW_TYPE_INSERTED:
				{
					List<Map<String, Object>> mmProductList = generalDao.addSelect(NAMESAPCE + ".selectMaxSequenceByReworkControl", paramReworkProduct);
					
					Map<String, Object> map =mmProductList.get(0);
					
					double  iSEQUENCE = 0;
			        if(map.get("SEQUENCE1") != null)
			        {
			        	String strtemp =map.get("SEQUENCE1").toString();
			        	iSEQUENCE = Integer.parseInt(strtemp);
			        }
			        
			        iSEQUENCE = iSEQUENCE + 1;
			        paramReworkProduct.put("SEQ", iSEQUENCE); 
			        
					result += generalDao.insert(NAMESAPCE + ".insertBasReworkcontrol", paramReworkProduct);
					break;
				}
				case DataSet.ROW_TYPE_UPDATED:
				{
					result += generalDao.update(NAMESAPCE + ".updateBasReworkcontrol", paramReworkProduct);
					break;
				}
				case DataSet.ROW_TYPE_DELETED:
				{
					result += generalDao.delete(NAMESAPCE + ".deleteBasReworkcontrol", paramReworkProduct);
					break;
				}
			}
            
        } 
        
      //AREA 그리드 CRUD
        for (int i = 0, len = paramMapReworkArea.size(); i < len; i++) {
        	paramReworkArea = paramMapReworkArea.get(i);
        	int state = getRowType(paramReworkArea);
        	
            switch (state) 
			{
				case DataSet.ROW_TYPE_INSERTED:
				{
					List<Map<String, Object>> mmProductList = generalDao.addSelect(NAMESAPCE + ".selectMaxSequenceByReworkControl", paramReworkArea);
					
					Map<String, Object> map =mmProductList.get(0);
					
					double  iSEQUENCE = 0;
			        if(map.get("SEQUENCE1") != null)
			        {
			        	String strtemp =map.get("SEQUENCE1").toString();
			        	iSEQUENCE = Integer.parseInt(strtemp);
			        }
			        
			        iSEQUENCE = iSEQUENCE + 1;
			        paramReworkArea.put("SEQ", iSEQUENCE); 
			        
					result += generalDao.insert(NAMESAPCE + ".insertBasReworkcontrol", paramReworkArea);
					break;
				}
				case DataSet.ROW_TYPE_UPDATED:
				{
					result += generalDao.update(NAMESAPCE + ".updateBasReworkcontrol", paramReworkArea);
					break;
				}
				case DataSet.ROW_TYPE_DELETED:
				{
					result += generalDao.delete(NAMESAPCE + ".deleteBasReworkcontrol", paramReworkArea);
					break;
				}
			}
            
        } 
        
        //대체자원 그리드 CRUD
        for (int i = 0, len = paramMapResource.size(); i < len; i++) {
        	paramResource = paramMapResource.get(i);
        	int state = getRowType(paramResource);
        	
            switch (state) 
			{
				case DataSet.ROW_TYPE_INSERTED:
				{
					paramResource.put("RESOURCETYPE", "Resource");
					
					List<Map<String, Object>> mmResourceList = generalDao.addSelect(NAMESAPCE + ".selectMaxSequenceByBillofResource", paramResource);
					
					Map<String, Object> map =mmResourceList.get(0);
					
					double  iSEQUENCE = 0;
			        if(map.get("SEQUENCE1") != null)
			        {
			        	String strtemp =map.get("SEQUENCE1").toString();
			        	iSEQUENCE = Integer.parseInt(strtemp);
			        }
					
			        iSEQUENCE = iSEQUENCE + 1;
			        paramResource.put("PATHSEQUENCE", iSEQUENCE); 
			        paramResource.put("EQUIPMENTID", "*");
			        paramResource.put("RESOURCECLASSID", "*");
			        
					result += generalDao.insert(NAMESAPCE + ".insertBasBillofresource", paramResource);
					break;
				}
				case DataSet.ROW_TYPE_UPDATED:
				{
					paramResource.put("PATHSEQUENCE", paramResource.get("SEQ").toString()); 
					result += generalDao.update(NAMESAPCE + ".updateBasBillofresource", paramResource);
					break;
				}
				case DataSet.ROW_TYPE_DELETED:
				{
					result += generalDao.delete(NAMESAPCE + ".deleteBasBillofresource", paramResource);
					break;
				}
			}
            
        } 
        
        //설비지정 그리드 CRUD
        for (int i = 0, len = paramMapEquipment.size(); i < len; i++) {
        	paramEquipment = paramMapEquipment.get(i);
        	int state = getRowType(paramEquipment);
        	
            switch (state) 
			{
				case DataSet.ROW_TYPE_INSERTED:
				{
					List<Map<String, Object>> mmResourceList = generalDao.addSelect(NAMESAPCE + ".selectMaxSequenceByBillofResource", paramEquipment);
					
					Map<String, Object> map =mmResourceList.get(0);
					
					double  iSEQUENCE = 0;
			        if(map.get("SEQUENCE1") != null)
			        {
			        	String strtemp =map.get("SEQUENCE1").toString();
			        	iSEQUENCE = Integer.parseInt(strtemp);
			        }
					
			        iSEQUENCE = iSEQUENCE + 1;
			        paramEquipment.put("PATHSEQUENCE", iSEQUENCE); 
			        paramEquipment.put("RESOURCETYPE", "Equipment");
			        paramEquipment.put("EQUIPMENTID", "*");
			        paramEquipment.put("RESOURCECLASSID", "*");
			        
					result += generalDao.insert(NAMESAPCE + ".insertBasBillofresource", paramEquipment);
					break;
				}
				case DataSet.ROW_TYPE_UPDATED:
				{
					paramEquipment.put("PATHSEQUENCE", paramEquipment.get("SEQ").toString()); 
					result += generalDao.update(NAMESAPCE + ".updateBasBillofresource", paramEquipment);
					break;
				}
				case DataSet.ROW_TYPE_DELETED:
				{
					result += generalDao.delete(NAMESAPCE + ".deleteBasBillofresource", paramEquipment);
					break;
				}
			}
            
        } 
        
        HashMap<String, Object> retData = new HashMap<String, Object>();
        retData.put("result",    result);
   
        putDataSetMap(dto, retData);
    }

    

	//재작업 라우팅이 바뀌면 하위 탭 PROCESSDEFID 을 변경.
	private void setDetailMapper(DataSetMap paramMap, String reworkRoutingId, String reworkRoutingVersion, String tempSEQ) {
		
		Map<String, Object> param;
		if(paramMap != null && paramMap.size() != 0)
		{
			for (int i = 0, len = paramMap.size(); i < len; i++) 
			{
				param = paramMap.get(i);
				if(tempSEQ.equals(param.get("PROCESSDEFID")))
				{
					param.put("PROCESSDEFID", reworkRoutingId);
					param.put("PROCESSDEFVERSION", reworkRoutingVersion);
				}
			}
		}
		
	}

	private String getProductDefinitionNewID(Map<String, Object> paramRouting, String topSegID) {
		String reworkRoutingId = "";
		
		List<Map<String, Object>> listMaxRouingID = generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionNewID", paramRouting);
		if (listMaxRouingID != null && listMaxRouingID.isEmpty() == false ) {
			reworkRoutingId = listMaxRouingID.get(0).get("NEWID").toString();
		} 
		
		if(reworkRoutingId == "" || reworkRoutingId.equals("0"))
		{
			reworkRoutingId = topSegID + "0001"; 
		}else {
			reworkRoutingId = reworkRoutingId.substring(reworkRoutingId.length()-4);
			int iReworkRoutingId = Integer.parseInt(reworkRoutingId);
			iReworkRoutingId += 1;
			reworkRoutingId = topSegID + String.format("%04d", iReworkRoutingId);
		}
		
		return reworkRoutingId;
	}
	
    
    public void selectAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaList", param));
    }
    
    public void selectReworkRoutingEquipmentPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReworkRoutingEquipmentPopup", param));
    }

}