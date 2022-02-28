package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM01300ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01300ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.24
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.   박대호     최초  생성
*/
@Service
public class PCM01300ServiceImpl extends AbstractNbdfService implements PCM01300Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM01300Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  투입일 탭 투입율현황 조회 
     * @remark 
     * @see smh.pcm.service.PCM01300Service#selectInputLotRateByInputDate(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputLotRateByInputDate(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputLotRateByInputDate", param));
    } 
    
    /**
     * @fn
     * @brief :  투입일 탭 SUMMARY 조회 
     * @remark 
     * @see smh.pcm.service.PCM01300Service#selectInputLotRateByInputDateSummaryByLotInputType(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputLotRateByInputDateSummaryByLotInputType(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputLotRateByInputDateSummaryByLotInputType", param));
    } 
    /**
     * @fn
     * @brief :  투입일탭 일자별상세내역 조회 
     * @remark 
     * @see smh.pcm.service.PCM01300Service#selectInputLotRateByInputDateSummaryByProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputLotRateByInputDateSummaryByProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputLotRateByInputDateSummaryByProduct", param));
    } 
    /**
     * @fn
     * @brief :  모델별탭  조회 
     * @remark 
     * @see smh.pcm.service.PCM01300Service#selectInputLotRateByProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputLotRateByProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputLotRateByProduct", param));
    } 
    /**
     * @fn
     * @brief :  고객사별탭  조회 
     * @remark 
     * @see smh.pcm.service.PCM01300Service#selectInputLotRateByCustomer(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputLotRateByCustomer(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputLotRateByCustomer", param));
    } 
    
}