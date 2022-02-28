package smh.pda.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCM02700ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02700ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.   김기수     최초  생성
*/
@Service
public class PDA00600ServiceImpl extends AbstractNbdfService implements PDA00600Service {

    public static final String NAMESPACE = "smh.pda.dao.PDA00600Dao";
    public static final String NAMESPACE2800 = "smh.pcm.dao.PCM02800Dao";
    public static final String NAMESPACE2200 = "smh.pcm.dao.PCM02200Dao";

	public static final String NAMESPACE1700 = "smh.pcm.dao.PCM01700Dao";
	public static final String NAMESPACE1800 = "smh.pcm.dao.PCM01800Dao";
	public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESPACE1900 = "smh.pcm.dao.PCM01900Dao";
	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    
    @Autowired
    private GeneralDao generalDao;


	/**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.PCM01700Service#SelectDefectCodeByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLotInfoByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		String processDefType = "";
		String processDefId = "";
		String processDefVersion = "";
		List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE1700 + ".getProcessDefTypeByProcess", param);
		if(list.size()>0) {
			processDefType = (String) list.get(0).get("PROCESSDEFTYPE");
			processDefId = (String) list.get(0).get("PROCESSDEFID");
			processDefVersion = (String) list.get(0).get("PROCESSDEFVERSION");
		}
		String queryVersion = "10001";
		if ("Rework".equals(processDefType)) queryVersion = "10011";
		param.put("VERSION", "Rework".equals(processDefType) ? "10032" : "10031");
		List<Map<String, Object>> lotInfo = generalDao.addSelect(NAMESPACE1700 + ".selectLotInfoByProcess", param);
		putDataSetMap(dto, lotInfo, "ds_lotInfo");
		putDataSetMap(dto, list, "ds_ProcessDefTypeByProcess");
		
		if(lotInfo.size()>0) {
			String productDefType = (String) lotInfo.get(0).get("PROCESSSEGMENTID");
			param.put("PROCESSSEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
			param.put("VERSION", queryVersion);
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE1700 + ".selectCommentByProcess", param), "ds_comment");
			
			param.put("CONTROLTYPE", "XBARR");
			param.put("SPECCLASSID", "OperationSpec");
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE1700 + ".selectProcessSpecByProcess", param), "ds_processSpec");

			param.put("EQUIPMENTTYPE", "Production");
			param.put("DETAILEQUIPMENTTYPE", "Main");
			param.put("VERSION", "10031");
			List<Map<String, Object>> equipmentList = null;
			if("1".equals(param.get("FORM_PROCESSTYPE"))) {	//작업시작
				equipmentList = generalDao.addSelect(NAMESPACE1800 + ".getEquipmentByArea", param);
				putDataSetMap(dto, equipmentList, "ds_equipment");
			}else if("2".equals(param.get("FORM_PROCESSTYPE"))) {	//작업완료
				equipmentList = generalDao.addSelect(NAMESPACE1900 + ".getLotEquipmentByArea", param);
				putDataSetMap(dto, equipmentList, "ds_equipment");
			}
			
			param.put("MATERIALTYPE", "Consumable");
			param.put("VERSION", queryVersion);
			if("1".equals(param.get("FORM_PROCESSTYPE"))) {	//작업시작
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".selectConsumableListByProcessWorkStart", param), "ds_consumable");
			}else if("2".equals(param.get("FORM_PROCESSTYPE"))) {	//작업완료
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".selectConsumableListByProcessWorkComplete", param), "ds_consumable");
			}
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".selectStandardRequirementByProcess", param), "ds_standardRequirement");
			
			if("SubAssembly".equals(productDefType)) {
				param.put("DURABLESTATE", "Available,InUse");
			}else {
				param.put("DURABLESTATE", "Available");
			}

			if("1".equals(param.get("FORM_PROCESSTYPE"))) {	//작업시작
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".getDurableDEFByBOR", param), "ds_BORDurable");
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".selectDurableListByProcessWorkStart", param), "ds_durable");
				List<Map<String, Object>> listWorker = generalDao.addSelect(NAMESPACECOM + ".getWorkerByProcess", param);
				if(listWorker.size()==1) {
					putDataSetMap(dto, listWorker, "ds_worker");
				}
			}else if("2".equals(param.get("FORM_PROCESSTYPE"))) {	//작업완료
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1900 + ".getDurableDEFByBOR", param), "ds_BORDurable");
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1900 + ".selectDurableListByProcessWorkComplete", param), "ds_durable");
				putDataSetMap(dto, generalDao.addSelect(NAMESPACE1900 + ".getLotWorkerByTrackOut", param),"ds_worker");
			}	

			param.put("PRODUCTDEFID", lotInfo.get(0).get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotInfo.get(0).get("PRODUCTDEFVERSION"));
			param.put("PROCESSSEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lotInfo.get(0).get("PROCESSSEGMENTVERSION"));
			//putDataSetMap(dto, generalDao.addSelect(NAMESPACE1700 + ".selectLotHistoryMessage", param), "ds_message");
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE1700 + ".getPdaLotMessageList", param), "ds_message");
			
			/* 불량 제외
			if("1,2,3".indexOf((String) param.get("FORM_PROCESSTYPE")) >= 0 ) {
		        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectReasonConsumableList", param),				"ds_ReasonConsumableList");
		        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonConsumableLot", param),				"ds_ReasonConsumableLot");
		        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonProcesssegment", param),				"ds_ReasonProcessSegment");
			}
			*/
			
		}
		
	}    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 표준공정 사용 품목 조회
     * @remark 
     * @see smh.bas.service.PDA00600#selectLotWorkCancelList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotListForSendCancel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotListForSendCancel", param));
    }   
    
    
    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 인수취소
     * @remark 
     * @see smh.bas.service.PDA00600#selectLotWorkCancelList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotWorkCancelList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotWorkCancelList", param));
    }   

    
    /**
     * @fn selectWipTransAreaList
     * @brief (Override method) 자원변경
     * @remark 
     * @see smh.bas.service.PDA00600#selectWipTransAreaList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWipTransAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE2800 + ".selectWipTransAreaList", param);
        putDataSetMap(dto, list);
        if(list.size()>0) {
        	String processDefid 			= "";
        	String processDefversion 		= "";
        	String Productdefid 			= "";
        	String Productdefversion 		= "";
        	if((list.get(0).get("SUBPROCESSDEFID")==null||"".equals(list.get(0).get("SUBPROCESSDEFID"))) && !"Return".equals(list.get(0).get("LOTCREATEDTYPE"))) {
        		processDefid = (String) list.get(0).get("PROCESSDEFID");
        		processDefversion = (String) list.get(0).get("PROCESSDEFVERSION");
        		Productdefid = (String) list.get(0).get("PRODUCTDEFID");
        		Productdefversion = (String) list.get(0).get("PRODUCTDEFVERSION");
        	}else if(list.get(0).get("SUBPROCESSDEFID")!=null && !"".equals(list.get(0).get("SUBPROCESSDEFID"))) {
        		processDefid = (String) list.get(0).get("SUBPROCESSDEFID");
        		processDefversion = (String) list.get(0).get("SUBPROCESSDEFVERSION");        		
        	}else if("Return".equals(list.get(0).get("LOTCREATEDTYPE"))) {
        		processDefid      = (String) list.get(0).get("PROCESSDEFID");
        		processDefversion = (String) list.get(0).get("PROCESSDEFVERSION");
        	}
        	param.put("RESOURCEID", list.get(0).get("RESOURCEID"));
	        param.put("PROCESSSEGMENTID", list.get(0).get("PROCESSSEGMENTID"));
	        param.put("PROCESSSEGMENTVERSION", list.get(0).get("PROCESSSEGMENTVERSION"));
	        param.put("PROCESSDEFID", processDefid);
	        param.put("PROCESSDEFVERSION", processDefversion);
	        param.put("PRODUCTDEFID", Productdefid);
	        param.put("PRODUCTDEFVERSION", Productdefversion);
	        param.put("VERSION", "10021");	
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACE2800 + ".getTransAreaList", param), "ds_transitArea");
        }
    }   

    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 인수취소
     * @remark 
     * @see smh.bas.service.PDA00600#selectLotListForWorkEndCancel(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotListForWorkEndCancel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotListForWorkEndCancel", param));
    }   

    
    /**
     * @fn selectAreaListByAuthorityList
     * @brief (Override method) 자원
     * @remark 
     * @see smh.bas.service.PDA00600#selectAreaListByAuthorityList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAreaListByAuthorityList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAreaListByAuthorityList", param));
    }   

}