package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM04300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04300Controller
* @Company: Built1
* @Create Date: 2021. 4. 21.
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 21.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04300")
public class PCM04300Controller extends AbstractWebController {

    @Autowired
    private PCM04300Service service;

    /**
    * @fn :   
    * @brief :  재공 목록 조회 
    * @remark
    * @Create Date: 2021. 4. 21
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectWIPList.do")
    public View selectWIPList(UiMapDto dto, Model model) throws Exception {
        service.selectWIPList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief : 대상 공정 조회 
     * @remark
     * @Create Date: 2021. 4. 21
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 21.   김애리     최초  생성
      *
     */ 
	@RequestMapping(value = "selectProcessSegment.do")
	public View selectProcessSegment(UiMapDto dto, Model model) throws Exception {
    	 System.out.println("lucky selectProcessSegment ************* !!!");
         service.selectProcessSegment(dto);
	     return apply(dto, model);
	}
     

    /**
     * @fn :   
     * @brief : 대상 공정 조회 4 Lot Routing
     * @remark
     * @Create Date: 2021. 7. 20
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.7. 20.   김애리     최초  생성
      *
     */ 
	@RequestMapping(value = "selectProcessSegment4Lot.do")
	public View selectProcessSegment4Lot(UiMapDto dto, Model model) throws Exception {
    	 System.out.println("lucky selectProcessSegment4Lot ************* !!!");
         service.selectProcessSegment4Lot(dto);
	     return apply(dto, model);
	}
     
     /**
      * @fn :   
      * @brief : 자원 조회 
      * @remark
      * @Create Date: 2021. 4. 21
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4. 21.   김애리     최초  생성
       *
      */ 
	@RequestMapping(value = "selectResourceByProductSegment.do")
	public View selectResourceByProductSegment(UiMapDto dto, Model model) throws Exception {
    	  System.out.println("lucky selectResourceByProductSegment ************* !!!");
          service.selectResourceByProductSegment(dto);
          return apply(dto, model);
	}
     
	/**
       * @fn :   
       * @brief : LOT 공정이동 저장
       * @remark
       * @Create Date: 2021. 4. 21
       * @Author: 김애리
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 4. 21.   김애리     최초  생성
        *
       */ 
	@RequestMapping(value = "saveMoveProcessPath.do")
	public View saveMoveProcessPath(UiMapDto dto, Model model) throws Exception {
		System.out.println("lucky saveMoveProcessPath ************* !!!");
		service.saveMoveProcessPath(dto);
		return apply(dto, model);
	}  
	    
    	    
    
}
