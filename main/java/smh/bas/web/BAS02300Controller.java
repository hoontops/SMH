package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS02300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: BAS02300Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: BAS02300Controller
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
@RequestMapping(value = "/bas02300")
public class BAS02300Controller extends AbstractWebController {

    @Autowired
    private BAS02300Service service;

    /**
    * @fn : saveBasApproval
    * @brief :  승인 저장(등록,삭제,갱신)
    * @Method Name : saveBasApproval
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 6.     진성하     최초  생성
     *
    */
    @RequestMapping(value = "saveBasApproval.do")
    public View saveBasApproval(UiMapDto dto, Model model) throws Exception {
        service.saveBasApproval(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBasApprovalList
    * @brief : 승인 처리결과  조회
    * @Method Name : selectBasApprovalList
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectBasApprovalList.do")
    public View selectBasApprovalList(UiMapDto dto, Model model) throws Exception {
        service.selectBasApprovalList(dto);
        return apply(dto, model);
    }
    

    /**
      * @fn : selectBasApprovaltransactionList
      * @brief : 승인 처리결과 조회
      * @Method Name : selectBasApprovaltransactionList
      * @remark
      * @Create Date: 2021. 3.1
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일           수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3.1.  진성하    최초  생성
       *
      */
      @RequestMapping(value = "selectBasApprovaltransactionList.do")
      public View selectBasApprovaltransactionList(UiMapDto dto, Model model) throws Exception {
          service.selectBasApprovaltransactionList(dto);
          return apply(dto, model);
      }

}
