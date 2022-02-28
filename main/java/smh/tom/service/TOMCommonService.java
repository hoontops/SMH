package smh.tom.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: TOMCommonService.java
 * @Package		: smh.tom.service  
 * @Project 	: 인터플렉스 MES 구축
 * @Type name	: TOMCommonService    
 * @Company		: Built1
 * @Create Date	: 2021. 2. 2. 오후 4:35:30 
 *  @Author		: sungmin.choe
 * @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
public interface TOMCommonService {
	
	/**
     * @fn : 
     * @brief : (공통 넥사크로 Lookup API 방식)
     * @Method Name : selectCboCenterList
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
	public void selectTomCustomQuery(UiMapDto dto) throws Exception;
	
	/**
     * @fn : 
     * @brief : (Lookup Code List 조회)
     * @Method Name : selectCboCenterList
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
	public void selectTomLookupCodeList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : 
     * @brief : 작업장 조회 (공통팝업에서 Call)
     * @Method Name : selectCboCenterList
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */
	public void selectTomAreaListByTool(UiMapDto dto) throws Exception;
	
	/**
     * @fn : 
     * @brief : 품목 조회 (공통팝업에서 Call)
     * @Method Name : selectCboCenterList
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */
	public void selectTomProductdefidPoplistByTool(UiMapDto dto) throws Exception;
	
	//공정 조회
	public void selectProcessSegmentListByOsp(UiMapDto dto) throws Exception;
	
	//작업장 조회 (GetAreaidPopupListByOsp)
	public void selectAreaidPopupListByOsp(UiMapDto dto) throws Exception;
	
	//입고자 조회
	public void selectReceiptUserList(UiMapDto dto) throws Exception;
	
	//품목 코드 조회
	public void selectProductdefidlistByOspList(UiMapDto dto) throws Exception;
	
	//제작처(협력업체) 조회 (치공구)
	public void selectVendorList(UiMapDto dto) throws Exception;
	
	//출고자조회(치공구)
	public void selectUserListForPopupByToolList(UiMapDto dto) throws Exception;
	
	//메일 저장
	public void saveEmail(UiMapDto dto) throws Exception;
	
	//치공구 제작의뢰 메일 수신자 리스트(TOM공통메일화면에서 Call)	
	public void selectToolRequestMailRecvList(UiMapDto dto) throws Exception;
	public void selectToolRequestStatusName(UiMapDto dto) throws Exception;
	
	//메일 수신자List(자바 서비스에서 호출)
	public List<Map<String, Object>> selectToolRequestMailRecvList2(UiMapDto dto) throws Exception;
	
	//메일수신자조회 화면 쿼리
	public void selectToolRecvList(UiMapDto dto) throws Exception;
	
	//메일 발송 및 수신자 저장
	public void sentEmail(UiMapDto dto) throws Exception;
	
	public String emailSend(String toAddr, String toName, String fromAddr,
				            String fromName, String toCc, String toCcName, String subject, String content,
				            String jobSysCd, Map<String, Object> param,
				            //int seq,
				            boolean procFlag) throws Exception;
	
	public String getMailCssString();
	
	//주차 쿼리
	public void selectWeekDefaultTerm(UiMapDto dto) throws Exception;
	public void selectSalespoforcastRegWeekDayList(UiMapDto dto) throws Exception;
	public void selectSalespoforcastWeekoftheyearList(UiMapDto dto) throws Exception;
	
 }
