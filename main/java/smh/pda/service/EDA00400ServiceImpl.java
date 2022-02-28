package smh.pda.service;

import com.nbdf.cmd.cm.cmsy.service.CMSY00100Service;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.ErpDao;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


/**
* @file: EDA00100ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: EDA00100ServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class EDA00400ServiceImpl extends AbstractNbdfService implements EDA00400Service {

	public static final String NAMESAPCE = "smh.pda.dao.EDA00400Dao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private ErpDao erpDao;

    /**
     * @fn
     * @brief (Override method) 환산금액 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.EDA00400Service#selectBasProductquotationsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
    public void selectFifo31(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo31", param);
        putDataSetMap(dto, param);
    }
    

	
}