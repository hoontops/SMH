package smh.tom.service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.cmd.cm.cmam.service.CMAM00100Service;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.NbdfMailService;
import com.nexacro17.xapi.data.DataSet;

/**
 * @file		: TOMCommonServiceImpl.java
 * @Package		: smh.tom.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOMCommonServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Service
public class TOMCommonServiceImpl extends AbstractNbdfService implements TOMCommonService {
    public static final String NAMESAPCE = "smh.tom.dao.TOM00001Dao"; //TOM 공통 DAO
    private static final String NAMESAPCE2 = "com.nbdf.cmd.cm.cmfm.dao.CMFM01000Dao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private NbdfMailService nbdfMailService;
    
    @Autowired
    private CMAM00100Service service;

    /**
     * @fn
     * @brief (Override method) (공통 넥사크로 Lookup API 방식)
     * @remark 
     * @see smh.tom.service.TOMCommonService#selectTomCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
     * @fn
     * @brief (Override method) Lookup Code 조회
     * @remark 
     * @see smh.tom.service.TOMCommonService#selectTomCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomLookupCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
     * @fn
     * @brief 작업장 조회 (공통팝업에서 Call)
     * @remark 
     * @see smh.tom.service.TOMCommonService#selectTomAreaListByTool(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomAreaListByTool(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTomAreaListByTool", param));
    }
    
    /**
     * @fn
     * @brief 품목 조회 (공통팝업에서 Call)
     * @remark 
     * @see smh.tom.service.TOMCommonService#selectTomProductdefidPoplistByTool(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomProductdefidPoplistByTool(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectTomProductdefidPoplistByTool", param));
    }
    
    //공정 조회
    public void selectProcessSegmentListByOsp(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSegmentListByOsp", param));
    }
    
    //작업장 조회
    public void selectAreaidPopupListByOsp(UiMapDto dto) throws Exception{
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAreaidPopupListByOsp", param));    	
    }
    
    //입고자 조회
  	public void selectReceiptUserList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectReceiptUserList", param));
    }
  	
  	//품목 코드 조회
  	public void selectProductdefidlistByOspList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductdefidlistByOspList", param));
    }
  	
  	//제작처(협력업체) 조회 (치공구)
  	public void selectVendorList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectVendorList", param));
    }
  	
  	//출고자조회(치공구)
  	public void selectUserListForPopupByToolList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserListForPopupByToolList", param));
    }
  	
  	//치공구 제작의뢰 메일 수신자 리스트(TOM공통메일화면에서 Call)	
  	public void selectToolRequestMailRecvList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectToolRequestMailRecvList", param));
  	}
  	
  	public void selectToolRequestStatusName(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectToolRequestStatusName", param));
  	}
  	
  	//화면 UI 없이, 메일 전송하기 위한 수신자를 구한다.
  	public List<Map<String, Object>> selectToolRequestMailRecvList2(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
  		return generalDao.addSelect(NAMESAPCE + ".selectToolRequestMailRecvList", param); //쿼리는 동일(리턴만 추가)
  	}
  	
  	//메일수신자조회 화면 쿼리
  	public void selectToolRecvList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
  		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectToolRecvList", param));
  	}
  	
  	//Test메일 발송 및 수신자 저장  	
  	public void sentEmail(UiMapDto dto) throws Exception {
  		/*
  		int result = 0;
	   	String toAddr = "";    	
	   	String toName = "";    	
	   	String fromAddr = "";    	
	   	String fromName = "";    	
	   	String toCc = "";    	
	   	String toCcName = "";    	
	   	String subject = "";    	
	   	String content = "";    	
	   	String jobSysCd = "";
	   	int cnt = 0;
	   	
	   	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
        
        log("---dsMap sz---::"+dsMap.size());
        log("---dsMap2 sz---::"+dsMap2.size());
        
        log("---dsMap is---::"+dsMap.toString());
        log("---dsMap2 is---::"+dsMap2.toString());
        
        Map<String, Object> param2 = dsMap2.get(0);
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            //if("1".equals(param.get("CHK"))){
            	toAddr = toAddr + (cnt==0?"":";") + (String) param.get("EMAIL_ADDR");
            	toName = toName + (cnt==0?"":";") + (String) param.get("USER_NM");
            	cnt++;
            //}
        }
    	fromAddr = (String) param2.get("FROM_ADDR");
    	fromName = (String) param2.get("FROM_NAME");
    	subject = (String) param2.get("SUBJECT");
    	content = (String) param2.get("CONTENT2");
    	jobSysCd = (String) param2.get("JOB_SYS_CD");
    	emailSend(toAddr, toName, fromAddr, fromName, toCc, toCcName, subject, content, jobSysCd, param2, true);
    	
	   	putDataSetMap(dto, result);
	   	*/
  	}
  	
  	//===========================================
  	//메일 수신자 저장 : 발송/취소 모두 1차적으로 수신자를 저장 한다.
  	//===========================================
  	public void saveEmail(UiMapDto dto) throws Exception {
  		int result = 0;
	   	String toAddr = "";    	
	   	String toName = "";    	
	   	String fromAddr = "";    	
	   	String fromName = "";    	
	   	String toCc = "";    	
	   	String toCcName = "";    	
	   	String subject = "";    	
	   	String content = "";    	
	   	String jobSysCd = "";
	   	int cnt = 0;
	   	
	   	log("---saveEmail [SERVICE...SAVE]---");
	   	
	   	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "INPUT2");
        
        log("---dsMap sz---::"+dsMap.size());
        log("---dsMap2 sz---::"+dsMap2.size());
        
        log("---dsMap is---::"+dsMap.toString());
        log("---dsMap2 is---::"+dsMap2.toString());
        
        Map<String, Object> param2 = dsMap2.get(0);
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_DELETED) { //삭제된것은 저장되지 않게 한다.
            	//처리 skip
            }else{
            	toAddr = toAddr + (cnt==0?"":";") + this.alltrim((String) param.get("EMAIL_ADDR")); //수신자List가 ; 로 구분되게 문자열로 저장한다.
            	toName = toName + (cnt==0?"":";") + this.alltrim((String) param.get("USER_NM"));
            	cnt++;
            }
        }
        
        /*
        toAddr = toAddr + ";"+ "hyeonwoo.park@interflex.co.kr";
	   	toName = toName + ";"+ "박현우";
	   	toAddr = toAddr + ";"+ "myunghwan.lee@interflex.co.kr";
	   	toName = toName + ";"+ "이명환";
	   	toAddr = toAddr + ";"+ "yongkuk.lee@interflex.co.kr";
	   	toName = toName + ";"+ "이용국";	   	
	   	toAddr = toAddr + ";"+ "jinhyeon.kim@interflex.co.kr";
	   	toName = toName + ";"+ "김진현";
	   	*/
	   	
    	fromAddr = (String) param2.get("FROM_ADDR");
    	fromName = (String) param2.get("FROM_NAME");
    	subject = (String) param2.get("SUBJECT");
    	content = (String) param2.get("CONTENT");
    	jobSysCd = (String) param2.get("JOB_SYS_CD");
    	emailSend(toAddr, toName, fromAddr, fromName, toCc, toCcName, subject, content, jobSysCd, param2, false);
    	
	   	putDataSetMap(dto, result);
  	}
  	
  	//메일 발송 및 수신자 저장
  	public String emailSend(String toAddr, String toName, String fromAddr,
					            String fromName, String toCc, String toCcName, String subject, String content,
					            String jobSysCd, 
					            Map<String, Object> param,
					            //int seq,
					            boolean procFlag) throws Exception {
  		log("---param---"+param);
  		
    	ConcurrentHashMap<String, Object> emailMap = new ConcurrentHashMap<String, Object>();
    	
    	log("---toAddr---"+toAddr);
    	log("---toName---"+toName);
    	log("---fromAddr---"+fromAddr);
    	log("---fromName---"+fromName);
    	log("---toCc---"+toCc);
    	log("---toCcName---"+toCcName);
    	log("---subject---"+subject);
    	log("---content---"+content);
    	log("---jobSysCd---"+jobSysCd.toUpperCase());
    	log("---SNDNG_YN---F");
    	log("---ATCH_SRC_KEY---"+param.get("ATCH_SRC_KEY"));
    	log("---ATCH_TY_CD---"+param.get("ATCH_TY_CD"));
    	
    	emailMap.put("TO_ADDR", toAddr ); //여러명 전송시 ; 로 구분되어 보내진다.
    	emailMap.put("TO_NAME", toName );
    	emailMap.put("FROM_ADDR", fromAddr );
    	emailMap.put("FROM_NAME", fromName );
    	emailMap.put("TO_CC", toCc );
    	emailMap.put("TO_CC_NAME", toCcName );
    	emailMap.put("SUBJECT", subject );
    	emailMap.put("CONTENT", content );
    	emailMap.put("JOB_SYS_CD", jobSysCd.toUpperCase() );
    	emailMap.put("SNDNG_YN", "F");
    	emailMap.put("ATCH_SRC_KEY", param.get("ATCH_SRC_KEY") );    	
    	emailMap.put("ATCH_TY_CD", param.get("ATCH_TY_CD") );
    	
    	String rstMsg = "";
    	if(procFlag){
    		//===================
    		/* (1) Attach File (첨부파일) */
    		//===================
    		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE2 + ".selectAtchFiles", param);
    		log("---ATTACH---"+list);
    		log("---ATTACH---"+list.size());
        	emailMap.put("FILE_LIST", list );
        	
        	this.whoColumnSet(emailMap);
        	
        	/* (2) 수신자 저장 */
	    	this.deleteToolRequestMailEmailRecvList(emailMap, jobSysCd.toUpperCase());
	    	log("---RECV DELETE ALL---OK");
	    	
	    	String[] toAddrArr = this.split(toAddr, ";", true);
    		String[] toNameArr = this.split(toName, ";", true);
    		log("---toAddrArr :: "+toAddrArr.length);
    		for(int i=0; i<toAddrArr.length; i++){
    			emailMap.put("TO_ADDR", toAddrArr[i]);
    	    	emailMap.put("TO_NAME", toNameArr[i]);
    	    	this.insertToolRequestMailEmailRecvList(emailMap, jobSysCd.toUpperCase());
    		}
    		log("---RECV INSERT---OK");
        	
	    	/* (3) 발송 요청 */
    		emailMap.put("TO_ADDR", toAddr ); //여러명 전송시 ; 로 구분되어 보내진다.
        	emailMap.put("TO_NAME", toName );
	    	rstMsg = nbdfMailService.mailSnd(emailMap);
	    	log("---MAIL SENT---OK");
	    	
	    	if("success".equalsIgnoreCase(rstMsg)){
	    		emailMap.put("SNDNG_YN", "Y");
	    		
	    		toAddrArr = this.split(toAddr, ";", true);
	    		toNameArr = this.split(toName, ";", true);
	    		log("---toAddrArr :: "+toAddrArr.length);
	    		for(int i=0; i<toAddrArr.length; i++){
	    			emailMap.put("TO_ADDR", toAddrArr[i]);
	    	    	emailMap.put("TO_NAME", toNameArr[i]);
	    	    	service.insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());
	    		}
	    		log("---MAIL LOG INSERT---OK");
	    		log("---MAIL SENT FINISH---");
	    		return "success";
	    	}else{
	    		service.insertEmailSndngLogs(emailMap, jobSysCd.toUpperCase());
	    		throw new BizException(rstMsg);
	    	}
	    	
    	}else{
    		this.whoColumnSet(emailMap);
    		log("---WHO---OK");
    		
    		/* (1) 수신자 저장 */
    		this.deleteToolRequestMailEmailRecvList(emailMap, jobSysCd.toUpperCase()); //키로 삭제함
    		log("---[SAVE 수신자 리스트] RECV DELETE ALL---OK2");
    		
    		String[] toAddrArr = this.split(toAddr, ";", true);
    		String[] toNameArr = this.split(toName, ";", true);
    		log("---toAddrArr :: "+toAddrArr.length);
    		log("---toNameArr :: "+toNameArr.length);    		
    		for(int i=0; i<toAddrArr.length; i++){
    			log("---메일주소 :: "+toAddrArr[i]);
        		log("---성명 :: "+toNameArr[i]);
    			emailMap.put("TO_ADDR", toAddrArr[i]);
    	    	emailMap.put("TO_NAME", toNameArr[i]);
    	    	this.insertToolRequestMailEmailRecvList(emailMap, jobSysCd.toUpperCase()); //수신자 리스트만큼 row단위 저장
    		}
    		
    		log("---[SAVE] RECV INSERT---OK");
    	}
    	return rstMsg;
    }
    
    private boolean deleteToolRequestMailEmailRecvList(Map<String, Object> emailMap, String jobSysCd){
    	if( !(generalDao.addUpdate(NAMESAPCE + ".deleteToolRequestMailEmailRecvList", emailMap) == 1) ){
    		return false;
        }
        return true;
    }
    
    private boolean insertToolRequestMailEmailRecvList(Map<String, Object> emailMap, String jobSysCd){
    	if( !(generalDao.addUpdate(NAMESAPCE + ".insertToolRequestMailEmailRecvList", emailMap) == 1) ){
    		return false;
        }
        return true;
    }
    
    private Map<String, Object> whoColumnSet(Map<String, Object> emailMap){
    	emailMap.put("CREATED_BY", SessionUtil.getSessionValue("USER_ID"));
        emailMap.put("LAST_UPDATED_BY",SessionUtil.getSessionValue("USER_ID"));
        emailMap.put("LAST_UPDATE_LOGIN",SessionUtil.getSessionValue("LGN_LOG_ID"));
        return emailMap;
    }
    
    public String getMailCssString() {
    	String cssStr = "<style>"
						+"BODY {"
						+"    background-color: #ffffff;"
						+"    color: #333333;"
						+"    font-size: 8pt;"
						+"    font-weight: normal;"
						+"    font-family: tahoma,Arial, Helvetica, sans-serif;"
						+"}"
						+"TH {"
						+"    font-size: 8pt;"
						+"    font-weight:bold;"
						+"    font-family: tahoma, Verdana, Arial, Helvetica, sans-serif;"
						+"}"
						+"TD {"
						+"    font-size: 8pt;"
						+"    font-weight: normal;"
						+"    font-family: tahoma, Verdana, Arial, Helvetica, sans-serif;"
						+"}"
						+".listth {"
						+"    background-color:#E4EDFE;"
						+"    color:#505050;"
						+"    font-size: 8pt;"
						+"    font-weight:normal;"
						+"    text-align:center;"
						+"    height:22;"
						+"    font-family: tahoma, Arial,Verdana, Helvetica, sans-serif;"
						+"}"
						+".listtd {"
						+"    background-color:#FFFFFF;"
						+"    color: #505050;"
						+"    font-size: 8pt;"
						+"    font-weight: normal;"
						+"    text-align:left;"
						+"    height:18;"
						+"    font-family: tahoma, Arial, Helvetica, sans-serif;"
						+"}"
						+"</style>";
    	return cssStr;
    }
    
    public String[] split(String strTarget,
							String strDelim,
							boolean bContainNull) {
		int index = 0;
		String[] resultStrArray = null;
		resultStrArray = new String[search(strTarget, strDelim) + 1];
		String strCheck = new String(strTarget);
		while (strCheck.length() != 0) {
			int begin = strCheck.indexOf(strDelim);
			if (begin == -1) {
				resultStrArray[index] = strCheck;
				break;
			} else {
				int end = begin + strDelim.length();
				if (bContainNull) {
					resultStrArray[index++] = strCheck.substring(0, begin);
				}
				strCheck = strCheck.substring(end);
				if (strCheck.length() == 0 && bContainNull) {
					resultStrArray[index] = strCheck;
					break;
				}
			}
		}
		return resultStrArray;
    }
    
    public int search(String strTarget, String strSearch) {
		int result = 0;
		String strCheck = new String(strTarget);

		for (int i = 0; i < strTarget.length();) {
			int loc = strCheck.indexOf(strSearch);
			if (loc == -1) {
				break;
			} else {
				result++;
				i = loc + strSearch.length();
				strCheck = strCheck.substring(i);
			}
		}

		return result;
	}
    
    public String alltrim(String str) {
		String result = "";

		if (str != null) {
			result = rplc(str," ","");
		} else {
			result = "";
		}

		return result;
	}
    
    public String rplc(String str, String pattern, String replace) {
		int s = 0;
		int e = 0;
		StringBuffer result = new StringBuffer();

		while ((e = str.indexOf(pattern, s)) >= 0) {
			result.append(str.substring(s, e));
			result.append(replace);
			s = e + pattern.length();
		}

		result.append(str.substring(s));

		return result.toString();
	}
    
    //주차 쿼리
    public void selectWeekDefaultTerm(UiMapDto dto) throws Exception { //현재일자+6개월=시작일자,종료일자 구하기
    	Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    public void selectSalespoforcastRegWeekDayList(UiMapDto dto) throws Exception { //주차에 해당하는 일자 리스트 구하기
    	Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    public void selectSalespoforcastWeekoftheyearList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}