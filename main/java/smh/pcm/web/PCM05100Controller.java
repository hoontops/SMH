package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05000Service;
import smh.pcm.service.PCM05100Service;
import smh.pcm.service.PCM06100Service;


/**
* @file: PCM05100Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05100Controller
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05100")
public class PCM05100Controller extends AbstractWebController {

    @Autowired
    private PCM05100Service service;

  
    
    /**
     * @fn :   
     * @brief : 고객사 조회  
     * @remark
     * @Create Date: 2021. 4. 5
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  5.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectProductDefVersion.do")
     public View selectProductDefVersion(UiMapDto dto, Model model) throws Exception {
         service.selectProductDefVersion(dto);
         return apply(dto, model);
	 }
	 /**
	  * @fn :   
	  * @brief : 품목 라우팅 조회  
	  * @remark
	  * @Create Date: 2021. 4. 5
	  * @Author: 박대호
	  * @File Version: v1.0
	   *
	   * << 개정이력(Modification Information) >>
	   *
	   *     수정일      수정자   수정내용
	   *   ------------  ------  ----------
	   *   2021. 4.  5.   박대호     최초  생성
	   *
	  */ 
	  @RequestMapping(value = "selectProductDetailRoutingList.do")
	  public View selectProductDetailRoutingList(UiMapDto dto, Model model) throws Exception {
	      service.selectProductDetailRoutingList(dto);
	      return apply(dto, model);
	  }
	  /**
	   * @fn :   
	   * @brief : 자재 사용이력 조회  
	   * @remark
	   * @Create Date: 2021. 4. 5
	   * @Author: 박대호
	   * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일      수정자   수정내용
	    *   ------------  ------  ----------
	    *   2021. 4.  5.   박대호     최초  생성
	    *
	   */ 
	   @RequestMapping(value = "selectProductDetailConsumableList.do")
	   public View selectProductDetailConsumableList(UiMapDto dto, Model model) throws Exception {
	       service.selectProductDetailConsumableList(dto);
	       return apply(dto, model);
	   } 
	   /**
	* @fn :   
	* @brief : 연관공정 현황
	* @remark
	* @Create Date: 2021. 4. 5
	* @Author: 박대호
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일      수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 4.  5.   박대호     최초  생성
	 *
	*/ 
	@RequestMapping(value = "selectProductDetailRelatedSegment.do")
	public View selectProductDetailRelatedSegment(UiMapDto dto, Model model) throws Exception {
	    service.selectProductDetailRelatedSegment(dto);
	    return apply(dto, model);
	} 
	/**
	 * @fn :   
	 * @brief : 치공구 사용이력
	 * @remark
	 * @Create Date: 2021. 4. 6
	 * @Author: 박대호
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021. 4.  6.   박대호     최초  생성
	  *
	 */ 
	 @RequestMapping(value = "selectProductDetailDurableList.do")
	 public View selectProductDetailDurableList(UiMapDto dto, Model model) throws Exception {
	     service.selectProductDetailDurableList(dto);
	     return apply(dto, model);
	 } 
	 /**
	  * @fn :   
	  * @brief : 설비 사용이력
	  * @remark
	  * @Create Date: 2021. 4. 6
	  * @Author: 박대호
	  * @File Version: v1.0
	   *
	   * << 개정이력(Modification Information) >>
	   *
	   *     수정일      수정자   수정내용
	   *   ------------  ------  ----------
	   *   2021. 4.  6.   박대호     최초  생성
	   *
	  */ 
	  @RequestMapping(value = "selectProductDetailEquipmentList.do")
	  public View selectProductDetailEquipmentList(UiMapDto dto, Model model) throws Exception {
	      service.selectProductDetailEquipmentList(dto);
	      return apply(dto, model);
	  } 
	  /**
	   * @fn :   
	   * @brief : 불량이력
	   * @remark
	   * @Create Date: 2021. 4. 6
	   * @Author: 박대호
	   * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일      수정자   수정내용
	    *   ------------  ------  ----------
	    *   2021. 4.  6.   박대호     최초  생성
	    *
	   */ 
	   @RequestMapping(value = "selectProductDetailDefectList.do")
	       public View selectProductDetailDefectList(UiMapDto dto, Model model) throws Exception {
	           service.selectProductDetailDefectList(dto);
	           return apply(dto, model);
	   } 
	   /**
	* @fn :   
	* @brief : 재공현황
	* @remark
	* @Create Date: 2021. 4. 6
	* @Author: 박대호
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일      수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 4.  6.   박대호     최초  생성
	 *
	*/ 
	@RequestMapping(value = "selectWIPListCommon.do")
	public View selectWIPListCommon(UiMapDto dto, Model model) throws Exception {
	    service.selectWIPListCommon(dto);
	    return apply(dto, model);
	} 
	/**
	 * @fn :   
	 * @brief : 공정실적
	 * @remark
	 * @Create Date: 2021. 4. 6
	 * @Author: 박대호
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021. 4.  6.   박대호     최초  생성
	  *
	 */ 
	 @RequestMapping(value = "selectProductDetailWorkResult.do")
	 public View selectProductDetailWorkResult(UiMapDto dto, Model model) throws Exception {
	     service.selectProductDetailWorkResult(dto);
	     return apply(dto, model);
	 } 
            
}
