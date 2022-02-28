package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00600Service {

    //헤더 그리드
    public void selectRegistToolRepairListForResultByToolList(UiMapDto dto) throws Exception;
    
    //수리결과 등록 저장
    public void saveToolRegistRepairResult(UiMapDto dto) throws Exception;
 }