package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: QAM03100ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03100ServiceImpl
* @Company: Built1
* @Create Date: 2021.06.02
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.02.       권혜영     최초  생성
*/
@Service
public class QAM03100ServiceImpl extends AbstractNbdfService implements QAM03100Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM03100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 수축율 측정기준 조회
     * @remark 
     * @see smh.qam.service.QAM03100Service#selectQamShrinkproductList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamShrinkproductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamShrinkproductList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 공정선택 팝업
     * @remark 
     * @see smh.qam.service.QAM03100Service#selectQamProcesssegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamProcesssegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamProcesssegmentList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 수축율관리 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.QAM03100Service#saveQamShrinkproduct(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamShrinkproduct(UiMapDto dto) throws Exception {
        DataSetMap shrinkproductMap = getParametersDataSetMap(dto, "ds_qamShrinkproduct"); //품목리스트
        DataSetMap shrinkproductoperationMap = getParametersDataSetMap(dto, "ds_qamShrinkproductoperation"); //공정별기준값
        Map<String, Object> param;

        int result = 0;        
        for (int i = 0, n = shrinkproductMap.size(); i < n; i++) {
            param = shrinkproductMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertQamShrinkproduct", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateQamShrinkproduct", param);
            }
        }
                
        for (int i = 0, n = shrinkproductoperationMap.size(); i < n; i++) {
            param = shrinkproductoperationMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertQamShrinkproductoperation", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateQamShrinkproductoperation", param);
            } 
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) 수축율관리품목 공정별기준값
     * @remark 
     * @see smh.qam.service.QAM03100Service#selectQamShrinkproductoperationList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectQamShrinkproductoperationList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQamShrinkproductoperationList", param));
    }

    /**
     * @fn
     * @brief (Override method) 수축율 측정기준등록 > 품목리스트 > 초도측정 측정LOT 팝업
     * @remark 
     * @see smh.qam.service.QAM03100Service#selectMeasureMasterLotList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectMeasureMasterLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMeasureMasterLotList", param), "ds_shrinkLotList");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectShrinkFirstLotList", param), "ds_firstShrinkLotList");
    }
    
    /**
     * @fn
     * @brief (Override method) 수축율 측정기준등록 > 품목리스트 > 초도측정 측정LOT 저장
     * @remark
     * @see smh.bas.service.QAM03100Service#saveQamShrinkFirstLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveQamShrinkFirstLot(UiMapDto dto) throws Exception {
        DataSetMap shrinkLotMap = getParametersDataSetMap(dto, "ds_firstShrinkLotList"); //수축율관리_초도측정LOT정보
        Map<String, Object> param;
        int result = 0;        
        
        /*수축율관리_초도측정LOT정보 생성*/          
        for (int i = 0, n = shrinkLotMap.size(); i < n; i++) {
            param = shrinkLotMap.get(i);
            int type = getRowType(param);
            	
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertQamShrinkFirstLot", param);
            }else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".deleteQamShrinkFirstLot", param);
            }
        }
        
        putDataSetMap(dto, result);
    }
        
}