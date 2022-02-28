package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;


/**
 * @file: PCM10100ServiceImpl.java
* @Package: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS00300ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.6.15
 * @Author: 방성혁
 * @File Version: v1.0
 *
 *  << 개정이력(Modification Information) >>
 *
 *       수정일      수정자    수정내용 
 *   ------------ ------ ---------- 
 *    2021. 6. 15.  방성혁   최초 생성
 */
@Service
public class PCM10100ServiceImpl extends AbstractNbdfService implements PCM10100Service {

	   public static final String NAMESAPCE = "smh.pcm.dao.PCM10100Dao";
	@Autowired
	private GeneralDao generalDao;

	/**
	 * @fn selectInfPcmWipSubulList
	 * @brief (Override method) 재공 수불부 조회
	 * @remark
* @see smh.pcm.service.PCM10100Service#selectInfPcmWipSubulList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void selectInfPcmWipSubulList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInfPcmWipSubulList", param));
	}

	
}