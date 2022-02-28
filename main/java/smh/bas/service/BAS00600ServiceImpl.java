package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS00600ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00600ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 03.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS00600ServiceImpl extends AbstractNbdfService implements BAS00600Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00600Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectStayingTimelist
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectStayingTimelist
    * @remark		: 상세설명
* @see smh.bas.service.BAS00600Service#selectStayingTimelist(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectStayingTimelist(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectStayingTimelist", param));
    }
    
    /**
    * @fn 			: saveStayingTime
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveStayingTime
    * @remark		: 상세설명
* @see smh.bas.service.BAS00600Service#saveStayingTime(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveStayingTime(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");	        
        Map<String, Object> param;
        
        int result = 0;
       
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);      
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateStayingTime", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {            	
				result += generalDao.addUpdate(NAMESAPCE + ".deleteStayingTime", param);
            }            
        }    
        putDataSetMap(dto, result);
    }
}