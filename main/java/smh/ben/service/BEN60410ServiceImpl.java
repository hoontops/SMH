package smh.ben.service;

import java.util.ArrayList;
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
public class BEN60410ServiceImpl extends AbstractNbdfService implements BEN60410Service {

    public static final String NAMESPACE = "smh.ben.dao.BEN60410Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사전리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdMessageList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void adjLifeExpenseList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".adjLifeExpenseList",param);
        
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");

        putDataSetMap(dto, list);
    }
    
    
    public void adjLifeExpenseDetail(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".adjLifeExpenseDetail",param);
    	
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");
    	
    	putDataSetMap(dto, list);
    }
    
    public void selectEmpList(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectEmpList",param);
    	
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");
    	
    	putDataSetMap(dto, list);
    }
    
    public void adjLifeCheckList(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".adjLifeCheckList",param);
    	
//        System.out.println("=============gonList=============");
//        System.out.println(list);
//        System.out.println("==========================");
    	
    	putDataSetMap(dto, list);
    }
    
    
    public void deleteAdjLife(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        System.out.println(" ===========================dsMap================================ : ");
        System.out.println(dsMap.get(0));
        System.out.println(" =======================================================");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            System.out.println("type : " + type);
            System.out.println(" =======================================================");
//            if (type == DataSet.ROW_TYPE_INSERTED) {
//                generalDao.addInsert(NAMESPACE+".insertCmdMessage",param);
//            } else if (type == DataSet.ROW_TYPE_UPDATED) {
//                generalDao.addInsert(NAMESPACE+".updateCmdMessage",param);
            if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteAdjLife",param);
            }
        }
   
        putDataSetMap(dto, result);
    }
    
    
    
    public void insertAdjLife(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        System.out.println(" =========================== insertGon ================================ : ");
        System.out.println(dsMap.get(0));
        System.out.println(" =======================================================");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            System.out.println("type : " + type);
            System.out.println(" =======================================================");
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	System.out.println(" ===========================INSERT !!!!! ============================");
                generalDao.addInsert(NAMESPACE+".insertAdjLife",param);
            } 
            
            else if (type == DataSet.ROW_TYPE_UPDATED) {
            	System.out.println(" ===========================UPDATE !!!!! ============================");
            	generalDao.addInsert(NAMESPACE+".updateAdjLife",param);
//            if (type == DataSet.ROW_TYPE_DELETED) {
//                generalDao.addUpdate(NAMESPACE+".deleteGon",param);
            }
        }
   
        putDataSetMap(dto, result);
    }
    
    
}
