package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM05600ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05600ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.13
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 13.   박대호     최초  생성
*/
@Service
public class PCM05600ServiceImpl extends AbstractNbdfService implements PCM05600Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05600Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  중분류 조회  
     * @remark 
     * @see smh.pcm.service.PCM05600Service#selectReasonCodeClassList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectReasonCodeClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReasonCodeClassList", param));
    } 
    /**
     * @fn
     * @brief :  사유 조회  
     * @remark 
     * @see smh.pcm.service.PCM05600Service#selectTypeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTypeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTypeList", param));
    } 
    /**
     * @fn
     * @brief :  Locking 현황 조회
     * @remark 
     * @see smh.pcm.service.PCM05600Service#selectLockingStatus(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLockingStatus(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLockingStatus", param));
    } 
    
}