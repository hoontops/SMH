package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM04500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: PCM04500Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: PCM04500Controller
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
@RequestMapping(value = "/pcm04500")
public class PCM04500Controller extends AbstractWebController {

    @Autowired
    private PCM04500Service service;

    /**
    * @fn : saveLotSplit
    * @brief :  Lot분할
    * @Method Name : saveLotSplit
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
    @RequestMapping(value = "saveLotSplit.do")
    public View saveLotSplit(UiMapDto dto, Model model) throws Exception {
        service.saveLotSplit(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectWIPList
    * @brief : Lot분할
    * @Method Name : selectWIPList
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
    @RequestMapping(value = "selectWIPList.do")
    public View selectWIPList(UiMapDto dto, Model model) throws Exception {
        service.selectWIPList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectGetUomDefinitionList
    * @brief : selectGetUomDefinitionList
    * @Method Name : selectGetUomDefinitionList
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
   @RequestMapping(value = "selectGetUomDefinitionList.do")
    public View selectGetUomDefinitionList(UiMapDto dto, Model model) throws Exception {
        service.selectGetUomDefinitionList(dto);
        return apply(dto, model);
    }

   /**
   * @fn : selectLotInfoBylotID
   * @brief : selectLotInfoBylotID
   * @Method Name : selectLotInfoBylotID
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
  @RequestMapping(value = "selectLotInfoBylotID.do")
   public View selectLotInfoBylotID(UiMapDto dto, Model model) throws Exception {
       service.selectLotInfoBylotID(dto);
       return apply(dto, model);
   }

  /**
  * @fn : GetCurrentRoutingByLot
  * @brief : GetCurrentRoutingByLot
  * @Method Name : GetCurrentRoutingByLot
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
 @RequestMapping(value = "GetCurrentRoutingByLot.do")
  public View GetCurrentRoutingByLot(UiMapDto dto, Model model) throws Exception {
      service.GetCurrentRoutingByLot(dto);
      return apply(dto, model);
  }
 /**
 * @fn : SelectReworkRoutingResource
 * @brief : SelectReworkRoutingResource
 * @Method Name : GetCurrentRoutingByLot
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
@RequestMapping(value = "SelectReworkRoutingResource.do")
 public View SelectReworkRoutingResource(UiMapDto dto, Model model) throws Exception {
     service.SelectReworkRoutingResource(dto);
     return apply(dto, model);
 }

/**
* @fn : SelectReworkRoutingResource10002
* @brief : SelectReworkRoutingResource10002
* @Method Name : SelectReworkRoutingResource10002
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
@RequestMapping(value = "SelectReworkRoutingResource10002.do")
public View SelectReworkRoutingResource10002(UiMapDto dto, Model model) throws Exception {
    service.SelectReworkRoutingResource10002(dto);
    return apply(dto, model);
}

  /**
  * @fn : selectGetReasonCodeList
  * @brief : selectGetReasonCodeList
  * @Method Name : selectGetReasonCodeList
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
 @RequestMapping(value = "selectGetReasonCodeList.do")
  public View selectGetReasonCodeList(UiMapDto dto, Model model) throws Exception {
      service.selectGetReasonCodeList(dto);
      return apply(dto, model);
  }

 /**
 * @fn : GetProcessPathList
 * @brief : GetProcessPathList
 * @Method Name : GetProcessPathList
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
 @RequestMapping(value = "GetProcessPathList.do")
 public View GetProcessPathList(UiMapDto dto, Model model) throws Exception {
     service.GetProcessPathList(dto);
     return apply(dto, model);
 }

 /**
 * @fn : selectGetReasonCodeList
 * @brief : selectGetReasonCodeList
 * @Method Name : selectGetReasonCodeList
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
 @RequestMapping(value = "SelectReworkRouting.do")
 public View SelectReworkRouting(UiMapDto dto, Model model) throws Exception {
     service.SelectReworkRouting(dto);
     return apply(dto, model);
 }

 /**
 * @fn : GetProcessPathList10005
 * @brief : GetProcessPathList10005
 * @Method Name : GetProcessPathList10005
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
 @RequestMapping(value = "GetProcessPathList10005.do")
 public View GetProcessPathList10005(UiMapDto dto, Model model) throws Exception {
     service.GetProcessPathList10005(dto);
     return apply(dto, model);
 }
 /**
 * @fn : GetProductRoutingPreviousProcessPaths
 * @brief : GetProductRoutingPreviousProcessPaths
 * @Method Name : GetProductRoutingPreviousProcessPaths
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
 @RequestMapping(value = "GetProductRoutingPreviousProcessPaths.do")
 public View GetProductRoutingPreviousProcessPaths(UiMapDto dto, Model model) throws Exception {
     service.GetProductRoutingPreviousProcessPaths(dto);
     return apply(dto, model);
 }


}
