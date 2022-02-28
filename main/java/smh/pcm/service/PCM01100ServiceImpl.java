package smh.pcm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM01100ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01100ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.26
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 26.   박대호     최초  생성
*/
@Service
public class PCM01100ServiceImpl extends AbstractNbdfService implements PCM01100Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM01100Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  계획대비 투입 실적 조회 
     * @remark 
     * @see smh.pcm.service.PCM01100Service#selectInputLotRecordPerPlanChartResult(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectInputLotRecordPerPlanChartResult(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        //차트조회
        
        List<Map<String, Object>> planList = generalDao.addSelect(NAMESAPCE + ".selectInputLotRecordPerPlanChartPlan", param);
        List<Map<String, Object>> resultList = generalDao.addSelect(NAMESAPCE + ".selectInputLotRecordPerPlanChartResult", param);
        List<Map<String, Object>> planResultList = new ArrayList<Map<String, Object>>();
        for (int i = 0; i < planList.size();  i++) {
        	Map<String, Object> planMap = planList.get(i);
        	Map<String, Object> resultMap = resultList.get(i);
        	planMap.put("INPUTQTY",resultMap.get("INPUTQTY"));
        	planResultList.add(planMap);
        }
        
        putDataSetMap(dto, planResultList, "output1");
        
        //목록조회
        List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE + ".selectinputlotrecordperplangridSearchList", param);
		String[] columnsSelect = new String[SearchList.size()]; 
		String[] columns = new String[SearchList.size()];
		String[] OrderBycolumns = new String[SearchList.size()];
		
		
    	for (int i = 0; i < SearchList.size();  i++) {
    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_SELECT").toString();
    		columns[i] = "'" + SearchList.get(i).get("COLUMNS").toString() + "'";
    		OrderBycolumns[i] = SearchList.get(i).get("COLUMNS").toString();    		
		}
    	param.put("COLUMNS_SELECT", String.join(",", columnsSelect));    	
    	param.put("COLUMNS", String.join(",", columns));
    	param.put("ORDERBY_COLUMNS", String.join(",", OrderBycolumns));    	
    	
    	List<Map<String, Object>> plangridList = generalDao.addSelect(NAMESAPCE + ".selectinputlotrecordperplangridList", param);
    	
    	putDataSetMap(dto, SearchList, "output2");    	
    	putDataSetMap(dto, plangridList, "output3");
    } 
   
    
    /**
     * @fn
     * @brief : 계획대비 투입 실적 디테일 조회 
     * @remark 
     * @see smh.pcm.service.PCM01100Service#selectinputlotrecordperplangridDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectinputlotrecordperplangridDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectinputlotrecordperplangridDetail", param));
    }
}