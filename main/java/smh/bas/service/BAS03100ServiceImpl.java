package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: BAS00100ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00100ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   진성하     최초  생성
*/
@Service
public class BAS03100ServiceImpl extends AbstractNbdfService implements BAS03100Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03100Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 품목리스트
     * @remark 
     * @see smh.bas.service.BAS03100Service#selectRoutionRollLossList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRoutionRollLossList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("=====================  selectRoutionRollLossList 호출 ====== ");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRoutionRollLossList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 공정별 로스
     * @remark 
     * @see smh.bas.service.BAS03100Service#selectBasEnterpriseList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRolllossOperationList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRolllossOperationList", param));
    }



    /**
     * @fn
     * @brief (Override method) RolllossOperation 등록 수정
     * @remark - olllossOperation 등록 수정
     * @see smh.bas.service.BAS03100Service#saveRolllossOperation(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveRolllossOperation(UiMapDto dto) throws Exception {
    	DataSetMap paramMapRollLoss          = getParametersDataSetMap(dto,"ds_rollLoss");
    	DataSetMap paramMapRollLossOperation = getParametersDataSetMap(dto,"ds_rolllossOperation");
    	
    	Map<String, Object> paramRollLoss = new HashMap<String, Object>();
		Map<String, Object> paramRollLossOperation = new HashMap<String, Object>();

        int result = 0;
        for (int i = 0, n = paramMapRollLoss.size(); i < n; i++) {
        	paramRollLoss = paramMapRollLoss.get(i);
        	paramRollLoss.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
       
        	result += generalDao.addUpdate(NAMESAPCE + ".saveRollloss", paramRollLoss);
        }
        
        for (int i = 0, n = paramMapRollLossOperation.size(); i < n; i++) {
        	paramRollLossOperation = paramMapRollLossOperation.get(i);
        	
        	paramRollLossOperation.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
            result += generalDao.addUpdate(NAMESAPCE + ".saveRolllossOperation", paramRollLossOperation);

        }
        
        putDataSetMap(dto, result);
    }
 

}