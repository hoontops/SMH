package smh.pay.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSY03100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY03100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 9.    진성하     최초  생성
 *
*/

@Service
public class PAY50220ServiceImpl extends AbstractNbdfService implements PAY50220Service {

    public static final String NAMESPACE = "smh.pay.dao.PAY50220Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사전리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdMessageList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectDetailData(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("==============================");
        System.out.println(param);
        System.out.println("==============================");
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectDetailData",param);

        putDataSetMap(dto, list);
    }
    
    
    public void selectDetailInAndDed(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectDetailIn",param);
    	
    	System.out.println("==============selectDetailIn================");
    	System.out.println(list);
    	System.out.println("==============================");
    	
    	putDataSetMap(dto, list);
    	
    }
    
    
    public void selectDetailDed(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectDetailDed",param);
    	
    	System.out.println("=============selectDetaiDed=================");
    	System.out.println(list);
    	System.out.println("==============================");
    	putDataSetMap(dto, list);
    	
    }
    
    
    public void selectBasicInfo(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectBasicInfo",param);
    	
    	System.out.println("=============selectBasicInfo=================");
    	System.out.println(list);
    	System.out.println("==============================");
    	putDataSetMap(dto, list);
    	
    }
    
}
