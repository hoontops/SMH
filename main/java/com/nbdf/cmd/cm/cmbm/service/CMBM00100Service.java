package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface CMBM00100Service { 

    /**
    * @fn    : selectCustMst
    * @brief : 고객번호 조회
    * @Method Name : selectCustMst
    * @Create Date: 2017. 12. 05. 오전 9:13:061
    * @Author: Jeong Jun Myeong
    * @param: UiMapDto dto
    * @return: View
    * @throws : Exception
    */
    public void selectCustMst(UiMapDto dto) throws Exception;

    /**
    * @fn : selectCboCenterList
    * @brief : 고객센터 combo용 (조회)
    * @Method Name : selectCboCenterList
    * @Create Date: 2017. XX. XX. 오전 9:12:16
    * @Author: built1
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */	
	public void selectCboCenterList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectCboHaengjeongDongList
    * @brief : 행정동 combo용  (조회)
    * @Method Name : selectCboHaengjeongDongList
    * @Create Date: 2017. XX. XX. 오전 9:12:16
    * @Author: built1
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */	
	public void selectCboHaengjeongDongList(UiMapDto dto) throws Exception;    
    /**
    * @fn : insertPiLogHistoryOfExcelDn
    * @brief : insertPiLogHistoryOfExcelDn
    * @Method Name : insertPiLogHistoryOfExcelDn
    * @Create Date: 2017. XX. XX. 오전 9:12:16
    * @Author: built1
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */	
	public void insertPiLogHistoryOfExcelDn(UiMapDto dto) throws Exception;    
}
