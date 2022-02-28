package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM00800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00800Controller
* @Company: Built1
* @Create Date: 2021.3.4
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 4.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm00800")
public class PCM00800Controller extends AbstractWebController {

    @Autowired
    private PCM00800Service service;

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
     * @brief : 투입 실적 탭 조회 
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
     @RequestMapping(value = "selectInputResultByInputDay.do")
     public View selectInputResultByInputDay(UiMapDto dto, Model model) throws Exception {
         service.selectInputResultByInputDay(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn :   
      * @brief : 품목별 투입 실적 탭 조회 
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
      @RequestMapping(value = "selectInputResultbyProduct.do")
      public View selectInputResultbyProduct(UiMapDto dto, Model model) throws Exception {
          service.selectInputResultbyProduct(dto);
          return apply(dto, model);
      }
      
      /**
       * @fn :   
       * @brief : Lot별 투입 실적 탭 조회 
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
       @RequestMapping(value = "selectInputResultByLot.do")
       public View selectInputResultByLot(UiMapDto dto, Model model) throws Exception {
           service.selectInputResultByLot(dto);
           return apply(dto, model);
       }
      
     
}
