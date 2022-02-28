package smh.mtm.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MTM00400ServiceImpl extends AbstractNbdfService implements MTM00400Service {
	

    public static final String NAMESAPCE = "smh.mtm.dao.MTM00400Dao";

    @Autowired
    private GeneralDao generalDao;

    
    /**
     * @fn 			: selectItemMasterPopupList
     * @brief 		: 품목 팝업
     * @Method Name : selectConsumableLotStatisticsList
     * @remark		: 품목 팝업
     * @see smh.mtm.service.MTM00400Service#selectConsumableLotStatisticsList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectItemMasterPopupList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemMasterPopupList", param));
    	
       
    }
    
    /**
     * @fn 			: selectConsumableLotStatisticsList
     * @brief 		: 자재 현황 조회 main List조회
     * @Method Name : selectConsumableLotStatisticsList
     * @remark		: 메인조회  List 반환
     * @see smh.mtm.service.MTM00400Service#selectConsumableLotStatisticsList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConsumableLotStatisticsList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	int result = generalDao.addInsert(NAMESAPCE + ".execPeriodQtySetVal", param);
    	
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumableLotStatisticsList", param));
    	
       
    }
    
    
    /**
     * @fn 			: selectConsumablelotStatisticsDetailInfoList
     * @brief 		: 자재 현황 조회 detail List조회
     * @Method Name : selectConsumablelotStatisticsDetailInfoList
     * @remark		: 메인 상세조회  List 반환
     * @see smh.mtm.service.MTM00400Service#selectConsumableLotStatisticsList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConsumablelotStatisticsDetailInfoList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	putDataSetMap(dto, 	generalDao.addSelect(NAMESAPCE + ".selectConsumablelotStatisticsDetailInfoList",  param), "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumablelotStatisticsReceiptInfoList" , param)	, "output2");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConsumablelotStatisticsConsumedInfoList" , param)	, "output3");    	
    	
       
    }

    
}