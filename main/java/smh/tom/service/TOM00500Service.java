package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00500Service {

    //헤더 그리드
    public void selectToolRepairSendListByToolList(UiMapDto dto) throws Exception;
    
    //디테일 그리드
    public void selectToolRepairLotListForRepairByToolList(UiMapDto dto) throws Exception;
    
    //TOOL선택
    public void selectToolRequestListForRepairByToolList(UiMapDto dto) throws Exception;
    
    //수리출고 저장
    public void saveSendToolGrid(UiMapDto dto) throws Exception;
 }