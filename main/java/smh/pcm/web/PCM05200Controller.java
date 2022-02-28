package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM05200Service;


/**
* @file: PCM05200Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05200Controller
* @Company: Built1
* @Create Date: 2021.4.19
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 19.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm05200")
public class PCM05200Controller extends AbstractWebController {

    @Autowired
    private PCM05200Service service;

  
    
    /**
     * @fn :   
     * @brief : 중공정 콤보 조회
     * @remark
     * @Create Date: 2021. 4. 19
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  19.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectProcessSegmentClassByType.do")
     public View selectProcessSegmentClassByType(UiMapDto dto, Model model) throws Exception {
         service.selectProcessSegmentClassByType(dto);
         return apply(dto, model);
	 }
     /**
      * @fn :   
      * @brief : 공정 탭 조회
      * @remark
      * @Create Date: 2021. 4. 22
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4.  22.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectStockbyprocessList.do")
      public View selectStockbyprocessList(UiMapDto dto, Model model) throws Exception {
          service.selectStockbyprocessList(dto);
          return apply(dto, model);
 	 }
      /**
       * @fn :   
       * @brief : 품목 탭 조회
       * @remark
       * @Create Date: 2021. 4. 23
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 4.  23.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectStockbyProductList.do")
       public View selectStockbyProductList(UiMapDto dto, Model model) throws Exception {
           service.selectStockbyProductList(dto);
           return apply(dto, model);
  	 }
      
}
