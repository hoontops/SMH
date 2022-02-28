package com.nbdf.cmd.cm.cmbm.web;

import com.nbdf.cmd.cm.cmbm.service.CMBM02000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: CMBM02000Controller.java
* @Package: com.drens.dr.CMBM.web
* @Project name: IFC MES시스템 구축
* @Type name: CMBM02000Controller
* @Company: Bulit1
* @Create Date: 2018.04.26 오후06:00
* @Author: JYYOUN
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *   수정일          		수정자   	수정내용
 *   ------------  	------  ----------
 *   2018.04.26    	JYYOUN	최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmbm02000")
public class CMBM02000Controller extends AbstractXWebController {

    @Autowired
    private CMBM02000Service service;

       
    /**     
    * @fn : selectBatchCtrlsList
    * @brief : 배치프로그램 리스트 조회
    * @Method Name : selectBatchCtrlsList
    * @remark
    * @Create Date: 2018.04.26 오후06:00
    * @Author: JYYOUN
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일     		수정자   	수정내용
     *   ------------  	------  ----------
     *   2018.04.26     JYYOUN	최초  생성
     *
    */
    @RequestMapping(value = "selectBatchCtrlsList.do")
    public View selectBatchCtrlsList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchCtrlsList(dto);
        return apply(dto, model);
    }

    /**     
    * @fn : selectBatchParamsList
    * @brief : 배치프로그램 파라미터 조회
    * @Method Name : selectBatchParamsList
    * @remark
    * @Create Date: 2018.04.26 오후06:00
    * @Author: JYYOUN
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일     		수정자   	수정내용
     *   ------------  	------  ----------
     *   2018.04.26     JYYOUN	최초  생성
     *
    */
    @RequestMapping(value = "selectBatchParamsList.do")
    public View selectBatchParamsList(UiMapDto dto, Model model) throws Exception {
        service.selectBatchParamsList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBatchCtrls
    * @brief : 배치프로그램 리스트 저장(신규/수정)
    * @Method Name : saveBatchCtrls
    * @Create Date: 2018.04.26 오후06:00
    * @Author: JYYOUN
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveBatchCtrls.do")
    public View saveBatchCtrls(UiMapDto dto, Model model) throws Exception {
        service.saveBatchCtrls(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBatchParams
    * @brief : 배치 파라미터 저장(신규/수정/삭제)
    * @Method Name : saveBatchParams
    * @Create Date: 2018.04.26 오후06:00
    * @Author: JYYOUN
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveBatchParams.do")
    public View saveBatchParams(UiMapDto dto, Model model) throws Exception {
        service.saveBatchParams(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBatchCtrlsParams
    * @brief : 배치 프로그램(신규/수정) & 배치 파라미터(신규/수정/삭제) 저장
    * @Method Name : saveBatchParams
    * @Create Date: 2018.04.26 오후06:00
    * @Author: JYYOUN
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveBatchCtrlsParams.do")
    public View saveBatchCtrlsParams(UiMapDto dto, Model model) throws Exception {
        service.saveBatchCtrlsParams(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectBatchProgramRunYn
    * @brief : 배치 프로그램 실행 여부 
    * @Method Name : selectBatchProgramRunYn
    * @remark
    * @Create Date: 2018 2018. 5. 23. 오전 10:58:09 
    * @Author: Built1
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 5. 23.        Built1     최초  생성
     *
    */
    @RequestMapping(value = "selectBatchProgramRunYn.do")
    public View selectBatchProgramRunYn(UiMapDto dto, Model model) throws Exception {
        service.selectBatchProgramRunYn(dto);
        return apply(dto, model);
    }
}
