package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00900Service {

    //헤더 그리드 : 첫번째 Grid
    public void selectMoveToolReceiptListByToolList(UiMapDto dto) throws Exception;
    
    //결과 그리드 : 두번째 Grid
    public void selectMoveToolReceiptListByToolResultList(UiMapDto dto) throws Exception;
    
    //이동입고
    public void saveMoveReceiptTool(UiMapDto dto) throws Exception;
    
    //이동출고 취소
    public void saveMoveSendToolCancel(UiMapDto dto) throws Exception;
 }