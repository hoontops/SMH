package com.nbdf.cmd.cm.pesp.web;

import com.nbdf.cmd.cm.pesp.service.PESP01200Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: pesp01200Controller.java
* @Package: com.nbdf.cmd.cm.pesp.web
* @Project name: IFC MES시스템 구축
* @Type name: pesp01200Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ------------
 *   2015. 3. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pesp01200")
public class PESP01200Controller extends AbstractWebController {
//
    @Autowired
    private PESP01200Service service;

    /**
    * @fn : selectPesHelpDeskList
    * @brief : 헬프데스크 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectPesHelpDeskList
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
    @RequestMapping(value = "selectPesHelpDeskList.do")
    public View selectPesHelpDeskList(UiMapDto dto, Model model) throws Exception {
        service.selectPesHelpDeskList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : savePesHelpDesk
    * @brief :  헬프데스크 저장(등록,삭제,갱신)
    * @Method Name : savePesHelpDesk
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
    @RequestMapping(value = "savePesHelpDesk.do")
    public View savePesHelpDesk(UiMapDto dto, Model model) throws Exception {
        service.savePesHelpDesk(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectPesPortalUsersList
    * @brief : 담당자 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectPesPortalUsersList
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
    @RequestMapping(value = "selectPesPortalUsersList.do")
    public View selectPesPortalUsersList(UiMapDto dto, Model model) throws Exception {
        service.selectPesPortalUsersList(dto);
        return apply(dto, model);
    }

}
