package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03100Controller
* @Company: Built1
* @Create Date: 2021.2.3
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 3.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03100")
public class BAS03100Controller extends AbstractWebController {

    @Autowired
    private BAS03100Service service;

    /**
    * @fn :  RoutionRollLoss List
    * @brief : 품목조회
    * @remark
    * @Create Date: 2021. 2. 3
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 1.       진성하     최초  생성
     *
    */ 
    @RequestMapping(value = "selectRoutionRollLossList.do")
    public View selectRoutionRollLossList(UiMapDto dto, Model model) throws Exception {
        service.selectRoutionRollLossList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :  RolllossOperation List
     * @brief : 공정별 Loss
     * @remark
     * @Create Date: 2021. 2. 3
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 2. 1.       진성하     최초  생성
      *
     */ 
     @RequestMapping(value = "selectRolllossOperationList.do")
     public View selectRolllossOperationList(UiMapDto dto, Model model) throws Exception {
         service.selectRolllossOperationList(dto);
         return apply(dto, model);
     }


     /**
     * @fn : saveRolllossOperation
     * @brief : RolllossOperation wjwkd
     * @remark
     * @Create Date: 2021. 2. 1
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 2. 1.       방성혁     최초  생성
      *
     */
     @RequestMapping(value = "saveRolllossOperation.do")
     public View saveRolllossOperation(UiMapDto dto, Model model) throws Exception {
     	
         service.saveRolllossOperation(dto);
         return apply(dto, model);
     }  
}
