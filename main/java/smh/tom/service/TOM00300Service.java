package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00300Service {

    //헤더 그리드
    public void selectGridReceiptInput(UiMapDto dto) throws Exception;
    
    //디테일 그리드
    public void selectToolRequestReceipt(UiMapDto dto) throws Exception;
    
    //TOOL코드 조회 POPUP
    public void selectToolRequestListForReceiptByToolList(UiMapDto dto) throws Exception;
    
    //제작 입고 처리
    public void saveToolMakeReceipt(UiMapDto dto) throws Exception;    
    
    //제작 입고 취소 처리
    public void saveToolMakeReceiptCancel(UiMapDto dto) throws Exception;
 }