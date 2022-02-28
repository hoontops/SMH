package smh.osm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.osm.service.OSM00600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: OSM00600Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: OSM00600Controller
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
@RequestMapping(value = "/osm00600")
public class OSM00600Controller extends AbstractWebController {

    @Autowired
    private OSM00600Service service;

    /**
    * @fn : selectGetOutsourcedClaimClosureStatusIf
    * @brief : Claim 비용 마감 전송
    * @Method Name : selectGetOutsourcedClaimClosureStatusIf
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
    @RequestMapping(value = "selectGetOutsourcedClaimClosureStatusIf.do")
    public View selectGetOutsourcedClaimClosureStatusIf(UiMapDto dto, Model model) throws Exception {
        service.selectGetOutsourcedClaimClosureStatusIf(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectGetOutsourcedClaimClosureStatusIfSandDetail
     * @brief :  Claim 마감 전송 - Claim 비용 분항 /감면 Detail 조회
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
    @RequestMapping(value = "selectGetOutsourcedClaimClosureStatusIfSandDetail.do")
      public View selectGetOutsourcedClaimClosureStatusIfSandDetail(UiMapDto dto, Model model) throws Exception {
        service.selectGetOutsourcedClaimClosureStatusIfSandDetail(dto);
        return apply(dto, model);
      }
    
    
    /**
     * @fn : saveCloseProcess
     * @brief :  Claim 마감 전송 - Detail 저장
     * @remark
     * @Create Date: 2021. 06. 25
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 25.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "saveCloseProcess.do")
      public View saveCloseProcess(UiMapDto dto, Model model) throws Exception {
        service.saveCloseProcess(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : saveErpProcess
     * @brief :  Claim 마감 전송 - ERP 전송
     * @remark
     * @Create Date: 2021. 06. 25
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 25.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "saveErpProcess.do")
      public View saveErpProcess(UiMapDto dto, Model model) throws Exception {
        service.saveErpProcess(dto);
        return apply(dto, model);
      }
      

}
