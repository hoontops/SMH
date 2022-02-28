package smh.pcm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01100Service;


/**
* @file: PCM01100Controller.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01100Controller
* @Company: Built1
* @Create Date: 2021.4.26
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 26.    박대호     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm01100")
public class PCM01100Controller extends AbstractWebController {

    @Autowired
    private PCM01100Service service;

  
    
    /**
     * @fn :   
     * @brief : 계획대비 투입 실적 조회 
     * @remark
     * @Create Date: 2021. 4. 26
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4.  26.   박대호     최초  생성
      *
     */ 
     @RequestMapping(value = "selectInputLotRecordPerPlanChartResult.do")
     public View selectInputLotRecordPerPlanChartResult(UiMapDto dto, Model model) throws Exception {
         service.selectInputLotRecordPerPlanChartResult(dto);
         return apply(dto, model);
     }
     /**
      * @fn :   
      * @brief : 계획대비 투입 실적 디테일 조회 
      * @remark
      * @Create Date: 2021. 4. 28
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 4.  28.   박대호     최초  생성
       *
      */ 
      @RequestMapping(value = "selectinputlotrecordperplangridDetail.do")
      public View selectinputlotrecordperplangridDetail(UiMapDto dto, Model model) throws Exception {
          service.selectinputlotrecordperplangridDetail(dto);
          return apply(dto, model);
      }
     
     
}
