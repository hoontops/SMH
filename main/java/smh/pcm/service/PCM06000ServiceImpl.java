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
 * @file: PCM06000ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS06000ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.06.03
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 06.03. 김애리 최초 생성
 */
@Service
public class PCM06000ServiceImpl extends AbstractNbdfService implements PCM06000Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06000Dao";

	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn
	 * @brief : 품목 탭 조회
	 * @remark
* @see smh.pcm.service.PCM06000Service#selectRollLossByProduct(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRollLossByProduct(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollLossByProduct", param));
	}
	
	/**
	 * @fn
	 * @brief : 공정 탭 투입 조회
	 * @remark
* @see smh.pcm.service.PCM06000Service#selectRollLossBySegment_Input(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRollLossBySegment_Input(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollLossBySegment_Input", param));
	}

	/**
	 * @fn
	 * @brief : 공정 탭 완료 조회
	 * @remark
* @see smh.pcm.service.PCM06000Service#selectRollLossBySegment_Complete(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRollLossBySegment_Complete(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollLossBySegment_Complete", param));
	}

	/**
	 * @fn
	 * @brief : LOT 탭 투입 조회
	 * @remark
* @see smh.pcm.service.PCM06000Service#selectRollLossByLot_Input(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRollLossByLot_Input(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto); 

        if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
        
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollLossByLot_Input", param));
	}
	
	/**
	 * @fn
	 * @brief : LOT 탭 완료 조회
	 * @remark
* @see smh.pcm.service.PCM06000Service#selectRollLossByLot_Complete(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectRollLossByLot_Complete(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRollLossByLot_Complete", param));
	}


}