package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03000Service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03000Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03000Controller
* @Company: Built1
* @Create Date: 2021.02.24
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.02.24.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03000")
public class BAS03000Controller extends AbstractWebController {

    @Autowired
    private BAS03000Service service;

    /**
    * @fn :  selectInitCombo
    * @brief : 조회 조건 Combo 값 dataset 
    * @remark
    * @Create Date: 2021. 2. 24
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.02.24.       김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectInitCombo.do")
    public View selectInitCombo(UiMapDto dto, Model model) throws Exception {
        service.selectPLANTID(dto);
        service.selectProcessClassType(dto);
        service.selectProcessSegMentTop(dto);
        return apply(dto, model);
    }
    
    //재작업 번호 팝업 리스트 조회 
    @RequestMapping(value = "selectProcessDefIDPopup.do")
    public View selectProcessDefIDPopup(UiMapDto dto, Model model) throws Exception {
        service.selectProcessDefIDPopup(dto);
        return apply(dto, model);
    }
    
    //재작업 버전 콤보 Dataset 조회
    @RequestMapping(value = "selectProcessdefVersion.do")
    public View selectProcessdefVersion(UiMapDto dto, Model model) throws Exception {
    	System.out.println("------in to selectProcessdefVersion controller");
        service.selectProcessdefVersion(dto);
        return apply(dto, model);
    }
    
    //재작업 라우팅 조회(상단 그리드)
    @RequestMapping(value = "selectProcessdefinitionList.do")
    public View selectProcessdefinitionList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessdefinitionList(dto);
        return apply(dto, model);
    }
    
    //공정 순서 조회(중간 탭 1 페이지)
    @RequestMapping(value = "selectProcessPathList.do")
    public View selectProcessPathList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessPathList(dto);
        return apply(dto, model);
    }
    
    //품목지정 조회(중간 탭 2 페이지)
    @RequestMapping(value = "selectProductReworkControl.do")
    public View selectProductReworkControl(UiMapDto dto, Model model) throws Exception {
        service.selectProductReworkControl(dto);
        return apply(dto, model);
    }
    
    //사용 작업장 조회(중간 탭 3 페이지)
    @RequestMapping(value = "selectAreaReworkControl.do")
    public View selectAreaReworkControl(UiMapDto dto, Model model) throws Exception {
        service.selectAreaReworkControl(dto);
        return apply(dto, model);
    }
    
    //대체자원 조회(하단 탭 1 페이지)
    @RequestMapping(value = "selectReworkRoutingResource.do")
    public View selectReworkRoutingResource(UiMapDto dto, Model model) throws Exception {
        service.selectReworkRoutingResource(dto);
        return apply(dto, model);
    }
    
    //설비 지정 조회(하단 탭 2 페이지)
    @RequestMapping(value = "selectReworkRoutingEquipment.do")
    public View selectReworkRoutingEquipment(UiMapDto dto, Model model) throws Exception {
        service.selectReworkRoutingEquipment(dto);
        return apply(dto, model);
    }
    
    //공정 팝업
    @RequestMapping(value = "selectProcessSegmentExtPupop.do")
    public View selectProcessSegmentExtPupop(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentExtPupop(dto);
        return apply(dto, model);
    }
    
    //품목 선택 
    @RequestMapping(value = "selectProductDefinitionList.do")
    public View selectProductDefinitionList(UiMapDto dto, Model model) throws Exception {
        service.selectProductDefinitionList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveReworkRouting.do")
    public View saveReworkRouting(UiMapDto dto, Model model) throws Exception {
    	
        service.saveReworkRouting(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectAreaList.do")
    public View selectAreaList(UiMapDto dto, Model model) throws Exception {
    	
        service.selectAreaList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectReworkRoutingEquipmentPopup.do")
    public View selectReworkRoutingEquipmentPopup(UiMapDto dto, Model model) throws Exception {
    	
        service.selectReworkRoutingEquipmentPopup(dto);
        return apply(dto, model);
    }
    
}
