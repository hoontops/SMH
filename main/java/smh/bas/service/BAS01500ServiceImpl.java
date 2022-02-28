package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS01500ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01500ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.12
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS01500ServiceImpl extends AbstractNbdfService implements BAS01500Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS01500Dao";    

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectUserList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUserList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserList", param));        
    }


    /**
    * @fn 			: selectAreaList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectAreaList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaList", param));        
    }

    /**
    * @fn 			: saveUserArea
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUserArea
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 12.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void saveUserArea(UiMapDto dto) throws Exception {
    	DataSetMap ds_user	 = getParametersDataSetMap(dto, "ds_user");        
        DataSetMap ds_area 	 = getParametersDataSetMap(dto, "ds_area");
        
        int result = 0;        
        
        Map<String, Object> userParam = new HashMap<>();
        Map<String, Object> areaParam = new HashMap<>();
        
         for (int i = 0, n = ds_user.size(); i < n; i++) {
        	 userParam = ds_user.get(i);            
        	int type = getRowType(userParam);            
            if (type == DataSet.ROW_TYPE_UPDATED) {            	
            	generalDao.addUpdate(NAMESAPCE + ".upsertUser", userParam);
            }
        }
        
        for (int i = 0, n = ds_area.size(); i < n; i++) {
        	areaParam = ds_area.get(i);
        	int type = getRowType(areaParam);            
            if (type == DataSet.ROW_TYPE_INSERTED) {            	
            	generalDao.addUpdate(NAMESAPCE + ".upsertArea", areaParam);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	generalDao.addUpdate(NAMESAPCE + ".deleteArea", areaParam);
            }
        }
        putDataSetMap(dto, result);
    }
    
}