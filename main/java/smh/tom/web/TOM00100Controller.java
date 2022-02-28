package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: TOM00100Controller.java
 * @Package		: smh.tom.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOM01100Controller
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
@Controller
@RequestMapping(value = "/tom00100")
public class TOM00100Controller extends AbstractWebController {

    @Autowired
    private TOM00100Service service;

    /**
     * @fn : selectToolRequest
     * @brief : 치공구 제작 의뢰  :: 상단 Grid
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
    @RequestMapping(value = "selectToolRequest.do")
    public View selectToolRequest(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRequest(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectToolDetail 
     * @brief : tool 정보 :: 하단 Grid
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
    @RequestMapping(value = "selectToolDetail.do")
    public View selectToolDetail(UiMapDto dto, Model model) throws Exception {
    	service.selectToolDetail(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectToolCodeList 
     * @brief : Tool code List :: 팝업
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
    @RequestMapping(value = "selectToolCodeList.do")
    public View selectToolCodeList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolCodeList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectToolCodeList2.do") //수정/수리일 경우 쿼리
    public View selectToolCodeList2(UiMapDto dto, Model model) throws Exception {
    	service.selectToolCodeList2(dto);
        return apply(dto, model);
    }
    
    //메일 발송 List
    @RequestMapping(value = "selectToolRequestMailList.do")
    public View selectToolRequestMailList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRequestMailList(dto);
        return apply(dto, model);
    }
     
    //tool 정보 그리드 정보 저장
    @RequestMapping(value = "saveToolGrid.do")
    public View saveToolGrid(UiMapDto dto, Model model) throws Exception {
    	service.saveToolGrid(dto);
        return apply(dto, model);
    }
    
    //발주 처리
    @RequestMapping(value = "saveOrder.do")
    public View saveOrder(UiMapDto dto, Model model) throws Exception {
    	service.saveOrder(dto);
        return apply(dto, model);
    }
    
    //발주 취소 처리
    @RequestMapping(value = "saveOrderCancel.do")
    public View saveOrderCancel(UiMapDto dto, Model model) throws Exception {
    	service.saveOrderCancel(dto);
        return apply(dto, model);
    }
    
    //의뢰서 조회
    @RequestMapping(value = "selectRequestDocument.do")
    public View selectRequestDocument(UiMapDto dto, Model model) throws Exception {
    	service.selectRequestDocument(dto);
        return apply(dto, model);
    }
    
    //상단 의뢰(Request) 삭제 : 요청+상세 등 모두 삭제
    @RequestMapping(value = "deleteRequest.do")
    public View deleteRequest(UiMapDto dto, Model model) throws Exception {
    	service.deleteRequest(dto);
        return apply(dto, model);
    }
}
