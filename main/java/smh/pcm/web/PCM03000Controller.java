package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM03000Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03000Controller
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
@RequestMapping(value = "/pcm03000")
public class PCM03000Controller extends AbstractWebController {

    @Autowired
    private PCM03000Service service;

    /**
    * @fn :   
    * @brief : 제품 버전 콤보 데이타 조회
    * @remark
    * @Create Date: 2021. 3. 9
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3.  9.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectProductVersion.do")
    public View selectProductVersion(UiMapDto dto, Model model) throws Exception {
        service.selectProductVersion(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief : 품목 탭 조회 
     * @remark
     * @Create Date: 2021. 3. 29
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3.  29.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectProductDefinitionList.do")
     public View selectProductDefinitionList(UiMapDto dto, Model model) throws Exception {
         service.selectProductDefinitionList(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn :   
      * @brief : 공정 탭 조회 
      * @remark
      * @Create Date: 2021. 3. 29
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3.  29.   김애리     최초  생성
       *
      */ 
      @RequestMapping(value = "selectProcessSegmentList.do")
      public View selectProcessSegmentList(UiMapDto dto, Model model) throws Exception {
          service.selectProcessSegmentList(dto);
          return apply(dto, model);
      }
      
      /**
       * @fn :   
       * @brief : Lot 탭 조회 
       * @remark
       * @Create Date: 2021. 3. 29
       * @Author: 김애리
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3.  29.   김애리     최초  생성
        *
       */ 
       @RequestMapping(value = "selectWipLotMessageList.do")
       public View selectWipLotMessageList(UiMapDto dto, Model model) throws Exception {
           service.selectWipLotMessageList(dto);
           return apply(dto, model);
       }
      
     

       /**
       * @fn :   
       * @brief : 전달 공정 팝업 조회
       * @remark
       * @Create Date: 2021. 3. 30
       * @Author: 김애리
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 30.   김애리     최초  생성
        *
       */ 
       @RequestMapping(value = "selectProcessPathByProductDef.do")
       public View selectProcessPathByProductDef(UiMapDto dto, Model model) throws Exception {
           service.selectProcessPathByProductDef(dto);
           return apply(dto, model);
       }
       
       
       @RequestMapping(value = "saveProductDefInfo.do")
       public View saveProductDefInfo(UiMapDto dto, Model model) throws Exception {
           service.saveProductDefInfo(dto);
           return apply(dto, model);
       }  
       
       @RequestMapping(value = "saveSegmentInfo.do")
       public View saveSegmentInfo(UiMapDto dto, Model model) throws Exception {
           service.saveSegmentInfo(dto);
           return apply(dto, model);
       }  
       

       @RequestMapping(value = "saveTargetWip.do")
       public View saveTargetWip(UiMapDto dto, Model model) throws Exception {
           service.saveTargetWip(dto);
           return apply(dto, model);
       }  
       
}
