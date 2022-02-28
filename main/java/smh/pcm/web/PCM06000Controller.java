package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM06000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM06000Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06000Controller
* @Company: Built1
* @Create Date: 2021.06.03
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.03.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm06000")
public class PCM06000Controller extends AbstractWebController {

    @Autowired
    private PCM06000Service service;

    /**
    * @fn :   
    * @brief : 품목 탭 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.03.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectRollLossByProduct.do")
    public View selectRollLossByProduct(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectRollLossByProduct ************* !!!");
        service.selectRollLossByProduct(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 공정 탭 투입 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.03.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectRollLossBySegment_Input.do")
    public View selectRollLossBySegment_Input(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectRollLossBySegment_Input ************* !!!");
        service.selectRollLossBySegment_Input(dto);
        return apply(dto, model);
    }

    
    /**
    * @fn :   
    * @brief : 공정 탭 완료 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.03.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectRollLossBySegment_Complete.do")
    public View selectRollLossBySegment_Complete(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectRollLossBySegment_Complete ************* !!!");
        service.selectRollLossBySegment_Complete(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : LOT 탭 투입 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.03.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectRollLossByLot_Input.do")
    public View selectRollLossByLot_Input(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectRollLossByLot_Input ************* !!!");
        service.selectRollLossByLot_Input(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief : LOT 탭 완료 조회
     * @remark
     * @Create Date: 2021.06.03
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.03.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectRollLossByLot_Complete.do")
     public View selectRollLossByLot_Complete(UiMapDto dto, Model model) throws Exception {
     	System.out.println("lucky selectRollLossByLot_Complete ************* !!!");
         service.selectRollLossByLot_Complete(dto);
         return apply(dto, model);
     }
    
}
