package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS05300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS05300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05300Controller
* @Company: Built1
* @Create Date: 2021.4.2
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.2.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas05300")
public class BAS05300Controller extends AbstractWebController {

    @Autowired
    private BAS05300Service service;

    /**
     * @fn : selectBasAreaTreeList
     * @brief : 작업장 트리 정보 조회
     * @remark
     * @Create Date: 2021.4.2
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.2.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectBasAreaTreeList.do")
     public View selectBasAreaTreeList(UiMapDto dto, Model model) throws Exception {
         service.selectBasAreaTreeList(dto);
         return apply(dto, model);
     }
     
    /**
    * @fn : selectBasAreaworker
    * @brief : 작업장 작업인원 정보 조회
    * @remark
    * @Create Date: 2021.4.2
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.2.       권혜영     최초  생성
     *
    */
    @RequestMapping(value = "selectBasAreaworkerList.do")
    public View selectBasAreaworkerList(UiMapDto dto, Model model) throws Exception {
        service.selectBasAreaworkerList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBasAreaworker
    * @brief : 작업장 작업인원 정보 정보 저장
    * @remark
    * @Create Date: 2021.4.2
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.2.       권혜영     최초  생성
     *
    */
    @RequestMapping(value = "saveBasAreaworker.do")
    public View saveBasAreaworker(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBasAreaworker(dto);
        return apply(dto, model);
    }

}
