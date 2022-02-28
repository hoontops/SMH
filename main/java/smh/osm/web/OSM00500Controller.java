package smh.osm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.osm.service.OSM00500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: OSM00500Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: OSM00500Controller
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
@RequestMapping(value = "/osm00500")
public class OSM00500Controller extends AbstractWebController {

    @Autowired
    private OSM00500Service service;

    /**
    * @fn : selectGetOutsourcedClaimClosureStatus
    * @brief : Claim 마감 현황
    * @Method Name : selectGetOutsourcedClaimClosureStatus
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
    @RequestMapping(value = "selectGetOutsourcedClaimClosureStatus.do")
    public View selectGetOutsourcedClaimClosureStatus(UiMapDto dto, Model model) throws Exception {
        service.selectGetOutsourcedClaimClosureStatus(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectGetOutsourcedClaimClosureStatusDetail
    * @brief : Claim 마감 현황
    * @Method Name : selectGetOutsourcedClaimClosureStatusDetail
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
    @RequestMapping(value = "selectGetOutsourcedClaimClosureStatusDetail.do")
    public View selectGetOutsourcedClaimClosureStatusDetail(UiMapDto dto, Model model) throws Exception {
        service.selectGetOutsourcedClaimClosureStatusDetail(dto);
        return apply(dto, model);
    }
    
    
    /**
     * @fn : selectGetChkOspClose
     * @brief :  Claim 마감 현황 - 확정전 확정 가능한지 체크
     * @remark
     * @Create Date: 2021. 06. 23
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 23.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectGetChkOspClose.do")
      public View selectGetChkOspClose(UiMapDto dto, Model model) throws Exception {
        service.selectGetChkOspClose(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : saveConfProcess
     * @brief :  Claim 마감 현황 - 확정 저장
     * @remark
     * @Create Date: 2021. 06. 23
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 23.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "saveConfProcess.do")
      public View saveConfProcess(UiMapDto dto, Model model) throws Exception {
        service.saveConfProcess(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectGetChkOspCloseCancel
     * @brief :  Claim 마감 현황 - 확정 취소 체크
     * @remark
     * @Create Date: 2021. 06. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 24.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectGetChkOspCloseCancel.do")
      public View selectGetChkOspCloseCancel(UiMapDto dto, Model model) throws Exception {
        service.selectGetChkOspCloseCancel(dto);
        return apply(dto, model);
      }
    
}
