package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS00300ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00300ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 23.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS00300ServiceImpl extends AbstractNbdfService implements BAS00300Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectUomClassList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomClassList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00300Service#selectUomClassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUomClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUomClassList", param));
    }

    /**
    * @fn 			: selectUomList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00300Service#selectUomList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUomList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUomList", param));
    }
    
    /**
    * @fn 			: selectUomMapDataList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomMapList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00300Service#selectUomMapDataList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUomMapDataList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUomMapDataList", param));
    }

    /**
    * @fn 			: selectUomMapList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomMapList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00300Service#selectUomMapList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUomMapList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUomMapList", param));
    }
    
    /**
    * @fn 			: selectUomDetailList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectUomDetailList
    * @remark		: 상세설명
* @see smh.bas.service.BAS00300Service#selectUomDetailList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUomDetailList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUomDetailList", param));
    }
    
    @Override
    public void saveUomList(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            if (type == DataSet.ROW_TYPE_INSERTED) {            	
            	result += generalDao.addUpdate(NAMESAPCE + ".insertUom", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteUom", param);
            }
        }
        putDataSetMap(dto, result);
    }
}