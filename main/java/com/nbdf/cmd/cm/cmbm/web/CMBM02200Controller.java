package com.nbdf.cmd.cm.cmbm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmbm.service.CMBM02200Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

@Controller
@RequestMapping(value = "/cmbm02200")
public class CMBM02200Controller extends AbstractXWebController {

    @Autowired
    private CMBM02200Service service;

    /**
    * @fn : selectCmbmBatchCtrlAuth
    * @brief : 배치관리 권한등록 - 배치프로그램 - 조회
    * @Method Name : selectCmbmBatchCtrlAuth
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오후 2:16:14 
    * @Author: Jin Sung Ha
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 26.        Jin Sung Ha     최초  생성
     *
    */
    @RequestMapping(value = "selectCmbmBatchCtrlAuth.do")
    public View selectCmbmBatchCtrlAuth(UiMapDto dto, Model model) throws Exception {        
        service.selectCmbmBatchCtrlAuth(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveCmbmBatchCtrlAuth
    * @brief : 배치관리 권한등록 - 배치프로그램 - 저장
    * @Method Name : saveCmbmBatchCtrlAuth
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오후 2:16:17 
    * @Author: Jin Sung Ha
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 26.        Jin Sung Ha     최초  생성
     *
    */
    @RequestMapping(value = "saveCmbmBatchCtrlAuth.do")
    public View saveCmbmBatchCtrlAuth(UiMapDto dto, Model model) throws Exception {        
        service.saveCmbmBatchCtrlAuth(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectCmbmBatchCtrls
    * @brief : 배치 프로그램 목록 조회
    * @Method Name : selectCmbmBatchCtrls
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오후 2:16:20 
    * @Author: Jin Sung Ha
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 26.        Jin Sung Ha     최초  생성
     *
    */
    @RequestMapping(value = "selectCmbmBatchCtrls.do")
    public View selectCmbmBatchCtrls(UiMapDto dto, Model model) throws Exception {        
        service.selectCmbmBatchCtrls(dto);
        return apply(dto, model);
    }
}
