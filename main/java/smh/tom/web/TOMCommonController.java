package smh.tom.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOMCommonService;


/**
* @file			: TOMCommonController.java
* @Package		: smh.tom.web  
* @Project 		: 인터플렉스 MES 구축
* @Type name	: TOMCommonController    
* @Company		: Built1
* @Create Date	: 2021. 2. 2. 오후 4:32:54 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 2.       박현우      최초  생성 
 *
*/
@Controller
@RequestMapping(value = "/tomCommon")
public class TOMCommonController extends AbstractWebController {

	@Autowired
	private TOMCommonService service;

	/**
     * @fn : selectTomCustomQuery (공통 넥사크로 Lookup API 방식)
     * @brief : <<TOM 공통SQL 조회용 메소드 >>
     * @Method Name : selectTomCustomQuery
     * @remark
     * @Create Date: 2021 2021. 2. 2. 오후 4:33:38 
     * @Author: sungmin.choe
     * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 2.        sungmin.choe     최초  생성
     *
     */
    @RequestMapping(value = "selectTomCustomQuery.do")
    public View selectTomCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectTomCustomQuery(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectTomLookupCodeList
     * @brief : <<TOM Lookup Code 조회용 메소드 >>
     * @Method Name : selectTomCustomQuery
     * @remark
     * @Create Date: 2021 2021. 2. 2. 오후 4:33:38 
     * @Author: sungmin.choe
     * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 2.        sungmin.choe     최초  생성
     *
     */
    @RequestMapping(value = "selectTomLookupCodeList.do")
    public View selectTomLookupCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectTomLookupCodeList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectTomAreaListByTool
     * @brief : 작업장 조회
     * @remark
     * @Create Date: 2021. 2. 10
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 2. 10.  박현우      최초  생성
     *
     */
    @RequestMapping(value = "selectTomAreaListByTool.do")
    public View selectTomAreaListByTool(UiMapDto dto, Model model) throws Exception {
    	service.selectTomAreaListByTool(dto);
    	return apply(dto, model);
    }
     
     /**
      * @fn : selectTomProductdefidPoplistByTool
      * @brief : 품목 조회
      * @remark
      * @Create Date: 2021. 2. 10
      * @Author: 박현우
      * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일               수정자         수정내용
      *   ------------  ------  ----------
      *   2021. 2. 10.  박현우      최초  생성
      *
      */
    @RequestMapping(value = "selectTomProductdefidPoplistByTool.do")
    public View selectTomProductdefidPoplistByTool(UiMapDto dto, Model model) throws Exception {
    	service.selectTomProductdefidPoplistByTool(dto);
    	return apply(dto, model);
    }
    
    //공정 조회
    @RequestMapping(value = "selectProcessSegmentListByOsp.do")
    public View selectProcessSegmentListByOsp(UiMapDto dto, Model model) throws Exception {
    	service.selectProcessSegmentListByOsp(dto);
    	return apply(dto, model);
    }    
   
	//외주작업장 조회
	@RequestMapping(value = "selectAreaidPopupListByOsp.do")
	public View selectAreaidPopupListByOsp(UiMapDto dto, Model model) throws Exception {
	  	service.selectAreaidPopupListByOsp(dto);
	  	return apply(dto, model);
	}
	
	//입고자 조회
	@RequestMapping(value = "selectReceiptUserList.do")
    public View selectReceiptUserList(UiMapDto dto, Model model) throws Exception {
    	service.selectReceiptUserList(dto);
    	return apply(dto, model);
    }
	
	//품목 코드 조회 (공정)
	@RequestMapping(value = "selectProductdefidlistByOspList.do")
    public View selectProductdefidlistByOspList(UiMapDto dto, Model model) throws Exception {
    	service.selectProductdefidlistByOspList(dto);
    	return apply(dto, model);
    }
	
	//제작처(협력업체) 조회 (치공구)
	@RequestMapping(value = "selectVendorList.do")
    public View selectVendorList(UiMapDto dto, Model model) throws Exception {
    	service.selectVendorList(dto);
    	return apply(dto, model);
    }
	
	//출고자조회(치공구)
	@RequestMapping(value = "selectUserListForPopupByToolList.do")
    public View selectUserListForPopupByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectUserListForPopupByToolList(dto);
    	return apply(dto, model);
    }
	
	//메일 발송
	@RequestMapping(value = "sentEmail.do")
    public View sentEmail(UiMapDto dto, Model model) throws Exception {
		service.sentEmail(dto);
        return apply(dto, model);
    }
	
	//메일 저장
	@RequestMapping(value = "saveEmail.do")
    public View saveEmail(UiMapDto dto, Model model) throws Exception {
		service.saveEmail(dto);
        return apply(dto, model);
    }
	
	//치공구 제작 의뢰 메일 수신자 List
	@RequestMapping(value = "selectToolRequestMailRecvList.do")
    public View selectToolRequestMailRecvList(UiMapDto dto, Model model) throws Exception {
		service.selectToolRequestMailRecvList(dto);
        return apply(dto, model);
    }
	
	@RequestMapping(value = "selectToolRequestStatusName.do")
    public View selectToolRequestStatusName(UiMapDto dto, Model model) throws Exception {
		service.selectToolRequestStatusName(dto);
        return apply(dto, model);
    }
	
	//메일수신자조회 화면 쿼리
	@RequestMapping(value = "selectToolRecvList.do")
    public View selectToolRecvList(UiMapDto dto, Model model) throws Exception {
		service.selectToolRecvList(dto);
        return apply(dto, model);
    }
	
	
	@RequestMapping(value = "selectWeekDefaultTerm.do")
    public View selectWeekDefaultTerm(UiMapDto dto, Model model) throws Exception {
		service.selectWeekDefaultTerm(dto);
        return apply(dto, model);
    }
	
	@RequestMapping(value = "selectSalespoforcastRegWeekDayList.do")
    public View selectSalespoforcastRegWeekDayList(UiMapDto dto, Model model) throws Exception {
		service.selectSalespoforcastRegWeekDayList(dto);
        return apply(dto, model);
    }
	
	//주차쿼리
	@RequestMapping(value = "selectSalespoforcastWeekoftheyearList.do")
    public View selectSalespoforcastWeekoftheyearList(UiMapDto dto, Model model) throws Exception {
		service.selectSalespoforcastWeekoftheyearList(dto);
        return apply(dto, model);
    }
	
	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
