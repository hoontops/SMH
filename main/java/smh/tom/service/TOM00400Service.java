package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00400Service {

    //헤더 그리드
    public void selectNewSendToolListByToolList(UiMapDto dto) throws Exception;
    
    //디테일 그리드
    public void selectNewSendToolDetailListByToolList(UiMapDto dto) throws Exception;
    
    //수리출고 저장
    public void saveSendToolGrid(UiMapDto dto) throws Exception;
 }