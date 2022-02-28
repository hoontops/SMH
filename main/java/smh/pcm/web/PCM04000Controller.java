package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04000Service;


/**
* @file: PCM04000Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04000Controller
* @Company: Built1
* @Create Date: 2021.5.24
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 24.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04000")
public class PCM04000Controller extends AbstractWebController {

    @Autowired
    private PCM04000Service service;

  
    
    /**
     * @fn :   
     * @brief : 재공현황 조회
     * @remark
     * @Create Date: 2021. 5. 24-----
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
     @RequestMapping(value = "selectLotLockingReserve.do")
     public View selectLotLockingReserve(UiMapDto dto, Model model) throws Exception {
         service.selectLotLockingReserve(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 예약 Locking 해제 저장
      * @remark
      * @Create Date: 2021. 5. 25-----
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 5.  25.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "saveLotLockingReserveData.do")
      public View saveLotLockingReserveData(UiMapDto dto, Model model) throws Exception {
          service.saveLotLockingReserveData(dto);
          return apply(dto, model);
      }
     
        
}
