package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM04800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04800Controller
* @Company: Built1
* @Create Date: 2021.3.29
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 29.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04800")
public class PCM04800Controller extends AbstractWebController {

    @Autowired
    private PCM04800Service service;

    /**
    * @fn :   
    * @brief : 상단 Lot 정보
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.26.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotInfoBylotID.do")
    public View selectLotInfoBylotID(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotInfoBylotID ************* !!!");
        service.selectLotInfoBylotID(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 좌측 Routing 그리드
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.26.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotRouting.do")
    public View selectLotRouting(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotRouting ************* !!!");
        service.selectLotRouting(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 자원 탭 그리드
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.26.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotRoutingResource.do")
    public View selectLotRoutingResource(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotRoutingResource ************* !!!");
        service.selectLotRoutingResource(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 자재 탭 그리드
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.26.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotRoutingMaterial.do")
    public View selectLotRoutingMaterial(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotRoutingMaterial ************* !!!");
        service.selectLotRoutingMaterial(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 치공구 탭 그리드
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.26.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotRoutingDurable.do")
    public View selectLotRoutingDurable(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotRoutingDurable ************* !!!");
        service.selectLotRoutingDurable(dto);
        return apply(dto, model);
    }
    
    
   /**
    * @fn :   
    * @brief : 자원 팝업 
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
    @RequestMapping(value = "selectLotResource.do")
    public View selectLotResource(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotResource ************* !!!");
        service.selectLotResource(dto);
        return apply(dto, model);
    }
    
    

    /**
    * @fn :   
    * @brief :Lot Routing 저장. 
    * @remark : asis - SaveSampleRouting
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
    @RequestMapping(value = "saveLotRouting.do")
    public View saveLotRouting(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky saveLotRouting ************* !!!");
        service.saveLotRouting(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief :Rev. 변경
     * @remark : 
     * @Create Date: 2021.05.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.28.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "saveChangeVersion.do")
     public View saveChangeVersion(UiMapDto dto, Model model) throws Exception {
     	System.out.println("lucky saveChangeVersion ************* !!!");
         service.saveChangeVersion(dto);
         return apply(dto, model);
     }
}
