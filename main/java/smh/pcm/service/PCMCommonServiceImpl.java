package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.commons.TxnHistKey;

/**
* @file: PCMCommonServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMCommonServiceImpl
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
public class PCMCommonServiceImpl extends AbstractNbdfService implements PCMCommonService {

    public static final String NAMESPACE = "smh.pcm.dao.PCMCommonDao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 
     * @remark 
     * @see smh.pcm.service.PCMCommonService#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramArgs = dto.getInVariableMap();        
        String sqlId = (String)param.get("SQL_ID");
        
        System.out.println("------ selectCustomQuery ? " + sqlId);
        
        if(!"".equals(sqlId) && sqlId != null){
        	//Arguments를 Param에 추가
        	for (Map.Entry<String, Object> entry : paramArgs.entrySet()) {        	    
        	    param.put(entry.getKey(), entry.getValue());
        	}
        	
        	//추가 배열파라미터가 존재하면 배열형태로 param에 바인딩
        	String addParam = (String)param.get("ADD_PARAM");
        	if(!"".equals(addParam) && addParam != null){
        		param.put("ADD_LIST", addParam.split("\\|"));
        	}
        	putDataSetMap(dto, generalDao.addSelect(NAMESPACE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
        
    }
    
    /**
     * @fn
     * @brief : 자재 출고 번호 채번
     * @remark 
     * @see smh.pcm.service.PCMCommonService#selectMaxOutboundNo(com.nbdf.commons.ui.vo.UiMapDto)
     * @test : String lastNo = service.selectMaxOutboundNo("INTERFLEX","IFC");
     * 		   log("채번 호출 :: "+lastNo);
     */
    public String selectMaxOutboundNo(String enterpriseId, String plantId, String yyyymmdd, String areaId, String processSegmentId, String processSegmentVersion) throws Exception {
    	if(yyyymmdd==null || "".equals(yyyymmdd)){
    		yyyymmdd = DateUtil.today("yyyyMMdd");
    		log("[null일때 초기값 :: yyyymmdd :: "+yyyymmdd);
    	}
    	String lastNo = "";
    	String updateBy = (String)SessionUtil.getSessionValue("USER_ACNT");
    	Map<String, Object> param = new HashMap<>();
    	param.put("ENTERPRISEID", enterpriseId);
    	param.put("PLANTID", plantId);
    	param.put("YYYYMMDD", yyyymmdd);
    	
    	//2021-05-22 BY PHW MODIFY
    	param.put("AREAID", areaId);
    	param.put("PROCESSSEGMENTID", processSegmentId);
    	param.put("PROCESSSEGMENTVERSION", processSegmentVersion);
    	
    	param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
    	param.put("UPDATEBY",  updateBy);
    	log("===============================================");
    	log("=> PARAMETER :: ENTERPRISEID :: "+enterpriseId);
    	log("=> PARAMETER :: PLANTID :: "+plantId);
    	log("=> PARAMETER :: YYYYMMDD :: "+yyyymmdd);
    	log("===============================================");
    	Map<String, Object> map = generalDao.addSelectOneMap(NAMESPACE + ".selectMaxOutboundNo", param);
    	log(" :: map :: "+map);
    	log("===============================================");
    	if(map==null){
    		log(" :: NOT FOUND -> NEW LASTNO INSERT...");
    		lastNo = yyyymmdd+"0001";
    		param.put("LASTNO", lastNo);
    		generalDao.addUpdate(NAMESPACE + ".insertMaxOutboundNo", param);
    		log("===============================================");
    	}else{
    		log(" :: LASTNO :: "+map.get("LASTNO"));
        	log(" :: REQUESTNO :: "+map.get("REQUESTNO"));
    		lastNo = yyyymmdd+(String)map.get("LASTNO");
    		param.put("REQUESTNO", map.get("REQUESTNO"));
    		param.put("LASTNO", lastNo);
    		generalDao.addUpdate(NAMESPACE + ".updateMaxOutboundNo", param); 
    		log("===============================================");
    	}
    	log("=> FINAL NO IS :: "+lastNo);
    	log("");
    	return lastNo;	
    }
    
    //파라메터가 map 인 경우도 처리되게 한다.
    //public String selectMaxOutboundNo(Map<String, Object> map) throws Exception {
    //	return selectMaxOutboundNo((String)map.get("ENTERPRISEID"), (String)map.get("PLANTID"), (String)map.get("YYYYMMDD"));
    //}
    
    //public String selectMaxOutboundNo(String enterpriseId, String plantId) throws Exception {
    //	return selectMaxOutboundNo(enterpriseId, plantId, "");
    //}
    
    private void log(String message){
    	logger.debug("////////////////////////////////////////////////////////////////"+message);
    }
    
    /**
     * @fn
     * @brief : 사용자 정보 리스트
     * @remark 
     * @see smh.pcm.service.PCMCommonService#selectUserList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUserList", param));
    }
    
    /**
     * @fn
     * @brief : 사용자 정보 리스트
     * @remark 
     * @see smh.pcm.service.PCMCommonService#selectTxnHistKey(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTxnHistKey(UiMapDto dto) throws Exception {
    	String result = TxnHistKey.getTxnHistKey();
    	Map<String, Object> param = new HashMap<String, Object>();
    	param.put("TXNHISTKEY", result);
    	
    	putDataSetMap(dto,param);
    }
    
    public java.util.Date selectToDate() throws ParseException{
    	
		java.util.List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE+".selectCurrentSystemTime","");
			
		String sToday = systemDate.get(0).get("TODATE").toString();
		java.text.SimpleDateFormat dateFormat = new java.text.SimpleDateFormat("yyyyMMddHHmmss");
		
		return dateFormat.parse(sToday);
		 
    }
    
    
    /**
     * @fn
     * @brief : 유저 리스트를 조회한다
     * @remark 
     * @see smh.pcm.service.PCMCommonService#getUserList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void getUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getUserList", param));
    }
    
    /**
     * @fn
     * @brief : Process 4-Step Info User Control에서 작업자 팝업 데이터를 조회 한다.
     * @remark 
     * @see smh.pcm.service.PCMCommonService#getWorkerByProcess(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void getWorkerByProcess(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getWorkerByProcess", param));
    }
    
    /**
     * @fn
     * @brief : Area 공통조회 팝업.
     * @remark 
     * @see smh.pcm.service.PCMCommonService#getBasAreaPop(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void getBasAreaPop(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".getBasAreaPop", param));
    }
    

    
}