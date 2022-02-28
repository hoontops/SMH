package smh.osm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: OSM00400ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00400ServiceImpl
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
public class OSM00400ServiceImpl extends AbstractNbdfService implements OSM00400Service {

    public static final String NAMESAPCE = "smh.osm.dao.OSM00400Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) Claim 대상 감면 관리  수정, 등록, 삭제 기능
     * @remark - Claim 대상 감면 관리 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.osm.service.OSM00400Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveOsmOspclaim(UiMapDto dto) throws Exception {
    	int result = 0;
    	String strTempperiodid = "";
    	String strperiodid = "";
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("1".equals(param.get("CHK"))) {
        		Map<String, Object> param2 = new HashMap<String, Object>();
        		param2.put("PLANTID", param.get("PLANTID"));
        		strperiodid = (String) param.get("PERIODID");
        		param2.put("PERIODID", param.get("PERIODID"));
        		
        		//****************************************************************************************************
                // (21.06.24) 마감년월 있는 경우 수정 불가
                if(strperiodid != null)
                {	
                    Map<String,Object> map3 = generalDao.addSelectOneMap(NAMESAPCE+".selectPeriodTypeCheck", param2);
                	if(map3 != null && "Close".equals(map3.get("PERIODSTATE")))		
                		throw new BizException("InValidOspData014");	
                }
               //****************************************************************************************************
        		
        		
            	if (!(strTempperiodid.equals(strperiodid))) {
	        		Map<String, Object> map = generalDao.addSelectOneMap(NAMESAPCE+".GetCheckPeriodCloseOsp",param2);
	            	if(map != null && "Close".equals(map.get("PERIODSTATE")))
	            		throw new BizException("InValidOspData012");
            	}
            	strTempperiodid = strperiodid;
            }
        }	
        
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("1".equals(param.get("CHK"))) {
               	if("LOTCLAIMDEFECT".equals(param.get("WORKGUBUN"))) {
               		Map<String, Object> map = generalDao.addSelectOneMap(NAMESAPCE+".selectOsmOspclaim",param);
               		param.put("VALIDSTATE", "Valid");
       				if(map==null) {
       					result += generalDao.addInsert(NAMESAPCE+".insertOsmOspclaim",param);
       				}else {
       					result += generalDao.addInsert(NAMESAPCE+".updateOsmOspclaim",param);
       				}
               	}
            }
        }	        
        putDataSetMap(dto, result);
    }
        
    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00400Service#selectOsmOspclaimList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOsmOspclaimList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimConfirmation", param));;
    }

    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00400Service#selectGetFactoryListByCsm(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetFactoryListByCsm(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetFactoryListByCsm", param));;
    }    
}