package smh.pcm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM01400ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01400ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.27
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 27.   박대호     최초  생성
*/
@Service
public class PCM01400ServiceImpl extends AbstractNbdfService implements PCM01400Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM01400Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  모델 수주 진척현황 조회
     * @remark 
     * @see smh.pcm.service.PCM01400Service#selectSalseOrderStausPerProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSalseOrderStausPerProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSalseOrderStausPerProduct", param));    	
    }     
    
}