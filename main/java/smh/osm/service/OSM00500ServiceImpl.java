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
* @file: OSM00500ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00500ServiceImpl
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
public class OSM00500ServiceImpl extends AbstractNbdfService implements OSM00500Service {

    public static final String NAMESAPCE = "smh.osm.dao.OSM00500Dao";

    @Autowired
    private GeneralDao generalDao;

        
    /**
     * @fn
     * @brief (Override method) Claim마감내역 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00500Service#GetOutsourcedClaimClosureStatus(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimClosureStatus(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimPeriod", param);
    	if(list.size()==0) {
    		throw new BizException("InValidOspData008");
    	}
    	param.put("PERIODID", list.get(0).get("PERIODID"));
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimClosureStatus", param), "output");;
        putDataSetMap(dto, list, "output2");;
    }   
    
    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00500Service#selectGetOutsourcedClaimPeriod(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimPeriod(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimConfirmation", param));;
    }

    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00500Service#GetOutsourcedClaimClosureStatusDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimClosureStatusDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimClosureStatusDetail", param));;
    }
    
    /**
     * @fn
     * @brief : Claim 마감 현황 - 확정전 확정 가능한지 체크 (21.06.23)
     * @remark 
     * @see smh.osm.service.OSM00500Service#selectGetChkOspClose(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetChkOspClose(UiMapDto dto) throws Exception {
        
        Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimPeriod", param);
    	if(list.size()==0) {
    		throw new BizException("InValidOspData008");
    	}
    	
    	param.put("PERIODID", list.get(0).get("PERIODID"));
        
    	// 조회 ->
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPeriodCloseCheck", param), "output1");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOspCloseCheck", param), "output2");
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimClosureStatusAllCnt", param), "output3");
    	
    }
    
    /**
     * @fn
     * @brief : Claim 마감 현황 - 확정 저장
     * @remark 
     * @see smh.osm.service.OSM00500Service#saveConfProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveConfProcess(UiMapDto dto) throws Exception {
        
        int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT1");
        
        DataSetMap dsMapType = getParametersDataSetMap(dto, "INPUT3");
        String saveType 	= "";			// 발생년월
        for (int k = 0, n = dsMapType.size(); k < n; k++) {
        	Map<String, Object> paramType = dsMapType.get(k);
        	saveType = (String)paramType.get("SAVE_TYPE");
        }
        
        //String occurYm 	= "";			// 발생년월
        //String periodNm 	= "";			// 마감기간ID
        
        // 등록인지 삭제 인지 판단 필요  , 이력은 자중에 
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            //occurYm = (String)param.get("OCCUR_YM");
            //periodNm = (String)param.get("PERIODID");
            
            Map<String, Object> map = generalDao.addSelectOneMap(NAMESAPCE+".selectOspCloseCheck2",param);			// 이미 있는지 확인
            //System.out.println("######################[saveType]  ---> "+saveType);
            
            if("C".equals(saveType))	// 확정 취소
            {
            	if(map != null && "Y".equals(map.get("IF_CNT")))
 	        	{
 	        		// 확정 취소 대상이 없습니다. {0}
            		String ent 			= (String)param.get("ENTERPRISEID");
            		String plant 			= (String)param.get("PLANTID");
            		String occYm 		= (String)param.get("OCCUR_YM");
            		String periodId 		= (String)param.get("PERIODID");
            		String areaId 		= (String)param.get("AREANAME");
            		String vendorId 	= (String)param.get("OSPVENDORNAME");
            		//System.out.println("=========================[확정 취소 대상 없음!]"+saveType);
 	        		throw new BizException("CheckClaimClosureCancelTarget|"+String.format("AREAID = %s, IVENDORID = %s", areaId, vendorId));
 	        	}
            	
            	// 확정 취소
            	result += generalDao.addInsert(NAMESAPCE+".deleteOspClose",param);            	
            }
            else							// 확정
            {
	            if(map != null && "N".equals(map.get("IF_CNT")))
	        	{
	        		// 이미 존재 하면  (중복된 자료가 존재합니다.)
	        		throw new BizException("OspDataOverlapCheck");
	        	}
	            result += generalDao.addInsert(NAMESAPCE+".insertOspClose",param);
            }
        }	
        
     	
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
        for (int i = 0, n = dsMap2.size(); i < n; i++) {
            Map<String, Object> param2 = dsMap2.get(i);
            
            List<Map<String, Object>> list2 = generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimPeriod", param2);
        	if(list2.size()==0) {
        		throw new BizException("InValidOspData008");
        	}
        	param2.put("PERIODID", list2.get(0).get("PERIODID"));            
        	
        	  if("C".equals(saveType))		// 확정 취소
              {
        		  param2.put("PERIODSTATE", "Open");
              }
              else								// 확정
              {
            	  param2.put("PERIODSTATE", "Close");
              }
        	  result += generalDao.addInsert(NAMESAPCE+".updatePeriodClose",param2);
            
        }
        putDataSetMap(dto, result);
        
        
    }
    
    
    /**
     * @fn
     * @brief : Claim 마감 현황 - 확정 취소 체크
     * @remark 
     * @see smh.osm.service.OSM00500Service#selectGetChkOspCloseCancel(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetChkOspCloseCancel(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimPeriod", param);
    	if(list.size()==0) {
    		throw new BizException("InValidOspData008");
    	}
    	
    	param.put("PERIODID", list.get(0).get("PERIODID"));
    	
    	
    	// 조회 ->
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPeriodCloseCheck", param), "output1");			// Close, Open 여부 확인
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOspCloseIfCheck", param), "output2");			// 분할 감면 내용 체크
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimClosureStatusGroupCnt", param), "output3");		// 분할,감면 등록된 내용중 (그룹)한 개수와 그리드 조회 내용 수 비교
    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOspCloseIfYnCheck", param), "output4");			// 분할 감면 내용중 if 내용 체크
    }

 
}