package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: PCM00200ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00200ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class PCM00200ServiceImpl extends AbstractNbdfService implements PCM00200Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM00200Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief : 화폐 콤보 데이타 조회
     * @remark 
     * @see smh.pcm.service.PCM00200Service#selectCurrencies(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCurrencies(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCurrencies", param));
    }
    
    
    /**
     * @fn
     * @brief : 단가 테이블 목로 조회 
     * @remark 
     * @see smh.pcm.service.PCM00200Service#selectUnitPriceList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectUnitPriceList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}

        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUnitPriceList", param));
    }
    
    /**
     * @fn
     * @brief : 단가 테이블 저장
     * @remark 
     * @see smh.pcm.service.PCM00200Service#saveUnitPrice(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveUnitPrice(UiMapDto dto) throws Exception {
    	DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        
        for (int i = 0, n = paramMap.size(); i < n; i++) {
        	param = paramMap.get(i);
        	int type = getRowType(param);
        	//날짜가 겹치지않게 update 되는 애들은 다 지움
        	if (type == DataSet.ROW_TYPE_UPDATED) {
        		result += generalDao.delete(NAMESAPCE + ".deleteBasUnitpriceformes", param);
        	}
        }
        
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            
            int type = getRowType(param);
            
            //기존에 있던 것을 지웠는데도 겹치면 에러를 내야함. 
            if(type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED){
            	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectBasUnitprice", param);
            	
            	if(list != null && list.size() > 0)
        		{
            		java.text.SimpleDateFormat format = new java.text.SimpleDateFormat("yyyy-MM-dd");
            		String startDate = format.format(param.get("APPLY_START_DATE"));  
            		String args = param.get("PRODUCTDEFID").toString() + "," + param.get("PRODUCTDEFVERSION").toString() + "," + startDate ;
            		throw new BizException("DuplicateDate", args);
        		}
            	
            }
            
            param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
            
            if (type == DataSet.ROW_TYPE_INSERTED || type == DataSet.ROW_TYPE_UPDATED) {
            	param.put("UNITPRICEID", UUID.randomUUID().toString().toUpperCase());
            	result += generalDao.insert(NAMESAPCE + ".insertBasUnitpriceformes", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += generalDao.delete(NAMESAPCE + ".deleteBasUnitpriceformes", param);
            }
        }
        
        putDataSetMap(dto, result);
    }

    
}