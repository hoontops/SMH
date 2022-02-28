package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02400Service;


/**
* @file: PCM02400Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02400Controller
* @Company: Built1
* @Create Date: 2021.4.30
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 30.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02400")
public class PCM02400Controller extends AbstractWebController {

    @Autowired
    private PCM02400Service service;

  
    
    /**
     * @fn :   
     * @brief : Roll Cut 인계 분할 조회
     * @remark
     * @Create Date: 2021. 4. 30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  30.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectRollCuttingTarget.do")
     public View selectRollCuttingTarget(UiMapDto dto, Model model) throws Exception {
         service.selectRollCuttingTarget(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 인계 자원 콤보 조회
      * @remark
      * @Create Date: 2021. 4. 30
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4.  30.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectTransitAreaList.do")
      public View selectTransitAreaList(UiMapDto dto, Model model) throws Exception {
          service.selectTransitAreaList(dto);
          return apply(dto, model);
      }
      /**
       * @fn :   
       * @brief : LotList 생성 조회
       * @remark
       * @Create Date: 2021. 5. 03
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 5.  03.   박대호     최초  생성
        *
       */ 
       @RequestMapping(value = "selectLotIdMaxSequence_Rollcut.do")
       public View selectLotIdMaxSequence_Rollcut(UiMapDto dto, Model model) throws Exception {
           service.selectLotIdMaxSequence_Rollcut(dto);
           return apply(dto, model);
       }
       /**
        * @fn :   
        * @brief : Lot Cut 인계분할 저장
        * @remark
        * @Create Date: 2021. 5. 03
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 5.  03.   박대호     최초  생성
         *
        */ 
        @RequestMapping(value = "saveRollCutiing.do")
        public View saveRollCutiing(UiMapDto dto, Model model) throws Exception {
            service.saveRollCutiing(dto);
            return apply(dto, model);
        }
}
