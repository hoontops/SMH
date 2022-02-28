package smh.osm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: OSM00200ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00200ServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class OSM00200ServiceImpl extends AbstractNbdfService implements OSM00200Service {

    public static final String NAMESAPCE = "smh.osm.dao.OSM00200Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) Claim 기타비용 등록  수정, 등록, 삭제 기능
     * @remark - Claim 기타비용 등록 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.osm.service.OSM00200Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveOsmOspetcclaimamount(UiMapDto dto) throws Exception {
    	int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        
        
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            param.put("VALIDSTATE", "Valid");
            int type = getRowType(param);
            //****************************************************************************************************
            // (21.07.01) - 마감년월 정보 있는제 확인, 마감되었는지 확인
            List<Map<String, Object>> listPeriodChk = generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimPeriodChk", param);
        	if(listPeriodChk.size()==0) {
        		throw new BizException("InValidOspData024");		// Claim 비용 마감에서 먼저 마감월 등록을 해주시기 바랍니다.
        	}
        	
        	for (int c = 0, nc = listPeriodChk.size(); c < nc; c++) {
                Map<String, Object> paramChk = listPeriodChk.get(c);
                if(paramChk != null && "Close".equals(paramChk.get("PERIODSTATE")))		
            		throw new BizException("InValidOspData025");	//해당월은 마감되어 등록할 수 없습니다. 다시 확인하시기 바랍니다.
        	}
            
            //****************************************************************************************************
            
            //****************************************************************************************************
            // (21.06.24) 마감년월 있는 경우 수정 불가 
            String periodId = (String)param.get("PERIODID");
            if(periodId != null)
            {	
                Map<String,Object> map = generalDao.addSelectOneMap(NAMESAPCE+".selectPeriodTypeCheck", param);
            	if(map != null && "Close".equals(map.get("PERIODSTATE")))		
            		throw new BizException("InValidOspData014");	
            }
           //****************************************************************************************************
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addInsert(NAMESAPCE+".insertOsmOspetcclaimamount",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	//2021-06-17 수정시에도 마감인경우 수정불가처리
            	Map<String,Object> map = generalDao.addSelectOneMap(NAMESAPCE+".selectOsmOspetcclaimamount", param);
            	if(map.get("PERIODID") != null && !"".equals(map.get("PERIODID")))
            		throw new BizException("InValidOspData014");
            	
            	
            	result += generalDao.addInsert(NAMESAPCE+".updateOsmOspetcclaimamount",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	Map<String,Object> map = generalDao.addSelectOneMap(NAMESAPCE+".selectOsmOspetcclaimamount", param);
            	if(map.get("PERIODID") != null && !"".equals(map.get("PERIODID")))
            		throw new BizException("InValidOspData014");
            	
                result += generalDao.addUpdate(NAMESAPCE+".deleteOsmOspetcclaimamount",param);
            }
        }	
        putDataSetMap(dto, result);
    }
        
    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00200Service#selectOsmOspetcclaimamountList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOsmOspetcclaimamountList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOtherOutsourcedClaimCostRegistration", param));;
    }

    /**
     * @fn
     * @brief (Override method) 작업장 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00200Service#selectGetAreaidPopupListByOsp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetAreaidPopupListByOsp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetAreaidPopupListByOsp", param));;
    }

    /**
     * @fn
     * @brief (Override method) 협력사 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00200Service#selectGetVendorListByOsp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetVendorListByOsp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetVendorListByOsp", param));;
    }    
}