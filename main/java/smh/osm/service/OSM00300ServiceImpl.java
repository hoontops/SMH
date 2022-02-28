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
* @file: OSM00300ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00300ServiceImpl
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
public class OSM00300ServiceImpl extends AbstractNbdfService implements OSM00300Service {

    public static final String NAMESAPCE = "smh.osm.dao.OSM00300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) Claim 대상 마감월 등록  수정, 등록, 삭제 기능
     * @remark - Claim 대상 마감월 등록 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.osm.service.OSM00300Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveOsmOspclaim(UiMapDto dto) throws Exception {
    	int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            param.put("VALIDSTATE", "Valid");
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addInsert(NAMESAPCE+".insertOsmOspclaim",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addInsert(NAMESAPCE+".updateOsmOspclaim",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE+".deleteOsmOspclaim",param);
            }
        }	
        putDataSetMap(dto, result);
    }
        
    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00300Service#selectOsmOspclaimList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOsmOspclaimList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimPeriodConfirmation", param));;
    }

    /**
     * @fn
     * @brief (Override method) Claim 대상 마감월 등록  수정, 등록, 삭제 기능
     * @remark - Claim 대상 마감월 등록 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.osm.service.OSM00300Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasPeriod(UiMapDto dto) throws Exception {
    	int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            param.put("VALIDSTATE", "Valid");
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	param.put("PERIODTYPE"  , "Claim");
            	
            	// (21.06.24) 동일한 기간명으로 등록 한 내용 있는지 판단
            	Map<String, Object> map2 = generalDao.addSelectOneMap(NAMESAPCE+".GetCheckClaimClosePeriodDup",param);
            	if(map2 != null && "N".equals(map2.get("CHK_PERIODNAME")))
            		//throw new BizException("InValidOspData007");
            		//throw new BizException("InValidOspData007", (String)param.get("PERIODNAME"));
            		throw new BizException("InValidOspData007|"+ (String)param.get("PERIODNAME"));
            	
            	Map<String, Object> map = generalDao.addSelectOneMap(NAMESAPCE+".GetCheckClaimClosePeriodPopup",param);
            	if(map.get("PERIODID")==null || "".equals(map.get("PERIODID"))) {
                    result += generalDao.addInsert(NAMESAPCE+".insertBasPeriod",param);
            	}else {
            		param.put("PERIODID", map.get("PERIODID"));
            		result += generalDao.addInsert(NAMESAPCE+".updateBasPeriod",param);
            	}
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
        		result += generalDao.addInsert(NAMESAPCE+".updateBasPeriod",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	param.put("VALIDSTATE", "Invalid");
            	result += generalDao.addInsert(NAMESAPCE+".updateBasPeriod",param);
            }
        }	
        putDataSetMap(dto, result);
    }

    /**
     * @fn
     * @brief (Override method) Claim 대상 마감월 등록  수정, 등록, 삭제 기능
     * @remark - Claim 대상 마감월 등록 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.osm.service.OSM00300Service#saveCloseProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveCloseProcess(UiMapDto dto) throws Exception {
    	int result = 0;
    	String strTempperiodid = "";
    	String strperiodid = "";
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("1".equals(param.get("CHK"))) {
        		Map<String, Object> param2 = new HashMap<String, Object>();
        		param2.put("PLANTID", param.get("PLANTID"));
            	if("Y".equals(param.get("ISCLOSE"))) {
            		strperiodid = (String) param.get("PERIODID");
            		param2.put("PERIODID", param.get("PERIODID"));
            	}else {
            		//strperiodid = (String) param.get("OLDPERIODID");
            		//param2.put("PERIODID", param.get("OLDPERIODID"));
            		// (21.06.22) 이전 값으로 설정 (화면에서 안지움.. )
            		strperiodid = (String) param.get("PERIODID");
            		param2.put("PERIODID", param.get("PERIODID"));
            	}
            	
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
               		if("Y".equals(param.get("ISCLOSE"))) {
               			List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE+".GetOutsourcedClaimConfirmationCheck",param);
               			if(list != null && list.size() > 0)
               			{
                        	param.put("VALIDSTATE", "Valid");
               			}
               			else
               			{
               				throw new BizException("InValidOspData017",String.format("Lot No.=%s", param.get("LOTID")));
               			}
               		}else {
               			param.put("VALIDSTATE", "Invalid");
               			param.put("PERIODID", null);
               			param.put("CLOSEUSER", null);
               			param.put("CLOSEDATE", null);
               		}
       				Map<String, Object> map = generalDao.addSelectOneMap(NAMESAPCE+".selectOsmOspclaim",param);
       				if(map==null) {
       					result += generalDao.addInsert(NAMESAPCE+".insertOsmOspclaim",param);
       				}else {
       					result += generalDao.addInsert(NAMESAPCE+".updateOsmOspclaim",param);
       				}
               	}else {
               		if("Y".equals(param.get("ISCLOSE"))) {
               			result += generalDao.addInsert(NAMESAPCE+".updateOsmOspetcclaimamount",param);
               		}else {
               			param.put("PERIODID", null);
               			result += generalDao.addInsert(NAMESAPCE+".updateOsmOspetcclaimamount",param);
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
     * @see smh.osm.service.OSM00300Service#selectBasPeriodList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasPeriodList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetClaimClosePeriodPopup", param));;
    }    

    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00300Service#selectGetFactoryListByCsm(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetFactoryListByCsm(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetFactoryListByCsm", param));;
    }    
    
    /**
     * @fn
     * @brief : Claim 비용 마감 - 조회시 메인 상단 마감년월 값 있는 경우 마감 상태 재조회
     * @remark 
     * @see smh.pcm.service.PCM07900Service#selectChkPeriodState(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectChkPeriodState(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChkPeriodState", param));
    }
    
    
}