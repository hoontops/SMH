package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM05000ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05000ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 1.   박대호     최초  생성
*/
@Service
public class PCM05000ServiceImpl extends AbstractNbdfService implements PCM05000Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05000Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  품목팝업 조회 
     * @remark 
     * @see smh.pcm.service.PCM05000Service#selectPopupList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPopupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPopupList", param));
    } 
    /**
     * @fn
     * @brief :  재공현황 조회 
     * @remark 
     * @see smh.pcm.service.PCM05000Service#selectWipListByProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWipListByProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWipListByProduct", param));
    } 
    
    
}