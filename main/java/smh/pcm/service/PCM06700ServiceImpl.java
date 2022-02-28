package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM06700ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06700ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.07
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 07.   박대호     최초  생성
*/
@Service
public class PCM06700ServiceImpl extends AbstractNbdfService implements PCM06700Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06700Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  제조이력 조회
     * @remark 
     * @see smh.pcm.service.PCM06700Service#selectManufactureHistory(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectManufactureHistory(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectManufactureHistory", param));
    } 
   
    
}