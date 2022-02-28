package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM00300Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM00300Controller
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.26.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam00300")
public class QAM00300Controller extends AbstractWebController {

    @Autowired
    private QAM00300Service service;

    /**
    * @fn : selectQamQcinspector
    * @brief : 검사원관리 정보 조회
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.04.26.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamQcinspectorList.do")
    public View selectQamQcinspectorList(UiMapDto dto, Model model) throws Exception {
        service.selectQamQcinspectorList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveQamQcinspector
    * @brief : 검사원관리 정보 저장
    * @remark
    * @Create Date: 2021.04.26
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.04.26.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "saveQamQcinspector.do")
    public View saveQamQcinspector(UiMapDto dto, Model model) throws Exception {
    	
        service.saveQamQcinspector(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectQamQcinspectorhistoryList
     * @brief : 검사원관리 정보 이력 조회
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectQamQcinspectorhistoryList.do")
     public View selectQamQcinspectorhistoryList(UiMapDto dto, Model model) throws Exception {
         service.selectQamQcinspectorhistoryList(dto);
         return apply(dto, model);
     }
     
    /**
    * @fn : selectInspectionScore
    * @brief : 검사원 관리의 점수에 따른 등급조회 조회
    * @remark
    * @Create Date: 2021.04.27
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.04.27.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectInspectionScore.do")
    public View selectInspectionScore(UiMapDto dto, Model model) throws Exception {
        service.selectInspectionScore(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectExistInspector
    * @brief : 검사원 등록 시 이미 등록된 검사원명, 사원번호인지 조회 조회
    * @remark
    * @Create Date: 2021.04.27
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.04.27.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectExistInspector.do")
    public View selectExistInspector(UiMapDto dto, Model model) throws Exception {
        service.selectExistInspector(dto);
        return apply(dto, model);
    }

}