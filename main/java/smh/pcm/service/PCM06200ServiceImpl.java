package smh.pcm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM06200ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06200ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.20
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 20.   박대호     최초  생성
*/
@Service
public class PCM06200ServiceImpl extends AbstractNbdfService implements PCM06200Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06200Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  일별 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM06200Service#selectWorkIncommingResultByDate(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkIncommingResultByDate(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkIncommingResultByDate", param));
    } 
    /**
     * @fn
     * @brief :  품목 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM06200Service#selectWorkIncommingResultByProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkIncommingResultByProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkIncommingResultByProduct", param));
    } 
    /**
     * @fn
     * @brief :  LOT 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM06200Service#selectWorkIncommingResultByLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkIncommingResultByLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkIncommingResultByLot", param));
    } 

}