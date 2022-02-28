package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03900Service;


/**
* @file: PCM03900Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03900Controller
* @Company: Built1
* @Create Date: 2021.5.21
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 21.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm03900")
public class PCM03900Controller extends AbstractWebController {

    @Autowired
    private PCM03900Service service;

  
    
    /**
     * @fn :   
     * @brief : 재공현황 조회
     * @remark
     * @Create Date: 2021. 5. 21
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  21.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectWIPList.do")
     public View selectWIPList(UiMapDto dto, Model model) throws Exception {
         service.selectWIPList(dto);
         return apply(dto, model);
     }
     
    /**
     * @fn :   
     * @brief : 대상공정 콤보 조회
     * @remark
     * @Create Date: 2021. 5. 24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 5.  24.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectProcessPathByProductDefAndSequence.do")
     public View selectProcessPathByProductDefAndSequence(UiMapDto dto, Model model) throws Exception {
         service.selectProcessPathByProductDefAndSequence(dto);
         return apply(dto, model);
     }
     
     
     /**
      * @fn :   
      * @brief : 대상공정 콤보 조회 4 Lot Routing
      * @remark
      * @Create Date: 2021. 7. 20
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 7.  20.   김애리     최초  생성
       *
      */ 
      @RequestMapping(value = "selectProcessPathByProductDef4Lot.do")
      public View selectProcessPathByProductDef4Lot(UiMapDto dto, Model model) throws Exception {
          service.selectProcessPathByProductDef4Lot(dto);
          return apply(dto, model);
      }
      
	/**
	 * @fn :   
	 * @brief : Step 콤보 조회
	 * @remark
	 * @Create Date: 2021. 5. 24
	 * @Author: 박대호
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021. 5.  24.   박대호     최초  생성
	  *
	 */ 
	 @RequestMapping(value = "selectStepCboList.do")
	 public View selectStepCboList(UiMapDto dto, Model model) throws Exception {
	     service.selectStepCboList(dto);
	     return apply(dto, model);
	 }
       
    /**
	* @fn :   
	* @brief : 사유 콤보 조회
	* @remark
	* @Create Date: 2021. 5. 24
	* @Author: 박대호
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일      수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 5.  24.   박대호     최초  생성
	 *
	*/ 
	@RequestMapping(value = "selectReasonCodeList.do")
	public View selectReasonCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectReasonCodeList(dto);
        return apply(dto, model);
    }
        
	/**
	 * @fn :   
	 * @brief : 예약 Locking 저장
	 * @remark
	 * @Create Date: 2021. 5. 24
	 * @Author: 박대호
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021. 5.  24.   박대호     최초  생성
	  *
	 */ 
     @RequestMapping(value = "saveLotLocking.do")
     public View saveLotLocking(UiMapDto dto, Model model) throws Exception {
         service.saveLotLocking(dto);
         return apply(dto, model);
     }
        
}
