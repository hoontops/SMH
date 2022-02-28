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
 * @file: PCM06500ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS06500ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.06.15
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 06.15. 김애리 최초 생성
 */
@Service
public class PCM06500ServiceImpl extends AbstractNbdfService implements PCM06500Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06500Dao";

	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn
	 * @brief :  Window Time Lot 조회 
	 * @remark
* @see smh.pcm.service.PCM06500Service#selectWindowTimeLotList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectWindowTimeLotList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		
		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}
		
		if (param.get("LOTID") != null) {
			String[] splitLotID = param.get("LOTID").toString().split(",");
			param.put("LOTID", splitLotID);
		}
		
		if (param.get("PROCESSSEGMENTID") != null) {
			String[] splitSegment = param.get("PROCESSSEGMENTID").toString().split(",");
			param.put("PROCESSSEGMENTID", splitSegment);
		}
		
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWindowTimeLotList", param));
	}
	
	
}