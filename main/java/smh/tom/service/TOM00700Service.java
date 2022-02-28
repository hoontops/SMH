package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00700Service {

    //헤더 그리드
    public void selectReceiptToolRepairListForReceiptByToolList(UiMapDto dto) throws Exception;
    
    //디테일 그리드
    public void selectRepairToolResultLotListForReceiptByToolList(UiMapDto dto) throws Exception;
    
    //TOOL선택
    public void selectRepairToolResultListForReceiptByToolList(UiMapDto dto) throws Exception;
    
    //내역 등록 저장
    public void saveToolRepairReceipt(UiMapDto dto) throws Exception;
 }