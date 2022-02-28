package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM06100ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06100ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.30
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.   박대호     최초  생성
*/
@Service
public class PCM06100ServiceImpl extends AbstractNbdfService implements PCM06100Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM06100Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  대공정, 중공정팝업 조회 
     * @remark 
     * @see smh.pcm.service.PCM06100Service#getProcessSegmentClass(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void getProcessSegmentClass(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getProcessSegmentClass", param));
    } 
    
    /**
     * @fn
     * @brief :  작업장별 실적현황 조회(작업장)
     * @remark 
     * @see smh.pcm.service.PCM06100Service#selectWorkResultByareaList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkResultByareaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkResultByareaList", param));
    }
    /**
     * @fn
     * @brief :  작업장별 실적현황 조회(품목)
     * @remark 
     * @see smh.pcm.service.PCM06100Service#selectWorkResultByproductList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkResultByproductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkResultByproductList", param));
    }
    /**
     * @fn
     * @brief :  작업장별 실적현황 조회(LOT)
     * @remark 
     * @see smh.pcm.service.PCM06100Service#selectWorkResultBylotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWorkResultBylotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkResultBylotList", param));
    }
}