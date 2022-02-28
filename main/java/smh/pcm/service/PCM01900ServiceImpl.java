package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
 * @file: PCM01900ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: PCM01900ServiceImpl
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
public class PCM01900ServiceImpl extends AbstractNbdfService implements PCM01900Service {

	public static final String NAMESPACE = "smh.pcm.dao.PCM01900Dao";
	public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";

	@Autowired
	private GeneralDao generalDao;

	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectDefectMapDataByWorkComplete(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectDefectMapDataByWorkComplete(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectMapDataByWorkComplete", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectDefectMapDataByWorkComplete(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getLotWorkerByTrackOut(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getLotWorkerByTrackOut", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01900Service#getDurableDEFByBOR(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getDurableDEFByBOR(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getDurableDEFByBOR", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step Detail User Control에서 설비 탭의 데이터를 조회 한다.
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectDurableListByProcessWorkComplete(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectDurableListByProcessWorkComplete(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDurableListByProcessWorkComplete", param));
	}
	
	/**
	 * @fn
	 * @brief : 4-Step 설 명 : 공정 4-Step 상세 정보 탭의 후공정 설비 재공 리스트를 
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectPostProcessEquipmentWipByArea(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectPostProcessEquipmentWipByArea(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectPostProcessEquipmentWipByArea", param));
	}
	
	/**
	 * @fn
	 * @brief : Process 4-Step Detail User Control에서 작업 시작 시 선택한 설비 목록을 조회 한다. (Resource 변경)
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getLotEquipmentByArea(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getLotEquipmentByArea(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getLotEquipmentByArea", param));
	}
	
	/**
	 * @fn
	 * @brief : Process 4-Step Detail User Control에서 작업 시작 시 선택한 설비 목록을 조회 한다. (Resource 변경)
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectDefectDataByEquipment(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectDefectDataByEquipment(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectDataByEquipment", param));
	}
	
	
	/**
	 * @fn
	 * @brief : 4-Step (인계 등록) 설 명 : AOI 검사 공정 인계 등록 화면에서 AOI 불량 
		수기 입력 내역을 조회 한다.
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectDefectMapDataForSend(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectDefectMapDataForSend(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectMapDataForSend", param));
	}
	
	/**
	 * @fn
	 * @brief : AOI/BBT 불량 입력 시 Layer 선택 항목을 조회
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getLayerListForAoiBbtDefect(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getLayerListForAoiBbtDefect(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getLayerListForAoiBbtDefect", param));
	}
	
	/**
	 * @fn
	 * @brief : AOI/BBT 불량 입력 시 Layer 선택 항목을 조회
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getAoiDefectCodeByDefectCodeGroup(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getAoiDefectCodeByDefectCodeGroup(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getAoiDefectCodeByDefectCodeGroup", param));
	}
	
	/**
	 * @fn
	 * @brief : AOI/BBT 불량 입력 시 Layer 선택 항목을 조회
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getBBTDefectList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getBBTDefectList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getBBTDefectList", param));
	}
	
	/**
	 * @fn
	 * @brief : AOI/BBT 불량 입력 시 Layer 선택 항목을 조회
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getProcessSegmentClassBySegmentID(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getProcessSegmentClassBySegmentID(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getProcessSegmentClassBySegmentID", param));
	}
	
	/**
	 * @fn
	 * @brief : 
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#selectReworkRouting(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectReworkRouting(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectReworkRouting", param));
	}
	
	/**
	 * @fn
	 * @brief : 
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getTransitResourceForAoiRepair(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getTransitResourceForAoiRepair(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getTransitResourceForAoiRepair", param));
	}
	
	/**
	 * @fn
	 * @brief : 
		조회 한다. (Resource 변경)
	 * @remark
* @see smh.pcm.service.PCM01900Service#getProcessPathList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void getProcessPathList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getProcessPathList", param));
	}
	
	public void selectConsumableListByProcessWorkCompleteAndByProcess(UiMapDto dto) throws Exception {
		DataSetMap dsMap1 = getParametersDataSetMap(dto, "INPUT1");
		DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
		
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectConsumableListByProcessWorkComplete", dsMap1.get(0)), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectStandardRequirementByProcess", dsMap2.get(0)), "output2");
	}
	
}