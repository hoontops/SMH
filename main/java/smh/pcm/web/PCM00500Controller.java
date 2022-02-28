package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM00500Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00500Controller
* @Company: Built1
* @Create Date: 2021.03.08
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 03. 08.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm00500")
public class PCM00500Controller extends AbstractWebController {

    @Autowired
    private PCM00500Service service;

    /**
    * @fn :  selectNotInputProductDefId
    * @brief : PO 및 품목으로 미투입된 품목을 조회
    * @remark
    * @Create Date: 2021. 03. 08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 08.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectNotInputProductDefId.do")
    public View selectNotInputProductDefId(UiMapDto dto, Model model) throws Exception {
        service.selectNotInputProductDefId(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  getProductionOrderIdListOfLotInput
    * @brief : LOT 투입 화면에서 검색조건의 S/O번호 팝업 정보를 조회
    * @remark
    * @Create Date: 2021. 03. 08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 08.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "getProductionOrderIdListOfLotInput.do")
    public View getProductionOrderIdListOfLotInput(UiMapDto dto, Model model) throws Exception {
        service.getProductionOrderIdListOfLotInput(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn :  selectNotInputLotListByProductDefId
    * @brief : 선택한 품목의 LOT 리스트 조회
    * @remark
    * @Create Date: 2021. 03. 08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 08.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectNotInputLotListByProductDefId.do")
    public View selectNotInputLotListByProductDefId(UiMapDto dto, Model model) throws Exception {
        service.selectNotInputLotListByProductDefId(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn :  getLotInputAreaList
    * @brief :  투입 작업장 조회
    * @remark
    * @Create Date: 2021. 03. 08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 08.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value="getLotInputAreaList.do")
    public View getLotInputAreaList(UiMapDto dto, Model model) throws Exception {
        service.getLotInputAreaList(dto);
        return apply(dto, model);
    }     
 
    /**
    * @fn :  selectExpectedCompleteDate
    * @brief :  예상완료일 조회
    * @remark
    * @Create Date: 2021. 03. 08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 08.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value="selectExpectedCompleteDate.do")
    public View selectExpectedCompleteDate(UiMapDto dto, Model model) throws Exception {
        service.selectExpectedCompleteDate(dto);
        return apply(dto, model);
    }  
    
    /**
     * @fn :  inputLot
     * @brief :  LOT 투입
     * @remark
     * @Create Date: 2021. 03. 10
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 03. 10.   방성혁     최초  생성
      *
     */ 
     @RequestMapping(value="saveInputLot.do")
     public View saveInputLot(UiMapDto dto, Model model) throws Exception {
         service.saveInputLot(dto);
         return apply(dto, model);
     }      
}
