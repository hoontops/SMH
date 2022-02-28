package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface TOM01000Service {

	//치공구 정보조회 : 상단 그리드
    public void selectToolInformationListByToolList(UiMapDto dto) throws Exception;
    
    //치공구 정보조회 : 하단 변경사유 그리드
    public void selectToolInformationReasonList(UiMapDto dto) throws Exception;
    
    //정보 저장
    public void saveInformationTool(UiMapDto dto) throws Exception;
 }