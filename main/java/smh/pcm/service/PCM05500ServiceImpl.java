package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM05500ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05500ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.10
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 10.   박대호     최초  생성
*/
@Service
public class PCM05500ServiceImpl extends AbstractNbdfService implements PCM05500Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05500Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  품목탭 조회  
     * @remark 
     * @see smh.pcm.service.PCM05500Service#selectWipAgingList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWipAgingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWipAgingList", param));
    } 
        
}