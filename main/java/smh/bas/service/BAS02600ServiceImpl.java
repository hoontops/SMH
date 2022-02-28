package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02600ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02600ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.07
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 07.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS02600ServiceImpl extends AbstractNbdfService implements BAS02600Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02600Dao";    

    @Autowired
    private GeneralDao generalDao;

 
    /**
    * @fn 			: selectItemHistoryList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectItemHistoryList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectItemHistoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemHistoryList", param));
    }
    
}