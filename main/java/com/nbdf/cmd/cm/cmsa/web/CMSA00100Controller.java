package com.nbdf.cmd.cm.cmsa.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsa.service.CMSA00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSA01100Controller.java
* @Package: com.nbdf.ecm.cm.cmsa.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSA01100Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsa00100/")
public class CMSA00100Controller extends AbstractWebController {

    @Autowired
    private CMSA00100Service service;
    /**
    * @fn : selectCmdPopupList
    * @brief : 팝업리스트  조회
    * @Method Name : selectCmdPopupList
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
    @RequestMapping(value = "selectCmdPopupList")
    public View selectCmdPopupList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdPopupList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveCmdPopup
    * @brief : 팝업저장
    * @Method Name : saveCmdPopup
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
    @RequestMapping("saveCmdPopup")
    public View saveCmdPopup(UiMapDto dto, Model model) throws Exception {
        service.saveCmdPopup(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteCmdPopup
    * @brief : 팝업 삭제
    * @Method Name : deleteCmdPopup
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
    @RequestMapping("deleteCmdPopup")
    public View deleteCmdPopup(UiMapDto dto, Model model) throws Exception {
        service.deleteCmdPopup(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectCmdPopupPlsList
    * @brief : 조회 컬럼 조회
    * @Method Name : selectCmdPopupPlsList
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
    @RequestMapping("selectCmdPopupPlsList")
    public View selectCmdPopupPlsList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdPopupPlsList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectCmdPopupSrhCndClumList
    * @brief : 조회조건 컬럼 조회
    * @Method Name : selectCmdPopupSrhCndClumList
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
    @RequestMapping("selectCmdPopupSrhCndClumList")
    public View selectCmdPopupSrhCndClumList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdPopupSrhCndClumList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveFavoriteActive
    * @brief : 활동코드 [즐겨찾기] 저장
    * @Method Name : saveFavoriteActive
    * @remark
    * @Create Date: 2016 2016. 4. 28. 오후 3:40:42
    * @Author: 심병석
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2016. 4. 28.        심병석     최초  생성
     *
    */
    @RequestMapping("saveFavoriteActive")
    public View saveFavoriteActive(UiMapDto dto, Model model) throws Exception {
        service.saveFavoriteActive(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectDsCommomPoup
    * @brief : 공통팝업 
    * @Method Name : selectDsCommomPoup
    * @remark
    * @Create Date: 2016 2016. 4. 28. 오후 3:40:42
    * @Author: 심병석
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2016. 4. 28.        심병석     최초  생성
     *
    */
    @RequestMapping("selectDsCommomPoup")
    public View selectDsCommomPoup(UiMapDto dto, Model model) throws Exception {
        service.selectDsCommomPoup(dto);
        return apply(dto, model);
    }
}
