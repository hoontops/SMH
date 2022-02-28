package smh.pda.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.ErpDao;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
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
public class EDA00500ServiceImpl extends AbstractNbdfService implements EDA00500Service {

	public static final String NAMESAPCE = "smh.pda.dao.EDA00500Dao";

    @Autowired
    private ErpDao erpDao;

    /**
     * @fn
     * @brief (Override method) 환산금액 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.EDA00500Service#selectBasProductquotationsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
    public void selectFifo41(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo41", param);
        List<Map<String, Object>> list = (List<Map<String, Object>>) param.get("O_RTN_CURSOR");
     	putDataSetMap(dto, list);
    }
    

	
}