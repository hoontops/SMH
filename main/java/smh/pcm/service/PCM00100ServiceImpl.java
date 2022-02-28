package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: PCM00100ServiceImpl.java
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
public class PCM00100ServiceImpl extends AbstractNbdfService implements PCM00100Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM00100Dao";
    @Autowired
    private GeneralDao generalDao;
    @Autowired
    private PCMWipService  wipService;

    /**
     * @fn
     * @brief (Override method) S/O List
     * @remark 
     * @see smh.pcm.service.PCM00100Service#selectSalesOrderList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSalesOrderList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSalesOrderList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 수주배분 리스트
     * @remark 
     * @see smh.pcm.service.PCM00100Service#selectSalesOrderDo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSalesOrderDo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSalesOrderDo", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 제품 내부Rev 조회
     * @remark 
     * @see smh.pcm.service.PCM00100Service#selectProductVersionList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProductVersionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductVersionList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) saveSalesOrderDo  
     * @remark - 수주배분등록 수정 삭제
     * @see smh.bas.service.PCM00100Service#saveSalesOrderDo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveSalesOrderDo(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;
        
        
        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
          //  System.out.println("param = " + param);
            param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
            
            int LotCnt = generalDao.addSelectCount(NAMESAPCE + ".selectSalesOrderCnt", param);
            
            if(LotCnt > 0)
            {
            	throw new BizException("LOTCREATEDCANNOT", String.format("SalesOrderId = %s  LineNo = %s", param.get("SALESORDERID"), param.get("LINENO")));
            }
           
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertSalesOrderDo", param);
            	result += generalDao.addUpdate(NAMESAPCE + ".updateSalesOrder", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateSalesOrderDo", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += generalDao.addDelete(NAMESAPCE + ".deleteSalesOrderDo", param);
            	result += generalDao.addDelete(NAMESAPCE + ".deleteMfmProductionOrder", param);
            	result += generalDao.addUpdate(NAMESAPCE + ".updateSalesOrder", param);
            }
            
            
        }
        
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) 수주배분리스트
     * @remark 
     * @see smh.pcm.service.PCM00100Service#SelectSalesOrderApproval(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSalesOrderApproval(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSalesOrderApproval", param));
    }    
}