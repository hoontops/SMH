package smh.tom.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: TOM01100Service.java
 * @Package		: smh.tom.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOM01100Service
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
public interface TOM01100Service {

    /**
     * @fn : selectTomToolStatusListForReportByEap
     * @brief : 치공구 현황 조회
     * @Method Name : selectTomToolStatusListForReportByEap
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectTomToolStatusListForReportByEap(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectTomToolHistoryListForReportByEqp
     * @brief : 이력 조회
     * @Method Name : selectTomToolHistoryListForReportByEqp
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectTomToolHistoryListForReportByEqp(UiMapDto dto) throws Exception;
     
    /**
     * @fn : selectTomToolUseStatusListForReportByEqp
     * @brief : 사용내역 조회
     * @Method Name : selectTomToolUseStatusListForReportByEqp
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectTomToolUseStatusListForReportByEqp(UiMapDto dto) throws Exception;
 }