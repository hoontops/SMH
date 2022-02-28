package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM00200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00200Controller
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
@RequestMapping(value = "/pcm00200")
public class PCM00200Controller extends AbstractWebController {

    @Autowired
    private PCM00200Service service;

    /**
    * @fn :  selectUnitPriceList 
    * @brief : 단가 테이블 목로 조회 
    * @remark
    * @Create Date: 2021. 3. 4
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3.  4.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectUnitPriceList.do")
    public View selectUnitPriceList(UiMapDto dto, Model model) throws Exception {
        service.selectUnitPriceList(dto);
        return apply(dto, model);
    }
    
    
     /* 화폐 콤보 데이타 조회 */
     @RequestMapping(value = "selectCurrencies.do")
     public View selectCurrencies(UiMapDto dto, Model model) throws Exception {
         service.selectCurrencies(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn :  saveUnitPrice 
      * @brief : 단가 테이블 저장
      * @remark
      * @Create Date: 2021. 3. 4
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3.  4.   김애리     최초  생성
       *
      */ 
     @RequestMapping(value = "saveUnitPrice.do")
     public View saveUnitPrice(UiMapDto dto, Model model) throws Exception {
         service.saveUnitPrice(dto);
         return apply(dto, model);
     }  
     
     
}
