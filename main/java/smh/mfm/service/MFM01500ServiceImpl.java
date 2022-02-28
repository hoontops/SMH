package smh.mfm.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;




/**
 * @file		: MFM01500ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01500ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021. 05. 24
 * @Author		: 김성현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 24  김성현      최초  생성 
 */
@Service
public class MFM01500ServiceImpl extends AbstractNbdfService implements MFM01500Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM01500Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 콤보
     * @remark 
     * @see smh.mfm.service.MFM01500Service#selectProductKind(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductKind(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
    	
 		//품목
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductKindForItem", param), "output1");
 		//제품군
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductKindForProduct", param), "output2");
    }
  	
    /**
     * @fn
     * @brief 품목별
     * @remark 
     * @see smh.mfm.service.MFM01500Service#selectItemGrpProductdefList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectItemGrpProductdefList(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
    	
     	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemGrpProductdefList", param));
    }

    /**
     * @fn
     * @brief 제품군별
     * @remark 
     * @see smh.mfm.service.MFM01500Service#selectProductGrpProductdefList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductGrpProductdefList(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
    	
     	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductGrpProductdefList", param));
    }
  	

  	
    /**
     * @fn
     * @brief 품목별
     * @remark 
     * @see smh.mfm.service.MFM01500Service#selectItemGrpProductdefDetailList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectItemGrpProductdefDetailList(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
    	
     	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemGrpProductdefDetailList", param));
    }

    /**
     * @fn
     * @brief 제품군별
     * @remark 
     * @see smh.mfm.service.MFM01500Service#selectProductGrpProductdefDetailList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductGrpProductdefDetailList(UiMapDto dto) throws Exception {
     	Map<String, Object> param = getParametersMap(dto);
    	
     	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductGrpProductdefDetailList", param));
    }
  	
}