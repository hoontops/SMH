package smh.pcm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: PCM05900ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05900ServiceImpl
* @Company: Built1
* @Create Date: 2021.5.17
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 17.   박대호     최초  생성
*/
@Service
public class PCM05900ServiceImpl extends AbstractNbdfService implements PCM05900Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05900Dao";
	
	
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief :  재공현황 조회  
     * @remark 
     * @see smh.pcm.service.PCM05900Service#selectprogressperproduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectprogressperproduct(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE + ".selectprogressperproductSearchList", param);
                
        String[] columnsSelect = new String[SearchList.size()]; 
		String[] columns = new String[SearchList.size()];		
		
		
    	for (int i = 0; i < SearchList.size();  i++) {
//    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_SELECT").toString();
//    		columns[i] = "'" + SearchList.get(i).get("COLUMNS").toString() + "'";
    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_PROCESSSEGMENTID").toString();
    		columns[i] = "'" + SearchList.get(i).get("PROCESSSEGMENTID").toString() + "'";
    		 	
		}
    	param.put("COLUMNS_SELECT", String.join(",", columnsSelect));    	
    	param.put("COLUMNS", String.join(",", columns));
    	
    	List<Map<String, Object>> mainList = generalDao.addSelect(NAMESAPCE + ".selectprogressperproduct", param);
    	
    	putDataSetMap(dto, SearchList, "output1");    	
    	putDataSetMap(dto, mainList, "output2");
    } 
    /**
     * @fn
     * @brief :  재공현황 하단그리드 조회  
     * @remark 
     * @see smh.pcm.service.PCM05900Service#selectProgressPerProductWipList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProgressPerProductWipList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProgressPerProductWipList", param));
    } 
    /**
     * @fn
     * @brief :  실적현황 조회  
     * @remark 
     * @see smh.pcm.service.PCM05900Service#selectProgressPerProductResultList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProgressPerProductResultList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProgressPerProductResultList", param));
    } 
    
    
}