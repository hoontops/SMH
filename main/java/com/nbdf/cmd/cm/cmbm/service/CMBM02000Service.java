package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 배치관리
 *
 * @ClassName CMBM02000Service.java
 * @Description CMBM02000Service Class
 * @Modification-Information
 *
 * @author Built1 JYYOUN
 * @since 2018.04.26
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2018 by Built1, All right reserved.
 * </pre>
 */
public interface CMBM02000Service {

	/**
    * @fn : selectBatchCtrlsList
    * @brief : 배치프로그램 리스트 조회
    * @Method Name : selectBatchCtrlsList
    * @remark
    * @Create Date: 2018.04.26 오후 06:00
    * @Author: JYYOUN
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일      		수정자   	수정내용
     *   ------------  	------  ----------
     *   2018.04.26     JYYOUN	최초  생성
     *
    */
    public void selectBatchCtrlsList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBatchParamsList
    * @brief : 배치프로그램 파라미터 조회
    * @Method Name : selectBatchParamsList
    * @remark
    * @Create Date: 2018.04.26 오후 06:00
    * @Author: JYYOUN
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일      		수정자   	수정내용
     *   ------------  	------  ----------
     *   2018.04.26     JYYOUN	최초  생성
     *
    */
    public void selectBatchParamsList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveBatchCtrls
    * @brief       : 배치프로그램 리스트 저장(신규/수정)
    * @Method Name : saveBatchCtrls
    * @Create Date : 2018.04.26 오후06:00
    * @Author      : JYYOUN
    * @param       : UiMapDto dto, Model model
    * @return      : View
    * @throws      : Exception
    */
    public void saveBatchCtrls(UiMapDto dto) throws Exception;

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
    public void saveBatchParams(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveBatchCtrlsParams
    * @brief       : 배치프로그램 리스트(신규/수정) & 파라미터(신규/수정/삭제) 저장
    * @Method Name : saveBatchCtrlsParams
    * @Create Date : 2018.04.26 오후06:00
    * @Author      : JYYOUN
    * @param       : UiMapDto dto, Model model
    * @return      : View
    * @throws      : Exception
    */
    public void saveBatchCtrlsParams(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectBatchProgramRunYn
    * @brief : 배치 프로그램 실행 여부 
    * @Method Name : selectBatchProgramRunYn
    * @remark
    * @Create Date: 2018 2018. 5. 23. 오전 10:57:54 
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
    public void selectBatchProgramRunYn(UiMapDto dto) throws Exception;
}
