package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: TOM00100Service.java
 * @Package		: smh.tom.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOM00100Service
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
public interface TOM00100Service {

    /**
     * @fn : selectToolRequest
     * @brief : 치공구 제작 의뢰 :: 상단 Grid
     * @Method Name : selectToolRequest
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectToolRequest(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectToolDetail
     * @brief : tool 정보 :: 하단 Grid
     * @Method Name : selectToolDetail
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectToolDetail(UiMapDto dto) throws Exception;
    
    
    /**
     * @fn : selectToolCodeList
     * @brief : Tool code List :: 팝업
     * @Method Name : selectToolCodeList
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectToolCodeList(UiMapDto dto) throws Exception;
    
    public void selectToolCodeList2(UiMapDto dto) throws Exception;
    
    /**
     * @fn : saveToolGrid
     * @brief : tool 정보 그리드 정보 저장
     * @Method Name : saveToolGrid
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void saveToolGrid(UiMapDto dto) throws Exception;
    
    //메일 발송 수신자 List
    public void selectToolRequestMailList(UiMapDto dto) throws Exception;
    
    //발주 처리
    public void saveOrder(UiMapDto dto) throws Exception;
    
    //발주 취소 처리
    public void saveOrderCancel(UiMapDto dto) throws Exception;
    
    //의뢰서 조회
    public void selectRequestDocument(UiMapDto dto) throws Exception;
    
    //상단 의뢰(Request) 삭제 : 요청+상세 등 모두 삭제
    public void deleteRequest(UiMapDto dto) throws Exception;
 }