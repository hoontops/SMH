package smh.pcm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM05300ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05300ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.10
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 10.   방성혁     최초  생성
*/
@Service
public class PCM05300ServiceImpl extends AbstractNbdfService implements PCM05300Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05300Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  LOT별 이상발생 현황 조회
     * @remark 
     * @see smh.pcm.service.PCM05300Service#selectAbnormalOccurenceList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAbnormalOccurenceList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAbnormalOccurenceList", param));
    } 
    
}