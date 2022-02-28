package smh.osm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: OSM00600ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00600ServiceImpl
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
public class OSM00600ServiceImpl extends AbstractNbdfService implements OSM00600Service {

    public static final String NAMESAPCE = "smh.osm.dao.OSM00600Dao";
    
    public static final String NAMESAPCE_500 = "smh.osm.dao.OSM00500Dao";

    @Autowired
    private GeneralDao generalDao;

        
    /**
     * @fn
     * @brief (Override method) Claim마감내역 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00600Service#GetOutsourcedClaimClosureStatus(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimClosureStatusIf(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	
    	
    	// (21.06.25) 마감년월이 필수값이 아니다.
    	String periodNm = (String)param.get("PERIODNAME");
    	param.put("PERIODID", "");
    	if(periodNm != null)
    	{
	    	List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE_500 + ".GetOutsourcedClaimPeriod", param);
	    	if(list.size()==0) {
	    		throw new BizException("InValidOspData008");
	    	}
	    	param.put("PERIODID", list.get(0).get("PERIODID"));
    	}
    	
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimClosureStatusIf", param), "output");;
        //putDataSetMap(dto, list, "output2");;
    }
    
    /**
     * @fn
     * @brief : Claim 마감 전송 - Claim 비용 분항 /감면 Detail 조회
     * @remark 
     * @see smh.osm.service.OSM00600Service#selectGetOutsourcedClaimClosureStatusIfSandDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimClosureStatusIfSandDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimClosureStatusIfSandDetail", param));
    }
    
    /**
     * @fn
     * @brief : Claim 마감 전송 - Detail 저장
     * @remark 
     * @see smh.osm.service.OSM00600Service#saveCloseProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveCloseProcess(UiMapDto dto) throws Exception {
        
    	
    	int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        
        // [삭제 우선 진행]
        for (int d = 0, n = dsMap.size(); d < n; d++) {
            Map<String, Object> paramDel = dsMap.get(d);
            //param.put("VALIDSTATE", "Valid");
            int type = getRowType(paramDel);
            String ifYn	= "";
            String ifNo 	= "";
            ifYn = (String)paramDel.get("IF_YN");
            ifNo = (String)paramDel.get("INTERFACENO");
            
            if (type == DataSet.ROW_TYPE_DELETED) {
            	if(ifYn != null && "Y".equals(ifYn))
            	{
            		// 조회 후 삭제
            		List<Map<String, Object>> listErp = generalDao.addSelect(NAMESAPCE + ".GetOsmOspCloseErp", paramDel);
        	    	if(listErp.size() == 0) {
        	    		throw new BizException("InValidData003|"+String.format("INTERFACENO = %s", ifNo));
        	    	}
            		// erp 쪽도 지운다.  (생성 후 필요)
            		result += generalDao.addUpdate(NAMESAPCE+".deleteOsmOspCloseErp",paramDel);
            	}
            	result += generalDao.addUpdate(NAMESAPCE+".deleteOsmOspClose",paramDel);
            }
        }	
        
        // [삭제 후 등록 수정 진행]
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addInsert(NAMESAPCE+".insertOsmOspClose",param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addInsert(NAMESAPCE+".updateOsmOspClose",param);
            } 
        }	
        putDataSetMap(dto, result);
    	
    	
    }
    
    
    /**
     * @fn
     * @brief : Claim 마감 전송 - ERP 전송
     * @remark 
     * @see smh.osm.service.OSM00600Service#saveErpProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveErpProcess(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".GetOsmOspCloseErpSend", param);
    	
    	int result = 0;
    	//ERP INSERT
        int seqNextVal = 0;
        for (int i = 0, n = list.size(); i < n; i++) {
            Map<String, Object> param2 = list.get(i);
          
            //ERP I/F 시퀀스 채번
        	seqNextVal = getERPSeqNextVal();
            param2.put("P_INTERFACENO", seqNextVal);
            // [ERP 등록]  -  ifc_wip_osp_etc_summary
            result += generalDao.addInsert(NAMESAPCE+".insertOspEtcSummary",param2);
            // [OspClose 업데이트]
            result += generalDao.addInsert(NAMESAPCE+".updateOsmOspCloseErp",param2);
            
        }	
        putDataSetMap(dto, result);
    }
    
    
    /**
     * @fn
     * @brief : ERP 연동 IF 일련 번호 조회
     * @remark 
     * @see 
     */
    public int getERPSeqNextVal() throws Exception 
    {
    	int seqNextVal = 0;
    	Map<String, Object> param = new HashMap<>();
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".getERPSeqNextVal", param);
    	if(result==null){
    		seqNextVal = 1;
    	}else{
    		seqNextVal = NumberUtil.toInt((String)result.get("SEQNEXTVAL"));
    	}
    	System.out.println("seqNextVal :: "+seqNextVal);
    	return seqNextVal;
    }
    
    
    
    
    
    
    
    /**
     * @fn
     * @brief (Override method) claim기타비용 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00600Service#selectGetOutsourcedClaimPeriod(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimPeriod(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetOutsourcedClaimConfirmation", param));;
    }

 
}