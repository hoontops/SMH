package smh.mfm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

@Service
public class MFMCommonServiceImpl extends AbstractNbdfService implements MFMCommonService {
    public static final String NAMESAPCE = "smh.mfm.dao.MFM00001Dao";

    @Autowired
    private GeneralDao generalDao;
    
    public void selectMfmCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    public void selectDayDulationList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDayDulationList", param));
    } 
    
    public void selectItemGroupName(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemGroupName", param));
    } 
    
	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}