package com.nbdf.cmd.cm.cmcm.web;

import com.nbdf.cmd.cm.cmcm.service.CMD00100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: CMD00100Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMD00100Controller
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
@RequestMapping(value = "/cmd00100")
public class CMD00100Controller extends AbstractWebController {

    @Autowired
    private CMD00100Service service;

    /**
    * @fn : selectBasIdclassList
    * @brief : 그룹코드 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectBasIdclassList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
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
    @RequestMapping(value = "selectBasIdclassList.do")
    public View selectBasIdclassList(UiMapDto dto, Model model) throws Exception {
        service.selectBasIdclassList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBasIddefinition
    * @brief :  ID 정의  저장(등록,삭제,갱신)
    * @Method Name : saveBasIddefinition
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:34:33
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
    @RequestMapping(value = "saveBasIddefinition.do")
    public View saveBasIddefinition(UiMapDto dto, Model model) throws Exception {
        service.saveBasIddefinition(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBasIdclass
    * @brief :  그룹코드 저장(등록,삭제,갱신)
    * @Method Name : saveBasIdclass
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:34:33
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
    @RequestMapping(value = "saveBasIdclass.do")
    public View saveBasIdclass(UiMapDto dto, Model model) throws Exception {
        service.saveBasIdclass(dto);
        return apply(dto, model);
    }

    /**
      * @fn : selectBasIdclassserialList
      * @brief : ID패턴 및 Prefix별 일련번호 정보 조회
      * @Method Name : selectBasIdclassserialList
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
      @RequestMapping(value = "selectBasIdclassserialList.do")
      public View selectBasIdclassserialList(UiMapDto dto, Model model) throws Exception {
          service.selectBasIdclassserialList(dto);
          return apply(dto, model);
      }

}
