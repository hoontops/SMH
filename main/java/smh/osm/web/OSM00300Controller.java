package smh.osm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.osm.service.OSM00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: OSM00300Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: OSM00300Controller
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
@RequestMapping(value = "/osm00300")
public class OSM00300Controller extends AbstractWebController {

    @Autowired
    private OSM00300Service service;

    /**
    * @fn : saveOsmOspclaim
    * @brief :  Claim 대상 마감월 등록
    * @Method Name : saveOsmOspclaim
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
    @RequestMapping(value = "saveOsmOspclaim.do")
    public View saveOsmOspclaim(UiMapDto dto, Model model) throws Exception {
        service.saveOsmOspclaim(dto);
        return apply(dto, model);
    }

    
    /**
    * @fn : selectOsmOspclaimList
    * @brief : Claim 대상 마감월 등록
    * @Method Name : selectOsmOspclaimList
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
    @RequestMapping(value = "selectOsmOspclaimList.do")
    public View selectOsmOspclaimList(UiMapDto dto, Model model) throws Exception {
        service.selectOsmOspclaimList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveOsmOspclaim
    * @brief :  Claim 대상 마감월 등록
    * @Method Name : saveOsmOspclaim
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
    @RequestMapping(value = "saveBasPeriod.do")
    public View saveBasPeriod(UiMapDto dto, Model model) throws Exception {
        service.saveBasPeriod(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCloseProcess
    * @brief :  Claim 대상 마감월 등록
    * @Method Name : saveCloseProcess
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
    @RequestMapping(value = "saveCloseProcess.do")
    public View saveCloseProcess(UiMapDto dto, Model model) throws Exception {
        service.saveCloseProcess(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveCloseCancel
    * @brief :  Claim 대상 마감월 등록
    * @Method Name : saveCloseCancel
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
    @RequestMapping(value = "saveCloseCancel.do")
    public View saveCloseCancel(UiMapDto dto, Model model) throws Exception {
        service.saveCloseProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectBasPeriodList
    * @brief : Claim 대상 마감월 등록
    * @Method Name : selectBasPeriodList
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
    @RequestMapping(value = "selectBasPeriodList.do")
    public View selectBasPeriodList(UiMapDto dto, Model model) throws Exception {
        service.selectBasPeriodList(dto);
        return apply(dto, model);
    }
 
    /**
    * @fn : selectGetFactoryListByCsm
    * @brief : 공장
    * @Method Name : selectGetFactoryListByCsm
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
    @RequestMapping(value = "selectGetFactoryListByCsm.do")
    public View selectGetFactoryListByCsm(UiMapDto dto, Model model) throws Exception {
        service.selectGetFactoryListByCsm(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectChkPeriodState
     * @brief :  Claim 비용 마감 - 조회시 메인 상단 마감년월 값 있는 경우 마감 상태 재조회
     * @remark
     * @Create Date: 2021. 07. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 07. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectChkPeriodState.do")
      public View selectChkPeriodState(UiMapDto dto, Model model) throws Exception {
        service.selectChkPeriodState(dto);
        return apply(dto, model);
      }
      
 
}
