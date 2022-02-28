package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM04700Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04700Controller
* @Company: Built1
* @Create Date: 2021.05.17
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.17.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04700")
public class PCM04700Controller extends AbstractWebController {

    @Autowired
    private PCM04700Service service;

    
    /**
     * @fn :   
     * @brief : PCNNO 팝업
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectPcnListForRC.do")
     public View selectPcnListForRC(UiMapDto dto, Model model) throws Exception {
     	System.out.println("lucky selectPcnListForRC ************* !!!");
         service.selectPcnListForRC(dto);
         return apply(dto, model);
     }
    
    /**
    * @fn :   LOT 적용 품목 조회
    * @brief : 
    * @remark
    * @Create Date: 2021.05.17
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.17.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectProductDefinitionList.do")
    public View selectProductDefinitionList(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectProductDefinitionList ************* !!!");
        service.selectProductDefinitionList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief : LOT 적용 PCNNO 조회
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectPcnInfoForRC.do")
     public View selectPcnInfoForRC(UiMapDto dto, Model model) throws Exception {
     	System.out.println("lucky selectPcnInfoForRC ************* !!!");
         service.selectPcnInfoForRC(dto);
         return apply(dto, model);
     }
     
      
	  /**
	   * @fn :   
	   * @brief : 적용이력 조회
	   * @remark
	   * @Create Date: 2021.05.17
	   * @Author: 김애리
	   * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일      수정자   수정내용
	    *   ------------  ------  ----------
	    *   2021.05.17.   김애리     최초  생성
	    *
	   */ 
    @RequestMapping(value = "selectRcApplyHistory.do")
    public View selectRcApplyHistory(UiMapDto dto, Model model) throws Exception {
       	System.out.println("lucky selectRcApplyHistory ************* !!!");
           service.selectRcApplyHistory(dto);
           return apply(dto, model);
       }
    
    /**
     * @fn :   
     * @brief : RC LOT 대상 목록
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "selectRcTargetLotList.do")
    public View selectRcTargetLotList(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectRcTargetLotList ************* !!!");
        service.selectRcTargetLotList(dto);
        return apply(dto, model);
    }
     
    /**
     * @fn :   
     * @brief : 
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "saveRCLot.do")
    public View saveRCLot(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky saveRCLot ************* !!!");
		service.saveRCLot(dto);
		return apply(dto, model);
	}
     
}
