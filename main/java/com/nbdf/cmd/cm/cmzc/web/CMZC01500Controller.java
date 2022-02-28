package com.nbdf.cmd.cm.cmzc.web;

import com.nbdf.cmd.cm.cmzc.service.CMZC01500Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMZC01500Controller.java
* @Package: com.nbdf.cmd.cm.cmzc.web
* @Project name: IFC MES시스템 구축
* @Type name: CMZC01500Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 27.
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일           수정자     수정내용
 *   ------------  ------  ----------
 *   2015. 3. 27.   진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmzc01500")
public class CMZC01500Controller extends AbstractWebController {

    @Autowired
    private CMZC01500Service service;

    /**
    * @fn : selectZipsSidoList
    * @brief : 우편번호 시도 그룹 조회
    *             1. [조회] 버튼 클릭시 호출
    * @Method Name : selectZipsSidoList
    * @remark
    * @Create Date: 2015. 3. 27
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일            수정자    수정내용
     *   ------------  ------  ----------
     *   2015. 3. 27.   진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectZipsSidoList.do")
    public View selectZipsSidoList(UiMapDto dto, Model model) throws Exception {
        //logger.debug("dto :" + dto);
        service.selectZipsSidoList(dto);

        return apply(dto, model);
    }

    /**
     * @fn : selectZipsSearchCount
     * @brief : 우편번호 검색 카운트
     *             1. [조회] 버튼 클릭시 호출
     * @Method Name : selectZipsSearchCount
     * @remark
     * @Create Date: 2015. 3. 27
     * @Author: 진성하s
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 3. 30.   진성하     최초  생성
      *
     */
     @RequestMapping(value = "selectZipsSearchCount.do")
     public View selectZipsSearchCount(UiMapDto dto, Model model) throws Exception {
         //logger.debug("dto :" + dto);
         service.selectZipsSearchCount(dto);

         return apply(dto, model);
     }

    /**
     * @fn : selectZipsSearchList
     * @brief : 우편번호 검색 리스트
     *             1. [조회] 버튼 클릭시 호출
     * @Method Name : selectZipsSearchList
     * @remark
     * @Create Date: 2015. 3. 27
     * @Author: 진성하s
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 3. 27.   진성하     최초  생성
      *
     */
     @RequestMapping(value = "selectZipsSearchList.do")
     public View selectZipsSearchList(UiMapDto dto, Model model) throws Exception {
         //logger.debug("dto :" + dto);
         service.selectZipsSearchList(dto);

         return apply(dto, model);
     }

     /**
      * @fn : selectMlbxSearchCount
      * @brief : 우편번호 사서함 검색 카운트
      *             1. [조회] 버튼 클릭시 호출(사서함 검색으로 선택시)
      * @Method Name : selectMlbxSearchCount
      * @remark
      * @Create Date: 2015. 12. 21
      * @Author: 진성하s
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일            수정자    수정내용
       *   ------------  ------  ----------
       *   2015. 12. 21.   진성하     최초  생성
       *
      */
      @RequestMapping(value = "selectMlbxSearchCount.do")
      public View selectMlbxSearchCount(UiMapDto dto, Model model) throws Exception {
          //logger.debug("dto :" + dto);
          service.selectMlbxSearchCount(dto);

          return apply(dto, model);
      }

     /**
      * @fn : selectMlbxSearchList
      * @brief : 우편번호 사서함 검색 리스트
      *             1. [조회] 버튼 클릭시 호출(사서함 검색으로 선택시)
      * @Method Name : selectMlbxSearchList
      * @remark
      * @Create Date: 2015. 12. 21
      * @Author: 진성하s
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일            수정자    수정내용
       *   ------------  ------  ----------
       *   2015. 12. 21.   진성하     최초  생성
       *
      */
      @RequestMapping(value = "selectMlbxSearchList.do")
      public View selectMlbxSearchList(UiMapDto dto, Model model) throws Exception {
          //logger.debug("dto :" + dto);
          service.selectMlbxSearchList(dto);

          return apply(dto, model);
      }

}
