package smh.tom.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM00200Service {

    //헤더 그리드
    public void selectRequestToolMakingRegister(UiMapDto dto) throws Exception;
    
    //디테일 그리드
    public void selectRequestToolMakingRegisterDetail(UiMapDto dto) throws Exception;
    
    //의뢰Lot 그리드
    public void selectRequestToolMakingRegisterDetailSub(UiMapDto dto) throws Exception;
        
    //내역 등록 저장
    public void saveToolRequestDetail(UiMapDto dto) throws Exception;
    
    //내역 등록 취소
    public void saveRequestCancel(UiMapDto dto) throws Exception;
    
    //외부에서 호출(00100Service)
    public String createIdToolRequestDetailLotSequence(Map<String, Object> row);
    //public String createIdToolRequestDetailLotSequence2(Map<String, Object> row); //사용 안함.
 }