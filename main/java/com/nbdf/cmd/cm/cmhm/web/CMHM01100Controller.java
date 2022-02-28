package com.nbdf.cmd.cm.cmhm.web;

import com.nbdf.cmd.cm.cmhm.service.CMHM01100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: CMHM01100Controller.java
* @Package: com.nbdf.cmd.cm.cmhm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMHM01100Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 19. 오후 3:10:09
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 19.        진성하     최초  생성
 *
*/
/**
* @file: CMHM01100Controller.java
* @Package: com.nbdf.cmd.cm.cmhm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMHM01100Controller
* @Company: Built1
* @Create Date: 2015. 4. 28. 오후 4:26:19
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 28.        JIn Sung Ha     최초  생성
 *
*/

@Controller
@RequestMapping(value = "/cmhm01100")
public class CMHM01100Controller extends AbstractXWebController {

    @Autowired
    private CMHM01100Service service;

    /**
    * @fn : selectHelpList
    * @brief : 도움말 조회
    * @Method Name : selectHelpList
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:35:51
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectHlpList.do")
    public View selectHlpList(UiMapDto dto, Model model) throws Exception {
        service.selectHlpList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectHlp
    * @brief : 도움말 상세조회
    * @Method Name : selectHlp
    * @remark
    * @Create Date: 2015 2015. 3. 25. 오전 10:24:19
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 25.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectHlp.do")
    public View selectHlp(UiMapDto dto, Model model) throws Exception {
        service.selectHlp(dto);
        return apply(dto, model);
    }


    /**
    * @fn : updateHelp
    * @brief : 도움말 수정
    * @Method Name : updateHelp
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:36:15
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "updateHlp.do")
    public View updateHlp(UiMapDto dto, Model model) throws Exception {
        service.updateHlp(dto);
        return apply(dto, model);
    }

    /**
    * @fn : insertHelp
    * @brief : 도움말 저장
    * @Method Name : insertHelp
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:36:40
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "insertHlp.do")
    public View insertHlp(UiMapDto dto, Model model) throws Exception {
        service.insertHlp(dto);
        return apply(dto, model);
    }

    /**
    * @fn : deleteHelp
    * @brief : 도움말 삭제
    * @Method Name : deleteHelp
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:36:52
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "deleteHlp.do")
    public View deleteHlp(UiMapDto dto, Model model) throws Exception {
        return super.execute(dto, model, service);
    }

    /**
    * @fn : selectTreeHlps
    * @brief : 도움말 트리 검색
    * @Method Name : selectTreeHlps
    * @Create Date: 2015. 4. 28. 오후 4:26:24
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectHlpTree.do")
    public View selectHlpTree(UiMapDto dto, Model model) throws Exception {
        service.selectHlpTree(dto);
        return apply(dto, model);
    }


    /**
    * @fn : insertHlpTree
    * @brief : 트리 추가(도움말 경로)
    * @Method Name : insertHlpTree
    * @Create Date: 2015. 4. 29. 오후 6:13:55
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "insertHlpTree.do")
    public View insertHlpTree(UiMapDto dto, Model model) throws Exception {
        service.insertHlpTree(dto);
        return apply(dto, model);
    }

    /**
    * @fn : updateHlpTree
    * @brief : 도움말 트리 경로 수정
    * @Method Name : updateHlpTree
    * @Create Date: 2015. 4. 29. 오후 7:55:08
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "updateHlpTree.do")
    public View updateHlpTree(UiMapDto dto, Model model) throws Exception {
        service.updateHlpTree(dto);
        return apply(dto, model);
    }

    /**
    * @fn : deleteHlpTree
    * @brief : 도움말 트리 메뉴 삭제
    * @Method Name : deleteHlpTree
    * @Create Date: 2015. 4. 29. 오후 8:30:42
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "deleteHlpTree.do")
    public View deleteHlpTree(UiMapDto dto, Model model) throws Exception {
        service.deleteHlpTree(dto);
        return apply(dto, model);
    }

}
