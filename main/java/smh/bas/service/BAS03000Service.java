package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS03000Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03000Service
* @Company: Built1
* @Create Date: 2021.02.05
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.02.05.   김애리   최초  생성
 *
 *
*/
public interface BAS03000Service {

	//재작업 번호 팝업 리스트 조회 
	public void selectProcessDefIDPopup(UiMapDto dto) throws Exception;
	
    //Site 콤보 Dataset 조회
    public void selectPLANTID(UiMapDto dto) throws Exception;
    
    //Site 콤보 Dataset 조회
    public void selectProcessSegMentTop(UiMapDto dto) throws Exception;

    //재작업 구분 콤보 Dataset 조회
    public void selectProcessClassType(UiMapDto dto) throws Exception;
    
    //재작업 버전 콤보 Dataset 조회
    public void selectProcessdefVersion(UiMapDto dto) throws Exception;
    
    //재작업 라우팅 조회(상단 그리드)
    public void selectProcessdefinitionList(UiMapDto dto) throws Exception;
    
    //공정 순서 조회(중간 탭 1 페이지)
    public void selectProcessPathList(UiMapDto dto) throws Exception;
    
    //품목지정 조회(중간 탭 2 페이지)
    public void selectProductReworkControl(UiMapDto dto) throws Exception;
    
    //사용 작업장 조회(중간 탭 3 페이지)
    public void selectAreaReworkControl(UiMapDto dto) throws Exception;
    
    //대체자원 조회(하단 탭 1 페이지)
    public void selectReworkRoutingResource(UiMapDto dto) throws Exception;
    
    //설비 지정 조회(하단 탭 2 페이지)
    public void selectReworkRoutingEquipment(UiMapDto dto) throws Exception;

    //공정 팝업
    public void selectProcessSegmentExtPupop(UiMapDto dto) throws Exception;
    
    //공정 팝업
    public void selectProductDefinitionList(UiMapDto dto) throws Exception;
    
    
    
    public void saveReworkRouting(UiMapDto dto) throws Exception;
    
    public void selectAreaList(UiMapDto dto) throws Exception;
    
    public void selectReworkRoutingEquipmentPopup(UiMapDto dto) throws Exception;
    
 
 }