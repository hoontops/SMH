package smh.pay.service;

import java.util.List;
import java.util.Map;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @fn : selectPayAttendanceStatusList
* @brief : 팀원근태현황 리스트 조회
* @Method Name : selectPayAttendanceStatusList
* @remark
* @Create Date: 2022. 01. 20
* @Author: 유성연
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일       수정자    수정내용
 *   ------------   ------    ----------
 *    2022.01.20.   유성연    최초 생성
 *
*/

@Service
public class PAY40240ServiceImpl extends AbstractNbdfService implements PAY40240Service {

    public static final String NAMESPACE = "smh.pay.dao.PAY40240Dao";
    @Autowired
    private GeneralDao generalDao;


    public void selectPayAttendanceStatusList(UiMapDto dto) {
        
    	Map<String, Object> param = getParametersMap(dto);
        //System.out.println("param.entrySet() : " + param.entrySet());
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectPayAttendanceStatusList",param);

        putDataSetMap(dto, list);
    }
}
