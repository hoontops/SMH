package smh.pcm.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: PCM00800ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00800ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class PCM00800ServiceImpl extends AbstractNbdfService implements PCM00800Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM00800Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief : 제품 버전 콤보 데이타 조회
     * @remark 
     * @see smh.pcm.service.PCM00800Service#selectProductVersion(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductVersion(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductVersion", param));
    }
    
    /**
     * @fn
     * @brief :  투입 실적 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM00800Service#selectInputResultByInputDay(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputResultByInputDay(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputResultByInputDay", param));
    }
    
    
    /**
     * @fn
     * @brief :  품목별 투입 실적 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM00800Service#selectInputResultbyProduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputResultbyProduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputResultbyProduct", param));
    }
    
    /**
     * @fn
     * @brief :  Lot별 투입 실적 탭 조회 
     * @remark 
     * @see smh.pcm.service.PCM00800Service#selectInputResultByLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputResultByLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectInputResultByLot", param));
    }
    
}