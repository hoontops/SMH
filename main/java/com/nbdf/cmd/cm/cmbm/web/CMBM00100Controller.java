package com.nbdf.cmd.cm.cmbm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmbm.service.CMBM00100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;


/***
* @file: CMBM00100Controller.java
* @Package: com.nbdf.cmd.cm.cmbs.web
* @Project name: IFC MES시스템 구축
* @Type name: CMBM00100Controller
* @Company: Jeong Jun Myeong
* @Create Date: 2015. 6. 23. 오전 9:12:16
* @Author: Jeong Jun Myeong
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 12. 07.     Jeong Jun Myeong     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmbm00100")
public class CMBM00100Controller extends AbstractXWebController{

    @Autowired
    private CMBM00100Service service;

    /**
    * @fn : selectCustMst
    * @brief : 고객번호 조회
    * @Method Name : selectCustMst
    * @Create Date: 2015. 6. 23. 오전 9:13:06
    * @Author: Jeong Jun Myeong
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectCustMst.do")
    public View selectCustMst(UiMapDto dto, Model model) throws Exception {
        service.selectCustMst(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCboCenterList
    * @brief : 고객센터 combo용(조회)
    * @Method Name : selectCboCenterList
    * @Create Date: 2017. XX. XX. 오전 9:12:16
    * @Author: Jeong Jun Myeong
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectCboCenterList.do")
    public View selectCboCenterList(UiMapDto dto, Model model) throws Exception {
        service.selectCboCenterList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCboHaengjeongDongList
    * @brief : 행정동 combo용 조회
    * @Method Name : selectCboHaengjeongDongList
    * @Create Date: 2017. XX. XX. 오전 9:12:16
    * @Author: Jeong Jun Myeong
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectCboHaengjeongDongList.do")
    public View selectCboHaengjeongDongList(UiMapDto dto, Model model) throws Exception {
        service.selectCboHaengjeongDongList(dto);
        return apply(dto, model);
    }       

    /**
    * @fn : insertPiLogOfExcelDn
    * @brief :insertPiLogOfExcelDn
    * @Method Name : insertPiLogOfExcelDn
    * @Create Date: 2018. 11. 14. 오전 9:12:16
    * @Author: Jin Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "insertPiLogHistoryOfExcelDn.do")
    public View insertPiLogHistoryOfExcelDn(UiMapDto dto, Model model) throws Exception {
        service.insertPiLogHistoryOfExcelDn(dto);
        return apply(dto, model);
    }       

}