package smh.apr.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: APR20110ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20110ServiceImpl
* @Company: Built1
* @Create Date: 2022.1.21
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 21.   박대호     최초  생성
*/
@Service 
public class APR20110ServiceImpl extends AbstractNbdfService implements APR20110Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR20110Dao";
    public static final String NAMESAPCE1 = "smh.apr.dao.APR10110Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 업적평가-목표리뷰 리스트조회
     * @remark 
     * @see smh.apr.service.APR20110ServiceImpl#selectAppraisalTargetReviewList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAppraisalTargetReviewList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAppraisalTargetReviewList", param));
    }
    /**
     * @fn
     * @brief (Override method) 업적평가-목표리뷰 수정
     * @remark 
     * @see smh.apr.service.APR20110ServiceImpl#updateAprComment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void updateAprComment(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        int result = 0;
    	result += generalDao.addUpdate(NAMESAPCE1 + ".updateAppraisalMaster", param);
    	result += generalDao.addUpdate(NAMESAPCE + ".updateAprComment", param);
        putDataSetMap(dto, result);
    }
    
    
}