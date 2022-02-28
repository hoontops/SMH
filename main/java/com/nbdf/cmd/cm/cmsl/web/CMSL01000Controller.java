package com.nbdf.cmd.cm.cmsl.web;

import com.nbdf.cmd.cm.cmsl.service.CMSL01000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
 * Dynamic SQL(다양한 SQL)조회
 *
 * @ClassName CMSL01000Controller.java
 * @Description CMSL01000Controller Class
 * @Modification-Information
 *
 * @author 통합경영관리시스템 JIn Sung Ha
 * @since 2015. 2. 16.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */

@Controller
@RequestMapping(value = "/cmsl01000")
public class CMSL01000Controller extends AbstractWebController {

    @Autowired
    private CMSL01000Service service;

    /**
     * @fn : selectSqlListCount
     * @brief : 다양한SQL 목록 - 검색 카운트
     *             1. 초기 또는 [조회] 버튼 클릭시 호출
     * @Method Name : selectSqlListCount
     * @remark
     * @Create Date: 2015. 5. 02.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 02   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectSqlListCount.do")
    public View selectSqlListCount(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectSqlListCount(dto);

        return apply(dto, model);
    }

    /**
     * @fn : selectSqlList
     * @brief : 다양한SQL 목록 - 검색 리스트
     *             1. 초기 또는 [조회] 버튼 클릭시 호출
     * @Method Name : selectSqlList
     * @remark
     * @Create Date: 2015. 5. 02.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 02   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectSqlList.do")
    public View selectSqlList(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectSqlList(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectSqlParamList
     * @brief : 다양한SQL상세 - 파라미터 조회 리스트
     *             1. 다양한SQL상세 클릭시 호출
     * @Method Name : selectSqlParamList
     * @remark
     * @Create Date: 2015. 5. 06.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 06   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectSqlParamList.do")
    public View selectSqlParamList(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectSqlParamList(dto);

        return apply(dto, model);
    }

    /**
     * @fn : selectSqlAuthList
     * @brief : 다양한SQL상세 - SQL권한 조회 리스트
     *             1. 다양한SQL상세 클릭시 호출
     * @Method Name : selectSqlAuthList
     * @remark
     * @Create Date: 2015. 11. 19.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 11. 19   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectSqlAuthList.do")
    public View selectSqlAuthList(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectSqlAuthList(dto);

        return apply(dto, model);
    }

    /**
     * @fn : selectSqlColmList
     * @brief : 다양한SQL상세 - SQL컬럼설정 조회 리스트
     *             1. 다양한SQL(상세 클릭,수정화면,컬럼 설정 팝업)에서 호출
     * @Method Name : selectSqlColmList
     * @remark
     * @Create Date: 2015. 11. 26.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 11. 26   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectSqlColmList.do")
    public View selectSqlColmList(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectSqlColmList(dto);

        return apply(dto, model);
    }
    /**
     * @fn : selectDynamicSqlList
     * @brief : Dynamic SQL 조회 리스트
     *             1. 다양한SQL파라미터 팝업, 다양한조회, 등록, 수정 화면에서 호출
     * @Method Name : selectSqlList
     * @remark
     * @Create Date: 2015. 5. 26.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 26   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectDynamicSqlList.do")
    public View selectDynamicSqlList(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectDynamicSqlList(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectDynamicSqlExcelList
     * @brief : Dynamic SQL 조회 리스트(엑셀 NoPage용)
     *             1. 다양한SQL파라미터 팝업, 다양한조회, 등록, 수정 화면에서 호출
     * @Method Name : selectDynamicSqlExcelList
     * @remark
     * @Create Date: 2015. 7. 27.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 7. 27   진성하     최초  생성
      *
     */
    @RequestMapping(value = "selectDynamicSqlExcelList.do")
    public View selectDynamicSqlExcelList(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.selectDynamicSqlListNoPage(dto);
        return apply(dto, model);
    }

    /**
     * @fn : insertSqlParam
     * @brief : Dynamic SQL 등록
     *             1.  Dynamic SQL 등록 화면에서 호출
     * @Method Name : insertSqlParam
     * @remark
     * @Create Date: 2015. 5. 28.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 28   진성하     최초  생성
      *
     */
    @RequestMapping(value = "insertSqlParam.do")
    public View insertSqlParam(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.insertSqlParam(dto); // SQL과 파라미터를 같이 등록
        return apply(dto, model);
    }

    /**
     * @fn : updateSqlParam
     * @brief : Dynamic SQL 수정
     *             1.  Dynamic SQL 수정 화면에서 호출
     * @Method Name : updateSqlParam
     * @remark
     * @Create Date: 2015. 6. 01.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 6. 01   진성하     최초  생성
      *
     */
    @RequestMapping(value = "updateSqlParam.do")
    public View updateSqlParam(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.updateSqlParam(dto);
        return apply(dto, model);
    }

    /**
     * @fn : deleteSqlParam
     * @brief : Dynamic SQL 삭제
     *             1. Dynamic SQL 상세 화면에서 호출
     * @Method Name : deleteSqlParam
     * @remark
     * @Create Date: 2015. 5. 30.
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 30   진성하     최초  생성
      *
     */
    @RequestMapping(value = "deleteSqlParam.do")
    public View deleteSqlParam(UiMapDto dto, Model model) throws Exception {
        logger.debug("dto :" + dto);
        service.deleteSqlParam(dto); // SQL과 파라미터를 같이 삭제
        return apply(dto, model);
    }

    /**
    * @fn : selectDefVal
    * @brief : SEQ_ID 로 DEF_VAL 가져오기
    * @Method Name : selectDefVal
    * @remark
    * @Create Date: 2016 2016. 3. 25. 오후 12:43:44
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2016. 3. 25    고 건     최초  생성
     *
    */
    @RequestMapping(value = "selectDefVal.do")
    public View selectDefVal(UiMapDto dto, Model model) throws Exception {
        service.selectDefVal(dto);
        return apply(dto, model);
    }

}
