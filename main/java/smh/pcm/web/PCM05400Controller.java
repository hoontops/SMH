package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM05400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05400Controller
* @Company: Built1
* @Create Date: 2021.05.31
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.31.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05400")
public class PCM05400Controller extends AbstractWebController {

    @Autowired
    private PCM05400Service service;

    /**
    * @fn :   
    * @brief : category 조회
    * @remark
    * @Create Date: 2021.05.31
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.31.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectCategory.do")
    public View selectCategory(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectCategory ************* !!!");
        service.selectCategory(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : APP 탭 조회
    * @remark
    * @Create Date: 2021.05.31
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.31.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLeadTimeByApp.do")
    public View selectLeadTimeByApp(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLeadTimeByApp ************* !!!");
        service.selectLeadTimeByApp(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : TYPE 탭 조회
    * @remark
    * @Create Date: 2021.05.31
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.31.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLeadTimeByType.do")
    public View selectLeadTimeByType(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLeadTimeByType ************* !!!");
        service.selectLeadTimeByType(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 품목 탭 조회
    * @remark
    * @Create Date: 2021.05.31
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.31.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLeadTimeByProduct.do")
    public View selectLeadTimeByProduct(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLeadTimeByProduct ************* !!!");
        service.selectLeadTimeByProduct(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : LOT 탭 조회
    * @remark
    * @Create Date: 2021.05.31
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.31.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLeadTimeByLot.do")
    public View selectLeadTimeByLot(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLeadTimeByLot ************* !!!");
        service.selectLeadTimeByLot(dto);
        return apply(dto, model);
    }
    
    
   /**
    * @fn :   
    * @brief : Segment 탭 조회
    * @remark
    * @Create Date: 2021.05.06
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.06.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLeadTimeBySegment.do")
    public View selectLeadTimeBySegment(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLeadTimeBySegment ************* !!!");
        service.selectLeadTimeBySegment(dto);
        return apply(dto, model);
    }
    
    

    /**
    * @fn :   
    * @brief : Area 탭 조회
    * @remark : 
    * @Create Date: 2021.05.07
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.07.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLeadTimeByArea.do")
    public View selectLeadTimeByArea(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLeadTimeByArea ************* !!!");
        service.selectLeadTimeByArea(dto);
        return apply(dto, model);
    }
    
}
