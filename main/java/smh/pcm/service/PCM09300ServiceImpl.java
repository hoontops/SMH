package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
 * @file		: PCM09300ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09300ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.3.18
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 18.  김진현      최초  생성 
 */
@Service
public class PCM09300ServiceImpl extends AbstractNbdfService implements PCM09300Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM09300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 자재품목ID선택 조회
     * @remark 
     * @see smh.pcm.service.PCM09300Service#selectConsumableDefList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectConsumableDefList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableDefList", param));
    }
  	
  	 /**
     * @fn
     * @brief 자재 사용 이력 list 조회
     * @remark 
     * @see smh.pcm.service.PCM09300Service#selectConsumableLotHistoryList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectConsumableLotHistoryList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableLotHistoryList", param));
    }
  	
  
  	
}