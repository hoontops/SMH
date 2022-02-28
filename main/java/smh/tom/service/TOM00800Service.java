package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00800Service {

    //헤더 그리드
    public void selectMoveToolStatusListByToolList(UiMapDto dto) throws Exception;
    
    //디테일 그리드
    public void selectMoveToolInputListByToolList(UiMapDto dto) throws Exception;
    
    //이동출고
    public void saveMoveSendTool(UiMapDto dto) throws Exception;
    
    //이동출고 취소
    //public void saveMoveSendToolCancel(UiMapDto dto) throws Exception;
 }