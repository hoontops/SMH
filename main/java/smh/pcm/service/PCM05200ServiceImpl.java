package smh.pcm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: PCM05200ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05200ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.19
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 19.   박대호     최초  생성
*/
@Service
public class PCM05200ServiceImpl extends AbstractNbdfService implements PCM05200Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM05200Dao";
    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief :  중공정 콤보 조회
     * @remark 
     * @see smh.pcm.service.PCM05200Service#selectProcessSegmentClassByType(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessSegmentClassByType(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentClassByType", param));
    } 
    /**
     * @fn
     * @brief :  공정 탭 조회
     * @remark 
     * @see smh.pcm.service.PCM05200Service#selectStockbyprocessList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectStockbyprocessList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE + ".selectStockbyprocessSearchList", param);    	
		String[] columnsSelect = new String[SearchList.size()]; 
		String[] columns = new String[SearchList.size() + 1];
		String[] OrderBycolumns = new String[SearchList.size()];
		
    	for (int i = 0; i < SearchList.size();  i++) {
    		
    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_SELECT").toString();
    		columns[i] = "'" + SearchList.get(i).get("COLUMNS").toString() + "'";
    		OrderBycolumns[i] = SearchList.get(i).get("COLUMNS").toString();    		
		}
    	
    	columns[SearchList.size()] = "'TOTAL'";
//    	OrderBycolumns[SearchList.size()] = "TOTAL";        
    	param.put("COLUMNS_SELECT", String.join(",", columnsSelect));
    	param.put("COLUMNS", String.join(",", columns));
    	param.put("ORDERBY_COLUMNS", String.join(",", OrderBycolumns));
    	
    	List<Map<String, Object>> StockbyprocessList = generalDao.addSelect(NAMESAPCE + ".selectStockbyprocessList", param);
    	
    	putDataSetMap(dto, SearchList, "output1");    	
    	putDataSetMap(dto, StockbyprocessList, "output2");
    } 
    /**
     * @fn
     * @brief :  품목 탭 조회
     * @remark 
     * @see smh.pcm.service.PCM05200Service#selectStockbyProductList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectStockbyProductList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> SearchList = generalDao.addSelect(NAMESAPCE + ".selectStockbyprocessSearchList", param);    	
		String[] columnsSelect = new String[SearchList.size()]; 
		String[] columns = new String[SearchList.size() + 1];
		String[] OrderBycolumns = new String[SearchList.size()];
		String[] columnsGroup = new String[SearchList.size()];
    	for (int i = 0; i < SearchList.size();  i++) {
    		
    		columnsSelect[i] = SearchList.get(i).get("COLUMNS_SELECT").toString();
    		columns[i] = "'" + SearchList.get(i).get("COLUMNS").toString() + "'";
    		OrderBycolumns[i] = SearchList.get(i).get("COLUMNS").toString();    	
    		columnsGroup[i] = SearchList.get(i).get("COLUMNS_GROUP").toString();
		}
    	
    	columns[SearchList.size()] = "'TOTAL'";
//    	OrderBycolumns[SearchList.size()] = "TOTAL";        
    	param.put("COLUMNS_SELECT", String.join(",", columnsSelect));
    	param.put("COLUMNS", String.join(",", columns));
    	param.put("ORDERBY_COLUMNS", String.join(",", OrderBycolumns));
    	param.put("COLUMNS_GROUP", String.join(",", columnsGroup));
    	
    	List<Map<String, Object>> StockbyProductListList = generalDao.addSelect(NAMESAPCE + ".selectStockbyProductList", param);
    	
    	putDataSetMap(dto, SearchList, "output1");    	
    	putDataSetMap(dto, StockbyProductListList, "output2");
    } 
    
}