package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import smh.pcm.service.PCMWorkProcessService;


/**
* @file: PCMCommonController.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMCommonController
* @Company: Built1
* @Create Date: 2021.4.12
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.    김성현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcmWorkProcess")
public class PCMWorkProcessController extends AbstractWebController {

     @Autowired
     private PCMWorkProcessService service;

	/**
	 * @fn : saveReceiveLot
	 * @brief : 인수등록
	 * @Method Name : saveReceiveLot
	 * @remark
	 * @Create Date: 2021. 04. 02
	 * @Author: 
	 * @File Version: v1.0 
	  *
	  * << 개정이력(Modification Information) >>
	  *   
	  *     수정일                수정자      수정내용
	  *   ------------  ------  ----------
	  *   2021. 4. 021.   방성혁     최초  생성
	  *
	 */
	 @RequestMapping(value = "saveReceiveLot.do")
     public View saveReceiveLot(UiMapDto dto, Model model) throws Exception {
         service.saveReceiveLot(dto);
         return apply(dto, model);
    }    
     
	 /**
	  * @fn : saveTrackInLot
	  * @brief : 작업시작
	  * @Method Name : saveTrackInLot
	  * @remark
	  * @Create Date: 2021. 04. 02
	  * @Author: 
	  * @File Version: v1.0 
	  *
	  * << 개정이력(Modification Information) >>
	  *   
	  *     수정일                수정자      수정내용
	  *   ------------  ------  ----------
	  *   2021. 4. 021.   방성혁     최초  생성
	  *
	 */
     @RequestMapping(value = "saveTrackInLot.do")
     public View saveTrackInLot(UiMapDto dto, Model model) throws Exception {
          service.saveTrackInLot(dto);
          return apply(dto, model);
     }  
      
	  /**
	   * @fn : saveTrackOutLot
	   * @brief : 작업완료
	   * @Method Name : saveTrackOutLot
	   * @remark
	   * @Create Date: 2021. 04. 02
	   * @Author: 
	   * @File Version: v1.0 
	   *
	   * << 개정이력(Modification Information) >>
	   *   
	   *     수정일                수정자      수정내용
	   *   ------------  ------  ----------
	   *   2021. 4. 021.   방성혁     최초  생성
	   *
	  */
      @RequestMapping(value = "saveTrackOutLot.do")
      public View saveTrackOutLot(UiMapDto dto, Model model) throws Exception {
           service.saveTrackOutLot(dto);
           return apply(dto, model);
      }    
       
      
	  /**
	   * @fn : saveTrackOutLot
	   * @brief : 
	   * @Method Name : saveTrackOutLot
	   * @remark
	   * @Create Date: 2021. 04. 02
	   * @Author: 
	   * @File Version: v1.0 
	   *
	   * << 개정이력(Modification Information) >>
	   *   
	   *     수정일                수정자      수정내용
	   *   ------------  ------  ----------
	   *   2021. 4. 021.   김성현     최초  생성
	   *
	  */
      @RequestMapping(value = "saveLotResourceId.do")
      public View saveLotResourceId(UiMapDto dto, Model model) throws Exception {
           service.saveLotResourceId(dto);
           return apply(dto, model);
      }    
      
       
	   /**
	    * @fn : saveSendLot
	    * @brief : 인계등록
	    * @Method Name : saveSendLot
	    * @remark
	    * @Create Date: 2021. 04. 02
	    * @Author: 
	    * @File Version: v1.0 
	    *
	    * << 개정이력(Modification Information) >>
	    *   
	    *     수정일                수정자      수정내용
	    *   ------------  ------  ----------
	    *   2021. 4. 021.   방성혁     최초  생성
	    *
	   */
	   @RequestMapping(value = "saveSendLot.do")
	   public View saveSendLot(UiMapDto dto, Model model) throws Exception {
	      service.saveSendLot(dto);
	      return apply(dto, model);
	   }  
	   
	   /**
	    * @fn : insertabnormalOccurenceByDelayLot
	    * @brief : 체공 이상발생 등록
	    * @Method Name : insertabnormalOccurenceByDelayLot
	    * @remark
	    * @Create Date: 2021. 04. 02
	    * @Author: 
	    * @File Version: v1.0 
	    *
	    * << 개정이력(Modification Information) >>
	    *   
	    *     수정일                수정자      수정내용
	    *   ------------  ------  ----------
	    *   2021. 4. 021.   방성혁     최초  생성
	    *
	   */
	   @RequestMapping(value = "insertabnormalOccurenceByDelayLot.do")
	   public View insertabnormalOccurenceByDelayLot(UiMapDto dto, Model model) throws Exception {
	      service.insertabnormalOccurenceByDelayLot(dto);
	      return apply(dto, model);
	   }        	   
     
}
