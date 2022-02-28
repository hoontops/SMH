package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;


/**
* @file			: BAS00700ServiceImpl.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS00700ServiceImpl    
* @Company		: Built1
* @Create Date	: 2021. 2. 8. 오전 11:26:13 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 8.       sungmin.choe      최초  생성
 *
*/
@Service
public class BAS00700ServiceImpl extends AbstractNbdfService implements BAS00700Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00700Dao";

    @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 			: selectBasMasterdataclassList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectBasMasterdataclassList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00700Service#selectBasMasterdataclassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectBasMasterdataclassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasMasterdataclassList", param));
    }


    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 1. [조회] 버튼 클릭시 호출
* @see smh.bas.service.BAS00700Service#saveBasMasterdataclass(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveBasMasterdataclass(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertBasMasterdataclass", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateBasMasterdataclass", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteBasMasterdataclass", param);
            }
        }
        
        putDataSetMap(dto, result);
    }

}