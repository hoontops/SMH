package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS04400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04400Controller
* @Company: Built1
* @Create Date: 2021.4.13
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.13.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas04400")
public class BAS04400Controller extends AbstractWebController {

    @Autowired
    private BAS04400Service service;
    
    /**
     * @fn : selectBasQcgradeList
     * @brief : 조치등급 조회
     * @remark
     * @Create Date: 2021.4.13
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.13.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectBasQcgradeList.do")
     public View selectBasQcgradeList(UiMapDto dto, Model model) throws Exception {
         service.selectBasQcgradeList(dto);
         return apply(dto, model);
     }
     
    /**
     * @fn : selectBasQcinterlockaction
     * @brief : 품질 InterLock 등급정보 조회
     * @remark
     * @Create Date: 2021.4.13
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.13.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectBasQcinterlockList.do")
     public View selectBasQcinterlockList(UiMapDto dto, Model model) throws Exception {
         service.selectBasQcinterlockList(dto);
         return apply(dto, model);
     }

     /**
      * @fn : selectBasQcinterlockaction
      * @brief : 품질 InterLock Action 정보조회
      * @remark
      * @Create Date: 2021.4.13
      * @Author: 권혜영
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021.4.13.       권혜영     최초  생성
       *
      */
      @RequestMapping(value = "selectBasQcinterlockactionList.do")
      public View selectBasQcinterlockactionList(UiMapDto dto, Model model) throws Exception {
          service.selectBasQcinterlockactionList(dto);
          return apply(dto, model);
      }

      /**
       * @fn : saveBasQcinterlock
       * @brief : 품질 InterLock 등급정보 저장 / 품질 InterLock Action 정보 저장
       * @remark
       * @Create Date: 2021.4.13
       * @Author: 권혜영
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021.4.13.       권혜영     최초  생성
        *
       */
       @RequestMapping(value = "saveBasQcinterlock.do")
       public View saveBasQcinterlock(UiMapDto dto, Model model) throws Exception {
       	
           service.saveBasQcinterlock(dto);
           return apply(dto, model);
       }
}
