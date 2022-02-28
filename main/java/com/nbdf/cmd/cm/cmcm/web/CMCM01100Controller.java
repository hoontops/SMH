package com.nbdf.cmd.cm.cmcm.web;

import com.nbdf.cmd.cm.cmcm.service.CMCM01100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nexacro17.xeni.export.impl.GridExportExcel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMCM01100Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMCM01100Controller
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
@RequestMapping(value = "/cmcm01100")
public class CMCM01100Controller extends AbstractWebController {

    @Autowired
    private CMCM01100Service service;

    /**
    * @fn : selectGrpCdList
    * @brief : 그룹코드 조회
    *             1. onLoad()시 호출
    *             2. [조회] 버튼 클릭시 호출
    * @Method Name : selectGrpCdList
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
    @RequestMapping(value = "selectGrpCdList.do")
    public View selectGrpCdList(UiMapDto dto, Model model) throws Exception {
        service.selectGrpCdList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCdList
    * @brief : 상세코드를 조회
    * @Method Name : selectCdList
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:33:03
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
    @RequestMapping(value = "selectCdList.do")
    public View selectCdList(UiMapDto dto, Model model) throws Exception {
    	
        service.selectCdList(dto);
        return apply(dto, model);
    }
    @RequestMapping(value = "selectCdListExcel.do")
    public View selectCdListExcel(UiMapDto dto, Model model) throws Exception {
    	GridExportExcel exporter =  BigDataUtil.bigDataExporter(dto, "CMD");
    	if( exporter != null ) {
    		service.selectCdListExcel(dto);
         }
         model.addAttribute("BIG_DATA_EXPORTER", exporter);
         return bigDataApply(dto, model);
    }

    /**
    * @fn : selectExcelDn
    * @brief : 엑셀다운버튼 클릭시
    * @Method Name : selectExcelDn
    * @Create Date: 2015. 5. 9. 오후 3:51:19
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectExcelDn.do")
    public View selectExcelDn(UiMapDto dto, Model model) throws Exception {
        service.selectExcelDn(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectGrpCmCdList
    * @brief : 검색 버튼 클릭시 그룹코드와 상세코드 조회
    *              Multi 그리드 + Dataset 조회
    * @Method Name : selectGrpCmCdList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 9:13:35
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
    @RequestMapping(value = "selectGrpCmCdList.do")
    public View selectGrpCmCdList(UiMapDto dto, Model model) throws Exception {
    	service.selectGrpCmCdList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveGrpCd
    * @brief :  그룹코드 저장(등록,삭제,갱신)
    * @Method Name : saveGrpCd
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
    @RequestMapping(value = "saveGrpCd.do")
    public View saveGrpCd(UiMapDto dto, Model model) throws Exception {
        service.saveGrpCd(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCd
    * @brief :  상세코드 저장(등록,삭제,갱신)
    * @Method Name : saveCd
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:32:27
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
    @RequestMapping(value = "saveCd.do")
    public View saveCd(UiMapDto dto, Model model) throws Exception {
        service.saveCd(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCmCode
    * @brief : 넥사크로에서 공통으로 사용하기 위해 그룹코드와 상세코드 전체를 조회
    * @Method Name : selectCmCode
    * @remark
    * @Create Date: 2015 2015. 3. 6. 오후 3:37:49
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
    @RequestMapping(value = "selectCmCode.do")
    public View selectCmCode(UiMapDto dto, Model model) throws Exception {
        service.selectCmCode(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectServerDbToday
     * @brief : DB서버시간 가져오기 (YYYYMMDD)
     * @Method Name : selectServerDbToday
     * @remark
     * @Create Date: 2015. 10.28
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일           수정자   수정내용
      *   ------------  ------  ----------
      *   2015.10. 28.  진성하    최초  생성
      *
     */
     @RequestMapping(value = "selectServerDbToday.do")
     public View selectServerDbToday(UiMapDto dto, Model model) throws Exception {
         service.selectServerDbToday(dto);
         return apply(dto, model);
     }

     /**
      * @fn : selectServerDbTime
      * @brief : DB서버시간 가져오기 (YYYYMMDDHH24MISS)
      * @Method Name : selectServerDbTime
      * @remark
      * @Create Date: 2015. 10.28
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일           수정자   수정내용
       *   ------------  ------  ----------
       *   2015.10. 28.  진성하    최초  생성
       *
      */
      @RequestMapping(value = "selectServerDbTime.do")
      public View selectServerDbTime(UiMapDto dto, Model model) throws Exception {
          service.selectServerDbTime(dto);
          return apply(dto, model);
      }

}
