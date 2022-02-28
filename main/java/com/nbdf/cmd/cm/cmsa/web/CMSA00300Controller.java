package com.nbdf.cmd.cm.cmsa.web;


import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsa.service.CMSA00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSA03000Controller.java
* @Package: imcs.ecm.cm.cmsa.web
* @Project name: 통합 경영관리시스템 재구축
* @Type name: CMSA03000Controller
* @Company: SICC
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
@RequestMapping(value = "/cmsa00300/")
public class CMSA00300Controller extends AbstractWebController {

    @Autowired
    private CMSA00300Service service;

    /**
    * @fn : selectEcmLookupTypesList
    * @brief : 공통코드 유형 조회
    * @Method Name : selectEcmLookupTypesList
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
    @RequestMapping(value = "selectEcmLookupTypesList")
    public View selectEcmLookupTypesList(UiMapDto dto, Model model) throws Exception {
        service.selectEcmLookupTypesList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectEcmLookupTypesVList
    * @brief : 공통코드 유형 VIEW 조회
    * @Method Name : selectEcmLookupTypesVList
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
    @RequestMapping(value = "selectEcmLookupTypesVList")
    public View selectEcmLookupTypesVList(UiMapDto dto, Model model) throws Exception {
        service.selectEcmLookupTypesVList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveEcmLookupTypes
    * @brief : 공통코드 저장
    * @Method Name : saveEcmLookupTypes
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
    @RequestMapping(value = "saveEcmLookupTypes")
    public View saveEcmLookupTypes(UiMapDto dto, Model model) throws Exception {
        service.saveEcmLookupTypes(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteEcmLookupTypes
    * @brief : 공통코드 삭제
    * @Method Name : deleteEcmLookupTypes
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
    @RequestMapping(value = "deleteEcmLookupTypes")
    public View deleteEcmLookupTypes(UiMapDto dto, Model model) throws Exception {
        service.deleteEcmLookupTypes(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectEcmLookupValuesList
    * @brief :공통코드 조회(팝업용)
    * @Method Name : selectEcmLookupValuesList
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
    @RequestMapping(value = "selectEcmLookupValuesList")
    public View selectEcmLookupValuesList(UiMapDto dto, Model model) throws Exception {
        service.selectEcmLookupValuesList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectEcmLookupValuesVList
    * @brief :공통코드 VIEW 조회(팝업용)
    * @Method Name : selectEcmLookupValuesVList
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
    @RequestMapping(value = "selectEcmLookupValuesVList")
    public View selectEcmLookupValuesVList(UiMapDto dto, Model model) throws Exception {
        service.selectEcmLookupValuesVList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectEcmLookupValuesList2
    * @brief :공통코드 조회
    * @Method Name : selectEcmLookupValuesList2
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
    @RequestMapping(value = "selectEcmLookupValuesList2")
    public View selectEcmLookupValuesList2(UiMapDto dto, Model model) throws Exception {
        service.selectEcmLookupValuesList2(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectEcmLookupValuesVList2
    * @brief :공통코드 VIEW 조회
    * @Method Name : selectEcmLookupValuesVList2
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
    @RequestMapping(value = "selectEcmLookupValuesVList2")
    public View selectEcmLookupValuesVList2(UiMapDto dto, Model model) throws Exception {
        service.selectEcmLookupValuesVList2(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectYearList
    * @brief : 년도리스트  조회
    * @Method Name : selectYearList
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
    @RequestMapping(value = "selectYearList")
    public View selectYearList(UiMapDto dto, Model model) throws Exception {
        service.selectYearList(dto);
        return apply(dto, model);
   }
    /**
    * @fn : selectCurrentSystemTime
    * @brief : 현재 일시분초 조회
    * @Method Name : selectCurrentSystemTime
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
    @RequestMapping(value = "selectCurrentSystemTime")
    public View selectCurrentSystemTime(UiMapDto dto, Model model) throws Exception {
        service.selectCurrentSystemTime(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectSystemDate
    * @brief : 현재 일시분초 조회
    * @Method Name : selectSystemDate
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
    @RequestMapping(value = "selectSystemDate")
    public View selectSystemDate(UiMapDto dto, Model model) throws Exception {
        service.selectSystemDate(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectCmdCmCdsList
    * @brief : 포탈 공통코드 조회
    * @Method Name : selectCmdCmCdsList
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
    @RequestMapping(value = "selectCmdCmCdsList")
    public View selectCmdCmCdsList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdCmCdsList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectAcctGubunList
    * @brief : 권한별 회계구분 조회
    * @Method Name : selectAcctGubunList
    * @remark
    * @Create Date: 2015 2015. 3. 31. 오후 4:58:04
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
    @RequestMapping(value = "selectAcctGubunList")
    public View selectAcctGubunList(UiMapDto dto, Model model) throws Exception {
        service.selectAcctGubunList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectAccountGubunInformation
    * @brief : 회계구분 정보 조회
    * @Method Name : selectAccountGubunInformation
    * @remark
    * @Create Date: 2015 2015. 3. 31. 오후 4:58:04
    * @Author: polaroid
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       polaroid     최초  생성
     *
    */
    @RequestMapping(value = "selectAccountGubunInformation")
    public View selectAccountGubunInformation(UiMapDto dto, Model model) throws Exception {
        service.selectAccountGubunInformation(dto);
        return apply(dto, model);
    }

}
