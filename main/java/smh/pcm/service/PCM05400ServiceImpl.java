package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;

/**
 * @file: PCM05400ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS05400ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.2.1
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 5. 31. 김애리 최초 생성
 */
@Service
public class PCM05400ServiceImpl extends AbstractNbdfService implements PCM05400Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05400Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
	public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";

	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn
	 * @brief :  category 조회 
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectCategory(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectCategory(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCategory", param));
	}
	
	
	/**
	 * @fn
	 * @brief :  APP 탭 조회
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectLeadTimeByApp(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLeadTimeByApp(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		
		List<Map<String, Object>> categoryList = generalDao.addSelect(NAMESAPCE + ".selectCategory", param);
		
		String cateSelect = ""; /* EX - , AVG(DIGITIZER)      	AS DIGITIZER */
		String cateDecode = ""; /* EX -   ,   DECODE(LD.MFG_CATEGORY,'DIGITIZER', ACCUMLEADTIME,0)      AS DIGITIZER  */
		String cateNotin = ""; /* 'DIGITIZER','DISPLAY4L','ETC','TEST' */
		
		for (int i = 0; i < categoryList.size(); i++) {
		
			Map<String, Object> category = categoryList.get(i);
			String cateID = StringUtil.Object2String(category.get("CATEGORYID")).replace(".", "_");
			
			cateSelect += String.format(", SUM(%s)      	     AS %s_SUM \r\n", cateID, cateID);
			cateSelect += String.format(", SUM(%s_CNT)      	 AS %s_CNT \r\n", cateID, cateID);
			cateSelect += String.format(", CASE WHEN SUM(%s_CNT) = 0 THEN 0 ELSE SUM(%s) / SUM(%s_CNT) END AS %s_AVG \r\n", cateID, cateID, cateID, cateID);
			
			cateDecode += String.format(", DECODE(LD.MFG_CATEGORY,'%s', ACCUMLEADTIME,0)      	AS %s  \r\n", cateID, cateID);
			cateDecode += String.format(", DECODE(LD.MFG_CATEGORY,'%s', 1,0)      	AS %s_CNT  \r\n", cateID, cateID);
			
			if(i != 0) cateNotin += ",";
			cateNotin += String.format("'%s'",cateID);
			
		}
		
		param.put("CATEGORY_SELECT", cateSelect);
		param.put("CATEGORY_DECODE", cateDecode);
		param.put("CATEGORY_NOTIN", cateNotin);
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLeadTimeByApp", param));
	}

	/**
	 * @fn
	 * @brief :  TYPE 탭 조회
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectLeadTimeByType(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLeadTimeByType(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLeadTimeByType", param));
	}

	/**
	 * @fn
	 * @brief : 품목 탭 조회
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectLeadTimeByProduct(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLeadTimeByProduct(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLeadTimeByProduct", param));
	}

	/**
	 * @fn
	 * @brief :  LOT 탭 조회
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectLeadTimeByLot(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLeadTimeByLot(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLeadTimeByLot", param));
	}

	/**
	 * @fn
	 * @brief :  Segment 탭 조회 
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectLeadTimeBySegment(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLeadTimeBySegment(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLeadTimeBySegment", param));
	}

	/**
	 * @fn
	 * @brief : Area 탭 조회
	 * @remark
* @see smh.pcm.service.PCM05400Service#selectLeadTimeByArea(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectLeadTimeByArea(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLeadTimeByArea", param));
	}

}