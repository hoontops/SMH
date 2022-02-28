package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: PCM04100Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: PCM04100Controller
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm04100")
public class PCM04100Controller extends AbstractWebController {

    @Autowired
    private PCM04100Service service;

    /**
    * @fn : savePcmLothold
    * @brief :  Lot보류
    * @Method Name : savePcmLothold
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    @RequestMapping(value = "savePcmLothold.do")
    public View savePcmLothold(UiMapDto dto, Model model) throws Exception {
        service.savePcmLothold(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectWIPListCommon
    * @brief : Lot보류
    * @Method Name : selectWIPListCommon
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectWIPListCommon.do")
    public View selectWIPListCommon(UiMapDto dto, Model model) throws Exception {
        service.selectWIPListCommon(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectBasReasonCodeClassList
    * @brief : selectBasReasonCodeClassList
    * @Method Name : selectBasReasonCodeClassList
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
   @RequestMapping(value = "selectBasReasonCodeClassList.do")
    public View selectBasReasonCodeClassList(UiMapDto dto, Model model) throws Exception {
        service.selectBasReasonCodeClassList(dto);
        return apply(dto, model);
    }

   /**
   * @fn : selectBasReasonCodeList
   * @brief : selectBasReasonCodeList
   * @Method Name : selectBasReasonCodeList
   * @remark
   * @Create Date: 2021. 3. 10. 오후 4:58:04
   * @Author: 진성하
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021. 3. 10.       진성하     최초  생성
    *
   */
    @RequestMapping(value = "selectBasReasonCodeList.do")
    public View selectBasReasonCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectBasReasonCodeList(dto);
        return apply(dto, model);
    }
    

}
