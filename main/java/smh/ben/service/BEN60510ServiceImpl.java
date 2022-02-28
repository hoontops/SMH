package smh.ben.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file         : BEN60510ServiceImpl.java
* @Package      : smh.ben.service  
* @Project name : SM상선 myHR 고도화
* @Type name    : BEN60510ServiceImpl    
* @Company      : Built1
* @Create Date  : 2022 2022. 1. 27. 오후 1:49:34 
* @Author       : Administrator
* @File Version : v1.0 
*
* << 개정이력(Modification Information) >>
* 수정일             수정자             수정내용
* ------------     ------------     ------------
* 2022. 1. 27.       Administrator      최초생성
*/
@Service
public class BEN60510ServiceImpl extends AbstractNbdfService implements BEN60510Service {

    public static final String NAMESPACE = "smh.ben.dao.BEN60510Dao";

    @Autowired
    private GeneralDao generalDao;

    
    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 조회 버튼 클릭시 호출
    * @see smh.ben.service.BEN60510Service#selectCreditUnionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCreditUnionList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCreditList", param), "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUnionList", param), "output2");
    }    
    
}
