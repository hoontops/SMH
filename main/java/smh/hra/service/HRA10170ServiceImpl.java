package smh.hra.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class HRA10170ServiceImpl extends AbstractNbdfService implements HRA10170Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA10170Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //신상정보 Base Infomation
    public void selectDeptList(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectDeptList",param);
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
    	System.out.println(list);
    	System.out.println("========================");

        putDataSetMap(dto, list);
    }
    
    //신상정보 Base Infomation
    public void selectDeptMemnberList(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectDeptMemnberList",param);
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println("==========list==============");
    	System.out.println(list);
    	System.out.println("========================");
    	
    	putDataSetMap(dto, list);
    }
    
    
}
