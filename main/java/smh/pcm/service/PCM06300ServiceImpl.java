package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM06300ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06300ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.14
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 14.   박대호     최초  생성
*/
@Service
public class PCM06300ServiceImpl extends AbstractNbdfService implements PCM06300Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06300Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  보류현황 조회  
     * @remark 
     * @see smh.pcm.service.PCM06300Service#selectLotHoldResult(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotHoldResult(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotHoldResult", param));
    } 
    
    
}