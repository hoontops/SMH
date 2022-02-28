package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file: PCM01800ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: PCM01800ServiceImpl
 * @Company: Built1
 * @Create Date:  2021.04.19
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 3. 30. 김성현 최초 생성
 */
@Service
public class PCM01800ServiceImpl extends AbstractNbdfService implements PCM01800Service {

	public static final String NAMESPACE = "smh.pcm.dao.PCM01800Dao";
	public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESPACE1700 = "smh.pcm.dao.PCM01700Dao";
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
			List<Map<String, Object>> equipmentList = generalDao.addSelect(NAMESPACE + ".getEquipmentByArea2", param);
			putDataSetMap(dto, equipmentList, "ds_equipment");
			
			param.put("MATERIALTYPE", "Consumable");
			param.put("VERSION", queryVersion);
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectConsumableListByProcessWorkStart", param), "ds_consumable");

			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectStandardRequirementByProcess", param), "ds_standardRequirement");
			
			if("SubAssembly".equals(productDefType)) {
				param.put("DURABLESTATE", "Available,InUse");
			}else {
				param.put("DURABLESTATE", "Available");
			}
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getDurableDEFByBOR", param), "ds_BORDurable");

			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDurableListByProcessWorkStart", param), "ds_durable");
			
			List<Map<String, Object>> listWorker = generalDao.addSelect(NAMESPACECOM + ".getWorkerByProcess", param);
			if(listWorker.size()==1) {
				putDataSetMap(dto, listWorker, "ds_worker");
			}
			/* RECIPE 사용안함
			String equipmentId = "";
			for(int i=0; i<equipmentList.size(); i++) {
				equipmentId = (i==0?"":"?") + equipmentList.get(i).get("EQUIPMENTID");
			}
			String recipeNameFieldName = "";
			String parameterNameFieldName = "";
			switch ((String)SessionUtil.getSessionValue("LANGUAGETYPE"))
            {
                case "ko-KR":
                    recipeNameFieldName = "KRECIPENAME";
                    parameterNameFieldName = "KPARAMETERNAME";
                    break;
                case "en-US":
                    recipeNameFieldName = "ERECIPENAME";
                    parameterNameFieldName = "EPARAMETERNAME";
                    break;
                case "zh-CN":
                    recipeNameFieldName = "CRECIPENAME";
                    parameterNameFieldName = "CPARAMETERNAME";
                    break;
                case "vi-VN":
                    recipeNameFieldName = "VRECIPENAME";
                    parameterNameFieldName = "VPARAMETERNAME";
                    break;
            }
			
			param.put("RECIPENAME", recipeNameFieldName);
			param.put("PARAMETERNAME", parameterNameFieldName);
			param.put("PRODUCTID", lotInfo.get(0).get("PRODUCTDEFID"));
			param.put("PRODUCTVERSION", lotInfo.get(0).get("PRODUCTDEFVERSION"));
			param.put("PROCESSDEFID", processDefId);
			param.put("PROCESSDEFVERSION", processDefVersion);
			param.put("SEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
			param.put("RESOURCEID", lotInfo.get(0).get("RESOURCEID"));
			param.put("EQUIPMENTID", equipmentId);
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectEquipmentRecipe", param), "ds_equipmentRecipe");
			*/
			param.put("PRODUCTDEFID", lotInfo.get(0).get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", lotInfo.get(0).get("PRODUCTDEFVERSION"));
			param.put("PROCESSSEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
			param.put("PROCESSSEGMENTVERSION", lotInfo.get(0).get("PROCESSSEGMENTVERSION"));
			putDataSetMap(dto, generalDao.addSelect(NAMESPACE1700 + ".selectLotHistoryMessage", param), "ds_message");
			
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectReasonConsumableList", param),				"ds_ReasonConsumableList");
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonConsumableLot", param),				"ds_ReasonConsumableLot");
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonProcesssegment", param),				"ds_ReasonProcessSegment");
			
			
		}
		
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#getEquipmentByArea(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getEquipmentByArea(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getEquipmentByArea2", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#getEquipmentRecipeList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getEquipmentRecipeList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getEquipmentRecipeList", param));
	}
	

	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#selectDurableListByProcessWorkStartAndBOR(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectDurableListByProcessWorkStartAndBOR(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getDurableDEFByBOR", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDurableListByProcessWorkStart", param), "output2");
	}
	
	
	//
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#selectConsumableListByProcessWorkCompleteAndByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectConsumableListByProcessWorkCompleteAndByProcess(UiMapDto dto) throws Exception {
		DataSetMap dsMap1 = getParametersDataSetMap(dto, "INPUT1");
		DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
		
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDurableListByProcessWorkStart", dsMap1.get(0)), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectStandardRequirementByProcess", dsMap2.get(0)), "output2");
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#getPriorityConsumableLotByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getPriorityConsumableLotByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getPriorityConsumableLotByProcess", param));
	}
	 
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#getConsumableLotByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getConsumableLotByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getConsumableLotByProcess", param));
	}
	 
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#getConsumableAlternativeLotByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getConsumableAlternativeLotByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getConsumableAlternativeLotByProcess", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#selectEquipmentRecipe(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectEquipmentRecipe(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectEquipmentRecipe", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01800Service#getWorkerByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getWorkerByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getWorkerByProcess", param));
	}
	
}